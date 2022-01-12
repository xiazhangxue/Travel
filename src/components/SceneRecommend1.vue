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
                  <p style="text-align: left;margin: 0.57rem 0.7rem;font-size: 0.65rem;font-weight:bold;margin-left:100px">Welcome to Shanghai</p>
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
          {title:'上海一日游路线',createTime:'2020-1-8 15:20:56',content:'Day1:外滩→城隍庙→豫园'},
          {title:'上海两日游路线',createTime:'2021-12-30 01:10:16',content:'Day1：豫园→外滩→东方明珠，Day2：静安寺→上海自然博物馆'},
        ],
        hotelCon:[
          {title:'皇冠假日酒店',createTime:'2021-12-30 01:10:16',content:'交通便捷，价格合适，环境不错，窗明几净'},
          {title:'上海外滩W酒店',createTime:'2021-12-30 01:10:16',content:'豪华时尚之选，坐拥一线江景'},
          {title:'上海静安香格里拉大酒店',createTime:'2021-11-30 18:30:26',content:'融合了酒店、购物、办公、住宅等多重功能，俯瞰城市美景'},
        ],
        foodCon:[
          {title:'苏浙汇',createTime:'2021-12-20 10:09:47',content:'中华菜系的优势工艺，糅合西方现代化的烹饪技术，致力于传承苏浙淮扬菜系的文化基础'},
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
