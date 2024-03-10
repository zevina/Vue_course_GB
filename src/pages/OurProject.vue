<template>
    <headerVue/>
    <Slider/>
    <footerVue/>
</template>

<script>
import headerVue from '@/components/headerVue.vue'
import Slider from '@/components/Slider.vue';
import footerVue from '@/components/footerVue.vue';


export default {
    name: "ourproject",
    components: { headerVue, Slider, footerVue },
    data() {
        return {

        };
    },
};
</script>
<style scoped lang="scss"></style>

<style lang="scss" scoped>
.center {
  padding-left: calc(50% - 1200px / 2);
  padding-right: calc(50% - 1200px / 2);
}

.banner_detail {
  background-image: url("../assets/img/baner3.jpg");
  height: 356px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.project-details {
  display: flex;
  justify-content: center;

}

.project-details__content {
  width: 450px;
}

body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 1285px;
  height: 910px;
  object-fit: cover;
  border-radius: 10%;
}
</style>