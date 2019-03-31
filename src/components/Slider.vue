<template>
   <swipe class="my-swipe" >
    <swipe-item class="slide1"><img src="http://img3.imgtn.bdimg.com/it/u=611353119,2519085438&fm=26&gp=0.jpg
" alt="" style="width:100%;height:100%"></swipe-item>
    <swipe-item class="slide2"><img src="http://img2.imgtn.bdimg.com/it/u=26340581,1629198429&fm=26&gp=0.jpg" alt="" style="width:100%;height:100%"></swipe-item>
    <swipe-item class="slide3"><img src="http://img2.imgtn.bdimg.com/it/u=2497416138,3262317126&fm=26&gp=0.jpg" alt="" style="width:100%;height:100%"></swipe-item>
</swipe>
</template>
<script>
import 'vue-swipe/dist/vue-swipe.css'
import { Swipe, SwipeItem } from 'vue-swipe';
export default {
    name:"slider",
    components: {
    'swipe': Swipe,
    'swipe-item': SwipeItem
  },
}
</script>
<style scoped>
    .my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin-top: 34px
}
 
.slide1 {
  background-color: #0089dc;
  color: #fff;
}
 
.slide2 {
  background-color: #ffd705;
  color: #000;
}
 
.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
</style>


