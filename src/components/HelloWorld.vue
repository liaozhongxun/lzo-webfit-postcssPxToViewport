<template>
  <div class="hello">
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
div {
  margin: 40px 0 0;
  font-weight: 600;
  width: 750px;
  height: 250px;
  background: #ff0;
}

</style>
