<template>
  <div>
    <nav-menu></nav-menu>
    <router-view/>
    <div>
      <el-row>
        <el-col :span="21">
          <div style="margin: 0.1rem">
            <p style="margin-left:1rem;margin-top:40px;float: left;font-size: 0.6rem;" class="title">{{title}}</p>
            <!-- <div style="font-size:0.4rem;margin-top:47px;float:left;position:relative;left:10%">
                {{questionContent}}
            </div> -->
            <template>
              <el-table :data="tableData" style="width: 100%;margin-left:1.8rem" max-height="600">
                <el-table-column prop="travel">
                  <template slot-scope="scope" v-if="render">
                    <div style="font-size:0.2rem" class="left">
                      用户名：{{scope.row.authorName}}
                    </div>
                    <div style="font-size:0.1rem" class="right">
                      发布时间：{{scope.row.createTime}}
                    </div>
                    <div style="font-size:0.4rem;margin-top:40px">
                      {{scope.row.content}}
                    </div>
                    <div>
                    <!-- <div>{{scope.row.colorActive}}</div> -->
                      <div style="margin-top:25px;display:inline-block" @click="good(scope.$index)">
                        <vue-clap-button :size= "size"
                        :initClicked="scope.row.liked" />
                      </div>
                      <div style="margin-top:25px;display:inline-block;margin-left:50px" @click="star(scope.$index)">
                        <vue-clap-button :size= "size" icon=star
                        :initClicked="scope.row.stared" />
                      </div>
                      <div style="display:inline-block;margin-left:50px">
                        <el-button type="primary" icon="el-icon-edit" circle @click="commentShow()"></el-button>
                      </div>
                    </div>
                    <div>
                      
                      <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" :rules="rules"
                        placeholder="请输入内容" v-model="commentContent" v-show="show" style="margin-top:30px;width:800px">
                      </el-input>
                      <el-button type="primary" icon="el-icon-edit" 
                        style="margin-top:30px" plain v-show="show" @click="comment(scope.$index)">发布评论</el-button>
                      
                    </div>
                  </template>
                </el-table-column>
        
                <el-table-column type="expand">
                  <template slot-scope="scope1">
                  <el-form>
                    <div style="font-size: 0.3rem;font-weight:bold">精彩评论：</div>
                    <el-table :data="scope1.row.travelComments"> 
                      <el-table-column prop="content"  min-width="400px">
                      </el-table-column>
                      <el-table-column prop="createTime" style="font-size:0.1em;">
                      </el-table-column>
                    </el-table>
                  </el-form>
                  </template>
                </el-table-column>

              </el-table>
            </template>
          </div>
        </el-col>
      </el-row>
      <el-row> 
        <el-col :span="21" style="margin-left:1.8rem">
          <el-input :rules="rules" v-model="content" placeholder="请输入游记内容" style="margin-top:100px;width:80%"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="21" style="margin-left:1.8rem">
          <el-button type="primary" style="margin-top:20px;margin-bottom:20px" @click="submit()">发布游记</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import NavMenu from "../components/common/Nav";
  export default {
    name: "TravelRecord",
    components: {
      NavMenu
    },
    data(){
      return{
        render:false,
        fileList:[],
        size:40,
        title:'旅游社区',
        //questionContent:window.localStorage.getItem("questionContent"),
        content:'',
        commentContent:'',
        selectedRow:'',
        show:false,
        //userId:window.localStorage.getItem("userId"),
        tableData:[],
        tableDataText:[],
        tableDataColor:[],
        colorActive:'',
        colorNormal:'',
        rules:{
          content:[{required: true, message: '发布内容不能为空', trigger: 'blur'}],
          commentContent:[{required: true, message: '评论内容不能为空', trigger: 'blur'}]
        }
      }
    },
    created(){
      this.$axios.post('./travel/getAll',{ 
        username:window.localStorage.getItem("username"),
        //username:"admin"
      }).then(res =>{
        this.tableData = res.data;
        var length = this.tableData.length;
        for(var i=0;i<length;i++){
          //this.tableData[i].show = false;
          if(this.tableData[i].liked == true){
            this.tableData[i].liked = 1
          }
          else{
            this.tableData[i].liked = 0
          }
          if(this.tableData[i].stared == true){
            this.tableData[i].liked = 1
          }
          else{
            this.tableData[i].stared = 0
          }
        }
        // setTimeout(()=>{
        //     this.likeWhether();
        // },1000)
      })

    },

    methods:{
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },

      good(row){
        this.$axios.post('./travel/like',{
          username:window.localStorage.getItem("username"),
          travelID: this.tableData[row].id
        }).then(res =>{
          if(res.status === 200 && res.data.liked === false){
            this.$message("已取消点赞")
            location. reload()
            this.$router.go(2000)
          }
          else if(res.status === 200 && res.data.liked === true){
            this.$message.success("点赞成功")
            location. reload()
            this.$router.go(2000)
          }
          else{
            this.$message.error("操作失败")
          }
        }).catch(error =>{
          this.$message.error("操作请求失败")
        })
      },
      star(row){
        this.$axios.post('./travel/star',{
          username:window.localStorage.getItem("username"),
          travelID:this.tableData[row].id
        }).then(res =>{
          if(res.status === 200 && res.data.stared === false){
            this.$message("已取消收藏")
            location. reload()
            this.$router.go(2000)
          }
          else if(res.status === 200 && res.data.stared === true){
            this.$message.success("收藏成功")
            location. reload()
            this.$router.go(2000)
          }
          else{
            this.$message.error("操作失败")
          }
        }).catch(error =>{
          this.$message.error("操作请求失败")
        })
      },
      submit(){
        if(this.content!==''){
          this.$axios.post('./travel/create',{
            content:this.content,
            username:window.localStorage.getItem("username"),
          }).then(res =>{
            if(res.status === 200){
              this.$message.success("发布成功");
              
              location. reload()
              this.$router.go(2000)
            }
            else{
              this.$message.error("发布失败");
            }
          }).catch(error =>{
            this.$message.error("发布请求失败")
          })
        }
        
      },
      commentShow(){
        this.show = !this.show
      },
      comment(row){
        this.$axios.post('/travel/comment',{
          username:this.tableData[row].authorName,
          travelID:this.tableData[row].id,
          content:this.commentContent,
        }).then(res =>{
          if(res.data != ''){
            this.$message.success("评论成功")
            location. reload()
            this.$router.go(2000)
          }
          else{
            this.$message.error("评论失败")
          }
        }).catch(error =>{
          console.log(error);
          this.$message.error("评论请求失败")
        })
      }
    }
  }
</script>

<style scoped>
  .left{
    position:absolute;
    display: flex;

  }
  .right{
    float: right;
  }
  .title{
    font-weight: bold;
    font-size: 20px;
  }
</style>

<style>
  .title{
    font-weight: bold;
    font-size: 20px;
  }
</style>
