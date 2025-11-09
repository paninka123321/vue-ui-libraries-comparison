<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-h6">Chat-style List (Quasar)</div>
    </q-card-section>

    <div class="chat-container">
      <div
        v-for="msg in messages"
        :key="msg.id"
        :class="['chat-message', msg.mine ? 'mine' : 'theirs']"
      >
        {{ msg.text }}
      </div>
    </div>
  </q-card>
</template>

<script setup>
const messages = [
  { id: 1, sender: 'Jan', text: 'Cześć! Jak się masz?', mine: false },
  { id: 2, sender: 'Ja', text: 'Hej! Dobrze, dzięki. A Ty?', mine: true },
  { id: 3, sender: 'Jan', text: 'Też dobrze 😄', mine: false },
  { id: 4, sender: 'Ja', text: 'Super! Co nowego?', mine: true }
]
</script>

<style scoped>
.my-card { max-width: 500px; margin: 1rem auto; padding: 1rem; }
.chat-container { display: flex; flex-direction: column; gap: 0.5rem; }
.chat-message { max-width: 70%; padding: 0.5rem 1rem; border-radius: 12px; }
.mine { align-self: flex-end; background: #42b883; color: white; border-bottom-right-radius: 3px; }
.theirs { align-self: flex-start; background: #eaeaea; color: black; border-bottom-left-radius: 3px; }
</style>
