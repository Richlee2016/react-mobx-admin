<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <button @click="login">login</button>
    <button @click="logout">logout</button>
  </div>
</template>

<script>
import axios from "axios";
import qs from "queryString";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    login() {
      const sendData = {
        response_type: "code",
        client_id: 101435375,
        redirect_uri: encodeURI("http://173gg43187.iok.la/oauth/qq"),
        state: "http://localhost:8081/"
      };
      const href = `https://graph.qq.com/oauth2.0/authorize?${qs.stringify(
        sendData
      )}`;
      location.href = href;
      // axios({
      //   method: "get",
      //   url: "/qq"
      // }).then(res => {
      //   console.log(res);
      // });
    },
    logout() {
      axios({
        method: "delete",
        url: "/api/session/1"
      }).then(res => {
        console.log(res);
      });
    }
  },
  created() {
    const reg = /#/;
    const hash = location.hash;
    const openid = hash ? hash.replace(reg, "") : "";
    console.log(openid);
    axios({
      method: "get",
      url: `/api/session?openid=${openid}`
    }).then(res => {
      console.log(res);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
