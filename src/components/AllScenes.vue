<template>
  <div>
    <nav-menu></nav-menu>
    <router-view/>


    <div>
      <el-row style="margin:50px 100px;position: center;" :gutter="20">
        <el-col :span="10" offset="3">
          <el-card :body-style="{ padding: '0px' }" style="height:450px;width:300px">
            <img src="../assets/background/tiananmen.jpg" class="image" alt="result" style="width:100%;height:390px">
            <div style="padding: 6px;">
              <div>
                <el-button type="text" class="button" v-on:click="tiananmen()">天安门</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="10">
          <el-card :body-style="{ padding: '0px' }" style="height:450px;width:300px">
            <img src="../assets/background/yuyuan.jpg" class="image" alt="result" style="width:100%;height:390px">
            <div style="padding: 6px;">
              <div>
                <el-button type="text" class="button" v-on:click="yuyuan()">豫园</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>

    </div>

  </div>
</template>

<script>
  import NavMenu from "../components/common/Nav";
  export default {
    name: "AllScenes",
    components: {
      NavMenu,
    },
    data(){
      return{

        id:localStorage.getItem('id'),

      }
    },

    mounted(){
      console.log("页面初始化");
      this.getTime();

    },

    methods:{

      tiananmen(){
        // this.$router.replace('/myTravels?id='+this.id);
        this.$router.replace('/sceneDetails');
      },
      yuyuan(){
        this.$router.replace('/sceneDetails1');
      },


    }
  }
</script>

<style scoped>
  #demo-table-expand {
    font-size: 0;
  }
  #demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }

  .button{
    font-size: 25px;
  }



</style>
