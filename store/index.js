import axios from "axios"
import Users from "../Plugins/Users";
import Media from "../Plugins/Media"
import Order from "../Plugins/Order"
import Navbar from "~/Plugins/Navbar"
export const state = () => ({
  Users,
  Media,
  Order,
  Navbar,
  posts: []
})

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts
  }
}
export const getters = {
  getpostData : state => state.posts
}
export const actions = {
  getPost ({commit}){
    return axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        const posts = response.data
        commit('setPosts', posts)
      })
  }
}
