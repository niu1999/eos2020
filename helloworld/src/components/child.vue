<template>
  <div class="child">
    <input type="text" v-model="message" />
    <button @click="click">Send</button>
    <div>{{text}}</div>
  </div>
</template>
<script>
export default {
  name: 'child',
  props: ['text'],
    data() {
        return {
          // 默认
          message: '我是来自子组件的消息',
          msg:'牛牛'
        }
    },
    methods: {
      click() {
            this.$emit('childFn', this.message);
        }
    },
    created(){
      console.log(this)
      console.log(this.$store.state.name)
      this.$store.commit('showPeople',this.msg)
      console.log(this.$store.state.name)
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
