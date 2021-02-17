<template>
  <div v-if="validProps" class="about-me">
    <v-container class="container">
      <rich-text
        class="about-me-title"
        :data="slice.primary.abschnittsuberschrift"
      />
      <rich-text :data="slice.primary.aboutme" class="about-me-description" />
    </v-container>
  </div>
</template>

<script>
import SliceProps from '../../../core/sliceProps'
import Components from '../../../core/components'
// import richText from '../richText.vue'
export default {
  name: 'AboutMe',
  //   components: { richText },
  mixins: [SliceProps, Components],
}
</script>

<style lang="scss" scoped>
.about-me {
  background-color: #aa0000;
  .container {
    .about-me-title {
      color: white;
      position: relative;
      text-align: center;
      margin-top: -75px;
      font-size: 30px;
      font-weight: normal;
    }
    .about-me-description {
      padding-top: 25px;
    }
  }
}
</style>
<style lang="scss"></style>
