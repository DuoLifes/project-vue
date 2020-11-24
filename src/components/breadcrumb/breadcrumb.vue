<template>
  <div class="breadcrumb">
        <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
            <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
            <a-breadcrumb-item>An Application</a-breadcrumb-item>
        </a-breadcrumb>
  </div>
</template>
<script>
export default {
  name: "BreadCrumb",
  components: {

  },
  methods: {

  },
  created() {
  }
}
</script>
<style scoped>
.ant-breadcrumb {
     height: 50px;
    line-height: 50px;
    text-align: left;
    padding-left: 20px;
    display: block;
}
</style>