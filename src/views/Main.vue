<template>
  <div class="common-layout layout-container-demo" >
    <el-container>
      <el-aside width="200px" class="aside">
        <!-- 头像 -->
        <div class="block" style="padding: 4px 0px 0 40px;">
          <el-avatar :size="50" :src="circleUrl" />
        </div>

        <!-- 侧边栏 -->
        <el-scrollbar>
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            default-active="2"
            text-color="#fff"
          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>Navigator One</span>
              </template>
              <el-menu-item index="1-1">
                <router-link to="/main/one">item one</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/main/two">item two</router-link>
              </el-menu-item>
              <el-sub-menu index="1-4">
                <template #title>item three</template>
                <el-menu-item index="1-4-1">
                  <router-link to="/main/three">item three</router-link>
                </el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
              <el-icon><icon-menu /></el-icon>
              <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <el-icon><document /></el-icon>
              <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon><setting /></el-icon>
              <span>
                
                <router-link to="/main/four">Navigator Four</router-link>
              </span>
            </el-menu-item>
          </el-menu>


        </el-scrollbar>
      </el-aside>
      
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <div class="toolbar">
            <el-dropdown>
              <el-icon style="margin-right: 8px; margin-top: 1px">
                <setting/>
              </el-icon>

              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>View</el-dropdown-item>
                  <el-dropdown-item>Add</el-dropdown-item>
                  <el-dropdown-item>Delete</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <span>Tom</span>
          </div>
        </el-header>

        <el-main>
          <router-view></router-view>

        </el-main>
      </el-container>
    </el-container>
  </div>


  
</template>


<script lang="ts" >
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Message, 
} from '@element-plus/icons-vue'
import { stringify } from 'querystring'

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}


export default {
  components: {
    IconMenu,
    Location,
    Setting,
    Message,
  },
  data() {
    return {
      circleUrl: '',


    }
  },
  created() {
    console.log(`the component is now mounted.`)
  },
  mounted() {
    
  },
  beforeUnmount() {
    
  },
  methods() {
    

  },

}

</script>


<style scoped>
.layout-container-demo {
  height: 100%;
  
}
.el-container {
  height: 100%;
}

.el-main {
  background: #f5f5f5;
}

.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
  /* background: #a0cfff !important; */
  /* background: #a0cfff !important; */
  /* background-color: none; */
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}

.aside {
  /*  409EFF  #a0cfff */
  /* background: #a0cfff; */
  color: white;
 
}





.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
} 

.layout-container-demo a {
  color: #fff;
}
.layout-container-demo .el-sub-menu li.is-active a {
  color: var(--el-menu-active-color);
}

</style>
