(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{241:function(t,e,n){var content=n(247);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(44).default)("45c121f4",content,!0,{sourceMap:!1})},246:function(t,e,n){"use strict";n(241)},247:function(t,e,n){var r=n(43)((function(i){return i[1]}));r.push([t.i,".scenario[data-v-2ae5b5bd]{\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n  border-radius:0.375rem;\n  padding:2rem;\n  --tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}",""]),t.exports=r},262:function(t,e,n){"use strict";n.r(e);var r=n(6),c=(n(34),n(65),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,r=t.$content,e.next=3,r("scenarios/".concat(n.edition,"/").concat(n.scenario)).fetch();case 3:return c=e.sent,e.next=6,r("editions/".concat(n.edition)).fetch();case 6:return o=e.sent,e.abrupt("return",{scenario:c,edition:o});case 8:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"".concat(this.scenario.title," - R4S - Roll for scenario"),meta:[{hid:"description",name:"description",content:"".concat(this.scenario.title," - ").concat(this.scenario.special)}]}}}),o=(n(246),n(25)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"text-4xl text-center m-2 uppercase font-bold"},[t._v("\n    "+t._s(t.edition.name)+" "+t._s(t.scenario.title)+"\n  ")]),t._v(" "),n("div",{staticClass:"scenario"},[n("div",{staticClass:"grid md:grid-cols-2 grid-cols-1 gap-6"},[n("div",[n("img",{attrs:{src:"/img/"+t.scenario.image}})]),t._v(" "),n("div",{staticClass:"text-lg",domProps:{innerHTML:t._s(t.scenario.special)}})])])])}),[],!1,null,"2ae5b5bd",null);e.default=component.exports}}]);