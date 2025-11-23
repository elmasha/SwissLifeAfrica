<template>
<v-app dark>

        <v-main >
        <Nuxt />
    </v-main>
    <footer bottom fixed>
        <v-card color="#000" dark>
            <v-row class="text-start">

                <v-col cols="12" md="12">
                    <div class="container">

                        <v-row>
                            <v-col cols="12" md="12">
                                <v-row>
                                    <v-col cols="12" md="4">
                                        <div class="text-start ">
                                            <v-img :src="logo" height=40 contain width="100"></v-img>
                                            <p>
                                                Your trusted source for
                                                medications, health products, and
                                                expert care all in one place.
                                            </p>
                                        </div>
                                        <div>
                                            <h6 style="font-weight: 600; font-size:1rem; margin: 2px;">Contact Info</h6>
                                            <p style="font-size: 0.8rem; color: grey; margin: 2px;">
                                                Email:
                                            </p>
                                        </div>
                                        <br>
                                        <div>
                                            <h6 style="font-weight: 200; font-size:0.8rem; margin: 2px;">Follow us on</h6>
                                            <div class="d-flex ">
                                                <a href="" style="margin: 8px">
                                                    <v-icon >mdi-facebook</v-icon>
                                                </a>
                                                <a href="" style="margin: 8px">
                                                    <v-icon >mdi-instagram</v-icon>
                                                </a>
                                                <a href="" style="margin: 8px">
                                                    <v-icon >mdi-whatsapp</v-icon>
                                                </a>
                                            </div>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" md="4"></v-col>
                                    <v-col cols="12" md="4"></v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="12" md="12">

                            </v-col>
                        </v-row>
                        <div class="d-flex">

                            <v-spacer></v-spacer>
                            <div>

                                <div class="text-center">

                                    <div class="container text-center">
                                        <span style="font-size: 0.6rem; color: grey"> © Copyright SwissLife</span>
                                        <span style="font-size: 0.6rem; color: grey"> All Rights Reserved</span><br />

                                    </div>
                                </div>
                            </div>
                            <v-spacer></v-spacer>

                        </div>

                    </div>
                </v-col>

            </v-row>
        </v-card>
    </footer>
</v-app>
</template>

<script>
import {
    uuid
} from "vue-uuid";
export default {
    name: "DefaultLayout",
    data() {
        return {
            logo: require("@/assets/logo.png"),
            clipped: false,
            drawer: false,
            fixed: false,
            items: [{
                    icon: "mdi-apps",
                    title: "Welcome",
                    to: "/",
                },
                {
                    icon: "mdi-chart-bubble",
                    title: "Inspire",
                    to: "/inspire",
                },
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: "Charge24 Mpesa",
        };
    },
};
</script>

<style>
* .scrollable-element::-webkit-scrollbar {
  display: none;
}

.parallax_footer {
    /* Background image */
    background-image: url('~/assets/p_about.png');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

* {
    font-family: "Quicksand", sans-serif;
}

body {
     font-family: "Quicksand", sans-serif;
    scroll-behavior: smooth;
    overflow: hidden;

}




/* @media (max-width: 100%) {
  .section span {
    width: calc(10vw - 2px);
    height: calc(10vw - 2px);
  }
}
@media (max-width: 600px) {
  .section span {
    width: calc(20vw - 2px);
    height: calc(20vw - 2px);
  }
} */
</style>
