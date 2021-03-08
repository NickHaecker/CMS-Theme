<template>
  <div v-if="validData" class="slice-zone">
    <template v-for="(slice, index) in slices">
      <template v-if="slice.slice_type === types.aboutme">
        <about-me
          :key="index"
          class="about-me-section homepage-slice"
          :slice="slice"
        />
      </template>
      <template v-if="slice.slice_type === types.slider">
        <slider :key="index" class="carousel homepage-slice" :slice="slice" />
      </template>
    </template>
  </div>
</template>

<script>
import { SliceTypes } from '../../core/sliceTypes'
import AboutMe from './slices/aboutMe.vue'
import Slider from './slices/slider.vue'
export default {
  name: 'Slicezone',
  components: {
    AboutMe,
    Slider,
  },
  props: {
    slices: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      types: SliceTypes,
    }
  },
  computed: {
    validData() {
      return this.slices.length > 0
    },
  },
}
</script>

<style lang="scss" scoped></style>
<style lang="scss"></style>
