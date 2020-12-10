<template>
  <div class="layout">
    <a-layout>
        <!-- 页头 -->
        <a-layout-header><project-header></project-header></a-layout-header>
        <a-layout>
            <!-- 菜单 -->
            <a-layout-sider><project-menu></project-menu></a-layout-sider>
            <!-- 页面 -->
            <a-layout-content>
                <!-- 面包屑 -->
                <BreadCrumb />
                <!-- 路由 -->
                <router-view />
            </a-layout-content>
        </a-layout>
        <!-- 页脚 -->
        <a-layout-footer><project-footer></project-footer></a-layout-footer>
    </a-layout>
  </div>
</template>
<script>
import Cookies from 'js-cookie'
import ProjectHeader from '@/components/project-header/project-header.vue'
import ProjectFooter from '@/components/project-footer/project-footer.vue'
import ProjectMenu from '@/components/menu/menu.vue'
import BreadCrumb from '@/components/breadcrumb/breadcrumb.vue'
export default {
  name: "Layout",
  components: {
    ProjectHeader,
    ProjectFooter,
    ProjectMenu,
    BreadCrumb
  },
  methods: {

  },
  created() {

  }
}
</script>
<style scoped>
.layout {
  text-align: center;
  height: 600px;
}
.layout .ant-layout-header {
  background: #7dbcea;
  color: #fff;
}
.layout .ant-layout-footer {
  background-color:#7dbcea;
  color: #fff;
}
.layout .ant-layout-footer {
  line-height: 1.5;
}
.layout .ant-layout-sider {
  background:#001529;
  color: #fff;
  line-height: 120px;
}
.layout .ant-layout-content {
  background: #fff(16, 142, 233, 1);
  height: 600px;
}
.layout > .ant-layout {
  margin-bottom: 48px;
}
.layout > .ant-layout:last-child {
  margin: 0;
}
</style>