<!-- Please remove this file from your project -->
<template>
<div class="container">
    <v-app-bar light elevation="0" class="" color="white">

        <v-toolbar-title>
            <v-img :src="logo" contain width="120" height="30"></v-img>
        </v-toolbar-title>

    </v-app-bar>

    <v-card elevation="0" class="my-12 pa">
        <div class="d-flex">
            <v-btn icon @click="$router.back()" style="margin-top: 15px;">
                <v-icon large>mdi-arrow-left</v-icon>
            </v-btn>
            <v-card-title class="text-h5
            ">Check out</v-card-title>
        </div>

        <div class="container">
            <v-row>
                <v-col cols="12" md="5">

                    <v-card color="#eefcdd" elevation="0" class="pa-4 mb-4">

                        <form>
                            <v-row>
                                <v-col cols="12" sm="12">
                                    <h3>Shipping details</h3>
                                    <br>
                                    <h5>Contact information</h5>
                                    <label for="">We'll use this email to send you details and updates about your order.</label>
                                    <br>
                                    <v-text-field label="Email" outlined required></v-text-field>
                                </v-col>
                            </v-row>
                        </form>

                        <v-alert border="top" colored-border type="info" elevation="0">
                            Shipping Time: Estimated delivery in 35 days.Shipping is Covered by SwissLife

                        </v-alert>
                        <div>
                            <h4>Shipping address</h4>
                            Enter the address where you want your order delivered.
                        </div>
                        <form>
                            <v-row>
                                <v-col cols="12" md="12">
                                    <v-text-field label="Country" outlined required></v-text-field>
                                </v-col>
                                <v-col cols="12" md="4">
                                    <v-text-field label="First Name" outlined required></v-text-field>
                                </v-col>
                                <v-col cols="12" md="4">
                                    <v-text-field label="Last Name" outlined required></v-text-field>
                                </v-col>
                                <v-col cols="12" md="4">
                                    <v-text-field label="Address" outlined required></v-text-field>
                                </v-col>
                                <v-col cols="12" md="4">
                                    <v-text-field label="Company name (optional)" outlined required></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                    <v-text-field label="Town" outlined required></v-text-field>
                                </v-col>
                                <v-col cols="12" md="4">
                                    <v-text-field label="State" outlined required></v-text-field>
                                </v-col>
                                <v-col cols="12" md="4">
                                    <v-text-field label="Phone" outlined required></v-text-field>
                                </v-col>
                                <v-col cols="12" md="4">
                                    <v-text-field label="Postal code / ZIP" outlined required></v-text-field>
                                </v-col>
                            </v-row>
                        </form>
                    </v-card>

                </v-col>
                <v-col cols="12" md="7">
                    <div class="container">
                        <v-alert border="top" colored-border type="info" elevation="0">

                            Note: Orders are collected on the first working day of each month.
                        </v-alert>
                        <v-row>
                            <v-col cols="12" md="6">
                                <template>

                                    <v-list-item two-line>

                                        <div>
                                            <v-list-item-content>
                                                <v-list-item-subtitle>{{ totalItems }} items</v-list-item-subtitle>
                                                <v-list-item-title>Ksh/=<b> {{ numeral(total_price).format("0,0.0")  }}</b></v-list-item-title>

                                            </v-list-item-content>

                                           
                                                <div class="">
                                                    <p>Select payment method</p>
                                                    <v-select v-model="selectedOption" @change="checkPaymentMethod(selectedOption)" :items="['Mpesa', 'Card']" label="Select payment method" dense outlined></v-select>
                                                    <v-btn rounded color="green" :to="`checkout/${uid}`" style="color: aliceblue;" >Place Order</v-btn>
                                                    <div>
                                                        <br>
                                                        <div v-if="selectedOption === 'Mpesa'" class="d-flex" style="padding: 0.8rem;border-radius: 1rem;background-color: antiquewhite;color: black;">
                                                            <p style="font-size: 0.9rem;"> An STK push will prompted on the <b>{{ phonePrefix+phone_numer }}</b>
                                                                check for an mpesa prompting you to pay <b>{{ numeral(total_price).format("0,0") }}</b> ksh</p>
                                                        </div>
                                                        <br>
                                                        <v-text-field v-if="selectedOption === 'Mpesa'" v-model="phone_numer" :prefix="phonePrefix" placeholder="(7.. format)" label="Enter Phone Number" dense></v-text-field>
                                                        <v-btn v-if="selectedOption === 'Mpesa'" rounded color="green" @click="mpesaSTK()" style="color: aliceblue;" >Pay with Mpesa</v-btn>

                                                        <div v-if="selectedOption === 'Card'">
                                                            <div id="payment-element" class="container"></div>
                                                            <v-btn rounded color="green" style="color: aliceblue;" @click="payNow" >Pay with Card</v-btn>
                                                        </div>

                                                    </div>
                                              

                                            </div>

                                        </div>
                                        <br>
                                    </v-list-item>
                                </template>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-list three-line id="all_items_checkout">
                                    <v-list-item v-for="item in cart_items" :key="item.title">
                                        <v-list-item-icon>
                                            <div class="d-flex">

                                                <v-img height="50" contain width="50" :src=" item.image_url"></v-img>
                                            </div>
                                        </v-list-item-icon>

                                        <v-list-item-content>
                                            <v-list-item-title>{{ item.name }}</v-list-item-title>
                                            <br>
                                            <v-list-item-subtitle>Qty: {{ item.quantity }} | Ksh {{ item.price }}</v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-col>
                        </v-row>

                    </div>
                </v-col>
            </v-row>
        </div>
    </v-card>
</div>
</template>

<script>
import {
    loadStripe
} from '@stripe/stripe-js';
import axios from "axios";
import numeral from "numeral";
export default {
    name: 'NuxtTutorial',
    data() {
        return {
            amountError: "",
            amount: 0,
            stripe: null,
            elements: null,
            selectedPaymentMethod: "card",
            clientSecret: "",
            phonePrefix: '254',
            showCard: false,
            showMpesa: false,
            logo: require("@/assets/logo.png"),
            numeral,
            pay_method: '',
            totalItems: 0,
            cart_items: [],
            total_items: 0,
            total_price: 0,
            phone_numer: "",
            user_id: 12,
            order_id: 0,
            selectedOption: '',
            pubKey: null,
            uid: this.$route.params.id,
        }
    },
    async mounted() {
        this.pubKey = await axios.get('http://localhost:5000/api/card').then((res) => {
            console.log(res.data.publicKey);
            this.init(res.data.publicKey);
            return res.data.publicKey;
        });
        this.fetchCartItems();
    },
    methods: {
        async init(val) {
            this.stripe = await loadStripe(val); // Use your Publishable Key

        },
        async initializePayment() {

            const res = await fetch("http://localhost:5000/api/card/create-payment-intent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    amount: Number(this.total_price), // Example: $10
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
        },
        checkPaymentMethod(val) {
            if (val == "Card") {
                this.initializePayment();
            } else {
                this.viewItemDialog = true;
            }
        },
        async mpesaSTK() {
            let phone = that.phonePrefix + that.phoneNumber;
            if (phone.length != 12) {
                that.snackbarTextError = "Phone number should be 12 digits including country code";
                that.snackbarError = true;
                return;
            }
            try {
                const res = await axios.post("http://localhost:5000/api/mpesa/stkpush", {
                    user_id: 232,
                    order_id: this.order_id,
                    phone: this.phone_numer,
                    amount: this.total_price,

                });
                console.log(res.data);
            } catch (err) {
                console.error(err);
                alert("❌ Failed ", err.message);
            }
        },
        async fetchCartItems() {
            try {
                const response = await axios.get(`http://localhost:5000/api/cart/total/${this.$route.params.id}`);
                this.cart_items = response.data.items;
                this.totalItems = response.data.totalItems;
                this.total_price = response.data.totalAmount;
            } catch (error) {
                console.error("Error fetching cart items:", error);
            }
        },
    }
}
</script>

<style scoped>
/* #all_items_checkout {
    --scrollbarBG: #ffffff;
    --thumbBG: #ffffff;
    scrollbar-width: thin;
    scrollbar-color: var(--thumbBG) var(--scrollbarBG);
    overflow-y: hidden;
    width: 100%;
    align-items: center;
    bottom: 0;
    max-height: 400px;
    justify-content: center;
} */
</style>
