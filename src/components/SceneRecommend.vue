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
                  <p style="text-align: left;margin: 0.57rem 0.7rem;font-size: 0.65rem;font-weight:bold;margin-left:100px">Welcome to Beijing</p>
                </div>

                <div>
                  <p style="margin: 30px 50px;font-size: 25px">推荐路线</p>
                </div>
                <div class="table">
                  <template>
                    <el-table :data="lineCon" style="margin: 0.85rem;width: 90%;" :show-header="false" max-height="300">
                      <el-table-column prop="lineCon">
                        <template slot-scope="scope">
                          <div style="font-family: Microsoft YaHei;font-size: 0.35rem;margin-bottom:0.2rem" class="content">
                            {{scope.row.title}}
                          </div>
                          <div style="font-family: Microsoft YaHei;font-size: 0.2rem" class="time">
                            发布时间：{{scope.row.createTime}}
                          </div>
                          <br>
                          <div style="font-family: Microsoft YaHei;font-size: 0.3rem" class="info">
                            具体路线：{{scope.row.content}}
                          </div>
                        </template>
                      </el-table-column>
                    </el-table>
                  </template>
                </div>

                <div>
                  <p style="margin: 30px 50px;font-size: 25px">推荐酒店</p>
                </div>
                <div class="table">
                  <template>
                    <el-table :data="hotelCon" style="margin: 0.85rem;width: 90%;" :show-header="false" max-height="300">
                      <el-table-column prop="lineCon">
                        <template slot-scope="scope">
                          <div style="font-family: Microsoft YaHei;font-size: 0.35rem;margin-bottom:0.2rem" class="content">
                            {{scope.row.title}}
                          </div>
                          <br>
                          <div style="font-family: Microsoft YaHei;font-size: 0.2rem" class="time">
                            发布时间：{{scope.row.createTime}}
                          </div>
                          <div style="font-family: Microsoft YaHei;font-size: 0.3rem" class="info" >
                            具体内容：{{scope.row.content}}
                          </div>
                        </template>
                      </el-table-column>
                    </el-table>
                  </template>
                </div>

                <div>
                  <p style="margin: 30px 50px;font-size: 25px">推荐美食</p>
                </div>
                <div class="table">
                  <template>
                    <el-table :data="foodCon" style="margin: 0.85rem;width: 90%;" :show-header="false" max-height="300">
                      <el-table-column prop="lineCon">
                        <template slot-scope="scope">
                          <div style="font-family: Microsoft YaHei;font-size: 0.35rem;margin-bottom:0.2rem" class="content">
                            {{scope.row.title}}
                          </div>
                          <br>
                          <div style="font-family: Microsoft YaHei;font-size: 0.2rem" class="time">
                            发布时间：{{scope.row.createTime}}
                          </div>
                          <div style="font-family: Microsoft YaHei;font-size: 0.3rem" class="info" v-html="scope.row.content">
                            具体内容：{{scope.row.content}}
                          </div>
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
    name: "MyContributions",
    components: {
      NavMenu,
    },
    data(){
      return{
        imgSrc:require('../assets/background/1.png'),
        tableData: [],
        lineCon:[
          {title:'北京两日游路线',createTime:'2022-1-6 19:28:51',content:'Day1:天安门广场→故宫博物院，Day2：颐和园→恭王府'},
          {title:'北京三日游路线',createTime:'2021-10-27 16:08:43',content:'Day1：天安门广场，Day2：故宫，Day3：天坛→明十三陵'},
        ],
        hotelCon:[
          {title:'北京丽晶酒店',createTime:'2021-12-30 11:46:39',content:'坐落于京城闻名遐迩的王府井核心地带，距紫禁城仅举步之遥,是体验熙熙攘攘的王府井商圈和四通八达京味老胡同的绝佳之地'},
          {title:'北京圣庭酒店',createTime:'2021-10-27 16:17:23',content:'环境温馨优雅，购物方便，交通方便'},
          {title:'北京金霖酒店',createTime:'2022-1-6 19:33:51',content:'与紫禁城、天坛皇家园林、长安街比邻相伴,四合院园林式的温泉酒店'},
        ],
        foodCon:[
          {title:'护国寺小吃',createTime:'2021-10-27 16:26:03',content:'名震京城的口碑老店，传统小吃应有尽有'},
          {title:'F Bistronome',createTime:'2022-1-6 19:36:51',content:'优雅时尚的法餐厅，窗外尽览繁华景色'},
        ],

      }
    },
    created(){
      this.$axios.post('/auth/user/get',{
        username:window.localStorage.getItem("username"),
      })
        .then((res)=>{
          this.tableData = res.data.data;
        })
    },
    methods:{

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
  .time{
    /* display: inline; */
    float: right;
    position: relative;
    margin-left: 1.7rem;
  }
  .info{
    margin-top:40px;
    margin-left: 2.2rem;
    text-align: left;
    margin-bottom:20px;
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
    display: inline;
    float: left;
    position: relative;
    margin-left: 1.7rem;
    background-color: transparent;
    font-weight: bold;
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
