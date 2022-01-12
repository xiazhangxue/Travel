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
                  <div style="cursor: pointer;font-size:0.46rem;margin-bottom:20px;margin-top:10px" class="question">

                    {{title}}
                  </div>
                  <div style="font-family: Microsoft YaHei;font-size: 0.30rem;margin-bottom:0.5rem;margin-right: 0.5rem" class="content">
                  {{content}}
                </div></el-col>
                <el-col :span="9"><el-button type="primary" round @click="toRecommend()">推荐内容</el-button></el-col>
                <!-- <el-col :span="3"><el-button type="primary" round>推荐酒店</el-button></el-col>
                <el-col :span="3"><el-button type="primary" round>推荐美食</el-button></el-col> -->
                <el-col :span="15">
                  <div style="font-family: Microsoft YaHei;font-size: 0.30rem;margin-bottom:0.5rem;margin-right: 0.5rem" class="content">

                    地址：{{address}}
                  </div>
                </el-col>
                <div style="cursor: pointer;font-size:0.35rem;margin-left:10em;margin-top:10em;margin-bottom: 5em" class="question">
                  <br/>


                </div>
                <div style="cursor: pointer;font-size:0.35rem;margin-left:10em;margin-top:10em;margin-bottom: -1em" class="question">
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
    name: "SceneDetails",
    components: {
      NavMenu,
    },
    data(){
      return{
        value:null,
        comment:"",
        address:"在中华人民共和国首都北京市的中心、故宫的南端",
        title:"天安门",
        content:"天安门（Tian'anmen），坐落在中华人民共和国首都北京市的中心、故宫的南端，与天安门广场以及人民英雄纪念碑、毛主席纪念堂、人民大会堂、中国国家博物馆隔长安街相望，占地面积4800平方米，以杰出的建筑艺术和特殊的政治地位为世人所瞩目。\n" +
              "天安门是明清两代北京皇城的正门，始建于明朝永乐十五年（1417年），最初名“承天门”，寓“承天启运、受命于天”之意。设计者为明代御用建筑匠师蒯祥。清朝顺治八年（1651年）更名为天安门。由城台和城楼两部分组成，有汉白玉石的须弥座，总高34.7米。天安门城楼长66米、宽37米。城台下有券门五阙，中间的券门最大，位于北京市皇城中轴线上，过去只有皇帝才可以由此出入。正中门洞上方悬挂着毛泽东画像，两边分别是“中华人民共和国万岁”和“世界人民大团结万岁”的大幅标语。",
        imgSrc:require('../assets/background/1.png'),
        img:require('../assets/background/TianAnMen.jpeg'),
        tableData:[
            {
                content:"城楼下是碧波粼粼的金水河，河上有5座雕琢精美的汉白玉金水桥。城楼前两对雄健的石狮和挺秀的华表巧妙地相配合，使天安门成为一座完美的建筑艺术杰作。",
                createTime:"2021-2-3"
            },
            {
                content:"太雄伟太壮观了！！！",
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
        this.$router.replace('/sceneRecommend')
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

