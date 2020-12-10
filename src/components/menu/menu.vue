<template>
    <div class="menu">
      <a-menu
          style="text-align: left"
          theme="dark"
          mode="inline"
          @click="handleClick">
          <!-- 首页 -->
          <a-menu-item key="home"><a-icon type="home" /><span>首页</span></a-menu-item>
          <!-- 我的空间 -->
          <a-sub-menu key="mySpace">
              <span slot="title"><a-icon type="appstore" /><span>我的空间</span></span>
              <a-menu-item key="application">我的申请</a-menu-item>
              <a-menu-item key="todo">我的待办</a-menu-item>
              <a-menu-item key="join">我的参与</a-menu-item>
              <a-menu-item key="message">我的消息</a-menu-item>
          </a-sub-menu>
          <!-- 个人主页 -->
          <a-sub-menu key="personal">
            <span slot="title"><a-icon type="calendar" /><span>个人主页</span></span>
            <a-menu-item key="dynamic">我的动态</a-menu-item>
            <a-menu-item key="follow">我的关注</a-menu-item>
            <a-menu-item key="collection">我的收藏</a-menu-item>
          </a-sub-menu>
          <!--  -->
          <a-sub-menu key="manager">
            <span slot="title"><a-icon type="calendar" /><span>平台管理</span></span>
            <a-menu-item key="role_manager">角色管理</a-menu-item>
            <a-menu-item key="user_manager">用户管理</a-menu-item>
          </a-sub-menu>
      </a-menu>
    </div>
</template>
<script>
export default {
  name: "Menu",
  components: {
    current: ['appstore'],
    openKeys: ['mySpace']
  },
  data() {
    return {    
    }
  },
  methods: {
    handleClick() {

    }
  },
  created() {
  }
}
</script>
<style scoped>

</style>