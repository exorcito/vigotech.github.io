(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{353:function(t,e,n){"use strict";var r={name:"PageHeader",props:{title:{type:String,required:!0}}},c=n(16),component=Object(c.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("header",{directives:[{name:"sticky",rawName:"v-sticky"}],staticClass:"page-header",attrs:{"z-index":100,"sticky-top":100}},[e("div",{staticClass:"page-header-content"},[this._m(0),this._v(" "),e("div",{staticClass:"spacer"}),this._v(" "),e("h1",{staticClass:"page-title"},[this._v("\n      "+this._s(this.title)+"\n    ")])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"logo",attrs:{href:"/"}},[e("img",{attrs:{src:"logo.png",alt:"Vigotech Alliance"}})])}],!1,null,null,null);e.a=component.exports},354:function(t,e,n){var map={"./legal.md":[357,7],"./test.md":[358,8]};function r(t){if(!n.o(map,t))return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e});var e=map[t],r=e[0];return n.e(e[1]).then(function(){return n(r)})}r.keys=function(){return Object.keys(map)},r.id=354,t.exports=r},360:function(t,e,n){"use strict";n.r(e);n(36);var r=n(6),c={components:{PageHeader:n(353).a},asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var r,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,t.next=3,n(354)("./".concat(r.slug,".md"));case 3:return c=t.sent,t.abrupt("return",{content:c.default});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},o=n(16),component=Object(o.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{key:this.$route.params.slug},[e("PageHeader",{attrs:{title:this.$route.params.slug}}),this._v(" "),e("section",{attrs:{id:"post"}},[e("div",{staticClass:"wrap container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12 content-wrapper"},[e("div",{staticClass:"post-content"},[e("div",{domProps:{innerHTML:this._s(this.content)}})])])])])])],1)},[],!1,null,null,null);e.default=component.exports}}]);