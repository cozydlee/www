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
        :total-visible="10"
      ></v-pagination>
      <v-text-field
        :value="itemsPerPage"
        label="Items per page"
        type="number"
        min="-1"
        max="15"
        @input="itemsPerPage = parseInt($event, 10)"
      ></v-text-field>
      </div>
      
      <div class="find">
        <input id="adress" type="text" v-model="value2" />
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
      aaa: function(aa){
        this.onehundred = this.ary[aa];
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
        keys: [
          'name',
          'Calories',
          'adress',
          'bisness',
          'tel'
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
        ]
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

  .text-center nav{float: none;}
  .v-input{margin: 0 36%;}

  tr img{width: 300px; margin: 3%; max-height: 300px}
  

  .theme--light.v-pagination .v-pagination__item--active,
  .theme--light.v-pagination .v-pagination__item:hover,
  .theme--light.v-pagination .v-pagination__item:active {
    color: #82C3EC;}

  .theme--light.v-pagination .v-pagination__item{
    color: #333;
  }

  .router-link-active{ color: #82C3EC; transition: .3s;}
</style>