<template>
  <v-card>
    <v-layout column>
      <v-flex pa-2>
        <v-img :src="profilePhoto" />

        <div>
          <v-btn v-if="authenticated" @click="logout">Logout</v-btn>
          <v-btn v-else @click="login">Login</v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import profilePhoto from '../assets/logo.png'
export default {
  data () {
    return {
      profilePhoto
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login')
    },
    logout () {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    authenticated () {
      return this.$store.getters.isAuthenticated
    }
  }
}
</script>
