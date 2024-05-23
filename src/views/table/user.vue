<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="Mobile">
        <template slot-scope="scope">
          {{ scope.row.mobile }}
        </template>
      </el-table-column>
      <el-table-column label="Quota" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.quota }}</span>
        </template>
      </el-table-column>
      <el-table-column label="usingQuota" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.using_quota }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status | statusFilter }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="create_time" label="Created_time" width="200">
        <template slot-scope="scope">
          <span>{{ scope.row.create_time }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="update_time" label="Update_time" width="200">
        <template slot-scope="scope">
          <span>{{ scope.row.update_time }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/table'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        1: 'success',
        2: 'gray',
        3: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    }
  }
}
</script>
