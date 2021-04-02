<template>
  <v-container v-if="validProps" class="carousel-section">
    <rich-text class="carousel-title" :data="slice.primary.slice_uberschrift" />
    <div class="carousel-wrapper">
      <no-ssr>
        <Carousel
          class="carousel"
          :per-page-custom="[
            [320, 1],
            [768, 2],
            [1024, 3],
          ]"
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
            <Slide
              v-if="slide.type === getSliderType"
              :key="index"
              class="slide"
            >
              <nuxt-link class="slide-link" :to="{ path: slide.projekt_url }">
                <div class="slide-body">
                  <h4 class="category">{{ slide.data.category }}</h4>
                  <h3 class="title">{{ slide.data.projekt_titel[0].text }}</h3>
                  <div class="image-wrapper">
                    <img
                      class="image"
                      :src="slide.data.projekt_bild.url"
                      :alt="slide.data.projekt_bild.alt"
                      :title="slide.data.projekt_bild.alt"
                    />
                  </div>
                  <div class="short-description">
                    <rich-text
                      class="description"
                      :data="slide.data.projekt_beschreibung"
                    />
                  </div>
                  <div class="sub-part">
                    <div class="icon-wrapper">
                      <v-icon class="arrow-right">mdi-arrow-right</v-icon>
                      <span>Erfahre mehr</span>
                    </div>
                  </div>
                </div></nuxt-link
              >
            </Slide>
          </template>
        </Carousel>
      </no-ssr>
    </div>
    <div class="button-wrapper">
      <Button
        :button-text="slice.primary.link_text"
        :right="true"
        :left="false"
        text-color="black"
        :outlined="true"
        arrow-color="black"
        background-color="white"
        :route-link="slice.primary.link_zur_ubersicht"
        icon="mdi-arrow-right"
        class="button"
      />
    </div>
  </v-container>
</template>

<script>
import NoSSR from 'vue-no-ssr'
import SliceProps from '../../../core/sliceProps'
import Components from '../../../core/components'
import Button from '../../../../../components/theme/Button.vue'
export default {
  name: 'Slider',
  components: {
    Button,
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
      const items = this.slice.items
      items.forEach((item) => {
        Object.keys(item).forEach((i) => {
          const obj = item[i]
          obj.data.category = this.getItemCategory
          slides.push(obj)
        })
      })
      return slides
    },
    getSliderType() {
      const type = this.validProps
        ? this.slice.primary.slider_typ.toLowerCase()
        : ''
      return type
    },
    getItemCategory() {
      // set(item){

      // }
      // get(){
      return 'default'
      // }
    },
  },
}
</script>

<style lang="scss" scoped>
.carousel-section {
  .carousel-title {
    color: black;
    text-align: center;
    font-size: 30px;
    font-weight: normal;
  }
  .carousel-wrapper {
    .carousel {
      .slide {
        &:hover,
        &:focus {
          transform: translateY(10px);
          transition: 0.5s;
          .arrow-right {
            transform: rotate(-45deg);
            transition: 0.5s;
          }
        }

        .slide-link {
          color: black !important;
          text-decoration: none;
          .slide-body {
            background-color: #efefef;
            padding: 14px;

            .category {
            }
            .title {
            }
            .image-wrapper {
              width: 100%;
              height: auto;
              .image {
                width: 100%;
                height: auto;
              }
            }
            .sub-part {
              .icon-wrapper {
                .arrow-right {
                  color: #666666;
                  font-size: 30px;
                  font-weight: bold;
                }
              }
            }
          }
        }
      }
    }
  }
  .button-wrapper {
    display: flex;
    justify-content: center;
    padding: 14px 0;
    .button {
      width: 300px;
    }
  }
  @media (max-width: 425px) {
    .carousel-wrapper {
      .carousel {
        .slide {
          .slide-link {
            .slide-body {
              .category {
              }
              .title {
              }
              .image-wrapper {
                .image {
                }
              }
              .sub-part {
                .icon-wrapper {
                  .arrow-right {
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 768px) {
    .carousel-wrapper {
      height: 50vh;
      .carousel {
        .slide {
          .slide-link {
            .slide-body {
              .category {
              }
              .title {
              }
              .image-wrapper {
                .image {
                }
              }
              .sub-part {
                .icon-wrapper {
                  .arrow-right {
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 1024px) {
    .carousel-wrapper {
      .carousel {
        height: 100%;
        .slide {
          padding: 14px 7px;
          &:last-child {
            padding-right: 0;
          }
          &:first-child {
            padding-left: 0;
          }
          width: calc(100% / 3);
          height: 100%;
          .slide-link {
            .slide-body {
              height: 100%;

              .category {
              }
              .title {
              }
              .image-wrapper {
                padding: 14px 0;
                .image {
                }
              }
              .short-description {
                height: 48px;
                .description {
                  height: 100%;
                  text-overflow: ellipsis;
                  overflow: hidden;
                }
              }
              .sub-part {
                .icon-wrapper {
                  .arrow-right {
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
.carousel-section {
  .carousel-title {
  }
  .carousel-wrapper {
    .carousel {
      .slide {
        .slide-link {
          .slide-body {
            .category {
            }
            .title {
            }
            .image-wrapper {
              .image {
              }
            }
            .short-description {
              .description {
                p {
                  height: 100%;
                  margin-bottom: 0;
                }
              }
            }
            .sub-part {
              .icon-wrapper {
                .arrow-right {
                }
              }
            }
          }
        }
      }
    }
  }
  .button-wrapper {
    .button {
      .button {
        border-radius: 20px;
      }
    }
  }
  @media (max-width: 425px) {
    .carousel-wrapper {
      .carousel {
        .slide {
          .slide-link {
            .slide-body {
              .category {
              }
              .title {
              }
              .image-wrapper {
                .image {
                }
              }
              .sub-part {
                .icon-wrapper {
                  .arrow-right {
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 768px) {
    .carousel-wrapper {
      .carousel {
        .slide {
          .slide-link {
            .slide-body {
              .category {
              }
              .title {
              }
              .image-wrapper {
                .image {
                }
              }
              .sub-part {
                .icon-wrapper {
                  .arrow-right {
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 1024px) {
    .carousel-wrapper {
      .carousel {
        .VueCarousel-wrapper {
          height: 100%;
          .VueCarousel-inner {
            height: 100% !important;
            .slide {
              .slide-link {
                .slide-body {
                  .category {
                  }
                  .title {
                  }
                  .image-wrapper {
                    .image {
                    }
                  }
                  .sub-part {
                    .icon-wrapper {
                      .arrow-right {
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
