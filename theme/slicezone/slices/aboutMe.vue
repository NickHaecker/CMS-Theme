<template>
  <div v-if="validProps" class="about-me">
    <v-container class="container">
      <rich-text
        class="about-me-title"
        :data="slice.primary.abschnittsuberschrift"
      />
      <rich-text :data="slice.primary.aboutme" class="about-me-description" />
      <div class="sub-wrapper">
        <div class="button-left-wrapper">
          <rich-text
            class="button-left-text"
            :data="slice.primary.buttonlefttext"
          />
          <Button
            class="button-arrow-left"
            button-text="zum Lebenslauf"
            icon="mdi-arrow-left"
            :left="true"
            :right="false"
            route-link="/ueber-mich"
          />
        </div>
        <div class="button-right-wrapper">
          <rich-text
            class="button-right-text"
            :data="slice.primary.buttonrighttext"
          />
          <Button
            class="button-arrow-right"
            button-text="zum Kontakt"
            icon="mdi-arrow-right"
            :left="false"
            :right="true"
            route-link="/kontakt"
          />
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import SliceProps from '../../../core/sliceProps'
import Components from '../../../core/components'
export default {
  name: 'AboutMe',
  mixins: [SliceProps, Components],
}
</script>

<style lang="scss" scoped>
.about-me {
  background-color: #aa0000;
  .container {
    .about-me-title {
      color: white;
      text-align: center;
      font-size: 30px;
      font-weight: normal;
    }
    .about-me-description {
      color: white;
    }
    .sub-wrapper {
      .button-left-wrapper {
        color: white;
        .button-left-text {
        }
        .button-arrow-left {
        }
      }
      .button-right-wrapper {
        color: white;
        .button-right-text {
        }
        .button-arrow-right {
        }
      }
    }
  }
  @media (max-width: 425px) {
    .container {
      .about-me-title {
      }
      .about-me-description {
      }
      .sub-wrapper {
        .button-left-wrapper {
          .button-left-text {
          }
          .button-arrow-left {
          }
        }
        .button-right-wrapper {
          .button-right-text {
          }
          .button-arrow-right {
          }
        }
      }
    }
  }
  @media (min-width: 768px) {
    .container {
      .about-me-title {
      }
      .about-me-description {
      }
      .sub-wrapper {
        .button-left-wrapper {
          .button-left-text {
          }
          .button-arrow-left {
          }
        }
        .button-right-wrapper {
          .button-right-text {
          }
          .button-arrow-right {
          }
        }
      }
    }
  }
  @media (min-width: 1024px) {
    .container {
      .about-me-title {
        position: relative;
        margin-top: -75px;
      }
      .about-me-description {
        padding-top: 25px;
        min-height: 300px;
      }
      .sub-wrapper {
        display: flow-root;
        .button-left-wrapper {
          float: left;
          min-width: 300px;
          .button-left-text {
          }
          .button-arrow-left {
          }
        }
        .button-right-wrapper {
          float: right;
          min-width: 300px;
          .button-right-text {
          }
          .button-arrow-right {
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
.about-me {
  @media (max-width: 425px) {
    .container {
      .about-me-title {
      }
      .about-me-description {
      }
      .sub-wrapper {
        .button-left-wrapper {
          .button-left-text {
          }
          .button-arrow-left {
          }
        }
        .button-right-wrapper {
          .button-right-text {
          }
          .button-arrow-right {
          }
        }
      }
    }
  }
  @media (min-width: 768px) {
    .container {
      .about-me-title {
      }
      .about-me-description {
      }
      .sub-wrapper {
        .button-left-wrapper {
          .button-left-text {
          }
          .button-arrow-left {
          }
        }
        .button-right-wrapper {
          .button-right-text {
          }
          .button-arrow-right {
          }
        }
      }
    }
  }
  @media (min-wdith: 1024px) {
    .container {
      .about-me-title {
      }
      .about-me-description {
      }
      .sub-wrapper {
        .button-left-wrapper {
          .button-left-text {
          }
          .button-arrow-left {
          }
        }
        .button-right-wrapper {
          .button-right-text {
          }
          .button-arrow-right {
          }
        }
      }
    }
  }
  .container {
    .about-me-title {
    }
    .about-me-description {
    }
    .sub-wrapper {
      .button-left-wrapper {
        .button-left-text {
        }
        .button-arrow-left {
          color: black !important;
          .button {
            background-color: white;
            border-radius: 15px;
            border: 1px white solid;
          }
        }
      }
      .button-right-wrapper {
        .button-right-text {
        }
        .button-arrow-right {
          color: black !important;
          .button {
            background-color: white;
            border-radius: 15px;
            border: 1px white solid;
          }
        }
      }
    }
  }
}
</style>
