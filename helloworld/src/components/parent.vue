<!-- 父组件 -->
<template>
    <div class="parent">
      <child @childFn="parentFn" :text=textData></child>
      <br/> 
      子组件传来的值 : {{message}}
    </div>
</template>

<script>
import child from './child';
export default {
    name:'parent',
    components:{
        child,
    },
    data() {
        return {
          message: '',
          textData:'父组件传给子组件的值'
        }
    },
    methods: {
       parentFn(payload) {
        this.message = payload;
      }
    },

}
</script>