<template>
  <Menu :openCloseForm="openCloseForm" :showForm="showForm" />
  <TweetForm :showForm="showForm" />
</template>

<script>
import Menu from "./components/Menu"
import TweetForm from "./components/TweetForm"
import useFormTweet from "./hooks/useFormTweet"

export default {
  name: "App",
  components: {
    Menu,
    TweetForm
  },
  setup() {
    return {
      ...useFormTweet()
    }
  }
}
</script>

<style lang="scss"></style>
