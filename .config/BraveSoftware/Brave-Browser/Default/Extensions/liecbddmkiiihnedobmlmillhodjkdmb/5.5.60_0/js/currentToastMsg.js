/*! For license information please see currentToastMsg.js.LICENSE.txt */

!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="7ea1f128-5ed2-5186-8ada-56df5aedc9bc")}catch(e){}}();
  display: ${e=>e.isInline?"inline":"block"};
  ${e=>!e.sizeMinMax&&ht(e.size)};
  ${e=>mt(e.fontWeight)};
  ${e=>e.color&&`color: ${nt(e.color)}`};
  ${e=>e.isDimmed&&"opacity: 0.6"};
  ${e=>e.alignment&&`text-align: ${e.alignment}`};
  ${e=>e.hasEllipsis&&!e.ellipsisLines&&"\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  "};
  ${e=>e.hasEllipsis&&e.ellipsisLines&&`\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: ${e.ellipsisLines};\n  `};
  ${e=>!e.hasEllipsis&&e.noWrap&&"white-space: nowrap; overflow: hidden;"};
  ${e=>e.sizeMinMax&&`\n    min-height: 0vw;\n    font-size: clamp(\n      ${It(e.sizeMinMax[0])},\n      ${Et(xt(e.sizeMinMax[0]),xt(e.sizeMinMax[1]),496,1200)},\n      ${It(e.sizeMinMax[1])}\n    );\n\n    line-height: clamp(\n      ${Nt(e.sizeMinMax[0])}px,\n      ${Et(Nt(e.sizeMinMax[0]),Nt(e.sizeMinMax[1]),496,1200)},\n      ${Nt(e.sizeMinMax[1])}px\n    );\n  `}
`,Dt=e=>{var t=e,{children:i,size:n="body-md",color:a,isInline:o,isDimmed:s,fontWeight:u="book",hasEllipsis:c,ellipsisLines:p,noWrap:l,variant:d,htmlTag:y="span",alignment:b,sizeMinMax:g}=t,h=Ke(t,["children","size","color","isInline","isDimmed","fontWeight","hasEllipsis","ellipsisLines","noWrap","variant","htmlTag","alignment","sizeMinMax"]);return s&&ke.warn("Lens: Text prop 'isDimmed' is deprecated, use color=\"bodyDimmed\" instead."),r.createElement(kt,We({size:d?zt[d].size:n,color:a,isInline:o,isDimmed:s,fontWeight:d?zt[d].fontWeight:u,hasEllipsis:c,ellipsisLines:p,noWrap:l,variant:d,as:y,alignment:b,sizeMinMax:g},h),i)},Ut=["top","bottom","left","right"],qt=We({0:"0"},Pt),Lt=We({0:"0",auto:"auto"},Pt),Ft=it.map((e=>({selector:"c",modifier:e,declarations:[{property:"color",value:`var(--lns-color-${e})`}]}))),Ht=it.map((e=>({selector:"bgc",modifier:e,declarations:[{property:"background-color",value:`var(--lns-color-${e})`}]}))),Bt=Object.keys(Tt).map((e=>({selector:"text",modifier:e,declarations:[{property:"font-size",value:`var(--lns-fontSize-${e})`},{property:"line-height",value:`var(--lns-lineHeight-${e})`}]}))),Wt=Object.keys(_t).map((e=>({selector:"weight",modifier:e,declarations:[{property:"font-weight",value:`var(--lns-fontWeight-${e})`}]}))),Gt=Object.entries(zt).map((([e,t])=>({selector:"text",modifier:e,declarations:[{property:"font-size",value:`var(--lns-fontSize-${t.size})`},{property:"line-height",value:`var(--lns-lineHeight-${t.size})`},{property:"font-weight",value:`var(--lns-fontWeight-${t.fontWeight})`}]}))),Kt=["left","right","center"].map((e=>({selector:"text",modifier:e,declarations:[{property:"text-align",value:e}]}))),$t=Object.keys(Ot).map((e=>({selector:"shadow",modifier:e,declarations:[{property:"box-shadow",value:`var(--lns-shadow-${e})`}]}))),Qt=(e,t,r,i)=>{const n=[];return t.map((t=>{const a=i?`${e.charAt(0)}${t.charAt(0)}`:t;Object.keys(r).map((r=>{n.push({selector:a,property:`${e}${t&&e?`-${t}`:t||""}`,modifier:r,value:"auto"===r||"0"===r?r:`var(--lns-space-${r})`})}))})),n},Vt=[...Ft,...$t,...Object.keys(Rt).map((e=>({selector:"radius",modifier:e,declarations:[{property:"border-radius",value:`var(--lns-radius-${e})`}]}))),...Ht,...Object.values(Qt("margin",["",...Ut],Lt,"shortSides")).map((e=>({selector:e.selector,modifier:e.modifier,declarations:[{property:e.property,value:e.value}]}))),...Object.values(Qt("margin",["x","y"],Lt,"shortSides")).map((e=>({selector:e.selector,modifier:e.modifier,declarations:[{property:"margin-x"===e.property?"margin-left":"margin-top",value:e.value},{property:"margin-x"===e.property?"margin-right":"margin-bottom",value:e.value}]}))),...Object.values(Qt("padding",["",...Ut],qt,"shortSides")).map((e=>({selector:e.selector,modifier:e.modifier,declarations:[{property:e.property,value:e.value}]}))),...Object.values(Qt("padding",["x","y"],qt,"shortSides")).map((e=>({selector:e.selector,modifier:e.modifier,declarations:[{property:"padding-x"===e.property?"padding-left":"padding-top",value:e.value},{property:"padding-x"===e.property?"padding-right":"padding-bottom",value:e.value}]}))),...Bt,...Wt,...Gt,...Kt,...["",...Ut].map((e=>({selector:"border"+e.replace(e.charAt(0),e.charAt(0).toUpperCase()),declarations:[{property:`border${e&&`-${e}`}`,value:"1px solid var(--lns-color-border)"}]}))),...["inline","block","flex","inlineBlock","inlineFlex","none"].map((e=>({selector:e,declarations:[{property:"display",value:Ct(e)}]}))),{selector:"flexWrap",declarations:[{property:"flex-wrap",value:"wrap"}]},...["column","row"].map((e=>({selector:"flexDirection",modifier:e,declarations:[{property:"flex-direction",value:e}]}))),...["stretch","center","baseline","flexStart","flexEnd","selfStart","selfEnd"].map((e=>({selector:"items",modifier:e,declarations:[{property:"align-items",value:Ct(e)}]}))),...["flexStart","flexEnd","center","spaceBetween","spaceAround","spaceEvenly"].map((e=>({selector:"justify",modifier:e,declarations:[{property:"justify-content",value:Ct(e)}]}))),...["0","1"].map((e=>({selector:"grow",modifier:e,declarations:[{property:"flex-grow",value:e}]}))),...["0","1"].map((e=>({selector:"shrink",modifier:e,declarations:[{property:"flex-shrink",value:e}]}))),...["auto","flexStart","flexEnd","center","baseline","stretch"].map((e=>({selector:"self",modifier:e,declarations:[{property:"align-self",value:Ct(e)}]}))),...["hidden","auto"].map((e=>({selector:"overflow",modifier:e,declarations:[{property:"overflow",value:e}]}))),...["relative","absolute","sticky","fixed"].map((e=>({selector:e,declarations:[{property:"position",value:e}]}))),...Object.values(Qt("",Ut,Lt)).map((e=>({selector:e.selector,modifier:e.modifier,declarations:[{property:e.property,value:e.value}]}))),...["auto","full","0"].map((e=>({selector:"width",modifier:e,declarations:[{property:"width",value:"full"===e?"100%":e}]}))),{selector:"minWidth",modifier:"0",declarations:[{property:"min-width",value:"0"}]},...["auto","full","0"].map((e=>({selector:"height",modifier:e,declarations:[{property:"height",value:"full"===e?"100%":e}]}))),{selector:"ellipsis",declarations:[{property:"overflow",value:"hidden"},{property:"text-overflow",value:"ellipsis"},{property:"white-space",value:"nowrap"}]},{selector:"srOnly",declarations:[{property:"position",value:"absolute"},{property:"width",value:"1px"},{property:"height",value:"1px"},{property:"padding",value:"0"},{property:"margin",value:"-1px"},{property:"overflow",value:"hidden"},{property:"clip",value:"rect(0, 0, 0, 0)"},{property:"white-space",value:"nowrap"},{property:"border-width",value:"0"}]}],Zt=(e,t)=>{const r=[],i=t?`${t}-`:"";return e.map((e=>{const t=[];e.declarations.map((e=>{t.push(`${e.property}:${e.value}`)}));const n=`.${i}${e.selector}${e.modifier?"\\:":""}${e.modifier?e.modifier:""}{${t.join(";")}}`;r.push(n)})),r.join("")},Yt={xs:wt.xsmall,sm:wt.small,md:wt.medium,lg:wt.large},Jt=(e,t)=>{const r={};return Object.entries(t).forEach((([t,i])=>{r["--lns-"+((e?`${e}-`:"")+t)]=i})),r},Xt=Jt(void 0,{unit:Mt/16+"rem"}),er=Jt("fontWeight",_t),tr=Jt(void 0,(()=>{const e={};return Object.entries(Tt).forEach((([t,r])=>{const i={},n=`lineHeight-${t}`;i[`fontSize-${t}`]=at(r.fontSize),i[n]=r.lineHeight,Object.assign(e,i,{})})),e})()),rr=Jt("radius",Rt),ir=Jt("shadow",Ot),nr=Jt(void 0,(()=>{const e={};return Object.entries(Pt).forEach((([t,r])=>{e[`space-${t}`]=at(r)})),e})()),ar=Jt(void 0,{formFieldBorderWidth:"1px",formFieldBorderWidthFocus:"2px",formFieldHeight:at(4.5),formFieldRadius:at(2.25),formFieldHorizontalPadding:at(2),formFieldBorderShadow:"\n    inset 0 0 0 var(--lns-formFieldBorderWidth) var(--lns-color-formFieldBorder)\n  ",formFieldBorderShadowFocus:"\n    inset 0 0 0 var(--lns-formFieldBorderWidthFocus) var(--lns-color-blurple),\n    0 0 0 var(--lns-formFieldBorderWidthFocus) var(--lns-color-focusRing)\n  "}),or=Jt("color",(()=>{const e={};return Object.keys(We(We({},Je),Xe)).forEach((t=>{e[t]=`hsla(${rt[t].h},${rt[t].s}%,${rt[t].l}%,${rt[t].a})`})),e})()),sr=Jt(void 0,(()=>{const e=(e,t)=>Object.keys(e).reduce(((r,i)=>{const n=e[i];return r[`${t}-color-${i}`]=`hsla(${n.h},${n.s}%,${n.l}%,${n.a})`,r}),{});return We(We({},e(tt.light,"themeLight")),e(tt.dark,"themeDark"))})()),ur=[Xt,tr,rr,ir,nr,ar],cr=e=>{let t,r;if("medium"===e)t=at(4),r=at(4);else if("large"===e)t=at(7),r=at(7);else{const i=ot(e);t=i,r=i}return{width:t,height:r,fontSize:`calc(${t} / 1.75)`}},pr=(Q.span`
  display: block;
  color: var(--lns-color-orangeDark);
  background-color: var(--lns-color-background);
  ${ft("full")};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  font-weight: var(--lns-fontWeight-bold);
  width: ${e=>{const{width:t}=cr(e.size);return t}};
  height: ${e=>{const{height:t}=cr(e.size);return t}};
  font-size: ${e=>{const{fontSize:t}=cr(e.size);return t}};
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
`,Q.img`
  max-width: 100%;
  width: ${e=>{const{width:t}=cr(e.size);return t}};
  height: ${e=>{const{height:t}=cr(e.size);return t}};
  font-size: ${e=>{const{fontSize:t}=cr(e.size);return t}};
`,(e=":root",t="body")=>`\n    ${e} {\n      font-size: 100%;\n    }\n    ${t} {\n      font-family: circular, -apple-system, BlinkMacSystemFont, Segoe UI,\n        sans-serif;\n      color: ${nt("body")};\n      ${ht("medium")};\n      font-feature-settings: 'ss08' on;\n    }\n\n    ${t} *,\n    ${t} *:before,\n    ${t} *:after {\n      box-sizing: border-box;\n    }\n\n    ${t} * {\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n      letter-spacing: calc(0.6px - 0.05em);\n    }\n\n    ${((e=":root")=>`\n    ${e||":root"},\n    .theme-light,\n    [data-lens-theme="light"] {\n      ${Object.keys(tt.light).map((e=>`--lns-color-${e}: var(--lns-themeLight-color-${e});`)).join("")}\n    }\n\n    .theme-dark,\n    [data-lens-theme="dark"] {\n      ${Object.keys(tt.dark).map((e=>`--lns-color-${e}: var(--lns-themeDark-color-${e});`)).join("")}\n    }\n  `)(e)}\n\n    ${(e=>{const t=[],r=e||":root";return Object.entries(Object.assign({},er,...ur)).forEach((e=>{t.push(`${e[0]}:${e[1]};`)})),Object.entries(We(We({},or),sr)).forEach((e=>{t.push(`${e[0]}:${e[1]};`)})),`\n    ${r} {\n      ${t.join("")}\n    }\n  `})(e)}\n\n    ${(()=>{const e=[];return e.push(`${Zt(Vt)}`),Object.entries(Yt).map((([t,r])=>{e.push(`@media(min-width:${r}){${Zt(Vt,t)}}`)})),e.join("")})()}\n  `),lr=()=>r.createElement(D,{styles:k(pr())}),dr=3,yr=Q.span`
  display: block;
  color: ${e=>nt(e.color)};

  & > svg,
  & > img {
    display: block;
    ${e=>!e.hasWidthOffset&&st("width",e.size)};
    ${e=>st("height",e.size)};
  }
`,br=e=>{var t=e,{altText:i,icon:n,color:a="body",size:o=dr,hasWidthOffset:s}=t,u=Ke(t,["altText","icon","color","size","hasWidthOffset"]);const c=r.useRef(null),p=dr*Mt;return r.useEffect((()=>{if(!s)return;const e=c.current.querySelector("svg");if(!e)return;const t=e.getBBox();e.setAttribute("viewBox",`${t.x} 0 ${t.width||p} ${p}`)}),[]),r.createElement(yr,We({ref:c,"aria-label":i,color:a,size:o,hasWidthOffset:s},u),n)},gr={small:{totalSize:18},medium:{totalSize:24},large:{totalSize:48}},hr=e=>gr[e.size].totalSize/6,fr=e=>gr[e.size].totalSize,mr=q`
  50% {
    transform: scale(1);
  }
`,Sr=(Q.span`
  display: inline-block;
  vertical-align: middle;
  height: ${e=>fr(e)}px;
  width: ${e=>fr(e)}px;
`,Q.span`
  display: grid;
  grid-template-areas: 'stack';
  height: 100%;
  width: 100%;
`,Q.span`
  grid-area: stack;
  place-self: center;
  transform: rotate(${e=>45*e.position}deg)
    translateY(${e=>fr(e)/2-hr(e)/2}px);

  &:after {
    content: '';
    height: ${e=>hr(e)}px;
    width: ${e=>hr(e)}px;
    border-radius: ${e=>hr(e)}px;
    background-color: ${e=>nt(e.color)};
    display: block;
    transform: scale(0.65);
    animation: ${mr} ${1}s
      ${e=>1*e.position/8}s ease-in-out infinite;
  }
`,Object.keys(gr),{small:{height:at(4),textSize:"small",iconSize:2,xSpace:at(1.5)},medium:{height:at(4.5),textSize:"medium",iconSize:3,xSpace:at(2)},large:{height:at(7),textSize:"large",iconSize:4,xSpace:at(2.5)}}),vr=e=>k`
  transition: opacity 0.5s;
  ${e.hasLoader&&"opacity: 0"};
`,Ar={neutral:{color:nt("body"),background:"transparent",borderColor:nt("buttonBorder"),hover:nt("backgroundHover"),active:nt("backgroundActive")},primary:{color:nt("white"),background:nt("blurple"),borderColor:null,hover:nt("primaryHover"),active:nt("primaryActive")},record:{color:nt("white"),background:nt("record"),borderColor:null,hover:nt("recordHover"),active:nt("recordActive")},upgrade:{color:nt("grey7"),background:nt("upgrade"),borderColor:null,hover:nt("upgradeHover"),active:nt("upgradeActive"),focusRing:vt()},danger:{color:nt("white"),background:nt("danger"),borderColor:null,hover:nt("dangerHover"),active:nt("dangerActive")},ai:{color:nt("white"),background:"linear-gradient(135deg, #565ADD, #9F92EC, #DC43BE)",borderColor:null,hover:null,active:null}},Cr={enabled:k`
    cursor: pointer;
  `,disabled:k`
    pointer-events: none;
    background-color: ${nt("disabledBackground")};
    color: ${nt("disabledContent")};
    border: none;
  `},Mr=(at(1),Q.button`
  appearance: none;
  padding: 0
    ${e=>e.hasChildren?Sr[e.size].xSpace:0};
  font: inherit;
  text-decoration: none;
  transition: 0.6s background, 0.6s border-color;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  white-space: nowrap;
  ${mt("bold")};
  ${ft("full")};
  ${e=>e.hasFullWidth?"display: flex; width: 100%":"display: inline-flex"};
  height: ${e=>Sr[e.size].height};
  min-width: ${e=>Sr[e.size].height};
  ${e=>ht(Sr[e.size].textSize)};
  ${e=>e.disabled?Cr.disabled:Cr.enabled};
  ${e=>!e.disabled&&`\n    border: ${Ar[e.variant].borderColor?`1px solid ${Ar[e.variant].borderColor}`:"none"};\n    background: ${Ar[e.variant].background};\n    background-position: left;\n    background-size: 125%;\n    color: ${Ar[e.variant].color};\n  `};

  &:hover {
    transition: 0.3s background, 0.3s border-color;
    background: ${e=>Ar[e.variant].hover};
    background-position: 75% center;
  }

  &:active {
    transition: 0s background, 0s border-color;
    background: ${e=>Ar[e.variant].active};
    background-position: right;
  }

  &:focus-visible {
    outline: 1px solid transparent;
    ${vt()};
  }

  &::-moz-focus-inner {
    border: 0;
  }
`,Q.span`
  ${e=>st("padding-left",e.paddingLeft)};
  ${e=>st("padding-right",e.paddingRight)};
  ${vr};
`,Q.img`
  max-width: 1.45em;
  max-height: 1.45em;
  height: ${e=>Sr[e.size].height};
  width: ${e=>Sr[e.size].height};
  ${e=>e.hasSpacing&&"margin-right: 0.57em"};
  ${vr};
`,Q.span`
  position: absolute;
  display: flex;
  align-items: center;
`,Q.span`
  ${vr};
`,Object.keys(Sr),Object.keys(Ar),Q.div`
  display: ${e=>e.isInline?"inline-block":"block"};
  vertical-align: middle;
  ${e=>st("padding",e.all)};
  ${e=>st("padding-top",e.top)};
  ${e=>st("padding-right",e.right)};
  ${e=>st("padding-bottom",e.bottom)};
  ${e=>st("padding-left",e.left)};
`),Tr=e=>{var t=e,{children:i,all:n,y:a,x:o,top:s,right:u,bottom:c,left:p,isInline:l}=t,d=Ke(t,["children","all","y","x","top","right","bottom","left","isInline"]);return r.createElement(Mr,We({all:n,top:a||s,bottom:a||c,right:o||u,left:o||p,isInline:l},d),i)},_r={small:{height:at(4),width:at(5),iconSize:2,padding:at(1.75),withIconPadding:at(4.5),passwordAdditionalPadding:at(.5),textSize:"small"},medium:{height:"var(--lns-formFieldHeight)",width:at(6),iconSize:3,padding:"var(--lns-formFieldHorizontalPadding)",withIconPadding:at(5.5),passwordAdditionalPadding:at(.5),textSize:"medium"},large:{height:at(7),width:at(6),iconSize:3,padding:"var(--lns-formFieldHorizontalPadding)",withIconPadding:at(5.5),passwordAdditionalPadding:at(.5),textSize:"large"}},Rr=Q.input`
  -webkit-appearance: none;
  font-family: inherit;
  width: 100%;
  height: ${e=>_r[e.inputSize].height};
  border: none;
  color: inherit;
  background-color: ${nt("formFieldBackground")};
  transition: 0.3s box-shadow;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: ${e=>e.icon?_r[e.inputSize].withIconPadding:_r[e.inputSize].padding};
  padding-right: ${e=>(e=>{let t=e.addOn?_r[e.inputSize].withIconPadding:_r[e.inputSize].padding;return"password"===e.type&&(t=`calc(${_r[e.inputSize].passwordAdditionalPadding} + ${t})`),t})(e)};
  border-radius: var(--lns-radius-full);
  box-shadow: inset 0 0 0
    ${e=>e.hasError?"var(--lns-formFieldBorderWidthFocus) var(--lns-color-danger)":"var(--lns-formFieldBorderWidth) var(--lns-color-formFieldBorder)"};

  ${e=>ht(_r[e.inputSize].textSize)};

  &:hover {
    box-shadow: inset 0 0 0 var(--lns-formFieldBorderWidthFocus)
      var(--lns-color-blurple);
  }

  &:focus {
    outline: 1px solid transparent;
    box-shadow: var(--lns-formFieldBorderShadowFocus);
  }

  &:disabled {
    color: ${nt("disabledContent")};
    background-color: ${nt("disabledBackground")};
  }

  &:disabled:hover {
    box-shadow: inset 0 0 0 var(--lns-formFieldBorderWidth)
      var(--lns-color-formFieldBorder);
  }

  &::placeholder {
    color: ${nt("grey5")};
  }

  [data-lens-theme='dark'] &::-webkit-calendar-picker-indicator,
  .theme-dark &::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
`,Or=Q.div`
  position: relative;
  width: 100%;
`,Pr=Q.div`
  position: absolute;
  pointer-events: none;
  width: ${e=>_r[e.size].width};
  // Width isn't equal to iconPadding because we want more space on the left than the right
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,wr=Q.div`
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  width: ${e=>_r[e.size].width};
  top: 50%;
  transform: translateY(-50%);
`,jr=((0,r.forwardRef)(((e,t)=>{var i=e,{placeholder:n,onFocus:a,onChange:o,onBlur:s,onKeyDown:u,isDisabled:c,icon:p,type:l="text",value:d,hasError:y,size:b="medium",addOn:g}=i,h=Ke(i,["placeholder","onFocus","onChange","onBlur","onKeyDown","isDisabled","icon","type","value","hasError","size","addOn"]);const f=r.createElement(Rr,We({type:l,placeholder:n,onFocus:a,onChange:o,onBlur:s,onKeyDown:u,disabled:c,icon:p,ref:t,value:d,hasError:y,inputSize:b,addOn:g},h));return p||g?r.createElement(Or,null,p&&r.createElement(Pr,{size:b},r.createElement(br,{icon:p,size:_r[b].iconSize,color:nt(c?"disabledContent":"body")})),f,g&&r.createElement(wr,{size:b},g)):f})),{start:"flex-start",center:"center",end:"flex-end",stretch:"stretch"}),zr=e=>Array.isArray(e)?e:[e],xr=(e,t)=>{if(e.length===t)return e;const r=e[e.length-1];return[...Array(t)].map(((t,i)=>e[i]||r))},Ir=(Q.div`
  display: flex;
  flex-wrap: wrap;
  ${e=>((e,t)=>{const r=Math.max(zr(e).length,zr(t).length),i=xr(zr(t),r),n=xr(zr(e),r),a=i.map(((e,t)=>{const r=`${ot(e)} 0 0 0`,i=`0 0 0 ${ot(e)}`;return`& > * + *{ margin: ${"column"===n[t]?r:i}; }`})),o=n.map((e=>`flex-direction: ${e}`));return ct(a)+ct(o)})(e.flexDirection,e.gap)};
  ${e=>dt(e.flexAlign,jr)};
  ${e=>e.isSpread&&((e,t,r)=>{if(Array.isArray(r)){const i=r.map((r=>`${e}: ${!0===r?t[0]:t[1]};`));return ct(i)}return`${e}: ${t[0]};`})("justify-content",["space-between","initial"],e.isSpread)};

  & > * {
    flex-shrink: 0;
  }
`,Object.keys(jr),Q.div`
  ${e=>e.position&&`position: ${e.position}`};
  ${e=>e.overflow&&`overflow: ${e.overflow}`};
  ${e=>e.backgroundColor&&`background-color: ${nt(e.backgroundColor)}`};
  ${e=>e.backgroundImage&&`background-image: ${e.backgroundImage}`}
  ${e=>e.contentColor&&`color: ${nt(e.contentColor)}`};
  ${e=>((e,t,r)=>{const i=t||"border",n=`${ot(r)} solid ${nt(i)}`;if(e)return"all"===e?`border: ${n};`:`border-${e}: ${n};`})(e.borderSide,e.borderColor,e.borderWidth)};
  ${e=>ft(e.radius)};
  ${e=>St(e.shadow)};
  ${e=>st("width",e.width)};
  ${e=>st("height",e.height)};
  ${e=>st("min-width",e.minWidth)};
  ${e=>st("min-height",e.minHeight)};
  ${e=>st("max-width",e.maxWidth)};
  ${e=>st("max-height",e.maxHeight)};
  ${e=>st("padding",e.padding)};
  ${e=>st("padding-top",e.paddingTop)};
  ${e=>st("padding-right",e.paddingRight)};
  ${e=>st("padding-bottom",e.paddingBottom)};
  ${e=>st("padding-left",e.paddingLeft)};
  ${e=>st("margin",e.margin)};
  ${e=>st("margin-top",e.marginTop)};
  ${e=>st("margin-right",e.marginRight)};
  ${e=>st("margin-bottom",e.marginBottom)};
  ${e=>st("margin-left",e.marginLeft)};
  ${e=>st("top",e.top)};
  ${e=>st("right",e.right)};
  ${e=>st("bottom",e.bottom)};
  ${e=>st("left",e.left)};
  ${e=>e.zIndex&&`z-index: ${e.zIndex}`};
`),Nr=e=>{var t=e,{children:i,backgroundColor:n,backgroundImage:a,contentColor:o,borderColor:s,radius:u,borderSide:c,borderWidth:p="1px",shadow:l,padding:d,paddingX:y,paddingY:b,paddingLeft:g,paddingRight:h,paddingTop:f,paddingBottom:m,margin:S,marginX:v,marginY:A,marginLeft:C,marginRight:M,marginTop:T,marginBottom:_,width:R,height:O,minWidth:P,minHeight:w,maxWidth:j,maxHeight:z,htmlTag:x="div",position:I,overflow:N,zIndex:E,top:k,bottom:D,left:U,right:q,refHandler:L}=t,F=Ke(t,["children","backgroundColor","backgroundImage","contentColor","borderColor","radius","borderSide","borderWidth","shadow","padding","paddingX","paddingY","paddingLeft","paddingRight","paddingTop","paddingBottom","margin","marginX","marginY","marginLeft","marginRight","marginTop","marginBottom","width","height","minWidth","minHeight","maxWidth","maxHeight","htmlTag","position","overflow","zIndex","top","bottom","left","right","refHandler"]);return r.createElement(Ir,We({backgroundColor:n,backgroundImage:a,contentColor:o,borderColor:s,radius:u,borderSide:c,shadow:l,padding:d,paddingLeft:y||g,paddingRight:y||h,paddingTop:b||f,paddingBottom:b||m,margin:S,marginLeft:v||C,marginRight:v||M,marginTop:A||T,marginBottom:A||_,width:R,height:O,minWidth:P,minHeight:w,maxWidth:j,maxHeight:z,as:x,position:I,top:k,bottom:D,left:U,right:q,overflow:N,zIndex:E,borderWidth:p,ref:e=>L&&L(e)},F),i)};function Er(e){return r.createElement("svg",We({viewBox:"0 0 24 24",fill:"none"},e),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.664 3.35a2.723 2.723 0 013.664.96l.003.005 7.296 12.18.008.015a2.722 2.722 0 01-2.328 4.084H4.693a2.723 2.723 0 01-2.328-4.084l.008-.014L9.672 4.31c.243-.4.584-.731.992-.96zM12 5a.723.723 0 00-.617.346l-7.29 12.17a.723.723 0 00.618 1.078h14.578a.723.723 0 00.617-1.079L12.618 5.348l-.001-.002A.723.723 0 0012 5zm0 3.257a1 1 0 011 1v3.446a1 1 0 01-2 0V9.257a1 1 0 011-1zm-1 7.891a1 1 0 011-1h.01a1 1 0 010 2H12a1 1 0 01-1-1z",fill:"currentColor"}))}Q.div`
  display: grid;
  ${e=>lt("align-items",e.alignItems)};
  ${e=>lt("justify-content",e.justifyContent)};
  ${e=>e.justifyItems&&lt("justify-items",e.justifyItems)};
  ${e=>e.alignContent&&lt("align-content",e.alignContent)};
  ${e=>!e.columns&&!e.rows&&!e.autoFlow&&"grid-auto-flow: column"};
  ${e=>gt(e.columns,"columns")};
  ${e=>gt(e.rows,"rows")};
  ${e=>st("gap",e.gap)};
  ${e=>st("width",e.width)};
  ${e=>st("height",e.height)};
  ${e=>st("min-width",e.minWidth)};
  ${e=>st("min-height",e.minHeight)};
  ${e=>st("max-width",e.maxWidth)};
  ${e=>st("max-height",e.maxHeight)};

  ${e=>e.autoFlow&&lt("grid-auto-flow",e.autoFlow)};
  ${e=>e.columns&&e.autoFlow&&lt("grid-auto-flow",e.autoFlow)};
`,Q.div`
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
`;var kr={start:"flex-start",center:"center",end:"flex-end"},Dr=Q.div`
  display: flex;
  ${e=>dt(e.alignment,kr)};

  & > * + * {
    ${e=>e.gap&&st("margin-left",e.gap)};
  }
`,Ur=Q.div`
  min-width: 0px;
  flex-shrink: 0;
  ${e=>st("width",e.width)};
  ${e=>st("max-width",e.maxWidth)};
  ${e=>e.width?"flex-shrink: 0":"flex: 1 1 0%"};
`;(class extends r.Component{render(){return ke.warn(jt),r.createElement(Dr,We({},this.props),this.props.children)}}).Section=e=>{var t=e,{width:i,maxWidth:n,children:a}=t,o=Ke(t,["width","maxWidth","children"]);return ke.warn(jt),r.createElement(Ur,We({width:i,maxWidth:n},o),a)};var qr={small:{size:at(3),iconSize:2.25},medium:{size:at(4),iconSize:3},large:{size:at(5),iconSize:4}},Lr=Q.button`
  background-color: ${e=>nt(e.isActive?"backgroundActive":e.backgroundColor)||"transparent"};
  border: none;
  appearance: none;
  cursor: pointer;
  padding: 0;
  width: ${e=>qr[e.size].size};
  height: ${e=>qr[e.size].size};
  position: relative;
  outline: 1px solid transparent;
  transition: 0.6s background-color;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  ${ft("full")};
  font: inherit;

  &:hover {
    transition: 0.3s background-color;
    background-color: ${e=>nt(e.isActive?"backgroundActive":"backgroundHover")};
  }

  &:active {
    transition: 0s background-color;
    background-color: ${nt("backgroundActive")};
  }

  &:disabled {
    color: ${nt("disabledContent")};
    pointer-events: none;
  }

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    ${ft("full")};
  }

  &:focus-visible:before {
    ${vt()};
  }

  &:focus::-moz-focus-inner {
    border: 0;
  }
`,Fr=e=>{var t=e,{altText:i,icon:n,onClick:a,iconColor:o="body",backgroundColor:s,isActive:u,isDisabled:c,size:p="medium"}=t,l=Ke(t,["altText","icon","onClick","iconColor","backgroundColor","isActive","isDisabled","size"]);return r.createElement(Lr,We({"aria-label":i,onClick:a,isActive:u,disabled:c,size:p,backgroundColor:s},l),r.createElement(br,{icon:n,size:qr[p].iconSize,color:c?"disabledContent":o}))},Hr=e=>r.createElement("svg",We({width:12,height:9,viewBox:"0 0 12 9",fill:"none"},e),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.707.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L4 6.586 10.293.293a1 1 0 011.414 0z",fill:"currentColor"})),Br=e=>r.createElement("svg",We({width:12,height:2,viewBox:"0 0 12 2",fill:"none"},e),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 1a1 1 0 011-1h10a1 1 0 110 2H1a1 1 0 01-1-1z",fill:"currentColor"})),Wr=Q.div`
  display: block;
  position: relative;
`,Gr=Q.input`
  height: 100%;
  margin: 0;
  opacity: 0;
  position: absolute;
  width: 100%;

  &:not(:disabled) {
    cursor: pointer;

    & ~ .CheckboxBox {
      border: 2px solid ${nt("body")};
    }

    &:checked ~ .CheckboxBox,
    &:indeterminate ~ .CheckboxBox {
      background-color: ${nt("body")};
    }
  }

  &:disabled,
  &:disabled ~ .CheckboxBox {
    pointer-events: none;
  }

  &:disabled ~ .CheckboxBox {
    background-color: ${nt("disabledBackground")};

    .Icon {
      color: ${nt("disabledContent")};
    }
  }

  &:focus-visible ~ .CheckboxBox {
    ${vt()};
  }

  & ~ .CheckboxBox .Icon {
    display: none;
    color: ${nt("background")};
  }

  &:checked ~ .CheckboxBox .IconCheck {
    display: block;
  }

  &:indeterminate ~ .CheckboxBox .IconMinus {
    display: block;
  }
`,Kr=Q.span`
  cursor: pointer;
  width: ${at(2.25)};
  height: ${at(2.25)};
  border-radius: ${at(.5)};
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`,$r=((0,r.forwardRef)(((e,t)=>{var i=e,{isDisabled:n,isChecked:a,isIndeterminate:o,onFocus:s,onChange:u,onBlur:c}=i,p=Ke(i,["isDisabled","isChecked","isIndeterminate","onFocus","onChange","onBlur"]);const l=(0,r.useRef)(),d=t||l,y=nt(n?"disabledContent":"currentColor");return(0,r.useEffect)((()=>{d.current.indeterminate=o})),r.createElement(Wr,null,r.createElement(Gr,We({role:"checkbox",type:"checkbox",disabled:n,checked:a,onFocus:s,onChange:u,onBlur:c,ref:d,"aria-checked":a},p)),r.createElement(Kr,{className:"CheckboxBox"},r.createElement(Br,{className:"Icon IconMinus",color:y}),r.createElement(Hr,{className:"Icon IconCheck",color:y})))})),{small:{textSize:"small",iconSize:2.25,height:at(3),xSpace:at(1)},medium:{textSize:"medium",iconSize:3,height:at(4),xSpace:at(1.5)},large:{textSize:"large",iconSize:4,height:at(6),xSpace:at(3)}});Q.button`
  background-color: transparent;
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  font: inherit;
  text-decoration: none;
  border: none;
  appearance: none;
  height: ${e=>$r[e.size].height};
  cursor: pointer;
  transition: 0.6s background-color;
  color: ${nt("body")};
  ${mt("bold")};
  ${ft("full")};
  ${e=>ht($r[e.size].textSize)};
  padding: 0 ${e=>$r[e.size].xSpace};
  ${e=>e.offsetSide&&`margin-${e.offsetSide}: calc(-1 * ${$r[e.size].xSpace})`};

  &:focus,
  &:focus-visible {
    outline: 1px solid transparent;
  }

  &:focus-visible {
    ${vt()};
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &:hover {
    transition: 0.3s background-color;
    background-color: ${nt("backgroundHover")};
  }

  &:active {
    transition: 0s background-color;
    background-color: ${nt("backgroundActive")};
  }

  &:disabled {
    color: ${nt("disabledContent")};
    pointer-events: none;
  }
`,Q.ul`
  background-color: ${nt("overlay")};
  list-style: none;
  padding: ${at(1.5)};
  margin: 0;
  ${e=>st("min-width",e.minWidth)};
  ${e=>st("max-width",e.maxWidth)};
  ${e=>st("max-height",e.maxHeight)};
  z-index: ${e=>e.zIndex};
  overflow: auto;
  border: 1px solid ${nt("border")};
  ${St("medium")};
  ${ft("large")};
`,Q.li`
  display: ${({hidden:e})=>e?"none":"grid"};
  grid-auto-flow: column;
  grid-template-columns: ${e=>e.columns};
  ${st("grid-gap","small")};
  ${ft("xlarge")};
  align-items: center;
  min-height: ${at(5)};
  padding: 0 ${at(2)};
  cursor: ${e=>e.isDisabled?"default":"pointer"};
  ${e=>e.isHighlighted&&!e.isDisabled&&`\n    background-color: ${nt("backgroundHover")};\n  `};
  ${e=>e.hasDivider&&`\n    position: relative;\n    margin-top: ${at(3)};\n    &:before {\n      content: '';\n      border-top: 1px solid ${nt("border")};\n      position: absolute;\n      top: ${at(-1.5)};\n      left: ${at(-1.5)};\n      width: calc(100% + ${at(3)});\n    }\n  `};
`,Q.div`
  position: relative;
`,Q.button`
  appearance: none;
  font: inherit;
  text-align: left;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: ${e=>e.columns};
  ${st("grid-gap","small")};
  align-items: center;
  cursor: pointer;
  width: 100%;
  min-height: ${at(4.5)};
  padding: 0 ${at(1.5)} 0 var(--lns-formFieldHorizontalPadding);
  color: ${nt("body")};
  border: none;
  background-color: ${nt("formFieldBackground")};
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
    color: ${nt("disabledContent")};
    background-color: ${nt("disabledBackground")};
    cursor: default;
  }
`;var Qr=function(e,t){const i=document;(0,r.useLayoutEffect)((()=>{const r=null==i?void 0:i.documentElement,n=null==i?void 0:i.body;if(null!=i&&r&&n){if(t){const t=window.innerWidth-r.clientWidth,i=parseInt(window.getComputedStyle(n).getPropertyValue("padding-right"),10)||0;switch(e){case"html":r.style.position="relative",r.style.overflow="hidden",n.style.paddingRight=`${i+t}px`;break;case"body":n.style.setProperty("position","relative"),n.style.setProperty("overflow","hidden"),n.style.setProperty("padding-right",`${i+t}px`);break;default:return}}return()=>{switch(e){case"html":r.style.position="",r.style.overflow="",n.style.paddingRight="";break;case"body":n.style.removeProperty("position"),n.style.removeProperty("overflow"),n.style.removeProperty("padding-right");break;default:return}}}}),[i,t,e])},Vr=Q.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  background: ${e=>nt(e.backgroundColor)};
  z-index: ${e=>e.zIndex};
  overflow: hidden;
`,Zr=Q.div`
  overflow: auto;
  height: 100%;
`,Yr=e=>{var t=e,{children:i,isOpen:n,zIndex:a=1e3,backgroundColor:o="backdropDark"}=t,s=Ke(t,["children","isOpen","zIndex","backgroundColor"]);const{stage:u,shouldMount:c}=function(e,t){const[i,n]=(0,r.useState)(e?"enter":"from"),a=(0,r.useRef)({}),[o,s]=(0,r.useState)(e);return(0,r.useEffect)((function(){return xe(a.current),e?(n("from"),s(!0),ze((()=>{n("enter")}))):(n("leave"),a.current=ze((()=>{s(!1)}),300)),()=>{xe(a.current)}}),[e,300]),{stage:i,shouldMount:o}}(n);return Qr("html",n),r.createElement(r.Fragment,null,c&&r.createElement(Vr,We({backgroundColor:o,zIndex:a,style:{transition:"opacity 300ms",opacity:"enter"===u?1:0}},s),r.createElement(Zr,null,i)))};function Jr(e){return r.createElement("svg",We({viewBox:"0 0 24 24",fill:"none"},e),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.21 12l4.54-4.54c.33-.33.33-.88 0-1.21a.863.863 0 00-1.21 0L12 10.79 7.46 6.25a.863.863 0 00-1.21 0c-.33.33-.33.88 0 1.21L10.79 12l-4.54 4.54c-.33.33-.33.88 0 1.21.33.33.88.33 1.21 0L12 13.21l4.54 4.54c.33.33.88.33 1.21 0 .33-.33.33-.88 0-1.21L13.21 12z",fill:"currentColor"}))}var Xr="70vh",ei=Q.div`
  display: grid;
  grid-template-rows: ${e=>e.rows};
  position: relative;
`,ti=Q.dialog`
  top: ${e=>At(ot(e.maxHeight),e.placement).top};
  background-color: ${nt("overlay")};
  color: ${nt("body")};
  bottom: ${e=>At(e.maxHeight,e.placement).bottom};
  ${St("large")};
  ${ft("xlarge")};
  // Unsets bottom-radius for bottom-aligned modals
  border-bottom-left-radius: ${e=>"bottom"===e.placement?"initial":void 0};
  border-bottom-right-radius: ${e=>"bottom"===e.placement?"initial":void 0};
  ${e=>st("max-height",e.maxHeight)};
  ${e=>st("max-width",e.maxWidth)};
  margin: 0 auto;
  position: ${e=>At(e.maxHeight,e.placement).position};
  overflow: auto;
  width: 100%;
  // TODO: LNS-150: Bake dialog resets into native resets file
  border: 0;
  padding: 0;
  &::backdrop {
    background: var(--lns-color-overlay);
  }
`,ri=Q.div`
  position: absolute;
  top: ${at(1.5)};
  right: ${at(1.5)};
  z-index: 1;
`,ii=Q.div`
  margin-left: auto;

  * {
    vertical-align: middle;
  }
`,ni=Q.div`
  padding-left: var(--lns-space-xlarge);
  padding-right: var(--lns-space-xlarge);
  padding-top: var(--lns-space-xlarge);
  padding-bottom: ${e=>e.bottom};
  flex-shrink: 0;
`,ai=Q.div`
  padding-left: var(--lns-space-xlarge);
  padding-right: var(--lns-space-xlarge);
  padding-bottom: var(--lns-space-xlarge);
  padding-top: ${e=>e.hasDividers?"var(--lns-space-medium)":e.top};
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,oi=Q.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-top: ${e=>e.hasTitle&&!e.noPadding||e.hasTitle||e.noPadding?0:"var(--lns-space-xlarge)"};
  padding-bottom: ${e=>e.hasButtons&&!e.noPadding||e.hasButtons||e.noPadding?0:"var(--lns-space-xlarge)"};
  padding-left: ${e=>e.noPadding?0:"var(--lns-space-xlarge)"};
  padding-right: ${e=>e.noPadding?0:"var(--lns-space-xlarge)"};
  border-style: solid;
  border-color: ${nt("border")};
  border-width: ${e=>e.hasDividers?"1px 0":"0"};
`,si=Q.div`
  overflow: auto;

  ${e=>ui(e.maxHeight)};

  & > * {
    ${e=>ui(e.maxHeight)};
  }
`,ui=e=>"number"==typeof e?st("max-height",e):"max-height: "+e,ci=e=>{var t=e,{children:i,onCloseClick:n,isOpen:a,maxWidth:o=60,maxHeight:s=Xr,placement:u="center",ariaLabel:c,ref:p,removeClose:l}=t,d=Ke(t,["children","onCloseClick","isOpen","maxWidth","maxHeight","placement","ariaLabel","ref","removeClose"]);return(0,r.useEffect)((()=>{const e=e=>{"Escape"===e.key&&(e.preventDefault(),l||n(e))};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}}),[a,n]),Qr("html",a),r.createElement(Ee(),{active:a,focusTrapOptions:{clickOutsideDeactivates:!1,allowOutsideClick:!0}},r.createElement(ti,We({open:a,maxWidth:o,maxHeight:s,placement:u,onClick:e=>e.stopPropagation(),ref:p,"aria-label":c},d),!l&&n&&r.createElement(ri,null,r.createElement(Fr,{altText:"Close",icon:r.createElement(Jr,null),onClick:n})),r.createElement(si,{tabIndex:l?0:-1,maxHeight:s},i)))},pi=(r.forwardRef(((e,t)=>{var i=e,{children:n,id:a,isOpen:o,mainButton:s,secondaryButton:u,alternativeButton:c,title:p,noPadding:l,onCloseClick:d,onBackgroundClick:y,onKeyDown:b,hasDividers:g,maxHeight:h="70vh",maxWidth:f=60,placement:m="center",zIndex:S=1e3,ariaLabel:v}=i,A=Ke(i,["children","id","isOpen","mainButton","secondaryButton","alternativeButton","title","noPadding","onCloseClick","onBackgroundClick","onKeyDown","hasDividers","maxHeight","maxWidth","placement","zIndex","ariaLabel"]);const C=a?`${a}-modal-title`:"modal-title",M=!!(s||u||c);return r.createElement(Yr,We({isOpen:o,zIndex:S},A),r.createElement(Nr,{height:"100%",onClick:e=>{if(y)return e.stopPropagation(),void y(e);d(e)},onKeyDown:b,"aria-labelledby":C},r.createElement(ci,{ref:t,id:a,isOpen:o,maxHeight:h,maxWidth:f,placement:m,onCloseClick:d,ariaLabel:v},r.createElement(ei,{rows:`${p?"auto ":""} ${n?"1fr ":""} ${M?"auto":""}`},p&&r.createElement(ni,{bottom:n?"var(--lns-space-medium)":"var(--lns-space-xlarge)",id:C},r.createElement(Dt,{variant:"title"},p)),r.createElement(oi,{noPadding:l,hasDividers:g,hasTitle:Boolean(p),hasButtons:M},n&&n),M&&r.createElement(ai,{top:n?"var(--lns-space-xlarge)":0,hasDividers:g},c,r.createElement(ii,null,u&&r.createElement(Tr,{right:"small",isInline:!0},u),s))))))})),{topLeft:"start",topCenter:"start center",topRight:"start end",centerLeft:"center start",center:"center",centerRight:"center end",bottomLeft:"end start",bottomCenter:"end center",bottomRight:"end"}),li=(Q.div`
  width: 100%;
  height: 100%;
  display: grid;
  ${e=>lt("place-items",(e=>{if(Array.isArray(e))return e.map((e=>pi[e]));if("object"==typeof e){const t={};return Object.entries(e).forEach((([e,r])=>t[e]=pi[r])),t}return pi[e]})(e.alignment))};
`,Object.keys(pi),{neutral:{color:nt("inherit"),focusRing:vt()},primary:{color:nt("primary"),focusRing:vt()}}),di={enabled:k`
    cursor: pointer;
  `,disabled:k`
    pointer-events: none;
    color: ${nt("disabledContent")};
  `},yi={isButton:k`
    background: none;
    border: none;
    font: inherit;
  `},bi=(Q.a`
  ${e=>!e.disabled&&`color: ${li[e.variant].color}`};
  ${e=>e.disabled?di.disabled:di.enabled};
  ${e=>"button"===e.as&&yi.isButton};
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
    ${vt()};
  }
  &::-moz-focus-inner {
    border: 0;
  }
`,Object.keys(li),{small:{padding:`${at(1.5)} ${at(1.75)}`,textSize:"small"},medium:{padding:`${at(1.5)} var(--lns-formFieldHorizontalPadding)`,textSize:"medium"}}),gi=Q.textarea`
  width: 100%;
  border: none;
  font-family: inherit;
  color: inherit;
  background-color: ${nt("formFieldBackground")};
  transition: 0.3s box-shadow;
  padding: ${e=>bi[e.size].padding};
  ${ft("large")};
  box-shadow: inset 0 0 0 var(--lns-formFieldBorderWidth)
    var(--lns-color-formFieldBorder);
  ${e=>ht(bi[e.size].textSize)};
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
    color: ${nt("disabledContent")};
    background-color: ${nt("disabledBackground")};
  }

  &:disabled:hover {
    box-shadow: inset 0 0 0 var(--lns-formFieldBorderWidth)
      var(--lns-color-formFieldBorder);
  }

  &::placeholder {
    color: ${nt("grey5")};
  }
`,hi=(r.forwardRef(((e,t)=>{var i=e,{onChange:n,value:a,rows:o=4,isDisabled:s,placeholder:u,size:c="medium",resize:p="both"}=i,l=Ke(i,["onChange","value","rows","isDisabled","placeholder","size","resize"]);return r.createElement(gi,We({disabled:s,onChange:n,placeholder:u,ref:t,rows:o,value:a,size:c,resize:p},l))})),Q.div`
  display: inline-block;
  vertical-align: middle;
`,{row:{wrapper:{display:"grid",gridTemplateColumns:"auto 1fr",alignItems:"center"},label:{marginLeft:"var(--lns-space-small)"},errorMessage:{marginLeft:"var(--lns-space-small)"}},column:{wrapper:{},label:{marginBottom:"var(--lns-space-xsmall)"}}});function fi(e){return r.createElement("svg",We({viewBox:"0 0 24 24",fill:"none"},e),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1118 0 9 9 0 01-18 0z",fill:"currentColor"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13 11v5.2h-2V11h2zM10.5 8.8A1.5 1.5 0 0112 7.3h.01a1.5 1.5 0 010 3H12a1.5 1.5 0 01-1.5-1.5z",fill:"currentColor"}))}Q.div`
  ${e=>e.direction&&hi[e.direction].wrapper};
`,Q.label`
  display: block;
  ${e=>e.direction&&hi[e.direction].label};
`,Q.span`
  color: var(--lns-color-red);
  margin-top: var(--lns-space-xsmall);
  display: block;
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 3;
`;var mi=e=>r.createElement("svg",We({viewBox:"0 0 24 24",fill:"none"},e),r.createElement("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M7.42 2.293A1 1 0 0 1 8.127 2h7.245a1 1 0 0 1 .708.293l5.127 5.127a1 1 0 0 1 .293.707v7.245a1 1 0 0 1-.293.708l-5.127 5.127a1 1 0 0 1-.707.293H8.128a1 1 0 0 1-.708-.293L2.293 16.08A1 1 0 0 1 2 15.373V8.128a1 1 0 0 1 .293-.708L7.42 2.293ZM8.542 4 4 8.542v6.416L8.542 19.5h6.416l4.542-4.542V8.542L14.958 4H8.542Zm2.208 11.25a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2h-.009a1 1 0 0 1-1-1Zm2-7a1 1 0 1 0-2 0v3.5a1 1 0 1 0 2 0v-3.5Z"})),Si={info:{bgColor:"var(--lns-color-blurple)",icon:r.createElement(fi,null),color:"var(--lns-color-white)",fontFamily:"inherit"},warning:{bgColor:"var(--lns-color-warning)",icon:r.createElement(mi,null),color:"var(--lns-color-grey8)",fontFamily:"inherit"},error:{bgColor:"var(--lns-color-danger)",icon:r.createElement(Er,null),color:"var(--lns-color-white)",fontFamily:"inherit"},internal:{icon:r.createElement("span",{role:"img"},"🔔"),color:"var(--lns-color-teal)",bgColor:"var(--lns-color-grey8)",fontFamily:"Roboto Mono, Lucida Mono, monospace"}},vi=(Q.aside`
  --paddingXOffset: var(--lns-space-large);
  --alignItems: start;

  display: grid;
  align-items: var(--alignItems);
  justify-content: space-between;
  grid-template-columns: 1fr auto;
  ${e=>`background-color: ${Si[e.severity].bgColor}`};
  ${e=>`font-family: ${Si[e.severity].fontFamily}`};

  ${e=>`color: ${Si[e.severity].color}`};
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
`,"web-app"),Ai="chrome-extension",Ci={short:3e3,long:8e3},Mi=Q.div`
  animation: ${e=>{return t=e.toastDuration,r=e.platform,q`
  0% {
    opacity: 0;
    transform: translate(-50%, ${at(r===Ai?-8:8)});
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
  background-color: ${nt("background")};
  border-radius: 1.75rem; // Height of single line toast (56px) divided by 2 so one line toasts appear fully rounded
  top: ${e=>(e=>{switch(e){case vi:return"unset";case Ai:return at(4);default:return"unset"}})(e.platform)};
  bottom: ${e=>(e=>{switch(e){case vi:return at(4);case Ai:return"unset";default:return at(4)}})(e.platform)};
  ${St("large")};
  color: ${nt("body")};
  display: grid;
  grid-auto-flow: column;
  gap: var(--lns-space-small);
  justify-content: space-between;
  left: 50%;
  max-width: ${at(50)}; // Fallback when min() function is not supported
  max-width: min(90%, ${at(50)});
  padding: ${at(1.5)} var(--lns-space-medium) ${at(1.5)} var(--lns-space-large);
  position: fixed;
  transform: translateX(-50%);
  width: max-content;
  z-index: ${e=>e.zIndex};
`,Ti=Q.div`
  align-self: center;
`,_i=({children:e,isOpen:t,onCloseClick:i,zIndex:n=1100,duration:a="short",platform:o="web-app"})=>{const s=Ci[a];return(0,r.useEffect)((()=>{const e=setTimeout((()=>{t&&i()}),s);return()=>clearTimeout(e)}),[t]),r.createElement(r.Fragment,null,t&&r.createElement(Mi,{"data-lens-theme":"dark",onClick:e=>e.stopPropagation(),zIndex:n,isOpen:t,toastDuration:s,platform:o},r.createElement(Ti,{"aria-live":"polite"},e),i&&r.createElement(Fr,{altText:"Close",icon:r.createElement(Jr,null),onClick:i})))},Ri=(4-Tt.small.fontSize*Tt.small.lineHeight)/2;Q.div`
  background-color: ${nt("background")};
  color: ${nt("body")};
  ${ft("large")};
  ${mt("bold")};
  ${ht("small")};
  ${St("medium")};
  ${e=>st("max-width",e.maxWidth)};
  z-index: 1100;
  padding: ${at(Ri)} ${at(1.5)};
  z-index: ${e=>e.zIndex};
`,Q.div`
  background-color: ${nt("backgroundActive")};
  border-radius: 3px;
  color: ${nt("grey3")};
  ${mt("bold")};
  ${ht("small")};
  padding-left: ${at(.5)};
  padding-right: ${at(.5)};
`,Q.div`
  display: ${e=>e.isInline?"inline-block":"block"};
  ${e=>e.verticalAlign&&`vertical-align: ${e.verticalAlign}`};
  &:focus-visible {
    // Note: 0px solid transparent prevents focus rings from disappearing for -ms-high-contrast.
    // TODO(LNS-183): Provide more robust polyfill/support for :focus for older versions of Safari, which don't support :focus-visible
    outline: 0px solid transparent;
    box-shadow: var(--lns-formFieldBorderShadowFocus);
  }
`,Object.keys({topLeft:"top-start",topCenter:"top-center",topRight:"top-end",bottomLeft:"bottom-start",bottomCenter:"bottom-center",bottomRight:"bottom-end",leftTop:"left-start",leftCenter:"left-center",leftBottom:"left-end",rightTop:"right-start",rightCenter:"right-center",rightBottom:"right-end"});var Oi={medium:{switchHeight:16,switchWidth:32,knobOffset:2},large:{switchHeight:28,switchWidth:56,knobOffset:4}},Pi={knob:{active:{enabled:nt("white"),disabled:nt("disabledContent")},inactive:{enabled:nt("white"),disabled:nt("disabledContent")}},track:{active:{enabled:nt("blurple"),disabled:nt("disabledBackground")},inactive:{enabled:nt("grey6"),disabled:nt("disabledBackground")}}},wi=e=>Oi[e.switchSize].switchHeight-2*Oi[e.switchSize].knobOffset,ji=(Q.label`
  display: block;
  position: relative;
`,Q.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  // to overlap SwitchBox and occupy the same space
  z-index: 1;
  margin: 0;
  width: ${e=>Oi[e.switchSize].switchWidth}px;
  height: ${e=>Oi[e.switchSize].switchHeight}px;

  &:focus-visible ~ .SwitchBox {
    ${vt()};
  }
  &:not(:checked) {
    & + .SwitchBox {
      background-color: ${Pi.track.inactive.enabled};
    }
    &:disabled + .SwitchBox {
      background-color: ${Pi.track.inactive.disabled};
    }
  }
  &:checked {
    & + .SwitchBox {
      background-color: ${Pi.track.active.enabled};
    }
    &:disabled + .SwitchBox {
      background-color: ${Pi.track.active.disabled};
    }
    & + .SwitchBox:after {
      transform: translateX(${e=>(e=>Oi[e.switchSize].switchWidth-Oi[e.switchSize].switchHeight)(e)}px);
    }
  }
  &:disabled {
    pointer-events: none;
  }
`,Q.div`
  width: ${e=>Oi[e.switchSize].switchWidth}px;
  height: ${e=>Oi[e.switchSize].switchHeight}px;
  position: relative;
  border-radius: var(--lns-radius-full);
  transition: 0.2s;
  cursor: ${e=>e.isDisabled?"default":"pointer"};
  &:after {
    content: '';
    position: absolute;
    top: ${e=>Oi[e.switchSize].knobOffset}px;
    left: ${e=>Oi[e.switchSize].knobOffset}px;
    width: ${e=>wi(e)}px;
    height: ${e=>wi(e)}px;
    border-radius: var(--lns-radius-full);
    transition: 0.15s;
    background-color: ${e=>e.isDisabled?Pi.knob.active.disabled:Pi.knob.active.enabled};
  }
`,Q.div`
  ${e=>ht(e.size)};
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
`,e=>r.createElement("defs",null,r.createElement("radialGradient",{id:`ai-logo-${e}-gradient-1`,cx:"50%",cy:"50%",r:"100%",fx:"0%",fy:"0%"},r.createElement("stop",{offset:"30%",stopColor:"#97ACFD"}),r.createElement("stop",{offset:"33%",stopColor:"#B3B2F4"}),r.createElement("stop",{offset:"43%",stopColor:"#DEB0E0"}),r.createElement("stop",{offset:"50%",stopColor:"#DFC6E5"}),r.createElement("stop",{offset:"72%",stopColor:"#6663F6"})),r.createElement("radialGradient",{id:`ai-logo-${e}-gradient-2`,r:"100%",fx:"40%",fy:"72%"},r.createElement("stop",{offset:"20%",stopColor:"#615CF500"}),r.createElement("stop",{offset:"32%",stopColor:"#615CF550"}),r.createElement("stop",{offset:"48%",stopColor:"#6663F6"})),r.createElement("radialGradient",{id:`ai-logo-${e}-gradient-3`,r:"100%",fx:"0%",fy:"100%"},r.createElement("stop",{offset:"25%",stopColor:"#6663F6"}),r.createElement("stop",{offset:"38%",stopColor:"#6E68F450"}),r.createElement("stop",{offset:"45%",stopColor:"#6E68F400"})))),zi="M30 15.4433C30 16.6091 29.0933 16.8581 27.9562 16.9301C22.5158 17.2323 16.7962 22.686 16.4795 28.112C16.422 29.2634 16.173 30.1702 15.0072 30.1702C13.8414 30.1702 13.578 29.2634 13.5205 28.0976C13.2038 22.686 7.48416 17.2323 2.05814 16.9301C0.906735 16.8581 0 16.6091 0 15.4433C0 14.2775 0.906735 14.043 2.05814 13.971C7.48416 13.6687 13.2038 7.65433 13.5205 2.22831C13.578 1.0769 13.827 0.170166 15.0072 0.170166C16.1874 0.170166 16.422 1.0769 16.4795 2.22831C16.7962 7.65433 22.5158 13.6687 27.9419 13.971C29.0933 14.043 30 14.2919 30 15.4433Z",xi=e=>{var t=e,{brand:i,symbolColor:n,customId:a,title:o}=t,s=Ke(t,["brand","symbolColor","customId","title"]);return"ai"===i?r.createElement("svg",We({viewBox:"0 0 30 31",fill:"none"},s),o&&r.createElement("title",null,o),n?r.createElement("path",{d:zi,fill:nt(n)}):r.createElement(r.Fragment,null,ji(a),[...Array(3)].map(((e,t)=>r.createElement("path",{key:t,d:zi,fill:`url(#ai-logo-${a}-gradient-${t+1}`}))))):r.createElement("svg",We({viewBox:"0 0 31 30",fill:"none"},s),o&&r.createElement("title",null,o),r.createElement("path",{d:"M30.01 13.43h-9.142l7.917-4.57-1.57-2.72-7.918 4.57 4.57-7.915-2.72-1.57-4.571 7.913V0h-3.142v9.139L8.863 1.225l-2.721 1.57 4.57 7.913L2.796 6.14 1.225 8.86l7.917 4.57H0v3.141h9.141l-7.916 4.57 1.57 2.72 7.918-4.57-4.571 7.915 2.72 1.57 4.572-7.914V30h3.142v-9.334l4.655 8.06 2.551-1.472-4.656-8.062 8.087 4.668 1.571-2.72-7.916-4.57h9.141v-3.14h.001zm-15.005 5.84a4.271 4.271 0 11-.001-8.542 4.271 4.271 0 01.001 8.542z",fill:nt(n||"primary")}))},Ii=e=>{var t=e,{brand:i,wordmarkColor:n,title:a}=t,o=Ke(t,["brand","wordmarkColor","title"]);return"ai"===i?r.createElement("svg",We({viewBox:"0 0 94 23",fill:n},o),a&&r.createElement("title",null,a),r.createElement("path",{d:"M4.12637 22.4624H0V0H4.12637V22.4624Z"}),r.createElement("path",{d:"M13.3999 19.1737C15.4166 19.1737 17.2781 17.7155 17.2781 14.8301C17.2781 11.9448 15.4166 10.4866 13.3999 10.4866C11.3833 10.4866 9.52175 11.9448 9.52175 14.8301C9.52175 17.6845 11.3833 19.1737 13.3999 19.1737ZM13.3999 6.7325C17.9606 6.7325 21.4045 10.1143 21.4045 14.8301C21.4045 19.515 17.9606 22.9277 13.3999 22.9277C8.83919 22.9277 5.39538 19.515 5.39538 14.8301C5.39538 10.1143 8.83919 6.7325 13.3999 6.7325Z"}),r.createElement("path",{d:"M29.7548 19.1737C31.7714 19.1737 33.6329 17.7155 33.6329 14.8301C33.6329 11.9448 31.7714 10.4866 29.7548 10.4866C27.7381 10.4866 25.8766 11.9448 25.8766 14.8301C25.8766 17.6845 27.7381 19.1737 29.7548 19.1737ZM29.7548 6.7325C34.3155 6.7325 37.7593 10.1143 37.7593 14.8301C37.7593 19.515 34.3155 22.9277 29.7548 22.9277C25.194 22.9277 21.7502 19.515 21.7502 14.8301C21.7502 10.1143 25.194 6.7325 29.7548 6.7325Z"}),r.createElement("path",{d:"M43.1622 22.4624H39.0358V7.19788H42.976V9.05941C43.8137 7.57019 45.7683 6.76353 47.4437 6.76353C49.5224 6.76353 51.1978 7.66326 51.9734 9.30761C53.1834 7.44609 54.7967 6.76353 56.8134 6.76353C59.6367 6.76353 62.3359 8.46992 62.3359 12.5653V22.4624H58.3336V13.403C58.3336 11.7586 57.5269 10.5176 55.6344 10.5176C53.8659 10.5176 52.8111 11.8827 52.8111 13.5271V22.4624H48.7157V13.403C48.7157 11.7586 47.878 10.5176 46.0165 10.5176C44.2171 10.5176 43.1622 11.8517 43.1622 13.5271V22.4624Z"}),r.createElement("path",{d:"M84.1324 22.4624L82.3019 17.4363H73.3666L71.5361 22.4624H67.0064L75.4453 0.46538H80.4093L88.7862 22.4624H84.1324ZM77.8342 5.21226L74.7937 13.5271H80.8747L77.8342 5.21226Z"}),r.createElement("path",{d:"M94 22.4624H89.6565V0.46538H94V22.4624Z"})):r.createElement("svg",We({viewBox:"0 0 62 23",fill:n},o),a&&r.createElement("title",null,a),r.createElement("path",{d:"M.109 21.973V.027h4.028v21.946H.109zM38.742 7.059h3.846v1.82c.818-1.456 2.727-2.244 4.362-2.244 2.03 0 3.665.88 4.422 2.485 1.18-1.82 2.756-2.485 4.725-2.485 2.756 0 5.39 1.667 5.39 5.668v9.67h-3.906v-8.851c0-1.607-.788-2.82-2.636-2.82-1.727 0-2.757 1.335-2.757 2.942v8.73h-3.997v-8.852c0-1.607-.817-2.82-2.635-2.82-1.757 0-2.787 1.305-2.787 2.942v8.73h-4.027V7.059zM13.24 22.405c-4.537 0-7.824-3.367-7.824-7.889 0-4.45 3.276-7.896 7.824-7.896 4.57 0 7.824 3.478 7.824 7.896 0 4.49-3.288 7.889-7.824 7.889zm0-12.135a4.25 4.25 0 00-4.244 4.247 4.25 4.25 0 004.244 4.247 4.25 4.25 0 004.243-4.247 4.25 4.25 0 00-4.243-4.247zM29.667 22.405c-4.538 0-7.824-3.367-7.824-7.889 0-4.45 3.276-7.896 7.824-7.896 4.57 0 7.824 3.478 7.824 7.896 0 4.49-3.29 7.889-7.824 7.889zm0-12.186a4.3 4.3 0 00-4.293 4.296 4.3 4.3 0 004.293 4.296 4.3 4.3 0 004.293-4.296 4.3 4.3 0 00-4.293-4.296z"}))},Ni="M100 7.76427C100 8.35691 99.539 8.48348 98.961 8.52007C96.1953 8.67371 93.2877 11.4461 93.1267 14.2045C93.0975 14.7898 92.9709 15.2508 92.3783 15.2508C91.7856 15.2508 91.6517 14.7898 91.6225 14.1972C91.4615 11.4461 88.5539 8.67371 85.7955 8.52007C85.2102 8.48348 84.7492 8.35691 84.7492 7.76427C84.7492 7.17162 85.2102 7.05237 85.7955 7.01578C88.5539 6.86213 91.4615 3.80464 91.6225 1.04628C91.6517 0.460948 91.7783 0 92.3783 0C92.9782 0 93.0975 0.460948 93.1267 1.04628C93.2877 3.80464 96.1953 6.86213 98.9537 7.01578C99.539 7.05237 100 7.17894 100 7.76427Z",Ei=e=>{var t=e,{brand:i,wordmarkColor:n,symbolColor:a,customId:o,title:s}=t,u=Ke(t,["brand","wordmarkColor","symbolColor","customId","title"]);return"ai"===i?r.createElement("svg",We({viewBox:"0 0 100 30",fill:"none"},u),s&&r.createElement("title",null,s),a?r.createElement("path",{d:Ni,fill:nt(a)}):r.createElement(r.Fragment,null,ji(o),[...Array(3)].map(((e,t)=>r.createElement("path",{key:t,d:Ni,fill:`url(#ai-logo-${o}-gradient-${t+1}`})))),r.createElement("g",{fill:n},r.createElement("path",{d:"M4.1997 29.5909H0.570312V9.83386H4.1997V29.5909Z"}),r.createElement("path",{d:"M12.3563 26.6983C14.1301 26.6983 15.7674 25.4157 15.7674 22.8778C15.7674 20.34 14.1301 19.0574 12.3563 19.0574C10.5826 19.0574 8.94526 20.34 8.94526 22.8778C8.94526 25.3884 10.5826 26.6983 12.3563 26.6983ZM12.3563 15.7555C16.3678 15.7555 19.3968 18.73 19.3968 22.8778C19.3968 26.9984 16.3678 30.0002 12.3563 30.0002C8.34491 30.0002 5.31587 26.9984 5.31587 22.8778C5.31587 18.73 8.34491 15.7555 12.3563 15.7555Z"}),r.createElement("path",{d:"M26.7414 26.6983C28.5152 26.6983 30.1525 25.4157 30.1525 22.8778C30.1525 20.34 28.5152 19.0574 26.7414 19.0574C24.9676 19.0574 23.3303 20.34 23.3303 22.8778C23.3303 25.3884 24.9676 26.6983 26.7414 26.6983ZM26.7414 15.7555C30.7528 15.7555 33.7819 18.73 33.7819 22.8778C33.7819 26.9984 30.7528 30.0002 26.7414 30.0002C22.73 30.0002 19.7009 26.9984 19.7009 22.8778C19.7009 18.73 22.73 15.7555 26.7414 15.7555Z"}),r.createElement("path",{d:"M38.534 29.5909H34.9047V16.1648H38.3703V17.8022C39.1071 16.4923 40.8263 15.7828 42.2999 15.7828C44.1282 15.7828 45.6018 16.5742 46.284 18.0205C47.3483 16.3831 48.7673 15.7828 50.5411 15.7828C53.0243 15.7828 55.3984 17.2837 55.3984 20.8858V29.5909H51.8782V21.6226C51.8782 20.1763 51.1687 19.0847 49.5041 19.0847C47.9486 19.0847 47.0208 20.2854 47.0208 21.7317V29.5909H43.4187V21.6226C43.4187 20.1763 42.6819 19.0847 41.0446 19.0847C39.4619 19.0847 38.534 20.2581 38.534 21.7317V29.5909Z"}),r.createElement("path",{d:"M74.5698 29.5909L72.9598 25.1701H65.1006L63.4906 29.5909H59.5064L66.929 10.2432H71.2951L78.6631 29.5909H74.5698ZM69.0302 14.4184L66.3559 21.7317H71.7045L69.0302 14.4184Z"}),r.createElement("path",{d:"M83.249 29.5909H79.4285V10.2432H83.249V29.5909Z"}))):r.createElement("svg",We({viewBox:"0 0 100 30",fill:"none"},u),s&&r.createElement("title",null,s),r.createElement("path",{d:"M30.01 13.43h-9.142l7.917-4.57-1.57-2.72-7.918 4.57 4.57-7.915-2.72-1.57-4.571 7.913V0h-3.142v9.139L8.863 1.225l-2.721 1.57 4.57 7.913L2.796 6.14 1.225 8.86l7.917 4.57H0v3.141h9.141l-7.916 4.57 1.57 2.72 7.918-4.57-4.571 7.915 2.72 1.57 4.572-7.914V30h3.142v-9.334l4.655 8.06 2.551-1.472-4.656-8.062 8.087 4.668 1.571-2.72-7.916-4.57h9.141v-3.14h.001zm-15.005 5.84a4.271 4.271 0 11-.001-8.542 4.271 4.271 0 01.001 8.542z",fill:nt(a||"primary")}),r.createElement("path",{d:"M38.109 25.973V4.027h4.028v21.946h-4.028zM76.742 11.059h3.846v1.82c.818-1.455 2.727-2.244 4.362-2.244 2.03 0 3.665.88 4.422 2.485 1.18-1.82 2.756-2.485 4.725-2.485 2.756 0 5.39 1.667 5.39 5.668v9.67h-3.906v-8.851c0-1.607-.788-2.82-2.636-2.82-1.727 0-2.757 1.335-2.757 2.942v8.73h-3.996v-8.852c0-1.607-.818-2.82-2.636-2.82-1.757 0-2.787 1.305-2.787 2.942v8.73h-4.027V11.059zM51.24 26.405c-4.538 0-7.824-3.367-7.824-7.889 0-4.45 3.276-7.896 7.824-7.896 4.57 0 7.824 3.478 7.824 7.896 0 4.49-3.288 7.889-7.824 7.889zm0-12.135a4.25 4.25 0 00-4.244 4.247 4.25 4.25 0 004.244 4.247 4.25 4.25 0 004.243-4.247 4.25 4.25 0 00-4.243-4.247zM67.667 26.405c-4.538 0-7.824-3.367-7.824-7.889 0-4.45 3.276-7.896 7.824-7.896 4.57 0 7.824 3.478 7.824 7.896 0 4.49-3.29 7.889-7.824 7.889zm0-12.186a4.3 4.3 0 00-4.293 4.296 4.3 4.3 0 004.293 4.296 4.3 4.3 0 004.293-4.296 4.3 4.3 0 00-4.293-4.296z",fill:n}))},ki=Q.span`
  display: block;
  ${e=>e.maxWidth&&st("max-width",e.maxWidth)};

  & > svg.lns-logoSvg {
    display: block;
    width: 100%;
    height: 100%;
    ${e=>e.maxWidth&&st("max-width",e.maxWidth)};
  }
`,Di=e=>{var t=e,{variant:i="combined",maxWidth:n,symbolColor:a,wordmarkColor:o="body",brand:s="loom",customId:u="",title:c=""}=t,p=Ke(t,["variant","maxWidth","symbolColor","wordmarkColor","brand","customId","title"]);return r.createElement(ki,We({variant:i,maxWidth:n},p),"combined"===i&&r.createElement(Ei,{brand:s,symbolColor:a,wordmarkColor:nt(o),customId:u,className:"lns-logoSvg",title:c}),"symbol"===i&&r.createElement(xi,{brand:s,symbolColor:a,customId:u,className:"lns-logoSvg",title:c}),"wordmark"===i&&r.createElement(Ii,{brand:s,wordmarkColor:nt(o),className:"lns-logoSvg",title:c}))},Ui={small:"40px",medium:"80px"},qi=(Q.span`
  animation: ${e=>e.animation};
  background-image: url(${"https://cdn.loom.com/assets/lens"}/${e=>e.brand}-loader.svg);
  background-size: cover;
  background-position: left center;
  display: block;
  height: ${e=>Ui[e.size]};
  width: ${e=>Ui[e.size]};

  @keyframes spin {
    100% {
      background-position: right center;
    }
  }
`,Q.label`
  display: block;
  position: relative;

  .RadioBox:after {
    background-color: transparent;
  }
`),Li=Q.input`
  position: absolute;
  opacity: 0;

  &:not(:disabled) {
    cursor: pointer;

    & ~ .RadioBox {
      border: 2px solid ${nt("body")};
    }

    &:checked ~ .RadioBox {
      border: 2px solid ${nt("body")};
    }
  }

  &:disabled,
  &:disabled ~ .RadioBox {
    pointer-events: none;
  }

  &:disabled ~ .RadioBox {
    background-color: ${nt("disabledBackground")};
  }

  &:checked {
    & ~ .RadioBox:after {
      background-color: ${nt("blurple")};
    }

    &:disabled ~ .RadioBox:after {
      background-color: ${nt("disabledContent")};
    }
  }

  &:focus-visible ~ .RadioBox {
    ${vt()};
  }
`,Fi=Q.span`
  cursor: pointer;
  width: ${at(2.25)};
  height: ${at(2.25)};
  ${ft("full")};
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  &:after {
    content: '';
    width: ${at(1)};
    height: ${at(1)};
    ${ft("full")};
    background-color: ${nt("white")};
  }
`,Hi=((0,r.forwardRef)(((e,t)=>{var i=e,{isDisabled:n,isChecked:a,onFocus:o,onChange:s,onBlur:u}=i,c=Ke(i,["isDisabled","isChecked","onFocus","onChange","onBlur"]);return r.createElement(qi,null,r.createElement(Li,We({type:"radio",disabled:n,checked:a,onFocus:o,onChange:s,onBlur:u,ref:t},c)),r.createElement(Fi,{className:"RadioBox"}))})),"/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */"),Bi={border:k`
    .ListRowWrapper:last-child {
      border-bottom: 1px solid ${nt("border")};
    }

    .ListRowWrapper,
    .ListRowWrapper:first-child ${Hi} {
      border-top: 1px solid ${nt("border")};
    }
  `,stripe:k`
    .ListRowWrapper {
      &:nth-child(odd) ${Hi} {
        background-color: ${nt("backgroundSecondary")};
      }
    }

    .ListRowWrapper {
      ${ft("medium")};
    }
  `,clear:k``},Wi=(Q.div`
  .ListRowWrapper {
    grid-template-columns: ${e=>e.columns&&e.columns};
    ${e=>st("gap",e.gap)};
  }

  ${e=>Bi[e.variant]};
`,Q.div`
  display: grid;
  align-items: center;
  text-decoration: none;
  color: inherit;

  ${e=>st("height",e.height)};
  ${e=>st("min-height",e.minHeight)};
  ${e=>st("max-height",e.maxHeight)};
  ${e=>st("padding",e.padding)};
  ${e=>st("padding-top",e.paddingTop)};
  ${e=>st("padding-bottom",e.paddingBottom)};
  ${e=>st("padding-left",e.paddingLeft)};
  ${e=>st("padding-right",e.paddingRight)};

  ${e=>e.paddingY&&`\n    ${st("padding-top",e.paddingY)}\n    ${st("padding-bottom",e.paddingY)}\n    `};

  ${e=>e.paddingX&&`\n    ${st("padding-left",e.paddingX)}\n    ${st("padding-right",e.paddingX)}\n    `};

  ${e=>(e.onClick||e.href)&&"cursor: pointer;"};

  &.ListRowWrapper:nth-child(even),
  &.ListRowWrapper:nth-child(odd) ${Hi} {
    ${e=>e.backgroundColor&&`background-color: ${nt(e.backgroundColor)}`};

    &:hover {
      ${e=>(e.onClick||e.href)&&`\n      background-color: ${nt("backgroundHover")};\n      border-color: transparent;\n      ${ft("medium")};\n    `};
    }
  }
`,r.createContext({}),Q.div`
  ${e=>{return e.scrollOffset&&`margin: 0 ${t=e.scrollOffset,`calc(-1 * ${ot(t)})`};\n  `;var t}};
`,Q.nav`
  --activeIndicatorHeight: 3px;

  display: flex;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ${e=>e.scrollOffset&&st("padding-left",e.scrollOffset)};

  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    ${e=>e.hasFullTabs&&"flex: 1 0"};
  }

  & > * + * {
    margin-left: ${at(2)};
  }

  &:after {
    content: '';
    flex-shrink: 0;
    ${e=>e.scrollOffset&&st("width",e.scrollOffset)};
  }
`,Q.nav`
  ${ft("full")};
  background-color: var(--lns-color-backgroundSecondary);

  padding: var(--lns-space-xsmall);

  display: flex;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ${e=>e.scrollOffset&&st("padding-left",e.scrollOffset)};

  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    flex: 1 0;
  }

  & > * + * {
    margin-left: ${at(2)};
  }

  &:after {
    content: '';
    flex-shrink: 0;
    ${e=>e.scrollOffset&&st("width",e.scrollOffset)};
  }
`,Q.button`
  appearance: none;
  font: inherit;
  background: transparent;
  border: none;
  ${ft("medium")};
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
  ${mt("bold")};
  transition: 0.6s color;
  white-space: nowrap;
  color: ${e=>nt(e.isActive?"body":"bodyDimmed")};
  ${e=>e.isActive&&`border-color: ${nt("primary")};\n  `};

  &:focus,
  &:focus-visible {
    outline: 1px solid transparent;
  }

  &:focus-visible {
    ${vt(void 0,"inset")};
  }

  &:hover {
    color: ${nt("body")};
    transition: 0.3s color;
  }

  &::after {
    bottom: 0;
    ${ft("medium")};
    content: '';
    height: var(--activeIndicatorHeight);
    position: absolute;
    width: 100%;
    ${e=>e.isActive&&`background-color: ${nt("primary")}`};
  }
`,Q.button`
  padding: ${at(1)} 0;

  appearance: none;
  font: inherit;
  background: transparent;
  border: none;
  ${ft("full")};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  position: relative;
  color: inherit;
  text-decoration: none;
  flex-shrink: 0;
  ${mt("bold")};

  transition: 0.6s color;
  white-space: nowrap;
  ${e=>e.isActive&&`background-color: ${nt("background")};\n    color: ${nt("primary")};\n  `};

  &:focus,
  &:focus-visible {
    outline: 1px solid transparent;
  }

  &:focus-visible {
    ${vt(void 0,"inset")};
  }

  &:hover {
    color: ${nt("primary")};
    transition: 0.3s color;
  }
`,Q.div`
  display: inline-grid;
  grid-auto-flow: column;
  align-items: center;
  vertical-align: middle;
  padding: 0 ${at(1.5)};
  min-height: ${at(3.25)};
  color: ${e=>nt(e.color)};
  background-color: ${e=>nt(e.backgroundColor)};
  ${ft("full")};
  ${ht("small")};
  ${mt("bold")};
  ${st("gap","xsmall")};
`,Q.div`
  position: relative;
  width: fit-content;
  // transform forces the popover to calculate the position from the trigger instead of the viewport
  transform: translate(0);
  z-index: 1;
`,Q.div`
  ${e=>e.zIndex&&`z-index: ${e.zIndex}`};
`,Q.span`
  display: block;
  color: ${e=>e.color?nt(e.color):nt("grey8")};
  ${e=>e.size&&st("width",e.size)};
  ${e=>e.size&&st("height",e.size)};

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`,e=>k`
  ${st("width",e.width)};
  ${st("height",e.height)};
  ${st("min-width",e.minWidth)};
  ${st("min-height",e.minHeight)};
  ${st("max-width",e.maxWidth)};
  ${st("max-height",e.maxHeight)};
`);Q.div`
  display: flex;
  ${e=>lt("align-items",e.alignItems)};
  ${e=>e.justifyContent&&lt("justify-content",e.justifyContent)};
  ${e=>e.alignContent&&lt("align-content",e.alignContent)};
  ${e=>lt("flex-wrap",e.wrap)};
  ${e=>e.direction&&lt("flex-direction",e.direction)};
  ${e=>e.gap&&st("--gap",e.gap)};
  margin-right: calc(-1 * var(--gap));
  margin-bottom: calc(-1 * var(--gap));
  ${e=>Wi(e)};
`,Q.div`
  ${e=>yt("flex-grow",e.grow)};
  ${e=>yt("flex-shrink",e.shrink)};
  ${e=>e.basis&&st("flex-basis",e.basis)};
  margin-right: var(--gap);
  margin-bottom: var(--gap);
  ${e=>Wi(e)};
`,Q.div`
  padding: var(--lns-space-medium);
  & .react-colorful {
    width: auto;
    height: auto;
  }
  & .react-colorful__saturation {
    height: ${at(14)};
    border-bottom: none;
    box-shadow: inset 0 0 0 1px var(--lns-color-border);
    border-radius: var(--lns-radius-medium);
    margin-bottom: var(--lns-space-small);
  }

  & .react-colorful__hue {
    height: ${at(2)};
    width: 100%;
    box-shadow: inset 0 0 0 1px var(--lns-color-border);
    border-radius: 3px;
    margin-bottom: var(--lns-space-medium);
  }

  & .react-colorful__saturation-pointer {
    width: ${at(1)};
    height: ${at(1)};
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 0 0 3px var(--lns-color-border);
    border-radius: var(--lns-radius-medium);
  }
  & .react-colorful__hue-pointer {
    width: ${at(1)};
    height: ${at(2.5)};
    border-radius: 2px;
    box-shadow: 0 0 0 2px var(--lns-color-border);
    cursor: pointer;
    border: 2px solid white;
  }
`,Q.div`
  position: relative;
  width: ${at(31)};
  background-color: var(--lns-color-overlay);
  border-radius: var(--lns-radius-medium);
  box-shadow: 0 0 0 1px var(--lns-color-border), var(--lns-shadow-medium);
`,Q.div`
  position: relative;
  width: 100%;

  input {
    padding: 0 0 0 ${at(4)};
    height: ${at(4)};
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
`,Q.div`
  position: absolute;
  width: ${at(3)};
  height: ${at(3)};
  left: var(--lns-space-xsmall);
  top: var(--lns-space-xsmall);
  border: 1px solid rgba(0, 0, 0, 0.1);
  ${ft("full")};
  background-color: ${e=>e.color};
`,Q.div`
  position: relative;
  border-radius: var(--lns-radius-medium);
  padding: 0 var(--lns-space-medium) var(--lns-space-medium)
    var(--lns-space-medium);
`,Q.div`
  display: grid;
  grid-template-columns: repeat(7, ${at(3)});
  gap: ${at(1)} ${at(1)};
  border-bottom: 1px solid var(--lns-color-border);
  padding: var(--lns-space-medium);
`,Q.div`
  cursor: pointer;
  width: ${at(3)};
  height: ${at(3)};
  border-radius: 2px;
  background-color: ${e=>e.color};
  border: ${e=>e.selected===e.color?"1px solid white":"1px solid var(--lns-color-border)"};
  box-shadow: ${e=>e.selected===e.color&&"0 0 0 2px var(--lns-color-focusRing)"};
`;var Gi=(e=>(e.qualityAuto="Auto",e.quality1080p="1080p",e.quality720p="720p",e))(Gi||{}),Ki=(e=>(e.FullScreen="full_screen",e.Window="window",e.CurrentTab="current_tab",e.CameraOnly="camera_only",e))(Ki||{}),$i="NOT_FOUND",Qi=function(e,t){return e===t};function Vi(e,t){var r,i,n="object"==typeof t?t:{equalityCheck:t},a=n.equalityCheck,o=void 0===a?Qi:a,s=n.maxSize,u=void 0===s?1:s,c=n.resultEqualityCheck,p=function(e){return function(t,r){if(null===t||null===r||t.length!==r.length)return!1;for(var i=t.length,n=0;n<i;n++)if(!e(t[n],r[n]))return!1;return!0}}(o),l=1===u?(r=p,{get:function(e){return i&&r(i.key,e)?i.value:$i},put:function(e,t){i={key:e,value:t}},getEntries:function(){return i?[i]:[]},clear:function(){i=void 0}}):function(e,t){var r=[];function i(e){var i=r.findIndex((function(r){return t(e,r.key)}));if(i>-1){var n=r[i];return i>0&&(r.splice(i,1),r.unshift(n)),n.value}return $i}return{get:i,put:function(t,n){i(t)===$i&&(r.unshift({key:t,value:n}),r.length>e&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(u,p);function d(){var t=l.get(arguments);if(t===$i){if(t=e.apply(null,arguments),c){var r=l.getEntries().find((function(e){return c(e.value,t)}));r&&(t=r.value)}l.put(arguments,t)}return t}return d.clearCache=function(){return l.clear()},d}function Zi(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return function(){for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];var a,o=0,s={memoizeOptions:void 0},u=i.pop();if("object"==typeof u&&(s=u,u=i.pop()),"function"!=typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var c=s.memoizeOptions,p=void 0===c?r:c,l=Array.isArray(p)?p:[p],d=function(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"==typeof e}))){var r=t.map((function(e){return"function"==typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return t}(i),y=e.apply(void 0,[function(){return o++,u.apply(null,arguments)}].concat(l)),b=e((function(){for(var e=[],t=d.length,r=0;r<t;r++)e.push(d[r].apply(null,arguments));return a=y.apply(null,e)}));return Object.assign(b,{resultFunc:u,memoizedResultFunc:y,dependencies:d,lastResult:function(){return a},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),b}}var Yi=Zi(Vi);function Ji(e){for(var t=arguments.length,r=Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.map((function(e){return"'"+e+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Xi(e){return!!e&&!!e[Ln]}function en(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===Fn}(e)||Array.isArray(e)||!!e[qn]||!!e.constructor[qn]||sn(e)||un(e))}function tn(e,t,r){void 0===r&&(r=!1),0===rn(e)?(r?Object.keys:Hn)(e).forEach((function(i){r&&"symbol"==typeof i||t(i,e[i],e)})):e.forEach((function(r,i){return t(i,r,e)}))}function rn(e){var t=e[Ln];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:sn(e)?2:un(e)?3:0}function nn(e,t){return 2===rn(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function an(e,t,r){var i=rn(e);2===i?e.set(t,r):3===i?(e.delete(t),e.add(r)):e[t]=r}function on(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function sn(e){return En&&e instanceof Map}function un(e){return kn&&e instanceof Set}function cn(e){return e.o||e.t}function pn(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Bn(e);delete t[Ln];for(var r=Hn(t),i=0;i<r.length;i++){var n=r[i],a=t[n];!1===a.writable&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[n]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[n]})}return Object.create(Object.getPrototypeOf(e),t)}function ln(e,t){return void 0===t&&(t=!1),yn(e)||Xi(e)||!en(e)||(rn(e)>1&&(e.set=e.add=e.clear=e.delete=dn),Object.freeze(e),t&&tn(e,(function(e,t){return ln(t,!0)}),!0)),e}function dn(){Ji(2)}function yn(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function bn(e){var t=Wn[e];return t||Ji(18,e),t}function gn(){return In}function hn(e,t){t&&(bn("Patches"),e.u=[],e.s=[],e.v=t)}function fn(e){mn(e),e.p.forEach(vn),e.p=null}function mn(e){e===In&&(In=e.l)}function Sn(e){return In={p:[],l:In,h:e,m:!0,_:0}}function vn(e){var t=e[Ln];0===t.i||1===t.i?t.j():t.O=!0}function An(e,t){t._=t.p.length;var r=t.p[0],i=void 0!==e&&e!==r;return t.h.g||bn("ES5").S(t,e,i),i?(r[Ln].P&&(fn(t),Ji(4)),en(e)&&(e=Cn(t,e),t.l||Tn(t,e)),t.u&&bn("Patches").M(r[Ln].t,e,t.u,t.s)):e=Cn(t,r,[]),fn(t),t.u&&t.v(t.u,t.s),e!==Un?e:void 0}function Cn(e,t,r){if(yn(t))return t;var i=t[Ln];if(!i)return tn(t,(function(n,a){return Mn(e,i,t,n,a,r)}),!0),t;if(i.A!==e)return t;if(!i.P)return Tn(e,i.t,!0),i.t;if(!i.I){i.I=!0,i.A._--;var n=4===i.i||5===i.i?i.o=pn(i.k):i.o;tn(3===i.i?new Set(n):n,(function(t,a){return Mn(e,i,n,t,a,r)})),Tn(e,n,!1),r&&e.u&&bn("Patches").R(i,r,e.u,e.s)}return i.o}function Mn(e,t,r,i,n,a){if(Xi(n)){var o=Cn(e,n,a&&t&&3!==t.i&&!nn(t.D,i)?a.concat(i):void 0);if(an(r,i,o),!Xi(o))return;e.m=!1}if(en(n)&&!yn(n)){if(!e.h.F&&e._<1)return;Cn(e,n),t&&t.A.l||Tn(e,n)}}function Tn(e,t,r){void 0===r&&(r=!1),e.h.F&&e.m&&ln(t,r)}function _n(e,t){var r=e[Ln];return(r?cn(r):e)[t]}function Rn(e,t){if(t in e)for(var r=Object.getPrototypeOf(e);r;){var i=Object.getOwnPropertyDescriptor(r,t);if(i)return i;r=Object.getPrototypeOf(r)}}function On(e){e.P||(e.P=!0,e.l&&On(e.l))}function Pn(e){e.o||(e.o=pn(e.t))}function wn(e,t,r){var i=sn(t)?bn("MapSet").N(t,r):un(t)?bn("MapSet").T(t,r):e.g?function(e,t){var r=Array.isArray(e),i={i:r?1:0,A:t?t.A:gn(),P:!1,I:!1,D:{},l:t,t:e,k:null,o:null,j:null,C:!1},n=i,a=Gn;r&&(n=[i],a=Kn);var o=Proxy.revocable(n,a),s=o.revoke,u=o.proxy;return i.k=u,i.j=s,u}(t,r):bn("ES5").J(t,r);return(r?r.A:gn()).p.push(i),i}function jn(e){return Xi(e)||Ji(22,e),function e(t){if(!en(t))return t;var r,i=t[Ln],n=rn(t);if(i){if(!i.P&&(i.i<4||!bn("ES5").K(i)))return i.t;i.I=!0,r=zn(t,n),i.I=!1}else r=zn(t,n);return tn(r,(function(t,n){i&&function(e,t){return 2===rn(e)?e.get(t):e[t]}(i.t,t)===n||an(r,t,e(n))})),3===n?new Set(r):r}(e)}function zn(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return pn(e)}var xn,In,Nn="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),En="undefined"!=typeof Map,kn="undefined"!=typeof Set,Dn="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,Un=Nn?Symbol.for("immer-nothing"):((xn={})["immer-nothing"]=!0,xn),qn=Nn?Symbol.for("immer-draftable"):"__$immer_draftable",Ln=Nn?Symbol.for("immer-state"):"__$immer_state",Fn=("undefined"!=typeof Symbol&&Symbol.iterator,""+Object.prototype.constructor),Hn="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Bn=Object.getOwnPropertyDescriptors||function(e){var t={};return Hn(e).forEach((function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)})),t},Wn={},Gn={get:function(e,t){if(t===Ln)return e;var r=cn(e);if(!nn(r,t))return function(e,t,r){var i,n=Rn(t,r);return n?"value"in n?n.value:null===(i=n.get)||void 0===i?void 0:i.call(e.k):void 0}(e,r,t);var i=r[t];return e.I||!en(i)?i:i===_n(e.t,t)?(Pn(e),e.o[t]=wn(e.A.h,i,e)):i},has:function(e,t){return t in cn(e)},ownKeys:function(e){return Reflect.ownKeys(cn(e))},set:function(e,t,r){var i=Rn(cn(e),t);if(null==i?void 0:i.set)return i.set.call(e.k,r),!0;if(!e.P){var n=_n(cn(e),t),a=null==n?void 0:n[Ln];if(a&&a.t===r)return e.o[t]=r,e.D[t]=!1,!0;if(on(r,n)&&(void 0!==r||nn(e.t,t)))return!0;Pn(e),On(e)}return e.o[t]===r&&"number"!=typeof r&&(void 0!==r||t in e.o)||(e.o[t]=r,e.D[t]=!0,!0)},deleteProperty:function(e,t){return void 0!==_n(e.t,t)||t in e.t?(e.D[t]=!1,Pn(e),On(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=cn(e),i=Reflect.getOwnPropertyDescriptor(r,t);return i?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:i.enumerable,value:r[t]}:i},defineProperty:function(){Ji(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Ji(12)}},Kn={};tn(Gn,(function(e,t){Kn[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),Kn.deleteProperty=function(e,t){return Kn.set.call(this,e,t,void 0)},Kn.set=function(e,t,r){return Gn.set.call(this,e[0],t,r,e[0])};var $n=function(){function e(e){var t=this;this.g=Dn,this.F=!0,this.produce=function(e,r,i){if("function"==typeof e&&"function"!=typeof r){var n=r;r=e;var a=t;return function(e){var t=this;void 0===e&&(e=n);for(var i=arguments.length,o=Array(i>1?i-1:0),s=1;s<i;s++)o[s-1]=arguments[s];return a.produce(e,(function(e){var i;return(i=r).call.apply(i,[t,e].concat(o))}))}}var o;if("function"!=typeof r&&Ji(6),void 0!==i&&"function"!=typeof i&&Ji(7),en(e)){var s=Sn(t),u=wn(t,e,void 0),c=!0;try{o=r(u),c=!1}finally{c?fn(s):mn(s)}return"undefined"!=typeof Promise&&o instanceof Promise?o.then((function(e){return hn(s,i),An(e,s)}),(function(e){throw fn(s),e})):(hn(s,i),An(o,s))}if(!e||"object"!=typeof e){if(void 0===(o=r(e))&&(o=e),o===Un&&(o=void 0),t.F&&ln(o,!0),i){var p=[],l=[];bn("Patches").M(e,o,p,l),i(p,l)}return o}Ji(21,e)},this.produceWithPatches=function(e,r){if("function"==typeof e)return function(r){for(var i=arguments.length,n=Array(i>1?i-1:0),a=1;a<i;a++)n[a-1]=arguments[a];return t.produceWithPatches(r,(function(t){return e.apply(void 0,[t].concat(n))}))};var i,n,a=t.produce(e,r,(function(e,t){i=e,n=t}));return"undefined"!=typeof Promise&&a instanceof Promise?a.then((function(e){return[e,i,n]})):[a,i,n]},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){en(e)||Ji(8),Xi(e)&&(e=jn(e));var t=Sn(this),r=wn(this,e,void 0);return r[Ln].C=!0,mn(t),r},t.finishDraft=function(e,t){var r=(e&&e[Ln]).A;return hn(r,t),An(void 0,r)},t.setAutoFreeze=function(e){this.F=e},t.setUseProxies=function(e){e&&!Dn&&Ji(20),this.g=e},t.applyPatches=function(e,t){var r;for(r=t.length-1;r>=0;r--){var i=t[r];if(0===i.path.length&&"replace"===i.op){e=i.value;break}}r>-1&&(t=t.slice(r+1));var n=bn("Patches").$;return Xi(e)?n(e,t):this.produce(e,(function(e){return n(e,t)}))},e}(),Qn=new $n,Vn=Qn.produce,Zn=(Qn.produceWithPatches.bind(Qn),Qn.setAutoFreeze.bind(Qn),Qn.setUseProxies.bind(Qn),Qn.applyPatches.bind(Qn),Qn.createDraft.bind(Qn),Qn.finishDraft.bind(Qn),Vn);n(55246),"function"==typeof Symbol&&Symbol.observable;var Yn=function(){return Math.random().toString(36).substring(7).split("").join(".")};Yn(),Yn(),n(55246),n(5806);var Jn,Xn=(Jn=function(e,t){return Jn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},Jn(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}Jn(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),ea=function(e,t){for(var r=0,i=t.length,n=e.length;r<i;r++,n++)e[n]=t[r];return e},ta=Object.defineProperty,ra=Object.defineProperties,ia=Object.getOwnPropertyDescriptors,na=Object.getOwnPropertySymbols,aa=Object.prototype.hasOwnProperty,oa=Object.prototype.propertyIsEnumerable,sa=function(e,t,r){return t in e?ta(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},ua=function(e,t){for(var r in t||(t={}))aa.call(t,r)&&sa(e,r,t[r]);if(na)for(var i=0,n=na(t);i<n.length;i++)r=n[i],oa.call(t,r)&&sa(e,r,t[r]);return e},ca=function(e,t){return ra(e,ia(t))};function pa(e){return en(e)?Zn(e,(function(){})):e}function la(e,t){function r(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var n=t.apply(void 0,r);if(!n)throw new Error("prepareAction did not return an object");return ua(ua({type:e,payload:n.payload},"meta"in n&&{meta:n.meta}),"error"in n&&{error:n.error})}return{type:e,payload:r[0]}}return r.toString=function(){return""+e},r.type=e,r.match=function(t){return t.type===e},r}function da(e){var t,r={},i=[],n={addCase:function(e,t){var i="string"==typeof e?e:e.type;if(i in r)throw new Error("addCase cannot be called with two reducers for the same action type");return r[i]=t,n},addMatcher:function(e,t){return i.push({matcher:e,reducer:t}),n},addDefaultCase:function(e){return t=e,n}};return e(n),[r,i,t]}function ya(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");var r,i="function"==typeof e.initialState?e.initialState:pa(e.initialState),n=e.reducers||{},a=Object.keys(n),o={},s={},u={};function c(){var t="function"==typeof e.extraReducers?da(e.extraReducers):[e.extraReducers],r=t[0],n=void 0===r?{}:r,a=t[1],o=void 0===a?[]:a,u=t[2],c=void 0===u?void 0:u,p=ua(ua({},n),s);return function(e,t,r,i){void 0===r&&(r=[]);var n,a="function"==typeof t?da(t):[t,r,i],o=a[0],s=a[1],u=a[2];if(function(e){return"function"==typeof e}(e))n=function(){return pa(e())};else{var c=pa(e);n=function(){return c}}function p(e,t){void 0===e&&(e=n());var r=ea([o[t.type]],s.filter((function(e){return(0,e.matcher)(t)})).map((function(e){return e.reducer})));return 0===r.filter((function(e){return!!e})).length&&(r=[u]),r.reduce((function(e,r){if(r){var i;if(Xi(e))return void 0===(i=r(e,t))?e:i;if(en(e))return Zn(e,(function(e){return r(e,t)}));if(void 0===(i=r(e,t))){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return i}return e}),e)}return p.getInitialState=n,p}(i,p,o,c)}return a.forEach((function(e){var r,i,a=n[e],c=function(e,t){return e+"/"+t}(t,e);"reducer"in a?(r=a.reducer,i=a.prepare):r=a,o[e]=r,s[c]=r,u[e]=i?la(c,i):la(c)})),{name:t,reducer:function(e,t){return r||(r=c()),r(e,t)},actions:u,caseReducers:o,getInitialState:function(){return r||(r=c()),r.getInitialState()}}}"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__,function(e){function t(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];var n=e.apply(this,r)||this;return Object.setPrototypeOf(n,t.prototype),n}Xn(t,e),Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e.prototype.concat.apply(this,t)},t.prototype.prepend=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return 1===e.length&&Array.isArray(e[0])?new(t.bind.apply(t,ea([void 0],e[0].concat(this)))):new(t.bind.apply(t,ea([void 0],e.concat(this))))}}(Array);var ba=["name","message","stack","code"],ga=function(e,t){this.payload=e,this.meta=t},ha=function(e,t){this.payload=e,this.meta=t},fa=function(e){if("object"==typeof e&&null!==e){for(var t={},r=0,i=ba;r<i.length;r++){var n=i[r];"string"==typeof e[n]&&(t[n]=e[n])}return t}return{message:String(e)}};function ma(e,t,r){var i=la(e+"/fulfilled",(function(e,t,r,i){return{payload:e,meta:ca(ua({},i||{}),{arg:r,requestId:t,requestStatus:"fulfilled"})}})),n=la(e+"/pending",(function(e,t,r){return{payload:void 0,meta:ca(ua({},r||{}),{arg:t,requestId:e,requestStatus:"pending"})}})),a=la(e+"/rejected",(function(e,t,i,n,a){return{payload:n,error:(r&&r.serializeError||fa)(e||"Rejected"),meta:ca(ua({},a||{}),{arg:i,requestId:t,rejectedWithValue:!!n,requestStatus:"rejected",aborted:"AbortError"===(null==e?void 0:e.name),condition:"ConditionError"===(null==e?void 0:e.name)})}})),o="undefined"!=typeof AbortController?AbortController:function(){function e(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return e.prototype.abort=function(){},e}();return Object.assign((function(e){return function(s,u,c){var p,l=(null==r?void 0:r.idGenerator)?r.idGenerator(e):function(e){void 0===e&&(e=21);for(var t="",r=e;r--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t}(),d=new o,y=new Promise((function(e,t){return d.signal.addEventListener("abort",(function(){return t({name:"AbortError",message:p||"Aborted"})}))})),b=!1,g=function(){return o=this,p=null,g=function(){var o,p,g,h,f;return function(e,t){var r,i,n,a,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,i&&(n=2&a[0]?i.return:a[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,a[1])).done)return n;switch(i=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,i=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((n=(n=o.trys).length>0&&n[n.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){o.label=a[1];break}if(6===a[0]&&o.label<n[1]){o.label=n[1],n=a;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(a);break}n[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],i=0}finally{r=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}(this,(function(m){switch(m.label){case 0:return m.trys.push([0,4,,5]),null===(S=h=null==(o=null==r?void 0:r.condition)?void 0:o.call(r,e,{getState:u,extra:c}))||"object"!=typeof S||"function"!=typeof S.then?[3,2]:[4,h];case 1:h=m.sent(),m.label=2;case 2:if(!1===h)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return b=!0,s(n(l,e,null==(p=null==r?void 0:r.getPendingMeta)?void 0:p.call(r,{requestId:l,arg:e},{getState:u,extra:c}))),[4,Promise.race([y,Promise.resolve(t(e,{dispatch:s,getState:u,extra:c,requestId:l,signal:d.signal,rejectWithValue:function(e,t){return new ga(e,t)},fulfillWithValue:function(e,t){return new ha(e,t)}})).then((function(t){if(t instanceof ga)throw t;return t instanceof ha?i(t.payload,l,e,t.meta):i(t,l,e)}))])];case 3:return g=m.sent(),[3,5];case 4:return f=m.sent(),g=f instanceof ga?a(null,l,e,f.payload,f.meta):a(f,l,e),[3,5];case 5:return r&&!r.dispatchConditionRejection&&a.match(g)&&g.meta.condition||s(g),[2,g]}var S}))},new Promise((function(e,t){var r=function(e){try{n(g.next(e))}catch(e){t(e)}},i=function(e){try{n(g.throw(e))}catch(e){t(e)}},n=function(t){return t.done?e(t.value):Promise.resolve(t.value).then(r,i)};n((g=g.apply(o,p)).next())}));var o,p,g}();return Object.assign(g,{abort:function(e){b&&(p=e,d.abort())},requestId:l,arg:e,unwrap:function(){return g.then(Sa)}})}}),{pending:n,rejected:a,fulfilled:i,typePrefix:e})}function Sa(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}Object.assign;var va="listenerMiddleware";la(va+"/add"),la(va+"/removeAll"),la(va+"/remove"),function(){function e(e,t){var r=n[e];return r?r.enumerable=t:n[e]=r={configurable:!0,enumerable:t,get:function(){var t=this[Ln];return Gn.get(t,e)},set:function(t){var r=this[Ln];Gn.set(r,e,t)}},r}function t(e){for(var t=e.length-1;t>=0;t--){var n=e[t][Ln];if(!n.P)switch(n.i){case 5:i(n)&&On(n);break;case 4:r(n)&&On(n)}}}function r(e){for(var t=e.t,r=e.k,i=Hn(r),n=i.length-1;n>=0;n--){var a=i[n];if(a!==Ln){var o=t[a];if(void 0===o&&!nn(t,a))return!0;var s=r[a],u=s&&s[Ln];if(u?u.t!==o:!on(s,o))return!0}}var c=!!t[Ln];return i.length!==Hn(t).length+(c?0:1)}function i(e){var t=e.k;if(t.length!==e.t.length)return!0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);if(r&&!r.get)return!0;for(var i=0;i<t.length;i++)if(!t.hasOwnProperty(i))return!0;return!1}var n={};!function(e,t){Wn[e]||(Wn[e]=t)}("ES5",{J:function(t,r){var i=Array.isArray(t),n=function(t,r){if(t){for(var i=Array(r.length),n=0;n<r.length;n++)Object.defineProperty(i,""+n,e(n,!0));return i}var a=Bn(r);delete a[Ln];for(var o=Hn(a),s=0;s<o.length;s++){var u=o[s];a[u]=e(u,t||!!a[u].enumerable)}return Object.create(Object.getPrototypeOf(r),a)}(i,t),a={i:i?5:4,A:r?r.A:gn(),P:!1,I:!1,D:{},l:r,t:t,k:n,o:null,O:!1,C:!1};return Object.defineProperty(n,Ln,{value:a,writable:!0}),n},S:function(e,r,n){n?Xi(r)&&r[Ln].A===e&&t(e.p):(e.u&&function e(t){if(t&&"object"==typeof t){var r=t[Ln];if(r){var n=r.t,a=r.k,o=r.D,s=r.i;if(4===s)tn(a,(function(t){t!==Ln&&(void 0!==n[t]||nn(n,t)?o[t]||e(a[t]):(o[t]=!0,On(r)))})),tn(n,(function(e){void 0!==a[e]||nn(a,e)||(o[e]=!1,On(r))}));else if(5===s){if(i(r)&&(On(r),o.length=!0),a.length<n.length)for(var u=a.length;u<n.length;u++)o[u]=!1;else for(var c=n.length;c<a.length;c++)o[c]=!0;for(var p=Math.min(a.length,n.length),l=0;l<p;l++)a.hasOwnProperty(l)||(o[l]=!0),void 0===o[l]&&e(a[l])}}}}(e.p[0]),t(e.p))},K:function(e){return 4===e.i?r(e):i(e)}})}();var Aa=(e=>(e.Fatal="fatal",e.Error="error",e.Warning="warn",e.Info="info",e.Debug="debug",e))(Aa||{}),Ca=(e=>(e.Camera="cam",e.Desktop="desktop",e.Tab="tab",e))(Ca||{});chrome.runtime.getURL("3rd/libvirtualbg-worker.js"),Object.freeze({position:"absolute"}),Object.freeze({transform:"scaleX(-1)",WebkitTransform:"scaleX(-1)"});var Ma=(e=>(e.extensionIconClicked="extensionIconClicked",e.endRecording="endRecording",e.pauseRecording="pauseRecording",e.resumeRecording="resumeRecording",e.cancelRecording="cancelRecording",e.restartRecording="restartRecording",e.rewindRecording="rewindRecording",e.isAlive="isAlive",e.updateVideoPreviewUrl="updateVideoPreviewUrl",e.openPinnedTab="openPinnedTab",e.focusRecordingTab="focusRecordingTab",e.focusPinnedTab="focusPinnedTab",e.requestTabId="requestTabId",e.getRecordingTabInfo="getRecordingTabInfo",e.updateRecorderSettings="updateRecorderSettings",e.pingContentScript="pingContentScript",e.pingToastMsgScript="pingToastMsgScript",e.activateRecorder="activateRecorder",e.trackEvent="trackEvent",e.logCrumb="logCrumb",e.logException="logException",e.logInfo="logInfo",e.logWarn="logWarn",e.fetchFeatureFlag="fetchFeatureFlag",e.checkUploadSpeed="checkUploadSpeed",e.fetchNotifications="fetchNotifications",e.openNotification="openNotification",e.setExtensionBadgeCount="setExtensionBadgeCount",e.updateBlurFTUXUserProperty="updateBlurFTUXUserProperty",e.canvasOptionClicked="canvasOptionClicked",e.addToBaseContext="addToBaseContext",e.allowGmailIntegrationPermission="allowGmailIntegrationPermission",e.denyGmailIntegrationPermission="denyGmailIntegrationPermission",e.allowGmailLinkExpanding="allowGmailLinkExpanding",e.denyGmailLinkExpanding="denyGmailLinkExpanding",e.insertSession="insertSession",e.requestSessionURL="requestSessionURL",e.cancelRequestSessionURL="cancelRequestSessionURL",e.fetchMyVideosSessions="fetchMyVideosSessions",e.updateNameToSession="updateNameToSession",e.getSessionDetails="getSessionDetails",e.fetchMostRecentSession="fetchMostRecentSession",e.requestThumbExists="requestThumbExists",e.initiateLoomRecorderFromInsertButton="initiateLoomRecorderFromInsertButton",e.fetchLogState="fetchLogState",e))(Ma||{}),Ta=(e=>(e[e.small=1]="small",e[e.medium=2]="medium",e[e.large=3]="large",e))(Ta||{});const _a=la("appReset"),Ra=(la("featureFlagReset"),ya({name:"user",initialState:{isFetching:!1,user:null,authFlowTab:null,authFlowInitTab:null,seenNewUIModal:!1,switchToPinTabModalState:"NEVER_SEEN"},reducers:{fetchStarted(e){e.user=null,e.isFetching=!0},updateUser(e,t){e.user=t.payload,e.isFetching=!1,e.authFlowTab=null,e.authFlowInitTab=null},updateStartAuthFlow(e,t){e.authFlowTab=t.payload.authFlowTab,e.authFlowInitTab=t.payload.initTab},clearAuthFlow(e){e.authFlowTab=null,e.authFlowInitTab=null},updateSeenNewUIModal(e){e.seenNewUIModal=!0},updateSwitchToPinTabModalState(e,t){e.switchToPinTabModalState=t.payload}}})),{fetchStarted:Oa,updateUser:Pa,updateStartAuthFlow:wa,clearAuthFlow:ja,updateSeenNewUIModal:za,updateSwitchToPinTabModalState:xa}=Ra.actions;var Ia=(e=>(e.preRecord="preRecord",e.capture="capture",e.countdown="countdown",e.countdownFinished="countdownFinished",e.active="active",e))(Ia||{});const Na={analytics:{},audioData:Array(7).fill(0),cameraOnSlidesFullscreen:!1,cancelButtonClicked:!1,canceled_desktop_error:!1,confirmCancel:!1,confirmRestart:!1,isLoading:!0,mediaStream:null,microphone_muted_err:!1,openedCanvas:!1,pauseButtonClicked:!1,paused:!0,pinnedTab:null,recorderPhase:"preRecord",recordingPauseTime:null,recordingStartTime:null,recordingTab:null,restartButtonClicked:!1,session:null,showChromeAudioDroppedModal:!1,source:void 0,timeElapsedAtPause:null,totalRecordingTimePaused:0,trimmedSections:null,userSawChromeAudioDroppedModal:!1,videoPreviewUrl:null},Ea=ya({name:"recording",initialState:Na,reducers:{cancelRestartRecording(e){e.confirmRestart=!1,e.restartButtonClicked=!1},confirmRestartRecording(e){e.recorderPhase="capture",e.confirmRestart=!0,e.restartButtonClicked=!1},enableCanceledDesktopError(e){e.recorderPhase="preRecord",e.canceled_desktop_error=!0},pauseRecording(e){e.analytics.pause_used=!0,e.paused=!0;const t=Date.now();e.recordingPauseTime=t;const r=(i=e.recordingStartTime,n=e.totalRecordingTimePaused,(Date.now()-(i||0)-(n||0))/1e3);var i,n;e.timeElapsedAtPause=r},resumeRecording(e){e.paused=!1,e.confirmCancel=!1,e.confirmRestart=!1,e.videoPreviewUrl=null;const t=e.recordingPauseTime?Date.now()-e.recordingPauseTime:0;e.totalRecordingTimePaused+=t,e.recordingPauseTime=null},setCancelButtonClicked(e,t){e.cancelButtonClicked=t.payload},setConfirmCancel(e){e.confirmCancel=!0},setIsLoading(e,t){e.isLoading=t.payload},setMicrophoneMutedError(e,t){e.microphone_muted_err=t.payload},setPauseButtonClicked(e,t){e.pauseButtonClicked=t.payload},setRecorderPhase(e,t){e.recorderPhase=t?.payload},setRestartButtonClicked(e,t){e.restartButtonClicked=t.payload},setSession(e,t){e.session=t.payload},setVideoPreviewUrl(e,t){e.videoPreviewUrl=t.payload},updateCameraOnSlidesFullscreen(e,t){e.cameraOnSlidesFullscreen=t.payload},updateEndRecording(e){Object.assign(e,{...Na,analytics:{screen_type:e.analytics.screen_type,tab_audio:e.analytics.tab_audio,from_url:e.analytics.from_url}})},updateMicrophoneEnabled(e,t){e.analytics.microphone_enabled=t.payload},updateRecordingStartTime(e,t){e.recordingStartTime=t.payload,e.totalRecordingTimePaused=0,e.timeElapsedAtPause=null,e.recordingPauseTime=null},updateRecordingTab(e,t){e.recordingTab=t.payload},updateShowChromeAudioDroppedModal(e,t){e.showChromeAudioDroppedModal=t.payload},updateSource(e,t){e.source=t?.payload},updateStartRecording(e,t){e.recorderPhase="active",e.analytics.camType=t.payload,e.paused=!1,e.confirmRestart=!1},updateTrimmedSections(e,t){e.trimmedSections=t.payload},updateUserSawChromeAudioDroppedModal(e,t){e.userSawChromeAudioDroppedModal=t.payload},updatedPinnedTab(e,t){e.pinnedTab=t.payload}},extraReducers:e=>{e.addCase(_a,(e=>{Object.assign(e,Na)})),e.addCase(wa,(e=>{e.recordingTab=null}))}}),{setRecorderPhase:ka,updateSource:Da,updatedPinnedTab:Ua,updateRecordingTab:qa,setSession:La,setCancelButtonClicked:Fa,setRestartButtonClicked:Ha,setConfirmCancel:Ba,updateStartRecording:Wa,pauseRecording:Ga,updateMicrophoneEnabled:Ka,resumeRecording:$a,updateEndRecording:Qa,enableCanceledDesktopError:Va,cancelRestartRecording:Za,confirmRestartRecording:Ya,setMicrophoneMutedError:Ja,setIsLoading:Xa,setPauseButtonClicked:eo,setVideoPreviewUrl:to,updateRecordingStartTime:ro,updateCameraOnSlidesFullscreen:io,updateShowChromeAudioDroppedModal:no,updateUserSawChromeAudioDroppedModal:ao,updateTrimmedSections:oo}=Ea.actions;ma("recorderSettings/disableCompanionSiteControlSettings",(({all:e,title:t},{dispatch:r,getState:i})=>{let n=i().recorderSettings.companion_site_control_settings;const a=(new Date).toISOString();return e?n={companion_master_switch:{enabled:!1,disabledAt:a}}:t&&(n={...n,[t]:{enabled:!1,disabledAt:a}}),r(Oo(n)),chrome.runtime.sendMessage({type:Ma.updateRecorderSettings,userSettings:{companion_site_control_settings:n}})})),ma("recorderSettings/updateMic",(({device:e},{dispatch:t})=>{e!==uo&&t(bo(e))}));const so="theme-dark",uo="no_mic",co="no_camera",po=ya({name:"recorderSettings",initialState:{access_requested:!1,avatar_on_screen_only:!0,camera_id:co,camera_position:{x:0,y:0},camera_size:Ta.small,cameras:[co],companion_site_control_settings:{companion_master_switch:{enabled:!0,disabledAt:null}},curr_avatar:0,default_camera_id:null,default_microphone_id:null,flip_camera:!0,high_quality:null,high_quality_user_preference:Gi.qualityAuto,low_light_offset:0,mic_issue_permitted:!1,mic_muted_permitted:!1,microphone_id:uo,microphones:[uo],recording_controls_enabled:!0,recording_timer_enabled:!0,recordingType:Ki.FullScreen,screenType:Ca.Desktop,show_cam_bubble_hidden_alert:!0,show_extension_unsupported_toast:!1,show_internal_audio_alert:!0,show_mic_issue_warning_modal:!1,show_mic_issue_warning_pill:!1,show_muted_mic_warning:!1,show_pinned_tab_toast:!0,tab_audio:!1,temp_hide_camera:!1,theme:null,with_low_light_adjustments:!0},reducers:{updateAvatarOnScreenOnly(e,t){e.avatar_on_screen_only=t.payload},updateCamera(e,t){e.camera_id=t.payload},updateCameraPosition(e,t){e.camera_position=t.payload},updateCameraSize(e,t){e.camera_size=t.payload},updateCameras(e,t){e.cameras=[co].concat(t.payload)},updateCompanionSiteControlSettings(e,t){e.companion_site_control_settings=t.payload},updateFlipCamera(e,t){e.flip_camera=t.payload},updateHighQuality(e,t){e.high_quality=t.payload},updateHighQualityUserPreference(e,t){e.high_quality_user_preference=t.payload,t.payload===Gi.quality1080p||t.payload===Gi.quality720p?e.high_quality=t.payload===Gi.quality1080p:e.high_quality=null},updateMicIssuePermitted(e,t){e.mic_issue_permitted=t.payload},updateMicrophone(e,t){e.microphone_id=t.payload},updateMicrophones(e,t){e.microphones=[uo].concat(t.payload)},updateMutedMicPermitted(e,t){e.show_muted_mic_warning=!1,e.mic_muted_permitted=t.payload},updateRecordingControlsEnabled(e,t){e.recording_controls_enabled=t.payload},updateRecordingTimerEnabled(e,t){e.recording_timer_enabled=t.payload},updateRecordingType(e,t){e.recordingType=t.payload,t.payload===Ki.CameraOnly?e.screenType=Ca.Camera:e.screenType=Ca.Desktop},updateScreenType(e,t){e.screenType=t.payload},updateShowCameraBubbleHiddenAlert(e){e.show_cam_bubble_hidden_alert=!1},updateShowExtensionUnsupportedToast(e,t){e.show_extension_unsupported_toast=t.payload},updateShowInternalAudioAlert(e){e.show_internal_audio_alert=!1},updateShowMicIssueWarningModal(e,t){e.show_mic_issue_warning_modal=t.payload},updateShowMicIssueWarningPill(e,t){e.show_mic_issue_warning_pill=t.payload},updateShowMutedMicWarning(e,t){e.show_muted_mic_warning=t.payload},updateShowPinnedTabToast(e,t){e.show_pinned_tab_toast=t.payload},updateTheme(e,t){e.theme=t.payload},updateWithLowLightAdjustments(e,t){e.with_low_light_adjustments=t.payload}},extraReducers(e){e.addCase(qa,(e=>{e.show_muted_mic_warning=!1,e.mic_muted_permitted=!1,e.mic_issue_permitted=!1,e.show_mic_issue_warning_pill=!1,e.show_mic_issue_warning_modal=!1}))}}),{updateCameraSize:lo,updateCamera:yo,updateMicrophone:bo,updateRecordingType:go,updateFlipCamera:ho,updateCameras:fo,updateRecordingTimerEnabled:mo,updateHighQuality:So,updateHighQualityUserPreference:vo,updateAvatarOnScreenOnly:Ao,updateShowMicIssueWarningPill:Co,updateShowMicIssueWarningModal:Mo,updateShowMutedMicWarning:To,updateMicIssuePermitted:_o,updateMutedMicPermitted:Ro,updateCompanionSiteControlSettings:Oo,updateWithLowLightAdjustments:Po,updateCameraPosition:wo,updateTheme:jo,updateScreenType:zo,updateRecordingControlsEnabled:xo,updateShowCameraBubbleHiddenAlert:Io,updateShowInternalAudioAlert:No,updateShowExtensionUnsupportedToast:Eo,updateShowPinnedTabToast:ko}=po.actions,Do=e=>e.recorderSettings,Uo=(Yi(Do,(e=>e.camera_size)),Yi(Do,(e=>e.microphones)),Yi(Do,(e=>e.microphone_id)),Yi(Do,(e=>e.cameras)),Yi(Do,(e=>e.camera_id)),Yi(Do,(e=>e.recording_timer_enabled)),Yi(Do,(e=>e.recordingType))),qo=(Yi(Do,(e=>e.flip_camera)),Yi(Do,(e=>e.high_quality)),Yi(Do,(e=>e.high_quality_user_preference)),Yi(Do,(e=>e.avatar_on_screen_only)),Yi(Do,(e=>e.curr_avatar)),Yi(Do,(e=>e.with_low_light_adjustments)),e=>Do(e).theme),Lo=e=>Do(e).show_pinned_tab_toast,Fo=e=>e.recording,Ho=e=>Fo(e).recorderPhase===Ia.active,Bo=(Yi(Fo,(e=>e.pinnedTab)),Yi(Fo,(e=>e.recordingTab)));Yi(Fo,(e=>e.recordingStartTime)),Yi(Fo,(e=>e.totalRecordingTimePaused)),Yi(Fo,(e=>e.timeElapsedAtPause)),Yi(Fo,(e=>e.session));var Wo=()=>{const e=pe((e=>e.activitySession.activeTabId)),t=pe(Bo),i=pe(Ho),n=pe(Uo)===Ki.CurrentTab,[a,o]=r.useState(!0);if(!pe(Lo)||e===t?.tabId)return null;const s=Q.div`
    display: flex;
    // small is 8px, medium is 16px we want something in between
    gap: 12px;
  `,u=i&&n&&a&&e!==t?.tabId;return r.createElement(_i,{isOpen:u,onCloseClick:()=>{o(!1)},platform:"chrome-extension"},r.createElement(s,null,r.createElement(Di,{variant:"symbol",maxWidth:3}),r.createElement(Dt,{size:"large",fontWeight:"bold"},"This tab is not being recorded")))};const Go=`\n@font-face {\n  font-weight: 400;\n  font-style:  normal;\n  font-family: circular;\n\n  src: url('chrome-extension://${chrome.runtime.id}/fonts/CircularXXWeb-Book.woff2') format('woff2');\n}\n\n@font-face {\n  font-weight: 700;\n  font-style:  normal;\n  font-family: circular;\n\n  src: url('chrome-extension://${chrome.runtime.id}/fonts/CircularXXWeb-Bold.woff2') format('woff2');\n}`;var Ko=()=>((()=>{const e=document.createElement("style");e.type="text/css",e.textContent=Go,document.head.appendChild(e)})(),r.createElement(lr,null));const $o=56,Qo=2147482644,Vo=q`
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
`;var Zo=Q.div`
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
              padding-left: ${$o}px;
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
              padding-right: ${$o}px;
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
        width: ${$o}px !important;
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
              animation: ${Vo};
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
      z-index: ${Qo};
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
      z-index: ${Qo};
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

        height: ${$o}px;

        cursor: pointer;

        user-select: none;

        .companion-loading-icon {
          border-radius: ${$o}px;
          width: ${$o}px;
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

          border-radius: ${$o}px;
          width: ${$o}px;
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
          border-radius: ${$o}px;
          width: ${$o}px;
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
    z-index: ${Qo};
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
`,Yo=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(e){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),Jo=Math.abs,Xo=String.fromCharCode,es=Object.assign;function ts(e){return e.trim()}function rs(e,t,r){return e.replace(t,r)}function is(e,t){return e.indexOf(t)}function ns(e,t){return 0|e.charCodeAt(t)}function as(e,t,r){return e.slice(t,r)}function os(e){return e.length}function ss(e){return e.length}function us(e,t){return t.push(e),e}var cs=1,ps=1,ls=0,ds=0,ys=0,bs="";function gs(e,t,r,i,n,a,o){return{value:e,root:t,parent:r,type:i,props:n,children:a,line:cs,column:ps,length:o,return:""}}function hs(e,t){return es(gs("",null,null,"",null,null,0),e,{length:-e.length},t)}function fs(){return ys=ds>0?ns(bs,--ds):0,ps--,10===ys&&(ps=1,cs--),ys}function ms(){return ys=ds<ls?ns(bs,ds++):0,ps++,10===ys&&(ps=1,cs++),ys}function Ss(){return ns(bs,ds)}function vs(){return ds}function As(e,t){return as(bs,e,t)}function Cs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ms(e){return cs=ps=1,ls=os(bs=e),ds=0,[]}function Ts(e){return bs="",e}function _s(e){return ts(As(ds-1,Ps(91===e?e+2:40===e?e+1:e)))}function Rs(e){for(;(ys=Ss())&&ys<33;)ms();return Cs(e)>2||Cs(ys)>3?"":" "}function Os(e,t){for(;--t&&ms()&&!(ys<48||ys>102||ys>57&&ys<65||ys>70&&ys<97););return As(e,vs()+(t<6&&32==Ss()&&32==ms()))}function Ps(e){for(;ms();)switch(ys){case e:return ds;case 34:case 39:34!==e&&39!==e&&Ps(ys);break;case 40:41===e&&Ps(e);break;case 92:ms()}return ds}function ws(e,t){for(;ms()&&e+ys!==57&&(e+ys!==84||47!==Ss()););return"/*"+As(t,ds-1)+"*"+Xo(47===e?e:ms())}function js(e){for(;!Cs(Ss());)ms();return As(e,ds)}var zs="-ms-",xs="-moz-",Is="-webkit-",Ns="comm",Es="rule",ks="decl",Ds="@keyframes";function Us(e,t){for(var r="",i=ss(e),n=0;n<i;n++)r+=t(e[n],n,e,t)||"";return r}function qs(e,t,r,i){switch(e.type){case"@import":case ks:return e.return=e.return||e.value;case Ns:return"";case Ds:return e.return=e.value+"{"+Us(e.children,i)+"}";case Es:e.value=e.props.join(",")}return os(r=Us(e.children,i))?e.return=e.value+"{"+r+"}":""}function Ls(e,t){switch(function(e,t){return(((t<<2^ns(e,0))<<2^ns(e,1))<<2^ns(e,2))<<2^ns(e,3)}(e,t)){case 5103:return Is+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Is+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Is+e+xs+e+zs+e+e;case 6828:case 4268:return Is+e+zs+e+e;case 6165:return Is+e+zs+"flex-"+e+e;case 5187:return Is+e+rs(e,/(\w+).+(:[^]+)/,Is+"box-$1$2"+zs+"flex-$1$2")+e;case 5443:return Is+e+zs+"flex-item-"+rs(e,/flex-|-self/,"")+e;case 4675:return Is+e+zs+"flex-line-pack"+rs(e,/align-content|flex-|-self/,"")+e;case 5548:return Is+e+zs+rs(e,"shrink","negative")+e;case 5292:return Is+e+zs+rs(e,"basis","preferred-size")+e;case 6060:return Is+"box-"+rs(e,"-grow","")+Is+e+zs+rs(e,"grow","positive")+e;case 4554:return Is+rs(e,/([^-])(transform)/g,"$1"+Is+"$2")+e;case 6187:return rs(rs(rs(e,/(zoom-|grab)/,Is+"$1"),/(image-set)/,Is+"$1"),e,"")+e;case 5495:case 3959:return rs(e,/(image-set\([^]*)/,Is+"$1$`$1");case 4968:return rs(rs(e,/(.+:)(flex-)?(.*)/,Is+"box-pack:$3"+zs+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Is+e+e;case 4095:case 3583:case 4068:case 2532:return rs(e,/(.+)-inline(.+)/,Is+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(os(e)-1-t>6)switch(ns(e,t+1)){case 109:if(45!==ns(e,t+4))break;case 102:return rs(e,/(.+:)(.+)-([^]+)/,"$1"+Is+"$2-$3$1"+xs+(108==ns(e,t+3)?"$3":"$2-$3"))+e;case 115:return~is(e,"stretch")?Ls(rs(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==ns(e,t+1))break;case 6444:switch(ns(e,os(e)-3-(~is(e,"!important")&&10))){case 107:return rs(e,":",":"+Is)+e;case 101:return rs(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Is+(45===ns(e,14)?"inline-":"")+"box$3$1"+Is+"$2$3$1"+zs+"$2box$3")+e}break;case 5936:switch(ns(e,t+11)){case 114:return Is+e+zs+rs(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Is+e+zs+rs(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Is+e+zs+rs(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Is+e+zs+e+e}return e}function Fs(e){return Ts(Hs("",null,null,null,[""],e=Ms(e),0,[0],e))}function Hs(e,t,r,i,n,a,o,s,u){for(var c=0,p=0,l=o,d=0,y=0,b=0,g=1,h=1,f=1,m=0,S="",v=n,A=a,C=i,M=S;h;)switch(b=m,m=ms()){case 40:if(108!=b&&58==M.charCodeAt(l-1)){-1!=is(M+=rs(_s(m),"&","&\f"),"&\f")&&(f=-1);break}case 34:case 39:case 91:M+=_s(m);break;case 9:case 10:case 13:case 32:M+=Rs(b);break;case 92:M+=Os(vs()-1,7);continue;case 47:switch(Ss()){case 42:case 47:us(Ws(ws(ms(),vs()),t,r),u);break;default:M+="/"}break;case 123*g:s[c++]=os(M)*f;case 125*g:case 59:case 0:switch(m){case 0:case 125:h=0;case 59+p:y>0&&os(M)-l&&us(y>32?Gs(M+";",i,r,l-1):Gs(rs(M," ","")+";",i,r,l-2),u);break;case 59:M+=";";default:if(us(C=Bs(M,t,r,c,p,n,s,S,v=[],A=[],l),a),123===m)if(0===p)Hs(M,t,C,C,v,a,l,s,A);else switch(d){case 100:case 109:case 115:Hs(e,C,C,i&&us(Bs(e,C,C,0,0,n,s,S,n,v=[],l),A),n,A,l,s,i?v:A);break;default:Hs(M,C,C,C,[""],A,0,s,A)}}c=p=y=0,g=f=1,S=M="",l=o;break;case 58:l=1+os(M),y=b;default:if(g<1)if(123==m)--g;else if(125==m&&0==g++&&125==fs())continue;switch(M+=Xo(m),m*g){case 38:f=p>0?1:(M+="\f",-1);break;case 44:s[c++]=(os(M)-1)*f,f=1;break;case 64:45===Ss()&&(M+=_s(ms())),d=Ss(),p=l=os(S=M+=js(vs())),m++;break;case 45:45===b&&2==os(M)&&(g=0)}}return a}function Bs(e,t,r,i,n,a,o,s,u,c,p){for(var l=n-1,d=0===n?a:[""],y=ss(d),b=0,g=0,h=0;b<i;++b)for(var f=0,m=as(e,l+1,l=Jo(g=o[b])),S=e;f<y;++f)(S=ts(g>0?d[f]+" "+m:rs(m,/&\f/g,d[f])))&&(u[h++]=S);return gs(e,t,r,0===n?Es:s,u,c,p)}function Ws(e,t,r){return gs(e,t,r,Ns,Xo(ys),as(e,2,-2),0)}function Gs(e,t,r,i){return gs(e,t,r,ks,as(e,0,i),as(e,i+1,-1),i)}n(55246);var Ks=function(e,t,r){for(var i=0,n=0;i=n,n=Ss(),38===i&&12===n&&(t[r]=1),!Cs(n);)ms();return As(e,ds)},$s=new WeakMap,Qs=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||$s.get(r))&&!i){$s.set(e,!0);for(var n=[],a=function(e,t){return Ts(function(e,t){var r=-1,i=44;do{switch(Cs(i)){case 0:38===i&&12===Ss()&&(t[r]=1),e[r]+=Ks(ds-1,t,r);break;case 2:e[r]+=_s(i);break;case 4:if(44===i){e[++r]=58===Ss()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=Xo(i)}}while(i=ms());return e}(Ms(e),t))}(t,n),o=r.props,s=0,u=0;s<a.length;s++)for(var c=0;c<o.length;c++,u++)e.props[u]=n[s]?a[s].replace(/&\f/g,o[c]):o[c]+" "+a[s]}}},Vs=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},Zs=[function(e,t,r,i){if(e.length>-1&&!e.return)switch(e.type){case ks:e.return=Ls(e.value,e.length);break;case Ds:return Us([hs(e,{value:rs(e.value,"@","@"+Is)})],i);case Es:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=/(::plac\w+|:read-\w+)/.exec(e))?e[0]:e}(t)){case":read-only":case":read-write":return Us([hs(e,{props:[rs(t,/:(read-\w+)/,":-moz-$1")]})],i);case"::placeholder":return Us([hs(e,{props:[rs(t,/:(plac\w+)/,":"+Is+"input-$1")]}),hs(e,{props:[rs(t,/:(plac\w+)/,":-moz-$1")]}),hs(e,{props:[rs(t,/:(plac\w+)/,zs+"input-$1")]})],i)}return""}))}}],Ys=n(23698),Js=n.n(Ys),Xs="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function eu(e,t){return e(t={exports:{}},t.exports),t.exports}var tu=eu((function(e){!function(t){var r=function(e,t,i){if(!u(t)||p(t)||l(t)||d(t)||s(t))return t;var n,a=0,o=0;if(c(t))for(n=[],o=t.length;a<o;a++)n.push(r(e,t[a],i));else for(var y in n={},t)Object.prototype.hasOwnProperty.call(t,y)&&(n[e(y,i)]=r(e,t[y],i));return n},i=function(e){return y(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1)},n=function(e){var t=i(e);return t.substr(0,1).toUpperCase()+t.substr(1)},a=function(e,t){return function(e,t){var r=(t=t||{}).separator||"_",i=t.split||/(?=[A-Z])/;return e.split(i).join(r)}(e,t).toLowerCase()},o=Object.prototype.toString,s=function(e){return"function"==typeof e},u=function(e){return e===Object(e)},c=function(e){return"[object Array]"==o.call(e)},p=function(e){return"[object Date]"==o.call(e)},l=function(e){return"[object RegExp]"==o.call(e)},d=function(e){return"[object Boolean]"==o.call(e)},y=function(e){return(e-=0)==e},b=function(e,t){var r=t&&"process"in t?t.process:t;return"function"!=typeof r?e:function(t,i){return r(t,e,i)}},g={camelize:i,decamelize:a,pascalize:n,depascalize:a,camelizeKeys:function(e,t){return r(b(i,t),e)},decamelizeKeys:function(e,t){return r(b(a,t),e,t)},pascalizeKeys:function(e,t){return r(b(n,t),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=g:t.humps=g}(Xs)})).decamelize,ru=eu((function(e){function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},t.apply(this,arguments)}e.exports=t})),iu=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i},nu=(0,r.createContext)(null);function au(e){var t=e.root,r=e.children;return(0,i.createPortal)(r,t)}au.propTypes={root:Js().object.isRequired,children:Js().node},au.defaultProps={children:null};var ou=new Map,su=function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"core",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e.children};return new Proxy(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{get:function(i,n){var a=tu(n,{separator:"-"}),o="".concat(e,"-").concat(a);return ou.has(o)||ou.set(o,function(e){var t=(0,r.forwardRef)((function(t,i){var n,a,o=t.mode,s=t.delegatesFocus,u=t.styleSheets,c=t.ssr,p=t.children,l=function(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(t,["mode","delegatesFocus","styleSheets","ssr","children"]),d=(a=(0,r.useRef)((n=i)&&n.current),(0,r.useEffect)((function(){n&&(n.current=a.current)}),[n]),a),y=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],i=!0,n=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);i=!0);}catch(e){n=!0,a=e}finally{try{i||null==s.return||s.return()}finally{if(n)throw a}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return iu(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?iu(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,r.useState)(null),2),b=y[0],g=y[1],h="node_".concat(o).concat(s);return(0,r.useEffect)((function(){if(d.current)try{if("function"==typeof i&&i(d.current),c){var e=d.current.shadowRoot;return void g(e)}var t=d.current.attachShadow({mode:o,delegatesFocus:s});u.length>0&&(t.adoptedStyleSheets=u),g(t)}catch(e){!function(e){var t=e.error,r=e.styleSheets,i=e.root;if("NotSupportedError"!==t.name)throw t;r.length>0&&(i.adoptedStyleSheets=r)}({error:e,styleSheets:u,root:b})}}),[i,d,u]),r.createElement(r.Fragment,null,r.createElement(e.tag,ru({key:h,ref:d},l),(b||c)&&r.createElement(nu.Provider,{value:b},c?r.createElement("template",{shadowroot:"open"},e.render({root:b,ssr:c,children:p})):r.createElement(au,{root:b},e.render({root:b,ssr:c,children:p})))))}));return t.propTypes={mode:Js().oneOf(["open","closed"]),delegatesFocus:Js().bool,styleSheets:Js().arrayOf(Js().instanceOf(globalThis.CSSStyleSheet)),ssr:Js().bool,children:Js().node},t.defaultProps={mode:"open",delegatesFocus:!1,styleSheets:[],ssr:!1,children:null},t}({tag:a,render:t})),ou.get(o)}})}(),uu=su;n(93836);var cu={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let pu;const lu=new Uint8Array(16);function du(){if(!pu&&(pu="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!pu))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return pu(lu)}const yu=[];for(let e=0;e<256;++e)yu.push((e+256).toString(16).slice(1));var bu=function(e,t,r){if(cu.randomUUID&&!t&&!e)return cu.randomUUID();const i=(e=e||{}).random||(e.rng||du)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t){r=r||0;for(let e=0;e<16;++e)t[r+e]=i[e];return t}return function(e,t=0){return yu[e[t+0]]+yu[e[t+1]]+yu[e[t+2]]+yu[e[t+3]]+"-"+yu[e[t+4]]+yu[e[t+5]]+"-"+yu[e[t+6]]+yu[e[t+7]]+"-"+yu[e[t+8]]+yu[e[t+9]]+"-"+yu[e[t+10]]+yu[e[t+11]]+yu[e[t+12]]+yu[e[t+13]]+yu[e[t+14]]+yu[e[t+15]]}(i)},gu=n(51),hu=n.n(gu),fu=n(89051),mu=n.n(fu),Su=n(94902),vu=n.n(Su),Au=n(71064),Cu=n.n(Au),Mu=n(23919);async function Tu(e){const t=function(e){const t=new Headers(e.headers);if(e.auth){const r=e.auth.username||"",i=e.auth.password?decodeURI(encodeURIComponent(e.auth.password)):"";t.set("Authorization",`Basic ${btoa(r+":"+i)}`)}const r=e.method.toUpperCase(),i={headers:t,method:r};"GET"!==r&&"HEAD"!==r&&(i.body=e.data),e.mode&&(i.mode=e.mode),e.cache&&(i.cache=e.cache),e.integrity&&(i.integrity=e.integrity),e.redirect&&(i.redirect=e.redirect),e.referrer&&(i.referrer=e.referrer),(0,Mu.isUndefined)(e.withCredentials)||(i.credentials=e.withCredentials?"include":"omit");const n=Cu()(e.baseURL,e.url),a=vu()(n,e.params,e.paramsSerializer);return new Request(a,i)}(e),r=[_u(t,e)];e.timeout&&e.timeout>0&&r.push(new Promise((r=>{setTimeout((()=>{const i=e.timeoutErrorMessage?e.timeoutErrorMessage:"timeout of "+e.timeout+"ms exceeded";r(Ru(i,e,"ECONNABORTED",t))}),e.timeout)})));const i=await Promise.race(r);return new Promise(((t,r)=>{i instanceof Error?r(i):"[object Function]"===Object.prototype.toString.call(e.settle)?e.settle(t,r,i):mu()(t,r,i)}))}async function _u(e,t){let r;try{r=await fetch(e)}catch(r){return Ru("Network Error",t,"ERR_NETWORK",e)}const i={ok:r.ok,status:r.status,statusText:r.statusText,headers:new Headers(r.headers),config:t,request:e};if(r.status>=200&&204!==r.status)switch(t.responseType){case"arraybuffer":i.data=await r.arrayBuffer();break;case"blob":i.data=await r.blob();break;case"json":i.data=await r.json();break;case"formData":i.data=await r.formData();break;default:i.data=await r.text()}return i}function Ru(e,t,r,i,n){return hu().AxiosError&&"function"==typeof hu().AxiosError?new(hu().AxiosError)(e,hu().AxiosError[r],t,i,n):function(e,t,r,i,n){return e.config=t,r&&(e.code=r),e.request=i,e.response=n,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}(new Error(e),t,r,i,n)}var Ou=n(87317),Pu=n.n(Ou);const wu="production",ju="loom.com";chrome.runtime.id;const zu="ajs_anonymous_id",xu=()=>function(e){try{const{pathname:t}=new URL(e,location.origin);return t===location.pathname}catch{return!1}}(chrome.runtime.getManifest()?.background?.service_worker);var Iu=n(27077);function Nu(){const e=Iu.n2,t=e.crypto||e.msCrypto;let r=()=>16*Math.random();try{if(t&&t.randomUUID)return t.randomUUID().replace(/-/g,"");t&&t.getRandomValues&&(r=()=>t.getRandomValues(new Uint8Array(1))[0])}catch(e){}return([1e7]+1e3+4e3+8e3+1e11).replace(/[018]/g,(e=>(e^(15&r())>>e/4).toString(16)))}var Eu=n(50562);const ku=["debug","info","warn","error","log","assert","trace"],Du={};function Uu(e){if(!("console"in Iu.n2))return e();const t=Iu.n2.console,r={},i=Object.keys(Du);i.forEach((e=>{const i=Du[e];r[e]=t[e],t[e]=i}));try{return e()}finally{i.forEach((e=>{t[e]=r[e]}))}}const qu=function(){let e=!1;const t={enable:()=>{e=!0},disable:()=>{e=!1}};return"undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__?ku.forEach((r=>{t[r]=(...t)=>{e&&Uu((()=>{Iu.n2.console[r](`Sentry Logger [${r}]:`,...t)}))}})):ku.forEach((e=>{t[e]=()=>{}})),t}(),Lu="production",Fu=Object.prototype.toString;function Hu(e){return function(e,t){return Fu.call(e)===`[object ${t}]`}(e,"Object")}function Bu(e){return Boolean(e&&e.then&&"function"==typeof e.then)}var Wu;!function(e){e[e.PENDING=0]="PENDING",e[e.RESOLVED=1]="RESOLVED",e[e.REJECTED=2]="REJECTED"}(Wu||(Wu={}));class Gu{constructor(e){Gu.prototype.__init.call(this),Gu.prototype.__init2.call(this),Gu.prototype.__init3.call(this),Gu.prototype.__init4.call(this),this._state=Wu.PENDING,this._handlers=[];try{e(this._resolve,this._reject)}catch(e){this._reject(e)}}then(e,t){return new Gu(((r,i)=>{this._handlers.push([!1,t=>{if(e)try{r(e(t))}catch(e){i(e)}else r(t)},e=>{if(t)try{r(t(e))}catch(e){i(e)}else i(e)}]),this._executeHandlers()}))}catch(e){return this.then((e=>e),e)}finally(e){return new Gu(((t,r)=>{let i,n;return this.then((t=>{n=!1,i=t,e&&e()}),(t=>{n=!0,i=t,e&&e()})).then((()=>{n?r(i):t(i)}))}))}__init(){this._resolve=e=>{this._setResult(Wu.RESOLVED,e)}}__init2(){this._reject=e=>{this._setResult(Wu.REJECTED,e)}}__init3(){this._setResult=(e,t)=>{this._state===Wu.PENDING&&(Bu(t)?t.then(this._resolve,this._reject):(this._state=e,this._value=t,this._executeHandlers()))}}__init4(){this._executeHandlers=()=>{if(this._state===Wu.PENDING)return;const e=this._handlers.slice();this._handlers=[],e.forEach((e=>{e[0]||(this._state===Wu.RESOLVED&&e[1](this._value),this._state===Wu.REJECTED&&e[2](this._value),e[0]=!0)}))}}}function Ku(e,t,r,i=0){return new Gu(((n,a)=>{const o=e[i];if(null===t||"function"!=typeof o)n(t);else{const s=o({...t},r);("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&o.id&&null===s&&qu.log(`Event processor "${o.id}" dropped event`),Bu(s)?s.then((t=>Ku(e,t,r,i+1).then(n))).then(null,a):Ku(e,s,r,i+1).then(n).then(null,a)}}))}function $u(e){return Qu(e,new Map)}function Qu(e,t){if(Hu(e)){const r=t.get(e);if(void 0!==r)return r;const i={};t.set(e,i);for(const r of Object.keys(e))void 0!==e[r]&&(i[r]=Qu(e[r],t));return i}if(Array.isArray(e)){const r=t.get(e);if(void 0!==r)return r;const i=[];return t.set(e,i),e.forEach((e=>{i.push(Qu(e,t))})),i}return e}function Vu(e,t={}){if(t.user&&(!e.ipAddress&&t.user.ip_address&&(e.ipAddress=t.user.ip_address),e.did||t.did||(e.did=t.user.id||t.user.email||t.user.username)),e.timestamp=t.timestamp||(0,Eu.ph)(),t.ignoreDuration&&(e.ignoreDuration=t.ignoreDuration),t.sid&&(e.sid=32===t.sid.length?t.sid:Nu()),void 0!==t.init&&(e.init=t.init),!e.did&&t.did&&(e.did=`${t.did}`),"number"==typeof t.started&&(e.started=t.started),e.ignoreDuration)e.duration=void 0;else if("number"==typeof t.duration)e.duration=t.duration;else{const t=e.timestamp-e.started;e.duration=t>=0?t:0}t.release&&(e.release=t.release),t.environment&&(e.environment=t.environment),!e.ipAddress&&t.ipAddress&&(e.ipAddress=t.ipAddress),!e.userAgent&&t.userAgent&&(e.userAgent=t.userAgent),"number"==typeof t.errors&&(e.errors=t.errors),t.status&&(e.status=t.status)}class Zu{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext=Yu()}static clone(e){const t=new Zu;return e&&(t._breadcrumbs=[...e._breadcrumbs],t._tags={...e._tags},t._extra={...e._extra},t._contexts={...e._contexts},t._user=e._user,t._level=e._level,t._span=e._span,t._session=e._session,t._transactionName=e._transactionName,t._fingerprint=e._fingerprint,t._eventProcessors=[...e._eventProcessors],t._requestSession=e._requestSession,t._attachments=[...e._attachments],t._sdkProcessingMetadata={...e._sdkProcessingMetadata},t._propagationContext={...e._propagationContext}),t}addScopeListener(e){this._scopeListeners.push(e)}addEventProcessor(e){return this._eventProcessors.push(e),this}setUser(e){return this._user=e||{},this._session&&Vu(this._session,{user:e}),this._notifyScopeListeners(),this}getUser(){return this._user}getRequestSession(){return this._requestSession}setRequestSession(e){return this._requestSession=e,this}setTags(e){return this._tags={...this._tags,...e},this._notifyScopeListeners(),this}setTag(e,t){return this._tags={...this._tags,[e]:t},this._notifyScopeListeners(),this}setExtras(e){return this._extra={...this._extra,...e},this._notifyScopeListeners(),this}setExtra(e,t){return this._extra={...this._extra,[e]:t},this._notifyScopeListeners(),this}setFingerprint(e){return this._fingerprint=e,this._notifyScopeListeners(),this}setLevel(e){return this._level=e,this._notifyScopeListeners(),this}setTransactionName(e){return this._transactionName=e,this._notifyScopeListeners(),this}setContext(e,t){return null===t?delete this._contexts[e]:this._contexts[e]=t,this._notifyScopeListeners(),this}setSpan(e){return this._span=e,this._notifyScopeListeners(),this}getSpan(){return this._span}getTransaction(){const e=this.getSpan();return e&&e.transaction}setSession(e){return e?this._session=e:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(e){if(!e)return this;if("function"==typeof e){const t=e(this);return t instanceof Zu?t:this}return e instanceof Zu?(this._tags={...this._tags,...e._tags},this._extra={...this._extra,...e._extra},this._contexts={...this._contexts,...e._contexts},e._user&&Object.keys(e._user).length&&(this._user=e._user),e._level&&(this._level=e._level),e._fingerprint&&(this._fingerprint=e._fingerprint),e._requestSession&&(this._requestSession=e._requestSession),e._propagationContext&&(this._propagationContext=e._propagationContext)):Hu(e)&&(this._tags={...this._tags,...e.tags},this._extra={...this._extra,...e.extra},this._contexts={...this._contexts,...e.contexts},e.user&&(this._user=e.user),e.level&&(this._level=e.level),e.fingerprint&&(this._fingerprint=e.fingerprint),e.requestSession&&(this._requestSession=e.requestSession),e.propagationContext&&(this._propagationContext=e.propagationContext)),this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._requestSession=void 0,this._span=void 0,this._session=void 0,this._notifyScopeListeners(),this._attachments=[],this._propagationContext=Yu(),this}addBreadcrumb(e,t){const r="number"==typeof t?t:100;if(r<=0)return this;const i={timestamp:(0,Eu.yW)(),...e},n=this._breadcrumbs;return n.push(i),this._breadcrumbs=n.length>r?n.slice(-r):n,this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(e){return this._attachments.push(e),this}getAttachments(){return this._attachments}clearAttachments(){return this._attachments=[],this}applyToEvent(e,t={},r){if(this._extra&&Object.keys(this._extra).length&&(e.extra={...this._extra,...e.extra}),this._tags&&Object.keys(this._tags).length&&(e.tags={...this._tags,...e.tags}),this._user&&Object.keys(this._user).length&&(e.user={...this._user,...e.user}),this._contexts&&Object.keys(this._contexts).length&&(e.contexts={...this._contexts,...e.contexts}),this._level&&(e.level=this._level),this._transactionName&&(e.transaction=this._transactionName),this._span){e.contexts={trace:this._span.getTraceContext(),...e.contexts};const t=this._span.transaction;if(t){e.sdkProcessingMetadata={dynamicSamplingContext:t.getDynamicSamplingContext(),...e.sdkProcessingMetadata};const r=t.name;r&&(e.tags={transaction:r,...e.tags})}}this._applyFingerprint(e);const i=this._getBreadcrumbs(),n=[...e.breadcrumbs||[],...i];return e.breadcrumbs=n.length>0?n:void 0,e.sdkProcessingMetadata={...e.sdkProcessingMetadata,...this._sdkProcessingMetadata,propagationContext:this._propagationContext},Ku([...r||[],...(0,Iu.YO)("globalEventProcessors",(()=>[])),...this._eventProcessors],e,t)}setSDKProcessingMetadata(e){return this._sdkProcessingMetadata={...this._sdkProcessingMetadata,...e},this}setPropagationContext(e){return this._propagationContext=e,this}getPropagationContext(){return this._propagationContext}_getBreadcrumbs(){return this._breadcrumbs}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach((e=>{e(this)})),this._notifyingListeners=!1)}_applyFingerprint(e){var t;e.fingerprint=e.fingerprint?(t=e.fingerprint,Array.isArray(t)?t:[t]):[],this._fingerprint&&(e.fingerprint=e.fingerprint.concat(this._fingerprint)),e.fingerprint&&!e.fingerprint.length&&delete e.fingerprint}}function Yu(){return{traceId:Nu(),spanId:Nu().substring(16)}}var Ju=n(55246);const Xu=4,ec=100;class tc{constructor(e,t=new Zu,r=Xu){this._version=r,this._stack=[{scope:t}],e&&this.bindClient(e)}isOlderThan(e){return this._version<e}bindClient(e){this.getStackTop().client=e,e&&e.setupIntegrations&&e.setupIntegrations()}pushScope(){const e=Zu.clone(this.getScope());return this.getStack().push({client:this.getClient(),scope:e}),e}popScope(){return!(this.getStack().length<=1||!this.getStack().pop())}withScope(e){const t=this.pushScope();try{e(t)}finally{this.popScope()}}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getStack(){return this._stack}getStackTop(){return this._stack[this._stack.length-1]}captureException(e,t){const r=this._lastEventId=t&&t.event_id?t.event_id:Nu(),i=new Error("Sentry syntheticException");return this._withClient(((n,a)=>{n.captureException(e,{originalException:e,syntheticException:i,...t,event_id:r},a)})),r}captureMessage(e,t,r){const i=this._lastEventId=r&&r.event_id?r.event_id:Nu(),n=new Error(e);return this._withClient(((a,o)=>{a.captureMessage(e,t,{originalException:e,syntheticException:n,...r,event_id:i},o)})),i}captureEvent(e,t){const r=t&&t.event_id?t.event_id:Nu();return e.type||(this._lastEventId=r),this._withClient(((i,n)=>{i.captureEvent(e,{...t,event_id:r},n)})),r}lastEventId(){return this._lastEventId}addBreadcrumb(e,t){const{scope:r,client:i}=this.getStackTop();if(!i)return;const{beforeBreadcrumb:n=null,maxBreadcrumbs:a=ec}=i.getOptions&&i.getOptions()||{};if(a<=0)return;const o={timestamp:(0,Eu.yW)(),...e},s=n?Uu((()=>n(o,t))):o;null!==s&&(i.emit&&i.emit("beforeAddBreadcrumb",s,t),r.addBreadcrumb(s,a))}setUser(e){this.getScope().setUser(e)}setTags(e){this.getScope().setTags(e)}setExtras(e){this.getScope().setExtras(e)}setTag(e,t){this.getScope().setTag(e,t)}setExtra(e,t){this.getScope().setExtra(e,t)}setContext(e,t){this.getScope().setContext(e,t)}configureScope(e){const{scope:t,client:r}=this.getStackTop();r&&e(t)}run(e){const t=ic(this);try{e(this)}finally{ic(t)}}getIntegration(e){const t=this.getClient();if(!t)return null;try{return t.getIntegration(e)}catch(t){return("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&qu.warn(`Cannot retrieve integration ${e.id} from the current Hub`),null}}startTransaction(e,t){const r=this._callExtensionMethod("startTransaction",e,t);return"undefined"!=typeof __SENTRY_DEBUG__&&!__SENTRY_DEBUG__||r||(this.getClient()?Ju.warn("Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':\nSentry.addTracingExtensions();\nSentry.init({...});\n"):Ju.warn("Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'")),r}traceHeaders(){return this._callExtensionMethod("traceHeaders")}captureSession(e=!1){if(e)return this.endSession();this._sendSessionUpdate()}endSession(){const e=this.getStackTop().scope,t=e.getSession();t&&function(e,t){let r={};"ok"===e.status&&(r={status:"exited"}),Vu(e,r)}(t),this._sendSessionUpdate(),e.setSession()}startSession(e){const{scope:t,client:r}=this.getStackTop(),{release:i,environment:n=Lu}=r&&r.getOptions()||{},{userAgent:a}=Iu.n2.navigator||{},o=function(e){const t=(0,Eu.ph)(),r={sid:Nu(),init:!0,timestamp:t,started:t,duration:0,status:"ok",errors:0,ignoreDuration:!1,toJSON:()=>function(e){return $u({sid:`${e.sid}`,init:e.init,started:new Date(1e3*e.started).toISOString(),timestamp:new Date(1e3*e.timestamp).toISOString(),status:e.status,errors:e.errors,did:"number"==typeof e.did||"string"==typeof e.did?`${e.did}`:void 0,duration:e.duration,attrs:{release:e.release,environment:e.environment,ip_address:e.ipAddress,user_agent:e.userAgent}})}(r)};return e&&Vu(r,e),r}({release:i,environment:n,user:t.getUser(),...a&&{userAgent:a},...e}),s=t.getSession&&t.getSession();return s&&"ok"===s.status&&Vu(s,{status:"exited"}),this.endSession(),t.setSession(o),o}shouldSendDefaultPii(){const e=this.getClient(),t=e&&e.getOptions();return Boolean(t&&t.sendDefaultPii)}_sendSessionUpdate(){const{scope:e,client:t}=this.getStackTop(),r=e.getSession();r&&t&&t.captureSession&&t.captureSession(r)}_withClient(e){const{scope:t,client:r}=this.getStackTop();r&&e(r,t)}_callExtensionMethod(e,...t){const r=rc().__SENTRY__;if(r&&r.extensions&&"function"==typeof r.extensions[e])return r.extensions[e].apply(this,t);("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&qu.warn(`Extension method ${e} couldn't be found, doing nothing.`)}}function rc(){return Iu.n2.__SENTRY__=Iu.n2.__SENTRY__||{extensions:{},hub:void 0},Iu.n2}function ic(e){const t=rc(),r=nc(t);return ac(t,e),r}function nc(e){return(0,Iu.YO)("hub",(()=>new tc),e)}function ac(e,t){return!!e&&((e.__SENTRY__=e.__SENTRY__||{}).hub=t,!0)}function oc(e){(function(){const e=rc();if(e.__SENTRY__&&e.__SENTRY__.acs){const t=e.__SENTRY__.acs.getCurrentHub();if(t)return t}return function(e=rc()){return!!((t=e)&&t.__SENTRY__&&t.__SENTRY__.hub)&&!nc(e).isOlderThan(Xu)||ac(e,new tc),nc(e);var t}(e)})().configureScope(e)}const sc=[EvalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError,globalThis.DOMException,globalThis.AssertionError,globalThis.SystemError].filter(Boolean).map((e=>[e.name,e]));var uc=new Map(sc),cc=n(90778).Buffer;Error;const pc=[{property:"name",enumerable:!1},{property:"message",enumerable:!1},{property:"stack",enumerable:!1},{property:"code",enumerable:!0},{property:"cause",enumerable:!1}],lc=Symbol(".toJSON was called"),dc=({from:e,seen:t,to:r,forceEnumerable:i,maxDepth:n,depth:a,useToJSON:o,serialize:s})=>{if(r||(r=Array.isArray(e)?[]:!s&&yc(e)?new((e=>uc.get(e)??Error)(e.name)):{}),t.push(e),a>=n)return r;if(o&&"function"==typeof e.toJSON&&!0!==e[lc])return(e=>{e[lc]=!0;const t=e.toJSON();return delete e[lc],t})(e);const u=e=>dc({from:e,seen:[...t],forceEnumerable:i,maxDepth:n,depth:a,useToJSON:o,serialize:s});for(const[i,n]of Object.entries(e))"function"==typeof cc&&cc.isBuffer(n)?r[i]="[object Buffer]":null===n||"object"!=typeof n||"function"!=typeof n.pipe?"function"!=typeof n&&(n&&"object"==typeof n?t.includes(e[i])?r[i]="[Circular]":(a++,r[i]=u(e[i])):r[i]=n):r[i]="[object Stream]";for(const{property:t,enumerable:n}of pc)void 0!==e[t]&&null!==e[t]&&Object.defineProperty(r,t,{value:yc(e[t])?u(e[t]):e[t],enumerable:!!i||n,configurable:!0,writable:!0});return r};function yc(e){return Boolean(e)&&"object"==typeof e&&"name"in e&&"message"in e&&"stack"in e}var bc=n(55246),gc=Object.defineProperty,hc=Object.defineProperties,fc=Object.getOwnPropertyDescriptors,mc=Object.getOwnPropertySymbols,Sc=Object.prototype.hasOwnProperty,vc=Object.prototype.propertyIsEnumerable,Ac=(e,t,r)=>t in e?gc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Cc=(e,t)=>{for(var r in t||(t={}))Sc.call(t,r)&&Ac(e,r,t[r]);if(mc)for(var r of mc(t))vc.call(t,r)&&Ac(e,r,t[r]);return e},Mc=(e,t)=>hc(e,fc(t));function Tc(e,t,r){bc["fatal"===e?"error":e](t,r)}var _c=e=>{const{isConsoleLogActive:t,onCrumbHook:r,trackerMethods:i,baseContext:n={}}=e;let a=Cc({},n);const o=e=>{const n=(new Date).getTime();e.context=Cc(Cc({},a),e.context),r([n,e]),i.map((t=>t.captureCrumb([n,e]))),!0===t()&&Tc(e.level,e.message,e.context)},s=(e,r)=>(n,o={},s={})=>{return u={level:e,message:n,context:Cc(Cc({},o),a),tags:Cc(Cc({},s),r)},i.forEach((e=>{e.onEvent(u)})),void(!0===t()&&Tc(u.level,u.message,u.context));var u},u=s(Aa.Error,{priority:"p1"}),c=e=>{const{message:t,context:r,stackContext:i}=e;u(t,Mc(Cc({},r),{stackContext:i,stack:(new Error).stack}),{})},p=e=>{a=Cc(Cc({},a),e)},l=async()=>{const e=i.map((e=>e.teardown()));await Promise.all(e)};return{crumb:o,recordFail:c,fatal:s(Aa.Fatal,{priority:"p0"}),error:u,warn:s(Aa.Warning,{}),info:s(Aa.Info,{}),debug:s(Aa.Debug,{}),teardown:l,addToBaseContext:p,getLoggerWithRunId:e=>{const t=e||bu(),r=e=>(r,i,n)=>e(r,Mc(Cc({},i),{runId:t}),n);return{crumb:o,recordFail:c,fatal:r(s(Aa.Fatal,{priority:"p0"})),error:r(u),warn:r(s(Aa.Warning,{})),info:r(s(Aa.Info,{})),debug:r(s(Aa.Debug,{})),teardown:l,addToBaseContext:p,getRunId:()=>t}}}},Rc=function(){return Rc=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},Rc.apply(this,arguments)};function Oc(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var i=Array(e),n=0;for(t=0;t<r;t++)for(var a=arguments[t],o=0,s=a.length;o<s;o++,n++)i[n]=a[o];return i}function Pc(){var e={};return{get:function(){return e},add:function(t,r){e[t]=r},remove:function(t){delete e[t]},set:function(t){e=t}}}var wc=function(e){return Array.isArray(e)},jc=function(e){return!Array.isArray(e)&&"object"==typeof e&&null!==e};function zc(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,n=t;i<n.length;i++){var a=n[i];null!=a&&(e=Ic(e,a,xc()))}return e}function xc(){if("undefined"!=typeof WeakSet){var e=new WeakSet;return{hasAlreadyBeenSeen:function(t){var r=e.has(t);return r||e.add(t),r}}}var t=[];return{hasAlreadyBeenSeen:function(e){var r=t.indexOf(e)>=0;return r||t.push(e),r}}}function Ic(e,t,r){if(void 0===t)return e;if(!jc(t)&&!wc(t))return t;if(!r.hasAlreadyBeenSeen(t)){if(jc(t)&&(void 0===e||jc(e))){var i=e||{};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=Ic(i[n],t[n],r));return i}if(wc(t)&&(void 0===e||wc(e))){(i=e||[]).length=Math.max(i.length,t.length);for(var a=0;a<t.length;a+=1)i[a]=Ic(i[a],t[a],r);return i}return t}}var Nc=n(55246),Ec=/[^\u0000-\u007F]/,kc=function(){function e(e,t,r){void 0===r&&(r=!1),this.endpointUrl=e,this.bytesLimit=t,this.withBatchTime=r}return e.prototype.send=function(e,t){var r=this.withBatchTime?function(e){return e+(-1===e.indexOf("?")?"?":"&")+"batch_time="+(new Date).getTime()}(this.endpointUrl):this.endpointUrl;if(!(navigator.sendBeacon&&t<this.bytesLimit&&navigator.sendBeacon(r,e))){var i=new XMLHttpRequest;i.open("POST",r,!0),i.send(e)}},e}(),Dc=function(){function e(e,t,r,i,n,a){void 0===a&&(a=sp),this.request=e,this.maxSize=t,this.bytesLimit=r,this.maxMessageSize=i,this.flushTimeout=n,this.beforeUnloadCallback=a,this.pushOnlyBuffer=[],this.upsertBuffer={},this.bufferBytesSize=0,this.bufferMessageCount=0,this.flushOnVisibilityHidden(),this.flushPeriodically()}return e.prototype.add=function(e){this.addOrUpdate(e)},e.prototype.upsert=function(e,t){this.addOrUpdate(e,t)},e.prototype.flush=function(){if(0!==this.bufferMessageCount){var e=Oc(this.pushOnlyBuffer,(t=this.upsertBuffer,r=[],Object.keys(t).forEach((function(e){r.push(t[e])})),r));this.request.send(e.join("\n"),this.bufferBytesSize),this.pushOnlyBuffer=[],this.upsertBuffer={},this.bufferBytesSize=0,this.bufferMessageCount=0}var t,r},e.prototype.sizeInBytes=function(e){return Ec.test(e)?void 0!==window.TextEncoder?(new TextEncoder).encode(e).length:new Blob([e]).size:e.length},e.prototype.addOrUpdate=function(e,t){var r=this.process(e),i=r.processedMessage,n=r.messageBytesSize;n>=this.maxMessageSize?Nc.warn("Discarded a message whose size was bigger than the maximum allowed size "+this.maxMessageSize+"KB."):(this.hasMessageFor(t)&&this.remove(t),this.willReachedBytesLimitWith(n)&&this.flush(),this.push(i,n,t),this.isFull()&&this.flush())},e.prototype.process=function(e){var t=up(e);return{processedMessage:t,messageBytesSize:this.sizeInBytes(t)}},e.prototype.push=function(e,t,r){this.bufferMessageCount>0&&(this.bufferBytesSize+=1),void 0!==r?this.upsertBuffer[r]=e:this.pushOnlyBuffer.push(e),this.bufferBytesSize+=t,this.bufferMessageCount+=1},e.prototype.remove=function(e){var t=this.upsertBuffer[e];delete this.upsertBuffer[e];var r=this.sizeInBytes(t);this.bufferBytesSize-=r,this.bufferMessageCount-=1,this.bufferMessageCount>0&&(this.bufferBytesSize-=1)},e.prototype.hasMessageFor=function(e){return void 0!==e&&void 0!==this.upsertBuffer[e]},e.prototype.willReachedBytesLimitWith=function(e){return this.bufferBytesSize+e+1>=this.bytesLimit},e.prototype.isFull=function(){return this.bufferMessageCount===this.maxSize||this.bufferBytesSize>=this.bytesLimit},e.prototype.flushPeriodically=function(){var e=this;setTimeout((function(){e.flush(),e.flushPeriodically()}),this.flushTimeout)},e.prototype.flushOnVisibilityHidden=function(){var e=this;navigator.sendBeacon&&(lp(window,Jc.BEFORE_UNLOAD,this.beforeUnloadCallback),lp(document,Jc.VISIBILITY_CHANGE,(function(){"hidden"===document.visibilityState&&e.flush()})),lp(window,Jc.BEFORE_UNLOAD,(function(){return e.flush()})))},e}(),Uc="?",qc=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;function Lc(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var Fc,Hc=function(){var e,t,r,i,n,a,o=[];function s(e,t,r){var i;for(var n in o)if(Lc(o,n))try{o[n](e,t,r)}catch(e){i=e}if(i)throw i}function u(e,i,n,a,o){if(t)Bc.augmentStackTraceWithInitialElement(t,i,n,""+e),p();else if(o)s(Bc(o),!0,o);else{var u,c={url:i,column:a,line:n},l=e;if("[object String]"==={}.toString.call(e)){var d=l.match(qc);d&&(u=d[1],l=d[2])}s({name:u,message:l,stack:[c]},!0)}return!!r&&r.apply(this,arguments)}function c(e){var t=e.reason||"Empty reason";s(Bc(t),!0,t)}function p(){var r=t,i=e;t=void 0,e=void 0,s(r,!1,i)}function l(r){if(t){if(e===r)return;p()}var i=Bc(r);throw t=i,e=r,setTimeout((function(){e===r&&p()}),i.incomplete?2e3:0),r}return l.subscribe=function(e){i||(r=window.onerror,window.onerror=Vc(u),i=!0),a||(n=null!==window.onunhandledrejection?window.onunhandledrejection:void 0,window.onunhandledrejection=Vc(c),a=!0),o.push(e)},l.unsubscribe=function(e){for(var t=o.length-1;t>=0;t-=1)o[t]===e&&o.splice(t,1);0===o.length&&(i&&(window.onerror=r,i=!1),a&&(window.onunhandledrejection=n,a=!1))},l.traceKitWindowOnError=u,l}(),Bc=function(){function e(e){if(e.stack){for(var t,r,i,n,a=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,o=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,s=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,u=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,c=/\((\S*)(?::(\d+))(?::(\d+))\)/,p=e.stack.split("\n"),l=[],d=0,y=p.length;d<y;d+=1){if(a.exec(p[d])){var b=(i=a.exec(p[d]))[2]&&0===i[2].indexOf("native");t=i[2]&&0===i[2].indexOf("eval"),r=c.exec(i[2]),t&&r&&(i[2]=r[1],i[3]=r[2],i[4]=r[3]),n={args:b?[i[2]]:[],column:i[4]?+i[4]:void 0,func:i[1]||Uc,line:i[3]?+i[3]:void 0,url:b?void 0:i[2]}}else if(s.exec(p[d]))n={args:[],column:(i=s.exec(p[d]))[4]?+i[4]:void 0,func:i[1]||Uc,line:+i[3],url:i[2]};else{if(!o.exec(p[d]))continue;t=(i=o.exec(p[d]))[3]&&i[3].indexOf(" > eval")>-1,r=u.exec(i[3]),t&&r?(i[3]=r[1],i[4]=r[2],i[5]=void 0):0!==d||i[5]||void 0===e.columnNumber||(l[0].column=e.columnNumber+1),n={args:i[2]?i[2].split(","):[],column:i[5]?+i[5]:void 0,func:i[1]||Uc,line:i[4]?+i[4]:void 0,url:i[3]}}!n.func&&n.line&&(n.func=Uc),l.push(n)}if(l.length)return{stack:l,message:e.message,name:e.name}}}function t(e,t,r,i){var n={url:t,line:r?+r:void 0};if(n.url&&n.line){e.incomplete=!1;var a=e.stack;if(a.length>0&&a[0].url===n.url){if(a[0].line===n.line)return!1;if(!a[0].line&&a[0].func===n.func)return a[0].line=n.line,a[0].context=n.context,!1}return a.unshift(n),e.partial=!0,!0}return e.incomplete=!0,!1}function r(e,i){for(var n,a,o=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,s=[],u={},c=!1,p=r.caller;p&&!c;p=p.caller)p!==Bc&&p!==Hc&&(a={args:[],column:void 0,func:Uc,line:void 0,url:void 0},n=o.exec(p.toString()),p.name?a.func=p.name:n&&(a.func=n[1]),void 0===a.func&&(a.func=n?n.input.substring(0,n.input.indexOf("{")):void 0),u[""+p]?c=!0:u[""+p]=!0,s.push(a));i&&s.splice(0,i);var l={stack:s,message:e.message,name:e.name};return t(l,e.sourceURL||e.fileName,e.line||e.lineNumber,e.message||e.description),l}function i(t,i){var n,a=void 0===i?0:+i;try{if(n=function(e){var t=e.stacktrace;if(t){for(var r,i=/ line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,n=/ line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i,a=t.split("\n"),o=[],s=0;s<a.length;s+=2){var u=void 0;i.exec(a[s])?u={args:[],column:void 0,func:(r=i.exec(a[s]))[3],line:+r[1],url:r[2]}:n.exec(a[s])&&(u={args:(r=n.exec(a[s]))[5]?r[5].split(","):[],column:+r[2],func:r[3]||r[4],line:+r[1],url:r[6]}),u&&(!u.func&&u.line&&(u.func=Uc),u.context=[a[s+1]],o.push(u))}if(o.length)return{stack:o,message:e.message,name:e.name}}}(t),n)return n}catch(e){}try{if(n=e(t))return n}catch(e){}try{if(n=function(e){var t=e.message.split("\n");if(!(t.length<4)){var r,i=/^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,n=/^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,a=/^\s*Line (\d+) of function script\s*$/i,o=[],s=window&&window.document&&window.document.getElementsByTagName("script"),u=[];for(var c in s)Lc(s,c)&&!s[c].src&&u.push(s[c]);for(var p=2;p<t.length;p+=2){var l=void 0;i.exec(t[p])?l={args:[],column:void 0,func:(r=i.exec(t[p]))[3],line:+r[1],url:r[2]}:n.exec(t[p])?l={args:[],column:void 0,func:(r=n.exec(t[p]))[4],line:+r[1],url:r[3]}:a.exec(t[p])&&(r=a.exec(t[p]),l={url:window.location.href.replace(/#.*$/,""),args:[],column:void 0,func:"",line:+r[1]}),l&&(l.func||(l.func=Uc),l.context=[t[p+1]],o.push(l))}if(o.length)return{stack:o,message:t[0],name:e.name}}}(t),n)return n}catch(e){}try{if(n=r(t,a+1))return n}catch(e){}return{message:t.message,name:t.name,stack:[]}}return i.augmentStackTraceWithInitialElement=t,i.computeStackTraceFromStackProp=e,i.ofCaller=function(e){var t=1+(void 0===e?0:+e);try{throw new Error}catch(e){return Bc(e,t+1)}},i}(),Wc=n(55246);!function(e){e.info="info",e.error="error"}(Fc||(Fc={}));var Gc,Kc={maxMessagesPerPage:0,sentMessageCount:0};function $c(e){if(e.internalMonitoringEndpoint){var t=function(e){var t,r=i(e.internalMonitoringEndpoint);function i(t){return new Dc(new kc(t,e.batchBytesLimit),e.maxBatchSize,e.batchBytesLimit,e.maxMessageSize,e.flushTimeout)}return void 0!==e.replica&&(t=i(e.replica.internalMonitoringEndpoint)),{add:function(e){var i=function(e){return zc({date:(new Date).getTime(),view:{referrer:document.referrer,url:window.location.href}},void 0!==Gc?Gc():{},e)}(e);r.add(i),t&&t.add(i)}}}(e);!function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];t.forEach((function(t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}))}(Kc,{batch:t,maxMessagesPerPage:e.maxInternalMonitoringMessagesPerPage,sentMessageCount:0})}return{setExternalContextProvider:function(e){Gc=e}}}function Qc(e,t,r){var i=r.value;r.value=function(){return(Kc.batch?Vc(i):i).apply(this,arguments)}}function Vc(e){return function(){try{return e.apply(this,arguments)}catch(e){Yc(e);try{!function(e){var t;t=Rc(Rc({},function(e){if(e instanceof Error){var t=Bc(e);return{error:{kind:t.name,stack:yp(t)},message:t.message}}return{error:{stack:"Not an instance of error"},message:"Uncaught "+up(e)}}(e)),{status:Fc.error}),Kc.batch&&Kc.sentMessageCount<Kc.maxMessagesPerPage&&(Kc.sentMessageCount+=1,Kc.batch.add(t))}(e)}catch(e){Yc(e)}}}}function Zc(e){Kc.debugMode=e}function Yc(e){Kc.debugMode&&Wc.warn("[INTERNAL ERROR]",e)}var Jc,Xc,ep,tp,rp,ip=1e3,np=60*ip,ap=60*np;function op(e){return e?(parseInt(e,10)^16*Math.random()>>parseInt(e,10)/4).toString(16):"10000000-1000-4000-8000-100000000000".replace(/[018]/g,op)}function sp(){}function up(e,t,r){if(null==e)return JSON.stringify(e);var i=[!1,void 0];cp(e)&&(i=[!0,e.toJSON],delete e.toJSON);var n,a,o=[!1,void 0];"object"==typeof e&&cp(n=Object.getPrototypeOf(e))&&(o=[!0,n.toJSON],delete n.toJSON);try{a=JSON.stringify(e,void 0,r)}catch(e){a="<error: unable to serialize object>"}finally{i[0]&&(e.toJSON=i[1]),o[0]&&(n.toJSON=o[1])}return a}function cp(e){return"object"==typeof e&&null!==e&&e.hasOwnProperty("toJSON")}function pp(e){return Math.floor((void 0===tp&&(tp=performance.timing.navigationStart),tp+e))}function lp(e,t,r,i){return dp(e,[t],r,i)}function dp(e,t,r,i){var n=void 0===i?{}:i,a=n.once,o=n.capture,s=n.passive,u=Vc(a?function(e){p(),r(e)}:r),c=s?{capture:o,passive:s}:o;t.forEach((function(t){return e.addEventListener(t,u,c)}));var p=function(){return t.forEach((function(t){return e.removeEventListener(t,u,c)}))};return{stop:p}}function yp(e){var t=(e.name||"Error")+": "+e.message;return e.stack.forEach((function(e){var r="?"===e.func?"<anonymous>":e.func,i=e.args&&e.args.length>0?"("+e.args.join(", ")+")":"",n=e.line?":"+e.line:"",a=e.line&&e.column?":"+e.column:"";t+="\n  at "+r+i+" @ "+e.url+n+a})),t}!function(e){e.BEFORE_UNLOAD="beforeunload",e.CLICK="click",e.KEY_DOWN="keydown",e.LOAD="load",e.POP_STATE="popstate",e.SCROLL="scroll",e.TOUCH_START="touchstart",e.VISIBILITY_CHANGE="visibilitychange",e.DOM_CONTENT_LOADED="DOMContentLoaded",e.POINTER_DOWN="pointerdown",e.POINTER_UP="pointerup",e.POINTER_CANCEL="pointercancel",e.HASH_CHANGE="hashchange",e.PAGE_HIDE="pagehide",e.MOUSE_DOWN="mousedown"}(Jc||(Jc={})),function(e){e.DOCUMENT="document",e.XHR="xhr",e.BEACON="beacon",e.FETCH="fetch",e.CSS="css",e.JS="js",e.IMAGE="image",e.FONT="font",e.MEDIA="media",e.OTHER="other"}(Xc||(Xc={})),function(e){e.FETCH="fetch",e.XHR="xhr"}(ep||(ep={})),function(e){e.AGENT="agent",e.CONSOLE="console",e.NETWORK="network",e.SOURCE="source",e.LOGGER="logger",e.CUSTOM="custom"}(rp||(rp={}));var bp,gp,hp=n(55246);!function(e){e.debug="debug",e.info="info",e.warn="warn",e.error="error"}(gp||(gp={}));var fp,mp=((bp={})[gp.debug]=0,bp[gp.info]=1,bp[gp.warn]=2,bp[gp.error]=3,bp);Object.keys(gp),function(e){e.http="http",e.console="console",e.silent="silent"}(fp||(fp={}));var Sp,vp=function(){function e(e,t,r,i){void 0===t&&(t=fp.http),void 0===r&&(r=gp.debug),void 0===i&&(i={}),this.sendLog=e,this.handlerType=t,this.level=r,this.contextManager=Pc(),this.contextManager.set(i)}return e.prototype.log=function(e,t,r){if(void 0===r&&(r=gp.info),mp[r]>=mp[this.level])switch(this.handlerType){case fp.http:this.sendLog(Rc({message:e,status:r},zc(this.contextManager.get(),t)));break;case fp.console:hp.log(r+": "+e,zc(this.contextManager.get(),t));case fp.silent:}},e.prototype.debug=function(e,t){this.log(e,t,gp.debug)},e.prototype.info=function(e,t){this.log(e,t,gp.info)},e.prototype.warn=function(e,t){this.log(e,t,gp.warn)},e.prototype.error=function(e,t){var r={error:{origin:rp.LOGGER}};this.log(e,zc(r,t),gp.error)},e.prototype.setContext=function(e){this.contextManager.set(e)},e.prototype.addContext=function(e,t){this.contextManager.add(e,t)},e.prototype.removeContext=function(e){this.contextManager.remove(e)},e.prototype.setHandler=function(e){this.handlerType=e},e.prototype.setLevel=function(e){this.level=e},function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);a>3&&o&&Object.defineProperty(t,r,o)}([Qc],e.prototype,"log",null),e}(),Ap=n(55246),Cp=ip;function Mp(e,t,r,i){var n=new Date;n.setTime(n.getTime()+r);var a="expires="+n.toUTCString(),o=i&&i.crossSite?"none":"strict",s=i&&i.domain?";domain="+i.domain:"",u=i&&i.secure?";secure":"";document.cookie=e+"="+t+";"+a+";path=/;samesite="+o+s+u}function Tp(e){return function(e,t){var r=e.match("(?:^|;)\\s*"+t+"\\s*=\\s*([^;]+)");return r?r[1]:void 0}(document.cookie,e)}var _p={allowedTracingOrigins:[],maxErrorsByMinute:3e3,maxInternalMonitoringMessagesPerPage:15,resourceSampleRate:100,sampleRate:100,silentMultipleInit:!1,trackInteractions:!1,requestErrorResponseLengthLimit:32768,flushTimeout:30*ip,maxBatchSize:50,maxMessageSize:262144,batchBytesLimit:16384},Rp={alternate:{logs:"logs",rum:"rum",trace:"trace"},classic:{logs:"browser",rum:"rum",trace:"public-trace"}};function Op(e){var t={};return t.secure=function(e){return!!e.useSecureSessionCookie||!!e.useCrossSiteSessionCookie}(e),t.crossSite=!!e.useCrossSiteSessionCookie,e.trackSessionAcrossSubdomains&&(t.domain=function(){if(void 0===Sp){for(var e="dd_site_test_"+op(),t=window.location.hostname.split("."),r=t.pop();t.length&&!Tp(e);)r=t.pop()+"."+r,Mp(e,"test",ip,{domain:r});Sp=r}return Sp}()),t}function Pp(e,t,r,i){var n="sdk_version:"+r.sdkVersion+(r.env?",env:"+r.env:"")+(r.service?",service:"+r.service:"")+(r.version?",version:"+r.version:""),a=wp(e,t,r.site),o=r.proxyHost?r.proxyHost:a,s=r.proxyHost?"ddhost="+a+"&":"",u=(r.applicationId?"_dd.application_id="+r.applicationId+"&":"")+s+"ddsource="+(i||"browser")+"&ddtags="+n;return"https://"+o+"/v1/input/"+r.clientToken+"?"+u}function wp(e,t,r){var i=Rp[e][t];if("classic"===e)return i+"-http-intake.logs."+r;var n=r.split("."),a=n.pop();return i+".browser-intake-"+n.join("-")+"."+a}var jp,zp,xp=n(55246);!function(e){e.US="us",e.EU="eu"}(zp||(zp={}));var Ip,Np=((jp={})[zp.EU]="datadoghq.eu",jp[zp.US]="datadoghq.com",jp);!function(e){e.RELEASE="release",e.STAGING="staging",e.E2E_TEST="e2e-test"}(Ip||(Ip={}));var Ep,kp,Dp,Up=function(){function e(e){void 0===e&&(e=1e4),this.limit=e,this.buffer=[]}return e.prototype.add=function(e){this.buffer.push(e)>this.limit&&this.buffer.splice(0,1)},e.prototype.drain=function(e){this.buffer.forEach((function(t){return e(t)})),this.buffer.length=0},e}();function qp(e){return function(e,t){if(function(){if(void 0!==Ep)return Ep;try{var e=new URL("http://test/path");return Ep="http://test/path"===e.href}catch(e){Ep=!1}return Ep}())return void 0!==t?new URL(e,t):new URL(e);if(void 0===t&&!/:/.test(e))throw new Error("Invalid URL: '"+e+"'");var r=document,i=r.createElement("a");if(void 0!==t){var n=(r=document.implementation.createHTMLDocument("")).createElement("base");n.href=t,r.head.appendChild(n),r.body.appendChild(i)}return i.href=e,i}(e,function(e){if(e.origin)return e.origin;var t=e.host.replace(/(:80|:443)$/,"");return e.protocol+"//"+t}(window.location)).href}var Lp,Fp=[],Hp=[];function Bp(){return kp||(window.fetch&&(Dp=window.fetch,window.fetch=Vc((function(e,t){var r=this,i=t&&t.method||"object"==typeof e&&e.method||"GET",n=qp("object"==typeof e&&e.url||e),a={init:t,method:i,startTime:performance.now(),url:n},o=function(e){return function(e,t,r,i){return new(r||(r=Promise))((function(n,a){function o(e){try{u(i.next(e))}catch(e){a(e)}}function s(e){try{u(i.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,s)}u((i=i.apply(e,t||[])).next())}))}(r,void 0,void 0,(function(){var t,r;return function(e,t){var r,i,n,a,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,i&&(n=2&a[0]?i.return:a[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,a[1])).done)return n;switch(i=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,i=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((n=(n=o.trys).length>0&&n[n.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){o.label=a[1];break}if(6===a[0]&&o.label<n[1]){o.label=n[1],n=a;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(a);break}n[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],i=0}finally{r=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}(this,(function(i){switch(i.label){case 0:return a.duration=performance.now()-a.startTime,"stack"in e||e instanceof Error?(a.status=0,a.response=yp(Bc(e)),Hp.forEach((function(e){return e(a)})),[3,6]):[3,1];case 1:if(!("status"in e))return[3,6];t=void 0,i.label=2;case 2:return i.trys.push([2,4,,5]),[4,e.clone().text()];case 3:return t=i.sent(),[3,5];case 4:return r=i.sent(),t="Unable to retrieve response: "+r,[3,5];case 5:a.response=t,a.responseType=e.type,a.status=e.status,Hp.forEach((function(e){return e(a)})),i.label=6;case 6:return[2]}}))}))};Fp.forEach((function(e){return e(a)}));var s=Dp.call(this,e,a.init);return s.then(Vc(o),Vc(o)),s}))),kp={beforeSend:function(e){Fp.push(e)},onRequestComplete:function(e){Hp.push(e)}}),kp}var Wp,Gp,Kp=[],$p=[];var Qp,Vp,Zp,Yp=function(){function e(){this.observers=[]}return e.prototype.subscribe=function(e){this.observers.push(e)},e.prototype.notify=function(e){this.observers.forEach((function(t){return t(e)}))},e}(),Jp=n(55246);function Xp(e){if(!Qp){var t=new Yp;!function(e,t){function r(r,i){e.isIntakeUrl(i.url)||!function(e){return 0===e.status&&"opaque"!==e.responseType}(i)&&!function(e){return e.status>=500}(i)||t.notify({message:rl(r)+" error "+i.method+" "+i.url,resource:{method:i.method,statusCode:i.status,url:i.url},source:rp.NETWORK,stack:tl(i.response,e)||"Failed to load",startTime:i.startTime})}(Lp||(Wp=XMLHttpRequest.prototype.open,Gp=XMLHttpRequest.prototype.send,XMLHttpRequest.prototype.open=Vc((function(e,t){return this._datadog_xhr={method:e,startTime:-1,url:qp(t)},Wp.apply(this,arguments)})),XMLHttpRequest.prototype.send=Vc((function(e){var t=this;if(this._datadog_xhr){this._datadog_xhr.startTime=performance.now();var r=this.onreadystatechange;this.onreadystatechange=function(){this.readyState===XMLHttpRequest.DONE&&Vc(n)(),r&&r.apply(this,arguments)};var i=!1,n=function(){i||(i=!0,t._datadog_xhr.duration=performance.now()-t._datadog_xhr.startTime,t._datadog_xhr.response=t.response,t._datadog_xhr.status=t.status,$p.forEach((function(e){return e(t._datadog_xhr)})))};this.addEventListener("loadend",Vc(n)),Kp.forEach((function(e){return e(t._datadog_xhr,t)}))}return Gp.apply(this,arguments)})),Lp={beforeSend:function(e){Kp.push(e)},onRequestComplete:function(e){$p.push(e)}}),Lp).onRequestComplete((function(e){return r(ep.XHR,e)})),Bp().onRequestComplete((function(e){return r(ep.FETCH,e)}))}(e,t),function(e){Vp=Jp.error,Jp.error=Vc((function(t){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];Vp.apply(Jp,Oc([t],r)),e.notify({message:Oc(["console error:",t],r).map(el).join(" "),source:rp.CONSOLE,startTime:performance.now()})}))}(t),function(e){Zp=function(t,r,i){var n=function(e,t,r){return e&&(void 0!==e.message||t instanceof Error)?{message:e.message||"Empty message",stack:yp(e),type:e.name}:{message:"Uncaught "+up(t),stack:"No stack, consider using an instance of Error",type:e&&e.name}}(t,i),a=n.stack,o=n.message,s=n.type;e.notify({message:o,stack:a,type:s,source:rp.SOURCE,startTime:performance.now()})},Hc.subscribe(Zp)}(t),Qp=function(e,t){var r=0,i=new Yp;return t.subscribe((function(t){r<e.maxErrorsByMinute?(r+=1,i.notify(t)):r===e.maxErrorsByMinute&&(r+=1,i.notify({message:"Reached max number of errors by minute: "+e.maxErrorsByMinute,source:rp.AGENT,startTime:performance.now()}))})),setInterval((function(){return r=0}),np),i}(e,t)}return Qp}function el(e){return"string"==typeof e?e:e instanceof Error?yp(Bc(e)):up(e,0,2)}function tl(e,t){return e&&e.length>t.requestErrorResponseLengthLimit?e.substring(0,t.requestErrorResponseLengthLimit)+"...":e}function rl(e){return ep.XHR===e?"XHR":"Fetch"}var il="_dd",nl="_dd_r",al="_dd_l",ol="rum",sl="logs",ul="_dd_s",cl=15*np,pl=4*ap,ll=np;function dl(e,t,r){var i=function(e,t){var r,i,n=!1,a=function(){n=!0,window.clearTimeout(r),r=window.setTimeout((function(){n=!1}),Cp)};return{get:function(){return n||(i=Tp(e),a()),i},set:function(r,n){Mp(e,r,n,t),i=r,a()}}}(ul,e);!function(e){var t=e.get(),r=Tp(il),i=Tp(nl),n=Tp(al);if(!t){var a={};r&&(a.id=r),n&&/^[01]$/.test(n)&&(a[sl]=n),i&&/^[012]$/.test(i)&&(a[ol]=i),hl(a,e)}}(i);var n=new Yp,a=gl(i).id,o=function(e,t,r){var i,n=!1,a=!1;return{throttled:function(){var r=this;n?a=!0:(e.apply(this),n=!0,i=window.setTimeout((function(){a&&e.apply(r),n=!1,a=!1}),t))},cancel:function(){window.clearTimeout(i),n=!1,a=!1}}}((function(){var e=gl(i),o=r(e[t]),s=o.trackingType,u=o.isTracked;e[t]=s,u&&!e.id&&(e.id=op(),e.created=String(Date.now())),hl(e,i),u&&a!==e.id&&(a=e.id,n.notify())}),Cp).throttled;return o(),function(e){var t=dp(window,[Jc.CLICK,Jc.TOUCH_START,Jc.KEY_DOWN,Jc.SCROLL],e,{capture:!0,passive:!0}).stop;Sl.push(t)}(o),function(e){var t=Vc((function(){"visible"===document.visibilityState&&hl(gl(i),i)})),r=lp(document,Jc.VISIBILITY_CHANGE,t).stop;Sl.push(r);var n=window.setInterval(t,ll);Sl.push((function(){clearInterval(n)}))}(),{getId:function(){return gl(i).id},getTrackingType:function(){return gl(i)[t]},renewObservable:n}}var yl=/^([a-z]+)=([a-z0-9-]+)$/,bl="&";function gl(e){var t=function(e){var t=e.get(),r={};return function(e){return void 0!==e&&(-1!==e.indexOf(bl)||yl.test(e))}(t)&&t.split(bl).forEach((function(e){var t=yl.exec(e);if(null!==t){var i=t[1],n=t[2];r[i]=n}})),r}(e);return function(e){return(void 0===e.created||Date.now()-Number(e.created)<pl)&&(void 0===e.expire||Date.now()<Number(e.expire))}(t)?t:(fl(e),{})}function hl(e,t){if(r=e,0!==Object.keys(r).length){var r;e.expire=String(Date.now()+cl);var i=function(e){return Object.keys(e).map((function(t){return[t,e[t]]}))}(e).map((function(e){return e[0]+"="+e[1]})).join(bl);t.set(i,cl)}else fl(t)}function fl(e){e.set("",0)}var ml,Sl=[];function vl(e){return 0!==(t=e.sampleRate)&&100*Math.random()<=t?ml.TRACKED:ml.NOT_TRACKED;var t}!function(e){e.NOT_TRACKED="0",e.TRACKED="1"}(ml||(ml={}));var Al={buildMode:"release",datacenter:"us",sdkVersion:"1.26.3"};function Cl(e){var t=window.DD_RUM;return t&&t.getInternalContext?t.getInternalContext(e):void 0}var Ml,Tl,_l,Rl=n(55246),Ol=function(e){var t,r,i=!1,n=Pc(),a={},o=new Up,s=function(e,t){o.add([e,t])},u=new vp(c);return t={logger:u,init:Vc((function(e){("file:"!==window.location.protocol||(xp.error("Execution is not allowed in the current context."),0))&&function(e){return i?(e.silentMultipleInit||Rl.error("DD_LOGS is already initialized."),!1):e&&(e.publicApiKey||e.clientToken)?!!(void 0===e.sampleRate||(t=e.sampleRate,function(e){return"number"==typeof e}(t)&&t>=0&&t<=100))||(Rl.error("Sample Rate should be a number between 0 and 100"),!1):(Rl.error("Client Token is not configured, we will not send any data."),!1);var t}(e)&&(e.publicApiKey&&(e.clientToken=e.publicApiKey,Rl.warn("Public API Key is deprecated. Please use Client Token instead.")),s=function(e,t,r){var i=function(e,t){var r=function(e,t){var r={applicationId:e.applicationId,buildMode:t.buildMode,clientToken:e.clientToken,env:e.env,proxyHost:e.proxyHost,sdkVersion:t.sdkVersion,service:e.service,site:e.site||Np[e.datacenter||t.datacenter],version:e.version},i=Array.isArray(e.enableExperimentalFeatures)?e.enableExperimentalFeatures:[],n=e.useAlternateIntakeDomains?"alternate":"classic",a=function(e,t,r){if(t.proxyHost)return["https://"+t.proxyHost+"/v1/input/"];var i=[t.site];t.buildMode===Ip.STAGING&&r&&i.push(Np[zp.US]);for(var n=[],a=Object.keys(Rp[e]),o=0,s=i;o<s.length;o++)for(var u=s[o],c=0,p=a;c<p.length;c++){var l=p[c];n.push("https://"+wp(e,l,u)+"/v1/input/")}return n}(n,r,void 0!==e.replica),o=Rc({cookieOptions:Op(e),isEnabled:function(e){return t=e,-1!==i.indexOf(t);var t},logsEndpoint:Pp(n,"logs",r),proxyHost:e.proxyHost,rumEndpoint:Pp(n,"rum",r),service:e.service,traceEndpoint:Pp(n,"trace",r),isIntakeUrl:function(e){return a.some((function(t){return 0===e.indexOf(t)}))}},_p);if(e.internalMonitoringApiKey&&(o.internalMonitoringEndpoint=Pp(n,"logs",r,"browser-agent-internal-monitoring")),"allowedTracingOrigins"in e&&(o.allowedTracingOrigins=e.allowedTracingOrigins),"sampleRate"in e&&(o.sampleRate=e.sampleRate),"resourceSampleRate"in e&&(o.resourceSampleRate=e.resourceSampleRate),"trackInteractions"in e&&(o.trackInteractions=!!e.trackInteractions),r.buildMode===Ip.E2E_TEST&&(o.internalMonitoringEndpoint="<<< E2E INTERNAL MONITORING ENDPOINT >>>",o.logsEndpoint="<<< E2E LOGS ENDPOINT >>>",o.rumEndpoint="<<< E2E RUM ENDPOINT >>>"),r.buildMode===Ip.STAGING&&void 0!==e.replica){var s=Rc(Rc({},r),{applicationId:e.replica.applicationId,clientToken:e.replica.clientToken,site:Np[zp.US]});o.replica={applicationId:e.replica.applicationId,internalMonitoringEndpoint:Pp(n,"logs",s,"browser-agent-internal-monitoring"),logsEndpoint:Pp(n,"logs",s),rumEndpoint:Pp(n,"rum",s)}}return o}(e,t);return{configuration:r,internalMonitoring:$c(r)}}(e,Al),n=i.configuration,a=i.internalMonitoring,o=!1!==e.forwardErrorsToLogs?Xp(n):new Yp,s=function(e,t){if(!t){var r=vl(e)===ml.TRACKED;return{getId:function(){},isTracked:function(){return r}}}var i=dl(e.cookieOptions,"logs",(function(t){return function(e,t){var r=function(e){return e===ml.NOT_TRACKED||e===ml.TRACKED}(t)?t:vl(e);return{trackingType:r,isTracked:r===ml.TRACKED}}(e,t)}));return{getId:i.getId,isTracked:function(){return i.getTrackingType()===ml.TRACKED}}}(n,function(e){if(void 0===document.cookie||null===document.cookie)return!1;try{var t="dd_cookie_test_"+op(),r="test";return Mp(t,r,ip,e),Tp(t)===r}catch(e){return Ap.error(e),!1}}(n.cookieOptions));return function(e,t,r,i,n,a){r.setExternalContextProvider((function(){return zc({session_id:i.getId()},a(),Cl())}));var o=function(e,t){var r,i=n(e.logsEndpoint);function n(t){return new Dc(new kc(t,e.batchBytesLimit),e.maxBatchSize,e.batchBytesLimit,e.maxMessageSize,e.flushTimeout)}return void 0!==e.replica&&(r=n(e.replica.logsEndpoint)),{add:function(n,a){var o=function(e,t,r,i){return zc(e,t,r,i)}({service:e.service,session_id:t.getId()},a,Cl(),n);i.add(o),r&&r.add(o)}}}(e,i);return t.subscribe((function(e){n.error(e.message,zc({date:pp(e.startTime),error:{kind:e.type,origin:e.source,stack:e.stack}},e.resource?{http:{method:e.resource.method,status_code:e.resource.statusCode,url:e.resource.url}}:void 0,Cl(e.startTime)))})),function(e,t){i.isTracked()&&o.add(e,t)}}(n,o,a,s,t,r)}(e,u,n.get),o.drain((function(e){var t=e[0],r=e[1];return s(t,r)})),i=!0)})),getLoggerGlobalContext:Vc(n.get),setLoggerGlobalContext:Vc(n.set),addLoggerGlobalContext:Vc(n.add),removeLoggerGlobalContext:Vc(n.remove),createLogger:Vc((function(e,t){return void 0===t&&(t={}),a[e]=new vp(c,t.handler,t.level,Rc(Rc({},t.context),{logger:{name:e}})),a[e]})),getLogger:Vc((function(e){return a[e]}))},r=Rc(Rc({},t),{onReady:function(e){e()}}),Object.defineProperty(r,"_setDebug",{get:function(){return Zc},enumerable:!1}),r;function c(e){s(e,zc({date:Date.now(),view:{referrer:document.referrer,url:window.location.href}},n.get()))}}();Ml=function(){if("object"==typeof globalThis)return globalThis;Object.defineProperty(Object.prototype,"_dd_temp_",{get:function(){return this},configurable:!0});var e=_dd_temp_;return delete Object.prototype._dd_temp_,"object"!=typeof e&&(e="object"==typeof self?self:"object"==typeof window?window:{}),e}(),Tl=Ol,_l=Ml["DD_LOGS"],Ml.DD_LOGS=Tl,_l&&_l.q&&_l.q.forEach((function(e){return e()}));var Pl=n(96685),wl=e=>"string"==typeof e?0:e instanceof Error?1:2,jl=e=>{switch(wl(e)){case 0:return{message:e,context:{}};case 1:return{message:e.message,context:{error:(0,Pl.serializeError)(e)}};default:return{message:"Meta: Unidentifed payload captured",context:{}}}},zl=(e,t)=>t.includes(e),xl=e=>{switch(e){case"debug":return"debug";case"info":return"info";case"warn":case"warning":return"warning";case"error":return"error";case"fatal":case"critical":return"fatal";default:return"log"}},Il=n(37900);const Nl=Object.prototype.toString;function El(e){switch(Nl.call(e)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return Wl(e,Error)}}function kl(e,t){return Nl.call(e)===`[object ${t}]`}function Dl(e){return kl(e,"ErrorEvent")}function Ul(e){return kl(e,"DOMError")}function ql(e){return kl(e,"String")}function Ll(e){return null===e||"object"!=typeof e&&"function"!=typeof e}function Fl(e){return kl(e,"Object")}function Hl(e){return"undefined"!=typeof Event&&Wl(e,Event)}function Bl(e){return Boolean(e&&e.then&&"function"==typeof e.then)}function Wl(e,t){try{return e instanceof t}catch(e){return!1}}var Gl=n(53386);const Kl=(0,Gl.Rf)(),$l=80;function Ql(e,t={}){try{let r=e;const i=5,n=[];let a=0,o=0;const s=" > ",u=s.length;let c;const p=Array.isArray(t)?t:t.keyAttrs,l=!Array.isArray(t)&&t.maxStringLength||$l;for(;r&&a++<i&&(c=Vl(r,p),!("html"===c||a>1&&o+n.length*u+c.length>=l));)n.push(c),o+=c.length,r=r.parentNode;return n.reverse().join(s)}catch(e){return"<unknown>"}}function Vl(e,t){const r=e,i=[];let n,a,o,s,u;if(!r||!r.tagName)return"";i.push(r.tagName.toLowerCase());const c=t&&t.length?t.filter((e=>r.getAttribute(e))).map((e=>[e,r.getAttribute(e)])):null;if(c&&c.length)c.forEach((e=>{i.push(`[${e[0]}="${e[1]}"]`)}));else if(r.id&&i.push(`#${r.id}`),n=r.className,n&&ql(n))for(a=n.split(/\s+/),u=0;u<a.length;u++)i.push(`.${a[u]}`);const p=["type","name","title","alt"];for(u=0;u<p.length;u++)o=p[u],s=r.getAttribute(o),s&&i.push(`[${o}="${s}"]`);return i.join("")}function Zl(e,t=0){return"string"!=typeof e||0===t||e.length<=t?e:`${e.substr(0,t)}...`}function Yl(e,t){if(!Array.isArray(e))return"";const r=[];for(let t=0;t<e.length;t++){const i=e[t];try{r.push(String(i))}catch(e){r.push("[value cannot be serialized]")}}return r.join(t)}function Jl(e,t=[],r=!1){return t.some((t=>function(e,t,r=!1){return!!ql(e)&&(kl(t,"RegExp")?t.test(e):!!ql(t)&&(r?e===t:e.includes(t)))}(e,t,r)))}function Xl(e,t,r){if(!(t in e))return;const i=e[t],n=r(i);if("function"==typeof n)try{td(n,i)}catch(e){}e[t]=n}function ed(e,t,r){Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0})}function td(e,t){const r=t.prototype||{};e.prototype=t.prototype=r,ed(e,"__sentry_original__",t)}function rd(e){return e.__sentry_original__}function id(e){if(El(e))return{message:e.message,name:e.name,stack:e.stack,...ad(e)};if(Hl(e)){const t={type:e.type,target:nd(e.target),currentTarget:nd(e.currentTarget),...ad(e)};return"undefined"!=typeof CustomEvent&&Wl(e,CustomEvent)&&(t.detail=e.detail),t}return e}function nd(e){try{return"undefined"!=typeof Element&&Wl(e,Element)?Ql(e):Object.prototype.toString.call(e)}catch(e){return"<unknown>"}}function ad(e){if("object"==typeof e&&null!==e){const t={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}return{}}function od(e,t=40){const r=Object.keys(id(e));if(r.sort(),!r.length)return"[object has no keys]";if(r[0].length>=t)return Zl(r[0],t);for(let e=r.length;e>0;e--){const i=r.slice(0,e).join(", ");if(!(i.length>t))return e===r.length?i:Zl(i,t)}return""}function sd(e){return ud(e,new Map)}function ud(e,t){if(Fl(e)){const r=t.get(e);if(void 0!==r)return r;const i={};t.set(e,i);for(const r of Object.keys(e))void 0!==e[r]&&(i[r]=ud(e[r],t));return i}if(Array.isArray(e)){const r=t.get(e);if(void 0!==r)return r;const i=[];return t.set(e,i),e.forEach((e=>{i.push(ud(e,t))})),i}return e}let cd;class pd{constructor(){pd.prototype.__init.call(this)}static __initStatic(){this.id="FunctionToString"}__init(){this.name=pd.id}setupOnce(){cd=Function.prototype.toString,Function.prototype.toString=function(...e){const t=rd(this)||this;return cd.apply(t,e)}}}pd.__initStatic();const ld=["debug","info","warn","error","log","assert","trace"];function dd(e){if(!("console"in Gl.n2))return e();const t=Gl.n2.console,r={};ld.forEach((e=>{const i=t[e]&&t[e].__sentry_original__;e in t&&i&&(r[e]=t[e],t[e]=i)}));try{return e()}finally{Object.keys(r).forEach((e=>{t[e]=r[e]}))}}function yd(){let e=!1;const t={enable:()=>{e=!0},disable:()=>{e=!1}};return"undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__?ld.forEach((r=>{t[r]=(...t)=>{e&&dd((()=>{Gl.n2.console[r](`Sentry Logger [${r}]:`,...t)}))}})):ld.forEach((e=>{t[e]=()=>{}})),t}let bd;function gd(){const e=Gl.n2,t=e.crypto||e.msCrypto;if(t&&t.randomUUID)return t.randomUUID().replace(/-/g,"");const r=t&&t.getRandomValues?()=>t.getRandomValues(new Uint8Array(1))[0]:()=>16*Math.random();return([1e7]+1e3+4e3+8e3+1e11).replace(/[018]/g,(e=>(e^(15&r())>>e/4).toString(16)))}function hd(e){return e.exception&&e.exception.values?e.exception.values[0]:void 0}function fd(e){const{message:t,event_id:r}=e;if(t)return t;const i=hd(e);return i?i.type&&i.value?`${i.type}: ${i.value}`:i.type||i.value||r||"<unknown>":r||"<unknown>"}function md(e,t,r){const i=e.exception=e.exception||{},n=i.values=i.values||[],a=n[0]=n[0]||{};a.value||(a.value=t||""),a.type||(a.type=r||"Error")}function Sd(e,t){const r=hd(e);if(!r)return;const i=r.mechanism;if(r.mechanism={type:"generic",handled:!0,...i,...t},t&&"data"in t){const e={...i&&i.data,...t.data};r.mechanism.data=e}}function vd(e){if(e&&e.__sentry_captured__)return!0;try{ed(e,"__sentry_captured__",!0)}catch(e){}return!1}bd="undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__?(0,Gl.YO)("logger",yd):yd();const Ad=[/^Script error\.?$/,/^Javascript error: Script error\.? on line 0$/];class Cd{static __initStatic(){this.id="InboundFilters"}__init(){this.name=Cd.id}constructor(e={}){this._options=e,Cd.prototype.__init.call(this)}setupOnce(e,t){const r=e=>{const r=t();if(r){const t=r.getIntegration(Cd);if(t){const i=r.getClient(),n=i?i.getOptions():{},a=function(e={},t={}){return{allowUrls:[...e.allowUrls||[],...t.allowUrls||[]],denyUrls:[...e.denyUrls||[],...t.denyUrls||[]],ignoreErrors:[...e.ignoreErrors||[],...t.ignoreErrors||[],...Ad],ignoreInternal:void 0===e.ignoreInternal||e.ignoreInternal}}(t._options,n);return function(e,t){return t.ignoreInternal&&function(e){try{return"SentryError"===e.exception.values[0].type}catch(e){}return!1}(e)?(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&bd.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${fd(e)}`),!0):function(e,t){return!(!t||!t.length)&&function(e){if(e.message)return[e.message];if(e.exception)try{const{type:t="",value:r=""}=e.exception.values&&e.exception.values[0]||{};return[`${r}`,`${t}: ${r}`]}catch(t){return("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&bd.error(`Cannot extract message for event ${fd(e)}`),[]}return[]}(e).some((e=>Jl(e,t)))}(e,t.ignoreErrors)?(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&bd.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${fd(e)}`),!0):function(e,t){if(!t||!t.length)return!1;const r=Md(e);return!!r&&Jl(r,t)}(e,t.denyUrls)?(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&bd.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${fd(e)}.\nUrl: ${Md(e)}`),!0):!function(e,t){if(!t||!t.length)return!0;const r=Md(e);return!r||Jl(r,t)}(e,t.allowUrls)&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&bd.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${fd(e)}.\nUrl: ${Md(e)}`),!0)}(e,a)?null:e}}return e};r.id=this.name,e(r)}}function Md(e){try{let t;try{t=e.exception.values[0].stacktrace.frames}catch(e){}return t?function(e=[]){for(let t=e.length-1;t>=0;t--){const r=e[t];if(r&&"<anonymous>"!==r.filename&&"[native code]"!==r.filename)return r.filename||null}return null}(t):null}catch(t){return("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&bd.error(`Cannot extract url for event ${fd(e)}`),null}}Cd.__initStatic();var Td,_d=n(37365),Rd=n(99147);function Od(e){return new wd((t=>{t(e)}))}function Pd(e){return new wd(((t,r)=>{r(e)}))}!function(e){e[e.PENDING=0]="PENDING",e[e.RESOLVED=1]="RESOLVED",e[e.REJECTED=2]="REJECTED"}(Td||(Td={}));class wd{__init(){this._state=Td.PENDING}__init2(){this._handlers=[]}constructor(e){wd.prototype.__init.call(this),wd.prototype.__init2.call(this),wd.prototype.__init3.call(this),wd.prototype.__init4.call(this),wd.prototype.__init5.call(this),wd.prototype.__init6.call(this);try{e(this._resolve,this._reject)}catch(e){this._reject(e)}}then(e,t){return new wd(((r,i)=>{this._handlers.push([!1,t=>{if(e)try{r(e(t))}catch(e){i(e)}else r(t)},e=>{if(t)try{r(t(e))}catch(e){i(e)}else i(e)}]),this._executeHandlers()}))}catch(e){return this.then((e=>e),e)}finally(e){return new wd(((t,r)=>{let i,n;return this.then((t=>{n=!1,i=t,e&&e()}),(t=>{n=!0,i=t,e&&e()})).then((()=>{n?r(i):t(i)}))}))}__init3(){this._resolve=e=>{this._setResult(Td.RESOLVED,e)}}__init4(){this._reject=e=>{this._setResult(Td.REJECTED,e)}}__init5(){this._setResult=(e,t)=>{this._state===Td.PENDING&&(Bl(t)?t.then(this._resolve,this._reject):(this._state=e,this._value=t,this._executeHandlers()))}}__init6(){this._executeHandlers=()=>{if(this._state===Td.PENDING)return;const e=this._handlers.slice();this._handlers=[],e.forEach((e=>{e[0]||(this._state===Td.RESOLVED&&e[1](this._value),this._state===Td.REJECTED&&e[2](this._value),e[0]=!0)}))}}}function jd(e,t={}){if(t.user&&(!e.ipAddress&&t.user.ip_address&&(e.ipAddress=t.user.ip_address),e.did||t.did||(e.did=t.user.id||t.user.email||t.user.username)),e.timestamp=t.timestamp||(0,_d.ph)(),t.ignoreDuration&&(e.ignoreDuration=t.ignoreDuration),t.sid&&(e.sid=32===t.sid.length?t.sid:gd()),void 0!==t.init&&(e.init=t.init),!e.did&&t.did&&(e.did=`${t.did}`),"number"==typeof t.started&&(e.started=t.started),e.ignoreDuration)e.duration=void 0;else if("number"==typeof t.duration)e.duration=t.duration;else{const t=e.timestamp-e.started;e.duration=t>=0?t:0}t.release&&(e.release=t.release),t.environment&&(e.environment=t.environment),!e.ipAddress&&t.ipAddress&&(e.ipAddress=t.ipAddress),!e.userAgent&&t.userAgent&&(e.userAgent=t.userAgent),"number"==typeof t.errors&&(e.errors=t.errors),t.status&&(e.status=t.status)}class zd{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={}}static clone(e){const t=new zd;return e&&(t._breadcrumbs=[...e._breadcrumbs],t._tags={...e._tags},t._extra={...e._extra},t._contexts={...e._contexts},t._user=e._user,t._level=e._level,t._span=e._span,t._session=e._session,t._transactionName=e._transactionName,t._fingerprint=e._fingerprint,t._eventProcessors=[...e._eventProcessors],t._requestSession=e._requestSession,t._attachments=[...e._attachments],t._sdkProcessingMetadata={...e._sdkProcessingMetadata}),t}addScopeListener(e){this._scopeListeners.push(e)}addEventProcessor(e){return this._eventProcessors.push(e),this}setUser(e){return this._user=e||{},this._session&&jd(this._session,{user:e}),this._notifyScopeListeners(),this}getUser(){return this._user}getRequestSession(){return this._requestSession}setRequestSession(e){return this._requestSession=e,this}setTags(e){return this._tags={...this._tags,...e},this._notifyScopeListeners(),this}setTag(e,t){return this._tags={...this._tags,[e]:t},this._notifyScopeListeners(),this}setExtras(e){return this._extra={...this._extra,...e},this._notifyScopeListeners(),this}setExtra(e,t){return this._extra={...this._extra,[e]:t},this._notifyScopeListeners(),this}setFingerprint(e){return this._fingerprint=e,this._notifyScopeListeners(),this}setLevel(e){return this._level=e,this._notifyScopeListeners(),this}setTransactionName(e){return this._transactionName=e,this._notifyScopeListeners(),this}setContext(e,t){return null===t?delete this._contexts[e]:this._contexts[e]=t,this._notifyScopeListeners(),this}setSpan(e){return this._span=e,this._notifyScopeListeners(),this}getSpan(){return this._span}getTransaction(){const e=this.getSpan();return e&&e.transaction}setSession(e){return e?this._session=e:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(e){if(!e)return this;if("function"==typeof e){const t=e(this);return t instanceof zd?t:this}return e instanceof zd?(this._tags={...this._tags,...e._tags},this._extra={...this._extra,...e._extra},this._contexts={...this._contexts,...e._contexts},e._user&&Object.keys(e._user).length&&(this._user=e._user),e._level&&(this._level=e._level),e._fingerprint&&(this._fingerprint=e._fingerprint),e._requestSession&&(this._requestSession=e._requestSession)):Fl(e)&&(this._tags={...this._tags,...e.tags},this._extra={...this._extra,...e.extra},this._contexts={...this._contexts,...e.contexts},e.user&&(this._user=e.user),e.level&&(this._level=e.level),e.fingerprint&&(this._fingerprint=e.fingerprint),e.requestSession&&(this._requestSession=e.requestSession)),this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._requestSession=void 0,this._span=void 0,this._session=void 0,this._notifyScopeListeners(),this._attachments=[],this}addBreadcrumb(e,t){const r="number"==typeof t?t:100;if(r<=0)return this;const i={timestamp:(0,_d.yW)(),...e};return this._breadcrumbs=[...this._breadcrumbs,i].slice(-r),this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(e){return this._attachments.push(e),this}getAttachments(){return this._attachments}clearAttachments(){return this._attachments=[],this}applyToEvent(e,t={}){if(this._extra&&Object.keys(this._extra).length&&(e.extra={...this._extra,...e.extra}),this._tags&&Object.keys(this._tags).length&&(e.tags={...this._tags,...e.tags}),this._user&&Object.keys(this._user).length&&(e.user={...this._user,...e.user}),this._contexts&&Object.keys(this._contexts).length&&(e.contexts={...this._contexts,...e.contexts}),this._level&&(e.level=this._level),this._transactionName&&(e.transaction=this._transactionName),this._span){e.contexts={trace:this._span.getTraceContext(),...e.contexts};const t=this._span.transaction&&this._span.transaction.name;t&&(e.tags={transaction:t,...e.tags})}return this._applyFingerprint(e),e.breadcrumbs=[...e.breadcrumbs||[],...this._breadcrumbs],e.breadcrumbs=e.breadcrumbs.length>0?e.breadcrumbs:void 0,e.sdkProcessingMetadata={...e.sdkProcessingMetadata,...this._sdkProcessingMetadata},this._notifyEventProcessors([...xd(),...this._eventProcessors],e,t)}setSDKProcessingMetadata(e){return this._sdkProcessingMetadata={...this._sdkProcessingMetadata,...e},this}_notifyEventProcessors(e,t,r,i=0){return new wd(((n,a)=>{const o=e[i];if(null===t||"function"!=typeof o)n(t);else{const s=o({...t},r);("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&o.id&&null===s&&bd.log(`Event processor "${o.id}" dropped event`),Bl(s)?s.then((t=>this._notifyEventProcessors(e,t,r,i+1).then(n))).then(null,a):this._notifyEventProcessors(e,s,r,i+1).then(n).then(null,a)}}))}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach((e=>{e(this)})),this._notifyingListeners=!1)}_applyFingerprint(e){var t;e.fingerprint=e.fingerprint?(t=e.fingerprint,Array.isArray(t)?t:[t]):[],this._fingerprint&&(e.fingerprint=e.fingerprint.concat(this._fingerprint)),e.fingerprint&&!e.fingerprint.length&&delete e.fingerprint}}function xd(){return(0,Gl.YO)("globalEventProcessors",(()=>[]))}function Id(e){xd().push(e)}const Nd=4,Ed=100;class kd{__init(){this._stack=[{}]}constructor(e,t=new zd,r=Nd){this._version=r,kd.prototype.__init.call(this),this.getStackTop().scope=t,e&&this.bindClient(e)}isOlderThan(e){return this._version<e}bindClient(e){this.getStackTop().client=e,e&&e.setupIntegrations&&e.setupIntegrations()}pushScope(){const e=zd.clone(this.getScope());return this.getStack().push({client:this.getClient(),scope:e}),e}popScope(){return!(this.getStack().length<=1||!this.getStack().pop())}withScope(e){const t=this.pushScope();try{e(t)}finally{this.popScope()}}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getStack(){return this._stack}getStackTop(){return this._stack[this._stack.length-1]}captureException(e,t){const r=this._lastEventId=t&&t.event_id?t.event_id:gd(),i=new Error("Sentry syntheticException");return this._withClient(((n,a)=>{n.captureException(e,{originalException:e,syntheticException:i,...t,event_id:r},a)})),r}captureMessage(e,t,r){const i=this._lastEventId=r&&r.event_id?r.event_id:gd(),n=new Error(e);return this._withClient(((a,o)=>{a.captureMessage(e,t,{originalException:e,syntheticException:n,...r,event_id:i},o)})),i}captureEvent(e,t){const r=t&&t.event_id?t.event_id:gd();return"transaction"!==e.type&&(this._lastEventId=r),this._withClient(((i,n)=>{i.captureEvent(e,{...t,event_id:r},n)})),r}lastEventId(){return this._lastEventId}addBreadcrumb(e,t){const{scope:r,client:i}=this.getStackTop();if(!r||!i)return;const{beforeBreadcrumb:n=null,maxBreadcrumbs:a=Ed}=i.getOptions&&i.getOptions()||{};if(a<=0)return;const o={timestamp:(0,_d.yW)(),...e},s=n?dd((()=>n(o,t))):o;null!==s&&r.addBreadcrumb(s,a)}setUser(e){const t=this.getScope();t&&t.setUser(e)}setTags(e){const t=this.getScope();t&&t.setTags(e)}setExtras(e){const t=this.getScope();t&&t.setExtras(e)}setTag(e,t){const r=this.getScope();r&&r.setTag(e,t)}setExtra(e,t){const r=this.getScope();r&&r.setExtra(e,t)}setContext(e,t){const r=this.getScope();r&&r.setContext(e,t)}configureScope(e){const{scope:t,client:r}=this.getStackTop();t&&r&&e(t)}run(e){const t=Ud(this);try{e(this)}finally{Ud(t)}}getIntegration(e){const t=this.getClient();if(!t)return null;try{return t.getIntegration(e)}catch(t){return("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&bd.warn(`Cannot retrieve integration ${e.id} from the current Hub`),null}}startTransaction(e,t){return this._callExtensionMethod("startTransaction",e,t)}traceHeaders(){return this._callExtensionMethod("traceHeaders")}captureSession(e=!1){if(e)return this.endSession();this._sendSessionUpdate()}endSession(){const e=this.getStackTop(),t=e&&e.scope,r=t&&t.getSession();r&&function(e,t){let r={};"ok"===e.status&&(r={status:"exited"}),jd(e,r)}(r),this._sendSessionUpdate(),t&&t.setSession()}startSession(e){const{scope:t,client:r}=this.getStackTop(),{release:i,environment:n}=r&&r.getOptions()||{},{userAgent:a}=Gl.n2.navigator||{},o=function(e){const t=(0,_d.ph)(),r={sid:gd(),init:!0,timestamp:t,started:t,duration:0,status:"ok",errors:0,ignoreDuration:!1,toJSON:()=>function(e){return sd({sid:`${e.sid}`,init:e.init,started:new Date(1e3*e.started).toISOString(),timestamp:new Date(1e3*e.timestamp).toISOString(),status:e.status,errors:e.errors,did:"number"==typeof e.did||"string"==typeof e.did?`${e.did}`:void 0,duration:e.duration,attrs:{release:e.release,environment:e.environment,ip_address:e.ipAddress,user_agent:e.userAgent}})}(r)};return e&&jd(r,e),r}({release:i,environment:n,...t&&{user:t.getUser()},...a&&{userAgent:a},...e});if(t){const e=t.getSession&&t.getSession();e&&"ok"===e.status&&jd(e,{status:"exited"}),this.endSession(),t.setSession(o)}return o}shouldSendDefaultPii(){const e=this.getClient(),t=e&&e.getOptions();return Boolean(t&&t.sendDefaultPii)}_sendSessionUpdate(){const{scope:e,client:t}=this.getStackTop();if(!e)return;const r=e.getSession();r&&t&&t.captureSession&&t.captureSession(r)}_withClient(e){const{scope:t,client:r}=this.getStackTop();r&&e(r,t)}_callExtensionMethod(e,...t){const r=Dd().__SENTRY__;if(r&&r.extensions&&"function"==typeof r.extensions[e])return r.extensions[e].apply(this,t);("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&bd.warn(`Extension method ${e} couldn't be found, doing nothing.`)}}function Dd(){return Gl.n2.__SENTRY__=Gl.n2.__SENTRY__||{extensions:{},hub:void 0},Gl.n2}function Ud(e){const t=Dd(),r=Fd(t);return Hd(t,e),r}function qd(){const e=Dd();return Ld(e)&&!Fd(e).isOlderThan(Nd)||Hd(e,new kd),(0,Rd.KV)()?function(e){try{const t=Dd().__SENTRY__,r=t&&t.extensions&&t.extensions.domain&&t.extensions.domain.active;if(!r)return Fd(e);if(!Ld(r)||Fd(r).isOlderThan(Nd)){const t=Fd(e).getStackTop();Hd(r,new kd(t.client,zd.clone(t.scope)))}return Fd(r)}catch(t){return Fd(e)}}(e):Fd(e)}function Ld(e){return!!(e&&e.__SENTRY__&&e.__SENTRY__.hub)}function Fd(e){return(0,Gl.YO)("hub",(()=>new kd),e)}function Hd(e,t){return!!e&&((e.__SENTRY__=e.__SENTRY__||{}).hub=t,!0)}const Bd=Gl.n2;let Wd=0;function Gd(){return Wd>0}function Kd(e,t={},r){if("function"!=typeof e)return e;try{const t=e.__sentry_wrapped__;if(t)return t;if(rd(e))return e}catch(t){return e}const i=function(){const i=Array.prototype.slice.call(arguments);try{r&&"function"==typeof r&&r.apply(this,arguments);const n=i.map((e=>Kd(e,t)));return e.apply(this,n)}catch(e){throw Wd++,setTimeout((()=>{Wd--})),n=r=>{var n;r.addEventProcessor((e=>(t.mechanism&&(md(e,void 0,void 0),Sd(e,t.mechanism)),e.extra={...e.extra,arguments:i},e))),n=e,qd().captureException(n,{captureContext:undefined})},qd().withScope(n),e}var n};try{for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(i[t]=e[t])}catch(e){}td(i,e),ed(e,"__sentry_wrapped__",i);try{Object.getOwnPropertyDescriptor(i,"name").configurable&&Object.defineProperty(i,"name",{get(){return e.name}})}catch(e){}return i}const $d="<anonymous>";function Qd(e){try{return e&&"function"==typeof e&&e.name||$d}catch(e){return $d}}const Vd=(0,Gl.Rf)();function Zd(e){return e&&/^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())}const Yd=(0,Gl.Rf)(),Jd={},Xd={};function ey(e){if(!Xd[e])switch(Xd[e]=!0,e){case"console":"console"in Yd&&ld.forEach((function(e){e in Yd.console&&Xl(Yd.console,e,(function(t){return function(...r){ry("console",{args:r,level:e}),t&&t.apply(Yd.console,r)}}))}));break;case"dom":!function(){if(!("document"in Yd))return;const e=ry.bind(null,"dom"),t=cy(e,!0);Yd.document.addEventListener("click",t,!1),Yd.document.addEventListener("keypress",t,!1),["EventTarget","Node"].forEach((t=>{const r=Yd[t]&&Yd[t].prototype;r&&r.hasOwnProperty&&r.hasOwnProperty("addEventListener")&&(Xl(r,"addEventListener",(function(t){return function(r,i,n){if("click"===r||"keypress"==r)try{const i=this,a=i.__sentry_instrumentation_handlers__=i.__sentry_instrumentation_handlers__||{},o=a[r]=a[r]||{refCount:0};if(!o.handler){const i=cy(e);o.handler=i,t.call(this,r,i,n)}o.refCount++}catch(e){}return t.call(this,r,i,n)}})),Xl(r,"removeEventListener",(function(e){return function(t,r,i){if("click"===t||"keypress"==t)try{const r=this,n=r.__sentry_instrumentation_handlers__||{},a=n[t];a&&(a.refCount--,a.refCount<=0&&(e.call(this,t,a.handler,i),a.handler=void 0,delete n[t]),0===Object.keys(n).length&&delete r.__sentry_instrumentation_handlers__)}catch(e){}return e.call(this,t,r,i)}})))}))}();break;case"xhr":!function(){if(!("XMLHttpRequest"in Yd))return;const e=XMLHttpRequest.prototype;Xl(e,"open",(function(e){return function(...t){const r=this,i=t[1],n=r.__sentry_xhr__={method:ql(t[0])?t[0].toUpperCase():t[0],url:t[1]};ql(i)&&"POST"===n.method&&i.match(/sentry_key/)&&(r.__sentry_own_request__=!0);const a=function(){if(4===r.readyState){try{n.status_code=r.status}catch(e){}ry("xhr",{args:t,endTimestamp:Date.now(),startTimestamp:Date.now(),xhr:r})}};return"onreadystatechange"in r&&"function"==typeof r.onreadystatechange?Xl(r,"onreadystatechange",(function(e){return function(...t){return a(),e.apply(r,t)}})):r.addEventListener("readystatechange",a),e.apply(r,t)}})),Xl(e,"send",(function(e){return function(...t){return this.__sentry_xhr__&&void 0!==t[0]&&(this.__sentry_xhr__.body=t[0]),ry("xhr",{args:t,startTimestamp:Date.now(),xhr:this}),e.apply(this,t)}}))}();break;case"fetch":(function(){if(!function(){if(!("fetch"in Vd))return!1;try{return new Headers,new Request("http://www.example.com"),new Response,!0}catch(e){return!1}}())return!1;if(Zd(Vd.fetch))return!0;let e=!1;const t=Vd.document;if(t&&"function"==typeof t.createElement)try{const r=t.createElement("iframe");r.hidden=!0,t.head.appendChild(r),r.contentWindow&&r.contentWindow.fetch&&(e=Zd(r.contentWindow.fetch)),t.head.removeChild(r)}catch(e){("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&bd.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",e)}return e})()&&Xl(Yd,"fetch",(function(e){return function(...t){const r={args:t,fetchData:{method:iy(t),url:ny(t)},startTimestamp:Date.now()};return ry("fetch",{...r}),e.apply(Yd,t).then((e=>(ry("fetch",{...r,endTimestamp:Date.now(),response:e}),e)),(e=>{throw ry("fetch",{...r,endTimestamp:Date.now(),error:e}),e}))}}));break;case"history":!function(){if(!function(){const e=Vd.chrome,t=e&&e.app&&e.app.runtime,r="history"in Vd&&!!Vd.history.pushState&&!!Vd.history.replaceState;return!t&&r}())return;const e=Yd.onpopstate;function t(e){return function(...t){const r=t.length>2?t[2]:void 0;if(r){const e=ay,t=String(r);ay=t,ry("history",{from:e,to:t})}return e.apply(this,t)}}Yd.onpopstate=function(...t){const r=Yd.location.href,i=ay;if(ay=r,ry("history",{from:i,to:r}),e)try{return e.apply(this,t)}catch(e){}},Xl(Yd.history,"pushState",t),Xl(Yd.history,"replaceState",t)}();break;case"error":py=Yd.onerror,Yd.onerror=function(e,t,r,i,n){return ry("error",{column:i,error:n,line:r,msg:e,url:t}),!!py&&py.apply(this,arguments)};break;case"unhandledrejection":ly=Yd.onunhandledrejection,Yd.onunhandledrejection=function(e){return ry("unhandledrejection",e),!ly||ly.apply(this,arguments)};break;default:return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&bd.warn("unknown instrumentation type:",e))}}function ty(e,t){Jd[e]=Jd[e]||[],Jd[e].push(t),ey(e)}function ry(e,t){if(e&&Jd[e])for(const r of Jd[e]||[])try{r(t)}catch(t){("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&bd.error(`Error while triggering instrumentation handler.\nType: ${e}\nName: ${Qd(r)}\nError:`,t)}}function iy(e=[]){return"Request"in Yd&&Wl(e[0],Request)&&e[0].method?String(e[0].method).toUpperCase():e[1]&&e[1].method?String(e[1].method).toUpperCase():"GET"}function ny(e=[]){return"string"==typeof e[0]?e[0]:"Request"in Yd&&Wl(e[0],Request)?e[0].url:String(e[0])}let ay;const oy=1e3;let sy,uy;function cy(e,t=!1){return r=>{if(!r||uy===r)return;if(function(e){if("keypress"!==e.type)return!1;try{const t=e.target;if(!t||!t.tagName)return!0;if("INPUT"===t.tagName||"TEXTAREA"===t.tagName||t.isContentEditable)return!1}catch(e){}return!0}(r))return;const i="keypress"===r.type?"input":r.type;(void 0===sy||function(e,t){if(!e)return!0;if(e.type!==t.type)return!0;try{if(e.target!==t.target)return!0}catch(e){}return!1}(uy,r))&&(e({event:r,name:i,global:t}),uy=r),clearTimeout(sy),sy=Yd.setTimeout((()=>{sy=void 0}),oy)}}let py=null,ly=null;function dy(e,t=1/0,r=1/0){try{return by("",e,t,r)}catch(e){return{ERROR:`**non-serializable** (${e})`}}}function yy(e,t=3,r=102400){const i=dy(e,t);return n=i,function(e){return~-encodeURI(e).split(/%..|./).length}(JSON.stringify(n))>r?yy(e,t-1,r):i;var n}function by(e,t,r=1/0,i=1/0,a=function(){const e="function"==typeof WeakSet,t=e?new WeakSet:[];return[function(r){if(e)return!!t.has(r)||(t.add(r),!1);for(let e=0;e<t.length;e++)if(t[e]===r)return!0;return t.push(r),!1},function(r){if(e)t.delete(r);else for(let e=0;e<t.length;e++)if(t[e]===r){t.splice(e,1);break}}]}()){const[o,s]=a;if(null===t||["number","boolean","string"].includes(typeof t)&&("number"!=typeof(u=t)||u==u))return t;var u;const c=function(e,t){try{return"domain"===e&&t&&"object"==typeof t&&t._events?"[Domain]":"domainEmitter"===e?"[DomainEmitter]":void 0!==n.g&&t===n.g?"[Global]":"undefined"!=typeof window&&t===window?"[Window]":"undefined"!=typeof document&&t===document?"[Document]":function(e){return Fl(e)&&"nativeEvent"in e&&"preventDefault"in e&&"stopPropagation"in e}(t)?"[SyntheticEvent]":"number"==typeof t&&t!=t?"[NaN]":void 0===t?"[undefined]":"function"==typeof t?`[Function: ${Qd(t)}]`:"symbol"==typeof t?`[${String(t)}]`:"bigint"==typeof t?`[BigInt: ${String(t)}]`:`[object ${Object.getPrototypeOf(t).constructor.name}]`}catch(e){return`**non-serializable** (${e})`}}(e,t);if(!c.startsWith("[object "))return c;if(t.__sentry_skip_normalization__)return t;if(0===r)return c.replace("object ","");if(o(t))return"[Circular ~]";const p=t;if(p&&"function"==typeof p.toJSON)try{return by("",p.toJSON(),r-1,i,a)}catch(e){}const l=Array.isArray(t)?[]:{};let d=0;const y=id(t);for(const e in y){if(!Object.prototype.hasOwnProperty.call(y,e))continue;if(d>=i){l[e]="[MaxProperties ~]";break}const t=y[e];l[e]=by(e,t,r-1,i,a),d++}return s(t),l}function gy(e,t){const r=fy(e,t),i={type:t&&t.name,value:Sy(t)};return r.length&&(i.stacktrace={frames:r}),void 0===i.type&&""===i.value&&(i.value="Unrecoverable error caught"),i}function hy(e,t){return{exception:{values:[gy(e,t)]}}}function fy(e,t){const r=t.stacktrace||t.stack||"",i=function(e){if(e){if("number"==typeof e.framesToPop)return e.framesToPop;if(my.test(e.message))return 1}return 0}(t);try{return e(r,i)}catch(e){}return[]}const my=/Minified React error #\d+;/i;function Sy(e){const t=e&&e.message;return t?t.error&&"string"==typeof t.error.message?t.error.message:t:"No error message"}function vy(e,t,r,i,n){let a;if(Dl(t)&&t.error)return hy(e,t.error);if(Ul(t)||kl(t,"DOMException")){const n=t;if("stack"in t)a=hy(e,t);else{const t=n.name||(Ul(n)?"DOMError":"DOMException"),o=n.message?`${t}: ${n.message}`:t;a=Ay(e,o,r,i),md(a,o)}return"code"in n&&(a.tags={...a.tags,"DOMException.code":`${n.code}`}),a}return El(t)?hy(e,t):Fl(t)||Hl(t)?(a=function(e,t,r,i){const n=qd().getClient(),a=n&&n.getOptions().normalizeDepth,o={exception:{values:[{type:Hl(t)?t.constructor.name:i?"UnhandledRejection":"Error",value:`Non-Error ${i?"promise rejection":"exception"} captured with keys: ${od(t)}`}]},extra:{__serialized__:yy(t,a)}};if(r){const t=fy(e,r);t.length&&(o.exception.values[0].stacktrace={frames:t})}return o}(e,t,r,n),Sd(a,{synthetic:!0}),a):(a=Ay(e,t,r,i),md(a,`${t}`,void 0),Sd(a,{synthetic:!0}),a)}function Ay(e,t,r,i){const n={message:t};if(i&&r){const i=fy(e,r);i.length&&(n.exception={values:[{value:t,stacktrace:{frames:i}}]})}return n}class Cy{static __initStatic(){this.id="GlobalHandlers"}__init(){this.name=Cy.id}__init2(){this._installFunc={onerror:My,onunhandledrejection:Ty}}constructor(e){Cy.prototype.__init.call(this),Cy.prototype.__init2.call(this),this._options={onerror:!0,onunhandledrejection:!0,...e}}setupOnce(){Error.stackTraceLimit=50;const e=this._options;for(const r in e){const i=this._installFunc[r];i&&e[r]&&(t=r,("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&bd.log(`Global Handler attached: ${t}`),i(),this._installFunc[r]=void 0)}var t}}function My(){ty("error",(e=>{const[t,r,i]=Oy();if(!t.getIntegration(Cy))return;const{msg:n,url:a,line:o,column:s,error:u}=e;if(Gd()||u&&u.__sentry_own_request__)return;const c=void 0===u&&ql(n)?function(e,t,r,i){let n=Dl(e)?e.message:e,a="Error";const o=n.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);o&&(a=o[1],n=o[2]);return _y({exception:{values:[{type:a,value:n}]}},t,r,i)}(n,a,o,s):_y(vy(r,u||n,void 0,i,!1),a,o,s);c.level="error",Ry(t,u,c,"onerror")}))}function Ty(){ty("unhandledrejection",(e=>{const[t,r,i]=Oy();if(!t.getIntegration(Cy))return;let n=e;try{"reason"in e?n=e.reason:"detail"in e&&"reason"in e.detail&&(n=e.detail.reason)}catch(e){}if(Gd()||n&&n.__sentry_own_request__)return!0;const a=Ll(n)?{exception:{values:[{type:"UnhandledRejection",value:`Non-Error promise rejection captured with value: ${String(n)}`}]}}:vy(r,n,void 0,i,!0);a.level="error",Ry(t,n,a,"onunhandledrejection")}))}function _y(e,t,r,i){const n=e.exception=e.exception||{},a=n.values=n.values||[],o=a[0]=a[0]||{},s=o.stacktrace=o.stacktrace||{},u=s.frames=s.frames||[],c=isNaN(parseInt(i,10))?void 0:i,p=isNaN(parseInt(r,10))?void 0:r,l=ql(t)&&t.length>0?t:function(){try{return Kl.document.location.href}catch(e){return""}}();return 0===u.length&&u.push({colno:c,filename:l,function:"?",in_app:!0,lineno:p}),e}function Ry(e,t,r,i){Sd(r,{handled:!1,type:i}),e.captureEvent(r,{originalException:t})}function Oy(){const e=qd(),t=e.getClient(),r=t&&t.getOptions()||{stackParser:()=>[],attachStacktrace:!1};return[e,r.stackParser,r.attachStacktrace]}Cy.__initStatic();const Py=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"];class wy{static __initStatic(){this.id="TryCatch"}__init(){this.name=wy.id}constructor(e){wy.prototype.__init.call(this),this._options={XMLHttpRequest:!0,eventTarget:!0,requestAnimationFrame:!0,setInterval:!0,setTimeout:!0,...e}}setupOnce(){this._options.setTimeout&&Xl(Bd,"setTimeout",jy),this._options.setInterval&&Xl(Bd,"setInterval",jy),this._options.requestAnimationFrame&&Xl(Bd,"requestAnimationFrame",zy),this._options.XMLHttpRequest&&"XMLHttpRequest"in Bd&&Xl(XMLHttpRequest.prototype,"send",xy);const e=this._options.eventTarget;e&&(Array.isArray(e)?e:Py).forEach(Iy)}}function jy(e){return function(...t){const r=t[0];return t[0]=Kd(r,{mechanism:{data:{function:Qd(e)},handled:!0,type:"instrument"}}),e.apply(this,t)}}function zy(e){return function(t){return e.apply(this,[Kd(t,{mechanism:{data:{function:"requestAnimationFrame",handler:Qd(e)},handled:!0,type:"instrument"}})])}}function xy(e){return function(...t){const r=this;return["onload","onerror","onprogress","onreadystatechange"].forEach((e=>{e in r&&"function"==typeof r[e]&&Xl(r,e,(function(t){const r={mechanism:{data:{function:e,handler:Qd(t)},handled:!0,type:"instrument"}},i=rd(t);return i&&(r.mechanism.data.handler=Qd(i)),Kd(t,r)}))})),e.apply(this,t)}}function Iy(e){const t=Bd,r=t[e]&&t[e].prototype;r&&r.hasOwnProperty&&r.hasOwnProperty("addEventListener")&&(Xl(r,"addEventListener",(function(t){return function(r,i,n){try{"function"==typeof i.handleEvent&&(i.handleEvent=Kd(i.handleEvent,{mechanism:{data:{function:"handleEvent",handler:Qd(i),target:e},handled:!0,type:"instrument"}}))}catch(e){}return t.apply(this,[r,Kd(i,{mechanism:{data:{function:"addEventListener",handler:Qd(i),target:e},handled:!0,type:"instrument"}}),n])}})),Xl(r,"removeEventListener",(function(e){return function(t,r,i){const n=r;try{const r=n&&n.__sentry_wrapped__;r&&e.call(this,t,r,i)}catch(e){}return e.call(this,t,n,i)}})))}wy.__initStatic();const Ny=["fatal","error","warning","log","info","debug"];function Ey(e){if(!e)return{};const t=e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);if(!t)return{};const r=t[6]||"",i=t[8]||"";return{host:t[4],path:t[5],protocol:t[2],relative:t[5]+r+i}}const ky="Breadcrumbs";class Dy{static __initStatic(){this.id=ky}__init(){this.name=Dy.id}constructor(e){Dy.prototype.__init.call(this),this.options={console:!0,dom:!0,fetch:!0,history:!0,sentry:!0,xhr:!0,...e}}setupOnce(){var e;this.options.console&&ty("console",Uy),this.options.dom&&ty("dom",(e=this.options.dom,function(t){let r,i="object"==typeof e?e.serializeAttribute:void 0,n="object"==typeof e&&"number"==typeof e.maxStringLength?e.maxStringLength:void 0;n&&n>1024&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&bd.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${n} was configured. Sentry will use 1024 instead.`),n=1024),"string"==typeof i&&(i=[i]);try{r=t.event.target?Ql(t.event.target,{keyAttrs:i,maxStringLength:n}):Ql(t.event,{keyAttrs:i,maxStringLength:n})}catch(e){r="<unknown>"}0!==r.length&&qd().addBreadcrumb({category:`ui.${t.name}`,message:r},{event:t.event,name:t.name,global:t.global})})),this.options.xhr&&ty("xhr",qy),this.options.fetch&&ty("fetch",Ly),this.options.history&&ty("history",Fy)}addSentryBreadcrumb(e){this.options.sentry&&qd().addBreadcrumb({category:"sentry."+("transaction"===e.type?"transaction":"event"),event_id:e.event_id,level:e.level,message:fd(e)},{event:e})}}function Uy(e){for(let t=0;t<e.args.length;t++)if("ref=Ref<"===e.args[t]){e.args[t+1]="viewRef";break}const t={category:"console",data:{arguments:e.args,logger:"console"},level:(r=e.level,"warn"===r?"warning":Ny.includes(r)?r:"log"),message:Yl(e.args," ")};var r;if("assert"===e.level){if(!1!==e.args[0])return;t.message=`Assertion failed: ${Yl(e.args.slice(1)," ")||"console.assert"}`,t.data.arguments=e.args.slice(1)}qd().addBreadcrumb(t,{input:e.args,level:e.level})}function qy(e){if(e.endTimestamp){if(e.xhr.__sentry_own_request__)return;const{method:t,url:r,status_code:i,body:n}=e.xhr.__sentry_xhr__||{};qd().addBreadcrumb({category:"xhr",data:{method:t,url:r,status_code:i},type:"http"},{xhr:e.xhr,input:n})}}function Ly(e){e.endTimestamp&&(e.fetchData.url.match(/sentry_key/)&&"POST"===e.fetchData.method||(e.error?qd().addBreadcrumb({category:"fetch",data:e.fetchData,level:"error",type:"http"},{data:e.error,input:e.args}):qd().addBreadcrumb({category:"fetch",data:{...e.fetchData,status_code:e.response.status},type:"http"},{input:e.args,response:e.response})))}function Fy(e){let t=e.from,r=e.to;const i=Ey(Bd.location.href);let n=Ey(t);const a=Ey(r);n.path||(n=i),i.protocol===a.protocol&&i.host===a.host&&(r=a.relative),i.protocol===n.protocol&&i.host===n.host&&(t=n.relative),qd().addBreadcrumb({category:"navigation",data:{from:t,to:r}})}Dy.__initStatic();class Hy{static __initStatic(){this.id="LinkedErrors"}__init(){this.name=Hy.id}constructor(e={}){Hy.prototype.__init.call(this),this._key=e.key||"cause",this._limit=e.limit||5}setupOnce(){const e=qd().getClient();e&&Id(((t,r)=>{const i=qd().getIntegration(Hy);return i?function(e,t,r,i,n){if(!(i.exception&&i.exception.values&&n&&Wl(n.originalException,Error)))return i;const a=By(e,r,n.originalException,t);return i.exception.values=[...a,...i.exception.values],i}(e.getOptions().stackParser,i._key,i._limit,t,r):t}))}}function By(e,t,r,i,n=[]){if(!Wl(r[i],Error)||n.length+1>=t)return n;const a=gy(e,r[i]);return By(e,t,r[i],i,[a,...n])}Hy.__initStatic();class Wy{constructor(){Wy.prototype.__init.call(this)}static __initStatic(){this.id="HttpContext"}__init(){this.name=Wy.id}setupOnce(){Id((e=>{if(qd().getIntegration(Wy)){if(!Bd.navigator&&!Bd.location&&!Bd.document)return e;const t=e.request&&e.request.url||Bd.location&&Bd.location.href,{referrer:r}=Bd.document||{},{userAgent:i}=Bd.navigator||{},n={...t&&{url:t},headers:{...e.request&&e.request.headers,...r&&{Referer:r},...i&&{"User-Agent":i}}};return{...e,request:n}}return e}))}}Wy.__initStatic();class Gy{constructor(){Gy.prototype.__init.call(this)}static __initStatic(){this.id="Dedupe"}__init(){this.name=Gy.id}setupOnce(e,t){const r=e=>{const r=t().getIntegration(Gy);if(r){try{if(function(e,t){return!!t&&(!!function(e,t){const r=e.message,i=t.message;return!(!r&&!i)&&(!(r&&!i||!r&&i)&&(r===i&&(!!$y(e,t)&&!!Ky(e,t))))}(e,t)||!!function(e,t){const r=Qy(t),i=Qy(e);return!(!r||!i)&&(r.type===i.type&&r.value===i.value&&(!!$y(e,t)&&!!Ky(e,t)))}(e,t))}(e,r._previousEvent))return("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&bd.warn("Event dropped due to being a duplicate of previously captured event."),null}catch(t){return r._previousEvent=e}return r._previousEvent=e}return e};r.id=this.name,e(r)}}function Ky(e,t){let r=Vy(e),i=Vy(t);if(!r&&!i)return!0;if(r&&!i||!r&&i)return!1;if(i.length!==r.length)return!1;for(let e=0;e<i.length;e++){const t=i[e],n=r[e];if(t.filename!==n.filename||t.lineno!==n.lineno||t.colno!==n.colno||t.function!==n.function)return!1}return!0}function $y(e,t){let r=e.fingerprint,i=t.fingerprint;if(!r&&!i)return!0;if(r&&!i||!r&&i)return!1;try{return!(r.join("")!==i.join(""))}catch(e){return!1}}function Qy(e){return e.exception&&e.exception.values&&e.exception.values[0]}function Vy(e){const t=e.exception;if(t)try{return t.values[0].stacktrace.frames}catch(e){return}}Gy.__initStatic();let Zy={};Bd.Sentry&&Bd.Sentry.Integrations&&(Zy=Bd.Sentry.Integrations);const Yy={...Zy,...e,...t};class Jy extends Error{constructor(e,t="warn"){super(e),this.message=e,this.name=new.target.prototype.constructor.name,Object.setPrototypeOf(this,new.target.prototype),this.logLevel=t}}const Xy=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;function eb(e,t=!1){const{host:r,path:i,pass:n,port:a,projectId:o,protocol:s,publicKey:u}=e;return`${s}://${u}${t&&n?`:${n}`:""}@${r}${a?`:${a}`:""}/${i?`${i}/`:i}${o}`}function tb(e){return{protocol:e.protocol,publicKey:e.publicKey||"",pass:e.pass||"",host:e.host,port:e.port||"",path:e.path||"",projectId:e.projectId}}function rb(e,t=[]){return[e,t]}function ib(e,t){const[r,i]=e;return[r,[...i,t]]}function nb(e,t){e[1].forEach((e=>{const r=e[0].type;t(e,r)}))}function ab(e,t){return(t||new TextEncoder).encode(e)}function ob(e,t){const[r,i]=e;let n=JSON.stringify(r);function a(e){"string"==typeof n?n="string"==typeof e?n+e:[ab(n,t),e]:n.push("string"==typeof e?ab(e,t):e)}for(const e of i){const[t,r]=e;if(a(`\n${JSON.stringify(t)}\n`),"string"==typeof r||r instanceof Uint8Array)a(r);else{let e;try{e=JSON.stringify(r)}catch(t){e=JSON.stringify(dy(r))}a(e)}}return"string"==typeof n?n:function(e){const t=e.reduce(((e,t)=>e+t.length),0),r=new Uint8Array(t);let i=0;for(const t of e)r.set(t,i),i+=t.length;return r}(n)}function sb(e,t){const r="string"==typeof e.data?ab(e.data,t):e.data;return[sd({type:"attachment",length:r.length,filename:e.filename,content_type:e.contentType,attachment_type:e.attachmentType}),r]}const ub={session:"session",sessions:"session",attachment:"attachment",transaction:"transaction",event:"error",client_report:"internal",user_report:"default",profile:"profile"};function cb(e){return ub[e]}function pb(e){if(!e||!e.sdk)return;const{name:t,version:r}=e.sdk;return{name:t,version:r}}const lb=6e4;const db=30;function yb(e,t,r=function(e){const t=[];function r(e){return t.splice(t.indexOf(e),1)[0]}return{$:t,add:function(i){if(!(void 0===e||t.length<e))return Pd(new Jy("Not adding Promise because buffer limit was reached."));const n=i();return-1===t.indexOf(n)&&t.push(n),n.then((()=>r(n))).then(null,(()=>r(n).then(null,(()=>{})))),n},drain:function(e){return new wd(((r,i)=>{let n=t.length;if(!n)return r(!0);const a=setTimeout((()=>{e&&e>0&&r(!1)}),e);t.forEach((e=>{Od(e).then((()=>{--n||(clearTimeout(a),r(!0))}),i)}))}))}}}(e.bufferSize||db)){let i={};return{send:function(n){const a=[];if(nb(n,((t,r)=>{const n=cb(r);if(function(e,t,r=Date.now()){return function(e,t){return e[t]||e.all||0}(e,t)>r}(i,n)){const i=bb(t,r);e.recordDroppedEvent("ratelimit_backoff",n,i)}else a.push(t)})),0===a.length)return Od();const o=rb(n[0],a),s=t=>{nb(o,((r,i)=>{const n=bb(r,i);e.recordDroppedEvent(t,cb(i),n)}))};return r.add((()=>t({body:ob(o,e.textEncoder)}).then((e=>{void 0!==e.statusCode&&(e.statusCode<200||e.statusCode>=300)&&("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&bd.warn(`Sentry responded with status code ${e.statusCode} to sent event.`),i=function(e,{statusCode:t,headers:r},i=Date.now()){const n={...e},a=r&&r["x-sentry-rate-limits"],o=r&&r["retry-after"];if(a)for(const e of a.trim().split(",")){const[t,r]=e.split(":",2),a=parseInt(t,10),o=1e3*(isNaN(a)?60:a);if(r)for(const e of r.split(";"))n[e]=i+o;else n.all=i+o}else o?n.all=i+function(e,t=Date.now()){const r=parseInt(`${e}`,10);if(!isNaN(r))return 1e3*r;const i=Date.parse(`${e}`);return isNaN(i)?lb:i-t}(o,i):429===t&&(n.all=i+6e4);return n}(i,e)}),(e=>{("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&bd.error("Failed while sending event:",e),s("network_error")})))).then((e=>e),(e=>{if(e instanceof Jy)return("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&bd.error("Skipped sending event because buffer is full."),s("queue_overflow"),Od();throw e}))},flush:e=>r.drain(e)}}function bb(e,t){if("event"===t||"transaction"===t)return Array.isArray(e)?e[1]:void 0}let gb;function hb(e,t=function(){if(gb)return gb;if(Zd(Bd.fetch))return gb=Bd.fetch.bind(Bd);const e=Bd.document;let t=Bd.fetch;if(e&&"function"==typeof e.createElement)try{const r=e.createElement("iframe");r.hidden=!0,e.head.appendChild(r);const i=r.contentWindow;i&&i.fetch&&(t=i.fetch),e.head.removeChild(r)}catch(e){("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&bd.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",e)}return gb=t.bind(Bd)}()){return yb(e,(function(r){const i={body:r.body,method:"POST",referrerPolicy:"origin",headers:e.headers,keepalive:r.body.length<=65536,...e.fetchOptions};try{return t(e.url,i).then((e=>({statusCode:e.status,headers:{"x-sentry-rate-limits":e.headers.get("X-Sentry-Rate-Limits"),"retry-after":e.headers.get("Retry-After")}})))}catch(e){return gb=void 0,Pd(e)}}))}const fb="?";function mb(e,t,r,i){const n={filename:e,function:t,in_app:!0};return void 0!==r&&(n.lineno=r),void 0!==i&&(n.colno=i),n}const Sb=/^\s*at (?:(.*\).*?|.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,vb=/\((\S*)(?::(\d+))(?::(\d+))\)/,Ab=[30,e=>{const t=Sb.exec(e);if(t){if(t[2]&&0===t[2].indexOf("eval")){const e=vb.exec(t[2]);e&&(t[2]=e[1],t[3]=e[2],t[4]=e[3])}const[e,r]=Pb(t[1]||fb,t[2]);return mb(r,e,t[3]?+t[3]:void 0,t[4]?+t[4]:void 0)}}],Cb=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,Mb=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,Tb=[50,e=>{const t=Cb.exec(e);if(t){if(t[3]&&t[3].indexOf(" > eval")>-1){const e=Mb.exec(t[3]);e&&(t[1]=t[1]||"eval",t[3]=e[1],t[4]=e[2],t[5]="")}let e=t[3],r=t[1]||fb;return[r,e]=Pb(r,e),mb(e,r,t[4]?+t[4]:void 0,t[5]?+t[5]:void 0)}}],_b=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,Rb=[40,e=>{const t=_b.exec(e);return t?mb(t[2],t[1]||fb,+t[3],t[4]?+t[4]:void 0):void 0}],Ob=function(...e){const t=e.sort(((e,t)=>e[0]-t[0])).map((e=>e[1]));return(e,r=0)=>{const i=[];for(const n of e.split("\n").slice(r)){const e=n.replace(/\(error: (.*)\)/,"$1");for(const r of t){const t=r(e);if(t){i.push(t);break}}}return function(e){if(!e.length)return[];let t=e;const r=t[0].function||"",i=t[t.length-1].function||"";return-1===r.indexOf("captureMessage")&&-1===r.indexOf("captureException")||(t=t.slice(1)),-1!==i.indexOf("sentryWrapped")&&(t=t.slice(0,-1)),t.slice(0,50).map((e=>({...e,filename:e.filename||t[0].filename,function:e.function||"?"}))).reverse()}(i)}}(Ab,Tb,Rb),Pb=(e,t)=>{const r=-1!==e.indexOf("safari-extension"),i=-1!==e.indexOf("safari-web-extension");return r||i?[-1!==e.indexOf("@")?e.split("@")[0]:fb,r?`safari-extension:${t}`:`safari-web-extension:${t}`]:[e,t]},wb="7";function jb(e,t={}){const r="string"==typeof t?t:t.tunnel,i="string"!=typeof t&&t._metadata?t._metadata.sdk:void 0;return r||`${function(e){return`${function(e){const t=e.protocol?`${e.protocol}:`:"",r=e.port?`:${e.port}`:"";return`${t}//${e.host}${r}${e.path?`/${e.path}`:""}/api/`}(e)}${e.projectId}/envelope/`}(e)}?${function(e,t){return r={sentry_key:e.publicKey,sentry_version:wb,...t&&{sentry_client:`${t.name}/${t.version}`}},Object.keys(r).map((e=>`${encodeURIComponent(e)}=${encodeURIComponent(r[e])}`)).join("&");var r}(e,i)}`}const zb=[],xb="Not capturing exception because it's already been captured.";class Ib{__init(){this._integrations={}}__init2(){this._integrationsInitialized=!1}__init3(){this._numProcessing=0}__init4(){this._outcomes={}}constructor(e){if(Ib.prototype.__init.call(this),Ib.prototype.__init2.call(this),Ib.prototype.__init3.call(this),Ib.prototype.__init4.call(this),this._options=e,e.dsn){this._dsn=function(e){const t="string"==typeof e?function(e){const t=Xy.exec(e);if(!t)throw new Jy(`Invalid Sentry Dsn: ${e}`);const[r,i,n="",a,o="",s]=t.slice(1);let u="",c=s;const p=c.split("/");if(p.length>1&&(u=p.slice(0,-1).join("/"),c=p.pop()),c){const e=c.match(/^\d+/);e&&(c=e[0])}return tb({host:a,pass:n,path:u,projectId:c,port:o,protocol:r,publicKey:i})}(e):tb(e);return function(e){if("undefined"!=typeof __SENTRY_DEBUG__&&!__SENTRY_DEBUG__)return;const{port:t,projectId:r,protocol:i}=e;if(["protocol","publicKey","host","projectId"].forEach((t=>{if(!e[t])throw new Jy(`Invalid Sentry Dsn: ${t} missing`)})),!r.match(/^\d+$/))throw new Jy(`Invalid Sentry Dsn: Invalid projectId ${r}`);if(!function(e){return"http"===e||"https"===e}(i))throw new Jy(`Invalid Sentry Dsn: Invalid protocol ${i}`);if(t&&isNaN(parseInt(t,10)))throw new Jy(`Invalid Sentry Dsn: Invalid port ${t}`)}(t),t}(e.dsn);const t=jb(this._dsn,e);this._transport=e.transport({recordDroppedEvent:this.recordDroppedEvent.bind(this),...e.transportOptions,url:t})}else("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&bd.warn("No DSN provided, client will not do anything.")}captureException(e,t,r){if(vd(e))return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&bd.log(xb));let i=t&&t.event_id;return this._process(this.eventFromException(e,t).then((e=>this._captureEvent(e,t,r))).then((e=>{i=e}))),i}captureMessage(e,t,r,i){let n=r&&r.event_id;const a=Ll(e)?this.eventFromMessage(String(e),t,r):this.eventFromException(e,r);return this._process(a.then((e=>this._captureEvent(e,r,i))).then((e=>{n=e}))),n}captureEvent(e,t,r){if(t&&t.originalException&&vd(t.originalException))return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&bd.log(xb));let i=t&&t.event_id;return this._process(this._captureEvent(e,t,r).then((e=>{i=e}))),i}captureSession(e){this._isEnabled()?"string"!=typeof e.release?("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&bd.warn("Discarded session because of missing or non-string release"):(this.sendSession(e),jd(e,{init:!1})):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&bd.warn("SDK not enabled, will not capture session.")}getDsn(){return this._dsn}getOptions(){return this._options}getTransport(){return this._transport}flush(e){const t=this._transport;return t?this._isClientDoneProcessing(e).then((r=>t.flush(e).then((e=>r&&e)))):Od(!0)}close(e){return this.flush(e).then((e=>(this.getOptions().enabled=!1,e)))}setupIntegrations(){this._isEnabled()&&!this._integrationsInitialized&&(this._integrations=function(e){const t={};return e.forEach((e=>{t[e.name]=e,-1===zb.indexOf(e.name)&&(e.setupOnce(Id,qd),zb.push(e.name),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&bd.log(`Integration installed: ${e.name}`))})),t}(this._options.integrations),this._integrationsInitialized=!0)}getIntegrationById(e){return this._integrations[e]}getIntegration(e){try{return this._integrations[e.id]||null}catch(t){return("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&bd.warn(`Cannot retrieve integration ${e.id} from the current Client`),null}}sendEvent(e,t={}){if(this._dsn){let r=function(e,t,r,i){const n=pb(r),a=e.type||"event";!function(e,t){t&&(e.sdk=e.sdk||{},e.sdk.name=e.sdk.name||t.name,e.sdk.version=e.sdk.version||t.version,e.sdk.integrations=[...e.sdk.integrations||[],...t.integrations||[]],e.sdk.packages=[...e.sdk.packages||[],...t.packages||[]])}(e,r&&r.sdk);const o=function(e,t,r,i){const n=e.sdkProcessingMetadata&&e.sdkProcessingMetadata.dynamicSamplingContext;return{event_id:e.event_id,sent_at:(new Date).toISOString(),...t&&{sdk:t},...!!r&&{dsn:eb(i)},..."transaction"===e.type&&n&&{trace:sd({...n})}}}(e,n,i,t);return delete e.sdkProcessingMetadata,rb(o,[[{type:a},e]])}(e,this._dsn,this._options._metadata,this._options.tunnel);for(const e of t.attachments||[])r=ib(r,sb(e,this._options.transportOptions&&this._options.transportOptions.textEncoder));this._sendEnvelope(r)}}sendSession(e){if(this._dsn){const t=function(e,t,r,i){const n=pb(r);return rb({sent_at:(new Date).toISOString(),...n&&{sdk:n},...!!i&&{dsn:eb(t)}},["aggregates"in e?[{type:"sessions"},e]:[{type:"session"},e]])}(e,this._dsn,this._options._metadata,this._options.tunnel);this._sendEnvelope(t)}}recordDroppedEvent(e,t,r){if(this._options.sendClientReports){const r=`${e}:${t}`;("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&bd.log(`Adding outcome: "${r}"`),this._outcomes[r]=this._outcomes[r]+1||1}}_updateSessionFromEvent(e,t){let r=!1,i=!1;const n=t.exception&&t.exception.values;if(n){i=!0;for(const e of n){const t=e.mechanism;if(t&&!1===t.handled){r=!0;break}}}const a="ok"===e.status;(a&&0===e.errors||a&&r)&&(jd(e,{...r&&{status:"crashed"},errors:e.errors||Number(i||r)}),this.captureSession(e))}_isClientDoneProcessing(e){return new wd((t=>{let r=0;const i=setInterval((()=>{0==this._numProcessing?(clearInterval(i),t(!0)):(r+=1,e&&r>=e&&(clearInterval(i),t(!1)))}),1)}))}_isEnabled(){return!1!==this.getOptions().enabled&&void 0!==this._dsn}_prepareEvent(e,t,r){const{normalizeDepth:i=3,normalizeMaxBreadth:n=1e3}=this.getOptions(),a={...e,event_id:e.event_id||t.event_id||gd(),timestamp:e.timestamp||(0,_d.yW)()};this._applyClientOptions(a),this._applyIntegrationsMetadata(a);let o=r;t.captureContext&&(o=zd.clone(o).update(t.captureContext));let s=Od(a);if(o&&o.getAttachments){const e=[...t.attachments||[],...o.getAttachments()];e.length&&(t.attachments=e),s=o.applyToEvent(a,t)}return s.then((e=>"number"==typeof i&&i>0?this._normalizeEvent(e,i,n):e))}_normalizeEvent(e,t,r){if(!e)return null;const i={...e,...e.breadcrumbs&&{breadcrumbs:e.breadcrumbs.map((e=>({...e,...e.data&&{data:dy(e.data,t,r)}})))},...e.user&&{user:dy(e.user,t,r)},...e.contexts&&{contexts:dy(e.contexts,t,r)},...e.extra&&{extra:dy(e.extra,t,r)}};return e.contexts&&e.contexts.trace&&i.contexts&&(i.contexts.trace=e.contexts.trace,e.contexts.trace.data&&(i.contexts.trace.data=dy(e.contexts.trace.data,t,r))),e.spans&&(i.spans=e.spans.map((e=>(e.data&&(e.data=dy(e.data,t,r)),e)))),i}_applyClientOptions(e){const t=this.getOptions(),{environment:r,release:i,dist:n,maxValueLength:a=250}=t;"environment"in e||(e.environment="environment"in t?r:"production"),void 0===e.release&&void 0!==i&&(e.release=i),void 0===e.dist&&void 0!==n&&(e.dist=n),e.message&&(e.message=Zl(e.message,a));const o=e.exception&&e.exception.values&&e.exception.values[0];o&&o.value&&(o.value=Zl(o.value,a));const s=e.request;s&&s.url&&(s.url=Zl(s.url,a))}_applyIntegrationsMetadata(e){const t=Object.keys(this._integrations);t.length>0&&(e.sdk=e.sdk||{},e.sdk.integrations=[...e.sdk.integrations||[],...t])}_captureEvent(e,t={},r){return this._processEvent(e,t,r).then((e=>e.event_id),(e=>{if("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__){const t=e;"log"===t.logLevel?bd.log(t.message):bd.warn(t)}}))}_processEvent(e,t,r){const i=this.getOptions(),{sampleRate:n}=i;if(!this._isEnabled())return Pd(new Jy("SDK not enabled, will not capture event.","log"));const a=Eb(e),o=Nb(e),s=e.type||"error",u=`before send for type \`${s}\``;return o&&"number"==typeof n&&Math.random()>n?(this.recordDroppedEvent("sample_rate","error",e),Pd(new Jy(`Discarding event because it's not included in the random sample (sampling rate = ${n})`,"log"))):this._prepareEvent(e,t,r).then((r=>{if(null===r)throw this.recordDroppedEvent("event_processor",s,e),new Jy("An event processor returned `null`, will not send event.","log");if(t.data&&!0===t.data.__sentry__)return r;const n=function(e,t,r){const{beforeSend:i,beforeSendTransaction:n}=e;return Nb(t)&&i?i(t,r):Eb(t)&&n?n(t,r):t}(i,r,t);return function(e,t){const r=`${t} must return \`null\` or a valid event.`;if(Bl(e))return e.then((e=>{if(!Fl(e)&&null!==e)throw new Jy(r);return e}),(e=>{throw new Jy(`${t} rejected with ${e}`)}));if(!Fl(e)&&null!==e)throw new Jy(r);return e}(n,u)})).then((i=>{if(null===i)throw this.recordDroppedEvent("before_send",e.type||"error",e),new Jy(`${u} returned \`null\`, will not send event.`,"log");const n=r&&r.getSession();!a&&n&&this._updateSessionFromEvent(n,i);const o=i.transaction_info;if(a&&o&&i.transaction!==e.transaction){const e="custom";i.transaction_info={...o,source:e,changes:[...o.changes,{source:e,timestamp:i.timestamp,propagations:o.propagations}]}}return this.sendEvent(i,t),i})).then(null,(e=>{if(e instanceof Jy)throw e;throw this.captureException(e,{data:{__sentry__:!0},originalException:e}),new Jy(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${e}`)}))}_process(e){this._numProcessing++,e.then((e=>(this._numProcessing--,e)),(e=>(this._numProcessing--,e)))}_sendEnvelope(e){this._transport&&this._dsn?this._transport.send(e).then(null,(e=>{("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&bd.error("Error while sending event:",e)})):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&bd.error("Transport disabled")}_clearOutcomes(){const e=this._outcomes;return this._outcomes={},Object.keys(e).map((t=>{const[r,i]=t.split(":");return{reason:r,category:i,quantity:e[t]}}))}}function Nb(e){return void 0===e.type}function Eb(e){return"transaction"===e.type}const kb="7.28.1";class Db extends Ib{constructor(e){e._metadata=e._metadata||{},e._metadata.sdk=e._metadata.sdk||{name:"sentry.javascript.browser",packages:[{name:"npm:@sentry/browser",version:kb}],version:kb},super(e),e.sendClientReports&&Bd.document&&Bd.document.addEventListener("visibilitychange",(()=>{"hidden"===Bd.document.visibilityState&&this._flushOutcomes()}))}eventFromException(e,t){return function(e,t,r,i){const n=vy(e,t,r&&r.syntheticException||void 0,i);return Sd(n),n.level="error",r&&r.event_id&&(n.event_id=r.event_id),Od(n)}(this._options.stackParser,e,t,this._options.attachStacktrace)}eventFromMessage(e,t="info",r){return function(e,t,r="info",i,n){const a=Ay(e,t,i&&i.syntheticException||void 0,n);return a.level=r,i&&i.event_id&&(a.event_id=i.event_id),Od(a)}(this._options.stackParser,e,t,r,this._options.attachStacktrace)}sendEvent(e,t){!function(e){let t,r=e[0],i=1;for(;i<e.length;){const n=e[i],a=e[i+1];if(i+=2,("optionalAccess"===n||"optionalCall"===n)&&null==r)return;"access"===n||"optionalAccess"===n?(t=r,r=a(r)):"call"!==n&&"optionalCall"!==n||(r=a(((...e)=>r.call(t,...e))),t=void 0)}}([this.getIntegrationById(ky),"optionalAccess",e=>e.addSentryBreadcrumb,"optionalCall",t=>t(e)]),super.sendEvent(e,t)}_prepareEvent(e,t,r){return e.platform=e.platform||"javascript",super._prepareEvent(e,t,r)}_flushOutcomes(){const e=this._clearOutcomes();if(0===e.length)return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&bd.log("No outcomes to send"));if(!this._dsn)return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&bd.log("No dsn provided, will not send outcomes"));("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&bd.log("Sending outcomes:",e);const t=jb(this._dsn,this._options),r=(i=e,rb((n=this._options.tunnel&&eb(this._dsn))?{dsn:n}:{},[[{type:"client_report"},{timestamp:(0,_d.yW)(),discarded_events:i}]]));var i,n;try{"[object Navigator]"===Object.prototype.toString.call(Bd&&Bd.navigator)&&"function"==typeof Bd.navigator.sendBeacon&&!this._options.transportOptions?Bd.navigator.sendBeacon.bind(Bd.navigator)(t,ob(r)):this._sendEnvelope(r)}catch(e){("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&bd.error(e)}}}n(14465),n(50334),Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var Ub=(e,t)=>{const r=t instanceof Array,i="object"==typeof t;if(!r&&!i)return t;const n=Object.assign(t);if(r)for(let t=0;t<n.length;t++)n[t]=Ub(e,n[t]);else i&&Object.keys(n).forEach((t=>{t===e?delete n[e]:null!=n[t]&&(n[t]=Ub(e,n[t]))}));return n};Error;var qb=n(55246),Lb=Object.defineProperty,Fb=Object.defineProperties,Hb=Object.getOwnPropertyDescriptors,Bb=Object.getOwnPropertySymbols,Wb=Object.prototype.hasOwnProperty,Gb=Object.prototype.propertyIsEnumerable,Kb=(e,t,r)=>t in e?Lb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,$b=(e,t)=>{for(var r in t||(t={}))Wb.call(t,r)&&Kb(e,r,t[r]);if(Bb)for(var r of Bb(t))Gb.call(t,r)&&Kb(e,r,t[r]);return e},Qb=(e,t)=>Fb(e,Hb(t)),Vb=(e,t)=>{for(var r in t)Lb(e,r,{get:t[r],enumerable:!0})};Vb({},{init:()=>Zb});var Zb=(e,t)=>{Ol.init($b({forwardErrorsToLogs:!1},t));let r=[],i=!1;const n=n=>{const{level:a,message:o,context:s,tags:u}=n;if(!1===zl(a,e)||!0===i)return;const c=a===Aa.Fatal?Aa.Error:a,p=jl(o),l=Qb($b($b({service:t.service},p.context),s),{tags:u});"error"===c&&(l.breadcrumbs=r.reduce(((e,[t,r])=>(e["crumb-".concat(t)]=r,e)),{}),r=[]),Ol.logger.log(p.message,l,c)};return{onEvent:n,captureCrumb:e=>{if(!0===i)return;r.push(e);const[,t]=e;n(Qb($b({},t),{tags:{}}))},teardown:()=>(i=!0,Promise.resolve())}},Yb={};Vb(Yb,{init:()=>Xb});var Jb=e=>Object.entries(e).reduce(((e,t)=>{const[r,i]=t,n=e.length?",":"";return e+"".concat(n).concat(r,":").concat(i)}),""),Xb=(e,t)=>{const r=Il.client.createConfiguration({authMethods:{apiKeyAuth:t.apiKey,appKeyAuth:t.appKey}}),i=new Il.v2.LogsApi(r);let n=[],a=!1;const o=r=>{var o,s;const{level:u,message:c,context:p,tags:l}=r;if(!1===zl(u,e)||!0===a)return;const d=u===Aa.Fatal?Aa.Error:u,y=jl(c);let b={};"error"===d&&(b=n.reduce(((e,[t,r])=>(e["crumb-".concat(t)]=r,e)),{}),n=[]);const g=(null==(s=null==(o=y.context)?void 0:o.error)?void 0:s.stack)||"",h=(e=>e.split(" ").at(-1)||"")(g),f={body:[{ddtags:Jb(Qb($b({},l),{env:t.env,service:t.service})),message:y.message,service:t.service,additionalProperties:{breadcrumbs:JSON.stringify(b),status:d,context:JSON.stringify(p),url:h,stack:g}}],contentEncoding:"deflate"};i.submitLog(f).catch((e=>qb.error(e)))};return{onEvent:o,captureCrumb:e=>{if(!0===a)return;n.push(e);const[,t]=e;o(Qb($b({},t),{tags:{}}))},teardown:()=>(a=!0,Promise.resolve())}},eg={};Vb(eg,{init:()=>tg});var tg=(e,t)=>{const r=Qb($b({},t),{integrations:[new Yy.Breadcrumbs({console:!1})],transport:t.transport||hb,stackParser:Ob,beforeSend:e=>(null!=e.contexts&&(e.contexts=Ub("credentials",e.contexts)),e)}),i=new Db(r),n=new kd(i);return{onEvent:t=>{const{level:r,message:i,context:a,tags:o}=t;!1!==zl(r,e)&&((e,t,r,i,n)=>{e.withScope((a=>{switch(a.setLevel(r),a.setContext("context",i),a.setTags(n),wl(t)){case 0:e.captureMessage(t);break;case 1:e.captureException(t);break;default:e.captureException("Unidentifed payload captured")}}))})(n,i,xl(r),a,o)},captureCrumb:e=>{const[t,r]=e,{level:i,message:a,context:o}=r,s={message:a,data:$b({clientTimestamp:t},o),level:xl(i)};null!=o.category&&(s.category=o.category),n.addBreadcrumb(s)},teardown:async()=>{await i.close(2e3)}}};let rg=[];const ig=e=>{rg.push(e),rg.length>400&&(rg=rg.slice(-300))},ng=e=>{const{level:t,message:r,context:i}=e;ig({level:t,message:r,context:i})},ag=e=>{const[t,r]=e,{level:i,message:n,context:a}=r;ig({level:i,message:n,context:a})};var og=n(55246);const sg="undefined"!=typeof WorkerGlobalScope,ug="script environment",{Error:cg,Fatal:pg,Info:lg,Warning:dg}=(chrome.runtime.getManifest()?.version,Aa),yg=sg?(()=>{const e=[cg,pg,lg,dg],t=[{onEvent:ng,captureCrumb:ag,teardown:()=>Promise.resolve()},eg.init([cg,pg],{dsn:"https://463bb92641e54586a41d8c96ac9fe8e5@o398470.ingest.sentry.io/4504323419602944",release:chrome.runtime.getManifest().version,environment:wu,normalizeDepth:8,sampleRate:.25}),Yb.init(e,{apiKey:"pub013004b2a5b9b661b11e2b22c596d9d9",appKey:"5bffc0789f99189eeb16a48c993e5a5883d2d169",env:wu,service:"browser_extension"})];return oc((e=>{e.setTag(ug,"serviceWorker")})),{..._c({trackerMethods:t,onCrumbHook:()=>{},isConsoleLogActive:()=>!1}),setEnvironmentName:()=>{og.log('logger.setEnvironmentName: Not implemented for the service worker. Environment is assumed to be "serviceWorker"')}}})():{setEnvironmentName:()=>{},crumb:()=>{},error:()=>{},debug:()=>{},info:()=>{},warn:()=>{},fatal:()=>{},recordFail:()=>{},teardown:()=>Promise.resolve(),addToBaseContext:()=>{}},{setEnvironmentName:bg,crumb:gg,info:hg,warn:fg,error:mg,fatal:Sg,debug:vg,recordFail:Ag,addToBaseContext:Cg}=sg?{setEnvironmentName(e){yg&&yg.setEnvironmentName(e)},crumb(...e){yg.crumb(...e)},info(e,t,r){yg.info(e,t,r)},warn(e,t,r){yg.warn(e,t,r)},error(e,t,r){yg.error(e,t,r)},fatal(e,t,r){yg.fatal(e,t,r)},debug(...e){yg.debug(...e)},recordFail(...e){yg.recordFail(...e)},addToBaseContext(e){yg.addToBaseContext(e)}}:(()=>{let e="frontend";const t=e=>()=>{og.log(`logger.${e}: Not implemented for the frontend. logger.error is available.`)};return{setEnvironmentName:t=>{e=t},error:(t,r={},i={})=>{const n=function(e,t={}){const{maxDepth:r=Number.POSITIVE_INFINITY,useToJSON:i=!0}=t;return"object"==typeof e&&null!==e?dc({from:e,seen:[],forceEnumerable:!0,maxDepth:r,depth:0,useToJSON:i,serialize:!0}):"function"==typeof e?`[Function: ${e.name??"anonymous"}]`:e}(t);chrome.runtime.sendMessage({type:Ma.logException,level:Aa.Error,payload:{serializedError:n,context:r,tags:{...i,[ug]:e}}})},debug:(...e)=>false,info:(t,r={},i={})=>{chrome.runtime.sendMessage({type:Ma.logInfo,level:Aa.Info,payload:{info:t,context:r,tags:{...i,[ug]:e}}})},warn:(t,r={},i={})=>{chrome.runtime.sendMessage({type:Ma.logWarn,level:Aa.Warning,payload:{warn:t,context:r,tags:{...i,[ug]:e}}})},fatal:t("fatal"),recordFail:t("recordFail"),crumb:e=>{chrome.runtime.sendMessage({type:Ma.logCrumb,payload:{...e,context:{}}})},addToBaseContext:e=>{chrome.runtime.sendMessage({type:Ma.addToBaseContext,payload:{context:e}})}}})();var Mg={crumb:gg,info:hg,warn:fg,error:mg,fatal:Sg,debug:vg,recordFail:Ag,setEnvironmentName:bg,addToBaseContext:Cg};let Tg,_g=bu();const Rg=async()=>{if(xu()&&!Tg){Tg=new(Pu())("0BcCR8G6DdEJ9RYwN7tGVAAuURhMrJFk",{flushAt:20,axiosConfig:{adapter:Tu}});try{const t=await new Promise((e=>{chrome.cookies.getAll({domain:ju,name:zu},(t=>{(t=t.filter((e=>!e.domain.includes("stage")))).length?e(decodeURIComponent(t[0].value).replace(/"/g,"")):e(null)}))}));t?(_g=t,Mg.debug(`read anonID ${_g} from cookie`)):(Mg.debug(`writing anonID ${_g} to cookie`),e=_g,chrome.cookies.set({domain:ju,url:"https://www.loom.com",name:zu,httpOnly:!1,secure:!0,expirationDate:new Date((new Date).setFullYear((new Date).getFullYear()+2)).getTime(),value:encodeURIComponent(`"${e}"`)}))}catch(e){Mg.error(e,{message:"error in analytics initialization"})}}var e};var Og=async(e,t,r)=>{xu()?(await Rg(),Tg?.track({userId:r,anonymousId:r?void 0:_g,event:e,properties:t,context:{manifest:3}})):chrome.runtime.sendMessage({type:Ma.trackEvent,event:e,properties:t})};var Pg=n(54333);function wg(e){return function(t){var r=t.dispatch,i=t.getState;return function(t){return function(n){return"function"==typeof n?n(r,i,e):t(n)}}}}var jg=wg();jg.withExtraArgument=wg;var zg=jg;const xg=({children:e})=>{const[t,i]=r.useState(null);return r.useEffect((()=>{(async()=>{const e=new Pg.yh({portName:"LOOM_MAILMAN_MV3"}),t=[zg],r=(0,Pg.md)(e,...t);try{return await r.ready(),r}catch(e){return Mg.error(e,{message:"webextStoreProvider: cannot connect proxy store to sw store"}),Promise.reject(e)}})().then((e=>{i(e)}))}),[]),t?r.createElement(te,{store:t},e):null},Ig=Q.div``,Ng=r.createContext(null);var Eg=({uniqueKey:e,children:t})=>{const[i,n]=r.useState(null),a=r.useRef(null),{withDarkMode:o}=function(){const e=oe(),t=pe(qo);return{updateCurrentTheme:(0,r.useCallback)((t=>{const r=t?so:"theme-light";e(jo(r)),Og("Changed theme",{theme:r})}),[e]),withDarkMode:t===so||null===t&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}}(),s=`inner-shadow-${e}`,u=`tooltip-mount-layer-${e}`,c=`shadow-host-${e}`;return r.createElement(uu.section,{id:c},r.createElement(xg,null,r.createElement("div",{id:s,ref:function(t){if(t&&!i){const r=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var i,n,a=e.stylisPlugins||Zs,o={},s=[];i=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)o[t[r]]=!0;s.push(e)}));var u,c,p,l,d=[qs,(l=function(e){u.insert(e)},function(e){e.root||(e=e.return)&&l(e)})],y=(c=[Qs,Vs].concat(a,d),p=ss(c),function(e,t,r,i){for(var n="",a=0;a<p;a++)n+=c[a](e,t,r,i)||"";return n});n=function(e,t,r,i){u=r,Us(Fs(e?e+"{"+t.styles+"}":t.styles),y),i&&(b.inserted[t.name]=!0)};var b={key:t,sheet:new Yo({key:t,container:i,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:n};return b.sheet.hydrate(s),b}({key:e,container:t});n(r)}}},r.createElement(Ig,{className:o?so:void 0,id:u,ref:a}),r.createElement(Ng.Provider,{value:a.current},i&&r.createElement(x,{value:i},r.createElement("style",null,`\n            ${pr(`#${s}`,`#${s}`)}\n            #${s} {\n              --lns-unit: 8px;\n              all: initial;\n              font-family: circular, Helvetica, sans-serif;\n              color: var(--lns-color-body);\n            }\n            #${u} {\n              z-index: 2147483646;\n              position: relative;\n\n              color: var(--lns-color-body);\n              pointer-events: auto;\n            }\n          `),t)))))};const kg=chrome.runtime.id,Dg=()=>r.createElement(Wo,null),Ug=document.createElement("div");Ug.id="loom-current-toast-msg",Ug.setAttribute("ext-id",chrome.runtime.id),document.body.appendChild(Ug),(0,i.render)(r.createElement(xg,null,r.createElement(Eg,{uniqueKey:"companion"},r.createElement(r.Fragment,null,r.createElement(Ko,null),r.createElement(Zo,null,r.createElement(Dg,null))))),Ug),chrome.runtime.onMessage.addListener(((e,t,r)=>{t.id===kg&&e?.type&&e?.type===Ma.pingToastMsgScript&&r(!0)}))}()}();
//# sourceMappingURL=currentToastMsg.js.map
//# debugId=7ea1f128-5ed2-5186-8ada-56df5aedc9bc