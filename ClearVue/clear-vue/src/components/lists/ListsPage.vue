<script setup>
import SelectableList from './SelectableList.vue'
import AvatarAndSubtitList from './AvatarAndSubtitList.vue'
import ChatList from './ChatList.vue'
import CollapsibleList from './CollapsibleList.vue'
import BasicList from './BasicList.vue'
</script>

<template>
  <div class="lists-page">
    <h3>Basic List (ClearVue)</h3>
    <BasicList />
    <h3>Selectable List (ClearVue)</h3>
    <SelectableList />

    <h3>List with Avatars and Subtitles (ClearVue)</h3>
    <AvatarAndSubtitList />

    <h3>Chat-style List (ClearVue)</h3>
    <ChatList />

    <h3>Collapsible List (ClearVue)</h3>
    <CollapsibleList />
  </div>
</template>

<style scoped>
.lists-page {
  max-width: 600px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
h3 {
  margin-bottom: 0.5rem;
  color: #42b883;
}
</style>
