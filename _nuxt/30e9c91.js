(window.webpackJsonp=window.webpackJsonp||[]).push([[9,14],{234:function(e,t,n){"use strict";n.r(t);var o={props:{content:{msgTooltip:String}}},r=n(44),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.content.msgTooltip?n("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:e.content.msgTooltip,theme:"calcfin"},expression:"{\n        content: content.msgTooltip,\n        theme: 'calcfin'\n    }"}],staticClass:"material-icons-outlined text-lg cursor-pointer"},[e._v("\n    help_outline\n")]):e._e()}),[],!1,null,null,null);t.default=component.exports},238:function(e,t,n){var content=n(257);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(72).default)("7437c912",content,!0,{sourceMap:!1})},256:function(e,t,n){"use strict";n(238)},257:function(e,t,n){var o=n(71)((function(i){return i[1]}));o.push([e.i,".v-popper--theme-calcfin .v-popper__inner{background:#fd0;color:#000}.dark .v-popper--theme-calcfin .v-popper__inner{color:#000}.v-popper--theme-calcfin .v-popper__arrow{border-color:#fd0}",""]),o.locals={},e.exports=o},281:function(e,t,n){"use strict";n.r(t);var o={data:function(){return{content:{msgTooltip:"O valor necessário para você viver sem precisar trabalhar.",labelContent:"Renda mensal desejada",for:"rendaDesejada",min:1e3,max:1e7,step:100,prefixo:"R$",sufixo:",00"}}},computed:{numberValue:{get:function(){return this.$store.state.inputs.baseInputs.rendaDesejada},set:function(e){this.$store.commit("inputs/updateRendaDesejada",e)}}}},r=(n(256),n(44)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col items-center justify-center"},[n("div",{staticClass:"flex gap-x-2 items-center"},[n("label",{staticClass:"font-bold text-lg border-b-4 border-b-blue-500",attrs:{for:e.content.for}},[e._v("\n            "+e._s(e.content.labelContent)+"\n        ")]),e._v(" "),n("Tooltip",{attrs:{content:e.content}})],1),e._v(" "),n("span",{staticClass:"text-base font-semibold"},[e._v("\n        "+e._s(e.content.prefixo)+"\n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.numberValue,expression:"numberValue"}],staticClass:"border focus:border-blue-300 focus:outline-none mt-2 mb-4",attrs:{type:"number",id:e.content.for,min:e.content.min,max:e.content.max,step:e.content.step},domProps:{value:e.numberValue},on:{input:function(t){t.target.composing||(e.numberValue=t.target.value)}}}),e._v(e._s(e.content.sufixo)+"\n    ")])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Tooltip:n(234).default})}}]);