<template>
  <div>
    <div class="background">
      <img :src="imgSrc" width="100%" height="100%" alt="" />
    </div>
    <div class="front">
      <nav-menu></nav-menu>
      <router-view/>
      <div>
        <el-row>
          <el-col :span="24">
            <el-row>
              <el-col :span="24">
                <div>
                  <p style="text-align: left;margin: 0.57rem 0.7rem;font-size: 0.65rem;font-weight:bold;margin-left:100px">我的收藏</p>
                </div>

                <!--<div>-->
                  <!--<p style="margin: 30px 50px;font-size: 25px">收藏的景点</p>-->
                <!--</div>-->
                <!--<div class="table">-->
                  <!--<template>-->
                    <!--<el-table :data="sceneColletions" style="margin: 0.85rem;width: 90%;" :show-header="false" max-height="200">-->
                      <!--<el-table-column prop="sceneColletions">-->
                        <!--<template slot-scope="scope">-->
                          <!--<div style="font-family: Microsoft YaHei;font-size: 0.35rem;margin-bottom:0.2rem" class="content"-->
                               <!--@click="tiananmen" @mouseover="mouseOver" @mouseleave="mouseLeave" :style="active">-->
                            <!--{{scope.row.name}}-->
                          <!--</div>-->
                        <!--</template>-->
                      <!--</el-table-column>-->
                    <!--</el-table>-->
                  <!--</template>-->
                <!--</div>-->

                <div>
                  <p style="margin: 30px 50px;font-size: 25px">收藏的游记</p>
                </div>
                <div class="table">
                  <template>
                    <el-table :data="tableData" style="margin: 0.85rem;width: 90%;" :show-header="false" max-height="200">
                      <el-table-column prop="travelStars">
                        <template slot-scope="scope">
                          <li v-for="item in scope.row.travelStars">
                            <div style="font-family: Microsoft YaHei;font-size: 0.35rem;margin-bottom:0.5rem" class="content">
                              {{ item.travel.content }}
                            </div>
                            <div style="font-family: Microsoft YaHei;font-size: 0.2rem" class="info1">
                              作者：{{ item.travel.authorName }}
                            </div>
                            <div style="font-family: Microsoft YaHei;font-size:  0.2rem" class="info2">
                              发布时间：{{ item.travel.createTime }}
                            </div>
                          </li>
                        </template>
                      </el-table-column>
                    </el-table>
                  </template>
                </div>

              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>


<script>
  import NavMenu from "../components/common/Nav";
  export default {
    name: "MyCollections",
    components: {
      NavMenu,
    },
    data(){
      return{
        imgSrc:require('../assets/background/1.png'),
        active:'',
        tableData: [],
        // sceneColletions:[
        //   {name:'天安门'}
        // ],
        // travelColletions:[
        //   {content:'平潭两日游',authorName:'lics',createTime:'2021-12-30 00:21:51'},
        //   {content:'上海迪士尼之行',authorName:'zxe',createTime:'2021-12-30 14:58:07'},
        //   {content:'成都！好吃！',authorName:'xzx',createTime:'2021-12-30 14:58:07'}
        // ],
      }
    },
    created(){
      this.$axios.post('/auth/user/get',{
        username:window.localStorage.getItem("username"),
      })
        .then((res)=>{
          let arr=[]
          arr.splice(0,1,res.data)
          this.tableData=arr
          console.log(arr)
        })
    },
    methods:{
      tiananmen(){
        this.$router.replace('/personalCenter')
      },
      mouseOver: function(){
        this.active = 'background-color: rgba(102, 204, 255, 0.3)';
      },
      mouseLeave: function () {
        this.active = '';
      },
    }

  }
</script>

<style>
  /* .el-table__row>td{
	border: none;
  } */
  .el-table::before {
    height: 0px;
  }
  .el-table,.el-table__expanded-cell {
    background: rgba(255, 255, 255, 0.3);
    /* background-color: transparent; */
  }
  .table{
    background: rgba(255, 255, 255, 0.3);
    /* background-color: transparent; */
  }
</style>

<style scoped>
  .background{
    width:80%;
    height:100%;
    z-index:-1;
    position: fixed;
  }
  .front{
    z-index:1;
  }
  .info1{
    display: inline;
    float: left;
    position: relative;
    margin-left: 1.7rem;
  }
  .info2{
    display: inline;
    float: left;
    position: relative;
    left: 25%;
  }
  .info3{
    display: inline;
    float: right;
    position: relative;
    margin-right:  1rem;
  }
  .table /deep/ .el-table th {
    /* background-color: transparent!important; */
    background: rgba(255, 255, 255, 0.3);
  }

  .table /deep/ .el-table tr {
    /* background-color: transparent!important; */
    background: rgba(255, 255, 255, 0.3);
  }
  .table /deep/  .el-table--enable-row-transition .el-table__body td, .el-table .cell{
    /* background-color: transparent; */
    background: rgba(255, 255, 255, 0.3);
  }
  .question:hover {
    /* text-decoration: underline; */
    color: #336699;
  }
  .question {
    text-align: left;
    font-weight: bold;
    margin-left: 60px;
    background-color: transparent;
  }
  .content{
    text-align: left;
    margin-left: 1.7rem;
    margin-top: 15px;
    background-color: transparent;
  }
  #demo-table-expand {
    font-size: 0;
  }
  #demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }

</style>
