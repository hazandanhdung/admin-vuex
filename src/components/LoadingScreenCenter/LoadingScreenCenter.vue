<template>
  <div class="center__loading">
    <img :src="loadingGifCenter" class="center__screen"/>
  </div>
</template>

<script>
import loadingGifCenter from "@/assets/loading/loading_new.gif";

export default {
  name: "LoadingCenterScreen",
  data() {
    return {
      loadingGifCenter: loadingGifCenter
    };
  }
};
</script>

<style lang="scss" scoped>


/* Absolute Center CSS Spinner */
.center__loading {
  position: fixed;
  z-index: 9999;
  height: 2em;
  width: 2em;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

/* Transparent Overlay */
.center__loading:before {
  content: "";
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}

.center__screen {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
}

/* :not(:required) hides these rules from IE9 and below */
.center__loading:not(:required) {
  /* hide "loading..." text */
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

.center__loading:not(:required):after {
  display: block;
  font-size: 10px;
  width: 1em;
  height: 1em;
  margin-top: -0.5em;

  border-radius: 0.5em;
  -webkit-box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0,
  rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0,
  rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.5) -1.5em 0 0 0,
  rgba(0, 0, 0, 0.5) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0,
  rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;
  box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0,
  rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0,
  rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0,
  rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0,
  rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;
}

@media only screen and (max-width: 991px) {
  .center__loading img {
    left: 50%;
    position: fixed;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
}


</style>
