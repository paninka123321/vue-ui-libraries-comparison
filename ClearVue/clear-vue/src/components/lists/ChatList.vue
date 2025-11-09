<script setup>
const messages = [
  { id: 1, sender: 'Jan', text: 'Cześć! Jak się masz?', mine: false },
  { id: 2, sender: 'Ja', text: 'Hej! Dobrze, dzięki. A Ty?', mine: true },
  { id: 3, sender: 'Jan', text: 'Też dobrze 😄', mine: false },
  { id: 4, sender: 'Ja', text: 'Super! Co nowego?', mine: true }
]
</script>

<template>
  <div class="chat-container">
    <div
      v-for="msg in messages"
      :key="msg.id"
      :class="['message', msg.mine ? 'mine' : 'theirs']"
    >
      <div class="bubble">{{ msg.text }}</div>
    </div>
  </div>
</template>

<style scoped>
.chat-container {
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
  max-height: 300px;
  overflow-y: auto;
  color:black
}
.message {
  display: flex;
  margin-bottom: 0.6rem;
}
.message.mine {
  justify-content: flex-end;
}
.bubble {
  padding: 0.6rem 1rem;
  border-radius: 1rem;
  max-width: 70%;
  line-height: 1.4;
}
.message.mine .bubble {
  background: #42b883;
  color: white;
  border-bottom-right-radius: 0.3rem;
}
.message.theirs .bubble {
  background: #eaeaea;
  border-bottom-left-radius: 0.3rem;
}
</style>
