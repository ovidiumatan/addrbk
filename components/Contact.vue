<template>
  <div>
    {{lastname}}  {{this.firstname}}
  </div>
</template>

<script>
    export default {
        name: "Contact",
      props:['firstname','lastname'],
    }
</script>

<style scoped>

</style>
