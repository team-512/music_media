<template>
  <div>
    This is the callback
  </div>
</template>

<script>
export default {
  mounted () {
    console.log(this.$route.params.authToken)
    var authToken = this.$route.params.authToken
    this.$store.dispatch('handleAuthToken', authToken)
    this.$router.replace('Home')
  }
}
</script>
