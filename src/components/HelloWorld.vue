<!--数据获取操作样例-->
<template>
  <div id="box">
    <div class="left">
      <el-button type="primary" @click="all">获取info表的全部数据</el-button>
      <h2>-----------------------------------</h2>
      <el-input v-model="id" placeholder="请输入id" class="input"></el-input>
      <el-button type="danger" @click="del">删除</el-button>
      <el-button type="primary" @click="get">查询</el-button>
      <h2>-----------------------------------</h2>
      <el-input v-model="id" placeholder="请输入id" class="input"></el-input>
      <el-input v-model="name" placeholder="请输入姓名" class="input"></el-input>
      <el-input v-model="address" placeholder="请输入地址" class="input"></el-input>
      <el-input v-model="tel" placeholder="请输入电话" class="input"></el-input>
      <el-button type="primary" @click="add">添加</el-button>
      <el-button type="primary" @click="update">修改</el-button>
    </div>
    <div class="right">
      <table class="hovertable">
        <tr>
          <th>ID</th><th>姓名</th><th>家庭住址</th><th>联系电话</th>
        </tr>
        <tr v-for="(item, index) in info"  v-bind:key="index">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.address}}</td>
          <td>{{item.tel}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data () {
    return {
      id: '',
      name: '',
      address: '',
      tel: '',
      info: []
    };
  },
  methods: {
    all() {    //查找info表全部数据
      axios.get('http://localhost:8888/list/all').then(res=>{
        // console.log(res.data);
        this.info = res.data
      }).catch(err=>{
        console.log("获取数据失败" + err);
      })
    },
    del() {    //删除操作
      axios.get('http://localhost:8888/list/del',{
        params: {
          id: this.id
        }
      }).then(res=>{
        // console.log(res.data);
        if(res.data.status == 200) {
          this.all()
        }else{
          this.$message({
            message: '删除失败',
            type: 'error'
          });
        }
      }).catch(err=>{
        console.log("操作失败" + err);
      })
    },
    get() {    //查询操作
      axios.get('http://localhost:8888/list/get',{
        params: {
          id: this.id
        }
      }).then(res=>{
        // console.log(res.data);
        this.info = res.data
      }).catch(err=>{
        console.log("操作失败" + err);
      })
    },
    add() {   //添加操作
      axios.get('http://localhost:8888/list/add',{
        params: {
          id: this.id,
          name: this.name,
          address: this.address,
          tel: this.tel
        }
      }).then(res=>{
        // console.log(res.data);
        if(res.data.status == 200) {
          this.all()
        }else{
          this.$message({
            message: '添加失败',
            type: 'error'
          });
        }
      }).catch(err=>{
        console.log("操作失败" + err);
      })
    },
    update() {     //修改操作
      axios.get('http://localhost:8888/list/update',{
        params: {
          id: this.id,
          name: this.name,
          address: this.address,
          tel: this.tel
        }
      }).then(res=>{
        // console.log(res.data);
        if(res.data.status == 200) {
          this.all()
        }else{
          this.$message({
            message: '修改失败',
            type: 'error'
          });
        }
      }).catch(err=>{
        console.log("操作失败" + err);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
