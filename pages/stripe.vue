<template>
<div class="">
  <br />
    <!-- <v-progress-linear v-show="progress_bar" indeterminate color="primary"></v-progress-linear> -->
    <br />
    <br>
  <v-row>
    <v-col cols="12" sm="12" md="12">
        <div class="">
          <nuxt-link style="text-decoration: none; color: red; margin:20px" to="/">
              <v-chip class="ma-2" color="red">
                <v-icon color="white">mdi-chevron-left</v-icon>
              </v-chip>
            </nuxt-link>
        </div>
      </v-col>
    <v-col cols="12" md="6" sm="6">
     <div class="container">
      <h2 style="margin:30px;color:#ff5e00">Make a deposit</h2>
     </div>
    
    </v-col>
    <v-col cols="12" md="6" sm="6">
      <div class="container">

      <v-stepper  v-model="e6"
      vertical   style="color: red;">

        <div class="container">

    <br>
    <br>
          <v-stepper-step  step="1" style="color: blue;">
              <div style="margin:6px;padding:5px;"><h3 style="color:#ff5e00">Select Payment method </h3>
                <small style="">Provide a payment method then proceed</small></div>
          </v-stepper-step>

          <v-stepper-content step="1"  :complete="e6 > 1" >

              <select  v-model="selectedPaymentMethod " style="margin:10px;width:250px;border-radius: solid 28px grey;border-style: solid;border-color: #2f2c2c41;padding:18px">
                  <option value="card">Card</option>
                  <option value="mobilepay">Mobile Money</option>
                  <option value="bank_transfer">Bank Transfer</option>
                  <option value="wechat_pay">WeChat Pay</option>
                  <option value="alipay">Alipay</option>
                  <option value="ideal">iDEAL</option>
                  <option value="bancontact">Bancontact</option>
              </select>


              <div  class="container">
                <v-btn @click="e6 = 2" style="color: #ff5e00;" >Proceed</v-btn>
              </div>


      </v-stepper-content>



          <v-stepper-step  step="2" style="color: blue;">
            <div style="margin:6px">
              <h3 style="color:#ff5e00">Enter amount</h3>

              <small style="padding:3px;">Provide and amount in USD</small></div>
          </v-stepper-step>

          <v-stepper-content   step="2" style="color: blue;">

              <v-card-actions>
                <v-text-field v-model="amount"  rounded outlined label="Amount" type="number" required></v-text-field>
                <v-spacer></v-spacer>
              </v-card-actions>
              <div class="container"> <h4 style="color:red">{{ amountError }}</h4></div>
              <v-btn style="color: #ff5e00;" color="primary" @click="initializePayment()">
                  Proceed to pay
              </v-btn>
              <v-btn text  @click="e6 = 1">
                  Cancel
              </v-btn>
          </v-stepper-content>

          <v-stepper-step step="2" style="color: blue;">
            <div style="margin:6px">
              <h3 style="color:#ff5e00">Enter Provide card details</h3>
              <small style="padding:3px;">Provide required card details and proceed</small>
            </div>

          </v-stepper-step>

          <v-stepper-content step="3">


                  <div id="payment-element" class="container"></div>

                  <div  class="container">
                    <v-btn @click="payNow" style="color:#ff5e00">Pay Now</v-btn>
                    <v-btn text  @click="e6 = 1">
                  Cancel
              </v-btn>
                  </div>


          </v-stepper-content>


        </div>


      </v-stepper>
  </div>

    </v-col>

  </v-row>



</div>
</template>

<script>
import {
    loadStripe
} from '@stripe/stripe-js';
import axios from 'axios';

export default {
    data() {
        return {
          amountError: "",
            e6: 1,
            amount: 0,
            stripe: null,
            elements: null,
            selectedPaymentMethod: "card",
            clientSecret: "",
        };
    },

    async mounted() {
        this.pubKey = await axios.get('http://localhost:5000/api/card').then((res) => {
            console.log(res.data.publicKey);
             this.init(res.data.publicKey);
            return res.data.publicKey;
        });
    },

    created() {

    },

    methods: {
        nextStep(n) {
            if (n === this.steps) {
                this.e1 = 1
            } else {
                this.e1 = n + 1
            }
        },
        async init(val) {
            this.stripe = await loadStripe(val); // Use your Publishable Key

        },

        async initializePayment() {
          if(this.amount == 0){
            this.amountError = "Please provide a valid amount"
          }else{
            this.e6 = 3;
            this.amountError = "";
            const res = await fetch("http://localhost:5000/api/card/create-payment-intent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    amount: Number(this.amount), // Example: $10
                    currency: "usd",
                    paymentMethodType: this.selectedPaymentMethod,
                }),
            });

            const {
                clientSecret
            } = await res.json();
            this.clientSecret = clientSecret;

            // Initialize Stripe Elements with clientSecret
            this.elements = this.stripe.elements({
                clientSecret
            });
            const paymentElement = this.elements.create("payment");
            paymentElement.mount("#payment-element");
          }
        },

        async payNow() {
            const {
                error
            } = await this.stripe.confirmPayment({
                elements: this.elements,
                confirmParams: {
                    return_url: "http://localhost:3000/payment-success"
                },
            });

            if (error) alert(error.message);
        }
    },

    watch: {
        selectedPaymentMethod() {
            this.initializePayment(); // Re-initialize when payment method changes
        }
    }
};
</script>

<style scoped>
* {
    font-family: "Lato";
}

v-stepper-step_step {
    background-color: #1976d2 !important;
    color: white !important;
}
</style>