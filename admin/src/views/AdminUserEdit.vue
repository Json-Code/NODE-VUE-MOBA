<template>
  <div class="about">
    <h1>{{id ? '编辑' : '新建'}}管理员</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="管理员账号">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="管理员密码">
        <el-input type="password" v-model="model.password"></el-input>
      </el-form-item>      
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {}
    }
  },
  methods: {
    async save() {
      if (this.id) {
        await this.$http.put(`rest/admin_users/${this.id}`, this.model)
      } else {
        await this.$http.post('rest/admin_users', this.model)
      }
      this.$router.push('/admin_users/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch() {
      const res = await this.$http.get(`rest/admin_users/${this.id}`)
      this.model = res.data
    },
    async fetchparents() {
      const res = await this.$http.get('rest/admin_users')
      this.parents = res.data
    }
  },
  created() {
    this.fetchparents()
    this.id && this.fetch()
  }
}
</script>
