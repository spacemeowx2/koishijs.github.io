import{_ as c,o as r,c as i,e as a,w as l,F as p,d as F,a as e,b as s,r as n}from"./app.0c925ea4.js";const d={},h=F('<h1 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a> \u57FA\u672C\u7528\u6CD5</h1><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u7531\u4E8E\u672C\u63D2\u4EF6\u4F7F\u7528\u4E86\u8BB8\u591A\u6700\u65B0\u7684\u7279\u6027\uFF0C\u56E0\u6B64\u9700\u8981\u4F60\u7684 Node \u7248\u672C\u4E0D\u5C0F\u4E8E 14.6\uFF0C\u5E76\u5728\u8FD0\u884C\u65F6\u9644\u4E0A <code>--enable-source-maps</code> \u548C <code>--experimental-vm-modules</code> \u53C2\u6570\u3002</p></div><p>koishi-plugin-eval \u5141\u8BB8\u7528\u6237\u76F4\u63A5\u4F7F\u7528\u673A\u5668\u4EBA\u6267\u884C\u811A\u672C\u3002\u5B83\u5229\u7528\u4E86 Node.js \u7684 vm \u548C worker_thread \u6A21\u5757\uFF0C\u5728\u4FDD\u62A4\u6267\u884C\u5B89\u5168\u7684\u524D\u63D0\u4E0B\u80FD\u591F\u83B7\u5F97\u8F83\u5FEB\u7684\u54CD\u5E94\u901F\u5EA6\u3002\u540C\u65F6\uFF0C\u63D2\u4EF6\u8FD8\u63D0\u4F9B\u4E86\u4E00\u4E9B\u5185\u7F6E\u7684 API \u4F9B\u7528\u6237\u8C03\u7528\uFF0C\u7ED3\u5408\u6559\u5B66\u529F\u80FD\u53EF\u4EE5\u5728\u5BA2\u6237\u7AEF\u5B9E\u73B0\u590D\u6742\u7684\u884C\u4E3A\u3002</p><p>addons \u529F\u80FD\u5728\u4E0A\u8FF0\u529F\u80FD\u7684\u57FA\u7840\u4E0A\uFF0C\u5141\u8BB8\u7528\u6237\u7F16\u5199\u81EA\u5DF1\u7684\u6A21\u5757\u5E76\u6C38\u4E45\u4FDD\u5B58\u3002\u63D2\u4EF6\u5C06\u81EA\u52A8\u52A0\u8F7D\u7279\u5B9A\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\uFF0C\u5E76\u5C06\u5176\u4F5C\u4E3A\u673A\u5668\u4EBA\u7684\u5185\u7F6E\u529F\u80FD\u3002\u7528\u6237\u53EF\u4EE5\u5229\u7528\u6B64\u529F\u80FD\u5B58\u50A8\u8F83\u4E3A\u590D\u6742\u7684\u4EE3\u7801\uFF0C\u751A\u81F3\u6269\u5C55\u65B0\u7684\u6307\u4EE4\u3002\u540C\u65F6\uFF0C\u5982\u679C\u4E0A\u8FF0\u76EE\u5F55\u662F\u4E00\u4E2A git \u76EE\u5F55\uFF0C\u8BE5\u63D2\u4EF6\u4E5F\u63D0\u4F9B\u4E86\u81EA\u52A8\u66F4\u65B0\u7B49\u673A\u5236\u3002</p><h2 id="\u6307\u4EE4-evaluate" tabindex="-1"><a class="header-anchor" href="#\u6307\u4EE4-evaluate" aria-hidden="true">#</a> \u6307\u4EE4\uFF1Aevaluate</h2><h2 id="\u5B89\u5168\u6027" tabindex="-1"><a class="header-anchor" href="#\u5B89\u5168\u6027" aria-hidden="true">#</a> \u5B89\u5168\u6027</h2><h3 id="\u4F7F\u7528\u9677\u9631" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u9677\u9631" aria-hidden="true">#</a> \u4F7F\u7528\u9677\u9631</h3><p>koishi-plugin-eval \u63D0\u4F9B\u4E86\u4E00\u5957\u9677\u9631 API\u3002\u5B83\u4F1A\u5F71\u54CD evaluate \u6307\u4EE4\u548C\u6269\u5C55\u6307\u4EE4\u4E2D\u7684\u7528\u6237\u6570\u636E\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u7684\u65B9\u5F0F\u6765\u5B9A\u4E49\u4E00\u4E2A\u9677\u9631\uFF1A</p>',8),u=e("pre",{class:"shiki",style:{"background-color":"#272822"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F92672"}},"import"),e("span",{style:{color:"#F8F8F2"}}," { Trap } "),e("span",{style:{color:"#F92672"}},"from"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E6DB74"}},"'koishi-plugin-eval'")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"Trap.user."),e("span",{style:{color:"#A6E22E"}},"define"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#E6DB74"}},"'foo'"),e("span",{style:{color:"#F8F8F2"}},", {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  fields: ["),e("span",{style:{color:"#E6DB74"}},"'bar'"),e("span",{style:{color:"#F8F8F2"}},"],")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#A6E22E"}},"get"),e("span",{style:{color:"#F8F8F2"}},": "),e("span",{style:{color:"#FD971F","font-style":"italic"}},"user"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," user.bar,")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#A6E22E"}},"set"),e("span",{style:{color:"#F8F8F2"}},": ("),e("span",{style:{color:"#FD971F","font-style":"italic"}},"user"),e("span",{style:{color:"#F8F8F2"}},", "),e("span",{style:{color:"#FD971F","font-style":"italic"}},"value"),e("span",{style:{color:"#F8F8F2"}},") "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," user.bar "),e("span",{style:{color:"#F92672"}},"="),e("span",{style:{color:"#F8F8F2"}}," value,")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"})")])])],-1),y=e("p",null,[s("\u8FD9\u6837\u4E00\u6765\uFF0C\u5F53\u7528\u6237\u5728\u6C99\u7BB1\u4E2D\u5C1D\u8BD5\u8BBF\u95EE "),e("code",null,"user.foo"),s(" \u65F6\uFF0C\u8BBF\u95EE\u5230\u7684\u5B9E\u9645\u4E0A\u662F "),e("code",null,"user.bar"),s(" \u7684\u6570\u636E\u3002")],-1),_=e("p",null,"\u5F53\u7136\uFF0C\u9677\u9631 API \u80FD\u505A\u7684\u4E8B\u8FDC\u6BD4\u4E0A\u9762\u7684\u4F8B\u5B50\u5F3A\u5927\u3002\u5047\u5982\u4E00\u4E9B\u6570\u636E\u7684\u8BA1\u7B97\u66F4\u9002\u5408\u5728\u4E3B\u7EBF\u7A0B\u5B8C\u6210\uFF0C\u4F60\u5C31\u53EF\u4EE5\u901A\u8FC7\u9677\u9631\u6765\u5C06\u5DF2\u7ECF\u8BA1\u7B97\u597D\u7684\u6570\u636E\u66B4\u9732\u7ED9\u5B50\u7EBF\u7A0B\u3002",-1),f=e("h3",{id:"\u7981\u7528\u90E8\u5206\u6307\u4EE4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u7981\u7528\u90E8\u5206\u6307\u4EE4","aria-hidden":"true"},"#"),s(" \u7981\u7528\u90E8\u5206\u6307\u4EE4")],-1),m=e("p",null,"\u5982\u679C\u4F60\u62C5\u5FC3\u5728 evaluate \u4E2D\u8C03\u7528\u90E8\u5206\u6307\u4EE4\u5B58\u5728\u98CE\u9669\uFF0C\u4F60\u53EF\u4EE5\u624B\u52A8\u5C06\u8FD9\u4E9B\u6307\u4EE4\u8BBE\u7F6E\u4E3A\u7981\u6B62\u5728\u6C99\u7BB1\u4E2D\u8C03\u7528\uFF1A",-1),v=e("pre",{class:"shiki",style:{"background-color":"#272822"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"ctx."),e("span",{style:{color:"#A6E22E"}},"command"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#E6DB74"}},"'foo'"),e("span",{style:{color:"#F8F8F2"}},", { noEval: "),e("span",{style:{color:"#AE81FF"}},"true"),e("span",{style:{color:"#F8F8F2"}}," })")])])],-1),E=s("> exec('foo')"),x=s("\u4E0D\u80FD\u5728 evaluate \u6307\u4EE4\u4E2D\u8C03\u7528 foo \u6307\u4EE4\u3002"),b=e("p",null,"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0Cevaluate \u6307\u4EE4\u672C\u8EAB\u4E5F\u662F\u7981\u6B62\u5728\u6C99\u7BB1\u4E2D\u8C03\u7528\u7684\u3002",-1);function k(g,A){const o=n("panel-view"),t=n("chat-message");return r(),i(p,null,[h,a(o,{class:"code",title:"",style:{}},{default:l(()=>[u]),_:1}),y,_,f,m,a(o,{class:"code",title:"",style:{}},{default:l(()=>[v]),_:1}),a(o,{title:"\u804A\u5929\u8BB0\u5F55"},{default:l(()=>[a(t,{nickname:"Alice",color:"#cc0066"},{default:l(()=>[E]),_:1}),a(t,{nickname:"Koishi",avatar:"/koishi.png"},{default:l(()=>[x]),_:1})]),_:1}),b],64)}var B=c(d,[["render",k],["__file","index.html.vue"]]);export{B as default};
