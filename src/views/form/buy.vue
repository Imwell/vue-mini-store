<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item prop="price" label="price">
        <el-input v-model.number="form.price" />
      </el-form-item>
      <el-form-item prop="pay_flag" label="pay_flag">
        <el-input v-model="form.pay_flag" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="onCancel">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { buy } from '@/api/table'

export default {
  data() {
    return {
      form: {
        price: undefined,
        pay_flag: undefined
      }
    }
  },
  methods: {
    onSubmit() {
      buy(this.form).then(res => {
        console.log(res)
        this.$refs['form'].resetFields()
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

