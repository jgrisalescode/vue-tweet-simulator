<template>
  <Menu :openCloseForm="openCloseForm" :showForm="showForm" />
  <TweetForm :showForm="showForm" />
  <TweetList />
</template>

<script>
import Menu from "./components/Menu"
import TweetForm from "./components/TweetForm"
import useFormTweet from "./hooks/useFormTweet"
import TweetList from './components/TweetList'

export default {
  name: "App",
  components: {
    Menu,
    TweetForm,
    TweetList
  },
  setup() {
    return {
      ...useFormTweet()
    }
  }
}
</script>

<style lang="scss"></style>
