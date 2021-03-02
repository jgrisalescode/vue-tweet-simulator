<template>
  <div class="tweet-form container" :class="{ open: showForm }">
    <form @submit.prevent="sendTweet">
      <input class="form-control" type="text" placeholder="Tu nombre" v-model="userName"/>
      <textarea
          class="form-control"
          rows="3"
          placeholder="Escribe tu tweet"
          v-model="tweet">
      </textarea>
      <button class="btn btn-primary" type="submit">Enviar tweet</button>
    </form>
  </div>
</template>

<script>
import {ref} from 'vue';

export default {
  props: {
    showForm: {
      type: Boolean
    }
  },

  setup() {
    let userName = ref('');
    let tweet = ref('');
    const sendTweet = () => {
      console.log('Enviando formulario...')
      console.log('User name -> ' + userName.value)
      console.log('Tweet -> ' + tweet.value)
    }

    return {
      sendTweet,
      userName,
      tweet
    }
  }
}
</script>

<style lang="scss" scoped>
.tweet-form {
  margin-top: 20px;
  height: 0;
  overflow: hidden;

  &.open {
    height: auto;
  }

  form {
    margin-bottom: 50px;

    input {
      margin-bottom: 10px;
    }

    button {
      width: 100%;
      margin-top: 10px;
    }
  }
}
</style>
