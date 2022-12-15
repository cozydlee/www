<template lang="html">
  <div class="box2">
    <div class="title2">
      <h2>점포안내</h2>
    </div>
    <v-data-table
      :headers="headers"
      :items="onehundred"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      class="elevation-1"
      @page-count="pageCount = $event"
    >
      <template v-slot:body="{items}">
        <tbody>
            <tr v-for="item in items" :key="item.number">
                <td>{{item.number}}</td>
                <td>{{item.name}}</td>
                <td><img :src="item.picture" /></td>
                <td>{{item.bisness}}</td>
                <td>{{item.tel}}</td>
                <td>{{item.adress}}</td>
            </tr>
        </tbody>
      </template>
    </v-data-table>

    <div class="text-center pt-2">
      <v-pagination
        v-model="page"
        :length="pageCount"
        :total-visible="7"
      ></v-pagination>
      <v-text-field
        :value="itemsPerPage"
        label="게시글 목록"
        type="number"
        min="-1"
        max="15"
        @input="itemsPerPage = parseInt($event, 7)"
      ></v-text-field>
        <v-select
          :items="region"
          item-value="value"
          label="지역"
          v-model="value2"
          @input="search2()"
        ></v-select>
      </div>
      
      <div class="find">
        <input placeholder="점포명" id="adress" type="text" v-model="value2" />
        <button @click="search()">검색</button>
      </div>
      <div class="show" v-show="message">{{msgtext}}</div>

        <div class="text-center">
      </div>
   </div> 
</template>

<script>
import jdata from './onehundred.json';

export default {
      methods:{
      search: function(){
        let text = this.value2;
        if(text){
          this.onehundred = jdata.filter(function(element){
            return element.name.includes(text);  //조건에 참이면 객체를 배열로 리턴
            //return  element.price >= Number(text);
          });
          
          if(this.onehundred.length==0){
             this.message=true;
             this.msgtext='검색 데이터가 없습니다';
             
          }else{
             this.message=true;
             this.msgtext=this.onehundred.length + '개가 검색되었습니다';
             
          }
        }else{
          alert('검색어를 입력해주세요!');
        } 
      },
            search2: function(){
        let text = this.value2;
        if(text){
          this.onehundred = jdata.filter(function(element){
            return element.adress.includes(text);  //조건에 참이면 객체를 배열로 리턴
            //return  element.price >= Number(text);
          });
          
          if(this.onehundred.length==0){
             this.message=true;
             this.msgtext='검색 데이터가 없습니다';
             
          }else{
             this.message=true;
             this.msgtext=this.onehundred.length + '개가 검색되었습니다';
             
          }
        }else{
          alert('검색어를 입력해주세요!');
        } 
      },
      aaa: function(a){
        this.onehundred = this.ary[a];
      }
    },
  data(){
      return{
        message:false,
        msgtext:'검색 데이터가 없습니다',
        value2: '',
        onehundred : jdata,
        ary:[jdata],
        page: 1,
        pageCount: 0,
        itemsPerPage: 10,
        sortBy: 'name',
        region: [
          '서울',
          '경기',
          '인천',
          '세종',
          '대전',
          '대구',
          '부산',
          '울산',
          '광주',
          '부산',
          '충청북도',
          '충청남도',
          '경상북도',
          '경상남도',
          '전라북도',
          '전라남도',
          '강원',
          '제주',
        ],
        headers: [
          {
            text: '번호',
            align: 'start',
            sortable: false,
            value: 'number',
          },
          { text: '업체명', value: 'name' },
          { text: '사진', value: 'picture' },
          { text: '업종', value: 'bisness' },
          { text: '전화번호', value: 'tel' },
          { text: '위치', value: 'adress' }
        ],
        value3: ''
      }
    }
}
</script>

<style>
  .title2{padding: 200px 0; box-sizing: border-box; background: url(assets/main2.jpg) center 50%;}
  table{text-align: center;}
  #adress{ border: 1px solid #333;
    border-radius: 10px;
    padding: .2%;
  }
  .find{margin-bottom: 10px;}
  .find label, .find button {padding: 0 1%;}
  .show{margin-bottom: 10px;}

  .text-center.pt-2{overflow:hidden}
  .text-center nav{float: none;}
  .v-input{margin: 0 2%; float:left; width:10%}
  .v-menu{display:block;}
  .box2 .v-menu__content{height: 103px;margin-top: -64px;}
  .v-data-table__wrapper {overflow:unset}

  tr img{width: 300px; margin: 3%; max-height: 300px;}
  

  .theme--light.v-pagination .v-pagination__item--active,
  .theme--light.v-pagination .v-pagination__item:hover,
  .theme--light.v-pagination .v-pagination__item:active {
    color: #82C3EC;}
  .v-pagination__item--active{box-shadow: 0 2px 4px 6px rgb(130 195 236 / 25%), 0 4px 1px 0 rgb(130 195 236 / 59%), 0 0px 3px 0 rgb(130 195 236 / 57%);}

  .theme--light.v-pagination .v-pagination__item{
    color: #333;
  }

  .router-link-active{ color: #82C3EC; transition: .3s;}
</style>