(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0845":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"life"}},[i("Header"),i("div",{attrs:{id:"container"}},[i("div",{attrs:{id:"life_container"}},[t._m(0),i("LifeItem",{attrs:{item_list:t.itemList}})],1),i("div",{attrs:{id:"item_button_container"}},[i("router-link",{attrs:{to:"/study"}},[i("ItemButton01",{staticClass:"item_button"})],1),i("router-link",{attrs:{to:"/senior"}},[i("ItemButton03",{staticClass:"item_button"})],1)],1),i("AddQuestion")],1)],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"life_title_container"},[i("h1",{staticClass:"life_title1"},[t._v("生活")]),i("h2",{staticClass:"life_title2"},[t._v("について")])])}],s=i("0418"),r=i("3971"),o=i("9a68"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"life_item"}},[i("div",{attrs:{id:"item_container"}},t._l(t.itemList,(function(e){return i("div",{key:e.title,staticClass:"topic_container"},[i("label",{attrs:{for:e.title}},[i("h2",{staticClass:"topic"},[t._v(t._s(e.title))])]),i("input",{attrs:{type:"checkbox",id:e.title}}),i("div",{staticClass:"hidden_show"},[i("Main",{staticClass:"topic_content",attrs:{main:e.main}}),e.isYouTube?i("div",{staticClass:"iframe_container"},[e.isYouTube?i("iframe",{attrs:{src:e.youtube_link,frameborder:"0",autoplay:"0",allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}):t._e()]):t._e()],1)])})),0)])},u=[],l=i("2614"),d={name:"LifeItem",components:{Main:l["a"]},props:{item_list:Array},data:function(){return{itemList:this.item_list}}},f=d,m=(i("ab10"),i("2877")),p=Object(m["a"])(f,c,u,!1,null,"02e95526",null),h=p.exports,v=i("6957"),_={name:"Study",components:{Header:s["a"],ItemButton01:r["a"],ItemButton03:o["a"],LifeItem:h,AddQuestion:v["a"]},props:{life_list:Array},data:function(){return{itemList:this.life_list}},created:function(){localStorage.isPass="false",this.$router.pass=""}},y=_,g=(i("b8a9"),Object(m["a"])(y,a,n,!1,null,"f4d6c1e0",null));e["default"]=g.exports},1276:function(t,e,i){"use strict";var a=i("d784"),n=i("44e7"),s=i("825a"),r=i("1d80"),o=i("4840"),c=i("8aa5"),u=i("50c4"),l=i("14c3"),d=i("9263"),f=i("d039"),m=[].push,p=Math.min,h=4294967295,v=!f((function(){return!RegExp(h,"y")}));a("split",2,(function(t,e,i){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,i){var a=String(r(this)),s=void 0===i?h:i>>>0;if(0===s)return[];if(void 0===t)return[a];if(!n(t))return e.call(a,t,s);var o,c,u,l=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,v=new RegExp(t.source,f+"g");while(o=d.call(v,a)){if(c=v.lastIndex,c>p&&(l.push(a.slice(p,o.index)),o.length>1&&o.index<a.length&&m.apply(l,o.slice(1)),u=o[0].length,p=c,l.length>=s))break;v.lastIndex===o.index&&v.lastIndex++}return p===a.length?!u&&v.test("")||l.push(""):l.push(a.slice(p)),l.length>s?l.slice(0,s):l}:"0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:e.call(this,t,i)}:e,[function(e,i){var n=r(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,n,i):a.call(String(n),e,i)},function(t,n){var r=i(a,t,this,n,a!==e);if(r.done)return r.value;var d=s(t),f=String(this),m=o(d,RegExp),_=d.unicode,y=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(v?"y":"g"),g=new m(v?d:"^(?:"+d.source+")",y),b=void 0===n?h:n>>>0;if(0===b)return[];if(0===f.length)return null===l(g,f)?[f]:[];var C=0,k=0,w=[];while(k<f.length){g.lastIndex=v?k:0;var x,S=l(g,v?f:f.slice(k));if(null===S||(x=p(u(g.lastIndex+(v?0:k)),f.length))===C)k=c(f,k,_);else{if(w.push(f.slice(C,k)),w.length===b)return w;for(var E=1;E<=S.length-1;E++)if(w.push(S[E]),w.length===b)return w;k=C=x}}return w.push(f.slice(C)),w}]}),!v)},"159b":function(t,e,i){var a=i("da84"),n=i("fdbc"),s=i("17c2"),r=i("9112");for(var o in n){var c=a[o],u=c&&c.prototype;if(u&&u.forEach!==s)try{r(u,"forEach",s)}catch(l){u.forEach=s}}},"17c2":function(t,e,i){"use strict";var a=i("b727").forEach,n=i("a640"),s=i("ae40"),r=n("forEach"),o=s("forEach");t.exports=r&&o?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,i){var a=i("d039"),n=i("b622"),s=i("2d00"),r=n("species");t.exports=function(t){return s>=51||!a((function(){var e=[],i=e.constructor={};return i[r]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2556:function(t,e,i){},2614:function(t,e,i){"use strict";i("4160"),i("d81d"),i("b64b"),i("ac1f"),i("466d"),i("5319"),i("1276"),i("159b");var a,n,s={name:"Main",props:{main:String},data:function(){return{}},render:function(){var t=arguments[0],e=this.parseText();return t("p",[e.map((function(e){var i=/((h?)(ttps?:\/\/[a-zA-Z0-9.\-_@:/~?%&;=+#',()*!]+))/g;return e.match(i)?t("a",{attrs:{href:e},class:"link"},[e]):e}))])},methods:{parseText:function(){var t,e=this.main,i=/((h?)(ttps?:\/\/[a-zA-Z0-9.\-_@:/~?%&;=+#',()*!]+))/g,a={},n=0;while(null!=(t=i.exec(e)))n+=1,a["[".concat(n,"]")]=t[0],e=e.replace(t[0],"[".concat(n,"]"));var s=Object.keys(a);return s.forEach((function(t){e=e.replace(t,",".concat(a[t],","))})),e.split(",")}}},r=s,o=(i("4c70"),i("2877")),c=Object(o["a"])(r,a,n,!1,null,"586490bb",null);e["a"]=c.exports},"2fef":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"form"}},[i("Header1",{staticClass:"header"}),i("div",{attrs:{id:"container"}},[i("div",{attrs:{id:"pass_form_container"}},[i("form",[i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("パスワードを入力してください")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.pass,expression:"pass"}],staticClass:"input1",attrs:{type:"password"},domProps:{value:t.pass},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.next()},input:function(e){e.target.composing||(t.pass=e.target.value)}}})]),i("input",{staticClass:"send",attrs:{value:"送信する",type:"submit"},on:{click:function(e){return t.next()}}})])])])],1)},n=[],s=(i("d3b7"),i("3ca3"),i("ddb0"),i("2b3d"),i("85ef")),r={name:"Auth",components:{Header1:s["a"]},data:function(){return{pass:"",isPass:!1}},mounted:function(){localStorage.isPass="false",this.isPass=localStorage.isPass,this.$router.pass=""},watch:{isPass:function(t){localStorage.isPass=t}},methods:{next:function(){var t=this,e=new URLSearchParams;e.append("password",this.pass),this.axios.post("https://kzkymur.com/api/password/",e).then((function(e){t.pass="",localStorage.isPass=e.data.result,t.isPass=localStorage.isPass,t.isPass?(window.alert("正しく認証できました！"),t.$router.pass=e.data.key,t.$router.push("/Authentication_for_committee_member/form")):window.alert("パスワードが正しくありません！")})).catch((function(e){window.alert(e.response.data),t.pass=""}))}}},o=r,c=(i("f950"),i("2877")),u=Object(c["a"])(o,a,n,!1,null,"407ebf9a",null);e["default"]=u.exports},"37ba":function(t,e,i){"use strict";var a=i("b53e"),n=i.n(a);n.a},"388b":function(t,e,i){},"410d":function(t,e,i){"use strict";var a=i("bca3"),n=i.n(a);n.a},4160:function(t,e,i){"use strict";var a=i("23e7"),n=i("17c2");a({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},"44b8":function(t,e,i){},"44e7":function(t,e,i){var a=i("861d"),n=i("c6b6"),s=i("b622"),r=s("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==n(t))}},"466d":function(t,e,i){"use strict";var a=i("d784"),n=i("825a"),s=i("50c4"),r=i("1d80"),o=i("8aa5"),c=i("14c3");a("match",1,(function(t,e,i){return[function(e){var i=r(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,i):new RegExp(e)[t](String(i))},function(t){var a=i(e,t,this);if(a.done)return a.value;var r=n(t),u=String(this);if(!r.global)return c(r,u);var l=r.unicode;r.lastIndex=0;var d,f=[],m=0;while(null!==(d=c(r,u))){var p=String(d[0]);f[m]=p,""===p&&(r.lastIndex=o(u,s(r.lastIndex),l)),m++}return 0===m?null:f}]}))},"48b1":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"senior"}},[i("Header"),i("div",{attrs:{id:"container"}},[i("div",{attrs:{id:"senior_container"}},[t._m(0),i("SeniorItem",{attrs:{item_list:t.itemList}})],1),i("div",{attrs:{id:"item_button_container"}},[i("router-link",{attrs:{to:"/study"}},[i("ItemButton01",{staticClass:"item_button"})],1),i("router-link",{attrs:{to:"/life"}},[i("ItemButton02",{staticClass:"item_button"})],1)],1),i("AddQuestion")],1)],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"senior_title_container"},[i("h1",{staticClass:"senior_title1"},[t._v("先輩")]),i("h2",{staticClass:"senior_title2"},[t._v("について")])])}],s=i("0418"),r=i("3971"),o=i("d57a"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"senior_item"}},[i("div",{attrs:{id:"item_container"}},t._l(t.itemList,(function(e){return i("div",{key:e.title,staticClass:"topic_container"},[i("label",{attrs:{for:e.title}},[i("h2",{staticClass:"topic"},[t._v(t._s(e.title))])]),i("input",{attrs:{type:"checkbox",id:e.title}}),i("div",{staticClass:"hidden_show"},[i("Main",{staticClass:"topic_content",attrs:{main:e.main}}),e.isYouTube?i("div",{staticClass:"iframe_container"},[e.isYouTube?i("iframe",{attrs:{src:e.youtube_link,frameborder:"0",autoplay:"0",allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}):t._e()]):t._e()],1)])})),0)])},u=[],l=i("2614"),d={name:"SeniorItem",components:{Main:l["a"]},props:{item_list:Array},data:function(){return{itemList:this.item_list}}},f=d,m=(i("48c3"),i("2877")),p=Object(m["a"])(f,c,u,!1,null,"d14bd4ec",null),h=p.exports,v=i("6957"),_={name:"Study",components:{Header:s["a"],ItemButton01:r["a"],ItemButton02:o["a"],SeniorItem:h,AddQuestion:v["a"]},props:{senior_list:Array},data:function(){return{itemList:this.senior_list}},created:function(){localStorage.isPass="false",this.$router.pass=""}},y=_,g=(i("410d"),Object(m["a"])(y,a,n,!1,null,"a7ac2310",null));e["default"]=g.exports},"48c3":function(t,e,i){"use strict";var a=i("db03"),n=i.n(a);n.a},"4c70":function(t,e,i){"use strict";var a=i("52c3"),n=i.n(a);n.a},"52c3":function(t,e,i){},5351:function(t,e,i){"use strict";var a=i("388b"),n=i.n(a);n.a},"560f":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"study"}},[i("Header"),i("div",{attrs:{id:"container"}},[i("div",{attrs:{id:"study_container"}},[t._m(0),i("StudyItem",{attrs:{item_list:t.itemList}})],1),i("div",{attrs:{id:"item_button_container"}},[i("router-link",{attrs:{to:"/life"}},[i("ItemButton02",{staticClass:"item_button"})],1),i("router-link",{attrs:{to:"/senior"}},[i("ItemButton03",{staticClass:"item_button"})],1)],1),i("AddQuestion")],1)],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"study_title_container"},[i("h1",{staticClass:"study_title1"},[t._v("大学")]),i("h2",{staticClass:"study_title2"},[t._v("について")])])}],s=i("0418"),r=i("d57a"),o=i("9a68"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"study_item"}},[i("div",{attrs:{id:"item_container"}},t._l(t.itemList,(function(e){return i("div",{key:e.title,staticClass:"topic_container"},[i("label",{attrs:{for:e.title}},[i("h2",{staticClass:"topic"},[t._v(t._s(e.title))])]),i("input",{attrs:{type:"checkbox",id:e.title}}),i("div",{staticClass:"hidden_show"},[i("Main",{staticClass:"topic_content",attrs:{main:e.main}}),e.isYouTube?i("div",{staticClass:"iframe_container"},[e.isYouTube?i("iframe",{attrs:{src:e.youtube_link,frameborder:"0",autoplay:"0",allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}):t._e()]):t._e()],1)])})),0)])},u=[],l=i("2614"),d={name:"StudyItem",components:{Main:l["a"]},props:{item_list:Array},data:function(){return{itemList:this.item_list}}},f=d,m=(i("f043"),i("2877")),p=Object(m["a"])(f,c,u,!1,null,"c1c85d52",null),h=p.exports,v=i("6957"),_={name:"Study",components:{Header:s["a"],ItemButton02:r["a"],ItemButton03:o["a"],StudyItem:h,AddQuestion:v["a"]},props:{study_list:Array},data:function(){return{itemList:this.study_list}},created:function(){localStorage.isPass="false",this.$router.pass=""}},y=_,g=(i("5351"),Object(m["a"])(y,a,n,!1,null,"6c2e25b2",null));e["default"]=g.exports},"65f0":function(t,e,i){var a=i("861d"),n=i("e8b5"),s=i("b622"),r=s("species");t.exports=function(t,e){var i;return n(t)&&(i=t.constructor,"function"!=typeof i||i!==Array&&!n(i.prototype)?a(i)&&(i=i[r],null===i&&(i=void 0)):i=void 0),new(void 0===i?Array:i)(0===e?0:e)}},"7ea8":function(t,e,i){},"814d":function(t,e,i){},"85ef":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"header1_comp"}},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:i("edbf"),id:"c_logo"}}),a("div",{attrs:{id:"c_page_title_container"}},[a("h2",{attrs:{id:"c_page_title"}},[t._v(t._s(t.title))]),a("h2",{attrs:{id:"c_page_title1"}},[t._v(t._s(t.title1))])])]),a("nav",{staticClass:"nav_for_sections"},[a("ul",{staticClass:"header_ul"},t._l(t.sections,(function(e){return a("li",{key:e.id},[a("router-link",{attrs:{to:"/Authentication_for_committee_member/"+e.class_name,id:e.class_name+"_on"}},[t._v(t._s(e.title))])],1)})),0)])],1)},n=[],s={name:"Header",data:function(){return{title:"春日新歓2020情報Web",title1:"委員会用サイト",sections:[{title:"投稿",class_name:"form"},{title:"質問",class_name:"question"}]}},methods:{}},r=s,o=(i("37ba"),i("2877")),c=Object(o["a"])(r,a,n,!1,null,"70fa5b98",null);e["a"]=c.exports},"935e":function(t,e,i){},a640:function(t,e,i){"use strict";var a=i("d039");t.exports=function(t,e){var i=[][t];return!!i&&a((function(){i.call(null,e||function(){throw 1},1)}))}},ab10:function(t,e,i){"use strict";var a=i("44b8"),n=i.n(a);n.a},ae40:function(t,e,i){var a=i("83ab"),n=i("d039"),s=i("5135"),r=Object.defineProperty,o={},c=function(t){throw t};t.exports=function(t,e){if(s(o,t))return o[t];e||(e={});var i=[][t],u=!!s(e,"ACCESSORS")&&e.ACCESSORS,l=s(e,0)?e[0]:c,d=s(e,1)?e[1]:void 0;return o[t]=!!i&&!n((function(){if(u&&!a)return!0;var t={length:-1};u?r(t,1,{enumerable:!0,get:c}):t[1]=1,i.call(t,l,d)}))}},b53e:function(t,e,i){},b64b:function(t,e,i){var a=i("23e7"),n=i("7b0b"),s=i("df75"),r=i("d039"),o=r((function(){s(1)}));a({target:"Object",stat:!0,forced:o},{keys:function(t){return s(n(t))}})},b727:function(t,e,i){var a=i("0366"),n=i("44ad"),s=i("7b0b"),r=i("50c4"),o=i("65f0"),c=[].push,u=function(t){var e=1==t,i=2==t,u=3==t,l=4==t,d=6==t,f=5==t||d;return function(m,p,h,v){for(var _,y,g=s(m),b=n(g),C=a(p,h,3),k=r(b.length),w=0,x=v||o,S=e?x(m,k):i?x(m,0):void 0;k>w;w++)if((f||w in b)&&(_=b[w],y=C(_,w,g),t))if(e)S[w]=y;else if(y)switch(t){case 3:return!0;case 5:return _;case 6:return w;case 2:c.call(S,_)}else if(l)return!1;return d?-1:u||l?l:S}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},b8a9:function(t,e,i){"use strict";var a=i("814d"),n=i.n(a);n.a},bca3:function(t,e,i){},c055:function(t,e,i){"use strict";var a=i("7ea8"),n=i.n(a);n.a},c109:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"form"}},[i("Header1",{staticClass:"header"}),i("div",{attrs:{id:"container"}},[t._m(0),i("div",{attrs:{id:"form_container"}},[i("form",[i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("見出し")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"input1",attrs:{type:"text",id:"topic",placeholder:"例：履修登録はいつから？"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),i("div",{staticClass:"item_container",attrs:{id:"category_container"}},[i("h2",{staticClass:"form_title"},[t._v("分類")]),i("form",{attrs:{id:"checkbox_container"}},t._l(t.categoryList,(function(e){return i("div",{key:e.key},[i("input",{staticClass:"check",attrs:{type:"radio",name:"category",id:e},domProps:{value:e},on:{click:function(e){return t.judgeEdit()}}}),i("p",{staticClass:"category",on:{click:function(i){t.checkControl(e),t.judge()}}},[t._v(t._s(e))])])})),0)]),i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("本文")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.main,expression:"main"}],staticClass:"input2",attrs:{placeholder:"例 : 16日からです！11日に時間割が出るので、少なくともそれまでは何もしなくてもOK！"},domProps:{value:t.main},on:{input:function(e){e.target.composing||(t.main=e.target.value)}}})]),i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("YouTubeの時間指定付きリンク")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.youtube_link,expression:"youtube_link"}],staticClass:"input1",attrs:{type:"text"},domProps:{value:t.youtube_link},on:{input:function(e){e.target.composing||(t.youtube_link=e.target.value)}}})]),i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("執筆者")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.author,expression:"author"}],staticClass:"input1",attrs:{type:"text"},domProps:{value:t.author},on:{input:function(e){e.target.composing||(t.author=e.target.value)}}})]),i("input",{staticClass:"send",attrs:{value:"送信する",type:"submit"},on:{click:function(e){return t.send()}}})])])])],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"explain_container"}},[i("li",[t._v("見出し・項目・本文・執筆者は必須項目です。")]),i("li",[t._v("すでにある見出しを編集または削除したい場合は該当する見出しを入力しeditを選択してください。")]),i("li",[t._v("削除したい場合はもとの本文を削除しdeleteを入力してください。")]),i("li",[t._v("編集・削除いずれの場合も執筆者が一致している必要があります。")]),i("li",[t._v("配信の中で取り上げている内容の場合、そのリンクをYouTubeの時間指定付きリンクに貼ってください。")]),i("li",[t._v("執筆者はフルネームで入力してください。")])])}],s=(i("d3b7"),i("3ca3"),i("ddb0"),i("2b3d"),i("85ef")),r={name:"Form",components:{Header1:s["a"]},data:function(){return{title:"",category:"",main:"",youtube_link:"",author:"",pass:this.$router.pass,trueTitle:"",trueAuther:"",categoryList:["大学","生活","先輩","edit"]}},beforeCreate:function(){"false"==localStorage.isPass&&this.$router.push("/Authentication_for_committee_member/")},mounted:function(){var t=document.getElementById("topic");t.addEventListener("blur",this.judgeEdit)},methods:{checkControl:function(t){var e=document.getElementById(t),i=document.getElementById("checkbox_container"),a=i.category,n=a.value;""!=n&&n==e.value||(e.checked=!e.checked)},setCategory:function(){var t=document.getElementById("checkbox_container"),e=t.category,i=e.value;this.category=i},judgeEdit:function(){this.setCategory(),"edit"==this.category&&(""!=this.title?this.searchTitle():window.alert("見出しを入力してください💦"))},searchTitle:function(){var t=this,e=new URLSearchParams;e.append("title",this.title),this.axios.post("https://kzkymur.com/api/topic/",e).then((function(e){t.main=e.data.topic.main,t.trueAuther=e.data.topic.author})).catch((function(){window.alert("この見出しは存在しません😓")}))},send:function(){var t,e=this;if("edit"==this.category&&this.author!=this.trueAuther)return window.alert("執筆者が違います😓"),void(this.author="");if(""!=this.title&&""!=this.category&&""!=this.main&&""!=this.author){if(t="delete"==this.main?confirm("本当に削除しますか？"):confirm("この内容で投稿しますか？"),t){var i=new URLSearchParams;i.append("serial_num",0),i.append("title",this.title),i.append("category",this.category),i.append("main",this.main),i.append("youtube_link",this.youtube_link),i.append("author",this.author),i.append("key",this.pass),this.axios.post("https://kzkymur.com/api/manage_topic/",i).then((function(){"delete"==e.main?window.alert("正しく削除できました！🎉"):window.alert("正しく投稿できました！🎉"),e.title="",e.category="",e.main="",e.youtube_link="",e.author=""})).catch((function(t){window.alert(t)}))}}else window.alert("見出し・分類・本文・執筆者は必須項目です！")}}},o=r,c=(i("d88d"),i("2877")),u=Object(c["a"])(o,a,n,!1,null,"9682bf12",null);e["default"]=u.exports},d81d:function(t,e,i){"use strict";var a=i("23e7"),n=i("b727").map,s=i("1dde"),r=i("ae40"),o=s("map"),c=r("map");a({target:"Array",proto:!0,forced:!o||!c},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},d88d:function(t,e,i){"use strict";var a=i("f90f"),n=i.n(a);n.a},db03:function(t,e,i){},e254:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"question"}},[i("Header1",{staticClass:"header"}),i("div",{attrs:{id:"container"}},[i("div",{attrs:{id:"questions_container"}},[i("div",{staticClass:"question",attrs:{id:"study_container"}},[t._m(0),t._l(t.studyList.length,(function(e){return i("div",{key:e,staticClass:"topic_container"},[t.isShow1?i("input",{staticClass:"check",attrs:{type:"checkbox",id:t.studyList[e-1].id}}):t._e(),i("p",{staticClass:"topic_content",on:{click:function(i){return t.checkControl(t.studyList[e-1].id)}}},[t._v(t._s(t.studyList[e-1].main))])])}))],2),i("div",{staticClass:"question",attrs:{id:"life_container"}},[t._m(1),t._l(t.lifeList.length,(function(e){return i("div",{key:e,staticClass:"topic_container"},[t.isShow2?i("input",{staticClass:"check",attrs:{type:"checkbox",id:t.lifeList[e-1].id}}):t._e(),i("p",{staticClass:"topic_content",on:{click:function(i){return t.checkControl(t.lifeList[e-1].id)}}},[t._v(t._s(t.lifeList[e-1].main))])])}))],2),i("div",{staticClass:"question",attrs:{id:"senior_container"}},[t._m(2),t._l(t.seniorList.length,(function(e){return i("div",{key:e,staticClass:"topic_container"},[t.isShow3?i("input",{staticClass:"check",attrs:{type:"checkbox",id:t.seniorList[e-1].id}}):t._e(),i("p",{staticClass:"topic_content",on:{click:function(i){return t.checkControl(t.seniorList[e-1].id)}}},[t._v(t._s(t.seniorList[e-1].main))])])}))],2)]),i("input",{staticClass:"delete",attrs:{value:"削除する",type:"submit"},on:{click:function(e){return t.deleteQuestions()}}}),i("div",{attrs:{id:"form_container"}},[i("form",[i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("見出し")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"input1",attrs:{type:"text",placeholder:"例 : 履修はいつから？"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),i("div",{staticClass:"item_container",attrs:{id:"category_container"}},[i("h2",{staticClass:"form_title"},[t._v("分類")]),i("form",{attrs:{id:"checkbox_container"}},t._l(t.categoryList,(function(e){return i("div",{key:e.key},[i("input",{staticClass:"check",attrs:{type:"radio",name:"category",id:e},domProps:{value:e}}),i("p",{staticClass:"category",on:{click:function(i){return t.checkControl(e)}}},[t._v(t._s(e))])])})),0)]),i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("回答")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.main,expression:"main"}],staticClass:"input2",attrs:{placeholder:"例 : 16日からです！11日に時間割が出るので、少なくともそれまでは何もしなくてもOK！"},domProps:{value:t.main},on:{input:function(e){e.target.composing||(t.main=e.target.value)}}})]),i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("YouTubeの時間指定付きリンク")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.youtube_link,expression:"youtube_link"}],staticClass:"input1",attrs:{type:"text"},domProps:{value:t.youtube_link},on:{input:function(e){e.target.composing||(t.youtube_link=e.target.value)}}})]),i("div",{staticClass:"item_container"},[i("h2",{staticClass:"form_title"},[t._v("執筆者")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.author,expression:"author"}],staticClass:"input1",attrs:{type:"text"},domProps:{value:t.author},on:{input:function(e){e.target.composing||(t.author=e.target.value)}}})]),i("input",{staticClass:"send",attrs:{value:"送信する",type:"submit"},on:{click:function(e){return t.send()}}})])])])],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title_container"},[i("h1",{staticClass:"question_title1"},[t._v("大学")]),i("h2",{staticClass:"question_title2"},[t._v("について")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title_container"},[i("h1",{staticClass:"question_title1"},[t._v("生活")]),i("h2",{staticClass:"question_title2"},[t._v("について")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title_container"},[i("h1",{staticClass:"question_title1"},[t._v("先輩")]),i("h2",{staticClass:"question_title2"},[t._v("について")])])}],s=(i("d3b7"),i("3ca3"),i("ddb0"),i("2b3d"),i("85ef")),r={name:"Question",components:{Header1:s["a"]},data:function(){return{data:"",studyList:[],lifeList:[],seniorList:[],title:"",category:"",main:"",youtube_link:"",author:"",pass:this.$router.pass,isShow1:!1,isShow2:!1,isShow3:!1,deleteArray:[],categoryList:["大学","生活","先輩"]}},beforeCreate:function(){"false"==localStorage.isPass&&this.$router.push("/Authentication_for_committee_member/")},created:function(){this.getPost()},methods:{checkControl:function(t){var e=document.getElementById(t),i=document.getElementById("checkbox_container"),a=i.category,n=a.value;""!=n&&n==e.value||(e.checked=!e.checked)},setCategory:function(){var t=document.getElementById("checkbox_container"),e=t.category,i=e.value;this.category=i},judgeChecked:function(t){this.deleteArray=[];for(var e=0;e<t.length;e++){var i=document.getElementById(t[e].id);i.checked&&this.deleteArray.push({main:t[e].main})}},getPost:function(){var t=this;this.axios.get("https://kzkymur.com/api/question/").then((function(e){var i=[],a=[],n=[],s=0,r=0,o=0;t.data=e.data.question;for(var c=0;c<e.data.question.length;c++)"大学"==e.data.question[c].category?(s+=1,i.push(e.data.question[c]),t.studyList=i):"生活"==e.data.question[c].category?(r+=1,a.push(e.data.question[c]),t.lifeList=a):"先輩"==e.data.question[c].category&&(o+=1,n.push(e.data.question[c]),t.seniorList=n);0==s?(t.isShow1=!1,t.studyList=[{main:"質問はありません"}]):t.isShow1=!0,0==r?(t.isShow2=!1,t.lifeList=[{main:"質問はありません"}]):t.isShow2=!0,0==o?(t.isShow3=!1,t.seniorList=[{main:"質問はありません"}]):t.isShow3=!0})).catch((function(t){window.alert(t)}))},deleteQuestions:function(){var t=this,e=confirm("本当に削除しますか？");if(1==e){this.judgeChecked(this.data);var i=new URLSearchParams;i.append("mode",1),i.append("delete_questions",JSON.stringify(this.deleteArray)),i.append("key",this.pass),this.axios.post("https://kzkymur.com/api/manage_question/",i).then((function(){window.alert("正しく削除できました！😁"),t.getPost()})).catch((function(t){window.alert(t.response.data.message)}))}},send:function(){var t=this;if(this.setCategory(),""!=this.title&&""!=this.category&&""!=this.main&&""!=this.author)if("大学"==this.category||"生活"==this.category||"先輩"==this.category){var e=confirm("この内容で投稿しますか？");if(1==e){var i=new URLSearchParams;i.append("title",this.title),i.append("category",this.category),i.append("main",this.main),i.append("youtube_link",this.youtube_link),i.append("author",this.author),i.append("key",this.pass),this.axios.post("https://kzkymur.com/api/manage_topic/",i).then((function(){window.alert("正しく投稿できました！🎉"),t.title="",t.category="",t.main="",t.youtube_link="",t.author="",t.getPost()})).catch((function(t){window.alert(t.response.data.message)}))}}else window.alert("分類は大学・生活・先輩のいづれかです！");else window.alert("見出し・分類・本文・執筆者は必須項目です！")}}},o=r,c=(i("c055"),i("2877")),u=Object(c["a"])(o,a,n,!1,null,"2f078381",null);e["default"]=u.exports},e8b5:function(t,e,i){var a=i("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}},f043:function(t,e,i){"use strict";var a=i("2556"),n=i.n(a);n.a},f90f:function(t,e,i){},f950:function(t,e,i){"use strict";var a=i("935e"),n=i.n(a);n.a}}]);
//# sourceMappingURL=about.ed58d466.js.map