<template>
  <section class="january">
    <div class="titlebar">
      <h3>Janeiro, e a nossa viagem juntos!</h3>
    </div>
    <carousel-comp dia="21" blue="true" folder="D21" max="10" />
    <carousel-comp dia="22" blue="false" folder="D22" max="15" />
    <carousel-comp dia="23" blue="true" folder="D23" max="5" />
    <carousel-comp dia="24" blue="false" folder="D24" max="9" />
    <carousel-comp dia="25, 26, 27 e 28" blue="true" folder="D25" max="7" />
    <carousel-comp dia="29" blue="true" folder="D29" max="27" />
    <carousel-comp dia="30" blue="false" folder="D30" max="6" />
  </section>
</template>

<script>
import carouselComp from '@/components/carousel.vue'
export default {
  name: 'januaryComp',
  components: {
    carouselComp
  }
}
</script>

<style lang="scss">
.january {
  &__carousel h3 {
    color: var(--color1);
    margin-top: 10rem;
  }

  &__contentbox {
    display: flex;
    align-items: center;
    column-gap: 15rem;
  }

  &__contentbox button {
    width: 7.8rem;
    height: 7.8rem;
    background: transparent;
    border-style: none;
    border-radius: 50%;
  }

  &__contentbox img {
    max-width: var(--size2);
    max-height: 90rem;
  }
}
</style>
