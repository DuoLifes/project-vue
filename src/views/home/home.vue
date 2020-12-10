<template>
  <div class="home">
    <span>这是我的首页</span>
    <a-icon type=warning></a-icon>
    <a-button type="primary" @click="handle">我的按钮</a-button>
  </div>
</template>
<script>
import Cookies from 'js-cookie'
import { getUser } from "@/api/user.api.js"
export default {
  name: "Home",
  components: {
  },
  data(){
    return{

    }
  },
  methods: {
    handle() {
      getUser('/test1/user/getUser').then(res => {
        console.log(res)
      })
    }
  },
  created() {
  }
}
</script>
<style scoped>

</style>