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
                  <p style="text-align: left;margin: 0.57rem 0.7rem;font-size: 0.65rem;font-weight:bold;margin-left:100px">我的游记</p>
                </div>
                <div class="table">
                  <template>
                    <el-table :data="tableData" style="margin: 0.85rem;width: 90%;" :show-header="false">
                      <el-table-column prop="travels">
                        <template slot-scope="scope">
                          <li v-for="item in scope.row.travels">
                            <div style="font-family: Microsoft YaHei;font-size: 0.35rem;margin-bottom:0.5rem" class="content">
                              {{ item.content }}
                            </div>
                            <div style="font-family: Microsoft YaHei;font-size: 0.2rem" class="info1">
                              发布时间：{{ item.createTime }}
                            </div>
                            <div style="font-family: Microsoft YaHei;font-size:  0.2rem" class="info2">
                              获赞数：{{ item.likeNumber }}
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
    name: "MyTravels",
    components: {
      NavMenu,
    },
    data(){
      return{
        imgSrc:require('../assets/background/1.png'),
        tableData: []
      }
    },
    created(){
      this.$axios.post('/auth/user/get',{
        username:window.localStorage.getItem("username")
      })
        .then((res)=>{

          let arr=[]
          arr.splice(0,1,res.data)
          this.tableData=arr

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

