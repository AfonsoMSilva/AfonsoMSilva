"use strict";(globalThis.webpackChunk_dashlane_leeloo=globalThis.webpackChunk_dashlane_leeloo||[]).push([[5989],{611913:(e,t,s)=>{s.d(t,{Z:()=>g});var a=s(696832),l=s(554712),i=s(383849),n=s.n(i),r=s(526849),o=s(957459),d=s(158549),p=s.n(d),h=s(573630);const c={container:"container--Qypu77vxOn",containerMultiLine:"containerMultiLine--ncWYFwQEnR",_field:"_field--KII5X4xmLN",input:"input--Iq10hxAz32 _field--KII5X4xmLN",inputRow:"inputRow--gdD_j5S1R8",textarea:"textarea--VpIWTZemV2 _field--KII5X4xmLN",label:"label--Ww_r49kt_J",text:"text--oXyCzpUMwG",value:"value--aD7nWEqBIq",multiline:"multiline--fdPM1KFHPT"};var u=s(528835);const m=e=>{navigator.clipboard.writeText(e.replaceAll(" ",""))};class g extends a.Component{constructor(e){super(e),this.field=void 0,this.handleChange=e=>{this.setState({selectionRangeStart:e.target.selectionStart,selectionRangeEnd:e.target.selectionEnd}),this.props.onChange&&this.props.onChange(e)},this.state={fieldHtmlId:(0,o.Z)(),selectionRangeStart:null,selectionRangeEnd:null}}componentDidUpdate(){null!==this.state.selectionRangeStart&&null!==this.state.selectionRangeEnd&&this.field.setSelectionRange(this.state.selectionRangeStart,this.state.selectionRangeEnd)}shouldComponentUpdate(e,t){return!((0,r.equals)(this.props.value,e.value)&&(0,r.equals)(this.props.error,e.error)&&(0,r.equals)(this.props.mask,e.mask)&&(0,r.equals)(this.props.label,e.label)&&(0,r.equals)(this.state.selectionRangeStart,t.selectionRangeStart)&&(0,r.equals)(this.state.selectionRangeEnd,t.selectionRangeEnd))}getValue(){return this.field.value}focus(){this.field.focus()}getTextarea(){var e;return(0,u.tZ)(l.Z,{inputRef:e=>{this.field=e},id:this.state.fieldHtmlId,disabled:this.props.disabled,value:null!=(e=this.props.value)?e:"",name:this.props.name,"data-name":this.props.dataName,sx:{borderColor:this.props.error&&"ds.border.danger.standard.idle"},className:c.textarea,placeholder:this.props.placeholder,onBlur:this.props.handleFieldBlur,onKeyDown:this.props.onFieldKeyDown,onChange:this.handleChange,readOnly:this.props.readOnly})}getInput(){var e;const t={onBlur:this.props.handleFieldBlur,onChange:this.handleChange,disabled:this.props.disabled,readOnly:this.props.readOnly,value:null!=(e=this.props.value)?e:""},s={ref:e=>{this.field=e},id:this.state.fieldHtmlId,autoComplete:"off",className:n()(c.input,{[c.error]:Boolean(this.props.error)}),sx:{...this.props.error&&{"::placeholder":{color:"ds.text.danger.quiet"},minWidth:"fit-content"},border:"1px solid",borderColor:this.props.error?"ds.border.danger.standard.idle":"transparent"},name:this.props.name,"data-name":this.props.dataName,type:this.props.type||"text",placeholder:this.props.placeholder,onKeyDown:this.props.onFieldKeyDown};return this.props.mask?(0,u.tZ)(p(),{...t,...this.props.maskProps,mask:this.props.mask,onCopy:()=>m(t.value),onCut:()=>m(t.value),children:e=>(0,u.tZ)("input",{...s,...e})}):(0,u.BX)("div",{className:c.inputRow,children:[(0,u.tZ)("input",{...s,...t}),(0,u.tZ)("div",{hidden:!this.props.error||"string"!=typeof this.props.error,sx:{color:"ds.text.danger.quiet"},className:c.errorMessage,children:this.props.error})]})}render(){const e="password"!==this.props.type?this.props.value||this.props.placeholder:"";return(0,u.BX)("div",{className:n()(c.container,this.props.multiLine?c.containerMultiLine:null),children:[this.props.label&&(0,u.tZ)("label",{className:c.label,sx:{color:"ds.text.neutral.catchy"},htmlFor:this.state.fieldHtmlId,children:(0,u.tZ)("span",{className:c.text,title:this.props.label,children:this.props.label})}),(0,u.tZ)(h.Z,{tooltipText:e,className:n()(c.value,{[c.placeholder]:!this.props.value,[c.multiline]:this.props.multiLine}),children:this.props.multiLine?this.getTextarea():this.getInput()})]})}}g.defaultProps={maskProps:{maskChar:""}}},504085:(e,t,s)=>{s.d(t,{Z:()=>h});var a=s(696832),l=s(526849),i=s(383849),n=s.n(i),r=s(957459);var o=s(855541),d=s(528835);function p(e,t){const s=e.find((e=>String(e.value)===String(t)));return null!=s?s:null}class h extends a.Component{constructor(e){super(e),this.select=a.createRef(),this.handleChange=e=>{const t=e.target;if(!t)return;const s=t.value,a=p(this.props.options,s);this.setState({optionSelected:a}),this.props.onChange&&this.props.onChange(e)},this.handleKeyDown=e=>{"Enter"===e.key&&e.preventDefault(),this.props.onFieldKeyDown?.(e)},this.handleFocus=()=>{this.setState({isSelectFocused:!0})},this.handleBlur=()=>{this.setState({isSelectFocused:!1})};let t=null;this.props.options.length&&(t=p(this.props.options,null===this.props.defaultOption?(0,l.head)(this.props.options).value:this.props.defaultOption.value)),this.state={fieldHtmlId:(0,r.Z)(),optionSelected:t,isSelectFocused:!1}}getValue(){if(!this.select.current)throw new Error("select ref not initialized");return this.select.current.value}render(){var e;const t=this.props.marginSide||"none",s=n()("selectContainer--mo5uz0qo56",o.Z[t],{"transparent--pz8wb74Jmh":this.props.isTransparent,"disabled--I9BAM7Vdre":this.props.disabled,"focused--ietgHqFLIm":this.state.isSelectFocused}),a=n()("selector--fgNHKzkAC3",this.props.classNames);let i;this.state.optionSelected?i=this.state.optionSelected.value:this.props.options.length&&(i=null===this.props.defaultOption?(0,l.head)(this.props.options).value:this.props.defaultOption.value);const r=this.state.optionSelected?this.state.optionSelected.selectedLabel?this.state.optionSelected.selectedLabel:this.state.optionSelected.label:this.props.placeholder;return(0,d.BX)("div",{className:"container--KChkEdb4YV",children:[this.props.label&&(0,d.tZ)("label",{className:o.Z.label,color:"ds.text.neutral.catchy",htmlFor:this.state.fieldHtmlId,title:this.props.label,children:this.props.label}),(0,d.BX)("div",{className:s,children:[(0,d.BX)("div",{className:a,children:[this.state.optionSelected&&this.state.optionSelected.icon&&(0,d.tZ)("span",{className:"icon--p3a7nsSbg9",children:this.state.optionSelected.icon}),(0,d.tZ)("span",{className:"text--SjkXyB7Kyp",sx:{color:"ds.text.neutral.catchy"},children:r})]}),(0,d.tZ)("select",{className:o.Z.select,ref:this.select,id:this.state.fieldHtmlId,value:i,name:this.props.name,disabled:this.props.disabled,"data-name":this.props.dataName,onKeyDown:this.handleKeyDown,onChange:this.handleChange,onFocus:this.handleFocus,onBlur:this.handleBlur,"aria-label":null!=(e=this.props.ariaLabel)?e:this.props.label,children:this.props.options.map((e=>(0,d.tZ)("option",{disabled:e.disabled,value:String(e.value),children:e.label},e.value)))},this.state.fieldHtmlId)]})]})}}},242521:(e,t,s)=>{s.d(t,{Jh:()=>r,UE:()=>i,ZP:()=>o});var a=s(696832),l=s(526849);const i=(0,l.compose)(l.not,l.isEmpty,l.trim,(0,l.defaultTo)("")),n=/.+@.+\..+/,r=e=>n.test(e.trim());class o extends a.Component{constructor(e){super(e),this.setInternalState=e=>{this.setState({internal:{...this.state.internal,...e}})},this.setUpdatedValues=e=>{const{signalEditedValues:t,onValuesUpdated:s}=this.props,a={...this.state.values,...e};this.setState({values:a},(()=>{t&&t(this.hasFormBeenEdited()),s&&s(a)}))},this.handleChange=(e,t="")=>{if(e instanceof Event&&t)throw new Error("handleChange was called with both a ChangeEvent and key.");const s=e?.target?{[e.target.dataset.name]:e.target.value}:{[t]:e};this.setUpdatedValues(s)},this.handleChanges=e=>{this.setUpdatedValues(e)},this.validateValues=e=>{if(0===Object.keys(e).length)return!0;const t=(0,l.reduce)(((t,s)=>(t[s]=e[s]?(0,l.compose)(l.not,e[s]):()=>!1,t)),{},Object.keys(this.state.values)),s=(0,l.evolve)(t,this.state.values);return this.setState({errors:s}),(0,l.all)((0,l.equals)(!1),(0,l.values)(s))},this.hasFormBeenEdited=()=>!(0,l.equals)(this.state.values,this.props.currentValues),this.getValues=()=>this.state.values;const t=Object.keys(e.currentValues).reduce(((e,t)=>(e[t]=!1,e)),{});this.state={internal:{},values:e.currentValues,errors:t}}componentDidUpdate(e){(0,l.equals)(this.props.currentValues,e.currentValues)||this.setState({values:this.props.currentValues})}}},375989:(e,t,s)=>{s.r(t),s.d(t,{EmailAddPanel:()=>d}),s(696832);var a=s(322983),l=s(339431),i=s(546257),n=s(53748),r=s(615446),o=s(528835);const d=(0,n.B)({iconType:r.Tu.email,vaultItemType:l.U.Email,renderForm:(e,t,s,l)=>{const n={emailAddress:"",itemName:"",spaceId:l,type:a.V.Perso};return(0,o.tZ)(i._,{lee:e,currentValues:n,signalEditedValues:s,ref:t})}})},546257:(e,t,s)=>{s.d(t,{_:()=>h}),s(696832);var a=s(526849),l=s(322983),i=s(611913),n=s(504085),r=s(806697),o=s(242521),d=s(167406),p=s(528835);class h extends o.ZP{isFormValid(){return this.validateValues({emailAddress:o.Jh})}render(){var e,t;const s=this.props.lee.translate.namespace("webapp_personal_info_edition_email_"),{shouldShowFrozenStateDialog:r}=this.context,o=[{label:s("perso_type"),value:l.V.Perso},{label:s("pro_type"),value:l.V.Pro}],h=null!=(e=(0,a.find)((0,a.propEq)("value",this.state.values.type),o))?e:(0,a.head)(o);return(0,p.BX)(p.HY,{children:[(0,p.tZ)(i.Z,{type:"email",label:s("email_label"),placeholder:s("placeholder_no_email"),dataName:"emailAddress",value:this.state.values.emailAddress,error:this.state.errors.emailAddress,onChange:this.handleChange,disabled:!!r}),(0,p.tZ)(n.Z,{label:s("type_label"),placeholder:h.label,dataName:"type",options:o,defaultOption:h,onChange:this.handleChange,disabled:!!r}),(0,p.tZ)(i.Z,{label:s("name_label"),placeholder:s("placeholder_no_emailName"),dataName:"itemName",value:this.state.values.itemName,onChange:this.handleChange,disabled:!!r}),(0,p.tZ)(d.M,{labelSx:d.e,spaceId:null!=(t=this.state.values.spaceId)?t:"",onChange:e=>this.handleChange(e,"spaceId"),disabled:!!r})]})}}h.contextType=r.CQ},53748:(e,t,s)=>{s.d(t,{B:()=>S});var a=s(696832),l=s(521877),i=s(514900),n=s(482598),r=s(970433),o=s(339431),d=s(692077),p=s(739649),h=s(86498),c=s(488203),u=s(45272),m=s(806697),g=s(63520),v=s(615446),b=s(718462),f=s(418402),C=s.n(f),y=s(528835);function S(e){const{renderForm:t,vaultItemType:s,iconType:f}=e;return({lee:e})=>{const{translate:S}=(0,c.Z)(),{routes:I}=(0,d.Xo)(),V=(0,h.V)(),{createVaultItem:w}=(0,n.u)(r.L),Z=(0,a.useRef)(null),{openDialog:x,shouldShowFrozenStateDialog:E}=(0,m.Ub)(),[N,_]=(0,a.useState)(!1);(0,a.useEffect)((()=>{const e={[o.U.Address]:l.PageView.ItemAddressCreate,[o.U.Company]:l.PageView.ItemCompanyCreate,[o.U.Email]:l.PageView.ItemEmailCreate,[o.U.Identity]:l.PageView.ItemIdentityCreate,[o.U.Phone]:l.PageView.ItemPhoneCreate,[o.U.Website]:l.PageView.ItemWebsiteCreate};(0,u.Nc)(e[s])}),[]),(0,a.useEffect)((()=>{E&&x()}),[E]);const B=()=>{(0,u.Nc)(l.PageView.ItemPersonalInfoList),(0,d.uX)(I.userPersonalInfo)},F=(0,p.B)(e.globalState),R=(0,y.tZ)(v.ZP,{iconSize:v.Jh.headerEditPanelIcon,iconType:f}),P=(0,b.gV)(S,s);return(0,y.tZ)(g.zI,{isViewingExistingItem:!1,itemHasBeenEdited:N,onNavigateOut:B,onSubmit:async()=>{Boolean(Z.current?.isFormValid())&&(await(async()=>{const e=Z.current?.getValues();e&&"success"!==(await w({vaultItemType:s,content:e})).tag&&V.showAlert(S("_common_generic_error"),i.BLW.ERROR)})(),B())},formId:"add_personalinfo_panel",header:(0,y.tZ)(g.V9,{icon:R,iconBackgroundColor:C()["--dash-green-00"],title:P}),children:t(e,Z,(()=>_(!0)),F)})}}},855541:(e,t,s)=>{s.d(t,{Z:()=>a});const a={left:"left--jltGqC2ld6",right:"right--r4mXfTZRXo",select:"select--ivbO452zoA",disable:"disable--F2KcdR2ssV",label:"label--EhkwVb63v9"}}}]);