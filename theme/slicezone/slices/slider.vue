<template>
  <div v-if="validProps" class="carousel-section">
    <no-ssr>
      <Carousel
        class="carousel"
        :per-page="1"
        :autoplay="true"
        :navigation-enabled="true"
        navigation-prev-label
        navigation-next-label
        :autoplay-hover-pause="true"
        :loop="true"
        :autoplay-timeout="20000"
        :speed="1000"
        :mouse-drag="true"
      >
        <template v-for="(slide, index) in getSlider">
          <Slide v-if="slide.type === getSliderType" :key="index">
            {{ slide }}
          </Slide>
        </template>
      </Carousel>
    </no-ssr>
  </div>
</template>

<script>
import NoSSR from 'vue-no-ssr'
import SliceProps from '../../../core/sliceProps'
import Components from '../../../core/components'
export default {
  name: 'Slider',
  components: {
    'no-ssr': NoSSR,
    Carousel: () =>
      process.browser
        ? import('vue-carousel').then((Slider) => Slider.Carousel)
        : null,
    Slide: () =>
      process.browser
        ? import('vue-carousel').then((Slider) => Slider.Slide)
        : null,
  },
  mixins: [SliceProps, Components],
  computed: {
    getSlider() {
      const slides = []
      const items = this.$store.getters['cms/getSlideItems']
      Object.keys(items).forEach((item) => {
        slides.push(items[item])
      })
      return slides
    },
    getSliderType() {
      const type = this.validProps
        ? this.slice.primary.slider_typ.toLowerCase()
        : ''
      return type
    },
  },
}
</script>

<style lang="scss" scoped></style>
