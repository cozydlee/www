<template lang="html">
  <div class="box1">
    <div class="title">
      <h2>사업소개</h2>
    </div>
    <article>
      <h2><i class="fa-solid fa-store"></i> 백년가게란?</h2>
      <ul>
        <li>소상공인의 롤모델이 되어주실</li>
        <li>업력 30년 이상 사장님이시라면 지금 신청하세요!</li>
      </ul>
      <ul class="piclist">
        <li><img src="./assets/pic1.jpg" alt="pic1"></li>
        <li><img src="./assets/pic2.jpg" alt="pic2"></li>
        <li><img src="./assets/pic3.jpg" alt="pic3"></li>
      </ul>
      <p>30년 이상 명맥을 유지하면서도 오래도록 고객의 꾸준한 사랑을 받아온 점포 가운데, 중소벤처기업부에서 그 우수성과 성장 가능성을 높게 평가 받아 공식 인증받은 점포입니다.</p>
    </article>
    <div class="feature3-component mini-spacer">
      <v-container class="position-relative">
        <v-row>
          <v-col cols="12" lg="10">
                <div class="box">
          <swiper class="swiper" :options="swiperOption">
          <swiper-slide><img src="./assets/pic4.jpg" alt="pic4"></swiper-slide>
          <swiper-slide><img src="./assets/pic5.jpg" alt="pic5"></swiper-slide>
          <swiper-slide><img src="./assets/pic6.jpg" alt="pic6"></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
          </div>
          </v-col>
          <v-col cols="12" md="7" lg="5" class="feature3-card">
            <v-card class="card-shadow">
              <v-card-text>
                <div class="pa-10 text-center">
                  <h3 class="feature3-title font-weight-medium">
                    점포안내
                  </h3>
                  <p>
                    백년가게는 여러분의 추천으로 선정됩니다.
                  </p>
                  <v-btn
                    color="error"
                    class="btn-custom-lg linking mt-10 btn-arrow"
                    nuxt
                    large
                    to="/"
                    elevation="0"
                  >
                    <span><router-link to="/vue/sub">더 보기</router-link></span>
                    <i class="mdi mdi-arrow-right"></i>
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
    name: 'main_page',
  components: {
      Swiper,
      SwiperSlide
  },
   data() {
      return {
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
  methods: {
    // 라우터 함수로 이동할 때는 $router 글로벌 객체에 이동할 주소 넣어줌
    fnSubPage() {
      this.$router.push('/sub')
    }
  }
}
</script>

<style>
  .title{padding: 200px 0; box-sizing: border-box; background: url(assets/main1.jpg) center 50%;}
  article{padding: 0 20px; position: relative;}
  article h2{color: #333; margin: 2% 0; letter-spacing: normal;}
  ul{color: #666;}
  ul li{margin-bottom: 5px;}
  article p{font-size: 1.5rem; padding-right: 30%; text-align: left; margin: 40px;line-height: 2rem;}

  .pa-10 span a{padding-left: 13px;}

  .piclist {overflow: hidden; margin: 20px 76px;}
  .piclist::before{content: ''; background: #498fcc; position:absolute; height: 100px; width: 100%; left: 0; top: 252px;
  z-index: -1;} 
  .piclist li{float: left; overflow: hidden; height: 280px; width: 33.33%;}
  .piclist li img{width: 400px; margin: 25px;}

  .feature3-component {
  position: relative;
  margin: 0 20px;
}

.feature3-card {
  position: absolute;
  top: -6%;
  right: 0;
  z-index: 1;
}

.feature3-title {
    font-size: 24px;
    line-height: 30px;
    margin: 20px 0 15px;
  }

@media (min-width: 768px) and (max-width: 991px) {
  .feature3-card {
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 50%;
  }
}

@media (max-width: 767px) {
  .feature3-card {
    position: relative;
  }
  .piclist li{
    float: none; width: 100%;
  }
}

.v-card {
  margin: 50px;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.v-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.1);
}

.v-btn {
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.v-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.1);
}

</style>