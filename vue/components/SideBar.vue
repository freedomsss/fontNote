<template>
  <el-menu
    :default-active="$route.path"
    :class="$store.state.user.isCollapse ? 'el-menu-vertical' : ''"
    background-color="#505b6b"
    text-color="#fff"
    active-text-color="#ff9c00"
    :collapse="$store.state.user.isCollapse"
  >
    <div v-for="item in menuData" :key="item.index">
      <router-link v-if="item.link" :to="item.link">
        <el-menu-item :index="item.index">
          <i :class="item.icon"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
      </router-link>
      <el-submenu v-else :index="item.index">
        <template slot="title">
          <i :class="item.icon"></i>
          <span v-if="!$store.state.user.isCollapse">{{item.title}}</span>
        </template>
        <el-menu-item-group>
          <router-link v-for="subItem in item.children" :key="subItem.index" :to="subItem.link">
            <el-menu-item :index="subItem.index">
              <i :class="subItem.icon"></i>
              <span slot="title">{{subItem.title}}</span>
            </el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
    </div>
  </el-menu>
</template>

<script>
import menuData from './menuData';

export default {
  name: 'SideBar',
  data() {
    return {
      menuData: [],
      // isCollapse: true,
    };
  },
  mounted() {
    this.menuData = menuData;
  },
  methods: {
  },
};
</script>

<style scoped lang="less">
  .el-menu-vertical{
    width: 64px;
  }
</style>
