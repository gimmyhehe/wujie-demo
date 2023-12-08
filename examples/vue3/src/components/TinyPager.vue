<template>
    <div style="position: relative; margin-top: 300px;overflow: hidden;">
        <tiny-pager
          mode="number"
          :page-size="5"
          :page-sizes="[5, 7, 10, 20, 50]"
          :total="100"
          @size-change="handleSizeChange"
        >
        </tiny-pager>
    </div>
  </template>
  
  <script>
  import { Pager, Modal } from '@opentiny/vue'
  
  export default {
    components: {
      TinyPager: Pager
    },
    methods: {
      handleSizeChange(val) {
        Modal.message({
          message: `size-change 事件，每页 ${val} 条`
        })
      }
    }
  }
  </script>
  