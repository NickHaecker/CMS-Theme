<template>
  <div v-html="HTMLSerializer"></div>
</template>

<script>
import { HTMLSerializer } from '../../core/richText'
export default {
  name: 'RichText',
  props: {
    data: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
  },
  computed: {
    HTMLSerializer() {
      return HTMLSerializer(this.data)
    },
  },
}
</script>

<style lang="scss" scoped></style>
