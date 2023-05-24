<template>
  <main>
    <div class="itemsAllListWrap">
      <div class="itemListWrap">
        <div class="item">
          <mainPageItem></mainPageItem>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import mainPageItem from '@/components/main_home_page/mainPageItem.vue'

export default {
  name: 'mpItemsList',
  components: {
    mainPageItem
  },
  methods: {
    scroll () {
      console.log('scroll')
      if (window.scrollY > this.$refs.scrollTest.offsetTop) {
        // this.isFixed = {
        //   boxShadow: '0px 0px 6px rgba(0,0,0,0.16)',
        //   paddingTop: ''
        // }
        document.querySelector('.categoryPosition').classList.add('testtest')
      } else {
        // this.isFixed = {
        //   boxShadow: '',
        //   paddingTop: '20px'
        // }
        document.querySelector('.categoryPosition').classList.remove('testtest')
      }
    }
  }
}
</script>
