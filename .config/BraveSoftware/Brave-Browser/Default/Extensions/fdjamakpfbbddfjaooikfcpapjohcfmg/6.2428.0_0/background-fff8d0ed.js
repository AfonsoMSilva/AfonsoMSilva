"use strict";(globalThis.webpackChunk_dashlane_amphora=globalThis.webpackChunk_dashlane_amphora||[]).push([[587],{71773:(e,n,t)=>{var o=t(32012),r=t(25417),a=t(4350),i=t(25601),s=t(63272),c=t(28509),u=t(84318),l=t(92204),m=t(59894);function d(e){if(!(e.buildType&&"string"==typeof e.buildType&&Object.values(m.P).map((e=>e.toString())).includes(e.buildType)))throw new Error("Build type from runtime-config.json is invalid");return m.P[e.buildType]}const p=async()=>{const{buildType:e}=await(async()=>{const e=(0,l.A)("runtime-config.json");if(!e)throw new Error("Could not build path to runtime-config.json");try{const n=await fetch(e);return{buildType:d(await n.json())}}catch{throw new Error("Unable to read buildType from runtime-config.json")}})();return e};const f={appAccess:"C4F8H4SEAMXNBQVSASVBWDDZNCVTESMY",appSecret:"Na9Dz3WcmjMZ5pdYU1AmC5TdYkeWAOzvOK6PkbU4QjfjPQTSaXY8pjPwrvHfVH14"};const g={styxAccess:"DASHQ7DNHYSPYSG6JSF6",styxSecret:"LNS273zaVvwNM+VKOjotBYygJyPaM0CXshpdf0j7"},y={...f,...g,...null!=void 0?undefined:{}},h={LOG_LEVEL:4,CODE_NAME:"amphora",MANIFEST_VERSION:(0,u.W)().manifest_version,...(()=>{const e={[i.DashlaneAPISchemesNames.DASHLANE_API_HOST_WITH_SCHEME]:"https://api.dashlane.com",[i.DashlaneAPISchemesNames.DASHLANE_WS_HOST_WITH_SCHEME]:""};return Object.fromEntries(Object.entries(e).filter((([,e])=>e)))})()},b=" | ",w=" - ";function C(e,n){return"object"==typeof e?JSON.stringify(e,null,n):String(e)}let v=function(e){return e[e.VERBOSE=0]="VERBOSE",e[e.DEBUG=1]="DEBUG",e[e.INFO=2]="INFO",e[e.WARNING=3]="WARNING",e[e.ERROR=4]="ERROR",e[e.SILENT=10]="SILENT",e}({});const{DEBUG:_,ERROR:E,INFO:S,VERBOSE:k,WARNING:A}=v;function L(e,n){const t=Object.keys(e);return C(t.filter((n=>!(e[n]instanceof Error))).reduce(((n,t)=>(n[t]=e[t],n)),{}),n?2:0)}function N(e){return n=>{const{details:t={},message:o="",tags:r=[],indentDetails:a=!1}=n,i=function(e){const n=e.join("/");return n?`[${n}]`:""}(r),s=L(t,a);let c=function(e){return e.filter((e=>!!e)).join(w)}([i,o]);if("{}"!==s){c+=`${a?"\n":w}${s}`}const u=function(e){return e.error instanceof Error?e.error:null}(t);e(...u?[c,"\n",u]:[c])}}function R(e){if(4>_)return;N(console.debug)(e)}function O(e){if(4>E)return;N(console.error)(e)}function I(e){if(4>k)return;N(console.log)(e)}async function T({apiConnector:e,debugConnector:n,infrastructureConnectors:t,legacyExtensionConnector:o,legacyWebappConnector:r,legacyMaverickConnector:l,publicPath:m,storageLayer:d,sessionStorage:f,app:g}){I({message:"Carbon initialization started",tags:["initCarbon"]});const b=await async function(){var e;const n=await p();return{platformName:"server_standalone",appVersion:(0,u.W)().version,browser:s.getBrowserName(),browserVersion:s.getBrowserVersion(),country:s.getBrowserCountry(),os:null!=(e=c.getOSName())?e:"",osCountry:s.getBrowserCountry(),osVersion:c.getOSVersion(),lang:s.getBrowserLanguage(),manifestVersion:(0,u.W)().manifest_version,buildType:n}}(),w=await(0,i.init)({connectors:{api:e,debug:n,extension:o,leeloo:r,maverick:l},infrastructure:{connectors:t},platformInfo:b,publicPath:m,storageLayer:d,sessionStorage:f,keys:y,config:h,settings:{sync:{syncWithLocalClients:!0},userABTestNames:["ace_password_health_labels",a.v]},createClients:g.createClient});return I({message:"Carbon initialization finished",tags:["initCarbon"]}),w}var x=t(41808),$=t(45441),P=t(9244),j=t(52477),B=t(15026),U=t(56847),D=t(65124);var W=t(28849),F=t(4792),M=t(79952),z=t(37572),V=t(30504),H=t(49594),G=t(62029),K=t(98052),Y=t(92486),X=t(35096),Q=t(98558);function q(e){return(0,V.createEventBus)({events:H.X,channels:e})}function J(e){return(0,V.createEventBus)({events:K.z,channels:e})}function Z(e,n){return(0,V.createEventBus)({events:Y.N,channels:e,ignoredEvents:n})}function ee(e){return(0,V.createEventBus)({events:X.I,channels:e})}function ne(e){return(0,V.createEventBus)({events:Q.D,channels:e})}const te=3e4;const oe=5e3,{PopupCarbon:re,PopupCarbonLoader:ae,OptionsCarbon:ie,WebappCarbon:se}=W.PortNames;function ce(){const e=new F.s(ae,oe);e.listen();const n=new F.s(re,oe);n.listen();const t=new F.s(ie,oe);t.listen();const o=new M.Y(se,oe);o.listen();const r=new z.y,a=new z.y(te),s=new z.y,c=new z.y,u=ee([r]),{carbonToExtensionLegacyConnector:l,extensionToCarbonLegacyConnector:m}=function(e){const n=new z.y,t=new z.y;return(0,z.P)(n,t),{carbonToExtensionLegacyConnector:J([...e,n]),extensionToCarbonLegacyConnector:J([t])}}([e,n]),d=new z.y(te),p=new z.y(te);(0,z.P)(d,p);const f=Z([o,d]),g=Z([p],i.LEGACY_LEELOO_SLOTS_TO_IGNORE),y=q([e,n,t,o,r,a,s,c]),h=(0,V.createEventBus)({events:G.o}),b={deviceLimit:ne([o])};const{autofillEngineCarbonConnector:w,autofillEngineLegacyCarbonConnector:C}=function(e){const n=new z.y;return(0,z.P)(e,n),{autofillEngineCarbonConnector:q([n]),autofillEngineLegacyCarbonConnector:ee([n])}}(r),v=function(e){const n=new z.y;return(0,z.P)(e,n),q([n])}(c),_=function(e){const n=new z.y(te);return(0,z.P)(e,n),q([n])}(a);return{applicationModulesToCarbonApiConnector:_,autofillEngineCarbonConnector:w,autofillEngineLegacyCarbonConnector:C,carbonApiConnector:y,carbonDebugConnector:h,carbonInfrastructureConnectors:b,carbonLegacyMaverickConnector:u,carbonLegacyWebappConnector:f,carbonToExtensionLegacyConnector:l,extensionToCarbonApiConnector:function(e){const n=new z.y;return(0,z.P)(e,n),q([n])}(s),extensionToCarbonLegacyConnector:m,tiresiasBackgroundToCarbonConnector:v,carbonLegacyWebappConnectorForGraphene:g}}var ue=t(23386);function le(e){ue.Y.addListener(e)}const me="carbonDebugConnector";function de({date:e,message:n,optionalParams:t}){const o="string"==typeof n?n:"Invalid message type",r=t.map(C).join(b);return(r?[e,o,r]:[e,o]).join(w)}const pe={error:O,info:function(e){if(4>S)return;N(console.info)(e)},log:I,warning:function(e){if(4>A)return;N(console.warn)(e)}};function fe({connectors:{carbonDebugConnector:e}}){var n;n=e,Object.keys(pe).forEach((e=>{n[e].on((n=>{if(!function(e){return["error","info","log","warning"].some((n=>n===e))}(e))throw new Error("Invalid debug connector event");(0,pe[e])({message:de(n),tags:[me]})}))}))}t(42403),t(98849),t(78895),t(45595),t(25676);const ge="assets/argon2/argon2.min.js",ye="assets/argon2/argon2.wasm";function he(){self.loadArgon2WasmBinary=async()=>{const e=await fetch(ye),n=await e.arrayBuffer();return new Uint8Array(n)}}function be(){self.loadArgon2WasmModule=()=>(importScripts(ge),Promise.resolve()),self.loadArgon2WasmBinary=async()=>{const e=await fetch(ye),n=await e.arrayBuffer();return new Uint8Array(n)},importScripts(ge)}var we=t(24715),Ce=t(15348);function ve({connectors:{extensionToCarbonApiConnector:e,extensionToCarbonLegacyConnector:n}}){e.liveWebOnboardingMode.on((e=>{!async function(e,n){const t=n.flowLoginCredentialOnWebSite;t&&(await(0,Ce.$)(t.domain),await(0,we.U)({url:t.url}),await e.updateWebOnboardingMode({flowLoginCredentialOnWebSite:null}))}(n,e)}))}var _e=t(2927);const Ee="https://www.dashlane.com",Se="/signup";async function ke({connectors:{extensionToCarbonApiConnector:e}}){const n=new URL(`${Ee}/feedback`),t=await e.getPlatformName();n.searchParams.append("platform",t);const o=await e.getAnonymousComputerId();n.searchParams.append("aci",o),(0,_e.S)(n.toString())}var Ae=t(81017),Le=t(15043);const Ne="silent_deploy";async function Re(){try{const e=await(0,Le.U)();if("object"==typeof e&&null!==e&&Ne in e&&!0===e[Ne])return}catch{}(0,Ae.b)({route:Se})}var Oe=t(329),Ie=t(21877);let Te=function(e){return e[e.UNKNOWN=0]="UNKNOWN",e[e.WARNING=1]="WARNING",e[e.ERROR=2]="ERROR",e}({});const{ERROR:xe}=Te;function $e({column:e,line:n,name:t}){return e||n||t?`${t}:${n}:${e}`:""}function Pe(e){try{const n=function(e){return"object"==typeof e&&Boolean(e)}(e);if(!n)return{code:xe,fileName:"make.ts",funcName:"makeException",legacy:!1,message:"Potential error is not object"};const{columnNumber:t,fileName:o,funcName:r,level:a,lineNumber:i,message:s,stack:c}=e,u=$e({column:t,line:i,name:o});return{code:null!=a?a:xe,fileName:u,funcName:null!=r?r:"",legacy:!1,line:i,message:null!=s?s:"",precisions:c}}catch(e){return{code:xe,fileName:"make.ts",funcName:"makeException",legacy:!1,message:"Caught exception inception"}}}let je=null;async function Be(){const e=await(0,Oe.g)({domain:"dashlane.com",name:"userFunnelCookie"});if(e[0]){const t=decodeURIComponent(e[0].value);try{return JSON.parse(t)}catch(e){const{WARNING:t}=Te,o={message:"Error parsing userFunnelCookie"},r=Pe({...function(e){return"object"==typeof e&&null!==e&&"message"in e}(e)?e:o,level:t});n=r,je?je(n):console.error("Send exception log function not set")}}var n;return{}}function Ue(e){return""!==e?e:void 0}async function De({connectors:{extensionToCarbonApiConnector:e}}){const n=await Be(),t=0===Object.keys(n).length?{has_cookie:!1}:{has_cookie:!0,heap_identity:n.trackingId,gclid:n.gclid,everflow_transaction_id:n.transaction_id,utm_pathname:n.pathname,utm_referrer:Ue(n.referrer),utm_source:Ue(n.utm_source),utm_campaign:Ue(n.utm_campaign),utm_medium:Ue(n.utm_medium),utm_content:Ue(n.utm_content),utm_term:Ue(n.utm_term),utm_visit_timestamp:n.utm_visitTimestamp,utm_last_click_pathname:n.last_click_pathname,utm_last_click_referrer:Ue(n.last_click_referrer),utm_last_click_source:Ue(n.last_click_source),utm_last_click_campaign:Ue(n.last_click_campaign),utm_last_click_medium:Ue(n.last_click_medium),utm_last_click_content:Ue(n.last_click_content),utm_last_click_term:Ue(n.last_click_term),utm_last_click_visit_timestamp:n.last_click_visitTimestamp};e.logEvent({event:new Ie.UserFirstLaunchEvent({web:t})})}var We=t(9980);function Fe(){(0,We.D)()}var Me=t(56386);const ze="amphora.wasSessionOpen";let Ve=!1;function He({connectors:{extensionToCarbonApiConnector:e}}){e.liveDidOpen.on((async e=>{const n=await async function(){return(0,o.G)()?!!await(0,B.U)(ze):Ve}();await async function(e){if(Ve=e,(0,o.G)())return e?await(0,U.t)({[ze]:"true"}):await(0,j.O)([ze])}(e),n&&!e&&(0,Me.H)()}))}var Ge=t(26662),Ke=t(41842),Ye=t(87065),Xe=t(6136),Qe=t(43978),qe=t(87279);async function Je(e){try{await(0,Ge.F)({isUserAuthenticated:e})}catch(e){O({message:"Failed to update toolbar action icon",details:{error:e}})}}function Ze({appClient:e}){e.session.queries.selectedOpenedSession().pipe((0,Ke.h)(qe.d6),(0,Ye.U)((e=>!!e.data)),(0,Xe.x)(),(0,Qe.w)(Je)).subscribe()}var en=t(86554),nn=t(96873);const tn="#FFB81C";async function on(){const e=function(e){return"BETA"===e?{text:"BETA",color:tn}:null}(await p());e&&((0,en.d)({text:e.text}),(0,nn._)({color:e.color}))}var rn=t(64987),an=t(6212),sn=t(84867);t(61238);const cn=1;const un="^https?://w*\\.?app\\.dashlane\\.com(\\??[^/#]*)[^#]*#?/?(.*)$",ln="^https?://w*\\.?console\\.dashlane\\.com(\\??[^/#]*)[^#]*#?/?(.*)$",mn="^https://sso.nitro(staging)?.dashlane.com/saml/callback$";const dn="https?://w*\\.?[a-z]+\\.dashlane\\.com.+noredirect.*$",pn="https?:w*\\.?[a-z]+\\.dashlane\\.com/cdn-cgi/access/authorized.*$";function fn(e,n){const t=(0,l.A)(""),o=new URL(t).hostname;const r=function(e){return new URL(e).protocol}(t),a=function(e,n,t){return[{priority:t,action:{type:"redirect",redirect:{regexSubstitution:`${n}//${e}/index.html\\1#/\\2`}},condition:{regexFilter:un,resourceTypes:["main_frame"]}},{priority:t,action:{type:"redirect",redirect:{regexSubstitution:`${n}//${e}/index.html\\1#/console/\\2`}},condition:{regexFilter:ln,resourceTypes:["main_frame"]}},{priority:t+1,action:{type:"redirect",redirect:{regexSubstitution:`${n}//${e}/loading.html`}},condition:{regexFilter:mn,resourceTypes:["main_frame","sub_frame"]}}]}(o,r,n),i=[{priority:s=n+1,action:{type:"allowAllRequests"},condition:{regexFilter:pn,resourceTypes:["main_frame"]}},{priority:s,action:{type:"allowAllRequests"},condition:{regexFilter:dn,resourceTypes:["main_frame"]}}];var s;const c=function(e,n,t,o){return e.map((e=>{const r=e.replace(/[.]/g,"\\$&");return{priority:o,action:{type:"redirect",redirect:{regexSubstitution:`${t}//${n}/index.html?token=${a=e,btoa(encodeURIComponent(a))}#/anti-phishing`}},condition:{regexFilter:`^https?://.*${r}.*$`,resourceTypes:["main_frame"]}};var a}))}(e,o,r,n+2);return[...a,...i,...c].map(((e,n)=>({id:n+cn,...e})))}const gn=new rn.WU;async function yn(e){await gn.runExclusive((async()=>{const n=await async function(){return(await(0,an.z)()).map((e=>e.id))}(),t=fn(e,1);(0,sn.O)({removeRuleIds:n,addRules:t})}))}function hn({connectors:{extensionToCarbonApiConnector:e}}){yn([]),e.livePhishingURLList.on((e=>{yn(Array.from(e))}))}var bn=t(31460),wn=t(48291),Cn=t(65881);function vn(e){const{hostname:n,hash:t,search:o}=new URL(e),r=n.includes("console.dashlane.com")?`index.html${o}#/console${t.replace("#","/").replace("//","/")}`:`index.html${o}${t.replace("#","#/").replace("//","/")}`;return(0,l.A)(r)}const _n=new RegExp("(console|app).dashlane.com/cdn-cgi/access/authorized"),En=["https://app.dashlane.com/*","https://console.dashlane.com/*"],Sn=["https://sso.nitro.dashlane.com/saml/callback","https://sso.nitrostaging.dashlane.com/saml/callback"],kn="main_frame";function An(e){const{url:n,tabId:t}=e,o=n.includes("/sso");return function(e){return e.includes("noredirect")||Boolean(e.match(_n))}(n)||(0,bn.V)(t,{active:!o,url:vn(n)}),{}}function Ln(e){const{tabId:n}=e;return(0,bn.V)(n,{active:!0,url:(0,l.A)("loading.html")}),{cancel:!0}}const Nn=()=>{En.forEach((e=>{wn.a.addListener(An,{urls:[e],types:[kn]},[Cn.X.Blocking])})),wn.a.addListener(Ln,{urls:Sn,types:[kn,"sub_frame"]},[Cn.X.Blocking])};var Rn=t(64718);function On(e,n){return`${e}?token=${t=new Rn.Y(n).getRootDomain(),btoa(encodeURIComponent(t))}#/anti-phishing`;var t}function In(e){const{tabId:n,url:t}=e;if(!n)return{};const o=vn((0,l.A)(""));return(0,bn.V)(e.tabId,{url:On(o,t)}),{}}function Tn({connectors:{extensionToCarbonApiConnector:e}}){e.livePhishingURLList.on((e=>{!function(e){if(!e.size)return;const n=Array.from(e).reduce(((e,n)=>{const t=["https","http"].map((e=>`${e}://*.${n}/*`));return e.push(...t),e}),[]);wn.a.hasListener(In)&&wn.a.removeListener(In),wn.a.addListener(In,{urls:n,types:["main_frame"]})}(e)}))}var xn=t(44566);class $n{constructor(){this.state=new Map}getState(e){const n=this.state.get(e);return n?Promise.resolve(n):Promise.resolve({})}setState(e,n){return 0===Object.keys(n).length?this.state.delete(e):this.state.set(e,n),Promise.resolve()}}class Pn{async getState(e){const n=await(0,B.U)(e);return n[e]?n[e]:{}}async setState(e,n){0===Object.keys(n).length?await(0,j.O)(e):await(0,U.t)({[e]:n})}}function jn({connectors:{autofillEngineCarbonConnector:e,autofillEngineLegacyCarbonConnector:n},appClient:t}){const r=(0,o.G)()?new Pn:new $n,a=(new xn.WebExtensionApiManager).getBrowserApi();(0,xn.startAutofillEngine)(a,{carbon:e,legacyCarbon:n,grapheneClientPromise:t},r,((e,n)=>{R({message:e,details:n,indentDetails:!0,tags:["AutofillEngine"]})})),(0,xn.startDispatcher)(a)}var Bn=t(21715);function Un(e,n){R({message:e,details:n,indentDetails:!0,tags:["Tiresias"]})}function Dn({connectors:{tiresiasBackgroundToCarbonConnector:e},appClient:n}){new Bn.w({messageLogger:Un,carbonConnectorApi:e,grapheneClient:n})}var Wn=t(3204),Fn=t(90904),Mn=t(79816),zn=t(23573),Vn=t(28365),Hn=t(34513),Gn=t(12642),Kn=t(42931),Yn=t(95156),Xn=t(14186),Qn=t(62346),qn=t(89434),Jn=t(49208),Zn=t(31638),et=t(7876),nt=t(23370),tt=t(38085),ot=t(54193),rt=t(25504),at=t(32697),it=t(1665),st=t(1777),ct=t(93850),ut=t(18590),lt=t(34903),mt=t(43673),dt=t(94113),pt=t(64555),ft=t(16988),gt=t(73881),yt=t(83958),ht=t(47190),bt=t(29659),wt=t(37935),Ct=t(114),vt=t(86381),_t=t(63481),Et=t(99813),St=t(12444),kt=t(3460),At=t(66917),Lt=t(10026),Nt=t(8434),Rt=t(79274),Ot=t(40532),It=t(83074),Tt=t(64391),xt=t(13972),$t=t(39560),Pt=t(76254),jt=t(80954),Bt=t(48264),Ut=t(64396),Dt=t(420),Wt=t(26857),Ft=t(39911),Mt=t(43838),zt=t(39387),Vt=t(396),Ht=t(57487),Gt=t(852),Kt=t(84473),Yt=t(62853),Xt=t(56836),Qt=t(29292),qt=t(72481),Jt=t(77836),Zt=t(24981),eo=t(53195),no=t(14148),to=t(76561),oo=t(3786),ro=t(99600),ao=t(87470),io=t(25814),so=t(38487),co=t(59550),uo=t(13460),lo=t(17556),mo=t(75644),po=t(76347),fo=t(32611),go=t(39331),yo=t(53183),ho=t(93613),bo=t(49574),wo=t(58880),Co=t(11472),vo=t(11622),_o=t(442),Eo=t(23597),So=t(36577),ko=t(39577),Ao=t(42674),Lo=t(18045),No=t(26667),Ro=t(77972),Oo=t(54096),Io=t(71737),To=t(54877),xo=t(73179),$o=t(44272),Po=t(58172),jo=t(99805),Bo=t(50437),Uo=t(69840),Do=t(56202),Wo=t(80699),Fo=t(32127),Mo=t(75453),zo=t(56680),Vo=t(19813),Ho=t(78840),Go=t(39312),Ko=t(14620),Yo=t(29406),Xo=t(37298),Qo=t(63364);function qo(e){const n=$e({column:e.colno,line:e.lineno,name:e.filename});return{error:e.error,fileLocation:n,origin:"uncaughtException"}}function Jo(e){return{error:e.reason,origin:"unhandledPromiseRejection"}}function Zo(e){return!(e.reason instanceof TypeError&&"Failed to fetch"===e.reason.message&&e.reason.stack?.includes("assets/argon2/argon2.min.js"))}function er(e){e.preventDefault()}class nr extends Qo.fW{constructor(e){const n=(0,Yo.T)(function(e){let n;return new Xo.j({addListener:t=>{n=n=>(er(n),t(n,e)),e.addEventListener("error",n)},removeListener:()=>{e.removeEventListener("error",n)}},(e=>!0)).events$.pipe((0,Ye.U)((([e])=>e)),(0,Ye.U)(qo))}(e),function(e){let n;return new Xo.j({addListener:t=>{n=n=>(er(n),t(n,e)),e.addEventListener("unhandledrejection",n)},removeListener:()=>{e.removeEventListener("unhandledrejection",n)}},(e=>!0)).events$.pipe((0,Ye.U)((([e])=>e)),(0,Ke.h)(Zo),(0,Ye.U)(Jo))}(e));super(n)}}const tr=new nr(self),or=new kt.y,rr=new At.P("graphene-background-port"),ar={accessKey:"",secretKey:""},ir=((0,So.xp)("prod"),"prod"),sr=void 0,cr=(0,Lt.e)();var ur=t(61222),lr=t(21763);const mr=["/content/injectedts/vendors.js","/content/contentScripts/kwift.CHROME.js"],dr="options.useInjectScriptOnStart";function pr(){!async function(){try{(await(0,x.U)(dr))[dr]&&(await(0,ur.I)({url:["http://*/*","https://*/*"]})).forEach((({id:e})=>{e&&(0,lr.k)({target:{tabId:e,allFrames:!0},files:mr})}))}catch(e){O({message:"Failed to inject script on existing tabs",details:{error:e}})}}()}async function fr(e){const n=new i.CarbonStorage({itemExists:async e=>await(0,D.j)(e),readItem:async e=>{const n=(await(0,x.U)(e))[e];return function(e){return"string"==typeof e||null===e}(n)?n:null},removeItem:async e=>{await(0,$.O)(e)},writeItem:async(e,n)=>{const t={[e]:n};await(0,P.t)(t)}}),t=(0,o.G)()?{removeItem:async e=>await(0,j.O)(e),getItem:async e=>(await(0,B.U)(e))[e],setItem:async(e,n)=>{const t={[e]:n};await(0,U.t)(t).catch((n=>{throw new Error(`carbon storing ${e}: ${n.message}`)}))}}:void 0,{app:r,signalCarbonReady:a}=await async function(){const e=new i.CarbonLegacyInfrastructure,n=(0,Nt.Y)();return{app:await(0,Jn.u)({appDefinition:Wn.R,channels:{},channelsListener:rr,currentNode:"background",exceptionLogging:{sink:(0,Zn.$)(at.u),uncaughtErrorSource:(0,Zn.z)(tr)},implementations:{accountCreation:{module:_t.Z},deleteOrResetAccount:{module:Et.T},accountReferral:{module:St.o},analytics:{module:it.I},taskTracking:{module:et.c},requestContext:{module:nt.q},featureFlips:{module:st.k},"carbon-legacy":{module:i.CarbonLegacyModule,configurations:{infrastructure:(0,Zn.z)(e)}},permissions:{module:Eo.B},passwordHealth:{module:Xt.C},authenticationFlow:{module:to.c,configurations:{authenticationFlowContextInfrastructure:(0,Zn.z)(new lo.e)}},deviceTransfer:{module:oo.I},activityLogs:{module:wo.Z},loggedOutMonitoring:{module:Co.a},identityVerificationFlow:{module:ro.f},autofillSettings:{module:mo.P},autofillData:{module:po.U},autofillTracking:{module:fo.V},autofillSecurity:{module:go.k},autofillNotifications:{module:yo.r},linkedWebsites:{module:ho.J},enclaveSdkApi:{module:ko.E,configurations:{enclaveApiSettings:(0,Zn.z)(new So.N6(ar,"https://sso.nitro.dashlane.com/",ir))}},confidentialSSOApi:{module:Ao.D,configurations:{enclaveLoginContextInfrastructure:(0,Zn.z)(new No.X)}},scim:{module:Lo.i},nudges:{module:_o._},session:{module:Mn._,configurations:{session:(0,Zn.$)(zn.h)}},sync:{module:Fn.R},vaultReport:{module:Qt.E},vaultItemsCrud:{module:Kn.z},vaultSearch:{module:Yn.U},vaultNotifications:{module:Xn.K},vaultOrganization:{module:Qn.H},passwordLimit:{module:qn.a},pinCode:{module:ao.N},otp:{module:qt.f},masterPasswordSecurity:{module:zo.f},emailMonitoring:{module:Jt.S},breaches:{module:Zt.t},sharingCollections:{module:Ro.a},sharingItems:{module:Oo.F},sharingInvites:{module:Io.p},sharingRecipients:{module:To.u},sharingSync:{module:xo.P},antiphishing:{module:eo.v},overrides:{module:bo.x},accountRecoveryKey:{module:no.D},teamMembers:{module:$o.X},teamVat:{module:Po.K},teamPlanDetails:{module:jo.H},teamPlanUpdate:{module:Bo.c},inviteLink:{module:Uo._},teamAdminNotifications:{module:Do.E},notifications:{module:Fo.F},changeMasterPassword:{module:Vn.M},teamPasswordHealth:{module:Wo.V},userConsents:{module:Ho.K},vaultAccess:{module:Hn.r},vpnNotifications:{module:Vo.u},userVerification:{module:io.Z},getStarted:{module:Go.$},deviceRegistration:{module:so._},b2cPlansApi:{module:Ko.X},webServices:{module:ct.n,configurations:{serverApi:(0,Zn.z)(new ut.$y({baseUrl:"https://api.dashlane.com",appKeys:{appAccessKey:f.appAccess,appSecretKey:f.appSecret},...sr?{cloudflareKeys:{cloudflareAccessKey:sr.cloudflareAccess,cloudflareSecretKey:sr.cloudflareSecret}}:{}})),serverApiInfrastructure:(0,Zn.$)(co.Q),massDeploymentInfrastructure:(0,Zn.$)(lt.c)}},platformInfo:{module:mt.i},authentication:{module:uo.R},siem:{module:vo.g},deviceManagement:{module:Mo.B},icons:{module:dt.p},"file-download":{module:tt.l,configurations:{fileDownloadEmitterChannel:(0,Zn.z)((new Rt.m).makeFileDownloadEmitterChannel())}}},otherModules:[...n?[ot.f.configure((0,Zn.$)(Ot.D))]:[],{module:pt.F,configurations:{settings:(0,Zn.z)(new ft.L)}},{module:rt.X,configurations:{infrastructure:(0,Zn.z)(new It.A)}},{module:gt.Q,configurations:{remoteFileUpdateInfrastructure:(0,Zn.$)(yt.U),remoteFileUpdateDownloaderInfrastructure:(0,Zn.$)(ht.P),decipherInfrastructure:(0,Zn.$)(bt.c)}},{module:wt.D,configurations:{infrastructure:(0,Zn.z)(new Ct.i({computeHash:Tt.x,decryptAes256:xt.$,decryptRsaOaep:$t.G,deriveKeyArgon2d:Pt.f,deriveKeyPbkdf2:jt.x,encryptAes256:Bt.P,encryptRsaOaep:Ut.b,generateKeyAes256:Dt.o,generateKeyPairRsaOaep:Wt.Y,getRandomValues:Ft.P,signHmacSha:Mt.n,signRsassaPkcs1:zt.f,unsafeComputeMd5Hash:Vt.H,verifyHmacSha:Ht.o,verifyRsassaPkcs1:Gt.e}))}}],storeInfrastructureFactory:cr,jsonFetcher:new Kt.W,cronSource:or,keyValueStorageInfrastructure:new Yt.e,defaultDeviceStorageEncryptionCodec:(0,Zn.$)(vt.n),defaultUserStorageEncryptionCodec:(0,Zn.$)(Gn.Y)}),signalCarbonReady:({storeService:n},t,o)=>{e.ready({apiEvents:t,state$:n.getState$(),leelooEvents:o,leelooEventsCommands:o})}}}(),{applicationModulesToCarbonApiConnector:s,carbonApiConnector:c,carbonDebugConnector:u,carbonLegacyWebappConnectorForGraphene:l,carbonInfrastructureConnectors:m,carbonToExtensionLegacyConnector:d,carbonLegacyWebappConnector:p,carbonLegacyMaverickConnector:g}=e;return a(await T({apiConnector:c,debugConnector:u,infrastructureConnectors:m,legacyExtensionConnector:d,legacyWebappConnector:p,legacyMaverickConnector:g,publicPath:"./",storageLayer:n,sessionStorage:t,app:r}),s,l),r}!function(){I({message:"Background initialization started",tags:["initBackground","initialization"]});const e=ce(),n=fr(e).then((e=>e.createClient())),t=function(e,n){return(t,o)=>{n.then((n=>{t.forEach((t=>t({appClient:n,connectors:e},o)))}))}}(e,n),o=function(e,n){return(t,o)=>{t.forEach((t=>t({appClient:n,connectors:e},o)))}}(e,n),a=(0,r.G)()?[hn]:[Nn,Tn];var i;o([He,"serviceWorker"in self?be:he,jn]),t([...a,fe,ve,ke,Ze,on,Dn]),i=()=>{t([De,Re])},le((e=>{"install"===e.reason&&i(e)})),le((()=>t([Fe]))),function(e){le((n=>{"update"===n.reason&&e(n)}))}((()=>t([pr]))),I({message:"Background initialization finished",tags:["initBackground","initialization"]})}()}}]);