<template>
  <div>
    <div v-for="(post, index) in posts"
      :key="index">
      <post :title="post.title" :description="post.description"/>
      <br />
    </div>
  </div>
</template>

<script>
import Post from './Post.vue'
export default {
  components: {
    Post
  },
  computed: {
    posts () {
      if (this.$store.getters.isLoggedIn) {
        // Get feed based on user
        return []
      } else {
        // Get feed for default user
        var defaultPosts = []
        for (var i = 0; i < 100; ++i) {
          defaultPosts.push({
            title: 'This is a title',
            description: 'This is a description'
          })
        }
        return defaultPosts
      }
    }
  }
}
</script>

<style scoped>
</style>
