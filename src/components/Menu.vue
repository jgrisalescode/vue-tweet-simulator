<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <span class="navbar-brand">Tweets simulator</span>
      <button class="btn pl-4 pr-4" :class="{ 'btn-success': !showForm, 'btn-danger': showForm }" @click="openCloseForm">
        {{ !showForm ? "New tweet" : "Close tweet" }}
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    showForm: {
      type: Boolean
    },
    openCloseForm: {
      type: Function
    }
  }
}
</script>

<style lang="scss" scoped></style>
