<!-- eslint-disable vue/v-on-event-hyphenation -->
<script setup>
import { getSampleImage } from "@twicpics/components-sample/fakeServer.js";
import "@twicpics/components-sample/Sample.css";
const res = await getSampleImage();
</script>
<template>
    <main>
        <MenuBar />
        <h1>Nuxt3 SSR test page</h1>
        <h2>
            {{ res.focus ? `focus='auto',` : `` }} mode = {{ res.mode }}
        </h2>
        <div class="samples">
            <div class="item">
                <TwicImg
                    :src="res.imgSrc"
                    :focus="res.focus"
                    :ratio="res.ratio"
                    :mode="res.mode"
                    @stateChange="handleStateChange"
                />
                <span>ratio = {{ res.ratio }}</span>
            </div>
            <div class="item">
                <TwicImg
                    :src="res.imgSrc"
                    :focus="res.focus"
                    :ratio="res.ratio"
                    :mode="res.mode"
                    transition="zoom"
                />
                <span>ratio = {{ res.ratio }}, transition = "zoom"</span>
            </div>
        </div>
    </main>
</template>

<script>
const handleStateChange = state => {
    // eslint-disable-next-line no-console
    console.log( `Vue - TwicImg emits new state`, state );
};
</script>
