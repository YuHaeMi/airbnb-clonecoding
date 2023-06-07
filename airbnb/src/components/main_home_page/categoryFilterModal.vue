<template>
  <div class="filter-modal-header-content-wrap">
    <div class="filter-modal-header-flex">
      <header class="filter-modal-header">필터</header>
    </div>
    <div class="filter-modal-content">
      <div class="filter-contetn01 filterC"></div>
      <div class="filter-contetn02 filterC"></div>
      <div class="filter-contetn03 filterC"></div>
      <div class="filter-contetn04 filterC"></div>
      <div class="filter-contetn05 filterC"></div>
    </div>
  </div>
</template>
<script>
import mainPageCategory from '@/components/main_home_page/mainPageCategory.vue'

export default {
  name: 'categoryFilterModal',
  data () {
    return {}
  },
  components: {
    mainPageCategory
  }
}
</script>
