"use strict";(self.webpackChunk_dashlane_leeloo=self.webpackChunk_dashlane_leeloo||[]).push([[6429],{49087:(e,t,a)=>{a.d(t,{B:()=>n});var i=a(96832);const n=()=>{const[e,t]=i.useState(""),[a,n]=i.useState(!1),r=()=>{n(!1)};return i.useEffect((()=>{if(!a)return;const e=setTimeout(r,5e3);return()=>clearTimeout(e)}),[a,e]),{isAlertVisible:a,alertMessage:e,setAlertMessage:t,hide:r,show:()=>{n(!0)}}}},6429:(e,t,a)=>{a.r(t),a.d(t,{PaymentCardEditPanel:()=>x});var i=a(96832),n=a(26849),r=a(14900),o=a(50756),l=a(91871),d=a(39431),s=a(82598),c=a(99852),_=a(87279),p=a(86498),m=a(88203),u=a(92077),y=a(45272),h=a(76376),b=a(61290),C=a(12271),g=a(77257),f=a(49087),w=a(31605),S=a(63520),v=a(82994),D=a(30894),N=a(44110);const Z=({item:e})=>{const{translate:t}=(0,m.Z)(),{routes:a}=(0,h.Xo)(),c=(0,p.V)(),Z=(0,f.B)(),{protectedItemsUnlockerShown:x}=(0,D.tY)(),{updateVaultItem:A}=(0,s.u)(l.L),[I,L]=i.useState(!1),[V,k]=i.useState(!1),[T,E]=i.useState(),[B,O]=i.useState(!1),[R,G]=i.useState(e);i.useEffect((()=>{(0,y.Nc)(o.PageView.ItemCreditCardDetails)}),[]);const P=()=>{c.showAlert(t("_common_generic_error"),r.BLW.ERROR)},U=()=>{(0,y.Nc)(o.PageView.ItemPaymentList),(0,u.uX)(a.userPayments)},X=e.itemName||t("payments_header_add_payment_card"),$=t("webapp_payment_edition_delete_text"),M={confirmDeleteConfirm:t("webapp_payment_edition_delete_confirm"),confirmDeleteDismiss:t("webapp_payment_edition_delete_dismiss"),confirmDeleteSubtitle:$,confirmDeleteTitle:t("webapp_payment_edition_delete_header"),deleteSuccessToast:e.itemName?t("webapp_payment_edition_name_delete_alert",{paymentCard:e.itemName}):t("webapp_payment_edition_generic_delete_alert")};return(0,N.BX)(S.zI,{isUsingNewDesign:!0,isViewingExistingItem:!0,itemHasBeenEdited:I,onNavigateOut:U,onSubmit:async()=>{if(V)return;const a=(0,C.u)(R);if(!a.isValid)return E(a.errorSet);k(!0);try{const a=await A({vaultItemType:d.U.PaymentCard,content:R,id:e.id});if((0,_.d6)(a)){const e=R.itemName?t("webapp_payment_edition_name_update_alert",{paymentCard:R.itemName}):t("webapp_payment_edition_generic_update_alert");c.showAlert(e,r.BLW.SUCCESS),U()}else k(!1),P()}catch(e){k(!1),P()}},onClickDelete:()=>O(!0),ignoreCloseOnEscape:B||x,formId:"edit_paymentcard_panel",header:(0,N.tZ)(S.V9,{icon:(0,N.tZ)(b.Z,{paymentCardColor:R.color,iconSize:"large"}),iconBackgroundColor:(0,g.Z)(R.color),title:X}),children:[(0,N.tZ)(C.gd,{itemId:e.id,errors:T,paymentCardContent:R,onValueChanged:t=>{G((a=>{const i={...a,...t};return L(!(0,n.equals)(i,e)),i}))},showCopyAlert:e=>{Z.setAlertMessage(e),Z.show()},variant:"edit"}),(0,N.tZ)(v.s,{isVisible:B,itemId:e.id,closeConfirmDeleteDialog:()=>O(!1),onDeletionSuccess:U,translations:M,vaultItemType:d.U.PaymentCard}),Z.isAlertVisible&&(0,N.tZ)("div",{className:w.Z.alertWrapper,children:(0,N.tZ)(r.bZj,{size:r.k3y.SMALL,severity:r.BLW.SUCCESS,closeIconName:t("_common_alert_dismiss_button"),onClose:()=>{Z.hide()},children:Z.alertMessage})})]})},x=({match:e})=>{const{data:t}=(0,c.k)(l.L,"query",{vaultItemTypes:[d.U.PaymentCard],ids:[`{${e.params.uuid}}`]});return t?.paymentCardsResult.items.length?(0,N.tZ)(Z,{item:t.paymentCardsResult.items[0]}):null}},12271:(e,t,a)=>{a.d(t,{gd:()=>A,u:()=>I});var i=a(96832),n=a(53214),r=a(50756),o=a(78971),l=a(88203),d=a(45272),s=a(6697),c=a(82207),_=a(30894),p=a(68819),m=a(67406),u=a(68037),y=a(7973),h=a(711),b=a(44110);const C=(([e,t],a="ASC")=>{const i=(new Date).getFullYear()+e,n=Math.abs(t-e)+1,r=new Array(n).fill(null).map(((e,t)=>({label:(i+t).toString(),value:i+t})));return"ASC"===a?r:r.sort((({value:e},{value:t})=>t-e))})([0,30],"ASC"),g=new Array(12).fill(null).map(((e,t)=>(0,y.Z)((0,h.Z)(new Date,t),"MM"))).map((e=>(0,b.tZ)(o.$m,{value:e,children:e},e))),f=C.map((e=>(0,b.tZ)(o.$m,{value:JSON.stringify(e.value),children:e.label},e.value))),w=({month:e,year:t,disabled:a,onYearChange:i,onMonthChange:n})=>{const{translate:r}=(0,l.Z)();return(0,b.BX)(o.kC,{gap:"8px",children:[(0,b.tZ)(o.mg,{"data-name":"card-expiration-month",label:r("webapp_field_expiry_date_month"),value:e,onChange:e=>{n(e)},readOnly:a,sx:{flex:1},children:g}),(0,b.tZ)(o.mg,{"data-name":"card-expiration-year",label:r("webapp_field_expiry_date_year"),value:t,onChange:e=>{i(e)},readOnly:a,sx:{flex:1},children:f})]})};var S=a(62385);const v="webapp_payment_edition_field_card_action_show_note",D="webapp_payment_edition_field_card_action_hide_note",N="webapp_payment_edition_field_cardColor_",Z=e=>t=>{t&&(0,d.Kz)(new r.UserCopyVaultItemFieldEvent({itemType:r.ItemType.CreditCard,field:e,itemId:t,isProtected:!0}))},x={[n.X.Black]:`${N}BLACK`,[n.X.Blue1]:`${N}BLUE_1`,[n.X.Blue2]:`${N}BLUE_2`,[n.X.Gold]:`${N}GOLD`,[n.X.Green1]:`${N}GREEN_1`,[n.X.Green2]:`${N}GREEN_2`,[n.X.Orange]:`${N}ORANGE`,[n.X.Red]:`${N}RED`,[n.X.Silver]:`${N}SILVER`,[n.X.White]:`${N}WHITE`},A=({itemId:e,errors:t,paymentCardContent:a,onValueChanged:y,showCopyAlert:h,variant:C})=>{const{cardNumber:g,color:f,expireMonth:N,expireYear:A,itemName:I,note:L,ownerName:V,securityCode:k="",spaceId:T}=a,{translate:E}=(0,l.Z)(),{shouldShowFrozenStateDialog:B}=(0,s.Ub)(),{logRevealCreditCardField:O}=(0,S.E)(),R=Boolean(g.length),G=Boolean(k.length),P=Boolean(L.length),U=(0,i.useCallback)((e=>t=>{const a="string"==typeof t?t:t.target.value,i="cardNumber"===e?a.replaceAll(" ",""):a;y({[e]:i})}),[y]),{areProtectedItemsUnlocked:X,openProtectedItemsUnlocker:$}=(0,_.tY)(),[M,F]=(0,i.useState)(!R),q=(0,i.useCallback)((t=>{e&&(0,d.Kz)(new r.UserRevealVaultItemFieldEvent({field:t,isProtected:!0,itemId:e,itemType:r.ItemType.CreditCard}))}),[e]),z=(0,i.useCallback)(((e,t)=>new Promise(((a,i)=>{if(e||X)return t(),a();$({action:p.P.Show,itemType:p.R.CreditCard,successCallback:()=>(t(),a()),cancelCallback:i})}))),[X,$]),W=(0,i.useCallback)((()=>{M||(q(r.Field.CardNumber),O({field:"number",name:I})),F((e=>!e))}),[M,q,O,I]),Y=!X,H=(t,a)=>{t(e),h&&h(E(a))},[K,j]=(0,i.useState)(""===k),[J,Q]=(0,i.useState)(""===L),ee=(0,i.useCallback)((()=>{K||(q(r.Field.SecurityCode),O({field:"cvv",name:I})),j((e=>!e))}),[K,q,O,I]),te=()=>Q((e=>!e)),ae=Object.values(n.X).map((e=>({label:E(x[e]),value:e}))),ie=R?M?g:"●●●● ●●●● ●●●● ●●●●":"";return(0,b.BX)("div",{sx:{display:"flex",flexDirection:"column",gap:"16px"},children:[(0,b.BX)(u.u,{title:E("webapp_payment_edition_content_card_details_label"),additionalSx:{display:"flex",flexDirection:"column",gap:"8px"},children:[(0,b.tZ)(o.qo,{"data-name":"ownerName",value:V,label:E("webapp_payment_edition_field_ownerName"),placeholder:E("webapp_payment_edition_field_placeholder_no_ownerName"),onChange:U("ownerName"),disabled:!!B}),(0,b.tZ)(o.Nc,{"data-name":"cardNumber",required:!0,formatter:M?"card":void 0,label:E("webapp_payment_edition_field_cardNumber"),placeholder:E("webapp_payment_edition_field_placeholder_no_cardNumber"),isValueInitiallyVisible:M,toggleVisibilityLabel:{hide:E("webapp_payment_edition_field_card_action_hide_card_number"),show:E("webapp_payment_edition_field_card_action_show_card_number")},onValueVisibilityChangeRequest:()=>z(M,W),onCopy:e=>{e.preventDefault(),navigator.clipboard.writeText(ie)},readOnly:!M&&R||!!B,value:ie,actions:"edit"===C?[(0,b.tZ)(c.m,{data:g,checkProtected:()=>Y,copyLabel:E("webapp_payment_edition_field_card_action_copy_card_number"),onCopy:()=>H(Z(r.Field.CardNumber),"webapp_payment_edition_field_cardNumber_copied")},"copy-card-number")]:void 0,onChange:U("cardNumber"),error:t?.has("cardNumber")},`cardNumber${M}`),(0,b.tZ)(o.Nc,{readOnly:!K&&G||!!B,value:K?k:"●●●",label:E("webapp_payment_edition_field_securityCode"),placeholder:E("webapp_payment_edition_field_placeholder_no_securityCode"),onValueVisibilityChangeRequest:()=>z(K,ee),isValueInitiallyVisible:K,toggleVisibilityLabel:{hide:E("webapp_payment_edition_field_card_action_hide_security_code"),show:E("webapp_payment_edition_field_card_action_show_security_code")},actions:"edit"===C?[(0,b.tZ)(c.m,{checkProtected:()=>Y,data:k,copyLabel:E("webapp_payment_edition_field_card_action_copy_security_code"),onCopy:()=>H(Z(r.Field.CardNumber),"webapp_payment_edition_field_securityCode_copied")},"copy-security-code")]:void 0,onChange:U("securityCode"),error:t?.has("securityCode")},`securityCode${K}`),(0,b.tZ)(w,{month:N,year:A,onYearChange:U("expireYear"),onMonthChange:U("expireMonth")}),(0,b.tZ)(o.Kx,{sx:{"textarea, .readOnlyMask":{variant:"text.ds.body.standard.monospace"}},label:E("webapp_payment_edition_field_notes"),placeholder:E("webapp_payment_edition_field_placeholder_no_notes"),"data-name":"note",readOnly:!J&&P||!!B,value:J||!P?L:"••••",onChange:U("note"),actions:[(0,b.tZ)(o.zx,{layout:"iconOnly",icon:J?"ActionHideOutlined":"ActionRevealOutlined",mood:"brand",intensity:"supershy",sx:{marginRight:"16px"},onClick:()=>{z(J,te).catch((()=>{Q(!1)}))},"aria-label":E(J?D:v),tooltip:E(J?D:v)},"card-note-visibility"),..."edit"===C?[(0,b.tZ)(c.m,{data:L,checkProtected:()=>Y,copyLabel:E("webapp_payment_edition_field_card_action_copy_note"),onCopy:()=>H(Z(r.Field.Note),"webapp_payment_edition_field_notes_copied"),itemType:p.R.CreditCard,tooltipLocation:"right"},"copy-note")]:[]],"data-testid":"credential_edit_note_value"})]}),(0,b.BX)(u.u,{title:E("webapp_payment_edition_content_card_organization_label"),additionalSx:{display:"flex",flexDirection:"column",gap:"8px"},children:[(0,b.tZ)(o.qo,{value:I,label:E("webapp_payment_edition_field_cardname"),placeholder:E("webapp_payment_edition_field_placeholder_no_cardname"),onChange:U("itemName"),disabled:!!B},"cardname"),(0,b.tZ)(o.mg,{label:E("webapp_payment_edition_field_cardColor"),placeholder:E(x[f]),value:f,onChange:U("color"),disabled:!!B,children:ae.map((e=>(0,b.tZ)(o.$m,{value:e.value,children:e.label},e.value)))},`cardColor${f}`),(0,b.tZ)(m.M,{isUsingNewDesign:!0,spaceId:null!=T?T:"",labelSx:m.e,onChange:e=>U("spaceId")(e),disabled:!!B})]})]})},I=e=>{const t=new Set;return e.cardNumber&&0!==e.cardNumber.length||t.add("cardNumber"),t.size>0?{isValid:!1,errorSet:t}:{isValid:!0}}},82994:(e,t,a)=>{a.d(t,{s:()=>u}),a(96832);var i=a(78971),n=a(82598),r=a(33354),o=a(91871),l=a(88203);let d=function(e){return e.LastAdmin="LastAdmin",e.GroupSharing="GroupSharing",e.CollectionSharing="CollectionSharing",e.Generic="Generic",e}({});var s=a(65580),c=a(44110);const _=({reason:e,translations:t,goToSharingAccess:a,closeCantDeleteDialog:n})=>{const{translate:r}=(0,l.Z)(),o=((e,t)=>{const{groupSharingTitle:a,lastAdminTitle:i,collectionSharingTitle:n,genericErrorTitle:r}=e;switch(t){case d.LastAdmin:return i;case d.GroupSharing:return a;case d.CollectionSharing:return n;case d.Generic:return r;default:return(0,s.U)(t)}})(t,e),_=((e,t)=>{const{groupSharingSubtitle:a,lastAdminSubtitle:i,collectionSharingSubtitle:n,genericErrorSubtitle:r}=e;switch(t){case d.LastAdmin:return i;case d.GroupSharing:return a;case d.CollectionSharing:return n;case d.Generic:return r;default:return(0,s.U)(t)}})(t,e);return(0,c.tZ)(i.Vq,{isOpen:!0,onClose:n,title:null!=o?o:"",closeActionLabel:r("_common_dialog_dismiss_button"),actions:e===d.LastAdmin||d.GroupSharing||d.CollectionSharing?{primary:{children:t.lastAdminActionLabel,onClick:()=>{a(),n()}}}:void 0,children:_})};var p=a(37527);const m=({closeConfirmDeleteDialog:e,onDeleteConfirm:t,translations:a})=>{const{translate:n}=(0,l.Z)(),{confirmDeleteSubtitle:r,confirmDeleteTitle:o,confirmDeleteDismiss:d,confirmDeleteConfirm:s}=a;return(0,c.tZ)(i.Vq,{title:o,onClose:e,isOpen:!0,dialogClassName:p.Ht,closeActionLabel:n("_common_dialog_dismiss_button"),isDestructive:!0,actions:{primary:{children:s,onClick:t,id:"deletion-dialog-confirm-button"},secondary:{children:d,onClick:e,autoFocus:!0,id:"deletion-dialog-dismiss-button"}},children:r})},u=({closeConfirmDeleteDialog:e,goToSharingAccess:t,isVisible:a,itemId:s,onDeletionSuccess:p,sharingStatus:u,translations:y,vaultItemType:h,isShared:b,isSharedViaUserGroup:C,isItemInCollection:g,isLastAdmin:f})=>{const{showToast:w}=(0,i.pm)(),{translate:S}=(0,l.Z)(),{deleteVaultItems:v}=(0,n.u)(o.L);if(!a)return null;let D;return(b||u?.isShared)&&(C&&(D=d.GroupSharing),f&&(D=d.LastAdmin),g&&(D=d.CollectionSharing)),D&&t?(0,c.tZ)(_,{reason:D,translations:y,goToSharingAccess:t,closeCantDeleteDialog:e}):(0,c.tZ)(m,{closeConfirmDeleteDialog:e,onDeleteConfirm:async()=>{try{var e;(await v({ids:[s],vaultItemType:h})).tag===r.rq.Success?(w({description:null!=(e=y.deleteSuccessToast)?e:S("webapp_personal_info_edition_delete_success_toast")}),p()):w({description:S("_common_generic_error"),mood:"danger",isManualDismiss:!0})}catch(e){w({description:S("_common_generic_error"),mood:"danger",isManualDismiss:!0})}},translations:y})}},31605:(e,t,a)=>{a.d(t,{Z:()=>i});const i={alertWrapper:"alertWrapper--JLZLLWrHCo"}}}]);