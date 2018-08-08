<template>
  <div class="listen-content">
    <section class="head_goback" @click="goBack()">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <polyline points="12, 18 4, 9 12, 0" style="fill:none; stroke:rgb(0, 0, 0);stroke-width:2"  />
        </svg>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showHead: true
    }
  },
  methods: {
    goBack() {
      console.log("a")
      this.$router.back(-1);
      this.$store.dispatch('showHead', this.showHead); 
    }
  }
}
</script>

<style>

</style>
