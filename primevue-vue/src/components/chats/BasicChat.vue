<template>
  <Panel header="Chat" style="width: 300px">
    <ScrollPanel style="height: 200px">
      <div v-for="(msg, index) in messages" :key="index" class="chat-message">
        <strong>{{ msg.user }}:</strong> {{ msg.text }}
      </div>
    </ScrollPanel>

    <div class="p-inputgroup" style="margin-top: 10px;">
      <InputText v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type a message..." />
      <Button label="Send" icon="pi pi-send" @click="sendMessage" />
    </div>
  </Panel>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const messages = ref([
      { user: 'Alice', text: 'Hi!' },
      { user: 'Bob', text: 'Hello!' },
    ]);
    const newMessage = ref('');

    function sendMessage() {
      if (newMessage.value.trim() !== '') {
        messages.value.push({ user: 'You', text: newMessage.value });
        newMessage.value = '';
      }
    }

    return { messages, newMessage, sendMessage };
  }
};
</script>

<style>
.chat-message {
  margin-bottom: 5px;
}
</style>
