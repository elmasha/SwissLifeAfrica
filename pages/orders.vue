<template>
<div>
    <div>
        <v-app-bar light elevation="0" class="" color="white" fixed>

            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">

                    <v-app-bar-nav-icon v-show="showBurger" light v-bind="attrs" v-on="on" color="black"></v-app-bar-nav-icon>
                </template>
                <v-list>
                    <!-- <v-list-item v-for="(item, index) in items" :key="item.title">
                                <v-list-item-action @click="checkNav(item.title)">{{ item.title }}</v-list-item-action>
                                <v-list-item-title></v-list-item-title>
                            </v-list-item> -->

                    <v-list-item> <a id="link" @click.prevent="scrollToSection1('')" style="margin: 8px;">Home</a></v-list-item>
                    <v-list-item><a id="link" @click.prevent="scrollToSection1('')" style="margin: 8px;">About</a></v-list-item>
                    <v-list-item><a id="link" @click.prevent="scrollToSection1('shop')" style="margin: 8px;">Shop</a></v-list-item>
                    <v-list-item> <a id="link" @click.prevent="scrollToSection1('')" style="margin: 8px;">Team</a></v-list-item>
                    <v-list-item> <a id="link" @click.prevent="scrollToSection1('certifications')" style="margin: 8px;">Certifications</a></v-list-item>
                    <v-list-item> <a id="link" @click.prevent="scrollToSection1('')" style="margin: 8px;">FAQ</a></v-list-item>
                    <v-list-item> <a id="link" @click.prevent="scrollToSection1('')" style="margin: 8px;">Contact</a></v-list-item>
                    <v-list-item><a id="link" @click.prevent="scrollToSection1('')" style="margin: 8px;">terms</a></v-list-item>

                </v-list>
            </v-menu>

            <v-toolbar-title>
                <nuxt-link style="text-decoration: none;" to="/">
                    <v-img :src="logo" contain width="120" height="30"></v-img>
                </nuxt-link>
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <div v-show="!showBurger" id="nav_bar_links">
                <a id="link" @click.prevent="scrollToSection1('')" style="margin: 8px;">Home</a>
                <a id="link" @click.prevent="scrollToSection1('')" style="margin: 8px;">About</a>
                <a id="link" @click.prevent="scrollToSection1('shop')" style="margin: 8px;">Shop</a>
                <a id="link" @click.prevent="scrollToSection1('')" style="margin: 8px;">Team</a>
                <a id="link" @click.prevent="scrollToSection1('certifications')" style="margin: 8px;">Certifications</a>
                <a id="link" @click.prevent="scrollToSection1('')" style="margin: 8px;">FAQ</a>
                <a id="link" @click.prevent="scrollToSection1('')" style="margin: 8px;">Contact</a>
                <a id="link" @click.prevent="scrollToSection1('')" style="margin: 8px;">terms</a>
            </div>
            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-account</v-icon>
            </v-btn>

            <div class="cart-container d-flex align-center">
                <v-btn icon class="cart-btn" color="primary" @click="drawer2 = !drawer2">
                    <v-icon medium>mdi-cart-outline</v-icon>
                    <span v-if="totalItems > 0" style="background-color: red; color: white; border-radius: 360px;padding: 3px; font-size: 0.7rem; font-weight: 1000;">{{ totalItems}}</span>

                    <!-- <v-badge v-if="totalItems > 0" :content="totalItems" style="margin-right: 30px;margin-top: 10px; width: 100%;" color="red" overlap bordered class="cart-badge">{{ totalItems}}</v-badge> -->
                </v-btn>
            </div>
            <v-btn icon @click="$fire.auth.signOut()" v-if="show_auth">
                <v-icon>mdi-logout</v-icon>
            </v-btn>

        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute right style="margin-top: 120px;" elevation="0">
        </v-navigation-drawer>
    </div>
    <v-card color="white parallax_about " elevation="0" style="margin-top: 40px;">
        <v-row v-resize="onResize">

            <v-col cols="12" sm="12" md="12"> </v-col>

            <v-col cols="12" sm="12" md="12">

                <div class="container">
                    <div class="d-flex">
                        <div>

                            <h1 style="font-size: 1.9rem;">Orders</h1>

                            <label for="">Status</label>
                            <v-chip-group column>
                                <v-chip color="black" text-color="white" small @click="Fetch_Products">All</v-chip>
                                <v-chip color="black" text-color="white" small @click="search_with_categories('Energy')">Pending</v-chip>
                                <v-chip color="black" outlined text-color="black" @click="search_with_categories('anti-aging')" small>Cancled</v-chip>
                            </v-chip-group>
                        </div>
                        <v-spacer></v-spacer>

                    </div>

                </div>
            </v-col>
            <v-col cols="12" sm="6" md="6">
                <div class="container" style="padding:0px; background-color: aliceblue;border-radius: 12px solid ;">
                    <v-card  elevation="0" class="pa-0" v-show="showBurger">
                        <div class="">
                            <div class="">
                                <v-alert border="left" colored-border type="info" elevation="0">
                                    Shipping Time: Estimated delivery in 35 days.Shipping is Covered by SwissLife

                                </v-alert>

                                <v-alert border="left" colored-border type="info" elevation="0">

                                    Note: Orders are collected on the first working day of each month.
                                </v-alert>
                            </div>
                        </div>
                    </v-card>
                    <v-card elevation="0">
                        <div class="container" id="all_items3">
                            <div class="row">

                                <div v-for="(order, id) in orders" :key="id" class="col-md-12">

                                    <v-card class="mx-auto" max-width="800" outlined>
                                        <!-- <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img> -->

                                        <div class="d-flex">
                                            <div>
                                                <v-card-title>
                                                    <h4>Order ID:#{{ order.id }}</h4>
                                                </v-card-title>

                                                <v-card-subtitle>
                                                    <div>
                                                        fulfillment status <b>{{ order.fulfillment_status }}</b>
                                                    </div>
                                                    <div>
                                                        <h4 style="font-size: 1.0rem; padding: 6px;"> Total Ksh <b>{{ numeral(order.total_amount).format("0,0.0") }}</b></h4>
                                                    </div>
                                                </v-card-subtitle>
                                            </div>
                                            <v-spacer></v-spacer>
                                            <div class="text-left">
                                                <v-card-subtitle>
                                                    <h4> Status <b>{{ order.status }}</b> </h4>
                                                </v-card-subtitle>

                                                <v-card-subtitle>
                                                    <h4> Paymnent method <b>{{ order.payment_method }}</b> </h4>
                                                </v-card-subtitle>
                                            </div>
                                        </div>

                                        <v-expand-transition>
                                            <div>
                                                <v-divider></v-divider>

                                                <v-card-text>
                                                    <div class="row">
                                                        <div v-for="nom in order.items" :key="nom.product_id">
                                                            <div class="nominee-header">
                                                                <div class="container">
                                                                    <div class="d-flex">
                                                                        <div>
                                                                            <v-img :src="nom.image_url" contain height="50" width="50"></v-img>
                                                                        </div>
                                                                        <div>
                                                                            Qty {{ nom.quantity }}
                                                                        </div>
                                                                    </div>

                                                                    <h5> <strong>{{ nom.name }}</strong></h5>
                                                                    <p style="margin: 3px;">Ksh <b>{{numeral( nom.price).format("0,0.0")}}</b> </p>
                                                                </div>
                                                            </div>
                                                            <br>

                                                        </div>

                                                    </div>
                                                </v-card-text>
                                            </div>
                                        </v-expand-transition>
                                    </v-card>

                                </div>
                            </div>
                        </div>

                    </v-card>
                </div>
            </v-col>
            <v-col cols="12" sm="6" md="6">
                <v-card color="#eefcdd" elevation="0" class="pa-4" v-show="!showBurger">
                    <div class="container">
                        <div class="container">
                            <v-alert border="left" colored-border type="info" elevation="0">
                                Shipping Time: Estimated delivery in 35 days.Shipping is Covered by SwissLife

                            </v-alert>

                            <v-alert border="left" colored-border type="info" elevation="0">

                                Note: Orders are collected on the first working day of each month.
                            </v-alert>
                            <v-img :src="ord" contain height="400"></v-img>
                        </div>
                    </div>
                </v-card>

            </v-col>
        </v-row>
        <div>

        </div>
        <v-snackbar color="primary accent-8" :timeout="6000" v-model="snackbar_s" centered bottom>
            {{ snackbarText_s }}
        </v-snackbar>
        <v-snackbar color="success" :timeout="2000" v-model="snackbar" outlined center>
            {{ snackbarText }}
        </v-snackbar>
        <v-snackbar color="error" :timeout="2500" v-model="snackbar2" outlined center>
            {{ snackbarText2 }}
        </v-snackbar>

        <v-dialog v-model="add_Cart" elevation="0" class="text-center" :scrollable="false" max-width="400">

            <v-card>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="add_Cart = false">
                        <v-icon color="red">mdi-close</v-icon>
                    </v-btn>
                </v-card-actions>
                <v-img :src="cartProduct.image_url" contain height="150"></v-img>
                <v-card-subtitle style=" margin-top: 20px;">
                    <b style="font-size: 1.3rem; font-weight: 700; color: black;"> {{ cartProduct.name }}
                    </b>
                </v-card-subtitle>
                <v-card-text>
                    Now
                    <br>
                    <b style="font-size: 1.2rem; font-weight: 700; color: black;">Ksh {{ numeral(cartProduct.price * quantity).format("0,0")}}</b>
                </v-card-text>
                <v-card-actions>

                    <div>
                        <p>Quantity</p>
                        <div class="d-flex">
                            <v-btn icon @click="quantity--">
                                <v-icon>mdi-minus</v-icon>
                            </v-btn>
                            <p><b style="margin-top: 8px;  font-size: 1.3rem; margin-left: 6px;margin-right: 6px;"> {{ quantity }}</b></p>
                            <v-btn icon @click="quantity++">
                                <v-icon>mdi-plus</v-icon>
                            </v-btn>
                        </div>
                    </div>
                    <v-spacer></v-spacer>
                    <v-btn rounded color="black" style="color: aliceblue;" @click="addToCart(cartProduct)">Add Item <v-icon>mdi-cart</v-icon>
                    </v-btn>

                </v-card-actions>
            </v-card>

        </v-dialog>

        <v-dialog v-model="BsAuth" elevation="0" class="text-center auth" light :scrollable="false" max-width="1200">
            <business-auth></business-auth>
        </v-dialog>

    </v-card>
</div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import numeral from "numeral";
import logo from "@/assets/logo.png";
import ord from "@/assets/ord.svg";
import BusinessAuth from "../components/BusinessAuth.vue"

import {
    uuid
} from "vue-uuid";

const keyValue = "fd85b4945YF'i"; // your key value (eg: key)
const ivKey = "smslt";

export default {
    name: "shop",
    components: {
        BusinessAuth,
    },
    data() {
        return {
            ord,
            scrollInvoked: 0,
            BsAuth: false,
            showProgressCart: false,
            add_Cart: false,
            cartProduct: false,
            showBurger: false,
            showHeroCard: false,
            heroHeight: 700,
            backToTop: false,
            windowSize: {
                x: window.innerHeight,
                y: window.innerWidth,
            },
            numeral,
            user_id: 1,
            uid: "grace",
            searchProduct: "",

            product_id: null,
            quantity: 1,
            price: null,
            orders: [],
            totalItems: 0,
            cart_items: [],
            total_items: 0,
            total_price: 0,
            b2c: false,
            errorResponse: "",
            successResponse: "",
            Amount: "",
            Phone: null,
            UserName: "",
            snackbar_s: false,
            snackbarText_s: "",
            snackbar: false,
            snackbar2: false,
            snackbarText: "",
            snackbarText2: "",
            status: false,
            drawer2: false,
            drawer: false,
            show_auth: false,
            logo,
            exists: false,
            cart_tag: "reatail",
            UID: "",
        };
    },
    methods: {
        checkBusiness() {
            let that = this;
            axios
                .get(`https://swisslifeserver-production.up.railway.app/api/business/check/uid?uid=${this.UID}`, {})
                .then(function (response) {
                    if (response.status == 200) {
                        // that.snackbar = true;
                        // that.snackbarText = response.data;
                        console.log("Bs", response.data);

                        if (response.data.exists == true) {
                            that.BsAuth = false;
                            that.$router.push(`/bulk`);
                        } else if (response.data.exists == false) {
                            that.BsAuth = true;
                        }

                    } else if (response.status == 400) {

                    }
                })
                .catch(function (error) {
                    console.log(error);

                });

        },
        checkUser() {
            if (this.$fire.auth.currentUser != null) {
                // alert("Auth: " + true + "UID" +this.$fire.auth.currentUser.uid);
                console.log(this.$fire.auth.currentUser.uid);
                this.UID = this.$fire.auth.currentUser.uid;
                this.show_auth = true;
            } else {
                this.show_auth = false;
                this.UID = "elmasha";
                console.log(this.UID);
            }
        },
        onScroll() {
            this.scrollInvoked++
        },
        async scrollToSection1(val) {
            this.$router.push({
                path: `/${val}`,
            });
        },
        onResize() {
            this.windowSize = {
                x: window.innerWidth,
                y: window.innerHeight,
            };
            console.log("size", this.windowSize.x);
            if (this.windowSize.x < 950) {
                this.showBurger = true;
                this.showHeroCard = true;
            } else {
                this.showBurger = false;
            }
            return this.windowSize;
        },
        logout() {
            this.$fire.auth.signOut();
            window.location.reload(true);
        },
        async addToCart(product) {
            let that = this;
            try {
                const res = await axios.post("https://swisslifeserver-production.up.railway.app/api/cart/add", {
                    uid: this.cart_tag + "_" + this.UID,
                    image_url: product.image_url,
                    product_id: product.id,
                    quantity: this.quantity,
                    price: product.price,
                });
                that.Fetch_Orders();
                that.add_Cart = false;
                that.snackbar = true;
                that.snackbarText = "✅ Item added to cart!";
                console.log(res.data);
            } catch (err) {
                console.error(err);
                alert("❌ Failed to add item to cart.");
            }
        },
        async removeFromCart(item) {
            let that = this;
            this.showProgressCart = true;
            try {
                const res = await axios.post("https://swisslifeserver-production.up.railway.app/api/cart/remove/", {
                    uid: this.cart_tag + "_" + this.UID, // 👈 Data must go inside `data`
                    product_id: item.product_id, // 👈 This will now appear in req.body                 
                });

                that.Fetch_Orders();
                that.snackbar = true;
                that.snackbarText = "✅ Item removed from cart!";
                that.showProgressCart = false;
                console.log(res.data);
            } catch (err) {
                that.showProgressCart = false;
                console.error("❌ Remove failed:", err);
                alert("❌ Failed to remove item from cart.");
            }
        },
        async clearCart() {
            this.showProgressCart = true;
            try {
                const res = await axios.post("https://swisslifeserver-production.up.railway.app/api/cart/clear/", {
                    uid: this.cart_tag + "_" + this.UID, // 👈 Data must go inside `data`
                });
                this.Fetch_Orders();
                this.snackbar = true;
                this.snackbarText = "✅Cart cleard!";
                this.showProgressCart = false;
                console.log(res.data);
            } catch (err) {
                console.error("❌ Remove failed:", err);
                alert("❌ Failed to remove item from cart.");
                this.showProgressCart = false;
            }
        },
        async Fetch_Products() {
            let that = this;
            that.products.splice(that.products);
            axios
                .get("https://swisslifeserver-production.up.railway.app/api/products/getAll", {})
                .then(function (response) {
                    if (response.status == 200) {
                        // that.snackbar = true;
                        // that.snackbarText = response.data;
                    } else if (response.status == 400) {
                        that.snackbar2 = true;
                        that.snackbarText2 = response.data;
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    that.snackbarText2 = error;
                    that.snackbar2 = true;
                });
        },
        async Search_Products(val) {
            if (val === "") {
                this.Fetch_Products();
            }
            let that = this;
            that.products.splice(that.products);
            axios
                .get("https://swisslifeserver-production.up.railway.app/api/products/search/?query=" + val, {})
                .then(function (response) {
                    if (response.status == 200) {
                        // that.snackbar = true;
                        // that.snackbarText = response.data;
                        if (that.products.length === 0) {
                            that.snackbar = true;
                            that.snackbarText = " Items not available";
                        } else {

                        }
                        that.products = response.data;
                    } else if (response.status == 400) {
                        that.Fetch_Products();
                        that.snackbar2 = true;
                        that.snackbarText2 = response.data;
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    that.snackbarText2 = error;
                    that.snackbar2 = true;
                });
        },
        async search_with_categories(val) {
            if (val === "") {
                this.Fetch_Products();
            }
            let that = this;
            that.products.splice(that.products);
            axios
                .get("https://swisslifeserver-production.up.railway.app/api/products/search/?query=" + val, {})
                .then(function (response) {
                    if (response.status == 200) {
                        // that.snackbar = true;
                        // that.snackbarText = response.data;
                        that.products = response.data;
                        if (that.products.length === 0) {
                            that.snackbar = true;
                            that.snackbarText = " Items not available";
                        } else {

                        }
                    } else if (response.status == 400) {
                        that.Fetch_Products();
                        that.snackbar2 = true;
                        that.snackbarText2 = response.data;
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    that.snackbarText2 = error;
                    that.snackbar2 = true;
                });
        },
        async Fetch_Orders() {
            let that = this;
            that.orders.splice(0, that.orders.length);
            axios
                .get("https://swisslifeserver-production.up.railway.app/api/orders/user/" + that.UID, {})
                .then(function (response) {
                    if (response.status == 200) {
                        // that.snackbar = true;
                        // that.snackbarText = response.data;
                        that.orders = response.data;
                        console.log("Order", response.data);

                    } else if (response.status == 400) {
                        that.snackbar2 = true;
                        that.snackbarText2 = response.data;
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    that.snackbarText2 = error;
                    that.snackbar2 = true;
                });
        },

        loginAnonymously1() {
            this.$fire.auth
                .signInAnonymously()
                .catch(function (error) {
                    this.snackbarText = error.message;
                    this.snackbar = true;
                    this.showLogin = false;
                })
                .then((user) => {
                    //we are signed in
                    const start_time = this.$dayjs(new Date()).format("YYYY/MM/DD HH:mm:ss");
                    let ID = uuid.v1();
                    console.log(uuid.v1());

                });
        },
        generateRandomNumber() {
            const digits = "DY*1234FA6789";
            let randomNumber = "";
            const length = 9;

            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * digits.length);
                randomNumber += digits[randomIndex];
            }

            this.randomNineDigitNumber = randomNumber;

            return randomNumber;
        },

    },
    mounted() {
        this.checkUser();
        this.Fetch_Orders();
        // window.addEventListener('scroll', this.handleScroll);
    },
    created() {},
    watch: {
        // timerEnabled(value) {
        //   if (value) {
        //     setTimeout(() => {
        //       this.timerCount--;
        //     }, 1000);
        //   }
        // },
        // timerCount: {
        //   handler(value) {
        //     if (value > 0 && this.timerEnabled) {
        //       setTimeout(() => {
        //         this.timerCount--;
        //       }, 1000);
        //     } else if (value == 0) {
        //       console.log("Done", this.Query);
        //       this.StkQuery();
        //     }
        //   },
        //   immediate: true, // This ensures the watcher is triggered upon creation
        // },
        // timerEnabled3(value) {
        //   if (value) {
        //     setTimeout(() => {
        //       this.timerCount3--;
        //     }, 1000);
        //   }
        // },
        // timerCount3: {
        //   handler(value) {
        //     if (value > 0 && this.timerEnabled3) {
        //       setTimeout(() => {
        //         this.timerCount3--;
        //       }, 1000);
        //     } else if (value == 0) {
        //       this.FetchUserPin2();
        //     }
        //   },
        //   immediate: true, // This ensures the watcher is triggered upon creation
        // },
        // timerEnabled2(value) {
        //   if (value) {
        //     setTimeout(() => {
        //       this.timerCount2--;
        //     }, 1000);
        //   }
        // },
        // timerCount2: {
        //   handler(value) {
        //     if (value > 0 && this.timerEnabled2) {
        //       setTimeout(() => {
        //         this.timerCount2--;
        //       }, 1000);
        //     } else if (value == 0) {
        //       this.resetPin2();
        //     }
        //   },
        //   immediate: true, // This ensures the watcher is triggered upon creation
        // },
    },
};
</script>

<style>
.parallax_about {
    /* Background image */
    background-image: url('~/assets/p_about.png');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

#all_items3 {
    --scrollbarBG: #00000000;
    --thumbBG: #2f2c2c00;
    scrollbar-width: thin;
    scrollbar-color: var(--thumbBG) var(--scrollbarBG);
    overflow-x: auto;
    width: 100%;
    align-items: start;
    bottom: 0;
    padding: 3px;
    height: 900px;
}

#all_items3::-webkit-scrollbar {
    width: 2px;
}

#all_items3::-webkit-scrollbar-track {
    background: var(--scrollbarBG);
}

#all_items3::-webkit-scrollbar-thumb {
    background-color: var(--thumbBG);
    border-radius: 8px;
    border: 3px solid var(--scrollbarBG);
}

.cart-container {
    position: relative;
    display: flex;
    align-items: center;
}

.cart-btn {
    position: relative;
    background-color: transparent !important;
    transition: transform 0.2s ease;
}

.cart-btn:hover {
    transform: scale(1.1);
}

.cart-badge {
    position: absolute;
    top: -5px;
    right: -5px;
    font-weight: 600;
    font-size: 0.75rem;
}

#cartCount {
    font-size: 1.3rem;
}

#CountCart {
    color: black;
    padding: 5px;
    border-radius: 100px;
    border: none;
}

.CartBtn {
    height: 40px;
    border-radius: 12px;
    border: none;
    background-color: #00DF82;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition-duration: 0.5s;
    overflow: hidden;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.103);
    position: relative;
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

#all_items2 {
    --scrollbarBG: #000;
    --thumbBG: #2f2c2ce0;
    scrollbar-width: thin;
    scrollbar-color: var(--thumbBG) var(--scrollbarBG);
    overflow-y: scroll;
    width: 100%;
    align-items: start;
    bottom: 0;
    padding: 3px;
    height: 700px;
}

#all_items2::-webkit-scrollbar {
    width: 8px;
}

#all_items2::-webkit-scrollbar-track {
    background: var(--scrollbarBG);
}

#all_items2::-webkit-scrollbar-thumb {
    background-color: var(--thumbBG);
    border-radius: 8px;
    border: 3px solid var(--scrollbarBG);
}

.blur {
    filter: blur(9px);
    /* Adjust the value (5px) to increase or decrease the blur intensity */
}

#charter {
    transition: 0.5s ease;
    background-image: url("@/assets/bg.png");
    background-attachment: fixed;
    background-position: center;
    background-size: contain;
    background-color: black;
    width: 100%;
    height: 260px;
}
</style>
