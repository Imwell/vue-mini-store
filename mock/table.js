const Mock = require('mockjs')

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    'status|1': [1, 2, 3],
    using_quota: '@integer(300, 5000)',
    mobile: '@mobile',
    quota: '@integer(300, 5000)',
    create_time: '@datetime',
    update_time: '@datetime'
  }]
})

module.exports = [
  {
    url: '/vue-admin-template/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
