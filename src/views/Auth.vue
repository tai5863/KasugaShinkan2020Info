<template>
  <div id="form">
    <Header1 class="header"></Header1>
    <div id="container">
      <div id="pass_form_container">
        <form>
          <div class="item_container">
            <h2 class="form_title">パスワードを入力してください</h2>
            <input type="password" class="input1" v-model="pass" @keyup.enter="next()">
          </div>
          <input class="send" value="送信する" @click="next()" type="submit">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Header1 from '@/components/Header1.vue'

export default {
  name: 'Auth',
  components: {
    Header1
  },
  data () {
    return {
      pass: '',
      isPass: false
    }
  },
  mounted() {
    this.isPass = localStorage.isPass;
    console.log(this.isPass);
  },
  watch:{
    isPass(value) {
      localStorage.isPass = value;
    }
  },
  methods: {
    next: function(){
      let params = new URLSearchParams();
      params.append('password', this.pass);
      this.axios.post('https://kzkymur.com/api/password/', params)
      .then(response => {
        this.pass = '';
        localStorage.isPass = response.data.result;
        this.isPass = localStorage.isPass;
        console.log(this.isPass);
        if (this.isPass) {
          window.alert('正しく認証できました！');
          localStorage.pass = response.data.key;
          this.$router.push('/Authentication_for_committee_member/form');
        } else {
          window.alert('パスワードが正しくありません！');
        }
      })
      .catch(error => {
        window.alert(error.response.data);
        this.pass = '';
      });
    }
  }
}
</script>

<style scoped>
#container {
  text-align: center;
}

.form_title_container {
  border-bottom: solid 10px orange;
  display: inline-block;
  line-height: 1;
  margin-top: 50px;
  width: 200px;
  margin-bottom: 10px;
}
form {
  margin-top: 100px;
}
.form_title {
  margin-top: 30px;
  margin-bottom: 15px;
}
.input1 {
  width: calc(80% + 12px);
  height: 60px;
  max-width: 500px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 7px;
  font-size: 17px;
  font-weight: 500;
  padding-left: 15px;
  font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.send {
  -webkit-appearance: none;
  width: 31%;
  min-width: 150px;
  color: white;
  font-size: 20px;
  font-weight: 1000;
  font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(30, 30, 30);
  border: none;
  padding: 20px 0;
  margin-top: 80px;
  margin-bottom: 150px;
  cursor: pointer;
  transition: 500ms;
  text-align: center;
}
.send:hover {
  background-color: orange;
  color: rgb(30, 30, 30);
}
</style>
