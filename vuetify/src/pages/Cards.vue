<script setup>
    import LoginCard from '../components/cards/LoginCard.vue'
    import InfoCard from '../components/cards/InfoCard.vue'
    import AvatarCard from '../components/cards/AvatarCard.vue'
    import FancyCard from '../components/cards/FancyCard.vue'
    import MultiOptCard from '../components/cards/MultiOptCard.vue'
</script>

<template>
    <p>Basic card (Vuetify)</p>
    <LoginCard />
    <br></br>
    <p>Info card (Vuetify)</p>
    <InfoCard />
    <p> Avatar card (Vuetify)</p>
    <AvatarCard />
    <p> Fancy card (PrimeVue)</p>
    <FancyCard />
    <p> Multi-option card (PrimeVue)</p>
    <MultiOptCard />
</template>

<style scoped>
    p {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
        margin-left: 45%;        
    }
</style>
