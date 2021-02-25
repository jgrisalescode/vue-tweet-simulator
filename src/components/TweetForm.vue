<template>
  <div class="tweet-form container">
    <form>
      <input class="form-control" type="text" placeholder="Tu nombre" />
      <textarea class="form-control" rows="3" placeholder="Escribe tu tweet"></textarea>
      <button class="btn btn-primary" type="button">Enviar tweet</button>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.tweet-form {
  margin-top: 20px;
  // height: 0;
  overflow: hidden;

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
