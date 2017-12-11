<template>
  <div class="login_wrap">
    <mt-header class="login_title" :title="loginTitle">
      <a href="./index.html" slot="left" class="backhome">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="login_nav">  
      <mt-button @click.native.prevent="active='tab-container2';loginTitle='登录';left=true;right=false;">登录</mt-button>
      <mt-button @click.native.prevent="active='tab-container3';loginTitle='注册';left=false;right=true;">注册</mt-button>
      <div class="moveBlock" :class={left,right}></div>
    </div> 
    <div class="tabs_content_container">  
      <div class="normal_login" v-show="active==='tab-container2'">
        <mt-field label="手机号码" v-model="signInUserPhoneNumber" placeholder="输入手机号" type="tel" ></mt-field>
        <!-- <mt-field label="密码" v-model="signInUserPassword" placeholder="6-20位密码" type="password"></mt-field> -->
        <mt-field label="验证码" placeholder="请输入验证码" type="number" v-model="signInUserIdentifyingCode">
          <mt-button @click.native="signInUserVerification()" v-show="!sendSignInIdentifyingCode" type="primary" size="normal" >
            验证码
          </mt-button>
          <mt-button v-show="sendSignInIdentifyingCode" type="danger" size="normal" >
            <div class="timeout">
              已发送{{signInUserSecs}}秒
            </div>
          </mt-button>
        </mt-field>
        <mt-button type="primary" @click.native="signInUser()" size="normal">登录</mt-button>
      </div>
      <div class="signUp_wrap" v-show="active==='tab-container3'">
        <mt-field label="手机号码" v-model="signUpUserPhoneNumber" placeholder="输入手机号" type="tel" ></mt-field>
        <mt-field label="验证码" placeholder="请输入验证码" type="number" v-model="signUpUserIdentifyingCode">
          <mt-button @click.native="signUpUserVerification()" v-show="!sendSignUpIdentifyingCode" type="primary" size="normal" >
            验证码
          </mt-button>
          <mt-button v-show="sendSignUpIdentifyingCode" type="danger" size="normal" >
            <div class="timeout">
              已发送{{signUpUserSecs}}秒
            </div>
          </mt-button>
        </mt-field>
        <mt-field label="密码" placeholder="6-20位密码" type="password" v-model="signUpUserPassword"></mt-field>
        <mt-button type="primary" size="normal" @click.native="signUpNewUser()">注册</mt-button>
        <mt-button type="primary" size="normal" @click.prevent="active='tab-container4';loginTitle='找回密码'">忘记密码</mt-button>
        </div>  
        <div class="signUp_wrap" v-show="active==='tab-container4'">
          <mt-field label="手机号码" v-model="forgottenPasswordPhone" placeholder="输入手机号" type="tel" ></mt-field>
            <mt-field label="验证码" placeholder="请输入验证码" type="number" v-model="forgottenPasswordCode">
              <mt-button @click.native="forgetPasswordVerification()" v-show="!sendforgottenPasswordCode" type="primary" size="normal" >
                验证码
              </mt-button>
              <mt-button v-show="sendforgottenPasswordCode" type="danger" size="normal" >
                <div class="timeout">
                  已发送{{forgottenSecs}}秒
                </div>
              </mt-button>
            </mt-field>
            <mt-field label="新密码" placeholder="6-20位密码" type="password" v-model="newPassword"></mt-field>
            <mt-button type="primary" size="normal" @click.native="modifyPassword()">确认修改</mt-button>
        </div>  
    </div>  
  </div>
</template>
<script>
  import { Toast } from 'mint-ui'
  import { QuickSignIn, QuickSignUp, QuickResetPassword } from '../assets/js/leanCloud'
  export default {
    data () {
      return {
        left: true,
        right: false,
        loginTitle: '登录',
        active: 'tab-container2',
        signInUserPhoneNumber: '',
        signInUserIdentifyingCode: '',
        sendSignInIdentifyingCode: false,
        signInUserSecs: 60,
        signUpUserPhoneNumber: '',
        signUpUserIdentifyingCode: '',
        sendSignUpIdentifyingCode: false,
        signUpUserPassword: '',
        signUpUserSecs: 60,
        forgottenPasswordPhone: '',
        forgottenPasswordCode: '',
        sendforgottenPasswordCode: false,
        newPassword: '',
        forgottenSecs: 60
      }
    },
    methods: {
      getSmsCodeTosignInSuccessFn (data) {
        this.sendSignInIdentifyingCode = true
        var signInCountdown = setInterval(() => {
          this.signInUserSecs -= 1
          if (this.signInUserSecs === 0) {
            clearInterval(signInCountdown)
            this.sendSignInIdentifyingCode = false
            this.signInUserSecs = 60
          }
        }, 1000)
      },
      quickSignInSuccessFn (success) {
        this.signInUserPhoneNumber = this.signInUserIdentifyingCode = ''
        this.sendSignInIdentifyingCode = true
        var signInCountdown = setInterval(() => {
          this.signInUserSecs -= 1
          if (this.signInUserSecs === 0) {
            clearInterval(signInCountdown)
            this.sendSignInIdentifyingCode = false
            this.signInUserSecs = 60
          }
        }, 1000)
        this.popupVisible = false
        this.logined = true
      },
      getSmsCodeTosignUpSuccessFn (success) {
        this.sendSignUpIdentifyingCode = true
        var signUpCountdown = setInterval(() => {
          this.signUpUserSecs -= 1
          if (this.signUpUserSecs === 0) {
            clearInterval(signUpCountdown)
            this.sendSignUpIdentifyingCode = false
            this.signUpUserSecs = 60
          }
        }, 1000)
      },
      quickSignUpSuccessFn (data) {
        Toast({
          message: '注册成功'
        })
        this.signUpUserPhoneNumber = this.signUpUserPassword = this.signUpUserIdentifyingCode = ''
        this.signUpUserSecs = 60
        this.sendSignUpIdentifyingCode = false
        this.signUpUserSecs = 60
      },
      getSmsCodeToResetPasswordSuccessFn (success) {
        console.log(success)
        this.sendforgottenPasswordCode = true
        var sendforgottenCountdown = setInterval(() => {
          this.forgottenSecs -= 1
          if (this.forgottenSecs === 0) {
            clearInterval(sendforgottenCountdown)
            this.sendforgottenPasswordCode = false
            this.forgottenSecs = 60
          }
        }, 1000)
      },
      resetPasswordSuccessFn (data) {
        Toast({
          message: '密码修改成功'
        })
        this.forgottenPasswordPhone = this.newPassword = this.forgottenPasswordCode = ''
        this.active = 'tab-container2'
        this.sendforgottenPasswordCode = false
        this.forgottenSecs = 60
      },
      errorFn (error) {
        Toast({
          message: error.rawMessage
        })
      },
      signInUserVerification () {
        QuickSignIn.getSmsCode(
          this.signInUserPhoneNumber,
          this.getSmsCodeTosignInSuccessFn,
          this.errorFn
        )
      },
      signInUser () {
        QuickSignIn.signInWithPhoneCode(
          this.signInUserPhoneNumber,
          this.signInUserIdentifyingCode,
          this.quickSignInSuccessFn,
          this.errorFn
        )
      },
      signUpUserVerification () {
        QuickSignUp.getSmsCode(
          this.signUpUserPhoneNumber,
          this.getSmsCodeTosignUpSuccessFn,
          this.errorFn
        )
      },
      signUpNewUser () {
        QuickSignUp.signUpWithPhoneCode(
          this.signUpUserPhoneNumber,
          this.signUpUserIdentifyingCode,
          this.quickSignUpSuccessFn,
          this.errorFn
        )
      },
      forgetPasswordVerification () {
        QuickResetPassword.getSmsCode(
          this.forgottenPasswordPhone,
          this.getSmsCodeToResetPasswordSuccessFn,
          this.errorFn
        )
      },
      modifyPassword () {
        QuickResetPassword.resetPasswordWithPhoneCode(
          this.forgottenPasswordCode,
          this.newPassword,
          this.resetPasswordSuccessFn,
          this.errorFn
        )
      }
    }
  }
</script>
<style scoped>
.login_wrap{
  width: 100%;
  height: 100%;
  background: #eee;
} 
.login_title{
  font-size:.38rem;
}
.login_title .backhome{
  display: block;
}
.login_nav {  
  padding: .2rem;  
  display: flex;
  justify-content: center;
  position: relative;
}  
.login_nav .moveBlock{
  position: absolute;
  bottom: 0;
  width: calc(50% - .22rem);
  height: 10px;
  background: rgb(62, 191, 241);
  transition: all .1s linear;
}
.login_nav .moveBlock.left{
  left: .22rem; 
}
.login_nav .moveBlock.right{
  left: 50%; 
}
.login_nav button{
  flex-grow: 1;
  border:none;
}
</style>