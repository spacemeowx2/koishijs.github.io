import{_ as d,o as r,c,a as e,e as t,w as o,F as h,b as n,d as a,r as i}from"./app.0c925ea4.js";const _={},u=e("h1",{id:"\u4E8B\u4EF6\u7CFB\u7EDF-lifecycle",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4E8B\u4EF6\u7CFB\u7EDF-lifecycle","aria-hidden":"true"},"#"),n(" \u4E8B\u4EF6\u7CFB\u7EDF (Lifecycle)")],-1),p={class:"custom-container tip"},x=e("p",{class:"custom-container-title"},"TIP",-1),g=n("\u76F8\u5173\u6307\u5357\uFF1A"),m=n("\u4E8B\u4EF6\u7CFB\u7EDF"),v=a('<h2 id="\u5B9E\u4F8B\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B\u65B9\u6CD5" aria-hidden="true">#</a> \u5B9E\u4F8B\u65B9\u6CD5</h2><h3 id="ctx-emit-session-event-param" tabindex="-1"><a class="header-anchor" href="#ctx-emit-session-event-param" aria-hidden="true">#</a> ctx.emit(session?, event, ...param)</h3><h3 id="ctx-parallel-session-event-param" tabindex="-1"><a class="header-anchor" href="#ctx-parallel-session-event-param" aria-hidden="true">#</a> ctx.parallel(session?, event, ...param)</h3>',3),f=e("strong",null,"session:",-1),b=n(),w=e("code",null,"Session",-1),B=n(" \u4F1A\u8BDD\u5BF9\u8C61"),y=e("li",null,[e("strong",null,"event:"),n(),e("code",null,"string"),n(" \u4E8B\u4EF6\u540D\u79F0")],-1),F=e("li",null,[e("strong",null,"param:"),n(),e("code",null,"any[]"),n(" \u4E8B\u4EF6\u7684\u53C2\u6570")],-1),E=e("li",null,[n("\u8FD4\u56DE\u503C: "),e("code",null,"boolean"),n(" \u5339\u914D\u7ED3\u679C")],-1),k=e("p",null,"\u540C\u65F6\u89E6\u53D1\u6240\u6709 event \u4E8B\u4EF6\u7684\u80FD\u591F\u5339\u914D session \u5BF9\u8C61\u7684\u56DE\u8C03\u51FD\u6570\u3002emit \u4E3A\u540C\u6B65\uFF0Cparallel \u4E3A\u5F02\u6B65\u3002",-1),N=e("h3",{id:"ctx-bail-session-event-param",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ctx-bail-session-event-param","aria-hidden":"true"},"#"),n(" ctx.bail(session?, event, ...param)")],-1),S=e("h3",{id:"ctx-serial-session-event-param",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ctx-serial-session-event-param","aria-hidden":"true"},"#"),n(" ctx.serial(session?, event, ...param)")],-1),V=e("strong",null,"session:",-1),L=n(),A=e("code",null,"Session",-1),C=n(" \u4F1A\u8BDD\u5BF9\u8C61"),D=e("li",null,[e("strong",null,"event:"),n(),e("code",null,"string"),n(" \u4E8B\u4EF6\u540D\u79F0")],-1),R=e("li",null,[e("strong",null,"param:"),n(),e("code",null,"any[]"),n(" \u4E8B\u4EF6\u7684\u53C2\u6570")],-1),T=e("li",null,[n("\u8FD4\u56DE\u503C: "),e("code",null,"boolean"),n(" \u5339\u914D\u7ED3\u679C")],-1),I=e("p",null,"\u4F9D\u6B21\u89E6\u53D1\u6240\u6709 event \u4E8B\u4EF6\u7684\u80FD\u591F\u5339\u914D session \u5BF9\u8C61\u7684\u56DE\u8C03\u51FD\u6570\u3002\u5F53\u8FD4\u56DE\u4E00\u4E2A false, null, undefined \u4EE5\u5916\u7684\u503C\u65F6\u5C06\u8FD9\u4E2A\u503C\u4F5C\u4E3A\u7ED3\u679C\u8FD4\u56DE\u3002bail \u4E3A\u540C\u6B65\uFF0Cserial \u4E3A\u5F02\u6B65\u3002",-1),M={id:"ctx-chain-session-event-param",tabindex:"-1"},P=e("a",{class:"header-anchor",href:"#ctx-chain-session-event-param","aria-hidden":"true"},"#",-1),j=n(" ctx.chain(session?, event, ...param) "),q={id:"ctx-waterfall-session-event-param",tabindex:"-1"},z=e("a",{class:"header-anchor",href:"#ctx-waterfall-session-event-param","aria-hidden":"true"},"#",-1),G=n(" ctx.waterfall(session?, event, ...param) "),H=e("strong",null,"session:",-1),J=n(),K=e("code",null,"Session",-1),O=n(" \u4F1A\u8BDD\u5BF9\u8C61"),Q=e("li",null,[e("strong",null,"event:"),n(),e("code",null,"string"),n(" \u4E8B\u4EF6\u540D\u79F0")],-1),U=e("li",null,[e("strong",null,"param:"),n(),e("code",null,"any[]"),n(" \u4E8B\u4EF6\u7684\u53C2\u6570")],-1),W=e("li",null,[n("\u8FD4\u56DE\u503C: "),e("code",null,"boolean"),n(" \u5339\u914D\u7ED3\u679C")],-1),X=a('<p>\u4F9D\u6B21\u89E6\u53D1\u6240\u6709 event \u4E8B\u4EF6\u7684\u80FD\u591F\u5339\u914D session \u5BF9\u8C61\u7684\u56DE\u8C03\u51FD\u6570\u3002\u6BCF\u6B21\u7528\u5F97\u5230\u7684\u8FD4\u56DE\u503C\u8986\u76D6\u4E0B\u4E00\u8F6E\u8C03\u7528\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u5E76\u5728\u6240\u6709\u51FD\u6570\u6267\u884C\u5B8C\u540E\u8FD4\u56DE\u6700\u7EC8\u7ED3\u679C\u3002chain \u4E3A\u540C\u6B65\uFF0Cwaterfall \u4E3A\u5F02\u6B65\u3002</p><h3 id="ctx-on-event-listener-prepend" tabindex="-1"><a class="header-anchor" href="#ctx-on-event-listener-prepend" aria-hidden="true">#</a> ctx.on(event, listener, prepend?)</h3><ul><li><strong>event:</strong> <code>string</code> \u4E8B\u4EF6\u540D\u79F0</li><li><strong>listener:</strong> <code>Function</code> \u56DE\u8C03\u51FD\u6570</li><li><strong>prepend:</strong> <code>boolean</code> \u662F\u5426\u524D\u7F6E</li><li>\u8FD4\u56DE\u503C: <code>() =&gt; boolean</code> \u53D6\u6D88\u8FD9\u4E2A\u76D1\u542C\u5668</li></ul><p>\u76D1\u542C\u4E00\u4E2A\u4E8B\u4EF6\u3002</p><h3 id="ctx-off-event-listener" tabindex="-1"><a class="header-anchor" href="#ctx-off-event-listener" aria-hidden="true">#</a> ctx.off(event, listener)</h3><ul><li><strong>event:</strong> <code>string</code> \u4E8B\u4EF6\u540D\u79F0</li><li><strong>listener:</strong> <code>Function</code> \u56DE\u8C03\u51FD\u6570</li><li>\u8FD4\u56DE\u503C: <code>boolean</code> \u662F\u5426\u6709\u6B64\u56DE\u8C03\u51FD\u6570</li></ul><p>\u53D6\u6D88\u76D1\u542C\u4E00\u4E2A\u4E8B\u4EF6\u3002</p><h3 id="ctx-once-event-listener-prepend" tabindex="-1"><a class="header-anchor" href="#ctx-once-event-listener-prepend" aria-hidden="true">#</a> ctx.once(event, listener, prepend?)</h3><ul><li><strong>event:</strong> <code>string</code> \u4E8B\u4EF6\u540D\u79F0</li><li><strong>listener:</strong> <code>Function</code> \u56DE\u8C03\u51FD\u6570</li><li><strong>prepend:</strong> <code>boolean</code> \u662F\u5426\u524D\u7F6E</li><li>\u8FD4\u56DE\u503C: <code>() =&gt; boolean</code> \u53D6\u6D88\u8FD9\u4E2A\u76D1\u542C\u5668</li></ul><p>\u76D1\u542C\u4E00\u4E2A\u4E8B\u4EF6\uFF0C\u4E14\u786E\u4FDD\u56DE\u8C03\u51FD\u6570\u53EA\u4F1A\u88AB\u6267\u884C\u4E00\u6B21\u3002</p><h3 id="ctx-before-event-listener-append" tabindex="-1"><a class="header-anchor" href="#ctx-before-event-listener-append" aria-hidden="true">#</a> ctx.before(event, listener, append?)</h3><ul><li><strong>event:</strong> <code>string</code> \u4E8B\u4EF6\u540D\u79F0</li><li><strong>listener:</strong> <code>Function</code> \u56DE\u8C03\u51FD\u6570</li><li><strong>append:</strong> <code>boolean</code> \u662F\u5426\u540E\u7F6E</li><li>\u8FD4\u56DE\u503C: <code>() =&gt; boolean</code> \u53D6\u6D88\u8FD9\u4E2A\u76D1\u542C\u5668</li></ul><p>\u76D1\u542C\u4E00\u4E2A\u4EE5 <code>before-</code> \u5F00\u5934\u7684\u4E8B\u4EF6\u3002</p><h3 id="ctx-middleware-middleware-prepend" tabindex="-1"><a class="header-anchor" href="#ctx-middleware-middleware-prepend" aria-hidden="true">#</a> ctx.middleware(middleware, prepend?)</h3>',14),Y=e("strong",null,"middleware:",-1),Z=n(),$=e("code",null,"Middleware",-1),ee=n(" \u8981\u6CE8\u518C\u7684\u4E2D\u95F4\u4EF6"),ne=e("li",null,[e("strong",null,"prepend:"),n(),e("code",null,"boolean"),n(" \u662F\u5426\u524D\u7F6E")],-1),te=e("li",null,[n("\u8FD4\u56DE\u503C: "),e("code",null,"() => boolean"),n(" \u53D6\u6D88\u8FD9\u4E2A\u4E2D\u95F4\u4EF6")],-1),se=e("p",null,"\u5F53\u524D\u4E0A\u4E0B\u6587\u4E2D\u6CE8\u518C\u4E00\u4E2A\u4E2D\u95F4\u4EF6\u3002",-1);function oe(le,ie){const s=i("RouterLink"),l=i("Badge");return r(),c(h,null,[u,e("div",p,[x,e("p",null,[g,t(s,{to:"/guide/plugin/events.html"},{default:o(()=>[m]),_:1})])]),v,e("ul",null,[e("li",null,[f,b,t(s,{to:"/api/service/session.html"},{default:o(()=>[w]),_:1}),B]),y,F,E]),k,N,S,e("ul",null,[e("li",null,[V,L,t(s,{to:"/api/service/session.html"},{default:o(()=>[A]),_:1}),C]),D,R,T]),I,e("h3",M,[P,j,t(l,{text:"beta",type:"warning"})]),e("h3",q,[z,G,t(l,{text:"beta",type:"warning"})]),e("ul",null,[e("li",null,[H,J,t(s,{to:"/api/service/session.html"},{default:o(()=>[K]),_:1}),O]),Q,U,W]),X,e("ul",null,[e("li",null,[Y,Z,t(s,{to:"/guide/message.html#%E4%BD%BF%E7%94%A8%E4%B8%AD%E9%97%B4%E4%BB%B6"},{default:o(()=>[$]),_:1}),ee]),ne,te]),se],64)}var de=d(_,[["render",oe],["__file","lifecycle.html.vue"]]);export{de as default};
