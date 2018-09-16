import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth0js from 'auth0-js'

var auth0 = new auth0js.WebAuth({
  domain: 'drew-carr.auth0.com',
  clientID: 'YSDa4PFBg7c3xOl3NO3BxIovVgSzg98X',
  redirectUri: 'http://localhost:8080/#/callback',
  responseType: 'token id_token',
  scope: 'openid'
})

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    auth0,
    test: 'Test',
    user: {
      name: null,
      id: null,
      profilePhoto: null
    },
    access_token: null,
    id_token: null,
    expires_at: null,
    authenticated: false
  },
  actions: {
    login (context) {
      context.state.auth0.authorize()
    },
    logout (context) {
      context.state.authenticated = false
      context.state.access_token = null
      context.expires_at = null
      context.state.id_token = null
    },
    handleAuthToken (context, authResult) {
      context.state.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          context.commit('SET_SESSION', authResult)
        } else if (err) {
          console.log(err)
        }
      })
    }
  },
  mutations: {
    SET_SESSION (state, authResult) {
      var expiresAt = JSON.stringify(
        authResult.expiresIn * 1000 + new Date().getTime()
      )
      state.access_token = authResult.accessToken
      state.id_token = authResult.idToken
      state.expires_at = expiresAt
      state.authenticated = true
    }
  },
  getters: {
    isLoggedIn: (state, getters) => {
      if (state.user.id === null) {
        return false
      } else {
        return true
      }
    },
    isAuthenticated: (state, getters) => {
      return state.authenticated && (new Date().getTime() < state.expires_at)
    }
  }
})

export default store
