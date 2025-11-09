<script setup>
import BasicNavbar from '../components/navbars/BasicNavbar.vue'
import EmbellishedNavbar from '../components/navbars/EmbellishedNavbar.vue'
import HamburgerNavbar from '../components/navbars/HamburgerNavbar.vue'
import DropdownNavbar from '../components/navbars/DropdownNavbar.vue'
import DarkModeNavbar from '../components/navbars/DarkModeNavbar.vue'
import ScrollEffectNavbar from '../components/navbars/ScrollEffectNavbar.vue'
import RightSidebar from '../components/navbars/RightSidebar.vue'
import ExpandedSidebar from '../components/navbars/ExpandedSidebar.vue'
</script>

<template>
    <div style="padding-top: 70px;;">
        <p>Basic navbar (Quasar)</p>
        <BasicNavbar />
        
        <p>Embellished basic navbar (Quasar)</p>
        <EmbellishedNavbar />

        <p>Hamburger navbar (Quasar)</p>
        <HamburgerNavbar />

        <p>Dropdown navbar (Quasar)</p>
        <DropdownNavbar />

        <p>Dark mode navbar (Quasar)</p>
        <DarkModeNavbar />

        <p>Scroll effect navbar (Quasar)</p>
        <ScrollEffectNavbar />

        <p>Right sidebar (Quasar)</p>
        <RightSidebar />

        <p>Expanded sidebar - left side (Quasar)</p>
        <ExpandedSidebar />
    </div>
</template>
