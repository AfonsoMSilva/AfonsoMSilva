/*! For license information please see gmail.js.LICENSE.txt */

!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9ad592cc-6c64-53ce-8fca-3d6eb7bfb5f4")}catch(e){}}();
  display: ${e=>e.isInline?"inline":"block"};
  ${e=>!e.sizeMinMax&&Bt(e.size)};
  ${e=>Gt(e.fontWeight)};
  ${e=>e.color&&`color: ${zt(e.color)}`};
  ${e=>e.isDimmed&&"opacity: 0.6"};
  ${e=>e.alignment&&`text-align: ${e.alignment}`};
  ${e=>e.hasEllipsis&&!e.ellipsisLines&&"\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  "};
  ${e=>e.hasEllipsis&&e.ellipsisLines&&`\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: ${e.ellipsisLines};\n  `};
  ${e=>!e.hasEllipsis&&e.noWrap&&"white-space: nowrap; overflow: hidden;"};
  ${e=>e.sizeMinMax&&`\n    min-height: 0vw;\n    font-size: clamp(\n      ${or(e.sizeMinMax[0])},\n      ${ur(ar(e.sizeMinMax[0]),ar(e.sizeMinMax[1]),496,1200)},\n      ${or(e.sizeMinMax[1])}\n    );\n\n    line-height: clamp(\n      ${sr(e.sizeMinMax[0])}px,\n      ${ur(sr(e.sizeMinMax[0]),sr(e.sizeMinMax[1]),496,1200)},\n      ${sr(e.sizeMinMax[1])}px\n    );\n  `}
`,pr=e=>{var t=e,{children:r,size:n="body-md",color:a,isInline:o,isDimmed:s,fontWeight:u="book",hasEllipsis:c,ellipsisLines:p,noWrap:l,variant:d,htmlTag:y="span",alignment:b,sizeMinMax:h}=t,g=St(t,["children","size","color","isInline","isDimmed","fontWeight","hasEllipsis","ellipsisLines","noWrap","variant","htmlTag","alignment","sizeMinMax"]);return s&&ct.warn("Lens: Text prop 'isDimmed' is deprecated, use color=\"bodyDimmed\" instead."),i.createElement(cr,ft({size:d?nr[d].size:n,color:a,isInline:o,isDimmed:s,fontWeight:d?nr[d].fontWeight:u,hasEllipsis:c,ellipsisLines:p,noWrap:l,variant:d,as:y,alignment:b,sizeMinMax:h},g),r)},lr=["top","bottom","left","right"],dr=ft({0:"0"},tr),yr=ft({0:"0",auto:"auto"},tr),br=jt.map((e=>({selector:"c",modifier:e,declarations:[{property:"color",value:`var(--lns-color-${e})`}]}))),hr=jt.map((e=>({selector:"bgc",modifier:e,declarations:[{property:"background-color",value:`var(--lns-color-${e})`}]}))),gr=Object.keys(Yt).map((e=>({selector:"text",modifier:e,declarations:[{property:"font-size",value:`var(--lns-fontSize-${e})`},{property:"line-height",value:`var(--lns-lineHeight-${e})`}]}))),fr=Object.keys(Xt).map((e=>({selector:"weight",modifier:e,declarations:[{property:"font-weight",value:`var(--lns-fontWeight-${e})`}]}))),mr=Object.entries(nr).map((([e,t])=>({selector:"text",modifier:e,declarations:[{property:"font-size",value:`var(--lns-fontSize-${t.size})`},{property:"line-height",value:`var(--lns-lineHeight-${t.size})`},{property:"font-weight",value:`var(--lns-fontWeight-${t.fontWeight})`}]}))),Sr=["left","right","center"].map((e=>({selector:"text",modifier:e,declarations:[{property:"text-align",value:e}]}))),vr=(e,t,r,i)=>{const n=[];return t.map((t=>{const a=i?`${e.charAt(0)}${t.charAt(0)}`:t;Object.keys(r).map((r=>{n.push({selector:a,property:`${e}${t&&e?`-${t}`:t||""}`,modifier:r,value:"auto"===r||"0"===r?r:`var(--lns-space-${r})`})}))})),n},Ar=[...br,...Object.keys(er).map((e=>({selector:"shadow",modifier:e,declarations:[{property:"box-shadow",value:`var(--lns-shadow-${e})`}]}))),...Object.keys(Jt).map((e=>({selector:"radius",modifier:e,declarations:[{property:"border-radius",value:`var(--lns-radius-${e})`}]}))),...hr,...Object.values(vr("margin",["",...lr],yr,"shortSides")).map((e=>({selector:e.selector,modifier:e.modifier,declarations:[{property:e.property,value:e.value}]}))),...Object.values(vr("margin",["x","y"],yr,"shortSides")).map((e=>({selector:e.selector,modifier:e.modifier,declarations:[{property:"margin-x"===e.property?"margin-left":"margin-top",value:e.value},{property:"margin-x"===e.property?"margin-right":"margin-bottom",value:e.value}]}))),...Object.values(vr("padding",["",...lr],dr,"shortSides")).map((e=>({selector:e.selector,modifier:e.modifier,declarations:[{property:e.property,value:e.value}]}))),...Object.values(vr("padding",["x","y"],dr,"shortSides")).map((e=>({selector:e.selector,modifier:e.modifier,declarations:[{property:"padding-x"===e.property?"padding-left":"padding-top",value:e.value},{property:"padding-x"===e.property?"padding-right":"padding-bottom",value:e.value}]}))),...gr,...fr,...mr,...Sr,...["",...lr].map((e=>({selector:"border"+e.replace(e.charAt(0),e.charAt(0).toUpperCase()),declarations:[{property:`border${e&&`-${e}`}`,value:"1px solid var(--lns-color-border)"}]}))),...["inline","block","flex","inlineBlock","inlineFlex","none"].map((e=>({selector:e,declarations:[{property:"display",value:Vt(e)}]}))),{selector:"flexWrap",declarations:[{property:"flex-wrap",value:"wrap"}]},...["column","row"].map((e=>({selector:"flexDirection",modifier:e,declarations:[{property:"flex-direction",value:e}]}))),...["stretch","center","baseline","flexStart","flexEnd","selfStart","selfEnd"].map((e=>({selector:"items",modifier:e,declarations:[{property:"align-items",value:Vt(e)}]}))),...["flexStart","flexEnd","center","spaceBetween","spaceAround","spaceEvenly"].map((e=>({selector:"justify",modifier:e,declarations:[{property:"justify-content",value:Vt(e)}]}))),...["0","1"].map((e=>({selector:"grow",modifier:e,declarations:[{property:"flex-grow",value:e}]}))),...["0","1"].map((e=>({selector:"shrink",modifier:e,declarations:[{property:"flex-shrink",value:e}]}))),...["auto","flexStart","flexEnd","center","baseline","stretch"].map((e=>({selector:"self",modifier:e,declarations:[{property:"align-self",value:Vt(e)}]}))),...["hidden","auto"].map((e=>({selector:"overflow",modifier:e,declarations:[{property:"overflow",value:e}]}))),...["relative","absolute","sticky","fixed"].map((e=>({selector:e,declarations:[{property:"position",value:e}]}))),...Object.values(vr("",lr,yr)).map((e=>({selector:e.selector,modifier:e.modifier,declarations:[{property:e.property,value:e.value}]}))),...["auto","full","0"].map((e=>({selector:"width",modifier:e,declarations:[{property:"width",value:"full"===e?"100%":e}]}))),{selector:"minWidth",modifier:"0",declarations:[{property:"min-width",value:"0"}]},...["auto","full","0"].map((e=>({selector:"height",modifier:e,declarations:[{property:"height",value:"full"===e?"100%":e}]}))),{selector:"ellipsis",declarations:[{property:"overflow",value:"hidden"},{property:"text-overflow",value:"ellipsis"},{property:"white-space",value:"nowrap"}]},{selector:"srOnly",declarations:[{property:"position",value:"absolute"},{property:"width",value:"1px"},{property:"height",value:"1px"},{property:"padding",value:"0"},{property:"margin",value:"-1px"},{property:"overflow",value:"hidden"},{property:"clip",value:"rect(0, 0, 0, 0)"},{property:"white-space",value:"nowrap"},{property:"border-width",value:"0"}]}],Cr=(e,t)=>{const r=[],i=t?`${t}-`:"";return e.map((e=>{const t=[];e.declarations.map((e=>{t.push(`${e.property}:${e.value}`)}));const n=`.${i}${e.selector}${e.modifier?"\\:":""}${e.modifier?e.modifier:""}{${t.join(";")}}`;r.push(n)})),r.join("")},Mr={xs:rr.xsmall,sm:rr.small,md:rr.medium,lg:rr.large},Tr=(e,t)=>{const r={};return Object.entries(t).forEach((([t,i])=>{r["--lns-"+((e?`${e}-`:"")+t)]=i})),r},_r=Tr(void 0,{unit:Zt/16+"rem"}),Rr=Tr("fontWeight",Xt),Or=Tr(void 0,(()=>{const e={};return Object.entries(Yt).forEach((([t,r])=>{const i={},n=`lineHeight-${t}`;i[`fontSize-${t}`]=xt(r.fontSize),i[n]=r.lineHeight,Object.assign(e,i,{})})),e})()),wr=Tr("radius",Jt),Pr=Tr("shadow",er),jr=Tr(void 0,(()=>{const e={};return Object.entries(tr).forEach((([t,r])=>{e[`space-${t}`]=xt(r)})),e})()),zr=Tr(void 0,{formFieldBorderWidth:"1px",formFieldBorderWidthFocus:"2px",formFieldHeight:xt(4.5),formFieldRadius:xt(2.25),formFieldHorizontalPadding:xt(2),formFieldBorderShadow:"\n    inset 0 0 0 var(--lns-formFieldBorderWidth) var(--lns-color-formFieldBorder)\n  ",formFieldBorderShadowFocus:"\n    inset 0 0 0 var(--lns-formFieldBorderWidthFocus) var(--lns-color-blurple),\n    0 0 0 var(--lns-formFieldBorderWidthFocus) var(--lns-color-focusRing)\n  "}),xr=Tr("color",(()=>{const e={};return Object.keys(ft(ft({},_t),Rt)).forEach((t=>{e[t]=`hsla(${Pt[t].h},${Pt[t].s}%,${Pt[t].l}%,${Pt[t].a})`})),e})()),Ir=Tr(void 0,(()=>{const e=(e,t)=>Object.keys(e).reduce(((r,i)=>{const n=e[i];return r[`${t}-color-${i}`]=`hsla(${n.h},${n.s}%,${n.l}%,${n.a})`,r}),{});return ft(ft({},e(wt.light,"themeLight")),e(wt.dark,"themeDark"))})()),Nr=[_r,Or,wr,Pr,jr,zr],Er=(e=":root")=>`\n    ${e||":root"},\n    .theme-light,\n    [data-lens-theme="light"] {\n      ${Object.keys(wt.light).map((e=>`--lns-color-${e}: var(--lns-themeLight-color-${e});`)).join("")}\n    }\n\n    .theme-dark,\n    [data-lens-theme="dark"] {\n      ${Object.keys(wt.dark).map((e=>`--lns-color-${e}: var(--lns-themeDark-color-${e});`)).join("")}\n    }\n  `,kr=e=>{const t=[],r=e||":root";return Object.entries(Object.assign({},Rr,...Nr)).forEach((e=>{t.push(`${e[0]}:${e[1]};`)})),Object.entries(ft(ft({},xr),Ir)).forEach((e=>{t.push(`${e[0]}:${e[1]};`)})),`\n    ${r} {\n      ${t.join("")}\n    }\n  `},Dr=e=>{let t,r;if("medium"===e)t=xt(4),r=xt(4);else if("large"===e)t=xt(7),r=xt(7);else{const i=It(e);t=i,r=i}return{width:t,height:r,fontSize:`calc(${t} / 1.75)`}},Ur=(De.span`
  display: block;
  color: var(--lns-color-orangeDark);
  background-color: var(--lns-color-background);
  ${Wt("full")};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  font-weight: var(--lns-fontWeight-bold);
  width: ${e=>{const{width:t}=Dr(e.size);return t}};
  height: ${e=>{const{height:t}=Dr(e.size);return t}};
  font-size: ${e=>{const{fontSize:t}=Dr(e.size);return t}};
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
`,De.img`
  max-width: 100%;
  width: ${e=>{const{width:t}=Dr(e.size);return t}};
  height: ${e=>{const{height:t}=Dr(e.size);return t}};
  font-size: ${e=>{const{fontSize:t}=Dr(e.size);return t}};
`,3),Lr=De.span`
  display: block;
  color: ${e=>zt(e.color)};

  & > svg,
  & > img {
    display: block;
    ${e=>!e.hasWidthOffset&&Nt("width",e.size)};
    ${e=>Nt("height",e.size)};
  }
`,qr=e=>{var t=e,{altText:r,icon:n,color:a="body",size:o=Ur,hasWidthOffset:s}=t,u=St(t,["altText","icon","color","size","hasWidthOffset"]);const c=i.useRef(null),p=Ur*Zt;return i.useEffect((()=>{if(!s)return;const e=c.current.querySelector("svg");if(!e)return;const t=e.getBBox();e.setAttribute("viewBox",`${t.x} 0 ${t.width||p} ${p}`)}),[]),i.createElement(Lr,ft({ref:c,"aria-label":r,color:a,size:o,hasWidthOffset:s},u),n)},Fr={small:{totalSize:18},medium:{totalSize:24},large:{totalSize:48}},Hr=e=>Fr[e.size].totalSize/6,Br=e=>Fr[e.size].totalSize,Wr=I`
  50% {
    transform: scale(1);
  }
`,Gr=De.span`
  display: inline-block;
  vertical-align: middle;
  height: ${e=>Br(e)}px;
  width: ${e=>Br(e)}px;
`,Kr=De.span`
  display: grid;
  grid-template-areas: 'stack';
  height: 100%;
  width: 100%;
`,$r=De.span`
  grid-area: stack;
  place-self: center;
  transform: rotate(${e=>45*e.position}deg)
    translateY(${e=>Br(e)/2-Hr(e)/2}px);

  &:after {
    content: '';
    height: ${e=>Hr(e)}px;
    width: ${e=>Hr(e)}px;
    border-radius: ${e=>Hr(e)}px;
    background-color: ${e=>zt(e.color)};
    display: block;
    transform: scale(0.65);
    animation: ${Wr} ${1}s
      ${e=>1*e.position/8}s ease-in-out infinite;
  }
`,Qr=({position:e,color:t,size:r})=>i.createElement($r,{color:t,position:e,size:r}),Vr=(Object.keys(Fr),e=>{var t=e,{color:r="body",size:n="medium"}=t,a=St(t,["color","size"]);let o;const s=[];for(o=0;o<8;o++)s.push(i.createElement(Qr,{color:r,position:o,size:n,key:o}));return i.createElement(Gr,ft({size:n},a),i.createElement(Kr,null,s))}),Zr={small:{height:xt(4),textSize:"small",iconSize:2,xSpace:xt(1.5)},medium:{height:xt(4.5),textSize:"medium",iconSize:3,xSpace:xt(2)},large:{height:xt(7),textSize:"large",iconSize:4,xSpace:xt(2.5)}},Yr=e=>j`
  transition: opacity 0.5s;
  ${e.hasLoader&&"opacity: 0"};
`,Xr={neutral:{color:zt("body"),background:"transparent",borderColor:zt("buttonBorder"),hover:zt("backgroundHover"),active:zt("backgroundActive")},primary:{color:zt("white"),background:zt("blurple"),borderColor:null,hover:zt("primaryHover"),active:zt("primaryActive")},record:{color:zt("white"),background:zt("record"),borderColor:null,hover:zt("recordHover"),active:zt("recordActive")},upgrade:{color:zt("grey7"),background:zt("upgrade"),borderColor:null,hover:zt("upgradeHover"),active:zt("upgradeActive"),focusRing:$t()},danger:{color:zt("white"),background:zt("danger"),borderColor:null,hover:zt("dangerHover"),active:zt("dangerActive")},ai:{color:zt("white"),background:"linear-gradient(135deg, #565ADD, #9F92EC, #DC43BE)",borderColor:null,hover:null,active:null}},Jr={enabled:j`
    cursor: pointer;
  `,disabled:j`
    pointer-events: none;
    background-color: ${zt("disabledBackground")};
    color: ${zt("disabledContent")};
    border: none;
  `},ei=xt(1),ti=De.button`
  appearance: none;
  padding: 0
    ${e=>e.hasChildren?Zr[e.size].xSpace:0};
  font: inherit;
  text-decoration: none;
  transition: 0.6s background, 0.6s border-color;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  white-space: nowrap;
  ${Gt("bold")};
  ${Wt("full")};
  ${e=>e.hasFullWidth?"display: flex; width: 100%":"display: inline-flex"};
  height: ${e=>Zr[e.size].height};
  min-width: ${e=>Zr[e.size].height};
  ${e=>Bt(Zr[e.size].textSize)};
  ${e=>e.disabled?Jr.disabled:Jr.enabled};
  ${e=>!e.disabled&&`\n    border: ${Xr[e.variant].borderColor?`1px solid ${Xr[e.variant].borderColor}`:"none"};\n    background: ${Xr[e.variant].background};\n    background-position: left;\n    background-size: 125%;\n    color: ${Xr[e.variant].color};\n  `};

  &:hover {
    transition: 0.3s background, 0.3s border-color;
    background: ${e=>Xr[e.variant].hover};
    background-position: 75% center;
  }

  &:active {
    transition: 0s background, 0s border-color;
    background: ${e=>Xr[e.variant].active};
    background-position: right;
  }

  &:focus-visible {
    outline: 1px solid transparent;
    ${$t()};
  }

  &::-moz-focus-inner {
    border: 0;
  }
`,ri=De.span`
  ${e=>Nt("padding-left",e.paddingLeft)};
  ${e=>Nt("padding-right",e.paddingRight)};
  ${Yr};
`,ii=De.img`
  max-width: 1.45em;
  max-height: 1.45em;
  height: ${e=>Zr[e.size].height};
  width: ${e=>Zr[e.size].height};
  ${e=>e.hasSpacing&&"margin-right: 0.57em"};
  ${Yr};
`,ni=De.span`
  position: absolute;
  display: flex;
  align-items: center;
`,ai=De.span`
  ${Yr};
`,oi=(Object.keys(Zr),Object.keys(Xr),e=>{var t=e,{size:r="medium",children:n,variant:a="neutral",hasFullWidth:o,icon:s,iconPosition:u="left",logoSrc:c,hasLoader:p,isDisabled:l,htmlTag:d="button",refHandler:y}=t,b=St(t,["size","children","variant","hasFullWidth","icon","iconPosition","logoSrc","hasLoader","isDisabled","htmlTag","refHandler"]);const h=i.createElement(ri,{hasLoader:p,paddingLeft:n&&"right"===u&&ei,paddingRight:n&&"left"===u&&ei},i.createElement(qr,{icon:s,color:"currentColor",hasWidthOffset:!0,size:Zr[r].iconSize}));return i.createElement(ti,ft({size:r,variant:a,hasFullWidth:o,icon:s,iconPosition:u,logoSrc:c,disabled:l,as:d,hasChildren:n,ref:e=>y&&y(e)},b),p&&i.createElement(ni,null,i.createElement(Vr,{color:"currentColor"})),s&&"left"===u&&h,c&&i.createElement(ii,{alt:"",hasSpacing:n,src:c,size:r,height:Zr[r].height,width:Zr[r].height,hasLoader:p}),i.createElement(ai,{hasLoader:p},n),s&&"right"===u&&h)}),si=De.div`
  display: ${e=>e.isInline?"inline-block":"block"};
  vertical-align: middle;
  ${e=>Nt("padding",e.all)};
  ${e=>Nt("padding-top",e.top)};
  ${e=>Nt("padding-right",e.right)};
  ${e=>Nt("padding-bottom",e.bottom)};
  ${e=>Nt("padding-left",e.left)};
`,ui=e=>{var t=e,{children:r,all:n,y:a,x:o,top:s,right:u,bottom:c,left:p,isInline:l}=t,d=St(t,["children","all","y","x","top","right","bottom","left","isInline"]);return i.createElement(si,ft({all:n,top:a||s,bottom:a||c,right:o||u,left:o||p,isInline:l},d),r)},ci={small:{height:xt(4),width:xt(5),iconSize:2,padding:xt(1.75),withIconPadding:xt(4.5),passwordAdditionalPadding:xt(.5),textSize:"small"},medium:{height:"var(--lns-formFieldHeight)",width:xt(6),iconSize:3,padding:"var(--lns-formFieldHorizontalPadding)",withIconPadding:xt(5.5),passwordAdditionalPadding:xt(.5),textSize:"medium"},large:{height:xt(7),width:xt(6),iconSize:3,padding:"var(--lns-formFieldHorizontalPadding)",withIconPadding:xt(5.5),passwordAdditionalPadding:xt(.5),textSize:"large"}},pi=De.input`
  -webkit-appearance: none;
  font-family: inherit;
  width: 100%;
  height: ${e=>ci[e.inputSize].height};
  border: none;
  color: inherit;
  background-color: ${zt("formFieldBackground")};
  transition: 0.3s box-shadow;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: ${e=>e.icon?ci[e.inputSize].withIconPadding:ci[e.inputSize].padding};
  padding-right: ${e=>(e=>{let t=e.addOn?ci[e.inputSize].withIconPadding:ci[e.inputSize].padding;return"password"===e.type&&(t=`calc(${ci[e.inputSize].passwordAdditionalPadding} + ${t})`),t})(e)};
  border-radius: var(--lns-radius-full);
  box-shadow: inset 0 0 0
    ${e=>e.hasError?"var(--lns-formFieldBorderWidthFocus) var(--lns-color-danger)":"var(--lns-formFieldBorderWidth) var(--lns-color-formFieldBorder)"};

  ${e=>Bt(ci[e.inputSize].textSize)};

  &:hover {
    box-shadow: inset 0 0 0 var(--lns-formFieldBorderWidthFocus)
      var(--lns-color-blurple);
  }

  &:focus {
    outline: 1px solid transparent;
    box-shadow: var(--lns-formFieldBorderShadowFocus);
  }

  &:disabled {
    color: ${zt("disabledContent")};
    background-color: ${zt("disabledBackground")};
  }

  &:disabled:hover {
    box-shadow: inset 0 0 0 var(--lns-formFieldBorderWidth)
      var(--lns-color-formFieldBorder);
  }

  &::placeholder {
    color: ${zt("grey5")};
  }

  [data-lens-theme='dark'] &::-webkit-calendar-picker-indicator,
  .theme-dark &::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
`,li=De.div`
  position: relative;
  width: 100%;
`,di=De.div`
  position: absolute;
  pointer-events: none;
  width: ${e=>ci[e.size].width};
  // Width isn't equal to iconPadding because we want more space on the left than the right
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,yi=De.div`
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  width: ${e=>ci[e.size].width};
  top: 50%;
  transform: translateY(-50%);
`,bi=(0,i.forwardRef)(((e,t)=>{var r=e,{placeholder:n,onFocus:a,onChange:o,onBlur:s,onKeyDown:u,isDisabled:c,icon:p,type:l="text",value:d,hasError:y,size:b="medium",addOn:h}=r,g=St(r,["placeholder","onFocus","onChange","onBlur","onKeyDown","isDisabled","icon","type","value","hasError","size","addOn"]);const f=i.createElement(pi,ft({type:l,placeholder:n,onFocus:a,onChange:o,onBlur:s,onKeyDown:u,disabled:c,icon:p,ref:t,value:d,hasError:y,inputSize:b,addOn:h},g));return p||h?i.createElement(li,null,p&&i.createElement(di,{size:b},i.createElement(qr,{icon:p,size:ci[b].iconSize,color:zt(c?"disabledContent":"body")})),f,h&&i.createElement(yi,{size:b},h)):f})),hi=bi,gi={start:"flex-start",center:"center",end:"flex-end",stretch:"stretch"},fi=e=>Array.isArray(e)?e:[e],mi=(e,t)=>{if(e.length===t)return e;const r=e[e.length-1];return[...Array(t)].map(((t,i)=>e[i]||r))},Si=(De.div`
  display: flex;
  flex-wrap: wrap;
  ${e=>((e,t)=>{const r=Math.max(fi(e).length,fi(t).length),i=mi(fi(t),r),n=mi(fi(e),r),a=i.map(((e,t)=>{const r=`${It(e)} 0 0 0`,i=`0 0 0 ${It(e)}`;return`& > * + *{ margin: ${"column"===n[t]?r:i}; }`})),o=n.map((e=>`flex-direction: ${e}`));return kt(a)+kt(o)})(e.flexDirection,e.gap)};
  ${e=>Lt(e.flexAlign,gi)};
  ${e=>e.isSpread&&((e,t,r)=>{if(Array.isArray(r)){const i=r.map((r=>`${e}: ${!0===r?t[0]:t[1]};`));return kt(i)}return`${e}: ${t[0]};`})("justify-content",["space-between","initial"],e.isSpread)};

  & > * {
    flex-shrink: 0;
  }
`,Object.keys(gi),De.div`
  ${e=>e.position&&`position: ${e.position}`};
  ${e=>e.overflow&&`overflow: ${e.overflow}`};
  ${e=>e.backgroundColor&&`background-color: ${zt(e.backgroundColor)}`};
  ${e=>e.backgroundImage&&`background-image: ${e.backgroundImage}`}
  ${e=>e.contentColor&&`color: ${zt(e.contentColor)}`};
  ${e=>((e,t,r)=>{const i=t||"border",n=`${It(r)} solid ${zt(i)}`;if(e)return"all"===e?`border: ${n};`:`border-${e}: ${n};`})(e.borderSide,e.borderColor,e.borderWidth)};
  ${e=>Wt(e.radius)};
  ${e=>Kt(e.shadow)};
  ${e=>Nt("width",e.width)};
  ${e=>Nt("height",e.height)};
  ${e=>Nt("min-width",e.minWidth)};
  ${e=>Nt("min-height",e.minHeight)};
  ${e=>Nt("max-width",e.maxWidth)};
  ${e=>Nt("max-height",e.maxHeight)};
  ${e=>Nt("padding",e.padding)};
  ${e=>Nt("padding-top",e.paddingTop)};
  ${e=>Nt("padding-right",e.paddingRight)};
  ${e=>Nt("padding-bottom",e.paddingBottom)};
  ${e=>Nt("padding-left",e.paddingLeft)};
  ${e=>Nt("margin",e.margin)};
  ${e=>Nt("margin-top",e.marginTop)};
  ${e=>Nt("margin-right",e.marginRight)};
  ${e=>Nt("margin-bottom",e.marginBottom)};
  ${e=>Nt("margin-left",e.marginLeft)};
  ${e=>Nt("top",e.top)};
  ${e=>Nt("right",e.right)};
  ${e=>Nt("bottom",e.bottom)};
  ${e=>Nt("left",e.left)};
  ${e=>e.zIndex&&`z-index: ${e.zIndex}`};
`),vi=e=>{var t=e,{children:r,backgroundColor:n,backgroundImage:a,contentColor:o,borderColor:s,radius:u,borderSide:c,borderWidth:p="1px",shadow:l,padding:d,paddingX:y,paddingY:b,paddingLeft:h,paddingRight:g,paddingTop:f,paddingBottom:m,margin:S,marginX:v,marginY:A,marginLeft:C,marginRight:M,marginTop:T,marginBottom:_,width:R,height:O,minWidth:w,minHeight:P,maxWidth:j,maxHeight:z,htmlTag:x="div",position:I,overflow:N,zIndex:E,top:k,bottom:D,left:U,right:L,refHandler:q}=t,F=St(t,["children","backgroundColor","backgroundImage","contentColor","borderColor","radius","borderSide","borderWidth","shadow","padding","paddingX","paddingY","paddingLeft","paddingRight","paddingTop","paddingBottom","margin","marginX","marginY","marginLeft","marginRight","marginTop","marginBottom","width","height","minWidth","minHeight","maxWidth","maxHeight","htmlTag","position","overflow","zIndex","top","bottom","left","right","refHandler"]);return i.createElement(Si,ft({backgroundColor:n,backgroundImage:a,contentColor:o,borderColor:s,radius:u,borderSide:c,shadow:l,padding:d,paddingLeft:y||h,paddingRight:y||g,paddingTop:b||f,paddingBottom:b||m,margin:S,marginLeft:v||C,marginRight:v||M,marginTop:A||T,marginBottom:A||_,width:R,height:O,minWidth:w,minHeight:P,maxWidth:j,maxHeight:z,as:x,position:I,top:k,bottom:D,left:U,right:L,overflow:N,zIndex:E,borderWidth:p,ref:e=>q&&q(e)},F),r)};function Ai(e){return i.createElement("svg",ft({viewBox:"0 0 24 24",fill:"none"},e),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.664 3.35a2.723 2.723 0 013.664.96l.003.005 7.296 12.18.008.015a2.722 2.722 0 01-2.328 4.084H4.693a2.723 2.723 0 01-2.328-4.084l.008-.014L9.672 4.31c.243-.4.584-.731.992-.96zM12 5a.723.723 0 00-.617.346l-7.29 12.17a.723.723 0 00.618 1.078h14.578a.723.723 0 00.617-1.079L12.618 5.348l-.001-.002A.723.723 0 0012 5zm0 3.257a1 1 0 011 1v3.446a1 1 0 01-2 0V9.257a1 1 0 011-1zm-1 7.891a1 1 0 011-1h.01a1 1 0 010 2H12a1 1 0 01-1-1z",fill:"currentColor"}))}De.div`
  display: grid;
  ${e=>Ut("align-items",e.alignItems)};
  ${e=>Ut("justify-content",e.justifyContent)};
  ${e=>e.justifyItems&&Ut("justify-items",e.justifyItems)};
  ${e=>e.alignContent&&Ut("align-content",e.alignContent)};
  ${e=>!e.columns&&!e.rows&&!e.autoFlow&&"grid-auto-flow: column"};
  ${e=>Ht(e.columns,"columns")};
  ${e=>Ht(e.rows,"rows")};
  ${e=>Nt("gap",e.gap)};
  ${e=>Nt("width",e.width)};
  ${e=>Nt("height",e.height)};
  ${e=>Nt("min-width",e.minWidth)};
  ${e=>Nt("min-height",e.minHeight)};
  ${e=>Nt("max-width",e.maxWidth)};
  ${e=>Nt("max-height",e.maxHeight)};

  ${e=>e.autoFlow&&Ut("grid-auto-flow",e.autoFlow)};
  ${e=>e.columns&&e.autoFlow&&Ut("grid-auto-flow",e.autoFlow)};
`,De.div`
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
`;var Ci={start:"flex-start",center:"center",end:"flex-end"},Mi=De.div`
  display: flex;
  ${e=>Lt(e.alignment,Ci)};

  & > * + * {
    ${e=>e.gap&&Nt("margin-left",e.gap)};
  }
`,Ti=De.div`
  min-width: 0px;
  flex-shrink: 0;
  ${e=>Nt("width",e.width)};
  ${e=>Nt("max-width",e.maxWidth)};
  ${e=>e.width?"flex-shrink: 0":"flex: 1 1 0%"};
`;(class extends i.Component{render(){return ct.warn(ir),i.createElement(Mi,ft({},this.props),this.props.children)}}).Section=e=>{var t=e,{width:r,maxWidth:n,children:a}=t,o=St(t,["width","maxWidth","children"]);return ct.warn(ir),i.createElement(Ti,ft({width:r,maxWidth:n},o),a)};var _i={small:{size:xt(3),iconSize:2.25},medium:{size:xt(4),iconSize:3},large:{size:xt(5),iconSize:4}},Ri=De.button`
  background-color: ${e=>zt(e.isActive?"backgroundActive":e.backgroundColor)||"transparent"};
  border: none;
  appearance: none;
  cursor: pointer;
  padding: 0;
  width: ${e=>_i[e.size].size};
  height: ${e=>_i[e.size].size};
  position: relative;
  outline: 1px solid transparent;
  transition: 0.6s background-color;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  ${Wt("full")};
  font: inherit;

  &:hover {
    transition: 0.3s background-color;
    background-color: ${e=>zt(e.isActive?"backgroundActive":"backgroundHover")};
  }

  &:active {
    transition: 0s background-color;
    background-color: ${zt("backgroundActive")};
  }

  &:disabled {
    color: ${zt("disabledContent")};
    pointer-events: none;
  }

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    ${Wt("full")};
  }

  &:focus-visible:before {
    ${$t()};
  }

  &:focus::-moz-focus-inner {
    border: 0;
  }
`,Oi=e=>{var t=e,{altText:r,icon:n,onClick:a,iconColor:o="body",backgroundColor:s,isActive:u,isDisabled:c,size:p="medium"}=t,l=St(t,["altText","icon","onClick","iconColor","backgroundColor","isActive","isDisabled","size"]);return i.createElement(Ri,ft({"aria-label":r,onClick:a,isActive:u,disabled:c,size:p,backgroundColor:s},l),i.createElement(qr,{icon:n,size:_i[p].iconSize,color:c?"disabledContent":o}))},wi=e=>i.createElement("svg",ft({width:12,height:9,viewBox:"0 0 12 9",fill:"none"},e),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.707.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L4 6.586 10.293.293a1 1 0 011.414 0z",fill:"currentColor"})),Pi=e=>i.createElement("svg",ft({width:12,height:2,viewBox:"0 0 12 2",fill:"none"},e),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 1a1 1 0 011-1h10a1 1 0 110 2H1a1 1 0 01-1-1z",fill:"currentColor"})),ji=De.div`
  display: block;
  position: relative;
`,zi=De.input`
  height: 100%;
  margin: 0;
  opacity: 0;
  position: absolute;
  width: 100%;

  &:not(:disabled) {
    cursor: pointer;

    & ~ .CheckboxBox {
      border: 2px solid ${zt("body")};
    }

    &:checked ~ .CheckboxBox,
    &:indeterminate ~ .CheckboxBox {
      background-color: ${zt("body")};
    }
  }

  &:disabled,
  &:disabled ~ .CheckboxBox {
    pointer-events: none;
  }

  &:disabled ~ .CheckboxBox {
    background-color: ${zt("disabledBackground")};

    .Icon {
      color: ${zt("disabledContent")};
    }
  }

  &:focus-visible ~ .CheckboxBox {
    ${$t()};
  }

  & ~ .CheckboxBox .Icon {
    display: none;
    color: ${zt("background")};
  }

  &:checked ~ .CheckboxBox .IconCheck {
    display: block;
  }

  &:indeterminate ~ .CheckboxBox .IconMinus {
    display: block;
  }
`,xi=De.span`
  cursor: pointer;
  width: ${xt(2.25)};
  height: ${xt(2.25)};
  border-radius: ${xt(.5)};
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`,Ii=((0,i.forwardRef)(((e,t)=>{var r=e,{isDisabled:n,isChecked:a,isIndeterminate:o,onFocus:s,onChange:u,onBlur:c}=r,p=St(r,["isDisabled","isChecked","isIndeterminate","onFocus","onChange","onBlur"]);const l=(0,i.useRef)(),d=t||l,y=zt(n?"disabledContent":"currentColor");return(0,i.useEffect)((()=>{d.current.indeterminate=o})),i.createElement(ji,null,i.createElement(zi,ft({role:"checkbox",type:"checkbox",disabled:n,checked:a,onFocus:s,onChange:u,onBlur:c,ref:d,"aria-checked":a},p)),i.createElement(xi,{className:"CheckboxBox"},i.createElement(Pi,{className:"Icon IconMinus",color:y}),i.createElement(wi,{className:"Icon IconCheck",color:y})))})),{small:{textSize:"small",iconSize:2.25,height:xt(3),xSpace:xt(1)},medium:{textSize:"medium",iconSize:3,height:xt(4),xSpace:xt(1.5)},large:{textSize:"large",iconSize:4,height:xt(6),xSpace:xt(3)}});De.button`
  background-color: transparent;
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  font: inherit;
  text-decoration: none;
  border: none;
  appearance: none;
  height: ${e=>Ii[e.size].height};
  cursor: pointer;
  transition: 0.6s background-color;
  color: ${zt("body")};
  ${Gt("bold")};
  ${Wt("full")};
  ${e=>Bt(Ii[e.size].textSize)};
  padding: 0 ${e=>Ii[e.size].xSpace};
  ${e=>e.offsetSide&&`margin-${e.offsetSide}: calc(-1 * ${Ii[e.size].xSpace})`};

  &:focus,
  &:focus-visible {
    outline: 1px solid transparent;
  }

  &:focus-visible {
    ${$t()};
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &:hover {
    transition: 0.3s background-color;
    background-color: ${zt("backgroundHover")};
  }

  &:active {
    transition: 0s background-color;
    background-color: ${zt("backgroundActive")};
  }

  &:disabled {
    color: ${zt("disabledContent")};
    pointer-events: none;
  }
`,De.ul`
  background-color: ${zt("overlay")};
  list-style: none;
  padding: ${xt(1.5)};
  margin: 0;
  ${e=>Nt("min-width",e.minWidth)};
  ${e=>Nt("max-width",e.maxWidth)};
  ${e=>Nt("max-height",e.maxHeight)};
  z-index: ${e=>e.zIndex};
  overflow: auto;
  border: 1px solid ${zt("border")};
  ${Kt("medium")};
  ${Wt("large")};
`,De.li`
  display: ${({hidden:e})=>e?"none":"grid"};
  grid-auto-flow: column;
  grid-template-columns: ${e=>e.columns};
  ${Nt("grid-gap","small")};
  ${Wt("xlarge")};
  align-items: center;
  min-height: ${xt(5)};
  padding: 0 ${xt(2)};
  cursor: ${e=>e.isDisabled?"default":"pointer"};
  ${e=>e.isHighlighted&&!e.isDisabled&&`\n    background-color: ${zt("backgroundHover")};\n  `};
  ${e=>e.hasDivider&&`\n    position: relative;\n    margin-top: ${xt(3)};\n    &:before {\n      content: '';\n      border-top: 1px solid ${zt("border")};\n      position: absolute;\n      top: ${xt(-1.5)};\n      left: ${xt(-1.5)};\n      width: calc(100% + ${xt(3)});\n    }\n  `};
`,De.div`
  position: relative;
`,De.button`
  appearance: none;
  font: inherit;
  text-align: left;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: ${e=>e.columns};
  ${Nt("grid-gap","small")};
  align-items: center;
  cursor: pointer;
  width: 100%;
  min-height: ${xt(4.5)};
  padding: 0 ${xt(1.5)} 0 var(--lns-formFieldHorizontalPadding);
  color: ${zt("body")};
  border: none;
  background-color: ${zt("formFieldBackground")};
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
    color: ${zt("disabledContent")};
    background-color: ${zt("disabledBackground")};
    cursor: default;
  }
`;var Ni=function(e,t){const r=document;(0,i.useLayoutEffect)((()=>{const i=null==r?void 0:r.documentElement,n=null==r?void 0:r.body;if(null!=r&&i&&n){if(t){const t=window.innerWidth-i.clientWidth,r=parseInt(window.getComputedStyle(n).getPropertyValue("padding-right"),10)||0;switch(e){case"html":i.style.position="relative",i.style.overflow="hidden",n.style.paddingRight=`${r+t}px`;break;case"body":n.style.setProperty("position","relative"),n.style.setProperty("overflow","hidden"),n.style.setProperty("padding-right",`${r+t}px`);break;default:return}}return()=>{switch(e){case"html":i.style.position="",i.style.overflow="",n.style.paddingRight="";break;case"body":n.style.removeProperty("position"),n.style.removeProperty("overflow"),n.style.removeProperty("padding-right");break;default:return}}}}),[r,t,e])},Ei=De.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  background: ${e=>zt(e.backgroundColor)};
  z-index: ${e=>e.zIndex};
  overflow: hidden;
`,ki=De.div`
  overflow: auto;
  height: 100%;
`,Di=e=>{var t=e,{children:r,isOpen:n,zIndex:a=1e3,backgroundColor:o="backdropDark"}=t,s=St(t,["children","isOpen","zIndex","backgroundColor"]);const{stage:u,shouldMount:c}=function(e,t){const[r,n]=(0,i.useState)(e?"enter":"from"),a=(0,i.useRef)({}),[o,s]=(0,i.useState)(e);return(0,i.useEffect)((function(){return at(a.current),e?(n("from"),s(!0),nt((()=>{n("enter")}))):(n("leave"),a.current=nt((()=>{s(!1)}),300)),()=>{at(a.current)}}),[e,300]),{stage:r,shouldMount:o}}(n);return Ni("html",n),i.createElement(i.Fragment,null,c&&i.createElement(Ei,ft({backgroundColor:o,zIndex:a,style:{transition:"opacity 300ms",opacity:"enter"===u?1:0}},s),i.createElement(ki,null,r)))};function Ui(e){return i.createElement("svg",ft({viewBox:"0 0 24 24",fill:"none"},e),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.21 12l4.54-4.54c.33-.33.33-.88 0-1.21a.863.863 0 00-1.21 0L12 10.79 7.46 6.25a.863.863 0 00-1.21 0c-.33.33-.33.88 0 1.21L10.79 12l-4.54 4.54c-.33.33-.33.88 0 1.21.33.33.88.33 1.21 0L12 13.21l4.54 4.54c.33.33.88.33 1.21 0 .33-.33.33-.88 0-1.21L13.21 12z",fill:"currentColor"}))}var Li="70vh",qi=De.div`
  display: grid;
  grid-template-rows: ${e=>e.rows};
  position: relative;
`,Fi=De.dialog`
  top: ${e=>Qt(It(e.maxHeight),e.placement).top};
  background-color: ${zt("overlay")};
  color: ${zt("body")};
  bottom: ${e=>Qt(e.maxHeight,e.placement).bottom};
  ${Kt("large")};
  ${Wt("xlarge")};
  // Unsets bottom-radius for bottom-aligned modals
  border-bottom-left-radius: ${e=>"bottom"===e.placement?"initial":void 0};
  border-bottom-right-radius: ${e=>"bottom"===e.placement?"initial":void 0};
  ${e=>Nt("max-height",e.maxHeight)};
  ${e=>Nt("max-width",e.maxWidth)};
  margin: 0 auto;
  position: ${e=>Qt(e.maxHeight,e.placement).position};
  overflow: auto;
  width: 100%;
  // TODO: LNS-150: Bake dialog resets into native resets file
  border: 0;
  padding: 0;
  &::backdrop {
    background: var(--lns-color-overlay);
  }
`,Hi=De.div`
  position: absolute;
  top: ${xt(1.5)};
  right: ${xt(1.5)};
  z-index: 1;
`,Bi=De.div`
  margin-left: auto;

  * {
    vertical-align: middle;
  }
`,Wi=De.div`
  padding-left: var(--lns-space-xlarge);
  padding-right: var(--lns-space-xlarge);
  padding-top: var(--lns-space-xlarge);
  padding-bottom: ${e=>e.bottom};
  flex-shrink: 0;
`,Gi=De.div`
  padding-left: var(--lns-space-xlarge);
  padding-right: var(--lns-space-xlarge);
  padding-bottom: var(--lns-space-xlarge);
  padding-top: ${e=>e.hasDividers?"var(--lns-space-medium)":e.top};
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Ki=De.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-top: ${e=>e.hasTitle&&!e.noPadding||e.hasTitle||e.noPadding?0:"var(--lns-space-xlarge)"};
  padding-bottom: ${e=>e.hasButtons&&!e.noPadding||e.hasButtons||e.noPadding?0:"var(--lns-space-xlarge)"};
  padding-left: ${e=>e.noPadding?0:"var(--lns-space-xlarge)"};
  padding-right: ${e=>e.noPadding?0:"var(--lns-space-xlarge)"};
  border-style: solid;
  border-color: ${zt("border")};
  border-width: ${e=>e.hasDividers?"1px 0":"0"};
`,$i=De.div`
  overflow: auto;

  ${e=>Qi(e.maxHeight)};

  & > * {
    ${e=>Qi(e.maxHeight)};
  }
`,Qi=e=>"number"==typeof e?Nt("max-height",e):"max-height: "+e,Vi=e=>{var t=e,{children:r,onCloseClick:n,isOpen:a,maxWidth:o=60,maxHeight:s=Li,placement:u="center",ariaLabel:c,ref:p,removeClose:l}=t,d=St(t,["children","onCloseClick","isOpen","maxWidth","maxHeight","placement","ariaLabel","ref","removeClose"]);return(0,i.useEffect)((()=>{const e=e=>{"Escape"===e.key&&(e.preventDefault(),l||n(e))};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}}),[a,n]),Ni("html",a),i.createElement(ut(),{active:a,focusTrapOptions:{clickOutsideDeactivates:!1,allowOutsideClick:!0}},i.createElement(Fi,ft({open:a,maxWidth:o,maxHeight:s,placement:u,onClick:e=>e.stopPropagation(),ref:p,"aria-label":c},d),!l&&n&&i.createElement(Hi,null,i.createElement(Oi,{altText:"Close",icon:i.createElement(Ui,null),onClick:n})),i.createElement($i,{tabIndex:l?0:-1,maxHeight:s},r)))},Zi=i.forwardRef(((e,t)=>{var r=e,{children:n,id:a,isOpen:o,mainButton:s,secondaryButton:u,alternativeButton:c,title:p,noPadding:l,onCloseClick:d,onBackgroundClick:y,onKeyDown:b,hasDividers:h,maxHeight:g="70vh",maxWidth:f=60,placement:m="center",zIndex:S=1e3,ariaLabel:v}=r,A=St(r,["children","id","isOpen","mainButton","secondaryButton","alternativeButton","title","noPadding","onCloseClick","onBackgroundClick","onKeyDown","hasDividers","maxHeight","maxWidth","placement","zIndex","ariaLabel"]);const C=a?`${a}-modal-title`:"modal-title",M=!!(s||u||c);return i.createElement(Di,ft({isOpen:o,zIndex:S},A),i.createElement(vi,{height:"100%",onClick:e=>{if(y)return e.stopPropagation(),void y(e);d(e)},onKeyDown:b,"aria-labelledby":C},i.createElement(Vi,{ref:t,id:a,isOpen:o,maxHeight:g,maxWidth:f,placement:m,onCloseClick:d,ariaLabel:v},i.createElement(qi,{rows:`${p?"auto ":""} ${n?"1fr ":""} ${M?"auto":""}`},p&&i.createElement(Wi,{bottom:n?"var(--lns-space-medium)":"var(--lns-space-xlarge)",id:C},i.createElement(pr,{variant:"title"},p)),i.createElement(Ki,{noPadding:l,hasDividers:h,hasTitle:Boolean(p),hasButtons:M},n&&n),M&&i.createElement(Gi,{top:n?"var(--lns-space-xlarge)":0,hasDividers:h},c,i.createElement(Bi,null,u&&i.createElement(ui,{right:"small",isInline:!0},u),s))))))})),Yi=Zi,Xi={topLeft:"start",topCenter:"start center",topRight:"start end",centerLeft:"center start",center:"center",centerRight:"center end",bottomLeft:"end start",bottomCenter:"end center",bottomRight:"end"},Ji=(De.div`
  width: 100%;
  height: 100%;
  display: grid;
  ${e=>Ut("place-items",(e=>{if(Array.isArray(e))return e.map((e=>Xi[e]));if("object"==typeof e){const t={};return Object.entries(e).forEach((([e,r])=>t[e]=Xi[r])),t}return Xi[e]})(e.alignment))};
`,Object.keys(Xi),{neutral:{color:zt("inherit"),focusRing:$t()},primary:{color:zt("primary"),focusRing:$t()}}),en={enabled:j`
    cursor: pointer;
  `,disabled:j`
    pointer-events: none;
    color: ${zt("disabledContent")};
  `},tn={isButton:j`
    background: none;
    border: none;
    font: inherit;
  `},rn=(De.a`
  ${e=>!e.disabled&&`color: ${Ji[e.variant].color}`};
  ${e=>e.disabled?en.disabled:en.enabled};
  ${e=>"button"===e.as&&tn.isButton};
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
    ${$t()};
  }
  &::-moz-focus-inner {
    border: 0;
  }
`,Object.keys(Ji),{small:{padding:`${xt(1.5)} ${xt(1.75)}`,textSize:"small"},medium:{padding:`${xt(1.5)} var(--lns-formFieldHorizontalPadding)`,textSize:"medium"}}),nn=De.textarea`
  width: 100%;
  border: none;
  font-family: inherit;
  color: inherit;
  background-color: ${zt("formFieldBackground")};
  transition: 0.3s box-shadow;
  padding: ${e=>rn[e.size].padding};
  ${Wt("large")};
  box-shadow: inset 0 0 0 var(--lns-formFieldBorderWidth)
    var(--lns-color-formFieldBorder);
  ${e=>Bt(rn[e.size].textSize)};
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
    color: ${zt("disabledContent")};
    background-color: ${zt("disabledBackground")};
  }

  &:disabled:hover {
    box-shadow: inset 0 0 0 var(--lns-formFieldBorderWidth)
      var(--lns-color-formFieldBorder);
  }

  &::placeholder {
    color: ${zt("grey5")};
  }
`,an=i.forwardRef(((e,t)=>{var r=e,{onChange:n,value:a,rows:o=4,isDisabled:s,placeholder:u,size:c="medium",resize:p="both"}=r,l=St(r,["onChange","value","rows","isDisabled","placeholder","size","resize"]);return i.createElement(nn,ft({disabled:s,onChange:n,placeholder:u,ref:t,rows:o,value:a,size:c,resize:p},l))})),on=an,sn=(De.div`
  display: inline-block;
  vertical-align: middle;
`,{row:{wrapper:{display:"grid",gridTemplateColumns:"auto 1fr",alignItems:"center"},label:{marginLeft:"var(--lns-space-small)"},errorMessage:{marginLeft:"var(--lns-space-small)"}},column:{wrapper:{},label:{marginBottom:"var(--lns-space-xsmall)"}}}),un=De.div`
  ${e=>e.direction&&sn[e.direction].wrapper};
`,cn=De.label`
  display: block;
  ${e=>e.direction&&sn[e.direction].label};
`,pn=De.span`
  color: var(--lns-color-red);
  margin-top: var(--lns-space-xsmall);
  display: block;
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 3;
`,ln=e=>{var t=e,{label:r,children:n,errorMessage:a,labelFor:o,direction:s="column"}=t,u=St(t,["label","children","errorMessage","labelFor","direction"]);const c=r&&i.createElement(cn,{direction:s,htmlFor:o},r);return i.createElement(un,ft({direction:s},u),"row"===s&&i.createElement(i.Fragment,null,n,c),"column"===s&&i.createElement(i.Fragment,null,c,n),a&&i.createElement(pn,null,a))};function dn(e){return i.createElement("svg",ft({viewBox:"0 0 24 24",fill:"none"},e),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1118 0 9 9 0 01-18 0z",fill:"currentColor"}),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13 11v5.2h-2V11h2zM10.5 8.8A1.5 1.5 0 0112 7.3h.01a1.5 1.5 0 010 3H12a1.5 1.5 0 01-1.5-1.5z",fill:"currentColor"}))}var yn=e=>i.createElement("svg",ft({viewBox:"0 0 24 24",fill:"none"},e),i.createElement("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M7.42 2.293A1 1 0 0 1 8.127 2h7.245a1 1 0 0 1 .708.293l5.127 5.127a1 1 0 0 1 .293.707v7.245a1 1 0 0 1-.293.708l-5.127 5.127a1 1 0 0 1-.707.293H8.128a1 1 0 0 1-.708-.293L2.293 16.08A1 1 0 0 1 2 15.373V8.128a1 1 0 0 1 .293-.708L7.42 2.293ZM8.542 4 4 8.542v6.416L8.542 19.5h6.416l4.542-4.542V8.542L14.958 4H8.542Zm2.208 11.25a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2h-.009a1 1 0 0 1-1-1Zm2-7a1 1 0 1 0-2 0v3.5a1 1 0 1 0 2 0v-3.5Z"})),bn={info:{bgColor:"var(--lns-color-blurple)",icon:i.createElement(dn,null),color:"var(--lns-color-white)",fontFamily:"inherit"},warning:{bgColor:"var(--lns-color-warning)",icon:i.createElement(yn,null),color:"var(--lns-color-grey8)",fontFamily:"inherit"},error:{bgColor:"var(--lns-color-danger)",icon:i.createElement(Ai,null),color:"var(--lns-color-white)",fontFamily:"inherit"},internal:{icon:i.createElement("span",{role:"img"},"🔔"),color:"var(--lns-color-teal)",bgColor:"var(--lns-color-grey8)",fontFamily:"Roboto Mono, Lucida Mono, monospace"}},hn=(De.aside`
  --paddingXOffset: var(--lns-space-large);
  --alignItems: start;

  display: grid;
  align-items: var(--alignItems);
  justify-content: space-between;
  grid-template-columns: 1fr auto;
  ${e=>`background-color: ${bn[e.severity].bgColor}`};
  ${e=>`font-family: ${bn[e.severity].fontFamily}`};

  ${e=>`color: ${bn[e.severity].color}`};
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
`,"web-app"),gn="chrome-extension",fn=(De.div`
  animation: ${e=>{return t=e.toastDuration,r=e.platform,I`
  0% {
    opacity: 0;
    transform: translate(-50%, ${xt(r===gn?-8:8)});
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
  background-color: ${zt("background")};
  border-radius: 1.75rem; // Height of single line toast (56px) divided by 2 so one line toasts appear fully rounded
  top: ${e=>(e=>{switch(e){case hn:return"unset";case gn:return xt(4);default:return"unset"}})(e.platform)};
  bottom: ${e=>(e=>{switch(e){case hn:return xt(4);case gn:return"unset";default:return xt(4)}})(e.platform)};
  ${Kt("large")};
  color: ${zt("body")};
  display: grid;
  grid-auto-flow: column;
  gap: var(--lns-space-small);
  justify-content: space-between;
  left: 50%;
  max-width: ${xt(50)}; // Fallback when min() function is not supported
  max-width: min(90%, ${xt(50)});
  padding: ${xt(1.5)} var(--lns-space-medium) ${xt(1.5)} var(--lns-space-large);
  position: fixed;
  transform: translateX(-50%);
  width: max-content;
  z-index: ${e=>e.zIndex};
`,De.div`
  align-self: center;
`,{topLeft:"top-start",topCenter:"top-center",topRight:"top-end",bottomLeft:"bottom-start",bottomCenter:"bottom-center",bottomRight:"bottom-end",leftTop:"left-start",leftCenter:"left-center",leftBottom:"left-end",rightTop:"right-start",rightCenter:"right-center",rightBottom:"right-end"}),mn=(4-Yt.small.fontSize*Yt.small.lineHeight)/2;De.div`
  background-color: ${zt("background")};
  color: ${zt("body")};
  ${Wt("large")};
  ${Gt("bold")};
  ${Bt("small")};
  ${Kt("medium")};
  ${e=>Nt("max-width",e.maxWidth)};
  z-index: 1100;
  padding: ${xt(mn)} ${xt(1.5)};
  z-index: ${e=>e.zIndex};
`,De.div`
  background-color: ${zt("backgroundActive")};
  border-radius: 3px;
  color: ${zt("grey3")};
  ${Gt("bold")};
  ${Bt("small")};
  padding-left: ${xt(.5)};
  padding-right: ${xt(.5)};
`,De.div`
  display: ${e=>e.isInline?"inline-block":"block"};
  ${e=>e.verticalAlign&&`vertical-align: ${e.verticalAlign}`};
  &:focus-visible {
    // Note: 0px solid transparent prevents focus rings from disappearing for -ms-high-contrast.
    // TODO(LNS-183): Provide more robust polyfill/support for :focus for older versions of Safari, which don't support :focus-visible
    outline: 0px solid transparent;
    box-shadow: var(--lns-formFieldBorderShadowFocus);
  }
`,Object.keys(fn);var Sn={medium:{switchHeight:16,switchWidth:32,knobOffset:2},large:{switchHeight:28,switchWidth:56,knobOffset:4}},vn={knob:{active:{enabled:zt("white"),disabled:zt("disabledContent")},inactive:{enabled:zt("white"),disabled:zt("disabledContent")}},track:{active:{enabled:zt("blurple"),disabled:zt("disabledBackground")},inactive:{enabled:zt("grey6"),disabled:zt("disabledBackground")}}},An=e=>Sn[e.switchSize].switchHeight-2*Sn[e.switchSize].knobOffset,Cn=(De.label`
  display: block;
  position: relative;
`,De.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  // to overlap SwitchBox and occupy the same space
  z-index: 1;
  margin: 0;
  width: ${e=>Sn[e.switchSize].switchWidth}px;
  height: ${e=>Sn[e.switchSize].switchHeight}px;

  &:focus-visible ~ .SwitchBox {
    ${$t()};
  }
  &:not(:checked) {
    & + .SwitchBox {
      background-color: ${vn.track.inactive.enabled};
    }
    &:disabled + .SwitchBox {
      background-color: ${vn.track.inactive.disabled};
    }
  }
  &:checked {
    & + .SwitchBox {
      background-color: ${vn.track.active.enabled};
    }
    &:disabled + .SwitchBox {
      background-color: ${vn.track.active.disabled};
    }
    & + .SwitchBox:after {
      transform: translateX(${e=>(e=>Sn[e.switchSize].switchWidth-Sn[e.switchSize].switchHeight)(e)}px);
    }
  }
  &:disabled {
    pointer-events: none;
  }
`,De.div`
  width: ${e=>Sn[e.switchSize].switchWidth}px;
  height: ${e=>Sn[e.switchSize].switchHeight}px;
  position: relative;
  border-radius: var(--lns-radius-full);
  transition: 0.2s;
  cursor: ${e=>e.isDisabled?"default":"pointer"};
  &:after {
    content: '';
    position: absolute;
    top: ${e=>Sn[e.switchSize].knobOffset}px;
    left: ${e=>Sn[e.switchSize].knobOffset}px;
    width: ${e=>An(e)}px;
    height: ${e=>An(e)}px;
    border-radius: var(--lns-radius-full);
    transition: 0.15s;
    background-color: ${e=>e.isDisabled?vn.knob.active.disabled:vn.knob.active.enabled};
  }
`,De.div`
  ${e=>Bt(e.size)};
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
`,De.span`
  display: block;
  ${e=>e.maxWidth&&Nt("max-width",e.maxWidth)};

  & > svg.lns-logoSvg {
    display: block;
    width: 100%;
    height: 100%;
    ${e=>e.maxWidth&&Nt("max-width",e.maxWidth)};
  }
`,{small:"40px",medium:"80px"}),Mn=(De.span`
  animation: ${e=>e.animation};
  background-image: url(${"https://cdn.loom.com/assets/lens"}/${e=>e.brand}-loader.svg);
  background-size: cover;
  background-position: left center;
  display: block;
  height: ${e=>Cn[e.size]};
  width: ${e=>Cn[e.size]};

  @keyframes spin {
    100% {
      background-position: right center;
    }
  }
`,De.label`
  display: block;
  position: relative;

  .RadioBox:after {
    background-color: transparent;
  }
`),Tn=De.input`
  position: absolute;
  opacity: 0;

  &:not(:disabled) {
    cursor: pointer;

    & ~ .RadioBox {
      border: 2px solid ${zt("body")};
    }

    &:checked ~ .RadioBox {
      border: 2px solid ${zt("body")};
    }
  }

  &:disabled,
  &:disabled ~ .RadioBox {
    pointer-events: none;
  }

  &:disabled ~ .RadioBox {
    background-color: ${zt("disabledBackground")};
  }

  &:checked {
    & ~ .RadioBox:after {
      background-color: ${zt("blurple")};
    }

    &:disabled ~ .RadioBox:after {
      background-color: ${zt("disabledContent")};
    }
  }

  &:focus-visible ~ .RadioBox {
    ${$t()};
  }
`,_n=De.span`
  cursor: pointer;
  width: ${xt(2.25)};
  height: ${xt(2.25)};
  ${Wt("full")};
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  &:after {
    content: '';
    width: ${xt(1)};
    height: ${xt(1)};
    ${Wt("full")};
    background-color: ${zt("white")};
  }
`,Rn=((0,i.forwardRef)(((e,t)=>{var r=e,{isDisabled:n,isChecked:a,onFocus:o,onChange:s,onBlur:u}=r,c=St(r,["isDisabled","isChecked","onFocus","onChange","onBlur"]);return i.createElement(Mn,null,i.createElement(Tn,ft({type:"radio",disabled:n,checked:a,onFocus:o,onChange:s,onBlur:u,ref:t},c)),i.createElement(_n,{className:"RadioBox"}))})),"/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */"),On={border:j`
    .ListRowWrapper:last-child {
      border-bottom: 1px solid ${zt("border")};
    }

    .ListRowWrapper,
    .ListRowWrapper:first-child ${Rn} {
      border-top: 1px solid ${zt("border")};
    }
  `,stripe:j`
    .ListRowWrapper {
      &:nth-child(odd) ${Rn} {
        background-color: ${zt("backgroundSecondary")};
      }
    }

    .ListRowWrapper {
      ${Wt("medium")};
    }
  `,clear:j``},wn=(De.div`
  .ListRowWrapper {
    grid-template-columns: ${e=>e.columns&&e.columns};
    ${e=>Nt("gap",e.gap)};
  }

  ${e=>On[e.variant]};
`,De.div`
  display: grid;
  align-items: center;
  text-decoration: none;
  color: inherit;

  ${e=>Nt("height",e.height)};
  ${e=>Nt("min-height",e.minHeight)};
  ${e=>Nt("max-height",e.maxHeight)};
  ${e=>Nt("padding",e.padding)};
  ${e=>Nt("padding-top",e.paddingTop)};
  ${e=>Nt("padding-bottom",e.paddingBottom)};
  ${e=>Nt("padding-left",e.paddingLeft)};
  ${e=>Nt("padding-right",e.paddingRight)};

  ${e=>e.paddingY&&`\n    ${Nt("padding-top",e.paddingY)}\n    ${Nt("padding-bottom",e.paddingY)}\n    `};

  ${e=>e.paddingX&&`\n    ${Nt("padding-left",e.paddingX)}\n    ${Nt("padding-right",e.paddingX)}\n    `};

  ${e=>(e.onClick||e.href)&&"cursor: pointer;"};

  &.ListRowWrapper:nth-child(even),
  &.ListRowWrapper:nth-child(odd) ${Rn} {
    ${e=>e.backgroundColor&&`background-color: ${zt(e.backgroundColor)}`};

    &:hover {
      ${e=>(e.onClick||e.href)&&`\n      background-color: ${zt("backgroundHover")};\n      border-color: transparent;\n      ${Wt("medium")};\n    `};
    }
  }
`,i.createContext({}),De.div`
  ${e=>{return e.scrollOffset&&`margin: 0 ${t=e.scrollOffset,`calc(-1 * ${It(t)})`};\n  `;var t}};
`,De.nav`
  --activeIndicatorHeight: 3px;

  display: flex;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ${e=>e.scrollOffset&&Nt("padding-left",e.scrollOffset)};

  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    ${e=>e.hasFullTabs&&"flex: 1 0"};
  }

  & > * + * {
    margin-left: ${xt(2)};
  }

  &:after {
    content: '';
    flex-shrink: 0;
    ${e=>e.scrollOffset&&Nt("width",e.scrollOffset)};
  }
`,De.nav`
  ${Wt("full")};
  background-color: var(--lns-color-backgroundSecondary);

  padding: var(--lns-space-xsmall);

  display: flex;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ${e=>e.scrollOffset&&Nt("padding-left",e.scrollOffset)};

  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    flex: 1 0;
  }

  & > * + * {
    margin-left: ${xt(2)};
  }

  &:after {
    content: '';
    flex-shrink: 0;
    ${e=>e.scrollOffset&&Nt("width",e.scrollOffset)};
  }
`,De.button`
  appearance: none;
  font: inherit;
  background: transparent;
  border: none;
  ${Wt("medium")};
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
  ${Gt("bold")};
  transition: 0.6s color;
  white-space: nowrap;
  color: ${e=>zt(e.isActive?"body":"bodyDimmed")};
  ${e=>e.isActive&&`border-color: ${zt("primary")};\n  `};

  &:focus,
  &:focus-visible {
    outline: 1px solid transparent;
  }

  &:focus-visible {
    ${$t(void 0,"inset")};
  }

  &:hover {
    color: ${zt("body")};
    transition: 0.3s color;
  }

  &::after {
    bottom: 0;
    ${Wt("medium")};
    content: '';
    height: var(--activeIndicatorHeight);
    position: absolute;
    width: 100%;
    ${e=>e.isActive&&`background-color: ${zt("primary")}`};
  }
`,De.button`
  padding: ${xt(1)} 0;

  appearance: none;
  font: inherit;
  background: transparent;
  border: none;
  ${Wt("full")};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  position: relative;
  color: inherit;
  text-decoration: none;
  flex-shrink: 0;
  ${Gt("bold")};

  transition: 0.6s color;
  white-space: nowrap;
  ${e=>e.isActive&&`background-color: ${zt("background")};\n    color: ${zt("primary")};\n  `};

  &:focus,
  &:focus-visible {
    outline: 1px solid transparent;
  }

  &:focus-visible {
    ${$t(void 0,"inset")};
  }

  &:hover {
    color: ${zt("primary")};
    transition: 0.3s color;
  }
`,De.div`
  display: inline-grid;
  grid-auto-flow: column;
  align-items: center;
  vertical-align: middle;
  padding: 0 ${xt(1.5)};
  min-height: ${xt(3.25)};
  color: ${e=>zt(e.color)};
  background-color: ${e=>zt(e.backgroundColor)};
  ${Wt("full")};
  ${Bt("small")};
  ${Gt("bold")};
  ${Nt("gap","xsmall")};
`,De.div`
  position: relative;
  width: fit-content;
  // transform forces the popover to calculate the position from the trigger instead of the viewport
  transform: translate(0);
  z-index: 1;
`,De.div`
  ${e=>e.zIndex&&`z-index: ${e.zIndex}`};
`,De.span`
  display: block;
  color: ${e=>e.color?zt(e.color):zt("grey8")};
  ${e=>e.size&&Nt("width",e.size)};
  ${e=>e.size&&Nt("height",e.size)};

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`,e=>j`
  ${Nt("width",e.width)};
  ${Nt("height",e.height)};
  ${Nt("min-width",e.minWidth)};
  ${Nt("min-height",e.minHeight)};
  ${Nt("max-width",e.maxWidth)};
  ${Nt("max-height",e.maxHeight)};
`);De.div`
  display: flex;
  ${e=>Ut("align-items",e.alignItems)};
  ${e=>e.justifyContent&&Ut("justify-content",e.justifyContent)};
  ${e=>e.alignContent&&Ut("align-content",e.alignContent)};
  ${e=>Ut("flex-wrap",e.wrap)};
  ${e=>e.direction&&Ut("flex-direction",e.direction)};
  ${e=>e.gap&&Nt("--gap",e.gap)};
  margin-right: calc(-1 * var(--gap));
  margin-bottom: calc(-1 * var(--gap));
  ${e=>wn(e)};
`,De.div`
  ${e=>qt("flex-grow",e.grow)};
  ${e=>qt("flex-shrink",e.shrink)};
  ${e=>e.basis&&Nt("flex-basis",e.basis)};
  margin-right: var(--gap);
  margin-bottom: var(--gap);
  ${e=>wn(e)};
`,De.div`
  padding: var(--lns-space-medium);
  & .react-colorful {
    width: auto;
    height: auto;
  }
  & .react-colorful__saturation {
    height: ${xt(14)};
    border-bottom: none;
    box-shadow: inset 0 0 0 1px var(--lns-color-border);
    border-radius: var(--lns-radius-medium);
    margin-bottom: var(--lns-space-small);
  }

  & .react-colorful__hue {
    height: ${xt(2)};
    width: 100%;
    box-shadow: inset 0 0 0 1px var(--lns-color-border);
    border-radius: 3px;
    margin-bottom: var(--lns-space-medium);
  }

  & .react-colorful__saturation-pointer {
    width: ${xt(1)};
    height: ${xt(1)};
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 0 0 3px var(--lns-color-border);
    border-radius: var(--lns-radius-medium);
  }
  & .react-colorful__hue-pointer {
    width: ${xt(1)};
    height: ${xt(2.5)};
    border-radius: 2px;
    box-shadow: 0 0 0 2px var(--lns-color-border);
    cursor: pointer;
    border: 2px solid white;
  }
`,De.div`
  position: relative;
  width: ${xt(31)};
  background-color: var(--lns-color-overlay);
  border-radius: var(--lns-radius-medium);
  box-shadow: 0 0 0 1px var(--lns-color-border), var(--lns-shadow-medium);
`,De.div`
  position: relative;
  width: 100%;

  input {
    padding: 0 0 0 ${xt(4)};
    height: ${xt(4)};
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
`,De.div`
  position: absolute;
  width: ${xt(3)};
  height: ${xt(3)};
  left: var(--lns-space-xsmall);
  top: var(--lns-space-xsmall);
  border: 1px solid rgba(0, 0, 0, 0.1);
  ${Wt("full")};
  background-color: ${e=>e.color};
`,De.div`
  position: relative;
  border-radius: var(--lns-radius-medium);
  padding: 0 var(--lns-space-medium) var(--lns-space-medium)
    var(--lns-space-medium);
`,De.div`
  display: grid;
  grid-template-columns: repeat(7, ${xt(3)});
  gap: ${xt(1)} ${xt(1)};
  border-bottom: 1px solid var(--lns-color-border);
  padding: var(--lns-space-medium);
`,De.div`
  cursor: pointer;
  width: ${xt(3)};
  height: ${xt(3)};
  border-radius: 2px;
  background-color: ${e=>e.color};
  border: ${e=>e.selected===e.color?"1px solid white":"1px solid var(--lns-color-border)"};
  box-shadow: ${e=>e.selected===e.color&&"0 0 0 2px var(--lns-color-focusRing)"};
`;var Pn=n(58376),jn=Object.defineProperty,zn=Object.getOwnPropertySymbols,xn=Object.prototype.hasOwnProperty,In=Object.prototype.propertyIsEnumerable,Nn=(e,t,r)=>t in e?jn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function En(e){return i.createElement("svg",((e,t)=>{for(var r in t||(t={}))xn.call(t,r)&&Nn(e,r,t[r]);if(zn)for(var r of zn(t))In.call(t,r)&&Nn(e,r,t[r]);return e})({viewBox:"0 0 24 24",fill:"none"},e),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.34412 13.2845C5.76446 13.8641 5.43882 14.6503 5.43882 15.4701C5.43882 16.2898 5.76446 17.076 6.34412 17.6557C6.92378 18.2353 7.70997 18.561 8.52972 18.561C8.93563 18.561 9.33756 18.481 9.71256 18.3257C10.0876 18.1704 10.4283 17.9427 10.7153 17.6557L12.451 15.92C12.8415 15.5295 13.4746 15.5295 13.8652 15.92C14.2557 16.3106 14.2557 16.9437 13.8652 17.3343L12.1295 19.0699C11.6568 19.5426 11.0956 19.9176 10.4779 20.1734C9.86027 20.4293 9.19827 20.561 8.52972 20.561C7.17953 20.561 5.88464 20.0246 4.92991 19.0699C3.97518 18.1151 3.43882 16.8203 3.43882 15.4701C3.43882 14.1199 3.97518 12.825 4.92991 11.8702L6.66553 10.1346C7.05606 9.7441 7.68922 9.74409 8.07975 10.1346C8.47027 10.5251 8.47027 11.1583 8.07975 11.5488L6.34412 13.2845Z",fill:"currentColor"}),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.6577 10.7131C18.2374 10.1334 18.563 9.34723 18.563 8.52747C18.563 7.70771 18.2374 6.92152 17.6577 6.34187C17.0781 5.76221 16.2919 5.43656 15.4721 5.43656C15.0662 5.43656 14.6643 5.51651 14.2893 5.67184C13.9143 5.82717 13.5736 6.05485 13.2865 6.34186L11.5509 8.07749C11.1604 8.46801 10.5272 8.46801 10.1367 8.07749C9.74617 7.68697 9.74617 7.0538 10.1367 6.66328L11.8723 4.92765C12.3451 4.45492 12.9063 4.07992 13.5239 3.82408C14.1416 3.56824 14.8036 3.43656 15.4721 3.43656C16.8223 3.43656 18.1172 3.97292 19.072 4.92765C20.0267 5.88238 20.563 7.17728 20.563 8.52747C20.563 9.87766 20.0267 11.1726 19.072 12.1273L17.3363 13.8629C16.9458 14.2534 16.3126 14.2534 15.9221 13.8629C15.5316 13.4724 15.5316 12.8392 15.9221 12.4487L17.6577 10.7131Z",fill:"currentColor"}),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.97979 15.0199C8.58927 14.6294 8.58927 13.9962 8.97979 13.6057L13.6081 8.97736C13.9986 8.58683 14.6318 8.58683 15.0223 8.97736C15.4129 9.36788 15.4129 10.001 15.0223 10.3916L10.394 15.0199C10.0035 15.4104 9.37031 15.4104 8.97979 15.0199Z",fill:"currentColor"}))}var kn=Object.defineProperty,Dn=Object.getOwnPropertySymbols,Un=Object.prototype.hasOwnProperty,Ln=Object.prototype.propertyIsEnumerable,qn=(e,t,r)=>t in e?kn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function Fn(e){return i.createElement("svg",((e,t)=>{for(var r in t||(t={}))Un.call(t,r)&&qn(e,r,t[r]);if(Dn)for(var r of Dn(t))Ln.call(t,r)&&qn(e,r,t[r]);return e})({viewBox:"0 0 24 24",fill:"none"},e),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 7.2a1 1 0 011-1h14.4a1 1 0 110 2H5a1 1 0 01-1-1z",fill:"currentColor"}),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.6 5a.6.6 0 00-.6.6v.6h4.4v-.6a.6.6 0 00-.6-.6h-3.2zm5.8 1.2v-.6A2.6 2.6 0 0013.8 3h-3.2A2.6 2.6 0 008 5.6v.6H6.6a1 1 0 00-1 1v11.2A2.6 2.6 0 008.2 21h8a2.6 2.6 0 002.6-2.6V7.2a1 1 0 00-1-1h-1.4zm-8.8 2v10.2a.6.6 0 00.6.6h8a.6.6 0 00.6-.6V8.2H7.6z",fill:"currentColor"}),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.604 11.196a1 1 0 010 1.414l-3.394 3.394a1 1 0 01-1.414-1.414l3.394-3.394a1 1 0 011.414 0z",fill:"currentColor"}),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.796 11.196a1 1 0 011.414 0l3.394 3.394a1 1 0 11-1.414 1.414L9.796 12.61a1 1 0 010-1.414z",fill:"currentColor"}))}var Hn=Object.defineProperty,Bn=Object.getOwnPropertySymbols,Wn=Object.prototype.hasOwnProperty,Gn=Object.prototype.propertyIsEnumerable,Kn=(e,t,r)=>t in e?Hn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function $n(e){return i.createElement("svg",((e,t)=>{for(var r in t||(t={}))Wn.call(t,r)&&Kn(e,r,t[r]);if(Bn)for(var r of Bn(t))Gn.call(t,r)&&Kn(e,r,t[r]);return e})({viewBox:"0 0 24 24",fill:"none"},e),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.457 6.747a1 1 0 01.543.89v8.181a1 1 0 01-1.581.814l-5.728-4.09a1 1 0 010-1.628l5.728-4.091a1 1 0 011.038-.076zm-4.464 4.98L20 13.875V9.58l-3.007 2.147z",fill:"currentColor"}),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.636 7A.636.636 0 004 7.636v8.182c0 .352.285.637.636.637h9a.636.636 0 00.637-.637V7.636A.636.636 0 0013.636 7h-9zM2 7.636A2.636 2.636 0 014.636 5h9a2.636 2.636 0 012.637 2.636v8.182a2.636 2.636 0 01-2.637 2.637h-9A2.636 2.636 0 012 15.818V7.636z",fill:"currentColor"}))}const Qn="stallion",Vn=`chrome-extension://${chrome.runtime.id}`,Zn=`${Vn}/images/dark-loading-ring.svg`,Yn=`${Vn}/images/loading-video-thumbnail.svg`,Xn="loom.com",Jn="https://www.loom.com",ea="(use)?loom.com",ta="https://cdn.loom.com",ra=`chrome-extension://${chrome.runtime.id}/images`;var ia=(e=>(e.extensionIconClicked="extensionIconClicked",e.endRecording="endRecording",e.pauseRecording="pauseRecording",e.resumeRecording="resumeRecording",e.cancelRecording="cancelRecording",e.restartRecording="restartRecording",e.rewindRecording="rewindRecording",e.isAlive="isAlive",e.updateVideoPreviewUrl="updateVideoPreviewUrl",e.openPinnedTab="openPinnedTab",e.focusRecordingTab="focusRecordingTab",e.focusPinnedTab="focusPinnedTab",e.requestTabId="requestTabId",e.getRecordingTabInfo="getRecordingTabInfo",e.updateRecorderSettings="updateRecorderSettings",e.pingContentScript="pingContentScript",e.pingToastMsgScript="pingToastMsgScript",e.activateRecorder="activateRecorder",e.trackEvent="trackEvent",e.logCrumb="logCrumb",e.logException="logException",e.logInfo="logInfo",e.logWarn="logWarn",e.fetchFeatureFlag="fetchFeatureFlag",e.checkUploadSpeed="checkUploadSpeed",e.fetchNotifications="fetchNotifications",e.openNotification="openNotification",e.setExtensionBadgeCount="setExtensionBadgeCount",e.updateBlurFTUXUserProperty="updateBlurFTUXUserProperty",e.canvasOptionClicked="canvasOptionClicked",e.addToBaseContext="addToBaseContext",e.allowGmailIntegrationPermission="allowGmailIntegrationPermission",e.denyGmailIntegrationPermission="denyGmailIntegrationPermission",e.allowGmailLinkExpanding="allowGmailLinkExpanding",e.denyGmailLinkExpanding="denyGmailLinkExpanding",e.insertSession="insertSession",e.requestSessionURL="requestSessionURL",e.cancelRequestSessionURL="cancelRequestSessionURL",e.fetchMyVideosSessions="fetchMyVideosSessions",e.updateNameToSession="updateNameToSession",e.getSessionDetails="getSessionDetails",e.fetchMostRecentSession="fetchMostRecentSession",e.requestThumbExists="requestThumbExists",e.initiateLoomRecorderFromInsertButton="initiateLoomRecorderFromInsertButton",e.fetchLogState="fetchLogState",e))(ia||{}),na=(e=>(e.qualityAuto="Auto",e.quality1080p="1080p",e.quality720p="720p",e))(na||{}),aa=(e=>(e.FullScreen="full_screen",e.Window="window",e.CurrentTab="current_tab",e.CameraOnly="camera_only",e))(aa||{}),oa="NOT_FOUND",sa=function(e,t){return e===t};function ua(e,t){var r,i,n="object"==typeof t?t:{equalityCheck:t},a=n.equalityCheck,o=void 0===a?sa:a,s=n.maxSize,u=void 0===s?1:s,c=n.resultEqualityCheck,p=function(e){return function(t,r){if(null===t||null===r||t.length!==r.length)return!1;for(var i=t.length,n=0;n<i;n++)if(!e(t[n],r[n]))return!1;return!0}}(o),l=1===u?(r=p,{get:function(e){return i&&r(i.key,e)?i.value:oa},put:function(e,t){i={key:e,value:t}},getEntries:function(){return i?[i]:[]},clear:function(){i=void 0}}):function(e,t){var r=[];function i(e){var i=r.findIndex((function(r){return t(e,r.key)}));if(i>-1){var n=r[i];return i>0&&(r.splice(i,1),r.unshift(n)),n.value}return oa}return{get:i,put:function(t,n){i(t)===oa&&(r.unshift({key:t,value:n}),r.length>e&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(u,p);function d(){var t=l.get(arguments);if(t===oa){if(t=e.apply(null,arguments),c){var r=l.getEntries().find((function(e){return c(e.value,t)}));r&&(t=r.value)}l.put(arguments,t)}return t}return d.clearCache=function(){return l.clear()},d}function ca(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return function(){for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];var a,o=0,s={memoizeOptions:void 0},u=i.pop();if("object"==typeof u&&(s=u,u=i.pop()),"function"!=typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var c=s.memoizeOptions,p=void 0===c?r:c,l=Array.isArray(p)?p:[p],d=function(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"==typeof e}))){var r=t.map((function(e){return"function"==typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return t}(i),y=e.apply(void 0,[function(){return o++,u.apply(null,arguments)}].concat(l)),b=e((function(){for(var e=[],t=d.length,r=0;r<t;r++)e.push(d[r].apply(null,arguments));return a=y.apply(null,e)}));return Object.assign(b,{resultFunc:u,memoizedResultFunc:y,dependencies:d,lastResult:function(){return a},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),b}}var pa=ca(ua);function la(e){for(var t=arguments.length,r=Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.map((function(e){return"'"+e+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function da(e){return!!e&&!!e[Xa]}function ya(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===Ja}(e)||Array.isArray(e)||!!e[Ya]||!!e.constructor[Ya]||Sa(e)||va(e))}function ba(e,t,r){void 0===r&&(r=!1),0===ha(e)?(r?Object.keys:eo)(e).forEach((function(i){r&&"symbol"==typeof i||t(i,e[i],e)})):e.forEach((function(r,i){return t(i,r,e)}))}function ha(e){var t=e[Xa];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Sa(e)?2:va(e)?3:0}function ga(e,t){return 2===ha(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function fa(e,t,r){var i=ha(e);2===i?e.set(t,r):3===i?(e.delete(t),e.add(r)):e[t]=r}function ma(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function Sa(e){return $a&&e instanceof Map}function va(e){return Qa&&e instanceof Set}function Aa(e){return e.o||e.t}function Ca(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=to(e);delete t[Xa];for(var r=eo(t),i=0;i<r.length;i++){var n=r[i],a=t[n];!1===a.writable&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[n]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[n]})}return Object.create(Object.getPrototypeOf(e),t)}function Ma(e,t){return void 0===t&&(t=!1),_a(e)||da(e)||!ya(e)||(ha(e)>1&&(e.set=e.add=e.clear=e.delete=Ta),Object.freeze(e),t&&ba(e,(function(e,t){return Ma(t,!0)}),!0)),e}function Ta(){la(2)}function _a(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function Ra(e){var t=ro[e];return t||la(18,e),t}function Oa(){return Ga}function wa(e,t){t&&(Ra("Patches"),e.u=[],e.s=[],e.v=t)}function Pa(e){ja(e),e.p.forEach(xa),e.p=null}function ja(e){e===Ga&&(Ga=e.l)}function za(e){return Ga={p:[],l:Ga,h:e,m:!0,_:0}}function xa(e){var t=e[Xa];0===t.i||1===t.i?t.j():t.O=!0}function Ia(e,t){t._=t.p.length;var r=t.p[0],i=void 0!==e&&e!==r;return t.h.g||Ra("ES5").S(t,e,i),i?(r[Xa].P&&(Pa(t),la(4)),ya(e)&&(e=Na(t,e),t.l||ka(t,e)),t.u&&Ra("Patches").M(r[Xa].t,e,t.u,t.s)):e=Na(t,r,[]),Pa(t),t.u&&t.v(t.u,t.s),e!==Za?e:void 0}function Na(e,t,r){if(_a(t))return t;var i=t[Xa];if(!i)return ba(t,(function(n,a){return Ea(e,i,t,n,a,r)}),!0),t;if(i.A!==e)return t;if(!i.P)return ka(e,i.t,!0),i.t;if(!i.I){i.I=!0,i.A._--;var n=4===i.i||5===i.i?i.o=Ca(i.k):i.o;ba(3===i.i?new Set(n):n,(function(t,a){return Ea(e,i,n,t,a,r)})),ka(e,n,!1),r&&e.u&&Ra("Patches").R(i,r,e.u,e.s)}return i.o}function Ea(e,t,r,i,n,a){if(da(n)){var o=Na(e,n,a&&t&&3!==t.i&&!ga(t.D,i)?a.concat(i):void 0);if(fa(r,i,o),!da(o))return;e.m=!1}if(ya(n)&&!_a(n)){if(!e.h.F&&e._<1)return;Na(e,n),t&&t.A.l||ka(e,n)}}function ka(e,t,r){void 0===r&&(r=!1),e.h.F&&e.m&&Ma(t,r)}function Da(e,t){var r=e[Xa];return(r?Aa(r):e)[t]}function Ua(e,t){if(t in e)for(var r=Object.getPrototypeOf(e);r;){var i=Object.getOwnPropertyDescriptor(r,t);if(i)return i;r=Object.getPrototypeOf(r)}}function La(e){e.P||(e.P=!0,e.l&&La(e.l))}function qa(e){e.o||(e.o=Ca(e.t))}function Fa(e,t,r){var i=Sa(t)?Ra("MapSet").N(t,r):va(t)?Ra("MapSet").T(t,r):e.g?function(e,t){var r=Array.isArray(e),i={i:r?1:0,A:t?t.A:Oa(),P:!1,I:!1,D:{},l:t,t:e,k:null,o:null,j:null,C:!1},n=i,a=io;r&&(n=[i],a=no);var o=Proxy.revocable(n,a),s=o.revoke,u=o.proxy;return i.k=u,i.j=s,u}(t,r):Ra("ES5").J(t,r);return(r?r.A:Oa()).p.push(i),i}function Ha(e){return da(e)||la(22,e),function e(t){if(!ya(t))return t;var r,i=t[Xa],n=ha(t);if(i){if(!i.P&&(i.i<4||!Ra("ES5").K(i)))return i.t;i.I=!0,r=Ba(t,n),i.I=!1}else r=Ba(t,n);return ba(r,(function(t,n){i&&function(e,t){return 2===ha(e)?e.get(t):e[t]}(i.t,t)===n||fa(r,t,e(n))})),3===n?new Set(r):r}(e)}function Ba(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Ca(e)}var Wa,Ga,Ka="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),$a="undefined"!=typeof Map,Qa="undefined"!=typeof Set,Va="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,Za=Ka?Symbol.for("immer-nothing"):((Wa={})["immer-nothing"]=!0,Wa),Ya=Ka?Symbol.for("immer-draftable"):"__$immer_draftable",Xa=Ka?Symbol.for("immer-state"):"__$immer_state",Ja=("undefined"!=typeof Symbol&&Symbol.iterator,""+Object.prototype.constructor),eo="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,to=Object.getOwnPropertyDescriptors||function(e){var t={};return eo(e).forEach((function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)})),t},ro={},io={get:function(e,t){if(t===Xa)return e;var r=Aa(e);if(!ga(r,t))return function(e,t,r){var i,n=Ua(t,r);return n?"value"in n?n.value:null===(i=n.get)||void 0===i?void 0:i.call(e.k):void 0}(e,r,t);var i=r[t];return e.I||!ya(i)?i:i===Da(e.t,t)?(qa(e),e.o[t]=Fa(e.A.h,i,e)):i},has:function(e,t){return t in Aa(e)},ownKeys:function(e){return Reflect.ownKeys(Aa(e))},set:function(e,t,r){var i=Ua(Aa(e),t);if(null==i?void 0:i.set)return i.set.call(e.k,r),!0;if(!e.P){var n=Da(Aa(e),t),a=null==n?void 0:n[Xa];if(a&&a.t===r)return e.o[t]=r,e.D[t]=!1,!0;if(ma(r,n)&&(void 0!==r||ga(e.t,t)))return!0;qa(e),La(e)}return e.o[t]===r&&"number"!=typeof r&&(void 0!==r||t in e.o)||(e.o[t]=r,e.D[t]=!0,!0)},deleteProperty:function(e,t){return void 0!==Da(e.t,t)||t in e.t?(e.D[t]=!1,qa(e),La(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=Aa(e),i=Reflect.getOwnPropertyDescriptor(r,t);return i?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:i.enumerable,value:r[t]}:i},defineProperty:function(){la(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){la(12)}},no={};ba(io,(function(e,t){no[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),no.deleteProperty=function(e,t){return no.set.call(this,e,t,void 0)},no.set=function(e,t,r){return io.set.call(this,e[0],t,r,e[0])};var ao=function(){function e(e){var t=this;this.g=Va,this.F=!0,this.produce=function(e,r,i){if("function"==typeof e&&"function"!=typeof r){var n=r;r=e;var a=t;return function(e){var t=this;void 0===e&&(e=n);for(var i=arguments.length,o=Array(i>1?i-1:0),s=1;s<i;s++)o[s-1]=arguments[s];return a.produce(e,(function(e){var i;return(i=r).call.apply(i,[t,e].concat(o))}))}}var o;if("function"!=typeof r&&la(6),void 0!==i&&"function"!=typeof i&&la(7),ya(e)){var s=za(t),u=Fa(t,e,void 0),c=!0;try{o=r(u),c=!1}finally{c?Pa(s):ja(s)}return"undefined"!=typeof Promise&&o instanceof Promise?o.then((function(e){return wa(s,i),Ia(e,s)}),(function(e){throw Pa(s),e})):(wa(s,i),Ia(o,s))}if(!e||"object"!=typeof e){if(void 0===(o=r(e))&&(o=e),o===Za&&(o=void 0),t.F&&Ma(o,!0),i){var p=[],l=[];Ra("Patches").M(e,o,p,l),i(p,l)}return o}la(21,e)},this.produceWithPatches=function(e,r){if("function"==typeof e)return function(r){for(var i=arguments.length,n=Array(i>1?i-1:0),a=1;a<i;a++)n[a-1]=arguments[a];return t.produceWithPatches(r,(function(t){return e.apply(void 0,[t].concat(n))}))};var i,n,a=t.produce(e,r,(function(e,t){i=e,n=t}));return"undefined"!=typeof Promise&&a instanceof Promise?a.then((function(e){return[e,i,n]})):[a,i,n]},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){ya(e)||la(8),da(e)&&(e=Ha(e));var t=za(this),r=Fa(this,e,void 0);return r[Xa].C=!0,ja(t),r},t.finishDraft=function(e,t){var r=(e&&e[Xa]).A;return wa(r,t),Ia(void 0,r)},t.setAutoFreeze=function(e){this.F=e},t.setUseProxies=function(e){e&&!Va&&la(20),this.g=e},t.applyPatches=function(e,t){var r;for(r=t.length-1;r>=0;r--){var i=t[r];if(0===i.path.length&&"replace"===i.op){e=i.value;break}}r>-1&&(t=t.slice(r+1));var n=Ra("Patches").$;return da(e)?n(e,t):this.produce(e,(function(e){return n(e,t)}))},e}(),oo=new ao,so=oo.produce,uo=(oo.produceWithPatches.bind(oo),oo.setAutoFreeze.bind(oo),oo.setUseProxies.bind(oo),oo.applyPatches.bind(oo),oo.createDraft.bind(oo),oo.finishDraft.bind(oo),so);n(55246),"function"==typeof Symbol&&Symbol.observable;var co=function(){return Math.random().toString(36).substring(7).split("").join(".")};co(),co(),n(55246),n(5806);var po,lo=(po=function(e,t){return po=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},po(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}po(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),yo=function(e,t){for(var r=0,i=t.length,n=e.length;r<i;r++,n++)e[n]=t[r];return e},bo=Object.defineProperty,ho=Object.defineProperties,go=Object.getOwnPropertyDescriptors,fo=Object.getOwnPropertySymbols,mo=Object.prototype.hasOwnProperty,So=Object.prototype.propertyIsEnumerable,vo=function(e,t,r){return t in e?bo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},Ao=function(e,t){for(var r in t||(t={}))mo.call(t,r)&&vo(e,r,t[r]);if(fo)for(var i=0,n=fo(t);i<n.length;i++)r=n[i],So.call(t,r)&&vo(e,r,t[r]);return e},Co=function(e,t){return ho(e,go(t))};function Mo(e){return ya(e)?uo(e,(function(){})):e}function To(e,t){function r(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var n=t.apply(void 0,r);if(!n)throw new Error("prepareAction did not return an object");return Ao(Ao({type:e,payload:n.payload},"meta"in n&&{meta:n.meta}),"error"in n&&{error:n.error})}return{type:e,payload:r[0]}}return r.toString=function(){return""+e},r.type=e,r.match=function(t){return t.type===e},r}function _o(e){var t,r={},i=[],n={addCase:function(e,t){var i="string"==typeof e?e:e.type;if(i in r)throw new Error("addCase cannot be called with two reducers for the same action type");return r[i]=t,n},addMatcher:function(e,t){return i.push({matcher:e,reducer:t}),n},addDefaultCase:function(e){return t=e,n}};return e(n),[r,i,t]}function Ro(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");var r,i="function"==typeof e.initialState?e.initialState:Mo(e.initialState),n=e.reducers||{},a=Object.keys(n),o={},s={},u={};function c(){var t="function"==typeof e.extraReducers?_o(e.extraReducers):[e.extraReducers],r=t[0],n=void 0===r?{}:r,a=t[1],o=void 0===a?[]:a,u=t[2],c=void 0===u?void 0:u,p=Ao(Ao({},n),s);return function(e,t,r,i){void 0===r&&(r=[]);var n,a="function"==typeof t?_o(t):[t,r,i],o=a[0],s=a[1],u=a[2];if(function(e){return"function"==typeof e}(e))n=function(){return Mo(e())};else{var c=Mo(e);n=function(){return c}}function p(e,t){void 0===e&&(e=n());var r=yo([o[t.type]],s.filter((function(e){return(0,e.matcher)(t)})).map((function(e){return e.reducer})));return 0===r.filter((function(e){return!!e})).length&&(r=[u]),r.reduce((function(e,r){if(r){var i;if(da(e))return void 0===(i=r(e,t))?e:i;if(ya(e))return uo(e,(function(e){return r(e,t)}));if(void 0===(i=r(e,t))){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return i}return e}),e)}return p.getInitialState=n,p}(i,p,o,c)}return a.forEach((function(e){var r,i,a=n[e],c=function(e,t){return e+"/"+t}(t,e);"reducer"in a?(r=a.reducer,i=a.prepare):r=a,o[e]=r,s[c]=r,u[e]=i?To(c,i):To(c)})),{name:t,reducer:function(e,t){return r||(r=c()),r(e,t)},actions:u,caseReducers:o,getInitialState:function(){return r||(r=c()),r.getInitialState()}}}"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__,function(e){function t(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];var n=e.apply(this,r)||this;return Object.setPrototypeOf(n,t.prototype),n}lo(t,e),Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e.prototype.concat.apply(this,t)},t.prototype.prepend=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return 1===e.length&&Array.isArray(e[0])?new(t.bind.apply(t,yo([void 0],e[0].concat(this)))):new(t.bind.apply(t,yo([void 0],e.concat(this))))}}(Array);var Oo=["name","message","stack","code"],wo=function(e,t){this.payload=e,this.meta=t},Po=function(e,t){this.payload=e,this.meta=t},jo=function(e){if("object"==typeof e&&null!==e){for(var t={},r=0,i=Oo;r<i.length;r++){var n=i[r];"string"==typeof e[n]&&(t[n]=e[n])}return t}return{message:String(e)}};function zo(e,t,r){var i=To(e+"/fulfilled",(function(e,t,r,i){return{payload:e,meta:Co(Ao({},i||{}),{arg:r,requestId:t,requestStatus:"fulfilled"})}})),n=To(e+"/pending",(function(e,t,r){return{payload:void 0,meta:Co(Ao({},r||{}),{arg:t,requestId:e,requestStatus:"pending"})}})),a=To(e+"/rejected",(function(e,t,i,n,a){return{payload:n,error:(r&&r.serializeError||jo)(e||"Rejected"),meta:Co(Ao({},a||{}),{arg:i,requestId:t,rejectedWithValue:!!n,requestStatus:"rejected",aborted:"AbortError"===(null==e?void 0:e.name),condition:"ConditionError"===(null==e?void 0:e.name)})}})),o="undefined"!=typeof AbortController?AbortController:function(){function e(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return e.prototype.abort=function(){},e}();return Object.assign((function(e){return function(s,u,c){var p,l=(null==r?void 0:r.idGenerator)?r.idGenerator(e):function(e){void 0===e&&(e=21);for(var t="",r=e;r--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t}(),d=new o,y=new Promise((function(e,t){return d.signal.addEventListener("abort",(function(){return t({name:"AbortError",message:p||"Aborted"})}))})),b=!1,h=function(){return o=this,p=null,h=function(){var o,p,h,g,f;return function(e,t){var r,i,n,a,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,i&&(n=2&a[0]?i.return:a[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,a[1])).done)return n;switch(i=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,i=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((n=(n=o.trys).length>0&&n[n.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){o.label=a[1];break}if(6===a[0]&&o.label<n[1]){o.label=n[1],n=a;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(a);break}n[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],i=0}finally{r=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}(this,(function(m){switch(m.label){case 0:return m.trys.push([0,4,,5]),null===(S=g=null==(o=null==r?void 0:r.condition)?void 0:o.call(r,e,{getState:u,extra:c}))||"object"!=typeof S||"function"!=typeof S.then?[3,2]:[4,g];case 1:g=m.sent(),m.label=2;case 2:if(!1===g)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return b=!0,s(n(l,e,null==(p=null==r?void 0:r.getPendingMeta)?void 0:p.call(r,{requestId:l,arg:e},{getState:u,extra:c}))),[4,Promise.race([y,Promise.resolve(t(e,{dispatch:s,getState:u,extra:c,requestId:l,signal:d.signal,rejectWithValue:function(e,t){return new wo(e,t)},fulfillWithValue:function(e,t){return new Po(e,t)}})).then((function(t){if(t instanceof wo)throw t;return t instanceof Po?i(t.payload,l,e,t.meta):i(t,l,e)}))])];case 3:return h=m.sent(),[3,5];case 4:return f=m.sent(),h=f instanceof wo?a(null,l,e,f.payload,f.meta):a(f,l,e),[3,5];case 5:return r&&!r.dispatchConditionRejection&&a.match(h)&&h.meta.condition||s(h),[2,h]}var S}))},new Promise((function(e,t){var r=function(e){try{n(h.next(e))}catch(e){t(e)}},i=function(e){try{n(h.throw(e))}catch(e){t(e)}},n=function(t){return t.done?e(t.value):Promise.resolve(t.value).then(r,i)};n((h=h.apply(o,p)).next())}));var o,p,h}();return Object.assign(h,{abort:function(e){b&&(p=e,d.abort())},requestId:l,arg:e,unwrap:function(){return h.then(xo)}})}}),{pending:n,rejected:a,fulfilled:i,typePrefix:e})}function xo(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}Object.assign;var Io="listenerMiddleware";To(Io+"/add"),To(Io+"/removeAll"),To(Io+"/remove"),function(){function e(e,t){var r=n[e];return r?r.enumerable=t:n[e]=r={configurable:!0,enumerable:t,get:function(){var t=this[Xa];return io.get(t,e)},set:function(t){var r=this[Xa];io.set(r,e,t)}},r}function t(e){for(var t=e.length-1;t>=0;t--){var n=e[t][Xa];if(!n.P)switch(n.i){case 5:i(n)&&La(n);break;case 4:r(n)&&La(n)}}}function r(e){for(var t=e.t,r=e.k,i=eo(r),n=i.length-1;n>=0;n--){var a=i[n];if(a!==Xa){var o=t[a];if(void 0===o&&!ga(t,a))return!0;var s=r[a],u=s&&s[Xa];if(u?u.t!==o:!ma(s,o))return!0}}var c=!!t[Xa];return i.length!==eo(t).length+(c?0:1)}function i(e){var t=e.k;if(t.length!==e.t.length)return!0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);if(r&&!r.get)return!0;for(var i=0;i<t.length;i++)if(!t.hasOwnProperty(i))return!0;return!1}var n={};!function(e,t){ro[e]||(ro[e]=t)}("ES5",{J:function(t,r){var i=Array.isArray(t),n=function(t,r){if(t){for(var i=Array(r.length),n=0;n<r.length;n++)Object.defineProperty(i,""+n,e(n,!0));return i}var a=to(r);delete a[Xa];for(var o=eo(a),s=0;s<o.length;s++){var u=o[s];a[u]=e(u,t||!!a[u].enumerable)}return Object.create(Object.getPrototypeOf(r),a)}(i,t),a={i:i?5:4,A:r?r.A:Oa(),P:!1,I:!1,D:{},l:r,t:t,k:n,o:null,O:!1,C:!1};return Object.defineProperty(n,Xa,{value:a,writable:!0}),n},S:function(e,r,n){n?da(r)&&r[Xa].A===e&&t(e.p):(e.u&&function e(t){if(t&&"object"==typeof t){var r=t[Xa];if(r){var n=r.t,a=r.k,o=r.D,s=r.i;if(4===s)ba(a,(function(t){t!==Xa&&(void 0!==n[t]||ga(n,t)?o[t]||e(a[t]):(o[t]=!0,La(r)))})),ba(n,(function(e){void 0!==a[e]||ga(a,e)||(o[e]=!1,La(r))}));else if(5===s){if(i(r)&&(La(r),o.length=!0),a.length<n.length)for(var u=a.length;u<n.length;u++)o[u]=!1;else for(var c=n.length;c<a.length;c++)o[c]=!0;for(var p=Math.min(a.length,n.length),l=0;l<p;l++)a.hasOwnProperty(l)||(o[l]=!0),void 0===o[l]&&e(a[l])}}}}(e.p[0]),t(e.p))},K:function(e){return 4===e.i?r(e):i(e)}})}();var No=(e=>(e.Fatal="fatal",e.Error="error",e.Warning="warn",e.Info="info",e.Debug="debug",e))(No||{}),Eo=(e=>(e.Camera="cam",e.Desktop="desktop",e.Tab="tab",e))(Eo||{});chrome.runtime.getURL("3rd/libvirtualbg-worker.js"),Object.freeze({position:"absolute"}),Object.freeze({transform:"scaleX(-1)",WebkitTransform:"scaleX(-1)"});var ko=(e=>(e[e.small=1]="small",e[e.medium=2]="medium",e[e.large=3]="large",e))(ko||{});const Do=To("appReset"),Uo=(To("featureFlagReset"),Ro({name:"user",initialState:{isFetching:!1,user:null,authFlowTab:null,authFlowInitTab:null,seenNewUIModal:!1,switchToPinTabModalState:"NEVER_SEEN"},reducers:{fetchStarted(e){e.user=null,e.isFetching=!0},updateUser(e,t){e.user=t.payload,e.isFetching=!1,e.authFlowTab=null,e.authFlowInitTab=null},updateStartAuthFlow(e,t){e.authFlowTab=t.payload.authFlowTab,e.authFlowInitTab=t.payload.initTab},clearAuthFlow(e){e.authFlowTab=null,e.authFlowInitTab=null},updateSeenNewUIModal(e){e.seenNewUIModal=!0},updateSwitchToPinTabModalState(e,t){e.switchToPinTabModalState=t.payload}}})),{fetchStarted:Lo,updateUser:qo,updateStartAuthFlow:Fo,clearAuthFlow:Ho,updateSeenNewUIModal:Bo,updateSwitchToPinTabModalState:Wo}=Uo.actions;var Go=(e=>(e.preRecord="preRecord",e.capture="capture",e.countdown="countdown",e.countdownFinished="countdownFinished",e.active="active",e))(Go||{});const Ko={analytics:{},audioData:Array(7).fill(0),cameraOnSlidesFullscreen:!1,cancelButtonClicked:!1,canceled_desktop_error:!1,confirmCancel:!1,confirmRestart:!1,isLoading:!0,mediaStream:null,microphone_muted_err:!1,openedCanvas:!1,pauseButtonClicked:!1,paused:!0,pinnedTab:null,recorderPhase:"preRecord",recordingPauseTime:null,recordingStartTime:null,recordingTab:null,restartButtonClicked:!1,session:null,showChromeAudioDroppedModal:!1,source:void 0,timeElapsedAtPause:null,totalRecordingTimePaused:0,trimmedSections:null,userSawChromeAudioDroppedModal:!1,videoPreviewUrl:null},$o=Ro({name:"recording",initialState:Ko,reducers:{cancelRestartRecording(e){e.confirmRestart=!1,e.restartButtonClicked=!1},confirmRestartRecording(e){e.recorderPhase="capture",e.confirmRestart=!0,e.restartButtonClicked=!1},enableCanceledDesktopError(e){e.recorderPhase="preRecord",e.canceled_desktop_error=!0},pauseRecording(e){e.analytics.pause_used=!0,e.paused=!0;const t=Date.now();e.recordingPauseTime=t;const r=(i=e.recordingStartTime,n=e.totalRecordingTimePaused,(Date.now()-(i||0)-(n||0))/1e3);var i,n;e.timeElapsedAtPause=r},resumeRecording(e){e.paused=!1,e.confirmCancel=!1,e.confirmRestart=!1,e.videoPreviewUrl=null;const t=e.recordingPauseTime?Date.now()-e.recordingPauseTime:0;e.totalRecordingTimePaused+=t,e.recordingPauseTime=null},setCancelButtonClicked(e,t){e.cancelButtonClicked=t.payload},setConfirmCancel(e){e.confirmCancel=!0},setIsLoading(e,t){e.isLoading=t.payload},setMicrophoneMutedError(e,t){e.microphone_muted_err=t.payload},setPauseButtonClicked(e,t){e.pauseButtonClicked=t.payload},setRecorderPhase(e,t){e.recorderPhase=t?.payload},setRestartButtonClicked(e,t){e.restartButtonClicked=t.payload},setSession(e,t){e.session=t.payload},setVideoPreviewUrl(e,t){e.videoPreviewUrl=t.payload},updateCameraOnSlidesFullscreen(e,t){e.cameraOnSlidesFullscreen=t.payload},updateEndRecording(e){Object.assign(e,{...Ko,analytics:{screen_type:e.analytics.screen_type,tab_audio:e.analytics.tab_audio,from_url:e.analytics.from_url}})},updateMicrophoneEnabled(e,t){e.analytics.microphone_enabled=t.payload},updateRecordingStartTime(e,t){e.recordingStartTime=t.payload,e.totalRecordingTimePaused=0,e.timeElapsedAtPause=null,e.recordingPauseTime=null},updateRecordingTab(e,t){e.recordingTab=t.payload},updateShowChromeAudioDroppedModal(e,t){e.showChromeAudioDroppedModal=t.payload},updateSource(e,t){e.source=t?.payload},updateStartRecording(e,t){e.recorderPhase="active",e.analytics.camType=t.payload,e.paused=!1,e.confirmRestart=!1},updateTrimmedSections(e,t){e.trimmedSections=t.payload},updateUserSawChromeAudioDroppedModal(e,t){e.userSawChromeAudioDroppedModal=t.payload},updatedPinnedTab(e,t){e.pinnedTab=t.payload}},extraReducers:e=>{e.addCase(Do,(e=>{Object.assign(e,Ko)})),e.addCase(Fo,(e=>{e.recordingTab=null}))}}),{setRecorderPhase:Qo,updateSource:Vo,updatedPinnedTab:Zo,updateRecordingTab:Yo,setSession:Xo,setCancelButtonClicked:Jo,setRestartButtonClicked:es,setConfirmCancel:ts,updateStartRecording:rs,pauseRecording:is,updateMicrophoneEnabled:ns,resumeRecording:as,updateEndRecording:os,enableCanceledDesktopError:ss,cancelRestartRecording:us,confirmRestartRecording:cs,setMicrophoneMutedError:ps,setIsLoading:ls,setPauseButtonClicked:ds,setVideoPreviewUrl:ys,updateRecordingStartTime:bs,updateCameraOnSlidesFullscreen:hs,updateShowChromeAudioDroppedModal:gs,updateUserSawChromeAudioDroppedModal:fs,updateTrimmedSections:ms}=$o.actions;zo("recorderSettings/disableCompanionSiteControlSettings",(({all:e,title:t},{dispatch:r,getState:i})=>{let n=i().recorderSettings.companion_site_control_settings;const a=(new Date).toISOString();return e?n={companion_master_switch:{enabled:!1,disabledAt:a}}:t&&(n={...n,[t]:{enabled:!1,disabledAt:a}}),r(Ds(n)),chrome.runtime.sendMessage({type:ia.updateRecorderSettings,userSettings:{companion_site_control_settings:n}})})),zo("recorderSettings/updateMic",(({device:e},{dispatch:t})=>{e!==Ss&&t(Ts(e))}));const Ss="no_mic",vs="no_camera",As=Ro({name:"recorderSettings",initialState:{access_requested:!1,avatar_on_screen_only:!0,camera_id:vs,camera_position:{x:0,y:0},camera_size:ko.small,cameras:[vs],companion_site_control_settings:{companion_master_switch:{enabled:!0,disabledAt:null}},curr_avatar:0,default_camera_id:null,default_microphone_id:null,flip_camera:!0,high_quality:null,high_quality_user_preference:na.qualityAuto,low_light_offset:0,mic_issue_permitted:!1,mic_muted_permitted:!1,microphone_id:Ss,microphones:[Ss],recording_controls_enabled:!0,recording_timer_enabled:!0,recordingType:aa.FullScreen,screenType:Eo.Desktop,show_cam_bubble_hidden_alert:!0,show_extension_unsupported_toast:!1,show_internal_audio_alert:!0,show_mic_issue_warning_modal:!1,show_mic_issue_warning_pill:!1,show_muted_mic_warning:!1,show_pinned_tab_toast:!0,tab_audio:!1,temp_hide_camera:!1,theme:null,with_low_light_adjustments:!0},reducers:{updateAvatarOnScreenOnly(e,t){e.avatar_on_screen_only=t.payload},updateCamera(e,t){e.camera_id=t.payload},updateCameraPosition(e,t){e.camera_position=t.payload},updateCameraSize(e,t){e.camera_size=t.payload},updateCameras(e,t){e.cameras=[vs].concat(t.payload)},updateCompanionSiteControlSettings(e,t){e.companion_site_control_settings=t.payload},updateFlipCamera(e,t){e.flip_camera=t.payload},updateHighQuality(e,t){e.high_quality=t.payload},updateHighQualityUserPreference(e,t){e.high_quality_user_preference=t.payload,t.payload===na.quality1080p||t.payload===na.quality720p?e.high_quality=t.payload===na.quality1080p:e.high_quality=null},updateMicIssuePermitted(e,t){e.mic_issue_permitted=t.payload},updateMicrophone(e,t){e.microphone_id=t.payload},updateMicrophones(e,t){e.microphones=[Ss].concat(t.payload)},updateMutedMicPermitted(e,t){e.show_muted_mic_warning=!1,e.mic_muted_permitted=t.payload},updateRecordingControlsEnabled(e,t){e.recording_controls_enabled=t.payload},updateRecordingTimerEnabled(e,t){e.recording_timer_enabled=t.payload},updateRecordingType(e,t){e.recordingType=t.payload,t.payload===aa.CameraOnly?e.screenType=Eo.Camera:e.screenType=Eo.Desktop},updateScreenType(e,t){e.screenType=t.payload},updateShowCameraBubbleHiddenAlert(e){e.show_cam_bubble_hidden_alert=!1},updateShowExtensionUnsupportedToast(e,t){e.show_extension_unsupported_toast=t.payload},updateShowInternalAudioAlert(e){e.show_internal_audio_alert=!1},updateShowMicIssueWarningModal(e,t){e.show_mic_issue_warning_modal=t.payload},updateShowMicIssueWarningPill(e,t){e.show_mic_issue_warning_pill=t.payload},updateShowMutedMicWarning(e,t){e.show_muted_mic_warning=t.payload},updateShowPinnedTabToast(e,t){e.show_pinned_tab_toast=t.payload},updateTheme(e,t){e.theme=t.payload},updateWithLowLightAdjustments(e,t){e.with_low_light_adjustments=t.payload}},extraReducers(e){e.addCase(Yo,(e=>{e.show_muted_mic_warning=!1,e.mic_muted_permitted=!1,e.mic_issue_permitted=!1,e.show_mic_issue_warning_pill=!1,e.show_mic_issue_warning_modal=!1}))}}),{updateCameraSize:Cs,updateCamera:Ms,updateMicrophone:Ts,updateRecordingType:_s,updateFlipCamera:Rs,updateCameras:Os,updateRecordingTimerEnabled:ws,updateHighQuality:Ps,updateHighQualityUserPreference:js,updateAvatarOnScreenOnly:zs,updateShowMicIssueWarningPill:xs,updateShowMicIssueWarningModal:Is,updateShowMutedMicWarning:Ns,updateMicIssuePermitted:Es,updateMutedMicPermitted:ks,updateCompanionSiteControlSettings:Ds,updateWithLowLightAdjustments:Us,updateCameraPosition:Ls,updateTheme:qs,updateScreenType:Fs,updateRecordingControlsEnabled:Hs,updateShowCameraBubbleHiddenAlert:Bs,updateShowInternalAudioAlert:Ws,updateShowExtensionUnsupportedToast:Gs,updateShowPinnedTabToast:Ks}=As.actions,$s=e=>e.recorderSettings,Qs=(pa($s,(e=>e.camera_size)),pa($s,(e=>e.microphones)),pa($s,(e=>e.microphone_id))),Vs=(pa($s,(e=>e.cameras)),pa($s,(e=>e.camera_id)),pa($s,(e=>e.recording_timer_enabled)),pa($s,(e=>e.recordingType))),Zs=(pa($s,(e=>e.flip_camera)),pa($s,(e=>e.high_quality)),pa($s,(e=>e.high_quality_user_preference)),pa($s,(e=>e.avatar_on_screen_only)),pa($s,(e=>e.curr_avatar)),pa($s,(e=>e.with_low_light_adjustments)),e=>!(Qs(e).indexOf(Ss)>-1)),Ys=(zo("gmail/allowGmailIntegrationPermission",(()=>{chrome.runtime.sendMessage({type:ia.allowGmailIntegrationPermission})})),zo("gmail/denyGmailIntegrationPermission",(()=>{chrome.runtime.sendMessage({type:ia.denyGmailIntegrationPermission})})),zo("gmail/allowGmailLinkExpanding",(()=>{chrome.runtime.sendMessage({type:ia.allowGmailLinkExpanding})})),zo("gmail/denyGmailLinkExpanding",(()=>{chrome.runtime.sendMessage({type:ia.denyGmailLinkExpanding})}))),Xs=(zo("gmail/insertSession",(({composeViewID:e,session:t,_sender:r})=>{chrome.runtime.sendMessage({type:ia.insertSession,composeViewID:e,session:t,_sender:r})})),zo("gmail/requestSessionURL",(({_sender:e})=>{chrome.runtime.sendMessage({type:ia.insertSession,_sender:e})})),zo("gmail/cancelRequestSessionURL",(()=>{chrome.runtime.sendMessage({type:ia.cancelRequestSessionURL})})),{composeViewID:null,insertSession:!1,session:null,sessionURL:null}),Js=e=>{const{_sender:t=null}=e;return null!==t&&t.tab?t.tab.id:e.tabID||null},eu=(e,t)=>t in e?e[t]:Xs,tu=Ro({name:"gmail",initialState:{requestPermission:!1,tabToState:{}},reducers:{updateGmailRequestPermission(e,t){e.requestPermission=t.payload},updateGmailComposeView(e,t){const r=Js(t.payload);if(!r)return;const i=eu(e.tabToState,r);i.composeViewID=t.payload.composeViewID,Object.assign(e,{...e,tabToState:{...e.tabToState,[r]:i}})},updateGmailSession(e,t){const r=Js(t.payload);if(!r)return;const i=eu(e.tabToState,r);i.session=t.payload.session,Object.assign(e,{...e,tabToState:{...e.tabToState,[r]:i}})},updateGmailSessionURL(e,t){const r=Js(t.payload);if(!r)return;const i=eu(e.tabToState,r);i.sessionURL=t.payload.sessionURL,Object.assign(e,{...e,tabToState:{...e.tabToState,[r]:i}})},insertGmailSession(e,t){const r=Js(t.payload);if(!r)return;const i=eu(e.tabToState,r);i.composeViewID=t.payload.composeViewID,i.insertSession=!0,Object.assign(e,{...e,tabToState:{...e.tabToState,[r]:i}})}}}),{updateGmailRequestPermission:ru,updateGmailComposeView:iu,updateGmailSession:nu,updateGmailSessionURL:au,insertGmailSession:ou}=tu.actions;var su=n(83496),uu=n.n(su);const cu={"X-Loom-Request-Source":"loom_chrome_ext_5.5.60"},pu={method:"GET",headers:{}};var lu=n(27077);function du(){const e=lu.n2,t=e.crypto||e.msCrypto;let r=()=>16*Math.random();try{if(t&&t.randomUUID)return t.randomUUID().replace(/-/g,"");t&&t.getRandomValues&&(r=()=>t.getRandomValues(new Uint8Array(1))[0])}catch(e){}return([1e7]+1e3+4e3+8e3+1e11).replace(/[018]/g,(e=>(e^(15&r())>>e/4).toString(16)))}var yu=n(50562);const bu=["debug","info","warn","error","log","assert","trace"],hu={};function gu(e){if(!("console"in lu.n2))return e();const t=lu.n2.console,r={},i=Object.keys(hu);i.forEach((e=>{const i=hu[e];r[e]=t[e],t[e]=i}));try{return e()}finally{i.forEach((e=>{t[e]=r[e]}))}}const fu=function(){let e=!1;const t={enable:()=>{e=!0},disable:()=>{e=!1}};return"undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__?bu.forEach((r=>{t[r]=(...t)=>{e&&gu((()=>{lu.n2.console[r](`Sentry Logger [${r}]:`,...t)}))}})):bu.forEach((e=>{t[e]=()=>{}})),t}(),mu="production",Su=Object.prototype.toString;function vu(e){return function(e,t){return Su.call(e)===`[object ${t}]`}(e,"Object")}function Au(e){return Boolean(e&&e.then&&"function"==typeof e.then)}var Cu;!function(e){e[e.PENDING=0]="PENDING",e[e.RESOLVED=1]="RESOLVED",e[e.REJECTED=2]="REJECTED"}(Cu||(Cu={}));class Mu{constructor(e){Mu.prototype.__init.call(this),Mu.prototype.__init2.call(this),Mu.prototype.__init3.call(this),Mu.prototype.__init4.call(this),this._state=Cu.PENDING,this._handlers=[];try{e(this._resolve,this._reject)}catch(e){this._reject(e)}}then(e,t){return new Mu(((r,i)=>{this._handlers.push([!1,t=>{if(e)try{r(e(t))}catch(e){i(e)}else r(t)},e=>{if(t)try{r(t(e))}catch(e){i(e)}else i(e)}]),this._executeHandlers()}))}catch(e){return this.then((e=>e),e)}finally(e){return new Mu(((t,r)=>{let i,n;return this.then((t=>{n=!1,i=t,e&&e()}),(t=>{n=!0,i=t,e&&e()})).then((()=>{n?r(i):t(i)}))}))}__init(){this._resolve=e=>{this._setResult(Cu.RESOLVED,e)}}__init2(){this._reject=e=>{this._setResult(Cu.REJECTED,e)}}__init3(){this._setResult=(e,t)=>{this._state===Cu.PENDING&&(Au(t)?t.then(this._resolve,this._reject):(this._state=e,this._value=t,this._executeHandlers()))}}__init4(){this._executeHandlers=()=>{if(this._state===Cu.PENDING)return;const e=this._handlers.slice();this._handlers=[],e.forEach((e=>{e[0]||(this._state===Cu.RESOLVED&&e[1](this._value),this._state===Cu.REJECTED&&e[2](this._value),e[0]=!0)}))}}}function Tu(e,t,r,i=0){return new Mu(((n,a)=>{const o=e[i];if(null===t||"function"!=typeof o)n(t);else{const s=o({...t},r);("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&o.id&&null===s&&fu.log(`Event processor "${o.id}" dropped event`),Au(s)?s.then((t=>Tu(e,t,r,i+1).then(n))).then(null,a):Tu(e,s,r,i+1).then(n).then(null,a)}}))}function _u(e){return Ru(e,new Map)}function Ru(e,t){if(vu(e)){const r=t.get(e);if(void 0!==r)return r;const i={};t.set(e,i);for(const r of Object.keys(e))void 0!==e[r]&&(i[r]=Ru(e[r],t));return i}if(Array.isArray(e)){const r=t.get(e);if(void 0!==r)return r;const i=[];return t.set(e,i),e.forEach((e=>{i.push(Ru(e,t))})),i}return e}function Ou(e,t={}){if(t.user&&(!e.ipAddress&&t.user.ip_address&&(e.ipAddress=t.user.ip_address),e.did||t.did||(e.did=t.user.id||t.user.email||t.user.username)),e.timestamp=t.timestamp||(0,yu.ph)(),t.ignoreDuration&&(e.ignoreDuration=t.ignoreDuration),t.sid&&(e.sid=32===t.sid.length?t.sid:du()),void 0!==t.init&&(e.init=t.init),!e.did&&t.did&&(e.did=`${t.did}`),"number"==typeof t.started&&(e.started=t.started),e.ignoreDuration)e.duration=void 0;else if("number"==typeof t.duration)e.duration=t.duration;else{const t=e.timestamp-e.started;e.duration=t>=0?t:0}t.release&&(e.release=t.release),t.environment&&(e.environment=t.environment),!e.ipAddress&&t.ipAddress&&(e.ipAddress=t.ipAddress),!e.userAgent&&t.userAgent&&(e.userAgent=t.userAgent),"number"==typeof t.errors&&(e.errors=t.errors),t.status&&(e.status=t.status)}class wu{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext=Pu()}static clone(e){const t=new wu;return e&&(t._breadcrumbs=[...e._breadcrumbs],t._tags={...e._tags},t._extra={...e._extra},t._contexts={...e._contexts},t._user=e._user,t._level=e._level,t._span=e._span,t._session=e._session,t._transactionName=e._transactionName,t._fingerprint=e._fingerprint,t._eventProcessors=[...e._eventProcessors],t._requestSession=e._requestSession,t._attachments=[...e._attachments],t._sdkProcessingMetadata={...e._sdkProcessingMetadata},t._propagationContext={...e._propagationContext}),t}addScopeListener(e){this._scopeListeners.push(e)}addEventProcessor(e){return this._eventProcessors.push(e),this}setUser(e){return this._user=e||{},this._session&&Ou(this._session,{user:e}),this._notifyScopeListeners(),this}getUser(){return this._user}getRequestSession(){return this._requestSession}setRequestSession(e){return this._requestSession=e,this}setTags(e){return this._tags={...this._tags,...e},this._notifyScopeListeners(),this}setTag(e,t){return this._tags={...this._tags,[e]:t},this._notifyScopeListeners(),this}setExtras(e){return this._extra={...this._extra,...e},this._notifyScopeListeners(),this}setExtra(e,t){return this._extra={...this._extra,[e]:t},this._notifyScopeListeners(),this}setFingerprint(e){return this._fingerprint=e,this._notifyScopeListeners(),this}setLevel(e){return this._level=e,this._notifyScopeListeners(),this}setTransactionName(e){return this._transactionName=e,this._notifyScopeListeners(),this}setContext(e,t){return null===t?delete this._contexts[e]:this._contexts[e]=t,this._notifyScopeListeners(),this}setSpan(e){return this._span=e,this._notifyScopeListeners(),this}getSpan(){return this._span}getTransaction(){const e=this.getSpan();return e&&e.transaction}setSession(e){return e?this._session=e:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(e){if(!e)return this;if("function"==typeof e){const t=e(this);return t instanceof wu?t:this}return e instanceof wu?(this._tags={...this._tags,...e._tags},this._extra={...this._extra,...e._extra},this._contexts={...this._contexts,...e._contexts},e._user&&Object.keys(e._user).length&&(this._user=e._user),e._level&&(this._level=e._level),e._fingerprint&&(this._fingerprint=e._fingerprint),e._requestSession&&(this._requestSession=e._requestSession),e._propagationContext&&(this._propagationContext=e._propagationContext)):vu(e)&&(this._tags={...this._tags,...e.tags},this._extra={...this._extra,...e.extra},this._contexts={...this._contexts,...e.contexts},e.user&&(this._user=e.user),e.level&&(this._level=e.level),e.fingerprint&&(this._fingerprint=e.fingerprint),e.requestSession&&(this._requestSession=e.requestSession),e.propagationContext&&(this._propagationContext=e.propagationContext)),this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._requestSession=void 0,this._span=void 0,this._session=void 0,this._notifyScopeListeners(),this._attachments=[],this._propagationContext=Pu(),this}addBreadcrumb(e,t){const r="number"==typeof t?t:100;if(r<=0)return this;const i={timestamp:(0,yu.yW)(),...e},n=this._breadcrumbs;return n.push(i),this._breadcrumbs=n.length>r?n.slice(-r):n,this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(e){return this._attachments.push(e),this}getAttachments(){return this._attachments}clearAttachments(){return this._attachments=[],this}applyToEvent(e,t={},r){if(this._extra&&Object.keys(this._extra).length&&(e.extra={...this._extra,...e.extra}),this._tags&&Object.keys(this._tags).length&&(e.tags={...this._tags,...e.tags}),this._user&&Object.keys(this._user).length&&(e.user={...this._user,...e.user}),this._contexts&&Object.keys(this._contexts).length&&(e.contexts={...this._contexts,...e.contexts}),this._level&&(e.level=this._level),this._transactionName&&(e.transaction=this._transactionName),this._span){e.contexts={trace:this._span.getTraceContext(),...e.contexts};const t=this._span.transaction;if(t){e.sdkProcessingMetadata={dynamicSamplingContext:t.getDynamicSamplingContext(),...e.sdkProcessingMetadata};const r=t.name;r&&(e.tags={transaction:r,...e.tags})}}this._applyFingerprint(e);const i=this._getBreadcrumbs(),n=[...e.breadcrumbs||[],...i];return e.breadcrumbs=n.length>0?n:void 0,e.sdkProcessingMetadata={...e.sdkProcessingMetadata,...this._sdkProcessingMetadata,propagationContext:this._propagationContext},Tu([...r||[],...(0,lu.YO)("globalEventProcessors",(()=>[])),...this._eventProcessors],e,t)}setSDKProcessingMetadata(e){return this._sdkProcessingMetadata={...this._sdkProcessingMetadata,...e},this}setPropagationContext(e){return this._propagationContext=e,this}getPropagationContext(){return this._propagationContext}_getBreadcrumbs(){return this._breadcrumbs}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach((e=>{e(this)})),this._notifyingListeners=!1)}_applyFingerprint(e){var t;e.fingerprint=e.fingerprint?(t=e.fingerprint,Array.isArray(t)?t:[t]):[],this._fingerprint&&(e.fingerprint=e.fingerprint.concat(this._fingerprint)),e.fingerprint&&!e.fingerprint.length&&delete e.fingerprint}}function Pu(){return{traceId:du(),spanId:du().substring(16)}}var ju=n(55246);const zu=4,xu=100;class Iu{constructor(e,t=new wu,r=zu){this._version=r,this._stack=[{scope:t}],e&&this.bindClient(e)}isOlderThan(e){return this._version<e}bindClient(e){this.getStackTop().client=e,e&&e.setupIntegrations&&e.setupIntegrations()}pushScope(){const e=wu.clone(this.getScope());return this.getStack().push({client:this.getClient(),scope:e}),e}popScope(){return!(this.getStack().length<=1||!this.getStack().pop())}withScope(e){const t=this.pushScope();try{e(t)}finally{this.popScope()}}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getStack(){return this._stack}getStackTop(){return this._stack[this._stack.length-1]}captureException(e,t){const r=this._lastEventId=t&&t.event_id?t.event_id:du(),i=new Error("Sentry syntheticException");return this._withClient(((n,a)=>{n.captureException(e,{originalException:e,syntheticException:i,...t,event_id:r},a)})),r}captureMessage(e,t,r){const i=this._lastEventId=r&&r.event_id?r.event_id:du(),n=new Error(e);return this._withClient(((a,o)=>{a.captureMessage(e,t,{originalException:e,syntheticException:n,...r,event_id:i},o)})),i}captureEvent(e,t){const r=t&&t.event_id?t.event_id:du();return e.type||(this._lastEventId=r),this._withClient(((i,n)=>{i.captureEvent(e,{...t,event_id:r},n)})),r}lastEventId(){return this._lastEventId}addBreadcrumb(e,t){const{scope:r,client:i}=this.getStackTop();if(!i)return;const{beforeBreadcrumb:n=null,maxBreadcrumbs:a=xu}=i.getOptions&&i.getOptions()||{};if(a<=0)return;const o={timestamp:(0,yu.yW)(),...e},s=n?gu((()=>n(o,t))):o;null!==s&&(i.emit&&i.emit("beforeAddBreadcrumb",s,t),r.addBreadcrumb(s,a))}setUser(e){this.getScope().setUser(e)}setTags(e){this.getScope().setTags(e)}setExtras(e){this.getScope().setExtras(e)}setTag(e,t){this.getScope().setTag(e,t)}setExtra(e,t){this.getScope().setExtra(e,t)}setContext(e,t){this.getScope().setContext(e,t)}configureScope(e){const{scope:t,client:r}=this.getStackTop();r&&e(t)}run(e){const t=Eu(this);try{e(this)}finally{Eu(t)}}getIntegration(e){const t=this.getClient();if(!t)return null;try{return t.getIntegration(e)}catch(t){return("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&fu.warn(`Cannot retrieve integration ${e.id} from the current Hub`),null}}startTransaction(e,t){const r=this._callExtensionMethod("startTransaction",e,t);return"undefined"!=typeof __SENTRY_DEBUG__&&!__SENTRY_DEBUG__||r||(this.getClient()?ju.warn("Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':\nSentry.addTracingExtensions();\nSentry.init({...});\n"):ju.warn("Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'")),r}traceHeaders(){return this._callExtensionMethod("traceHeaders")}captureSession(e=!1){if(e)return this.endSession();this._sendSessionUpdate()}endSession(){const e=this.getStackTop().scope,t=e.getSession();t&&function(e,t){let r={};"ok"===e.status&&(r={status:"exited"}),Ou(e,r)}(t),this._sendSessionUpdate(),e.setSession()}startSession(e){const{scope:t,client:r}=this.getStackTop(),{release:i,environment:n=mu}=r&&r.getOptions()||{},{userAgent:a}=lu.n2.navigator||{},o=function(e){const t=(0,yu.ph)(),r={sid:du(),init:!0,timestamp:t,started:t,duration:0,status:"ok",errors:0,ignoreDuration:!1,toJSON:()=>function(e){return _u({sid:`${e.sid}`,init:e.init,started:new Date(1e3*e.started).toISOString(),timestamp:new Date(1e3*e.timestamp).toISOString(),status:e.status,errors:e.errors,did:"number"==typeof e.did||"string"==typeof e.did?`${e.did}`:void 0,duration:e.duration,attrs:{release:e.release,environment:e.environment,ip_address:e.ipAddress,user_agent:e.userAgent}})}(r)};return e&&Ou(r,e),r}({release:i,environment:n,user:t.getUser(),...a&&{userAgent:a},...e}),s=t.getSession&&t.getSession();return s&&"ok"===s.status&&Ou(s,{status:"exited"}),this.endSession(),t.setSession(o),o}shouldSendDefaultPii(){const e=this.getClient(),t=e&&e.getOptions();return Boolean(t&&t.sendDefaultPii)}_sendSessionUpdate(){const{scope:e,client:t}=this.getStackTop(),r=e.getSession();r&&t&&t.captureSession&&t.captureSession(r)}_withClient(e){const{scope:t,client:r}=this.getStackTop();r&&e(r,t)}_callExtensionMethod(e,...t){const r=Nu().__SENTRY__;if(r&&r.extensions&&"function"==typeof r.extensions[e])return r.extensions[e].apply(this,t);("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&fu.warn(`Extension method ${e} couldn't be found, doing nothing.`)}}function Nu(){return lu.n2.__SENTRY__=lu.n2.__SENTRY__||{extensions:{},hub:void 0},lu.n2}function Eu(e){const t=Nu(),r=ku(t);return Du(t,e),r}function ku(e){return(0,lu.YO)("hub",(()=>new Iu),e)}function Du(e,t){return!!e&&((e.__SENTRY__=e.__SENTRY__||{}).hub=t,!0)}function Uu(e){(function(){const e=Nu();if(e.__SENTRY__&&e.__SENTRY__.acs){const t=e.__SENTRY__.acs.getCurrentHub();if(t)return t}return function(e=Nu()){return!!((t=e)&&t.__SENTRY__&&t.__SENTRY__.hub)&&!ku(e).isOlderThan(zu)||Du(e,new Iu),ku(e);var t}(e)})().configureScope(e)}const Lu=[EvalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError,globalThis.DOMException,globalThis.AssertionError,globalThis.SystemError].filter(Boolean).map((e=>[e.name,e]));var qu=new Map(Lu),Fu=n(90778).Buffer;Error;const Hu=[{property:"name",enumerable:!1},{property:"message",enumerable:!1},{property:"stack",enumerable:!1},{property:"code",enumerable:!0},{property:"cause",enumerable:!1}],Bu=Symbol(".toJSON was called"),Wu=({from:e,seen:t,to:r,forceEnumerable:i,maxDepth:n,depth:a,useToJSON:o,serialize:s})=>{if(r||(r=Array.isArray(e)?[]:!s&&Gu(e)?new((e=>qu.get(e)??Error)(e.name)):{}),t.push(e),a>=n)return r;if(o&&"function"==typeof e.toJSON&&!0!==e[Bu])return(e=>{e[Bu]=!0;const t=e.toJSON();return delete e[Bu],t})(e);const u=e=>Wu({from:e,seen:[...t],forceEnumerable:i,maxDepth:n,depth:a,useToJSON:o,serialize:s});for(const[i,n]of Object.entries(e))"function"==typeof Fu&&Fu.isBuffer(n)?r[i]="[object Buffer]":null===n||"object"!=typeof n||"function"!=typeof n.pipe?"function"!=typeof n&&(n&&"object"==typeof n?t.includes(e[i])?r[i]="[Circular]":(a++,r[i]=u(e[i])):r[i]=n):r[i]="[object Stream]";for(const{property:t,enumerable:n}of Hu)void 0!==e[t]&&null!==e[t]&&Object.defineProperty(r,t,{value:Gu(e[t])?u(e[t]):e[t],enumerable:!!i||n,configurable:!0,writable:!0});return r};function Gu(e){return Boolean(e)&&"object"==typeof e&&"name"in e&&"message"in e&&"stack"in e}var Ku={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let $u;const Qu=new Uint8Array(16);function Vu(){if(!$u&&($u="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!$u))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return $u(Qu)}const Zu=[];for(let e=0;e<256;++e)Zu.push((e+256).toString(16).slice(1));var Yu=function(e,t,r){if(Ku.randomUUID&&!t&&!e)return Ku.randomUUID();const i=(e=e||{}).random||(e.rng||Vu)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t){r=r||0;for(let e=0;e<16;++e)t[r+e]=i[e];return t}return function(e,t=0){return Zu[e[t+0]]+Zu[e[t+1]]+Zu[e[t+2]]+Zu[e[t+3]]+"-"+Zu[e[t+4]]+Zu[e[t+5]]+"-"+Zu[e[t+6]]+Zu[e[t+7]]+"-"+Zu[e[t+8]]+Zu[e[t+9]]+"-"+Zu[e[t+10]]+Zu[e[t+11]]+Zu[e[t+12]]+Zu[e[t+13]]+Zu[e[t+14]]+Zu[e[t+15]]}(i)},Xu=n(55246),Ju=Object.defineProperty,ec=Object.defineProperties,tc=Object.getOwnPropertyDescriptors,rc=Object.getOwnPropertySymbols,ic=Object.prototype.hasOwnProperty,nc=Object.prototype.propertyIsEnumerable,ac=(e,t,r)=>t in e?Ju(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,oc=(e,t)=>{for(var r in t||(t={}))ic.call(t,r)&&ac(e,r,t[r]);if(rc)for(var r of rc(t))nc.call(t,r)&&ac(e,r,t[r]);return e},sc=(e,t)=>ec(e,tc(t));function uc(e,t,r){Xu["fatal"===e?"error":e](t,r)}var cc=e=>{const{isConsoleLogActive:t,onCrumbHook:r,trackerMethods:i,baseContext:n={}}=e;let a=oc({},n);const o=e=>{const n=(new Date).getTime();e.context=oc(oc({},a),e.context),r([n,e]),i.map((t=>t.captureCrumb([n,e]))),!0===t()&&uc(e.level,e.message,e.context)},s=(e,r)=>(n,o={},s={})=>{return u={level:e,message:n,context:oc(oc({},o),a),tags:oc(oc({},s),r)},i.forEach((e=>{e.onEvent(u)})),void(!0===t()&&uc(u.level,u.message,u.context));var u},u=s(No.Error,{priority:"p1"}),c=e=>{const{message:t,context:r,stackContext:i}=e;u(t,sc(oc({},r),{stackContext:i,stack:(new Error).stack}),{})},p=e=>{a=oc(oc({},a),e)},l=async()=>{const e=i.map((e=>e.teardown()));await Promise.all(e)};return{crumb:o,recordFail:c,fatal:s(No.Fatal,{priority:"p0"}),error:u,warn:s(No.Warning,{}),info:s(No.Info,{}),debug:s(No.Debug,{}),teardown:l,addToBaseContext:p,getLoggerWithRunId:e=>{const t=e||Yu(),r=e=>(r,i,n)=>e(r,sc(oc({},i),{runId:t}),n);return{crumb:o,recordFail:c,fatal:r(s(No.Fatal,{priority:"p0"})),error:r(u),warn:r(s(No.Warning,{})),info:r(s(No.Info,{})),debug:r(s(No.Debug,{})),teardown:l,addToBaseContext:p,getRunId:()=>t}}}},pc=function(){return pc=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},pc.apply(this,arguments)};function lc(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var i=Array(e),n=0;for(t=0;t<r;t++)for(var a=arguments[t],o=0,s=a.length;o<s;o++,n++)i[n]=a[o];return i}function dc(){var e={};return{get:function(){return e},add:function(t,r){e[t]=r},remove:function(t){delete e[t]},set:function(t){e=t}}}var yc=function(e){return Array.isArray(e)},bc=function(e){return!Array.isArray(e)&&"object"==typeof e&&null!==e};function hc(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,n=t;i<n.length;i++){var a=n[i];null!=a&&(e=fc(e,a,gc()))}return e}function gc(){if("undefined"!=typeof WeakSet){var e=new WeakSet;return{hasAlreadyBeenSeen:function(t){var r=e.has(t);return r||e.add(t),r}}}var t=[];return{hasAlreadyBeenSeen:function(e){var r=t.indexOf(e)>=0;return r||t.push(e),r}}}function fc(e,t,r){if(void 0===t)return e;if(!bc(t)&&!yc(t))return t;if(!r.hasAlreadyBeenSeen(t)){if(bc(t)&&(void 0===e||bc(e))){var i=e||{};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=fc(i[n],t[n],r));return i}if(yc(t)&&(void 0===e||yc(e))){(i=e||[]).length=Math.max(i.length,t.length);for(var a=0;a<t.length;a+=1)i[a]=fc(i[a],t[a],r);return i}return t}}var mc=n(55246),Sc=/[^\u0000-\u007F]/,vc=function(){function e(e,t,r){void 0===r&&(r=!1),this.endpointUrl=e,this.bytesLimit=t,this.withBatchTime=r}return e.prototype.send=function(e,t){var r=this.withBatchTime?function(e){return e+(-1===e.indexOf("?")?"?":"&")+"batch_time="+(new Date).getTime()}(this.endpointUrl):this.endpointUrl;if(!(navigator.sendBeacon&&t<this.bytesLimit&&navigator.sendBeacon(r,e))){var i=new XMLHttpRequest;i.open("POST",r,!0),i.send(e)}},e}(),Ac=function(){function e(e,t,r,i,n,a){void 0===a&&(a=Gc),this.request=e,this.maxSize=t,this.bytesLimit=r,this.maxMessageSize=i,this.flushTimeout=n,this.beforeUnloadCallback=a,this.pushOnlyBuffer=[],this.upsertBuffer={},this.bufferBytesSize=0,this.bufferMessageCount=0,this.flushOnVisibilityHidden(),this.flushPeriodically()}return e.prototype.add=function(e){this.addOrUpdate(e)},e.prototype.upsert=function(e,t){this.addOrUpdate(e,t)},e.prototype.flush=function(){if(0!==this.bufferMessageCount){var e=lc(this.pushOnlyBuffer,(t=this.upsertBuffer,r=[],Object.keys(t).forEach((function(e){r.push(t[e])})),r));this.request.send(e.join("\n"),this.bufferBytesSize),this.pushOnlyBuffer=[],this.upsertBuffer={},this.bufferBytesSize=0,this.bufferMessageCount=0}var t,r},e.prototype.sizeInBytes=function(e){return Sc.test(e)?void 0!==window.TextEncoder?(new TextEncoder).encode(e).length:new Blob([e]).size:e.length},e.prototype.addOrUpdate=function(e,t){var r=this.process(e),i=r.processedMessage,n=r.messageBytesSize;n>=this.maxMessageSize?mc.warn("Discarded a message whose size was bigger than the maximum allowed size "+this.maxMessageSize+"KB."):(this.hasMessageFor(t)&&this.remove(t),this.willReachedBytesLimitWith(n)&&this.flush(),this.push(i,n,t),this.isFull()&&this.flush())},e.prototype.process=function(e){var t=Kc(e);return{processedMessage:t,messageBytesSize:this.sizeInBytes(t)}},e.prototype.push=function(e,t,r){this.bufferMessageCount>0&&(this.bufferBytesSize+=1),void 0!==r?this.upsertBuffer[r]=e:this.pushOnlyBuffer.push(e),this.bufferBytesSize+=t,this.bufferMessageCount+=1},e.prototype.remove=function(e){var t=this.upsertBuffer[e];delete this.upsertBuffer[e];var r=this.sizeInBytes(t);this.bufferBytesSize-=r,this.bufferMessageCount-=1,this.bufferMessageCount>0&&(this.bufferBytesSize-=1)},e.prototype.hasMessageFor=function(e){return void 0!==e&&void 0!==this.upsertBuffer[e]},e.prototype.willReachedBytesLimitWith=function(e){return this.bufferBytesSize+e+1>=this.bytesLimit},e.prototype.isFull=function(){return this.bufferMessageCount===this.maxSize||this.bufferBytesSize>=this.bytesLimit},e.prototype.flushPeriodically=function(){var e=this;setTimeout((function(){e.flush(),e.flushPeriodically()}),this.flushTimeout)},e.prototype.flushOnVisibilityHidden=function(){var e=this;navigator.sendBeacon&&(Vc(window,kc.BEFORE_UNLOAD,this.beforeUnloadCallback),Vc(document,kc.VISIBILITY_CHANGE,(function(){"hidden"===document.visibilityState&&e.flush()})),Vc(window,kc.BEFORE_UNLOAD,(function(){return e.flush()})))},e}(),Cc="?",Mc=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;function Tc(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var _c,Rc=function(){var e,t,r,i,n,a,o=[];function s(e,t,r){var i;for(var n in o)if(Tc(o,n))try{o[n](e,t,r)}catch(e){i=e}if(i)throw i}function u(e,i,n,a,o){if(t)Oc.augmentStackTraceWithInitialElement(t,i,n,""+e),p();else if(o)s(Oc(o),!0,o);else{var u,c={url:i,column:a,line:n},l=e;if("[object String]"==={}.toString.call(e)){var d=l.match(Mc);d&&(u=d[1],l=d[2])}s({name:u,message:l,stack:[c]},!0)}return!!r&&r.apply(this,arguments)}function c(e){var t=e.reason||"Empty reason";s(Oc(t),!0,t)}function p(){var r=t,i=e;t=void 0,e=void 0,s(r,!1,i)}function l(r){if(t){if(e===r)return;p()}var i=Oc(r);throw t=i,e=r,setTimeout((function(){e===r&&p()}),i.incomplete?2e3:0),r}return l.subscribe=function(e){i||(r=window.onerror,window.onerror=Ic(u),i=!0),a||(n=null!==window.onunhandledrejection?window.onunhandledrejection:void 0,window.onunhandledrejection=Ic(c),a=!0),o.push(e)},l.unsubscribe=function(e){for(var t=o.length-1;t>=0;t-=1)o[t]===e&&o.splice(t,1);0===o.length&&(i&&(window.onerror=r,i=!1),a&&(window.onunhandledrejection=n,a=!1))},l.traceKitWindowOnError=u,l}(),Oc=function(){function e(e){if(e.stack){for(var t,r,i,n,a=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,o=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,s=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,u=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,c=/\((\S*)(?::(\d+))(?::(\d+))\)/,p=e.stack.split("\n"),l=[],d=0,y=p.length;d<y;d+=1){if(a.exec(p[d])){var b=(i=a.exec(p[d]))[2]&&0===i[2].indexOf("native");t=i[2]&&0===i[2].indexOf("eval"),r=c.exec(i[2]),t&&r&&(i[2]=r[1],i[3]=r[2],i[4]=r[3]),n={args:b?[i[2]]:[],column:i[4]?+i[4]:void 0,func:i[1]||Cc,line:i[3]?+i[3]:void 0,url:b?void 0:i[2]}}else if(s.exec(p[d]))n={args:[],column:(i=s.exec(p[d]))[4]?+i[4]:void 0,func:i[1]||Cc,line:+i[3],url:i[2]};else{if(!o.exec(p[d]))continue;t=(i=o.exec(p[d]))[3]&&i[3].indexOf(" > eval")>-1,r=u.exec(i[3]),t&&r?(i[3]=r[1],i[4]=r[2],i[5]=void 0):0!==d||i[5]||void 0===e.columnNumber||(l[0].column=e.columnNumber+1),n={args:i[2]?i[2].split(","):[],column:i[5]?+i[5]:void 0,func:i[1]||Cc,line:i[4]?+i[4]:void 0,url:i[3]}}!n.func&&n.line&&(n.func=Cc),l.push(n)}if(l.length)return{stack:l,message:e.message,name:e.name}}}function t(e,t,r,i){var n={url:t,line:r?+r:void 0};if(n.url&&n.line){e.incomplete=!1;var a=e.stack;if(a.length>0&&a[0].url===n.url){if(a[0].line===n.line)return!1;if(!a[0].line&&a[0].func===n.func)return a[0].line=n.line,a[0].context=n.context,!1}return a.unshift(n),e.partial=!0,!0}return e.incomplete=!0,!1}function r(e,i){for(var n,a,o=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,s=[],u={},c=!1,p=r.caller;p&&!c;p=p.caller)p!==Oc&&p!==Rc&&(a={args:[],column:void 0,func:Cc,line:void 0,url:void 0},n=o.exec(p.toString()),p.name?a.func=p.name:n&&(a.func=n[1]),void 0===a.func&&(a.func=n?n.input.substring(0,n.input.indexOf("{")):void 0),u[""+p]?c=!0:u[""+p]=!0,s.push(a));i&&s.splice(0,i);var l={stack:s,message:e.message,name:e.name};return t(l,e.sourceURL||e.fileName,e.line||e.lineNumber,e.message||e.description),l}function i(t,i){var n,a=void 0===i?0:+i;try{if(n=function(e){var t=e.stacktrace;if(t){for(var r,i=/ line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,n=/ line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i,a=t.split("\n"),o=[],s=0;s<a.length;s+=2){var u=void 0;i.exec(a[s])?u={args:[],column:void 0,func:(r=i.exec(a[s]))[3],line:+r[1],url:r[2]}:n.exec(a[s])&&(u={args:(r=n.exec(a[s]))[5]?r[5].split(","):[],column:+r[2],func:r[3]||r[4],line:+r[1],url:r[6]}),u&&(!u.func&&u.line&&(u.func=Cc),u.context=[a[s+1]],o.push(u))}if(o.length)return{stack:o,message:e.message,name:e.name}}}(t),n)return n}catch(e){}try{if(n=e(t))return n}catch(e){}try{if(n=function(e){var t=e.message.split("\n");if(!(t.length<4)){var r,i=/^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,n=/^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,a=/^\s*Line (\d+) of function script\s*$/i,o=[],s=window&&window.document&&window.document.getElementsByTagName("script"),u=[];for(var c in s)Tc(s,c)&&!s[c].src&&u.push(s[c]);for(var p=2;p<t.length;p+=2){var l=void 0;i.exec(t[p])?l={args:[],column:void 0,func:(r=i.exec(t[p]))[3],line:+r[1],url:r[2]}:n.exec(t[p])?l={args:[],column:void 0,func:(r=n.exec(t[p]))[4],line:+r[1],url:r[3]}:a.exec(t[p])&&(r=a.exec(t[p]),l={url:window.location.href.replace(/#.*$/,""),args:[],column:void 0,func:"",line:+r[1]}),l&&(l.func||(l.func=Cc),l.context=[t[p+1]],o.push(l))}if(o.length)return{stack:o,message:t[0],name:e.name}}}(t),n)return n}catch(e){}try{if(n=r(t,a+1))return n}catch(e){}return{message:t.message,name:t.name,stack:[]}}return i.augmentStackTraceWithInitialElement=t,i.computeStackTraceFromStackProp=e,i.ofCaller=function(e){var t=1+(void 0===e?0:+e);try{throw new Error}catch(e){return Oc(e,t+1)}},i}(),wc=n(55246);!function(e){e.info="info",e.error="error"}(_c||(_c={}));var Pc,jc={maxMessagesPerPage:0,sentMessageCount:0};function zc(e){if(e.internalMonitoringEndpoint){var t=function(e){var t,r=i(e.internalMonitoringEndpoint);function i(t){return new Ac(new vc(t,e.batchBytesLimit),e.maxBatchSize,e.batchBytesLimit,e.maxMessageSize,e.flushTimeout)}return void 0!==e.replica&&(t=i(e.replica.internalMonitoringEndpoint)),{add:function(e){var i=function(e){return hc({date:(new Date).getTime(),view:{referrer:document.referrer,url:window.location.href}},void 0!==Pc?Pc():{},e)}(e);r.add(i),t&&t.add(i)}}}(e);!function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];t.forEach((function(t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}))}(jc,{batch:t,maxMessagesPerPage:e.maxInternalMonitoringMessagesPerPage,sentMessageCount:0})}return{setExternalContextProvider:function(e){Pc=e}}}function xc(e,t,r){var i=r.value;r.value=function(){return(jc.batch?Ic(i):i).apply(this,arguments)}}function Ic(e){return function(){try{return e.apply(this,arguments)}catch(e){Ec(e);try{!function(e){var t;t=pc(pc({},function(e){if(e instanceof Error){var t=Oc(e);return{error:{kind:t.name,stack:Yc(t)},message:t.message}}return{error:{stack:"Not an instance of error"},message:"Uncaught "+Kc(e)}}(e)),{status:_c.error}),jc.batch&&jc.sentMessageCount<jc.maxMessagesPerPage&&(jc.sentMessageCount+=1,jc.batch.add(t))}(e)}catch(e){Ec(e)}}}}function Nc(e){jc.debugMode=e}function Ec(e){jc.debugMode&&wc.warn("[INTERNAL ERROR]",e)}var kc,Dc,Uc,Lc,qc,Fc=1e3,Hc=60*Fc,Bc=60*Hc;function Wc(e){return e?(parseInt(e,10)^16*Math.random()>>parseInt(e,10)/4).toString(16):"10000000-1000-4000-8000-100000000000".replace(/[018]/g,Wc)}function Gc(){}function Kc(e,t,r){if(null==e)return JSON.stringify(e);var i=[!1,void 0];$c(e)&&(i=[!0,e.toJSON],delete e.toJSON);var n,a,o=[!1,void 0];"object"==typeof e&&$c(n=Object.getPrototypeOf(e))&&(o=[!0,n.toJSON],delete n.toJSON);try{a=JSON.stringify(e,void 0,r)}catch(e){a="<error: unable to serialize object>"}finally{i[0]&&(e.toJSON=i[1]),o[0]&&(n.toJSON=o[1])}return a}function $c(e){return"object"==typeof e&&null!==e&&e.hasOwnProperty("toJSON")}function Qc(e){return Math.floor((void 0===Lc&&(Lc=performance.timing.navigationStart),Lc+e))}function Vc(e,t,r,i){return Zc(e,[t],r,i)}function Zc(e,t,r,i){var n=void 0===i?{}:i,a=n.once,o=n.capture,s=n.passive,u=Ic(a?function(e){p(),r(e)}:r),c=s?{capture:o,passive:s}:o;t.forEach((function(t){return e.addEventListener(t,u,c)}));var p=function(){return t.forEach((function(t){return e.removeEventListener(t,u,c)}))};return{stop:p}}function Yc(e){var t=(e.name||"Error")+": "+e.message;return e.stack.forEach((function(e){var r="?"===e.func?"<anonymous>":e.func,i=e.args&&e.args.length>0?"("+e.args.join(", ")+")":"",n=e.line?":"+e.line:"",a=e.line&&e.column?":"+e.column:"";t+="\n  at "+r+i+" @ "+e.url+n+a})),t}!function(e){e.BEFORE_UNLOAD="beforeunload",e.CLICK="click",e.KEY_DOWN="keydown",e.LOAD="load",e.POP_STATE="popstate",e.SCROLL="scroll",e.TOUCH_START="touchstart",e.VISIBILITY_CHANGE="visibilitychange",e.DOM_CONTENT_LOADED="DOMContentLoaded",e.POINTER_DOWN="pointerdown",e.POINTER_UP="pointerup",e.POINTER_CANCEL="pointercancel",e.HASH_CHANGE="hashchange",e.PAGE_HIDE="pagehide",e.MOUSE_DOWN="mousedown"}(kc||(kc={})),function(e){e.DOCUMENT="document",e.XHR="xhr",e.BEACON="beacon",e.FETCH="fetch",e.CSS="css",e.JS="js",e.IMAGE="image",e.FONT="font",e.MEDIA="media",e.OTHER="other"}(Dc||(Dc={})),function(e){e.FETCH="fetch",e.XHR="xhr"}(Uc||(Uc={})),function(e){e.AGENT="agent",e.CONSOLE="console",e.NETWORK="network",e.SOURCE="source",e.LOGGER="logger",e.CUSTOM="custom"}(qc||(qc={}));var Xc,Jc,ep=n(55246);!function(e){e.debug="debug",e.info="info",e.warn="warn",e.error="error"}(Jc||(Jc={}));var tp,rp=((Xc={})[Jc.debug]=0,Xc[Jc.info]=1,Xc[Jc.warn]=2,Xc[Jc.error]=3,Xc);Object.keys(Jc),function(e){e.http="http",e.console="console",e.silent="silent"}(tp||(tp={}));var ip,np=function(){function e(e,t,r,i){void 0===t&&(t=tp.http),void 0===r&&(r=Jc.debug),void 0===i&&(i={}),this.sendLog=e,this.handlerType=t,this.level=r,this.contextManager=dc(),this.contextManager.set(i)}return e.prototype.log=function(e,t,r){if(void 0===r&&(r=Jc.info),rp[r]>=rp[this.level])switch(this.handlerType){case tp.http:this.sendLog(pc({message:e,status:r},hc(this.contextManager.get(),t)));break;case tp.console:ep.log(r+": "+e,hc(this.contextManager.get(),t));case tp.silent:}},e.prototype.debug=function(e,t){this.log(e,t,Jc.debug)},e.prototype.info=function(e,t){this.log(e,t,Jc.info)},e.prototype.warn=function(e,t){this.log(e,t,Jc.warn)},e.prototype.error=function(e,t){var r={error:{origin:qc.LOGGER}};this.log(e,hc(r,t),Jc.error)},e.prototype.setContext=function(e){this.contextManager.set(e)},e.prototype.addContext=function(e,t){this.contextManager.add(e,t)},e.prototype.removeContext=function(e){this.contextManager.remove(e)},e.prototype.setHandler=function(e){this.handlerType=e},e.prototype.setLevel=function(e){this.level=e},function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);a>3&&o&&Object.defineProperty(t,r,o)}([xc],e.prototype,"log",null),e}(),ap=n(55246),op=Fc;function sp(e,t,r,i){var n=new Date;n.setTime(n.getTime()+r);var a="expires="+n.toUTCString(),o=i&&i.crossSite?"none":"strict",s=i&&i.domain?";domain="+i.domain:"",u=i&&i.secure?";secure":"";document.cookie=e+"="+t+";"+a+";path=/;samesite="+o+s+u}function up(e){return function(e,t){var r=e.match("(?:^|;)\\s*"+t+"\\s*=\\s*([^;]+)");return r?r[1]:void 0}(document.cookie,e)}var cp={allowedTracingOrigins:[],maxErrorsByMinute:3e3,maxInternalMonitoringMessagesPerPage:15,resourceSampleRate:100,sampleRate:100,silentMultipleInit:!1,trackInteractions:!1,requestErrorResponseLengthLimit:32768,flushTimeout:30*Fc,maxBatchSize:50,maxMessageSize:262144,batchBytesLimit:16384},pp={alternate:{logs:"logs",rum:"rum",trace:"trace"},classic:{logs:"browser",rum:"rum",trace:"public-trace"}};function lp(e){var t={};return t.secure=function(e){return!!e.useSecureSessionCookie||!!e.useCrossSiteSessionCookie}(e),t.crossSite=!!e.useCrossSiteSessionCookie,e.trackSessionAcrossSubdomains&&(t.domain=function(){if(void 0===ip){for(var e="dd_site_test_"+Wc(),t=window.location.hostname.split("."),r=t.pop();t.length&&!up(e);)r=t.pop()+"."+r,sp(e,"test",Fc,{domain:r});ip=r}return ip}()),t}function dp(e,t,r,i){var n="sdk_version:"+r.sdkVersion+(r.env?",env:"+r.env:"")+(r.service?",service:"+r.service:"")+(r.version?",version:"+r.version:""),a=yp(e,t,r.site),o=r.proxyHost?r.proxyHost:a,s=r.proxyHost?"ddhost="+a+"&":"",u=(r.applicationId?"_dd.application_id="+r.applicationId+"&":"")+s+"ddsource="+(i||"browser")+"&ddtags="+n;return"https://"+o+"/v1/input/"+r.clientToken+"?"+u}function yp(e,t,r){var i=pp[e][t];if("classic"===e)return i+"-http-intake.logs."+r;var n=r.split("."),a=n.pop();return i+".browser-intake-"+n.join("-")+"."+a}var bp,hp,gp=n(55246);!function(e){e.US="us",e.EU="eu"}(hp||(hp={}));var fp,mp=((bp={})[hp.EU]="datadoghq.eu",bp[hp.US]="datadoghq.com",bp);!function(e){e.RELEASE="release",e.STAGING="staging",e.E2E_TEST="e2e-test"}(fp||(fp={}));var Sp,vp,Ap,Cp=function(){function e(e){void 0===e&&(e=1e4),this.limit=e,this.buffer=[]}return e.prototype.add=function(e){this.buffer.push(e)>this.limit&&this.buffer.splice(0,1)},e.prototype.drain=function(e){this.buffer.forEach((function(t){return e(t)})),this.buffer.length=0},e}();function Mp(e){return function(e,t){if(function(){if(void 0!==Sp)return Sp;try{var e=new URL("http://test/path");return Sp="http://test/path"===e.href}catch(e){Sp=!1}return Sp}())return void 0!==t?new URL(e,t):new URL(e);if(void 0===t&&!/:/.test(e))throw new Error("Invalid URL: '"+e+"'");var r=document,i=r.createElement("a");if(void 0!==t){var n=(r=document.implementation.createHTMLDocument("")).createElement("base");n.href=t,r.head.appendChild(n),r.body.appendChild(i)}return i.href=e,i}(e,function(e){if(e.origin)return e.origin;var t=e.host.replace(/(:80|:443)$/,"");return e.protocol+"//"+t}(window.location)).href}var Tp,_p=[],Rp=[];function Op(){return vp||(window.fetch&&(Ap=window.fetch,window.fetch=Ic((function(e,t){var r=this,i=t&&t.method||"object"==typeof e&&e.method||"GET",n=Mp("object"==typeof e&&e.url||e),a={init:t,method:i,startTime:performance.now(),url:n},o=function(e){return function(e,t,r,i){return new(r||(r=Promise))((function(n,a){function o(e){try{u(i.next(e))}catch(e){a(e)}}function s(e){try{u(i.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,s)}u((i=i.apply(e,t||[])).next())}))}(r,void 0,void 0,(function(){var t,r;return function(e,t){var r,i,n,a,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,i&&(n=2&a[0]?i.return:a[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,a[1])).done)return n;switch(i=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,i=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((n=(n=o.trys).length>0&&n[n.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){o.label=a[1];break}if(6===a[0]&&o.label<n[1]){o.label=n[1],n=a;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(a);break}n[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],i=0}finally{r=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}(this,(function(i){switch(i.label){case 0:return a.duration=performance.now()-a.startTime,"stack"in e||e instanceof Error?(a.status=0,a.response=Yc(Oc(e)),Rp.forEach((function(e){return e(a)})),[3,6]):[3,1];case 1:if(!("status"in e))return[3,6];t=void 0,i.label=2;case 2:return i.trys.push([2,4,,5]),[4,e.clone().text()];case 3:return t=i.sent(),[3,5];case 4:return r=i.sent(),t="Unable to retrieve response: "+r,[3,5];case 5:a.response=t,a.responseType=e.type,a.status=e.status,Rp.forEach((function(e){return e(a)})),i.label=6;case 6:return[2]}}))}))};_p.forEach((function(e){return e(a)}));var s=Ap.call(this,e,a.init);return s.then(Ic(o),Ic(o)),s}))),vp={beforeSend:function(e){_p.push(e)},onRequestComplete:function(e){Rp.push(e)}}),vp}var wp,Pp,jp=[],zp=[];var xp,Ip,Np,Ep=function(){function e(){this.observers=[]}return e.prototype.subscribe=function(e){this.observers.push(e)},e.prototype.notify=function(e){this.observers.forEach((function(t){return t(e)}))},e}(),kp=n(55246);function Dp(e){if(!xp){var t=new Ep;!function(e,t){function r(r,i){e.isIntakeUrl(i.url)||!function(e){return 0===e.status&&"opaque"!==e.responseType}(i)&&!function(e){return e.status>=500}(i)||t.notify({message:qp(r)+" error "+i.method+" "+i.url,resource:{method:i.method,statusCode:i.status,url:i.url},source:qc.NETWORK,stack:Lp(i.response,e)||"Failed to load",startTime:i.startTime})}(Tp||(wp=XMLHttpRequest.prototype.open,Pp=XMLHttpRequest.prototype.send,XMLHttpRequest.prototype.open=Ic((function(e,t){return this._datadog_xhr={method:e,startTime:-1,url:Mp(t)},wp.apply(this,arguments)})),XMLHttpRequest.prototype.send=Ic((function(e){var t=this;if(this._datadog_xhr){this._datadog_xhr.startTime=performance.now();var r=this.onreadystatechange;this.onreadystatechange=function(){this.readyState===XMLHttpRequest.DONE&&Ic(n)(),r&&r.apply(this,arguments)};var i=!1,n=function(){i||(i=!0,t._datadog_xhr.duration=performance.now()-t._datadog_xhr.startTime,t._datadog_xhr.response=t.response,t._datadog_xhr.status=t.status,zp.forEach((function(e){return e(t._datadog_xhr)})))};this.addEventListener("loadend",Ic(n)),jp.forEach((function(e){return e(t._datadog_xhr,t)}))}return Pp.apply(this,arguments)})),Tp={beforeSend:function(e){jp.push(e)},onRequestComplete:function(e){zp.push(e)}}),Tp).onRequestComplete((function(e){return r(Uc.XHR,e)})),Op().onRequestComplete((function(e){return r(Uc.FETCH,e)}))}(e,t),function(e){Ip=kp.error,kp.error=Ic((function(t){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];Ip.apply(kp,lc([t],r)),e.notify({message:lc(["console error:",t],r).map(Up).join(" "),source:qc.CONSOLE,startTime:performance.now()})}))}(t),function(e){Np=function(t,r,i){var n=function(e,t,r){return e&&(void 0!==e.message||t instanceof Error)?{message:e.message||"Empty message",stack:Yc(e),type:e.name}:{message:"Uncaught "+Kc(t),stack:"No stack, consider using an instance of Error",type:e&&e.name}}(t,i),a=n.stack,o=n.message,s=n.type;e.notify({message:o,stack:a,type:s,source:qc.SOURCE,startTime:performance.now()})},Rc.subscribe(Np)}(t),xp=function(e,t){var r=0,i=new Ep;return t.subscribe((function(t){r<e.maxErrorsByMinute?(r+=1,i.notify(t)):r===e.maxErrorsByMinute&&(r+=1,i.notify({message:"Reached max number of errors by minute: "+e.maxErrorsByMinute,source:qc.AGENT,startTime:performance.now()}))})),setInterval((function(){return r=0}),Hc),i}(e,t)}return xp}function Up(e){return"string"==typeof e?e:e instanceof Error?Yc(Oc(e)):Kc(e,0,2)}function Lp(e,t){return e&&e.length>t.requestErrorResponseLengthLimit?e.substring(0,t.requestErrorResponseLengthLimit)+"...":e}function qp(e){return Uc.XHR===e?"XHR":"Fetch"}var Fp="_dd",Hp="_dd_r",Bp="_dd_l",Wp="rum",Gp="logs",Kp="_dd_s",$p=15*Hc,Qp=4*Bc,Vp=Hc;function Zp(e,t,r){var i=function(e,t){var r,i,n=!1,a=function(){n=!0,window.clearTimeout(r),r=window.setTimeout((function(){n=!1}),op)};return{get:function(){return n||(i=up(e),a()),i},set:function(r,n){sp(e,r,n,t),i=r,a()}}}(Kp,e);!function(e){var t=e.get(),r=up(Fp),i=up(Hp),n=up(Bp);if(!t){var a={};r&&(a.id=r),n&&/^[01]$/.test(n)&&(a[Gp]=n),i&&/^[012]$/.test(i)&&(a[Wp]=i),el(a,e)}}(i);var n=new Ep,a=Jp(i).id,o=function(e,t,r){var i,n=!1,a=!1;return{throttled:function(){var r=this;n?a=!0:(e.apply(this),n=!0,i=window.setTimeout((function(){a&&e.apply(r),n=!1,a=!1}),t))},cancel:function(){window.clearTimeout(i),n=!1,a=!1}}}((function(){var e=Jp(i),o=r(e[t]),s=o.trackingType,u=o.isTracked;e[t]=s,u&&!e.id&&(e.id=Wc(),e.created=String(Date.now())),el(e,i),u&&a!==e.id&&(a=e.id,n.notify())}),op).throttled;return o(),function(e){var t=Zc(window,[kc.CLICK,kc.TOUCH_START,kc.KEY_DOWN,kc.SCROLL],e,{capture:!0,passive:!0}).stop;il.push(t)}(o),function(e){var t=Ic((function(){"visible"===document.visibilityState&&el(Jp(i),i)})),r=Vc(document,kc.VISIBILITY_CHANGE,t).stop;il.push(r);var n=window.setInterval(t,Vp);il.push((function(){clearInterval(n)}))}(),{getId:function(){return Jp(i).id},getTrackingType:function(){return Jp(i)[t]},renewObservable:n}}var Yp=/^([a-z]+)=([a-z0-9-]+)$/,Xp="&";function Jp(e){var t=function(e){var t=e.get(),r={};return function(e){return void 0!==e&&(-1!==e.indexOf(Xp)||Yp.test(e))}(t)&&t.split(Xp).forEach((function(e){var t=Yp.exec(e);if(null!==t){var i=t[1],n=t[2];r[i]=n}})),r}(e);return function(e){return(void 0===e.created||Date.now()-Number(e.created)<Qp)&&(void 0===e.expire||Date.now()<Number(e.expire))}(t)?t:(tl(e),{})}function el(e,t){if(r=e,0!==Object.keys(r).length){var r;e.expire=String(Date.now()+$p);var i=function(e){return Object.keys(e).map((function(t){return[t,e[t]]}))}(e).map((function(e){return e[0]+"="+e[1]})).join(Xp);t.set(i,$p)}else tl(t)}function tl(e){e.set("",0)}var rl,il=[];function nl(e){return 0!==(t=e.sampleRate)&&100*Math.random()<=t?rl.TRACKED:rl.NOT_TRACKED;var t}!function(e){e.NOT_TRACKED="0",e.TRACKED="1"}(rl||(rl={}));var al={buildMode:"release",datacenter:"us",sdkVersion:"1.26.3"};function ol(e){var t=window.DD_RUM;return t&&t.getInternalContext?t.getInternalContext(e):void 0}var sl,ul,cl,pl=n(55246),ll=function(e){var t,r,i=!1,n=dc(),a={},o=new Cp,s=function(e,t){o.add([e,t])},u=new np(c);return t={logger:u,init:Ic((function(e){("file:"!==window.location.protocol||(gp.error("Execution is not allowed in the current context."),0))&&function(e){return i?(e.silentMultipleInit||pl.error("DD_LOGS is already initialized."),!1):e&&(e.publicApiKey||e.clientToken)?!!(void 0===e.sampleRate||(t=e.sampleRate,function(e){return"number"==typeof e}(t)&&t>=0&&t<=100))||(pl.error("Sample Rate should be a number between 0 and 100"),!1):(pl.error("Client Token is not configured, we will not send any data."),!1);var t}(e)&&(e.publicApiKey&&(e.clientToken=e.publicApiKey,pl.warn("Public API Key is deprecated. Please use Client Token instead.")),s=function(e,t,r){var i=function(e,t){var r=function(e,t){var r={applicationId:e.applicationId,buildMode:t.buildMode,clientToken:e.clientToken,env:e.env,proxyHost:e.proxyHost,sdkVersion:t.sdkVersion,service:e.service,site:e.site||mp[e.datacenter||t.datacenter],version:e.version},i=Array.isArray(e.enableExperimentalFeatures)?e.enableExperimentalFeatures:[],n=e.useAlternateIntakeDomains?"alternate":"classic",a=function(e,t,r){if(t.proxyHost)return["https://"+t.proxyHost+"/v1/input/"];var i=[t.site];t.buildMode===fp.STAGING&&r&&i.push(mp[hp.US]);for(var n=[],a=Object.keys(pp[e]),o=0,s=i;o<s.length;o++)for(var u=s[o],c=0,p=a;c<p.length;c++){var l=p[c];n.push("https://"+yp(e,l,u)+"/v1/input/")}return n}(n,r,void 0!==e.replica),o=pc({cookieOptions:lp(e),isEnabled:function(e){return t=e,-1!==i.indexOf(t);var t},logsEndpoint:dp(n,"logs",r),proxyHost:e.proxyHost,rumEndpoint:dp(n,"rum",r),service:e.service,traceEndpoint:dp(n,"trace",r),isIntakeUrl:function(e){return a.some((function(t){return 0===e.indexOf(t)}))}},cp);if(e.internalMonitoringApiKey&&(o.internalMonitoringEndpoint=dp(n,"logs",r,"browser-agent-internal-monitoring")),"allowedTracingOrigins"in e&&(o.allowedTracingOrigins=e.allowedTracingOrigins),"sampleRate"in e&&(o.sampleRate=e.sampleRate),"resourceSampleRate"in e&&(o.resourceSampleRate=e.resourceSampleRate),"trackInteractions"in e&&(o.trackInteractions=!!e.trackInteractions),r.buildMode===fp.E2E_TEST&&(o.internalMonitoringEndpoint="<<< E2E INTERNAL MONITORING ENDPOINT >>>",o.logsEndpoint="<<< E2E LOGS ENDPOINT >>>",o.rumEndpoint="<<< E2E RUM ENDPOINT >>>"),r.buildMode===fp.STAGING&&void 0!==e.replica){var s=pc(pc({},r),{applicationId:e.replica.applicationId,clientToken:e.replica.clientToken,site:mp[hp.US]});o.replica={applicationId:e.replica.applicationId,internalMonitoringEndpoint:dp(n,"logs",s,"browser-agent-internal-monitoring"),logsEndpoint:dp(n,"logs",s),rumEndpoint:dp(n,"rum",s)}}return o}(e,t);return{configuration:r,internalMonitoring:zc(r)}}(e,al),n=i.configuration,a=i.internalMonitoring,o=!1!==e.forwardErrorsToLogs?Dp(n):new Ep,s=function(e,t){if(!t){var r=nl(e)===rl.TRACKED;return{getId:function(){},isTracked:function(){return r}}}var i=Zp(e.cookieOptions,"logs",(function(t){return function(e,t){var r=function(e){return e===rl.NOT_TRACKED||e===rl.TRACKED}(t)?t:nl(e);return{trackingType:r,isTracked:r===rl.TRACKED}}(e,t)}));return{getId:i.getId,isTracked:function(){return i.getTrackingType()===rl.TRACKED}}}(n,function(e){if(void 0===document.cookie||null===document.cookie)return!1;try{var t="dd_cookie_test_"+Wc(),r="test";return sp(t,r,Fc,e),up(t)===r}catch(e){return ap.error(e),!1}}(n.cookieOptions));return function(e,t,r,i,n,a){r.setExternalContextProvider((function(){return hc({session_id:i.getId()},a(),ol())}));var o=function(e,t){var r,i=n(e.logsEndpoint);function n(t){return new Ac(new vc(t,e.batchBytesLimit),e.maxBatchSize,e.batchBytesLimit,e.maxMessageSize,e.flushTimeout)}return void 0!==e.replica&&(r=n(e.replica.logsEndpoint)),{add:function(n,a){var o=function(e,t,r,i){return hc(e,t,r,i)}({service:e.service,session_id:t.getId()},a,ol(),n);i.add(o),r&&r.add(o)}}}(e,i);return t.subscribe((function(e){n.error(e.message,hc({date:Qc(e.startTime),error:{kind:e.type,origin:e.source,stack:e.stack}},e.resource?{http:{method:e.resource.method,status_code:e.resource.statusCode,url:e.resource.url}}:void 0,ol(e.startTime)))})),function(e,t){i.isTracked()&&o.add(e,t)}}(n,o,a,s,t,r)}(e,u,n.get),o.drain((function(e){var t=e[0],r=e[1];return s(t,r)})),i=!0)})),getLoggerGlobalContext:Ic(n.get),setLoggerGlobalContext:Ic(n.set),addLoggerGlobalContext:Ic(n.add),removeLoggerGlobalContext:Ic(n.remove),createLogger:Ic((function(e,t){return void 0===t&&(t={}),a[e]=new np(c,t.handler,t.level,pc(pc({},t.context),{logger:{name:e}})),a[e]})),getLogger:Ic((function(e){return a[e]}))},r=pc(pc({},t),{onReady:function(e){e()}}),Object.defineProperty(r,"_setDebug",{get:function(){return Nc},enumerable:!1}),r;function c(e){s(e,hc({date:Date.now(),view:{referrer:document.referrer,url:window.location.href}},n.get()))}}();sl=function(){if("object"==typeof globalThis)return globalThis;Object.defineProperty(Object.prototype,"_dd_temp_",{get:function(){return this},configurable:!0});var e=_dd_temp_;return delete Object.prototype._dd_temp_,"object"!=typeof e&&(e="object"==typeof self?self:"object"==typeof window?window:{}),e}(),ul=ll,cl=sl["DD_LOGS"],sl.DD_LOGS=ul,cl&&cl.q&&cl.q.forEach((function(e){return e()}));var dl=n(96685),yl=e=>"string"==typeof e?0:e instanceof Error?1:2,bl=e=>{switch(yl(e)){case 0:return{message:e,context:{}};case 1:return{message:e.message,context:{error:(0,dl.serializeError)(e)}};default:return{message:"Meta: Unidentifed payload captured",context:{}}}},hl=(e,t)=>t.includes(e),gl=e=>{switch(e){case"debug":return"debug";case"info":return"info";case"warn":case"warning":return"warning";case"error":return"error";case"fatal":case"critical":return"fatal";default:return"log"}},fl=n(37900);const ml=Object.prototype.toString;function Sl(e){switch(ml.call(e)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return wl(e,Error)}}function vl(e,t){return ml.call(e)===`[object ${t}]`}function Al(e){return vl(e,"ErrorEvent")}function Cl(e){return vl(e,"DOMError")}function Ml(e){return vl(e,"String")}function Tl(e){return null===e||"object"!=typeof e&&"function"!=typeof e}function _l(e){return vl(e,"Object")}function Rl(e){return"undefined"!=typeof Event&&wl(e,Event)}function Ol(e){return Boolean(e&&e.then&&"function"==typeof e.then)}function wl(e,t){try{return e instanceof t}catch(e){return!1}}var Pl=n(53386);const jl=(0,Pl.Rf)(),zl=80;function xl(e,t={}){try{let r=e;const i=5,n=[];let a=0,o=0;const s=" > ",u=s.length;let c;const p=Array.isArray(t)?t:t.keyAttrs,l=!Array.isArray(t)&&t.maxStringLength||zl;for(;r&&a++<i&&(c=Il(r,p),!("html"===c||a>1&&o+n.length*u+c.length>=l));)n.push(c),o+=c.length,r=r.parentNode;return n.reverse().join(s)}catch(e){return"<unknown>"}}function Il(e,t){const r=e,i=[];let n,a,o,s,u;if(!r||!r.tagName)return"";i.push(r.tagName.toLowerCase());const c=t&&t.length?t.filter((e=>r.getAttribute(e))).map((e=>[e,r.getAttribute(e)])):null;if(c&&c.length)c.forEach((e=>{i.push(`[${e[0]}="${e[1]}"]`)}));else if(r.id&&i.push(`#${r.id}`),n=r.className,n&&Ml(n))for(a=n.split(/\s+/),u=0;u<a.length;u++)i.push(`.${a[u]}`);const p=["type","name","title","alt"];for(u=0;u<p.length;u++)o=p[u],s=r.getAttribute(o),s&&i.push(`[${o}="${s}"]`);return i.join("")}function Nl(e,t=0){return"string"!=typeof e||0===t||e.length<=t?e:`${e.substr(0,t)}...`}function El(e,t){if(!Array.isArray(e))return"";const r=[];for(let t=0;t<e.length;t++){const i=e[t];try{r.push(String(i))}catch(e){r.push("[value cannot be serialized]")}}return r.join(t)}function kl(e,t=[],r=!1){return t.some((t=>function(e,t,r=!1){return!!Ml(e)&&(vl(t,"RegExp")?t.test(e):!!Ml(t)&&(r?e===t:e.includes(t)))}(e,t,r)))}function Dl(e,t,r){if(!(t in e))return;const i=e[t],n=r(i);if("function"==typeof n)try{Ll(n,i)}catch(e){}e[t]=n}function Ul(e,t,r){Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0})}function Ll(e,t){const r=t.prototype||{};e.prototype=t.prototype=r,Ul(e,"__sentry_original__",t)}function ql(e){return e.__sentry_original__}function Fl(e){if(Sl(e))return{message:e.message,name:e.name,stack:e.stack,...Bl(e)};if(Rl(e)){const t={type:e.type,target:Hl(e.target),currentTarget:Hl(e.currentTarget),...Bl(e)};return"undefined"!=typeof CustomEvent&&wl(e,CustomEvent)&&(t.detail=e.detail),t}return e}function Hl(e){try{return"undefined"!=typeof Element&&wl(e,Element)?xl(e):Object.prototype.toString.call(e)}catch(e){return"<unknown>"}}function Bl(e){if("object"==typeof e&&null!==e){const t={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}return{}}function Wl(e,t=40){const r=Object.keys(Fl(e));if(r.sort(),!r.length)return"[object has no keys]";if(r[0].length>=t)return Nl(r[0],t);for(let e=r.length;e>0;e--){const i=r.slice(0,e).join(", ");if(!(i.length>t))return e===r.length?i:Nl(i,t)}return""}function Gl(e){return Kl(e,new Map)}function Kl(e,t){if(_l(e)){const r=t.get(e);if(void 0!==r)return r;const i={};t.set(e,i);for(const r of Object.keys(e))void 0!==e[r]&&(i[r]=Kl(e[r],t));return i}if(Array.isArray(e)){const r=t.get(e);if(void 0!==r)return r;const i=[];return t.set(e,i),e.forEach((e=>{i.push(Kl(e,t))})),i}return e}let $l;class Ql{constructor(){Ql.prototype.__init.call(this)}static __initStatic(){this.id="FunctionToString"}__init(){this.name=Ql.id}setupOnce(){$l=Function.prototype.toString,Function.prototype.toString=function(...e){const t=ql(this)||this;return $l.apply(t,e)}}}Ql.__initStatic();const Vl=["debug","info","warn","error","log","assert","trace"];function Zl(e){if(!("console"in Pl.n2))return e();const t=Pl.n2.console,r={};Vl.forEach((e=>{const i=t[e]&&t[e].__sentry_original__;e in t&&i&&(r[e]=t[e],t[e]=i)}));try{return e()}finally{Object.keys(r).forEach((e=>{t[e]=r[e]}))}}function Yl(){let e=!1;const t={enable:()=>{e=!0},disable:()=>{e=!1}};return"undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__?Vl.forEach((r=>{t[r]=(...t)=>{e&&Zl((()=>{Pl.n2.console[r](`Sentry Logger [${r}]:`,...t)}))}})):Vl.forEach((e=>{t[e]=()=>{}})),t}let Xl;function Jl(){const e=Pl.n2,t=e.crypto||e.msCrypto;if(t&&t.randomUUID)return t.randomUUID().replace(/-/g,"");const r=t&&t.getRandomValues?()=>t.getRandomValues(new Uint8Array(1))[0]:()=>16*Math.random();return([1e7]+1e3+4e3+8e3+1e11).replace(/[018]/g,(e=>(e^(15&r())>>e/4).toString(16)))}function ed(e){return e.exception&&e.exception.values?e.exception.values[0]:void 0}function td(e){const{message:t,event_id:r}=e;if(t)return t;const i=ed(e);return i?i.type&&i.value?`${i.type}: ${i.value}`:i.type||i.value||r||"<unknown>":r||"<unknown>"}function rd(e,t,r){const i=e.exception=e.exception||{},n=i.values=i.values||[],a=n[0]=n[0]||{};a.value||(a.value=t||""),a.type||(a.type=r||"Error")}function id(e,t){const r=ed(e);if(!r)return;const i=r.mechanism;if(r.mechanism={type:"generic",handled:!0,...i,...t},t&&"data"in t){const e={...i&&i.data,...t.data};r.mechanism.data=e}}function nd(e){if(e&&e.__sentry_captured__)return!0;try{Ul(e,"__sentry_captured__",!0)}catch(e){}return!1}Xl="undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__?(0,Pl.YO)("logger",Yl):Yl();const ad=[/^Script error\.?$/,/^Javascript error: Script error\.? on line 0$/];class od{static __initStatic(){this.id="InboundFilters"}__init(){this.name=od.id}constructor(e={}){this._options=e,od.prototype.__init.call(this)}setupOnce(e,t){const r=e=>{const r=t();if(r){const t=r.getIntegration(od);if(t){const i=r.getClient(),n=i?i.getOptions():{},a=function(e={},t={}){return{allowUrls:[...e.allowUrls||[],...t.allowUrls||[]],denyUrls:[...e.denyUrls||[],...t.denyUrls||[]],ignoreErrors:[...e.ignoreErrors||[],...t.ignoreErrors||[],...ad],ignoreInternal:void 0===e.ignoreInternal||e.ignoreInternal}}(t._options,n);return function(e,t){return t.ignoreInternal&&function(e){try{return"SentryError"===e.exception.values[0].type}catch(e){}return!1}(e)?(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Xl.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${td(e)}`),!0):function(e,t){return!(!t||!t.length)&&function(e){if(e.message)return[e.message];if(e.exception)try{const{type:t="",value:r=""}=e.exception.values&&e.exception.values[0]||{};return[`${r}`,`${t}: ${r}`]}catch(t){return("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Xl.error(`Cannot extract message for event ${td(e)}`),[]}return[]}(e).some((e=>kl(e,t)))}(e,t.ignoreErrors)?(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Xl.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${td(e)}`),!0):function(e,t){if(!t||!t.length)return!1;const r=sd(e);return!!r&&kl(r,t)}(e,t.denyUrls)?(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Xl.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${td(e)}.\nUrl: ${sd(e)}`),!0):!function(e,t){if(!t||!t.length)return!0;const r=sd(e);return!r||kl(r,t)}(e,t.allowUrls)&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Xl.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${td(e)}.\nUrl: ${sd(e)}`),!0)}(e,a)?null:e}}return e};r.id=this.name,e(r)}}function sd(e){try{let t;try{t=e.exception.values[0].stacktrace.frames}catch(e){}return t?function(e=[]){for(let t=e.length-1;t>=0;t--){const r=e[t];if(r&&"<anonymous>"!==r.filename&&"[native code]"!==r.filename)return r.filename||null}return null}(t):null}catch(t){return("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Xl.error(`Cannot extract url for event ${td(e)}`),null}}od.__initStatic();var ud,cd=n(37365),pd=n(99147);function ld(e){return new yd((t=>{t(e)}))}function dd(e){return new yd(((t,r)=>{r(e)}))}!function(e){e[e.PENDING=0]="PENDING",e[e.RESOLVED=1]="RESOLVED",e[e.REJECTED=2]="REJECTED"}(ud||(ud={}));class yd{__init(){this._state=ud.PENDING}__init2(){this._handlers=[]}constructor(e){yd.prototype.__init.call(this),yd.prototype.__init2.call(this),yd.prototype.__init3.call(this),yd.prototype.__init4.call(this),yd.prototype.__init5.call(this),yd.prototype.__init6.call(this);try{e(this._resolve,this._reject)}catch(e){this._reject(e)}}then(e,t){return new yd(((r,i)=>{this._handlers.push([!1,t=>{if(e)try{r(e(t))}catch(e){i(e)}else r(t)},e=>{if(t)try{r(t(e))}catch(e){i(e)}else i(e)}]),this._executeHandlers()}))}catch(e){return this.then((e=>e),e)}finally(e){return new yd(((t,r)=>{let i,n;return this.then((t=>{n=!1,i=t,e&&e()}),(t=>{n=!0,i=t,e&&e()})).then((()=>{n?r(i):t(i)}))}))}__init3(){this._resolve=e=>{this._setResult(ud.RESOLVED,e)}}__init4(){this._reject=e=>{this._setResult(ud.REJECTED,e)}}__init5(){this._setResult=(e,t)=>{this._state===ud.PENDING&&(Ol(t)?t.then(this._resolve,this._reject):(this._state=e,this._value=t,this._executeHandlers()))}}__init6(){this._executeHandlers=()=>{if(this._state===ud.PENDING)return;const e=this._handlers.slice();this._handlers=[],e.forEach((e=>{e[0]||(this._state===ud.RESOLVED&&e[1](this._value),this._state===ud.REJECTED&&e[2](this._value),e[0]=!0)}))}}}function bd(e,t={}){if(t.user&&(!e.ipAddress&&t.user.ip_address&&(e.ipAddress=t.user.ip_address),e.did||t.did||(e.did=t.user.id||t.user.email||t.user.username)),e.timestamp=t.timestamp||(0,cd.ph)(),t.ignoreDuration&&(e.ignoreDuration=t.ignoreDuration),t.sid&&(e.sid=32===t.sid.length?t.sid:Jl()),void 0!==t.init&&(e.init=t.init),!e.did&&t.did&&(e.did=`${t.did}`),"number"==typeof t.started&&(e.started=t.started),e.ignoreDuration)e.duration=void 0;else if("number"==typeof t.duration)e.duration=t.duration;else{const t=e.timestamp-e.started;e.duration=t>=0?t:0}t.release&&(e.release=t.release),t.environment&&(e.environment=t.environment),!e.ipAddress&&t.ipAddress&&(e.ipAddress=t.ipAddress),!e.userAgent&&t.userAgent&&(e.userAgent=t.userAgent),"number"==typeof t.errors&&(e.errors=t.errors),t.status&&(e.status=t.status)}class hd{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={}}static clone(e){const t=new hd;return e&&(t._breadcrumbs=[...e._breadcrumbs],t._tags={...e._tags},t._extra={...e._extra},t._contexts={...e._contexts},t._user=e._user,t._level=e._level,t._span=e._span,t._session=e._session,t._transactionName=e._transactionName,t._fingerprint=e._fingerprint,t._eventProcessors=[...e._eventProcessors],t._requestSession=e._requestSession,t._attachments=[...e._attachments],t._sdkProcessingMetadata={...e._sdkProcessingMetadata}),t}addScopeListener(e){this._scopeListeners.push(e)}addEventProcessor(e){return this._eventProcessors.push(e),this}setUser(e){return this._user=e||{},this._session&&bd(this._session,{user:e}),this._notifyScopeListeners(),this}getUser(){return this._user}getRequestSession(){return this._requestSession}setRequestSession(e){return this._requestSession=e,this}setTags(e){return this._tags={...this._tags,...e},this._notifyScopeListeners(),this}setTag(e,t){return this._tags={...this._tags,[e]:t},this._notifyScopeListeners(),this}setExtras(e){return this._extra={...this._extra,...e},this._notifyScopeListeners(),this}setExtra(e,t){return this._extra={...this._extra,[e]:t},this._notifyScopeListeners(),this}setFingerprint(e){return this._fingerprint=e,this._notifyScopeListeners(),this}setLevel(e){return this._level=e,this._notifyScopeListeners(),this}setTransactionName(e){return this._transactionName=e,this._notifyScopeListeners(),this}setContext(e,t){return null===t?delete this._contexts[e]:this._contexts[e]=t,this._notifyScopeListeners(),this}setSpan(e){return this._span=e,this._notifyScopeListeners(),this}getSpan(){return this._span}getTransaction(){const e=this.getSpan();return e&&e.transaction}setSession(e){return e?this._session=e:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(e){if(!e)return this;if("function"==typeof e){const t=e(this);return t instanceof hd?t:this}return e instanceof hd?(this._tags={...this._tags,...e._tags},this._extra={...this._extra,...e._extra},this._contexts={...this._contexts,...e._contexts},e._user&&Object.keys(e._user).length&&(this._user=e._user),e._level&&(this._level=e._level),e._fingerprint&&(this._fingerprint=e._fingerprint),e._requestSession&&(this._requestSession=e._requestSession)):_l(e)&&(this._tags={...this._tags,...e.tags},this._extra={...this._extra,...e.extra},this._contexts={...this._contexts,...e.contexts},e.user&&(this._user=e.user),e.level&&(this._level=e.level),e.fingerprint&&(this._fingerprint=e.fingerprint),e.requestSession&&(this._requestSession=e.requestSession)),this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._requestSession=void 0,this._span=void 0,this._session=void 0,this._notifyScopeListeners(),this._attachments=[],this}addBreadcrumb(e,t){const r="number"==typeof t?t:100;if(r<=0)return this;const i={timestamp:(0,cd.yW)(),...e};return this._breadcrumbs=[...this._breadcrumbs,i].slice(-r),this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(e){return this._attachments.push(e),this}getAttachments(){return this._attachments}clearAttachments(){return this._attachments=[],this}applyToEvent(e,t={}){if(this._extra&&Object.keys(this._extra).length&&(e.extra={...this._extra,...e.extra}),this._tags&&Object.keys(this._tags).length&&(e.tags={...this._tags,...e.tags}),this._user&&Object.keys(this._user).length&&(e.user={...this._user,...e.user}),this._contexts&&Object.keys(this._contexts).length&&(e.contexts={...this._contexts,...e.contexts}),this._level&&(e.level=this._level),this._transactionName&&(e.transaction=this._transactionName),this._span){e.contexts={trace:this._span.getTraceContext(),...e.contexts};const t=this._span.transaction&&this._span.transaction.name;t&&(e.tags={transaction:t,...e.tags})}return this._applyFingerprint(e),e.breadcrumbs=[...e.breadcrumbs||[],...this._breadcrumbs],e.breadcrumbs=e.breadcrumbs.length>0?e.breadcrumbs:void 0,e.sdkProcessingMetadata={...e.sdkProcessingMetadata,...this._sdkProcessingMetadata},this._notifyEventProcessors([...gd(),...this._eventProcessors],e,t)}setSDKProcessingMetadata(e){return this._sdkProcessingMetadata={...this._sdkProcessingMetadata,...e},this}_notifyEventProcessors(e,t,r,i=0){return new yd(((n,a)=>{const o=e[i];if(null===t||"function"!=typeof o)n(t);else{const s=o({...t},r);("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&o.id&&null===s&&Xl.log(`Event processor "${o.id}" dropped event`),Ol(s)?s.then((t=>this._notifyEventProcessors(e,t,r,i+1).then(n))).then(null,a):this._notifyEventProcessors(e,s,r,i+1).then(n).then(null,a)}}))}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach((e=>{e(this)})),this._notifyingListeners=!1)}_applyFingerprint(e){var t;e.fingerprint=e.fingerprint?(t=e.fingerprint,Array.isArray(t)?t:[t]):[],this._fingerprint&&(e.fingerprint=e.fingerprint.concat(this._fingerprint)),e.fingerprint&&!e.fingerprint.length&&delete e.fingerprint}}function gd(){return(0,Pl.YO)("globalEventProcessors",(()=>[]))}function fd(e){gd().push(e)}const md=4,Sd=100;class vd{__init(){this._stack=[{}]}constructor(e,t=new hd,r=md){this._version=r,vd.prototype.__init.call(this),this.getStackTop().scope=t,e&&this.bindClient(e)}isOlderThan(e){return this._version<e}bindClient(e){this.getStackTop().client=e,e&&e.setupIntegrations&&e.setupIntegrations()}pushScope(){const e=hd.clone(this.getScope());return this.getStack().push({client:this.getClient(),scope:e}),e}popScope(){return!(this.getStack().length<=1||!this.getStack().pop())}withScope(e){const t=this.pushScope();try{e(t)}finally{this.popScope()}}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getStack(){return this._stack}getStackTop(){return this._stack[this._stack.length-1]}captureException(e,t){const r=this._lastEventId=t&&t.event_id?t.event_id:Jl(),i=new Error("Sentry syntheticException");return this._withClient(((n,a)=>{n.captureException(e,{originalException:e,syntheticException:i,...t,event_id:r},a)})),r}captureMessage(e,t,r){const i=this._lastEventId=r&&r.event_id?r.event_id:Jl(),n=new Error(e);return this._withClient(((a,o)=>{a.captureMessage(e,t,{originalException:e,syntheticException:n,...r,event_id:i},o)})),i}captureEvent(e,t){const r=t&&t.event_id?t.event_id:Jl();return"transaction"!==e.type&&(this._lastEventId=r),this._withClient(((i,n)=>{i.captureEvent(e,{...t,event_id:r},n)})),r}lastEventId(){return this._lastEventId}addBreadcrumb(e,t){const{scope:r,client:i}=this.getStackTop();if(!r||!i)return;const{beforeBreadcrumb:n=null,maxBreadcrumbs:a=Sd}=i.getOptions&&i.getOptions()||{};if(a<=0)return;const o={timestamp:(0,cd.yW)(),...e},s=n?Zl((()=>n(o,t))):o;null!==s&&r.addBreadcrumb(s,a)}setUser(e){const t=this.getScope();t&&t.setUser(e)}setTags(e){const t=this.getScope();t&&t.setTags(e)}setExtras(e){const t=this.getScope();t&&t.setExtras(e)}setTag(e,t){const r=this.getScope();r&&r.setTag(e,t)}setExtra(e,t){const r=this.getScope();r&&r.setExtra(e,t)}setContext(e,t){const r=this.getScope();r&&r.setContext(e,t)}configureScope(e){const{scope:t,client:r}=this.getStackTop();t&&r&&e(t)}run(e){const t=Cd(this);try{e(this)}finally{Cd(t)}}getIntegration(e){const t=this.getClient();if(!t)return null;try{return t.getIntegration(e)}catch(t){return("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Xl.warn(`Cannot retrieve integration ${e.id} from the current Hub`),null}}startTransaction(e,t){return this._callExtensionMethod("startTransaction",e,t)}traceHeaders(){return this._callExtensionMethod("traceHeaders")}captureSession(e=!1){if(e)return this.endSession();this._sendSessionUpdate()}endSession(){const e=this.getStackTop(),t=e&&e.scope,r=t&&t.getSession();r&&function(e,t){let r={};"ok"===e.status&&(r={status:"exited"}),bd(e,r)}(r),this._sendSessionUpdate(),t&&t.setSession()}startSession(e){const{scope:t,client:r}=this.getStackTop(),{release:i,environment:n}=r&&r.getOptions()||{},{userAgent:a}=Pl.n2.navigator||{},o=function(e){const t=(0,cd.ph)(),r={sid:Jl(),init:!0,timestamp:t,started:t,duration:0,status:"ok",errors:0,ignoreDuration:!1,toJSON:()=>function(e){return Gl({sid:`${e.sid}`,init:e.init,started:new Date(1e3*e.started).toISOString(),timestamp:new Date(1e3*e.timestamp).toISOString(),status:e.status,errors:e.errors,did:"number"==typeof e.did||"string"==typeof e.did?`${e.did}`:void 0,duration:e.duration,attrs:{release:e.release,environment:e.environment,ip_address:e.ipAddress,user_agent:e.userAgent}})}(r)};return e&&bd(r,e),r}({release:i,environment:n,...t&&{user:t.getUser()},...a&&{userAgent:a},...e});if(t){const e=t.getSession&&t.getSession();e&&"ok"===e.status&&bd(e,{status:"exited"}),this.endSession(),t.setSession(o)}return o}shouldSendDefaultPii(){const e=this.getClient(),t=e&&e.getOptions();return Boolean(t&&t.sendDefaultPii)}_sendSessionUpdate(){const{scope:e,client:t}=this.getStackTop();if(!e)return;const r=e.getSession();r&&t&&t.captureSession&&t.captureSession(r)}_withClient(e){const{scope:t,client:r}=this.getStackTop();r&&e(r,t)}_callExtensionMethod(e,...t){const r=Ad().__SENTRY__;if(r&&r.extensions&&"function"==typeof r.extensions[e])return r.extensions[e].apply(this,t);("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Xl.warn(`Extension method ${e} couldn't be found, doing nothing.`)}}function Ad(){return Pl.n2.__SENTRY__=Pl.n2.__SENTRY__||{extensions:{},hub:void 0},Pl.n2}function Cd(e){const t=Ad(),r=_d(t);return Rd(t,e),r}function Md(){const e=Ad();return Td(e)&&!_d(e).isOlderThan(md)||Rd(e,new vd),(0,pd.KV)()?function(e){try{const t=Ad().__SENTRY__,r=t&&t.extensions&&t.extensions.domain&&t.extensions.domain.active;if(!r)return _d(e);if(!Td(r)||_d(r).isOlderThan(md)){const t=_d(e).getStackTop();Rd(r,new vd(t.client,hd.clone(t.scope)))}return _d(r)}catch(t){return _d(e)}}(e):_d(e)}function Td(e){return!!(e&&e.__SENTRY__&&e.__SENTRY__.hub)}function _d(e){return(0,Pl.YO)("hub",(()=>new vd),e)}function Rd(e,t){return!!e&&((e.__SENTRY__=e.__SENTRY__||{}).hub=t,!0)}const Od=Pl.n2;let wd=0;function Pd(){return wd>0}function jd(e,t={},r){if("function"!=typeof e)return e;try{const t=e.__sentry_wrapped__;if(t)return t;if(ql(e))return e}catch(t){return e}const i=function(){const i=Array.prototype.slice.call(arguments);try{r&&"function"==typeof r&&r.apply(this,arguments);const n=i.map((e=>jd(e,t)));return e.apply(this,n)}catch(e){throw wd++,setTimeout((()=>{wd--})),n=r=>{var n;r.addEventProcessor((e=>(t.mechanism&&(rd(e,void 0,void 0),id(e,t.mechanism)),e.extra={...e.extra,arguments:i},e))),n=e,Md().captureException(n,{captureContext:undefined})},Md().withScope(n),e}var n};try{for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(i[t]=e[t])}catch(e){}Ll(i,e),Ul(e,"__sentry_wrapped__",i);try{Object.getOwnPropertyDescriptor(i,"name").configurable&&Object.defineProperty(i,"name",{get(){return e.name}})}catch(e){}return i}const zd="<anonymous>";function xd(e){try{return e&&"function"==typeof e&&e.name||zd}catch(e){return zd}}const Id=(0,Pl.Rf)();function Nd(e){return e&&/^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())}const Ed=(0,Pl.Rf)(),kd={},Dd={};function Ud(e){if(!Dd[e])switch(Dd[e]=!0,e){case"console":"console"in Ed&&Vl.forEach((function(e){e in Ed.console&&Dl(Ed.console,e,(function(t){return function(...r){qd("console",{args:r,level:e}),t&&t.apply(Ed.console,r)}}))}));break;case"dom":!function(){if(!("document"in Ed))return;const e=qd.bind(null,"dom"),t=$d(e,!0);Ed.document.addEventListener("click",t,!1),Ed.document.addEventListener("keypress",t,!1),["EventTarget","Node"].forEach((t=>{const r=Ed[t]&&Ed[t].prototype;r&&r.hasOwnProperty&&r.hasOwnProperty("addEventListener")&&(Dl(r,"addEventListener",(function(t){return function(r,i,n){if("click"===r||"keypress"==r)try{const i=this,a=i.__sentry_instrumentation_handlers__=i.__sentry_instrumentation_handlers__||{},o=a[r]=a[r]||{refCount:0};if(!o.handler){const i=$d(e);o.handler=i,t.call(this,r,i,n)}o.refCount++}catch(e){}return t.call(this,r,i,n)}})),Dl(r,"removeEventListener",(function(e){return function(t,r,i){if("click"===t||"keypress"==t)try{const r=this,n=r.__sentry_instrumentation_handlers__||{},a=n[t];a&&(a.refCount--,a.refCount<=0&&(e.call(this,t,a.handler,i),a.handler=void 0,delete n[t]),0===Object.keys(n).length&&delete r.__sentry_instrumentation_handlers__)}catch(e){}return e.call(this,t,r,i)}})))}))}();break;case"xhr":!function(){if(!("XMLHttpRequest"in Ed))return;const e=XMLHttpRequest.prototype;Dl(e,"open",(function(e){return function(...t){const r=this,i=t[1],n=r.__sentry_xhr__={method:Ml(t[0])?t[0].toUpperCase():t[0],url:t[1]};Ml(i)&&"POST"===n.method&&i.match(/sentry_key/)&&(r.__sentry_own_request__=!0);const a=function(){if(4===r.readyState){try{n.status_code=r.status}catch(e){}qd("xhr",{args:t,endTimestamp:Date.now(),startTimestamp:Date.now(),xhr:r})}};return"onreadystatechange"in r&&"function"==typeof r.onreadystatechange?Dl(r,"onreadystatechange",(function(e){return function(...t){return a(),e.apply(r,t)}})):r.addEventListener("readystatechange",a),e.apply(r,t)}})),Dl(e,"send",(function(e){return function(...t){return this.__sentry_xhr__&&void 0!==t[0]&&(this.__sentry_xhr__.body=t[0]),qd("xhr",{args:t,startTimestamp:Date.now(),xhr:this}),e.apply(this,t)}}))}();break;case"fetch":(function(){if(!function(){if(!("fetch"in Id))return!1;try{return new Headers,new Request("http://www.example.com"),new Response,!0}catch(e){return!1}}())return!1;if(Nd(Id.fetch))return!0;let e=!1;const t=Id.document;if(t&&"function"==typeof t.createElement)try{const r=t.createElement("iframe");r.hidden=!0,t.head.appendChild(r),r.contentWindow&&r.contentWindow.fetch&&(e=Nd(r.contentWindow.fetch)),t.head.removeChild(r)}catch(e){("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Xl.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",e)}return e})()&&Dl(Ed,"fetch",(function(e){return function(...t){const r={args:t,fetchData:{method:Fd(t),url:Hd(t)},startTimestamp:Date.now()};return qd("fetch",{...r}),e.apply(Ed,t).then((e=>(qd("fetch",{...r,endTimestamp:Date.now(),response:e}),e)),(e=>{throw qd("fetch",{...r,endTimestamp:Date.now(),error:e}),e}))}}));break;case"history":!function(){if(!function(){const e=Id.chrome,t=e&&e.app&&e.app.runtime,r="history"in Id&&!!Id.history.pushState&&!!Id.history.replaceState;return!t&&r}())return;const e=Ed.onpopstate;function t(e){return function(...t){const r=t.length>2?t[2]:void 0;if(r){const e=Bd,t=String(r);Bd=t,qd("history",{from:e,to:t})}return e.apply(this,t)}}Ed.onpopstate=function(...t){const r=Ed.location.href,i=Bd;if(Bd=r,qd("history",{from:i,to:r}),e)try{return e.apply(this,t)}catch(e){}},Dl(Ed.history,"pushState",t),Dl(Ed.history,"replaceState",t)}();break;case"error":Qd=Ed.onerror,Ed.onerror=function(e,t,r,i,n){return qd("error",{column:i,error:n,line:r,msg:e,url:t}),!!Qd&&Qd.apply(this,arguments)};break;case"unhandledrejection":Vd=Ed.onunhandledrejection,Ed.onunhandledrejection=function(e){return qd("unhandledrejection",e),!Vd||Vd.apply(this,arguments)};break;default:return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Xl.warn("unknown instrumentation type:",e))}}function Ld(e,t){kd[e]=kd[e]||[],kd[e].push(t),Ud(e)}function qd(e,t){if(e&&kd[e])for(const r of kd[e]||[])try{r(t)}catch(t){("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Xl.error(`Error while triggering instrumentation handler.\nType: ${e}\nName: ${xd(r)}\nError:`,t)}}function Fd(e=[]){return"Request"in Ed&&wl(e[0],Request)&&e[0].method?String(e[0].method).toUpperCase():e[1]&&e[1].method?String(e[1].method).toUpperCase():"GET"}function Hd(e=[]){return"string"==typeof e[0]?e[0]:"Request"in Ed&&wl(e[0],Request)?e[0].url:String(e[0])}let Bd;const Wd=1e3;let Gd,Kd;function $d(e,t=!1){return r=>{if(!r||Kd===r)return;if(function(e){if("keypress"!==e.type)return!1;try{const t=e.target;if(!t||!t.tagName)return!0;if("INPUT"===t.tagName||"TEXTAREA"===t.tagName||t.isContentEditable)return!1}catch(e){}return!0}(r))return;const i="keypress"===r.type?"input":r.type;(void 0===Gd||function(e,t){if(!e)return!0;if(e.type!==t.type)return!0;try{if(e.target!==t.target)return!0}catch(e){}return!1}(Kd,r))&&(e({event:r,name:i,global:t}),Kd=r),clearTimeout(Gd),Gd=Ed.setTimeout((()=>{Gd=void 0}),Wd)}}let Qd=null,Vd=null;function Zd(e,t=1/0,r=1/0){try{return Xd("",e,t,r)}catch(e){return{ERROR:`**non-serializable** (${e})`}}}function Yd(e,t=3,r=102400){const i=Zd(e,t);return n=i,function(e){return~-encodeURI(e).split(/%..|./).length}(JSON.stringify(n))>r?Yd(e,t-1,r):i;var n}function Xd(e,t,r=1/0,i=1/0,a=function(){const e="function"==typeof WeakSet,t=e?new WeakSet:[];return[function(r){if(e)return!!t.has(r)||(t.add(r),!1);for(let e=0;e<t.length;e++)if(t[e]===r)return!0;return t.push(r),!1},function(r){if(e)t.delete(r);else for(let e=0;e<t.length;e++)if(t[e]===r){t.splice(e,1);break}}]}()){const[o,s]=a;if(null===t||["number","boolean","string"].includes(typeof t)&&("number"!=typeof(u=t)||u==u))return t;var u;const c=function(e,t){try{return"domain"===e&&t&&"object"==typeof t&&t._events?"[Domain]":"domainEmitter"===e?"[DomainEmitter]":void 0!==n.g&&t===n.g?"[Global]":"undefined"!=typeof window&&t===window?"[Window]":"undefined"!=typeof document&&t===document?"[Document]":function(e){return _l(e)&&"nativeEvent"in e&&"preventDefault"in e&&"stopPropagation"in e}(t)?"[SyntheticEvent]":"number"==typeof t&&t!=t?"[NaN]":void 0===t?"[undefined]":"function"==typeof t?`[Function: ${xd(t)}]`:"symbol"==typeof t?`[${String(t)}]`:"bigint"==typeof t?`[BigInt: ${String(t)}]`:`[object ${Object.getPrototypeOf(t).constructor.name}]`}catch(e){return`**non-serializable** (${e})`}}(e,t);if(!c.startsWith("[object "))return c;if(t.__sentry_skip_normalization__)return t;if(0===r)return c.replace("object ","");if(o(t))return"[Circular ~]";const p=t;if(p&&"function"==typeof p.toJSON)try{return Xd("",p.toJSON(),r-1,i,a)}catch(e){}const l=Array.isArray(t)?[]:{};let d=0;const y=Fl(t);for(const e in y){if(!Object.prototype.hasOwnProperty.call(y,e))continue;if(d>=i){l[e]="[MaxProperties ~]";break}const t=y[e];l[e]=Xd(e,t,r-1,i,a),d++}return s(t),l}function Jd(e,t){const r=ty(e,t),i={type:t&&t.name,value:iy(t)};return r.length&&(i.stacktrace={frames:r}),void 0===i.type&&""===i.value&&(i.value="Unrecoverable error caught"),i}function ey(e,t){return{exception:{values:[Jd(e,t)]}}}function ty(e,t){const r=t.stacktrace||t.stack||"",i=function(e){if(e){if("number"==typeof e.framesToPop)return e.framesToPop;if(ry.test(e.message))return 1}return 0}(t);try{return e(r,i)}catch(e){}return[]}const ry=/Minified React error #\d+;/i;function iy(e){const t=e&&e.message;return t?t.error&&"string"==typeof t.error.message?t.error.message:t:"No error message"}function ny(e,t,r,i,n){let a;if(Al(t)&&t.error)return ey(e,t.error);if(Cl(t)||vl(t,"DOMException")){const n=t;if("stack"in t)a=ey(e,t);else{const t=n.name||(Cl(n)?"DOMError":"DOMException"),o=n.message?`${t}: ${n.message}`:t;a=ay(e,o,r,i),rd(a,o)}return"code"in n&&(a.tags={...a.tags,"DOMException.code":`${n.code}`}),a}return Sl(t)?ey(e,t):_l(t)||Rl(t)?(a=function(e,t,r,i){const n=Md().getClient(),a=n&&n.getOptions().normalizeDepth,o={exception:{values:[{type:Rl(t)?t.constructor.name:i?"UnhandledRejection":"Error",value:`Non-Error ${i?"promise rejection":"exception"} captured with keys: ${Wl(t)}`}]},extra:{__serialized__:Yd(t,a)}};if(r){const t=ty(e,r);t.length&&(o.exception.values[0].stacktrace={frames:t})}return o}(e,t,r,n),id(a,{synthetic:!0}),a):(a=ay(e,t,r,i),rd(a,`${t}`,void 0),id(a,{synthetic:!0}),a)}function ay(e,t,r,i){const n={message:t};if(i&&r){const i=ty(e,r);i.length&&(n.exception={values:[{value:t,stacktrace:{frames:i}}]})}return n}class oy{static __initStatic(){this.id="GlobalHandlers"}__init(){this.name=oy.id}__init2(){this._installFunc={onerror:sy,onunhandledrejection:uy}}constructor(e){oy.prototype.__init.call(this),oy.prototype.__init2.call(this),this._options={onerror:!0,onunhandledrejection:!0,...e}}setupOnce(){Error.stackTraceLimit=50;const e=this._options;for(const r in e){const i=this._installFunc[r];i&&e[r]&&(t=r,("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Xl.log(`Global Handler attached: ${t}`),i(),this._installFunc[r]=void 0)}var t}}function sy(){Ld("error",(e=>{const[t,r,i]=ly();if(!t.getIntegration(oy))return;const{msg:n,url:a,line:o,column:s,error:u}=e;if(Pd()||u&&u.__sentry_own_request__)return;const c=void 0===u&&Ml(n)?function(e,t,r,i){let n=Al(e)?e.message:e,a="Error";const o=n.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);o&&(a=o[1],n=o[2]);return cy({exception:{values:[{type:a,value:n}]}},t,r,i)}(n,a,o,s):cy(ny(r,u||n,void 0,i,!1),a,o,s);c.level="error",py(t,u,c,"onerror")}))}function uy(){Ld("unhandledrejection",(e=>{const[t,r,i]=ly();if(!t.getIntegration(oy))return;let n=e;try{"reason"in e?n=e.reason:"detail"in e&&"reason"in e.detail&&(n=e.detail.reason)}catch(e){}if(Pd()||n&&n.__sentry_own_request__)return!0;const a=Tl(n)?{exception:{values:[{type:"UnhandledRejection",value:`Non-Error promise rejection captured with value: ${String(n)}`}]}}:ny(r,n,void 0,i,!0);a.level="error",py(t,n,a,"onunhandledrejection")}))}function cy(e,t,r,i){const n=e.exception=e.exception||{},a=n.values=n.values||[],o=a[0]=a[0]||{},s=o.stacktrace=o.stacktrace||{},u=s.frames=s.frames||[],c=isNaN(parseInt(i,10))?void 0:i,p=isNaN(parseInt(r,10))?void 0:r,l=Ml(t)&&t.length>0?t:function(){try{return jl.document.location.href}catch(e){return""}}();return 0===u.length&&u.push({colno:c,filename:l,function:"?",in_app:!0,lineno:p}),e}function py(e,t,r,i){id(r,{handled:!1,type:i}),e.captureEvent(r,{originalException:t})}function ly(){const e=Md(),t=e.getClient(),r=t&&t.getOptions()||{stackParser:()=>[],attachStacktrace:!1};return[e,r.stackParser,r.attachStacktrace]}oy.__initStatic();const dy=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"];class yy{static __initStatic(){this.id="TryCatch"}__init(){this.name=yy.id}constructor(e){yy.prototype.__init.call(this),this._options={XMLHttpRequest:!0,eventTarget:!0,requestAnimationFrame:!0,setInterval:!0,setTimeout:!0,...e}}setupOnce(){this._options.setTimeout&&Dl(Od,"setTimeout",by),this._options.setInterval&&Dl(Od,"setInterval",by),this._options.requestAnimationFrame&&Dl(Od,"requestAnimationFrame",hy),this._options.XMLHttpRequest&&"XMLHttpRequest"in Od&&Dl(XMLHttpRequest.prototype,"send",gy);const e=this._options.eventTarget;e&&(Array.isArray(e)?e:dy).forEach(fy)}}function by(e){return function(...t){const r=t[0];return t[0]=jd(r,{mechanism:{data:{function:xd(e)},handled:!0,type:"instrument"}}),e.apply(this,t)}}function hy(e){return function(t){return e.apply(this,[jd(t,{mechanism:{data:{function:"requestAnimationFrame",handler:xd(e)},handled:!0,type:"instrument"}})])}}function gy(e){return function(...t){const r=this;return["onload","onerror","onprogress","onreadystatechange"].forEach((e=>{e in r&&"function"==typeof r[e]&&Dl(r,e,(function(t){const r={mechanism:{data:{function:e,handler:xd(t)},handled:!0,type:"instrument"}},i=ql(t);return i&&(r.mechanism.data.handler=xd(i)),jd(t,r)}))})),e.apply(this,t)}}function fy(e){const t=Od,r=t[e]&&t[e].prototype;r&&r.hasOwnProperty&&r.hasOwnProperty("addEventListener")&&(Dl(r,"addEventListener",(function(t){return function(r,i,n){try{"function"==typeof i.handleEvent&&(i.handleEvent=jd(i.handleEvent,{mechanism:{data:{function:"handleEvent",handler:xd(i),target:e},handled:!0,type:"instrument"}}))}catch(e){}return t.apply(this,[r,jd(i,{mechanism:{data:{function:"addEventListener",handler:xd(i),target:e},handled:!0,type:"instrument"}}),n])}})),Dl(r,"removeEventListener",(function(e){return function(t,r,i){const n=r;try{const r=n&&n.__sentry_wrapped__;r&&e.call(this,t,r,i)}catch(e){}return e.call(this,t,n,i)}})))}yy.__initStatic();const my=["fatal","error","warning","log","info","debug"];function Sy(e){if(!e)return{};const t=e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);if(!t)return{};const r=t[6]||"",i=t[8]||"";return{host:t[4],path:t[5],protocol:t[2],relative:t[5]+r+i}}const vy="Breadcrumbs";class Ay{static __initStatic(){this.id=vy}__init(){this.name=Ay.id}constructor(e){Ay.prototype.__init.call(this),this.options={console:!0,dom:!0,fetch:!0,history:!0,sentry:!0,xhr:!0,...e}}setupOnce(){var e;this.options.console&&Ld("console",Cy),this.options.dom&&Ld("dom",(e=this.options.dom,function(t){let r,i="object"==typeof e?e.serializeAttribute:void 0,n="object"==typeof e&&"number"==typeof e.maxStringLength?e.maxStringLength:void 0;n&&n>1024&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Xl.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${n} was configured. Sentry will use 1024 instead.`),n=1024),"string"==typeof i&&(i=[i]);try{r=t.event.target?xl(t.event.target,{keyAttrs:i,maxStringLength:n}):xl(t.event,{keyAttrs:i,maxStringLength:n})}catch(e){r="<unknown>"}0!==r.length&&Md().addBreadcrumb({category:`ui.${t.name}`,message:r},{event:t.event,name:t.name,global:t.global})})),this.options.xhr&&Ld("xhr",My),this.options.fetch&&Ld("fetch",Ty),this.options.history&&Ld("history",_y)}addSentryBreadcrumb(e){this.options.sentry&&Md().addBreadcrumb({category:"sentry."+("transaction"===e.type?"transaction":"event"),event_id:e.event_id,level:e.level,message:td(e)},{event:e})}}function Cy(e){for(let t=0;t<e.args.length;t++)if("ref=Ref<"===e.args[t]){e.args[t+1]="viewRef";break}const t={category:"console",data:{arguments:e.args,logger:"console"},level:(r=e.level,"warn"===r?"warning":my.includes(r)?r:"log"),message:El(e.args," ")};var r;if("assert"===e.level){if(!1!==e.args[0])return;t.message=`Assertion failed: ${El(e.args.slice(1)," ")||"console.assert"}`,t.data.arguments=e.args.slice(1)}Md().addBreadcrumb(t,{input:e.args,level:e.level})}function My(e){if(e.endTimestamp){if(e.xhr.__sentry_own_request__)return;const{method:t,url:r,status_code:i,body:n}=e.xhr.__sentry_xhr__||{};Md().addBreadcrumb({category:"xhr",data:{method:t,url:r,status_code:i},type:"http"},{xhr:e.xhr,input:n})}}function Ty(e){e.endTimestamp&&(e.fetchData.url.match(/sentry_key/)&&"POST"===e.fetchData.method||(e.error?Md().addBreadcrumb({category:"fetch",data:e.fetchData,level:"error",type:"http"},{data:e.error,input:e.args}):Md().addBreadcrumb({category:"fetch",data:{...e.fetchData,status_code:e.response.status},type:"http"},{input:e.args,response:e.response})))}function _y(e){let t=e.from,r=e.to;const i=Sy(Od.location.href);let n=Sy(t);const a=Sy(r);n.path||(n=i),i.protocol===a.protocol&&i.host===a.host&&(r=a.relative),i.protocol===n.protocol&&i.host===n.host&&(t=n.relative),Md().addBreadcrumb({category:"navigation",data:{from:t,to:r}})}Ay.__initStatic();class Ry{static __initStatic(){this.id="LinkedErrors"}__init(){this.name=Ry.id}constructor(e={}){Ry.prototype.__init.call(this),this._key=e.key||"cause",this._limit=e.limit||5}setupOnce(){const e=Md().getClient();e&&fd(((t,r)=>{const i=Md().getIntegration(Ry);return i?function(e,t,r,i,n){if(!(i.exception&&i.exception.values&&n&&wl(n.originalException,Error)))return i;const a=Oy(e,r,n.originalException,t);return i.exception.values=[...a,...i.exception.values],i}(e.getOptions().stackParser,i._key,i._limit,t,r):t}))}}function Oy(e,t,r,i,n=[]){if(!wl(r[i],Error)||n.length+1>=t)return n;const a=Jd(e,r[i]);return Oy(e,t,r[i],i,[a,...n])}Ry.__initStatic();class wy{constructor(){wy.prototype.__init.call(this)}static __initStatic(){this.id="HttpContext"}__init(){this.name=wy.id}setupOnce(){fd((e=>{if(Md().getIntegration(wy)){if(!Od.navigator&&!Od.location&&!Od.document)return e;const t=e.request&&e.request.url||Od.location&&Od.location.href,{referrer:r}=Od.document||{},{userAgent:i}=Od.navigator||{},n={...t&&{url:t},headers:{...e.request&&e.request.headers,...r&&{Referer:r},...i&&{"User-Agent":i}}};return{...e,request:n}}return e}))}}wy.__initStatic();class Py{constructor(){Py.prototype.__init.call(this)}static __initStatic(){this.id="Dedupe"}__init(){this.name=Py.id}setupOnce(e,t){const r=e=>{const r=t().getIntegration(Py);if(r){try{if(function(e,t){return!!t&&(!!function(e,t){const r=e.message,i=t.message;return!(!r&&!i)&&(!(r&&!i||!r&&i)&&(r===i&&(!!zy(e,t)&&!!jy(e,t))))}(e,t)||!!function(e,t){const r=xy(t),i=xy(e);return!(!r||!i)&&(r.type===i.type&&r.value===i.value&&(!!zy(e,t)&&!!jy(e,t)))}(e,t))}(e,r._previousEvent))return("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Xl.warn("Event dropped due to being a duplicate of previously captured event."),null}catch(t){return r._previousEvent=e}return r._previousEvent=e}return e};r.id=this.name,e(r)}}function jy(e,t){let r=Iy(e),i=Iy(t);if(!r&&!i)return!0;if(r&&!i||!r&&i)return!1;if(i.length!==r.length)return!1;for(let e=0;e<i.length;e++){const t=i[e],n=r[e];if(t.filename!==n.filename||t.lineno!==n.lineno||t.colno!==n.colno||t.function!==n.function)return!1}return!0}function zy(e,t){let r=e.fingerprint,i=t.fingerprint;if(!r&&!i)return!0;if(r&&!i||!r&&i)return!1;try{return!(r.join("")!==i.join(""))}catch(e){return!1}}function xy(e){return e.exception&&e.exception.values&&e.exception.values[0]}function Iy(e){const t=e.exception;if(t)try{return t.values[0].stacktrace.frames}catch(e){return}}Py.__initStatic();let Ny={};Od.Sentry&&Od.Sentry.Integrations&&(Ny=Od.Sentry.Integrations);const Ey={...Ny,...e,...t};class ky extends Error{constructor(e,t="warn"){super(e),this.message=e,this.name=new.target.prototype.constructor.name,Object.setPrototypeOf(this,new.target.prototype),this.logLevel=t}}const Dy=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;function Uy(e,t=!1){const{host:r,path:i,pass:n,port:a,projectId:o,protocol:s,publicKey:u}=e;return`${s}://${u}${t&&n?`:${n}`:""}@${r}${a?`:${a}`:""}/${i?`${i}/`:i}${o}`}function Ly(e){return{protocol:e.protocol,publicKey:e.publicKey||"",pass:e.pass||"",host:e.host,port:e.port||"",path:e.path||"",projectId:e.projectId}}function qy(e,t=[]){return[e,t]}function Fy(e,t){const[r,i]=e;return[r,[...i,t]]}function Hy(e,t){e[1].forEach((e=>{const r=e[0].type;t(e,r)}))}function By(e,t){return(t||new TextEncoder).encode(e)}function Wy(e,t){const[r,i]=e;let n=JSON.stringify(r);function a(e){"string"==typeof n?n="string"==typeof e?n+e:[By(n,t),e]:n.push("string"==typeof e?By(e,t):e)}for(const e of i){const[t,r]=e;if(a(`\n${JSON.stringify(t)}\n`),"string"==typeof r||r instanceof Uint8Array)a(r);else{let e;try{e=JSON.stringify(r)}catch(t){e=JSON.stringify(Zd(r))}a(e)}}return"string"==typeof n?n:function(e){const t=e.reduce(((e,t)=>e+t.length),0),r=new Uint8Array(t);let i=0;for(const t of e)r.set(t,i),i+=t.length;return r}(n)}function Gy(e,t){const r="string"==typeof e.data?By(e.data,t):e.data;return[Gl({type:"attachment",length:r.length,filename:e.filename,content_type:e.contentType,attachment_type:e.attachmentType}),r]}const Ky={session:"session",sessions:"session",attachment:"attachment",transaction:"transaction",event:"error",client_report:"internal",user_report:"default",profile:"profile"};function $y(e){return Ky[e]}function Qy(e){if(!e||!e.sdk)return;const{name:t,version:r}=e.sdk;return{name:t,version:r}}const Vy=6e4;const Zy=30;function Yy(e,t,r=function(e){const t=[];function r(e){return t.splice(t.indexOf(e),1)[0]}return{$:t,add:function(i){if(!(void 0===e||t.length<e))return dd(new ky("Not adding Promise because buffer limit was reached."));const n=i();return-1===t.indexOf(n)&&t.push(n),n.then((()=>r(n))).then(null,(()=>r(n).then(null,(()=>{})))),n},drain:function(e){return new yd(((r,i)=>{let n=t.length;if(!n)return r(!0);const a=setTimeout((()=>{e&&e>0&&r(!1)}),e);t.forEach((e=>{ld(e).then((()=>{--n||(clearTimeout(a),r(!0))}),i)}))}))}}}(e.bufferSize||Zy)){let i={};return{send:function(n){const a=[];if(Hy(n,((t,r)=>{const n=$y(r);if(function(e,t,r=Date.now()){return function(e,t){return e[t]||e.all||0}(e,t)>r}(i,n)){const i=Xy(t,r);e.recordDroppedEvent("ratelimit_backoff",n,i)}else a.push(t)})),0===a.length)return ld();const o=qy(n[0],a),s=t=>{Hy(o,((r,i)=>{const n=Xy(r,i);e.recordDroppedEvent(t,$y(i),n)}))};return r.add((()=>t({body:Wy(o,e.textEncoder)}).then((e=>{void 0!==e.statusCode&&(e.statusCode<200||e.statusCode>=300)&&("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Xl.warn(`Sentry responded with status code ${e.statusCode} to sent event.`),i=function(e,{statusCode:t,headers:r},i=Date.now()){const n={...e},a=r&&r["x-sentry-rate-limits"],o=r&&r["retry-after"];if(a)for(const e of a.trim().split(",")){const[t,r]=e.split(":",2),a=parseInt(t,10),o=1e3*(isNaN(a)?60:a);if(r)for(const e of r.split(";"))n[e]=i+o;else n.all=i+o}else o?n.all=i+function(e,t=Date.now()){const r=parseInt(`${e}`,10);if(!isNaN(r))return 1e3*r;const i=Date.parse(`${e}`);return isNaN(i)?Vy:i-t}(o,i):429===t&&(n.all=i+6e4);return n}(i,e)}),(e=>{("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Xl.error("Failed while sending event:",e),s("network_error")})))).then((e=>e),(e=>{if(e instanceof ky)return("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Xl.error("Skipped sending event because buffer is full."),s("queue_overflow"),ld();throw e}))},flush:e=>r.drain(e)}}function Xy(e,t){if("event"===t||"transaction"===t)return Array.isArray(e)?e[1]:void 0}let Jy;function eb(e,t=function(){if(Jy)return Jy;if(Nd(Od.fetch))return Jy=Od.fetch.bind(Od);const e=Od.document;let t=Od.fetch;if(e&&"function"==typeof e.createElement)try{const r=e.createElement("iframe");r.hidden=!0,e.head.appendChild(r);const i=r.contentWindow;i&&i.fetch&&(t=i.fetch),e.head.removeChild(r)}catch(e){("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Xl.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",e)}return Jy=t.bind(Od)}()){return Yy(e,(function(r){const i={body:r.body,method:"POST",referrerPolicy:"origin",headers:e.headers,keepalive:r.body.length<=65536,...e.fetchOptions};try{return t(e.url,i).then((e=>({statusCode:e.status,headers:{"x-sentry-rate-limits":e.headers.get("X-Sentry-Rate-Limits"),"retry-after":e.headers.get("Retry-After")}})))}catch(e){return Jy=void 0,dd(e)}}))}const tb="?";function rb(e,t,r,i){const n={filename:e,function:t,in_app:!0};return void 0!==r&&(n.lineno=r),void 0!==i&&(n.colno=i),n}const ib=/^\s*at (?:(.*\).*?|.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,nb=/\((\S*)(?::(\d+))(?::(\d+))\)/,ab=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,ob=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,sb=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,ub=function(...e){const t=e.sort(((e,t)=>e[0]-t[0])).map((e=>e[1]));return(e,r=0)=>{const i=[];for(const n of e.split("\n").slice(r)){const e=n.replace(/\(error: (.*)\)/,"$1");for(const r of t){const t=r(e);if(t){i.push(t);break}}}return function(e){if(!e.length)return[];let t=e;const r=t[0].function||"",i=t[t.length-1].function||"";return-1===r.indexOf("captureMessage")&&-1===r.indexOf("captureException")||(t=t.slice(1)),-1!==i.indexOf("sentryWrapped")&&(t=t.slice(0,-1)),t.slice(0,50).map((e=>({...e,filename:e.filename||t[0].filename,function:e.function||"?"}))).reverse()}(i)}}([30,e=>{const t=ib.exec(e);if(t){if(t[2]&&0===t[2].indexOf("eval")){const e=nb.exec(t[2]);e&&(t[2]=e[1],t[3]=e[2],t[4]=e[3])}const[e,r]=cb(t[1]||tb,t[2]);return rb(r,e,t[3]?+t[3]:void 0,t[4]?+t[4]:void 0)}}],[50,e=>{const t=ab.exec(e);if(t){if(t[3]&&t[3].indexOf(" > eval")>-1){const e=ob.exec(t[3]);e&&(t[1]=t[1]||"eval",t[3]=e[1],t[4]=e[2],t[5]="")}let e=t[3],r=t[1]||tb;return[r,e]=cb(r,e),rb(e,r,t[4]?+t[4]:void 0,t[5]?+t[5]:void 0)}}],[40,e=>{const t=sb.exec(e);return t?rb(t[2],t[1]||tb,+t[3],t[4]?+t[4]:void 0):void 0}]),cb=(e,t)=>{const r=-1!==e.indexOf("safari-extension"),i=-1!==e.indexOf("safari-web-extension");return r||i?[-1!==e.indexOf("@")?e.split("@")[0]:tb,r?`safari-extension:${t}`:`safari-web-extension:${t}`]:[e,t]},pb="7";function lb(e,t={}){const r="string"==typeof t?t:t.tunnel,i="string"!=typeof t&&t._metadata?t._metadata.sdk:void 0;return r||`${function(e){return`${function(e){const t=e.protocol?`${e.protocol}:`:"",r=e.port?`:${e.port}`:"";return`${t}//${e.host}${r}${e.path?`/${e.path}`:""}/api/`}(e)}${e.projectId}/envelope/`}(e)}?${function(e,t){return r={sentry_key:e.publicKey,sentry_version:pb,...t&&{sentry_client:`${t.name}/${t.version}`}},Object.keys(r).map((e=>`${encodeURIComponent(e)}=${encodeURIComponent(r[e])}`)).join("&");var r}(e,i)}`}const db=[],yb="Not capturing exception because it's already been captured.";class bb{__init(){this._integrations={}}__init2(){this._integrationsInitialized=!1}__init3(){this._numProcessing=0}__init4(){this._outcomes={}}constructor(e){if(bb.prototype.__init.call(this),bb.prototype.__init2.call(this),bb.prototype.__init3.call(this),bb.prototype.__init4.call(this),this._options=e,e.dsn){this._dsn=function(e){const t="string"==typeof e?function(e){const t=Dy.exec(e);if(!t)throw new ky(`Invalid Sentry Dsn: ${e}`);const[r,i,n="",a,o="",s]=t.slice(1);let u="",c=s;const p=c.split("/");if(p.length>1&&(u=p.slice(0,-1).join("/"),c=p.pop()),c){const e=c.match(/^\d+/);e&&(c=e[0])}return Ly({host:a,pass:n,path:u,projectId:c,port:o,protocol:r,publicKey:i})}(e):Ly(e);return function(e){if("undefined"!=typeof __SENTRY_DEBUG__&&!__SENTRY_DEBUG__)return;const{port:t,projectId:r,protocol:i}=e;if(["protocol","publicKey","host","projectId"].forEach((t=>{if(!e[t])throw new ky(`Invalid Sentry Dsn: ${t} missing`)})),!r.match(/^\d+$/))throw new ky(`Invalid Sentry Dsn: Invalid projectId ${r}`);if(!function(e){return"http"===e||"https"===e}(i))throw new ky(`Invalid Sentry Dsn: Invalid protocol ${i}`);if(t&&isNaN(parseInt(t,10)))throw new ky(`Invalid Sentry Dsn: Invalid port ${t}`)}(t),t}(e.dsn);const t=lb(this._dsn,e);this._transport=e.transport({recordDroppedEvent:this.recordDroppedEvent.bind(this),...e.transportOptions,url:t})}else("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Xl.warn("No DSN provided, client will not do anything.")}captureException(e,t,r){if(nd(e))return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Xl.log(yb));let i=t&&t.event_id;return this._process(this.eventFromException(e,t).then((e=>this._captureEvent(e,t,r))).then((e=>{i=e}))),i}captureMessage(e,t,r,i){let n=r&&r.event_id;const a=Tl(e)?this.eventFromMessage(String(e),t,r):this.eventFromException(e,r);return this._process(a.then((e=>this._captureEvent(e,r,i))).then((e=>{n=e}))),n}captureEvent(e,t,r){if(t&&t.originalException&&nd(t.originalException))return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Xl.log(yb));let i=t&&t.event_id;return this._process(this._captureEvent(e,t,r).then((e=>{i=e}))),i}captureSession(e){this._isEnabled()?"string"!=typeof e.release?("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Xl.warn("Discarded session because of missing or non-string release"):(this.sendSession(e),bd(e,{init:!1})):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Xl.warn("SDK not enabled, will not capture session.")}getDsn(){return this._dsn}getOptions(){return this._options}getTransport(){return this._transport}flush(e){const t=this._transport;return t?this._isClientDoneProcessing(e).then((r=>t.flush(e).then((e=>r&&e)))):ld(!0)}close(e){return this.flush(e).then((e=>(this.getOptions().enabled=!1,e)))}setupIntegrations(){this._isEnabled()&&!this._integrationsInitialized&&(this._integrations=function(e){const t={};return e.forEach((e=>{t[e.name]=e,-1===db.indexOf(e.name)&&(e.setupOnce(fd,Md),db.push(e.name),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Xl.log(`Integration installed: ${e.name}`))})),t}(this._options.integrations),this._integrationsInitialized=!0)}getIntegrationById(e){return this._integrations[e]}getIntegration(e){try{return this._integrations[e.id]||null}catch(t){return("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Xl.warn(`Cannot retrieve integration ${e.id} from the current Client`),null}}sendEvent(e,t={}){if(this._dsn){let r=function(e,t,r,i){const n=Qy(r),a=e.type||"event";!function(e,t){t&&(e.sdk=e.sdk||{},e.sdk.name=e.sdk.name||t.name,e.sdk.version=e.sdk.version||t.version,e.sdk.integrations=[...e.sdk.integrations||[],...t.integrations||[]],e.sdk.packages=[...e.sdk.packages||[],...t.packages||[]])}(e,r&&r.sdk);const o=function(e,t,r,i){const n=e.sdkProcessingMetadata&&e.sdkProcessingMetadata.dynamicSamplingContext;return{event_id:e.event_id,sent_at:(new Date).toISOString(),...t&&{sdk:t},...!!r&&{dsn:Uy(i)},..."transaction"===e.type&&n&&{trace:Gl({...n})}}}(e,n,i,t);return delete e.sdkProcessingMetadata,qy(o,[[{type:a},e]])}(e,this._dsn,this._options._metadata,this._options.tunnel);for(const e of t.attachments||[])r=Fy(r,Gy(e,this._options.transportOptions&&this._options.transportOptions.textEncoder));this._sendEnvelope(r)}}sendSession(e){if(this._dsn){const t=function(e,t,r,i){const n=Qy(r);return qy({sent_at:(new Date).toISOString(),...n&&{sdk:n},...!!i&&{dsn:Uy(t)}},["aggregates"in e?[{type:"sessions"},e]:[{type:"session"},e]])}(e,this._dsn,this._options._metadata,this._options.tunnel);this._sendEnvelope(t)}}recordDroppedEvent(e,t,r){if(this._options.sendClientReports){const r=`${e}:${t}`;("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Xl.log(`Adding outcome: "${r}"`),this._outcomes[r]=this._outcomes[r]+1||1}}_updateSessionFromEvent(e,t){let r=!1,i=!1;const n=t.exception&&t.exception.values;if(n){i=!0;for(const e of n){const t=e.mechanism;if(t&&!1===t.handled){r=!0;break}}}const a="ok"===e.status;(a&&0===e.errors||a&&r)&&(bd(e,{...r&&{status:"crashed"},errors:e.errors||Number(i||r)}),this.captureSession(e))}_isClientDoneProcessing(e){return new yd((t=>{let r=0;const i=setInterval((()=>{0==this._numProcessing?(clearInterval(i),t(!0)):(r+=1,e&&r>=e&&(clearInterval(i),t(!1)))}),1)}))}_isEnabled(){return!1!==this.getOptions().enabled&&void 0!==this._dsn}_prepareEvent(e,t,r){const{normalizeDepth:i=3,normalizeMaxBreadth:n=1e3}=this.getOptions(),a={...e,event_id:e.event_id||t.event_id||Jl(),timestamp:e.timestamp||(0,cd.yW)()};this._applyClientOptions(a),this._applyIntegrationsMetadata(a);let o=r;t.captureContext&&(o=hd.clone(o).update(t.captureContext));let s=ld(a);if(o&&o.getAttachments){const e=[...t.attachments||[],...o.getAttachments()];e.length&&(t.attachments=e),s=o.applyToEvent(a,t)}return s.then((e=>"number"==typeof i&&i>0?this._normalizeEvent(e,i,n):e))}_normalizeEvent(e,t,r){if(!e)return null;const i={...e,...e.breadcrumbs&&{breadcrumbs:e.breadcrumbs.map((e=>({...e,...e.data&&{data:Zd(e.data,t,r)}})))},...e.user&&{user:Zd(e.user,t,r)},...e.contexts&&{contexts:Zd(e.contexts,t,r)},...e.extra&&{extra:Zd(e.extra,t,r)}};return e.contexts&&e.contexts.trace&&i.contexts&&(i.contexts.trace=e.contexts.trace,e.contexts.trace.data&&(i.contexts.trace.data=Zd(e.contexts.trace.data,t,r))),e.spans&&(i.spans=e.spans.map((e=>(e.data&&(e.data=Zd(e.data,t,r)),e)))),i}_applyClientOptions(e){const t=this.getOptions(),{environment:r,release:i,dist:n,maxValueLength:a=250}=t;"environment"in e||(e.environment="environment"in t?r:"production"),void 0===e.release&&void 0!==i&&(e.release=i),void 0===e.dist&&void 0!==n&&(e.dist=n),e.message&&(e.message=Nl(e.message,a));const o=e.exception&&e.exception.values&&e.exception.values[0];o&&o.value&&(o.value=Nl(o.value,a));const s=e.request;s&&s.url&&(s.url=Nl(s.url,a))}_applyIntegrationsMetadata(e){const t=Object.keys(this._integrations);t.length>0&&(e.sdk=e.sdk||{},e.sdk.integrations=[...e.sdk.integrations||[],...t])}_captureEvent(e,t={},r){return this._processEvent(e,t,r).then((e=>e.event_id),(e=>{if("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__){const t=e;"log"===t.logLevel?Xl.log(t.message):Xl.warn(t)}}))}_processEvent(e,t,r){const i=this.getOptions(),{sampleRate:n}=i;if(!this._isEnabled())return dd(new ky("SDK not enabled, will not capture event.","log"));const a=gb(e),o=hb(e),s=e.type||"error",u=`before send for type \`${s}\``;return o&&"number"==typeof n&&Math.random()>n?(this.recordDroppedEvent("sample_rate","error",e),dd(new ky(`Discarding event because it's not included in the random sample (sampling rate = ${n})`,"log"))):this._prepareEvent(e,t,r).then((r=>{if(null===r)throw this.recordDroppedEvent("event_processor",s,e),new ky("An event processor returned `null`, will not send event.","log");if(t.data&&!0===t.data.__sentry__)return r;const n=function(e,t,r){const{beforeSend:i,beforeSendTransaction:n}=e;return hb(t)&&i?i(t,r):gb(t)&&n?n(t,r):t}(i,r,t);return function(e,t){const r=`${t} must return \`null\` or a valid event.`;if(Ol(e))return e.then((e=>{if(!_l(e)&&null!==e)throw new ky(r);return e}),(e=>{throw new ky(`${t} rejected with ${e}`)}));if(!_l(e)&&null!==e)throw new ky(r);return e}(n,u)})).then((i=>{if(null===i)throw this.recordDroppedEvent("before_send",e.type||"error",e),new ky(`${u} returned \`null\`, will not send event.`,"log");const n=r&&r.getSession();!a&&n&&this._updateSessionFromEvent(n,i);const o=i.transaction_info;if(a&&o&&i.transaction!==e.transaction){const e="custom";i.transaction_info={...o,source:e,changes:[...o.changes,{source:e,timestamp:i.timestamp,propagations:o.propagations}]}}return this.sendEvent(i,t),i})).then(null,(e=>{if(e instanceof ky)throw e;throw this.captureException(e,{data:{__sentry__:!0},originalException:e}),new ky(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${e}`)}))}_process(e){this._numProcessing++,e.then((e=>(this._numProcessing--,e)),(e=>(this._numProcessing--,e)))}_sendEnvelope(e){this._transport&&this._dsn?this._transport.send(e).then(null,(e=>{("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Xl.error("Error while sending event:",e)})):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Xl.error("Transport disabled")}_clearOutcomes(){const e=this._outcomes;return this._outcomes={},Object.keys(e).map((t=>{const[r,i]=t.split(":");return{reason:r,category:i,quantity:e[t]}}))}}function hb(e){return void 0===e.type}function gb(e){return"transaction"===e.type}const fb="7.28.1";class mb extends bb{constructor(e){e._metadata=e._metadata||{},e._metadata.sdk=e._metadata.sdk||{name:"sentry.javascript.browser",packages:[{name:"npm:@sentry/browser",version:fb}],version:fb},super(e),e.sendClientReports&&Od.document&&Od.document.addEventListener("visibilitychange",(()=>{"hidden"===Od.document.visibilityState&&this._flushOutcomes()}))}eventFromException(e,t){return function(e,t,r,i){const n=ny(e,t,r&&r.syntheticException||void 0,i);return id(n),n.level="error",r&&r.event_id&&(n.event_id=r.event_id),ld(n)}(this._options.stackParser,e,t,this._options.attachStacktrace)}eventFromMessage(e,t="info",r){return function(e,t,r="info",i,n){const a=ay(e,t,i&&i.syntheticException||void 0,n);return a.level=r,i&&i.event_id&&(a.event_id=i.event_id),ld(a)}(this._options.stackParser,e,t,r,this._options.attachStacktrace)}sendEvent(e,t){!function(e){let t,r=e[0],i=1;for(;i<e.length;){const n=e[i],a=e[i+1];if(i+=2,("optionalAccess"===n||"optionalCall"===n)&&null==r)return;"access"===n||"optionalAccess"===n?(t=r,r=a(r)):"call"!==n&&"optionalCall"!==n||(r=a(((...e)=>r.call(t,...e))),t=void 0)}}([this.getIntegrationById(vy),"optionalAccess",e=>e.addSentryBreadcrumb,"optionalCall",t=>t(e)]),super.sendEvent(e,t)}_prepareEvent(e,t,r){return e.platform=e.platform||"javascript",super._prepareEvent(e,t,r)}_flushOutcomes(){const e=this._clearOutcomes();if(0===e.length)return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Xl.log("No outcomes to send"));if(!this._dsn)return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Xl.log("No dsn provided, will not send outcomes"));("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Xl.log("Sending outcomes:",e);const t=lb(this._dsn,this._options),r=(i=e,qy((n=this._options.tunnel&&Uy(this._dsn))?{dsn:n}:{},[[{type:"client_report"},{timestamp:(0,cd.yW)(),discarded_events:i}]]));var i,n;try{"[object Navigator]"===Object.prototype.toString.call(Od&&Od.navigator)&&"function"==typeof Od.navigator.sendBeacon&&!this._options.transportOptions?Od.navigator.sendBeacon.bind(Od.navigator)(t,Wy(r)):this._sendEnvelope(r)}catch(e){("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&Xl.error(e)}}}n(14465),n(50334);var Sb=Object.defineProperty,vb=Object.defineProperties,Ab=Object.getOwnPropertyDescriptors,Cb=Object.getOwnPropertySymbols,Mb=Object.prototype.hasOwnProperty,Tb=Object.prototype.propertyIsEnumerable,_b=(e,t,r)=>t in e?Sb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Rb=async(e,t,r)=>{t=t||e.remainingAttempts;const{fn:i,shouldRetry:n,remainingAttempts:a}=e;let o,s,u,c,p="retryFn";r&&(o=r.backoffExponent,s=r.maxRetryTimeoutMs,u=r.baseWaitSeconds,c=r.logger,p=r.logPrefix);const l=await i(),d=t-a+1;if(n(l)&&a>1){const i=function({currentTry:e,backoffExponent:t=2,maxRetryTimeoutMs:r=3e4,baseWaitSeconds:i=2}){const n=1e3*(Math.pow(e,t)-Math.pow(e,1.9)+i);return Math.floor(Math.min(n,r))}({currentTry:d,backoffExponent:o,maxRetryTimeoutMs:s,baseWaitSeconds:u});return c&&c.warn("".concat(p,": Waiting ").concat(i,"ms before continuing. currentTry: ").concat(d," maxTries: ").concat(t)),await(y=i,new Promise((e=>setTimeout(e,y)))),Rb(((e,t)=>vb(e,Ab(t)))(((e,t)=>{for(var r in t||(t={}))Mb.call(t,r)&&_b(e,r,t[r]);if(Cb)for(var r of Cb(t))Tb.call(t,r)&&_b(e,r,t[r]);return e})({},e),{remainingAttempts:a-1}),t,r)}var y;return n(l)&&c&&c.error("retry failed. attempt #".concat(d,"/").concat(t,"; ").concat(t-d," left. will abort")),{hadSuccess:!1===n(l),result:l}},Ob=(e,t)=>{const r=t instanceof Array,i="object"==typeof t;if(!r&&!i)return t;const n=Object.assign(t);if(r)for(let t=0;t<n.length;t++)n[t]=Ob(e,n[t]);else i&&Object.keys(n).forEach((t=>{t===e?delete n[e]:null!=n[t]&&(n[t]=Ob(e,n[t]))}));return n};Error;var wb=n(55246),Pb=Object.defineProperty,jb=Object.defineProperties,zb=Object.getOwnPropertyDescriptors,xb=Object.getOwnPropertySymbols,Ib=Object.prototype.hasOwnProperty,Nb=Object.prototype.propertyIsEnumerable,Eb=(e,t,r)=>t in e?Pb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,kb=(e,t)=>{for(var r in t||(t={}))Ib.call(t,r)&&Eb(e,r,t[r]);if(xb)for(var r of xb(t))Nb.call(t,r)&&Eb(e,r,t[r]);return e},Db=(e,t)=>jb(e,zb(t)),Ub=(e,t)=>{for(var r in t)Pb(e,r,{get:t[r],enumerable:!0})};Ub({},{init:()=>Lb});var Lb=(e,t)=>{ll.init(kb({forwardErrorsToLogs:!1},t));let r=[],i=!1;const n=n=>{const{level:a,message:o,context:s,tags:u}=n;if(!1===hl(a,e)||!0===i)return;const c=a===No.Fatal?No.Error:a,p=bl(o),l=Db(kb(kb({service:t.service},p.context),s),{tags:u});"error"===c&&(l.breadcrumbs=r.reduce(((e,[t,r])=>(e["crumb-".concat(t)]=r,e)),{}),r=[]),ll.logger.log(p.message,l,c)};return{onEvent:n,captureCrumb:e=>{if(!0===i)return;r.push(e);const[,t]=e;n(Db(kb({},t),{tags:{}}))},teardown:()=>(i=!0,Promise.resolve())}},qb={};Ub(qb,{init:()=>Hb});var Fb=e=>Object.entries(e).reduce(((e,t)=>{const[r,i]=t,n=e.length?",":"";return e+"".concat(n).concat(r,":").concat(i)}),""),Hb=(e,t)=>{const r=fl.client.createConfiguration({authMethods:{apiKeyAuth:t.apiKey,appKeyAuth:t.appKey}}),i=new fl.v2.LogsApi(r);let n=[],a=!1;const o=r=>{var o,s;const{level:u,message:c,context:p,tags:l}=r;if(!1===hl(u,e)||!0===a)return;const d=u===No.Fatal?No.Error:u,y=bl(c);let b={};"error"===d&&(b=n.reduce(((e,[t,r])=>(e["crumb-".concat(t)]=r,e)),{}),n=[]);const h=(null==(s=null==(o=y.context)?void 0:o.error)?void 0:s.stack)||"",g=(e=>e.split(" ").at(-1)||"")(h),f={body:[{ddtags:Fb(Db(kb({},l),{env:t.env,service:t.service})),message:y.message,service:t.service,additionalProperties:{breadcrumbs:JSON.stringify(b),status:d,context:JSON.stringify(p),url:g,stack:h}}],contentEncoding:"deflate"};i.submitLog(f).catch((e=>wb.error(e)))};return{onEvent:o,captureCrumb:e=>{if(!0===a)return;n.push(e);const[,t]=e;o(Db(kb({},t),{tags:{}}))},teardown:()=>(a=!0,Promise.resolve())}},Bb={};Ub(Bb,{init:()=>Wb});var Wb=(e,t)=>{const r=Db(kb({},t),{integrations:[new Ey.Breadcrumbs({console:!1})],transport:t.transport||eb,stackParser:ub,beforeSend:e=>(null!=e.contexts&&(e.contexts=Ob("credentials",e.contexts)),e)}),i=new mb(r),n=new vd(i);return{onEvent:t=>{const{level:r,message:i,context:a,tags:o}=t;!1!==hl(r,e)&&((e,t,r,i,n)=>{e.withScope((a=>{switch(a.setLevel(r),a.setContext("context",i),a.setTags(n),yl(t)){case 0:e.captureMessage(t);break;case 1:e.captureException(t);break;default:e.captureException("Unidentifed payload captured")}}))})(n,i,gl(r),a,o)},captureCrumb:e=>{const[t,r]=e,{level:i,message:a,context:o}=r,s={message:a,data:kb({clientTimestamp:t},o),level:gl(i)};null!=o.category&&(s.category=o.category),n.addBreadcrumb(s)},teardown:async()=>{await i.close(2e3)}}};const Gb="production";let Kb=[];const $b=e=>{Kb.push(e),Kb.length>400&&(Kb=Kb.slice(-300))},Qb=e=>{const{level:t,message:r,context:i}=e;$b({level:t,message:r,context:i})},Vb=e=>{const[t,r]=e,{level:i,message:n,context:a}=r;$b({level:i,message:n,context:a})};var Zb=n(55246);const Yb="undefined"!=typeof WorkerGlobalScope,Xb="script environment",{Error:Jb,Fatal:eh,Info:th,Warning:rh}=(chrome.runtime.getManifest()?.version,No),ih=Yb?(()=>{const e=[Jb,eh,th,rh],t=[{onEvent:Qb,captureCrumb:Vb,teardown:()=>Promise.resolve()},Bb.init([Jb,eh],{dsn:"https://463bb92641e54586a41d8c96ac9fe8e5@o398470.ingest.sentry.io/4504323419602944",release:chrome.runtime.getManifest().version,environment:Gb,normalizeDepth:8,sampleRate:.25}),qb.init(e,{apiKey:"pub013004b2a5b9b661b11e2b22c596d9d9",appKey:"5bffc0789f99189eeb16a48c993e5a5883d2d169",env:Gb,service:"browser_extension"})];return Uu((e=>{e.setTag(Xb,"serviceWorker")})),{...cc({trackerMethods:t,onCrumbHook:()=>{},isConsoleLogActive:()=>!1}),setEnvironmentName:()=>{Zb.log('logger.setEnvironmentName: Not implemented for the service worker. Environment is assumed to be "serviceWorker"')}}})():{setEnvironmentName:()=>{},crumb:()=>{},error:()=>{},debug:()=>{},info:()=>{},warn:()=>{},fatal:()=>{},recordFail:()=>{},teardown:()=>Promise.resolve(),addToBaseContext:()=>{}},{setEnvironmentName:nh,crumb:ah,info:oh,warn:sh,error:uh,fatal:ch,debug:ph,recordFail:lh,addToBaseContext:dh}=Yb?{setEnvironmentName(e){ih&&ih.setEnvironmentName(e)},crumb(...e){ih.crumb(...e)},info(e,t,r){ih.info(e,t,r)},warn(e,t,r){ih.warn(e,t,r)},error(e,t,r){ih.error(e,t,r)},fatal(e,t,r){ih.fatal(e,t,r)},debug(...e){ih.debug(...e)},recordFail(...e){ih.recordFail(...e)},addToBaseContext(e){ih.addToBaseContext(e)}}:(()=>{let e="frontend";const t=e=>()=>{Zb.log(`logger.${e}: Not implemented for the frontend. logger.error is available.`)};return{setEnvironmentName:t=>{e=t},error:(t,r={},i={})=>{const n=function(e,t={}){const{maxDepth:r=Number.POSITIVE_INFINITY,useToJSON:i=!0}=t;return"object"==typeof e&&null!==e?Wu({from:e,seen:[],forceEnumerable:!0,maxDepth:r,depth:0,useToJSON:i,serialize:!0}):"function"==typeof e?`[Function: ${e.name??"anonymous"}]`:e}(t);chrome.runtime.sendMessage({type:ia.logException,level:No.Error,payload:{serializedError:n,context:r,tags:{...i,[Xb]:e}}})},debug:(...e)=>false,info:(t,r={},i={})=>{chrome.runtime.sendMessage({type:ia.logInfo,level:No.Info,payload:{info:t,context:r,tags:{...i,[Xb]:e}}})},warn:(t,r={},i={})=>{chrome.runtime.sendMessage({type:ia.logWarn,level:No.Warning,payload:{warn:t,context:r,tags:{...i,[Xb]:e}}})},fatal:t("fatal"),recordFail:t("recordFail"),crumb:e=>{chrome.runtime.sendMessage({type:ia.logCrumb,payload:{...e,context:{}}})},addToBaseContext:e=>{chrome.runtime.sendMessage({type:ia.addToBaseContext,payload:{context:e}})}}})();var yh={crumb:ah,info:oh,warn:sh,error:uh,fatal:ch,debug:ph,recordFail:lh,setEnvironmentName:nh,addToBaseContext:dh};zo("sessions/fetchMostRecentSession",(async(e,{dispatch:t})=>{let r;try{const e=await((e,t=pu)=>uu()(e,{...t,credentials:"include",headers:{...cu,...t.headers,client:"chrome-extension"}}))(`${Jn}/api/campaigns/my-videos/most-recent`);if(404===e.status)return t(gh.actions.updateMostRecentSession(null));if(e.status>=400)return Promise.reject(new Error("not logged in - HTTP response: "+e.status));r=await e.json()}catch(e){return gh.actions.updateMostRecentSession(null),yh.info(e,{message:"fetchMostRecentSession: error attempting to fetch most recent video"}),Promise.reject(e)}return t(gh.actions.updateMostRecentSession(r))}));const bh=zo("sessions/delegateFetchMostRecentSession",(()=>{chrome.runtime.sendMessage({type:ia.fetchMostRecentSession})})),hh=zo("sessions/updateNameToSession",(({name:e,video:t,fromRobot:r})=>{chrome.runtime.sendMessage({type:ia.updateNameToSession,name:e,video:t,fromRobot:r})})),gh=Ro({name:"sessions",initialState:{mostRecentSession:null,latestPreviewModalSession:null,myVideosSessions:[],previewModalSessionReady:!1,companionPreviewModalSession:null},reducers:{updateMostRecentSession(e,t){e.mostRecentSession=t.payload},updateLatestPreviewModalSession(e,t){e.latestPreviewModalSession=t.payload,e.previewModalSessionReady=null!=t.payload},updateCompanionPreviewModalSession(e,t){e.companionPreviewModalSession=t.payload},updateMyVideosSessions(e,t){e.myVideosSessions=t.payload}}}),{updateLatestPreviewModalSession:fh,updateCompanionPreviewModalSession:mh,updateMyVideosSessions:Sh}=gh.actions;n(93836);var vh=n(51),Ah=n.n(vh),Ch=n(89051),Mh=n.n(Ch),Th=n(94902),_h=n.n(Th),Rh=n(71064),Oh=n.n(Rh),wh=n(23919);async function Ph(e){const t=function(e){const t=new Headers(e.headers);if(e.auth){const r=e.auth.username||"",i=e.auth.password?decodeURI(encodeURIComponent(e.auth.password)):"";t.set("Authorization",`Basic ${btoa(r+":"+i)}`)}const r=e.method.toUpperCase(),i={headers:t,method:r};"GET"!==r&&"HEAD"!==r&&(i.body=e.data),e.mode&&(i.mode=e.mode),e.cache&&(i.cache=e.cache),e.integrity&&(i.integrity=e.integrity),e.redirect&&(i.redirect=e.redirect),e.referrer&&(i.referrer=e.referrer),(0,wh.isUndefined)(e.withCredentials)||(i.credentials=e.withCredentials?"include":"omit");const n=Oh()(e.baseURL,e.url),a=_h()(n,e.params,e.paramsSerializer);return new Request(a,i)}(e),r=[jh(t,e)];e.timeout&&e.timeout>0&&r.push(new Promise((r=>{setTimeout((()=>{const i=e.timeoutErrorMessage?e.timeoutErrorMessage:"timeout of "+e.timeout+"ms exceeded";r(zh(i,e,"ECONNABORTED",t))}),e.timeout)})));const i=await Promise.race(r);return new Promise(((t,r)=>{i instanceof Error?r(i):"[object Function]"===Object.prototype.toString.call(e.settle)?e.settle(t,r,i):Mh()(t,r,i)}))}async function jh(e,t){let r;try{r=await fetch(e)}catch(r){return zh("Network Error",t,"ERR_NETWORK",e)}const i={ok:r.ok,status:r.status,statusText:r.statusText,headers:new Headers(r.headers),config:t,request:e};if(r.status>=200&&204!==r.status)switch(t.responseType){case"arraybuffer":i.data=await r.arrayBuffer();break;case"blob":i.data=await r.blob();break;case"json":i.data=await r.json();break;case"formData":i.data=await r.formData();break;default:i.data=await r.text()}return i}function zh(e,t,r,i,n){return Ah().AxiosError&&"function"==typeof Ah().AxiosError?new(Ah().AxiosError)(e,Ah().AxiosError[r],t,i,n):function(e,t,r,i,n){return e.config=t,r&&(e.code=r),e.request=i,e.response=n,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}(new Error(e),t,r,i,n)}var xh=n(87317),Ih=n.n(xh);const Nh="ajs_anonymous_id",Eh=()=>function(e){try{const{pathname:t}=new URL(e,location.origin);return t===location.pathname}catch{return!1}}(chrome.runtime.getManifest()?.background?.service_worker);let kh,Dh=Yu();const Uh=async()=>{if(Eh()&&!kh){kh=new(Ih())("0BcCR8G6DdEJ9RYwN7tGVAAuURhMrJFk",{flushAt:20,axiosConfig:{adapter:Ph}});try{const t=await new Promise((e=>{chrome.cookies.getAll({domain:Xn,name:Nh},(t=>{t=t.filter((e=>!e.domain.includes("stage"))),t.length?e(decodeURIComponent(t[0].value).replace(/"/g,"")):e(null)}))}));t?(Dh=t,yh.debug(`read anonID ${Dh} from cookie`)):(yh.debug(`writing anonID ${Dh} to cookie`),e=Dh,chrome.cookies.set({domain:Xn,url:Jn,name:Nh,httpOnly:!1,secure:!0,expirationDate:new Date((new Date).setFullYear((new Date).getFullYear()+2)).getTime(),value:encodeURIComponent(`"${e}"`)}))}catch(e){yh.error(e,{message:"error in analytics initialization"})}}var e};var Lh=async(e,t,r)=>{Eh()?(await Uh(),kh?.track({userId:r,anonymousId:r?void 0:Dh,event:e,properties:t,context:{manifest:3}})):chrome.runtime.sendMessage({type:ia.trackEvent,event:e,properties:t})},qh=n(30527),Fh=n.n(qh);const Hh="src=composer",Bh="default-play",Wh="full-play",Gh="defaultGifPlay",Kh="8px";var $h=`\n  \n  .lo-gmail-compose-button-dropdown-menu {\n    margin: 0;\n    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.07), 0px 1px 4px rgba(0, 0, 0, 0.1);\n    border-radius: 4px;\n    padding: 8px;\n\n    background: #fff;\n\n    font-size: 14px;\n    line-height: 22px;\n    font-family: circular, Helvetica, sans-serif;\n  }\n\n  .lo-gmail-compose-button-dropdown-menu li {\n    align-items: center;\n    flex-direction: row;\n    justify-content: flex-start;\n\n    display: flex;\n\n    border-radius: 4px;\n    padding: 5px 8px 5px 10px;\n\n    background-color: transparent;\n    cursor: pointer;\n\n    color: var(--lns-color-grey8);\n  }\n\n  .lo-gmail-compose-button-dropdown-menu li:hover {\n    background-color: var(--lns-color-blurple);\n\n    color: #fff;\n  }\n\n  .lo-gmail-compose-button-dropdown-menu li:hover svg path {\n    fill: #fff;\n  }\n\n  .lo-gmail-compose-button-dropdown-menu-insert-latest\n    .lo-universal-tooltip\n    .lo-universal-tooltip-content {\n    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.07), 0px 1px 4px rgba(0, 0, 0, 0.1);\n    border-radius: 4px;\n    padding: 16px;\n\n    background-color: #fff;\n\n    position: relative;\n  }\n\n  .lo-gmail-compose-button-dropdown-menu-insert-latest\n    .lo-universal-tooltip\n    .lo-universal-tooltip-content:before {\n    position: absolute;\n    content: '';\n    top: -16px;\n    left: -16px;\n    bottom: -16px;\n    right: -16px;\n  }\n\n  .lo-gmail-compose-button-dropdown-menu-insert-latest .lo-universal-tooltip {\n    display: none;\n    opacity: 0;\n\n    transition: opacity 0.2s ease-in-out;\n  }\n\n  .lo-gmail-compose-button-dropdown-menu-insert-latest:hover\n    .lo-universal-tooltip {\n      \n    top: calc(100% - 240px);\n    right: 100%;\n\n    display: flex;\n    opacity: 1;\n    \n  }\n\n  .lo-gmail-compose-button-dropdown-menu\n    li\n    .lo-gmail-compose-dropdown-menu-label {\n    margin-left: 10px;\n  }\n\n  .lo-gmail-compose-dropdown-item-tooltip {\n    position: relative;\n\n    width: 392px;\n    height: 304px;\n  }\n\n  .lo-embed-loader-placeholder {\n    position: absolute;\n    top: calc(50% - 24px);\n    left: calc(50% - 24px);\n  }\n\n  .lo-gmail-recorded-video-preview-embed-container {\n    position: relative;\n\n    width: 100%;\n    min-height: 260px;\n  }\n\n  .lo-gmail-recorded-video-preview-content {\n    flex-direction: column;\n\n    display: flex;\n  }\n\n  .lo-gmail-recorded-video-preview-content\n    .lo-gmail-recorded-video-preview-title {\n    box-sizing: border-box;\n  }\n\n  .loom-surround-div .lo-gmail-compose-button {\n    opacity: 0.8;\n  }\n\n  .loom-embedded-button {\n    position: relative;\n    z-index: 1;\n    align-items: center;\n    justify-content: center;\n\n    display: flex;\n\n    border-radius: 5px;\n    width: 100%;\n    height: 100%;\n\n    cursor: default;\n\n    text-align: center;\n  }\n  \n  .loom-embedded-button:hover {\n    background-color: var(--lns-color-grey1);\n    cursor: pointer;\n  }\n\n  .loom-drop-down {\n    position: absolute;\n    bottom: 100%;\n\n    display: none;\n\n    min-width: 160px;\n\n    background-color: var(--lns-color-white);\n  }\n\n  .loom-surround-div {\n    align-items: center;\n    justify-content: center;\n\n    display: flex;\n\n    width: 28px;\n    height: 28px;\n    padding: 4px;\n    padding-right: 0px;\n    padding-left: 8px;\n  }\n  .loom-icon {\n    max-width: 70%;\n    max-height: 70%;\n    padding: 2px;\n  }   \n  .loom-button-show {\n    display: block;\n  }\n  .loom-button-td + td {\n    padding-left: 5px;\n  }\n  .loom-button-td + td.inboxsdk__compose_actionToolbar {\n    padding-left: 2px;\n  }\n  .loom-remove-modal {\n    padding-right: 5%;\n  }\n  \n  // following value is related to GMAIL_DIV_ALWAYS_HIDDEN in constants/gmail.js\n  #loom-always-hidden-div {\n    display: none;\n  }\n  \n  .lo-universal-tooltip .arrow-right {\n    flex-direction: column;\n    height: 100%;\n    right: calc(~'100% + ${Kh}');\n  }\n\n  .lo-universal-tooltip .arrow-right .lo-universal-tooltip-content {\n    content: ' ';\n  \n    position: absolute;\n\n    border: solid transparent;\n    border-width: ${Kh};\n    width: 0;\n    height: 0;\n\n    pointer-events: none;\n  }\n  \n  .lo-universal-tooltip {\n    position: absolute;\n    justify-content: center;\n  \n    display: flex;\n  \n    &.arrow-right,\n    &.arrow-left {\n      flex-direction: column;\n  \n      height: 100%;\n    }\n  \n    &.arrow-top,\n    &.arrow-bottom {\n      flex-direction: row;\n  \n      width: 100%;\n    }\n  \n    &.arrow-right {\n      right: calc(~'100% + ${Kh}');\n    }\n  \n    &.arrow-bottom {\n      bottom: calc(~'100% + ${Kh}');\n    }\n  \n    &.arrow-left {\n      left: calc(~'100% + ${Kh}');\n    }\n  \n    &.arrow-top {\n      top: calc(~'100% + ${Kh}');\n    }\n  \n    &.sticky-on-hover {\n      pointer-events: all;\n    }\n  \n    .lo-universal-tooltip-content {\n      border-radius: var(--lns-radius-large);\n      padding: 8px 12px;\n  \n      background-color: var(--lns-color-grey1);\n  \n      // originally font-size: @font-size-h5;\n      font-size: var(--lns-fontSize-large);\n      font-family: circular, Helvetica, sans-serif;\n      color: var(--lns-color-white);\n  \n      .arrow-right .arrow-top .arrow-left .arrow-bottom &:after {\n        content: ' ';\n  \n        position: absolute;\n  \n        border: solid transparent;\n        border-width: ${Kh};\n        width: 0;\n        height: 0;\n  \n        pointer-events: none;\n      }\n      &:after {\n        top: 50%;\n        left: 100%;\n  \n        margin-top: ${Kh};\n        border-left-color: var(--lns-color-grey1);\n      }\n      &:after {\n        bottom: 100%;\n        left: 50%;\n  \n        margin-left: ${Kh};\n        border-bottom-color: var(--lns-color-grey1);\n      }\n      &:after {\n        top: 50%;\n        right: 100%;\n  \n        margin-top: ${Kh};\n        border-right-color: var(--lns-color-grey1);\n      }\n      &:after {\n        top: 100%;\n        left: 50%;\n  \n        margin-left: ${Kh};\n        border-top-color: var(--lns-color-grey1);\n      }\n    }\n  }\n\n\n\n`;const Qh=new RegExp(`^s*http(s)?://(www.)?${ea}/share/([a-zA-Z0-9-]*-)?([a-fA-F0-9]{32})`,"i"),Vh=/^[a-fA-F0-9]{32}$/i,Zh=new RegExp(`s*http(s)?://(www.)?${ea}/share/([a-zA-Z0-9-]*-)?([a-fA-F0-9]{32})\\?${Hh}`,"i"),Yh=(new RegExp(`^s*http(s)?://(www.)?${ea}/share/`,"i"),e=>{const t=Qh.exec(e);if(null===t)return null;const r=t[t.length-1];return Vh.test(r)?r:null}),Xh=e=>new Promise((t=>{chrome.runtime.sendMessage({type:ia.requestThumbExists,video:e},(e=>t(e)))})),Jh=e=>{const t=Fh()("<div></div>").html(e);return t.find(".video-timestamp").replaceWith((function(){return Fh()(this).text()})),t.html()};var eg=(e=>(e.shareURL="shareURL",e.aliasURL="aliasURL",e))(eg||{});const tg=async({sessionID:e,skipCache:t=!0,sessionIDSource:r})=>await chrome.runtime.sendMessage({type:ia.getSessionDetails,sessionID:e,skipCache:t,sessionIDSource:r}),rg=394,ig=630,ng={"max-width":"500px",width:"80%"},ag={position:"relative",height:0,overflow:"hidden"},og={display:"inline",position:"absolute",top:0,left:0,width:"100%",height:"100%"},sg=(e,t=ng,r={},i={})=>{const{id:n,video_properties:a={}}=e,{width:o=ig,height:s=rg}=a,u=s/o*100+"%",c=window.encodeURIComponent(window.location.href),{hideOwner:p,hideSpeedSelector:l,hideShare:d,hideTitle:y}=i,b=chrome.runtime.getURL("/html/embedView.html")+`?session_id=${n}&hide_owner=${p}&hide_speed=${l}&hide_share=${d}&hide_title=${y}&from_url=${c}`,h=Fh()(`<iframe frameborder="0" src="${b}" allowfullscreen></iframe>`);h.css(og);const g=Fh()("<div></div>").append(h);g.css(Object.assign({},ag,r,{"padding-top":u}));const f=Fh()("<div></div>").append(g);return f.css(t),f},ug=new RegExp(`^s*http(s)?://(www.)?${ea}/a/([a-fA-F0-9]{32})`,"i"),cg=/^[a-fA-F0-9]{32}$/i,pg=e=>{const t=ug.exec(e);if(null===t)return null;const r=t[t.length-1];return cg.test(r)?r:null},lg=({video:e,name:t})=>{const{needs_password:r,current_user_is_owner:i,use_gif:n=!1,thumbnails:a}=e;if(r&&!i)return null;let o;return t!==Gh||n||(t="defaultGifPlay"),o=a[t]?a[t]:t===Gh&&a["default-gif-play"]?a["default-gif-play"]:t!==Bh&&t!==Wh||!a.defaultPlay?a.default:a.defaultPlay,o?(o.startsWith("http")||(o=o.startsWith("/")?`${ta}${o}`:`${ta}/${o}`),o):null};var dg=n(55246);const yg={display:"inline-block",width:"20px",height:"20px"},bg=e=>null!=e.privacy&&"public"!==e.privacy;const hg=async({session:e,title:t,linkUrl:r,omitDescription:i})=>{r=r||`${Jn}/share/${e.id}`;const n=function(e,t,r){let i=null;if(bg(e)&&(i=`<p>Private Video - <a target="_blank" href="${r}">Sign in to view</a></p>`),e.is_protected&&(i=`<p>Password Protected Video - <a target="_blank" href="${r}">Watch Video</a></p>`),null!=i)return i;let{name:n=""}=e;return t&&""!==t&&(n=t),`<p><b>${n}</b> - <a target="_blank" href="${r}">Watch Video</a></p>`}(e,t,r),a=await(async(e,t)=>{let r;if(bg(e)&&(r="https://cdn.loom.com/assets/img/private-video.png"),e.is_protected&&(r="https://cdn.loom.com/assets/img/password-video.png"),!r){if(!1===await Xh(e))return"";let t=Bh;t=(e=>{const{thumbnails:t}=e;return Boolean(t&&t["og-full"])})(e)?Wh:Gh,r=lg({video:e,name:t})}return r?(r.endsWith(".gif")&&(t+="?utm_medium=gif"),`<a class="lo-gmail-video-thumb" href="${t}" target="_blank"><img style="max-width:300px;" src="${r}"></img></a>`):(yh.error(`Gmail integration: thumbUrl for video ${e?.id} is null`),"")})(e,r),o=function(e){const{description:t}=e;return null===t?"":`<p>${(e=>{const t=Fh()("<div></div>").html(e);return t.find(".nested-list").css({"list-style":"none"}),t.html()})(Jh(t))}</p>`}(e);let s;return s=i?Fh()(`${n}${a}`):Fh()(`${n}${a}${o}`),s.find("img").on("error",(function(){dg.error("Loom: encountered thumbnail error"),this.src.endsWith(".gif")?this.src=lg({video:e,name:Wh})||"":this.src===lg({video:e,name:Bh})?this.src=lg({video:e,name:"default"})||"":this.src=Yn})),s},gg=async(e,t,r)=>{const i=await tg({sessionID:t.id,skipCache:!0,sessionIDSource:eg.shareURL}),n=await hg({session:i,title:r});let a="";n.each((function(){a+=this.innerHTML+"<br>"}));const o=document.querySelector(`[data-loom-id="${e}"]`);o&&(o.innerHTML=a+o.innerHTML)},fg=async e=>{if(void 0===e)return;let t=Fh()(e);const r=t.text();let i=!1;var n;r&&(n=r,i=Zh.test(n),i&&r.replaceAll(`?${Hh}`,""));const a=Yh(r),o=pg(r);if(null===a&&null===o)return;const s=Fh()(`<img src="${Zn}">`);let u;s.css(yg),t.append(s);try{let r;null!==a&&(u=await tg({sessionID:a,skipCache:!0,sessionIDSource:eg.shareURL}),r=await hg({session:u,omitDescription:i})),null!==o&&(u=await tg({sessionID:o,sessionIDSource:eg.aliasURL}),r=await hg({session:u,linkUrl:`${Jn}/a/${o}`})),e.nodeType===window.Node.TEXT_NODE&&(t.wrap('<div class="loom-thumb-embed"></div>'),t=t.parent()),void 0!==r&&(t.hasClass("loom-thumb-embed")?t.empty().append(r):(t.prepend(r),t.contents().filter(((e,t)=>t.nodeType===Node.TEXT_NODE&&(Yh(t.data)||pg(t.data)))).remove())),Lh("Extension Gmail Integration Composer Link Expanded",{videoid:a}),s.remove()}catch(e){yh.error(e,{message:"expandNodeLinkToThumbnail: Error expanding session link"}),s.remove()}},mg=e=>t=>{const r=(e=>{switch(e){case"content":default:return["./js/content.js"];case"toastMsg":return["./js/currentToastMsg.js"]}})(e);return new Promise((e=>{chrome.scripting.executeScript({target:{tabId:t},files:r},(t=>{!chrome.runtime.lastError&&t||e(!1),e(!0)}))}))},Sg=(mg("content"),mg("toastMsg"),e=>t=>new Promise((r=>{chrome.tabs.sendMessage(t,{type:e},(e=>chrome.runtime.lastError||void 0===typeof e?r(!1):r(e)))})));Sg(ia.pingContentScript),Sg(ia.pingToastMsgScript);let vg=null;var Ag=({arrow:e,stickyOnHover:t=!1,children:r})=>{const n=(0,i.useRef)(null);return i.createElement("div",{ref:n,className:`lo-universal-tooltip arrow-${e} ${t&&"sticky-on-hover"}`},i.createElement("div",{className:"lo-universal-tooltip-content"},r))},Cg=({session:e,handleInsert:t})=>{const[r,n]=(0,i.useState)(!1);return(0,i.useEffect)((()=>{e&&(async()=>{let t=!1;const r=window.setTimeout((()=>{n(!0),t=!0}),5e3);await(async e=>{const{result:t}=await Rb({fn:()=>Xh(e),shouldRetry:e=>!1===e,remainingAttempts:3});return t})(e),window.clearTimeout(r),!1===t&&n(!0)})()}),[e]),!1===r?i.createElement(oi,{variant:"primary",isDisabled:!0},i.createElement(Vr,null)):i.createElement(oi,{variant:"primary",onClick:()=>t()},"Insert Recording")};const Mg=1e10;class Tg extends i.Component{constructor(e){super(e),this.state={observer:null,embedPreviewLoaded:!1,hasChanged:!1,title:"",feedback:"",removeModal:!1},this.currentCompose=null,this.idToLoomButtons=[],this.prevLength=0,this.injectButton=!1,this.cssSelectors=this.props.cssSelectors,this.buttonInjectLogSent=!1,this.initComponent()}render(){const{previewModalSessionReady:e,latestPreviewModalSession:t}=this.props;return i.createElement("div",{id:"main-loom-gmail-integration"},i.createElement(Yi,{title:"Are you sure you want to remove Loom?",mainButton:i.createElement(oi,{variant:"primary",onClick:()=>{this.props.denyGmailLinkExpanding(),""===this.state.feedback?yh.info({integration:"gmail",event:"buttonremoval"}):yh.info({integration:"gmail",event:"buttonremoval",feedback:this.state.feedback}),this.props.unMount("none")}},"Confirm"),secondaryButton:i.createElement(oi,{onClick:()=>{this.setState({removeModal:!1,feedback:""})}},"Cancel"),isOpen:this.state.removeModal,onCloseClick:()=>this.setState({removeModal:!1,feedback:""}),onBackgroundClick:()=>this.setState({removeModal:!1,feedback:""})},i.createElement("div",{className:"loom-remove-modal"},i.createElement(pr,{size:"medium"},"You can always add this integration again from your personal settings in Loom under the integrations tab."),i.createElement(ui,{top:2}),i.createElement(pr,{size:"medium",fontWeight:"medium"},"Give feedback (optional)"),i.createElement(ui,{top:.5}),i.createElement(ln,{labelFor:"loom-feedback"},i.createElement(on,{id:"loom-feedback",onChange:e=>this.setState({feedback:e.target.value}),value:this.state.feedback,placeholder:"Tell us how we can improve",size:"small",rows:4})))),i.createElement(Yi,{mainButton:i.createElement(Cg,{session:t,handleInsert:this.handleGmailVideoInsertRecording.bind(this)}),secondaryButton:i.createElement(oi,{onClick:()=>this.handleOnPreviewModalCancelClick()},"Cancel"),isOpen:e&&null!=t,onCloseClick:()=>this.handleOnPreviewModalCancelClick()},i.createElement("div",{className:"lo-gmail-recorded-video-preview-content"},i.createElement("div",{ref:e=>this.embedRef=e,className:"lo-gmail-recorded-video-preview-embed-container"},i.createElement(Vr,{size:"large",className:"lo-embed-loader-placeholder"})),i.createElement(ui,{top:2}),i.createElement(ln,{label:"Video Title",labelFor:"video-title"},i.createElement(hi,{id:"video-title",className:"lo-gmail-recorded-video-preview-title",onChange:e=>this.setState({title:e.target.value}),value:this.state.title,placeholder:""})))),i.createElement("div",{id:"loom-main-dropdown-dump"}),i.createElement("div",{id:"loom-always-hidden-div"}))}handleOnPreviewModalCancelClick(){this.props.updateLatestPreviewModalSession(null),Lh("Extension Gmail Integration Cancel Record Session",{implementation:this.props.implementation,upsell:!1})}async handleGmailVideoInsertRecording(){const{title:e}=this.state,{latestPreviewModalSession:t}=this.props;e&&(t.name=e,this.props.updateNameToSession(e,t,!1)),await gg(this.currentCompose,t,this.state.title),this.props.updateLatestPreviewModalSession(null),Lh("Extension Gmail Integration Insert Record Session",{withTitle:Boolean(e),implementation:this.props.implementation,upsell:!1})}expandLinksOnComposeView(e){const t=new MutationObserver((e=>{this.props.linkExpandingEnabled&&e.forEach((e=>{switch(e.type){case"characterData":fg(e);break;case"childList":e.addedNodes.forEach((e=>{fg(e)}))}}))})),r=document.querySelector(`[data-loom-id="${e}"]`);t.observe(r,{characterData:!0,childList:!0,subtree:!0}),this.props.linkExpandingEnabled&&r.childNodes.forEach((e=>{fg(e)})),this.idToLoomButtons=this.idToLoomButtons.map((r=>r.id===e?{bodyObs:t,id:r.id}:r))}async populateComposerWithSessionHtml(e){const{mostRecentSession:t}=this.props;t&&(await gg(e,t),Lh("Extension Gmail Integration Insert Last Session Click",{implementation:this.props.implementation,upsell:!1}))}attachGmailComposeButtonHandlers(e){const t=document.getElementById("loom-button-dropdown:"+e.split(":")[1]),r=t.querySelector(".lo-gmail-compose-button-dropdown-menu-record-new"),i=t.querySelector(".lo-gmail-compose-button-dropdown-menu-insert-latest"),n=document.querySelector(".lo-gmail-compose-button-dropdown-menu-remove-button");r&&r.addEventListener("click",(async()=>{const{handleUpdateSource:e,handleDelegateOpenPinnedAndCapture:t}=this.props,r=await new Promise((e=>{null!==vg&&e(vg),chrome.runtime.sendMessage({type:ia.requestTabId},(t=>{vg={...t,title:document?.title,url:window.location.href},e(vg)}))}));var i;r?.tabId&&(await(i=r,new Promise((e=>{chrome.runtime.sendMessage({type:ia.activateRecorder,tabRef:i},e)}))),e(),t())})),i&&(i.addEventListener("mouseenter",(()=>{this.populateComposerButtonDropdownMenuPreviewTooltip(e)})),i.addEventListener("click",(()=>{this.populateComposerWithSessionHtml(e)}))),n&&n.addEventListener("click",(()=>{this.setState({removeModal:!0})}))}populateComposerButtonDropdownMenuPreviewTooltip(e){const{mostRecentSession:t}=this.props;if(!t)return;const r=document.getElementById("lo-gmail-compose-embed-placeholder:"+e.split(":")[1]);r&&r.replaceWith(sg(t,{width:"360px",height:"100%"},{position:"unset"},{hideOwner:!0,hideShare:!0})[0])}testToolbar(){const e=Object.keys(this.cssSelectors.toolbar),t=document.querySelectorAll(`tr[${e}="${this.cssSelectors.toolbar[e]}"]`),r=Object.keys(this.cssSelectors.editor),i=document.querySelectorAll(`div[${r}="${this.cssSelectors.editor[r]}"]`);0===t.length&&i.length>t.length&&(yh.info({integration:"gmail",event:"buttoninject"}),this.props.unMount("none"))}initComponent(){window.addEventListener("click",(e=>{const t=Array.from(document.getElementsByClassName("loom-drop-down"));if(t.length>0){let r=null;"loom-icon"===e.target.className?r=e.target.offsetParent:"loom-embedded-button"===e.target.className&&(r=e.target);const i=r?r.id.split(":")[1]:-1;t.forEach((e=>{e.classList.contains("loom-button-show")&&e.id!=="loom-button-dropdown:"+i&&e.classList.remove("loom-button-show")}))}}));const e=new MutationObserver((()=>{const e=Object.keys(this.cssSelectors.editor),t=document.querySelectorAll(`[${e}="${this.cssSelectors.editor[e]}"]`);t.length>this.prevLength?(this.injectButton=!0,this.setState({hasChanged:!this.state.hasChanged})):t.length<this.prevLength&&this.setState({hasChanged:!this.state.hasChanged})}));e.observe(document,{childList:!0,subtree:!0}),this.state={observer:e}}destroyComponent(){this.state.observer.disconnect(),window.removeEventListener("click",(e=>{let t=null;"loom-icon"===e.target.className?t=e.target.offsetParent:"loom-embedded-button"===e.target.className&&(t=e.target);const r=t?t.id.split(":")[1]:-1;Array.from(document.getElementsByClassName("loom-drop-down")).forEach((e=>{e.classList.contains("loom-button-show")&&e.id!=="loom-button-dropdown:"+r&&e.classList.remove("loom-button-show")}))})),Array.from(document.getElementsByClassName("loom-button-td")).forEach((e=>{e.parentNode.removeChild(e)})),this.setState({observer:null})}embedLoomButton(e,t){const r=this.idToLoomButtons.length>0?parseInt(this.idToLoomButtons[this.idToLoomButtons.length-1].id.split(":")[1])+1:0,n="loom-button:"+String(r);this.idToLoomButtons=[...this.idToLoomButtons,{bodyObs:null,id:n}];const a=document.createElement("td");a.className="loom-button-td",a.innerHTML=Pn.renderToStaticMarkup(i.createElement(i.Fragment,null,i.createElement("div",{className:"loom-surround-div"},i.createElement("div",{className:"loom-embedded-button",id:n,"aria-label":"Insert Loom Recording","data-tooltip":"Insert Loom Recording",tabIndex:"1","aria-haspopup":!0,"aria-pressed":!1},i.createElement("img",{className:"loom-icon",src:`${ra}/gmail/gmail-integration-button.svg`})))));const o=Pn.renderToStaticMarkup(i.createElement("div",{className:"loom-drop-down",id:"loom-button-dropdown:"+r},i.createElement("ul",{className:"lo-gmail-compose-button-dropdown-menu"},i.createElement("li",{className:"lo-gmail-compose-button-dropdown-menu-record-new"},i.createElement(qr,{icon:i.createElement($n,null)}),i.createElement("div",{className:"lo-gmail-compose-dropdown-menu-label"},"Record a new video")),i.createElement("li",{className:"lo-gmail-compose-button-dropdown-menu-insert-latest",id:"loom-insert-latest:"+r},i.createElement(qr,{icon:i.createElement(En,null)}),i.createElement("div",{className:"lo-gmail-compose-dropdown-menu-label"},"Insert last recording"),i.createElement(Ag,{arrow:"right",stickyOnHover:!0},i.createElement("div",{className:"lo-gmail-compose-dropdown-item-tooltip"},i.createElement(Vr,{size:"large",className:"lo-embed-loader-placeholder"}),i.createElement("div",{id:"lo-gmail-compose-embed-placeholder:"+String(r)})))))));document.getElementById("loom-main-dropdown-dump").innerHTML+=o,e[t].insertBefore(a,e[t].firstChild.nextSibling),this.buttonInjectLogSent||(yh.info({integration:"gmail",event:"buttoninject"}),this.buttonInjectLogSent=!0);const s=document.getElementById("loom-button-dropdown:"+r);return s.style.position="absolute",s.style.zIndex=Mg,n}injectGmailComposerButton(){if(!document.getElementById("loom-button-dropdown-right-click")){const e=Pn.renderToStaticMarkup(i.createElement("div",{className:"loom-drop-down",id:"loom-button-dropdown-right-click",style:{position:"absolute",zIndex:Mg}},i.createElement("ul",{className:"lo-gmail-compose-button-dropdown-menu"},i.createElement("li",{className:"lo-gmail-compose-button-dropdown-menu-remove-button"},i.createElement(qr,{icon:i.createElement(Fn,null)}),i.createElement("div",{className:"lo-gmail-compose-dropdown-menu-label",id:"loom-remove-button"},"Remove button")))));document.getElementById("loom-main-dropdown-dump").innerHTML+=e}this.injectButton=!1;const e=Object.keys(this.cssSelectors.toolbar),t=document.querySelectorAll(`tr[${e}="${this.cssSelectors.toolbar[e]}"]`);if(t.length>this.prevLength){let e=-1;Array.from(t).forEach(((t,r)=>{0===t.getElementsByClassName("loom-embedded-button").length&&(e=r)})),-1===e&&yh.info("Gmail Integration: Index out of bounds");const r=this.embedLoomButton(t,e);this.currentCompose=r;const i=Object.keys(this.cssSelectors.editor);document.querySelectorAll(`div[${i}="${this.cssSelectors.editor[i]}"]`)[e].setAttribute("data-loom-id",r);const n=r.split(":")[1];document.getElementById(r).addEventListener("click",(()=>{document.getElementById("loom-button-dropdown:"+String(n)).classList.toggle("loom-button-show");const e=document.getElementById(r).getBoundingClientRect(),t=document.getElementById("loom-button-dropdown:"+n),i=document.getElementById("loom-insert-latest:"+n).getBoundingClientRect();t.style.left=e.x-i.width/2+"px",t.style.top=e.y-2.5*i.height-10+"px",this.props.fetchMostRecentSession(),Lh("Extension Gmail Integration Record Dropdown Click",{implementation:this.props.implementation,upsell:!1})})),document.getElementById(r).addEventListener("contextmenu",(e=>{e.preventDefault();const t=document.getElementById("loom-button-dropdown:"+String(n));t.classList.contains("loom-button-show")&&t.classList.toggle("loom-button-show");const i=document.getElementById("loom-button-dropdown-right-click");i.classList.toggle("loom-button-show");const a=document.getElementById(r).getBoundingClientRect(),o=document.querySelector(".lo-gmail-compose-button-dropdown-menu-remove-button").getBoundingClientRect();i.style.left=a.x-o.width/2+"px",i.style.top=a.y-1.5*o.height-10+"px"})),this.attachGmailComposeButtonHandlers(r),this.expandLinksOnComposeView(r)}this.prevLength=t.length}componentWillUnmount(){this.destroyComponent()}componentDidMount(){this.props.fetchMostRecentSession()}componentDidUpdate(){const{embedPreviewLoaded:e}=this.state,{latestPreviewModalSession:t,previewModalSessionReady:r}=this.props;this.injectButton&&this.injectGmailComposerButton(),this.testToolbar(),this.idToLoomButtons=this.idToLoomButtons.filter((e=>document.querySelectorAll(`[data-loom-id="${e.id}"]`).length>0||(e.bodyObs&&e.bodyObs.disconnect(),!1))),this.prevLength=this.idToLoomButtons.length,t||r||!e||this.setState({embedPreviewLoaded:!1,title:""}),this.embedRef&&t&&r&&!e&&(this.embedRef.appendChild(sg(this.props.latestPreviewModalSession,{"max-width":"unset",width:"100%"},{},{hideTitle:!0,hideShare:!0,hideSpeedSelector:!0,hideOwner:!0})[0]),this.setState({embedPreviewLoaded:!0}))}}var _g=Ce((e=>{const{expand:t}=e.integrationSettings.integrate_gmail,r=e.integrationSettings,{mostRecentSession:i,latestPreviewModalSession:n,previewModalSessionReady:a}=e.sessions;return{linkExpandingEnabled:t,mostRecentSession:i,latestPreviewModalSession:n,previewModalSessionReady:a,settings:r}}),(e=>({updateLatestPreviewModalSession:t=>e(fh(t)),fetchMostRecentSession:()=>e(bh()),denyGmailLinkExpanding:()=>e(Ys()),updateNameToSession:(t,r,i)=>e(hh({name:t,video:r,fromRobot:i})),handleUpdateSource:()=>e(Vo("gmail-compose-view-dropdown-button")),handleDelegateOpenPinnedAndCapture:()=>{return e((t=!0,(e,r)=>{const i=r(),n=Zs(i),a=(e=>$s(e).mic_muted_permitted)(i),o=(e=>$s(e).show_mic_issue_warning_pill)(i),s=(e=>$s(e).mic_issue_permitted)(i),{source:u,recorderPhase:c}=i.recording;if(!n&&!a)return void e(Ns(!0));if(!s&&!a&&o)return void e(Is(!0));const p=Vs(r());let l=t&&(p===aa.FullScreen||p===aa.Window);"companion-beam-button"===u&&(l=l&&c!==Go.active),chrome.runtime.sendMessage({type:ia.openPinnedTab,focusNewTab:l})}));var t}})))(Tg),Rg=n(54333);function Og(e){return function(t){var r=t.dispatch,i=t.getState;return function(t){return function(n){return"function"==typeof n?n(r,i,e):t(n)}}}}var wg=Og();wg.withExtraArgument=Og;var Pg=wg;const jg=({children:e})=>{const[t,r]=i.useState(null);return i.useEffect((()=>{(async()=>{const e=new Rg.yh({portName:"LOOM_MAILMAN_MV3"}),t=[Pg],r=(0,Rg.md)(e,...t);try{return await r.ready(),r}catch(e){return yh.error(e,{message:"webextStoreProvider: cannot connect proxy store to sw store"}),Promise.reject(e)}})().then((e=>{r(e)}))}),[]),t?i.createElement(B,{store:t},e):null},zg=pa((e=>e.integrationSettings),(e=>e.integrate_gmail)),xg={editor:{contenteditable:"true"},toolbar:{class:"btC"}},Ig=()=>{const e=":root";return i.createElement(z,{styles:j`
        ${e} {
          font-size: 100%;
          --lns-radius-thread-large: var(--lns-radius-large);
          --lns-radius-thread-xlarge: var(--lns-radius-xlarge);
          --lns-radius-thread-full: var(--lns-radius-full);
        }

        ${Er(e)}

        ${kr(e)}
  
      ${(()=>{const e=[];return e.push(`${Cr(Ar)}`),Object.entries(Mr).map((([t,r])=>{e.push(`@media(min-width:${r}){${Cr(Ar,t)}}`)})),e.join("")})()}
      `})},Ng=()=>{const[e,t]=(0,i.useState)(Qn),r=Oe(zg);return r?.expand&&e===Qn&&xg?i.createElement(_g,{cssSelectors:xg,mounted:!0,implementation:Qn,unMount:e=>t(e)}):null},Eg=document.createElement("div");Eg.id="lo-gmail-container",document.body.appendChild(Eg);const kg=()=>((()=>{const e=document.createElement("style");e.type="text/css",e.textContent=$h,document.head.appendChild(e)})(),i.createElement(Ig,null));(0,k.render)(i.createElement(jg,null,i.createElement(kg,null),i.createElement(Ng,null)),Eg)}()}();
//# sourceMappingURL=gmail.js.map
//# debugId=9ad592cc-6c64-53ce-8fca-3d6eb7bfb5f4