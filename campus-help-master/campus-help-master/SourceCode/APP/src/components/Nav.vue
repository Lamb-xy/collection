<template>
  <div id="Nav">
    <nav>
      <ul class="content_area">
        <li>
          <router-link to="/createHelp" :class="{ active: createHelp }">发布求助</router-link>
        </li>
        <li>
          <router-link to="/HelpMall" :class="{ active: HelpMall }">帮助大厅</router-link>
        </li>
        <li>
          <router-link to="/MyHelp" :class="{ active: MyHelp }">我的求助</router-link>
        </li>
        <li>
          <router-link to="/UserInfo"
            class="iconfont icon-geren"
            :class="{ active: UserInfo }"
            >个人信息</router-link>
        </li>
      </ul>
      <img src="/img/logo.png" alt="源供" />
    </nav>
        <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: {
    activePage: String,
  },
  computed: {
    createHelp() {
      if (this.activePage === "createHelp") return true;
      else return false;
    },
    HelpMall() {
      if (this.activePage === "HelpMall") return true;
      else return false;
    },
    MyHelp() {
      if (this.activePage === "MyHelp") return true;
      else return false;
    },
    Personnal() {
      if (this.activePage === "Personnal") return true;
      else return false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/reset.css";
@import "../assets/ttf/iconfont.css";

nav {
  height: 80px;
  width: 100%;
  position: relative;
  background-color: rgb(255, 255, 255);
}

ul {
  overflow: hidden;
  margin: 0 auto;
  padding: auto 0;
}

ul li {
  float: left;
}

ul li:nth-child(4) {
  float: right;
}
ul li:nth-child(4) a {
  width: 120px;
}

ul li a {
  display: inline-block;
  width: 100px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  color: #fcaf3b;
  font-size: 18px;
  transition: 0.2s;
}

ul li a:hover {
  background-color: #fa6b67;
  color: #fff;
}
.active {
  background-color: #fcaf3b;
  color: #fff;
}

img {
  height: 80px;
  width: 160px;
  display: block;
  position: absolute;
  left: 50%; 
  margin: -80px 0 0 -80px;
}
</style>
