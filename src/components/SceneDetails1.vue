<template>
<div>
  <div class="background">
      <img :src="imgSrc" width="100%" height="100%" alt="" />
  </div>
  <div>
    <nav-menu class="nav"></nav-menu>
    <router-view/>
    <div class="front">

      <el-row>
        <el-col :span="24">
          <el-row>
            <el-col :span="24">
              <el-row :gutter="20">
                <el-col :span="9"><img :src="img" width="80%" height="80%"  alt="" style="margin-top: 2em"/></el-col>
                <el-col :span="15">
                  <div style="cursor: pointer;font-size:0.46rem;margin-bottom:20px;margin-top:2em" class="question">
                    {{title}}
                  </div>
                  <div style="font-family: Microsoft YaHei;font-size: 0.30rem;margin-bottom:1.0rem;margin-right: 0.5rem" class="content">
                    {{content}}
                  </div>
                </el-col>
                <el-col :span="15">
                  <div style="font-family: Microsoft YaHei;font-size: 0.30rem;margin-bottom:1.2rem;margin-right: 0.5rem" class="content">
                    地址：{{address}}
                  </div>
                </el-col>
                <el-col :span="9"><el-button type="primary" round @click="toRecommend()">推荐内容</el-button></el-col>
                <!-- <el-col :span="3"><el-button type="primary" round>推荐酒店</el-button></el-col>
                <el-col :span="3"><el-button type="primary" round>推荐美食</el-button></el-col> -->
                <div style="cursor: pointer;font-size:0.35rem;margin-left:10em;margin-top:10em;margin-bottom: 5em" class="question">
                  <br/>
                </div>
                <div style="font-size:0.35rem;margin-left:10em;margin-top:15em;margin-bottom: -1em" class="question">
                  精彩评论
                </div>
                <el-col :span="24"> <div class="table">
                  <template>
                    <el-table :data="tableData" style="margin: 0.85rem;width: 90%;" :show-header="false">
                      <el-table-column prop="questions">
                        <template slot-scope="scope">
                          <div style="font-family: Microsoft YaHei;font-size: 0.3rem;margin-top:0.5rem;margin-left: 5em" class="content">
                            {{scope.row.content}}
                          </div>
                          <div style="font-family: Microsoft YaHei;font-size:  0.2rem" class="info3">
                            发布时间：{{scope.row.createTime}}
                          </div>
                        </template>
                      </el-table-column>
                    </el-table>
                  </template>
                </div></el-col>
              </el-row>
              <div style="margin-bottom: 5em">  
                <div style="display:inline-block;font-size: 0.3rem;">评分：</div>
                <div style="display:inline-block">
                <el-rate v-model="value" show-text></el-rate>
                </div>
                <div>
                <el-input placeholder="请输入评论内容" v-model="comment"  class="input-with-select" style="width:50%;margin-left:1.2rem;margin-top:0.66rem"></el-input>
                <el-button type="primary" icon="el-icon-edit" circle @click="comments()"></el-button>
                </div>
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
    name: "SceneDetails1",
    components: {
      NavMenu,
    },
    data(){
      return{
        value:null,
        address:"上海市黄浦区福佑路168号",
        title:"豫园",
        content:"豫园（Yu Garden）位于上海市老城厢的东北部，北靠福佑路，东临安仁街，西南与上海老城隍庙毗邻，是江南古典园林，始建于明代嘉靖、万历年间，占地三十余亩。园内有江南三大名石之称的玉玲珑、1853年小刀会起义的指挥所点春堂，园侧有城隍庙及商店街等游客景点。豫园在1961年开始对公众开放，1982年被国务院列为全国重点文物保护单位。\n"+
        "园主人四川布政使潘允端从1559年（明嘉靖己未年）起，在潘家住宅世春堂西面的几畦菜田上建造园林。经过二十余年的苦心经营，建成了豫园。“豫”有“平安”、“安泰”之意，取名“豫园”，有“豫悦老亲”的意思。",
        imgSrc:require('../assets/background/1.png'),
        img:require('../assets/background/yugarden.jpeg'),
        comment:"",
        tableData:[
            {
                content:"九曲桥真好看，小笼包真好吃，下次还来",
                createTime:"2021-2-3"
            },
            {
                content:"有古典园林之美",
                createTime:"2021-2-9"
            }
        ],
      }
    },
    created(){
    
    },
    methods:{
      comments(){
        // this.$axios.post('./scene/comment',{
        //   username:window.localStorage.getItem("username"),
        //   sceneID:window.localStorage.getItem("sceneID"),
        //   content:this.comment,
        //   score:this.value
        // }).then(res =>{
        //   if(res.status === 200){
        //     this.$message.success("评价成功")
        //   }
        //   else{
        //     this.$message.error("评价失败");
        //   }
        // }).catch(error =>{
        //   this.$message.error("评价请求失败")
        // })
        if(this.comment == ""){
          this.$message.error("评价内容不能为空");
        }
        else if(this.value == ""){
          this.$message.error("评价分数不能为空")
        }
        else{
          this.$message.success("评价成功，等待审核")
          setTimeout(() =>{
            location.reload();
            this.$router.go(2000)
          },1000); 
        }
      },
      toRecommend(){
        this.$router.replace('/sceneRecommend1')
      }
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
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .el-table,.el-table__expanded-cell {
    /* background-color: transparent; */
    background: rgba(255, 255, 255, 0.3);
  }
  .table{
    /* background-color: transparent; */
    background: rgba(255, 255, 255, 0.3);
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
  .head1{
      display: inline;
      float: left;
  }
  /* .comments{
      display: inline;
  } */
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
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

