<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item prop="mobile" label="mobile">
        <el-input v-model="form.mobile" />
      </el-form-item>
      <el-form-item prop="quota" label="quota">
        <el-input v-model.number="form.quota" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="onCancel">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { buy, updateQuota } from '@/api/table'

export default {
  data() {
    return {
      form: {
        mobile: '',
        quota: undefined
      }
    }
  },
  methods: {
    onSubmit() {
      updateQuota(this.form).then(res => {
        if (res.status === 200) {
          this.$message.success('成功')
          this.$refs['form'].resetFields()
        }
      })
    },
    onCancel() {
      this.$refs['form'].resetFields()
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

