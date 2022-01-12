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
                  <p style="text-align: left;margin: 0.57rem 0.7rem;font-size: 0.65rem;font-weight:bold;margin-left:100px">我的推荐</p>
                </div>

                <div>
                  <p style="margin: 30px 50px;font-size: 25px">推荐路线</p>
                </div>
                <div class="table">
                  <template>
                    <el-table :data="lineCon" style="margin: 0.85rem;width: 90%;" :show-header="false" max-height="200">
                      <el-table-column prop="lineCon">
                        <template slot-scope="scope">
                          <div style="font-family: Microsoft YaHei;font-size: 0.35rem;margin-bottom:0.2rem" class="content">
                            {{scope.row.title}}
                          </div>
                          <div style="font-family: Microsoft YaHei;font-size: 0.2rem" class="info1">
                            发布时间：{{scope.row.createTime}}
                          </div>
                          <div style="font-family: Microsoft YaHei;font-size: 0.2rem" class="info2">
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
                    <el-table :data="hotelCon" style="margin: 0.85rem;width: 90%;" :show-header="false" max-height="200">
                      <el-table-column prop="lineCon">
                        <template slot-scope="scope">
                          <div style="font-family: Microsoft YaHei;font-size: 0.35rem;margin-bottom:0.2rem" class="content">
                            {{scope.row.title}}
                          </div>
                          <div style="font-family: Microsoft YaHei;font-size: 0.2rem" class="info1">
                            发布时间：{{scope.row.createTime}}
                          </div>
                          <div style="font-family: Microsoft YaHei;font-size: 0.2rem" class="info2">
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
                    <el-table :data="foodCon" style="margin: 0.85rem;width: 90%;" :show-header="false" max-height="200">
                      <el-table-column prop="lineCon">
                        <template slot-scope="scope">
                          <div style="font-family: Microsoft YaHei;font-size: 0.35rem;margin-bottom:0.2rem" class="content">
                            {{scope.row.title}}
                          </div>
                          <div style="font-family: Microsoft YaHei;font-size: 0.2rem" class="info1">
                            发布时间：{{scope.row.createTime}}
                          </div>
                          <div style="font-family: Microsoft YaHei;font-size: 0.2rem" class="info2">
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
          {title:'上海两日游路线',createTime:'2021-12-30 01:10:16',content:'Day1：豫园→外滩→东方明珠，Day2：静安寺→上海自然博物馆'},
          {title:'北京三日游路线',createTime:'2021-10-27 16:08:43',content:'Day1：天安门广场，Day2：故宫，Day3：天坛→明十三陵'},
        ],
        hotelCon:[
          {title:'皇冠假日酒店',createTime:'2021-12-30 01:10:16',content:'交通便捷，价格合适，环境不错，窗明几净'},
          {title:'上海外滩W酒店',createTime:'2021-12-30 01:10:16',content:'豪华时尚之选，坐拥一线江景'},
        ],
        foodCon:[
          {title:'Dip in Gelato',createTime:'2021-12-30 01:10:16',content:'调味很惊喜的一家gelato店，每季都会上新'},
          {title:'惠食佳',createTime:'2021-12-30 01:10:16',content:'地道茶餐厅，推荐啫啫煲、盐焗乳鸽和腊味煲仔饭'},
          {title:'咖啡喝伐',createTime:'2021-12-30 01:10:16',content:'咖啡小店，开了好几家了，最爱桂花燕麦奶澳白'},
          {title:'小桃园餐厅',createTime:'2021-12-30 01:10:16',content:'好多年的老店了，素交拌面必点！大排和辣肉也不错'},
          {title:'沪西老弄堂面馆',createTime:'2021-12-30 01:10:16',content:'口味好服务也好'}
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
