<script setup>
import BasicList from './BasicList.vue'
import SelectableList from './SelectableList.vue'
import AvatarAndSubtitList from './AvatarAndSubtitList.vue'
import ChatList from './ChatList.vue'
import CollapsibleList from './CollapsibleList.vue'
</script>

<template>
  <div class="lists-page p-4 flex flex-column gap-6">
    <BasicList />
    <SelectableList />
    <AvatarAndSubtitList />
    <ChatList />
    <CollapsibleList />
  </div>
</template>
