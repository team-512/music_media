<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex md3>
        <user-card/>
      </v-flex>
      <v-flex md6>
        <feed/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Feed from './Feed.vue'
import UserCard from './UserCard.vue'

export default {
  data () {
    return {

    }
  },
  computed: {
    test () {
      console.log(this.$store.state.test)
      return this.$store.state.test
    }
  },
  components: {
    Feed,
    UserCard
  }
}
</script>

<style>

</style>
