<template>
  <div>
    <nav-menu></nav-menu>
    <router-view/>


    <div>
      <el-row style="margin:50px 100px;position: center;" :gutter="20">
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" style="height:450px;width:230px">
            <img src="../assets/background/C1.jpg" class="image" alt="result" style="width:100%;height:390px">
            <div style="padding: 6px;">
              <div>
                <el-button type="text" class="button" v-on:click="travels()">我的游记</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }" style="height:450px;width:230px">
          <img src="../assets/background/C2.jpg" class="image" alt="result" style="width:100%;height:390px">
          <div style="padding: 6px;">
            <div>
              <el-button type="text" class="button" v-on:click="collections()">我的收藏</el-button>
            </div>
          </div>
        </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" style="height:450px;width:230px">
            <img src="../assets/background/C3.jpg" class="image" alt="result" style="width:100%;height:390px">
            <div style="padding: 6px;">
              <div>
                <el-button type="text" class="button" v-on:click="contributions()">我的推荐</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" style="height:450px;width:230px">
            <img src="../assets/background/C4.jpg" class="image" alt="result" style="width:100%;height:390px">
            <div style="padding: 6px;">
              <div>
                <el-button type="text" class="button" v-on:click="comments()">个人信息</el-button>
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
    name: "PersonalCenter",
    components: {
      NavMenu,
    },
    data(){
      return{

        id:localStorage.getItem('id')

      }
    },

    mounted(){
      //console.log("页面初始化");

    },

    methods:{

      travels(){
        // this.$router.replace('/myTravels?id='+this.id);
        this.$router.replace('/myTravels');
      },
      comments(){
        this.$router.replace('/myComments');
      },
      collections(){
        this.$router.replace('/myCollections');
      },
      contributions(){
        this.$router.replace('/myContributions');
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
