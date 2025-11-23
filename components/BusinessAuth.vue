<template>
<v-card color="white" max-width="1200">
    <div class="parallax_about">
        <div class="container" style="padding: 10px;">

            <v-row v-resize="onResize">
                <v-col cols="12" md="12">
                    <div class="d-flex">
                        <div class="container" v-show="!showBurger">
                            <v-card class="box" elevation="0" style="padding: 0px;">
                                <v-card-actions>
                                </v-card-actions>
                                <div class="container">
                                    <v-card-title class="" style="padding-top: 180px;">
                                        <h1>Welcome back</h1>
                                    </v-card-title>
                                    <br>

                                    <!-- <div class="">
                                        <v-img :src="reg" height="200" contain v-show="!showBurger"></v-img>
                                    </div> -->
                                    <v-card-text>
                                        <h3>Don't have an account ?</h3>
                                        <p>Login in back into your account and continue shopping with us.</p>
                                    </v-card-text>

                                    <v-card-actions class="text-start">
                                        <v-btn large outlined rounded width="50%" @click="registerLayout = !registerLayout">
                                            Sign Up
                                            <v-icon right dark>
                                                mdi-account
                                            </v-icon>
                                        </v-btn>
                                    </v-card-actions>
                                </div>
                            </v-card>
                        </div>
                        <div style="background-color: white;">
                            <v-card class="container" elevation="0">

                                <v-card v-show="!registerLayout" elevation="0" color="white">

                                    <v-form ref="form" v-model="valid" class="container">
                                        <v-card-action>
                                            <div class="d-flex">
                                                <v-card-title>
                                                    <h3>Registers</h3>
                                                </v-card-title>
                                                <v-spacer></v-spacer>

                                                <v-card-subtitle @click="registerLayout = true" v-show="showBurger">

                                                    <div class="d-flex">
                                                        <p style="color: grey;margin-top: 15px;">Login</p>
                                                        <v-icon>mdi-chevron-right</v-icon>
                                                    </div>
                                                </v-card-subtitle>

                                            </div>
                                        </v-card-action>

                                        <div class="">
                                            <v-row class="">
                                                <v-col cols="12" md="12">
                                                    <div class="text-start">
                                                        <span style="font-size: 0.9rem; margin-left: 10px;">Connect with</span>
                                                        <div class="d-flex">
                                                            <v-btn x-large outlined style="margin: 6px;" width="40%">
                                                                <v-icon center dark larg>
                                                                    mdi-google
                                                                </v-icon>
                                                            </v-btn>
                                                            <v-btn x-large outlined style="margin: 6px;" width="40%">
                                                                <v-icon center dark larg>
                                                                    mdi-facebook
                                                                </v-icon>
                                                            </v-btn>
                                                        </div>
                                                    </div>

                                                </v-col>
                                                <v-col cols="12" md="6">
                                                    <v-text-field v-model="registration_number" label="Registration Number" @change="checkRegNo" :rules="[v => !!v || 'Required']" />
                                                    <v-alert v-if="exists" type="error" dense>
                                                        Business already exists: {{ existingBusiness.business_name }}
                                                    </v-alert>
                                                </v-col>

                                                <v-col cols="12" md="6">
                                                    <v-text-field v-model="business_name" label="Business Name" />

                                                </v-col>

                                                <v-col cols="12" md="6">
                                                    <v-select v-model="business_type" :items="['Gym','Clinic','Bulk Buyer','Other']" label="Business Type" />

                                                </v-col>
                                                <v-col cols="12" md="6">
                                                    <v-text-field v-model="industry_category" label="Industry Category" />

                                                </v-col>

                                                <v-col cols="12" md="6">
                                                    <v-text-field v-model="delivery_address" label="Delivery Address" />
                                                </v-col>
                                                <v-col cols="12" md="12">
                                                    <v-textarea v-model="description" label="Description" filled dense />

                                                </v-col>
                                                <v-col cols="12" md="6">
                                                    <v-text-field v-model="contact_full_name" label="Contact Name" />

                                                </v-col>
                                                <v-col cols="12" md="6">
                                                    <v-text-field v-model="contact_role" label="Contact Role" />

                                                </v-col>

                                                <v-col cols="12" md="6">
                                                    <v-text-field v-model="contact_phone" label="Contact Phone" />

                                                </v-col>

                                                <v-col cols="12" md="6">
                                                    <v-text-field v-model="contact_email" label="Email" />
                                                </v-col>

                                                <v-col cols="12" md="6">
                                                    <v-text-field v-model="password" label="Password" />
                                                </v-col>
                                                <v-col cols="12" md="6">
                                                    <v-text-field v-model="password2" label="Retry password." />
                                                </v-col>

                                                <v-col cols="12" md="12">
                                                    <div>
                                                        <v-checkbox v-model="checkbox">
                                                            <template v-slot:label>
                                                                <div>
                                                                    I agree to the 
                                                                    <v-tooltip bottom>
                                                                        <template v-slot:activator="{ on }">
                                                                            <a target="_blank" href="https://vuetifyjs.com" @click.stop v-on="on">
                                                                                Terms and conditions
                                                                            </a>
                                                                        </template>
                                                                        Opens in new window
                                                                    </v-tooltip>
                                                                    
                                                                </div>
                                                            </template>
                                                        </v-checkbox>
                                                    </div>
                                                    <div>

                                                    </div>
                                                    <v-btn color="#89C53F" @click="submit" width="70%" style="color: white;">Register</v-btn>
                                                </v-col>
                                            </v-row>

                                        </div>

                                    </v-form>
                                </v-card>
                                <v-card v-show="registerLayout" elevation="0" color="white" style="margin-top: 50px;">
                                    <v-card-action>
                                        <div class="d-flex">
                                            <v-card-title>
                                                <h3>Login</h3>
                                            </v-card-title>
                                            <v-spacer></v-spacer>

                                            <v-card-subtitle @click="registerLayout = false" v-show="showBurger">

                                                <div class="d-flex">
                                                    <p style="color: grey;margin-top: 15px;">Register</p>
                                                    <v-icon>mdi-chevron-right</v-icon>
                                                </div>
                                            </v-card-subtitle>

                                        </div>
                                    </v-card-action>

                                    <v-form ref="form" v-model="valid" class="container">

                                        <p style="font-size:0.7rem;">Login in back into your account and continue shopping with us.</p>

                                        <v-row class="">

                                            <v-col cols="12" md="12">
                                                <v-text-field v-model="business_reg_no" label="Business Reg No" type="alphanumeric" required />
                                            </v-col>

                                            <v-col cols="12" md="12">
                                                <v-text-field v-model="email" label="Email Address" type="email" required />

                                            </v-col>

                                            <v-col cols="12" md="12">
                                                <v-text-field v-model="password" label="Password" type="password" required />
                                            </v-col>
                                            <v-col cols="12" md="12">
                                                <div>
                                                    <div class="container text-center">
                                                        <v-btn color="#89C53F" @click="submit" width="100%" style="color: white;">Log in</v-btn>
                                                    </div>
                                                    <div class="text-center">
                                                        Or Login With
                                                    </div>
                                                    <div class="container text-center">
                                                        <div class="d-flex">
                                                            <v-spacer></v-spacer>
                                                            <v-btn x-large outlined style="margin: 6px;" width="40%">
                                                                <v-icon center dark>
                                                                    mdi-google
                                                                </v-icon>
                                                            </v-btn>
                                                            <v-btn x-large outlined style="margin: 6px;" width="40%">
                                                                <v-icon center dark>
                                                                    mdi-facebook
                                                                </v-icon>
                                                            </v-btn>
                                                            <v-spacer></v-spacer>
                                                        </div>
                                                    </div>
                                                </div>

                                            </v-col>

                                        </v-row>

                                    </v-form>

                                </v-card>
                            </v-card>
                        </div>
                    </div>
                </v-col>

            </v-row>
        </div>
    </div>

</v-card>
</template>

<script>
import {
    v4 as uuidv4
} from "uuid";

import logo from "@/assets/logo.png";
import reg from "@/assets/register.svg";

export default {
    data() {
        return {
            windowSize: {
                x: window.innerHeight,
                y: window.innerWidth,
            },
            checkbox: false,
            reg,
            loginLayout: false,
            registerLayout: true,
            showBurger: false,
            logo,
            drawer: false,
            valid: true,
            exists: false,
            existingBusiness: {},
            registration_number: "",
            business_name: "",
            business_type: "",
            industry_category: "",
            description: "",
            contact_full_name: "",
            contact_role: "",
            contact_email: "",
            contact_phone: "",
            delivery_address: ""
        };
    },

    methods: {
        onResize() {
            this.windowSize = {
                x: window.innerWidth,
                y: window.innerHeight,
            };
            console.log("size", this.windowSize.x);
            if (this.windowSize.x < 950) {
                this.showBurger = true;
            } else {
                this.showBurger = false;
            }
            return this.windowSize;
        },
        async scrollToSection1(val) {
            this.$router.push({
                path: `/${val}`,
            });
        },
        async checkRegNo() {
            if (!this.registration_number) return;

            const res = await this.$axios.$get(
                `/api/business/check/reg?regno=${this.registration_number}`
            );

            this.exists = res.exists;
            this.existingBusiness = res.business || {};
        },

        async submit() {
            if (this.exists) {
                alert("Business already registered.");
                return;
            }

            const uid = this.$store.state.authUser.uid; // Firebase UID

            await this.$axios.$post("/api/business/register", {
                uid,
                registration_number: this.registration_number,
                business_name: this.business_name,
                business_type: this.business_type,
                industry_category: this.industry_category,
                description: this.description,
                contact_full_name: this.contact_full_name,
                contact_role: this.contact_role,
                contact_email: this.contact_email,
                contact_phone: this.contact_phone,
                delivery_address: this.delivery_address
            });

            alert("Business registered successfully!");
            this.$router.push("/dashboard");
        }
    }
};
</script>

<style scoped>
.box {
    background-color: rgb(255 255 255 / 30%);
    backdrop-filter: blur(5px);
    height: 100vh;
}

.parallax_about {
    /* Background image carousel/2.jpg */
    background-image: url('~/assets/carousel/2.jpg');
    background-attachment: fixed;
    background-position: center;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
}

#nav_bar_links {
    color: black;
    font-weight: 500;

    font-size: 16px;
    transition: color 0.3s;
    background-color: rgba(206, 243, 211, 0.226);
    padding: 8px;
    border-radius: 10px;
}

#link {
    color: #000;
    font-weight: 800;
    transition: 0.3s;
}

#link:hover {
    color: red;
    font-weight: 800;
}
</style>
