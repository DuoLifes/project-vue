<template>
    <div class="menu">
            <a-menu
                style="width: 256px"
                :default-selected-keys="['1']"
                :open-keys.sync="openKeys"
                mode="inline"
                @click="handleClick">
                <!-- 首页 -->
                <a-sub-menu key="home">首页</a-sub-menu>
                <!-- 我的空间 -->
                <a-sub-menu key="mySpace">
                    <span slot="title"><a-icon type="appstore" /><span>我的空间</span></span>
                    <a-menu-item-group key="workflow">
                        <template slot="title"> <a-icon type="calendar" /><span>工作流管理</span> </template>
                        <a-menu-item key="application">我的申请</a-menu-item>
                        <a-menu-item key="todo">我的待办</a-menu-item>
                        <a-menu-item key="join">我的参与</a-menu-item>
                        <a-menu-item key="message">我的消息</a-menu-item>
                    </a-menu-item-group>
                    <a-menu-item-group key="personal">
                        <template slot="title"> <a-icon type="calendar" /><span>个人主页</span> </template>
                        <a-menu-item key="dynamic">我的动态</a-menu-item>
                        <a-menu-item key="follow">我的关注</a-menu-item>
                        <a-menu-item key="collection">我的收藏</a-menu-item>
                    </a-menu-item-group>
                </a-sub-menu>
                <a-sub-menu key="home">系统管理
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