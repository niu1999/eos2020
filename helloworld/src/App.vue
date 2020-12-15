<template>
<el-container>
  <el-aside width="200px">
    <el-col :span="24">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
                <el-menu-item index="1-3">
                  <router-link to='/Hello'>Hello</router-link>
                </el-menu-item>
                <el-menu-item index="1-4-1">
                  <router-link to='/world'>world</router-link>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
                <el-menu-item index="2-3">
                   <router-link to='/child'>child</router-link>
                </el-menu-item>
                <el-menu-item index="2-4-1">
                  <router-link to='/parent'>parent</router-link>
                </el-menu-item>
            </el-submenu>
          </el-menu>
    </el-col>
  </el-aside>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <router-view></router-view> <!-- 路由匹配到的组件将渲染在这里 -->
    </el-main>
  </el-container>
</el-container>


</template>

<script>
export default {
  name: 'app',
  components: {
  },
  methods: {
  handleOpen(key, keyPath) {
    console.log(key, keyPath);
  },
  handleClose(key, keyPath) {
    console.log(key, keyPath);
  }
}
}
</script>

<style>

</style>
        