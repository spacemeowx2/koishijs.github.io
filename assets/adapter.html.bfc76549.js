import{_ as i,o as c,c as p,a as e,e as o,w as n,F as h,b as t,d as s,r}from"./app.0c925ea4.js";const _={},u=e("h1",{id:"\u9002\u914D\u5668-adapter",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u9002\u914D\u5668-adapter","aria-hidden":"true"},"#"),t(" \u9002\u914D\u5668 (Adapter)")],-1),b=e("p",null,"\u672C\u7AE0\u5C06\u4ECB\u7ECD\u4E0E\u9002\u914D\u5668\u76F8\u5173\u7684\u5185\u5BB9\uFF0C\u8FD9\u662F\u4E00\u4E2A\u76F8\u5F53\u5E95\u5C42\u7684\u6982\u5FF5\uFF0C\u56E0\u6B64\u5982\u679C\u4F60\u5E76\u4E0D\u6253\u7B97\u7F16\u5199\u4E00\u4E2A\u5E73\u53F0\u5B9E\u73B0\uFF0C\u4F60\u5B8C\u5168\u53EF\u4EE5\u8DF3\u8FC7\u672C\u7AE0\u8282\u3002",-1),f=t("\u6807\u6709 "),g=t(" \u7684\u65B9\u6CD5\u9700\u8981\u5E73\u53F0\u81EA\u884C\u5B9E\u73B0\u3002"),F=s('<h2 id="\u9759\u6001\u5C5E\u6027\u548C\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u5C5E\u6027\u548C\u65B9\u6CD5" aria-hidden="true">#</a> \u9759\u6001\u5C5E\u6027\u548C\u65B9\u6CD5</h2><h3 id="adapter-define-platform-bot-adapter" tabindex="-1"><a class="header-anchor" href="#adapter-define-platform-bot-adapter" aria-hidden="true">#</a> Adapter.define(platform, bot, adapter)</h3><h3 id="adapter-define-platform-bot-adapters-redirect" tabindex="-1"><a class="header-anchor" href="#adapter-define-platform-bot-adapters-redirect" aria-hidden="true">#</a> Adapter.define(platform, bot, adapters, redirect?)</h3><ul><li>\u7B2C\u4E00\u79CD\u8C03\u7528\u65B9\u5F0F\uFF1A <ul><li><strong>platform:</strong> <code>string</code> \u5E73\u53F0\u540D</li><li><strong>bot:</strong> <code>Bot.Constructor</code> Bot \u6784\u9020\u51FD\u6570</li><li><strong>adapter:</strong> <code>Adapter.Constructor</code> Adapter \u6784\u9020\u51FD\u6570</li></ul></li><li>\u7B2C\u4E8C\u79CD\u8C03\u7528\u65B9\u5F0F\uFF1A <ul><li><strong>platform:</strong> <code>string</code> \u5E73\u53F0\u540D</li><li><strong>bot:</strong> <code>Bot.Constructor</code> Bot \u6784\u9020\u51FD\u6570</li><li><strong>adapters:</strong> <code>Dict&lt;Adapter.Constructor&gt;</code> \u534F\u8BAE\u5230 Adapter \u6784\u9020\u51FD\u6570\u7684\u952E\u503C\u5BF9</li><li><strong>redirect:</strong> <code>Function</code> \u7531 Bot \u914D\u7F6E\u9879\u63A8\u65AD\u91C7\u7528\u7684\u534F\u8BAE\u7684\u56DE\u8C03\u51FD\u6570</li></ul></li><li>\u8FD4\u56DE\u503C: <code>Plugin</code></li></ul>',4),y=t("\u521B\u5EFA\u4E00\u4E2A\u9002\u914D\u5668\u63D2\u4EF6\u3002\u53C2\u89C1 "),x=t("\u7F16\u5199\u9002\u914D\u5668\u63D2\u4EF6"),m=t(" \u4E00\u8282\u3002"),k=s('<h2 id="\u7C7B-adapter" tabindex="-1"><a class="header-anchor" href="#\u7C7B-adapter" aria-hidden="true">#</a> \u7C7B\uFF1AAdapter</h2><h3 id="new-adapter-app-config" tabindex="-1"><a class="header-anchor" href="#new-adapter-app-config" aria-hidden="true">#</a> new Adapter(app, config)</h3><ul><li><strong>app:</strong> <code>App</code> \u5E94\u7528\u5B9E\u4F8B</li><li><strong>config:</strong> <code>object</code> \u914D\u7F6E\u9879</li></ul><p>\u521B\u5EFA\u4E00\u4E2A\u9002\u914D\u5668\u5B9E\u4F8B\u3002</p><h3 id="adapter-config" tabindex="-1"><a class="header-anchor" href="#adapter-config" aria-hidden="true">#</a> adapter.config</h3><ul><li>\u7C7B\u578B: <code>object</code></li></ul><p>\u6784\u9020 Adapter \u5B9E\u4F8B\u65F6\u6240\u4F7F\u7528\u7684\u914D\u7F6E\u9879\u3002</p><h3 id="adapter-bots" tabindex="-1"><a class="header-anchor" href="#adapter-bots" aria-hidden="true">#</a> adapter.bots</h3><ul><li>\u7C7B\u578B: <code>Bot[]</code></li></ul><p>\u5F53\u524D\u9002\u914D\u5668\u4E0B\u7684\u5168\u90E8\u673A\u5668\u4EBA\u5B9E\u4F8B\u3002</p><h3 id="adapter-dispatch-session" tabindex="-1"><a class="header-anchor" href="#adapter-dispatch-session" aria-hidden="true">#</a> adapter.dispatch(session)</h3><ul><li><strong>session:</strong> <code>Session</code> \u4F1A\u8BDD\u5B9E\u4F8B</li><li>\u8FD4\u56DE\u503C: <code>void</code></li></ul><p>\u6839\u636E\u4F1A\u8BDD\u5185\u5BB9\uFF0C\u5728\u76F8\u5E94\u7684\u4E0A\u4E0B\u6587\u89E6\u53D1\u4E00\u4E2A\u4E0A\u62A5\u4E8B\u4EF6\u3002</p>',13),v={id:"adapter-start",tabindex:"-1"},w=e("a",{class:"header-anchor",href:"#adapter-start","aria-hidden":"true"},"#",-1),A=t(" adapter.start() "),B=e("ul",null,[e("li",null,[t("\u8FD4\u56DE\u503C: "),e("code",null,"void | Promise<void>")])],-1),C=e("p",null,"\u542F\u52A8\u9002\u914D\u5668\u6240\u9700\u7684\u64CD\u4F5C\uFF0C\u5C06\u4F5C\u4E3A ready \u4E8B\u4EF6\u7684\u56DE\u8C03\u51FD\u6570\u3002",-1),S={id:"adapter-stop",tabindex:"-1"},W=e("a",{class:"header-anchor",href:"#adapter-stop","aria-hidden":"true"},"#",-1),E=t(" adapter.stop() "),D=e("ul",null,[e("li",null,[t("\u8FD4\u56DE\u503C: "),e("code",null,"void | Promise<void>")])],-1),P=e("p",null,"\u505C\u6B62\u9002\u914D\u5668\u6240\u9700\u7684\u64CD\u4F5C\uFF0C\u5C06\u4F5C\u4E3A dispose \u4E8B\u4EF6\u7684\u56DE\u8C03\u51FD\u6570\u3002",-1),N={id:"adapter-connect-bot",tabindex:"-1"},V=e("a",{class:"header-anchor",href:"#adapter-connect-bot","aria-hidden":"true"},"#",-1),L=t(" adapter.connect(bot) "),j=s('<ul><li><strong>bot:</strong> <code>Bot</code> \u673A\u5668\u4EBA\u5B9E\u4F8B</li><li>\u8FD4\u56DE\u503C: <code>void | Promise&lt;void&gt;</code></li></ul><p>\u8FDE\u63A5 Bot \u6240\u9700\u7684\u64CD\u4F5C\uFF0C\u5C06\u5728 <code>bot.connect()</code> \u4E2D\u88AB\u8C03\u7528\u3002</p><h2 id="\u7C7B-adapter-websocketclient" tabindex="-1"><a class="header-anchor" href="#\u7C7B-adapter-websocketclient" aria-hidden="true">#</a> \u7C7B\uFF1AAdapter.WebSocketClient</h2><h3 id="new-adapter-websocketclient-app-options" tabindex="-1"><a class="header-anchor" href="#new-adapter-websocketclient-app-options" aria-hidden="true">#</a> new Adapter.WebSocketClient(app, options?)</h3><ul><li><strong>app:</strong> <code>App</code> \u5E94\u7528\u5B9E\u4F8B</li><li><strong>options:</strong> <code>WebSocketClientOptions</code> \u8FDE\u63A5\u914D\u7F6E</li></ul><p>\u521B\u5EFA\u4E00\u4E2A WebSocketClient \u9002\u914D\u5668\u5B9E\u4F8B\u3002</p>',6),O=e("pre",{class:"shiki",style:{"background-color":"#272822"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F92672"}},"export"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"interface"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"WebSocketClientOptions"),e("span",{style:{color:"#F8F8F2"}}," {")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  retryLazy"),e("span",{style:{color:"#F92672"}},"?:"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"number")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  retryTimes"),e("span",{style:{color:"#F92672"}},"?:"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"number")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  retryInterval"),e("span",{style:{color:"#F92672"}},"?:"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"number")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")])])],-1),R={id:"adapter-prepare-bot",tabindex:"-1"},T=e("a",{class:"header-anchor",href:"#adapter-prepare-bot","aria-hidden":"true"},"#",-1),z=t(" adapter.prepare(bot) "),I=e("ul",null,[e("li",null,[e("strong",null,"bot:"),t(),e("code",null,"Bot"),t(" \u673A\u5668\u4EBA\u5B9E\u4F8B")]),e("li",null,[t("\u8FD4\u56DE\u503C: "),e("code",null,"WebSocket | Promise<WebSocket>")])],-1),q=e("p",null,"\u6839\u636E\u673A\u5668\u4EBA\u5B9E\u4F8B\u751F\u6210\u4E00\u4E2A WebSocket \u5BF9\u8C61\u3002",-1),G={id:"adapter-accept-bot",tabindex:"-1"},H=e("a",{class:"header-anchor",href:"#adapter-accept-bot","aria-hidden":"true"},"#",-1),J=t(" adapter.accept(bot) "),K=e("ul",null,[e("li",null,[e("strong",null,"bot:"),t(),e("code",null,"Bot"),t(" \u673A\u5668\u4EBA\u5B9E\u4F8B")]),e("li",null,[t("\u8FD4\u56DE\u503C: "),e("code",null,"void")])],-1),M=e("p",null,[t("WebSocket \u8FDE\u63A5\u6210\u529F\u5EFA\u7ACB\u540E\u7684\u56DE\u8C03\u51FD\u6570\u3002\u4F60\u9700\u8981\u5B9E\u73B0\u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u5E76\u5728\u5176\u4E2D\u624B\u52A8\u8C03\u7528 "),e("code",null,"bot.resolve()"),t(" \u56DE\u8C03\u51FD\u6570\u8868\u793A\u5DF2\u7ECF\u8FDE\u63A5\u6210\u529F\u3002")],-1);function Q(U,X){const a=r("Badge"),d=r("RouterLink"),l=r("panel-view");return c(),p(h,null,[u,b,e("p",null,[f,o(a,{text:"abstract",vertical:"baseline"}),g]),F,e("p",null,[y,o(d,{to:"/guide/adapter/writing.html"},{default:n(()=>[x]),_:1}),m]),k,e("h3",v,[w,A,o(a,{text:"abstract"})]),B,C,e("h3",S,[W,E,o(a,{text:"abstract"})]),D,P,e("h3",N,[V,L,o(a,{text:"abstract"})]),j,o(l,{class:"code",title:"",style:{}},{default:n(()=>[O]),_:1}),e("h3",R,[T,z,o(a,{text:"abstract"})]),I,q,e("h3",G,[H,J,o(a,{text:"abstract"})]),K,M],64)}var Z=i(_,[["render",Q],["__file","adapter.html.vue"]]);export{Z as default};
