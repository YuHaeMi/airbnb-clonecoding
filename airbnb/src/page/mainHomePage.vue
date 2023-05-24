<template>
  <div class="mainHomePage">
    <mainPageHeader/>
    <mainPageInfo/>
    <mainPageCategory/>
    <mainPageItemsList/>
    <mainPageFooter/>
  </div>
</template>

<script>
import mainPageHeader from '@/components/main_home_page/mainPageHeader'
import mainPageInfo from '@/components/main_home_page/mainPageInfo'
import mainPageCategory from '@/components/main_home_page/mainPageCategory'
import mainPageItemsList from '@/components/main_home_page/mainPageItemsList'
import mainPageFooter from '@/components/main_home_page/mainPageFooter'

export default {
  name: 'mainHomePage',
  components: {
    mainPageHeader,
    mainPageInfo,
    mainPageCategory,
    mainPageItemsList,
    mainPageFooter
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
