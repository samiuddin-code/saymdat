<template>
    <section class="bottom-section">
        <img :src="require(`@/assets/BottomSection/${picture}`)" alt="bgImage" loading="lazy">
         <div class="bottom-section-content">
            <h1>Bringing Your Vision to Life</h1>
            <button class="btn btn-border-1">Explore</button>
        </div>
    </section>
</template>

<script type="module" src="./BottomSection.ts"></script>

<style lang="scss" scoped>
@use "./BottomSection";
</style>