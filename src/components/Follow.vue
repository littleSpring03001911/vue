<template>
    <div>
        <list :list="list"></list>
    </div>
</template>

<script>
import List from "./List"
export default {
    name:"follow",
    data(){
      return {
          list:[]
      }
    },
    components:{
        List
    },
    mounted(){
        axios({
            url:"/data/follow.data"
        }).then(res=>{
            this.list=res.data
        })
    }
}
</script>

