<template>
    <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="手机号">
    <el-input v-model="form.phone"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="form.password" type="password"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">登陆</el-button>
    <el-button type="primary" @click="refresh">刷新</el-button>
    <el-button type="primary" @click="status">查看登录状态</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      form: {
        phone: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      axios.get('http://localhost:3000/login/cellphone?phone=' + this.form.phone + '&password=' + this.form.password, {
        xhrFields: {
          withCredentials: true
        }
      }).then(response => {
        if (response.status === 200) {
          this.$alert('登陆成功', '提示', {
            // confirmButtonText: '确定',
            callback: action => {
              this.$message({
                type: 'success',
                message: `action: ${action}`
              })
            }
          })
        }
      }).catch(error => {
        this.$alert(error, '提示', {
          // confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'success',
              message: `action: ${action}`
            })
          }
        })
      })
    },
    status () {
      axios.get('http://localhost:3000/login/status', {
        xhrFields: {
          withCredentials: true
        }
      }).then(response => {
        console.log(response)
      }).catch(error => {
        this.$alert(error, '提示', {
          callback: action => {
            this.$message({
              type: 'success',
              message: `action: ${action}`
            })
          }
        })
      })
    },
    refresh () {
      axios.get('http://localhost:3000/login/refresh', {
        xhrFields: {
          withCredentials: true
        }
      }).then(response => {
        console.log(response)
      }).catch(error => {
        this.$alert(error, '提示', {
          callback: action => {
            this.$message({
              type: 'success',
              message: `action: ${action}`
            })
          }
        })
      })
    }
  }
}
</script>
