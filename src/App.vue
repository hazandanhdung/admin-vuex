<template>
  <div>
    <router-view></router-view>
    <loading-center-screen v-if="loading"></loading-center-screen>
  </div>
</template>

<script>
import LoadingCenterScreen from "@/components/LoadingScreenCenter/LoadingScreenCenter";
import {mapState} from "vuex";

export default {
  components: {
    LoadingCenterScreen
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      loading: state => state.Common.loading
    }),
  }
}
</script>
