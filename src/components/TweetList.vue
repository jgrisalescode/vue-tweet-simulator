<template>
  <div class="container">
    <h1 class="text-center">Tweets list</h1>
    <template v-if="tweets.length === 0">
      <p>There are not tweets to show</p>
    </template>
    <template v-else>
      <div class="tweet mb-4" v-for="tweet in tweets" :key="tweet.id">
        <p class="tweet__title">{{tweet.username}}</p>
        <p class="tweet__text">{{tweet.tweet}}</p>
        <span>{{ formatDate(tweet.createdAt) }}</span>
        <Close @click="deleteTweet(tweet.id)"/>
      </div>
    </template>
  </div>
</template>

<script>
  import moment from 'moment';
  import 'moment/locale/es';
  import {Close} from './icons/index';
  import {deleteTweetApi} from '../api/tweet';

  export default {
    props: {
      tweets: {
        type: Array
      },
      reloadTweets: {
        type: Function
      }
    },

    components: {
      Close
    },

    setup(props) {

      const formatDate = (date) => {
        return moment(date).fromNow();
      }

      const deleteTweet = (idTweet) => {
        deleteTweetApi(idTweet);
        props.reloadTweets();
      }

      return {
        formatDate,
        deleteTweet
      }
    }
  }
</script>

<style lang="scss">
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

    svg {
      width: 20px;
      height: 20px;
      &:hover {
        cursor: pointer;
        color: red;
      }
    }
  }
</style>