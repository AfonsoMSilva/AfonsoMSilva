/*! For license information please see companionBubble.js.LICENSE.txt */

!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="789003c0-5201-5925-8256-cfce5856a704")}catch(e){}}();
  display: ${e=>e.isInline?"inline":"block"};
  ${e=>!e.sizeMinMax&&Je(e.size)};
  ${e=>tt(e.fontWeight)};
  ${e=>e.color&&`color: ${Be(e.color)}`};
  ${e=>e.isDimmed&&"opacity: 0.6"};
  ${e=>e.alignment&&`text-align: ${e.alignment}`};
  ${e=>e.hasEllipsis&&!e.ellipsisLines&&"\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  "};
  ${e=>e.hasEllipsis&&e.ellipsisLines&&`\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: ${e.ellipsisLines};\n  `};
  ${e=>!e.hasEllipsis&&e.noWrap&&"white-space: nowrap; overflow: hidden;"};
  ${e=>e.sizeMinMax&&`\n    min-height: 0vw;\n    font-size: clamp(\n      ${gt(e.sizeMinMax[0])},\n      ${mt(ht(e.sizeMinMax[0]),ht(e.sizeMinMax[1]),496,1200)},\n      ${gt(e.sizeMinMax[1])}\n    );\n\n    line-height: clamp(\n      ${ft(e.sizeMinMax[0])}px,\n      ${mt(ft(e.sizeMinMax[0]),ft(e.sizeMinMax[1]),496,1200)},\n      ${ft(e.sizeMinMax[1])}px\n    );\n  `}
`,vt=e=>{var t=e,{children:i,size:n="body-md",color:a,isInline:o,isDimmed:s,fontWeight:u="book",hasEllipsis:c,ellipsisLines:p,noWrap:l,variant:d,htmlTag:y="span",alignment:b,sizeMinMax:h}=t,g=Pe(t,["children","size","color","isInline","isDimmed","fontWeight","hasEllipsis","ellipsisLines","noWrap","variant","htmlTag","alignment","sizeMinMax"]);return s&&Se.warn("Lens: Text prop 'isDimmed' is deprecated, use color=\"bodyDimmed\" instead."),r.createElement(St,Oe({size:d?bt[d].size:n,color:a,isInline:o,isDimmed:s,fontWeight:d?bt[d].fontWeight:u,hasEllipsis:c,ellipsisLines:p,noWrap:l,variant:d,as:y,alignment:b,sizeMinMax:h},g),i)},At=["top","bottom","left","right"],Ct=Oe({0:"0"},lt),Tt=Oe({0:"0",auto:"auto"},lt),Mt=qe.map((e=>({selector:"c",modifier:e,declarations:[{property:"color",value:`var(--lns-color-${e})`}]}))),_t=qe.map((e=>({selector:"bgc",modifier:e,declarations:[{property:"background-color",value:`var(--lns-color-${e})`}]}))),Rt=Object.keys(st).map((e=>({selector:"text",modifier:e,declarations:[{property:"font-size",value:`var(--lns-fontSize-${e})`},{property:"line-height",value:`var(--lns-lineHeight-${e})`}]}))),Ot=Object.keys(ut).map((e=>({selector:"weight",modifier:e,declarations:[{property:"font-weight",value:`var(--lns-fontWeight-${e})`}]}))),wt=Object.entries(bt).map((([e,t])=>({selector:"text",modifier:e,declarations:[{property:"font-size",value:`var(--lns-fontSize-${t.size})`},{property:"line-height",value:`var(--lns-lineHeight-${t.size})`},{property:"font-weight",value:`var(--lns-fontWeight-${t.fontWeight})`}]}))),Pt=["left","right","center"].map((e=>({selector:"text",modifier:e,declarations:[{property:"text-align",value:e}]}))),jt=Object.keys(pt).map((e=>({selector:"shadow",modifier:e,declarations:[{property:"box-shadow",value:`var(--lns-shadow-${e})`}]}))),zt=(e,t,r,i)=>{const n=[];return t.map((t=>{const a=i?`${e.charAt(0)}${t.charAt(0)}`:t;Object.keys(r).map((r=>{n.push({selector:a,property:`${e}${t&&e?`-${t}`:t||""}`,modifier:r,value:"auto"===r||"0"===r?r:`var(--lns-space-${r})`})}))})),n},xt=[...Mt,...jt,...Object.keys(ct).map((e=>({selector:"radius",modifier:e,declarations:[{property:"border-radius",value:`var(--lns-radius-${e})`}]}))),..._t,...Object.values(zt("margin",["",...At],Tt,"shortSides")).map((e=>({selector:e.selector,modifier:e.modifier,declarations:[{property:e.property,value:e.value}]}))),...Object.values(zt("margin",["x","y"],Tt,"shortSides")).map((e=>({selector:e.selector,modifier:e.modifier,declarations:[{property:"margin-x"===e.property?"margin-left":"margin-top",value:e.value},{property:"margin-x"===e.property?"margin-right":"margin-bottom",value:e.value}]}))),...Object.values(zt("padding",["",...At],Ct,"shortSides")).map((e=>({selector:e.selector,modifier:e.modifier,declarations:[{property:e.property,value:e.value}]}))),...Object.values(zt("padding",["x","y"],Ct,"shortSides")).map((e=>({selector:e.selector,modifier:e.modifier,declarations:[{property:"padding-x"===e.property?"padding-left":"padding-top",value:e.value},{property:"padding-x"===e.property?"padding-right":"padding-bottom",value:e.value}]}))),...Rt,...Ot,...wt,...Pt,...["",...At].map((e=>({selector:"border"+e.replace(e.charAt(0),e.charAt(0).toUpperCase()),declarations:[{property:`border${e&&`-${e}`}`,value:"1px solid var(--lns-color-border)"}]}))),...["inline","block","flex","inlineBlock","inlineFlex","none"].map((e=>({selector:e,declarations:[{property:"display",value:at(e)}]}))),{selector:"flexWrap",declarations:[{property:"flex-wrap",value:"wrap"}]},...["column","row"].map((e=>({selector:"flexDirection",modifier:e,declarations:[{property:"flex-direction",value:e}]}))),...["stretch","center","baseline","flexStart","flexEnd","selfStart","selfEnd"].map((e=>({selector:"items",modifier:e,declarations:[{property:"align-items",value:at(e)}]}))),...["flexStart","flexEnd","center","spaceBetween","spaceAround","spaceEvenly"].map((e=>({selector:"justify",modifier:e,declarations:[{property:"justify-content",value:at(e)}]}))),...["0","1"].map((e=>({selector:"grow",modifier:e,declarations:[{property:"flex-grow",value:e}]}))),...["0","1"].map((e=>({selector:"shrink",modifier:e,declarations:[{property:"flex-shrink",value:e}]}))),...["auto","flexStart","flexEnd","center","baseline","stretch"].map((e=>({selector:"self",modifier:e,declarations:[{property:"align-self",value:at(e)}]}))),...["hidden","auto"].map((e=>({selector:"overflow",modifier:e,declarations:[{property:"overflow",value:e}]}))),...["relative","absolute","sticky","fixed"].map((e=>({selector:e,declarations:[{property:"position",value:e}]}))),...Object.values(zt("",At,Tt)).map((e=>({selector:e.selector,modifier:e.modifier,declarations:[{property:e.property,value:e.value}]}))),...["auto","full","0"].map((e=>({selector:"width",modifier:e,declarations:[{property:"width",value:"full"===e?"100%":e}]}))),{selector:"minWidth",modifier:"0",declarations:[{property:"min-width",value:"0"}]},...["auto","full","0"].map((e=>({selector:"height",modifier:e,declarations:[{property:"height",value:"full"===e?"100%":e}]}))),{selector:"ellipsis",declarations:[{property:"overflow",value:"hidden"},{property:"text-overflow",value:"ellipsis"},{property:"white-space",value:"nowrap"}]},{selector:"srOnly",declarations:[{property:"position",value:"absolute"},{property:"width",value:"1px"},{property:"height",value:"1px"},{property:"padding",value:"0"},{property:"margin",value:"-1px"},{property:"overflow",value:"hidden"},{property:"clip",value:"rect(0, 0, 0, 0)"},{property:"white-space",value:"nowrap"},{property:"border-width",value:"0"}]}],It=(e,t)=>{const r=[],i=t?`${t}-`:"";return e.map((e=>{const t=[];e.declarations.map((e=>{t.push(`${e.property}:${e.value}`)}));const n=`.${i}${e.selector}${e.modifier?"\\:":""}${e.modifier?e.modifier:""}{${t.join(";")}}`;r.push(n)})),r.join("")},Et={xs:dt.xsmall,sm:dt.small,md:dt.medium,lg:dt.large},Nt=(e,t)=>{const r={};return Object.entries(t).forEach((([t,i])=>{r["--lns-"+((e?`${e}-`:"")+t)]=i})),r},kt=Nt(void 0,{unit:ot/16+"rem"}),Dt=Nt("fontWeight",ut),Ut=Nt(void 0,(()=>{const e={};return Object.entries(st).forEach((([t,r])=>{const i={},n=`lineHeight-${t}`;i[`fontSize-${t}`]=Fe(r.fontSize),i[n]=r.lineHeight,Object.assign(e,i,{})})),e})()),Lt=Nt("radius",ct),qt=Nt("shadow",pt),Bt=Nt(void 0,(()=>{const e={};return Object.entries(lt).forEach((([t,r])=>{e[`space-${t}`]=Fe(r)})),e})()),Ft=Nt(void 0,{formFieldBorderWidth:"1px",formFieldBorderWidthFocus:"2px",formFieldHeight:Fe(4.5),formFieldRadius:Fe(2.25),formFieldHorizontalPadding:Fe(2),formFieldBorderShadow:"\n    inset 0 0 0 var(--lns-formFieldBorderWidth) var(--lns-color-formFieldBorder)\n  ",formFieldBorderShadowFocus:"\n    inset 0 0 0 var(--lns-formFieldBorderWidthFocus) var(--lns-color-blurple),\n    0 0 0 var(--lns-formFieldBorderWidthFocus) var(--lns-color-focusRing)\n  "}),Ht=Nt("color",(()=>{const e={};return Object.keys(Oe(Oe({},Ne),ke)).forEach((t=>{e[t]=`hsla(${Le[t].h},${Le[t].s}%,${Le[t].l}%,${Le[t].a})`})),e})()),Wt=Nt(void 0,(()=>{const e=(e,t)=>Object.keys(e).reduce(((r,i)=>{const n=e[i];return r[`${t}-color-${i}`]=`hsla(${n.h},${n.s}%,${n.l}%,${n.a})`,r}),{});return Oe(Oe({},e(Ue.light,"themeLight")),e(Ue.dark,"themeDark"))})()),Gt=[kt,Ut,Lt,qt,Bt,Ft],Kt=e=>{let t,r;if("medium"===e)t=Fe(4),r=Fe(4);else if("large"===e)t=Fe(7),r=Fe(7);else{const i=He(e);t=i,r=i}return{width:t,height:r,fontSize:`calc(${t} / 1.75)`}},$t=($.span`
  display: block;
  color: var(--lns-color-orangeDark);
  background-color: var(--lns-color-background);
  ${et("full")};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  font-weight: var(--lns-fontWeight-bold);
  width: ${e=>{const{width:t}=Kt(e.size);return t}};
  height: ${e=>{const{height:t}=Kt(e.size);return t}};
  font-size: ${e=>{const{fontSize:t}=Kt(e.size);return t}};
  position: relative;
  z-index: 0;

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.2;
    z-index: -1;
    ${e=>e.hasBackgroundColor&&"background-color: var(--lns-color-orangeDark)"};
  }
`,$.img`
  max-width: 100%;
  width: ${e=>{const{width:t}=Kt(e.size);return t}};
  height: ${e=>{const{height:t}=Kt(e.size);return t}};
  font-size: ${e=>{const{fontSize:t}=Kt(e.size);return t}};
`,(e=":root",t="body")=>`\n    ${e} {\n      font-size: 100%;\n    }\n    ${t} {\n      font-family: circular, -apple-system, BlinkMacSystemFont, Segoe UI,\n        sans-serif;\n      color: ${Be("body")};\n      ${Je("medium")};\n      font-feature-settings: 'ss08' on;\n    }\n\n    ${t} *,\n    ${t} *:before,\n    ${t} *:after {\n      box-sizing: border-box;\n    }\n\n    ${t} * {\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n      letter-spacing: calc(0.6px - 0.05em);\n    }\n\n    ${((e=":root")=>`\n    ${e||":root"},\n    .theme-light,\n    [data-lens-theme="light"] {\n      ${Object.keys(Ue.light).map((e=>`--lns-color-${e}: var(--lns-themeLight-color-${e});`)).join("")}\n    }\n\n    .theme-dark,\n    [data-lens-theme="dark"] {\n      ${Object.keys(Ue.dark).map((e=>`--lns-color-${e}: var(--lns-themeDark-color-${e});`)).join("")}\n    }\n  `)(e)}\n\n    ${(e=>{const t=[],r=e||":root";return Object.entries(Object.assign({},Dt,...Gt)).forEach((e=>{t.push(`${e[0]}:${e[1]};`)})),Object.entries(Oe(Oe({},Ht),Wt)).forEach((e=>{t.push(`${e[0]}:${e[1]};`)})),`\n    ${r} {\n      ${t.join("")}\n    }\n  `})(e)}\n\n    ${(()=>{const e=[];return e.push(`${It(xt)}`),Object.entries(Et).map((([t,r])=>{e.push(`@media(min-width:${r}){${It(xt,t)}}`)})),e.join("")})()}\n  `),Vt=()=>r.createElement(I,{styles:x($t())}),Qt=3,Zt=$.span`
  display: block;
  color: ${e=>Be(e.color)};

  & > svg,
  & > img {
    display: block;
    ${e=>!e.hasWidthOffset&&We("width",e.size)};
    ${e=>We("height",e.size)};
  }
`,Yt=e=>{var t=e,{altText:i,icon:n,color:a="body",size:o=Qt,hasWidthOffset:s}=t,u=Pe(t,["altText","icon","color","size","hasWidthOffset"]);const c=r.useRef(null),p=Qt*ot;return r.useEffect((()=>{if(!s)return;const e=c.current.querySelector("svg");if(!e)return;const t=e.getBBox();e.setAttribute("viewBox",`${t.x} 0 ${t.width||p} ${p}`)}),[]),r.createElement(Zt,Oe({ref:c,"aria-label":i,color:a,size:o,hasWidthOffset:s},u),n)},Xt={small:{totalSize:18},medium:{totalSize:24},large:{totalSize:48}},Jt=e=>Xt[e.size].totalSize/6,er=e=>Xt[e.size].totalSize,tr=N`
  50% {
    transform: scale(1);
  }
`,rr=$.span`
  display: inline-block;
  vertical-align: middle;
  height: ${e=>er(e)}px;
  width: ${e=>er(e)}px;
`,ir=$.span`
  display: grid;
  grid-template-areas: 'stack';
  height: 100%;
  width: 100%;
`,nr=$.span`
  grid-area: stack;
  place-self: center;
  transform: rotate(${e=>45*e.position}deg)
    translateY(${e=>er(e)/2-Jt(e)/2}px);

  &:after {
    content: '';
    height: ${e=>Jt(e)}px;
    width: ${e=>Jt(e)}px;
    border-radius: ${e=>Jt(e)}px;
    background-color: ${e=>Be(e.color)};
    display: block;
    transform: scale(0.65);
    animation: ${tr} ${1}s
      ${e=>1*e.position/8}s ease-in-out infinite;
  }
`,ar=({position:e,color:t,size:i})=>r.createElement(nr,{color:t,position:e,size:i}),or=(Object.keys(Xt),e=>{var t=e,{color:i="body",size:n="medium"}=t,a=Pe(t,["color","size"]);let o;const s=[];for(o=0;o<8;o++)s.push(r.createElement(ar,{color:i,position:o,size:n,key:o}));return r.createElement(rr,Oe({size:n},a),r.createElement(ir,null,s))}),sr={small:{height:Fe(4),textSize:"small",iconSize:2,xSpace:Fe(1.5)},medium:{height:Fe(4.5),textSize:"medium",iconSize:3,xSpace:Fe(2)},large:{height:Fe(7),textSize:"large",iconSize:4,xSpace:Fe(2.5)}},ur=e=>x`
  transition: opacity 0.5s;
  ${e.hasLoader&&"opacity: 0"};
`,cr={neutral:{color:Be("body"),background:"transparent",borderColor:Be("buttonBorder"),hover:Be("backgroundHover"),active:Be("backgroundActive")},primary:{color:Be("white"),background:Be("blurple"),borderColor:null,hover:Be("primaryHover"),active:Be("primaryActive")},record:{color:Be("white"),background:Be("record"),borderColor:null,hover:Be("recordHover"),active:Be("recordActive")},upgrade:{color:Be("grey7"),background:Be("upgrade"),borderColor:null,hover:Be("upgradeHover"),active:Be("upgradeActive"),focusRing:it()},danger:{color:Be("white"),background:Be("danger"),borderColor:null,hover:Be("dangerHover"),active:Be("dangerActive")},ai:{color:Be("white"),background:"linear-gradient(135deg, #565ADD, #9F92EC, #DC43BE)",borderColor:null,hover:null,active:null}},pr={enabled:x`
    cursor: pointer;
  `,disabled:x`
    pointer-events: none;
    background-color: ${Be("disabledBackground")};
    color: ${Be("disabledContent")};
    border: none;
  `},lr=Fe(1),dr=$.button`
  appearance: none;
  padding: 0
    ${e=>e.hasChildren?sr[e.size].xSpace:0};
  font: inherit;
  text-decoration: none;
  transition: 0.6s background, 0.6s border-color;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  white-space: nowrap;
  ${tt("bold")};
  ${et("full")};
  ${e=>e.hasFullWidth?"display: flex; width: 100%":"display: inline-flex"};
  height: ${e=>sr[e.size].height};
  min-width: ${e=>sr[e.size].height};
  ${e=>Je(sr[e.size].textSize)};
  ${e=>e.disabled?pr.disabled:pr.enabled};
  ${e=>!e.disabled&&`\n    border: ${cr[e.variant].borderColor?`1px solid ${cr[e.variant].borderColor}`:"none"};\n    background: ${cr[e.variant].background};\n    background-position: left;\n    background-size: 125%;\n    color: ${cr[e.variant].color};\n  `};

  &:hover {
    transition: 0.3s background, 0.3s border-color;
    background: ${e=>cr[e.variant].hover};
    background-position: 75% center;
  }

  &:active {
    transition: 0s background, 0s border-color;
    background: ${e=>cr[e.variant].active};
    background-position: right;
  }

  &:focus-visible {
    outline: 1px solid transparent;
    ${it()};
  }

  &::-moz-focus-inner {
    border: 0;
  }
`,yr=$.span`
  ${e=>We("padding-left",e.paddingLeft)};
  ${e=>We("padding-right",e.paddingRight)};
  ${ur};
`,br=$.img`
  max-width: 1.45em;
  max-height: 1.45em;
  height: ${e=>sr[e.size].height};
  width: ${e=>sr[e.size].height};
  ${e=>e.hasSpacing&&"margin-right: 0.57em"};
  ${ur};
`,hr=$.span`
  position: absolute;
  display: flex;
  align-items: center;
`,gr=$.span`
  ${ur};
`,fr=(Object.keys(sr),Object.keys(cr),e=>{var t=e,{size:i="medium",children:n,variant:a="neutral",hasFullWidth:o,icon:s,iconPosition:u="left",logoSrc:c,hasLoader:p,isDisabled:l,htmlTag:d="button",refHandler:y}=t,b=Pe(t,["size","children","variant","hasFullWidth","icon","iconPosition","logoSrc","hasLoader","isDisabled","htmlTag","refHandler"]);const h=r.createElement(yr,{hasLoader:p,paddingLeft:n&&"right"===u&&lr,paddingRight:n&&"left"===u&&lr},r.createElement(Yt,{icon:s,color:"currentColor",hasWidthOffset:!0,size:sr[i].iconSize}));return r.createElement(dr,Oe({size:i,variant:a,hasFullWidth:o,icon:s,iconPosition:u,logoSrc:c,disabled:l,as:d,hasChildren:n,ref:e=>y&&y(e)},b),p&&r.createElement(hr,null,r.createElement(or,{color:"currentColor"})),s&&"left"===u&&h,c&&r.createElement(br,{alt:"",hasSpacing:n,src:c,size:i,height:sr[i].height,width:sr[i].height,hasLoader:p}),r.createElement(gr,{hasLoader:p},n),s&&"right"===u&&h)}),mr=$.div`
  display: ${e=>e.isInline?"inline-block":"block"};
  vertical-align: middle;
  ${e=>We("padding",e.all)};
  ${e=>We("padding-top",e.top)};
  ${e=>We("padding-right",e.right)};
  ${e=>We("padding-bottom",e.bottom)};
  ${e=>We("padding-left",e.left)};
`,Sr=e=>{var t=e,{children:i,all:n,y:a,x:o,top:s,right:u,bottom:c,left:p,isInline:l}=t,d=Pe(t,["children","all","y","x","top","right","bottom","left","isInline"]);return r.createElement(mr,Oe({all:n,top:a||s,bottom:a||c,right:o||u,left:o||p,isInline:l},d),i)},vr={small:{height:Fe(4),width:Fe(5),iconSize:2,padding:Fe(1.75),withIconPadding:Fe(4.5),passwordAdditionalPadding:Fe(.5),textSize:"small"},medium:{height:"var(--lns-formFieldHeight)",width:Fe(6),iconSize:3,padding:"var(--lns-formFieldHorizontalPadding)",withIconPadding:Fe(5.5),passwordAdditionalPadding:Fe(.5),textSize:"medium"},large:{height:Fe(7),width:Fe(6),iconSize:3,padding:"var(--lns-formFieldHorizontalPadding)",withIconPadding:Fe(5.5),passwordAdditionalPadding:Fe(.5),textSize:"large"}},Ar=$.input`
  -webkit-appearance: none;
  font-family: inherit;
  width: 100%;
  height: ${e=>vr[e.inputSize].height};
  border: none;
  color: inherit;
  background-color: ${Be("formFieldBackground")};
  transition: 0.3s box-shadow;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: ${e=>e.icon?vr[e.inputSize].withIconPadding:vr[e.inputSize].padding};
  padding-right: ${e=>(e=>{let t=e.addOn?vr[e.inputSize].withIconPadding:vr[e.inputSize].padding;return"password"===e.type&&(t=`calc(${vr[e.inputSize].passwordAdditionalPadding} + ${t})`),t})(e)};
  border-radius: var(--lns-radius-full);
  box-shadow: inset 0 0 0
    ${e=>e.hasError?"var(--lns-formFieldBorderWidthFocus) var(--lns-color-danger)":"var(--lns-formFieldBorderWidth) var(--lns-color-formFieldBorder)"};

  ${e=>Je(vr[e.inputSize].textSize)};

  &:hover {
    box-shadow: inset 0 0 0 var(--lns-formFieldBorderWidthFocus)
      var(--lns-color-blurple);
  }

  &:focus {
    outline: 1px solid transparent;
    box-shadow: var(--lns-formFieldBorderShadowFocus);
  }

  &:disabled {
    color: ${Be("disabledContent")};
    background-color: ${Be("disabledBackground")};
  }

  &:disabled:hover {
    box-shadow: inset 0 0 0 var(--lns-formFieldBorderWidth)
      var(--lns-color-formFieldBorder);
  }

  &::placeholder {
    color: ${Be("grey5")};
  }

  [data-lens-theme='dark'] &::-webkit-calendar-picker-indicator,
  .theme-dark &::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
`,Cr=$.div`
  position: relative;
  width: 100%;
`,Tr=$.div`
  position: absolute;
  pointer-events: none;
  width: ${e=>vr[e.size].width};
  // Width isn't equal to iconPadding because we want more space on the left than the right
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,Mr=$.div`
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  width: ${e=>vr[e.size].width};
  top: 50%;
  transform: translateY(-50%);
`,_r=((0,r.forwardRef)(((e,t)=>{var i=e,{placeholder:n,onFocus:a,onChange:o,onBlur:s,onKeyDown:u,isDisabled:c,icon:p,type:l="text",value:d,hasError:y,size:b="medium",addOn:h}=i,g=Pe(i,["placeholder","onFocus","onChange","onBlur","onKeyDown","isDisabled","icon","type","value","hasError","size","addOn"]);const f=r.createElement(Ar,Oe({type:l,placeholder:n,onFocus:a,onChange:o,onBlur:s,onKeyDown:u,disabled:c,icon:p,ref:t,value:d,hasError:y,inputSize:b,addOn:h},g));return p||h?r.createElement(Cr,null,p&&r.createElement(Tr,{size:b},r.createElement(Yt,{icon:p,size:vr[b].iconSize,color:Be(c?"disabledContent":"body")})),f,h&&r.createElement(Mr,{size:b},h)):f})),{start:"flex-start",center:"center",end:"flex-end",stretch:"stretch"}),Rr=e=>Array.isArray(e)?e:[e],Or=(e,t)=>{if(e.length===t)return e;const r=e[e.length-1];return[...Array(t)].map(((t,i)=>e[i]||r))},wr=($.div`
  display: flex;
  flex-wrap: wrap;
  ${e=>((e,t)=>{const r=Math.max(Rr(e).length,Rr(t).length),i=Or(Rr(t),r),n=Or(Rr(e),r),a=i.map(((e,t)=>{const r=`${He(e)} 0 0 0`,i=`0 0 0 ${He(e)}`;return`& > * + *{ margin: ${"column"===n[t]?r:i}; }`})),o=n.map((e=>`flex-direction: ${e}`));return Ke(a)+Ke(o)})(e.flexDirection,e.gap)};
  ${e=>Qe(e.flexAlign,_r)};
  ${e=>e.isSpread&&((e,t,r)=>{if(Array.isArray(r)){const i=r.map((r=>`${e}: ${!0===r?t[0]:t[1]};`));return Ke(i)}return`${e}: ${t[0]};`})("justify-content",["space-between","initial"],e.isSpread)};

  & > * {
    flex-shrink: 0;
  }
`,Object.keys(_r),$.div`
  ${e=>e.position&&`position: ${e.position}`};
  ${e=>e.overflow&&`overflow: ${e.overflow}`};
  ${e=>e.backgroundColor&&`background-color: ${Be(e.backgroundColor)}`};
  ${e=>e.backgroundImage&&`background-image: ${e.backgroundImage}`}
  ${e=>e.contentColor&&`color: ${Be(e.contentColor)}`};
  ${e=>((e,t,r)=>{const i=t||"border",n=`${He(r)} solid ${Be(i)}`;if(e)return"all"===e?`border: ${n};`:`border-${e}: ${n};`})(e.borderSide,e.borderColor,e.borderWidth)};
  ${e=>et(e.radius)};
  ${e=>rt(e.shadow)};
  ${e=>We("width",e.width)};
  ${e=>We("height",e.height)};
  ${e=>We("min-width",e.minWidth)};
  ${e=>We("min-height",e.minHeight)};
  ${e=>We("max-width",e.maxWidth)};
  ${e=>We("max-height",e.maxHeight)};
  ${e=>We("padding",e.padding)};
  ${e=>We("padding-top",e.paddingTop)};
  ${e=>We("padding-right",e.paddingRight)};
  ${e=>We("padding-bottom",e.paddingBottom)};
  ${e=>We("padding-left",e.paddingLeft)};
  ${e=>We("margin",e.margin)};
  ${e=>We("margin-top",e.marginTop)};
  ${e=>We("margin-right",e.marginRight)};
  ${e=>We("margin-bottom",e.marginBottom)};
  ${e=>We("margin-left",e.marginLeft)};
  ${e=>We("top",e.top)};
  ${e=>We("right",e.right)};
  ${e=>We("bottom",e.bottom)};
  ${e=>We("left",e.left)};
  ${e=>e.zIndex&&`z-index: ${e.zIndex}`};
`),Pr=e=>{var t=e,{children:i,backgroundColor:n,backgroundImage:a,contentColor:o,borderColor:s,radius:u,borderSide:c,borderWidth:p="1px",shadow:l,padding:d,paddingX:y,paddingY:b,paddingLeft:h,paddingRight:g,paddingTop:f,paddingBottom:m,margin:S,marginX:v,marginY:A,marginLeft:C,marginRight:T,marginTop:M,marginBottom:_,width:R,height:O,minWidth:w,minHeight:P,maxWidth:j,maxHeight:z,htmlTag:x="div",position:I,overflow:E,zIndex:N,top:k,bottom:D,left:U,right:L,refHandler:q}=t,B=Pe(t,["children","backgroundColor","backgroundImage","contentColor","borderColor","radius","borderSide","borderWidth","shadow","padding","paddingX","paddingY","paddingLeft","paddingRight","paddingTop","paddingBottom","margin","marginX","marginY","marginLeft","marginRight","marginTop","marginBottom","width","height","minWidth","minHeight","maxWidth","maxHeight","htmlTag","position","overflow","zIndex","top","bottom","left","right","refHandler"]);return r.createElement(wr,Oe({backgroundColor:n,backgroundImage:a,contentColor:o,borderColor:s,radius:u,borderSide:c,shadow:l,padding:d,paddingLeft:y||h,paddingRight:y||g,paddingTop:b||f,paddingBottom:b||m,margin:S,marginLeft:v||C,marginRight:v||T,marginTop:A||M,marginBottom:A||_,width:R,height:O,minWidth:w,minHeight:P,maxWidth:j,maxHeight:z,as:x,position:I,top:k,bottom:D,left:U,right:L,overflow:E,zIndex:N,borderWidth:p,ref:e=>q&&q(e)},B),i)};function jr(e){return r.createElement("svg",Oe({viewBox:"0 0 24 24",fill:"none"},e),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.664 3.35a2.723 2.723 0 013.664.96l.003.005 7.296 12.18.008.015a2.722 2.722 0 01-2.328 4.084H4.693a2.723 2.723 0 01-2.328-4.084l.008-.014L9.672 4.31c.243-.4.584-.731.992-.96zM12 5a.723.723 0 00-.617.346l-7.29 12.17a.723.723 0 00.618 1.078h14.578a.723.723 0 00.617-1.079L12.618 5.348l-.001-.002A.723.723 0 0012 5zm0 3.257a1 1 0 011 1v3.446a1 1 0 01-2 0V9.257a1 1 0 011-1zm-1 7.891a1 1 0 011-1h.01a1 1 0 010 2H12a1 1 0 01-1-1z",fill:"currentColor"}))}$.div`
  display: grid;
  ${e=>Ve("align-items",e.alignItems)};
  ${e=>Ve("justify-content",e.justifyContent)};
  ${e=>e.justifyItems&&Ve("justify-items",e.justifyItems)};
  ${e=>e.alignContent&&Ve("align-content",e.alignContent)};
  ${e=>!e.columns&&!e.rows&&!e.autoFlow&&"grid-auto-flow: column"};
  ${e=>Xe(e.columns,"columns")};
  ${e=>Xe(e.rows,"rows")};
  ${e=>We("gap",e.gap)};
  ${e=>We("width",e.width)};
  ${e=>We("height",e.height)};
  ${e=>We("min-width",e.minWidth)};
  ${e=>We("min-height",e.minHeight)};
  ${e=>We("max-width",e.maxWidth)};
  ${e=>We("max-height",e.maxHeight)};

  ${e=>e.autoFlow&&Ve("grid-auto-flow",e.autoFlow)};
  ${e=>e.columns&&e.autoFlow&&Ve("grid-auto-flow",e.autoFlow)};
`,$.div`
  position: relative;
  ::before {
    content: '';
    width: calc(100% + var(--lns-space-medium));
    height: calc(100% + var(--lns-space-medium));
    position: absolute;
    top: calc(-1 * var(--lns-space-small));
    left: calc(-1 * var(--lns-space-small));
    outline: 1px solid var(--lns-color-danger);
    border-radius: var(--lns-radius-large);
    pointer-events: none;
  }
`;var zr={start:"flex-start",center:"center",end:"flex-end"},xr=$.div`
  display: flex;
  ${e=>Qe(e.alignment,zr)};

  & > * + * {
    ${e=>e.gap&&We("margin-left",e.gap)};
  }
`,Ir=$.div`
  min-width: 0px;
  flex-shrink: 0;
  ${e=>We("width",e.width)};
  ${e=>We("max-width",e.maxWidth)};
  ${e=>e.width?"flex-shrink: 0":"flex: 1 1 0%"};
`;(class extends r.Component{render(){return Se.warn(yt),r.createElement(xr,Oe({},this.props),this.props.children)}}).Section=e=>{var t=e,{width:i,maxWidth:n,children:a}=t,o=Pe(t,["width","maxWidth","children"]);return Se.warn(yt),r.createElement(Ir,Oe({width:i,maxWidth:n},o),a)};var Er={small:{size:Fe(3),iconSize:2.25},medium:{size:Fe(4),iconSize:3},large:{size:Fe(5),iconSize:4}},Nr=$.button`
  background-color: ${e=>Be(e.isActive?"backgroundActive":e.backgroundColor)||"transparent"};
  border: none;
  appearance: none;
  cursor: pointer;
  padding: 0;
  width: ${e=>Er[e.size].size};
  height: ${e=>Er[e.size].size};
  position: relative;
  outline: 1px solid transparent;
  transition: 0.6s background-color;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  ${et("full")};
  font: inherit;

  &:hover {
    transition: 0.3s background-color;
    background-color: ${e=>Be(e.isActive?"backgroundActive":"backgroundHover")};
  }

  &:active {
    transition: 0s background-color;
    background-color: ${Be("backgroundActive")};
  }

  &:disabled {
    color: ${Be("disabledContent")};
    pointer-events: none;
  }

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    ${et("full")};
  }

  &:focus-visible:before {
    ${it()};
  }

  &:focus::-moz-focus-inner {
    border: 0;
  }
`,kr=e=>{var t=e,{altText:i,icon:n,onClick:a,iconColor:o="body",backgroundColor:s,isActive:u,isDisabled:c,size:p="medium"}=t,l=Pe(t,["altText","icon","onClick","iconColor","backgroundColor","isActive","isDisabled","size"]);return r.createElement(Nr,Oe({"aria-label":i,onClick:a,isActive:u,disabled:c,size:p,backgroundColor:s},l),r.createElement(Yt,{icon:n,size:Er[p].iconSize,color:c?"disabledContent":o}))},Dr=e=>r.createElement("svg",Oe({width:12,height:9,viewBox:"0 0 12 9",fill:"none"},e),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.707.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L4 6.586 10.293.293a1 1 0 011.414 0z",fill:"currentColor"})),Ur=e=>r.createElement("svg",Oe({width:12,height:2,viewBox:"0 0 12 2",fill:"none"},e),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 1a1 1 0 011-1h10a1 1 0 110 2H1a1 1 0 01-1-1z",fill:"currentColor"})),Lr=$.div`
  display: block;
  position: relative;
`,qr=$.input`
  height: 100%;
  margin: 0;
  opacity: 0;
  position: absolute;
  width: 100%;

  &:not(:disabled) {
    cursor: pointer;

    & ~ .CheckboxBox {
      border: 2px solid ${Be("body")};
    }

    &:checked ~ .CheckboxBox,
    &:indeterminate ~ .CheckboxBox {
      background-color: ${Be("body")};
    }
  }

  &:disabled,
  &:disabled ~ .CheckboxBox {
    pointer-events: none;
  }

  &:disabled ~ .CheckboxBox {
    background-color: ${Be("disabledBackground")};

    .Icon {
      color: ${Be("disabledContent")};
    }
  }

  &:focus-visible ~ .CheckboxBox {
    ${it()};
  }

  & ~ .CheckboxBox .Icon {
    display: none;
    color: ${Be("background")};
  }

  &:checked ~ .CheckboxBox .IconCheck {
    display: block;
  }

  &:indeterminate ~ .CheckboxBox .IconMinus {
    display: block;
  }
`,Br=$.span`
  cursor: pointer;
  width: ${Fe(2.25)};
  height: ${Fe(2.25)};
  border-radius: ${Fe(.5)};
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`,Fr=((0,r.forwardRef)(((e,t)=>{var i=e,{isDisabled:n,isChecked:a,isIndeterminate:o,onFocus:s,onChange:u,onBlur:c}=i,p=Pe(i,["isDisabled","isChecked","isIndeterminate","onFocus","onChange","onBlur"]);const l=(0,r.useRef)(),d=t||l,y=Be(n?"disabledContent":"currentColor");return(0,r.useEffect)((()=>{d.current.indeterminate=o})),r.createElement(Lr,null,r.createElement(qr,Oe({role:"checkbox",type:"checkbox",disabled:n,checked:a,onFocus:s,onChange:u,onBlur:c,ref:d,"aria-checked":a},p)),r.createElement(Br,{className:"CheckboxBox"},r.createElement(Ur,{className:"Icon IconMinus",color:y}),r.createElement(Dr,{className:"Icon IconCheck",color:y})))})),{small:{textSize:"small",iconSize:2.25,height:Fe(3),xSpace:Fe(1)},medium:{textSize:"medium",iconSize:3,height:Fe(4),xSpace:Fe(1.5)},large:{textSize:"large",iconSize:4,height:Fe(6),xSpace:Fe(3)}});$.button`
  background-color: transparent;
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  font: inherit;
  text-decoration: none;
  border: none;
  appearance: none;
  height: ${e=>Fr[e.size].height};
  cursor: pointer;
  transition: 0.6s background-color;
  color: ${Be("body")};
  ${tt("bold")};
  ${et("full")};
  ${e=>Je(Fr[e.size].textSize)};
  padding: 0 ${e=>Fr[e.size].xSpace};
  ${e=>e.offsetSide&&`margin-${e.offsetSide}: calc(-1 * ${Fr[e.size].xSpace})`};

  &:focus,
  &:focus-visible {
    outline: 1px solid transparent;
  }

  &:focus-visible {
    ${it()};
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &:hover {
    transition: 0.3s background-color;
    background-color: ${Be("backgroundHover")};
  }

  &:active {
    transition: 0s background-color;
    background-color: ${Be("backgroundActive")};
  }

  &:disabled {
    color: ${Be("disabledContent")};
    pointer-events: none;
  }
`,$.ul`
  background-color: ${Be("overlay")};
  list-style: none;
  padding: ${Fe(1.5)};
  margin: 0;
  ${e=>We("min-width",e.minWidth)};
  ${e=>We("max-width",e.maxWidth)};
  ${e=>We("max-height",e.maxHeight)};
  z-index: ${e=>e.zIndex};
  overflow: auto;
  border: 1px solid ${Be("border")};
  ${rt("medium")};
  ${et("large")};
`,$.li`
  display: ${({hidden:e})=>e?"none":"grid"};
  grid-auto-flow: column;
  grid-template-columns: ${e=>e.columns};
  ${We("grid-gap","small")};
  ${et("xlarge")};
  align-items: center;
  min-height: ${Fe(5)};
  padding: 0 ${Fe(2)};
  cursor: ${e=>e.isDisabled?"default":"pointer"};
  ${e=>e.isHighlighted&&!e.isDisabled&&`\n    background-color: ${Be("backgroundHover")};\n  `};
  ${e=>e.hasDivider&&`\n    position: relative;\n    margin-top: ${Fe(3)};\n    &:before {\n      content: '';\n      border-top: 1px solid ${Be("border")};\n      position: absolute;\n      top: ${Fe(-1.5)};\n      left: ${Fe(-1.5)};\n      width: calc(100% + ${Fe(3)});\n    }\n  `};
`,$.div`
  position: relative;
`,$.button`
  appearance: none;
  font: inherit;
  text-align: left;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: ${e=>e.columns};
  ${We("grid-gap","small")};
  align-items: center;
  cursor: pointer;
  width: 100%;
  min-height: ${Fe(4.5)};
  padding: 0 ${Fe(1.5)} 0 var(--lns-formFieldHorizontalPadding);
  color: ${Be("body")};
  border: none;
  background-color: ${Be("formFieldBackground")};
  transition: 0.3s box-shadow;
  border-radius: var(--lns-formFieldRadius);
  box-shadow: inset 0 0 0 var(--lns-formFieldBorderWidth)
    var(--lns-color-formFieldBorder);

  &:hover:not(:disabled) {
    box-shadow: inset 0 0 0 var(--lns-formFieldBorderWidthFocus)
      var(--lns-color-blurple);
  }

  &:focus {
    outline: 1px solid transparent;
    box-shadow: var(--lns-formFieldBorderShadowFocus);
  }

  &:disabled {
    color: ${Be("disabledContent")};
    background-color: ${Be("disabledBackground")};
    cursor: default;
  }
`;var Hr=function(e,t){const i=document;(0,r.useLayoutEffect)((()=>{const r=null==i?void 0:i.documentElement,n=null==i?void 0:i.body;if(null!=i&&r&&n){if(t){const t=window.innerWidth-r.clientWidth,i=parseInt(window.getComputedStyle(n).getPropertyValue("padding-right"),10)||0;switch(e){case"html":r.style.position="relative",r.style.overflow="hidden",n.style.paddingRight=`${i+t}px`;break;case"body":n.style.setProperty("position","relative"),n.style.setProperty("overflow","hidden"),n.style.setProperty("padding-right",`${i+t}px`);break;default:return}}return()=>{switch(e){case"html":r.style.position="",r.style.overflow="",n.style.paddingRight="";break;case"body":n.style.removeProperty("position"),n.style.removeProperty("overflow"),n.style.removeProperty("padding-right");break;default:return}}}}),[i,t,e])},Wr=$.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  background: ${e=>Be(e.backgroundColor)};
  z-index: ${e=>e.zIndex};
  overflow: hidden;
`,Gr=$.div`
  overflow: auto;
  height: 100%;
`,Kr=e=>{var t=e,{children:i,isOpen:n,zIndex:a=1e3,backgroundColor:o="backdropDark"}=t,s=Pe(t,["children","isOpen","zIndex","backgroundColor"]);const{stage:u,shouldMount:c}=function(e,t){const[i,n]=(0,r.useState)(e?"enter":"from"),a=(0,r.useRef)({}),[o,s]=(0,r.useState)(e);return(0,r.useEffect)((function(){return he(a.current),e?(n("from"),s(!0),be((()=>{n("enter")}))):(n("leave"),a.current=be((()=>{s(!1)}),300)),()=>{he(a.current)}}),[e,300]),{stage:i,shouldMount:o}}(n);return Hr("html",n),r.createElement(r.Fragment,null,c&&r.createElement(Wr,Oe({backgroundColor:o,zIndex:a,style:{transition:"opacity 300ms",opacity:"enter"===u?1:0}},s),r.createElement(Gr,null,i)))};function $r(e){return r.createElement("svg",Oe({viewBox:"0 0 24 24",fill:"none"},e),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.21 12l4.54-4.54c.33-.33.33-.88 0-1.21a.863.863 0 00-1.21 0L12 10.79 7.46 6.25a.863.863 0 00-1.21 0c-.33.33-.33.88 0 1.21L10.79 12l-4.54 4.54c-.33.33-.33.88 0 1.21.33.33.88.33 1.21 0L12 13.21l4.54 4.54c.33.33.88.33 1.21 0 .33-.33.33-.88 0-1.21L13.21 12z",fill:"currentColor"}))}var Vr="70vh",Qr=$.div`
  display: grid;
  grid-template-rows: ${e=>e.rows};
  position: relative;
`,Zr=$.dialog`
  top: ${e=>nt(He(e.maxHeight),e.placement).top};
  background-color: ${Be("overlay")};
  color: ${Be("body")};
  bottom: ${e=>nt(e.maxHeight,e.placement).bottom};
  ${rt("large")};
  ${et("xlarge")};
  // Unsets bottom-radius for bottom-aligned modals
  border-bottom-left-radius: ${e=>"bottom"===e.placement?"initial":void 0};
  border-bottom-right-radius: ${e=>"bottom"===e.placement?"initial":void 0};
  ${e=>We("max-height",e.maxHeight)};
  ${e=>We("max-width",e.maxWidth)};
  margin: 0 auto;
  position: ${e=>nt(e.maxHeight,e.placement).position};
  overflow: auto;
  width: 100%;
  // TODO: LNS-150: Bake dialog resets into native resets file
  border: 0;
  padding: 0;
  &::backdrop {
    background: var(--lns-color-overlay);
  }
`,Yr=$.div`
  position: absolute;
  top: ${Fe(1.5)};
  right: ${Fe(1.5)};
  z-index: 1;
`,Xr=$.div`
  margin-left: auto;

  * {
    vertical-align: middle;
  }
`,Jr=$.div`
  padding-left: var(--lns-space-xlarge);
  padding-right: var(--lns-space-xlarge);
  padding-top: var(--lns-space-xlarge);
  padding-bottom: ${e=>e.bottom};
  flex-shrink: 0;
`,ei=$.div`
  padding-left: var(--lns-space-xlarge);
  padding-right: var(--lns-space-xlarge);
  padding-bottom: var(--lns-space-xlarge);
  padding-top: ${e=>e.hasDividers?"var(--lns-space-medium)":e.top};
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ti=$.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-top: ${e=>e.hasTitle&&!e.noPadding||e.hasTitle||e.noPadding?0:"var(--lns-space-xlarge)"};
  padding-bottom: ${e=>e.hasButtons&&!e.noPadding||e.hasButtons||e.noPadding?0:"var(--lns-space-xlarge)"};
  padding-left: ${e=>e.noPadding?0:"var(--lns-space-xlarge)"};
  padding-right: ${e=>e.noPadding?0:"var(--lns-space-xlarge)"};
  border-style: solid;
  border-color: ${Be("border")};
  border-width: ${e=>e.hasDividers?"1px 0":"0"};
`,ri=$.div`
  overflow: auto;

  ${e=>ii(e.maxHeight)};

  & > * {
    ${e=>ii(e.maxHeight)};
  }
`,ii=e=>"number"==typeof e?We("max-height",e):"max-height: "+e,ni=e=>{var t=e,{children:i,onCloseClick:n,isOpen:a,maxWidth:o=60,maxHeight:s=Vr,placement:u="center",ariaLabel:c,ref:p,removeClose:l}=t,d=Pe(t,["children","onCloseClick","isOpen","maxWidth","maxHeight","placement","ariaLabel","ref","removeClose"]);return(0,r.useEffect)((()=>{const e=e=>{"Escape"===e.key&&(e.preventDefault(),l||n(e))};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}}),[a,n]),Hr("html",a),r.createElement(me(),{active:a,focusTrapOptions:{clickOutsideDeactivates:!1,allowOutsideClick:!0}},r.createElement(Zr,Oe({open:a,maxWidth:o,maxHeight:s,placement:u,onClick:e=>e.stopPropagation(),ref:p,"aria-label":c},d),!l&&n&&r.createElement(Yr,null,r.createElement(kr,{altText:"Close",icon:r.createElement($r,null),onClick:n})),r.createElement(ri,{tabIndex:l?0:-1,maxHeight:s},i)))},ai=r.forwardRef(((e,t)=>{var i=e,{children:n,id:a,isOpen:o,mainButton:s,secondaryButton:u,alternativeButton:c,title:p,noPadding:l,onCloseClick:d,onBackgroundClick:y,onKeyDown:b,hasDividers:h,maxHeight:g="70vh",maxWidth:f=60,placement:m="center",zIndex:S=1e3,ariaLabel:v}=i,A=Pe(i,["children","id","isOpen","mainButton","secondaryButton","alternativeButton","title","noPadding","onCloseClick","onBackgroundClick","onKeyDown","hasDividers","maxHeight","maxWidth","placement","zIndex","ariaLabel"]);const C=a?`${a}-modal-title`:"modal-title",T=!!(s||u||c);return r.createElement(Kr,Oe({isOpen:o,zIndex:S},A),r.createElement(Pr,{height:"100%",onClick:e=>{if(y)return e.stopPropagation(),void y(e);d(e)},onKeyDown:b,"aria-labelledby":C},r.createElement(ni,{ref:t,id:a,isOpen:o,maxHeight:g,maxWidth:f,placement:m,onCloseClick:d,ariaLabel:v},r.createElement(Qr,{rows:`${p?"auto ":""} ${n?"1fr ":""} ${T?"auto":""}`},p&&r.createElement(Jr,{bottom:n?"var(--lns-space-medium)":"var(--lns-space-xlarge)",id:C},r.createElement(vt,{variant:"title"},p)),r.createElement(ti,{noPadding:l,hasDividers:h,hasTitle:Boolean(p),hasButtons:T},n&&n),T&&r.createElement(ei,{top:n?"var(--lns-space-xlarge)":0,hasDividers:h},c,r.createElement(Xr,null,u&&r.createElement(Sr,{right:"small",isInline:!0},u),s))))))})),oi=ai,si={topLeft:"start",topCenter:"start center",topRight:"start end",centerLeft:"center start",center:"center",centerRight:"center end",bottomLeft:"end start",bottomCenter:"end center",bottomRight:"end"},ui=($.div`
  width: 100%;
  height: 100%;
  display: grid;
  ${e=>Ve("place-items",(e=>{if(Array.isArray(e))return e.map((e=>si[e]));if("object"==typeof e){const t={};return Object.entries(e).forEach((([e,r])=>t[e]=si[r])),t}return si[e]})(e.alignment))};
`,Object.keys(si),{neutral:{color:Be("inherit"),focusRing:it()},primary:{color:Be("primary"),focusRing:it()}}),ci={enabled:x`
    cursor: pointer;
  `,disabled:x`
    pointer-events: none;
    color: ${Be("disabledContent")};
  `},pi={isButton:x`
    background: none;
    border: none;
    font: inherit;
  `},li=($.a`
  ${e=>!e.disabled&&`color: ${ui[e.variant].color}`};
  ${e=>e.disabled?ci.disabled:ci.enabled};
  ${e=>"button"===e.as&&pi.isButton};
  border-radius: 0.28em;
  box-shadow: 0 0 0 1px transparent;
  text-decoration: underline;
  text-underline-offset: 0.35em;
  transition: 0.3s box-shadow;
  &:focus,
  &:focus-visible {
    outline: 1px solid transparent;
  }
  &:focus-visible {
    ${it()};
  }
  &::-moz-focus-inner {
    border: 0;
  }
`,Object.keys(ui),{small:{padding:`${Fe(1.5)} ${Fe(1.75)}`,textSize:"small"},medium:{padding:`${Fe(1.5)} var(--lns-formFieldHorizontalPadding)`,textSize:"medium"}}),di=$.textarea`
  width: 100%;
  border: none;
  font-family: inherit;
  color: inherit;
  background-color: ${Be("formFieldBackground")};
  transition: 0.3s box-shadow;
  padding: ${e=>li[e.size].padding};
  ${et("large")};
  box-shadow: inset 0 0 0 var(--lns-formFieldBorderWidth)
    var(--lns-color-formFieldBorder);
  ${e=>Je(li[e.size].textSize)};
  resize: ${e=>e.resize};

  &:hover {
    box-shadow: inset 0 0 0 var(--lns-formFieldBorderWidthFocus)
      var(--lns-color-blurple);
  }

  &:focus {
    outline: 1px solid transparent;
    box-shadow: var(--lns-formFieldBorderShadowFocus);
  }

  &:disabled {
    color: ${Be("disabledContent")};
    background-color: ${Be("disabledBackground")};
  }

  &:disabled:hover {
    box-shadow: inset 0 0 0 var(--lns-formFieldBorderWidth)
      var(--lns-color-formFieldBorder);
  }

  &::placeholder {
    color: ${Be("grey5")};
  }
`,yi=(r.forwardRef(((e,t)=>{var i=e,{onChange:n,value:a,rows:o=4,isDisabled:s,placeholder:u,size:c="medium",resize:p="both"}=i,l=Pe(i,["onChange","value","rows","isDisabled","placeholder","size","resize"]);return r.createElement(di,Oe({disabled:s,onChange:n,placeholder:u,ref:t,rows:o,value:a,size:c,resize:p},l))})),$.div`
  display: inline-block;
  vertical-align: middle;
`,{row:{wrapper:{display:"grid",gridTemplateColumns:"auto 1fr",alignItems:"center"},label:{marginLeft:"var(--lns-space-small)"},errorMessage:{marginLeft:"var(--lns-space-small)"}},column:{wrapper:{},label:{marginBottom:"var(--lns-space-xsmall)"}}});function bi(e){return r.createElement("svg",Oe({viewBox:"0 0 24 24",fill:"none"},e),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1118 0 9 9 0 01-18 0z",fill:"currentColor"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13 11v5.2h-2V11h2zM10.5 8.8A1.5 1.5 0 0112 7.3h.01a1.5 1.5 0 010 3H12a1.5 1.5 0 01-1.5-1.5z",fill:"currentColor"}))}$.div`
  ${e=>e.direction&&yi[e.direction].wrapper};
`,$.label`
  display: block;
  ${e=>e.direction&&yi[e.direction].label};
`,$.span`
  color: var(--lns-color-red);
  margin-top: var(--lns-space-xsmall);
  display: block;
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 3;
`;var hi=e=>r.createElement("svg",Oe({viewBox:"0 0 24 24",fill:"none"},e),r.createElement("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M7.42 2.293A1 1 0 0 1 8.127 2h7.245a1 1 0 0 1 .708.293l5.127 5.127a1 1 0 0 1 .293.707v7.245a1 1 0 0 1-.293.708l-5.127 5.127a1 1 0 0 1-.707.293H8.128a1 1 0 0 1-.708-.293L2.293 16.08A1 1 0 0 1 2 15.373V8.128a1 1 0 0 1 .293-.708L7.42 2.293ZM8.542 4 4 8.542v6.416L8.542 19.5h6.416l4.542-4.542V8.542L14.958 4H8.542Zm2.208 11.25a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2h-.009a1 1 0 0 1-1-1Zm2-7a1 1 0 1 0-2 0v3.5a1 1 0 1 0 2 0v-3.5Z"})),gi={info:{bgColor:"var(--lns-color-blurple)",icon:r.createElement(bi,null),color:"var(--lns-color-white)",fontFamily:"inherit"},warning:{bgColor:"var(--lns-color-warning)",icon:r.createElement(hi,null),color:"var(--lns-color-grey8)",fontFamily:"inherit"},error:{bgColor:"var(--lns-color-danger)",icon:r.createElement(jr,null),color:"var(--lns-color-white)",fontFamily:"inherit"},internal:{icon:r.createElement("span",{role:"img"},"🔔"),color:"var(--lns-color-teal)",bgColor:"var(--lns-color-grey8)",fontFamily:"Roboto Mono, Lucida Mono, monospace"}},fi=($.aside`
  --paddingXOffset: var(--lns-space-large);
  --alignItems: start;

  display: grid;
  align-items: var(--alignItems);
  justify-content: space-between;
  grid-template-columns: 1fr auto;
  ${e=>`background-color: ${gi[e.severity].bgColor}`};
  ${e=>`font-family: ${gi[e.severity].fontFamily}`};

  ${e=>`color: ${gi[e.severity].color}`};
  position: fixed;
  padding: var(--lns-space-medium) var(--paddingXOffset);
  top: 0;
  left: 0;
  transition: ${350}ms box-shadow, ${350}ms transform;
  width: 100%;
  box-sizing: border-box;
  z-index: 1100;
  opacity: ${e=>e.isOpen?"1":"0"};
  transform: ${e=>e.isOpen?"translateY(0px)":"translateY(-100%)"};
  @media (min-width: 872px) {
    --alignItems: center;
  }
`,"web-app"),mi="chrome-extension",Si={short:3e3,long:8e3},vi=$.div`
  animation: ${e=>{return t=e.toastDuration,r=e.platform,N`
  0% {
    opacity: 0;
    transform: translate(-50%, ${Fe(r===mi?-8:8)});
  }
  // (300 / toastDuration) * 100 evaluates to 10% for short. Longer durations will have the same speed of animation
  ${300/t*100}% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
  // 100 - (300 / toastDuration) * 100 evaluates to 90% for short. Longer durations will have the same speed of animation
  ${100-300/t*100}% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;var t,r}}
    ${e=>e.toastDuration}ms forwards;
  background-color: ${Be("background")};
  border-radius: 1.75rem; // Height of single line toast (56px) divided by 2 so one line toasts appear fully rounded
  top: ${e=>(e=>{switch(e){case fi:return"unset";case mi:return Fe(4);default:return"unset"}})(e.platform)};
  bottom: ${e=>(e=>{switch(e){case fi:return Fe(4);case mi:return"unset";default:return Fe(4)}})(e.platform)};
  ${rt("large")};
  color: ${Be("body")};
  display: grid;
  grid-auto-flow: column;
  gap: var(--lns-space-small);
  justify-content: space-between;
  left: 50%;
  max-width: ${Fe(50)}; // Fallback when min() function is not supported
  max-width: min(90%, ${Fe(50)});
  padding: ${Fe(1.5)} var(--lns-space-medium) ${Fe(1.5)} var(--lns-space-large);
  position: fixed;
  transform: translateX(-50%);
  width: max-content;
  z-index: ${e=>e.zIndex};
`,Ai=$.div`
  align-self: center;
`,Ci=({children:e,isOpen:t,onCloseClick:i,zIndex:n=1100,duration:a="short",platform:o="web-app"})=>{const s=Si[a];return(0,r.useEffect)((()=>{const e=setTimeout((()=>{t&&i()}),s);return()=>clearTimeout(e)}),[t]),r.createElement(r.Fragment,null,t&&r.createElement(vi,{"data-lens-theme":"dark",onClick:e=>e.stopPropagation(),zIndex:n,isOpen:t,toastDuration:s,platform:o},r.createElement(Ai,{"aria-live":"polite"},e),i&&r.createElement(kr,{altText:"Close",icon:r.createElement($r,null),onClick:i})))},Ti=(4-st.small.fontSize*st.small.lineHeight)/2;$.div`
  background-color: ${Be("background")};
  color: ${Be("body")};
  ${et("large")};
  ${tt("bold")};
  ${Je("small")};
  ${rt("medium")};
  ${e=>We("max-width",e.maxWidth)};
  z-index: 1100;
  padding: ${Fe(Ti)} ${Fe(1.5)};
  z-index: ${e=>e.zIndex};
`,$.div`
  background-color: ${Be("backgroundActive")};
  border-radius: 3px;
  color: ${Be("grey3")};
  ${tt("bold")};
  ${Je("small")};
  padding-left: ${Fe(.5)};
  padding-right: ${Fe(.5)};
`,$.div`
  display: ${e=>e.isInline?"inline-block":"block"};
  ${e=>e.verticalAlign&&`vertical-align: ${e.verticalAlign}`};
  &:focus-visible {
    // Note: 0px solid transparent prevents focus rings from disappearing for -ms-high-contrast.
    // TODO(LNS-183): Provide more robust polyfill/support for :focus for older versions of Safari, which don't support :focus-visible
    outline: 0px solid transparent;
    box-shadow: var(--lns-formFieldBorderShadowFocus);
  }
`,Object.keys({topLeft:"top-start",topCenter:"top-center",topRight:"top-end",bottomLeft:"bottom-start",bottomCenter:"bottom-center",bottomRight:"bottom-end",leftTop:"left-start",leftCenter:"left-center",leftBottom:"left-end",rightTop:"right-start",rightCenter:"right-center",rightBottom:"right-end"});var Mi={medium:{switchHeight:16,switchWidth:32,knobOffset:2},large:{switchHeight:28,switchWidth:56,knobOffset:4}},_i={knob:{active:{enabled:Be("white"),disabled:Be("disabledContent")},inactive:{enabled:Be("white"),disabled:Be("disabledContent")}},track:{active:{enabled:Be("blurple"),disabled:Be("disabledBackground")},inactive:{enabled:Be("grey6"),disabled:Be("disabledBackground")}}},Ri=e=>Mi[e.switchSize].switchHeight-2*Mi[e.switchSize].knobOffset,Oi=($.label`
  display: block;
  position: relative;
`,$.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  // to overlap SwitchBox and occupy the same space
  z-index: 1;
  margin: 0;
  width: ${e=>Mi[e.switchSize].switchWidth}px;
  height: ${e=>Mi[e.switchSize].switchHeight}px;

  &:focus-visible ~ .SwitchBox {
    ${it()};
  }
  &:not(:checked) {
    & + .SwitchBox {
      background-color: ${_i.track.inactive.enabled};
    }
    &:disabled + .SwitchBox {
      background-color: ${_i.track.inactive.disabled};
    }
  }
  &:checked {
    & + .SwitchBox {
      background-color: ${_i.track.active.enabled};
    }
    &:disabled + .SwitchBox {
      background-color: ${_i.track.active.disabled};
    }
    & + .SwitchBox:after {
      transform: translateX(${e=>(e=>Mi[e.switchSize].switchWidth-Mi[e.switchSize].switchHeight)(e)}px);
    }
  }
  &:disabled {
    pointer-events: none;
  }
`,$.div`
  width: ${e=>Mi[e.switchSize].switchWidth}px;
  height: ${e=>Mi[e.switchSize].switchHeight}px;
  position: relative;
  border-radius: var(--lns-radius-full);
  transition: 0.2s;
  cursor: ${e=>e.isDisabled?"default":"pointer"};
  &:after {
    content: '';
    position: absolute;
    top: ${e=>Mi[e.switchSize].knobOffset}px;
    left: ${e=>Mi[e.switchSize].knobOffset}px;
    width: ${e=>Ri(e)}px;
    height: ${e=>Ri(e)}px;
    border-radius: var(--lns-radius-full);
    transition: 0.15s;
    background-color: ${e=>e.isDisabled?_i.knob.active.disabled:_i.knob.active.enabled};
  }
`,$.div`
  ${e=>Je(e.size)};
  color: transparent;
  position: relative;
  &::after {
    content '';
    position: absolute;
    background-color: var(--lns-color-disabledBackground);
    border-radius: var(--lns-radius-full);
    width: 100%;
    display: block;
    height: 71.45%;
    top: .2em;
  }
  ${e=>e.lines>1&&"\n      &:nth-of-type(3n+1) {\n        width: calc(100% - 2.25rem);\n      }\n      &:nth-of-type(3n) {\n        width: calc(100% - 4.125rem);\n      }\n    }\n  "};
`,e=>r.createElement("defs",null,r.createElement("radialGradient",{id:`ai-logo-${e}-gradient-1`,cx:"50%",cy:"50%",r:"100%",fx:"0%",fy:"0%"},r.createElement("stop",{offset:"30%",stopColor:"#97ACFD"}),r.createElement("stop",{offset:"33%",stopColor:"#B3B2F4"}),r.createElement("stop",{offset:"43%",stopColor:"#DEB0E0"}),r.createElement("stop",{offset:"50%",stopColor:"#DFC6E5"}),r.createElement("stop",{offset:"72%",stopColor:"#6663F6"})),r.createElement("radialGradient",{id:`ai-logo-${e}-gradient-2`,r:"100%",fx:"40%",fy:"72%"},r.createElement("stop",{offset:"20%",stopColor:"#615CF500"}),r.createElement("stop",{offset:"32%",stopColor:"#615CF550"}),r.createElement("stop",{offset:"48%",stopColor:"#6663F6"})),r.createElement("radialGradient",{id:`ai-logo-${e}-gradient-3`,r:"100%",fx:"0%",fy:"100%"},r.createElement("stop",{offset:"25%",stopColor:"#6663F6"}),r.createElement("stop",{offset:"38%",stopColor:"#6E68F450"}),r.createElement("stop",{offset:"45%",stopColor:"#6E68F400"})))),wi="M30 15.4433C30 16.6091 29.0933 16.8581 27.9562 16.9301C22.5158 17.2323 16.7962 22.686 16.4795 28.112C16.422 29.2634 16.173 30.1702 15.0072 30.1702C13.8414 30.1702 13.578 29.2634 13.5205 28.0976C13.2038 22.686 7.48416 17.2323 2.05814 16.9301C0.906735 16.8581 0 16.6091 0 15.4433C0 14.2775 0.906735 14.043 2.05814 13.971C7.48416 13.6687 13.2038 7.65433 13.5205 2.22831C13.578 1.0769 13.827 0.170166 15.0072 0.170166C16.1874 0.170166 16.422 1.0769 16.4795 2.22831C16.7962 7.65433 22.5158 13.6687 27.9419 13.971C29.0933 14.043 30 14.2919 30 15.4433Z",Pi=e=>{var t=e,{brand:i,symbolColor:n,customId:a,title:o}=t,s=Pe(t,["brand","symbolColor","customId","title"]);return"ai"===i?r.createElement("svg",Oe({viewBox:"0 0 30 31",fill:"none"},s),o&&r.createElement("title",null,o),n?r.createElement("path",{d:wi,fill:Be(n)}):r.createElement(r.Fragment,null,Oi(a),[...Array(3)].map(((e,t)=>r.createElement("path",{key:t,d:wi,fill:`url(#ai-logo-${a}-gradient-${t+1}`}))))):r.createElement("svg",Oe({viewBox:"0 0 31 30",fill:"none"},s),o&&r.createElement("title",null,o),r.createElement("path",{d:"M30.01 13.43h-9.142l7.917-4.57-1.57-2.72-7.918 4.57 4.57-7.915-2.72-1.57-4.571 7.913V0h-3.142v9.139L8.863 1.225l-2.721 1.57 4.57 7.913L2.796 6.14 1.225 8.86l7.917 4.57H0v3.141h9.141l-7.916 4.57 1.57 2.72 7.918-4.57-4.571 7.915 2.72 1.57 4.572-7.914V30h3.142v-9.334l4.655 8.06 2.551-1.472-4.656-8.062 8.087 4.668 1.571-2.72-7.916-4.57h9.141v-3.14h.001zm-15.005 5.84a4.271 4.271 0 11-.001-8.542 4.271 4.271 0 01.001 8.542z",fill:Be(n||"primary")}))},ji=e=>{var t=e,{brand:i,wordmarkColor:n,title:a}=t,o=Pe(t,["brand","wordmarkColor","title"]);return"ai"===i?r.createElement("svg",Oe({viewBox:"0 0 94 23",fill:n},o),a&&r.createElement("title",null,a),r.createElement("path",{d:"M4.12637 22.4624H0V0H4.12637V22.4624Z"}),r.createElement("path",{d:"M13.3999 19.1737C15.4166 19.1737 17.2781 17.7155 17.2781 14.8301C17.2781 11.9448 15.4166 10.4866 13.3999 10.4866C11.3833 10.4866 9.52175 11.9448 9.52175 14.8301C9.52175 17.6845 11.3833 19.1737 13.3999 19.1737ZM13.3999 6.7325C17.9606 6.7325 21.4045 10.1143 21.4045 14.8301C21.4045 19.515 17.9606 22.9277 13.3999 22.9277C8.83919 22.9277 5.39538 19.515 5.39538 14.8301C5.39538 10.1143 8.83919 6.7325 13.3999 6.7325Z"}),r.createElement("path",{d:"M29.7548 19.1737C31.7714 19.1737 33.6329 17.7155 33.6329 14.8301C33.6329 11.9448 31.7714 10.4866 29.7548 10.4866C27.7381 10.4866 25.8766 11.9448 25.8766 14.8301C25.8766 17.6845 27.7381 19.1737 29.7548 19.1737ZM29.7548 6.7325C34.3155 6.7325 37.7593 10.1143 37.7593 14.8301C37.7593 19.515 34.3155 22.9277 29.7548 22.9277C25.194 22.9277 21.7502 19.515 21.7502 14.8301C21.7502 10.1143 25.194 6.7325 29.7548 6.7325Z"}),r.createElement("path",{d:"M43.1622 22.4624H39.0358V7.19788H42.976V9.05941C43.8137 7.57019 45.7683 6.76353 47.4437 6.76353C49.5224 6.76353 51.1978 7.66326 51.9734 9.30761C53.1834 7.44609 54.7967 6.76353 56.8134 6.76353C59.6367 6.76353 62.3359 8.46992 62.3359 12.5653V22.4624H58.3336V13.403C58.3336 11.7586 57.5269 10.5176 55.6344 10.5176C53.8659 10.5176 52.8111 11.8827 52.8111 13.5271V22.4624H48.7157V13.403C48.7157 11.7586 47.878 10.5176 46.0165 10.5176C44.2171 10.5176 43.1622 11.8517 43.1622 13.5271V22.4624Z"}),r.createElement("path",{d:"M84.1324 22.4624L82.3019 17.4363H73.3666L71.5361 22.4624H67.0064L75.4453 0.46538H80.4093L88.7862 22.4624H84.1324ZM77.8342 5.21226L74.7937 13.5271H80.8747L77.8342 5.21226Z"}),r.createElement("path",{d:"M94 22.4624H89.6565V0.46538H94V22.4624Z"})):r.createElement("svg",Oe({viewBox:"0 0 62 23",fill:n},o),a&&r.createElement("title",null,a),r.createElement("path",{d:"M.109 21.973V.027h4.028v21.946H.109zM38.742 7.059h3.846v1.82c.818-1.456 2.727-2.244 4.362-2.244 2.03 0 3.665.88 4.422 2.485 1.18-1.82 2.756-2.485 4.725-2.485 2.756 0 5.39 1.667 5.39 5.668v9.67h-3.906v-8.851c0-1.607-.788-2.82-2.636-2.82-1.727 0-2.757 1.335-2.757 2.942v8.73h-3.997v-8.852c0-1.607-.817-2.82-2.635-2.82-1.757 0-2.787 1.305-2.787 2.942v8.73h-4.027V7.059zM13.24 22.405c-4.537 0-7.824-3.367-7.824-7.889 0-4.45 3.276-7.896 7.824-7.896 4.57 0 7.824 3.478 7.824 7.896 0 4.49-3.288 7.889-7.824 7.889zm0-12.135a4.25 4.25 0 00-4.244 4.247 4.25 4.25 0 004.244 4.247 4.25 4.25 0 004.243-4.247 4.25 4.25 0 00-4.243-4.247zM29.667 22.405c-4.538 0-7.824-3.367-7.824-7.889 0-4.45 3.276-7.896 7.824-7.896 4.57 0 7.824 3.478 7.824 7.896 0 4.49-3.29 7.889-7.824 7.889zm0-12.186a4.3 4.3 0 00-4.293 4.296 4.3 4.3 0 004.293 4.296 4.3 4.3 0 004.293-4.296 4.3 4.3 0 00-4.293-4.296z"}))},zi="M100 7.76427C100 8.35691 99.539 8.48348 98.961 8.52007C96.1953 8.67371 93.2877 11.4461 93.1267 14.2045C93.0975 14.7898 92.9709 15.2508 92.3783 15.2508C91.7856 15.2508 91.6517 14.7898 91.6225 14.1972C91.4615 11.4461 88.5539 8.67371 85.7955 8.52007C85.2102 8.48348 84.7492 8.35691 84.7492 7.76427C84.7492 7.17162 85.2102 7.05237 85.7955 7.01578C88.5539 6.86213 91.4615 3.80464 91.6225 1.04628C91.6517 0.460948 91.7783 0 92.3783 0C92.9782 0 93.0975 0.460948 93.1267 1.04628C93.2877 3.80464 96.1953 6.86213 98.9537 7.01578C99.539 7.05237 100 7.17894 100 7.76427Z",xi=e=>{var t=e,{brand:i,wordmarkColor:n,symbolColor:a,customId:o,title:s}=t,u=Pe(t,["brand","wordmarkColor","symbolColor","customId","title"]);return"ai"===i?r.createElement("svg",Oe({viewBox:"0 0 100 30",fill:"none"},u),s&&r.createElement("title",null,s),a?r.createElement("path",{d:zi,fill:Be(a)}):r.createElement(r.Fragment,null,Oi(o),[...Array(3)].map(((e,t)=>r.createElement("path",{key:t,d:zi,fill:`url(#ai-logo-${o}-gradient-${t+1}`})))),r.createElement("g",{fill:n},r.createElement("path",{d:"M4.1997 29.5909H0.570312V9.83386H4.1997V29.5909Z"}),r.createElement("path",{d:"M12.3563 26.6983C14.1301 26.6983 15.7674 25.4157 15.7674 22.8778C15.7674 20.34 14.1301 19.0574 12.3563 19.0574C10.5826 19.0574 8.94526 20.34 8.94526 22.8778C8.94526 25.3884 10.5826 26.6983 12.3563 26.6983ZM12.3563 15.7555C16.3678 15.7555 19.3968 18.73 19.3968 22.8778C19.3968 26.9984 16.3678 30.0002 12.3563 30.0002C8.34491 30.0002 5.31587 26.9984 5.31587 22.8778C5.31587 18.73 8.34491 15.7555 12.3563 15.7555Z"}),r.createElement("path",{d:"M26.7414 26.6983C28.5152 26.6983 30.1525 25.4157 30.1525 22.8778C30.1525 20.34 28.5152 19.0574 26.7414 19.0574C24.9676 19.0574 23.3303 20.34 23.3303 22.8778C23.3303 25.3884 24.9676 26.6983 26.7414 26.6983ZM26.7414 15.7555C30.7528 15.7555 33.7819 18.73 33.7819 22.8778C33.7819 26.9984 30.7528 30.0002 26.7414 30.0002C22.73 30.0002 19.7009 26.9984 19.7009 22.8778C19.7009 18.73 22.73 15.7555 26.7414 15.7555Z"}),r.createElement("path",{d:"M38.534 29.5909H34.9047V16.1648H38.3703V17.8022C39.1071 16.4923 40.8263 15.7828 42.2999 15.7828C44.1282 15.7828 45.6018 16.5742 46.284 18.0205C47.3483 16.3831 48.7673 15.7828 50.5411 15.7828C53.0243 15.7828 55.3984 17.2837 55.3984 20.8858V29.5909H51.8782V21.6226C51.8782 20.1763 51.1687 19.0847 49.5041 19.0847C47.9486 19.0847 47.0208 20.2854 47.0208 21.7317V29.5909H43.4187V21.6226C43.4187 20.1763 42.6819 19.0847 41.0446 19.0847C39.4619 19.0847 38.534 20.2581 38.534 21.7317V29.5909Z"}),r.createElement("path",{d:"M74.5698 29.5909L72.9598 25.1701H65.1006L63.4906 29.5909H59.5064L66.929 10.2432H71.2951L78.6631 29.5909H74.5698ZM69.0302 14.4184L66.3559 21.7317H71.7045L69.0302 14.4184Z"}),r.createElement("path",{d:"M83.249 29.5909H79.4285V10.2432H83.249V29.5909Z"}))):r.createElement("svg",Oe({viewBox:"0 0 100 30",fill:"none"},u),s&&r.createElement("title",null,s),r.createElement("path",{d:"M30.01 13.43h-9.142l7.917-4.57-1.57-2.72-7.918 4.57 4.57-7.915-2.72-1.57-4.571 7.913V0h-3.142v9.139L8.863 1.225l-2.721 1.57 4.57 7.913L2.796 6.14 1.225 8.86l7.917 4.57H0v3.141h9.141l-7.916 4.57 1.57 2.72 7.918-4.57-4.571 7.915 2.72 1.57 4.572-7.914V30h3.142v-9.334l4.655 8.06 2.551-1.472-4.656-8.062 8.087 4.668 1.571-2.72-7.916-4.57h9.141v-3.14h.001zm-15.005 5.84a4.271 4.271 0 11-.001-8.542 4.271 4.271 0 01.001 8.542z",fill:Be(a||"primary")}),r.createElement("path",{d:"M38.109 25.973V4.027h4.028v21.946h-4.028zM76.742 11.059h3.846v1.82c.818-1.455 2.727-2.244 4.362-2.244 2.03 0 3.665.88 4.422 2.485 1.18-1.82 2.756-2.485 4.725-2.485 2.756 0 5.39 1.667 5.39 5.668v9.67h-3.906v-8.851c0-1.607-.788-2.82-2.636-2.82-1.727 0-2.757 1.335-2.757 2.942v8.73h-3.996v-8.852c0-1.607-.818-2.82-2.636-2.82-1.757 0-2.787 1.305-2.787 2.942v8.73h-4.027V11.059zM51.24 26.405c-4.538 0-7.824-3.367-7.824-7.889 0-4.45 3.276-7.896 7.824-7.896 4.57 0 7.824 3.478 7.824 7.896 0 4.49-3.288 7.889-7.824 7.889zm0-12.135a4.25 4.25 0 00-4.244 4.247 4.25 4.25 0 004.244 4.247 4.25 4.25 0 004.243-4.247 4.25 4.25 0 00-4.243-4.247zM67.667 26.405c-4.538 0-7.824-3.367-7.824-7.889 0-4.45 3.276-7.896 7.824-7.896 4.57 0 7.824 3.478 7.824 7.896 0 4.49-3.29 7.889-7.824 7.889zm0-12.186a4.3 4.3 0 00-4.293 4.296 4.3 4.3 0 004.293 4.296 4.3 4.3 0 004.293-4.296 4.3 4.3 0 00-4.293-4.296z",fill:n}))},Ii=$.span`
  display: block;
  ${e=>e.maxWidth&&We("max-width",e.maxWidth)};

  & > svg.lns-logoSvg {
    display: block;
    width: 100%;
    height: 100%;
    ${e=>e.maxWidth&&We("max-width",e.maxWidth)};
  }
`,Ei=e=>{var t=e,{variant:i="combined",maxWidth:n,symbolColor:a,wordmarkColor:o="body",brand:s="loom",customId:u="",title:c=""}=t,p=Pe(t,["variant","maxWidth","symbolColor","wordmarkColor","brand","customId","title"]);return r.createElement(Ii,Oe({variant:i,maxWidth:n},p),"combined"===i&&r.createElement(xi,{brand:s,symbolColor:a,wordmarkColor:Be(o),customId:u,className:"lns-logoSvg",title:c}),"symbol"===i&&r.createElement(Pi,{brand:s,symbolColor:a,customId:u,className:"lns-logoSvg",title:c}),"wordmark"===i&&r.createElement(ji,{brand:s,wordmarkColor:Be(o),className:"lns-logoSvg",title:c}))},Ni={small:"40px",medium:"80px"},ki=($.span`
  animation: ${e=>e.animation};
  background-image: url(${"https://cdn.loom.com/assets/lens"}/${e=>e.brand}-loader.svg);
  background-size: cover;
  background-position: left center;
  display: block;
  height: ${e=>Ni[e.size]};
  width: ${e=>Ni[e.size]};

  @keyframes spin {
    100% {
      background-position: right center;
    }
  }
`,$.label`
  display: block;
  position: relative;

  .RadioBox:after {
    background-color: transparent;
  }
`),Di=$.input`
  position: absolute;
  opacity: 0;

  &:not(:disabled) {
    cursor: pointer;

    & ~ .RadioBox {
      border: 2px solid ${Be("body")};
    }

    &:checked ~ .RadioBox {
      border: 2px solid ${Be("body")};
    }
  }

  &:disabled,
  &:disabled ~ .RadioBox {
    pointer-events: none;
  }

  &:disabled ~ .RadioBox {
    background-color: ${Be("disabledBackground")};
  }

  &:checked {
    & ~ .RadioBox:after {
      background-color: ${Be("blurple")};
    }

    &:disabled ~ .RadioBox:after {
      background-color: ${Be("disabledContent")};
    }
  }

  &:focus-visible ~ .RadioBox {
    ${it()};
  }
`,Ui=$.span`
  cursor: pointer;
  width: ${Fe(2.25)};
  height: ${Fe(2.25)};
  ${et("full")};
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  &:after {
    content: '';
    width: ${Fe(1)};
    height: ${Fe(1)};
    ${et("full")};
    background-color: ${Be("white")};
  }
`,Li=((0,r.forwardRef)(((e,t)=>{var i=e,{isDisabled:n,isChecked:a,onFocus:o,onChange:s,onBlur:u}=i,c=Pe(i,["isDisabled","isChecked","onFocus","onChange","onBlur"]);return r.createElement(ki,null,r.createElement(Di,Oe({type:"radio",disabled:n,checked:a,onFocus:o,onChange:s,onBlur:u,ref:t},c)),r.createElement(Ui,{className:"RadioBox"}))})),"/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */"),qi={border:x`
    .ListRowWrapper:last-child {
      border-bottom: 1px solid ${Be("border")};
    }

    .ListRowWrapper,
    .ListRowWrapper:first-child ${Li} {
      border-top: 1px solid ${Be("border")};
    }
  `,stripe:x`
    .ListRowWrapper {
      &:nth-child(odd) ${Li} {
        background-color: ${Be("backgroundSecondary")};
      }
    }

    .ListRowWrapper {
      ${et("medium")};
    }
  `,clear:x``},Bi=($.div`
  .ListRowWrapper {
    grid-template-columns: ${e=>e.columns&&e.columns};
    ${e=>We("gap",e.gap)};
  }

  ${e=>qi[e.variant]};
`,$.div`
  display: grid;
  align-items: center;
  text-decoration: none;
  color: inherit;

  ${e=>We("height",e.height)};
  ${e=>We("min-height",e.minHeight)};
  ${e=>We("max-height",e.maxHeight)};
  ${e=>We("padding",e.padding)};
  ${e=>We("padding-top",e.paddingTop)};
  ${e=>We("padding-bottom",e.paddingBottom)};
  ${e=>We("padding-left",e.paddingLeft)};
  ${e=>We("padding-right",e.paddingRight)};

  ${e=>e.paddingY&&`\n    ${We("padding-top",e.paddingY)}\n    ${We("padding-bottom",e.paddingY)}\n    `};

  ${e=>e.paddingX&&`\n    ${We("padding-left",e.paddingX)}\n    ${We("padding-right",e.paddingX)}\n    `};

  ${e=>(e.onClick||e.href)&&"cursor: pointer;"};

  &.ListRowWrapper:nth-child(even),
  &.ListRowWrapper:nth-child(odd) ${Li} {
    ${e=>e.backgroundColor&&`background-color: ${Be(e.backgroundColor)}`};

    &:hover {
      ${e=>(e.onClick||e.href)&&`\n      background-color: ${Be("backgroundHover")};\n      border-color: transparent;\n      ${et("medium")};\n    `};
    }
  }
`,r.createContext({}),$.div`
  ${e=>{return e.scrollOffset&&`margin: 0 ${t=e.scrollOffset,`calc(-1 * ${He(t)})`};\n  `;var t}};
`,$.nav`
  --activeIndicatorHeight: 3px;

  display: flex;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ${e=>e.scrollOffset&&We("padding-left",e.scrollOffset)};

  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    ${e=>e.hasFullTabs&&"flex: 1 0"};
  }

  & > * + * {
    margin-left: ${Fe(2)};
  }

  &:after {
    content: '';
    flex-shrink: 0;
    ${e=>e.scrollOffset&&We("width",e.scrollOffset)};
  }
`,$.nav`
  ${et("full")};
  background-color: var(--lns-color-backgroundSecondary);

  padding: var(--lns-space-xsmall);

  display: flex;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ${e=>e.scrollOffset&&We("padding-left",e.scrollOffset)};

  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    flex: 1 0;
  }

  & > * + * {
    margin-left: ${Fe(2)};
  }

  &:after {
    content: '';
    flex-shrink: 0;
    ${e=>e.scrollOffset&&We("width",e.scrollOffset)};
  }
`,$.button`
  appearance: none;
  font: inherit;
  background: transparent;
  border: none;
  ${et("medium")};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  padding: 0 0 calc(var(--lns-space-small) + var(--activeIndicatorHeight)) 0;
  position: relative;
  color: inherit;
  text-decoration: none;
  flex-shrink: 0;
  ${tt("bold")};
  transition: 0.6s color;
  white-space: nowrap;
  color: ${e=>Be(e.isActive?"body":"bodyDimmed")};
  ${e=>e.isActive&&`border-color: ${Be("primary")};\n  `};

  &:focus,
  &:focus-visible {
    outline: 1px solid transparent;
  }

  &:focus-visible {
    ${it(void 0,"inset")};
  }

  &:hover {
    color: ${Be("body")};
    transition: 0.3s color;
  }

  &::after {
    bottom: 0;
    ${et("medium")};
    content: '';
    height: var(--activeIndicatorHeight);
    position: absolute;
    width: 100%;
    ${e=>e.isActive&&`background-color: ${Be("primary")}`};
  }
`,$.button`
  padding: ${Fe(1)} 0;

  appearance: none;
  font: inherit;
  background: transparent;
  border: none;
  ${et("full")};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  position: relative;
  color: inherit;
  text-decoration: none;
  flex-shrink: 0;
  ${tt("bold")};

  transition: 0.6s color;
  white-space: nowrap;
  ${e=>e.isActive&&`background-color: ${Be("background")};\n    color: ${Be("primary")};\n  `};

  &:focus,
  &:focus-visible {
    outline: 1px solid transparent;
  }

  &:focus-visible {
    ${it(void 0,"inset")};
  }

  &:hover {
    color: ${Be("primary")};
    transition: 0.3s color;
  }
`,$.div`
  display: inline-grid;
  grid-auto-flow: column;
  align-items: center;
  vertical-align: middle;
  padding: 0 ${Fe(1.5)};
  min-height: ${Fe(3.25)};
  color: ${e=>Be(e.color)};
  background-color: ${e=>Be(e.backgroundColor)};
  ${et("full")};
  ${Je("small")};
  ${tt("bold")};
  ${We("gap","xsmall")};
`,$.div`
  position: relative;
  width: fit-content;
  // transform forces the popover to calculate the position from the trigger instead of the viewport
  transform: translate(0);
  z-index: 1;
`,$.div`
  ${e=>e.zIndex&&`z-index: ${e.zIndex}`};
`,$.span`
  display: block;
  color: ${e=>e.color?Be(e.color):Be("grey8")};
  ${e=>e.size&&We("width",e.size)};
  ${e=>e.size&&We("height",e.size)};

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`,e=>x`
  ${We("width",e.width)};
  ${We("height",e.height)};
  ${We("min-width",e.minWidth)};
  ${We("min-height",e.minHeight)};
  ${We("max-width",e.maxWidth)};
  ${We("max-height",e.maxHeight)};
`);$.div`
  display: flex;
  ${e=>Ve("align-items",e.alignItems)};
  ${e=>e.justifyContent&&Ve("justify-content",e.justifyContent)};
  ${e=>e.alignContent&&Ve("align-content",e.alignContent)};
  ${e=>Ve("flex-wrap",e.wrap)};
  ${e=>e.direction&&Ve("flex-direction",e.direction)};
  ${e=>e.gap&&We("--gap",e.gap)};
  margin-right: calc(-1 * var(--gap));
  margin-bottom: calc(-1 * var(--gap));
  ${e=>Bi(e)};
`,$.div`
  ${e=>Ze("flex-grow",e.grow)};
  ${e=>Ze("flex-shrink",e.shrink)};
  ${e=>e.basis&&We("flex-basis",e.basis)};
  margin-right: var(--gap);
  margin-bottom: var(--gap);
  ${e=>Bi(e)};
`,$.div`
  padding: var(--lns-space-medium);
  & .react-colorful {
    width: auto;
    height: auto;
  }
  & .react-colorful__saturation {
    height: ${Fe(14)};
    border-bottom: none;
    box-shadow: inset 0 0 0 1px var(--lns-color-border);
    border-radius: var(--lns-radius-medium);
    margin-bottom: var(--lns-space-small);
  }

  & .react-colorful__hue {
    height: ${Fe(2)};
    width: 100%;
    box-shadow: inset 0 0 0 1px var(--lns-color-border);
    border-radius: 3px;
    margin-bottom: var(--lns-space-medium);
  }

  & .react-colorful__saturation-pointer {
    width: ${Fe(1)};
    height: ${Fe(1)};
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 0 0 3px var(--lns-color-border);
    border-radius: var(--lns-radius-medium);
  }
  & .react-colorful__hue-pointer {
    width: ${Fe(1)};
    height: ${Fe(2.5)};
    border-radius: 2px;
    box-shadow: 0 0 0 2px var(--lns-color-border);
    cursor: pointer;
    border: 2px solid white;
  }
`,$.div`
  position: relative;
  width: ${Fe(31)};
  background-color: var(--lns-color-overlay);
  border-radius: var(--lns-radius-medium);
  box-shadow: 0 0 0 1px var(--lns-color-border), var(--lns-shadow-medium);
`,$.div`
  position: relative;
  width: 100%;

  input {
    padding: 0 0 0 ${Fe(4)};
    height: ${Fe(4)};
    width: 100%;
    font: inherit;
    font-size: var(--lns-fontSize-small);
    border: none;
    box-shadow: inset 0 0 0 var(--lns-formFieldBorderWidth)
      var(--lns-color-formFieldBorder);
    border-radius: var(--lns-formFieldRadius);
    transition: 0.3s box-shadow;
    background-color: var(--lns-color-overlay);
    color: var(--lns-color-body);

    &:hover {
      box-shadow: inset 0 0 0 var(--lns-formFieldBorderWidthFocus)
        var(--lns-color-blurple);
    }

    &:focus {
      outline: 1px solid transparent;
      box-shadow: var(--lns-formFieldBorderShadowFocus);
    }
  }
`,$.div`
  position: absolute;
  width: ${Fe(3)};
  height: ${Fe(3)};
  left: var(--lns-space-xsmall);
  top: var(--lns-space-xsmall);
  border: 1px solid rgba(0, 0, 0, 0.1);
  ${et("full")};
  background-color: ${e=>e.color};
`,$.div`
  position: relative;
  border-radius: var(--lns-radius-medium);
  padding: 0 var(--lns-space-medium) var(--lns-space-medium)
    var(--lns-space-medium);
`,$.div`
  display: grid;
  grid-template-columns: repeat(7, ${Fe(3)});
  gap: ${Fe(1)} ${Fe(1)};
  border-bottom: 1px solid var(--lns-color-border);
  padding: var(--lns-space-medium);
`,$.div`
  cursor: pointer;
  width: ${Fe(3)};
  height: ${Fe(3)};
  border-radius: 2px;
  background-color: ${e=>e.color};
  border: ${e=>e.selected===e.color?"1px solid white":"1px solid var(--lns-color-border)"};
  box-shadow: ${e=>e.selected===e.color&&"0 0 0 2px var(--lns-color-focusRing)"};
`;const Fi=`\n@font-face {\n  font-weight: 400;\n  font-style:  normal;\n  font-family: circular;\n\n  src: url('chrome-extension://${chrome.runtime.id}/fonts/CircularXXWeb-Book.woff2') format('woff2');\n}\n\n@font-face {\n  font-weight: 700;\n  font-style:  normal;\n  font-family: circular;\n\n  src: url('chrome-extension://${chrome.runtime.id}/fonts/CircularXXWeb-Bold.woff2') format('woff2');\n}`;var Hi=()=>((()=>{const e=document.createElement("style");e.type="text/css",e.textContent=Fi,document.head.appendChild(e)})(),r.createElement(Vt,null)),Wi=r.createContext(null),Gi=function(e){e()},Ki=function(){return Gi},$i={notify:function(){},get:function(){return[]}};function Vi(e,t){var r,i=$i;function n(){o.onStateChange&&o.onStateChange()}function a(){r||(r=t?t.addNestedSub(n):e.subscribe(n),i=function(){var e=Ki(),t=null,r=null;return{clear:function(){t=null,r=null},notify:function(){e((function(){for(var e=t;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],r=t;r;)e.push(r),r=r.next;return e},subscribe:function(e){var i=!0,n=r={callback:e,next:null,prev:r};return n.prev?n.prev.next=n:t=n,function(){i&&null!==t&&(i=!1,n.next?n.next.prev=n.prev:r=n.prev,n.prev?n.prev.next=n.next:t=n.next)}}}}())}var o={addNestedSub:function(e){return a(),i.subscribe(e)},notifyNestedSubs:function(){i.notify()},handleChangeWrapper:n,isSubscribed:function(){return Boolean(r)},trySubscribe:a,tryUnsubscribe:function(){r&&(r(),r=void 0,i.clear(),i=$i)},getListeners:function(){return i}};return o}var Qi="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect,Zi=function(e){var t=e.store,i=e.context,n=e.children,a=(0,r.useMemo)((function(){var e=Vi(t);return{store:t,subscription:e}}),[t]),o=(0,r.useMemo)((function(){return t.getState()}),[t]);Qi((function(){var e=a.subscription;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),o!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[a,o]);var s=i||Wi;return r.createElement(s.Provider,{value:a},n)};function Yi(){return(0,r.useContext)(Wi)}function Xi(e){void 0===e&&(e=Wi);var t=e===Wi?Yi:function(){return(0,r.useContext)(e)};return function(){return t().store}}n(13266),n(58555),n(55246);var Ji=Xi();function en(e){void 0===e&&(e=Wi);var t=e===Wi?Ji:Xi(e);return function(){return t().dispatch}}var tn=en(),rn=function(e,t){return e===t};function nn(e){void 0===e&&(e=Wi);var t=e===Wi?Yi:function(){return(0,r.useContext)(e)};return function(e,i){void 0===i&&(i=rn);var n=t(),a=function(e,t,i,n){var a,o=(0,r.useReducer)((function(e){return e+1}),0),s=o[1],u=(0,r.useMemo)((function(){return Vi(i,n)}),[i,n]),c=(0,r.useRef)(),p=(0,r.useRef)(),l=(0,r.useRef)(),d=(0,r.useRef)(),y=i.getState();try{if(e!==p.current||y!==l.current||c.current){var b=e(y);a=void 0!==d.current&&t(b,d.current)?d.current:b}else a=d.current}catch(e){throw c.current&&(e.message+="\nThe error may be correlated with this previous error:\n"+c.current.stack+"\n\n"),e}return Qi((function(){p.current=e,l.current=y,d.current=a,c.current=void 0})),Qi((function(){function e(){try{var e=i.getState();if(e===l.current)return;var r=p.current(e);if(t(r,d.current))return;d.current=r,l.current=e}catch(e){c.current=e}s()}return u.onStateChange=e,u.trySubscribe(),e(),function(){return u.tryUnsubscribe()}}),[i,u]),a}(e,i,n.store,n.subscription);return(0,r.useDebugValue)(a),a}}var an,on=nn();an=i.unstable_batchedUpdates,Gi=an;const sn="Companion Preview Modal Closed",un="companion-beam-button",cn="viewer";function pn(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}n(55246),"function"==typeof Symbol&&Symbol.observable;var ln=function(){return Math.random().toString(36).substring(7).split("").join(".")},dn={INIT:"@@redux/INIT"+ln(),REPLACE:"@@redux/REPLACE"+ln(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+ln()}};function yn(e){for(var t=arguments.length,r=Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.map((function(e){return"'"+e+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function bn(e){return!!e&&!!e[ea]}function hn(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===ta}(e)||Array.isArray(e)||!!e[Jn]||!!e.constructor[Jn]||An(e)||Cn(e))}function gn(e,t,r){void 0===r&&(r=!1),0===fn(e)?(r?Object.keys:ra)(e).forEach((function(i){r&&"symbol"==typeof i||t(i,e[i],e)})):e.forEach((function(r,i){return t(i,r,e)}))}function fn(e){var t=e[ea];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:An(e)?2:Cn(e)?3:0}function mn(e,t){return 2===fn(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Sn(e,t,r){var i=fn(e);2===i?e.set(t,r):3===i?(e.delete(t),e.add(r)):e[t]=r}function vn(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function An(e){return Qn&&e instanceof Map}function Cn(e){return Zn&&e instanceof Set}function Tn(e){return e.o||e.t}function Mn(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=ia(e);delete t[ea];for(var r=ra(t),i=0;i<r.length;i++){var n=r[i],a=t[n];!1===a.writable&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[n]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[n]})}return Object.create(Object.getPrototypeOf(e),t)}function _n(e,t){return void 0===t&&(t=!1),On(e)||bn(e)||!hn(e)||(fn(e)>1&&(e.set=e.add=e.clear=e.delete=Rn),Object.freeze(e),t&&gn(e,(function(e,t){return _n(t,!0)}),!0)),e}function Rn(){yn(2)}function On(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function wn(e){var t=na[e];return t||yn(18,e),t}function Pn(){return $n}function jn(e,t){t&&(wn("Patches"),e.u=[],e.s=[],e.v=t)}function zn(e){xn(e),e.p.forEach(En),e.p=null}function xn(e){e===$n&&($n=e.l)}function In(e){return $n={p:[],l:$n,h:e,m:!0,_:0}}function En(e){var t=e[ea];0===t.i||1===t.i?t.j():t.O=!0}function Nn(e,t){t._=t.p.length;var r=t.p[0],i=void 0!==e&&e!==r;return t.h.g||wn("ES5").S(t,e,i),i?(r[ea].P&&(zn(t),yn(4)),hn(e)&&(e=kn(t,e),t.l||Un(t,e)),t.u&&wn("Patches").M(r[ea].t,e,t.u,t.s)):e=kn(t,r,[]),zn(t),t.u&&t.v(t.u,t.s),e!==Xn?e:void 0}function kn(e,t,r){if(On(t))return t;var i=t[ea];if(!i)return gn(t,(function(n,a){return Dn(e,i,t,n,a,r)}),!0),t;if(i.A!==e)return t;if(!i.P)return Un(e,i.t,!0),i.t;if(!i.I){i.I=!0,i.A._--;var n=4===i.i||5===i.i?i.o=Mn(i.k):i.o;gn(3===i.i?new Set(n):n,(function(t,a){return Dn(e,i,n,t,a,r)})),Un(e,n,!1),r&&e.u&&wn("Patches").R(i,r,e.u,e.s)}return i.o}function Dn(e,t,r,i,n,a){if(bn(n)){var o=kn(e,n,a&&t&&3!==t.i&&!mn(t.D,i)?a.concat(i):void 0);if(Sn(r,i,o),!bn(o))return;e.m=!1}if(hn(n)&&!On(n)){if(!e.h.F&&e._<1)return;kn(e,n),t&&t.A.l||Un(e,n)}}function Un(e,t,r){void 0===r&&(r=!1),e.h.F&&e.m&&_n(t,r)}function Ln(e,t){var r=e[ea];return(r?Tn(r):e)[t]}function qn(e,t){if(t in e)for(var r=Object.getPrototypeOf(e);r;){var i=Object.getOwnPropertyDescriptor(r,t);if(i)return i;r=Object.getPrototypeOf(r)}}function Bn(e){e.P||(e.P=!0,e.l&&Bn(e.l))}function Fn(e){e.o||(e.o=Mn(e.t))}function Hn(e,t,r){var i=An(t)?wn("MapSet").N(t,r):Cn(t)?wn("MapSet").T(t,r):e.g?function(e,t){var r=Array.isArray(e),i={i:r?1:0,A:t?t.A:Pn(),P:!1,I:!1,D:{},l:t,t:e,k:null,o:null,j:null,C:!1},n=i,a=aa;r&&(n=[i],a=oa);var o=Proxy.revocable(n,a),s=o.revoke,u=o.proxy;return i.k=u,i.j=s,u}(t,r):wn("ES5").J(t,r);return(r?r.A:Pn()).p.push(i),i}function Wn(e){return bn(e)||yn(22,e),function e(t){if(!hn(t))return t;var r,i=t[ea],n=fn(t);if(i){if(!i.P&&(i.i<4||!wn("ES5").K(i)))return i.t;i.I=!0,r=Gn(t,n),i.I=!1}else r=Gn(t,n);return gn(r,(function(t,n){i&&function(e,t){return 2===fn(e)?e.get(t):e[t]}(i.t,t)===n||Sn(r,t,e(n))})),3===n?new Set(r):r}(e)}function Gn(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Mn(e)}var Kn,$n,Vn="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),Qn="undefined"!=typeof Map,Zn="undefined"!=typeof Set,Yn="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,Xn=Vn?Symbol.for("immer-nothing"):((Kn={})["immer-nothing"]=!0,Kn),Jn=Vn?Symbol.for("immer-draftable"):"__$immer_draftable",ea=Vn?Symbol.for("immer-state"):"__$immer_state",ta=("undefined"!=typeof Symbol&&Symbol.iterator,""+Object.prototype.constructor),ra="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,ia=Object.getOwnPropertyDescriptors||function(e){var t={};return ra(e).forEach((function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)})),t},na={},aa={get:function(e,t){if(t===ea)return e;var r=Tn(e);if(!mn(r,t))return function(e,t,r){var i,n=qn(t,r);return n?"value"in n?n.value:null===(i=n.get)||void 0===i?void 0:i.call(e.k):void 0}(e,r,t);var i=r[t];return e.I||!hn(i)?i:i===Ln(e.t,t)?(Fn(e),e.o[t]=Hn(e.A.h,i,e)):i},has:function(e,t){return t in Tn(e)},ownKeys:function(e){return Reflect.ownKeys(Tn(e))},set:function(e,t,r){var i=qn(Tn(e),t);if(null==i?void 0:i.set)return i.set.call(e.k,r),!0;if(!e.P){var n=Ln(Tn(e),t),a=null==n?void 0:n[ea];if(a&&a.t===r)return e.o[t]=r,e.D[t]=!1,!0;if(vn(r,n)&&(void 0!==r||mn(e.t,t)))return!0;Fn(e),Bn(e)}return e.o[t]===r&&"number"!=typeof r&&(void 0!==r||t in e.o)||(e.o[t]=r,e.D[t]=!0,!0)},deleteProperty:function(e,t){return void 0!==Ln(e.t,t)||t in e.t?(e.D[t]=!1,Fn(e),Bn(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=Tn(e),i=Reflect.getOwnPropertyDescriptor(r,t);return i?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:i.enumerable,value:r[t]}:i},defineProperty:function(){yn(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){yn(12)}},oa={};gn(aa,(function(e,t){oa[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),oa.deleteProperty=function(e,t){return oa.set.call(this,e,t,void 0)},oa.set=function(e,t,r){return aa.set.call(this,e[0],t,r,e[0])};var sa,ua=function(){function e(e){var t=this;this.g=Yn,this.F=!0,this.produce=function(e,r,i){if("function"==typeof e&&"function"!=typeof r){var n=r;r=e;var a=t;return function(e){var t=this;void 0===e&&(e=n);for(var i=arguments.length,o=Array(i>1?i-1:0),s=1;s<i;s++)o[s-1]=arguments[s];return a.produce(e,(function(e){var i;return(i=r).call.apply(i,[t,e].concat(o))}))}}var o;if("function"!=typeof r&&yn(6),void 0!==i&&"function"!=typeof i&&yn(7),hn(e)){var s=In(t),u=Hn(t,e,void 0),c=!0;try{o=r(u),c=!1}finally{c?zn(s):xn(s)}return"undefined"!=typeof Promise&&o instanceof Promise?o.then((function(e){return jn(s,i),Nn(e,s)}),(function(e){throw zn(s),e})):(jn(s,i),Nn(o,s))}if(!e||"object"!=typeof e){if(void 0===(o=r(e))&&(o=e),o===Xn&&(o=void 0),t.F&&_n(o,!0),i){var p=[],l=[];wn("Patches").M(e,o,p,l),i(p,l)}return o}yn(21,e)},this.produceWithPatches=function(e,r){if("function"==typeof e)return function(r){for(var i=arguments.length,n=Array(i>1?i-1:0),a=1;a<i;a++)n[a-1]=arguments[a];return t.produceWithPatches(r,(function(t){return e.apply(void 0,[t].concat(n))}))};var i,n,a=t.produce(e,r,(function(e,t){i=e,n=t}));return"undefined"!=typeof Promise&&a instanceof Promise?a.then((function(e){return[e,i,n]})):[a,i,n]},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){hn(e)||yn(8),bn(e)&&(e=Wn(e));var t=In(this),r=Hn(this,e,void 0);return r[ea].C=!0,xn(t),r},t.finishDraft=function(e,t){var r=(e&&e[ea]).A;return jn(r,t),Nn(void 0,r)},t.setAutoFreeze=function(e){this.F=e},t.setUseProxies=function(e){e&&!Yn&&yn(20),this.g=e},t.applyPatches=function(e,t){var r;for(r=t.length-1;r>=0;r--){var i=t[r];if(0===i.path.length&&"replace"===i.op){e=i.value;break}}r>-1&&(t=t.slice(r+1));var n=wn("Patches").$;return bn(e)?n(e,t):this.produce(e,(function(e){return n(e,t)}))},e}(),ca=new ua,pa=ca.produce,la=(ca.produceWithPatches.bind(ca),ca.setAutoFreeze.bind(ca),ca.setUseProxies.bind(ca),ca.applyPatches.bind(ca),ca.createDraft.bind(ca),ca.finishDraft.bind(ca),pa),da=(n(55246),n(5806),sa=function(e,t){return sa=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},sa(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}sa(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),ya=function(e,t){for(var r=0,i=t.length,n=e.length;r<i;r++,n++)e[n]=t[r];return e},ba=Object.defineProperty,ha=Object.defineProperties,ga=Object.getOwnPropertyDescriptors,fa=Object.getOwnPropertySymbols,ma=Object.prototype.hasOwnProperty,Sa=Object.prototype.propertyIsEnumerable,va=function(e,t,r){return t in e?ba(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},Aa=function(e,t){for(var r in t||(t={}))ma.call(t,r)&&va(e,r,t[r]);if(fa)for(var i=0,n=fa(t);i<n.length;i++)r=n[i],Sa.call(t,r)&&va(e,r,t[r]);return e},Ca=function(e,t){return ha(e,ga(t))};function Ta(e){return hn(e)?la(e,(function(){})):e}function Ma(e,t){function r(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var n=t.apply(void 0,r);if(!n)throw new Error("prepareAction did not return an object");return Aa(Aa({type:e,payload:n.payload},"meta"in n&&{meta:n.meta}),"error"in n&&{error:n.error})}return{type:e,payload:r[0]}}return r.toString=function(){return""+e},r.type=e,r.match=function(t){return t.type===e},r}function _a(e){var t,r={},i=[],n={addCase:function(e,t){var i="string"==typeof e?e:e.type;if(i in r)throw new Error("addCase cannot be called with two reducers for the same action type");return r[i]=t,n},addMatcher:function(e,t){return i.push({matcher:e,reducer:t}),n},addDefaultCase:function(e){return t=e,n}};return e(n),[r,i,t]}function Ra(e,t,r,i){void 0===r&&(r=[]);var n,a="function"==typeof t?_a(t):[t,r,i],o=a[0],s=a[1],u=a[2];if(function(e){return"function"==typeof e}(e))n=function(){return Ta(e())};else{var c=Ta(e);n=function(){return c}}function p(e,t){void 0===e&&(e=n());var r=ya([o[t.type]],s.filter((function(e){return(0,e.matcher)(t)})).map((function(e){return e.reducer})));return 0===r.filter((function(e){return!!e})).length&&(r=[u]),r.reduce((function(e,r){if(r){var i;if(bn(e))return void 0===(i=r(e,t))?e:i;if(hn(e))return la(e,(function(e){return r(e,t)}));if(void 0===(i=r(e,t))){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return i}return e}),e)}return p.getInitialState=n,p}function Oa(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");var r,i="function"==typeof e.initialState?e.initialState:Ta(e.initialState),n=e.reducers||{},a=Object.keys(n),o={},s={},u={};function c(){var t="function"==typeof e.extraReducers?_a(e.extraReducers):[e.extraReducers],r=t[0],n=void 0===r?{}:r,a=t[1],o=void 0===a?[]:a,u=t[2],c=void 0===u?void 0:u,p=Aa(Aa({},n),s);return Ra(i,p,o,c)}return a.forEach((function(e){var r,i,a=n[e],c=function(e,t){return e+"/"+t}(t,e);"reducer"in a?(r=a.reducer,i=a.prepare):r=a,o[e]=r,s[c]=r,u[e]=i?Ma(c,i):Ma(c)})),{name:t,reducer:function(e,t){return r||(r=c()),r(e,t)},actions:u,caseReducers:o,getInitialState:function(){return r||(r=c()),r.getInitialState()}}}"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__,function(e){function t(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];var n=e.apply(this,r)||this;return Object.setPrototypeOf(n,t.prototype),n}da(t,e),Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e.prototype.concat.apply(this,t)},t.prototype.prepend=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return 1===e.length&&Array.isArray(e[0])?new(t.bind.apply(t,ya([void 0],e[0].concat(this)))):new(t.bind.apply(t,ya([void 0],e.concat(this))))}}(Array);var wa=["name","message","stack","code"],Pa=function(e,t){this.payload=e,this.meta=t},ja=function(e,t){this.payload=e,this.meta=t},za=function(e){if("object"==typeof e&&null!==e){for(var t={},r=0,i=wa;r<i.length;r++){var n=i[r];"string"==typeof e[n]&&(t[n]=e[n])}return t}return{message:String(e)}};function xa(e,t,r){var i=Ma(e+"/fulfilled",(function(e,t,r,i){return{payload:e,meta:Ca(Aa({},i||{}),{arg:r,requestId:t,requestStatus:"fulfilled"})}})),n=Ma(e+"/pending",(function(e,t,r){return{payload:void 0,meta:Ca(Aa({},r||{}),{arg:t,requestId:e,requestStatus:"pending"})}})),a=Ma(e+"/rejected",(function(e,t,i,n,a){return{payload:n,error:(r&&r.serializeError||za)(e||"Rejected"),meta:Ca(Aa({},a||{}),{arg:i,requestId:t,rejectedWithValue:!!n,requestStatus:"rejected",aborted:"AbortError"===(null==e?void 0:e.name),condition:"ConditionError"===(null==e?void 0:e.name)})}})),o="undefined"!=typeof AbortController?AbortController:function(){function e(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return e.prototype.abort=function(){},e}();return Object.assign((function(e){return function(s,u,c){var p,l=(null==r?void 0:r.idGenerator)?r.idGenerator(e):function(e){void 0===e&&(e=21);for(var t="",r=e;r--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t}(),d=new o,y=new Promise((function(e,t){return d.signal.addEventListener("abort",(function(){return t({name:"AbortError",message:p||"Aborted"})}))})),b=!1,h=function(){return o=this,p=null,h=function(){var o,p,h,g,f;return function(e,t){var r,i,n,a,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,i&&(n=2&a[0]?i.return:a[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,a[1])).done)return n;switch(i=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,i=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((n=(n=o.trys).length>0&&n[n.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){o.label=a[1];break}if(6===a[0]&&o.label<n[1]){o.label=n[1],n=a;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(a);break}n[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],i=0}finally{r=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}(this,(function(m){switch(m.label){case 0:return m.trys.push([0,4,,5]),null===(S=g=null==(o=null==r?void 0:r.condition)?void 0:o.call(r,e,{getState:u,extra:c}))||"object"!=typeof S||"function"!=typeof S.then?[3,2]:[4,g];case 1:g=m.sent(),m.label=2;case 2:if(!1===g)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return b=!0,s(n(l,e,null==(p=null==r?void 0:r.getPendingMeta)?void 0:p.call(r,{requestId:l,arg:e},{getState:u,extra:c}))),[4,Promise.race([y,Promise.resolve(t(e,{dispatch:s,getState:u,extra:c,requestId:l,signal:d.signal,rejectWithValue:function(e,t){return new Pa(e,t)},fulfillWithValue:function(e,t){return new ja(e,t)}})).then((function(t){if(t instanceof Pa)throw t;return t instanceof ja?i(t.payload,l,e,t.meta):i(t,l,e)}))])];case 3:return h=m.sent(),[3,5];case 4:return f=m.sent(),h=f instanceof Pa?a(null,l,e,f.payload,f.meta):a(f,l,e),[3,5];case 5:return r&&!r.dispatchConditionRejection&&a.match(h)&&h.meta.condition||s(h),[2,h]}var S}))},new Promise((function(e,t){var r=function(e){try{n(h.next(e))}catch(e){t(e)}},i=function(e){try{n(h.throw(e))}catch(e){t(e)}},n=function(t){return t.done?e(t.value):Promise.resolve(t.value).then(r,i)};n((h=h.apply(o,p)).next())}));var o,p,h}();return Object.assign(h,{abort:function(e){b&&(p=e,d.abort())},requestId:l,arg:e,unwrap:function(){return h.then(Ia)}})}}),{pending:n,rejected:a,fulfilled:i,typePrefix:e})}function Ia(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}Object.assign;var Ea="listenerMiddleware";Ma(Ea+"/add"),Ma(Ea+"/removeAll"),Ma(Ea+"/remove"),function(){function e(e,t){var r=n[e];return r?r.enumerable=t:n[e]=r={configurable:!0,enumerable:t,get:function(){var t=this[ea];return aa.get(t,e)},set:function(t){var r=this[ea];aa.set(r,e,t)}},r}function t(e){for(var t=e.length-1;t>=0;t--){var n=e[t][ea];if(!n.P)switch(n.i){case 5:i(n)&&Bn(n);break;case 4:r(n)&&Bn(n)}}}function r(e){for(var t=e.t,r=e.k,i=ra(r),n=i.length-1;n>=0;n--){var a=i[n];if(a!==ea){var o=t[a];if(void 0===o&&!mn(t,a))return!0;var s=r[a],u=s&&s[ea];if(u?u.t!==o:!vn(s,o))return!0}}var c=!!t[ea];return i.length!==ra(t).length+(c?0:1)}function i(e){var t=e.k;if(t.length!==e.t.length)return!0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);if(r&&!r.get)return!0;for(var i=0;i<t.length;i++)if(!t.hasOwnProperty(i))return!0;return!1}var n={};!function(e,t){na[e]||(na[e]=t)}("ES5",{J:function(t,r){var i=Array.isArray(t),n=function(t,r){if(t){for(var i=Array(r.length),n=0;n<r.length;n++)Object.defineProperty(i,""+n,e(n,!0));return i}var a=ia(r);delete a[ea];for(var o=ra(a),s=0;s<o.length;s++){var u=o[s];a[u]=e(u,t||!!a[u].enumerable)}return Object.create(Object.getPrototypeOf(r),a)}(i,t),a={i:i?5:4,A:r?r.A:Pn(),P:!1,I:!1,D:{},l:r,t:t,k:n,o:null,O:!1,C:!1};return Object.defineProperty(n,ea,{value:a,writable:!0}),n},S:function(e,r,n){n?bn(r)&&r[ea].A===e&&t(e.p):(e.u&&function e(t){if(t&&"object"==typeof t){var r=t[ea];if(r){var n=r.t,a=r.k,o=r.D,s=r.i;if(4===s)gn(a,(function(t){t!==ea&&(void 0!==n[t]||mn(n,t)?o[t]||e(a[t]):(o[t]=!0,Bn(r)))})),gn(n,(function(e){void 0!==a[e]||mn(a,e)||(o[e]=!1,Bn(r))}));else if(5===s){if(i(r)&&(Bn(r),o.length=!0),a.length<n.length)for(var u=a.length;u<n.length;u++)o[u]=!1;else for(var c=n.length;c<a.length;c++)o[c]=!0;for(var p=Math.min(a.length,n.length),l=0;l<p;l++)a.hasOwnProperty(l)||(o[l]=!0),void 0===o[l]&&e(a[l])}}}}(e.p[0]),t(e.p))},K:function(e){return 4===e.i?r(e):i(e)}})}(),n(26166),n(55246);var Na,ka,Da,Ua,La,qa,Ba,Fa,Ha,Wa,Ga,Ka,$a=Object.freeze,Va=Object.defineProperty,Qa=(Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable,(e,t)=>$a(Va(e,"raw",{value:$a(t||e.slice())}))),Za=[{id:"none",type:"none",label:"None"}],Ya=($.button(Na||(Na=Qa(["\n  ","\n  border-radius: var(--lns-radius-medium);\n  &:focus {\n    box-shadow: 0 0 0 2px var(--lns-color-focusRing);\n  }\n  height: max-content;\n  ",";\n"])),"  background: none;\ncolor: inherit;\nborder: none;\npadding: 0;\nfont: inherit;\ncursor: pointer;\noutline: inherit;",(e=>e.selected?"background-color: var(--lns-color-highlight); color: var(--lns-color-primaryActive)":"&:hover {\n      background: var(--lns-color-backgroundHover);\n    }")),$.div(ka||(ka=Qa(["\n  ","\n\n  display: grid;\n  ","\n  ","\n  grid-template-areas: 'stack';\n  & > * {\n    grid-area: stack;\n  }\n"])),(e=>"background"===e.itemType?"height: 56px; width: 56px ;":"height: 116px; width: 116px;"),(e=>e.scale?"transform: scale(".concat(e.scale,");"):""),(e=>e.origin?"transform-origin: ".concat(e.origin,";"):"")),$.div(Da||(Da=Qa(["\n  ","\n  border-radius: 50%;\n  background-color: ",";\n  ","\n  background-position: center;\n  background-size: cover;\n"])),(e=>"background"===e.type?"height: 48px; width: 48px;":"height: 94px; width: 94px;"),(e=>e.color||"#FFFFFF"),(e=>e.imageUrl&&"\n    background-image: url(".concat(e.imageUrl,");\n  "))),$.div(Ua||(Ua=Qa(["\nheight: 100%;\nborder-radius: 50%;\nborder: 1px solid ",";\n}\n"])),(e=>e.selected?"rgba(21, 14, 216, 0.5)":"var(--lns-color-border)")),$.div(La||(La=Qa(["\n  position: relative;\n  height: 94px;\n  width: 94px;\n"]))),$.img(qa||(qa=Qa(["\n  position: absolute;\n  left: 0;\n  width: 50%;\n"]))),$.img(Ba||(Ba=Qa(["\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 50%;\n"]))),$.img(Fa||(Fa=Qa(["\n  position: absolute;\n  right: 0;\n  width: 50%;\n"]))),$.img(Ha||(Ha=Qa(["\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: 50%;\n"]))),$.div(Wa||(Wa=Qa(["\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  height: 100%;\n"]))),$.div(Ga||(Ga=Qa(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n"]))),$.div(Ka||(Ka=Qa(["\n  overflow: auto;\n  flex-grow: 1;\n"]))),Ma("set-selected-background")),Xa=Ma("set-revert-background"),Ja=Ma("set-background-options"),eo=Ma("set-custom-settings"),to=Ma("set-selected-frame"),ro=Ma("set-revert-frame"),io=(Ma("fetch-latest-frames"),Ma("set-frames-fetching")),no=Ma("set-frames-data"),ao=Ma("frames-last-seen-version"),oo=Ma("store-frames-last-seen-version"),so=Ma("frames-current-version"),uo=(Ma("show-frames-menu"),Ra({revertOption:null,selectedOption:Za[0],backgroundOptions:Za.slice(),customBackgroundSettings:{blurPx:0,bgColor:"#ff0000",bgUrl:"https://cdn.loom.com/assets/camfort/windows_xp.jpeg",brightness:0,width:854,height:480}},(e=>{e.addCase(Ya,((e,t)=>{e.selectedOption=t.payload})).addCase(Ja,((e,t)=>{e.backgroundOptions=t.payload})).addCase(eo,((e,t)=>{e.customBackgroundSettings=t.payload})).addCase(Xa,((e,t)=>{e.revertOption=t.payload}))})));Ra({revertFrame:null,selectedFrame:"None",lastSeenFramesVersion:0,latestFramesVersion:0,showNewFramesAlert:!1,fetching:!1,frameItems:{None:{name:"None"}}},(e=>{e.addCase(to,((e,t)=>{e.selectedFrame=t.payload})).addCase(no,((e,t)=>{e.frameItems=t.payload.frameItems,e.latestFramesVersion=t.payload.latestFramesVersion})).addCase(io,((e,t)=>{e.fetching=t.payload})).addCase(oo,((e,t)=>{e.lastSeenFramesVersion=t.payload})).addCase(ao,((e,t)=>{e.lastSeenFramesVersion=t.payload})).addCase(so,((e,t)=>{e.latestFramesVersion=t.payload})).addCase(ro,((e,t)=>{e.revertFrame=t.payload})).addMatcher((()=>!0),(e=>{e.showNewFramesAlert=e.latestFramesVersion>e.lastSeenFramesVersion}))}));var co={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let po;const lo=new Uint8Array(16);function yo(){if(!po&&(po="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!po))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return po(lo)}const bo=[];for(let e=0;e<256;++e)bo.push((e+256).toString(16).slice(1));var ho=function(e,t,r){if(co.randomUUID&&!t&&!e)return co.randomUUID();const i=(e=e||{}).random||(e.rng||yo)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t){r=r||0;for(let e=0;e<16;++e)t[r+e]=i[e];return t}return function(e,t=0){return bo[e[t+0]]+bo[e[t+1]]+bo[e[t+2]]+bo[e[t+3]]+"-"+bo[e[t+4]]+bo[e[t+5]]+"-"+bo[e[t+6]]+bo[e[t+7]]+"-"+bo[e[t+8]]+bo[e[t+9]]+"-"+bo[e[t+10]]+bo[e[t+11]]+bo[e[t+12]]+bo[e[t+13]]+bo[e[t+14]]+bo[e[t+15]]}(i)};const go=Oa({name:"activitySession",initialState:{hostId:ho(),activitySessionId:null,activitySessionVersion:"v0",activeTabId:null,activeWindowId:null},reducers:{updateActiveTabId(e,t){e.activeTabId=t.payload},updateActiveWindowId(e,t){e.activeWindowId=t.payload},updateActivitySessionId(e,t){e.activitySessionId=t.payload}}}),{updateActiveTabId:fo,updateActiveWindowId:mo,updateActivitySessionId:So}=go.actions;var vo=go;const Ao={alertMessages:[]},Co=Oa({name:"alerts",initialState:Ao,reducers:{clearAlert(e){Object.assign(e,Ao)},clearAlertType(e,t){e.alertMessages=e.alertMessages.filter((e=>e.type!==t.payload))},createAlert(e,t){const r={createdAt:Date.now(),...t.payload};let i=!1;e.alertMessages.forEach((e=>{e.type===t.payload.type&&(i=!0)})),i||e.alertMessages.push(r)}}}),{clearAlert:To,clearAlertType:Mo}=Co.actions;var _o=Co,Ro=(e=>(e.extensionIconClicked="extensionIconClicked",e.endRecording="endRecording",e.pauseRecording="pauseRecording",e.resumeRecording="resumeRecording",e.cancelRecording="cancelRecording",e.restartRecording="restartRecording",e.rewindRecording="rewindRecording",e.isAlive="isAlive",e.updateVideoPreviewUrl="updateVideoPreviewUrl",e.openPinnedTab="openPinnedTab",e.focusRecordingTab="focusRecordingTab",e.focusPinnedTab="focusPinnedTab",e.requestTabId="requestTabId",e.getRecordingTabInfo="getRecordingTabInfo",e.updateRecorderSettings="updateRecorderSettings",e.pingContentScript="pingContentScript",e.pingToastMsgScript="pingToastMsgScript",e.activateRecorder="activateRecorder",e.trackEvent="trackEvent",e.logCrumb="logCrumb",e.logException="logException",e.logInfo="logInfo",e.logWarn="logWarn",e.fetchFeatureFlag="fetchFeatureFlag",e.checkUploadSpeed="checkUploadSpeed",e.fetchNotifications="fetchNotifications",e.openNotification="openNotification",e.setExtensionBadgeCount="setExtensionBadgeCount",e.updateBlurFTUXUserProperty="updateBlurFTUXUserProperty",e.canvasOptionClicked="canvasOptionClicked",e.addToBaseContext="addToBaseContext",e.allowGmailIntegrationPermission="allowGmailIntegrationPermission",e.denyGmailIntegrationPermission="denyGmailIntegrationPermission",e.allowGmailLinkExpanding="allowGmailLinkExpanding",e.denyGmailLinkExpanding="denyGmailLinkExpanding",e.insertSession="insertSession",e.requestSessionURL="requestSessionURL",e.cancelRequestSessionURL="cancelRequestSessionURL",e.fetchMyVideosSessions="fetchMyVideosSessions",e.updateNameToSession="updateNameToSession",e.getSessionDetails="getSessionDetails",e.fetchMostRecentSession="fetchMostRecentSession",e.requestThumbExists="requestThumbExists",e.initiateLoomRecorderFromInsertButton="initiateLoomRecorderFromInsertButton",e.fetchLogState="fetchLogState",e))(Ro||{});const Oo=Ma("appReset"),wo=Ma("featureFlagReset"),Po=Oa({name:"user",initialState:{isFetching:!1,user:null,authFlowTab:null,authFlowInitTab:null,seenNewUIModal:!1,switchToPinTabModalState:"NEVER_SEEN"},reducers:{fetchStarted(e){e.user=null,e.isFetching=!0},updateUser(e,t){e.user=t.payload,e.isFetching=!1,e.authFlowTab=null,e.authFlowInitTab=null},updateStartAuthFlow(e,t){e.authFlowTab=t.payload.authFlowTab,e.authFlowInitTab=t.payload.initTab},clearAuthFlow(e){e.authFlowTab=null,e.authFlowInitTab=null},updateSeenNewUIModal(e){e.seenNewUIModal=!0},updateSwitchToPinTabModalState(e,t){e.switchToPinTabModalState=t.payload}}}),{fetchStarted:jo,updateUser:zo,updateStartAuthFlow:xo,clearAuthFlow:Io,updateSeenNewUIModal:Eo,updateSwitchToPinTabModalState:No}=Po.actions;var ko=Po,Do=(e=>(e.preRecord="preRecord",e.capture="capture",e.countdown="countdown",e.countdownFinished="countdownFinished",e.active="active",e))(Do||{});const Uo={analytics:{},audioData:Array(7).fill(0),cameraOnSlidesFullscreen:!1,cancelButtonClicked:!1,canceled_desktop_error:!1,confirmCancel:!1,confirmRestart:!1,isLoading:!0,mediaStream:null,microphone_muted_err:!1,openedCanvas:!1,pauseButtonClicked:!1,paused:!0,pinnedTab:null,recorderPhase:"preRecord",recordingPauseTime:null,recordingStartTime:null,recordingTab:null,restartButtonClicked:!1,session:null,showChromeAudioDroppedModal:!1,source:void 0,timeElapsedAtPause:null,totalRecordingTimePaused:0,trimmedSections:null,userSawChromeAudioDroppedModal:!1,videoPreviewUrl:null},Lo=Oa({name:"recording",initialState:Uo,reducers:{cancelRestartRecording(e){e.confirmRestart=!1,e.restartButtonClicked=!1},confirmRestartRecording(e){e.recorderPhase="capture",e.confirmRestart=!0,e.restartButtonClicked=!1},enableCanceledDesktopError(e){e.recorderPhase="preRecord",e.canceled_desktop_error=!0},pauseRecording(e){e.analytics.pause_used=!0,e.paused=!0;const t=Date.now();e.recordingPauseTime=t;const r=(i=e.recordingStartTime,n=e.totalRecordingTimePaused,(Date.now()-(i||0)-(n||0))/1e3);var i,n;e.timeElapsedAtPause=r},resumeRecording(e){e.paused=!1,e.confirmCancel=!1,e.confirmRestart=!1,e.videoPreviewUrl=null;const t=e.recordingPauseTime?Date.now()-e.recordingPauseTime:0;e.totalRecordingTimePaused+=t,e.recordingPauseTime=null},setCancelButtonClicked(e,t){e.cancelButtonClicked=t.payload},setConfirmCancel(e){e.confirmCancel=!0},setIsLoading(e,t){e.isLoading=t.payload},setMicrophoneMutedError(e,t){e.microphone_muted_err=t.payload},setPauseButtonClicked(e,t){e.pauseButtonClicked=t.payload},setRecorderPhase(e,t){e.recorderPhase=t?.payload},setRestartButtonClicked(e,t){e.restartButtonClicked=t.payload},setSession(e,t){e.session=t.payload},setVideoPreviewUrl(e,t){e.videoPreviewUrl=t.payload},updateCameraOnSlidesFullscreen(e,t){e.cameraOnSlidesFullscreen=t.payload},updateEndRecording(e){Object.assign(e,{...Uo,analytics:{screen_type:e.analytics.screen_type,tab_audio:e.analytics.tab_audio,from_url:e.analytics.from_url}})},updateMicrophoneEnabled(e,t){e.analytics.microphone_enabled=t.payload},updateRecordingStartTime(e,t){e.recordingStartTime=t.payload,e.totalRecordingTimePaused=0,e.timeElapsedAtPause=null,e.recordingPauseTime=null},updateRecordingTab(e,t){e.recordingTab=t.payload},updateShowChromeAudioDroppedModal(e,t){e.showChromeAudioDroppedModal=t.payload},updateSource(e,t){e.source=t?.payload},updateStartRecording(e,t){e.recorderPhase="active",e.analytics.camType=t.payload,e.paused=!1,e.confirmRestart=!1},updateTrimmedSections(e,t){e.trimmedSections=t.payload},updateUserSawChromeAudioDroppedModal(e,t){e.userSawChromeAudioDroppedModal=t.payload},updatedPinnedTab(e,t){e.pinnedTab=t.payload}},extraReducers:e=>{e.addCase(Oo,(e=>{Object.assign(e,Uo)})),e.addCase(xo,(e=>{e.recordingTab=null}))}}),{setRecorderPhase:qo,updateSource:Bo,updatedPinnedTab:Fo,updateRecordingTab:Ho,setSession:Wo,setCancelButtonClicked:Go,setRestartButtonClicked:Ko,setConfirmCancel:$o,updateStartRecording:Vo,pauseRecording:Qo,updateMicrophoneEnabled:Zo,resumeRecording:Yo,updateEndRecording:Xo,enableCanceledDesktopError:Jo,cancelRestartRecording:es,confirmRestartRecording:ts,setMicrophoneMutedError:rs,setIsLoading:is,setPauseButtonClicked:ns,setVideoPreviewUrl:as,updateRecordingStartTime:os,updateCameraOnSlidesFullscreen:ss,updateShowChromeAudioDroppedModal:us,updateUserSawChromeAudioDroppedModal:cs,updateTrimmedSections:ps}=Lo.actions;var ls=Lo;const ds={isBlurDockOpen:!1,blurType:"NONE",blurCount:0,hasBlurred:!1,blurUsedInRecording:!1,showBlurFTUX:!1,showBlurUpgrade:!1},ys=Oa({name:"blur",initialState:ds,reducers:{openBlurDock(e){e.isBlurDockOpen=!0,e.blurType="ELEMENT"},closeBlurDock(e){e.isBlurDockOpen=!1,e.blurType="NONE"},enableSelectBlur(e){e.blurType="ELEMENT"},disableSelectBlur(e){e.blurType="NONE"},incrementBlurCount(e){e.blurCount++,e.hasBlurred=!0},decrementBlurCount(e){e.blurCount=Math.max(0,e.blurCount-1)},clearBlurCount(e,{payload:t}){e.blurCount=Math.max(0,e.blurCount-t)},resetBlur(e){Object.assign(e,ds)},shouldShowBlurFTUX(e){e.showBlurFTUX=!0},shouldHideBlurFTUX(e){e.showBlurFTUX=!1},shouldShowBlurUpgrade(e){e.showBlurUpgrade=!0},shouldHideBlurUpgrade(e){e.showBlurUpgrade=!1}},extraReducers:e=>{e.addCase(qo,((e,t)=>{t.payload===Do.active&&e.blurCount&&(e.blurUsedInRecording=!0)})),e.addCase(Vo,(e=>{e.blurCount&&(e.blurUsedInRecording=!0)})),e.addCase(Yo,(e=>{e.blurCount&&(e.blurUsedInRecording=!0)}))}}),{openBlurDock:bs,closeBlurDock:hs,enableSelectBlur:gs,disableSelectBlur:fs,incrementBlurCount:ms,decrementBlurCount:Ss,clearBlurCount:vs,resetBlur:As,shouldShowBlurFTUX:Cs,shouldHideBlurFTUX:Ts,shouldShowBlurUpgrade:Ms,shouldHideBlurUpgrade:_s}=(xa("blur/updateBlurFTUXUserProperty",((e,{dispatch:t})=>(t(Ts()),chrome.runtime.sendMessage({type:Ro.updateBlurFTUXUserProperty})))),ys.actions);var Rs=ys;const Os=Oa({name:"bubbleMenu",initialState:{expanded:!0,expanded_default:!0,camera:!1,captureSource:!1,messageShown:!1},reducers:{updateBubbleMessageShown(e,t){e.messageShown=t.payload}}}),{updateBubbleMessageShown:ws}=Os.actions;var Ps=Os;const js=Oa({name:"countdown",initialState:{enabled:!0,showTabOnlyModal:!1},reducers:{updateCountdownEnabled(e,t){e.enabled=t.payload},updateShowTabOnlyModal(e,t){e.showTabOnlyModal=t.payload}},extraReducers:e=>{e.addCase(Oo,(e=>{e.showTabOnlyModal=!1}))}}),{updateCountdownEnabled:zs,updateShowTabOnlyModal:xs}=js.actions;var Is=js,Es=(e=>(e.COMPANION_SITE_CONTROL_SETTINGS_SITE_LIST="constants-companion-site-control-settings-site-list",e.EXPERIMENT_BLUR="experiment-chrome-extension-blur-for-paid-users",e.ROLLOUT_HIGH_QUALITY_VIDEO="rollout-chrome-extension-high-quality-video-recording",e.ROLLOUT_WEB_APP_NOTIFICATIONS="rollout-extension-web-app-notifications",e.TEST_EXTENSION_MV3="test-extension-mv3",e.RECORDING_CLIENTS_SCHEDULED_DOWNTIME="recording-clients-scheduled-downtime",e.GMAIL_CSS_SELECTOR_FLAG="gmail-integration-css-selectors",e.GMAIL_INTEGRATION_THUMBNAIL_GIF="gmail-integration-gif-embed",e.EXTENSION_UPLOAD_STREAMING="extension-upload-streaming",e.ROLLOUT_AUTO_LIGHTING="rollout-auto-lighting-extension",e.EXTENSION_ROLLOUT_S3_ACCELERATION="extension-rollout-s3-acceleration",e.EXPERIMENT_EXTENSION_ONBOARDING_TUTORIAL="experiment-extension-onboarding-tutorial",e.DASH_SEGMENT_DURATION="dash-segment-duration",e))(Es||{});const Ns=6e5,ks={flags:Object.values(Es).reduce(((e,t)=>(e[t]={flag:t,fetching:!1,fetched:!1,value:null,expirationTs:null},e)),{})},Ds=Oa({name:"featureFlagsSlice",initialState:ks,reducers:{beginFeatureFlagFetch(e,t){const r=t.payload;e.flags[r]={flag:r,fetching:!0,fetched:!1,value:null,expirationTs:null}},updateFeatureFlagValue(e,t){const{flag:r,value:i}=t.payload;e.flags[r]={flag:r,fetching:!1,fetched:!0,value:i,expirationTs:Date.now()+Ns}},endFeatureFlagFetch(e,t){const r=t.payload;e.flags[r]={...e.flags[r],fetched:!0,fetching:!1,expirationTs:Date.now()+Ns}}},extraReducers:e=>{e.addCase(Oo,(e=>{Object.assign(e,ks)})),e.addCase(wo,(e=>{Object.assign(e,ks)}))}}),{beginFeatureFlagFetch:Us,endFeatureFlagFetch:Ls,updateFeatureFlagValue:qs}=Ds.actions;var Bs=Ds;xa("gmail/allowGmailIntegrationPermission",(()=>{chrome.runtime.sendMessage({type:Ro.allowGmailIntegrationPermission})})),xa("gmail/denyGmailIntegrationPermission",(()=>{chrome.runtime.sendMessage({type:Ro.denyGmailIntegrationPermission})})),xa("gmail/allowGmailLinkExpanding",(()=>{chrome.runtime.sendMessage({type:Ro.allowGmailLinkExpanding})})),xa("gmail/denyGmailLinkExpanding",(()=>{chrome.runtime.sendMessage({type:Ro.denyGmailLinkExpanding})})),xa("gmail/insertSession",(({composeViewID:e,session:t,_sender:r})=>{chrome.runtime.sendMessage({type:Ro.insertSession,composeViewID:e,session:t,_sender:r})})),xa("gmail/requestSessionURL",(({_sender:e})=>{chrome.runtime.sendMessage({type:Ro.insertSession,_sender:e})})),xa("gmail/cancelRequestSessionURL",(()=>{chrome.runtime.sendMessage({type:Ro.cancelRequestSessionURL})}));const Fs={composeViewID:null,insertSession:!1,session:null,sessionURL:null},Hs=e=>{const{_sender:t=null}=e;return null!==t&&t.tab?t.tab.id:e.tabID||null},Ws=(e,t)=>t in e?e[t]:Fs,Gs=Oa({name:"gmail",initialState:{requestPermission:!1,tabToState:{}},reducers:{updateGmailRequestPermission(e,t){e.requestPermission=t.payload},updateGmailComposeView(e,t){const r=Hs(t.payload);if(!r)return;const i=Ws(e.tabToState,r);i.composeViewID=t.payload.composeViewID,Object.assign(e,{...e,tabToState:{...e.tabToState,[r]:i}})},updateGmailSession(e,t){const r=Hs(t.payload);if(!r)return;const i=Ws(e.tabToState,r);i.session=t.payload.session,Object.assign(e,{...e,tabToState:{...e.tabToState,[r]:i}})},updateGmailSessionURL(e,t){const r=Hs(t.payload);if(!r)return;const i=Ws(e.tabToState,r);i.sessionURL=t.payload.sessionURL,Object.assign(e,{...e,tabToState:{...e.tabToState,[r]:i}})},insertGmailSession(e,t){const r=Hs(t.payload);if(!r)return;const i=Ws(e.tabToState,r);i.composeViewID=t.payload.composeViewID,i.insertSession=!0,Object.assign(e,{...e,tabToState:{...e.tabToState,[r]:i}})}}}),{updateGmailRequestPermission:Ks,updateGmailComposeView:$s,updateGmailSession:Vs,updateGmailSessionURL:Qs,insertGmailSession:Zs}=Gs.actions;var Ys=Gs;const Xs=Oa({name:"healthCheck",initialState:{recordingEntries:[]},reducers:{updateVideoHealthcheckState(e,t){const{videoId:r,videoState:i}=t.payload,n=e.recordingEntries.find((e=>e.videoId===r));n?n.videoState=i:e.recordingEntries.push(t.payload)},removeHealthCheckEntry(e,t){e.recordingEntries=e.recordingEntries.filter((e=>e.videoId!==t.payload.videoId))}}}),{updateVideoHealthcheckState:Js,removeHealthCheckEntry:eu}=Xs.actions;var tu=Xs;const ru={show:!1,time_left:20},iu=Oa({name:"idleDialog",initialState:ru,reducers:{showIdleDialog(e){e.show=!0},closeIdleDialog(e){Object.assign(e,ru)}}}),{showIdleDialog:nu,closeIdleDialog:au}=iu.actions;var ou=iu;const su=Oa({name:"integrationSettings",initialState:{integrate_dropbox:{enabled:!0,expand:!0},integrate_github:{enabled:!0,expand:!0},integrate_gitlab:{enabled:!0,expand:!0},integrate_gmail:{enabled:!0,expand:!0},integrate_google_docs:{enabled:!0,expand:!0},integrate_hacker_news:{enabled:!0,expand:!0},integrate_hubspot:{enabled:!0,expand:!0},integrate_intercom:{enabled:!0,expand:!0},integrate_invision:{enabled:!0,expand:!0},integrate_jira:{enabled:!0,expand:!0},integrate_outreach:{enabled:!0,expand:!0},integrate_producthunt:{enabled:!0,expand:!0},integrate_salesforce:{enabled:!0,expand:!0},integrate_salesforce_iq:{enabled:!0,expand:!0},integrate_salesloft:{enabled:!0,expand:!0}},reducers:{updateAllIntegrationSettings(e,t){return t.payload},updateGmailIntegrationSettings(e,t){"enabled"in t.payload&&(e.integrate_gmail.enabled=t.payload.enabled),"expand"in t.payload&&(e.integrate_gmail.expand=t.payload.expand)}}}),{updateAllIntegrationSettings:uu,updateGmailIntegrationSettings:cu}=su.actions;var pu=su;const lu={isRewindModalOpen:!1,isRewindFTUXDiscoveryTooltipOpenNew:!0,isRewindFTUXPausedDiscoveryTooltipOpen:!0,isDiscardRewindConfirmationDialogOpen:!1,hasPendingRewindTrim:!1,showRewindPausedToast:!1,latestRewindMsTrimmed:null},du=Oa({name:"liveRewind",initialState:lu,reducers:{setRewindModalOpen(e,t){e.isRewindModalOpen=t.payload},dismissRewindFTUXDiscoveryTooltip(e){e.isRewindFTUXDiscoveryTooltipOpenNew=!1},dismissRewindFTUXPausedDiscoveryTooltip(e){e.isRewindFTUXPausedDiscoveryTooltipOpen=!1},setDiscardRewindConfirmationDialogOpen(e,t){e.isDiscardRewindConfirmationDialogOpen=t.payload},setHasPendingRewindTrim(e,t){e.hasPendingRewindTrim=t.payload},setLatestRewindMsTrimmed(e,t){e.latestRewindMsTrimmed=t.payload},setShowRewindPausedToast(e,t){e.showRewindPausedToast=t.payload},resetLiveRewind(e){Object.assign(e,{...lu,isRewindFTUXDiscoveryTooltipOpenNew:e.isRewindFTUXDiscoveryTooltipOpenNew,isRewindFTUXPausedDiscoveryTooltipOpen:e.isRewindFTUXPausedDiscoveryTooltipOpen})}}}),{setRewindModalOpen:yu,dismissRewindFTUXDiscoveryTooltip:bu,dismissRewindFTUXPausedDiscoveryTooltip:hu,setDiscardRewindConfirmationDialogOpen:gu,setHasPendingRewindTrim:fu,setLatestRewindMsTrimmed:mu,setShowRewindPausedToast:Su,resetLiveRewind:vu}=du.actions;var Au=du,Cu=(e=>(e.Fatal="fatal",e.Error="error",e.Warning="warn",e.Info="info",e.Debug="debug",e))(Cu||{}),Tu=(e=>(e.Camera="cam",e.Desktop="desktop",e.Tab="tab",e))(Tu||{}),Mu=(e=>(e.Abandoning="wrucore-is-abandoning",e.Abandoned="wrucore-is-abandoned",e.Intitializing="wrucore-is-initializing",e.Ready="wrucore-is-ready",e.Starting="wrucore-is-starting",e.Recording="wrucore-is-recording",e.Pausing="wrucore-is-pausing",e.Paused="wrucore-is-paused",e.Resuming="wrucore-is-resuming",e.Resumed="wrucore-is-resumed",e.Cancelling="wrucore-is-cancelling",e.Cancelled="wrucore-is-cancelled",e.MediaStreamStopped="wrucore-is-media-stream-stopped",e.Completing="wrucore-is-completing",e.FinishedUploading="wrucore-is-finished-uploading",e.Completed="wrucore-is-completed",e.Unknown="wrucore-unknown-state",e))(Mu||{}),_u=(e=>(e.Lowest="lowest",e.Low="low",e.Normal="normal",e.High="high",e.Highest="highest",e))(_u||{}),Ru=n(55246),Ou=Object.defineProperty,wu=Object.defineProperties,Pu=Object.getOwnPropertyDescriptors,ju=Object.getOwnPropertySymbols,zu=Object.prototype.hasOwnProperty,xu=Object.prototype.propertyIsEnumerable,Iu=(e,t,r)=>t in e?Ou(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Eu=(e,t)=>{for(var r in t||(t={}))zu.call(t,r)&&Iu(e,r,t[r]);if(ju)for(var r of ju(t))xu.call(t,r)&&Iu(e,r,t[r]);return e},Nu=(e,t)=>wu(e,Pu(t));function ku(e,t,r){Ru["fatal"===e?"error":e](t,r)}var Du=e=>{const{isConsoleLogActive:t,onCrumbHook:r,trackerMethods:i,baseContext:n={}}=e;let a=Eu({},n);const o=e=>{const n=(new Date).getTime();e.context=Eu(Eu({},a),e.context),r([n,e]),i.map((t=>t.captureCrumb([n,e]))),!0===t()&&ku(e.level,e.message,e.context)},s=(e,r)=>(n,o={},s={})=>{return u={level:e,message:n,context:Eu(Eu({},o),a),tags:Eu(Eu({},s),r)},i.forEach((e=>{e.onEvent(u)})),void(!0===t()&&ku(u.level,u.message,u.context));var u},u=s(Cu.Error,{priority:"p1"}),c=e=>{const{message:t,context:r,stackContext:i}=e;u(t,Nu(Eu({},r),{stackContext:i,stack:(new Error).stack}),{})},p=e=>{a=Eu(Eu({},a),e)},l=async()=>{const e=i.map((e=>e.teardown()));await Promise.all(e)};return{crumb:o,recordFail:c,fatal:s(Cu.Fatal,{priority:"p0"}),error:u,warn:s(Cu.Warning,{}),info:s(Cu.Info,{}),debug:s(Cu.Debug,{}),teardown:l,addToBaseContext:p,getLoggerWithRunId:e=>{const t=e||ho(),r=e=>(r,i,n)=>e(r,Nu(Eu({},i),{runId:t}),n);return{crumb:o,recordFail:c,fatal:r(s(Cu.Fatal,{priority:"p0"})),error:r(u),warn:r(s(Cu.Warning,{})),info:r(s(Cu.Info,{})),debug:r(s(Cu.Debug,{})),teardown:l,addToBaseContext:p,getRunId:()=>t}}}};const Uu={640:2e3,1280:4e3,1920:6e3},Lu={640:1800,1280:3600,1920:5400},qu=(e,t)=>Object.entries(t).map((t=>[parseInt(t[0]),Math.round(1e3*t[1]*e)])),Bu=e=>({vp8:qu(e,Uu),vp9:qu(e,Lu)});function Fu(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}function Hu(e){return function t(r){return 0===arguments.length||Fu(r)?t:e.apply(this,arguments)}}function Wu(e){return function t(r,i){switch(arguments.length){case 0:return t;case 1:return Fu(r)?t:Hu((function(t){return e(r,t)}));default:return Fu(r)&&Fu(i)?t:Fu(r)?Hu((function(t){return e(t,i)})):Fu(i)?Hu((function(t){return e(r,t)})):e(r,i)}}}function Gu(e,t){switch(e){case 0:return function(){return t.apply(this,arguments)};case 1:return function(e){return t.apply(this,arguments)};case 2:return function(e,r){return t.apply(this,arguments)};case 3:return function(e,r,i){return t.apply(this,arguments)};case 4:return function(e,r,i,n){return t.apply(this,arguments)};case 5:return function(e,r,i,n,a){return t.apply(this,arguments)};case 6:return function(e,r,i,n,a,o){return t.apply(this,arguments)};case 7:return function(e,r,i,n,a,o,s){return t.apply(this,arguments)};case 8:return function(e,r,i,n,a,o,s,u){return t.apply(this,arguments)};case 9:return function(e,r,i,n,a,o,s,u,c){return t.apply(this,arguments)};case 10:return function(e,r,i,n,a,o,s,u,c,p){return t.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}function Ku(e,t,r){return function(){for(var i=[],n=0,a=e,o=0;o<t.length||n<arguments.length;){var s;o<t.length&&(!Fu(t[o])||n>=arguments.length)?s=t[o]:(s=arguments[n],n+=1),i[o]=s,Fu(s)||(a-=1),o+=1}return a<=0?r.apply(this,i):Gu(a,Ku(e,i,r))}}_u.Lowest,Bu(.1),_u.Low,Bu(.25),_u.Normal,Bu(1),_u.High,Bu(2),_u.Highest,Bu(5),setInterval,clearInterval,setTimeout,clearTimeout;var $u=Wu((function(e,t){return 1===e?Hu(t):Gu(e,Ku(e,[],t))})),Vu=$u,Qu=Wu((function(e,t){return Vu(t.length,(function(){for(var r=[],i=0;i<t.length;)r.push(t[i].call(this,arguments[i])),i+=1;return e.apply(this,r.concat(Array.prototype.slice.call(arguments,t.length)))}))})),Zu=Qu;function Yu(e){return function t(r,i,n){switch(arguments.length){case 0:return t;case 1:return Fu(r)?t:Wu((function(t,i){return e(r,t,i)}));case 2:return Fu(r)&&Fu(i)?t:Fu(r)?Wu((function(t,r){return e(t,i,r)})):Fu(i)?Wu((function(t,i){return e(r,t,i)})):Hu((function(t){return e(r,i,t)}));default:return Fu(r)&&Fu(i)&&Fu(n)?t:Fu(r)&&Fu(i)?Wu((function(t,r){return e(t,r,n)})):Fu(r)&&Fu(n)?Wu((function(t,r){return e(t,i,r)})):Fu(i)&&Fu(n)?Wu((function(t,i){return e(r,t,i)})):Fu(r)?Hu((function(t){return e(t,i,n)})):Fu(i)?Hu((function(t){return e(r,t,n)})):Fu(n)?Hu((function(t){return e(r,i,t)})):e(r,i,n)}}}var Xu=function(e){return{value:e,map:function(t){return Xu(t(e))}}},Ju=Yu((function(e,t,r){return e((function(e){return Xu(t(e))}))(r).value})),ec=Ju;function tc(e,t){return Object.prototype.hasOwnProperty.call(t,e)}var rc=Array.isArray||function(e){return null!=e&&e.length>=0&&"[object Array]"===Object.prototype.toString.call(e)},ic=Number.isInteger||function(e){return e<<0===e},nc=Yu((function(e,t,r){var i={};for(var n in r)i[n]=r[n];return i[e]=t,i})),ac=nc,oc=Hu((function(e){return null==e})),sc=oc,uc=Yu((function e(t,r,i){if(0===t.length)return r;var n=t[0];if(t.length>1){var a=!sc(i)&&tc(n,i)?i[n]:ic(t[1])?[]:{};r=e(Array.prototype.slice.call(t,1),r,a)}if(ic(n)&&rc(i)){var o=[].concat(i);return o[n]=r,o}return ac(n,r,i)}));function cc(e,t,r){return function(){if(0===arguments.length)return r();var i=Array.prototype.slice.call(arguments,0),n=i.pop();if(!rc(n)){for(var a=0;a<e.length;){if("function"==typeof n[e[a]])return n[e[a]].apply(n,i);a+=1}if(function(e){return null!=e&&"function"==typeof e["@@transducer/step"]}(n))return t.apply(null,i)(n)}return r.apply(this,arguments)}}function pc(e){return"[object String]"===Object.prototype.toString.call(e)}var lc=Hu((function(e){return!!rc(e)||!!e&&"object"==typeof e&&!pc(e)&&(1===e.nodeType?!!e.length:0===e.length||e.length>0&&e.hasOwnProperty(0)&&e.hasOwnProperty(e.length-1))})),dc=lc,yc=function(){function e(e){this.f=e}return e.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},e.prototype["@@transducer/result"]=function(e){return e},e.prototype["@@transducer/step"]=function(e,t){return this.f(e,t)},e}(),bc=Wu((function(e,t){return Gu(e.length,(function(){return e.apply(t,arguments)}))})),hc=bc;function gc(e,t,r){for(var i=r.next();!i.done;){if((t=e["@@transducer/step"](t,i.value))&&t["@@transducer/reduced"]){t=t["@@transducer/value"];break}i=r.next()}return e["@@transducer/result"](t)}function fc(e,t,r,i){return e["@@transducer/result"](r[i](hc(e["@@transducer/step"],e),t))}var mc="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";var Sc=function(){return this.xf["@@transducer/init"]()},vc=function(e){return this.xf["@@transducer/result"](e)},Ac=function(){function e(e,t){this.xf=t,this.f=e}return e.prototype["@@transducer/init"]=Sc,e.prototype["@@transducer/result"]=vc,e.prototype["@@transducer/step"]=function(e,t){return this.xf["@@transducer/step"](e,this.f(t))},e}(),Cc=Wu((function(e,t){return new Ac(e,t)})),Tc=Object.prototype.toString,Mc=function(){return"[object Arguments]"===Tc.call(arguments)?function(e){return"[object Arguments]"===Tc.call(e)}:function(e){return tc("callee",e)}}(),_c=Mc,Rc=!{toString:null}.propertyIsEnumerable("toString"),Oc=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],wc=function(){return arguments.propertyIsEnumerable("length")}(),Pc=function(e,t){for(var r=0;r<e.length;){if(e[r]===t)return!0;r+=1}return!1},jc="function"!=typeof Object.keys||wc?Hu((function(e){if(Object(e)!==e)return[];var t,r,i=[],n=wc&&_c(e);for(t in e)!tc(t,e)||n&&"length"===t||(i[i.length]=t);if(Rc)for(r=Oc.length-1;r>=0;)tc(t=Oc[r],e)&&!Pc(i,t)&&(i[i.length]=t),r-=1;return i})):Hu((function(e){return Object(e)!==e?[]:Object.keys(e)})),zc=Wu(cc(["fantasy-land/map","map"],Cc,(function(e,t){switch(Object.prototype.toString.call(t)){case"[object Function]":return Vu(t.length,(function(){return e.call(this,t.apply(this,arguments))}));case"[object Object]":return function(e,t,r){if("function"==typeof e&&(e=function(e){return new yc(e)}(e)),dc(r))return function(e,t,r){for(var i=0,n=r.length;i<n;){if((t=e["@@transducer/step"](t,r[i]))&&t["@@transducer/reduced"]){t=t["@@transducer/value"];break}i+=1}return e["@@transducer/result"](t)}(e,t,r);if("function"==typeof r["fantasy-land/reduce"])return fc(e,t,r,"fantasy-land/reduce");if(null!=r[mc])return gc(e,t,r[mc]());if("function"==typeof r.next)return gc(e,t,r);if("function"==typeof r.reduce)return fc(e,t,r,"reduce");throw new TypeError("reduce: list must be array or iterable")}((function(r,i){return r[i]=e(t[i]),r}),{},jc(t));default:return function(e,t){for(var r=0,i=t.length,n=Array(i);r<i;)n[r]=e(t[r]),r+=1;return n}(e,t)}}))),xc=zc,Ic=Wu((function(e,t){return function(r){return function(i){return xc((function(e){return t(e,i)}),r(e(i)))}}})),Ec=Wu((function(e,t){var r=e<0?t.length+e:e;return pc(t)?t.charAt(r):t[r]})),Nc=Ec,kc=Wu((function(e,t){return e.map((function(e){for(var r,i=t,n=0;n<e.length;){if(null==i)return;r=e[n],i=ic(r)?Nc(r,i):i[r],n+=1}return i}))})),Dc=kc,Uc=Wu((function(e,t){return Dc([e],t)[0]})),Lc=Hu((function(e){return Ic(Uc(e),uc(e))})),qc=Lc,Bc=Wu((function(e,t){return function(e,t){var r;t=t||[];var i=(e=e||[]).length,n=t.length,a=[];for(r=0;r<i;)a[a.length]=e[r],r+=1;for(r=0;r<n;)a[a.length]=t[r],r+=1;return a}([e],t)}));function Fc(e){return e}Zu(ec,[qc,Bc,Hu(Fc)]),n(84934),n(55246),Object.freeze({h264:1,aac:2}),Object.freeze([[230400,4e5],[409920,6e5],[921600,3e6],[1049088,3e6],[126e4,4e6],[2073600,5e6],[3686400,6e6],[8294400,15e6]]),n(55246),n(55500),Mu.Abandoning,Mu.Abandoned,Mu.Intitializing,Mu.Ready,Mu.Starting,Mu.Recording,Mu.Paused,Mu.MediaStreamStopped,Mu.Cancelling,Mu.Cancelled,Mu.Completing,Mu.FinishedUploading,Mu.Completed,Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;var Hc=function(){return Hc=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},Hc.apply(this,arguments)};Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError,function(){function e(e){this.method=e.method||"GET",this.hostname=e.hostname||"localhost",this.port=e.port,this.query=e.query||{},this.headers=e.headers||{},this.body=e.body,this.protocol=e.protocol?":"!==e.protocol.slice(-1)?"".concat(e.protocol,":"):e.protocol:"https:",this.path=e.path?"/"!==e.path.charAt(0)?"/".concat(e.path):e.path:"/"}e.isInstance=function(e){if(!e)return!1;var t=e;return"method"in t&&"protocol"in t&&"hostname"in t&&"path"in t&&"object"==typeof t.query&&"object"==typeof t.headers},e.prototype.clone=function(){var t,r=new e(Hc(Hc({},this),{headers:Hc({},this.headers)}));return r.query&&(r.query=(t=r.query,Object.keys(t).reduce((function(e,r){var i,n=t[r];return Hc(Hc({},e),((i={})[r]=Array.isArray(n)?function(e,t,r){if(r||2===arguments.length)for(var i,n=0,a=t.length;n<a;n++)!i&&n in t||(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}([],function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var i,n,a=r.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(i=a.next()).done;)o.push(i.value)}catch(e){n={error:e}}finally{try{i&&!i.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}return o}(n),!1):n,i))}),{}))),r}}();var Wc=function(){function e(e){this.statusCode=e.statusCode,this.headers=e.headers||{},this.body=e.body}return e.isInstance=function(e){if(!e)return!1;var t=e;return"number"==typeof t.statusCode&&"object"==typeof t.headers},e}(),Gc=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,Kc)},Kc=function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())};!function(){function e(e){"function"==typeof e?this.configProvider=e().then((function(e){return e||{}})):(this.config=null!=e?e:{},this.configProvider=Promise.resolve(this.config))}e.prototype.destroy=function(){},e.prototype.handle=function(e,t){var r=(void 0===t?{}:t).abortSignal;return function(e,t,r,i){return new(r||(r=Promise))((function(n,a){function o(e){try{u(i.next(e))}catch(e){a(e)}}function s(e){try{u(i.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,s)}u((i=i.apply(e,t||[])).next())}))}(this,void 0,void 0,(function(){var t,i,n,a,o,s,u,c,p,l,d,y;return function(e,t){var r,i,n,a,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(s){return function(u){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(o=0)),o;)try{if(r=1,i&&(n=2&s[0]?i.return:s[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,s[1])).done)return n;switch(i=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,i=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((n=(n=o.trys).length>0&&n[n.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){o.label=s[1];break}if(6===s[0]&&o.label<n[1]){o.label=n[1],n=s;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(s);break}n[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],i=0}finally{r=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}}(this,(function(b){switch(b.label){case 0:return this.config?[3,2]:(t=this,[4,this.configProvider]);case 1:t.config=b.sent(),b.label=2;case 2:return i=this.config.requestTimeout,(null==r?void 0:r.aborted)?((n=new Error("Request aborted")).name="AbortError",[2,Promise.reject(n)]):(a=e.path,e.query&&(o=function(e){var t,r,i=[];try{for(var n=function(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],i=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}(Object.keys(e).sort()),a=n.next();!a.done;a=n.next()){var o=a.value,s=e[o];if(o=Gc(o),Array.isArray(s))for(var u=0,c=s.length;u<c;u++)i.push("".concat(o,"=").concat(Gc(s[u])));else{var p=o;(s||"string"==typeof s)&&(p+="=".concat(Gc(s))),i.push(p)}}}catch(e){t={error:e}}finally{try{a&&!a.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}return i.join("&")}(e.query),o&&(a+="?".concat(o))),s=e.port,u=e.method,c="".concat(e.protocol,"//").concat(e.hostname).concat(s?":".concat(s):"").concat(a),p="GET"===u||"HEAD"===u?void 0:e.body,l={body:p,headers:new Headers(e.headers),method:u},"undefined"!=typeof AbortController&&(l.signal=r),d=new Request(c,l),y=[fetch(d).then((function(e){var t,r,i=e.headers,n={};try{for(var a=function(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],i=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}(i.entries()),o=a.next();!o.done;o=a.next()){var s=o.value;n[s[0]]=s[1]}}catch(e){t={error:e}}finally{try{o&&!o.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}return void 0!==e.body?{response:new Wc({headers:n,statusCode:e.status,body:e.body})}:e.blob().then((function(t){return{response:new Wc({headers:n,statusCode:e.status,body:t})}}))})),(h=i,void 0===h&&(h=0),new Promise((function(e,t){h&&setTimeout((function(){var e=new Error("Request did not complete within ".concat(h," ms"));e.name="TimeoutError",t(e)}),h)})))],r&&y.push(new Promise((function(e,t){r.onabort=function(){var e=new Error("Request aborted");e.name="AbortError",t(e)}}))),[2,Promise.race(y)])}var h}))}))}}();for(var $c={},Vc=new Array(64),Qc=0,Zc="A".charCodeAt(0),Yc="Z".charCodeAt(0);Qc+Zc<=Yc;Qc++){var Xc=String.fromCharCode(Qc+Zc);$c[Xc]=Qc,Vc[Qc]=Xc}for(Qc=0,Zc="a".charCodeAt(0),Yc="z".charCodeAt(0);Qc+Zc<=Yc;Qc++){var Jc=Qc+26;$c[Xc=String.fromCharCode(Qc+Zc)]=Jc,Vc[Jc]=Xc}for(Qc=0;Qc<10;Qc++)$c[Qc.toString(10)]=Qc+52,Xc=Qc.toString(10),Jc=Qc+52,$c[Xc]=Jc,Vc[Jc]=Xc;$c["+"]=62,Vc[62]="+",$c["/"]=63,Vc[63]="/";var ep,tp=n(35251),rp=n.n(tp),ip=n(35134),np=(n(53239),n(90778).Buffer),ap=n(55246),op=Object.defineProperty,sp=(e,t)=>{t=t||0;for(var r=1;r<=8&&!(e[t]>=Math.pow(2,8-r));r++);if(r>8)throw new Error("Unrepresentable length: "+r+" "+e.toString("hex",t,t+r));if(t+r>e.length)return null;let i=e[t]&(1<<8-r)-1;for(let n=1;n<r;n++){if(7===n&&i>=Math.pow(2,45)&&e[t+7]>0)return{length:r,value:-1};i*=Math.pow(2,8),i+=e[t+n]}return{length:r,value:i}},up=e=>{if(e<0||e>Math.pow(2,53))throw new Error("Unrepresentable value: "+e);for(var t=1;t<=8&&!(e<Math.pow(2,7*t)-1);t++);const r=new ip.lW(t);for(let i=1;i<=t;i++){const n=255&e;r[t-i]=n,e-=n,e/=Math.pow(2,8)}return r[0]=r[0]|1<<8-t,r},cp=rp(),pp=e=>cp(new ip.lW(e)),lp=e=>ip.lW.concat(e),dp=(e,t,r=!1)=>lp([e,r?new ip.lW("01ffffffffffffff","hex"):up(t.length),t]),yp=e=>e instanceof Date?e:new Date(new Date("2001-01-01T00:00:00.000Z").getTime()+Number(e)/1e3/1e3),bp={128:{name:"ChapterDisplay",level:4,type:"m",multiple:!0,webm:!0,description:"Contains all possible strings to use for the chapter display.",minver:1,crc:!1},131:{name:"TrackType",level:3,type:"u",multiple:!1,webm:!0,description:"The `TrackType` defines the type of each frame found in the Track. The value **SHOULD** be stored on 1 octet.",mandatory:!0,minver:1,crc:!1},133:{name:"ChapString",level:5,type:"8",multiple:!1,webm:!0,description:"Contains the string to use as the chapter atom.",mandatory:!0,cppname:"ChapterString",minver:1,crc:!1},134:{name:"CodecID",level:3,type:"s",multiple:!1,webm:!0,description:"An ID corresponding to the codec, see [@?MatroskaCodec] for more info.",mandatory:!0,minver:1,crc:!1},136:{name:"FlagDefault",level:3,type:"u",multiple:!1,webm:!0,description:"Set if that track (audio, video or subs) is eligible for automatic selection by the player; see (#default-track-selection) for more details.",mandatory:!0,range:"0-1",cppname:"TrackFlagDefault",minver:1,default:"1",crc:!1},137:{name:"ChapterTrackNumber",level:5,type:"u",multiple:!0,description:"UID of the Track to apply this chapter to. In the absence of a control track, choosing this chapter will select the listed Tracks and deselect unlisted tracks. Absence of this Element indicates that the Chapter **SHOULD** be applied to any currently used Tracks.",mandatory:!0,range:"not 0",cppname:"ChapterTrackNumber",minver:1,crc:!1},142:{name:"Slices",level:3,type:"m",multiple:!1,description:"Contains slices description.",minver:0,maxver:0,crc:!1},143:{name:"ChapterTrack",level:4,type:"m",multiple:!1,description:"List of tracks on which the chapter applies. If this Element is not present, all tracks apply",minver:1,crc:!1},145:{name:"ChapterTimeStart",level:4,type:"u",multiple:!1,webm:!0,description:"Timestamp of the start of Chapter, expressed in Matroska Ticks -- i.e., in nanoseconds; see (#timestamp-ticks).",mandatory:!0,minver:1,crc:!1},146:{name:"ChapterTimeEnd",level:4,type:"u",multiple:!1,webm:!0,description:"Timestamp of the end of Chapter timestamp excluded, expressed in Matroska Ticks -- i.e., in nanoseconds; see (#timestamp-ticks). The value **MUST** be greater than or equal to the `ChapterTimeStart` of the same `ChapterAtom`.",minver:1,crc:!1},150:{name:"CueRefTime",level:5,type:"u",multiple:!1,description:"Timestamp of the referenced Block, expressed in Matroska Ticks -- i.e., in nanoseconds; see (#timestamp-ticks).",mandatory:!0,minver:2,crc:!1},151:{name:"CueRefCluster",level:5,type:"u",multiple:!1,description:"The Segment Position of the Cluster containing the referenced Block.",mandatory:!0,minver:0,maxver:0,crc:!1},152:{name:"ChapterFlagHidden",level:4,type:"u",multiple:!1,description:"Set to 1 if a chapter is hidden. Hidden chapters **SHOULD NOT** be available to the user interface (but still to Control Tracks; see (#chapterflaghidden) on Chapter flags).",mandatory:!0,range:"0-1",minver:1,default:"0",crc:!1},154:{name:"FlagInterlaced",level:4,type:"u",multiple:!1,webm:!0,description:"Specify whether the video frames in this track are interlaced.",mandatory:!0,cppname:"VideoFlagInterlaced",minver:2,default:"0",crc:!1},155:{name:"BlockDuration",level:3,type:"u",multiple:!1,webm:!0,description:"The duration of the Block, expressed in Track Ticks; see (#timestamp-ticks). The BlockDuration Element can be useful at the end of a Track to define the duration of the last frame (as there is no subsequent Block available), or when there is a break in a track like for subtitle tracks.",minver:1,crc:!1},156:{name:"FlagLacing",level:3,type:"u",multiple:!1,webm:!0,description:"Set to 1 if the track **MAY** contain blocks using lacing. When set to 0 all blocks **MUST** have their lacing flags set to No lacing; see (#block-lacing) on Block Lacing.",mandatory:!0,range:"0-1",cppname:"TrackFlagLacing",minver:1,default:"1",crc:!1},157:{name:"FieldOrder",level:4,type:"u",multiple:!1,description:"Specify the field ordering of video frames in this track.",mandatory:!0,cppname:"VideoFieldOrder",minver:4,default:"2",crc:!1},159:{name:"Channels",level:4,type:"u",multiple:!1,webm:!0,description:"Numbers of channels in the track.",mandatory:!0,range:"not 0",cppname:"AudioChannels",minver:1,default:"1",crc:!1},160:{name:"BlockGroup",level:2,type:"m",multiple:!0,webm:!0,description:"Basic container of information containing a single Block and information specific to that Block.",minver:1,crc:!1},161:{name:"Block",level:3,type:"b",multiple:!1,webm:!0,description:"Block containing the actual data to be rendered and a timestamp relative to the Cluster Timestamp; see (#block-structure) on Block Structure.",mandatory:!0,minver:1,crc:!1},162:{name:"BlockVirtual",level:3,type:"b",multiple:!1,description:"A Block with no data. It must be stored in the stream at the place the real Block would be in display order. ",minver:0,maxver:0,crc:!1},163:{name:"SimpleBlock",level:2,type:"b",multiple:!0,webm:!0,description:"Similar to Block, see (#block-structure), but without all the extra information, mostly used to reduced overhead when no extra feature is needed; see (#simpleblock-structure) on SimpleBlock Structure.",minver:2,divx:!0,crc:!1},164:{name:"CodecState",level:3,type:"b",multiple:!1,description:"The new codec state to use. Data interpretation is private to the codec. This information **SHOULD** always be referenced by a seek entry.",minver:2,crc:!1},165:{name:"BlockAdditional",level:5,type:"b",multiple:!1,webm:!0,description:"Interpreted by the codec as it wishes (using the BlockAddID).",mandatory:!0,minver:1,crc:!1},166:{name:"BlockMore",level:4,type:"m",multiple:!0,webm:!0,description:"Contain the BlockAdditional and some parameters.",mandatory:!0,minver:1,crc:!1},167:{name:"Position",level:2,type:"u",multiple:!1,description:"The Segment Position of the Cluster in the Segment (0 in live streams). It might help to resynchronise offset on damaged streams.",cppname:"ClusterPosition",minver:1,maxver:4,crc:!1},170:{name:"CodecDecodeAll",level:3,type:"u",multiple:!1,description:"Set to 1 if the codec can decode potentially damaged data.",mandatory:!0,range:"0-1",minver:1,maxver:0,default:"1",crc:!1},171:{name:"PrevSize",level:2,type:"u",multiple:!1,webm:!0,description:"Size of the previous Cluster, in octets. Can be useful for backward playing.",cppname:"ClusterPrevSize",minver:1,crc:!1},174:{name:"TrackEntry",level:2,type:"m",multiple:!0,webm:!0,description:"Describes a track with all Elements.",mandatory:!0,minver:1,crc:!1},175:{name:"EncryptedBlock",level:2,type:"b",multiple:!0,description:"Similar to SimpleBlock, see (#simpleblock-structure), but the data inside the Block are Transformed (encrypt and/or signed).",minver:0,maxver:0,crc:!1},176:{name:"PixelWidth",level:4,type:"u",multiple:!1,webm:!0,description:"Width of the encoded video frames in pixels.",mandatory:!0,range:"not 0",cppname:"VideoPixelWidth",minver:1,crc:!1},178:{name:"CueDuration",level:4,type:"u",multiple:!1,webm:!0,description:"The duration of the block, expressed in Segment Ticks which is based on TimestampScale; see (#timestamp-ticks). If missing, the track's DefaultDuration does not apply and no duration information is available in terms of the cues.",minver:4,crc:!1},179:{name:"CueTime",level:3,type:"u",multiple:!1,webm:!0,description:"Absolute timestamp of the seek point, expressed in Matroska Ticks -- i.e., in nanoseconds; see (#timestamp-ticks).",mandatory:!0,minver:1,crc:!1},181:{name:"SamplingFrequency",level:4,type:"f",multiple:!1,webm:!0,description:"Sampling frequency in Hz.",mandatory:!0,range:"> 0x0p+0",cppname:"AudioSamplingFreq",minver:1,default:"0x1.f4p+12",crc:!1},182:{name:"ChapterAtom",level:3,type:"m",multiple:!0,webm:!0,description:"Contains the atom information to use as the chapter atom (apply to all tracks).",mandatory:!0,minver:1,crc:!1},183:{name:"CueTrackPositions",level:3,type:"m",multiple:!0,webm:!0,description:"Contain positions for different tracks corresponding to the timestamp.",mandatory:!0,minver:1,crc:!1},185:{name:"FlagEnabled",level:3,type:"u",multiple:!1,webm:!0,description:"Set to 1 if the track is usable. It is possible to turn a not usable track into a usable track using chapter codecs or control tracks.",mandatory:!0,range:"0-1",cppname:"TrackFlagEnabled",minver:2,default:"1",crc:!1},186:{name:"PixelHeight",level:4,type:"u",multiple:!1,webm:!0,description:"Height of the encoded video frames in pixels.",mandatory:!0,range:"not 0",cppname:"VideoPixelHeight",minver:1,crc:!1},187:{name:"CuePoint",level:2,type:"m",multiple:!0,webm:!0,description:"Contains all information relative to a seek point in the Segment.",mandatory:!0,minver:1,crc:!1},191:{name:"CRC-32",level:-1,type:"b",multiple:!0,description:"The CRC is computed on all the data of the Master element it's in. The CRC element should be the first in it's parent master for easier reading. All level 1 elements should include a CRC-32. The CRC in use is the IEEE CRC32 Little Endian.",minver:1,crc:!0,webm:!1},192:{name:"TrickTrackUID",level:3,type:"u",multiple:!1,description:"The TrackUID of the Smooth FF/RW video in the paired EBML structure corresponding to this video track. See [@?DivXTrickTrack].",minver:0,maxver:0,divx:!0,crc:!1},193:{name:"TrickTrackSegmentUID",level:3,type:"b",multiple:!1,description:"The SegmentUID of the Segment containing the track identified by TrickTrackUID. See [@?DivXTrickTrack].",minver:0,maxver:0,divx:!0,crc:!1},196:{name:"TrickMasterTrackSegmentUID",level:3,type:"b",multiple:!1,description:"The SegmentUID of the Segment containing the track identified by MasterTrackUID. See [@?DivXTrickTrack].",minver:0,maxver:0,divx:!0,crc:!1},198:{name:"TrickTrackFlag",level:3,type:"u",multiple:!1,description:"Set to 1 if this video track is a Smooth FF/RW track. If set to 1, MasterTrackUID and MasterTrackSegUID should must be present and BlockGroups for this track must contain ReferenceFrame structures. Otherwise, TrickTrackUID and TrickTrackSegUID must be present if this track has a corresponding Smooth FF/RW track. See [@?DivXTrickTrack].",minver:0,maxver:0,default:"0",divx:!0,crc:!1},199:{name:"TrickMasterTrackUID",level:3,type:"u",multiple:!1,description:"The TrackUID of the video track in the paired EBML structure that corresponds to this Smooth FF/RW track. See [@?DivXTrickTrack].",minver:0,maxver:0,divx:!0,crc:!1},200:{name:"ReferenceFrame",level:3,type:"m",multiple:!1,description:"Contains information about the last reference frame. See [@?DivXTrickTrack].",minver:0,maxver:0,divx:!0,crc:!1},201:{name:"ReferenceOffset",level:4,type:"u",multiple:!1,description:"The relative offset, in bytes, from the previous BlockGroup element for this Smooth FF/RW video track to the containing BlockGroup element. See [@?DivXTrickTrack].",mandatory:!0,minver:0,maxver:0,divx:!0,crc:!1},202:{name:"ReferenceTimeCode",level:4,type:"u",multiple:!1,description:"The timestamp of the BlockGroup pointed to by ReferenceOffset, expressed in Track Ticks; see (#timestamp-ticks). See [@?DivXTrickTrack].",mandatory:!0,cppname:"ReferenceTimeCode",minver:0,maxver:0,divx:!0,crc:!1},203:{name:"BlockAdditionID",level:5,type:"u",multiple:!1,description:"The ID of the BlockAdditional Element (0 is the main Block).",cppname:"SliceBlockAddID",minver:0,maxver:0,default:"0",crc:!1},204:{name:"LaceNumber",level:5,type:"u",multiple:!1,description:"The reverse number of the frame in the lace (0 is the last frame, 1 is the next to last, etc.). Being able to interpret this Element is not required for playback.",cppname:"SliceLaceNumber",minver:0,maxver:0,crc:!1},205:{name:"FrameNumber",level:5,type:"u",multiple:!1,description:"The number of the frame to generate from this lace with this delay (allow you to generate many frames from the same Block/Frame).",cppname:"SliceFrameNumber",minver:0,maxver:0,default:"0",crc:!1},206:{name:"Delay",level:5,type:"u",multiple:!1,description:"The delay to apply to the Element, expressed in Track Ticks; see (#timestamp-ticks).",cppname:"SliceDelay",minver:0,maxver:0,default:"0",crc:!1},207:{name:"SliceDuration",level:5,type:"u",multiple:!1,description:"The duration to apply to the Element, expressed in Track Ticks; see (#timestamp-ticks).",minver:0,maxver:0,default:"0",crc:!1},215:{name:"TrackNumber",level:3,type:"u",multiple:!1,webm:!0,description:"The track number as used in the Block Header.",mandatory:!0,range:"not 0",minver:1,crc:!1},219:{name:"CueReference",level:4,type:"m",multiple:!0,description:"The Clusters containing the referenced Blocks.",minver:2,crc:!1},224:{name:"Video",level:3,type:"m",multiple:!1,webm:!0,description:"Video settings.",cppname:"TrackVideo",minver:1,crc:!1},225:{name:"Audio",level:3,type:"m",multiple:!1,webm:!0,description:"Audio settings.",cppname:"TrackAudio",minver:1,crc:!1},226:{name:"TrackOperation",level:3,type:"m",multiple:!1,description:"Operation that needs to be applied on tracks to create this virtual track. For more details look at (#track-operation).",minver:3,crc:!1},227:{name:"TrackCombinePlanes",level:4,type:"m",multiple:!1,description:"Contains the list of all video plane tracks that need to be combined to create this 3D track",minver:3,crc:!1},228:{name:"TrackPlane",level:5,type:"m",multiple:!0,description:"Contains a video plane track that need to be combined to create this 3D track",mandatory:!0,minver:3,crc:!1},229:{name:"TrackPlaneUID",level:6,type:"u",multiple:!1,description:"The trackUID number of the track representing the plane.",mandatory:!0,range:"not 0",minver:3,crc:!1},230:{name:"TrackPlaneType",level:6,type:"u",multiple:!1,description:"The kind of plane this track corresponds to.",mandatory:!0,minver:3,crc:!1},231:{name:"Timecode",level:2,type:"u",multiple:!1,webm:!0,description:"Absolute timestamp of the cluster, expressed in Segment Ticks which is based on TimestampScale; see (#timestamp-ticks).",mandatory:!0,cppname:"ClusterTimecode",minver:1,crc:!1},232:{name:"TimeSlice",level:4,type:"m",multiple:!0,description:"Contains extra time information about the data contained in the Block. Being able to interpret this Element is not required for playback.",minver:0,maxver:0,crc:!1},233:{name:"TrackJoinBlocks",level:4,type:"m",multiple:!1,description:"Contains the list of all tracks whose Blocks need to be combined to create this virtual track",minver:3,crc:!1},234:{name:"CueCodecState",level:4,type:"u",multiple:!1,description:"The Segment Position ((#segment-position)) of the Codec State corresponding to this Cue Element. 0 means that the data is taken from the initial Track Entry.",mandatory:!0,minver:2,default:"0",crc:!1},235:{name:"CueRefCodecState",level:5,type:"u",multiple:!1,description:"The Segment Position of the Codec State corresponding to this referenced Element. 0 means that the data is taken from the initial Track Entry.",minver:0,maxver:0,default:"0",crc:!1},236:{name:"Void",level:-1,type:"b",multiple:!0,description:"Used to void damaged data, to avoid unexpected behaviors when using damaged data. The content is discarded. Also used to reserve space in a sub-element for later use.",minver:1,crc:!1},237:{name:"TrackJoinUID",level:5,type:"u",multiple:!0,description:"The trackUID number of a track whose blocks are used to create this virtual track.",mandatory:!0,range:"not 0",minver:3,crc:!1},238:{name:"BlockAddID",level:5,type:"u",multiple:!1,webm:!0,description:"An ID to identify how to interpret the BlockAdditional data; see Codec BlockAdditions section of [@?MatroskaCodec] for more information. A value of 1 indicates that the meaning of the BlockAdditional data is defined by the codec. Any other value indicates the meaning of the BlockAdditional data is found in the BlockAddIDType found in the TrackEntry.",mandatory:!0,range:"not 0",minver:1,default:"1",crc:!1},240:{name:"CueRelativePosition",level:4,type:"u",multiple:!1,webm:!0,description:"The relative position inside the Cluster of the referenced SimpleBlock or BlockGroup with 0 being the first possible position for an Element inside that Cluster.",minver:4,crc:!1},241:{name:"CueClusterPosition",level:4,type:"u",multiple:!1,webm:!0,description:"The Segment Position ((#segment-position)) of the Cluster containing the associated Block.",mandatory:!0,minver:1,crc:!1},247:{name:"CueTrack",level:4,type:"u",multiple:!1,webm:!0,description:"The track for which a position is given.",mandatory:!0,range:"not 0",minver:1,crc:!1},250:{name:"ReferencePriority",level:3,type:"u",multiple:!1,description:"This frame is referenced and has the specified cache priority. In cache only a frame of the same or higher priority can replace this frame. A value of 0 means the frame is not referenced.",mandatory:!0,minver:1,default:"0",crc:!1},251:{name:"ReferenceBlock",level:3,type:"i",multiple:!0,webm:!0,description:"A timestamp value, relative to the timestamp of the Block in this BlockGroup, expressed in Track Ticks; see (#timestamp-ticks). This is used to reference other frames necessary to decode this frame. The relative value **SHOULD** correspond to a valid `Block` this `Block` depends on. Historically Matroska Writer didn't write the actual `Block(s)` this `Block` depends on, but *some* `Block` in the past.  The value \"0\" **MAY** also be used to signify this `Block` cannot be decoded on its own, but without knownledge of which `Block` is necessary. In this case, other `ReferenceBlock` **MUST NOT** be found in the same `BlockGroup`.  If the `BlockGroup` doesn't have any `ReferenceBlock` element, then the `Block` it contains can be decoded without using any other `Block` data.",minver:1,crc:!1},253:{name:"ReferenceVirtual",level:3,type:"i",multiple:!1,description:"The Segment Position of the data that would otherwise be in position of the virtual block.",minver:0,maxver:0,crc:!1},16804:{name:"BlockAddIDName",level:4,type:"s",multiple:!1,description:"A human-friendly name describing the type of BlockAdditional data, as defined by the associated Block Additional Mapping.",minver:4,crc:!1},16868:{name:"BlockAdditionMapping",level:3,type:"m",multiple:!0,description:"Contains elements that extend the track format, by adding content either to each frame, with BlockAddID ((#blockaddid-element)), or to the track as a whole with BlockAddIDExtraData.",minver:4,crc:!1},16871:{name:"BlockAddIDType",level:4,type:"u",multiple:!1,description:"Stores the registered identifier of the Block Additional Mapping to define how the BlockAdditional data should be handled.",mandatory:!0,minver:4,default:"0",crc:!1},16877:{name:"BlockAddIDExtraData",level:4,type:"b",multiple:!1,description:"Extra binary data that the BlockAddIDType can use to interpret the BlockAdditional data. The interpretation of the binary data depends on the BlockAddIDType value and the corresponding Block Additional Mapping.",minver:4,crc:!1},16880:{name:"BlockAddIDValue",level:4,type:"u",multiple:!1,description:"If the track format extension needs content beside frames, the value refers to the BlockAddID ((#blockaddid-element)), value being described.",range:">=2",minver:4,crc:!1},16980:{name:"ContentCompAlgo",level:6,type:"u",multiple:!1,description:"The compression algorithm used.",mandatory:!0,minver:1,default:"0",crc:!1},16981:{name:"ContentCompSettings",level:6,type:"b",multiple:!1,description:"Settings that might be needed by the decompressor. For Header Stripping (`ContentCompAlgo`=3), the bytes that were removed from the beginning of each frames of the track.",minver:1,crc:!1},17025:{name:"DocTypeExtension",level:1,type:"m",multiple:!0,description:"A DocTypeExtension adds extra Elements to the main DocType+DocTypeVersion\ttuple it's attached to. An EBML Reader **MAY** know these extra Elements and how to use them. A DocTypeExtension **MAY** be used to iterate between\texperimental Elements before they are integrated into a regular\tDocTypeVersion. Reading one DocTypeExtension version of a DocType+DocTypeVersion tuple doesn't imply one should be able to read upper versions of this DocTypeExtension.",minver:1,crc:!1},17026:{name:"DocType",level:1,type:"s",multiple:!0,description:"A string that describes the type of document that follows this EBML header, for example 'matroska' or 'webm'.",mandatory:!0,minver:1,crc:!1,default:"matroska"},17027:{name:"DocTypeExtensionName",level:2,type:"s",multiple:!1,description:"The name of the DocTypeExtension to differentiate it from other DocTypeExtensions of the same DocType+DocTypeVersion tuple. A DocTypeExtensionName value **MUST** be unique within the EBML Header.",mandatory:!0,minver:1,crc:!1},17028:{name:"DocTypeExtensionVersion",level:2,type:"u",multiple:!1,description:"The version of the DocTypeExtension. Different DocTypeExtensionVersion values of the same DocType + DocTypeVersion + DocTypeExtensionName tuple **MAY** contain completely different sets of extra Elements. An EBML Reader **MAY** support multiple versions\tof the same tuple, only one version of the tuple, or not support the tuple at all.",mandatory:!0,range:"not 0",minver:1,crc:!1},17029:{name:"DocTypeReadVersion",level:1,type:"u",multiple:!1,description:"The minimum DocType version an interpreter has to support to read this file.",mandatory:!0,range:"not 0",minver:1,default:"1",crc:!1},17030:{name:"EBMLVersion",level:1,type:"u",multiple:!1,description:"The version of EBML parser used to create the file.",mandatory:!0,range:"not 0",minver:1,default:"1",crc:!1},17031:{name:"DocTypeVersion",level:1,type:"u",multiple:!1,description:"The version of DocType interpreter used to create the file.",mandatory:!0,range:"not 0",minver:1,default:"1",crc:!1},17138:{name:"EBMLMaxIDLength",level:1,type:"u",multiple:!1,mandatory:!0,range:">=4",minver:1,default:"4",crc:!1,description:"The maximum length of the IDs you'll find in this file (4 or less in Matroska)."},17139:{name:"EBMLMaxSizeLength",level:1,type:"u",multiple:!1,mandatory:!0,range:"not 0",minver:1,default:"8",crc:!1,description:"The maximum length of the sizes you'll find in this file (8 or less in Matroska). This does not override the element size indicated at the beginning of an element. Elements that have an indicated size which is larger than what is allowed by EBMLMaxSizeLength shall be considered invalid."},17143:{name:"EBMLReadVersion",level:1,type:"u",multiple:!1,description:"The minimum EBML version a parser has to support to read this file.",mandatory:!0,range:"1",minver:1,default:"1",crc:!1},17276:{name:"ChapLanguage",level:5,type:"s",multiple:!0,webm:!0,description:"A language corresponding to the string, in the Matroska languages form; see (#language-codes) on language codes. This Element **MUST** be ignored if a ChapLanguageBCP47 Element is used within the same ChapterDisplay Element.",mandatory:!0,cppname:"ChapterLanguage",minver:1,default:"eng",crc:!1},17277:{name:"ChapLanguageBCP47",level:5,type:"s",multiple:!0,description:"A language corresponding to the ChapString, in the [@!BCP47] form; see (#language-codes) on language codes. If a ChapLanguageBCP47 Element is used, then any ChapLanguage and ChapCountry Elements used in the same ChapterDisplay **MUST** be ignored.",cppname:"ChapLanguageIETF",minver:4,crc:!1},17278:{name:"ChapCountry",level:5,type:"s",multiple:!0,webm:!0,description:"A country corresponding to the string, in the Matroska countries form; see (#country-codes) on country codes. This Element **MUST** be ignored if a ChapLanguageBCP47 Element is used within the same ChapterDisplay Element.",cppname:"ChapterCountry",minver:1,crc:!1},17476:{name:"SegmentFamily",level:2,type:"b",multiple:!0,description:"A unique ID that all Segments of a Linked Segment **MUST** share (128 bits). It is equivalent to a UUID v4 [@!RFC4122] with all bits randomly (or pseudo-randomly) chosen. An actual UUID v4 value, where some bits are not random, **MAY** also be used.",minver:1,crc:!1},17505:{name:"DateUTC",level:2,type:"d",multiple:!1,webm:!0,description:"The date and time that the Segment was created by the muxing application or library.",minver:1,crc:!1},17530:{name:"TagLanguage",level:4,type:"s",multiple:!1,webm:!0,description:"Specifies the language of the tag specified, in the Matroska languages form; see (#language-codes) on language codes. This Element **MUST** be ignored if the TagLanguageBCP47 Element is used within the same SimpleTag Element.",mandatory:!0,cppname:"TagLangue",minver:1,default:"und",crc:!1},17531:{name:"TagLanguageBCP47",level:4,type:"s",multiple:!1,description:"The language used in the TagString, in the [@!BCP47] form; see (#language-codes) on language codes. If this Element is used, then any TagLanguage Elements used in the same SimpleTag **MUST** be ignored.",cppname:"TagLanguageIETF",minver:4,crc:!1},17540:{name:"TagDefault",level:4,type:"u",multiple:!1,webm:!0,description:"A boolean value to indicate if this is the default/original language to use for the given tag.",mandatory:!0,range:"0-1",minver:1,default:"1",crc:!1},17541:{name:"TagBinary",level:4,type:"b",multiple:!1,webm:!0,description:"The values of the Tag, if it is binary. Note that this cannot be used in the same SimpleTag as TagString.",minver:1,crc:!1},17543:{name:"TagString",level:4,type:"8",multiple:!1,webm:!0,description:"The value of the Tag.",minver:1,crc:!1},17545:{name:"Duration",level:2,type:"f",multiple:!1,webm:!0,description:"Duration of the Segment, expressed in Segment Ticks which is based on TimestampScale; see (#timestamp-ticks).",range:"> 0x0p+0",minver:1,crc:!1},17588:{name:"TagDefaultBogus",level:4,type:"u",multiple:!1,description:"A variant of the TagDefault element with a bogus Element ID; see (#tagdefault-element).",mandatory:!0,range:"0-1",minver:0,maxver:0,default:"1",crc:!1},17677:{name:"ChapProcessPrivate",level:5,type:"b",multiple:!1,description:'Some optional data attached to the ChapProcessCodecID information. For ChapProcessCodecID = 1, it is the "DVD level" equivalent; see (#menu-features) on DVD menus.',cppname:"ChapterProcessPrivate",minver:1,crc:!1},17696:{name:"EditionDisplay",level:3,type:"m",multiple:!0,description:"Contains a possible string to use for the edition display for the given languages.",minver:5,crc:!1},17697:{name:"EditionString",level:4,type:"8",multiple:!1,description:"Contains the string to use as the edition name.",mandatory:!0,minver:5,crc:!1},17800:{name:"ChapterSkipType",level:4,type:"u",multiple:!1,webm:!1,description:"Indicate what type of content the ChapterAtom contains and might be skipped. It can be used to automatically skip content based on the type. If a `ChapterAtom` is inside a `ChapterAtom` that has a `ChapterSkipType` set, it **MUST NOT** have a `ChapterSkipType` or have a `ChapterSkipType` with the same value as it's parent `ChapterAtom`. If the `ChapterAtom` doesn't contain a `ChapterTimeEnd`, the value of the `ChapterSkipType` is only valid until the next `ChapterAtom` with a `ChapterSkipType` value or the end of the file. ",minver:5,crc:!1},17816:{name:"ChapterFlagEnabled",level:4,type:"u",multiple:!1,description:"Set to 1 if the chapter is enabled. It can be enabled/disabled by a Control Track. When disabled, the movie **SHOULD** skip all the content between the TimeStart and TimeEnd of this chapter; see (#chapter-flags) on Chapter flags.",mandatory:!0,range:"0-1",minver:1,default:"1",crc:!1},17827:{name:"TagName",level:4,type:"8",multiple:!1,webm:!0,description:"The name of the Tag that is going to be stored.",mandatory:!0,minver:1,crc:!1},17849:{name:"EditionEntry",level:2,type:"m",multiple:!0,webm:!0,description:"Contains all information about a Segment edition.",mandatory:!0,minver:1,crc:!1},17852:{name:"EditionUID",level:3,type:"u",multiple:!1,description:"A unique ID to identify the edition. It's useful for tagging an edition.",range:"not 0",minver:1,crc:!1},17853:{name:"EditionFlagHidden",level:3,type:"u",multiple:!1,description:"Set to 1 if an edition is hidden. Hidden editions **SHOULD NOT** be available to the user interface (but still to Control Tracks; see (#chapter-flags) on Chapter flags).",mandatory:!0,range:"0-1",minver:1,default:"0",crc:!1},17883:{name:"EditionFlagDefault",level:3,type:"u",multiple:!1,description:"Set to 1 if the edition **SHOULD** be used as the default one.",mandatory:!0,range:"0-1",minver:1,default:"0",crc:!1},17885:{name:"EditionFlagOrdered",level:3,type:"u",multiple:!1,description:"Set to 1 if the chapters can be defined multiple times and the order to play them is enforced; see (#editionflagordered).",mandatory:!0,range:"0-1",minver:1,default:"0",crc:!1},17892:{name:"EditionLanguageIETF",level:4,type:"s",multiple:!0,description:"One language corresponding to the EditionString, in the [@!BCP47] form; see (#language-codes) on language codes.",minver:5,crc:!1},18012:{name:"FileData",level:3,type:"b",multiple:!1,description:"The data of the file.",mandatory:!0,minver:1,crc:!1},18016:{name:"FileMimeType",level:3,type:"s",multiple:!1,description:"Media type of the file following the [@!RFC6838] format.",mandatory:!0,cppname:"MimeType",minver:1,crc:!1},18017:{name:"FileUsedStartTime",level:3,type:"u",multiple:!1,description:"The timestamp at which this optimized font attachment comes into context, expressed in Segment Ticks which is based on TimestampScale. See [@?DivXWorldFonts].",minver:0,maxver:0,divx:!0,crc:!1},18018:{name:"FileUsedEndTime",level:3,type:"u",multiple:!1,description:"The timestamp at which this optimized font attachment goes out of context, expressed in Segment Ticks which is based on TimestampScale. See [@?DivXWorldFonts].",minver:0,maxver:0,divx:!0,crc:!1},18030:{name:"FileName",level:3,type:"8",multiple:!1,description:"Filename of the attached file.",mandatory:!0,minver:1,crc:!1},18037:{name:"FileReferral",level:3,type:"b",multiple:!1,description:"A binary value that a track/codec can refer to when the attachment is needed.",minver:0,maxver:0,crc:!1},18046:{name:"FileDescription",level:3,type:"8",multiple:!1,description:"A human-friendly name for the attached file.",minver:1,crc:!1},18094:{name:"FileUID",level:3,type:"u",multiple:!1,description:"Unique ID representing the file, as random as possible.",mandatory:!0,range:"not 0",minver:1,crc:!1},18401:{name:"ContentEncAlgo",level:6,type:"u",multiple:!1,webm:!0,description:"The encryption algorithm used.",mandatory:!0,minver:1,default:"0",crc:!1},18402:{name:"ContentEncKeyID",level:6,type:"b",multiple:!1,webm:!0,description:"For public key algorithms this is the ID of the public key the the data was encrypted with.",minver:1,crc:!1},18403:{name:"ContentSignature",level:6,type:"b",multiple:!1,description:"A cryptographic signature of the contents.",minver:1,maxver:0,crc:!1},18404:{name:"ContentSigKeyID",level:6,type:"b",multiple:!1,description:"This is the ID of the private key the data was signed with.",minver:1,maxver:0,crc:!1},18405:{name:"ContentSigAlgo",level:6,type:"u",multiple:!1,description:"The algorithm used for the signature.",minver:1,maxver:0,default:"0",crc:!1},18406:{name:"ContentSigHashAlgo",level:6,type:"u",multiple:!1,description:"The hash algorithm used for the signature.",minver:1,maxver:0,default:"0",crc:!1},18407:{name:"ContentEncAESSettings",level:6,type:"m",multiple:!0,webm:!0,description:"Settings describing the encryption algorithm used. If `ContentEncAlgo` != 5 this **MUST** be ignored.",minver:4,crc:!1},18408:{name:"AESSettingsCipherMode",level:7,type:"u",multiple:!0,webm:!0,description:"The AES cipher mode used in the encryption.",mandatory:!0,minver:4,crc:!1},19840:{name:"MuxingApp",level:2,type:"8",multiple:!1,webm:!0,description:'Muxing application or library (example: "libmatroska-0.4.3").',mandatory:!0,minver:1,crc:!1},19899:{name:"Seek",level:2,type:"m",multiple:!0,webm:!0,description:"Contains a single seek entry to an EBML Element.",mandatory:!0,minver:1,crc:!1},20529:{name:"ContentEncodingOrder",level:5,type:"u",multiple:!0,webm:!0,description:"Tells when this modification was used during encoding/muxing starting with 0 and counting upwards. The decoder/demuxer has to start with the highest order number it finds and work its way down. This value has to be unique over all ContentEncodingOrder Elements in the TrackEntry that contains this ContentEncodingOrder element.",mandatory:!0,minver:1,default:"0",crc:!1},20530:{name:"ContentEncodingScope",level:5,type:"u",multiple:!1,webm:!0,description:"A bit field that describes which Elements have been modified in this way. Values (big-endian) can be OR'ed.",mandatory:!0,minver:1,default:"1",crc:!1},20531:{name:"ContentEncodingType",level:5,type:"u",multiple:!1,webm:!0,description:"A value describing what kind of transformation is applied.",mandatory:!0,minver:1,default:"0",crc:!1},20532:{name:"ContentCompression",level:5,type:"m",multiple:!1,description:"Settings describing the compression used. This Element **MUST** be present if the value of ContentEncodingType is 0 and absent otherwise. Each block **MUST** be decompressable even if no previous block is available in order not to prevent seeking.",minver:1,crc:!1},20533:{name:"ContentEncryption",level:5,type:"m",multiple:!1,webm:!0,description:"Settings describing the encryption used. This Element **MUST** be present if the value of `ContentEncodingType` is 1 (encryption) and **MUST** be ignored otherwise. A Matroska Player **MAY** support encryption.",minver:1,crc:!1},21233:{name:"Emphasis",level:4,type:"u",multiple:!1,description:"Audio emphasis applied on audio samples. The player **MUST** apply the inverse emphasis to get the proper audio samples.",mandatory:!0,minver:5,default:"0",crc:!1},21343:{name:"CueRefNumber",level:5,type:"u",multiple:!1,description:"Number of the referenced Block of Track X in the specified Cluster.",range:"not 0",minver:0,maxver:0,default:"1",crc:!1},21358:{name:"Name",level:3,type:"8",multiple:!1,webm:!0,description:"A human-readable track name.",cppname:"TrackName",minver:1,crc:!1},21368:{name:"CueBlockNumber",level:4,type:"u",multiple:!1,webm:!0,description:"Number of the Block in the specified Cluster.",range:"not 0",minver:1,crc:!1},21375:{name:"TrackOffset",level:3,type:"i",multiple:!1,description:"A value to add to the Block's Timestamp, expressed in Matroska Ticks -- i.e., in nanoseconds; see (#timestamp-ticks). This can be used to adjust the playback offset of a track.",minver:0,maxver:0,default:"0",crc:!1},21419:{name:"SeekID",level:3,type:"b",multiple:!1,webm:!0,description:"The binary EBML ID of a Top-Level Element.",mandatory:!0,minver:1,crc:!1},21420:{name:"SeekPosition",level:3,type:"u",multiple:!1,webm:!0,description:"The Segment Position ((#segment-position)) of a Top-Level Element.",mandatory:!0,minver:1,crc:!1},21432:{name:"StereoMode",level:4,type:"u",multiple:!1,webm:!0,description:"Stereo-3D video mode. There are some more details in (#multi-planar-and-3d-videos).",mandatory:!0,cppname:"VideoStereoMode",minver:3,default:"0",crc:!1},21433:{name:"OldStereoMode",level:4,type:"u",multiple:!1,description:"Bogus StereoMode value used in old versions of libmatroska.",minver:1,maxver:2,crc:!1},21440:{name:"AlphaMode",level:4,type:"u",multiple:!1,webm:!0,description:'Indicate whether the BlockAdditional Element with BlockAddID of "1" contains Alpha data, as defined by to the Codec Mapping for the `CodecID`. Undefined values **SHOULD NOT** be used as the behavior of known implementations is different (considered either as 0 or 1).',mandatory:!0,cppname:"VideoAlphaMode",minver:3,default:"0",crc:!1},21674:{name:"PixelCropBottom",level:4,type:"u",multiple:!1,webm:!0,description:"The number of video pixels to remove at the bottom of the image.",mandatory:!0,cppname:"VideoPixelCropBottom",minver:1,default:"0",crc:!1},21680:{name:"DisplayWidth",level:4,type:"u",multiple:!1,webm:!0,description:"Width of the video frames to display. Applies to the video frame after cropping (PixelCrop* Elements).",range:"not 0",cppname:"VideoDisplayWidth",minver:1,crc:!1},21682:{name:"DisplayUnit",level:4,type:"u",multiple:!1,webm:!0,description:"How DisplayWidth & DisplayHeight are interpreted.",mandatory:!0,cppname:"VideoDisplayUnit",minver:1,default:"0",crc:!1},21683:{name:"AspectRatioType",level:4,type:"u",multiple:!1,description:"Specify the possible modifications to the aspect ratio.",cppname:"VideoAspectRatio",minver:0,maxver:0,default:"0",crc:!1},21690:{name:"DisplayHeight",level:4,type:"u",multiple:!1,webm:!0,description:"Height of the video frames to display. Applies to the video frame after cropping (PixelCrop* Elements).",range:"not 0",cppname:"VideoDisplayHeight",minver:1,crc:!1},21691:{name:"PixelCropTop",level:4,type:"u",multiple:!1,webm:!0,description:"The number of video pixels to remove at the top of the image.",mandatory:!0,cppname:"VideoPixelCropTop",minver:1,default:"0",crc:!1},21708:{name:"PixelCropLeft",level:4,type:"u",multiple:!1,webm:!0,description:"The number of video pixels to remove on the left of the image.",mandatory:!0,cppname:"VideoPixelCropLeft",minver:1,default:"0",crc:!1},21725:{name:"PixelCropRight",level:4,type:"u",multiple:!1,webm:!0,description:"The number of video pixels to remove on the right of the image.",mandatory:!0,cppname:"VideoPixelCropRight",minver:1,default:"0",crc:!1},21930:{name:"FlagForced",level:3,type:"u",multiple:!1,webm:!0,description:"Applies only to subtitles. Set if that track is eligible for automatic selection by the player if it matches the user's language preference, even if the user's preferences would normally not enable subtitles with the selected audio track; this can be used for tracks containing only translations of foreign-language audio or onscreen text. See (#default-track-selection) for more details.",mandatory:!0,range:"0-1",cppname:"TrackFlagForced",minver:1,default:"0",crc:!1},21931:{name:"FlagHearingImpaired",level:3,type:"u",multiple:!1,description:"Set to 1 if and only if that track is suitable for users with hearing impairments.",range:"0-1",minver:4,crc:!1},21932:{name:"FlagVisualImpaired",level:3,type:"u",multiple:!1,description:"Set to 1 if and only if that track is suitable for users with visual impairments.",range:"0-1",minver:4,crc:!1},21933:{name:"FlagTextDescriptions",level:3,type:"u",multiple:!1,description:"Set to 1 if and only if that track contains textual descriptions of video content.",range:"0-1",minver:4,crc:!1},21934:{name:"FlagOriginal",level:3,type:"u",multiple:!1,description:"Set to 1 if and only if that track is in the content's original language.",range:"0-1",minver:4,crc:!1},21935:{name:"FlagCommentary",level:3,type:"u",multiple:!1,description:"Set to 1 if and only if that track contains commentary.",range:"0-1",minver:4,crc:!1},21936:{name:"Colour",level:4,type:"m",multiple:!1,webm:!0,description:"Settings describing the colour format.",cppname:"VideoColour",minver:4,crc:!1},21937:{name:"MatrixCoefficients",level:5,type:"u",multiple:!1,webm:!0,description:"The Matrix Coefficients of the video used to derive luma and chroma values from red, green, and blue color primaries. For clarity, the value and meanings for MatrixCoefficients are adopted from Table 4 of ISO/IEC 23001-8:2016 or ITU-T H.273.",mandatory:!0,cppname:"VideoColourMatrix",minver:4,default:"2",crc:!1},21938:{name:"BitsPerChannel",level:5,type:"u",multiple:!1,webm:!0,description:"Number of decoded bits per channel. A value of 0 indicates that the BitsPerChannel is unspecified.",mandatory:!0,cppname:"VideoBitsPerChannel",minver:4,default:"0",crc:!1},21939:{name:"ChromaSubsamplingHorz",level:5,type:"u",multiple:!1,webm:!0,description:"The amount of pixels to remove in the Cr and Cb channels for every pixel not removed horizontally. Example: For video with 4:2:0 chroma subsampling, the ChromaSubsamplingHorz **SHOULD** be set to 1.",cppname:"VideoChromaSubsampHorz",minver:4,crc:!1},21940:{name:"ChromaSubsamplingVert",level:5,type:"u",multiple:!1,webm:!0,description:"The amount of pixels to remove in the Cr and Cb channels for every pixel not removed vertically. Example: For video with 4:2:0 chroma subsampling, the ChromaSubsamplingVert **SHOULD** be set to 1.",cppname:"VideoChromaSubsampVert",minver:4,crc:!1},21941:{name:"CbSubsamplingHorz",level:5,type:"u",multiple:!1,webm:!0,description:"The amount of pixels to remove in the Cb channel for every pixel not removed horizontally. This is additive with ChromaSubsamplingHorz. Example: For video with 4:2:1 chroma subsampling, the ChromaSubsamplingHorz **SHOULD** be set to 1 and CbSubsamplingHorz **SHOULD** be set to 1.",cppname:"VideoCbSubsampHorz",minver:4,crc:!1},21942:{name:"CbSubsamplingVert",level:5,type:"u",multiple:!1,webm:!0,description:"The amount of pixels to remove in the Cb channel for every pixel not removed vertically. This is additive with ChromaSubsamplingVert.",cppname:"VideoCbSubsampVert",minver:4,crc:!1},21943:{name:"ChromaSitingHorz",level:5,type:"u",multiple:!1,webm:!0,description:"How chroma is subsampled horizontally.",mandatory:!0,cppname:"VideoChromaSitHorz",minver:4,default:"0",crc:!1},21944:{name:"ChromaSitingVert",level:5,type:"u",multiple:!1,webm:!0,description:"How chroma is subsampled vertically.",mandatory:!0,cppname:"VideoChromaSitVert",minver:4,default:"0",crc:!1},21945:{name:"Range",level:5,type:"u",multiple:!1,webm:!0,description:"Clipping of the color ranges.",mandatory:!0,cppname:"VideoColourRange",minver:4,default:"0",crc:!1},21946:{name:"TransferCharacteristics",level:5,type:"u",multiple:!1,webm:!0,description:"The transfer characteristics of the video. For clarity, the value and meanings for TransferCharacteristics are adopted from Table 3 of ISO/IEC 23091-4 or ITU-T H.273.",mandatory:!0,cppname:"VideoColourTransferCharacter",minver:4,default:"2",crc:!1},21947:{name:"Primaries",level:5,type:"u",multiple:!1,webm:!0,description:"The colour primaries of the video. For clarity, the value and meanings for Primaries are adopted from Table 2 of ISO/IEC 23091-4 or ITU-T H.273.",mandatory:!0,cppname:"VideoColourPrimaries",minver:4,default:"2",crc:!1},21948:{name:"MaxCLL",level:5,type:"u",multiple:!1,webm:!0,description:"Maximum brightness of a single pixel (Maximum Content Light Level) in candelas per square meter (cd/m^2^).",cppname:"VideoColourMaxCLL",minver:4,crc:!1},21949:{name:"MaxFALL",level:5,type:"u",multiple:!1,webm:!0,description:"Maximum brightness of a single full frame (Maximum Frame-Average Light Level) in candelas per square meter (cd/m^2^).",cppname:"VideoColourMaxFALL",minver:4,crc:!1},21968:{name:"MasteringMetadata",level:5,type:"m",multiple:!1,webm:!0,description:"SMPTE 2086 mastering data.",cppname:"VideoColourMasterMeta",minver:4,crc:!1},21969:{name:"PrimaryRChromaticityX",level:6,type:"f",multiple:!1,webm:!0,description:"Red X chromaticity coordinate, as defined by [@!CIE-1931].",range:"0x0p+0-0x1p+0",cppname:"VideoRChromaX",minver:4,crc:!1},21970:{name:"PrimaryRChromaticityY",level:6,type:"f",multiple:!1,webm:!0,description:"Red Y chromaticity coordinate, as defined by [@!CIE-1931].",range:"0x0p+0-0x1p+0",cppname:"VideoRChromaY",minver:4,crc:!1},21971:{name:"PrimaryGChromaticityX",level:6,type:"f",multiple:!1,webm:!0,description:"Green X chromaticity coordinate, as defined by [@!CIE-1931].",range:"0x0p+0-0x1p+0",cppname:"VideoGChromaX",minver:4,crc:!1},21972:{name:"PrimaryGChromaticityY",level:6,type:"f",multiple:!1,webm:!0,description:"Green Y chromaticity coordinate, as defined by [@!CIE-1931].",range:"0x0p+0-0x1p+0",cppname:"VideoGChromaY",minver:4,crc:!1},21973:{name:"PrimaryBChromaticityX",level:6,type:"f",multiple:!1,webm:!0,description:"Blue X chromaticity coordinate, as defined by [@!CIE-1931].",range:"0x0p+0-0x1p+0",cppname:"VideoBChromaX",minver:4,crc:!1},21974:{name:"PrimaryBChromaticityY",level:6,type:"f",multiple:!1,webm:!0,description:"Blue Y chromaticity coordinate, as defined by [@!CIE-1931].",range:"0x0p+0-0x1p+0",cppname:"VideoBChromaY",minver:4,crc:!1},21975:{name:"WhitePointChromaticityX",level:6,type:"f",multiple:!1,webm:!0,description:"White X chromaticity coordinate, as defined by [@!CIE-1931].",range:"0x0p+0-0x1p+0",cppname:"VideoWhitePointChromaX",minver:4,crc:!1},21976:{name:"WhitePointChromaticityY",level:6,type:"f",multiple:!1,webm:!0,description:"White Y chromaticity coordinate, as defined by [@!CIE-1931].",range:"0x0p+0-0x1p+0",cppname:"VideoWhitePointChromaY",minver:4,crc:!1},21977:{name:"LuminanceMax",level:6,type:"f",multiple:!1,webm:!0,description:"Maximum luminance. Represented in candelas per square meter (cd/m^2^).",range:">= 0x0p+0",cppname:"VideoLuminanceMax",minver:4,crc:!1},21978:{name:"LuminanceMin",level:6,type:"f",multiple:!1,webm:!0,description:"Minimum luminance. Represented in candelas per square meter (cd/m^2^).",range:">= 0x0p+0",cppname:"VideoLuminanceMin",minver:4,crc:!1},21998:{name:"MaxBlockAdditionID",level:3,type:"u",multiple:!1,description:"The maximum value of BlockAddID ((#blockaddid-element)). A value 0 means there is no BlockAdditions ((#blockadditions-element)) for this track.",mandatory:!0,minver:1,default:"0",crc:!1},22100:{name:"ChapterStringUID",level:4,type:"8",multiple:!1,webm:!0,description:"A unique string ID to identify the Chapter. For example it is used as the storage for [@?WebVTT] cue identifier values.",minver:3,crc:!1},22186:{name:"CodecDelay",level:3,type:"u",multiple:!1,webm:!0,description:"CodecDelay is The codec-built-in delay, expressed in Matroska Ticks -- i.e., in nanoseconds; see (#timestamp-ticks). It represents the amount of codec samples that will be discarded by the decoder during playback. This timestamp value **MUST** be subtracted from each frame timestamp in order to get the timestamp that will be actually played. The value **SHOULD** be small so the muxing of tracks with the same actual timestamp are in the same Cluster.",mandatory:!0,minver:4,default:"0",crc:!1},22203:{name:"SeekPreRoll",level:3,type:"u",multiple:!1,webm:!0,description:"After a discontinuity, SeekPreRoll is the duration of the data the decoder **MUST** decode before the decoded data is valid, expressed in Matroska Ticks -- i.e., in nanoseconds; see (#timestamp-ticks).",mandatory:!0,minver:4,default:"0",crc:!1},22337:{name:"WritingApp",level:2,type:"8",multiple:!1,webm:!0,description:'Writing application (example: "mkvmerge-0.3.3").',mandatory:!0,minver:1,crc:!1},22612:{name:"SilentTracks",level:2,type:"m",multiple:!1,description:"The list of tracks that are not used in that part of the stream. It is useful when using overlay tracks on seeking or to decide what track to use.",cppname:"ClusterSilentTracks",minver:0,maxver:0,crc:!1},22743:{name:"SilentTrackNumber",level:3,type:"u",multiple:!0,description:"One of the track number that are not used from now on in the stream. It could change later if not specified as silent in a further Cluster.",cppname:"ClusterSilentTrackNumber",minver:0,maxver:0,crc:!1},24999:{name:"AttachedFile",level:2,type:"m",multiple:!0,description:"An attached file.",mandatory:!0,cppname:"Attached",minver:1,crc:!1},25152:{name:"ContentEncoding",level:4,type:"m",multiple:!0,webm:!0,description:"Settings for one content encoding like compression or encryption.",mandatory:!0,minver:1,crc:!1},25188:{name:"BitDepth",level:4,type:"u",multiple:!1,webm:!0,description:"Bits per sample, mostly used for PCM.",range:"not 0",cppname:"AudioBitDepth",minver:1,crc:!1},25506:{name:"CodecPrivate",level:3,type:"b",multiple:!1,webm:!0,description:"Private data only known to the codec.",minver:1,crc:!1},25536:{name:"Targets",level:3,type:"m",multiple:!1,webm:!0,description:"Specifies which other elements the metadata represented by the Tag applies to. If empty or omitted, then the Tag describes everything in the Segment.",mandatory:!0,cppname:"TagTargets",minver:1,crc:!1},25539:{name:"ChapterPhysicalEquiv",level:4,type:"u",multiple:!1,description:'Specify the physical equivalent of this ChapterAtom like "DVD" (60) or "SIDE" (50); see (#physical-types) for a complete list of values.',minver:1,crc:!1},25540:{name:"TagChapterUID",level:4,type:"u",multiple:!0,description:"A unique ID to identify the Chapter(s) the tags belong to.",minver:1,default:"0",crc:!1},25541:{name:"TagTrackUID",level:4,type:"u",multiple:!0,webm:!0,description:"A unique ID to identify the Track(s) the tags belong to.",minver:1,default:"0",crc:!1},25542:{name:"TagAttachmentUID",level:4,type:"u",multiple:!0,description:"A unique ID to identify the Attachment(s) the tags belong to.",minver:1,default:"0",crc:!1},25545:{name:"TagEditionUID",level:4,type:"u",multiple:!0,description:"A unique ID to identify the EditionEntry(s) the tags belong to.",minver:1,default:"0",crc:!1},25546:{name:"TargetType",level:4,type:"s",multiple:!1,webm:!0,description:'An informational string that can be used to display the logical level of the target like "ALBUM", "TRACK", "MOVIE", "CHAPTER", etc. ; see Section 6.4 of [@?MatroskaTags].',cppname:"TagTargetType",minver:1,crc:!1},25906:{name:"SignedElement",level:2,type:"b",multiple:!0,webm:!1,description:"An element ID whose data will be used to compute the signature.",minver:1,crc:!1},26148:{name:"TrackTranslate",level:3,type:"m",multiple:!0,description:"The mapping between this `TrackEntry` and a track value in the given Chapter Codec.",minver:1,crc:!1},26277:{name:"TrackTranslateTrackID",level:4,type:"b",multiple:!1,description:"The binary value used to represent this `TrackEntry` in the chapter codec data. The format depends on the `ChapProcessCodecID` used; see (#chapprocesscodecid-element).",mandatory:!0,minver:1,crc:!1},26303:{name:"TrackTranslateCodec",level:4,type:"u",multiple:!1,description:"This `TrackTranslate` applies to this chapter codec of the given chapter edition(s); see (#chapprocesscodecid-element).",mandatory:!0,minver:1,crc:!1},26364:{name:"TrackTranslateEditionUID",level:4,type:"u",multiple:!0,description:"Specify a chapter edition UID on which this `TrackTranslate` applies.",minver:1,crc:!1},26568:{name:"SimpleTag",level:3,type:"m",multiple:!0,webm:!0,description:"Contains general information about the target.",mandatory:!0,cppname:"TagSimple",minver:1,crc:!1},26826:{name:"TargetTypeValue",level:4,type:"u",multiple:!1,webm:!0,description:"A number to indicate the logical level of the target.",mandatory:!0,cppname:"TagTargetTypeValue",minver:1,default:"50",crc:!1},26897:{name:"ChapProcessCommand",level:5,type:"m",multiple:!0,description:"Contains all the commands associated to the Atom.",cppname:"ChapterProcessCommand",minver:1,crc:!1},26914:{name:"ChapProcessTime",level:6,type:"u",multiple:!1,description:"Defines when the process command **SHOULD** be handled",mandatory:!0,cppname:"ChapterProcessTime",minver:1,crc:!1},26916:{name:"ChapterTranslate",level:2,type:"m",multiple:!0,description:"The mapping between this `Segment` and a segment value in the given Chapter Codec.",minver:1,crc:!1},26931:{name:"ChapProcessData",level:6,type:"b",multiple:!1,description:"Contains the command information. The data **SHOULD** be interpreted depending on the ChapProcessCodecID value. For ChapProcessCodecID = 1, the data correspond to the binary DVD cell pre/post commands; see (#menu-features) on DVD menus.",mandatory:!0,cppname:"ChapterProcessData",minver:1,crc:!1},26948:{name:"ChapProcess",level:4,type:"m",multiple:!0,description:"Contains all the commands associated to the Atom.",cppname:"ChapterProcess",minver:1,crc:!1},26965:{name:"ChapProcessCodecID",level:5,type:"u",multiple:!1,description:"Contains the type of the codec used for the processing. A value of 0 means native Matroska processing (to be defined), a value of 1 means the DVD command set is used; see (#menu-features) on DVD menus. More codec IDs can be added later.",mandatory:!0,cppname:"ChapterProcessCodecID",minver:1,default:"0",crc:!1},27045:{name:"ChapterTranslateID",level:3,type:"b",multiple:!1,description:"The binary value used to represent this Segment in the chapter codec data. The format depends on the ChapProcessCodecID used; see (#chapprocesscodecid-element).",mandatory:!0,minver:1,crc:!1},27071:{name:"ChapterTranslateCodec",level:3,type:"u",multiple:!1,description:"This `ChapterTranslate` applies to this chapter codec of the given chapter edition(s); see (#chapprocesscodecid-element).",mandatory:!0,minver:1,crc:!1},27132:{name:"ChapterTranslateEditionUID",level:3,type:"u",multiple:!0,description:"Specify a chapter edition UID on which this `ChapterTranslate` applies.",minver:1,crc:!1},28032:{name:"ContentEncodings",level:3,type:"m",multiple:!1,webm:!0,description:"Settings for several content encoding mechanisms like compression or encryption.",minver:1,crc:!1},28135:{name:"MinCache",level:3,type:"u",multiple:!1,description:"The minimum number of frames a player should be able to cache during playback. If set to 0, the reference pseudo-cache system is not used.",mandatory:!0,cppname:"TrackMinCache",minver:0,maxver:0,default:"0",crc:!1},28152:{name:"MaxCache",level:3,type:"u",multiple:!1,description:"The maximum cache size necessary to store referenced frames in and the current frame. 0 means no cache is needed.",cppname:"TrackMaxCache",minver:0,maxver:0,crc:!1},28263:{name:"ChapterSegmentUID",level:4,type:"b",multiple:!1,description:"The SegmentUUID of another Segment to play during this chapter.",cppname:"ChapterSegmentUID",minver:1,crc:!1},28348:{name:"ChapterSegmentEditionUID",level:4,type:"u",multiple:!1,description:"The EditionUID to play from the Segment linked in ChapterSegmentUUID. If ChapterSegmentEditionUID is undeclared, then no Edition of the linked Segment is used; see (#medium-linking) on medium-linking Segments.",range:"not 0",minver:1,crc:!1},28587:{name:"TrackOverlay",level:3,type:"u",multiple:!0,description:"Specify that this track is an overlay track for the Track specified (in the u-integer). That means when this track has a gap on SilentTracks, the overlay track should be used instead. The order of multiple TrackOverlay matters, the first one is the one that should be used. If not found it should be the second, etc.",minver:1,maxver:0,crc:!1},29555:{name:"Tag",level:2,type:"m",multiple:!0,webm:!0,description:"A single metadata descriptor.",mandatory:!0,minver:1,crc:!1},29572:{name:"SegmentFilename",level:2,type:"8",multiple:!1,description:"A filename corresponding to this Segment.",minver:1,crc:!1},29604:{name:"SegmentUID",level:2,type:"b",multiple:!1,description:"A randomly generated unique ID to identify the Segment amongst many others (128 bits). It is equivalent to a UUID v4 [@!RFC4122] with all bits randomly (or pseudo-randomly) chosen.  An actual UUID v4 value, where some bits are not random, **MAY** also be used.",cppname:"SegmentUID",minver:1,crc:!1},29636:{name:"ChapterUID",level:4,type:"u",multiple:!1,webm:!0,description:"A unique ID to identify the Chapter.",mandatory:!0,range:"not 0",minver:1,crc:!1},29637:{name:"TrackUID",level:3,type:"u",multiple:!1,webm:!0,description:"A unique ID to identify the Track.",mandatory:!0,range:"not 0",minver:1,crc:!1},29766:{name:"AttachmentLink",level:3,type:"u",multiple:!1,description:"The UID of an attachment that is used by this codec.",range:"not 0",cppname:"TrackAttachmentLink",minver:1,maxver:3,crc:!1},30113:{name:"BlockAdditions",level:3,type:"m",multiple:!1,webm:!0,description:"Contain additional binary data to complete the main one; see Codec BlockAdditions section of [@?MatroskaCodec] for more information. An EBML parser that has no knowledge of the Block structure could still see and use/skip these data.",minver:1,crc:!1},30114:{name:"DiscardPadding",level:3,type:"i",multiple:!1,webm:!0,description:"Duration of the silent data added to the Block, expressed in Matroska Ticks -- i.e., in nanoseconds; see (#timestamp-ticks) (padding at the end of the Block for positive value, at the beginning of the Block for negative value). The duration of DiscardPadding is not calculated in the duration of the TrackEntry and **SHOULD** be discarded during playback.",minver:4,crc:!1},30320:{name:"Projection",level:4,type:"m",multiple:!1,webm:!0,description:"Describes the video projection details. Used to render spherical, VR videos or flipping videos horizontally/vertically.",cppname:"VideoProjection",minver:4,crc:!1},30321:{name:"ProjectionType",level:5,type:"u",multiple:!1,webm:!0,description:"Describes the projection used for this video track.",mandatory:!0,cppname:"VideoProjectionType",minver:4,default:"0",crc:!1},30322:{name:"ProjectionPrivate",level:5,type:"b",multiple:!1,webm:!0,description:"Private data that only applies to a specific projection.  *  If `ProjectionType` equals 0 (Rectangular), then this element **MUST NOT** be present. *  If `ProjectionType` equals 1 (Equirectangular), then this element **MUST** be present and contain the same binary data that would be stored inside an ISOBMFF Equirectangular Projection Box ('equi'). *  If `ProjectionType` equals 2 (Cubemap), then this element **MUST** be present and contain the same binary data that would be stored inside an ISOBMFF Cubemap Projection Box ('cbmp'). *  If `ProjectionType` equals 3 (Mesh), then this element **MUST** be present and contain the same binary data that would be stored inside an ISOBMFF Mesh Projection Box ('mshp').",cppname:"VideoProjectionPrivate",minver:4,crc:!1},30323:{name:"ProjectionPoseYaw",level:5,type:"f",multiple:!1,webm:!0,description:"Specifies a yaw rotation to the projection.  Value represents a clockwise rotation, in degrees, around the up vector. This rotation must be applied before any `ProjectionPosePitch` or `ProjectionPoseRoll` rotations. The value of this element **MUST** be in the -180 to 180 degree range, both included.  Setting `ProjectionPoseYaw` to 180 or -180 degrees, with the `ProjectionPoseRoll` and `ProjectionPosePitch` set to 0 degrees flips the image horizontally.",mandatory:!0,range:">= -0xB4p+0, <= 0xB4p+0",cppname:"VideoProjectionPoseYaw",minver:4,default:"0x0p+0",crc:!1},30324:{name:"ProjectionPosePitch",level:5,type:"f",multiple:!1,webm:!0,description:"Specifies a pitch rotation to the projection.  Value represents a counter-clockwise rotation, in degrees, around the right vector. This rotation must be applied after the `ProjectionPoseYaw` rotation and before the `ProjectionPoseRoll` rotation. The value of this element **MUST** be in the -90 to 90 degree range, both included.",mandatory:!0,range:">= -0x5Ap+0, <= 0x5Ap+0",cppname:"VideoProjectionPosePitch",minver:4,default:"0x0p+0",crc:!1},30325:{name:"ProjectionPoseRoll",level:5,type:"f",multiple:!1,webm:!0,description:"Specifies a roll rotation to the projection.  Value represents a counter-clockwise rotation, in degrees, around the forward vector. This rotation must be applied after the `ProjectionPoseYaw` and `ProjectionPosePitch` rotations. The value of this element **MUST** be in the -180 to 180 degree range, both included.  Setting `ProjectionPoseRoll` to 180 or -180 degrees, the `ProjectionPoseYaw` to 180 or -180 degrees with `ProjectionPosePitch` set to 0 degrees flips the image vertically.  Setting `ProjectionPoseRoll` to 180 or -180 degrees, with the `ProjectionPoseYaw` and `ProjectionPosePitch` set to 0 degrees flips the image horizontally and vertically.",mandatory:!0,range:">= -0xB4p+0, <= 0xB4p+0",cppname:"VideoProjectionPoseRoll",minver:4,default:"0x0p+0",crc:!1},30901:{name:"OutputSamplingFrequency",level:4,type:"f",multiple:!1,webm:!0,description:"Real output sampling frequency in Hz (used for SBR techniques).",range:"> 0x0p+0",cppname:"AudioOutputSamplingFreq",minver:1,crc:!1},31657:{name:"Title",level:2,type:"8",multiple:!1,webm:!0,description:"General name of the Segment.",minver:1,crc:!1},32123:{name:"ChannelPositions",level:4,type:"b",multiple:!1,description:"Table of horizontal angles for each successive channel.",cppname:"AudioPosition",minver:0,maxver:0,crc:!1},32347:{name:"SignatureElements",level:1,type:"m",multiple:!0,webm:!1,description:"Contains elements that will be used to compute the signature.",minver:1,crc:!1},32379:{name:"SignatureElementList",level:2,type:"m",multiple:!0,webm:!1,description:"A list consists of a number of consecutive elements that represent one case where data is used in signature. Ex:  means that the BlockAdditional of all Blocks in all Clusters is used for encryption.",minver:1,crc:!1,i:"Cluster|Block|BlockAdditional"},32394:{name:"SignatureAlgo",level:2,type:"u",multiple:!0,webm:!1,description:"Signature algorithm used (1=RSA, 2=elliptic).",minver:1,crc:!1},32410:{name:"SignatureHash",level:2,type:"u",multiple:!0,webm:!1,description:"Hash algorithm used (1=SHA1-160, 2=MD5).",minver:1,crc:!1},32421:{name:"SignaturePublicKey",level:2,type:"b",multiple:!0,webm:!1,description:"The public key to use with the algorithm (in the case of a PKI-based signature).",minver:1,crc:!1},32437:{name:"Signature",level:2,type:"b",multiple:!0,webm:!1,description:"The signature of the data (until a new.",minver:1,crc:!1},2274716:{name:"Language",level:3,type:"s",multiple:!1,webm:!0,description:"The language of the track, in the Matroska languages form; see (#language-codes) on language codes. This Element **MUST** be ignored if the LanguageBCP47 Element is used in the same TrackEntry.",mandatory:!0,cppname:"TrackLanguage",minver:1,default:"eng",crc:!1},2274717:{name:"LanguageBCP47",level:3,type:"s",multiple:!1,description:"The language of the track, in the [@!BCP47] form; see (#language-codes) on language codes. If this Element is used, then any Language Elements used in the same TrackEntry **MUST** be ignored.",cppname:"LanguageIETF",minver:4,crc:!1},2306383:{name:"TrackTimecodeScale",level:3,type:"f",multiple:!1,description:"The scale to apply on this track to work at normal speed in relation with other tracks (mostly used to adjust video speed when the audio length differs).",mandatory:!0,range:"> 0x0p+0",cppname:"TrackTimecodeScale",minver:1,maxver:3,default:"0x1p+0",crc:!1},2313850:{name:"DefaultDecodedFieldDuration",level:3,type:"u",multiple:!1,description:"The period between two successive fields at the output of the decoding process, expressed in Matroska Ticks -- i.e., in nanoseconds; see (#timestamp-ticks). see (#defaultdecodedfieldduration) for more information",range:"not 0",cppname:"TrackDefaultDecodedFieldDuration",minver:4,crc:!1},2327523:{name:"FrameRate",level:4,type:"f",multiple:!1,description:"Number of frames per second. This value is Informational only. It is intended for constant frame rate streams, and should not be used for a variable frame rate TrackEntry.",range:"> 0x0p+0",cppname:"VideoFrameRate",minver:0,maxver:0,crc:!1},2352003:{name:"DefaultDuration",level:3,type:"u",multiple:!1,webm:!0,description:"Number of nanoseconds per frame, expressed in Matroska Ticks -- i.e., in nanoseconds; see (#timestamp-ticks) (frame in the Matroska sense -- one Element put into a (Simple)Block).",range:"not 0",cppname:"TrackDefaultDuration",minver:1,crc:!1},2459272:{name:"CodecName",level:3,type:"8",multiple:!1,webm:!0,description:"A human-readable string specifying the codec.",minver:1,crc:!1},2536e3:{name:"CodecDownloadURL",level:3,type:"s",multiple:!0,description:"A URL to download about the codec used.",minver:0,maxver:0,crc:!1},2807729:{name:"TimecodeScale",level:2,type:"u",multiple:!1,webm:!0,description:"Base unit for Segment Ticks and Track Ticks, in nanoseconds. A TimestampScale value of 1000000 means scaled timestamps in the Segment are expressed in milliseconds; see (#timestamps) on how to interpret timestamps.",mandatory:!0,range:"not 0",cppname:"TimecodeScale",minver:1,default:"1000000",crc:!1},2807730:{name:"TimecodeScaleDenominator",level:2,type:"u",multiple:!1,description:"Timestamp scale numerator, see TimecodeScale.",mandatory:!0,minver:4,default:"1000000000",crc:!1},3061028:{name:"ColourSpace",level:4,type:"b",multiple:!1,description:"Specify the uncompressed pixel format used for the Track's data as a FourCC. This value is similar in scope to the biCompression value of AVI's `BITMAPINFO` [@?AVIFormat]. There is no definitive list of FourCC values, nor an official registry. Some common values for YUV pixel formats can be found at [@?MSYUV8], [@?MSYUV16] and [@?FourCC-YUV]. Some common values for uncompressed RGB pixel formats can be found at [@?MSRGB] and [@?FourCC-RGB].",cppname:"VideoColourSpace",minver:1,crc:!1},3126563:{name:"GammaValue",level:4,type:"f",multiple:!1,description:"Gamma Value.",range:"> 0x0p+0",cppname:"VideoGamma",minver:0,maxver:0,crc:!1},3839639:{name:"CodecSettings",level:3,type:"8",multiple:!1,description:"A string describing the encoding setting used.",minver:0,maxver:0,crc:!1},3883072:{name:"CodecInfoURL",level:3,type:"s",multiple:!0,description:"A URL to find information about the codec used.",minver:0,maxver:0,crc:!1},3965867:{name:"PrevFilename",level:2,type:"8",multiple:!1,description:"A filename corresponding to the file of the previous Linked Segment.",minver:1,crc:!1},3979555:{name:"PrevUID",level:2,type:"b",multiple:!1,description:"An ID to identify the previous Segment of a Linked Segment.",cppname:"PrevUID",minver:1,crc:!1},4096955:{name:"NextFilename",level:2,type:"8",multiple:!1,description:"A filename corresponding to the file of the next Linked Segment.",minver:1,crc:!1},4110627:{name:"NextUID",level:2,type:"b",multiple:!1,description:"An ID to identify the next Segment of a Linked Segment.",cppname:"NextUID",minver:1,crc:!1},272869232:{name:"Chapters",level:1,type:"m",multiple:!1,webm:!0,description:"A system to define basic menus and partition data. For more detailed information, look at the Chapters explanation in (#chapters).",minver:1,crc:!1},290298740:{name:"SeekHead",level:1,type:"m",multiple:!0,webm:!0,description:"Contains seeking information of Top-Level Elements; see (#data-layout).",minver:1,crc:!1},307544935:{name:"Tags",level:1,type:"m",multiple:!0,webm:!0,description:"Element containing metadata describing Tracks, Editions, Chapters, Attachments, or the Segment as a whole. A list of valid tags can be found in [@?MatroskaTags].",minver:1,crc:!1},357149030:{name:"Info",level:1,type:"m",multiple:!1,webm:!0,description:"Contains general information about the Segment.",mandatory:!0,minver:1,crc:!1},374648427:{name:"Tracks",level:1,type:"m",multiple:!1,webm:!0,description:"A Top-Level Element of information with many tracks described.",minver:1,crc:!1},408125543:{name:"Segment",level:0,type:"m",multiple:!1,description:"The Root Element that contains all other Top-Level Elements; see (#data-layout).",mandatory:!0,minver:1,crc:!1},423732329:{name:"Attachments",level:1,type:"m",multiple:!1,description:"Contain attached files.",minver:1,crc:!1},440786851:{name:"EBML",level:0,type:"m",multiple:!1,description:"Set the EBML characteristics of the data to follow. Each EBML document has to start with this.",mandatory:!0,minver:1,crc:!1},458458727:{name:"SignatureSlot",level:1,type:"m",multiple:!0,webm:!1,description:"Contain signature of some (coming) elements in the stream.",minver:1,crc:!1},475249515:{name:"Cues",level:1,type:"m",multiple:!1,webm:!0,description:"A Top-Level Element to speed seeking access. All entries are local to the Segment.",minver:1,crc:!1},524531317:{name:"Cluster",level:1,type:"m",multiple:!0,webm:!0,description:"The Top-Level Element containing the (monolithic) Block structure.",minver:1,crc:!1}},hp="undefined",gp=hp!==typeof np&&np,fp=hp!==typeof Uint8Array&&Uint8Array,mp=hp!==typeof ArrayBuffer&&ArrayBuffer,Sp=[0,0,0,0,0,0,0,0],vp=Array.isArray||function(e){return Boolean(e)&&"[object Array]"===Object.prototype.toString.call(e)},Ap=4294967296,Cp=Mp("Uint64BE",!0,!0),Tp=Mp("Int64BE",!0,!1);function Mp(e,t,r){const i=t?0:4,n=t?4:0,a=t?0:3,o=t?1:2,s=t?2:1,u=t?3:0,c=t?zp:Ip,p=t?xp:Ep,l=b.prototype,d="is"+e,y="_"+d;return l.buffer=void 0,l.offset=0,l[y]=!0,l.toNumber=h,l.toString=function(e){const t=this.buffer,a=this.offset;let o=f(t,a+i),s=f(t,a+n),u="";const c=!r&&2147483648&o;for(c&&(o=~o,s=Ap-s),e=e||10;;){const t=o%e*Ap+s;if(o=Math.floor(o/e),s=Math.floor(t/e),u=(t%e).toString(e)+u,!o&&!s)break}return c&&(u="-"+u),u},l.toJSON=h,l.toArray=_p,gp&&(l.toBuffer=Rp),fp&&(l.toArrayBuffer=Op),b[d]=function(e){return Boolean(e&&e[y])},b;function b(e,t,r,a){return this instanceof b?function(e,t,r,a,o){if(fp&&mp&&(t instanceof mp&&(t=new fp(t)),a instanceof mp&&(a=new fp(a))),t||r||a||ep){if(!wp(t,r)){const e=ep||Array;o=r,a=t,r=0,t=ep===gp?gp.alloc(8):new e(8)}e.buffer=t,e.offset=r|=0,hp!==typeof a&&("string"==typeof a?function(e,t,r,a){let o=0;const s=r.length;let u=0,c=0;"-"===r[0]&&o++;const p=o;for(;o<s;){const e=parseInt(r[o++],a);if(!(e>=0))break;c=c*a+e,u=u*a+Math.floor(c/Ap),c%=Ap}p&&(u=~u,c?c=Ap-c:u++),g(e,t+i,u),g(e,t+n,c)}(t,r,a,o||10):wp(a,o)?Pp(t,r,a,o):"number"==typeof o?(g(t,r+i,a),g(t,r+n,o)):a>0?c(t,r,a):a<0?p(t,r,a):Pp(t,r,Sp,0))}else e.buffer=jp(Sp,0)}(this,e,t,r,a):new b(e,t,r,a)}function h(){const e=this.buffer,t=this.offset;let a=f(e,t+i);const o=f(e,t+n);return r||(a|=0),a?a*Ap+o:o}function g(e,t,r){e[t+u]=255&r,r>>=8,e[t+s]=255&r,r>>=8,e[t+o]=255&r,r>>=8,e[t+a]=255&r}function f(e,t){return 16777216*e[t+a]+(e[t+o]<<16)+(e[t+s]<<8)+e[t+u]}}function _p(e){const t=this.buffer,r=this.offset;return ep=null,!1!==e&&vp(t)?8===t.length?t:t.slice(r,r+8):jp(t,r)}function Rp(e){const t=this.buffer,r=this.offset;return ep=gp,!1!==e&&gp.isBuffer(t)?8===t.length?t:t.slice(r,r+8):gp.from(Op.call(this,e))}function Op(e){const t=this.buffer,r=this.offset,i=t.buffer;if(ep=fp,!1!==e&&!t.offset&&i instanceof mp)return 8===i.byteLength?i:i.slice(r,r+8);const n=new fp(8);return Pp(n,0,t,r),n.buffer}function wp(e,t){const r=e&&e.length;return t|=0,r&&t+8<=r&&"string"!=typeof e[t]}function Pp(e,t,r,i){t|=0,i|=0;for(let n=0;n<8;n++)e[t++]=255&r[i++]}function jp(e,t){return Array.prototype.slice.call(e,t,t+8)}function zp(e,t,r){let i=t+8;for(;i>t;)e[--i]=255&r,r/=256}function xp(e,t,r){let i=t+8;for(r++;i>t;)e[--i]=255&-r^255,r/=256}function Ip(e,t,r){const i=t+8;for(;t<i;)e[t++]=255&r,r/=256}function Ep(e,t,r){const i=t+8;for(r++;t<i;)e[t++]=255&-r^255,r/=256}Mp("Uint64LE",!1,!0),Mp("Int64LE",!1,!1);var Np=class{constructor(){this._schema=bp,this._buffers=[],this._stack=[]}encode(e){return lp(e.reduce(((e,t)=>e.concat(this.encodeChunk(t))),[])).buffer}encodeChunk(e){return"m"===e.type?e.isEnd?this.endTag(e):this.startTag(e):this.writeTag(e),this.flush()}flush(){const e=this._buffers;return this._buffers=[],e}getSchemaInfo(e){const t=Object.keys(this._schema).map(Number);for(let r=0;r<t.length;r++){const i=t[r];if(this._schema[i].name===e)return new ip.lW(i.toString(16),"hex")}return null}writeTag(e){const t=e.name,r=this.getSchemaInfo(t),i=e.data;if(null==r)throw new Error("No schema entry found for "+t);const n=dp(r,i);this._stack.length>0?this._stack[this._stack.length-1].children.push({tagId:r,elm:e,children:[],data:n}):this._buffers=this._buffers.concat(n)}startTag(e){const t=e.name,r=this.getSchemaInfo(t);if(null==r)throw new Error("No schema entry found for "+t);if(e.unknownSize){const t=dp(r,new ip.lW(0),e.unknownSize);return void(this._buffers=this._buffers.concat(t))}const i={tagId:r,elm:e,children:[],data:null};this._stack.length>0&&this._stack[this._stack.length-1].children.push(i),this._stack.push(i)}endTag(e){const t=this._stack.pop();if(null==t)throw new Error("EBML structure is broken");if(t.elm.name!==e.name)throw new Error("EBML structure is broken");const r=t.children.reduce(((e,t)=>{if(null===t.data)throw new Error("EBML structure is broken");return e.concat(t.data)}),[]),i=lp(r);"m"===t.elm.type?t.data=dp(t.tagId,i,t.elm.unknownSize):t.data=dp(t.tagId,i),this._stack.length<1&&(this._buffers=this._buffers.concat(t.data))}},kp={};function Dp(e){return Up(e).reduce(((e,t)=>cp(t.data).frames.reduce(((e,t)=>{const r=Lp(t),i=new Blob([r],{type:"image/webp"});return e.concat(i)}),e)),[])}function Up(e){return e.reduce(((e,t)=>"b"!==t.type||"SimpleBlock"!==t.name?e:cp(t.data).frames.some((e=>"9d012a"===e.slice(3,6).toString("hex")))?e.concat(t):e),[])}function Lp(e){const t=qp("VP8 ",e);return qp("RIFF",lp([new ip.lW("WEBP","ascii"),t]))}function qp(e,t){const r=new ip.lW(4);return r.writeUInt32LE(t.byteLength,0),lp([new ip.lW(e.substr(0,4),"ascii"),r,t,new ip.lW(t.byteLength%2==0?0:1)])}function Bp(e,t,r){const i=Hp("EBML",e),n=Gp(i)+12,a=e[e.length-1].dataEnd-n,o=Hp("Info",e);Fp("Duration",o),o.splice(1,0,{name:"Duration",type:"f",data:Yp(t,8)});const s=Gp(o),u=Hp("Tracks",e),c=Gp(u);let p=47,l=[],d=5+15*r.length,y=[],b=-1;for(let e=0;e<10;e++){const t=p,i=t+s,o=i+c,u=o+d-a;if(l=[],l.push({name:"SeekHead",type:"m",isEnd:!1}),l.push({name:"Seek",type:"m",isEnd:!1}),l.push({name:"SeekID",type:"b",data:new ip.lW([21,73,169,102])}),l.push({name:"SeekPosition",type:"u",data:Qp(t)}),l.push({name:"Seek",type:"m",isEnd:!0}),l.push({name:"Seek",type:"m",isEnd:!1}),l.push({name:"SeekID",type:"b",data:new ip.lW([22,84,174,107])}),l.push({name:"SeekPosition",type:"u",data:Qp(i)}),l.push({name:"Seek",type:"m",isEnd:!0}),l.push({name:"Seek",type:"m",isEnd:!1}),l.push({name:"SeekID",type:"b",data:new ip.lW([28,83,187,107])}),l.push({name:"SeekPosition",type:"u",data:Qp(o)}),l.push({name:"Seek",type:"m",isEnd:!0}),l.push({name:"SeekHead",type:"m",isEnd:!0}),p=Gp(l),y=[],y.push({name:"Cues",type:"m",isEnd:!1}),r.forEach((({CueTrack:e,CueClusterPosition:t,CueTime:r})=>{y.push({name:"CuePoint",type:"m",isEnd:!1}),y.push({name:"CueTime",type:"u",data:Qp(r)}),y.push({name:"CueTrackPositions",type:"m",isEnd:!1}),y.push({name:"CueTrack",type:"u",data:Qp(e)}),t-=n,t+=u,y.push({name:"CueClusterPosition",type:"u",data:Qp(t)}),y.push({name:"CueTrackPositions",type:"m",isEnd:!0}),y.push({name:"CuePoint",type:"m",isEnd:!0})})),y.push({name:"Cues",type:"m",isEnd:!0}),d=Gp(y),b===u)break;if(b=u,9===e)throw new Error("Failed to converge to a stable metadata size")}const h=[i,{name:"Segment",type:"m",isEnd:!1,unknownSize:!0},l,o,u,y];return(new Np).encode(h)}function Fp(e,t){let r=-1;for(let i=0;i<t.length;i++){const n=t[i];if(n.name===e){if("m"!==n.type)return void t.splice(i,1);if(n.isEnd){if(-1===r)throw new Error("Detected ".concat(e," closing element before finding the start"));return void t.splice(r,i-r+1)}r=i}}}function Hp(e,t){let r=[],i=-1;for(let n=0;n<t.length;n++){const a=t[n];if(a.name===e){if("m"!==a.type){r.push(t[n]);break}if(a.isEnd){if(-1===i)throw new Error("Detected ".concat(e," closing element before finding the start"));r=t.slice(i,n+1);break}i=n}}return r}function Wp(e,t){Array.isArray(t.cueInfos)&&!Array.isArray(t.cues)&&(ap.warn("putRefinedMetaData: info.cueInfos property is deprecated. please use info.cues"),t.cues=t.cueInfos);let r=[],i=[];for(let t=0;t<e.length;t++){const n=e[t];if("m"===n.type&&"Segment"===n.name){if(r=e.slice(0,t),i=e.slice(t),n.unknownSize){i.shift();break}throw new Error("this metadata is not streaming webm file")}}if(!(i[i.length-1].dataEnd>0))throw new Error("metadata dataEnd has wrong number");const n=i[i.length-1].dataEnd,a=r[r.length-1].dataEnd,o=(new Np).encode(r).byteLength-a,s=n-i[0].tagStart,u=new ip.lW([24,83,128,103]),c=new ip.lW("01ffffffffffffff","hex"),p=u.byteLength+c.byteLength;let l,d=s;for(l=1;l<20;l++){const e=Kp(i,o+(a+p+d-n),t),s=(new Np).encode(e).byteLength;if(s===d)return(new Np).encode([].concat(r,[{type:"m",name:"Segment",isEnd:!1,unknownSize:!0}],e));d=s}throw new Error("unable to refine metadata, stable size could not be found in "+l+" iterations!")}function Gp(e){const t=new Np;return e.reduce(((e,r)=>e.concat(t.encode([r]))),[]).reduce(((e,t)=>e+t.byteLength),0)}function Kp(e,t,r){const{duration:i,clusterPtrs:n,cues:a}=r,o=e.slice(0);if("number"==typeof i){let e=!1;o.forEach((t=>{"f"===t.type&&"Duration"===t.name&&(e=!0,t.data=Yp(i,8))})),e||$p(o,"Info",[{name:"Duration",type:"f",data:Yp(i,8)}])}Array.isArray(a)&&$p(o,"Cues",function(e,t){const r=[];return e.forEach((({CueTrack:e,CueClusterPosition:i,CueTime:n})=>{r.push({name:"CuePoint",type:"m",isEnd:!1}),r.push({name:"CueTime",type:"u",data:Qp(n)}),r.push({name:"CueTrackPositions",type:"m",isEnd:!1}),r.push({name:"CueTrack",type:"u",data:Qp(e)}),r.push({name:"CueClusterPosition",type:"u",data:Qp(i+t)}),r.push({name:"CueTrackPositions",type:"m",isEnd:!0}),r.push({name:"CuePoint",type:"m",isEnd:!0})})),r}(a,t));let s=[];return Array.isArray(n)&&(ap.warn("append cluster pointers to seekhead is deprecated. please use cues"),s=function(e,t){const r=[];return e.forEach((e=>{r.push({name:"Seek",type:"m",isEnd:!1}),r.push({name:"SeekID",type:"b",data:new ip.lW([31,67,182,117])}),r.push({name:"SeekPosition",type:"u",data:Qp(e+t)}),r.push({name:"Seek",type:"m",isEnd:!0})})),r}(n,t)),$p(o,"SeekHead",s,!0),o}function $p(e,t,r,i=!1){let n=-1;for(let r=0;r<e.length;r++){const i=e[r];if("m"===i.type&&i.name===t&&!1===i.isEnd){n=r;break}}n>=0?e.splice(n+1,0,...r):i?[].concat([{name:t,type:"m",isEnd:!1}],r,[{name:t,type:"m",isEnd:!0}]).reverse().forEach((t=>{e.unshift(t)})):(e.push({name:t,type:"m",isEnd:!1}),r.forEach((t=>{e.push(t)})),e.push({name:t,type:"m",isEnd:!0}))}function Vp(e){let t=new ip.lW(0);if("m"===e.type)return e;switch(e.type){case"u":t=Qp(e.value);break;case"i":t=Zp(e.value);break;case"f":t=Yp(e.value);break;case"s":t=new ip.lW(e.value,"ascii");break;case"8":t=new ip.lW(e.value,"utf8");break;case"b":t=e.value;break;case"d":t=new Tp(e.value.getTime().toString()).toBuffer()}return Object.assign({},e,{data:t})}function Qp(e){let t=1;for(;e>=Math.pow(2,8*t);t++);if(t>=7)return ap.warn("7bit or more bigger uint not supported."),new Cp(e).toBuffer();const r=new ip.lW(t);return r.writeUIntBE(e,0,t),r}function Zp(e){let t=1;for(;e>=Math.pow(2,8*t);t++);if(t>=7)return ap.warn("7bit or more bigger uint not supported."),new Tp(e).toBuffer();const r=new ip.lW(t);return r.writeIntBE(e,0,t),r}function Yp(e,t=8){if(8===t){const t=new ip.lW(8);return t.writeDoubleBE(e,0),t}if(4===t){const t=new ip.lW(4);return t.writeFloatBE(e,0),t}throw new Error("float type bits must 4bytes or 8bytes")}((e,t)=>{for(var r in t)op(e,r,{get:t[r],enumerable:!0})})(kp,{VP8BitStreamToRiffWebPBuffer:()=>Lp,WebPBlockFilter:()=>Up,WebPFrameFilter:()=>Dp,concat:()=>lp,convertEBMLDateToJSDate:()=>yp,createFloatBuffer:()=>Yp,createIntBuffer:()=>Zp,createRIFFChunk:()=>qp,createUIntBuffer:()=>Qp,ebmlBlock:()=>cp,encodeTag:()=>dp,encodeValueToBuffer:()=>Vp,extractElement:()=>Hp,makeMetadataSeekable:()=>Bp,putRefinedMetaData:()=>Wp,readBlock:()=>pp,readVint:()=>sp,removeElement:()=>Fp,writeVint:()=>up}),n(67904),n(68215),n(13701),n(55246),n(90778).Buffer,Object.freeze,Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var Xp=class{constructor(){this.handlers=[]}on(e){this.handlers.push(e)}off(e){this.handlers=this.handlers.filter((t=>t!==e))}clear(){this.handlers=[]}trigger(e){this.handlers.slice(0).forEach((t=>{t(e)}))}expose(){return this}};Object.entries({Audio:"E1",Block:"A1",BlockDuration:"9B",BlockGroup:"A0",Channels:"9F",Cluster:"1F43B675",CodecId:"86",DisplayHeight:"54BA",DisplayWidth:"54B0",Info:"1549A966",MuxingApp:"4D80",PixelHeight:"BA",PixelWidth:"B0",ReferenceBlock:"FB",SamplingFrequency:"B5",Segment:"18538067",SimpleBlock:"A3",Timestamp:"E7",TimestampScale:"2AD7B1",TrackEntry:"AE",TrackNumber:"D7",TrackType:"83",TrackUID:"73C5",Tracks:"1654AE6B",Video:"E0",Void:"EC",WritingApp:"5741"}).reduce(((e,[t,r])=>(e[t]=ip.lW.from(r,"hex"),e)),{});var{removeElement:Jp,encodeTag:el,createUIntBuffer:tl,writeVint:rl}=kp,{encodeTag:il,createUIntBuffer:nl}=kp,{encodeTag:al,createUIntBuffer:ol}=kp,sl=class e{constructor(e){this.terminating=!1,this.onWsMessage=new Xp,this.onWsOpen=new Xp,this.onWsError=new Xp,this.onOpen=()=>{this.terminating=!1,this.onWsOpen.trigger()},this.onClose=()=>{this.terminating||this.onWsError.trigger(Error("proxy went away")),this.removeListeners()},this.onError=e=>{this.isReady&&this.terminate(),clearInterval(this.sendTimer),this.onWsError.trigger(e)},this.onMessage=({data:e})=>{try{let t=JSON.parse(e);this.onWsMessage.trigger(t)}catch(e){this.onError(e)}},this.ws=new WebSocket(e),this.setupListeners()}setupListeners(){this.ws.addEventListener("open",this.onOpen),this.ws.addEventListener("close",this.onClose),this.ws.addEventListener("error",this.onError),this.ws.addEventListener("message",this.onMessage),this.removeListeners=()=>{this.ws.removeEventListener("open",this.onOpen),this.ws.removeEventListener("close",this.onClose),this.ws.removeEventListener("error",this.onError),this.ws.removeEventListener("message",this.onMessage)}}get isReady(){var e;return(null==(e=this.ws)?void 0:e.readyState)===WebSocket.OPEN}get Message(){return this.onWsMessage.expose()}get Open(){return this.onWsOpen.expose()}get Error(){return this.onWsError.expose()}terminate(){this.terminating||(this.terminating=!0,this.ws.close(1e3))}sendMessage(e){this.ws.send(JSON.stringify(e))}async sendChunk(e){this.isReadyToSend()||await this.waitUntilReady(),this.ws.send(e)}isReadyToSend(){return this.isReady&&this.ws.bufferedAmount<=e.MAX_BUFFERED_AMOUNT_BYTES}waitUntilReady(){return new Promise(((t,r)=>{let i=setTimeout(r,e.MAX_SEND_WAIT_MS),n=setInterval((()=>{this.isReadyToSend()&&(clearTimeout(i),clearInterval(n),t())}),e.READYNESS_CHECK_INTERVAL_MS)}))}};sl.MAX_BUFFERED_AMOUNT_BYTES=15e5,sl.MAX_SEND_WAIT_MS=5e3,sl.READYNESS_CHECK_INTERVAL_MS=50,n(55246);var ul=(e=>(e.default="us-west-2",e.proxy="upload-proxy",e))(ul||{});const cl=Oa({name:"networkSlice",initialState:{isOnline:!0,checkingIsOnline:!1,countryCode:void 0,uploadMethod:ul.default,uploadThroughput:void 0},reducers:{updateCountryCode(e,t){e.countryCode=t.payload},updateIsOnline(e,t){e.isOnline=t.payload,e.checkingIsOnline=!1},updateCheckingIsOnline(e,t){e.checkingIsOnline=t.payload},updateUploadMethod(e,t){e.uploadMethod=t.payload}}}),{updateIsOnline:pl,updateCheckingIsOnline:ll,updateUploadMethod:dl}=cl.actions;var yl=cl,bl=(e=>(e.Delivered="delivered",e.Read="read",e.Seen="seen",e))(bl||{}),hl=(e=>(e.About="about-tab",e.Notifications="notifications-tab",e.PreRecord="pre-recording-tab",e.Settings="settings-tab",e.OSPermissionsTour="os-permission-tour",e.Effects="effects",e.Canvas="canvas",e.VideoLimit="videoLimit",e.Blur="blurText",e.NetworkError="networkError",e.UpdateBrowser="updateBrowser",e))(hl||{}),gl=(e=>(e.on="on",e.off="off",e.paused="paused",e))(gl||{}),fl=(e=>(e[e.none=0]="none",e[e.mic=1]="mic",e[e.cam=2]="cam",e[e.both=3]="both",e))(fl||{});const ml="loom.com",Sl="https://www.loom.com";chrome.runtime.id;const vl={"X-Loom-Request-Source":"loom_chrome_ext_5.5.60"};var Al=n(27077);function Cl(){const e=Al.n2,t=e.crypto||e.msCrypto;let r=()=>16*Math.random();try{if(t&&t.randomUUID)return t.randomUUID().replace(/-/g,"");t&&t.getRandomValues&&(r=()=>t.getRandomValues(new Uint8Array(1))[0])}catch(e){}return([1e7]+1e3+4e3+8e3+1e11).replace(/[018]/g,(e=>(e^(15&r())>>e/4).toString(16)))}var Tl=n(50562);const Ml=["debug","info","warn","error","log","assert","trace"],_l={};function Rl(e){if(!("console"in Al.n2))return e();const t=Al.n2.console,r={},i=Object.keys(_l);i.forEach((e=>{const i=_l[e];r[e]=t[e],t[e]=i}));try{return e()}finally{i.forEach((e=>{t[e]=r[e]}))}}const Ol=function(){let e=!1;const t={enable:()=>{e=!0},disable:()=>{e=!1}};return"undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__?Ml.forEach((r=>{t[r]=(...t)=>{e&&Rl((()=>{Al.n2.console[r](`Sentry Logger [${r}]:`,...t)}))}})):Ml.forEach((e=>{t[e]=()=>{}})),t}(),wl="production",Pl=Object.prototype.toString;function jl(e){return function(e,t){return Pl.call(e)===`[object ${t}]`}(e,"Object")}function zl(e){return Boolean(e&&e.then&&"function"==typeof e.then)}var xl;!function(e){e[e.PENDING=0]="PENDING",e[e.RESOLVED=1]="RESOLVED",e[e.REJECTED=2]="REJECTED"}(xl||(xl={}));class Il{constructor(e){Il.prototype.__init.call(this),Il.prototype.__init2.call(this),Il.prototype.__init3.call(this),Il.prototype.__init4.call(this),this._state=xl.PENDING,this._handlers=[];try{e(this._resolve,this._reject)}catch(e){this._reject(e)}}then(e,t){return new Il(((r,i)=>{this._handlers.push([!1,t=>{if(e)try{r(e(t))}catch(e){i(e)}else r(t)},e=>{if(t)try{r(t(e))}catch(e){i(e)}else i(e)}]),this._executeHandlers()}))}catch(e){return this.then((e=>e),e)}finally(e){return new Il(((t,r)=>{let i,n;return this.then((t=>{n=!1,i=t,e&&e()}),(t=>{n=!0,i=t,e&&e()})).then((()=>{n?r(i):t(i)}))}))}__init(){this._resolve=e=>{this._setResult(xl.RESOLVED,e)}}__init2(){this._reject=e=>{this._setResult(xl.REJECTED,e)}}__init3(){this._setResult=(e,t)=>{this._state===xl.PENDING&&(zl(t)?t.then(this._resolve,this._reject):(this._state=e,this._value=t,this._executeHandlers()))}}__init4(){this._executeHandlers=()=>{if(this._state===xl.PENDING)return;const e=this._handlers.slice();this._handlers=[],e.forEach((e=>{e[0]||(this._state===xl.RESOLVED&&e[1](this._value),this._state===xl.REJECTED&&e[2](this._value),e[0]=!0)}))}}}function El(e,t,r,i=0){return new Il(((n,a)=>{const o=e[i];if(null===t||"function"!=typeof o)n(t);else{const s=o({...t},r);("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&o.id&&null===s&&Ol.log(`Event processor "${o.id}" dropped event`),zl(s)?s.then((t=>El(e,t,r,i+1).then(n))).then(null,a):El(e,s,r,i+1).then(n).then(null,a)}}))}function Nl(e){return kl(e,new Map)}function kl(e,t){if(jl(e)){const r=t.get(e);if(void 0!==r)return r;const i={};t.set(e,i);for(const r of Object.keys(e))void 0!==e[r]&&(i[r]=kl(e[r],t));return i}if(Array.isArray(e)){const r=t.get(e);if(void 0!==r)return r;const i=[];return t.set(e,i),e.forEach((e=>{i.push(kl(e,t))})),i}return e}function Dl(e,t={}){if(t.user&&(!e.ipAddress&&t.user.ip_address&&(e.ipAddress=t.user.ip_address),e.did||t.did||(e.did=t.user.id||t.user.email||t.user.username)),e.timestamp=t.timestamp||(0,Tl.ph)(),t.ignoreDuration&&(e.ignoreDuration=t.ignoreDuration),t.sid&&(e.sid=32===t.sid.length?t.sid:Cl()),void 0!==t.init&&(e.init=t.init),!e.did&&t.did&&(e.did=`${t.did}`),"number"==typeof t.started&&(e.started=t.started),e.ignoreDuration)e.duration=void 0;else if("number"==typeof t.duration)e.duration=t.duration;else{const t=e.timestamp-e.started;e.duration=t>=0?t:0}t.release&&(e.release=t.release),t.environment&&(e.environment=t.environment),!e.ipAddress&&t.ipAddress&&(e.ipAddress=t.ipAddress),!e.userAgent&&t.userAgent&&(e.userAgent=t.userAgent),"number"==typeof t.errors&&(e.errors=t.errors),t.status&&(e.status=t.status)}class Ul{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext=Ll()}static clone(e){const t=new Ul;return e&&(t._breadcrumbs=[...e._breadcrumbs],t._tags={...e._tags},t._extra={...e._extra},t._contexts={...e._contexts},t._user=e._user,t._level=e._level,t._span=e._span,t._session=e._session,t._transactionName=e._transactionName,t._fingerprint=e._fingerprint,t._eventProcessors=[...e._eventProcessors],t._requestSession=e._requestSession,t._attachments=[...e._attachments],t._sdkProcessingMetadata={...e._sdkProcessingMetadata},t._propagationContext={...e._propagationContext}),t}addScopeListener(e){this._scopeListeners.push(e)}addEventProcessor(e){return this._eventProcessors.push(e),this}setUser(e){return this._user=e||{},this._session&&Dl(this._session,{user:e}),this._notifyScopeListeners(),this}getUser(){return this._user}getRequestSession(){return this._requestSession}setRequestSession(e){return this._requestSession=e,this}setTags(e){return this._tags={...this._tags,...e},this._notifyScopeListeners(),this}setTag(e,t){return this._tags={...this._tags,[e]:t},this._notifyScopeListeners(),this}setExtras(e){return this._extra={...this._extra,...e},this._notifyScopeListeners(),this}setExtra(e,t){return this._extra={...this._extra,[e]:t},this._notifyScopeListeners(),this}setFingerprint(e){return this._fingerprint=e,this._notifyScopeListeners(),this}setLevel(e){return this._level=e,this._notifyScopeListeners(),this}setTransactionName(e){return this._transactionName=e,this._notifyScopeListeners(),this}setContext(e,t){return null===t?delete this._contexts[e]:this._contexts[e]=t,this._notifyScopeListeners(),this}setSpan(e){return this._span=e,this._notifyScopeListeners(),this}getSpan(){return this._span}getTransaction(){const e=this.getSpan();return e&&e.transaction}setSession(e){return e?this._session=e:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(e){if(!e)return this;if("function"==typeof e){const t=e(this);return t instanceof Ul?t:this}return e instanceof Ul?(this._tags={...this._tags,...e._tags},this._extra={...this._extra,...e._extra},this._contexts={...this._contexts,...e._contexts},e._user&&Object.keys(e._user).length&&(this._user=e._user),e._level&&(this._level=e._level),e._fingerprint&&(this._fingerprint=e._fingerprint),e._requestSession&&(this._requestSession=e._requestSession),e._propagationContext&&(this._propagationContext=e._propagationContext)):jl(e)&&(this._tags={...this._tags,...e.tags},this._extra={...this._extra,...e.extra},this._contexts={...this._contexts,...e.contexts},e.user&&(this._user=e.user),e.level&&(this._level=e.level),e.fingerprint&&(this._fingerprint=e.fingerprint),e.requestSession&&(this._requestSession=e.requestSession),e.propagationContext&&(this._propagationContext=e.propagationContext)),this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._requestSession=void 0,this._span=void 0,this._session=void 0,this._notifyScopeListeners(),this._attachments=[],this._propagationContext=Ll(),this}addBreadcrumb(e,t){const r="number"==typeof t?t:100;if(r<=0)return this;const i={timestamp:(0,Tl.yW)(),...e},n=this._breadcrumbs;return n.push(i),this._breadcrumbs=n.length>r?n.slice(-r):n,this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(e){return this._attachments.push(e),this}getAttachments(){return this._attachments}clearAttachments(){return this._attachments=[],this}applyToEvent(e,t={},r){if(this._extra&&Object.keys(this._extra).length&&(e.extra={...this._extra,...e.extra}),this._tags&&Object.keys(this._tags).length&&(e.tags={...this._tags,...e.tags}),this._user&&Object.keys(this._user).length&&(e.user={...this._user,...e.user}),this._contexts&&Object.keys(this._contexts).length&&(e.contexts={...this._contexts,...e.contexts}),this._level&&(e.level=this._level),this._transactionName&&(e.transaction=this._transactionName),this._span){e.contexts={trace:this._span.getTraceContext(),...e.contexts};const t=this._span.transaction;if(t){e.sdkProcessingMetadata={dynamicSamplingContext:t.getDynamicSamplingContext(),...e.sdkProcessingMetadata};const r=t.name;r&&(e.tags={transaction:r,...e.tags})}}this._applyFingerprint(e);const i=this._getBreadcrumbs(),n=[...e.breadcrumbs||[],...i];return e.breadcrumbs=n.length>0?n:void 0,e.sdkProcessingMetadata={...e.sdkProcessingMetadata,...this._sdkProcessingMetadata,propagationContext:this._propagationContext},El([...r||[],...(0,Al.YO)("globalEventProcessors",(()=>[])),...this._eventProcessors],e,t)}setSDKProcessingMetadata(e){return this._sdkProcessingMetadata={...this._sdkProcessingMetadata,...e},this}setPropagationContext(e){return this._propagationContext=e,this}getPropagationContext(){return this._propagationContext}_getBreadcrumbs(){return this._breadcrumbs}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach((e=>{e(this)})),this._notifyingListeners=!1)}_applyFingerprint(e){var t;e.fingerprint=e.fingerprint?(t=e.fingerprint,Array.isArray(t)?t:[t]):[],this._fingerprint&&(e.fingerprint=e.fingerprint.concat(this._fingerprint)),e.fingerprint&&!e.fingerprint.length&&delete e.fingerprint}}function Ll(){return{traceId:Cl(),spanId:Cl().substring(16)}}var ql=n(55246);const Bl=4,Fl=100;class Hl{constructor(e,t=new Ul,r=Bl){this._version=r,this._stack=[{scope:t}],e&&this.bindClient(e)}isOlderThan(e){return this._version<e}bindClient(e){this.getStackTop().client=e,e&&e.setupIntegrations&&e.setupIntegrations()}pushScope(){const e=Ul.clone(this.getScope());return this.getStack().push({client:this.getClient(),scope:e}),e}popScope(){return!(this.getStack().length<=1||!this.getStack().pop())}withScope(e){const t=this.pushScope();try{e(t)}finally{this.popScope()}}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getStack(){return this._stack}getStackTop(){return this._stack[this._stack.length-1]}captureException(e,t){const r=this._lastEventId=t&&t.event_id?t.event_id:Cl(),i=new Error("Sentry syntheticException");return this._withClient(((n,a)=>{n.captureException(e,{originalException:e,syntheticException:i,...t,event_id:r},a)})),r}captureMessage(e,t,r){const i=this._lastEventId=r&&r.event_id?r.event_id:Cl(),n=new Error(e);return this._withClient(((a,o)=>{a.captureMessage(e,t,{originalException:e,syntheticException:n,...r,event_id:i},o)})),i}captureEvent(e,t){const r=t&&t.event_id?t.event_id:Cl();return e.type||(this._lastEventId=r),this._withClient(((i,n)=>{i.captureEvent(e,{...t,event_id:r},n)})),r}lastEventId(){return this._lastEventId}addBreadcrumb(e,t){const{scope:r,client:i}=this.getStackTop();if(!i)return;const{beforeBreadcrumb:n=null,maxBreadcrumbs:a=Fl}=i.getOptions&&i.getOptions()||{};if(a<=0)return;const o={timestamp:(0,Tl.yW)(),...e},s=n?Rl((()=>n(o,t))):o;null!==s&&(i.emit&&i.emit("beforeAddBreadcrumb",s,t),r.addBreadcrumb(s,a))}setUser(e){this.getScope().setUser(e)}setTags(e){this.getScope().setTags(e)}setExtras(e){this.getScope().setExtras(e)}setTag(e,t){this.getScope().setTag(e,t)}setExtra(e,t){this.getScope().setExtra(e,t)}setContext(e,t){this.getScope().setContext(e,t)}configureScope(e){const{scope:t,client:r}=this.getStackTop();r&&e(t)}run(e){const t=Gl(this);try{e(this)}finally{Gl(t)}}getIntegration(e){const t=this.getClient();if(!t)return null;try{return t.getIntegration(e)}catch(t){return("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Ol.warn(`Cannot retrieve integration ${e.id} from the current Hub`),null}}startTransaction(e,t){const r=this._callExtensionMethod("startTransaction",e,t);return"undefined"!=typeof __SENTRY_DEBUG__&&!__SENTRY_DEBUG__||r||(this.getClient()?ql.warn("Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':\nSentry.addTracingExtensions();\nSentry.init({...});\n"):ql.warn("Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'")),r}traceHeaders(){return this._callExtensionMethod("traceHeaders")}captureSession(e=!1){if(e)return this.endSession();this._sendSessionUpdate()}endSession(){const e=this.getStackTop().scope,t=e.getSession();t&&function(e,t){let r={};"ok"===e.status&&(r={status:"exited"}),Dl(e,r)}(t),this._sendSessionUpdate(),e.setSession()}startSession(e){const{scope:t,client:r}=this.getStackTop(),{release:i,environment:n=wl}=r&&r.getOptions()||{},{userAgent:a}=Al.n2.navigator||{},o=function(e){const t=(0,Tl.ph)(),r={sid:Cl(),init:!0,timestamp:t,started:t,duration:0,status:"ok",errors:0,ignoreDuration:!1,toJSON:()=>function(e){return Nl({sid:`${e.sid}`,init:e.init,started:new Date(1e3*e.started).toISOString(),timestamp:new Date(1e3*e.timestamp).toISOString(),status:e.status,errors:e.errors,did:"number"==typeof e.did||"string"==typeof e.did?`${e.did}`:void 0,duration:e.duration,attrs:{release:e.release,environment:e.environment,ip_address:e.ipAddress,user_agent:e.userAgent}})}(r)};return e&&Dl(r,e),r}({release:i,environment:n,user:t.getUser(),...a&&{userAgent:a},...e}),s=t.getSession&&t.getSession();return s&&"ok"===s.status&&Dl(s,{status:"exited"}),this.endSession(),t.setSession(o),o}shouldSendDefaultPii(){const e=this.getClient(),t=e&&e.getOptions();return Boolean(t&&t.sendDefaultPii)}_sendSessionUpdate(){const{scope:e,client:t}=this.getStackTop(),r=e.getSession();r&&t&&t.captureSession&&t.captureSession(r)}_withClient(e){const{scope:t,client:r}=this.getStackTop();r&&e(r,t)}_callExtensionMethod(e,...t){const r=Wl().__SENTRY__;if(r&&r.extensions&&"function"==typeof r.extensions[e])return r.extensions[e].apply(this,t);("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Ol.warn(`Extension method ${e} couldn't be found, doing nothing.`)}}function Wl(){return Al.n2.__SENTRY__=Al.n2.__SENTRY__||{extensions:{},hub:void 0},Al.n2}function Gl(e){const t=Wl(),r=Kl(t);return $l(t,e),r}function Kl(e){return(0,Al.YO)("hub",(()=>new Hl),e)}function $l(e,t){return!!e&&((e.__SENTRY__=e.__SENTRY__||{}).hub=t,!0)}function Vl(e){(function(){const e=Wl();if(e.__SENTRY__&&e.__SENTRY__.acs){const t=e.__SENTRY__.acs.getCurrentHub();if(t)return t}return function(e=Wl()){return!!((t=e)&&t.__SENTRY__&&t.__SENTRY__.hub)&&!Kl(e).isOlderThan(Bl)||$l(e,new Hl),Kl(e);var t}(e)})().configureScope(e)}const Ql=[EvalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError,globalThis.DOMException,globalThis.AssertionError,globalThis.SystemError].filter(Boolean).map((e=>[e.name,e]));var Zl=new Map(Ql),Yl=n(90778).Buffer;Error;const Xl=[{property:"name",enumerable:!1},{property:"message",enumerable:!1},{property:"stack",enumerable:!1},{property:"code",enumerable:!0},{property:"cause",enumerable:!1}],Jl=Symbol(".toJSON was called"),ed=({from:e,seen:t,to:r,forceEnumerable:i,maxDepth:n,depth:a,useToJSON:o,serialize:s})=>{if(r||(r=Array.isArray(e)?[]:!s&&td(e)?new((e=>Zl.get(e)??Error)(e.name)):{}),t.push(e),a>=n)return r;if(o&&"function"==typeof e.toJSON&&!0!==e[Jl])return(e=>{e[Jl]=!0;const t=e.toJSON();return delete e[Jl],t})(e);const u=e=>ed({from:e,seen:[...t],forceEnumerable:i,maxDepth:n,depth:a,useToJSON:o,serialize:s});for(const[i,n]of Object.entries(e))"function"==typeof Yl&&Yl.isBuffer(n)?r[i]="[object Buffer]":null===n||"object"!=typeof n||"function"!=typeof n.pipe?"function"!=typeof n&&(n&&"object"==typeof n?t.includes(e[i])?r[i]="[Circular]":(a++,r[i]=u(e[i])):r[i]=n):r[i]="[object Stream]";for(const{property:t,enumerable:n}of Xl)void 0!==e[t]&&null!==e[t]&&Object.defineProperty(r,t,{value:td(e[t])?u(e[t]):e[t],enumerable:!!i||n,configurable:!0,writable:!0});return r};function td(e){return Boolean(e)&&"object"==typeof e&&"name"in e&&"message"in e&&"stack"in e}var rd=function(){return rd=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},rd.apply(this,arguments)};function id(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var i=Array(e),n=0;for(t=0;t<r;t++)for(var a=arguments[t],o=0,s=a.length;o<s;o++,n++)i[n]=a[o];return i}function nd(){var e={};return{get:function(){return e},add:function(t,r){e[t]=r},remove:function(t){delete e[t]},set:function(t){e=t}}}var ad=function(e){return Array.isArray(e)},od=function(e){return!Array.isArray(e)&&"object"==typeof e&&null!==e};function sd(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,n=t;i<n.length;i++){var a=n[i];null!=a&&(e=cd(e,a,ud()))}return e}function ud(){if("undefined"!=typeof WeakSet){var e=new WeakSet;return{hasAlreadyBeenSeen:function(t){var r=e.has(t);return r||e.add(t),r}}}var t=[];return{hasAlreadyBeenSeen:function(e){var r=t.indexOf(e)>=0;return r||t.push(e),r}}}function cd(e,t,r){if(void 0===t)return e;if(!od(t)&&!ad(t))return t;if(!r.hasAlreadyBeenSeen(t)){if(od(t)&&(void 0===e||od(e))){var i=e||{};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=cd(i[n],t[n],r));return i}if(ad(t)&&(void 0===e||ad(e))){(i=e||[]).length=Math.max(i.length,t.length);for(var a=0;a<t.length;a+=1)i[a]=cd(i[a],t[a],r);return i}return t}}var pd=n(55246),ld=/[^\u0000-\u007F]/,dd=function(){function e(e,t,r){void 0===r&&(r=!1),this.endpointUrl=e,this.bytesLimit=t,this.withBatchTime=r}return e.prototype.send=function(e,t){var r=this.withBatchTime?function(e){return e+(-1===e.indexOf("?")?"?":"&")+"batch_time="+(new Date).getTime()}(this.endpointUrl):this.endpointUrl;if(!(navigator.sendBeacon&&t<this.bytesLimit&&navigator.sendBeacon(r,e))){var i=new XMLHttpRequest;i.open("POST",r,!0),i.send(e)}},e}(),yd=function(){function e(e,t,r,i,n,a){void 0===a&&(a=Dd),this.request=e,this.maxSize=t,this.bytesLimit=r,this.maxMessageSize=i,this.flushTimeout=n,this.beforeUnloadCallback=a,this.pushOnlyBuffer=[],this.upsertBuffer={},this.bufferBytesSize=0,this.bufferMessageCount=0,this.flushOnVisibilityHidden(),this.flushPeriodically()}return e.prototype.add=function(e){this.addOrUpdate(e)},e.prototype.upsert=function(e,t){this.addOrUpdate(e,t)},e.prototype.flush=function(){if(0!==this.bufferMessageCount){var e=id(this.pushOnlyBuffer,(t=this.upsertBuffer,r=[],Object.keys(t).forEach((function(e){r.push(t[e])})),r));this.request.send(e.join("\n"),this.bufferBytesSize),this.pushOnlyBuffer=[],this.upsertBuffer={},this.bufferBytesSize=0,this.bufferMessageCount=0}var t,r},e.prototype.sizeInBytes=function(e){return ld.test(e)?void 0!==window.TextEncoder?(new TextEncoder).encode(e).length:new Blob([e]).size:e.length},e.prototype.addOrUpdate=function(e,t){var r=this.process(e),i=r.processedMessage,n=r.messageBytesSize;n>=this.maxMessageSize?pd.warn("Discarded a message whose size was bigger than the maximum allowed size "+this.maxMessageSize+"KB."):(this.hasMessageFor(t)&&this.remove(t),this.willReachedBytesLimitWith(n)&&this.flush(),this.push(i,n,t),this.isFull()&&this.flush())},e.prototype.process=function(e){var t=Ud(e);return{processedMessage:t,messageBytesSize:this.sizeInBytes(t)}},e.prototype.push=function(e,t,r){this.bufferMessageCount>0&&(this.bufferBytesSize+=1),void 0!==r?this.upsertBuffer[r]=e:this.pushOnlyBuffer.push(e),this.bufferBytesSize+=t,this.bufferMessageCount+=1},e.prototype.remove=function(e){var t=this.upsertBuffer[e];delete this.upsertBuffer[e];var r=this.sizeInBytes(t);this.bufferBytesSize-=r,this.bufferMessageCount-=1,this.bufferMessageCount>0&&(this.bufferBytesSize-=1)},e.prototype.hasMessageFor=function(e){return void 0!==e&&void 0!==this.upsertBuffer[e]},e.prototype.willReachedBytesLimitWith=function(e){return this.bufferBytesSize+e+1>=this.bytesLimit},e.prototype.isFull=function(){return this.bufferMessageCount===this.maxSize||this.bufferBytesSize>=this.bytesLimit},e.prototype.flushPeriodically=function(){var e=this;setTimeout((function(){e.flush(),e.flushPeriodically()}),this.flushTimeout)},e.prototype.flushOnVisibilityHidden=function(){var e=this;navigator.sendBeacon&&(Bd(window,wd.BEFORE_UNLOAD,this.beforeUnloadCallback),Bd(document,wd.VISIBILITY_CHANGE,(function(){"hidden"===document.visibilityState&&e.flush()})),Bd(window,wd.BEFORE_UNLOAD,(function(){return e.flush()})))},e}(),bd="?",hd=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;function gd(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var fd,md=function(){var e,t,r,i,n,a,o=[];function s(e,t,r){var i;for(var n in o)if(gd(o,n))try{o[n](e,t,r)}catch(e){i=e}if(i)throw i}function u(e,i,n,a,o){if(t)Sd.augmentStackTraceWithInitialElement(t,i,n,""+e),p();else if(o)s(Sd(o),!0,o);else{var u,c={url:i,column:a,line:n},l=e;if("[object String]"==={}.toString.call(e)){var d=l.match(hd);d&&(u=d[1],l=d[2])}s({name:u,message:l,stack:[c]},!0)}return!!r&&r.apply(this,arguments)}function c(e){var t=e.reason||"Empty reason";s(Sd(t),!0,t)}function p(){var r=t,i=e;t=void 0,e=void 0,s(r,!1,i)}function l(r){if(t){if(e===r)return;p()}var i=Sd(r);throw t=i,e=r,setTimeout((function(){e===r&&p()}),i.incomplete?2e3:0),r}return l.subscribe=function(e){i||(r=window.onerror,window.onerror=_d(u),i=!0),a||(n=null!==window.onunhandledrejection?window.onunhandledrejection:void 0,window.onunhandledrejection=_d(c),a=!0),o.push(e)},l.unsubscribe=function(e){for(var t=o.length-1;t>=0;t-=1)o[t]===e&&o.splice(t,1);0===o.length&&(i&&(window.onerror=r,i=!1),a&&(window.onunhandledrejection=n,a=!1))},l.traceKitWindowOnError=u,l}(),Sd=function(){function e(e){if(e.stack){for(var t,r,i,n,a=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,o=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,s=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,u=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,c=/\((\S*)(?::(\d+))(?::(\d+))\)/,p=e.stack.split("\n"),l=[],d=0,y=p.length;d<y;d+=1){if(a.exec(p[d])){var b=(i=a.exec(p[d]))[2]&&0===i[2].indexOf("native");t=i[2]&&0===i[2].indexOf("eval"),r=c.exec(i[2]),t&&r&&(i[2]=r[1],i[3]=r[2],i[4]=r[3]),n={args:b?[i[2]]:[],column:i[4]?+i[4]:void 0,func:i[1]||bd,line:i[3]?+i[3]:void 0,url:b?void 0:i[2]}}else if(s.exec(p[d]))n={args:[],column:(i=s.exec(p[d]))[4]?+i[4]:void 0,func:i[1]||bd,line:+i[3],url:i[2]};else{if(!o.exec(p[d]))continue;t=(i=o.exec(p[d]))[3]&&i[3].indexOf(" > eval")>-1,r=u.exec(i[3]),t&&r?(i[3]=r[1],i[4]=r[2],i[5]=void 0):0!==d||i[5]||void 0===e.columnNumber||(l[0].column=e.columnNumber+1),n={args:i[2]?i[2].split(","):[],column:i[5]?+i[5]:void 0,func:i[1]||bd,line:i[4]?+i[4]:void 0,url:i[3]}}!n.func&&n.line&&(n.func=bd),l.push(n)}if(l.length)return{stack:l,message:e.message,name:e.name}}}function t(e,t,r,i){var n={url:t,line:r?+r:void 0};if(n.url&&n.line){e.incomplete=!1;var a=e.stack;if(a.length>0&&a[0].url===n.url){if(a[0].line===n.line)return!1;if(!a[0].line&&a[0].func===n.func)return a[0].line=n.line,a[0].context=n.context,!1}return a.unshift(n),e.partial=!0,!0}return e.incomplete=!0,!1}function r(e,i){for(var n,a,o=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,s=[],u={},c=!1,p=r.caller;p&&!c;p=p.caller)p!==Sd&&p!==md&&(a={args:[],column:void 0,func:bd,line:void 0,url:void 0},n=o.exec(p.toString()),p.name?a.func=p.name:n&&(a.func=n[1]),void 0===a.func&&(a.func=n?n.input.substring(0,n.input.indexOf("{")):void 0),u[""+p]?c=!0:u[""+p]=!0,s.push(a));i&&s.splice(0,i);var l={stack:s,message:e.message,name:e.name};return t(l,e.sourceURL||e.fileName,e.line||e.lineNumber,e.message||e.description),l}function i(t,i){var n,a=void 0===i?0:+i;try{if(n=function(e){var t=e.stacktrace;if(t){for(var r,i=/ line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,n=/ line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i,a=t.split("\n"),o=[],s=0;s<a.length;s+=2){var u=void 0;i.exec(a[s])?u={args:[],column:void 0,func:(r=i.exec(a[s]))[3],line:+r[1],url:r[2]}:n.exec(a[s])&&(u={args:(r=n.exec(a[s]))[5]?r[5].split(","):[],column:+r[2],func:r[3]||r[4],line:+r[1],url:r[6]}),u&&(!u.func&&u.line&&(u.func=bd),u.context=[a[s+1]],o.push(u))}if(o.length)return{stack:o,message:e.message,name:e.name}}}(t),n)return n}catch(e){}try{if(n=e(t))return n}catch(e){}try{if(n=function(e){var t=e.message.split("\n");if(!(t.length<4)){var r,i=/^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,n=/^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,a=/^\s*Line (\d+) of function script\s*$/i,o=[],s=window&&window.document&&window.document.getElementsByTagName("script"),u=[];for(var c in s)gd(s,c)&&!s[c].src&&u.push(s[c]);for(var p=2;p<t.length;p+=2){var l=void 0;i.exec(t[p])?l={args:[],column:void 0,func:(r=i.exec(t[p]))[3],line:+r[1],url:r[2]}:n.exec(t[p])?l={args:[],column:void 0,func:(r=n.exec(t[p]))[4],line:+r[1],url:r[3]}:a.exec(t[p])&&(r=a.exec(t[p]),l={url:window.location.href.replace(/#.*$/,""),args:[],column:void 0,func:"",line:+r[1]}),l&&(l.func||(l.func=bd),l.context=[t[p+1]],o.push(l))}if(o.length)return{stack:o,message:t[0],name:e.name}}}(t),n)return n}catch(e){}try{if(n=r(t,a+1))return n}catch(e){}return{message:t.message,name:t.name,stack:[]}}return i.augmentStackTraceWithInitialElement=t,i.computeStackTraceFromStackProp=e,i.ofCaller=function(e){var t=1+(void 0===e?0:+e);try{throw new Error}catch(e){return Sd(e,t+1)}},i}(),vd=n(55246);!function(e){e.info="info",e.error="error"}(fd||(fd={}));var Ad,Cd={maxMessagesPerPage:0,sentMessageCount:0};function Td(e){if(e.internalMonitoringEndpoint){var t=function(e){var t,r=i(e.internalMonitoringEndpoint);function i(t){return new yd(new dd(t,e.batchBytesLimit),e.maxBatchSize,e.batchBytesLimit,e.maxMessageSize,e.flushTimeout)}return void 0!==e.replica&&(t=i(e.replica.internalMonitoringEndpoint)),{add:function(e){var i=function(e){return sd({date:(new Date).getTime(),view:{referrer:document.referrer,url:window.location.href}},void 0!==Ad?Ad():{},e)}(e);r.add(i),t&&t.add(i)}}}(e);!function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];t.forEach((function(t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}))}(Cd,{batch:t,maxMessagesPerPage:e.maxInternalMonitoringMessagesPerPage,sentMessageCount:0})}return{setExternalContextProvider:function(e){Ad=e}}}function Md(e,t,r){var i=r.value;r.value=function(){return(Cd.batch?_d(i):i).apply(this,arguments)}}function _d(e){return function(){try{return e.apply(this,arguments)}catch(e){Od(e);try{!function(e){var t;t=rd(rd({},function(e){if(e instanceof Error){var t=Sd(e);return{error:{kind:t.name,stack:Hd(t)},message:t.message}}return{error:{stack:"Not an instance of error"},message:"Uncaught "+Ud(e)}}(e)),{status:fd.error}),Cd.batch&&Cd.sentMessageCount<Cd.maxMessagesPerPage&&(Cd.sentMessageCount+=1,Cd.batch.add(t))}(e)}catch(e){Od(e)}}}}function Rd(e){Cd.debugMode=e}function Od(e){Cd.debugMode&&vd.warn("[INTERNAL ERROR]",e)}var wd,Pd,jd,zd,xd,Id=1e3,Ed=60*Id,Nd=60*Ed;function kd(e){return e?(parseInt(e,10)^16*Math.random()>>parseInt(e,10)/4).toString(16):"10000000-1000-4000-8000-100000000000".replace(/[018]/g,kd)}function Dd(){}function Ud(e,t,r){if(null==e)return JSON.stringify(e);var i=[!1,void 0];Ld(e)&&(i=[!0,e.toJSON],delete e.toJSON);var n,a,o=[!1,void 0];"object"==typeof e&&Ld(n=Object.getPrototypeOf(e))&&(o=[!0,n.toJSON],delete n.toJSON);try{a=JSON.stringify(e,void 0,r)}catch(e){a="<error: unable to serialize object>"}finally{i[0]&&(e.toJSON=i[1]),o[0]&&(n.toJSON=o[1])}return a}function Ld(e){return"object"==typeof e&&null!==e&&e.hasOwnProperty("toJSON")}function qd(e){return Math.floor((void 0===zd&&(zd=performance.timing.navigationStart),zd+e))}function Bd(e,t,r,i){return Fd(e,[t],r,i)}function Fd(e,t,r,i){var n=void 0===i?{}:i,a=n.once,o=n.capture,s=n.passive,u=_d(a?function(e){p(),r(e)}:r),c=s?{capture:o,passive:s}:o;t.forEach((function(t){return e.addEventListener(t,u,c)}));var p=function(){return t.forEach((function(t){return e.removeEventListener(t,u,c)}))};return{stop:p}}function Hd(e){var t=(e.name||"Error")+": "+e.message;return e.stack.forEach((function(e){var r="?"===e.func?"<anonymous>":e.func,i=e.args&&e.args.length>0?"("+e.args.join(", ")+")":"",n=e.line?":"+e.line:"",a=e.line&&e.column?":"+e.column:"";t+="\n  at "+r+i+" @ "+e.url+n+a})),t}!function(e){e.BEFORE_UNLOAD="beforeunload",e.CLICK="click",e.KEY_DOWN="keydown",e.LOAD="load",e.POP_STATE="popstate",e.SCROLL="scroll",e.TOUCH_START="touchstart",e.VISIBILITY_CHANGE="visibilitychange",e.DOM_CONTENT_LOADED="DOMContentLoaded",e.POINTER_DOWN="pointerdown",e.POINTER_UP="pointerup",e.POINTER_CANCEL="pointercancel",e.HASH_CHANGE="hashchange",e.PAGE_HIDE="pagehide",e.MOUSE_DOWN="mousedown"}(wd||(wd={})),function(e){e.DOCUMENT="document",e.XHR="xhr",e.BEACON="beacon",e.FETCH="fetch",e.CSS="css",e.JS="js",e.IMAGE="image",e.FONT="font",e.MEDIA="media",e.OTHER="other"}(Pd||(Pd={})),function(e){e.FETCH="fetch",e.XHR="xhr"}(jd||(jd={})),function(e){e.AGENT="agent",e.CONSOLE="console",e.NETWORK="network",e.SOURCE="source",e.LOGGER="logger",e.CUSTOM="custom"}(xd||(xd={}));var Wd,Gd,Kd=n(55246);!function(e){e.debug="debug",e.info="info",e.warn="warn",e.error="error"}(Gd||(Gd={}));var $d,Vd=((Wd={})[Gd.debug]=0,Wd[Gd.info]=1,Wd[Gd.warn]=2,Wd[Gd.error]=3,Wd);Object.keys(Gd),function(e){e.http="http",e.console="console",e.silent="silent"}($d||($d={}));var Qd,Zd=function(){function e(e,t,r,i){void 0===t&&(t=$d.http),void 0===r&&(r=Gd.debug),void 0===i&&(i={}),this.sendLog=e,this.handlerType=t,this.level=r,this.contextManager=nd(),this.contextManager.set(i)}return e.prototype.log=function(e,t,r){if(void 0===r&&(r=Gd.info),Vd[r]>=Vd[this.level])switch(this.handlerType){case $d.http:this.sendLog(rd({message:e,status:r},sd(this.contextManager.get(),t)));break;case $d.console:Kd.log(r+": "+e,sd(this.contextManager.get(),t));case $d.silent:}},e.prototype.debug=function(e,t){this.log(e,t,Gd.debug)},e.prototype.info=function(e,t){this.log(e,t,Gd.info)},e.prototype.warn=function(e,t){this.log(e,t,Gd.warn)},e.prototype.error=function(e,t){var r={error:{origin:xd.LOGGER}};this.log(e,sd(r,t),Gd.error)},e.prototype.setContext=function(e){this.contextManager.set(e)},e.prototype.addContext=function(e,t){this.contextManager.add(e,t)},e.prototype.removeContext=function(e){this.contextManager.remove(e)},e.prototype.setHandler=function(e){this.handlerType=e},e.prototype.setLevel=function(e){this.level=e},function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);a>3&&o&&Object.defineProperty(t,r,o)}([Md],e.prototype,"log",null),e}(),Yd=n(55246),Xd=Id;function Jd(e,t,r,i){var n=new Date;n.setTime(n.getTime()+r);var a="expires="+n.toUTCString(),o=i&&i.crossSite?"none":"strict",s=i&&i.domain?";domain="+i.domain:"",u=i&&i.secure?";secure":"";document.cookie=e+"="+t+";"+a+";path=/;samesite="+o+s+u}function ey(e){return function(e,t){var r=e.match("(?:^|;)\\s*"+t+"\\s*=\\s*([^;]+)");return r?r[1]:void 0}(document.cookie,e)}var ty={allowedTracingOrigins:[],maxErrorsByMinute:3e3,maxInternalMonitoringMessagesPerPage:15,resourceSampleRate:100,sampleRate:100,silentMultipleInit:!1,trackInteractions:!1,requestErrorResponseLengthLimit:32768,flushTimeout:30*Id,maxBatchSize:50,maxMessageSize:262144,batchBytesLimit:16384},ry={alternate:{logs:"logs",rum:"rum",trace:"trace"},classic:{logs:"browser",rum:"rum",trace:"public-trace"}};function iy(e){var t={};return t.secure=function(e){return!!e.useSecureSessionCookie||!!e.useCrossSiteSessionCookie}(e),t.crossSite=!!e.useCrossSiteSessionCookie,e.trackSessionAcrossSubdomains&&(t.domain=function(){if(void 0===Qd){for(var e="dd_site_test_"+kd(),t=window.location.hostname.split("."),r=t.pop();t.length&&!ey(e);)r=t.pop()+"."+r,Jd(e,"test",Id,{domain:r});Qd=r}return Qd}()),t}function ny(e,t,r,i){var n="sdk_version:"+r.sdkVersion+(r.env?",env:"+r.env:"")+(r.service?",service:"+r.service:"")+(r.version?",version:"+r.version:""),a=ay(e,t,r.site),o=r.proxyHost?r.proxyHost:a,s=r.proxyHost?"ddhost="+a+"&":"",u=(r.applicationId?"_dd.application_id="+r.applicationId+"&":"")+s+"ddsource="+(i||"browser")+"&ddtags="+n;return"https://"+o+"/v1/input/"+r.clientToken+"?"+u}function ay(e,t,r){var i=ry[e][t];if("classic"===e)return i+"-http-intake.logs."+r;var n=r.split("."),a=n.pop();return i+".browser-intake-"+n.join("-")+"."+a}var oy,sy,uy=n(55246);!function(e){e.US="us",e.EU="eu"}(sy||(sy={}));var cy,py=((oy={})[sy.EU]="datadoghq.eu",oy[sy.US]="datadoghq.com",oy);!function(e){e.RELEASE="release",e.STAGING="staging",e.E2E_TEST="e2e-test"}(cy||(cy={}));var ly,dy,yy,by=function(){function e(e){void 0===e&&(e=1e4),this.limit=e,this.buffer=[]}return e.prototype.add=function(e){this.buffer.push(e)>this.limit&&this.buffer.splice(0,1)},e.prototype.drain=function(e){this.buffer.forEach((function(t){return e(t)})),this.buffer.length=0},e}();function hy(e){return function(e,t){if(function(){if(void 0!==ly)return ly;try{var e=new URL("http://test/path");return ly="http://test/path"===e.href}catch(e){ly=!1}return ly}())return void 0!==t?new URL(e,t):new URL(e);if(void 0===t&&!/:/.test(e))throw new Error("Invalid URL: '"+e+"'");var r=document,i=r.createElement("a");if(void 0!==t){var n=(r=document.implementation.createHTMLDocument("")).createElement("base");n.href=t,r.head.appendChild(n),r.body.appendChild(i)}return i.href=e,i}(e,function(e){if(e.origin)return e.origin;var t=e.host.replace(/(:80|:443)$/,"");return e.protocol+"//"+t}(window.location)).href}var gy,fy=[],my=[];function Sy(){return dy||(window.fetch&&(yy=window.fetch,window.fetch=_d((function(e,t){var r=this,i=t&&t.method||"object"==typeof e&&e.method||"GET",n=hy("object"==typeof e&&e.url||e),a={init:t,method:i,startTime:performance.now(),url:n},o=function(e){return function(e,t,r,i){return new(r||(r=Promise))((function(n,a){function o(e){try{u(i.next(e))}catch(e){a(e)}}function s(e){try{u(i.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,s)}u((i=i.apply(e,t||[])).next())}))}(r,void 0,void 0,(function(){var t,r;return function(e,t){var r,i,n,a,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,i&&(n=2&a[0]?i.return:a[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,a[1])).done)return n;switch(i=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,i=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((n=(n=o.trys).length>0&&n[n.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){o.label=a[1];break}if(6===a[0]&&o.label<n[1]){o.label=n[1],n=a;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(a);break}n[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],i=0}finally{r=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}(this,(function(i){switch(i.label){case 0:return a.duration=performance.now()-a.startTime,"stack"in e||e instanceof Error?(a.status=0,a.response=Hd(Sd(e)),my.forEach((function(e){return e(a)})),[3,6]):[3,1];case 1:if(!("status"in e))return[3,6];t=void 0,i.label=2;case 2:return i.trys.push([2,4,,5]),[4,e.clone().text()];case 3:return t=i.sent(),[3,5];case 4:return r=i.sent(),t="Unable to retrieve response: "+r,[3,5];case 5:a.response=t,a.responseType=e.type,a.status=e.status,my.forEach((function(e){return e(a)})),i.label=6;case 6:return[2]}}))}))};fy.forEach((function(e){return e(a)}));var s=yy.call(this,e,a.init);return s.then(_d(o),_d(o)),s}))),dy={beforeSend:function(e){fy.push(e)},onRequestComplete:function(e){my.push(e)}}),dy}var vy,Ay,Cy=[],Ty=[];var My,_y,Ry,Oy=function(){function e(){this.observers=[]}return e.prototype.subscribe=function(e){this.observers.push(e)},e.prototype.notify=function(e){this.observers.forEach((function(t){return t(e)}))},e}(),wy=n(55246);function Py(e){if(!My){var t=new Oy;!function(e,t){function r(r,i){e.isIntakeUrl(i.url)||!function(e){return 0===e.status&&"opaque"!==e.responseType}(i)&&!function(e){return e.status>=500}(i)||t.notify({message:xy(r)+" error "+i.method+" "+i.url,resource:{method:i.method,statusCode:i.status,url:i.url},source:xd.NETWORK,stack:zy(i.response,e)||"Failed to load",startTime:i.startTime})}(gy||(vy=XMLHttpRequest.prototype.open,Ay=XMLHttpRequest.prototype.send,XMLHttpRequest.prototype.open=_d((function(e,t){return this._datadog_xhr={method:e,startTime:-1,url:hy(t)},vy.apply(this,arguments)})),XMLHttpRequest.prototype.send=_d((function(e){var t=this;if(this._datadog_xhr){this._datadog_xhr.startTime=performance.now();var r=this.onreadystatechange;this.onreadystatechange=function(){this.readyState===XMLHttpRequest.DONE&&_d(n)(),r&&r.apply(this,arguments)};var i=!1,n=function(){i||(i=!0,t._datadog_xhr.duration=performance.now()-t._datadog_xhr.startTime,t._datadog_xhr.response=t.response,t._datadog_xhr.status=t.status,Ty.forEach((function(e){return e(t._datadog_xhr)})))};this.addEventListener("loadend",_d(n)),Cy.forEach((function(e){return e(t._datadog_xhr,t)}))}return Ay.apply(this,arguments)})),gy={beforeSend:function(e){Cy.push(e)},onRequestComplete:function(e){Ty.push(e)}}),gy).onRequestComplete((function(e){return r(jd.XHR,e)})),Sy().onRequestComplete((function(e){return r(jd.FETCH,e)}))}(e,t),function(e){_y=wy.error,wy.error=_d((function(t){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];_y.apply(wy,id([t],r)),e.notify({message:id(["console error:",t],r).map(jy).join(" "),source:xd.CONSOLE,startTime:performance.now()})}))}(t),function(e){Ry=function(t,r,i){var n=function(e,t,r){return e&&(void 0!==e.message||t instanceof Error)?{message:e.message||"Empty message",stack:Hd(e),type:e.name}:{message:"Uncaught "+Ud(t),stack:"No stack, consider using an instance of Error",type:e&&e.name}}(t,i),a=n.stack,o=n.message,s=n.type;e.notify({message:o,stack:a,type:s,source:xd.SOURCE,startTime:performance.now()})},md.subscribe(Ry)}(t),My=function(e,t){var r=0,i=new Oy;return t.subscribe((function(t){r<e.maxErrorsByMinute?(r+=1,i.notify(t)):r===e.maxErrorsByMinute&&(r+=1,i.notify({message:"Reached max number of errors by minute: "+e.maxErrorsByMinute,source:xd.AGENT,startTime:performance.now()}))})),setInterval((function(){return r=0}),Ed),i}(e,t)}return My}function jy(e){return"string"==typeof e?e:e instanceof Error?Hd(Sd(e)):Ud(e,0,2)}function zy(e,t){return e&&e.length>t.requestErrorResponseLengthLimit?e.substring(0,t.requestErrorResponseLengthLimit)+"...":e}function xy(e){return jd.XHR===e?"XHR":"Fetch"}var Iy="_dd",Ey="_dd_r",Ny="_dd_l",ky="rum",Dy="logs",Uy="_dd_s",Ly=15*Ed,qy=4*Nd,By=Ed;function Fy(e,t,r){var i=function(e,t){var r,i,n=!1,a=function(){n=!0,window.clearTimeout(r),r=window.setTimeout((function(){n=!1}),Xd)};return{get:function(){return n||(i=ey(e),a()),i},set:function(r,n){Jd(e,r,n,t),i=r,a()}}}(Uy,e);!function(e){var t=e.get(),r=ey(Iy),i=ey(Ey),n=ey(Ny);if(!t){var a={};r&&(a.id=r),n&&/^[01]$/.test(n)&&(a[Dy]=n),i&&/^[012]$/.test(i)&&(a[ky]=i),Ky(a,e)}}(i);var n=new Oy,a=Gy(i).id,o=function(e,t,r){var i,n=!1,a=!1;return{throttled:function(){var r=this;n?a=!0:(e.apply(this),n=!0,i=window.setTimeout((function(){a&&e.apply(r),n=!1,a=!1}),t))},cancel:function(){window.clearTimeout(i),n=!1,a=!1}}}((function(){var e=Gy(i),o=r(e[t]),s=o.trackingType,u=o.isTracked;e[t]=s,u&&!e.id&&(e.id=kd(),e.created=String(Date.now())),Ky(e,i),u&&a!==e.id&&(a=e.id,n.notify())}),Xd).throttled;return o(),function(e){var t=Fd(window,[wd.CLICK,wd.TOUCH_START,wd.KEY_DOWN,wd.SCROLL],e,{capture:!0,passive:!0}).stop;Qy.push(t)}(o),function(e){var t=_d((function(){"visible"===document.visibilityState&&Ky(Gy(i),i)})),r=Bd(document,wd.VISIBILITY_CHANGE,t).stop;Qy.push(r);var n=window.setInterval(t,By);Qy.push((function(){clearInterval(n)}))}(),{getId:function(){return Gy(i).id},getTrackingType:function(){return Gy(i)[t]},renewObservable:n}}var Hy=/^([a-z]+)=([a-z0-9-]+)$/,Wy="&";function Gy(e){var t=function(e){var t=e.get(),r={};return function(e){return void 0!==e&&(-1!==e.indexOf(Wy)||Hy.test(e))}(t)&&t.split(Wy).forEach((function(e){var t=Hy.exec(e);if(null!==t){var i=t[1],n=t[2];r[i]=n}})),r}(e);return function(e){return(void 0===e.created||Date.now()-Number(e.created)<qy)&&(void 0===e.expire||Date.now()<Number(e.expire))}(t)?t:($y(e),{})}function Ky(e,t){if(r=e,0!==Object.keys(r).length){var r;e.expire=String(Date.now()+Ly);var i=function(e){return Object.keys(e).map((function(t){return[t,e[t]]}))}(e).map((function(e){return e[0]+"="+e[1]})).join(Wy);t.set(i,Ly)}else $y(t)}function $y(e){e.set("",0)}var Vy,Qy=[];function Zy(e){return 0!==(t=e.sampleRate)&&100*Math.random()<=t?Vy.TRACKED:Vy.NOT_TRACKED;var t}!function(e){e.NOT_TRACKED="0",e.TRACKED="1"}(Vy||(Vy={}));var Yy={buildMode:"release",datacenter:"us",sdkVersion:"1.26.3"};function Xy(e){var t=window.DD_RUM;return t&&t.getInternalContext?t.getInternalContext(e):void 0}var Jy,eb,tb,rb=n(55246),ib=function(e){var t,r,i=!1,n=nd(),a={},o=new by,s=function(e,t){o.add([e,t])},u=new Zd(c);return t={logger:u,init:_d((function(e){("file:"!==window.location.protocol||(uy.error("Execution is not allowed in the current context."),0))&&function(e){return i?(e.silentMultipleInit||rb.error("DD_LOGS is already initialized."),!1):e&&(e.publicApiKey||e.clientToken)?!!(void 0===e.sampleRate||(t=e.sampleRate,function(e){return"number"==typeof e}(t)&&t>=0&&t<=100))||(rb.error("Sample Rate should be a number between 0 and 100"),!1):(rb.error("Client Token is not configured, we will not send any data."),!1);var t}(e)&&(e.publicApiKey&&(e.clientToken=e.publicApiKey,rb.warn("Public API Key is deprecated. Please use Client Token instead.")),s=function(e,t,r){var i=function(e,t){var r=function(e,t){var r={applicationId:e.applicationId,buildMode:t.buildMode,clientToken:e.clientToken,env:e.env,proxyHost:e.proxyHost,sdkVersion:t.sdkVersion,service:e.service,site:e.site||py[e.datacenter||t.datacenter],version:e.version},i=Array.isArray(e.enableExperimentalFeatures)?e.enableExperimentalFeatures:[],n=e.useAlternateIntakeDomains?"alternate":"classic",a=function(e,t,r){if(t.proxyHost)return["https://"+t.proxyHost+"/v1/input/"];var i=[t.site];t.buildMode===cy.STAGING&&r&&i.push(py[sy.US]);for(var n=[],a=Object.keys(ry[e]),o=0,s=i;o<s.length;o++)for(var u=s[o],c=0,p=a;c<p.length;c++){var l=p[c];n.push("https://"+ay(e,l,u)+"/v1/input/")}return n}(n,r,void 0!==e.replica),o=rd({cookieOptions:iy(e),isEnabled:function(e){return t=e,-1!==i.indexOf(t);var t},logsEndpoint:ny(n,"logs",r),proxyHost:e.proxyHost,rumEndpoint:ny(n,"rum",r),service:e.service,traceEndpoint:ny(n,"trace",r),isIntakeUrl:function(e){return a.some((function(t){return 0===e.indexOf(t)}))}},ty);if(e.internalMonitoringApiKey&&(o.internalMonitoringEndpoint=ny(n,"logs",r,"browser-agent-internal-monitoring")),"allowedTracingOrigins"in e&&(o.allowedTracingOrigins=e.allowedTracingOrigins),"sampleRate"in e&&(o.sampleRate=e.sampleRate),"resourceSampleRate"in e&&(o.resourceSampleRate=e.resourceSampleRate),"trackInteractions"in e&&(o.trackInteractions=!!e.trackInteractions),r.buildMode===cy.E2E_TEST&&(o.internalMonitoringEndpoint="<<< E2E INTERNAL MONITORING ENDPOINT >>>",o.logsEndpoint="<<< E2E LOGS ENDPOINT >>>",o.rumEndpoint="<<< E2E RUM ENDPOINT >>>"),r.buildMode===cy.STAGING&&void 0!==e.replica){var s=rd(rd({},r),{applicationId:e.replica.applicationId,clientToken:e.replica.clientToken,site:py[sy.US]});o.replica={applicationId:e.replica.applicationId,internalMonitoringEndpoint:ny(n,"logs",s,"browser-agent-internal-monitoring"),logsEndpoint:ny(n,"logs",s),rumEndpoint:ny(n,"rum",s)}}return o}(e,t);return{configuration:r,internalMonitoring:Td(r)}}(e,Yy),n=i.configuration,a=i.internalMonitoring,o=!1!==e.forwardErrorsToLogs?Py(n):new Oy,s=function(e,t){if(!t){var r=Zy(e)===Vy.TRACKED;return{getId:function(){},isTracked:function(){return r}}}var i=Fy(e.cookieOptions,"logs",(function(t){return function(e,t){var r=function(e){return e===Vy.NOT_TRACKED||e===Vy.TRACKED}(t)?t:Zy(e);return{trackingType:r,isTracked:r===Vy.TRACKED}}(e,t)}));return{getId:i.getId,isTracked:function(){return i.getTrackingType()===Vy.TRACKED}}}(n,function(e){if(void 0===document.cookie||null===document.cookie)return!1;try{var t="dd_cookie_test_"+kd(),r="test";return Jd(t,r,Id,e),ey(t)===r}catch(e){return Yd.error(e),!1}}(n.cookieOptions));return function(e,t,r,i,n,a){r.setExternalContextProvider((function(){return sd({session_id:i.getId()},a(),Xy())}));var o=function(e,t){var r,i=n(e.logsEndpoint);function n(t){return new yd(new dd(t,e.batchBytesLimit),e.maxBatchSize,e.batchBytesLimit,e.maxMessageSize,e.flushTimeout)}return void 0!==e.replica&&(r=n(e.replica.logsEndpoint)),{add:function(n,a){var o=function(e,t,r,i){return sd(e,t,r,i)}({service:e.service,session_id:t.getId()},a,Xy(),n);i.add(o),r&&r.add(o)}}}(e,i);return t.subscribe((function(e){n.error(e.message,sd({date:qd(e.startTime),error:{kind:e.type,origin:e.source,stack:e.stack}},e.resource?{http:{method:e.resource.method,status_code:e.resource.statusCode,url:e.resource.url}}:void 0,Xy(e.startTime)))})),function(e,t){i.isTracked()&&o.add(e,t)}}(n,o,a,s,t,r)}(e,u,n.get),o.drain((function(e){var t=e[0],r=e[1];return s(t,r)})),i=!0)})),getLoggerGlobalContext:_d(n.get),setLoggerGlobalContext:_d(n.set),addLoggerGlobalContext:_d(n.add),removeLoggerGlobalContext:_d(n.remove),createLogger:_d((function(e,t){return void 0===t&&(t={}),a[e]=new Zd(c,t.handler,t.level,rd(rd({},t.context),{logger:{name:e}})),a[e]})),getLogger:_d((function(e){return a[e]}))},r=rd(rd({},t),{onReady:function(e){e()}}),Object.defineProperty(r,"_setDebug",{get:function(){return Rd},enumerable:!1}),r;function c(e){s(e,sd({date:Date.now(),view:{referrer:document.referrer,url:window.location.href}},n.get()))}}();Jy=function(){if("object"==typeof globalThis)return globalThis;Object.defineProperty(Object.prototype,"_dd_temp_",{get:function(){return this},configurable:!0});var e=_dd_temp_;return delete Object.prototype._dd_temp_,"object"!=typeof e&&(e="object"==typeof self?self:"object"==typeof window?window:{}),e}(),eb=ib,tb=Jy["DD_LOGS"],Jy.DD_LOGS=eb,tb&&tb.q&&tb.q.forEach((function(e){return e()}));var nb=n(96685),ab=e=>"string"==typeof e?0:e instanceof Error?1:2,ob=e=>{switch(ab(e)){case 0:return{message:e,context:{}};case 1:return{message:e.message,context:{error:(0,nb.serializeError)(e)}};default:return{message:"Meta: Unidentifed payload captured",context:{}}}},sb=(e,t)=>t.includes(e),ub=e=>{switch(e){case"debug":return"debug";case"info":return"info";case"warn":case"warning":return"warning";case"error":return"error";case"fatal":case"critical":return"fatal";default:return"log"}},cb=n(37900);const pb=Object.prototype.toString;function lb(e){switch(pb.call(e)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return vb(e,Error)}}function db(e,t){return pb.call(e)===`[object ${t}]`}function yb(e){return db(e,"ErrorEvent")}function bb(e){return db(e,"DOMError")}function hb(e){return db(e,"String")}function gb(e){return null===e||"object"!=typeof e&&"function"!=typeof e}function fb(e){return db(e,"Object")}function mb(e){return"undefined"!=typeof Event&&vb(e,Event)}function Sb(e){return Boolean(e&&e.then&&"function"==typeof e.then)}function vb(e,t){try{return e instanceof t}catch(e){return!1}}var Ab=n(53386);const Cb=(0,Ab.Rf)(),Tb=80;function Mb(e,t={}){try{let r=e;const i=5,n=[];let a=0,o=0;const s=" > ",u=s.length;let c;const p=Array.isArray(t)?t:t.keyAttrs,l=!Array.isArray(t)&&t.maxStringLength||Tb;for(;r&&a++<i&&(c=_b(r,p),!("html"===c||a>1&&o+n.length*u+c.length>=l));)n.push(c),o+=c.length,r=r.parentNode;return n.reverse().join(s)}catch(e){return"<unknown>"}}function _b(e,t){const r=e,i=[];let n,a,o,s,u;if(!r||!r.tagName)return"";i.push(r.tagName.toLowerCase());const c=t&&t.length?t.filter((e=>r.getAttribute(e))).map((e=>[e,r.getAttribute(e)])):null;if(c&&c.length)c.forEach((e=>{i.push(`[${e[0]}="${e[1]}"]`)}));else if(r.id&&i.push(`#${r.id}`),n=r.className,n&&hb(n))for(a=n.split(/\s+/),u=0;u<a.length;u++)i.push(`.${a[u]}`);const p=["type","name","title","alt"];for(u=0;u<p.length;u++)o=p[u],s=r.getAttribute(o),s&&i.push(`[${o}="${s}"]`);return i.join("")}function Rb(e,t=0){return"string"!=typeof e||0===t||e.length<=t?e:`${e.substr(0,t)}...`}function Ob(e,t){if(!Array.isArray(e))return"";const r=[];for(let t=0;t<e.length;t++){const i=e[t];try{r.push(String(i))}catch(e){r.push("[value cannot be serialized]")}}return r.join(t)}function wb(e,t=[],r=!1){return t.some((t=>function(e,t,r=!1){return!!hb(e)&&(db(t,"RegExp")?t.test(e):!!hb(t)&&(r?e===t:e.includes(t)))}(e,t,r)))}function Pb(e,t,r){if(!(t in e))return;const i=e[t],n=r(i);if("function"==typeof n)try{zb(n,i)}catch(e){}e[t]=n}function jb(e,t,r){Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0})}function zb(e,t){const r=t.prototype||{};e.prototype=t.prototype=r,jb(e,"__sentry_original__",t)}function xb(e){return e.__sentry_original__}function Ib(e){if(lb(e))return{message:e.message,name:e.name,stack:e.stack,...Nb(e)};if(mb(e)){const t={type:e.type,target:Eb(e.target),currentTarget:Eb(e.currentTarget),...Nb(e)};return"undefined"!=typeof CustomEvent&&vb(e,CustomEvent)&&(t.detail=e.detail),t}return e}function Eb(e){try{return"undefined"!=typeof Element&&vb(e,Element)?Mb(e):Object.prototype.toString.call(e)}catch(e){return"<unknown>"}}function Nb(e){if("object"==typeof e&&null!==e){const t={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}return{}}function kb(e,t=40){const r=Object.keys(Ib(e));if(r.sort(),!r.length)return"[object has no keys]";if(r[0].length>=t)return Rb(r[0],t);for(let e=r.length;e>0;e--){const i=r.slice(0,e).join(", ");if(!(i.length>t))return e===r.length?i:Rb(i,t)}return""}function Db(e){return Ub(e,new Map)}function Ub(e,t){if(fb(e)){const r=t.get(e);if(void 0!==r)return r;const i={};t.set(e,i);for(const r of Object.keys(e))void 0!==e[r]&&(i[r]=Ub(e[r],t));return i}if(Array.isArray(e)){const r=t.get(e);if(void 0!==r)return r;const i=[];return t.set(e,i),e.forEach((e=>{i.push(Ub(e,t))})),i}return e}let Lb;class qb{constructor(){qb.prototype.__init.call(this)}static __initStatic(){this.id="FunctionToString"}__init(){this.name=qb.id}setupOnce(){Lb=Function.prototype.toString,Function.prototype.toString=function(...e){const t=xb(this)||this;return Lb.apply(t,e)}}}qb.__initStatic();const Bb=["debug","info","warn","error","log","assert","trace"];function Fb(e){if(!("console"in Ab.n2))return e();const t=Ab.n2.console,r={};Bb.forEach((e=>{const i=t[e]&&t[e].__sentry_original__;e in t&&i&&(r[e]=t[e],t[e]=i)}));try{return e()}finally{Object.keys(r).forEach((e=>{t[e]=r[e]}))}}function Hb(){let e=!1;const t={enable:()=>{e=!0},disable:()=>{e=!1}};return"undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__?Bb.forEach((r=>{t[r]=(...t)=>{e&&Fb((()=>{Ab.n2.console[r](`Sentry Logger [${r}]:`,...t)}))}})):Bb.forEach((e=>{t[e]=()=>{}})),t}let Wb;function Gb(){const e=Ab.n2,t=e.crypto||e.msCrypto;if(t&&t.randomUUID)return t.randomUUID().replace(/-/g,"");const r=t&&t.getRandomValues?()=>t.getRandomValues(new Uint8Array(1))[0]:()=>16*Math.random();return([1e7]+1e3+4e3+8e3+1e11).replace(/[018]/g,(e=>(e^(15&r())>>e/4).toString(16)))}function Kb(e){return e.exception&&e.exception.values?e.exception.values[0]:void 0}function $b(e){const{message:t,event_id:r}=e;if(t)return t;const i=Kb(e);return i?i.type&&i.value?`${i.type}: ${i.value}`:i.type||i.value||r||"<unknown>":r||"<unknown>"}function Vb(e,t,r){const i=e.exception=e.exception||{},n=i.values=i.values||[],a=n[0]=n[0]||{};a.value||(a.value=t||""),a.type||(a.type=r||"Error")}function Qb(e,t){const r=Kb(e);if(!r)return;const i=r.mechanism;if(r.mechanism={type:"generic",handled:!0,...i,...t},t&&"data"in t){const e={...i&&i.data,...t.data};r.mechanism.data=e}}function Zb(e){if(e&&e.__sentry_captured__)return!0;try{jb(e,"__sentry_captured__",!0)}catch(e){}return!1}Wb="undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__?(0,Ab.YO)("logger",Hb):Hb();const Yb=[/^Script error\.?$/,/^Javascript error: Script error\.? on line 0$/];class Xb{static __initStatic(){this.id="InboundFilters"}__init(){this.name=Xb.id}constructor(e={}){this._options=e,Xb.prototype.__init.call(this)}setupOnce(e,t){const r=e=>{const r=t();if(r){const t=r.getIntegration(Xb);if(t){const i=r.getClient(),n=i?i.getOptions():{},a=function(e={},t={}){return{allowUrls:[...e.allowUrls||[],...t.allowUrls||[]],denyUrls:[...e.denyUrls||[],...t.denyUrls||[]],ignoreErrors:[...e.ignoreErrors||[],...t.ignoreErrors||[],...Yb],ignoreInternal:void 0===e.ignoreInternal||e.ignoreInternal}}(t._options,n);return function(e,t){return t.ignoreInternal&&function(e){try{return"SentryError"===e.exception.values[0].type}catch(e){}return!1}(e)?(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Wb.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${$b(e)}`),!0):function(e,t){return!(!t||!t.length)&&function(e){if(e.message)return[e.message];if(e.exception)try{const{type:t="",value:r=""}=e.exception.values&&e.exception.values[0]||{};return[`${r}`,`${t}: ${r}`]}catch(t){return("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Wb.error(`Cannot extract message for event ${$b(e)}`),[]}return[]}(e).some((e=>wb(e,t)))}(e,t.ignoreErrors)?(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Wb.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${$b(e)}`),!0):function(e,t){if(!t||!t.length)return!1;const r=Jb(e);return!!r&&wb(r,t)}(e,t.denyUrls)?(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Wb.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${$b(e)}.\nUrl: ${Jb(e)}`),!0):!function(e,t){if(!t||!t.length)return!0;const r=Jb(e);return!r||wb(r,t)}(e,t.allowUrls)&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Wb.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${$b(e)}.\nUrl: ${Jb(e)}`),!0)}(e,a)?null:e}}return e};r.id=this.name,e(r)}}function Jb(e){try{let t;try{t=e.exception.values[0].stacktrace.frames}catch(e){}return t?function(e=[]){for(let t=e.length-1;t>=0;t--){const r=e[t];if(r&&"<anonymous>"!==r.filename&&"[native code]"!==r.filename)return r.filename||null}return null}(t):null}catch(t){return("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Wb.error(`Cannot extract url for event ${$b(e)}`),null}}Xb.__initStatic();var eh,th=n(37365),rh=n(99147);function ih(e){return new ah((t=>{t(e)}))}function nh(e){return new ah(((t,r)=>{r(e)}))}!function(e){e[e.PENDING=0]="PENDING",e[e.RESOLVED=1]="RESOLVED",e[e.REJECTED=2]="REJECTED"}(eh||(eh={}));class ah{__init(){this._state=eh.PENDING}__init2(){this._handlers=[]}constructor(e){ah.prototype.__init.call(this),ah.prototype.__init2.call(this),ah.prototype.__init3.call(this),ah.prototype.__init4.call(this),ah.prototype.__init5.call(this),ah.prototype.__init6.call(this);try{e(this._resolve,this._reject)}catch(e){this._reject(e)}}then(e,t){return new ah(((r,i)=>{this._handlers.push([!1,t=>{if(e)try{r(e(t))}catch(e){i(e)}else r(t)},e=>{if(t)try{r(t(e))}catch(e){i(e)}else i(e)}]),this._executeHandlers()}))}catch(e){return this.then((e=>e),e)}finally(e){return new ah(((t,r)=>{let i,n;return this.then((t=>{n=!1,i=t,e&&e()}),(t=>{n=!0,i=t,e&&e()})).then((()=>{n?r(i):t(i)}))}))}__init3(){this._resolve=e=>{this._setResult(eh.RESOLVED,e)}}__init4(){this._reject=e=>{this._setResult(eh.REJECTED,e)}}__init5(){this._setResult=(e,t)=>{this._state===eh.PENDING&&(Sb(t)?t.then(this._resolve,this._reject):(this._state=e,this._value=t,this._executeHandlers()))}}__init6(){this._executeHandlers=()=>{if(this._state===eh.PENDING)return;const e=this._handlers.slice();this._handlers=[],e.forEach((e=>{e[0]||(this._state===eh.RESOLVED&&e[1](this._value),this._state===eh.REJECTED&&e[2](this._value),e[0]=!0)}))}}}function oh(e,t={}){if(t.user&&(!e.ipAddress&&t.user.ip_address&&(e.ipAddress=t.user.ip_address),e.did||t.did||(e.did=t.user.id||t.user.email||t.user.username)),e.timestamp=t.timestamp||(0,th.ph)(),t.ignoreDuration&&(e.ignoreDuration=t.ignoreDuration),t.sid&&(e.sid=32===t.sid.length?t.sid:Gb()),void 0!==t.init&&(e.init=t.init),!e.did&&t.did&&(e.did=`${t.did}`),"number"==typeof t.started&&(e.started=t.started),e.ignoreDuration)e.duration=void 0;else if("number"==typeof t.duration)e.duration=t.duration;else{const t=e.timestamp-e.started;e.duration=t>=0?t:0}t.release&&(e.release=t.release),t.environment&&(e.environment=t.environment),!e.ipAddress&&t.ipAddress&&(e.ipAddress=t.ipAddress),!e.userAgent&&t.userAgent&&(e.userAgent=t.userAgent),"number"==typeof t.errors&&(e.errors=t.errors),t.status&&(e.status=t.status)}class sh{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={}}static clone(e){const t=new sh;return e&&(t._breadcrumbs=[...e._breadcrumbs],t._tags={...e._tags},t._extra={...e._extra},t._contexts={...e._contexts},t._user=e._user,t._level=e._level,t._span=e._span,t._session=e._session,t._transactionName=e._transactionName,t._fingerprint=e._fingerprint,t._eventProcessors=[...e._eventProcessors],t._requestSession=e._requestSession,t._attachments=[...e._attachments],t._sdkProcessingMetadata={...e._sdkProcessingMetadata}),t}addScopeListener(e){this._scopeListeners.push(e)}addEventProcessor(e){return this._eventProcessors.push(e),this}setUser(e){return this._user=e||{},this._session&&oh(this._session,{user:e}),this._notifyScopeListeners(),this}getUser(){return this._user}getRequestSession(){return this._requestSession}setRequestSession(e){return this._requestSession=e,this}setTags(e){return this._tags={...this._tags,...e},this._notifyScopeListeners(),this}setTag(e,t){return this._tags={...this._tags,[e]:t},this._notifyScopeListeners(),this}setExtras(e){return this._extra={...this._extra,...e},this._notifyScopeListeners(),this}setExtra(e,t){return this._extra={...this._extra,[e]:t},this._notifyScopeListeners(),this}setFingerprint(e){return this._fingerprint=e,this._notifyScopeListeners(),this}setLevel(e){return this._level=e,this._notifyScopeListeners(),this}setTransactionName(e){return this._transactionName=e,this._notifyScopeListeners(),this}setContext(e,t){return null===t?delete this._contexts[e]:this._contexts[e]=t,this._notifyScopeListeners(),this}setSpan(e){return this._span=e,this._notifyScopeListeners(),this}getSpan(){return this._span}getTransaction(){const e=this.getSpan();return e&&e.transaction}setSession(e){return e?this._session=e:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(e){if(!e)return this;if("function"==typeof e){const t=e(this);return t instanceof sh?t:this}return e instanceof sh?(this._tags={...this._tags,...e._tags},this._extra={...this._extra,...e._extra},this._contexts={...this._contexts,...e._contexts},e._user&&Object.keys(e._user).length&&(this._user=e._user),e._level&&(this._level=e._level),e._fingerprint&&(this._fingerprint=e._fingerprint),e._requestSession&&(this._requestSession=e._requestSession)):fb(e)&&(this._tags={...this._tags,...e.tags},this._extra={...this._extra,...e.extra},this._contexts={...this._contexts,...e.contexts},e.user&&(this._user=e.user),e.level&&(this._level=e.level),e.fingerprint&&(this._fingerprint=e.fingerprint),e.requestSession&&(this._requestSession=e.requestSession)),this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._requestSession=void 0,this._span=void 0,this._session=void 0,this._notifyScopeListeners(),this._attachments=[],this}addBreadcrumb(e,t){const r="number"==typeof t?t:100;if(r<=0)return this;const i={timestamp:(0,th.yW)(),...e};return this._breadcrumbs=[...this._breadcrumbs,i].slice(-r),this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(e){return this._attachments.push(e),this}getAttachments(){return this._attachments}clearAttachments(){return this._attachments=[],this}applyToEvent(e,t={}){if(this._extra&&Object.keys(this._extra).length&&(e.extra={...this._extra,...e.extra}),this._tags&&Object.keys(this._tags).length&&(e.tags={...this._tags,...e.tags}),this._user&&Object.keys(this._user).length&&(e.user={...this._user,...e.user}),this._contexts&&Object.keys(this._contexts).length&&(e.contexts={...this._contexts,...e.contexts}),this._level&&(e.level=this._level),this._transactionName&&(e.transaction=this._transactionName),this._span){e.contexts={trace:this._span.getTraceContext(),...e.contexts};const t=this._span.transaction&&this._span.transaction.name;t&&(e.tags={transaction:t,...e.tags})}return this._applyFingerprint(e),e.breadcrumbs=[...e.breadcrumbs||[],...this._breadcrumbs],e.breadcrumbs=e.breadcrumbs.length>0?e.breadcrumbs:void 0,e.sdkProcessingMetadata={...e.sdkProcessingMetadata,...this._sdkProcessingMetadata},this._notifyEventProcessors([...uh(),...this._eventProcessors],e,t)}setSDKProcessingMetadata(e){return this._sdkProcessingMetadata={...this._sdkProcessingMetadata,...e},this}_notifyEventProcessors(e,t,r,i=0){return new ah(((n,a)=>{const o=e[i];if(null===t||"function"!=typeof o)n(t);else{const s=o({...t},r);("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&o.id&&null===s&&Wb.log(`Event processor "${o.id}" dropped event`),Sb(s)?s.then((t=>this._notifyEventProcessors(e,t,r,i+1).then(n))).then(null,a):this._notifyEventProcessors(e,s,r,i+1).then(n).then(null,a)}}))}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach((e=>{e(this)})),this._notifyingListeners=!1)}_applyFingerprint(e){var t;e.fingerprint=e.fingerprint?(t=e.fingerprint,Array.isArray(t)?t:[t]):[],this._fingerprint&&(e.fingerprint=e.fingerprint.concat(this._fingerprint)),e.fingerprint&&!e.fingerprint.length&&delete e.fingerprint}}function uh(){return(0,Ab.YO)("globalEventProcessors",(()=>[]))}function ch(e){uh().push(e)}const ph=4,lh=100;class dh{__init(){this._stack=[{}]}constructor(e,t=new sh,r=ph){this._version=r,dh.prototype.__init.call(this),this.getStackTop().scope=t,e&&this.bindClient(e)}isOlderThan(e){return this._version<e}bindClient(e){this.getStackTop().client=e,e&&e.setupIntegrations&&e.setupIntegrations()}pushScope(){const e=sh.clone(this.getScope());return this.getStack().push({client:this.getClient(),scope:e}),e}popScope(){return!(this.getStack().length<=1||!this.getStack().pop())}withScope(e){const t=this.pushScope();try{e(t)}finally{this.popScope()}}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getStack(){return this._stack}getStackTop(){return this._stack[this._stack.length-1]}captureException(e,t){const r=this._lastEventId=t&&t.event_id?t.event_id:Gb(),i=new Error("Sentry syntheticException");return this._withClient(((n,a)=>{n.captureException(e,{originalException:e,syntheticException:i,...t,event_id:r},a)})),r}captureMessage(e,t,r){const i=this._lastEventId=r&&r.event_id?r.event_id:Gb(),n=new Error(e);return this._withClient(((a,o)=>{a.captureMessage(e,t,{originalException:e,syntheticException:n,...r,event_id:i},o)})),i}captureEvent(e,t){const r=t&&t.event_id?t.event_id:Gb();return"transaction"!==e.type&&(this._lastEventId=r),this._withClient(((i,n)=>{i.captureEvent(e,{...t,event_id:r},n)})),r}lastEventId(){return this._lastEventId}addBreadcrumb(e,t){const{scope:r,client:i}=this.getStackTop();if(!r||!i)return;const{beforeBreadcrumb:n=null,maxBreadcrumbs:a=lh}=i.getOptions&&i.getOptions()||{};if(a<=0)return;const o={timestamp:(0,th.yW)(),...e},s=n?Fb((()=>n(o,t))):o;null!==s&&r.addBreadcrumb(s,a)}setUser(e){const t=this.getScope();t&&t.setUser(e)}setTags(e){const t=this.getScope();t&&t.setTags(e)}setExtras(e){const t=this.getScope();t&&t.setExtras(e)}setTag(e,t){const r=this.getScope();r&&r.setTag(e,t)}setExtra(e,t){const r=this.getScope();r&&r.setExtra(e,t)}setContext(e,t){const r=this.getScope();r&&r.setContext(e,t)}configureScope(e){const{scope:t,client:r}=this.getStackTop();t&&r&&e(t)}run(e){const t=bh(this);try{e(this)}finally{bh(t)}}getIntegration(e){const t=this.getClient();if(!t)return null;try{return t.getIntegration(e)}catch(t){return("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Wb.warn(`Cannot retrieve integration ${e.id} from the current Hub`),null}}startTransaction(e,t){return this._callExtensionMethod("startTransaction",e,t)}traceHeaders(){return this._callExtensionMethod("traceHeaders")}captureSession(e=!1){if(e)return this.endSession();this._sendSessionUpdate()}endSession(){const e=this.getStackTop(),t=e&&e.scope,r=t&&t.getSession();r&&function(e,t){let r={};"ok"===e.status&&(r={status:"exited"}),oh(e,r)}(r),this._sendSessionUpdate(),t&&t.setSession()}startSession(e){const{scope:t,client:r}=this.getStackTop(),{release:i,environment:n}=r&&r.getOptions()||{},{userAgent:a}=Ab.n2.navigator||{},o=function(e){const t=(0,th.ph)(),r={sid:Gb(),init:!0,timestamp:t,started:t,duration:0,status:"ok",errors:0,ignoreDuration:!1,toJSON:()=>function(e){return Db({sid:`${e.sid}`,init:e.init,started:new Date(1e3*e.started).toISOString(),timestamp:new Date(1e3*e.timestamp).toISOString(),status:e.status,errors:e.errors,did:"number"==typeof e.did||"string"==typeof e.did?`${e.did}`:void 0,duration:e.duration,attrs:{release:e.release,environment:e.environment,ip_address:e.ipAddress,user_agent:e.userAgent}})}(r)};return e&&oh(r,e),r}({release:i,environment:n,...t&&{user:t.getUser()},...a&&{userAgent:a},...e});if(t){const e=t.getSession&&t.getSession();e&&"ok"===e.status&&oh(e,{status:"exited"}),this.endSession(),t.setSession(o)}return o}shouldSendDefaultPii(){const e=this.getClient(),t=e&&e.getOptions();return Boolean(t&&t.sendDefaultPii)}_sendSessionUpdate(){const{scope:e,client:t}=this.getStackTop();if(!e)return;const r=e.getSession();r&&t&&t.captureSession&&t.captureSession(r)}_withClient(e){const{scope:t,client:r}=this.getStackTop();r&&e(r,t)}_callExtensionMethod(e,...t){const r=yh().__SENTRY__;if(r&&r.extensions&&"function"==typeof r.extensions[e])return r.extensions[e].apply(this,t);("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Wb.warn(`Extension method ${e} couldn't be found, doing nothing.`)}}function yh(){return Ab.n2.__SENTRY__=Ab.n2.__SENTRY__||{extensions:{},hub:void 0},Ab.n2}function bh(e){const t=yh(),r=fh(t);return mh(t,e),r}function hh(){const e=yh();return gh(e)&&!fh(e).isOlderThan(ph)||mh(e,new dh),(0,rh.KV)()?function(e){try{const t=yh().__SENTRY__,r=t&&t.extensions&&t.extensions.domain&&t.extensions.domain.active;if(!r)return fh(e);if(!gh(r)||fh(r).isOlderThan(ph)){const t=fh(e).getStackTop();mh(r,new dh(t.client,sh.clone(t.scope)))}return fh(r)}catch(t){return fh(e)}}(e):fh(e)}function gh(e){return!!(e&&e.__SENTRY__&&e.__SENTRY__.hub)}function fh(e){return(0,Ab.YO)("hub",(()=>new dh),e)}function mh(e,t){return!!e&&((e.__SENTRY__=e.__SENTRY__||{}).hub=t,!0)}const Sh=Ab.n2;let vh=0;function Ah(){return vh>0}function Ch(e,t={},r){if("function"!=typeof e)return e;try{const t=e.__sentry_wrapped__;if(t)return t;if(xb(e))return e}catch(t){return e}const i=function(){const i=Array.prototype.slice.call(arguments);try{r&&"function"==typeof r&&r.apply(this,arguments);const n=i.map((e=>Ch(e,t)));return e.apply(this,n)}catch(e){throw vh++,setTimeout((()=>{vh--})),n=r=>{var n;r.addEventProcessor((e=>(t.mechanism&&(Vb(e,void 0,void 0),Qb(e,t.mechanism)),e.extra={...e.extra,arguments:i},e))),n=e,hh().captureException(n,{captureContext:undefined})},hh().withScope(n),e}var n};try{for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(i[t]=e[t])}catch(e){}zb(i,e),jb(e,"__sentry_wrapped__",i);try{Object.getOwnPropertyDescriptor(i,"name").configurable&&Object.defineProperty(i,"name",{get(){return e.name}})}catch(e){}return i}const Th="<anonymous>";function Mh(e){try{return e&&"function"==typeof e&&e.name||Th}catch(e){return Th}}const _h=(0,Ab.Rf)();function Rh(e){return e&&/^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())}const Oh=(0,Ab.Rf)(),wh={},Ph={};function jh(e){if(!Ph[e])switch(Ph[e]=!0,e){case"console":"console"in Oh&&Bb.forEach((function(e){e in Oh.console&&Pb(Oh.console,e,(function(t){return function(...r){xh("console",{args:r,level:e}),t&&t.apply(Oh.console,r)}}))}));break;case"dom":!function(){if(!("document"in Oh))return;const e=xh.bind(null,"dom"),t=Lh(e,!0);Oh.document.addEventListener("click",t,!1),Oh.document.addEventListener("keypress",t,!1),["EventTarget","Node"].forEach((t=>{const r=Oh[t]&&Oh[t].prototype;r&&r.hasOwnProperty&&r.hasOwnProperty("addEventListener")&&(Pb(r,"addEventListener",(function(t){return function(r,i,n){if("click"===r||"keypress"==r)try{const i=this,a=i.__sentry_instrumentation_handlers__=i.__sentry_instrumentation_handlers__||{},o=a[r]=a[r]||{refCount:0};if(!o.handler){const i=Lh(e);o.handler=i,t.call(this,r,i,n)}o.refCount++}catch(e){}return t.call(this,r,i,n)}})),Pb(r,"removeEventListener",(function(e){return function(t,r,i){if("click"===t||"keypress"==t)try{const r=this,n=r.__sentry_instrumentation_handlers__||{},a=n[t];a&&(a.refCount--,a.refCount<=0&&(e.call(this,t,a.handler,i),a.handler=void 0,delete n[t]),0===Object.keys(n).length&&delete r.__sentry_instrumentation_handlers__)}catch(e){}return e.call(this,t,r,i)}})))}))}();break;case"xhr":!function(){if(!("XMLHttpRequest"in Oh))return;const e=XMLHttpRequest.prototype;Pb(e,"open",(function(e){return function(...t){const r=this,i=t[1],n=r.__sentry_xhr__={method:hb(t[0])?t[0].toUpperCase():t[0],url:t[1]};hb(i)&&"POST"===n.method&&i.match(/sentry_key/)&&(r.__sentry_own_request__=!0);const a=function(){if(4===r.readyState){try{n.status_code=r.status}catch(e){}xh("xhr",{args:t,endTimestamp:Date.now(),startTimestamp:Date.now(),xhr:r})}};return"onreadystatechange"in r&&"function"==typeof r.onreadystatechange?Pb(r,"onreadystatechange",(function(e){return function(...t){return a(),e.apply(r,t)}})):r.addEventListener("readystatechange",a),e.apply(r,t)}})),Pb(e,"send",(function(e){return function(...t){return this.__sentry_xhr__&&void 0!==t[0]&&(this.__sentry_xhr__.body=t[0]),xh("xhr",{args:t,startTimestamp:Date.now(),xhr:this}),e.apply(this,t)}}))}();break;case"fetch":(function(){if(!function(){if(!("fetch"in _h))return!1;try{return new Headers,new Request("http://www.example.com"),new Response,!0}catch(e){return!1}}())return!1;if(Rh(_h.fetch))return!0;let e=!1;const t=_h.document;if(t&&"function"==typeof t.createElement)try{const r=t.createElement("iframe");r.hidden=!0,t.head.appendChild(r),r.contentWindow&&r.contentWindow.fetch&&(e=Rh(r.contentWindow.fetch)),t.head.removeChild(r)}catch(e){("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Wb.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",e)}return e})()&&Pb(Oh,"fetch",(function(e){return function(...t){const r={args:t,fetchData:{method:Ih(t),url:Eh(t)},startTimestamp:Date.now()};return xh("fetch",{...r}),e.apply(Oh,t).then((e=>(xh("fetch",{...r,endTimestamp:Date.now(),response:e}),e)),(e=>{throw xh("fetch",{...r,endTimestamp:Date.now(),error:e}),e}))}}));break;case"history":!function(){if(!function(){const e=_h.chrome,t=e&&e.app&&e.app.runtime,r="history"in _h&&!!_h.history.pushState&&!!_h.history.replaceState;return!t&&r}())return;const e=Oh.onpopstate;function t(e){return function(...t){const r=t.length>2?t[2]:void 0;if(r){const e=Nh,t=String(r);Nh=t,xh("history",{from:e,to:t})}return e.apply(this,t)}}Oh.onpopstate=function(...t){const r=Oh.location.href,i=Nh;if(Nh=r,xh("history",{from:i,to:r}),e)try{return e.apply(this,t)}catch(e){}},Pb(Oh.history,"pushState",t),Pb(Oh.history,"replaceState",t)}();break;case"error":qh=Oh.onerror,Oh.onerror=function(e,t,r,i,n){return xh("error",{column:i,error:n,line:r,msg:e,url:t}),!!qh&&qh.apply(this,arguments)};break;case"unhandledrejection":Bh=Oh.onunhandledrejection,Oh.onunhandledrejection=function(e){return xh("unhandledrejection",e),!Bh||Bh.apply(this,arguments)};break;default:return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Wb.warn("unknown instrumentation type:",e))}}function zh(e,t){wh[e]=wh[e]||[],wh[e].push(t),jh(e)}function xh(e,t){if(e&&wh[e])for(const r of wh[e]||[])try{r(t)}catch(t){("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Wb.error(`Error while triggering instrumentation handler.\nType: ${e}\nName: ${Mh(r)}\nError:`,t)}}function Ih(e=[]){return"Request"in Oh&&vb(e[0],Request)&&e[0].method?String(e[0].method).toUpperCase():e[1]&&e[1].method?String(e[1].method).toUpperCase():"GET"}function Eh(e=[]){return"string"==typeof e[0]?e[0]:"Request"in Oh&&vb(e[0],Request)?e[0].url:String(e[0])}let Nh;const kh=1e3;let Dh,Uh;function Lh(e,t=!1){return r=>{if(!r||Uh===r)return;if(function(e){if("keypress"!==e.type)return!1;try{const t=e.target;if(!t||!t.tagName)return!0;if("INPUT"===t.tagName||"TEXTAREA"===t.tagName||t.isContentEditable)return!1}catch(e){}return!0}(r))return;const i="keypress"===r.type?"input":r.type;(void 0===Dh||function(e,t){if(!e)return!0;if(e.type!==t.type)return!0;try{if(e.target!==t.target)return!0}catch(e){}return!1}(Uh,r))&&(e({event:r,name:i,global:t}),Uh=r),clearTimeout(Dh),Dh=Oh.setTimeout((()=>{Dh=void 0}),kh)}}let qh=null,Bh=null;function Fh(e,t=1/0,r=1/0){try{return Wh("",e,t,r)}catch(e){return{ERROR:`**non-serializable** (${e})`}}}function Hh(e,t=3,r=102400){const i=Fh(e,t);return n=i,function(e){return~-encodeURI(e).split(/%..|./).length}(JSON.stringify(n))>r?Hh(e,t-1,r):i;var n}function Wh(e,t,r=1/0,i=1/0,a=function(){const e="function"==typeof WeakSet,t=e?new WeakSet:[];return[function(r){if(e)return!!t.has(r)||(t.add(r),!1);for(let e=0;e<t.length;e++)if(t[e]===r)return!0;return t.push(r),!1},function(r){if(e)t.delete(r);else for(let e=0;e<t.length;e++)if(t[e]===r){t.splice(e,1);break}}]}()){const[o,s]=a;if(null===t||["number","boolean","string"].includes(typeof t)&&("number"!=typeof(u=t)||u==u))return t;var u;const c=function(e,t){try{return"domain"===e&&t&&"object"==typeof t&&t._events?"[Domain]":"domainEmitter"===e?"[DomainEmitter]":void 0!==n.g&&t===n.g?"[Global]":"undefined"!=typeof window&&t===window?"[Window]":"undefined"!=typeof document&&t===document?"[Document]":function(e){return fb(e)&&"nativeEvent"in e&&"preventDefault"in e&&"stopPropagation"in e}(t)?"[SyntheticEvent]":"number"==typeof t&&t!=t?"[NaN]":void 0===t?"[undefined]":"function"==typeof t?`[Function: ${Mh(t)}]`:"symbol"==typeof t?`[${String(t)}]`:"bigint"==typeof t?`[BigInt: ${String(t)}]`:`[object ${Object.getPrototypeOf(t).constructor.name}]`}catch(e){return`**non-serializable** (${e})`}}(e,t);if(!c.startsWith("[object "))return c;if(t.__sentry_skip_normalization__)return t;if(0===r)return c.replace("object ","");if(o(t))return"[Circular ~]";const p=t;if(p&&"function"==typeof p.toJSON)try{return Wh("",p.toJSON(),r-1,i,a)}catch(e){}const l=Array.isArray(t)?[]:{};let d=0;const y=Ib(t);for(const e in y){if(!Object.prototype.hasOwnProperty.call(y,e))continue;if(d>=i){l[e]="[MaxProperties ~]";break}const t=y[e];l[e]=Wh(e,t,r-1,i,a),d++}return s(t),l}function Gh(e,t){const r=$h(e,t),i={type:t&&t.name,value:Qh(t)};return r.length&&(i.stacktrace={frames:r}),void 0===i.type&&""===i.value&&(i.value="Unrecoverable error caught"),i}function Kh(e,t){return{exception:{values:[Gh(e,t)]}}}function $h(e,t){const r=t.stacktrace||t.stack||"",i=function(e){if(e){if("number"==typeof e.framesToPop)return e.framesToPop;if(Vh.test(e.message))return 1}return 0}(t);try{return e(r,i)}catch(e){}return[]}const Vh=/Minified React error #\d+;/i;function Qh(e){const t=e&&e.message;return t?t.error&&"string"==typeof t.error.message?t.error.message:t:"No error message"}function Zh(e,t,r,i,n){let a;if(yb(t)&&t.error)return Kh(e,t.error);if(bb(t)||db(t,"DOMException")){const n=t;if("stack"in t)a=Kh(e,t);else{const t=n.name||(bb(n)?"DOMError":"DOMException"),o=n.message?`${t}: ${n.message}`:t;a=Yh(e,o,r,i),Vb(a,o)}return"code"in n&&(a.tags={...a.tags,"DOMException.code":`${n.code}`}),a}return lb(t)?Kh(e,t):fb(t)||mb(t)?(a=function(e,t,r,i){const n=hh().getClient(),a=n&&n.getOptions().normalizeDepth,o={exception:{values:[{type:mb(t)?t.constructor.name:i?"UnhandledRejection":"Error",value:`Non-Error ${i?"promise rejection":"exception"} captured with keys: ${kb(t)}`}]},extra:{__serialized__:Hh(t,a)}};if(r){const t=$h(e,r);t.length&&(o.exception.values[0].stacktrace={frames:t})}return o}(e,t,r,n),Qb(a,{synthetic:!0}),a):(a=Yh(e,t,r,i),Vb(a,`${t}`,void 0),Qb(a,{synthetic:!0}),a)}function Yh(e,t,r,i){const n={message:t};if(i&&r){const i=$h(e,r);i.length&&(n.exception={values:[{value:t,stacktrace:{frames:i}}]})}return n}class Xh{static __initStatic(){this.id="GlobalHandlers"}__init(){this.name=Xh.id}__init2(){this._installFunc={onerror:Jh,onunhandledrejection:eg}}constructor(e){Xh.prototype.__init.call(this),Xh.prototype.__init2.call(this),this._options={onerror:!0,onunhandledrejection:!0,...e}}setupOnce(){Error.stackTraceLimit=50;const e=this._options;for(const r in e){const i=this._installFunc[r];i&&e[r]&&(t=r,("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Wb.log(`Global Handler attached: ${t}`),i(),this._installFunc[r]=void 0)}var t}}function Jh(){zh("error",(e=>{const[t,r,i]=ig();if(!t.getIntegration(Xh))return;const{msg:n,url:a,line:o,column:s,error:u}=e;if(Ah()||u&&u.__sentry_own_request__)return;const c=void 0===u&&hb(n)?function(e,t,r,i){let n=yb(e)?e.message:e,a="Error";const o=n.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);o&&(a=o[1],n=o[2]);return tg({exception:{values:[{type:a,value:n}]}},t,r,i)}(n,a,o,s):tg(Zh(r,u||n,void 0,i,!1),a,o,s);c.level="error",rg(t,u,c,"onerror")}))}function eg(){zh("unhandledrejection",(e=>{const[t,r,i]=ig();if(!t.getIntegration(Xh))return;let n=e;try{"reason"in e?n=e.reason:"detail"in e&&"reason"in e.detail&&(n=e.detail.reason)}catch(e){}if(Ah()||n&&n.__sentry_own_request__)return!0;const a=gb(n)?{exception:{values:[{type:"UnhandledRejection",value:`Non-Error promise rejection captured with value: ${String(n)}`}]}}:Zh(r,n,void 0,i,!0);a.level="error",rg(t,n,a,"onunhandledrejection")}))}function tg(e,t,r,i){const n=e.exception=e.exception||{},a=n.values=n.values||[],o=a[0]=a[0]||{},s=o.stacktrace=o.stacktrace||{},u=s.frames=s.frames||[],c=isNaN(parseInt(i,10))?void 0:i,p=isNaN(parseInt(r,10))?void 0:r,l=hb(t)&&t.length>0?t:function(){try{return Cb.document.location.href}catch(e){return""}}();return 0===u.length&&u.push({colno:c,filename:l,function:"?",in_app:!0,lineno:p}),e}function rg(e,t,r,i){Qb(r,{handled:!1,type:i}),e.captureEvent(r,{originalException:t})}function ig(){const e=hh(),t=e.getClient(),r=t&&t.getOptions()||{stackParser:()=>[],attachStacktrace:!1};return[e,r.stackParser,r.attachStacktrace]}Xh.__initStatic();const ng=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"];class ag{static __initStatic(){this.id="TryCatch"}__init(){this.name=ag.id}constructor(e){ag.prototype.__init.call(this),this._options={XMLHttpRequest:!0,eventTarget:!0,requestAnimationFrame:!0,setInterval:!0,setTimeout:!0,...e}}setupOnce(){this._options.setTimeout&&Pb(Sh,"setTimeout",og),this._options.setInterval&&Pb(Sh,"setInterval",og),this._options.requestAnimationFrame&&Pb(Sh,"requestAnimationFrame",sg),this._options.XMLHttpRequest&&"XMLHttpRequest"in Sh&&Pb(XMLHttpRequest.prototype,"send",ug);const e=this._options.eventTarget;e&&(Array.isArray(e)?e:ng).forEach(cg)}}function og(e){return function(...t){const r=t[0];return t[0]=Ch(r,{mechanism:{data:{function:Mh(e)},handled:!0,type:"instrument"}}),e.apply(this,t)}}function sg(e){return function(t){return e.apply(this,[Ch(t,{mechanism:{data:{function:"requestAnimationFrame",handler:Mh(e)},handled:!0,type:"instrument"}})])}}function ug(e){return function(...t){const r=this;return["onload","onerror","onprogress","onreadystatechange"].forEach((e=>{e in r&&"function"==typeof r[e]&&Pb(r,e,(function(t){const r={mechanism:{data:{function:e,handler:Mh(t)},handled:!0,type:"instrument"}},i=xb(t);return i&&(r.mechanism.data.handler=Mh(i)),Ch(t,r)}))})),e.apply(this,t)}}function cg(e){const t=Sh,r=t[e]&&t[e].prototype;r&&r.hasOwnProperty&&r.hasOwnProperty("addEventListener")&&(Pb(r,"addEventListener",(function(t){return function(r,i,n){try{"function"==typeof i.handleEvent&&(i.handleEvent=Ch(i.handleEvent,{mechanism:{data:{function:"handleEvent",handler:Mh(i),target:e},handled:!0,type:"instrument"}}))}catch(e){}return t.apply(this,[r,Ch(i,{mechanism:{data:{function:"addEventListener",handler:Mh(i),target:e},handled:!0,type:"instrument"}}),n])}})),Pb(r,"removeEventListener",(function(e){return function(t,r,i){const n=r;try{const r=n&&n.__sentry_wrapped__;r&&e.call(this,t,r,i)}catch(e){}return e.call(this,t,n,i)}})))}ag.__initStatic();const pg=["fatal","error","warning","log","info","debug"];function lg(e){if(!e)return{};const t=e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);if(!t)return{};const r=t[6]||"",i=t[8]||"";return{host:t[4],path:t[5],protocol:t[2],relative:t[5]+r+i}}const dg="Breadcrumbs";class yg{static __initStatic(){this.id=dg}__init(){this.name=yg.id}constructor(e){yg.prototype.__init.call(this),this.options={console:!0,dom:!0,fetch:!0,history:!0,sentry:!0,xhr:!0,...e}}setupOnce(){var e;this.options.console&&zh("console",bg),this.options.dom&&zh("dom",(e=this.options.dom,function(t){let r,i="object"==typeof e?e.serializeAttribute:void 0,n="object"==typeof e&&"number"==typeof e.maxStringLength?e.maxStringLength:void 0;n&&n>1024&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Wb.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${n} was configured. Sentry will use 1024 instead.`),n=1024),"string"==typeof i&&(i=[i]);try{r=t.event.target?Mb(t.event.target,{keyAttrs:i,maxStringLength:n}):Mb(t.event,{keyAttrs:i,maxStringLength:n})}catch(e){r="<unknown>"}0!==r.length&&hh().addBreadcrumb({category:`ui.${t.name}`,message:r},{event:t.event,name:t.name,global:t.global})})),this.options.xhr&&zh("xhr",hg),this.options.fetch&&zh("fetch",gg),this.options.history&&zh("history",fg)}addSentryBreadcrumb(e){this.options.sentry&&hh().addBreadcrumb({category:"sentry."+("transaction"===e.type?"transaction":"event"),event_id:e.event_id,level:e.level,message:$b(e)},{event:e})}}function bg(e){for(let t=0;t<e.args.length;t++)if("ref=Ref<"===e.args[t]){e.args[t+1]="viewRef";break}const t={category:"console",data:{arguments:e.args,logger:"console"},level:(r=e.level,"warn"===r?"warning":pg.includes(r)?r:"log"),message:Ob(e.args," ")};var r;if("assert"===e.level){if(!1!==e.args[0])return;t.message=`Assertion failed: ${Ob(e.args.slice(1)," ")||"console.assert"}`,t.data.arguments=e.args.slice(1)}hh().addBreadcrumb(t,{input:e.args,level:e.level})}function hg(e){if(e.endTimestamp){if(e.xhr.__sentry_own_request__)return;const{method:t,url:r,status_code:i,body:n}=e.xhr.__sentry_xhr__||{};hh().addBreadcrumb({category:"xhr",data:{method:t,url:r,status_code:i},type:"http"},{xhr:e.xhr,input:n})}}function gg(e){e.endTimestamp&&(e.fetchData.url.match(/sentry_key/)&&"POST"===e.fetchData.method||(e.error?hh().addBreadcrumb({category:"fetch",data:e.fetchData,level:"error",type:"http"},{data:e.error,input:e.args}):hh().addBreadcrumb({category:"fetch",data:{...e.fetchData,status_code:e.response.status},type:"http"},{input:e.args,response:e.response})))}function fg(e){let t=e.from,r=e.to;const i=lg(Sh.location.href);let n=lg(t);const a=lg(r);n.path||(n=i),i.protocol===a.protocol&&i.host===a.host&&(r=a.relative),i.protocol===n.protocol&&i.host===n.host&&(t=n.relative),hh().addBreadcrumb({category:"navigation",data:{from:t,to:r}})}yg.__initStatic();class mg{static __initStatic(){this.id="LinkedErrors"}__init(){this.name=mg.id}constructor(e={}){mg.prototype.__init.call(this),this._key=e.key||"cause",this._limit=e.limit||5}setupOnce(){const e=hh().getClient();e&&ch(((t,r)=>{const i=hh().getIntegration(mg);return i?function(e,t,r,i,n){if(!(i.exception&&i.exception.values&&n&&vb(n.originalException,Error)))return i;const a=Sg(e,r,n.originalException,t);return i.exception.values=[...a,...i.exception.values],i}(e.getOptions().stackParser,i._key,i._limit,t,r):t}))}}function Sg(e,t,r,i,n=[]){if(!vb(r[i],Error)||n.length+1>=t)return n;const a=Gh(e,r[i]);return Sg(e,t,r[i],i,[a,...n])}mg.__initStatic();class vg{constructor(){vg.prototype.__init.call(this)}static __initStatic(){this.id="HttpContext"}__init(){this.name=vg.id}setupOnce(){ch((e=>{if(hh().getIntegration(vg)){if(!Sh.navigator&&!Sh.location&&!Sh.document)return e;const t=e.request&&e.request.url||Sh.location&&Sh.location.href,{referrer:r}=Sh.document||{},{userAgent:i}=Sh.navigator||{},n={...t&&{url:t},headers:{...e.request&&e.request.headers,...r&&{Referer:r},...i&&{"User-Agent":i}}};return{...e,request:n}}return e}))}}vg.__initStatic();class Ag{constructor(){Ag.prototype.__init.call(this)}static __initStatic(){this.id="Dedupe"}__init(){this.name=Ag.id}setupOnce(e,t){const r=e=>{const r=t().getIntegration(Ag);if(r){try{if(function(e,t){return!!t&&(!!function(e,t){const r=e.message,i=t.message;return!(!r&&!i)&&(!(r&&!i||!r&&i)&&(r===i&&(!!Tg(e,t)&&!!Cg(e,t))))}(e,t)||!!function(e,t){const r=Mg(t),i=Mg(e);return!(!r||!i)&&(r.type===i.type&&r.value===i.value&&(!!Tg(e,t)&&!!Cg(e,t)))}(e,t))}(e,r._previousEvent))return("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Wb.warn("Event dropped due to being a duplicate of previously captured event."),null}catch(t){return r._previousEvent=e}return r._previousEvent=e}return e};r.id=this.name,e(r)}}function Cg(e,t){let r=_g(e),i=_g(t);if(!r&&!i)return!0;if(r&&!i||!r&&i)return!1;if(i.length!==r.length)return!1;for(let e=0;e<i.length;e++){const t=i[e],n=r[e];if(t.filename!==n.filename||t.lineno!==n.lineno||t.colno!==n.colno||t.function!==n.function)return!1}return!0}function Tg(e,t){let r=e.fingerprint,i=t.fingerprint;if(!r&&!i)return!0;if(r&&!i||!r&&i)return!1;try{return!(r.join("")!==i.join(""))}catch(e){return!1}}function Mg(e){return e.exception&&e.exception.values&&e.exception.values[0]}function _g(e){const t=e.exception;if(t)try{return t.values[0].stacktrace.frames}catch(e){return}}Ag.__initStatic();let Rg={};Sh.Sentry&&Sh.Sentry.Integrations&&(Rg=Sh.Sentry.Integrations);const Og={...Rg,...e,...t};class wg extends Error{constructor(e,t="warn"){super(e),this.message=e,this.name=new.target.prototype.constructor.name,Object.setPrototypeOf(this,new.target.prototype),this.logLevel=t}}const Pg=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;function jg(e,t=!1){const{host:r,path:i,pass:n,port:a,projectId:o,protocol:s,publicKey:u}=e;return`${s}://${u}${t&&n?`:${n}`:""}@${r}${a?`:${a}`:""}/${i?`${i}/`:i}${o}`}function zg(e){return{protocol:e.protocol,publicKey:e.publicKey||"",pass:e.pass||"",host:e.host,port:e.port||"",path:e.path||"",projectId:e.projectId}}function xg(e,t=[]){return[e,t]}function Ig(e,t){const[r,i]=e;return[r,[...i,t]]}function Eg(e,t){e[1].forEach((e=>{const r=e[0].type;t(e,r)}))}function Ng(e,t){return(t||new TextEncoder).encode(e)}function kg(e,t){const[r,i]=e;let n=JSON.stringify(r);function a(e){"string"==typeof n?n="string"==typeof e?n+e:[Ng(n,t),e]:n.push("string"==typeof e?Ng(e,t):e)}for(const e of i){const[t,r]=e;if(a(`\n${JSON.stringify(t)}\n`),"string"==typeof r||r instanceof Uint8Array)a(r);else{let e;try{e=JSON.stringify(r)}catch(t){e=JSON.stringify(Fh(r))}a(e)}}return"string"==typeof n?n:function(e){const t=e.reduce(((e,t)=>e+t.length),0),r=new Uint8Array(t);let i=0;for(const t of e)r.set(t,i),i+=t.length;return r}(n)}function Dg(e,t){const r="string"==typeof e.data?Ng(e.data,t):e.data;return[Db({type:"attachment",length:r.length,filename:e.filename,content_type:e.contentType,attachment_type:e.attachmentType}),r]}const Ug={session:"session",sessions:"session",attachment:"attachment",transaction:"transaction",event:"error",client_report:"internal",user_report:"default",profile:"profile"};function Lg(e){return Ug[e]}function qg(e){if(!e||!e.sdk)return;const{name:t,version:r}=e.sdk;return{name:t,version:r}}const Bg=6e4;const Fg=30;function Hg(e,t,r=function(e){const t=[];function r(e){return t.splice(t.indexOf(e),1)[0]}return{$:t,add:function(i){if(!(void 0===e||t.length<e))return nh(new wg("Not adding Promise because buffer limit was reached."));const n=i();return-1===t.indexOf(n)&&t.push(n),n.then((()=>r(n))).then(null,(()=>r(n).then(null,(()=>{})))),n},drain:function(e){return new ah(((r,i)=>{let n=t.length;if(!n)return r(!0);const a=setTimeout((()=>{e&&e>0&&r(!1)}),e);t.forEach((e=>{ih(e).then((()=>{--n||(clearTimeout(a),r(!0))}),i)}))}))}}}(e.bufferSize||Fg)){let i={};return{send:function(n){const a=[];if(Eg(n,((t,r)=>{const n=Lg(r);if(function(e,t,r=Date.now()){return function(e,t){return e[t]||e.all||0}(e,t)>r}(i,n)){const i=Wg(t,r);e.recordDroppedEvent("ratelimit_backoff",n,i)}else a.push(t)})),0===a.length)return ih();const o=xg(n[0],a),s=t=>{Eg(o,((r,i)=>{const n=Wg(r,i);e.recordDroppedEvent(t,Lg(i),n)}))};return r.add((()=>t({body:kg(o,e.textEncoder)}).then((e=>{void 0!==e.statusCode&&(e.statusCode<200||e.statusCode>=300)&&("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Wb.warn(`Sentry responded with status code ${e.statusCode} to sent event.`),i=function(e,{statusCode:t,headers:r},i=Date.now()){const n={...e},a=r&&r["x-sentry-rate-limits"],o=r&&r["retry-after"];if(a)for(const e of a.trim().split(",")){const[t,r]=e.split(":",2),a=parseInt(t,10),o=1e3*(isNaN(a)?60:a);if(r)for(const e of r.split(";"))n[e]=i+o;else n.all=i+o}else o?n.all=i+function(e,t=Date.now()){const r=parseInt(`${e}`,10);if(!isNaN(r))return 1e3*r;const i=Date.parse(`${e}`);return isNaN(i)?Bg:i-t}(o,i):429===t&&(n.all=i+6e4);return n}(i,e)}),(e=>{("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Wb.error("Failed while sending event:",e),s("network_error")})))).then((e=>e),(e=>{if(e instanceof wg)return("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Wb.error("Skipped sending event because buffer is full."),s("queue_overflow"),ih();throw e}))},flush:e=>r.drain(e)}}function Wg(e,t){if("event"===t||"transaction"===t)return Array.isArray(e)?e[1]:void 0}let Gg;function Kg(e,t=function(){if(Gg)return Gg;if(Rh(Sh.fetch))return Gg=Sh.fetch.bind(Sh);const e=Sh.document;let t=Sh.fetch;if(e&&"function"==typeof e.createElement)try{const r=e.createElement("iframe");r.hidden=!0,e.head.appendChild(r);const i=r.contentWindow;i&&i.fetch&&(t=i.fetch),e.head.removeChild(r)}catch(e){("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Wb.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",e)}return Gg=t.bind(Sh)}()){return Hg(e,(function(r){const i={body:r.body,method:"POST",referrerPolicy:"origin",headers:e.headers,keepalive:r.body.length<=65536,...e.fetchOptions};try{return t(e.url,i).then((e=>({statusCode:e.status,headers:{"x-sentry-rate-limits":e.headers.get("X-Sentry-Rate-Limits"),"retry-after":e.headers.get("Retry-After")}})))}catch(e){return Gg=void 0,nh(e)}}))}const $g="?";function Vg(e,t,r,i){const n={filename:e,function:t,in_app:!0};return void 0!==r&&(n.lineno=r),void 0!==i&&(n.colno=i),n}const Qg=/^\s*at (?:(.*\).*?|.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,Zg=/\((\S*)(?::(\d+))(?::(\d+))\)/,Yg=[30,e=>{const t=Qg.exec(e);if(t){if(t[2]&&0===t[2].indexOf("eval")){const e=Zg.exec(t[2]);e&&(t[2]=e[1],t[3]=e[2],t[4]=e[3])}const[e,r]=af(t[1]||$g,t[2]);return Vg(r,e,t[3]?+t[3]:void 0,t[4]?+t[4]:void 0)}}],Xg=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,Jg=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,ef=[50,e=>{const t=Xg.exec(e);if(t){if(t[3]&&t[3].indexOf(" > eval")>-1){const e=Jg.exec(t[3]);e&&(t[1]=t[1]||"eval",t[3]=e[1],t[4]=e[2],t[5]="")}let e=t[3],r=t[1]||$g;return[r,e]=af(r,e),Vg(e,r,t[4]?+t[4]:void 0,t[5]?+t[5]:void 0)}}],tf=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,rf=[40,e=>{const t=tf.exec(e);return t?Vg(t[2],t[1]||$g,+t[3],t[4]?+t[4]:void 0):void 0}],nf=function(...e){const t=e.sort(((e,t)=>e[0]-t[0])).map((e=>e[1]));return(e,r=0)=>{const i=[];for(const n of e.split("\n").slice(r)){const e=n.replace(/\(error: (.*)\)/,"$1");for(const r of t){const t=r(e);if(t){i.push(t);break}}}return function(e){if(!e.length)return[];let t=e;const r=t[0].function||"",i=t[t.length-1].function||"";return-1===r.indexOf("captureMessage")&&-1===r.indexOf("captureException")||(t=t.slice(1)),-1!==i.indexOf("sentryWrapped")&&(t=t.slice(0,-1)),t.slice(0,50).map((e=>({...e,filename:e.filename||t[0].filename,function:e.function||"?"}))).reverse()}(i)}}(Yg,ef,rf),af=(e,t)=>{const r=-1!==e.indexOf("safari-extension"),i=-1!==e.indexOf("safari-web-extension");return r||i?[-1!==e.indexOf("@")?e.split("@")[0]:$g,r?`safari-extension:${t}`:`safari-web-extension:${t}`]:[e,t]},of="7";function sf(e,t={}){const r="string"==typeof t?t:t.tunnel,i="string"!=typeof t&&t._metadata?t._metadata.sdk:void 0;return r||`${function(e){return`${function(e){const t=e.protocol?`${e.protocol}:`:"",r=e.port?`:${e.port}`:"";return`${t}//${e.host}${r}${e.path?`/${e.path}`:""}/api/`}(e)}${e.projectId}/envelope/`}(e)}?${function(e,t){return r={sentry_key:e.publicKey,sentry_version:of,...t&&{sentry_client:`${t.name}/${t.version}`}},Object.keys(r).map((e=>`${encodeURIComponent(e)}=${encodeURIComponent(r[e])}`)).join("&");var r}(e,i)}`}const uf=[],cf="Not capturing exception because it's already been captured.";class pf{__init(){this._integrations={}}__init2(){this._integrationsInitialized=!1}__init3(){this._numProcessing=0}__init4(){this._outcomes={}}constructor(e){if(pf.prototype.__init.call(this),pf.prototype.__init2.call(this),pf.prototype.__init3.call(this),pf.prototype.__init4.call(this),this._options=e,e.dsn){this._dsn=function(e){const t="string"==typeof e?function(e){const t=Pg.exec(e);if(!t)throw new wg(`Invalid Sentry Dsn: ${e}`);const[r,i,n="",a,o="",s]=t.slice(1);let u="",c=s;const p=c.split("/");if(p.length>1&&(u=p.slice(0,-1).join("/"),c=p.pop()),c){const e=c.match(/^\d+/);e&&(c=e[0])}return zg({host:a,pass:n,path:u,projectId:c,port:o,protocol:r,publicKey:i})}(e):zg(e);return function(e){if("undefined"!=typeof __SENTRY_DEBUG__&&!__SENTRY_DEBUG__)return;const{port:t,projectId:r,protocol:i}=e;if(["protocol","publicKey","host","projectId"].forEach((t=>{if(!e[t])throw new wg(`Invalid Sentry Dsn: ${t} missing`)})),!r.match(/^\d+$/))throw new wg(`Invalid Sentry Dsn: Invalid projectId ${r}`);if(!function(e){return"http"===e||"https"===e}(i))throw new wg(`Invalid Sentry Dsn: Invalid protocol ${i}`);if(t&&isNaN(parseInt(t,10)))throw new wg(`Invalid Sentry Dsn: Invalid port ${t}`)}(t),t}(e.dsn);const t=sf(this._dsn,e);this._transport=e.transport({recordDroppedEvent:this.recordDroppedEvent.bind(this),...e.transportOptions,url:t})}else("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Wb.warn("No DSN provided, client will not do anything.")}captureException(e,t,r){if(Zb(e))return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Wb.log(cf));let i=t&&t.event_id;return this._process(this.eventFromException(e,t).then((e=>this._captureEvent(e,t,r))).then((e=>{i=e}))),i}captureMessage(e,t,r,i){let n=r&&r.event_id;const a=gb(e)?this.eventFromMessage(String(e),t,r):this.eventFromException(e,r);return this._process(a.then((e=>this._captureEvent(e,r,i))).then((e=>{n=e}))),n}captureEvent(e,t,r){if(t&&t.originalException&&Zb(t.originalException))return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Wb.log(cf));let i=t&&t.event_id;return this._process(this._captureEvent(e,t,r).then((e=>{i=e}))),i}captureSession(e){this._isEnabled()?"string"!=typeof e.release?("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Wb.warn("Discarded session because of missing or non-string release"):(this.sendSession(e),oh(e,{init:!1})):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Wb.warn("SDK not enabled, will not capture session.")}getDsn(){return this._dsn}getOptions(){return this._options}getTransport(){return this._transport}flush(e){const t=this._transport;return t?this._isClientDoneProcessing(e).then((r=>t.flush(e).then((e=>r&&e)))):ih(!0)}close(e){return this.flush(e).then((e=>(this.getOptions().enabled=!1,e)))}setupIntegrations(){this._isEnabled()&&!this._integrationsInitialized&&(this._integrations=function(e){const t={};return e.forEach((e=>{t[e.name]=e,-1===uf.indexOf(e.name)&&(e.setupOnce(ch,hh),uf.push(e.name),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Wb.log(`Integration installed: ${e.name}`))})),t}(this._options.integrations),this._integrationsInitialized=!0)}getIntegrationById(e){return this._integrations[e]}getIntegration(e){try{return this._integrations[e.id]||null}catch(t){return("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Wb.warn(`Cannot retrieve integration ${e.id} from the current Client`),null}}sendEvent(e,t={}){if(this._dsn){let r=function(e,t,r,i){const n=qg(r),a=e.type||"event";!function(e,t){t&&(e.sdk=e.sdk||{},e.sdk.name=e.sdk.name||t.name,e.sdk.version=e.sdk.version||t.version,e.sdk.integrations=[...e.sdk.integrations||[],...t.integrations||[]],e.sdk.packages=[...e.sdk.packages||[],...t.packages||[]])}(e,r&&r.sdk);const o=function(e,t,r,i){const n=e.sdkProcessingMetadata&&e.sdkProcessingMetadata.dynamicSamplingContext;return{event_id:e.event_id,sent_at:(new Date).toISOString(),...t&&{sdk:t},...!!r&&{dsn:jg(i)},..."transaction"===e.type&&n&&{trace:Db({...n})}}}(e,n,i,t);return delete e.sdkProcessingMetadata,xg(o,[[{type:a},e]])}(e,this._dsn,this._options._metadata,this._options.tunnel);for(const e of t.attachments||[])r=Ig(r,Dg(e,this._options.transportOptions&&this._options.transportOptions.textEncoder));this._sendEnvelope(r)}}sendSession(e){if(this._dsn){const t=function(e,t,r,i){const n=qg(r);return xg({sent_at:(new Date).toISOString(),...n&&{sdk:n},...!!i&&{dsn:jg(t)}},["aggregates"in e?[{type:"sessions"},e]:[{type:"session"},e]])}(e,this._dsn,this._options._metadata,this._options.tunnel);this._sendEnvelope(t)}}recordDroppedEvent(e,t,r){if(this._options.sendClientReports){const r=`${e}:${t}`;("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Wb.log(`Adding outcome: "${r}"`),this._outcomes[r]=this._outcomes[r]+1||1}}_updateSessionFromEvent(e,t){let r=!1,i=!1;const n=t.exception&&t.exception.values;if(n){i=!0;for(const e of n){const t=e.mechanism;if(t&&!1===t.handled){r=!0;break}}}const a="ok"===e.status;(a&&0===e.errors||a&&r)&&(oh(e,{...r&&{status:"crashed"},errors:e.errors||Number(i||r)}),this.captureSession(e))}_isClientDoneProcessing(e){return new ah((t=>{let r=0;const i=setInterval((()=>{0==this._numProcessing?(clearInterval(i),t(!0)):(r+=1,e&&r>=e&&(clearInterval(i),t(!1)))}),1)}))}_isEnabled(){return!1!==this.getOptions().enabled&&void 0!==this._dsn}_prepareEvent(e,t,r){const{normalizeDepth:i=3,normalizeMaxBreadth:n=1e3}=this.getOptions(),a={...e,event_id:e.event_id||t.event_id||Gb(),timestamp:e.timestamp||(0,th.yW)()};this._applyClientOptions(a),this._applyIntegrationsMetadata(a);let o=r;t.captureContext&&(o=sh.clone(o).update(t.captureContext));let s=ih(a);if(o&&o.getAttachments){const e=[...t.attachments||[],...o.getAttachments()];e.length&&(t.attachments=e),s=o.applyToEvent(a,t)}return s.then((e=>"number"==typeof i&&i>0?this._normalizeEvent(e,i,n):e))}_normalizeEvent(e,t,r){if(!e)return null;const i={...e,...e.breadcrumbs&&{breadcrumbs:e.breadcrumbs.map((e=>({...e,...e.data&&{data:Fh(e.data,t,r)}})))},...e.user&&{user:Fh(e.user,t,r)},...e.contexts&&{contexts:Fh(e.contexts,t,r)},...e.extra&&{extra:Fh(e.extra,t,r)}};return e.contexts&&e.contexts.trace&&i.contexts&&(i.contexts.trace=e.contexts.trace,e.contexts.trace.data&&(i.contexts.trace.data=Fh(e.contexts.trace.data,t,r))),e.spans&&(i.spans=e.spans.map((e=>(e.data&&(e.data=Fh(e.data,t,r)),e)))),i}_applyClientOptions(e){const t=this.getOptions(),{environment:r,release:i,dist:n,maxValueLength:a=250}=t;"environment"in e||(e.environment="environment"in t?r:"production"),void 0===e.release&&void 0!==i&&(e.release=i),void 0===e.dist&&void 0!==n&&(e.dist=n),e.message&&(e.message=Rb(e.message,a));const o=e.exception&&e.exception.values&&e.exception.values[0];o&&o.value&&(o.value=Rb(o.value,a));const s=e.request;s&&s.url&&(s.url=Rb(s.url,a))}_applyIntegrationsMetadata(e){const t=Object.keys(this._integrations);t.length>0&&(e.sdk=e.sdk||{},e.sdk.integrations=[...e.sdk.integrations||[],...t])}_captureEvent(e,t={},r){return this._processEvent(e,t,r).then((e=>e.event_id),(e=>{if("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__){const t=e;"log"===t.logLevel?Wb.log(t.message):Wb.warn(t)}}))}_processEvent(e,t,r){const i=this.getOptions(),{sampleRate:n}=i;if(!this._isEnabled())return nh(new wg("SDK not enabled, will not capture event.","log"));const a=df(e),o=lf(e),s=e.type||"error",u=`before send for type \`${s}\``;return o&&"number"==typeof n&&Math.random()>n?(this.recordDroppedEvent("sample_rate","error",e),nh(new wg(`Discarding event because it's not included in the random sample (sampling rate = ${n})`,"log"))):this._prepareEvent(e,t,r).then((r=>{if(null===r)throw this.recordDroppedEvent("event_processor",s,e),new wg("An event processor returned `null`, will not send event.","log");if(t.data&&!0===t.data.__sentry__)return r;const n=function(e,t,r){const{beforeSend:i,beforeSendTransaction:n}=e;return lf(t)&&i?i(t,r):df(t)&&n?n(t,r):t}(i,r,t);return function(e,t){const r=`${t} must return \`null\` or a valid event.`;if(Sb(e))return e.then((e=>{if(!fb(e)&&null!==e)throw new wg(r);return e}),(e=>{throw new wg(`${t} rejected with ${e}`)}));if(!fb(e)&&null!==e)throw new wg(r);return e}(n,u)})).then((i=>{if(null===i)throw this.recordDroppedEvent("before_send",e.type||"error",e),new wg(`${u} returned \`null\`, will not send event.`,"log");const n=r&&r.getSession();!a&&n&&this._updateSessionFromEvent(n,i);const o=i.transaction_info;if(a&&o&&i.transaction!==e.transaction){const e="custom";i.transaction_info={...o,source:e,changes:[...o.changes,{source:e,timestamp:i.timestamp,propagations:o.propagations}]}}return this.sendEvent(i,t),i})).then(null,(e=>{if(e instanceof wg)throw e;throw this.captureException(e,{data:{__sentry__:!0},originalException:e}),new wg(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${e}`)}))}_process(e){this._numProcessing++,e.then((e=>(this._numProcessing--,e)),(e=>(this._numProcessing--,e)))}_sendEnvelope(e){this._transport&&this._dsn?this._transport.send(e).then(null,(e=>{("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Wb.error("Error while sending event:",e)})):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Wb.error("Transport disabled")}_clearOutcomes(){const e=this._outcomes;return this._outcomes={},Object.keys(e).map((t=>{const[r,i]=t.split(":");return{reason:r,category:i,quantity:e[t]}}))}}function lf(e){return void 0===e.type}function df(e){return"transaction"===e.type}const yf="7.28.1";class bf extends pf{constructor(e){e._metadata=e._metadata||{},e._metadata.sdk=e._metadata.sdk||{name:"sentry.javascript.browser",packages:[{name:"npm:@sentry/browser",version:yf}],version:yf},super(e),e.sendClientReports&&Sh.document&&Sh.document.addEventListener("visibilitychange",(()=>{"hidden"===Sh.document.visibilityState&&this._flushOutcomes()}))}eventFromException(e,t){return function(e,t,r,i){const n=Zh(e,t,r&&r.syntheticException||void 0,i);return Qb(n),n.level="error",r&&r.event_id&&(n.event_id=r.event_id),ih(n)}(this._options.stackParser,e,t,this._options.attachStacktrace)}eventFromMessage(e,t="info",r){return function(e,t,r="info",i,n){const a=Yh(e,t,i&&i.syntheticException||void 0,n);return a.level=r,i&&i.event_id&&(a.event_id=i.event_id),ih(a)}(this._options.stackParser,e,t,r,this._options.attachStacktrace)}sendEvent(e,t){!function(e){let t,r=e[0],i=1;for(;i<e.length;){const n=e[i],a=e[i+1];if(i+=2,("optionalAccess"===n||"optionalCall"===n)&&null==r)return;"access"===n||"optionalAccess"===n?(t=r,r=a(r)):"call"!==n&&"optionalCall"!==n||(r=a(((...e)=>r.call(t,...e))),t=void 0)}}([this.getIntegrationById(dg),"optionalAccess",e=>e.addSentryBreadcrumb,"optionalCall",t=>t(e)]),super.sendEvent(e,t)}_prepareEvent(e,t,r){return e.platform=e.platform||"javascript",super._prepareEvent(e,t,r)}_flushOutcomes(){const e=this._clearOutcomes();if(0===e.length)return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Wb.log("No outcomes to send"));if(!this._dsn)return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Wb.log("No dsn provided, will not send outcomes"));("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Wb.log("Sending outcomes:",e);const t=sf(this._dsn,this._options),r=(i=e,xg((n=this._options.tunnel&&jg(this._dsn))?{dsn:n}:{},[[{type:"client_report"},{timestamp:(0,th.yW)(),discarded_events:i}]]));var i,n;try{"[object Navigator]"===Object.prototype.toString.call(Sh&&Sh.navigator)&&"function"==typeof Sh.navigator.sendBeacon&&!this._options.transportOptions?Sh.navigator.sendBeacon.bind(Sh.navigator)(t,kg(r)):this._sendEnvelope(r)}catch(e){("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Wb.error(e)}}}n(14465),n(50334),Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var hf=(e,t)=>{const r=t instanceof Array,i="object"==typeof t;if(!r&&!i)return t;const n=Object.assign(t);if(r)for(let t=0;t<n.length;t++)n[t]=hf(e,n[t]);else i&&Object.keys(n).forEach((t=>{t===e?delete n[e]:null!=n[t]&&(n[t]=hf(e,n[t]))}));return n};Error;var gf=n(55246),ff=Object.defineProperty,mf=Object.defineProperties,Sf=Object.getOwnPropertyDescriptors,vf=Object.getOwnPropertySymbols,Af=Object.prototype.hasOwnProperty,Cf=Object.prototype.propertyIsEnumerable,Tf=(e,t,r)=>t in e?ff(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Mf=(e,t)=>{for(var r in t||(t={}))Af.call(t,r)&&Tf(e,r,t[r]);if(vf)for(var r of vf(t))Cf.call(t,r)&&Tf(e,r,t[r]);return e},_f=(e,t)=>mf(e,Sf(t)),Rf=(e,t)=>{for(var r in t)ff(e,r,{get:t[r],enumerable:!0})};Rf({},{init:()=>Of});var Of=(e,t)=>{ib.init(Mf({forwardErrorsToLogs:!1},t));let r=[],i=!1;const n=n=>{const{level:a,message:o,context:s,tags:u}=n;if(!1===sb(a,e)||!0===i)return;const c=a===Cu.Fatal?Cu.Error:a,p=ob(o),l=_f(Mf(Mf({service:t.service},p.context),s),{tags:u});"error"===c&&(l.breadcrumbs=r.reduce(((e,[t,r])=>(e["crumb-".concat(t)]=r,e)),{}),r=[]),ib.logger.log(p.message,l,c)};return{onEvent:n,captureCrumb:e=>{if(!0===i)return;r.push(e);const[,t]=e;n(_f(Mf({},t),{tags:{}}))},teardown:()=>(i=!0,Promise.resolve())}},wf={};Rf(wf,{init:()=>jf});var Pf=e=>Object.entries(e).reduce(((e,t)=>{const[r,i]=t,n=e.length?",":"";return e+"".concat(n).concat(r,":").concat(i)}),""),jf=(e,t)=>{const r=cb.client.createConfiguration({authMethods:{apiKeyAuth:t.apiKey,appKeyAuth:t.appKey}}),i=new cb.v2.LogsApi(r);let n=[],a=!1;const o=r=>{var o,s;const{level:u,message:c,context:p,tags:l}=r;if(!1===sb(u,e)||!0===a)return;const d=u===Cu.Fatal?Cu.Error:u,y=ob(c);let b={};"error"===d&&(b=n.reduce(((e,[t,r])=>(e["crumb-".concat(t)]=r,e)),{}),n=[]);const h=(null==(s=null==(o=y.context)?void 0:o.error)?void 0:s.stack)||"",g=(e=>e.split(" ").at(-1)||"")(h),f={body:[{ddtags:Pf(_f(Mf({},l),{env:t.env,service:t.service})),message:y.message,service:t.service,additionalProperties:{breadcrumbs:JSON.stringify(b),status:d,context:JSON.stringify(p),url:g,stack:h}}],contentEncoding:"deflate"};i.submitLog(f).catch((e=>gf.error(e)))};return{onEvent:o,captureCrumb:e=>{if(!0===a)return;n.push(e);const[,t]=e;o(_f(Mf({},t),{tags:{}}))},teardown:()=>(a=!0,Promise.resolve())}},zf={};Rf(zf,{init:()=>xf});var xf=(e,t)=>{const r=_f(Mf({},t),{integrations:[new Og.Breadcrumbs({console:!1})],transport:t.transport||Kg,stackParser:nf,beforeSend:e=>(null!=e.contexts&&(e.contexts=hf("credentials",e.contexts)),e)}),i=new bf(r),n=new dh(i);return{onEvent:t=>{const{level:r,message:i,context:a,tags:o}=t;!1!==sb(r,e)&&((e,t,r,i,n)=>{e.withScope((a=>{switch(a.setLevel(r),a.setContext("context",i),a.setTags(n),ab(t)){case 0:e.captureMessage(t);break;case 1:e.captureException(t);break;default:e.captureException("Unidentifed payload captured")}}))})(n,i,ub(r),a,o)},captureCrumb:e=>{const[t,r]=e,{level:i,message:a,context:o}=r,s={message:a,data:Mf({clientTimestamp:t},o),level:ub(i)};null!=o.category&&(s.category=o.category),n.addBreadcrumb(s)},teardown:async()=>{await i.close(2e3)}}};const If="production";let Ef=[];const Nf=e=>{Ef.push(e),Ef.length>400&&(Ef=Ef.slice(-300))},kf=e=>{const{level:t,message:r,context:i}=e;Nf({level:t,message:r,context:i})},Df=e=>{const[t,r]=e,{level:i,message:n,context:a}=r;Nf({level:i,message:n,context:a})};var Uf=n(55246);const Lf="undefined"!=typeof WorkerGlobalScope,qf="script environment",{Error:Bf,Fatal:Ff,Info:Hf,Warning:Wf}=(chrome.runtime.getManifest()?.version,Cu),Gf=Lf?(()=>{const e=[Bf,Ff,Hf,Wf],t=[{onEvent:kf,captureCrumb:Df,teardown:()=>Promise.resolve()},zf.init([Bf,Ff],{dsn:"https://463bb92641e54586a41d8c96ac9fe8e5@o398470.ingest.sentry.io/4504323419602944",release:chrome.runtime.getManifest().version,environment:If,normalizeDepth:8,sampleRate:.25}),wf.init(e,{apiKey:"pub013004b2a5b9b661b11e2b22c596d9d9",appKey:"5bffc0789f99189eeb16a48c993e5a5883d2d169",env:If,service:"browser_extension"})];return Vl((e=>{e.setTag(qf,"serviceWorker")})),{...Du({trackerMethods:t,onCrumbHook:()=>{},isConsoleLogActive:()=>!1}),setEnvironmentName:()=>{Uf.log('logger.setEnvironmentName: Not implemented for the service worker. Environment is assumed to be "serviceWorker"')}}})():{setEnvironmentName:()=>{},crumb:()=>{},error:()=>{},debug:()=>{},info:()=>{},warn:()=>{},fatal:()=>{},recordFail:()=>{},teardown:()=>Promise.resolve(),addToBaseContext:()=>{}},{setEnvironmentName:Kf,crumb:$f,info:Vf,warn:Qf,error:Zf,fatal:Yf,debug:Xf,recordFail:Jf,addToBaseContext:em}=Lf?{setEnvironmentName(e){Gf&&Gf.setEnvironmentName(e)},crumb(...e){Gf.crumb(...e)},info(e,t,r){Gf.info(e,t,r)},warn(e,t,r){Gf.warn(e,t,r)},error(e,t,r){Gf.error(e,t,r)},fatal(e,t,r){Gf.fatal(e,t,r)},debug(...e){Gf.debug(...e)},recordFail(...e){Gf.recordFail(...e)},addToBaseContext(e){Gf.addToBaseContext(e)}}:(()=>{let e="frontend";const t=e=>()=>{Uf.log(`logger.${e}: Not implemented for the frontend. logger.error is available.`)};return{setEnvironmentName:t=>{e=t},error:(t,r={},i={})=>{const n=function(e,t={}){const{maxDepth:r=Number.POSITIVE_INFINITY,useToJSON:i=!0}=t;return"object"==typeof e&&null!==e?ed({from:e,seen:[],forceEnumerable:!0,maxDepth:r,depth:0,useToJSON:i,serialize:!0}):"function"==typeof e?`[Function: ${e.name??"anonymous"}]`:e}(t);chrome.runtime.sendMessage({type:Ro.logException,level:Cu.Error,payload:{serializedError:n,context:r,tags:{...i,[qf]:e}}})},debug:(...e)=>false,info:(t,r={},i={})=>{chrome.runtime.sendMessage({type:Ro.logInfo,level:Cu.Info,payload:{info:t,context:r,tags:{...i,[qf]:e}}})},warn:(t,r={},i={})=>{chrome.runtime.sendMessage({type:Ro.logWarn,level:Cu.Warning,payload:{warn:t,context:r,tags:{...i,[qf]:e}}})},fatal:t("fatal"),recordFail:t("recordFail"),crumb:e=>{chrome.runtime.sendMessage({type:Ro.logCrumb,payload:{...e,context:{}}})},addToBaseContext:e=>{chrome.runtime.sendMessage({type:Ro.addToBaseContext,payload:{context:e}})}}})();var tm={crumb:$f,info:Vf,warn:Qf,error:Zf,fatal:Yf,debug:Xf,recordFail:Jf,setEnvironmentName:Kf,addToBaseContext:em};n(55246);const rm=Oa({name:"preRecorder",initialState:{recording_page:hl.PreRecord,pre_recording_advanced:!1,avatar_menu:!1,glow_status:gl.off,db_level:0,workspace_limit_tooltip_dismissed:!1,companion_beam_dismissed:!1,permissionTour:fl.none},reducers:{toggleAvatarMenu(e){e.avatar_menu=!e.avatar_menu},setOsPermissionsState(e,t){const r=t.payload;e.recording_page=r?hl.PreRecord:hl.OSPermissionsTour},updatePage(e,t){e.recording_page=t.payload},setPermissionTour(e,t){e.permissionTour=t.payload},updateWorkspaceLimitTooltipDismissed(e,t){e.workspace_limit_tooltip_dismissed=t.payload}},extraReducers:e=>{e.addCase(Oo,(e=>{e.recording_page=hl.PreRecord}))}}),{toggleAvatarMenu:im,setOsPermissionsState:nm,updatePage:am,setPermissionTour:om,updateWorkspaceLimitTooltipDismissed:sm}=rm.actions;var um=rm;const cm={open:!1,is_fetching:!1,lastFetchAt:null,notifications:[]},pm=Oa({name:"notificationDrawer",initialState:cm,reducers:{updateReadStatus(e,t){const r=e.notifications.find((e=>e.id===t.payload.id));r&&(r.status=bl.Read)},updateNotifications(e,t){e.notifications=t.payload}},extraReducers:e=>{e.addCase(Oo,(e=>{Object.assign(e,cm)}))}}),{updateNotifications:lm}=pm.actions;var dm=pm;const ym=["dragCamera","startRecording","pressPause","pressPlay","pressStop"];var bm=(e=>(e.qualityAuto="Auto",e.quality1080p="1080p",e.quality720p="720p",e))(bm||{}),hm=(e=>(e.FullScreen="full_screen",e.Window="window",e.CurrentTab="current_tab",e.CameraOnly="camera_only",e))(hm||{});const gm=Oa({name:"onboardingTutorial",initialState:{isTutorialActive:!1,isCameraIntersectingGuide:!1,canSeeTutorial:!1,hasSeenTutorial:!1,tutorialStep:ym[0],isTutorialComplete:!1,preTutorialRecordingType:hm.FullScreen},reducers:{setIsTutorialActive(e,t){e.isTutorialActive=t.payload,e.tutorialStep=ym[0],t.payload&&(e.hasSeenTutorial=!0)},updateTutorialStep(e,t){const r=t?.payload?.stepName;let i;if(r)i=ym.indexOf(r);else{const t=ym.indexOf(e.tutorialStep);i=Math.min(t+1,ym.length-1)}e.tutorialStep=ym[i]},setIsCameraIntersectingGuide(e,t){e.isCameraIntersectingGuide=t.payload},setCanSeeTutorial(e,t){e.canSeeTutorial=t?.payload},setIsTutorialComplete(e,t){e.isTutorialComplete=t.payload},setPreTutorialRecordingType(e,t){e.preTutorialRecordingType=t.payload}}}),{setIsTutorialActive:fm,updateTutorialStep:mm,setCanSeeTutorial:Sm,setPreTutorialRecordingType:vm,setIsCameraIntersectingGuide:Am}=gm.actions;var Cm=gm;chrome.runtime.getURL("3rd/libvirtualbg-worker.js"),Object.freeze({position:"absolute"}),Object.freeze({transform:"scaleX(-1)",WebkitTransform:"scaleX(-1)"});var Tm=(e=>(e[e.small=1]="small",e[e.medium=2]="medium",e[e.large=3]="large",e))(Tm||{});const Mm=xa("recorderSettings/disableCompanionSiteControlSettings",(({all:e,title:t},{dispatch:r,getState:i})=>{let n=i().recorderSettings.companion_site_control_settings;const a=(new Date).toISOString();return e?n={companion_master_switch:{enabled:!1,disabledAt:a}}:t&&(n={...n,[t]:{enabled:!1,disabledAt:a}}),r(Gm(n)),chrome.runtime.sendMessage({type:Ro.updateRecorderSettings,userSettings:{companion_site_control_settings:n}})})),_m=(xa("recorderSettings/updateMic",(({device:e},{dispatch:t})=>{e!==Om&&t(xm(e))})),e=>t=>{if("recordingType"in e){const{recordingType:r}=e;t(Im(r))}if("device"in e){const{device:r}=e;t(zm(r))}}),Rm="theme-dark",Om="no_mic",wm="no_camera",Pm=Oa({name:"recorderSettings",initialState:{access_requested:!1,avatar_on_screen_only:!0,camera_id:wm,camera_position:{x:0,y:0},camera_size:Tm.small,cameras:[wm],companion_site_control_settings:{companion_master_switch:{enabled:!0,disabledAt:null}},curr_avatar:0,default_camera_id:null,default_microphone_id:null,flip_camera:!0,high_quality:null,high_quality_user_preference:bm.qualityAuto,low_light_offset:0,mic_issue_permitted:!1,mic_muted_permitted:!1,microphone_id:Om,microphones:[Om],recording_controls_enabled:!0,recording_timer_enabled:!0,recordingType:hm.FullScreen,screenType:Tu.Desktop,show_cam_bubble_hidden_alert:!0,show_extension_unsupported_toast:!1,show_internal_audio_alert:!0,show_mic_issue_warning_modal:!1,show_mic_issue_warning_pill:!1,show_muted_mic_warning:!1,show_pinned_tab_toast:!0,tab_audio:!1,temp_hide_camera:!1,theme:null,with_low_light_adjustments:!0},reducers:{updateAvatarOnScreenOnly(e,t){e.avatar_on_screen_only=t.payload},updateCamera(e,t){e.camera_id=t.payload},updateCameraPosition(e,t){e.camera_position=t.payload},updateCameraSize(e,t){e.camera_size=t.payload},updateCameras(e,t){e.cameras=[wm].concat(t.payload)},updateCompanionSiteControlSettings(e,t){e.companion_site_control_settings=t.payload},updateFlipCamera(e,t){e.flip_camera=t.payload},updateHighQuality(e,t){e.high_quality=t.payload},updateHighQualityUserPreference(e,t){e.high_quality_user_preference=t.payload,t.payload===bm.quality1080p||t.payload===bm.quality720p?e.high_quality=t.payload===bm.quality1080p:e.high_quality=null},updateMicIssuePermitted(e,t){e.mic_issue_permitted=t.payload},updateMicrophone(e,t){e.microphone_id=t.payload},updateMicrophones(e,t){e.microphones=[Om].concat(t.payload)},updateMutedMicPermitted(e,t){e.show_muted_mic_warning=!1,e.mic_muted_permitted=t.payload},updateRecordingControlsEnabled(e,t){e.recording_controls_enabled=t.payload},updateRecordingTimerEnabled(e,t){e.recording_timer_enabled=t.payload},updateRecordingType(e,t){e.recordingType=t.payload,t.payload===hm.CameraOnly?e.screenType=Tu.Camera:e.screenType=Tu.Desktop},updateScreenType(e,t){e.screenType=t.payload},updateShowCameraBubbleHiddenAlert(e){e.show_cam_bubble_hidden_alert=!1},updateShowExtensionUnsupportedToast(e,t){e.show_extension_unsupported_toast=t.payload},updateShowInternalAudioAlert(e){e.show_internal_audio_alert=!1},updateShowMicIssueWarningModal(e,t){e.show_mic_issue_warning_modal=t.payload},updateShowMicIssueWarningPill(e,t){e.show_mic_issue_warning_pill=t.payload},updateShowMutedMicWarning(e,t){e.show_muted_mic_warning=t.payload},updateShowPinnedTabToast(e,t){e.show_pinned_tab_toast=t.payload},updateTheme(e,t){e.theme=t.payload},updateWithLowLightAdjustments(e,t){e.with_low_light_adjustments=t.payload}},extraReducers(e){e.addCase(Ho,(e=>{e.show_muted_mic_warning=!1,e.mic_muted_permitted=!1,e.mic_issue_permitted=!1,e.show_mic_issue_warning_pill=!1,e.show_mic_issue_warning_modal=!1}))}}),{updateCameraSize:jm,updateCamera:zm,updateMicrophone:xm,updateRecordingType:Im,updateFlipCamera:Em,updateCameras:Nm,updateRecordingTimerEnabled:km,updateHighQuality:Dm,updateHighQualityUserPreference:Um,updateAvatarOnScreenOnly:Lm,updateShowMicIssueWarningPill:qm,updateShowMicIssueWarningModal:Bm,updateShowMutedMicWarning:Fm,updateMicIssuePermitted:Hm,updateMutedMicPermitted:Wm,updateCompanionSiteControlSettings:Gm,updateWithLowLightAdjustments:Km,updateCameraPosition:$m,updateTheme:Vm,updateScreenType:Qm,updateRecordingControlsEnabled:Zm,updateShowCameraBubbleHiddenAlert:Ym,updateShowInternalAudioAlert:Xm,updateShowExtensionUnsupportedToast:Jm,updateShowPinnedTabToast:eS}=Pm.actions;var tS=Pm;const rS=["entryPoint","pauseAndRestart","playBackTrim","editMistakesLater","backgroundEffects","levelUp"],iS=Oa({name:"recorderTips",initialState:{tutorialStep:rS[0],shouldSeeTutorial:!0,isTutorialComplete:!1},reducers:{updateTutorialStep(e,t){const r=t?.payload?.stepName;let i;if(r)i=rS.indexOf(r);else{const t=rS.indexOf(e.tutorialStep);i=Math.min(t+1,rS.length-1)}e.tutorialStep=rS[i]},setShouldSeeTutorial(e,t){e.shouldSeeTutorial=t.payload},setIsTutorialComplete(e,t){e.isTutorialComplete=t.payload}}}),{updateTutorialStep:nS,setShouldSeeTutorial:aS,setIsTutorialComplete:oS}=iS.actions;var sS=iS;const uS=Oa({name:"s3Slice",initialState:{useAccelerateEndpoint:!1},reducers:{updateS3Acceleration(e,t){e.useAccelerateEndpoint=t.payload}}}),{updateS3Acceleration:cS}=uS.actions;var pS=uS,lS=n(83496),dS=n.n(lS);const yS={method:"GET",headers:{}},bS=(xa("sessions/fetchMostRecentSession",(async(e,{dispatch:t})=>{let r;try{const e=await((e,t=yS)=>dS()(e,{...t,credentials:"include",headers:{...vl,...t.headers,client:"chrome-extension"}}))(`${Sl}/api/campaigns/my-videos/most-recent`);if(404===e.status)return t(bS.actions.updateMostRecentSession(null));if(e.status>=400)return Promise.reject(new Error("not logged in - HTTP response: "+e.status));r=await e.json()}catch(e){return bS.actions.updateMostRecentSession(null),tm.info(e,{message:"fetchMostRecentSession: error attempting to fetch most recent video"}),Promise.reject(e)}return t(bS.actions.updateMostRecentSession(r))})),xa("sessions/delegateFetchMostRecentSession",(()=>{chrome.runtime.sendMessage({type:Ro.fetchMostRecentSession})})),xa("sessions/updateNameToSession",(({name:e,video:t,fromRobot:r})=>{chrome.runtime.sendMessage({type:Ro.updateNameToSession,name:e,video:t,fromRobot:r})})),Oa({name:"sessions",initialState:{mostRecentSession:null,latestPreviewModalSession:null,myVideosSessions:[],previewModalSessionReady:!1,companionPreviewModalSession:null},reducers:{updateMostRecentSession(e,t){e.mostRecentSession=t.payload},updateLatestPreviewModalSession(e,t){e.latestPreviewModalSession=t.payload,e.previewModalSessionReady=null!=t.payload},updateCompanionPreviewModalSession(e,t){e.companionPreviewModalSession=t.payload},updateMyVideosSessions(e,t){e.myVideosSessions=t.payload}}})),{updateLatestPreviewModalSession:hS,updateCompanionPreviewModalSession:gS,updateMyVideosSessions:fS}=bS.actions;var mS=bS;const SS=Oa({name:"upgrades",initialState:{requestStatus:void 0,fetching:!1,fetched:!1},reducers:{setUpgradeRequested(e,t){e.requestStatus=t.payload},setUpgradeRequestedFetching(e,t){e.fetching=t.payload,e.fetched=e.fetched||e.fetching&&!t.payload}}}),{setUpgradeRequested:vS,setUpgradeRequestedFetching:AS}=SS.actions;var CS=SS,TS=n(74397),MS=n.n(TS);const _S=Oa({name:"workspace",initialState:{workspaces:[],selectedWorkspace:null,upgradeMessage:"",showChangeDefaultMessage:!1},reducers:{populateWorkspaces(e,t){e.workspaces=t.payload,e.selectedWorkspace=e.workspaces?.find((e=>e.isSelected))||null,e.showChangeDefaultMessage=MS()(e.workspaces,(e=>e.memberRole!==cn))},setUpgradeMessage(e,t){e.upgradeMessage=t.payload},setIsOnPureTrial(e,t){const r=e.workspaces.find((e=>e.id===t.payload.workspaceId));r&&(r.isOnPureTrial=t.payload.isOnPureTrial)}}}),{populateWorkspaces:RS,setUpgradeMessage:OS,setIsOnPureTrial:wS}=_S.actions;var PS=_S;!function(e){for(var t=Object.keys(e),r={},i=0;i<t.length;i++){var n=t[i];"function"==typeof e[n]&&(r[n]=e[n])}Object.keys(r);try{!function(e){Object.keys(e).forEach((function(t){var r=e[t];if(void 0===r(void 0,{type:dn.INIT}))throw new Error(pn(12));if(void 0===r(void 0,{type:dn.PROBE_UNKNOWN_ACTION()}))throw new Error(pn(13))}))}(r)}catch(e){e}}({activitySession:vo.reducer,alerts:_o.reducer,backgrounds:uo,blur:Rs.reducer,bubbleMenu:Ps.reducer,countdown:Is.reducer,featureFlags:Bs.reducer,gmail:Ys.reducer,healthCheck:tu.reducer,idleDialog:ou.reducer,integrationSettings:pu.reducer,liveRewind:Au.reducer,network:yl.reducer,notificationDrawer:dm.reducer,onboardingTutorial:Cm.reducer,preRecorder:um.reducer,recorderSettings:tS.reducer,recorderTips:sS.reducer,recording:ls.reducer,s3:pS.reducer,sessions:mS.reducer,upgrades:CS.reducer,user:ko.reducer,workspace:PS.reducer});const jS=on;var zS="NOT_FOUND",xS=function(e,t){return e===t};function IS(e,t){var r,i,n="object"==typeof t?t:{equalityCheck:t},a=n.equalityCheck,o=void 0===a?xS:a,s=n.maxSize,u=void 0===s?1:s,c=n.resultEqualityCheck,p=function(e){return function(t,r){if(null===t||null===r||t.length!==r.length)return!1;for(var i=t.length,n=0;n<i;n++)if(!e(t[n],r[n]))return!1;return!0}}(o),l=1===u?(r=p,{get:function(e){return i&&r(i.key,e)?i.value:zS},put:function(e,t){i={key:e,value:t}},getEntries:function(){return i?[i]:[]},clear:function(){i=void 0}}):function(e,t){var r=[];function i(e){var i=r.findIndex((function(r){return t(e,r.key)}));if(i>-1){var n=r[i];return i>0&&(r.splice(i,1),r.unshift(n)),n.value}return zS}return{get:i,put:function(t,n){i(t)===zS&&(r.unshift({key:t,value:n}),r.length>e&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(u,p);function d(){var t=l.get(arguments);if(t===zS){if(t=e.apply(null,arguments),c){var r=l.getEntries().find((function(e){return c(e.value,t)}));r&&(t=r.value)}l.put(arguments,t)}return t}return d.clearCache=function(){return l.clear()},d}function ES(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return function(){for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];var a,o=0,s={memoizeOptions:void 0},u=i.pop();if("object"==typeof u&&(s=u,u=i.pop()),"function"!=typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var c=s.memoizeOptions,p=void 0===c?r:c,l=Array.isArray(p)?p:[p],d=function(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"==typeof e}))){var r=t.map((function(e){return"function"==typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return t}(i),y=e.apply(void 0,[function(){return o++,u.apply(null,arguments)}].concat(l)),b=e((function(){for(var e=[],t=d.length,r=0;r<t;r++)e.push(d[r].apply(null,arguments));return a=y.apply(null,e)}));return Object.assign(b,{resultFunc:u,memoizedResultFunc:y,dependencies:d,lastResult:function(){return a},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),b}}var NS=ES(IS);const kS=e=>e.recorderSettings,DS=(NS(kS,(e=>e.camera_size)),NS(kS,(e=>e.microphones)),NS(kS,(e=>e.microphone_id))),US=(NS(kS,(e=>e.cameras)),NS(kS,(e=>e.camera_id)),NS(kS,(e=>e.recording_timer_enabled)),NS(kS,(e=>e.recordingType))),LS=(NS(kS,(e=>e.flip_camera)),NS(kS,(e=>e.high_quality)),NS(kS,(e=>e.high_quality_user_preference)),NS(kS,(e=>e.avatar_on_screen_only)),NS(kS,(e=>e.curr_avatar)),NS(kS,(e=>e.with_low_light_adjustments)),e=>kS(e).theme),qS=e=>(t,r)=>{const i=r(),n=(e=>!(DS(e).indexOf(Om)>-1))(i),a=(e=>kS(e).mic_muted_permitted)(i),o=(e=>kS(e).show_mic_issue_warning_pill)(i),s=(e=>kS(e).mic_issue_permitted)(i),{source:u,recorderPhase:c}=i.recording;if(!n&&!a)return void t(Fm(!0));if(!s&&!a&&o)return void t(Bm(!0));const p=US(r());let l=e&&(p===hm.FullScreen||p===hm.Window);u===un&&(l=l&&c!==Do.active),chrome.runtime.sendMessage({type:Ro.openPinnedTab,focusNewTab:l})},BS=e=>e.recording,FS=e=>BS(e).recorderPhase===Do.active,HS=(NS(BS,(e=>e.pinnedTab)),NS(BS,(e=>e.recordingTab)),NS(BS,(e=>e.recordingStartTime)),NS(BS,(e=>e.totalRecordingTimePaused)),NS(BS,(e=>e.timeElapsedAtPause)),NS(BS,(e=>e.session)),"business"),WS=e=>e.workspace,GS=e=>{const t=e.user,r=WS(e).workspaces,i=t.user?.default_workspace_id;return r.find((e=>e.id===i))||null},KS=e=>{const t=GS(e);return t?.memberRole||null};NS(GS,(e=>e?.limits?.VIDEO_DURATION||e?.memberLimits?.VIDEO_DURATION)),NS(GS,(e=>{let t;return t=void 0!==e?.memberLimits?.TOTAL_VIDEOS&&void 0!==e?.counts?.videos?.total_member_created_videos&&e.counts.videos.total_member_created_videos>=e?.memberLimits?.TOTAL_VIDEOS,{limit:e?.memberLimits?.TOTAL_VIDEOS||0,exceededLimit:t}})),NS(WS,(e=>e.selectedWorkspace)),NS(GS,(e=>{const t=e?.counts?.videos?.total_published_videos,r=e?.counts?.videos?.total_personal_active_videos,i=e?.members;return void 0!==e?.counts?.videos&&void 0!==t&&void 0!==r&&void 0!==i&&0===r&&(t<2||i<2)})),NS(GS,(e=>{const t=e?.counts?.videos?.total_personal_active_videos;return t||0})),NS(GS,(e=>"110275"===e?.id)),NS(WS,(e=>e?.upgradeMessage)),NS(GS,(e=>e?.type===HS&&e?.isOnPureTrial||!1)),n(93836);var $S=n(51),VS=n.n($S),QS=n(89051),ZS=n.n(QS),YS=n(94902),XS=n.n(YS),JS=n(71064),ev=n.n(JS),tv=n(23919);async function rv(e){const t=function(e){const t=new Headers(e.headers);if(e.auth){const r=e.auth.username||"",i=e.auth.password?decodeURI(encodeURIComponent(e.auth.password)):"";t.set("Authorization",`Basic ${btoa(r+":"+i)}`)}const r=e.method.toUpperCase(),i={headers:t,method:r};"GET"!==r&&"HEAD"!==r&&(i.body=e.data),e.mode&&(i.mode=e.mode),e.cache&&(i.cache=e.cache),e.integrity&&(i.integrity=e.integrity),e.redirect&&(i.redirect=e.redirect),e.referrer&&(i.referrer=e.referrer),(0,tv.isUndefined)(e.withCredentials)||(i.credentials=e.withCredentials?"include":"omit");const n=ev()(e.baseURL,e.url),a=XS()(n,e.params,e.paramsSerializer);return new Request(a,i)}(e),r=[iv(t,e)];e.timeout&&e.timeout>0&&r.push(new Promise((r=>{setTimeout((()=>{const i=e.timeoutErrorMessage?e.timeoutErrorMessage:"timeout of "+e.timeout+"ms exceeded";r(nv(i,e,"ECONNABORTED",t))}),e.timeout)})));const i=await Promise.race(r);return new Promise(((t,r)=>{i instanceof Error?r(i):"[object Function]"===Object.prototype.toString.call(e.settle)?e.settle(t,r,i):ZS()(t,r,i)}))}async function iv(e,t){let r;try{r=await fetch(e)}catch(r){return nv("Network Error",t,"ERR_NETWORK",e)}const i={ok:r.ok,status:r.status,statusText:r.statusText,headers:new Headers(r.headers),config:t,request:e};if(r.status>=200&&204!==r.status)switch(t.responseType){case"arraybuffer":i.data=await r.arrayBuffer();break;case"blob":i.data=await r.blob();break;case"json":i.data=await r.json();break;case"formData":i.data=await r.formData();break;default:i.data=await r.text()}return i}function nv(e,t,r,i,n){return VS().AxiosError&&"function"==typeof VS().AxiosError?new(VS().AxiosError)(e,VS().AxiosError[r],t,i,n):function(e,t,r,i,n){return e.config=t,r&&(e.code=r),e.request=i,e.response=n,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}(new Error(e),t,r,i,n)}var av=n(87317),ov=n.n(av);const sv="ajs_anonymous_id",uv=()=>function(e){try{const{pathname:t}=new URL(e,location.origin);return t===location.pathname}catch{return!1}}(chrome.runtime.getManifest()?.background?.service_worker);let cv,pv=ho();const lv=async()=>{if(uv()&&!cv){cv=new(ov())("0BcCR8G6DdEJ9RYwN7tGVAAuURhMrJFk",{flushAt:20,axiosConfig:{adapter:rv}});try{const t=await new Promise((e=>{chrome.cookies.getAll({domain:ml,name:sv},(t=>{(t=t.filter((e=>!e.domain.includes("stage")))).length?e(decodeURIComponent(t[0].value).replace(/"/g,"")):e(null)}))}));t?(pv=t,tm.debug(`read anonID ${pv} from cookie`)):(tm.debug(`writing anonID ${pv} to cookie`),e=pv,chrome.cookies.set({domain:ml,url:Sl,name:sv,httpOnly:!1,secure:!0,expirationDate:new Date((new Date).setFullYear((new Date).getFullYear()+2)).getTime(),value:encodeURIComponent(`"${e}"`)}))}catch(e){tm.error(e,{message:"error in analytics initialization"})}}var e};var dv=async(e,t,r)=>{uv()?(await lv(),cv?.track({userId:r,anonymousId:r?void 0:pv,event:e,properties:t,context:{manifest:3}})):chrome.runtime.sendMessage({type:Ro.trackEvent,event:e,properties:t})};const yv=e=>t=>{const r=(e=>{switch(e){case"content":default:return["./js/content.js"];case"toastMsg":return["./js/currentToastMsg.js"]}})(e);return new Promise((e=>{chrome.scripting.executeScript({target:{tabId:t},files:r},(t=>{!chrome.runtime.lastError&&t||e(!1),e(!0)}))}))},bv=(yv("content"),yv("toastMsg"),e=>t=>new Promise((r=>{chrome.tabs.sendMessage(t,{type:e},(e=>chrome.runtime.lastError||void 0===typeof e?r(!1):r(e)))})));bv(Ro.pingContentScript),bv(Ro.pingToastMsgScript);let hv=null;const gv=2147483647;var fv=()=>{const{companionPreviewModalSession:e}=jS((e=>e.sessions));return(t,r={})=>{const i={...r,url:window.location.href};e&&(i.video_id=e.id),dv(t,i)}};const mv="chrome-ext",Sv="disabled";var vv=function({closeModal:e,isOpen:t,currentSiteTitle:i}){const n=tn(),a=fv(),o={title:`Turn off Quick Record for ${i}?`,body:"Speed up your workflow and record Looms through our Chrome extension in one click."},s=()=>{a("Companion Dismiss Modal Closed",{source:mv}),e()},u=r.createElement(fr,{variant:"neutral",onClick:()=>{a("Companion Site Settings Toggled For Master Switch",{source:mv,new_state:Sv,on_site:i}),n(Mm({all:!0})),e()}},"Turn Off Everywhere"),c=r.createElement(fr,{variant:"primary",onClick:()=>{a("Companion Site Settings Toggled For Site",{source:mv,new_state:Sv,for_site:i}),n(Mm({all:!1,title:i})),e()}},"Turn Off"),p=r.createElement(fr,{variant:"neutral",onClick:s},"Cancel");return r.createElement(oi,{title:o.title,mainButton:c,secondaryButton:p,alternativeButton:u,isOpen:t,onCloseClick:s,onBackgroundClick:s,zIndex:gv},r.createElement(vt,{variant:"body"},o.body))},Av=n(89105),Cv=n.n(Av),Tv=Object.defineProperty,Mv=Object.getOwnPropertySymbols,_v=Object.prototype.hasOwnProperty,Rv=Object.prototype.propertyIsEnumerable,Ov=(e,t,r)=>t in e?Tv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function wv(e){return r.createElement("svg",((e,t)=>{for(var r in t||(t={}))_v.call(t,r)&&Ov(e,r,t[r]);if(Mv)for(var r of Mv(t))Rv.call(t,r)&&Ov(e,r,t[r]);return e})({viewBox:"0 0 24 24",fill:"none"},e),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 12a.125.125 0 100-.25.125.125 0 000 .25zm-1.875-.125a1.875 1.875 0 113.75 0 1.875 1.875 0 01-3.75 0zM18.125 12a.125.125 0 100-.25.125.125 0 000 .25zm-1.875-.125a1.875 1.875 0 113.75 0 1.875 1.875 0 01-3.75 0zM5.875 12a.125.125 0 100-.25.125.125 0 000 .25zM4 11.875a1.875 1.875 0 113.75 0 1.875 1.875 0 01-3.75 0z",fill:"currentColor"}))}var Pv=(e=>(e.top="anchor-top",e.bottom="anchor-bottom",e.left="anchor-left",e.right="anchor-right",e))(Pv||{}),jv=(e=>(e.bottom_left="bottom-left",e.bottom_right="bottom-right",e.top_left="top-left",e.top_right="top-right",e))(jv||{});const zv=56,xv="companionFabConstraint",Iv=(e,t,r)=>e<t?t:e>r?r:e,Ev=()=>({width:window.innerWidth,height:window.innerHeight}),Nv=e=>{const t=Ev();return{x:e.x/t.width,y:e.y/t.height}},kv=()=>{const e=localStorage.getItem(xv);if(e)return JSON.parse(e)},Dv=e=>[jv.top_left,jv.top_right].includes(e),Uv={anchor:Pv.left,quadrant:jv.bottom_left,offsetStyle:{bottom:"20px"}},Lv=()=>r.createElement(Yt,{size:3,altText:"Move",color:"blurple",icon:r.createElement(wv,null)});var qv=({render:e})=>{const t=(0,r.useRef)(null),i=fv(),[n,a]=(0,r.useState)(kv()||Uv),[o,s]=(0,r.useState)(null),u=()=>s(null),c=e=>{const t=(e=>{const t=Ev();return{x:Iv(e.x,0,t.width-zv),y:Iv(e.y,0,t.height-zv)}})({x:e.x-28,y:e.y-28}),r=(e=>{const t=(e=>({x:e.x+28,y:e.y+28}))(e),r=Nv(t),i=(e=>{const t=e.x>e.y,r=e.x<1-e.y;return t?r?Pv.top:Pv.right:r?Pv.left:Pv.bottom})(r),n=(e=>e.x>.5?e.y>.5?jv.bottom_right:jv.top_right:e.y>.5?jv.bottom_left:jv.top_left)(r),a=((e,t,r)=>{const i=Ev();return r===jv.top_left?t===Pv.top?{left:e.x+"px"}:{top:e.y+"px"}:r===jv.top_right?t===Pv.top?{right:i.width-(e.x+zv)+"px"}:{top:e.y+"px"}:r===jv.bottom_left?t===Pv.bottom?{left:e.x+"px"}:{bottom:i.height-(e.y+zv)+"px"}:t===Pv.bottom?{right:i.width-(e.x+zv)+"px"}:{bottom:i.height-(e.y+zv)+"px"}})(e,i,n);return{anchor:i,quadrant:n,offsetStyle:a}})(t);a(r)},p=(0,r.useCallback)((e=>{if(!t.current)return;const r={x:e.clientX,y:e.clientY};"mousemove"===e.type&&c(r),(e=>{s({left:e.x-28+"px",top:e.y-28+"px"})})(r)}),[]),l=(0,r.useCallback)((e=>{if(n&&(()=>{const e=kv();return JSON.stringify(e)!==JSON.stringify(n)})()){const{x:t,y:r}=Nv({x:e.clientX,y:e.clientY});i("Companion FAB Moved",{positionPercentageX:String(Math.round(100*t)),positionPercentageY:String(Math.round(100*r)),quadrant:n.quadrant,anchor:n.anchor}),(e=>{localStorage.setItem(xv,JSON.stringify(e))})(n)}u()}),[i,n]);(0,r.useEffect)((()=>(document.addEventListener("mouseleave",u),document.addEventListener("dragleave",u),()=>{document.removeEventListener("dragleave",u),document.removeEventListener("mouseleave",u)})),[s]);const d=["companion-drag-drop"];let y;return n?(d.push(n.anchor),d.push(n.quadrant),y={...n.offsetStyle,...o}):d.push("invisible"),o&&d.push("dragging"),r.createElement("div",{className:Cv()(d)},r.createElement("div",{className:"companion-anchor-frame",onMouseMove:o?p:void 0,onMouseUp:l},r.createElement("div",{className:"companion-anchor",style:n?.offsetStyle})),r.createElement("div",{ref:t,className:"companion-container",style:y,onMouseMove:o?p:void 0,onMouseUp:l},r.createElement("div",{className:"companion-grip",onMouseDown:p},r.createElement(Lv,null),r.createElement(Lv,null)),e({constraint:n})))},Bv=Object.defineProperty,Fv=Object.getOwnPropertySymbols,Hv=Object.prototype.hasOwnProperty,Wv=Object.prototype.propertyIsEnumerable,Gv=(e,t,r)=>t in e?Bv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function Kv(e){return r.createElement("svg",((e,t)=>{for(var r in t||(t={}))Hv.call(t,r)&&Gv(e,r,t[r]);if(Fv)for(var r of Fv(t))Wv.call(t,r)&&Gv(e,r,t[r]);return e})({viewBox:"0 0 24 24",fill:"none"},e),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.457 6.747a1 1 0 01.543.89v8.181a1 1 0 01-1.581.814l-5.728-4.09a1 1 0 010-1.628l5.728-4.091a1 1 0 011.038-.076zm-4.464 4.98L20 13.875V9.58l-3.007 2.147z",fill:"currentColor"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.636 7A.636.636 0 004 7.636v8.182c0 .352.285.637.636.637h9a.636.636 0 00.637-.637V7.636A.636.636 0 0013.636 7h-9zM2 7.636A2.636 2.636 0 014.636 5h9a2.636 2.636 0 012.637 2.636v8.182a2.636 2.636 0 01-2.637 2.637h-9A2.636 2.636 0 012 15.818V7.636z",fill:"currentColor"}))}var $v=({recordingRequested:e})=>e?r.createElement("div",{className:"companion-loading-icon"},r.createElement(or,{size:"medium",color:"white"})):r.createElement("div",{className:"companion-icon"},r.createElement("div",{className:"companion-icon-no-hover"},r.createElement(Ei,{variant:"symbol",maxWidth:3,symbolColor:"white"})),r.createElement("div",{className:"companion-icon-hover"},r.createElement(Yt,{size:3,altText:"Record a Loom",color:"white",icon:r.createElement(Kv,null)}))),Vv=Object.defineProperty,Qv=Object.getOwnPropertySymbols,Zv=Object.prototype.hasOwnProperty,Yv=Object.prototype.propertyIsEnumerable,Xv=(e,t,r)=>t in e?Vv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function Jv(e){return r.createElement("svg",((e,t)=>{for(var r in t||(t={}))Zv.call(t,r)&&Xv(e,r,t[r]);if(Qv)for(var r of Qv(t))Yv.call(t,r)&&Xv(e,r,t[r]);return e})({viewBox:"0 0 24 24",fill:"none"},e),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.85625 15.9409C8.41314 15.3469 9.18276 15 10 15H14C14.8172 15 15.5869 15.3469 16.1438 15.9409C16.6986 16.5327 17 17.3224 17 18.1333V18.4C17 18.9523 16.5523 19.4 16 19.4C15.4477 19.4 15 18.9523 15 18.4V18.1333C15 17.8127 14.88 17.5171 14.6847 17.3088C14.4914 17.1026 14.2436 17 14 17H10C9.75637 17 9.50858 17.1026 9.31532 17.3088C9.12002 17.5171 9 17.8127 9 18.1333V18.4C9 18.9523 8.55228 19.4 8 19.4C7.44772 19.4 7 18.9523 7 18.4V18.1333C7 17.3224 7.30141 16.5327 7.85625 15.9409Z",fill:"currentColor"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.9997 9C11.2265 9 10.5997 9.6268 10.5997 10.4C10.5997 11.1732 11.2265 11.8 11.9997 11.8C12.7729 11.8 13.3997 11.1732 13.3997 10.4C13.3997 9.6268 12.7729 9 11.9997 9ZM8.59972 10.4C8.59972 8.52223 10.122 7 11.9997 7C13.8775 7 15.3997 8.52223 15.3997 10.4C15.3997 12.2778 13.8775 13.8 11.9997 13.8C10.122 13.8 8.59972 12.2778 8.59972 10.4Z",fill:"currentColor"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z",fill:"currentColor"}))}var eA=Object.defineProperty,tA=Object.getOwnPropertySymbols,rA=Object.prototype.hasOwnProperty,iA=Object.prototype.propertyIsEnumerable,nA=(e,t,r)=>t in e?eA(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function aA(e){return r.createElement("svg",((e,t)=>{for(var r in t||(t={}))rA.call(t,r)&&nA(e,r,t[r]);if(tA)for(var r of tA(t))iA.call(t,r)&&nA(e,r,t[r]);return e})({viewBox:"0 0 24 24",fill:"none"},e),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.589 16.104a1 1 0 01.868-.504h3.086a1 1 0 01.868.504l2.057 3.6A1 1 0 0115.6 21.2H8.4a1 1 0 01-.868-1.496l2.057-3.6zm1.448 1.496l-.914 1.6h3.754l-.915-1.6h-1.925z",fill:"currentColor"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 6a3 3 0 013-3h14a3 3 0 013 3v8.6a3 3 0 01-3 3H5a3 3 0 01-3-3V6zm3-1a1 1 0 00-1 1v8.6a1 1 0 001 1h14a1 1 0 001-1V6a1 1 0 00-1-1H5z",fill:"currentColor"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21 14H3v-2h18v2z",fill:"currentColor"}))}var oA=Object.defineProperty,sA=Object.getOwnPropertySymbols,uA=Object.prototype.hasOwnProperty,cA=Object.prototype.propertyIsEnumerable,pA=(e,t,r)=>t in e?oA(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,lA=e=>r.createElement("svg",((e,t)=>{for(var r in t||(t={}))uA.call(t,r)&&pA(e,r,t[r]);if(sA)for(var r of sA(t))cA.call(t,r)&&pA(e,r,t[r]);return e})({viewBox:"0 0 24 24",fill:"none"},e),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.39868 6.49277C7.78927 6.88324 7.78937 7.5164 7.39891 7.90699C6.49008 8.81611 5.87123 9.97431 5.62059 11.2351C5.36996 12.4959 5.49881 13.8028 5.99084 14.9904C6.48287 16.178 7.31599 17.193 8.38487 17.9071C9.45374 18.6213 10.7104 19.0024 11.9959 19.0024C13.2813 19.0024 14.538 18.6213 15.6068 17.9071C16.6757 17.193 17.5088 16.178 18.0009 14.9904C18.4929 13.8028 18.6217 12.4959 18.3711 11.2351C18.1205 9.97431 17.5016 8.81611 16.5928 7.90699C16.2023 7.5164 16.2024 6.88324 16.593 6.49277C16.9836 6.10231 17.6168 6.10242 18.0072 6.49301C19.1957 7.68186 20.005 9.19642 20.3327 10.8452C20.6605 12.4939 20.492 14.2029 19.8486 15.7559C19.2051 17.3089 18.1157 18.6362 16.7179 19.5701C15.3202 20.504 13.6769 21.0024 11.9959 21.0024C10.3148 21.0024 8.67155 20.504 7.27379 19.5701C5.87604 18.6362 4.78657 17.3089 4.14314 15.7559C3.49972 14.2029 3.33123 12.4939 3.65898 10.8452C3.98672 9.19642 4.796 7.68186 5.98446 6.49301C6.37493 6.10242 7.00809 6.10231 7.39868 6.49277Z",fill:"currentColor"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.5C12.5523 2.5 13 2.94772 13 3.5H12H11C11 2.94772 11.4477 2.5 12 2.5ZM12 3.5H11V11.5C11 12.0523 11.4477 12.5 12 12.5C12.5523 12.5 13 12.0523 13 11.5V3.5H12Z",fill:"currentColor"})),dA=({color:e="blue",icon:t,label:i,onClick:n})=>{const a=`companion-fab-menu-item-button button-${e}`;return r.createElement("div",{className:"companion-fab-menu-item",onClick:n},r.createElement("div",{className:a},r.createElement(Yt,{size:3,altText:i,color:"white",icon:t})),r.createElement("div",{className:"companion-fab-menu-item-tooltip"},i))},yA=({onRecord:e,showDismissModal:t,constraint:i})=>{const n=tn(),a=fv(),o=[{icon:r.createElement(aA,null),label:"Record screen only",onClick:()=>{n(_m({recordingType:hm.Window})),a("Companion Recording Screen Only Clicked"),e()}},{icon:r.createElement(Jv,null),label:"Record camera only",onClick:()=>{n(_m({recordingType:hm.CameraOnly})),a("Companion Recording Camera Only Clicked"),e()}},{label:"Turn off for this site",onClick:()=>t(),color:"red",icon:r.createElement(lA,null)}];return Dv(i.quadrant)&&o.reverse(),r.createElement("div",{className:"companion-fab-menu"},o.map((e=>r.createElement(dA,{key:e.label,icon:e.icon,label:e.label,color:e.color,onClick:e.onClick}))))};function bA({recordingRequested:e,onRecord:t}){return r.createElement("div",{className:"companion-fab-main-button-and-label",onClick:t},r.createElement($v,{recordingRequested:e}),r.createElement("div",{className:"companion-fab-label"},"Record a Loom"))}var hA=function({recordingRequested:e,startRecording:t,showDismissModal:i,constraint:n=Uv}){const a=tn(),o=fv(),s=jS(FS),u=async()=>{o("Companion Recording Clicked"),await t()},c=()=>{a(_m({recordingType:hm.FullScreen})),o("Companion Recording Screen and Camera Clicked"),u()};return s?null:r.createElement("div",{className:"companion-fab"},Dv(n.quadrant)?r.createElement(r.Fragment,null,r.createElement(bA,{recordingRequested:e,onRecord:c}),r.createElement(yA,{onRecord:u,showDismissModal:i,constraint:n})):r.createElement(r.Fragment,null,r.createElement(yA,{onRecord:u,showDismissModal:i,constraint:n}),r.createElement(bA,{recordingRequested:e,onRecord:c})))},gA=e=>r.createElement(qv,{render:({constraint:t})=>r.createElement(hA,{...e,constraint:t})}),fA=function({recordingRequested:e,startRecording:t,currentSiteTitle:i}){const[n,a]=(0,r.useState)(!1);return jS(FS)?null:r.createElement(r.Fragment,null,r.createElement(gA,{recordingRequested:e,startRecording:t,showDismissModal:()=>a(!0)}),r.createElement(vv,{closeModal:()=>a(!1),isOpen:n,currentSiteTitle:i}))},mA=Object.defineProperty,SA=Object.getOwnPropertySymbols,vA=Object.prototype.hasOwnProperty,AA=Object.prototype.propertyIsEnumerable,CA=(e,t,r)=>t in e?mA(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function TA(e){return r.createElement("svg",((e,t)=>{for(var r in t||(t={}))vA.call(t,r)&&CA(e,r,t[r]);if(SA)for(var r of SA(t))AA.call(t,r)&&CA(e,r,t[r]);return e})({viewBox:"0 0 24 24",fill:"none"},e),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.34412 13.2845C5.76446 13.8641 5.43882 14.6503 5.43882 15.4701C5.43882 16.2898 5.76446 17.076 6.34412 17.6557C6.92378 18.2353 7.70997 18.561 8.52972 18.561C8.93563 18.561 9.33756 18.481 9.71256 18.3257C10.0876 18.1704 10.4283 17.9427 10.7153 17.6557L12.451 15.92C12.8415 15.5295 13.4746 15.5295 13.8652 15.92C14.2557 16.3106 14.2557 16.9437 13.8652 17.3343L12.1295 19.0699C11.6568 19.5426 11.0956 19.9176 10.4779 20.1734C9.86027 20.4293 9.19827 20.561 8.52972 20.561C7.17953 20.561 5.88464 20.0246 4.92991 19.0699C3.97518 18.1151 3.43882 16.8203 3.43882 15.4701C3.43882 14.1199 3.97518 12.825 4.92991 11.8702L6.66553 10.1346C7.05606 9.7441 7.68922 9.74409 8.07975 10.1346C8.47027 10.5251 8.47027 11.1583 8.07975 11.5488L6.34412 13.2845Z",fill:"currentColor"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.6577 10.7131C18.2374 10.1334 18.563 9.34723 18.563 8.52747C18.563 7.70771 18.2374 6.92152 17.6577 6.34187C17.0781 5.76221 16.2919 5.43656 15.4721 5.43656C15.0662 5.43656 14.6643 5.51651 14.2893 5.67184C13.9143 5.82717 13.5736 6.05485 13.2865 6.34186L11.5509 8.07749C11.1604 8.46801 10.5272 8.46801 10.1367 8.07749C9.74617 7.68697 9.74617 7.0538 10.1367 6.66328L11.8723 4.92765C12.3451 4.45492 12.9063 4.07992 13.5239 3.82408C14.1416 3.56824 14.8036 3.43656 15.4721 3.43656C16.8223 3.43656 18.1172 3.97292 19.072 4.92765C20.0267 5.88238 20.563 7.17728 20.563 8.52747C20.563 9.87766 20.0267 11.1726 19.072 12.1273L17.3363 13.8629C16.9458 14.2534 16.3126 14.2534 15.9221 13.8629C15.5316 13.4724 15.5316 12.8392 15.9221 12.4487L17.6577 10.7131Z",fill:"currentColor"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.97979 15.0199C8.58927 14.6294 8.58927 13.9962 8.97979 13.6057L13.6081 8.97736C13.9986 8.58683 14.6318 8.58683 15.0223 8.97736C15.4129 9.36788 15.4129 10.001 15.0223 10.3916L10.394 15.0199C10.0035 15.4104 9.37031 15.4104 8.97979 15.0199Z",fill:"currentColor"}))}var MA=Object.defineProperty,_A=Object.getOwnPropertySymbols,RA=Object.prototype.hasOwnProperty,OA=Object.prototype.propertyIsEnumerable,wA=(e,t,r)=>t in e?MA(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,PA=e=>r.createElement("svg",((e,t)=>{for(var r in t||(t={}))RA.call(t,r)&&wA(e,r,t[r]);if(_A)for(var r of _A(t))OA.call(t,r)&&wA(e,r,t[r]);return e})({viewBox:"0 0 24 24",fill:"none"},e),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.78306 0.566915C7.31653 0.709856 7.63311 1.25819 7.49017 1.79166L6.7049 4.72234C8.49852 3.41365 10.6667 2.85091 12.7825 3.03412C13.6117 3.10538 14.4088 3.28907 15.1584 3.56987C16.328 4.00704 17.4249 4.69588 18.3654 5.63641C19.2011 6.47209 19.8381 7.43123 20.2764 8.45511C20.7432 9.54315 21.0017 10.7418 21.0017 12.0007C21.0017 13.3939 20.6851 14.7132 20.12 15.8906C19.818 16.5208 19.4384 17.1231 18.9812 17.6833C18.5894 18.1639 18.1489 18.6034 17.6673 18.994C17.1314 19.4292 16.5572 19.7936 15.9571 20.0872C14.7632 20.6723 13.4208 21.0007 12.0017 21.0007C10.6825 21.0007 9.42964 20.7169 8.30077 20.207C7.44004 19.8191 6.62781 19.2888 5.89965 18.6163C4.11775 16.9719 3.00171 14.6166 3.00171 12.0007C3.00171 11.4484 3.44942 11.0007 4.00171 11.0007C4.55399 11.0007 5.00171 11.4484 5.00171 12.0007C5.00171 13.9336 5.78509 15.6835 7.05166 16.9502C7.1301 17.0287 7.21 17.1048 7.29116 17.1787C7.81679 17.6572 8.41556 18.0567 9.06872 18.3585C11.0182 19.2575 13.296 19.2122 15.2124 18.2226C15.5894 18.0277 15.9463 17.7995 16.2795 17.542C16.5127 17.3614 16.7372 17.1642 16.9512 16.9501C17.1573 16.744 17.3479 16.5282 17.523 16.3042C17.8046 15.9434 18.0516 15.5543 18.2591 15.1418C19.1888 13.2906 19.2453 11.113 18.4285 9.22207C17.6657 7.46001 16.1994 6.07343 14.3837 5.41645C13.8441 5.2216 13.2853 5.09519 12.7208 5.03721C12.4844 5.01308 12.2445 5.00072 12.0017 5.00072C11.9934 5.00072 11.985 5.00062 11.9767 5.00042C10.378 5.00603 8.78084 5.55593 7.48702 6.65011L10.8091 7.54027C11.3426 7.68321 11.6592 8.23155 11.5162 8.76501C11.3733 9.29848 10.825 9.61506 10.2915 9.47212L4.79178 7.99848C4.25832 7.85554 3.94174 7.3072 4.08468 6.77373L5.55832 1.27402C5.70126 0.740555 6.2496 0.423973 6.78306 0.566915ZM6.27535 6.32544L6.28616 6.28507L6.34527 6.34418L6.27535 6.32544Z",fill:"currentColor"})),jA=Object.defineProperty,zA=Object.getOwnPropertySymbols,xA=Object.prototype.hasOwnProperty,IA=Object.prototype.propertyIsEnumerable,EA=(e,t,r)=>t in e?jA(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function NA(e){return r.createElement("svg",((e,t)=>{for(var r in t||(t={}))xA.call(t,r)&&EA(e,r,t[r]);if(zA)for(var r of zA(t))IA.call(t,r)&&EA(e,r,t[r]);return e})({viewBox:"0 0 24 24",fill:"none"},e),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.987 3.15a1.631 1.631 0 011.853.343l5.658 5.705c.67.675.67 1.784 0 2.46L14.84 17.36a1.633 1.633 0 01-1.852.345 1.713 1.713 0 01-.997-1.576v-1.543c-3.415.376-5.919 2.787-7.22 5.742A.9.9 0 013 20.1v-.027a.9.9 0 01.009-.123c.242-3.288 1-6.407 2.526-8.851 1.438-2.302 3.547-3.984 6.456-4.628V4.724c0-.725.42-1.312.996-1.574zM5.424 16.072c1.821-1.963 4.34-3.326 7.463-3.338a.9.9 0 01.904.9v2.227l5.392-5.433-5.392-5.437v2.227a.9.9 0 01-.765.89c-2.743.418-4.657 1.851-5.964 3.944-.72 1.153-1.26 2.513-1.638 4.02zm8.138.02z",fill:"currentColor"}))}var kA=({onClose:e,onRecordAgain:t,onCopyLink:i,onInsertVideo:n,focusTarget:a})=>r.createElement(r.Fragment,null,r.createElement(fr,{variant:"neutral",onClick:e},"Close"),r.createElement(fr,{variant:"neutral",icon:r.createElement(PA,null),onClick:t},"Record Again"),r.createElement(fr,{variant:a?"neutral":"primary",icon:r.createElement(TA,null),onClick:i},"Copy Link"),n?r.createElement(fr,{variant:"primary",icon:r.createElement(NA,null),onClick:n},"Insert Video"):null);function DA({session:e}){if(!e)return null;const{id:t}=e,i=e.video_properties||{width:630,height:394},n=i.width||630,a=(i.height||394)/n*100+"%",o=window.encodeURIComponent(window.location.href),s=`chrome-extension://${window.chrome.runtime.id}/html/embedView.html?session_id=${t}&hide_owner=false&hide_speed=false&hide_share=true&hide_title=false&from_url=${o}`;return r.createElement("div",{style:{position:"relative",height:0,overflow:"hidden",paddingTop:a}},r.createElement("iframe",{frameBorder:"0",style:{display:"inline",position:"absolute",top:0,left:0,width:"100%",height:"90%"},allow:"camera;microphone",src:s,allowFullScreen:!0}))}var UA=function({companionPreviewModalSession:e}){return r.createElement("div",{className:"companion-preview-video-container"},r.createElement(DA,{session:e}))};const LA=r.createContext(null);var qA=({children:e})=>{const[t,i]=(0,r.useState)([]),[n,a]=(0,r.useState)(null),o="loom-companion-mv3";return(0,r.useEffect)((()=>{const e=()=>{const e=document.activeElement;if("TEXTAREA"===(r=e).nodeName||"INPUT"===r.nodeName&&"text"===r.getAttribute("type")?.toLowerCase()||"DIV"===r.nodeName&&"true"===r.getAttribute("contenteditable")?.toLowerCase())n!==e&&a(e);else{if(e===document.body||t.some((t=>t.contains(e))))return;n&&a(null)}var r};return window.addEventListener("onkeypress",e),window.addEventListener("click",e),window.addEventListener("focusin",e),()=>{window.removeEventListener("onkeypress",e),window.removeEventListener("click",e),window.removeEventListener("focusin",e)}}),[n,t]),(0,r.useEffect)((()=>{const e=[o].reduce(((e,t)=>{const r=document.getElementById(t);return r&&e.push(r),e}),[]);i(e)}),[]),r.createElement(LA.Provider,{value:n},e)},BA=$.div`
  .companion-preview-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    align-items: center;
    justify-content: center;

    display: flex;
  }

  .companion-preview {
    width: ${840}px;

    .companion-preview-video-container {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: ${472.5}px;

      background-color: var(--lns-color-grey8);

      & > * {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
      .video {
        z-index: 2;

        overflow: hidden;
      }
      .placeholder {
        z-index: 1;
        align-items: center;
        justify-content: center;

        display: flex;
      }
    }

    .bottom-bar {
      align-items: center;
      flex-direction: row;
      justify-content: space-between;

      display: flex;

      padding: var(--lns-space-medium);

      background-color: var(--lns-color-grey8);

      text-align: right;

      .actions {
        & > button,
        a {
          margin-left: var(--lns-space-medium);

          color: white;
        }
      }
    }
  }

  @media only screen and (max-width: ${880}px) {
    .companion-preview {
      width: 90%;

      .bottom-bar {
        justify-content: center;

        .logo {
          display: none;
        }

        .actions {
          & > button,
          a {
            margin-bottom: var(--lns-space-medium);
          }
        }
      }
    }
  }
`,FA=({isOpen:e,onClose:t,startRecording:i,companionPreviewModalSession:n})=>{const[a,o]=(0,r.useState)(null),s=n?.id,u=`https://www.loom.com/share/${s}`,c=fv(),p=(0,r.useContext)(LA),l=Boolean(p&&p.offsetWidth>0&&p.offsetHeight>0);(0,r.useEffect)((()=>{e&&c("Companion Preview Modal Displayed"),n&&l&&c("Companion Preview Modal Insert Video Shown")}),[c,e,n,l]);const d=tn(),y=()=>{d(gS(null)),t()};return r.createElement(r.Fragment,null,r.createElement(qA,null,r.createElement(Kr,{isOpen:e,zIndex:gv},r.createElement(BA,null,r.createElement("div",{className:"companion-preview-container","data-testid":"companion-preview-container",onClick:()=>{c(sn,{origin:"backdrop"}),y()}},r.createElement("div",{className:"companion-preview",onClick:e=>e.stopPropagation()},r.createElement(UA,{companionPreviewModalSession:n}),r.createElement("div",{className:"bottom-bar"},r.createElement("div",{className:"logo"},r.createElement(Ei,{maxWidth:12,wordmarkColor:"white"})),r.createElement("div",{className:"actions"},n?r.createElement(kA,{onClose:()=>{c(sn,{origin:"close button"}),y()},onRecordAgain:async()=>{c("Companion Preview Modal Record Again"),y(),await i()},onCopyLink:async()=>{c("Companion Preview Modal Copy Link"),n?(await navigator.clipboard.writeText(u),o("Link copied!")):(tm.error({message:"Failed to copy link, no companionPreviewModalSession found"}),o("Link could not be copied, please try again later")),y()},onInsertVideo:l?()=>{if(p&&n){if(c("Companion Preview Modal Insert Video"),"DIV"===p.nodeName)p.insertAdjacentText("beforeend",u);else{const e=p;e.value=`${e.value} ${u}`.trim()}y()}else tm.error({message:"Failed to insert video",context:{focusTarget:p,companionPreviewModalSession:n}})}:void 0,focusTarget:p}):null))))))),r.createElement(Ci,{isOpen:Boolean(a),onCloseClick:()=>o(null)},a))},HA=n(68452);const WA=e=>((e,t)=>(e.user.user?.scopes||[]).includes("RECORDER_BROWSER_EXTENSION_ACCESS"))(e),GA={flag:Es.COMPANION_SITE_CONTROL_SETTINGS_SITE_LIST,fetching:!1,fetched:!0,value:{duplicate_links:["https://*.snowflakecomputing.com/console#/*"],activated_links:{"https://*.airtable.com/*":"Airtable","https://*.atlassian.net/*":"Atlassian","https://*.canva.com/*":"Canva","https://*.github.com/*":"Github","https://*.monday.com/*":"Monday.com","https://*.outreach.io/*":"Outreach","https://*.salesloft.com/*":"Salesloft","https://*.snowflakecomputing.com/console#/*":"Snowflake","https://app.asana.com/*":"Asana","https://app.clickup.com/*":"Clickup","https://app.hubspot.com/*":"Hubspot","https://app.slack.com/client/*":"Slack","https://app.snowflake.com/*":"Snowflake","https://business.facebook.com/*":"Meta Business","https://docs.google.com/document/*":"Google Docs","https://docs.google.com/presentation/*":"Google Slides","https://docs.google.com/spreadsheets/*":"Google Sheets","https://drive.google.com/drive/*":"Google Drive","https://mail.google.com/*":"Gmail","https://meet.google.com/*":"Google Meet","https://trello.com/":"Trello","https://www.figma.com/*":"Figma","https://www.linkedin.com/*":"Linkedin","https://www.notion.so/*":"Notion"}},expirationTs:1691705651595};var KA=function(){const e=tn(),[t,i,n]=jS((e=>[e.sessions.companionPreviewModalSession,KS(e),WA(e)])),[a,o]=(0,r.useState)(!1),[s,u]=(0,r.useState)(!1),c=jS(FS),{isOnEligibleURL:p,currentSiteTitle:l}=(()=>{const e=jS((e=>e.user)),t=jS((e=>e.recorderSettings.companion_site_control_settings)),[i,n]=(0,r.useState)(!1),[a,o]=(0,r.useState)(null);return(0,r.useEffect)((()=>{if(!e||!GA||!GA.value)return;const r=function(e){const t=e.value;if(!e.value||!t.activated_links)return null;const r=Object.keys(t.activated_links).find((e=>(0,HA.Z)(e,window.location.href)));return r?t.activated_links[r]:null}(GA);if(!r)return n(!1),void o(null);const i=((e,t)=>!(!t||!e.companion_master_switch?.enabled||e[t]&&!e[t].enabled))(t,r);o(r),n(i)}),[e,t]),{isOnEligibleURL:i,currentSiteTitle:a}})(),d=async()=>{e(gS(null)),o(!0),u(!0);const t=await new Promise((e=>{null!==hv&&e(hv),chrome.runtime.sendMessage({type:Ro.requestTabId},(t=>{hv={...t,title:document?.title,url:window.location.href},e(hv)}))}));if(!t?.tabId)return;var r;await(r=t,new Promise((e=>{chrome.runtime.sendMessage({type:Ro.activateRecorder,tabRef:r},e)})));const i=new Date,n=Math.max(0,300-(Date.now()-i.getTime()));setTimeout((()=>{o(!1)}),n),e(Bo(un)),e(qS(!0)),dv("Extension Activated",{recording_feature:"companion"})};return!c&&p&&i!==cn&&n?r.createElement(r.Fragment,null,r.createElement(fA,{recordingRequested:a,startRecording:d,currentSiteTitle:l}),r.createElement(FA,{isOpen:s&&Boolean(t),onClose:()=>{u(!1)},startRecording:()=>Promise.resolve(d()),companionPreviewModalSession:t})):null};const $A=56,VA=2147482644,QA=N`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(15deg);
  }
  75% {
    transform: rotate(-15deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;var ZA=$.div`
  font-family: circular, Helvetica, sans-serif;

  .companion-drag-drop {
    /*
    The following applies style when the
    companion is on either the top or the bottom
      v   v   v   v
      ┌════════════┐
      ┃            ┃
      ┃            ┃
      ┃            ┃
      ╘════════════┘
      ^   ^   ^   ^
  */
    &.anchor-bottom,
    &.anchor-top {
      .companion-anchor {
        margin: 0 ${14.5}px;
        width: ${27}px;
        height: ${8}px;
      }

      .companion-grip {
        transform: rotate(0deg);

        margin-right: ${18}px;
        margin-left: ${18}px;
      }
    }

    /*
    The following applies style when the
    companion is on either the left or the right
      ┌────────────┐
    > ║            ║ <
    > ║            ║ <
    > ║            ║ <
      ╘────────────┘
  */
    &.anchor-left,
    &.anchor-right {
      .companion-anchor {
        margin: ${14.5}px 0;
        width: ${8}px;
        height: ${27}px;
      }

      .companion-grip {
        transform: rotate(90deg);

        margin-top: ${18}px;
        margin-bottom: ${18}px;
      }
    }

    /*
    The following applies style when the
    companion is on just the top
      V   V   V   V
      ┌────────────┐
      ┃            ┃
      ┃            ┃
      ┃            ┃
      ╘────────────┘
  */
    &.anchor-top {
      .companion-container {
        top: 0;
        flex-direction: column;
      }
      .companion-anchor {
        top: 0;

        border-radius: 0 0 ${8}px ${8}px;
      }
      &.top-right {
        .companion-container {
          align-items: flex-end;
        }
      }
    }

    /*
    The following applies style when the
    companion is on just the bottom
      ┌────────────┐
      ┃            ┃
      ┃            ┃
      ┃            ┃
      ╘────────────┘
      ^   ^   ^   ^
  */
    &.anchor-bottom {
      .companion-container {
        bottom: 0;
        flex-direction: column-reverse;
      }
      .companion-anchor {
        bottom: 0;

        border-radius: ${8}px ${8}px 0 0;
      }
      &.bottom-right {
        .companion-container {
          align-items: flex-end;
        }
      }
    }

    /*
    The following applies style when the
    companion is on the left
      ┌────────────┐
    > ║            ║
    > ║            ║
    > ║            ║
      ╘────────────┘
  */
    &.anchor-left {
      .companion-container {
        left: 0;
        flex-direction: row;
      }
      .companion-anchor {
        left: 0;

        border-radius: 0 ${8}px ${8}px 0;
      }
    }

    /*
    The following applies style when the
    companion is on the right
      ┌────────────┐
      ║            ║ <
      ║            ║ <
      ║            ║ <
      ╘────────────┘
  */
    &.anchor-right {
      .companion-container {
        right: 0;
        flex-direction: row-reverse;
      }
      .companion-anchor {
        right: 0;

        border-radius: ${8}px 0 0 ${8}px;
      }
    }

    /*
      v v v
      ╔═════───────┐
   >  ║ TOP ┆ TOP  ┃
   >  ║ LEF ┆ RIG  ┃
      ║┄┄┄┄┄┆┄┄┄┄┄┄┃
   >  ║ BOT ┆ BOT  ┃
   >  ║ LEF ┆ RIG  ┃
      ╘═════───────┘
      ^ ^ ^
  */
    &.top-left,
    &.bottom-left {
      .companion-container {
        .companion-fab:hover {
          .companion-fab-label {
            left: 0;
          }

          .companion-loading-icon,
          .companion-icon {
            top: 0;
            left: 0;
          }
          &:hover {
            .companion-fab-label {
              padding-right: var(--lns-space-medium);
              padding-left: ${$A}px;
            }
          }
        }
      }
    }

    /*
              v v v
      ┏───────═════╗
      ┃ TOP ┆ TOP  ║ <
      ┃ LEF ┆ RIG  ║ <
      ┃┄┄┄┄┄┆┄┄┄┄┄┄║ <
      ┃ BOT ┆ BOT  ║ <
      ┃ LEF ┆ RIG  ║ <
      ┗───────═════╝
              ^ ^ ^
  */
    &.top-right,
    &.bottom-right {
      .companion-container {
        .companion-fab {
          .companion-fab-label {
            right: 0;
          }

          .companion-loading-icon,
          .companion-icon {
            bottom: 0;
            right: 0;
          }

          &:hover {
            .companion-fab-label {
              padding-right: ${$A}px;
              padding-left: var(--lns-space-medium);
            }
          }
        }
      }
    }

    &.dragging {
      .companion-anchor-frame {
        display: block;
      }

      .companion-container {
        transition: none;

        margin: 0;
        width: ${$A}px !important;
        height: ${56}px !important;
        padding: 0;

        user-select: none;

        .companion-grip {
          display: none;
          opacity: 0;

          width: 0;
          height: 0;
        }

        .companion-fab {
          cursor: grabbing;

          .companion-fab-menu {
            display: none;
          }
          .companion-icon {
            transform: scale(1.18);

            .companion-icon-no-hover {
              display: none;
            }

            .companion-icon-hover {
              animation: ${QA};
              animation-duration: 0.3s;
              animation-timing-function: linear;
              animation-iteration-count: infinite;
            }
          }
          .companion-fab-label {
            display: none;
          }
        }
      }
    }

    .companion-anchor-frame {
      position: fixed;
      z-index: ${VA};
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      display: none;

      border: ${8}px solid var(--lns-color-focusRing);
      box-sizing: border-box;

      .companion-anchor {
        position: fixed;

        background-color: var(--lns-color-primaryHover);
      }
    }

    .companion-container {
      position: fixed;
      z-index: ${VA};
      align-items: flex-start;
      flex-direction: row;

      display: flex;

      transition: all 0.3s ease;

      @media print {
        display: none !important;
      }

      &.invisible {
        display: none;
      }

      .companion-grip {
        align-items: center;
        flex-direction: column;
        justify-content: center;

        display: flex;

        transition-timing-function: ease;
        transition-duration: 0.3s;
        transition-property: width, height;

        width: ${20}px;
        height: ${20}px;
        padding: ${3}px 0;

        cursor: pointer;

        &:hover {
          span {
            color: var(--lns-color-primaryHover);
          }
        }

        span {
          align-items: center;
          justify-content: center;

          display: flex;

          height: ${7}px;

          color: var(--lns-color-primary);
        }
      }

      .companion-fab {
        position: relative;

        height: ${$A}px;

        cursor: pointer;

        user-select: none;

        .companion-loading-icon {
          border-radius: ${$A}px;
          width: ${$A}px;
          height: ${56}px;

          background: var(--lns-color-blurple);
          > * {
            // selector finds the related loading spinner span
            display: inline;
          }
        }

        .companion-icon {
          align-items: center;
          justify-content: center;

          display: grid;

          transition: transform 0.3s ease-in-out;

          border-radius: ${$A}px;
          width: ${$A}px;
          height: ${56}px;

          background: var(--lns-color-blurple);

          .companion-icon-hover,
          .companion-icon-no-hover {
            transition: transform 0.3s ease-in-out;

            grid-column: 1;
            grid-row: 1;
            backface-visibility: hidden;
          }

          .companion-icon-no-hover {
            z-index: 1;

            transform: rotateX(0deg);
          }

          .companion-icon-hover {
            transform: rotateX(180deg);
          }
        }

        .companion-loading-icon,
        .companion-icon {
          position: absolute;
        }
        .companion-fab-label {
          position: absolute;
          z-index: -1;
          top: 0;
          align-items: center;
          justify-content: center;

          display: flex;

          overflow: hidden;

          transition-timing-function: ease;
          transition-duration: 0.3s;
          transition-property: color, width;

          box-shadow: var(--lns-shadow-large);
          border-radius: ${$A}px;
          width: ${$A}px;
          height: ${56}px;

          background-color: var(--lns-color-primary);

          font-size: var(--lns-fontSize-medium);
          font-weight: var(--lns-fontWeight-bold);
          font-family: circular, Helvetica, sans-serif;
          color: transparent;

          text-overflow: clip;
          white-space: nowrap;
        }

        &:hover,
        &:active {
          .companion-icon {
            .companion-icon-no-hover {
              transform: rotateX(180deg);
            }
            .companion-icon-hover {
              transform: rotateX(0deg);
            }
          }
        }

        .companion-fab-main-button-and-label:hover {
          .companion-icon,
          .companion-loading-icon,
          .companion-fab-label {
            background-color: var(--lns-color-primaryHover);
          }
        }

        &:hover {
          .companion-fab-label {
            width: 165px;

            color: white;
          }
        }
      }
    }
  }

  // Menu styles
  .companion-fab {
    z-index: ${VA};
    flex-direction: column;

    display: flex;

    transition: left 0.3s ease;

    .companion-fab-menu {
      // to handle the animation of the menu items
      // the flex-direction is set to the reverse and the
      // menu items are done in reverse to match
      flex-direction: column-reverse;

      opacity: 0;

      height: 0;

      .companion-fab-menu-item {
        align-items: center;

        display: flex;
        opacity: 0;
        transform: scale(0);

        transition: all ${"0.2s"} ease;

        height: ${56}px;

        .companion-fab-menu-item-tooltip {
          align-items: center;

          display: none;

          margin-left: ${4}px;
          border-radius: 6px;
          padding: 7px 12px;

          background: var(--lns-color-grey8);

          font-size: 12px;
          color: var(--lns-color-grey1);
        }

        .companion-fab-menu-item-button {
          position: relative;
          align-items: center;
          justify-content: center;

          display: flex;

          margin: ${4}px;
          border-radius: 44px;
          width: ${40}px;
          height: ${40}px;

          background-color: var(--lns-color-primary);

          &:hover {
            background-color: var(--lns-color-primaryHover);
          }

          &.button-red {
            background-color: var(--lns-themeLight-color-danger);
            &:hover {
              background-color: var(--lns-themeLight-color-dangerHover);
            }
          }
        }

        &:hover {
          .companion-fab-menu-item-tooltip {
            display: block;
          }
        }
      }
    }

    &:hover {
      .companion-fab-menu {
        display: flex;
        opacity: 1;

        height: ${152}px;

        .top-left &,
        .top-right & {
          // need to configure menu with padding and margin top
          // otherwise there's a flashing effect in certain hover areas
          margin-top: 0;
          padding-top: var(--lns-space-small);
        }

        .bottom-left &,
        .bottom-right & {
          margin-bottom: 0;
          padding-bottom: var(--lns-space-small);
        }

        .companion-fab-menu-item {
          align-items: center;

          opacity: 1;
          transform: scale(1);
        }
      }
    }
  }

  .top-left .companion-fab,
  .bottom-left .companion-fab {
    align-items: flex-start;
  }

  .top-right .companion-fab,
  .bottom-right .companion-fab {
    align-items: flex-end;
  }

  .top-left .companion-fab-menu,
  .top-right .companion-fab-menu {
    // need to configure menu with padding and margin top
    // otherwise there's a flashing effect in certain hover areas
    margin-top: 0;
    padding-top: 8px;
  }

  .top-left .companion-fab-menu,
  .bottom-left .companion-fab-menu {
    align-items: flex-start;

    margin-left: ${4}px;
  }

  .top-right .companion-fab-menu,
  .bottom-right .companion-fab-menu {
    align-items: flex-end;

    margin-right: ${4}px;
    .companion-fab-menu-item {
      flex-direction: row-reverse;

      display: flex;
    }
  }

  .bottom-left .companion-fab-menu,
  .bottom-right .companion-fab-menu {
    position: relative;
    top: ${-152}px;
  }

  .top-left .companion-fab-menu,
  .top-right .companion-fab-menu {
    position: relative;
    top: ${56}px;
  }
`,YA=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(e){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),XA=Math.abs,JA=String.fromCharCode,eC=Object.assign;function tC(e){return e.trim()}function rC(e,t,r){return e.replace(t,r)}function iC(e,t){return e.indexOf(t)}function nC(e,t){return 0|e.charCodeAt(t)}function aC(e,t,r){return e.slice(t,r)}function oC(e){return e.length}function sC(e){return e.length}function uC(e,t){return t.push(e),e}var cC=1,pC=1,lC=0,dC=0,yC=0,bC="";function hC(e,t,r,i,n,a,o){return{value:e,root:t,parent:r,type:i,props:n,children:a,line:cC,column:pC,length:o,return:""}}function gC(e,t){return eC(hC("",null,null,"",null,null,0),e,{length:-e.length},t)}function fC(){return yC=dC>0?nC(bC,--dC):0,pC--,10===yC&&(pC=1,cC--),yC}function mC(){return yC=dC<lC?nC(bC,dC++):0,pC++,10===yC&&(pC=1,cC++),yC}function SC(){return nC(bC,dC)}function vC(){return dC}function AC(e,t){return aC(bC,e,t)}function CC(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function TC(e){return cC=pC=1,lC=oC(bC=e),dC=0,[]}function MC(e){return bC="",e}function _C(e){return tC(AC(dC-1,wC(91===e?e+2:40===e?e+1:e)))}function RC(e){for(;(yC=SC())&&yC<33;)mC();return CC(e)>2||CC(yC)>3?"":" "}function OC(e,t){for(;--t&&mC()&&!(yC<48||yC>102||yC>57&&yC<65||yC>70&&yC<97););return AC(e,vC()+(t<6&&32==SC()&&32==mC()))}function wC(e){for(;mC();)switch(yC){case e:return dC;case 34:case 39:34!==e&&39!==e&&wC(yC);break;case 40:41===e&&wC(e);break;case 92:mC()}return dC}function PC(e,t){for(;mC()&&e+yC!==57&&(e+yC!==84||47!==SC()););return"/*"+AC(t,dC-1)+"*"+JA(47===e?e:mC())}function jC(e){for(;!CC(SC());)mC();return AC(e,dC)}var zC="-ms-",xC="-moz-",IC="-webkit-",EC="comm",NC="rule",kC="decl",DC="@keyframes";function UC(e,t){for(var r="",i=sC(e),n=0;n<i;n++)r+=t(e[n],n,e,t)||"";return r}function LC(e,t,r,i){switch(e.type){case"@import":case kC:return e.return=e.return||e.value;case EC:return"";case DC:return e.return=e.value+"{"+UC(e.children,i)+"}";case NC:e.value=e.props.join(",")}return oC(r=UC(e.children,i))?e.return=e.value+"{"+r+"}":""}function qC(e,t){switch(function(e,t){return(((t<<2^nC(e,0))<<2^nC(e,1))<<2^nC(e,2))<<2^nC(e,3)}(e,t)){case 5103:return IC+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return IC+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return IC+e+xC+e+zC+e+e;case 6828:case 4268:return IC+e+zC+e+e;case 6165:return IC+e+zC+"flex-"+e+e;case 5187:return IC+e+rC(e,/(\w+).+(:[^]+)/,IC+"box-$1$2"+zC+"flex-$1$2")+e;case 5443:return IC+e+zC+"flex-item-"+rC(e,/flex-|-self/,"")+e;case 4675:return IC+e+zC+"flex-line-pack"+rC(e,/align-content|flex-|-self/,"")+e;case 5548:return IC+e+zC+rC(e,"shrink","negative")+e;case 5292:return IC+e+zC+rC(e,"basis","preferred-size")+e;case 6060:return IC+"box-"+rC(e,"-grow","")+IC+e+zC+rC(e,"grow","positive")+e;case 4554:return IC+rC(e,/([^-])(transform)/g,"$1"+IC+"$2")+e;case 6187:return rC(rC(rC(e,/(zoom-|grab)/,IC+"$1"),/(image-set)/,IC+"$1"),e,"")+e;case 5495:case 3959:return rC(e,/(image-set\([^]*)/,IC+"$1$`$1");case 4968:return rC(rC(e,/(.+:)(flex-)?(.*)/,IC+"box-pack:$3"+zC+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+IC+e+e;case 4095:case 3583:case 4068:case 2532:return rC(e,/(.+)-inline(.+)/,IC+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(oC(e)-1-t>6)switch(nC(e,t+1)){case 109:if(45!==nC(e,t+4))break;case 102:return rC(e,/(.+:)(.+)-([^]+)/,"$1"+IC+"$2-$3$1"+xC+(108==nC(e,t+3)?"$3":"$2-$3"))+e;case 115:return~iC(e,"stretch")?qC(rC(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==nC(e,t+1))break;case 6444:switch(nC(e,oC(e)-3-(~iC(e,"!important")&&10))){case 107:return rC(e,":",":"+IC)+e;case 101:return rC(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+IC+(45===nC(e,14)?"inline-":"")+"box$3$1"+IC+"$2$3$1"+zC+"$2box$3")+e}break;case 5936:switch(nC(e,t+11)){case 114:return IC+e+zC+rC(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return IC+e+zC+rC(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return IC+e+zC+rC(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return IC+e+zC+e+e}return e}function BC(e){return MC(FC("",null,null,null,[""],e=TC(e),0,[0],e))}function FC(e,t,r,i,n,a,o,s,u){for(var c=0,p=0,l=o,d=0,y=0,b=0,h=1,g=1,f=1,m=0,S="",v=n,A=a,C=i,T=S;g;)switch(b=m,m=mC()){case 40:if(108!=b&&58==T.charCodeAt(l-1)){-1!=iC(T+=rC(_C(m),"&","&\f"),"&\f")&&(f=-1);break}case 34:case 39:case 91:T+=_C(m);break;case 9:case 10:case 13:case 32:T+=RC(b);break;case 92:T+=OC(vC()-1,7);continue;case 47:switch(SC()){case 42:case 47:uC(WC(PC(mC(),vC()),t,r),u);break;default:T+="/"}break;case 123*h:s[c++]=oC(T)*f;case 125*h:case 59:case 0:switch(m){case 0:case 125:g=0;case 59+p:y>0&&oC(T)-l&&uC(y>32?GC(T+";",i,r,l-1):GC(rC(T," ","")+";",i,r,l-2),u);break;case 59:T+=";";default:if(uC(C=HC(T,t,r,c,p,n,s,S,v=[],A=[],l),a),123===m)if(0===p)FC(T,t,C,C,v,a,l,s,A);else switch(d){case 100:case 109:case 115:FC(e,C,C,i&&uC(HC(e,C,C,0,0,n,s,S,n,v=[],l),A),n,A,l,s,i?v:A);break;default:FC(T,C,C,C,[""],A,0,s,A)}}c=p=y=0,h=f=1,S=T="",l=o;break;case 58:l=1+oC(T),y=b;default:if(h<1)if(123==m)--h;else if(125==m&&0==h++&&125==fC())continue;switch(T+=JA(m),m*h){case 38:f=p>0?1:(T+="\f",-1);break;case 44:s[c++]=(oC(T)-1)*f,f=1;break;case 64:45===SC()&&(T+=_C(mC())),d=SC(),p=l=oC(S=T+=jC(vC())),m++;break;case 45:45===b&&2==oC(T)&&(h=0)}}return a}function HC(e,t,r,i,n,a,o,s,u,c,p){for(var l=n-1,d=0===n?a:[""],y=sC(d),b=0,h=0,g=0;b<i;++b)for(var f=0,m=aC(e,l+1,l=XA(h=o[b])),S=e;f<y;++f)(S=tC(h>0?d[f]+" "+m:rC(m,/&\f/g,d[f])))&&(u[g++]=S);return hC(e,t,r,0===n?NC:s,u,c,p)}function WC(e,t,r){return hC(e,t,r,EC,JA(yC),aC(e,2,-2),0)}function GC(e,t,r,i){return hC(e,t,r,kC,aC(e,0,i),aC(e,i+1,-1),i)}n(55246);var KC=function(e,t,r){for(var i=0,n=0;i=n,n=SC(),38===i&&12===n&&(t[r]=1),!CC(n);)mC();return AC(e,dC)},$C=new WeakMap,VC=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||$C.get(r))&&!i){$C.set(e,!0);for(var n=[],a=function(e,t){return MC(function(e,t){var r=-1,i=44;do{switch(CC(i)){case 0:38===i&&12===SC()&&(t[r]=1),e[r]+=KC(dC-1,t,r);break;case 2:e[r]+=_C(i);break;case 4:if(44===i){e[++r]=58===SC()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=JA(i)}}while(i=mC());return e}(TC(e),t))}(t,n),o=r.props,s=0,u=0;s<a.length;s++)for(var c=0;c<o.length;c++,u++)e.props[u]=n[s]?a[s].replace(/&\f/g,o[c]):o[c]+" "+a[s]}}},QC=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},ZC=[function(e,t,r,i){if(e.length>-1&&!e.return)switch(e.type){case kC:e.return=qC(e.value,e.length);break;case DC:return UC([gC(e,{value:rC(e.value,"@","@"+IC)})],i);case NC:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=/(::plac\w+|:read-\w+)/.exec(e))?e[0]:e}(t)){case":read-only":case":read-write":return UC([gC(e,{props:[rC(t,/:(read-\w+)/,":-moz-$1")]})],i);case"::placeholder":return UC([gC(e,{props:[rC(t,/:(plac\w+)/,":"+IC+"input-$1")]}),gC(e,{props:[rC(t,/:(plac\w+)/,":-moz-$1")]}),gC(e,{props:[rC(t,/:(plac\w+)/,zC+"input-$1")]})],i)}return""}))}}],YC=n(23698),XC=n.n(YC),JC="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function eT(e,t){return e(t={exports:{}},t.exports),t.exports}var tT=eT((function(e){!function(t){var r=function(e,t,i){if(!u(t)||p(t)||l(t)||d(t)||s(t))return t;var n,a=0,o=0;if(c(t))for(n=[],o=t.length;a<o;a++)n.push(r(e,t[a],i));else for(var y in n={},t)Object.prototype.hasOwnProperty.call(t,y)&&(n[e(y,i)]=r(e,t[y],i));return n},i=function(e){return y(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1)},n=function(e){var t=i(e);return t.substr(0,1).toUpperCase()+t.substr(1)},a=function(e,t){return function(e,t){var r=(t=t||{}).separator||"_",i=t.split||/(?=[A-Z])/;return e.split(i).join(r)}(e,t).toLowerCase()},o=Object.prototype.toString,s=function(e){return"function"==typeof e},u=function(e){return e===Object(e)},c=function(e){return"[object Array]"==o.call(e)},p=function(e){return"[object Date]"==o.call(e)},l=function(e){return"[object RegExp]"==o.call(e)},d=function(e){return"[object Boolean]"==o.call(e)},y=function(e){return(e-=0)==e},b=function(e,t){var r=t&&"process"in t?t.process:t;return"function"!=typeof r?e:function(t,i){return r(t,e,i)}},h={camelize:i,decamelize:a,pascalize:n,depascalize:a,camelizeKeys:function(e,t){return r(b(i,t),e)},decamelizeKeys:function(e,t){return r(b(a,t),e,t)},pascalizeKeys:function(e,t){return r(b(n,t),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=h:t.humps=h}(JC)})).decamelize,rT=eT((function(e){function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},t.apply(this,arguments)}e.exports=t})),iT=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i},nT=(0,r.createContext)(null);function aT(e){var t=e.root,r=e.children;return(0,i.createPortal)(r,t)}aT.propTypes={root:XC().object.isRequired,children:XC().node},aT.defaultProps={children:null};var oT=new Map,sT=function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"core",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e.children};return new Proxy(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{get:function(i,n){var a=tT(n,{separator:"-"}),o="".concat(e,"-").concat(a);return oT.has(o)||oT.set(o,function(e){var t=(0,r.forwardRef)((function(t,i){var n,a,o=t.mode,s=t.delegatesFocus,u=t.styleSheets,c=t.ssr,p=t.children,l=function(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(t,["mode","delegatesFocus","styleSheets","ssr","children"]),d=(a=(0,r.useRef)((n=i)&&n.current),(0,r.useEffect)((function(){n&&(n.current=a.current)}),[n]),a),y=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],i=!0,n=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);i=!0);}catch(e){n=!0,a=e}finally{try{i||null==s.return||s.return()}finally{if(n)throw a}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return iT(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?iT(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,r.useState)(null),2),b=y[0],h=y[1],g="node_".concat(o).concat(s);return(0,r.useEffect)((function(){if(d.current)try{if("function"==typeof i&&i(d.current),c){var e=d.current.shadowRoot;return void h(e)}var t=d.current.attachShadow({mode:o,delegatesFocus:s});u.length>0&&(t.adoptedStyleSheets=u),h(t)}catch(e){!function(e){var t=e.error,r=e.styleSheets,i=e.root;if("NotSupportedError"!==t.name)throw t;r.length>0&&(i.adoptedStyleSheets=r)}({error:e,styleSheets:u,root:b})}}),[i,d,u]),r.createElement(r.Fragment,null,r.createElement(e.tag,rT({key:g,ref:d},l),(b||c)&&r.createElement(nT.Provider,{value:b},c?r.createElement("template",{shadowroot:"open"},e.render({root:b,ssr:c,children:p})):r.createElement(aT,{root:b},e.render({root:b,ssr:c,children:p})))))}));return t.propTypes={mode:XC().oneOf(["open","closed"]),delegatesFocus:XC().bool,styleSheets:XC().arrayOf(XC().instanceOf(globalThis.CSSStyleSheet)),ssr:XC().bool,children:XC().node},t.defaultProps={mode:"open",delegatesFocus:!1,styleSheets:[],ssr:!1,children:null},t}({tag:a,render:t})),oT.get(o)}})}(),uT=sT;var cT=n(54333);function pT(e){return function(t){var r=t.dispatch,i=t.getState;return function(t){return function(n){return"function"==typeof n?n(r,i,e):t(n)}}}}var lT=pT();lT.withExtraArgument=pT;var dT=lT;const yT=({children:e})=>{const[t,i]=r.useState(null);return r.useEffect((()=>{(async()=>{const e=new cT.yh({portName:"LOOM_MAILMAN_MV3"}),t=[dT],r=(0,cT.md)(e,...t);try{return await r.ready(),r}catch(e){return tm.error(e,{message:"webextStoreProvider: cannot connect proxy store to sw store"}),Promise.reject(e)}})().then((e=>{i(e)}))}),[]),t?r.createElement(Zi,{store:t},e):null},bT=$.div``,hT=r.createContext(null);var gT=({uniqueKey:e,children:t})=>{const[i,n]=r.useState(null),a=r.useRef(null),{withDarkMode:o}=function(){const e=tn(),t=on(LS);return{updateCurrentTheme:(0,r.useCallback)((t=>{const r=t?Rm:"theme-light";e(Vm(r)),dv("Changed theme",{theme:r})}),[e]),withDarkMode:t===Rm||null===t&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}}(),s=`inner-shadow-${e}`,u=`tooltip-mount-layer-${e}`,c=`shadow-host-${e}`;return r.createElement(uT.section,{id:c},r.createElement(yT,null,r.createElement("div",{id:s,ref:function(t){if(t&&!i){const r=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var i,n,a=e.stylisPlugins||ZC,o={},s=[];i=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)o[t[r]]=!0;s.push(e)}));var u,c,p,l,d=[LC,(l=function(e){u.insert(e)},function(e){e.root||(e=e.return)&&l(e)})],y=(c=[VC,QC].concat(a,d),p=sC(c),function(e,t,r,i){for(var n="",a=0;a<p;a++)n+=c[a](e,t,r,i)||"";return n});n=function(e,t,r,i){u=r,UC(BC(e?e+"{"+t.styles+"}":t.styles),y),i&&(b.inserted[t.name]=!0)};var b={key:t,sheet:new YA({key:t,container:i,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:n};return b.sheet.hydrate(s),b}({key:e,container:t});n(r)}}},r.createElement(bT,{className:o?Rm:void 0,id:u,ref:a}),r.createElement(hT.Provider,{value:a.current},i&&r.createElement(w,{value:i},r.createElement("style",null,`\n            ${$t(`#${s}`,`#${s}`)}\n            #${s} {\n              --lns-unit: 8px;\n              all: initial;\n              font-family: circular, Helvetica, sans-serif;\n              color: var(--lns-color-body);\n            }\n            #${u} {\n              z-index: 2147483646;\n              position: relative;\n\n              color: var(--lns-color-body);\n              pointer-events: auto;\n            }\n          `),t)))))};const fT=()=>(function(){const e=document.querySelector("#lo-companion-container");e&&e.setAttribute("style","display: none;")}(),r.createElement(KA,null)),mT=document.createElement("div");mT.id="loom-companion-mv3",mT.setAttribute("ext-id",chrome.runtime.id),document.body.appendChild(mT),(0,i.render)(r.createElement(yT,null,r.createElement(gT,{uniqueKey:"companion"},r.createElement(r.Fragment,null,r.createElement(Hi,null),r.createElement(ZA,null,r.createElement(fT,null))))),mT)}()}();
//# sourceMappingURL=companionBubble.js.map
//# debugId=789003c0-5201-5925-8256-cfce5856a704