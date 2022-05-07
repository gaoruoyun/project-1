<template>
  <div class="pagination">
    <button :disabled="pageNo==1" @click="$emit('getPageNo',pageNo-1)">上一页</button>
    <button v-if="startNumAndEndNum.start>1" @click="$emit('getPageNo',1)" :class="{active:pageNo==1}">1</button>
    <button v-if="startNumAndEndNum.start>2">···</button>
    <!-- {{startNumAndEndNum.end}} -->
    <template v-for="(page,index) in startNumAndEndNum.end" >
    <button :key="index" v-if="page>=startNumAndEndNum.start" @click="$emit('getPageNo',page)" :class="{active:pageNo==page}">{{page}}</button>
    </template>
    <button v-if="startNumAndEndNum.end < totalPage-1">···</button>
    <button v-if="startNumAndEndNum.end < totalPage" @click="$emit('getPageNo',totalPage)" :class="{active:pageNo==totalPage}">{{totalPage}}</button>
    <button :disabled="pageNo==totalPage" @click="$emit('getPageNo',pageNo+1)">下一页</button>
    
    <button style="margin-left: 30px">共 {{total}} 条</button>
  </div>
</template>

<script>
  export default {
    name: "Pagination",
    props:['pageNo','pageSize','total','continues'],
    computed:{
        totalPage(){
            //总页数
              //向上取整
            return Math.ceil(this.total/this.pageSize) || 1
        },
        startNumAndEndNum(){
          console.log(this.PageNo, this.continues)
          let start = 1,end = 0
          //连续页码数字5 就是至少五页 如果出现不正常的现象不够五页
          if (this.continues > this.totalPage) {
              start = 1
              end = this.totalPage
          } else {
              start = this.PageNo - parseInt(this.continues / 2)
              end = this.PageNo + parseInt(this.continue / 2)
              if (start < 1) {
                  start = 1
                  end = this.continues
              }
              if(end > this.totalPage){
                  end = this.totalPage
                  start = this.totalPage - this.continues +1
              }
          }
          return {
            'start': start,
            'end': end
          }
      }
    },
    created() {
      console.log(this.PageNo, this.continues)
    }
  }


  
</script>

<style lang="less" scoped>
  .pagination {
      text-align: center;
    button {
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      outline: none;
      border-radius: 2px;
      padding: 0 4px;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border: 0;

      &[disabled] {
        color: #c0c4cc;
        cursor: not-allowed;
      }

      &.active {
        cursor: not-allowed;
        background-color: #409eff;
        color: #fff;
      }
    }
  }
  .active{
      background:skyblue;
  }
</style>