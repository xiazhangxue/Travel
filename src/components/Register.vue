<template>
<div v-loading.fullscreen.lock="loading"
      class="login"
      element-loading-spinner="fa fa-spinner fa-pulse fa-3x fa-fw">
  <vue-particles
          color="#292929"
          :particleOpacity="1"
          :particlesNumber="80"
          shapeType="circle"
          :particleSize="2"
          linesColor="#292929"
          :linesWidth="1"
          :lineLinked="true"
          :lineOpacity="0.8"
          :linesDistance="150"
          :moveSpeed="3"
          :hoverEffect="true"
          hoverMode="grab"
          :clickEffect="true"
          clickMode="remove"
      ></vue-particles>
  <el-row>
    <el-col :span="24">
      <div style="margin:0 auto;">
        <el-form :model="registerForm" :rules="rules" class="register_container" label-position="left"
                 label-width="0px" v-loading="loading" :ref="registerForm">
          <p class="register_title" style="font-size: 1rem;padding-top:120px;padding-bottom: 100px;font-weight:bold">用户注册</p>
          <el-form-item label-width="100px" label="用户名" prop="username">
            <el-input type="text" v-model="registerForm.username" auto-complete="off" placeholder="请输入用户名" ref="username"></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="用户密码" prop="password">
            <el-input type="password" v-model="registerForm.password" auto-complete="off" placeholder="请输入密码" show-password></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="邮箱" prop="email">
            <el-input type="text" v-model="registerForm.email" auto-complete="off" placeholder="请输入邮箱"></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="电话" prop="phone">
            <el-input type="text" v-model="registerForm.phone" auto-complete="off" placeholder="请输入电话号码"></el-input>
          </el-form-item>
          <el-form-item style="width: 100%;margin-top:14px;padding-top: 80px">
            <el-button type="primary" style="width: 50%;border: none;margin-top:14px" v-on:click="register(registerForm)">注册</el-button>
          </el-form-item>
          <el-form-item>
            已有账号? 去<el-link type="primary" href="login" :underline="false" style="margin-bottom: 2px">登录</el-link>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    //验证邮箱格式
    const dataValidEmail = (rule,value,callback) =>{
      if(value===''){
        return callback(new Error('Can\'t be empty'))
      }
      else{
          var reg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/;
          if(!reg.test(value)){
            return callback(new Error('邮箱格式不正确'))
          }
        return callback();
      }
    };
    const dataValidPhone = (rule,value,callback) =>{
      if(value===''){
        return callback(new Error('Can\'t be empty'))
      }
      else{
          var reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
          if(!reg.test(value)){
            return callback(new Error('手机号码格式不正确'))
          }
        return callback();
      }
    };
    return {
      registerForm: {
        username: '',
        password: '',
        email:'',
        phone:''
      },
      rules: {
        // blur 失去鼠标焦点时触发验证
        username: [{required: true, message: '用户名不能为空', trigger: 'blur'}],
        password: [{required: true, message: '密码不能为空', trigger: 'blur'}],
        email: [{required: true, message: '邮箱不能为空', trigger: 'blur'},{validator: dataValidEmail, trigger: 'blur'}],
        phone: [{required: true, message: '电话不能为空', trigger: 'blur'},,{validator: dataValidPhone, trigger: 'blur'}],
      },
      loading: false
    };
  },
  created(){
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('username')
  },
  methods: {
    register (formName) {
      this.$refs[formName].validate(valid => {
        if(valid){
          this.$axios.post('/auth/user/register',{
            username: this.registerForm.username,
            password: this.registerForm.password,
            email:this.registerForm.email,
            phone:this.registerForm.phone
          })
            .then(resp => {
              // 根据后端的返回数据修改
              if(resp.status != 400) {
                // 跳转到login
                this.$message({
                  message: '注册成功',
                  type: 'success'
                });
                // alert('successful registration');
                this.$router.replace('/login')
              }else{
                this.$message.error('该用户名或邮箱已被注册');
              }
            })
            .catch(error => {
              console.log(error);
              this.$message.error('注册请求失败');
            })
        } else {
          this.$message.error('格式不正确');
        }
      })
    }
  }
}
</script>

<style scoped>
  body{
    margin:0;
    padding:0;
    height: 100%;
    width: 100%;
  }
  #register_img{
    height: 100%;
    float: left;
    background-size: cover;
    border-radius: 0 25% 25% 0/ 50%;
  }
  .register_container{
    background-clip: padding-box;
    margin: 50px auto;
    width: 500px;
    padding: auto;
  }
  .register_title{
    margin: auto;
    text-align: center;
    color: #72707c;
  }
</style>

<style>
  #particles-js{
    width: 100%;
    height: calc(100% - 100px);
    position: absolute;
  }
</style>
