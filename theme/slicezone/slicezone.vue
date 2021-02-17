<template>
  <div v-if="validData">
    <template v-for="(slice, index) in slices">
      <template v-if="slice.slice_type === types.aboutme">
        <about-me :key="index" :slice="slice" />
      </template>
    </template>
  </div>
</template>

<script>
import { SliceTypes } from '../../core/sliceTypes'
import AboutMe from './slices/aboutMe'
export default {
  name: 'Slicezone',
  components: {
    AboutMe,
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
