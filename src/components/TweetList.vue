<template>
  <div class="container">
    <h1 class="text-center">Lista de tweets</h1>
    <div class="tweet mb-4" v-for="tweet in tweets" :key="tweet.id">
      <p class="tweet__title">{{tweet.username}}</p>
      <p class="tweet__text">{{tweet.tweet}}</p>
      <span>{{tweet.createdAt}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      tweets: {
        type: Array
      }
    },
    setup(props) {}
  }
</script>

<style lang="scss" scoped>
  .tweet {
    position: relative;
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      margin: 0;
    }

    &__title {
      position: absolute;
      top: -12px;
      left: 10px;
      background-color: white;
      padding: 0px 10px;
      font-weight: bold;
    }

    &__text {
      color: gray;
    }

    span {
      position: absolute;
      right: 10px;
      bottom: -9px;
      border: 1px solid #ccc;
      font-size: 12px;
      color: gray;
      background-color: white;
      padding: 0 20px;
    }
  }
</style>