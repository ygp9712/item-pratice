export default {
  changeCity(ctx, city) {
    /* 在list中调用的格式是this.$store.dispatch('changeCity',city); */
    ctx.commit('changeCity', city);
  },
}
