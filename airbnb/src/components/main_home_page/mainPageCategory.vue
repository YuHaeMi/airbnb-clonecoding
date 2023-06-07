<template>
  <div class="categoryPosition">
    <div ref="scrollTest" class="categoryAllWrap">
      <div class="categoryWrap">
        <div class="categoryIconWrap">
          <swiper ref="filterSwiper" :options="swiperOption" role="tablist">
            <swiper-slide role="tab" v-for="(item, index) in icon()" :key="index">
              <label @click="activeEvent(index)">
                <div>
                  <span class="labelSpan">
                    <div>
                      <img :src="item" style="width:24px; height: 24px;" class="categoryImg"/>
                    </div>
                    <div class="categoryBottom">
                      <span class="categorySpan">{{ categoryName[index] }}</span>
                      <div class="categorySpanAfter"></div>
                    </div>
                  </span>
                </div>
              </label>
            </swiper-slide>
          </swiper>
          <span class="swiper-btn-prev" style="display: none;">
            <div class="btnWrap">
              <div class="btn-flex">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;">
                  <g fill="none">
                    <path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932">
                    </path>
                  </g>
                </svg>
              </div>
            </div>
            <div class="swiper-btn-after"></div>
          </span>
          <span class="swiper-btn-next">
            <div class="swiper-btn-before"></div>
            <div class="btnWrap">
              <div class="btn-flex">
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
      </div>
      <div class="filterWrap">
        <div class="filterWrapBox" @click="modalOpen">
          <span class="filterFlex">
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style="display:block;height:14px;width:14px;fill:currentColor" aria-hidden="true" role="presentation" focusable="false">
              <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z">
              </path>
            </svg>
            <span class="filterSpan">
              필터
            </span>
          </span>
        </div>
        <div class="modal-wrap" v-show="modalCheck">
          <div class="modal-container-wrap">
            <transition name="slideFade">
              <div class="modal-container">
                <div class="modal-btn">
                  <span class="closeBtn" @click="modalOpen">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="position:absolute;transform:translate(-50%, -50%);display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;">
                      <path d="m6 6 20 20">
                      </path>
                      <path d="m26 6-20 20">
                      </path>
                    </svg>
                  </span>
                </div>
                <categoryFilterModal></categoryFilterModal>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import categoryFilterModal from '@/components/main_home_page/categoryFilterModal.vue'
import mainPageItem from '@/components/main_home_page/mainPageItem.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'

export default {
  name: 'category',
  data () {
    return {
      modalCheck: false,
      categoryName: [
        '방',
        '한옥',
        '해변 바로 앞',
        '최고의 전망',
        '한적한 시골',
        '인기 급상승',
        '멋진 수영장',
        '국립공원',
        '기상천외한 숙소',
        '료칸',
        '캠핑장',
        '캐슬',
        '농장',
        '초소형 주택',
        '신규',
        '통나무집',
        'Luxe',
        '저택',
        '열대 지역',
        '디자인',
        '호숫가',
        '키즈',
        '속세를 벗어난 숙소',
        '유서 깊은 주택',
        '스키',
        '와인 농장',
        '호수 근처',
        '상징적 도시',
        '서핑',
        '트리하우스',
        '동굴',
        '섬',
        'B&B',
        '북극',
        '보트',
        '사막',
        '민수',
        '돔 하우스',
        '키클라데스 주택',
        '세상의 꼭대기',
        '전문가급 주방',
        '컨테이너 하우스',
        '하우스 보트',
        '복토 주택',
        '타워',
        '마차',
        '그랜드 피아노',
        '창작 공간',
        '골프장',
        '헛간',
        '담무소',
        '리아드',
        '스키를 탄 채로 출입가능',
        '카사 파르티쿨라로',
        '풍차',
        '트룰로',
        '유르트',
        'A자형 주택',
        '무장애',
        '캠핑카',
        '해변 근처'
      ],
      swiperOption: {
        speed: 300,
        slidesPerView: 'auto',
        slidesPerGroup: 10,
        spaceBetween: 40,
        slidesOffsetBefore: 30,
        slidesOffsetAfter: 70,
        freeMode: false,
        resistance: false, // 슬라이드 터치 저항 여부
        allowTouchMove: true, // (false-스와이핑안됨)버튼으로만 슬라이드 조작이 가능
        centerInsufficientSlides: false,
        navigation: {
          nextEl: '.swiper-btn-next',
          prevEl: '.swiper-btn-prev'
        },
        breakpoints: {
          320: {
            slidesPerGroup: 1,
            spaceBetween: 10,
            slidesOffsetBefore: 30
          },
          640: {
            slidesPerGroup: 3,
            spaceBetween: 20,
            slidesOffsetBefore: 50
          },
          768: {
            slidesPerGroup: 6,
            spaceBetween: 30,
            slidesOffsetBefore: 50
          },
          1024: {
            slidesPerGroup: 10,
            spaceBetween: 40,
            slidesOffsetBefore: 30
          }
        },
        loop: false,
        on: {
          slideChange: function () {
            console.log('------------------------')
            console.log(this)
            console.log(this.realIndex + '임')
            switch (this.realIndex) {
              case 48:
                this.navigation.nextEl.style.display = 'none'
                this.navigation.prevEl.style.display = 'flex'
                break
              case 0:
                this.navigation.nextEl.style.display = 'flex'
                this.navigation.prevEl.style.display = 'none'
                break
              default:
                this.navigation.nextEl.style.display = 'flex'
                this.navigation.prevEl.style.display = 'flex'
                break
            }
          }
        }
      }
    }
  },
  // beforeCreate () {
  //   console.log('-----beforeCreate')
  // },
  // created () {
  //   console.log('-----created')
  // },
  // beforeMount () {
  //   console.log('-----beforeMount')
  // },
  mounted () {
    console.log('-----mounted')
    window.addEventListener('scroll', this.scroll)
    window.onload = () => {
      document.querySelector(`.swiper-wrapper > div:nth-child(1) > label > div > span > div:nth-child(2) > div`).classList.add('act')
      document.querySelector(`.swiper-wrapper > div:nth-child(1) > label > div > span > div:nth-child(1) > img`).classList.add('i-act')
      document.querySelector(`.swiper-wrapper > div:nth-child(1) > label > div > span > div:nth-child(2) > span`).classList.add('s-act')
      document.querySelectorAll(`.itemActive01`).forEach((v, i, a) => {
        v.style.display = 'flex'
      })
      document.querySelectorAll(`.itemActive02`).forEach((v, i, a) => {
        v.style.display = 'none'
      })
    }
  },
  // beforeUpdate () {
  //   console.log('-----beforeUpdate')
  // },
  // updated () {
  //   console.log('-----updated')
  //   // window.removeEventListener('scroll', this.scroll)
  // },
  beforeDestroy () {
    console.log('-----beforeDestroy')
    window.removeEventListener('scroll', this.scroll)
  },
  // destroyed () {
  //   console.log('-----destroy')
  // },
  methods: {
    activeEvent (test01) {
      console.log('-----------  ' + test01)
      // let labelEvent02 = document.querySelector(`.swiper-wrapper > div:nth-child(2) > label > div > span > div :nth-child(2)`)
      let labelEvent01 = document.querySelector(`.swiper-wrapper > div:nth-child(${test01 + 1}) > label > div > span > div:nth-child(2) > div`)
      let imgEvent01 = document.querySelector(`.swiper-wrapper > div:nth-child(${test01 + 1}) > label > div > span > div:nth-child(1) > img`)
      let spanEvent01 = document.querySelector(`.swiper-wrapper > div:nth-child(${test01 + 1}) > label > div > span > div:nth-child(2) > span`)
      console.log(spanEvent01)
      console.log(imgEvent01)
      console.log(labelEvent01)
      console.log(this.categoryName[test01])
      document.querySelectorAll(`.swiper-wrapper > div > label > div > span > div:nth-child(1) > img`).forEach((v, i, a) => {
        v.classList.remove('i-act')
      })
      imgEvent01.classList.add('i-act')
      document.querySelectorAll(`.swiper-wrapper > div > label > div > span > div:nth-child(2) > span`).forEach((v, i, a) => {
        v.classList.remove('s-act')
      })
      spanEvent01.classList.add('s-act')
      document.querySelectorAll(`.swiper-wrapper > div > label > div > span > div:nth-child(2) > div`).forEach((v, i, a) => {
        v.classList.remove('act')
      })
      labelEvent01.classList.add('act')
      if (test01 === 0) {
        document.querySelectorAll(`.itemActive01`).forEach((v, i, a) => {
          v.style.display = 'flex'
        })
        document.querySelectorAll(`.itemActive02`).forEach((v, i, a) => {
          v.style.display = 'none'
        })
      } else if (test01 === 1) {
        document.querySelectorAll(`.itemActive01`).forEach((v, i, a) => {
          v.style.display = 'none'
        })
        document.querySelectorAll(`.itemActive02`).forEach((v, i, a) => {
          v.style.display = 'flex'
        })
      }
    },
    modalOpen () {
      this.modalCheck = !this.modalCheck
    },
    icon: function iconArr () {
      let iconImg = []
      for (let i = 1; i < 62; i++) {
        i = (i < 10) ? ('0' + i) : (i)
        iconImg.push(require('../../images/category/category' + i + '.jpg'))
      }
      return iconImg
    },
    scroll () {
      console.log('scroll')
      if (window.scrollY > this.$refs.scrollTest.offsetTop) {
        this.isFixed = {
          boxShadow: '0px 0px 6px rgba(0,0,0,0.16)',
          paddingTop: ''
        }
        // document.querySelector('.categoryPosition').classList.add('testtest')
      } else {
        this.isFixed = {
          boxShadow: '',
          paddingTop: '20px'
        }
        // document.querySelector('.categoryPosition').classList.remove('testtest')
      }
    }
  },
  components: {
    swiper,
    swiperSlide,
    categoryFilterModal,
    mainPageItem
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
      height: 100%;
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
      width: auto!important; // auto 값을 지정해야 슬라이드의 width값이 텍스트 길이 기준으로 바뀜
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
