<template>
  <div>
    <template v-if="validProps">
      <div class="intro-timeline">
        <rich-text :data="slice.primary.slice_titel" />
        <rich-text :data="slice.primary.abschnitt_beschreibung" />
      </div>
      <div class="timeline">
        <timeline
          :timeline-items="slice.items"
          :timeline-type="slice.slice_type"
        />
      </div>
    </template>
  </div>
</template>

<script>
import SliceProps from '../../../core/sliceProps'
import Components from '../../../core/components'
import Timeline from '../../../../../components/theme/Timeline'
export default {
  name: 'Resume',
  components: {
    Timeline,
  },
  mixins: [SliceProps, Components],
}
</script>

<style lang="scss" scoped></style>
