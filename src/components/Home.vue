<template>
    <div>
       <slider></slider> 
       <list :list="list"></list> 
    </div>
</template>

<script>
import Slider from "./Slider" 
import List from "./List" 
export default {
    name:"home",
    data(){
        return {
            list:[]
        }
    },
    components:{
        Slider,
        List
    },
    mounted(){
        axios({
            url:"/data/index.data"
        }).then(res=>{
            this.list=res.data
           
            })
    }
}
</script>

