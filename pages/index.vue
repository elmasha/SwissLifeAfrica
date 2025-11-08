<template>
<v-row v-resize="onResize">
    <!-- class="d-flex justify-center" -->
    <v-col cols="12">
        <v-card elevation="0" width="100%">
            <div>
                <!-- Navbar -->
                <v-app-bar light elevation="0" class="" fixed color="white">

                    <v-app-bar-nav-icon v-show="showBurger"></v-app-bar-nav-icon>

                    <v-toolbar-title>
                        <v-img :src="logo" contain width="120" height="30"></v-img>
                    </v-toolbar-title>

                    <v-spacer></v-spacer>
                    <div v-show="!showBurger" id="nav_bar_links">
                        <a id="link" @click.prevent="scrollToSection('home')" style="margin: 8px;">Home</a>
                        <a id="link" @click.prevent="scrollToSection('about')" style="margin: 8px;">About</a>
                        <a id="link" @click.prevent="scrollToSection('shop')" style="margin: 8px;">Shop</a>
                        <a id="link" @click.prevent="scrollToSection('team')" style="margin: 8px;">Team</a>
                        <a id="link" @click.prevent="scrollToSection('certifications')" style="margin: 8px;">Certifications</a>
                        <a id="link" @click.prevent="scrollToSection('faq')" style="margin: 8px;">FAQ</a>
                        <a id="link" @click.prevent="scrollToSection('contact')" style="margin: 8px;">Contact</a>
                        <a id="link" @click.prevent="scrollToSection('terms')" style="margin: 8px;">terms</a>
                    </div>
                    <v-spacer></v-spacer>

                    <v-btn icon>
                        <v-icon>mdi-account</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon>mdi-cart</v-icon>
                    </v-btn>
                </v-app-bar>

                <div style="margin-top: 60px;">
                    <!-- Sections -->
                    <section id="home" class="bg-gray-100 ">

                        <!-- <v-carousel cycle :show-arrows="false">

                                <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src">
                                    <h1>Home Section</h1>
                                </v-carousel-item>

                            </v-carousel> -->

                        <div>

                            <v-img with="100%" :src="bg" height="700">

                                <div style="background: linear-gradient(to right, rgba(140, 198, 63, 0.8),rgba(139, 198, 63, 0.685), rgba(255, 255, 255, 0.1));
                                    padding: 30px 50px;
                                    display: flex;
                                    height: 100vh;
                                    background-size: cover;
                                    background-position: center;
                                    background-repeat: no-repeat;">
                                    <v-row>

                                        <v-col cols="12" md="8" class="fade-in-right" :class="{ 'fade-in': activeSection === 'home' }">
                                            <div class="container">

                                                <v-card color="transparent" v-show="!showBurger" height="200" elevation="0">

                                                </v-card>

                                                <div class="">

                                                    <h1 class="" style="font-size: 1.9rem; font-weight: 900;">Your Wellness. <br> Our
                                                        Mission</h1>
                                                    <p class=" mb-4" style="font-size: 1.2rem;">SwissLife Africa help you find solutions for your
                                                        health <br>

                                                        Your trusted partner in health and wellness. <br>
                                                        From prescriptions to expert advice, we’ve got you <br>
                                                        covered. Helping you and your family stay healthy,
                                                        every day.</p>
                                                    <v-btn rounded style="color: black;" color="white" large @click="scrollToSection('about')">Shop Now <v-icon right dark>
                                                            mdi-cart
                                                        </v-icon>
                                                    </v-btn>
                                                </div>

                                            </div>
                                        </v-col>
                                        <v-col cols="12" md="4" v-show="!showBurger">
                                            <div class="">

                                                <v-card color="transparent" height="300" elevation="0" min-width="400">
                                                    <v-card class="box">

                                                        <div>

                                                            <v-card-actions>
                                                                <v-card-subtitle>
                                                                    <b style="font-size: 1.5rem; font-weight: 700; color: black;">Organic
                                                                        <br> Kelp</b>
                                                                    <br>
                                                                    <p>Oragnic</p>
                                                                </v-card-subtitle>

                                                                <v-chip color="green" text-color="white" small>20% OFF</v-chip>
                                                                <v-chip color="green" text-color="white" small>20% OFF</v-chip>
                                                            </v-card-actions>
                                                            <v-img :src="p1" contain height="270"></v-img>

                                                        </div>
                                                    </v-card>
                                                    <v-card>
                                                        <v-card-subtitle>
                                                            NOw <br>
                                                            <b style="font-size: 1.7rem; font-weight: 700; color: black;">Ksh 1,400</b>
                                                        </v-card-subtitle>

                                                    </v-card>

                                                </v-card>

                                            </div>

                                        </v-col>
                                        <v-col cols="12" md="4" v-show="showBurger">
                                            <div class="">

                                                <v-card color="transparent" height="300" elevation="0" min-width="300">
                                                    <div class="d-flex">
                                                        <v-card class="box">

                                                            <div>

                                                                <v-card-actions>
                                                                    <v-card-subtitle>
                                                                        <div class="d-flex">
                                                                            <v-img :src="p1" contain height="60" width="60"></v-img>

                                                                            <div>
                                                                                <b style="font-size: 1.5rem; font-weight: 700; color: black;">Organic
                                                                                    <br> Kelp</b>

                                                                                <br>
                                                                                <p>Oragnic</p>
                                                                            </div>

                                                                        </div>

                                                                    </v-card-subtitle>

                                                                </v-card-actions>

                                                            </div>
                                                        </v-card>
                                                        <v-card>
                                                            <v-card-subtitle>
                                                                NOw <br>
                                                                <b style="font-size: 1.5rem; font-weight: 700; color: black;">Ksh 1,400</b>
                                                                <br>
                                                                <v-chip-group>
                                                                    <v-chip color="green" text-color="white" small>20% OFF</v-chip>
                                                                    <v-chip color="green" text-color="white" small>20% OFF</v-chip>
                                                                </v-chip-group>
                                                            </v-card-subtitle>

                                                        </v-card>
                                                    </div>

                                                </v-card>

                                            </div>

                                        </v-col>
                                    </v-row>
                                </div>
                            </v-img>
                        </div>

                    </section>

                    <section id="about" class="bg-gray-200 flex items-center justify-center">
                        <div class="container my-12">
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
                                        <a href="#" style="text-decoration: none; color: black; font-weight: 600; font-size: 1.2rem;">View All</a>
                                        <v-icon color="black" large>mdi-chevron-right</v-icon>
                                    </div>

                                </div>
                            </div>

                            <v-row>
                                <v-col cols="12" md="3" v-for="n in 4" :key="n" class="my-4">
                                    <v-card elevation="0">
                                        <v-img :src="p1" contain height="150"></v-img>
                                        <v-card-subtitle>
                                            <b style="font-size: 1.1rem; font-weight: 700; color: black;">Organic
                                                Kelp</b>
                                            <p>Oragnic</p>
                                        </v-card-subtitle>

                                        <v-card-actions>

                                            <v-btn color="black" style="color: aliceblue;" small>Add to cart <v-icon>mdi-cart</v-icon>
                                            </v-btn>
                                            <v-spacer></v-spacer>
                                            <v-card-text>
                                                Now <br>
                                                <b style="font-size: 1.2rem; font-weight: 700; color: black;">Ksh 1,400</b>
                                            </v-card-text>
                                        </v-card-actions>
                                    </v-card>

                                </v-col>

                            </v-row>

                        </div>
                        <!-- <div class="container" style="padding: 50px;">
                            <v-row>
                                <v-col cols="12" md="4" lg="4">
                                    <div class="">

                                        <h1 class="" style="font-size: 1.9rem; font-weight: 900;">Fast <br> Delivery
                                            Mission</h1>
                                        <p class=" mb-4" style="font-size: 1.2rem;">Get your supplements and <br> 
                                            pharmacy essentials delivered to <br>
                                            your doorstep
                                            .</p>

                                    </div>
                                </v-col>
                                <v-col cols="12" md="4" lg="4">
                                    <div class="">

                                        <h1 class="" style="font-size: 1.9rem; font-weight: 900;">Pharmacy <br>
                                            Support </h1>
                                        <p class=" mb-4" style="font-size: 1.2rem;">
                                            Our pharmacy team offers expert <br>
                                            advice and support for your <br>
                                            health.
                                        </p>

                                    </div>
                                </v-col>
                                <v-col cols="12" md="4" lg="4">
                                    <div class="">

                                        <h1 class="" style="font-size: 1.9rem; font-weight: 900;">Affordable <br>
                                            Prices </h1>
                                        <p class=" mb-4" style="font-size: 1.2rem;">
                                            Enjoy premium, pharmacist <br>
                                            formulated supplements at <br>
                                            pocket friendly prices
                                        </p>

                                    </div>
                                </v-col>
                            </v-row>
                        </div> -->

                        <section class="features">
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
                        </section>
                    </section>

                    <section id="shop" class="bg-gray-300 flex items-center justify-center">
                        <div class="parallax">
                            <div class="container">

                                <v-card class="box1" style="margin: 30px;padding: 50px;">

                                    <v-row>
                                        <v-col cols="12" md="6" class="">
                                            <div class=" p-8">
                                                <v-card-title>
                                                    <h1 style="font-weight: 800; font-size: 1.7rem;"> Our Story</h1>
                                                </v-card-title>
                                                <v-card-subtitle>
                                                    <p style="font-weight: 300;">SwissLife Africa is a passionate health & wellness start-up committed to raising the standard of nutritional care across the continent. Our team brings together deep local insight and international experience to deliver what matters most: safe, effective, and trustworthy health products.</p>
                                                    <p style="font-weight: 300;">We believe access to quality health supplements should be simple, transparent, and backed by science. That’s why we work only with certified manufacturers, clean-label ingredients, and strict quality control-every step of the way.</p>
                                                    <p style="font-weight: 300;">Our mission is to close the wellness gap by combining premium standards with real local impact. Because better health starts with better access—and that’s what we’re here to build.</p>
                                                </v-card-subtitle>

                                            </div>
                                        </v-col>
                                        <v-col cols="12" md="2" class="">
                                            <div class=" p-8">
                                                <v-card-title>
                                                    <h4 style="font-weight: 800;">Who We Are
                                                    </h4>

                                                </v-card-title>
                                                <v-card-subtitle>
                                                    SwissLife Africa is a health and wellness
                                                    brand with one vision better health for
                                                    all. 
                                                    Rooted in Africa and guided by global
                                                    standards, we deliver safe, effective, and
                                                    trustworthy nutritional products that raise
                                                    the standard of care across the
                                                    continent.
                                                </v-card-subtitle>

                                            </div>
                                        </v-col>
                                        <v-col cols="12" md="2" class="">
                                            <div class=" p-8">
                                                <v-card-title>
                                                    <h4 style="font-weight: 800;">What We Do

                                                    </h4>

                                                </v-card-title>
                                                <v-card-subtitle>
                                                    We provide clean, science-backed
                                                    supplements made with certified
                                                    ingredients and strict quality control. 
                                                    Through our partnership with G&G
                                                    Vitamins (UK), we bring pure, traceable
                                                    products to gyms, wellness clinics, and
                                                    pharmacies across Africa.
                                                </v-card-subtitle>

                                            </div>
                                        </v-col>
                                        <v-col cols="12" md="2" class="">
                                            <div class=" p-8">
                                                <v-card-title>
                                                    <h4 style="font-weight: 800;">
                                                        Why It Matters
                                                    </h4>

                                                </v-card-title>
                                                <v-card-subtitle>
                                                    Access to quality supplements should
                                                    be simple and affordable for everyone. 
                                                    Our mission is to close the wellness
                                                    gap by making premium health
                                                    products accessible to all because
                                                    better health starts with better access.
                                                </v-card-subtitle>

                                            </div>
                                        </v-col>
                                    </v-row>

                                </v-card>

                                <v-card elevation="0">

                                </v-card>
                            </div>
                        </div>

                        <div class="parallax_about">
                            <v-card color="transparent" elevation="0" style="padding: 60px;">
                                <div class="d-flex">
                                    <v-spacer></v-spacer>
                                    <v-row>
                                        <v-col cols="12" md="6">
                                            <div>

                                                <div class="float-container">
                                                    <v-img :src="p1" contain height="370" width="300" alt="Floating Image" class="floating-image"></v-img>
                                                </div>
                                            </div>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <div class="container">
                                                <div class="p-8">

                                                    Not satisfied? <br>
                                                    <b style="font-size: 2.4rem; font-weight: 700; color: black;">90 day <br>
                                                        Guarantee.</b> <br>
                                                    <br>
                                                    <v-btn large outlined rounded>
                                                        Learn More
                                                        <v-icon right dark>
                                                            mdi-arrow-top-right
                                                        </v-icon>
                                                    </v-btn>

                                                </div>

                                            </div>
                                        </v-col>
                                    </v-row>

                                    <v-spacer></v-spacer>

                                </div>

                            </v-card>
                        </div>
                        <div class="parallax_more">
                            <div class="container my-30">
                                <div class="d-flex" style="margin-left: 50px;">
                                    <v-spacer></v-spacer>
                                    <v-row class="center">

                                        <v-col cols="12" md="6">
                                            <div class="">

                                                <h1 class="" style="font-size: 1.9rem; font-weight: 900;">Trusted Quality,<br>
                                                    Backed by <br>
                                                    Standards</h1>
                                                <p class=" mb-4" style="font-size: 1.2rem;">
                                                    We work exclusively with certified <br>
                                                    manufacturers and lab tested products <br>
                                                    that meet the highest European safety <br>
                                                    and purity standards ensuring quality <br>
                                                    you can rely on.
                                                </p>
                                                <v-btn large outlined rounded>
                                                    Learn More
                                                    <v-icon right dark>
                                                        mdi-arrow-top-right
                                                    </v-icon>
                                                </v-btn>
                                            </div>
                                        </v-col>
                                        <v-col cols="12" md="6"></v-col>
                                        <v-col cols="12" md="6"></v-col>
                                        <v-col cols="12" md="6">
                                            <div class="">

                                                <h1 class="" style="font-size: 1.9rem; font-weight: 900;">African Groundwork <br>
                                                    & Real Support</h1>
                                                <p class=" mb-4" style="font-size: 1.2rem;">
                                                    We re locally rooted in Kenya, with a <br>
                                                    team on the ground offering hands on <br>
                                                    support, education, and flexible <br>
                                                    distribution for clinics, pharmacies, and <br>
                                                    wellness professionals.
                                                </p>
                                                <v-btn large outlined rounded>
                                                    Learn More
                                                    <v-icon right dark>
                                                        mdi-arrow-top-right
                                                    </v-icon>
                                                </v-btn>
                                            </div>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <div class="">

                                                <h1 class="" style="font-size: 1.9rem; font-weight: 900;">Direct Sourcing <br>
                                                    from Proven <br>
                                                    Partners</h1>
                                                <p class=" mb-4" style="font-size: 1.2rem;">
                                                    Our supplements come straight from <br>
                                                    long standing, reputable producers in <br>
                                                    Europe. No middlemen, no shortcuts-just <br>
                                                    clean, premium products with full <br>
                                                    traceability.
                                                </p>
                                                <v-btn large outlined rounded>
                                                    Learn More
                                                    <v-icon right dark>
                                                        mdi-arrow-top-right
                                                    </v-icon>
                                                </v-btn>
                                            </div>
                                        </v-col>
                                        <v-col cols="12" md="6"></v-col>
                                    </v-row>
                                    <v-spacer></v-spacer>
                                </div>
                            </div>

                        </div>
                    </section>
                    <section id="team" class="bg-gray-300 flex items-center justify-center">

                        <div class="parallax_about">
                            <div class="container my-12">

                                <h1 class="container" style="margin-left: 50px;">Our Dedicated team</h1>

                                <div class="container">
                                    <v-row class="container text-center">
                                        <v-col cols="12" md="3" class="my-4">
                                            <v-card elevation="0">
                                                <v-img :src="t4" contain height="150"></v-img>
                                                <v-card-subtitle>
                                                    <b style="font-size: 1.1rem; font-weight: 700; color: black;">Kevin Kamau Njeri
                                                    </b>
                                                    <p>Founder & Managing Director
                                                        <br>
                                                        Europe / Kenya</p>
                                                </v-card-subtitle>

                                                <v-card-actions>
                                                    <!-- <v-btn color="black" style="color: aliceblue;" small>Connect <v-icon>mdi-account-plus</v-icon>
                                                        </v-btn> -->
                                                    <v-spacer></v-spacer>
                                                </v-card-actions>
                                            </v-card>

                                        </v-col>
                                        <v-col cols="12" md="3" class="my-4">
                                            <v-card elevation="0">
                                                <v-img :src="t7" contain height="150"></v-img>
                                                <v-card-subtitle>
                                                    <b style="font-size: 1.1rem; font-weight: 700; color: black;">Lucy Muchene Schumacher
                                                    </b>
                                                    <p>Director and Shareholder
                                                        <br>

                                                        Europe / Kenya</p>
                                                </v-card-subtitle>

                                                <v-card-actions>
                                                    <!-- <v-btn color="black" style="color: aliceblue;" small>Connect <v-icon>mdi-account-plus</v-icon>
                                                        </v-btn> -->
                                                    <v-spacer></v-spacer>
                                                </v-card-actions>
                                            </v-card>

                                        </v-col>
                                        <v-col cols="12" md="3" class="my-4">
                                            <v-card elevation="0">
                                                <v-img :src="t1" contain height="150"></v-img>
                                                <v-card-subtitle>
                                                    <b style="font-size: 1.1rem; font-weight: 700; color: black;">Allan Mwema
                                                    </b>
                                                    <p>Chief Executive Officer (CEO) <br>

                                                        Nairobi, Kenya</p>
                                                </v-card-subtitle>

                                                <v-card-actions>
                                                    <!-- <v-btn color="black" style="color: aliceblue;" small>Connect <v-icon>mdi-account-plus</v-icon>
                                                        </v-btn> -->
                                                    <v-spacer></v-spacer>
                                                </v-card-actions>
                                            </v-card>

                                        </v-col>
                                        <v-col cols="12" md="3" class="my-4">
                                            <v-card elevation="0">
                                                <v-img :src="t5" contain height="150"></v-img>
                                                <v-card-subtitle>
                                                    <b style="font-size: 1.1rem; font-weight: 700; color: black;">Stella
                                                        Wmabui</b>
                                                    <p>Head of Human Resources &
                                                        Training
                                                        <br>
                                                        Nairobi, Kenya</p>
                                                </v-card-subtitle>

                                                <v-card-actions>
                                                    <!-- <v-btn color="black" style="color: aliceblue;" small>Connect <v-icon>mdi-account-plus</v-icon>
                                                        </v-btn> -->
                                                    <v-spacer></v-spacer>
                                                </v-card-actions>
                                            </v-card>

                                        </v-col>
                                        <v-col cols="12" md="3" class="my-4">
                                            <v-card elevation="0">
                                                <v-img :src="t2" contain height="150"></v-img>
                                                <v-card-subtitle>
                                                    <b style="font-size: 1.1rem; font-weight: 700; color: black;">Husna Abdulhalim
                                                    </b>
                                                    <p>Chief Financial Officer (CFO)
                                                        & Board Member Assistant
                                                        <br>
                                                        Mombasa/ Nairobi, Kenya</p>
                                                </v-card-subtitle>

                                                <v-card-actions>
                                                    <!-- <v-btn color="black" style="color: aliceblue;" small>Connect <v-icon>mdi-account-plus</v-icon>
                                                        </v-btn> -->
                                                    <v-spacer></v-spacer>
                                                </v-card-actions>
                                            </v-card>

                                        </v-col>
                                        <v-col cols="12" md="3" class="my-4">
                                            <v-card elevation="0">
                                                <v-img :src="t3" contain height="150"></v-img>
                                                <v-card-subtitle>
                                                    <b style="font-size: 1.1rem; font-weight: 700; color: black;">Jefferson Teddy Kasingu
                                                    </b>
                                                    <p>Chairperson – East Africa
                                                        <br>
                                                        Nairobi, Kenya</p>
                                                </v-card-subtitle>

                                                <v-card-actions>
                                                    <!-- <v-btn color="black" style="color: aliceblue;" small>Connect <v-icon>mdi-account-plus</v-icon>
                                                        </v-btn> -->
                                                    <v-spacer></v-spacer>
                                                </v-card-actions>
                                            </v-card>

                                        </v-col>
                                        <v-col cols="12" md="3" class="my-4">
                                            <v-card elevation="0">
                                                <v-img :src="t6" contain height="150"></v-img>
                                                <v-card-subtitle>
                                                    <b style="font-size: 1.1rem; font-weight: 700; color: black;">Elmasha Omondi
                                                    </b>
                                                    <p>Heat of IT
                                                        <br>
                                                        Nairobi / Kenya</p>
                                                </v-card-subtitle>

                                                <v-card-actions>
                                                    <!-- <v-btn color="black" style="color: aliceblue;" small>Connect <v-icon>mdi-account-plus</v-icon>
                                                        </v-btn> -->
                                                    <v-spacer></v-spacer>
                                                </v-card-actions>
                                            </v-card>

                                        </v-col>
                                    </v-row>
                                </div>

                            </div>

                        </div>

                    </section>
                    <section id="faq" class="bg-gray-300 flex items-center justify-center">
                        <div class="container">
                            <div class="d-flex parallax_about">
                                <v-spacer></v-spacer>
                                <v-row>
                                    <v-col cols="12" md="2"></v-col>
                                    <v-col cols="12" md="5">
                                        <div class="container">
                                            <h1>
                                                Frequently <br> Asked <br> Questions
                                            </h1>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" md="5">
                                        <v-row>
                                            <v-col cols="12" class="my-0">
                                                <v-card elevation="0" class="pa-4">
                                                    <h3>What is SwissLife Africa's return policy?</h3>
                                                    <p>We offer a 30-day return policy for unopened products. Please contact our support team for assistance.</p>
                                                </v-card>
                                            </v-col>
                                            <v-col cols="12" class="my-0">
                                                <v-card elevation="0" class="pa-4">
                                                    <h3>Do you ship internationally?</h3>
                                                    <p>Yes, we ship to select countries. Shipping fees and delivery times may vary based on location.</p>
                                                </v-card>
                                            </v-col>
                                            <v-col cols="12" class="my-0">
                                                <v-card elevation="0" class="pa-4">
                                                    <h3>Are your supplements safe and tested?</h3>
                                                    <p>Absolutely. All our supplements are manufactured in GMP-certified facilities and undergo rigorous quality testing.</p>
                                                </v-card>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" md="2"></v-col>
                                </v-row>
                                <v-spacer></v-spacer>
                            </div>
                        </div>
                    </section>
                    <section id="certifications" class="bg-gray-300 flex items-center justify-center">
                        <div class="parallax_bottom">
                        </div>
                    </section>

                    <section id="contact" class="bg-gray-400 flex items-center justify-center parallax_about">
                        <div class="container">
                            <div class="d-flex ">
                                <v-row>
                                    <v-col cols="12" md="2"></v-col>
                                    <v-col cols="12" md="5" class="fade-in-right">
                                        <div class="container" style="padding: 90px;">
                                            <h1>
                                                Contact Us <br>
                                            </h1>
                                            <p> <b>Let's Connect - Your Health Journey Starts Here</b> </p>
                                            <p>
                                                Have a question, need assistance, or ready to
                                                partner with us?  <br>
                                                We’d love to hear from you! Reach out for
                                                
                                                product inquiries, partnership opportunities, or <br>
                                                support. Our dedicated team is here to assist you
                                                personally and promptly.</p>
                                            <p> 
                                                <b>
                                                    Business Hours:  <br>
                                                Monday to Friday: 08:00 AM 17:30 PM  <br>
                                                Saturday: 09:00 AM 12:00PM <br>

                                                Phone: +254 796 604 941 <br>

                                                P.O. BOX 22420 00505 Nairobi, Kenya <br>

                                                Location: Ngong Lane Plaza, Ngong Road <br>

                                                Email: info@swisslifeafrica.com <br>

                                                Online shop and WhatsApp support: Available 24/7  <br>
                                                </b>
                                                
                                            </p>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" md="5">
                                        <v-form v-model="valid" style="margin-top: 90px;">
                                            <v-container>
                                                <v-row>
                                                    <v-col cols="12" md="6">
                                                        <v-text-field v-model="firstname" :rules="nameRules" :counter="10" label="First name" required></v-text-field>
                                                    </v-col>

                                                    <v-col cols="12" md="6">
                                                        <v-text-field v-model="lastname" :rules="nameRules" :counter="10" label="Last name" required></v-text-field>
                                                    </v-col>

                                                    <v-col cols="12" md="12">
                                                        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" md="12">
                                                        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" md="12">
                                                        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                                                    </v-col>

                                                </v-row>
                                            </v-container>
                                        </v-form>
                                    </v-col>
                                    <v-col cols="12" md="2"></v-col>
                                </v-row>
                            </div>
                        </div>
                    </section>
                </div>

            </div>

        </v-card>

    </v-col>
    <v-row>
        <v-col cols="12" class="d-flex justify-center">
            <v-btn v-show="backToTop" color="green" dark fab large @click="scrollToSection('home')" style="position: fixed; bottom: 30px; right: 30px;">
                <v-icon>mdi-arrow-up</v-icon>
            </v-btn>
            <v-btn color="green" dark fab large @click="scrollToSection('home')" style="position: fixed; bottom: 30px; right: 30px;">
                <v-icon>mdi-whatsapp</v-icon>
            </v-btn>
        </v-col>
    </v-row>
</v-row>
</template>

<script>
export default {
    data() {
        return {
            activeSection: null,
            p1: require("@/assets/product/p1.png"),
            items: [{
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                },
            ],
            showBurger: false,
            showHeroCard: false,
            heroHeight: 700,
            backToTop: false,
            windowSize: {
                x: window.innerHeight,
                y: window.innerWidth,
            },
            logo: require("@/assets/logo.png"),
            bg: require("@/assets/carousel/2.jpg"),
            delivery: require("@/assets/delivery.svg"),
            support: require("@/assets/support.svg"),
            price: require("@/assets/price.svg"),
            t1: require("@/assets/team/1.jpg"),
            t2: require("@/assets/team/2.jpg"),
            t3: require("@/assets/team/3.jpg"),
            t4: require("@/assets/team/4.jpg"),
            t5: require("@/assets/team/5.jpg"),
            t6: require("@/assets/team/6.jpeg"),
            t7: require("@/assets/team/7.jpg"),

        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll)
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
                this.showHeroCard = true;
            } else {
                this.showBurger = false;
            }
            return this.windowSize;
        },
        handleScroll() {
            const sections = document.querySelectorAll('section')
            const scrollPos = window.scrollY + 150
            sections.forEach(section => {
                const link = document.querySelector(`nav a[href="#${section.id}"]`)
                if (
                    section.offsetTop <= scrollPos &&
                    section.offsetTop + section.offsetHeight > scrollPos
                ) {
                    link.classList.add('active')
                } else {
                    link.classList.remove('active')
                }
            })
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
    width: 100%;
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

.parallax {
    /* Background image */
    background-image: url('~/assets/about.jpg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.parallax_bottom {
    /* Background image */
    background-image: url('~/assets/vt.jpg');
    background-attachment: fixed;
    height: 30vh;
    width: 100%;
    opacity: 0.9;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.parallax_more {
    /* Background image */
    background-image: url('~/assets/more.png');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.parallax_about {
    /* Background image */
    background-image: url('~/assets/p_about.png');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.box {
    background-color: rgb(255 255 255 / 30%);
    backdrop-filter: blur(5px);
}

.box1 {
    background-color: rgb(255 255 255 / 30%);
    backdrop-filter: blur(14px);
}

.hero-section {
    position: relative;
    background-image: url('/static/1.jpg');
    color: #000;
    background-color: linear-gradient(to right, rgba(139, 198, 63, 0.685), rgba(255, 255, 255, 0.1));
    padding: 100px 60px;
    min-height: 80vh;
    display: flex;
    align-items: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

#nav_bar_links {
    color: black;
    font-weight: 500;
    font-size: 16px;
    transition: color 0.3s;
    background-color: rgba(213, 248, 218, 0.226);
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
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
    padding: 3rem 2rem;
    background: #fff;
    flex-wrap: wrap;
    /* allow wrapping on small screens */
}

.feature {
    position: relative;
    flex: 1;
    text-align: left;
    padding: 2rem 1rem;
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
