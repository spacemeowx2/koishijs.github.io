import{_ as n,o as i,c as _,a as t,e as s,w as l,F as d,b as e,d as a,r as c}from"./app.0c925ea4.js";const h={},r=t("h1",{id:"\u6D88\u606F\u5904\u7406",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u6D88\u606F\u5904\u7406","aria-hidden":"true"},"#"),e(" \u6D88\u606F\u5904\u7406")],-1),u=t("p",null,[e("\u6211\u4EEC\u5DF2\u7ECF\u719F\u6089\u4E86 Koishi \u7684\u4E00\u4E9B\u57FA\u672C\u6982\u5FF5\uFF0C\u6BD4\u5982\u4E8B\u4EF6\u3001\u4E2D\u95F4\u4EF6\u548C\u6307\u4EE4\u7B49\uFF0C\u90A3\u4E48\u4ED6\u4EEC\u7684\u5173\u7CFB\u662F\u4EC0\u4E48\u5462\uFF1F\u4E0A\u9762\u7684\u751F\u547D\u5468\u671F\u56FE\u4E5F\u540C\u6837\u544A\u8BC9\u4E86\u6211\u4EEC\u7B54\u6848\uFF1A"),t("strong",null,"\u4E2D\u95F4\u4EF6\u7531\u5185\u7F6E\u76D1\u542C\u5668\u7BA1\u7406\uFF0C\u800C\u6307\u4EE4\u7531\u5185\u7F6E\u4E2D\u95F4\u4EF6\u7BA1\u7406"),e("\u3002\u6CA1\u9519\uFF0C\u5F53 message \u4E8B\u4EF6\u88AB\u53D1\u9001\u5230\u5404\u4E2A\u4E0A\u4E0B\u6587\u7684\u76D1\u542C\u5668\u4E0A\u65F6\uFF0C\u7ED1\u5B9A\u5728 App \u4E0A\u7684\u5185\u7F6E\u76D1\u542C\u5668\u5C06\u4F1A\u5C06\u8FD9\u4E2A\u4E8B\u4EF6\u9010\u4E00\u4EA4\u7531\u4E2D\u95F4\u4EF6\u8FDB\u884C\u5904\u7406\u3002\u5168\u90E8\u5904\u7406\u5B8C\u6210\u540E\u4F1A\u89E6\u53D1\u4E00\u4E2A after-middleware \u4E8B\u4EF6\u3002")],-1),B=t("p",null,"\u56E0\u4E3A\u6211\u4EEC\u901A\u5E38\u4E0D\u9700\u8981\u76F4\u63A5\u76D1\u542C message \u4E8B\u4EF6 (\u4F7F\u7528\u4E2D\u95F4\u4EF6\u5F80\u5F80\u662F\u66F4\u597D\u7684\u5B9E\u73B0)\uFF0Cafter-middleware \u4E8B\u4EF6\u7684\u89E6\u53D1\u901A\u5E38\u610F\u5473\u7740\u4F60\u5BF9\u4E00\u6761\u6D88\u606F\u7684\u5904\u7406\u5DF2\u7ECF\u5B8C\u6210\u3002\u6211\u4EEC\u7684\u6D4B\u8BD5\u63D2\u4EF6 @koishijs/plugin-mock \u5C31\u662F\u57FA\u4E8E\u8FD9\u79CD\u903B\u8F91\u5B9E\u73B0\u4E86\u5B83\u7684\u4F1A\u8BDD API\u3002",-1),E=t("h3",{id:"\u5185\u7F6E\u6D88\u606F\u76D1\u542C\u5668",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u5185\u7F6E\u6D88\u606F\u76D1\u542C\u5668","aria-hidden":"true"},"#"),e(" \u5185\u7F6E\u6D88\u606F\u76D1\u542C\u5668")],-1),m=a('<li>message \u4E8B\u4EF6\u89E6\u53D1\uFF0C\u8FDB\u5165\u4E2D\u95F4\u4EF6\u5904\u7406\u6D41\u7A0B</li><li>\u6839\u636E\u4E0A\u4E0B\u6587\u4ECE\u4E2D\u95F4\u4EF6\u6C60\u4E2D\u7B5B\u9009\u51FA\u8981\u6267\u884C\u7684\u4E2D\u95F4\u4EF6\u5E8F\u5217</li><li>\u9010\u4E00\u6267\u884C\u4E2D\u95F4\u4EF6\uFF1A <ul><li>\u5185\u7F6E\u4E2D\u95F4\u4EF6\u662F\u7406\u8BBA\u4E0A\u7B2C\u4E00\u4E2A\u6CE8\u518C\u7684\u4E2D\u95F4\u4EF6 (\u4E0B\u63A5 <a href="#%E5%86%85%E7%BD%AE%E4%B8%AD%E9%97%B4%E4%BB%B6">\u5185\u7F6E\u4E2D\u95F4\u4EF6</a>)</li><li>\u901A\u8FC7 <code>ctx.middleware(cb, true)</code> \u6CE8\u518C\u7684\u4E2D\u95F4\u4EF6\u4F1A\u63D2\u5728\u961F\u5217\u7684\u66F4\u524D\u9762</li><li>\u4E34\u65F6\u4E2D\u95F4\u4EF6\u4F1A\u76F4\u63A5\u63D2\u5728\u5F53\u524D\u5E8F\u5217\u7684\u5C3E\u7AEF\uFF0C\u5E76\u4E0D\u4F1A\u5F71\u54CD\u4E2D\u95F4\u4EF6\u6C60\u672C\u8EAB</li><li>\u5982\u679C\u6267\u884C\u4E2D\u9047\u5230\u9519\u8BEF\u6216\u672A\u8C03\u7528 <code>next</code> \u51FD\u6570\uFF0C\u4F1A\u505C\u6B62\u540E\u7EED\u4E2D\u95F4\u4EF6\u7684\u6267\u884C</li></ul></li>',3),f=e("\u89E6\u53D1 "),A=e("middleware"),p=e(" \u4E8B\u4EF6"),C=e("\u66F4\u65B0\u5F53\u524D\u7528\u6237\u548C\u7FA4\u7684\u7F13\u51B2\u6570\u636E (\u53C2\u89C1 "),g=e("\u6309\u9700\u52A0\u8F7D\u4E0E\u81EA\u52A8\u66F4\u65B0"),b=e(")"),x=t("h3",{id:"\u5185\u7F6E\u4E2D\u95F4\u4EF6",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u5185\u7F6E\u4E2D\u95F4\u4EF6","aria-hidden":"true"},"#"),e(" \u5185\u7F6E\u4E2D\u95F4\u4EF6")],-1),F=t("li",null,"\u4ECE\u524D\u7F00\u4E2D\u5339\u914D at \u673A\u5668\u4EBA\uFF0Cnickname \u6216 prefix",-1),v=e("\u9884\u5904\u7406\u6D88\u606F\u5185\u5BB9\uFF0C\u751F\u6210 "),k=t("code",null,"session.parsed",-1),w=e("\u89E6\u53D1 "),D=e("before-parse"),N=e(" \u4E8B\u4EF6\uFF0C\u5C1D\u8BD5\u89E3\u6790\u6D88\u606F\u5185\u5BB9 ("),V=e("\u5FEB\u6377\u65B9\u5F0F"),L=e(" \u7684\u89E3\u6790\u4E5F\u5728\u6B64\u5904\u5B8C\u6210)"),R=e("\u5982\u679C\u6570\u636E\u5E93\u5B58\u5728\uFF1A "),j=e("\u89E6\u53D1 "),I=e("before-attach-channel"),K=e(" \u4E8B\u4EF6"),P=e("\u83B7\u53D6\u9891\u9053\u6570\u636E\u5E76\u5B58\u50A8\u4E8E "),S=t("code",null,"session.channel",-1),T=t("li",null,"\u6839\u636E flags, assignee \u7B49\u5B57\u6BB5\u5224\u65AD\u662F\u5426\u5E94\u8BE5\u5904\u7406\u8BE5\u4FE1\u606F\uFF0C\u5982\u679C\u4E0D\u5E94\u8BE5\u5219\u76F4\u63A5\u8FD4\u56DE",-1),q=e("\u89E6\u53D1 "),y=e("attach-channel"),z=e(" \u4E8B\u4EF6 (\u7528\u6237\u53EF\u4EE5\u5728\u5176\u4E2D\u540C\u6B65\u5730\u66F4\u65B0\u7FA4\u6570\u636E\uFF0C\u6216\u4E2D\u6B62\u6267\u884C\u540E\u7EED\u64CD\u4F5C)"),G=e("\u89E6\u53D1 "),H=e("before-attach-user"),J=e(" \u4E8B\u4EF6"),M=e("\u83B7\u53D6\u7528\u6237\u6570\u636E\u5E76\u5B58\u50A8\u4E8E "),O=t("code",null,"session.user",-1),Q=t("li",null,"\u6839\u636E flags \u7B49\u5B57\u6BB5\u5224\u65AD\u662F\u5426\u5E94\u8BE5\u5904\u7406\u8BE5\u4FE1\u606F\uFF0C\u5982\u679C\u4E0D\u5E94\u8BE5\u5219\u76F4\u63A5\u8FD4\u56DE",-1),U=e("\u89E6\u53D1 "),W=e("attach-user"),X=e(" \u4E8B\u4EF6 (\u7528\u6237\u53EF\u4EE5\u5728\u5176\u4E2D\u540C\u6B65\u5730\u66F4\u65B0\u7FA4\u548C\u7528\u6237\u6570\u636E\uFF0C\u6216\u4E2D\u6B62\u6267\u884C\u540E\u7EED\u64CD\u4F5C)"),Y=t("li",null,[e("\u5982\u679C\u89E3\u6790\u51FA\u6307\u4EE4\uFF1A\u6267\u884C\u8BE5\u6307\u4EE4 (\u4E0B\u63A5 "),t("a",{href:"#%E6%8C%87%E4%BB%A4%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B"},"\u6307\u4EE4\u6267\u884C\u6D41\u7A0B"),e(")")],-1),Z=e("\u5C1D\u8BD5\u89E3\u6790\u51FA\u5019\u9009\u6307\u4EE4\uFF0C\u5982\u679C\u6210\u529F\u5219\u663E\u793A\u5019\u9009\u9879 (\u53C2\u89C1 "),$=e("\u6A21\u7CCA\u5339\u914D"),ee=e(")"),te=e("\u5728\u4EE5\u4E0A\u8FC7\u7A0B\u4E2D\uFF0C\u65E0\u8BBA\u662F\u89E3\u6790\u6307\u4EE4\u8FD8\u662F\u51FA\u53D1\u5185\u7F6E\u7684 before-attach-* \u94A9\u5B50\u90FD\u53EF\u80FD\u7528\u5230 "),oe=e("parse"),se=e(" \u4E8B\u4EF6\u3002"),le=t("h3",{id:"\u6307\u4EE4\u6267\u884C\u6D41\u7A0B",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u6307\u4EE4\u6267\u884C\u6D41\u7A0B","aria-hidden":"true"},"#"),e(" \u6307\u4EE4\u6267\u884C\u6D41\u7A0B")],-1),ne=t("li",null,"\u5982\u679C\u89E3\u6790\u8FC7\u7A0B\u4E2D\u5B58\u5728\u9519\u8BEF (\u5982\u975E\u6CD5\u53C2\u6570\u7B49)\uFF0C\u76F4\u63A5\u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F",-1),ie=t("li",null,[e("\u9010\u4E00\u8C03\u7528 check \u56DE\u8C03\u51FD\u6570\uFF0C\u76F4\u5230\u8FD4\u56DE\u503C\u4E0D\u4E3A "),t("code",null,"undefined")],-1),_e=e("\u89E6\u53D1 "),de=e("before-command"),ae=e(" \u4E8B\u4EF6\uFF1A "),ce=e("\u5982\u679C\u662F -h, --help \u5219\u76F4\u63A5\u663E\u793A\u5E2E\u52A9\u4FE1\u606F (\u53C2\u89C1 "),he=e("\u67E5\u770B\u5E2E\u52A9"),re=e(")"),ue=e("\u6839\u636E\u914D\u7F6E\u68C0\u67E5\u7528\u6237\u6743\u9650\u548C\u8C03\u7528\u8BB0\u5F55 (\u53C2\u89C1 "),Be=e("\u6307\u4EE4\u8C03\u7528\u7BA1\u7406"),Ee=e(")"),me=t("li",null,[e("\u9010\u4E00\u8C03\u7528 action \u56DE\u8C03\u51FD\u6570\uFF0C\u76F4\u5230\u8FD4\u56DE\u503C\u4E0D\u4E3A "),t("code",null,"undefined")],-1),fe=e("\u89E6\u53D1 "),Ae=e("command"),pe=e(" \u4E8B\u4EF6");function Ce(ge,be){const o=c("RouterLink");return i(),_(d,null,[r,u,B,E,t("ol",null,[m,t("li",null,[f,s(o,{to:"/api/core/events.html#%E4%BA%8B%E4%BB%B6%EF%BC%9Amiddleware"},{default:l(()=>[A]),_:1}),p]),t("li",null,[C,s(o,{to:"/guide/in-depth/manage.html#%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD%E4%B8%8E%E8%87%AA%E5%8A%A8%E6%9B%B4%E6%96%B0"},{default:l(()=>[g]),_:1}),b])]),x,t("ol",null,[F,t("li",null,[v,s(o,{to:"/api/core/session.html#session-parsed"},{default:l(()=>[k]),_:1})]),t("li",null,[w,s(o,{to:"/api/core/events.html#%E4%BA%8B%E4%BB%B6%EF%BC%9Abefore-parse"},{default:l(()=>[D]),_:1}),N,s(o,{to:"/guide/in-depth/execute.html#%E5%BF%AB%E6%8D%B7%E6%96%B9%E5%BC%8F"},{default:l(()=>[V]),_:1}),L]),t("li",null,[R,t("ul",null,[t("li",null,[j,s(o,{to:"/api/core/events.html#%E4%BA%8B%E4%BB%B6%EF%BC%9Abefore-attach-channel"},{default:l(()=>[I]),_:1}),K]),t("li",null,[P,s(o,{to:"/api/core/session.html#session-channel"},{default:l(()=>[S]),_:1})]),T,t("li",null,[q,s(o,{to:"/api/core/events.html#%E4%BA%8B%E4%BB%B6%EF%BC%9Aattach-channel"},{default:l(()=>[y]),_:1}),z]),t("li",null,[G,s(o,{to:"/api/core/events.html#%E4%BA%8B%E4%BB%B6%EF%BC%9Abefore-attach-user"},{default:l(()=>[H]),_:1}),J]),t("li",null,[M,s(o,{to:"/api/core/session.html#session-user"},{default:l(()=>[O]),_:1})]),Q,t("li",null,[U,s(o,{to:"/api/core/events.html#%E4%BA%8B%E4%BB%B6%EF%BC%9Aattach-user"},{default:l(()=>[W]),_:1}),X])])]),Y,t("li",null,[Z,s(o,{to:"/guide/in-depth/execute.html#%E6%A8%A1%E7%B3%8A%E5%8C%B9%E9%85%8D"},{default:l(()=>[$]),_:1}),ee])]),t("p",null,[te,s(o,{to:"/api/core/events.html#%E4%BA%8B%E4%BB%B6%EF%BC%9Aparse"},{default:l(()=>[oe]),_:1}),se]),le,t("ol",null,[ne,ie,t("li",null,[_e,s(o,{to:"/api/core/events.html#%E4%BA%8B%E4%BB%B6%EF%BC%9Abefore-command"},{default:l(()=>[de]),_:1}),ae,t("ul",null,[t("li",null,[ce,s(o,{to:"/guide/in-depth/help.html#%E6%9F%A5%E7%9C%8B%E5%B8%AE%E5%8A%A9"},{default:l(()=>[he]),_:1}),re]),t("li",null,[ue,s(o,{to:"/guide/in-depth/message.html#%E6%8C%87%E4%BB%A4%E8%B0%83%E7%94%A8%E7%AE%A1%E7%90%86"},{default:l(()=>[Be]),_:1}),Ee])])]),me,t("li",null,[fe,s(o,{to:"/api/core/events.html#%E4%BA%8B%E4%BB%B6%EF%BC%9Acommand"},{default:l(()=>[Ae]),_:1}),pe])])],64)}var Fe=n(h,[["render",Ce],["__file","message.html.vue"]]);export{Fe as default};
