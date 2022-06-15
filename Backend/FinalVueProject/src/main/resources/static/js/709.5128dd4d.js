"use strict";(self["webpackChunkfinal_project_vue"]=self["webpackChunkfinal_project_vue"]||[]).push([[709],{803:function(t,e,n){n.d(e,{FX:function(){return r},JM:function(){return u},Qx:function(){return o},Us:function(){return c},VL:function(){return s},iQ:function(){return l}});var a=n(6927);const i=(0,a.b)();function s(t,e,n){i.get("/qna",{params:t}).then(e).catch(n)}function r(t,e,n){i.get("/qna/count",{params:t}).then(e).catch(n)}function o(t,e,n){i.post("/qna",JSON.stringify(t)).then(e).catch(n)}function c(t,e,n){i.get(`/qna/${t}`).then(e).catch(n)}function l(t,e,n){i.put("/qna",JSON.stringify(t)).then(e).catch(n)}function u(t,e,n){i.delete(`/qna/${t}`).then(e).catch(n)}},7804:function(t,e,n){n.r(e),n.d(e,{default:function(){return U}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("div",{staticClass:"text-center"},[n("h1",{staticClass:"ma-8"},[t._v("Q&A")])]),n("div",[n("v-row",[n("v-col",{attrs:{cols:"2"}},[n("v-select",{attrs:{items:t.items},model:{value:t.key,callback:function(e){t.key=e},expression:"key"}})],1),n("v-col",{attrs:{cols:"3"}},[n("v-text-field",{staticClass:"ml-1 form-control",attrs:{type:"text","append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search.apply(null,arguments)}},model:{value:t.word,callback:function(e){t.word=e},expression:"word"}})],1),n("v-spacer"),n("v-col",{attrs:{cols:"1"}},[n("v-btn",{attrs:{color:"success"},on:{click:t.movePage}},[t._v("Q&A 등록")])],1)],1)],1),t.articles.length?n("div",[n("v-simple-table",{staticClass:"text-center",scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",{staticClass:"text-center"},[n("th",{staticClass:"text-center"},[t._v("글번호")]),n("th",{staticClass:"text-center"},[t._v("제목")]),n("th",{staticClass:"text-center"},[t._v("작성자")]),n("th",{staticClass:"text-center"},[t._v("작성일")]),n("th",{staticClass:"text-center"},[t._v("해결 여부")])])]),n("tbody",t._l(t.articles,(function(t){return n("qna-list-item",{key:t.no,attrs:{article:t}})})),1)]},proxy:!0}],null,!1,3498931027)}),n("qna-pagination-content",{attrs:{target:"qna",searchKey:t.key,word:t.word,changed:t.changed},on:{pagechanged:t.pagechanged}})],1):n("div",{staticClass:"text-center"},[t._v("검색 결과가 없습니다.")])])},i=[],s=n(803),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[t._v(t._s(t.article.no))]),n("td",[n("router-link",{attrs:{to:{name:"QnaDetail",params:{no:t.article.no}}}},[t._v(t._s(t.article.title))])],1),n("td",[t._v(t._s(t.article.userid))]),n("td",[t._v(t._s(t._f("formatDate")(t.article.regtime)))]),0===t.article.anscheck?n("td",[n("v-chip",{staticClass:"ma-2",attrs:{color:"red","text-color":"white"}},[t._v("미해결 ")])],1):n("td",[n("v-chip",{staticClass:"ma-2",attrs:{color:"green","text-color":"white"}},[t._v("해결완료 ")])],1)])},o=[],c=n(381),l=n.n(c),u={name:"NoticeListItem",props:{article:Object},filters:{formatDate(t){return l()(new Date(t)).format("YY.MM.DD")}}},h=u,d=n(1001),g=n(3453),p=n.n(g),v=n(5424),x=(0,d.Z)(h,r,o,!1,null,null,null),f=x.exports;p()(x,{VChip:v.Z});var C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("v-pagination",{attrs:{length:t.endPageIndex-t.startPageIndex+1,circle:""},on:{input:t.movePage},model:{value:t.currentPageIndex,callback:function(e){t.currentPageIndex=e},expression:"currentPageIndex"}})],1)},m=[],k={name:"paginationContent",props:{target:String,searchKey:String,word:String,changed:Boolean},data(){return{totalListItemCount:0,listRowCount:10,pageLinkCount:10,currentPageIndex:1,pageCount:0,startPageIndex:0,endPageIndex:0,prev:!1,next:!1}},methods:{movePage(t){console.log(t),this.currentPageIndex=t,this.$emit("pagechanged",t),this.initComponent()},initComponent(){let t={key:this.searchKey,word:this.word};(0,s.FX)(t,(({data:t})=>{this.totalListItemCount=t,this.initUI()}),(()=>{alert("에러가 발생했습니다.")}))},initUI(){this.pageCount=Math.ceil(this.totalListItemCount/this.listRowCount),this.currentPageIndex%this.pageLinkCount==0?this.startPageIndex=(this.currentPageIndex/this.pageLinkCount-1)*this.pageLinkCount+1:this.startPageIndex=Math.floor(this.currentPageIndex/this.pageLinkCount)*this.pageLinkCount+1,this.currentPageIndex%this.pageLinkCount==0?this.endPageIndex=(this.currentPageIndex/this.pageLinkCount-1)*this.pageLinkCount+this.pageLinkCount:this.endPageIndex=Math.floor(this.currentPageIndex/this.pageLinkCount)*this.pageLinkCount+this.pageLinkCount,this.endPageIndex>this.pageCount&&(this.endPageIndex=this.pageCount),this.currentPageIndex<=this.pageLinkCount?this.prev=!1:this.prev=!0,this.endPageIndex>=this.pageCount?(this.endPageIndex=this.pageCount,this.next=!1):this.next=!0}},watch:{currentPageIndex:function(){this.initUI()},changed:function(){this.initComponent()}},created(){this.initComponent()}},I=k,_=n(6325),P=(0,d.Z)(I,C,m,!1,null,null,null),y=P.exports;p()(P,{VPagination:_.Z});var w=n(629);const L="memberStore";var V={components:{QnaListItem:f,QnaPaginationContent:y},data(){return{pg:1,key:"",word:"",changed:!1,articles:[],items:[{text:"선택",value:""},{text:"아이디",value:"userid"},{text:"제목",value:"title"},{text:"글 번호",value:"no"}]}},created(){let t={pg:1,key:null,word:null};(0,s.VL)(t,(t=>{this.articles=t.data}),(t=>{console.log(t)}))},computed:{...(0,w.rn)(L,["userInfo"])},methods:{movePage(){this.$router.push("/qna/write")},search(){this.changed=!this.changed;let t={pg:1,key:this.key,word:this.word};(0,s.VL)(t,(t=>{this.articles=t.data}),(t=>{console.log(t)}))},pagechanged(t){let e={pg:t,key:this.key,word:this.word};(0,s.VL)(e,(t=>{this.articles=t.data}),(t=>{console.log(t)}))}}},b=V,Z=n(680),S=n(2102),q=n(9846),Q=n(2877),$=n(7032),D=n(3568),M=n(9762),E=n(314),O=(0,d.Z)(b,a,i,!1,null,"78f16159",null),U=O.exports;p()(O,{VBtn:Z.Z,VCol:S.Z,VContainer:q.Z,VRow:Q.Z,VSelect:$.Z,VSimpleTable:D.Z,VSpacer:M.Z,VTextField:E.Z})}}]);
//# sourceMappingURL=709.5128dd4d.js.map