(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{267:function(t,n,e){var content=e(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(53).default)("4d702246",content,!0,{sourceMap:!1})},272:function(t,n,e){"use strict";e(267)},273:function(t,n,e){var r=e(52)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.scenario[data-v-c40d2f72]{\n  border-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n  padding:2rem;\n  --tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},288:function(t,n,e){"use strict";e.r(n);var r=e(8),o=(e(33),e(54),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.params,r=t.$content,n.next=3,r("scenarios/".concat(e.edition,"/").concat(e.scenario)).fetch();case 3:return o=n.sent,n.next=6,r("editions/".concat(e.edition)).fetch();case 6:return c=n.sent,n.abrupt("return",{scenario:o,edition:c});case 8:case"end":return n.stop()}}),n)})))()},head:function(){return{title:"".concat(this.scenario.title," - R4S - Roll for scenario"),meta:[{hid:"description",name:"description",content:"".concat(this.scenario.title," - ").concat(this.scenario.special)},{hid:"og:description",name:"og:description",content:"".concat(this.scenario.title," - ").concat(this.scenario.special)}]}}}),c=(e(272),e(29)),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",{staticClass:"text-4xl text-center m-2 uppercase font-bold"},[t._v("\n    "+t._s(t.edition.name)+" "+t._s(t.scenario.title)+"\n  ")]),t._v(" "),e("div",{staticClass:"scenario"},[e("div",{staticClass:"grid md:grid-cols-2 grid-cols-1 gap-6"},[e("div",[e("img",{staticClass:"w-full",attrs:{src:"/img/"+t.scenario.image}})]),t._v(" "),e("div",{staticClass:"text-lg",domProps:{innerHTML:t._s(t.scenario.special)}})]),t._v(" "),e("nuxt-link",{staticClass:"btn m-4",attrs:{to:"/"+t.scenario.edition,rel:"nofollow noindex"}},[t._v("\n      Roll another "+t._s(t.edition.name)+" scenario\n    ")])],1)])}),[],!1,null,"c40d2f72",null);n.default=component.exports}}]);