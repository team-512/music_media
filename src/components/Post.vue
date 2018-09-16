<template>
  <v-card color="cyan darken-2" class="white--text">
    <v-layout>
      <v-flex md12 text-xs-center>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{title}}</div>
            <div>{{description}}</div>
            <div>(2014)</div>
          </div>
        </v-card-title>
      </v-flex>
    </v-layout>
    <v-divider light></v-divider>
    <v-card-actions class="pa-3">
      Rate this album
      <v-spacer></v-spacer>
      <v-icon>star_border</v-icon>
      <v-icon>star_border</v-icon>
      <v-icon>star_border</v-icon>
      <v-icon>star_border</v-icon>
      <v-icon>star_border</v-icon>
    </v-card-actions>
  </v-card>
</template>

<script>
import defaultPhoto from '../assets/logo.png'

export default {
  props: {
    title: {
      default: 'Title',
      type: String
    },
    description: {
      default: 'Default Description',
      type: String
    }
  },
  data () {
    return {
      defaultPhoto
    }
  },
  computed: {
    profilePhoto () {
      console.log('IN')
      if (this.$store.state.user.profilePhoto) {
        console.log('Returning logo')
        return this.$store.state.user.profilePhoto
      } else {
        console.log('Returning default photo')
        return this.defaultPhoto
      }
    }
  }
}
</script>

<style>

</style>
