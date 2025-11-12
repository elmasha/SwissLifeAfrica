<!-- Please remove this file from your project -->
<template>
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

                                <v-col cols="12" md="8" class="fade-in-right" >
                                            <div class=" container">

                                    <v-card color="transparent" v-show="!showBurger" height="200" elevation="0">

                                    </v-card>

                                    <div class="">

                                        <h1 class="" style="font-size: 1.9rem; font-weight: 900;">Your Wellness. <br> Our
                                            Mission</h1>
                                        <p class=" mb-4" style="font-size: 1.2rem;">SwissLife Africa help you find solutions for your
                                            health <br>

                                            Your trusted partner in health and wellness.<br>
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
</template>

<script>
export default {
  name: 'NuxtTutorial',
  props: {
        showBurger: {
            type: Boolean,
            required: true,
        },
    },
  data () {
    return {
      p1: require("@/assets/product/p1.png"),
      bg: require("@/assets/carousel/2.jpg"),
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
}
</script>
<style scoped>
.box {
    background-color: rgb(255 255 255 / 30%);
    backdrop-filter: blur(5px);
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
</style>