<template>
  <div class="listview">
      <div v-for="(item, index) in newsList"
          class="row" :class="{'grey-bg': index % 2 == 0}">
          <Item :news="item.title"></Item>
      </div>
  </div>
</template>
<script>
  import Item from '../Item/index.vue';
  import { mapActions,mapGetters } from 'vuex';
  export default {
    data(){
      return {
        type:'',
        start:'',
        len:20,
        http:'https://bxs.ghspace.cn/policy',
      }
    },
    components: {
      //Scroller,
      Item,
    },
    computed:{
      newsList(){
        return this.$store.getters.mypolicy;
      }
    },
    mounted() {
    },
    methods: {
      GetQueryString(name){
           var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
           var r = window.location.search.substr(1).match(reg);
           if(r!=null)return  unescape(r[2]); return null;
      },
      posthttp(type,start){
        let len=this.len;
        let http=`${this.http}/${type}/${len}/${start}`;
        console.log(start,type,len,http);
        this.$store.dispatch('getPolicy',{http:http,start:start,type:type});
      },
      //滚动条在Y轴上的滚动距离  
      getScrollTop(){
      　　var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
      　　if(document.body){
      　　　　bodyScrollTop = document.body.scrollTop;
      　　}
      　　if(document.documentElement){
      　　　　documentScrollTop = document.documentElement.scrollTop;
      　　}
      　　scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
         console.log('滚动条在Y轴上的滚动距离',scrollTop);
      　　return scrollTop;
        }, 
       //文档的总高度 
       getScrollHeight(){
      　　var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
      　　if(document.body){
      　　　　bodyScrollHeight = document.body.scrollHeight;
      　　}
      　　if(document.documentElement){
      　　　　documentScrollHeight = document.documentElement.scrollHeight;
      　　}
      　　scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
          console.log('文档的总高度:',scrollHeight);
      　　return scrollHeight;
        },
       //浏览器视口的高度 
       getWindowHeight(){
      　　var windowHeight = 0;
      　　if(document.compatMode == "CSS1Compat"){
      　　　　windowHeight = document.documentElement.clientHeight;
      　　}else{
      　　　　windowHeight = document.body.clientHeight;
      　　}
          console.log('浏览器视口的高度',windowHeight)
      　　return windowHeight;
       }
    },
    created:function(){
      console.log(this.$route.params.type);
      let type=this.GetQueryString('type');
      let start=this.GetQueryString('start');
      let vm=this;
      this.posthttp(type,start);
      window.onscroll = function(){
        setTimeout(function(){
            if((vm.getScrollTop() + vm.getWindowHeight())>vm.getScrollHeight()-20){
              console.log('bottom');
              vm.$store.dispatch('loaderMore',vm.http);
      　　   }
        },300)
      };
    }
  }
</script>


