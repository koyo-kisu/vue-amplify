<template>
  <div id="app">
    <div v-if="isSignedIn">
      <amplify-greetings></amplify-greetings>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    isSignedIn() {
      return this.$store.state.user !== null;
    },
  },
};
</script>