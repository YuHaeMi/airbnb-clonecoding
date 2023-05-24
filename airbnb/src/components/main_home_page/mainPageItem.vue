<template>
  <div class="itemGrid">
    <div class="itemFlexWrap" v-for="(data, index) in dataChange()" :key="index">
      <div class="itemIntro">
        <div class="intro01">
          <p>{{ data.address }}</p>
          <div class="introStar">
            <span class="su0q88m dir dir-ltr">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="height: 12px; width: 12px; fill: currentcolor;">
                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                </path>
              </svg>
            </span>
            <span class="introStarNum">{{ data.star }}</span>
          </div>
        </div>
        <div>
          <p class="introText">호스트: {{ data.name }} 님</p>
        </div>
        <div>
          <p class="introText">{{ data.schedule }}</p>
        </div>
        <div>
          <p class="introText textBold">&#8361; {{ data.price }} /박</p>
        </div>
        <div>
          <p></p>
        </div>
      </div>
      <div class="itemImg">
        <swiper ref="filterSwiper" :options="callSwiperOption(index)" role="tablist">
          <swiper-slide role="tab" v-for="(item, index) in data.introImage" :key="index">
            <img class="imgThumbnail" :src="item" />
          </swiper-slide>
        </swiper>
        <div class="itemBtnWrap">
          <div class="btnWrap1">
            <div class="heartBtnWrap">
              <button aria-label="위시리스트에 추가: Lindfield, 영국" data-testid="listing-card-save-button" type="button" class="heartBtn"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: rgba(0, 0, 0, 0.5); height: 24px; width: 24px; stroke:#fff; stroke-width: 2; overflow: visible;">
                <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z">
                </path>
              </svg>
            </button>
          </div>
          </div>
          <div class="btnWrap2">
            <span :class="`item-img-prev${index}`" id="itemPrev">
              <div class="btnWrap itemWrap">
                <div class="imgBtnFlex">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;">
                    <g fill="none">
                      <path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932">
                      </path>
                    </g>
                  </svg>
                </div>
              </div>
            </span>
            <span :class="`item-img-next${index}`" id="itemNext">
              <div class="btnWrap itemWrap">
                <div class="imgBtnFlex">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;">
                    <g fill="none">
                      <path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932">
                      </path>
                    </g>
                  </svg>
                </div>
              </div>
            </span>
          </div>
          <div class="btnWrap3">
            <div :class="`swiper-pagination${index}`" id="itemPagination"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import jsonData from '@/assets/mainItems.json'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'

const itemList = jsonData
export default {
  name: 'mainPageItem',
  data () {
    return {
      itemList
      // swiperOption:
    }
  },
  methods: {
    callSwiperOption (aa) {
      let test = {
        speed: 300,
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        // spaceBetween: 40,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        freeMode: false,
        resistance: false, // 슬라이드 터치 저항 여부
        allowTouchMove: true, // (false-스와이핑안됨)버튼으로만 슬라이드 조작이 가능
        centerInsufficientSlides: true,
        navigation: {
          nextEl: '.item-img-next' + aa,
          prevEl: '.item-img-prev' + aa
        },
        pagination: {
          el: '.swiper-pagination' + aa,
          type: 'bullets',
          clickable: true
        }
      }
      // test.navigation.nextEl = '.item-img-next' + aa
      // test.navigation.prevEl = '.item-img-prev' + aa
      // console.log(test.navigation.nextEl)
      return test
    },
    dataChange () {
      for (let i = 0; i < this.itemList.length; i++) {
        // console.log('i :' + i)
        // console.log(this.itemList)
        // console.log(this.itemList[i])
        // console.log(this.itemList[i].introImage)
        for (let j = 0; j < this.itemList[i].introImage.length; j++) {
          // console.log('j :' + j)
          // console.log('img --------' + this.itemList[i].introImage[j])
          // console.log('this.itemList' + this.itemList[i].introImage[j])
          this.itemList[i].introImage[j] = require('@/' + this.itemList[i].introImage[j] + '.jpg')
        }
      }
      return this.itemList
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style lang="scss" scoped>
.swiper-container {
  .swiper-container {
    padding: 0 20px; // 여백값을 지정할 경우 슬라이드의 시작점과 종점이 이에 영향을 받아 변경됨
    &:before,
    &:after { // 가상선택자를 활용하여 그라데이션 값 추가
      display: block;
      position: absolute;
      top: 0;
      width: 20px; // container에 준 여백값보다 크지 않게 사이즈 지정하기 (swiper-slide의 클릭 이벤트에 영향을 주지 않고, 이렇게 지정해야 그라데이션이 영역 내부에 있는 탭이 스크롤 하기 전엔 영향을 주지 않음)
      z-index: 10;
      content: "";
    }
    &:before {
      left: 0;
      background: linear-gradient(90deg, #fff -20.19%, rgba(255, 255, 255, 0.8) 18.31%, rgba(255, 255, 255, 0) 75%);
    }
    &:after {
      right: 0;
      background: linear-gradient(270deg, #fff -20.19%, rgba(255, 255, 255, 0.8) 18.31%, rgba(255, 255, 255, 0) 75%);
    }
  }
  .swiper-wrapper {
    .swiper-slide {
      width: 100%; // auto 값을 지정해야 슬라이드의 width값이 텍스트 길이 기준으로 바뀜
      font-size: 14px;
      text-align: center;
      color: #84868c;
      border: 0;
      border-radius: 18px;
      background: transparent;
      appearance: none;
    }
  }
}
</style>
