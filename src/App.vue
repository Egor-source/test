<template>
  <div style="display: flex; align-items: center; flex-direction: column; gap: 10px">
    <div>token: {{token}}</div>
    <button style="cursor: pointer" @click="getMeme">GetMeme</button>
    <img v-if="meme" :src="meme">
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'App',
  data(){
    return{
      meme: null,
      token: null,
    }
  },
  mounted() {
    this.token = localStorage.getItem('token')
  },
  methods:{
    async getMeme(){
        const res = await axios('https://meme-api.com/gimme');
        this.meme = res.data.url
    }
  }
}
</script>

<style>
</style>
