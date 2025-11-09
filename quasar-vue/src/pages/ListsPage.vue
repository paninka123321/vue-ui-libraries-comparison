<script setup>
import BasicList from '../components/lists/BasicList.vue'
import SelectableList from '../components/lists/SelectableList.vue'
import AvatarList from '../components/lists/AvatarList.vue'
import ChatList from '../components/lists/ChatList.vue'
import CollapsibleList from '../components/lists/CollapsibleList.vue'
</script>

<template>
  <q-page padding>
    <div class="q-gutter-y-md">
      <BasicList />
      <SelectableList />
      <AvatarList />
      <ChatList />
      <CollapsibleList />
    </div>
  </q-page>
</template>
