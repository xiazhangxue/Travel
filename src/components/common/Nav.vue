<template>
  <el-menu :default-active="path1" router mode="horizontal" background-color="rgba(255,255,255,0.7)" text-color="#222" style="height:100%">
    <el-button type="text"
               style="color: #757575; float:left;padding:0.2rem;margin-left:0.3rem;font-size:0.55rem;"
               @click="travelRecord"
               icon="el-icon-s-promotion">
      欢行
    </el-button>
    <el-submenu index="/login" style="float: right">
      <template slot="title"><i class="el-icon-s-custom"></i>我的</template>
      <el-menu-item @click="personalCenter"><i class="el-icon-user"></i>个人中心</el-menu-item>
      <el-menu-item @click="quit"><i class="el-icon-switch-button"></i>退出登录</el-menu-item>
    </el-submenu>
    <el-menu-item @click="scenes" style="float: right"><i class="el-icon-position"></i>景点</el-menu-item>

  </el-menu>
</template>


<script>
  export default {
    name: "AdminNav",
    data(){
      return{
        path1:''
      }
    },
    // mounted: function () {
    //   // 获得第二级路由，以设置侧边导航栏高亮
    //   let x = this.$route.path.indexOf('/', 0);
    //   if (x !== -1) {
    //     this.path1 = this.$route.path.substring(x)
    //   }
    //   else {
    //     this.path1 = this.$route.path
    //   }
    // },
    // created(){
    //   localStorage.setItem('name','era')
    //   localStorage.setItem('age','14')
    //   localStorage.setItem('id','68')
    //   localStorage.setItem('identity','370481200005270924')
    //   localStorage.setItem('balance','50000')
    //   localStorage.setItem('loanAmount','2000')
    //   localStorage.setItem('creditRate','一级')
    //   localStorage.setItem('nowDate','2020-04-07')
    // },
    methods: {
      quit() {
        this.$confirm('您将退出登录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          window.localStorage.setItem("token",null);
          window.localStorage.removeItem('identity');
          this.$router.replace({path: '/login'});
          this.$message.success("已退出当前账号")
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });
        });
      },
      travelRecord(){
        this.$router.replace('/travelRecord')
      },

      personalCenter(){
        this.$router.replace('/personalCenter')
      },
      travels(){
        this.$router.replace('/personalCenter')
      },
      scenes(){
        this.$router.replace('/allScenes')
      }

    }
  }
</script>

<style  scoped>
  .el-divider{
    height: 25px;
    position:relative ;
    float: left;
  }
</style>
