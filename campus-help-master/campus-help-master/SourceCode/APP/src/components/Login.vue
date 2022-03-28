<template>
  <div class="login">

    <div class="login_zone">
      <div class="info_zone">
        <img class="logo" src="/img/logo_sdw.png" />
        <div class="login_info">
          <h2>用户登录</h2>
          <div class="username">
            <input type="text" placeholder="请输入电话号码" v-model="phone" />
          </div>
          <div class="psd">
            <input type="password" placeholder="请输入密码" v-model="pswd" />
          </div>
        </div>
        <button @click="submit_login()">登录</button>
        <div class="register"><a href="/Register.html">注册账号</a></div>
      </div>
    </div>
  </div>
</template>

<script>
import qs from "qs";
export default {
  name: "Login",
  data() {
    return {
      phone: "",
      pswd: "",
    };
  },
  methods: {
    submit_login() {
      console.log(qs.stringify(this._data))
      this.$axios.post("/api/login", qs.stringify(this._data)).then((res) => {
        if (res.data.success === 1) {
          window.sessionStorage.setItem("UserPhone", this._data.phone);
          window.open(`../components/Index.vue`, `_self`);
        } else if (res.data.success === 0) alert("ID或密码错误");
        else alert("请重新输入，再试一次");
      });
    },
  },
};
</script>

<style scoped>
@import "../assets/css/reset.css";
@import "../assets/ttf/iconfont.css";
.login {
  height: 100vh;
  background: url(/img/login_bg.png) center;
  background-size: cover;
}
.login_zone {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -350px 0 0 -250px;
  width: 500px;
  height: 500px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 0 20 rgb(0, 0, 0, 0.16);
}


.info_zone {
  float: right;
  width: 100%;
  display: table-cell;
  text-align: center;
}

img.logo {
  width: 250px;
  margin-top: 40px;
}

.login_info {
  margin-top: 30px;
  margin-left: 125px;
  width: 300px;
  height: 100px;
}

.login_info h2 {
  float: left;
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: 400;
}

.login_info input {
  border: 0;
  outline: 0;
  float: left;
  width: 100%;
  height: 40px;
  font-size: 18px;
  border: 1px solid #e9e4df;
  border-radius: 60px;
  margin-top: 20px;
  padding-left: 20px;
}
.login_info input:focus {
  border: 1px solid #fa6b67;
}
::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #b2b0ae;
  font-size: 16px;
}

.info_zone button {
  width: 220px;
  height: 50px;
  margin-top: 40px;
  border-radius: 100px;
  border: 0;
  font-size: 22px;
  color: white;
  background-image: linear-gradient(to right, #fcaf3b, #fa6b67);
  cursor: pointer;
  letter-spacing: 5px;
  margin-bottom: 10px;
}

.register a {
  color: #b2b0ae;
  font-weight: 100;
  font-size: 14px;
  letter-spacing: 1px;
}

.register a:visited {
  color: #b2b0ae;
}
</style>