<script setup>
    import Lists from '../components/lists/Lists.vue'
    import SelectableList from '../components/lists/SelectableList.vue'
    import AvatarAndSubtitList from '../components/lists/AvatarAndSubtitList.vue';
    import ChatList from '../components/lists/ChatList.vue';
    import CollapsibleList from '../components/lists/CollapsibleList.vue';
</script>

<template>

        <p>Basic list (PrimeVue)</p>
        <Lists />
        <br></br>
        <p>Selectable list (PrimeVue)</p>
        <SelectableList />
        <p>List with Avatars and Subtitles (PrimeVue)</p>
        <AvatarAndSubtitList />
        <p>List in chat-style (PrimeVue)</p>
        <ChatList />
        <p>CollapsibleList (PrimeVue)</p>
        <CollapsibleList />

</template>

