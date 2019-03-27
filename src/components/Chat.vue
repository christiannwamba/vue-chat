<template>
  <div class="main">
    <kendo-chat @post="sendMessage" ref="chat"/>
  </div>
</template>

<script>
import { Chat } from "@progress/kendo-chat-vue-wrapper";
import { v4 } from "uuid";

export default {
  name: "Chat",
  components: {
    Chat
  },
  data() {
    return {
      emojiList: {
        positive: ["😀", "😁", "😘", "😄"],
        neutral: ["😐", "😑", "😶", "🤔"],
        negative: ["😟", "🙁", "😢", "😞"]
      },
      users: {
        sender: {
          id: "sender",
          iconUrl:
            "https://image.flaticon.com/icons/svg/167/167750.svg",
          name: "John Sender"
        },
        receiver: {
          id: "receiver",
          iconUrl:
            "https://image.flaticon.com/icons/svg/145/145862.svg",
          name: "Mary Receiver"
        }
      },
      user: {},
      lastMessageId: "",
    };
  },
  sockets: {
    connect() {},
    message(data) {
      const { sentiment: result, text, id, sender } = data;
      const chat = this.$refs.chat.kendoWidget();

      const emojiList = this.emojiList[result.tone].map(emoji => ({
        title: emoji,
        value: emoji
      }));

      if (this.lastMessageId !== id) {
        chat.renderMessage(
          { type: "text", text, timestamp: new Date() },
          this.users.receiver
        );
        chat.renderSuggestedActions(emojiList);
      }
    }
  },
  methods: {
    async sendMessage(message) {
      this.lastMessageId = v4();
      const data = {
        id: this.lastMessageId,
        text: message.text,
        sender: message.sender.user
      };
      this.$socket.emit("chat", data);
    },
  },

  mounted() {
    const chat = this.$refs.chat.kendoWidget();
    this.user = this.users.sender
    chat.user = this.user;
  }
};
</script>

<style lang="scss">
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
}

.k-widget {
  margin-top: 0;
  width: 80%;
}
</style>

