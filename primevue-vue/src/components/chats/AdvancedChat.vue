<template>
  <Panel header="Chat" style="width: 350px">
    <ScrollPanel style="height: 300px">
      <div v-for="(msg, index) in messages" :key="index" :class="['chat-bubble', msg.user === 'You' ? 'you' : 'other']">
        {{ msg.text }}
      </div>
    </ScrollPanel>

    <div class="p-inputgroup" style="margin-top: 10px;">
      <InputText v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type a message..." />
      <Button label="Send" icon="pi pi-send" @click="sendMessage" />
    </div>
  </Panel>
</template>

<script>
import { ref, nextTick } from 'vue';

export default {
  setup() {
    const messages = ref([
      { user: 'Alice', text: 'Hi!' },
      { user: 'You', text: 'Hello!' },
      { user: 'Alice', text: 'How are you?' },
    ]);
    const newMessage = ref('');

    function sendMessage() {
      if (newMessage.value.trim() !== '') {
        messages.value.push({ user: 'You', text: newMessage.value });
        newMessage.value = '';
        // przewijanie do dołu
        nextTick(() => {
          const container = document.querySelector('.p-scrollpanel-content');
          container.scrollTop = container.scrollHeight;
        });
      }
    }

    return { messages, newMessage, sendMessage };
  }
};
</script>

<style>
.chat-bubble {
  max-width: 70%;
  padding: 8px 12px;
  margin: 5px 0;
  border-radius: 15px;
  word-wrap: break-word;
}

.chat-bubble.you {
  background-color: #d1ffd6;
  margin-left: auto;
  text-align: right;
  color: #000;
}

.chat-bubble.other {
  background-color: #f1f1f1;
  margin-right: auto;
  text-align: left;
    color: #000;
}
</style>
