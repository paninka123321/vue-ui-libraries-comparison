<script setup>
    import Navbar from './Navbar.vue'
    import EmbellishedBasicNav from './EmbellishedBasicNav.vue'
    import HamburgerNavbar from './HamburgerNavbar.vue'
    import DropdownNavbar from './DropdownNavbar.vue'
    import DarkModeNabar from './DarkModeNabar.vue'
    import ScrollEfectNavbar from './ScrollEfectNavbar.vue'
    import RightSidebar from './RightSidebar.vue'
    import ExpnadedSidebar from './ExpnadedSidebar.vue'
</script>

<template>
    <p>Basic navbar (ClearVue)</p>
    <Navbar />
    <br></br>
    <p>Embellished basic navbar (ClearVue)</p>
    <EmbellishedBasicNav />
    <p> Hamburger navbar (ClearVue)</p>
    <HamburgerNavbar />
    <p> Dropdown navbar (ClearVue)</p>
    <DropdownNavbar />
    <p> Dark mode navbar (ClearVue)</p>
    <DarkModeNabar />
    <p> Scroll effect navbar (ClearVue)</p>
    <p>At top of page (it scrolls with page scrolling)</p>
    <ScrollEfectNavbar />
    <p> Right sidebar (ClearVue)</p>
    <RightSidebar />
    <p> Expanded sidebar - on the left hand side (ClearVue)</p>
    <ExpnadedSidebar />
</template>

