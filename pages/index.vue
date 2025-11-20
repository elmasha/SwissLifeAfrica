<template>
<v-app>
    <v-row v-resize="onResize">
        <v-col cols="12" md="12">
            <div>
                <v-app-bar light elevation="0" class="" color="white" fixed>

                    <v-app-bar-nav-icon v-show="showBurger"></v-app-bar-nav-icon>

                    <v-toolbar-title>
                        <v-img :src="logo" contain width="120" height="30"></v-img>
                    </v-toolbar-title>

                    <v-spacer></v-spacer>
                    <div v-show="!showBurger" id="nav_bar_links">
                        <a id="link" @click.prevent="scrollToSection('home')" style="margin: 8px;">Home</a>
                        <a id="link" @click.prevent="scrollToSection('about')" style="margin: 8px;">About</a>
                        <a id="link" @click.prevent="scrollToSection1('shop')" style="margin: 8px;">Shop</a>
                        <a id="link" @click.prevent="scrollToSection('team')" style="margin: 8px;">Team</a>
                        <a id="link" @click.prevent="scrollToSection1('certifications')" style="margin: 8px;">Certifications</a>
                        <a id="link" @click.prevent="scrollToSection('faq')" style="margin: 8px;">FAQ</a>
                        <a id="link" @click.prevent="scrollToSection('contact')" style="margin: 8px;">Contact</a>
                        <a id="link" @click.prevent="scrollToSection('terms')" style="margin: 8px;">terms</a>
                    </div>
                    <v-spacer></v-spacer>

                    <v-btn icon>
                        <v-icon>mdi-account</v-icon>
                    </v-btn>

                    <div class="cart-container d-flex align-center">
                        <v-btn icon class="cart-btn" color="primary" @click="drawer2 = !drawer2">
                            <v-icon medium>mdi-cart-outline</v-icon>
                            <v-badge v-if="totalItems > 0" :content="totalItems" style="margin-top: 10px; margin-right: 10px;" color="red" overlap bordered class="cart-badge"></v-badge>
                        </v-btn>
                    </div>

                </v-app-bar>
                <v-navigation-drawer v-model="drawer" absolute right style="margin-top: 120px;" elevation="0">
                    <template v-slot:prepend>
                        <v-list-item two-line>

                            <div>
                                <v-list-item-content>
                                    <v-list-item-subtitle>{{ totalItems }} items</v-list-item-subtitle>
                                    <v-list-item-title>Ksh/=<b> {{ numeral(total_price).format("0,0.0")  }}</b></v-list-item-title>

                                </v-list-item-content>
                                <div>

                                </div>
                                <div style="padding: 2px;">

                                    <v-btn rounded color="green" :to="`checkout/${uid}`">Check Out</v-btn>
                                    <p></p>
                                    <v-btn text color="red" @click="clearCart">Clear cart</v-btn>
                                </div>
                            </div>
                            <br>
                        </v-list-item>
                    </template>

                    <v-list three-line>
                        <v-list-item v-for="item in cart_items" :key="item.title">
                            <v-list-item-icon>
                                <div class="d-flex">
                                    <!-- @click="removeFromCart(item)" -->
                                    <v-btn icon small @click="removeFromCart(item)">
                                        <v-icon color="red">mdi-close-circle</v-icon>
                                    </v-btn>
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
                </v-navigation-drawer>

            </div>
        </v-col>
        <v-col cols="12" md="12">
            <section id="home" class="bg-gray-100 ">
                <home :showBurger="showBurger"></home>
            </section>

        </v-col>
        <v-col cols="12" md="12" class="parallax_about">
            <section id="about" class="bg-gray-200  justify-center">
                <div class="container my-0 ">
                    <div class="d-flex">
                        <div>

                            <h1>Best Sellers</h1>

                            <label for="">Best selling categories</label>
                            <v-chip-group column>
                                <v-chip color="black" text-color="white" small>20% OFF</v-chip>
                                <v-chip color="black" outlined text-color="black" small>20% OFF</v-chip>
                                <v-chip color="black" outlined text-color="black" small>20% OFF</v-chip>
                                <v-chip color="black" outlined text-color="black" small>20% OFF</v-chip>
                            </v-chip-group>
                        </div>
                        <v-spacer></v-spacer>
                        <div class="my-8">
                            <div class="d-flex">
                                <nuxt-link href="#" style="text-decoration: none; color: black; font-weight: 600; font-size: 1.2rem;" to="/shop">View All</nuxt-link>
                                <v-icon color="black" large>mdi-chevron-right</v-icon>
                            </div>

                        </div>
                    </div>

                    <div class="container" id="all_items2">
                        <div class="row">

                            <div v-for="(product, id) in products" :key="id" class="col-md-3">

                                <v-card elevation="0" color="transparent">
                                    <v-img :src="product.image_url" contain height="150"></v-img>
                                    <v-card-subtitle>
                                        <b style="font-size: 1.1rem; font-weight: 700; color: black;"> {{ product.name }}
                                        </b>
                                    </v-card-subtitle>
                                    <v-card-text>
                                        Now
                                        <br>
                                        <b style="font-size: 1.2rem; font-weight: 700; color: black;">Ksh {{ product.price }}</b>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-btn rounded color="black" style="color: aliceblue;" small @click="add_Cart = true,quantity=1,cartProduct = product">Add to cart <v-icon>mdi-cart</v-icon>
                                        </v-btn>
                                        <v-spacer></v-spacer>

                                    </v-card-actions>
                                </v-card>

                            </div>
                        </div>
                    </div>
 <div class="features">
                    <div class="container">
                        <div class="row">
                            <div class="feature ">
                                <div class="icon-bg">
                                    <v-img :src="delivery" alt="delivery icon" />
                                </div>

                                <h3>Fast <br />Delivery</h3>
                                <p>Get your supplements and pharmacy essentials delivered to your doorstep</p>
                            </div>

                            <div class="feature">
                                <div class="icon-bg">
                                    <v-img :src="support" alt="pharmacy support icon" />
                                </div>
                                <h3>Pharmacy <br />Support</h3>
                                <p>Our pharmacy team offers expert advice and support for your health.</p>
                            </div>

                            <div class="feature">
                                <div class="icon-bg">
                                    <v-img :src="price" alt="affordable prices icon" />
                                </div>
                                <h3>Affordable <br />Prices</h3>
                                <p>Enjoy premium, pharmacist-formulated supplements at pocket-friendly prices</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

               
            </section>
        </v-col>
        <v-col cols="12" md="12">
            <section id="shop" class="bg-gray-300  justify-center">
                <about></about>
            </section>
        </v-col>
        <v-col cols="12" md="12">
            <section id="team" class="bg-gray-300  justify-center">
                <team></team>
            </section>
        </v-col>
        <v-col cols="12" md="12">
            <section id="faq" class="bg-gray-300  justify-center">
                <faq></faq>
            </section>
        </v-col>
        <v-col cols="12" md="12">
            <section id="contact" class="bg-gray-400  justify-center parallax_about">
                <contact></contact>
            </section>

        </v-col>
        <v-col cols="12" class="justify-center">
            <v-btn color="green" dark fab large @click="scrollToSection('home')" style="position: fixed; bottom: 30px; right: 30px;">
                <v-icon>mdi-whatsapp</v-icon>
            </v-btn>
        </v-col>
        <v-col cols="12" class="justify-center">
            <v-btn v-show="backToTop" color="green" dark fab large @click="scrollToSection('home')" style="position: fixed; bottom: 30px; right: 30px;">
                <v-icon>mdi-arrow-up</v-icon>
            </v-btn>

        </v-col>
        <div>
            <v-bottom-sheet v-model="drawer2" inset >

                <v-sheet class="text-sart" height="500px">

                    <v-card elevation="0" class="container">
                        <div class="d-flex">
                            <v-card-title><b>Cart List</b></v-card-title>
                            <v-spacer></v-spacer>
                            <v-btn style="margin: 12px;" icon @click="drawer2 = false">
                                <v-icon color="red">mdi-close</v-icon>
                            </v-btn>
                        </div>
                        <v-divider></v-divider>
                        <div class="container">
                            <div class="">

                                <v-list-item-content>
                                    <v-list-item-subtitle>
                                        <p>{{ totalItems }} items</p>
                                    </v-list-item-subtitle>
                                    <p>For</p>
                                    <v-list-item-title>
                                        <h3>Ksh/=<b> {{ numeral(total_price).format("0,0.0")  }}</b></h3>
                                    </v-list-item-title>

                                </v-list-item-content>

                                <div>

                                    <v-btn rounded color="green" :to="`checkout/${uid}`" style="color: white;">Check Out</v-btn>
                                    <v-btn text color="red" @click="clearCart">Clear cart</v-btn>
                                </div>
                            </div>

                        </div>
                        <div class="row" id="all_items2">
                            <div v-for="(item, id) in cart_items" :key="id" class="col-md-3">
                                <v-list-item>
                                    <v-list-item-icon>
                                        <div class="d-flex">
                                            <v-btn icon small @click="removeFromCart(item)">
                                                <v-icon color="red">mdi-close-circle</v-icon>
                                            </v-btn>
                                            <v-img height="50" contain width="50" :src=" item.image_url"></v-img>
                                        </div>
                                    </v-list-item-icon>

                                    <v-list-item-content>
                                        <v-list-item-title>{{ item.name }}</v-list-item-title>
                                        <br>
                                        <v-list-item-subtitle>Qty: {{ item.quantity }} | Ksh {{ item.price }}</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </div>
                        </div>
                    </v-card>

                </v-sheet>
            </v-bottom-sheet>
        </div>
    </v-row>
    <v-dialog v-model="add_Cart" elevation="0" class="">
        <v-row>
            <v-col col="12" md="4">

            </v-col>

            <v-col col="12" md="4">
                <v-card elevation="0">
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn icon @click="add_Cart = false">
                            <v-icon color="red">mdi-close</v-icon>
                        </v-btn>
                    </v-card-actions>
                    <v-img :src="cartProduct.image_url" contain height="150"></v-img>
                    <v-card-subtitle>
                        <b style="font-size: 1.1rem; font-weight: 700; color: black;"> {{ cartProduct.name }}
                        </b>
                    </v-card-subtitle>
                    <v-card-text>
                        Now
                        <br>
                        <b style="font-size: 1.2rem; font-weight: 700; color: black;">Ksh {{ numeral(cartProduct.price * quantity).format("0,0")}}</b>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <div class="d-flex">
                            <v-btn icon @click="quantity--">
                                <v-icon>mdi-minus</v-icon>
                            </v-btn>
                            {{ quantity }}
                            <v-btn icon @click="quantity++">
                                <v-icon>mdi-plus</v-icon>
                            </v-btn>
                        </div>
                        <v-btn rounded color="black" style="color: aliceblue;" small @click="addToCart(cartProduct)">Add to cart <v-icon>mdi-cart</v-icon>
                        </v-btn>

                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col col="12" md="4">

            </v-col>

        </v-row>

    </v-dialog>
    <v-snackbar color="success" :timeout="4000" v-model="snackbar" center>
        {{ snackbarText }}
    </v-snackbar>
</v-app>
</template>

<script>
import axios from "axios";
import numeral from "numeral";
import Checkout from "../components/Checkout.vue";
import About from "../components/About.vue"
import Faq from "../components/Faq.vue"
import Contact from "../components/Contact.vue"
import Team from "../components/Team.vue"
import Home from "../components/Home.vue"

export default {
    components: {
        Checkout,
        Team,
        About,
        Faq,
        Contact,
        Home
    },
    data() {
        return {
            add_Cart: false,
            cartProduct: false,
            snackbar: false,
            snackbarText: "",
            numeral,
            image: null,
            user_id: 1,
            uid: "grace",
            product_id: null,
            quantity: 1,
            price: null,
            activeSection: null,
            showBurger: false,
            showHeroCard: false,
            heroHeight: 700,
            backToTop: false,
            windowSize: {
                x: window.innerHeight,
                y: window.innerWidth,
            },
            products: [],
            totalItems: 0,
            cart_items: [],
            total_items: 0,
            total_price: 0,
            nameRules: [
                (v) => !!v || "Name is required",
                (v) => (v && v.length <= 20) || "Name must be less than 10 characters",
            ],
            email: "",
            emailRules: [
                (v) => !!v || "E-mail is required",
                (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
            ],
            drawer2: false,
            drawer: false,
            logo: require("@/assets/logo.png"),
            bg: require("@/assets/carousel/2.jpg"),
            delivery: require("@/assets/delivery.svg"),
            price: require("@/assets/price.svg"),
            support: require("@/assets/support.svg")
        }
    },
    mounted() {
        this.Fetch_Products();
        this.Fetch_CartList();
        // window.addEventListener('scroll', this.handleScroll);

    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        async scrollToSection1(val) {
            this.$router.push({
                path: `/${val}`,
            });
        },
        async addToCart(product) {
            try {
                const res = await axios.post("http://localhost:5000/api/cart/add", {
                    uid: "grace",
                    image_url: product.image_url,
                    product_id: product.id,
                    quantity: 1,
                    price: product.price,
                });
                this.Fetch_CartList();
                this.add_Cart = false;
                this.snackbar = true;
                this.snackbarText = "✅ Item added to cart!";
                console.log(res.data);
            } catch (err) {
                console.error(err);
                alert("❌ Failed to add item to cart.");
            }
        },
        async removeFromCart(item) {
            try {
                const res = await axios.post("http://localhost:5000/api/cart/remove/", {
                    uid: "grace", // 👈 Data must go inside `data`
                    product_id: item.product_id, // 👈 This will now appear in req.body                 
                });

                this.Fetch_CartList();
                this.snackbar = true;
                this.snackbarText = "✅ Item removed from cart!";
                console.log(res.data);
            } catch (err) {
                console.error("❌ Remove failed:", err);
                alert("❌ Failed to remove item from cart.");
            }
        },
        async clearCart() {
            try {
                const res = await axios.post("http://localhost:5000/api/cart/clear/", {
                    uid: "grace", // 👈 Data must go inside `data`
                });
                this.Fetch_CartList();
                this.snackbar = true;
                this.snackbarText = "✅ Cart cleard!";
            } catch (err) {
                console.error("❌ Remove failed:", err);
                alert("❌ Failed to remove item from cart.");
            }
        },
        async Fetch_Products() {
            let that = this;
            that.products.splice(that.products);
            axios
                .get("http://localhost:5000/api/products/getAll", {})
                .then(function (response) {
                    if (response.status == 200) {
                        // that.snackbar = true;
                        // that.snackbarText = response.data;
                        that.products = response.data;
                        console.log("products", that.products);
                    } else if (response.status == 400) {

                    }
                })
                .catch(function (error) {
                    console.log(error);

                });
        },
        async Fetch_CartList() {
            let that = this;
            that.cart_items.splice(0, that.cart_items.length);
            axios
                .get("http://localhost:5000/api/cart/total/grace", {})
                .then(function (response) {
                    if (response.status == 200) {
                        // that.snackbar = true;
                        // that.snackbarText = response.data;
                        that.cart_items = response.data.items;
                        that.totalItems = response.data.totalItems;
                        that.total_price = response.data.totalAmount;

                        console.log("cart_items", that.cart_items, response.data);
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
       
        scrollToSection(id) {
            const target = document.getElementById(id)
            if (target.id != 'home') {
                this.backToTop = true;
            } else {
                this.backToTop = false;
            }

            if (!target) return
            const start = window.scrollY
            const end = target.offsetTop
            const distance = end - start
            const duration = 800 // ms
            let startTime = null

            function easeInOutQuad(t) {
                return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
            }

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime
                const timeElapsed = currentTime - startTime
                const progress = Math.min(timeElapsed / duration, 1)
                window.scrollTo(0, start + distance * easeInOutQuad(progress))
                if (timeElapsed < duration) requestAnimationFrame(animation)
            }
            requestAnimationFrame(animation)
        }
    }
}
</script>

<style scoped>
.parallax_about {
    /* Background image */
    background-image: url('~/assets/p_about.png');
    background-attachment: fixed;
    background-position: center;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
}
#all_items2 {
  --scrollbarBG: #00000000;
  --thumbBG: #2f2c2c00;
  scrollbar-width: thin;
  scrollbar-color: var(--thumbBG) var(--scrollbarBG);
  overflow-x: auto;
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

 /* The horizontal scroller */
  .scroller {
    display: flex;
    gap: var(--gap);
    overflow-x: auto;
    scroll-behavior: smooth;               /* native smooth scroll */
    -webkit-overflow-scrolling: touch;     /* momentum on iOS */
    scroll-snap-type: x mandatory;         /* snap to items */
    padding: 1rem;
    border-radius: .75rem;
    background: linear-gradient(180deg, #fff, #fbfbff);
    box-shadow: 0 6px 18px rgba(20,20,40,0.06);
    cursor: grab;                          /* changes while dragging via JS */
    user-select: none;
  }

  /* Individual items */
  .item {
    flex: 0 0 var(--item-w);               /* fixed width items */
    height: 180px;
    border-radius: .6rem;
    background: linear-gradient(135deg,#e8f1ff,#fef3e6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 1rem;
    scroll-snap-align: start;              /* snap alignment */
    box-shadow: 0 6px 14px rgba(18,18,40,0.06);
  }

  /* Hide default scrollbars (graceful fallback) */
  .scroller {
    scrollbar-width: thin;                 /* firefox */
    scrollbar-color: rgba(0,0,0,0.18) transparent;
  }
  .scroller::-webkit-scrollbar{ height: 9px; }
  .scroller::-webkit-scrollbar-track{ background: transparent; }
  .scroller::-webkit-scrollbar-thumb{
    background: rgba(0,0,0,0.12);
    border-radius: 999px;
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

.fade-section {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s ease;
    text-align: center;
    padding: 60px;
    background: #f4f4f4;
    margin: 10px;
    border-radius: 10px;
}

/* Active animation */
.fade-in {
    opacity: 1;
    transform: translateY(0);
}

.fade-demo {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 40px;
}

/* Fade In from Top */
.fade-in-up {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 1.5s ease forwards;
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Fade In from Bottom */
.fade-in-down {
    opacity: 0;
    transform: translateY(-30px);
    animation: fadeInDown 1.5s ease forwards;
}

@keyframes fadeInDown {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Fade In from Left */
.fade-in-left {
    opacity: 0;
    transform: translateX(-30px);
    animation: fadeInLeft 1.5s ease forwards;
}

@keyframes fadeInLeft {
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* Fade In from Right */
.fade-in-right {
    opacity: 0;
    transform: translateX(30px);
    animation: fadeInRight 1.5s ease forwards;
}

@keyframes fadeInRight {
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.float-container {
    position: relative;
    /* adjust as needed */
    display: flex;
    justify-content: center;
    align-items: center;
}

.floating-image {
    height: auto;
    animation: float 4s ease-in-out infinite;
}

/* Smooth floating effect */
@keyframes float {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-15px);
    }

    100% {
        transform: translateY(0);
    }
}

.box {
    background-color: rgb(255 255 255 / 30%);
    backdrop-filter: blur(5px);
}

.box1 {
    background-color: rgb(255 255 255 / 30%);
    backdrop-filter: blur(14px);
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

.features {
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
    padding: 3rem 2rem;
    background: #ffffff00;
    flex-wrap: wrap;
    /* allow wrapping on small screens */
}

.feature {
    position: relative;
    flex: 1;
    text-align: left;
    padding: 1rem 1rem;
    overflow: hidden;
    min-width: 250px;
    /* prevent text from becoming too narrow */
}

.feature .icon-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    pointer-events: none;
}

.feature .icon-bg img {
    width: 100px;
    height: auto;
    margin-top: 10px;
    margin-left: 5px;
}

.feature h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    position: relative;
    z-index: 1;
}

.feature p {
    font-size: 0.9rem;
    color: #444;
    position: relative;
    z-index: 1;
    max-width: 260px;
}

/* ✅ Mobile Fix */
@media (max-width: 768px) {
    .features {
        flex-direction: column;
        align-items: flex-start;
    }

    .feature {
        width: 100%;
        padding: 1.5rem 0;
    }

    .feature .icon-bg img {
        width: 70px;
    }

    .feature h3 {
        font-size: 1.1rem;
    }

    .feature p {
        font-size: 0.85rem;
    }
}
</style>
