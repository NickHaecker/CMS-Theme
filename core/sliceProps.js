export default {
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  computed: {
    validProps() {
      return Object.keys(this.slice).length > 0
    },
  },
}
