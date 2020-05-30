(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7dea714a"],{"6e55":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[e._v("\n  \n    "+e._s(e.propertyData.name)+"\n    "+e._s(e.propertyData.description)+"\n    "),r("h3",[e._v("User Details")]),r("form",{on:{submit:e.rentProperty}},[r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.rent.startDate,expression:"rent.startDate"},{name:"validate",rawName:"v-validate",value:"required|min:1|max:50",expression:"'required|min:1|max:50'"}],staticClass:"form-control",attrs:{type:"text",name:"startDate",placeholder:"Rent Start Date"},domProps:{value:e.rent.startDate},on:{input:function(t){t.target.composing||e.$set(e.rent,"startDate",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.rent.rentAmount,expression:"rent.rentAmount"},{name:"validate",rawName:"v-validate",value:"required|min:1|max:50",expression:"'required|min:1|max:50'"}],staticClass:"form-control",attrs:{type:"text",name:"rentAmount",placeholder:"Rent amount"},domProps:{value:e.rent.rentAmount},on:{input:function(t){t.target.composing||e.$set(e.rent,"rentAmount",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.rent.user.username,expression:"rent.user.username"},{name:"validate",rawName:"v-validate",value:"required|min:1|max:50",expression:"'required|min:1|max:50'"}],staticClass:"form-control",attrs:{type:"text",name:"userName",placeholder:"User Name"},domProps:{value:e.rent.user.username},on:{input:function(t){t.target.composing||e.$set(e.rent.user,"username",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.rent.user.email,expression:"rent.user.email"},{name:"validate",rawName:"v-validate",value:"required|min:1|max:50",expression:"'required|min:1|max:50'"}],staticClass:"form-control",attrs:{type:"text",name:"email",placeholder:"Email"},domProps:{value:e.rent.user.email},on:{input:function(t){t.target.composing||e.$set(e.rent.user,"email",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.rent.user.password,expression:"rent.user.password"},{name:"validate",rawName:"v-validate",value:"required|min:1|max:50",expression:"'required|min:1|max:50'"}],staticClass:"form-control",attrs:{type:"text",name:"password",placeholder:"password"},domProps:{value:e.rent.user.password},on:{input:function(t){t.target.composing||e.$set(e.rent.user,"password",t.target.value)}}})]),r("button",{attrs:{type:"submit"}},[e._v("Submit")])]),e.rent.id?r("div",[e._v("Property has been rented")]):e._e()])},n=[],s=r("a49f"),o=(r("ebec"),r("8654"),r("d225"),{name:"RentProperty",data:function(){return{rent:{user:{}},propertyData:{}}},mounted:function(){var e=this,t=this.$route.params.propId;s["a"].getProperty(this.$store.state.auth.user.id,t).then((function(t){e.propertyData=t.data}),(function(t){e.message="Error while retrieving property details,please try again"}))},methods:{rentProperty:function(e){var t=this;e.preventDefault(),this.loading=!0,s["a"].rentProperty(this.propertyData.id,this.rent).then((function(e){t.rent=e.data}),(function(e){}))}}}),i=o,u=r("2877"),p=Object(u["a"])(i,a,n,!1,null,null,null);t["default"]=p.exports},a49f:function(e,t,r){"use strict";var a=r("d225"),n=r("b0b4"),s=r("85f2"),o=r.n(s);function i(e,t,r){return t in e?o()(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=r("bc3a"),p=r.n(u),l=r("c4c6"),m="https://rentcollect.herokuapp.com/api/",c=function(){function e(){Object(a["a"])(this,e),i(this,"property",{})}return Object(n["a"])(e,[{key:"setProperty",value:function(e){this.property=e}},{key:"getPropertyData",value:function(){return this.property}},{key:"getAllProperties",value:function(e,t,r,a){return p.a.get(m+"property/"+e+"?page="+t+"&sortField="+r+"&sortType="+a,{headers:Object(l["a"])()})}},{key:"getProperty",value:function(e,t){return p.a.get(m+"user/"+e+"/property/"+t,{headers:Object(l["a"])()})}},{key:"createEditProperty",value:function(e,t){return t.id?p.a.put(m+"user/"+e+"/property/"+t.id,t,{headers:Object(l["a"])()}):p.a.post(m+"property/"+e,t,{headers:Object(l["a"])()})}},{key:"deleteProperty",value:function(e,t){return p.a.delete(m+"user/"+e+"/property/"+t,{headers:Object(l["a"])()})}},{key:"rentProperty",value:function(e,t){return p.a.post(m+"rent/"+e,t,{headers:Object(l["a"])()})}},{key:"getRentDetail",value:function(e){return p.a.get(m+"rent/"+e,{headers:Object(l["a"])()})}},{key:"passwordReset",value:function(e,t){return p.a.put(m+"user/reset/"+e,t,{headers:Object(l["a"])()})}},{key:"emailOwner",value:function(e){return p.a.post(m+"rent/notifyOwner",e,{headers:Object(l["a"])()})}}]),e}();t["a"]=new c},ebec:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r("d225"),n=function e(t,r){Object(a["a"])(this,e),this.name=t,this.description=r}}}]);
//# sourceMappingURL=chunk-7dea714a.93d821b0.js.map