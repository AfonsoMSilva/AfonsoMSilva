"use strict";(globalThis.webpackChunk_dashlane_leeloo=globalThis.webpackChunk_dashlane_leeloo||[]).push([[3251],{948652:(e,t,n)=>{n.r(t),n.d(t,{Connected:()=>L});var i,a=n(799852),o=n(970433),s=n(339431),r=n(696832),c=n(526849),l=n(287279),u=n(482598),d=n(514900),m=n(521877),_=n(86498),p=n(488203),g=n(45272),h=n(692077),S=n(276376),b=n(63520),C=n(682994),f=n(860062),k=n(908940),D=n(349087),A=n(903045),y=n(631605),w=n(528835);const I=({item:e})=>{const{translate:t}=(0,p.Z)(),{routes:n}=(0,S.Xo)(),{updateVaultItem:a}=(0,u.u)(o.L),[I,L]=(0,r.useState)(!1),[T,Z]=(0,r.useState)(!1),[v,V]=(0,r.useState)(new Set),[N,U]=(0,r.useState)(e),[B,G]=(0,r.useState)(!1),{areProtectedItemsUnlocked:E,openProtectedItemsUnlocker:P,protectedItemsUnlockerShown:M}=(0,A.t)(),W=(0,D.B)(),q=(0,_.V)();(0,r.useEffect)((()=>{(0,g.Nc)(m.PageView.ItemBankStatementDetails)}),[]);const O=()=>{(0,g.Nc)(m.PageView.ItemPaymentList),(0,h.uX)(n.userPayments)},R=()=>{q.showAlert(t("_common_generic_error"),d.BLW.ERROR)},H={confirmDeleteConfirm:t("webapp_payment_edition_bank_account_delete_confirm"),confirmDeleteDismiss:t("webapp_payment_edition_bank_account_delete_dismiss"),confirmDeleteSubtitle:t("webapp_payment_edition_bank_account_delete_subtitle"),confirmDeleteTitle:t("webapp_payment_edition_bank_account_delete_title"),deleteSuccessToast:e.accountName?t("webapp_payment_edition_bank_account_name_delete_alert",{accountName:e.accountName}):t("webapp_payment_edition_bank_account_generic_delete_alert")},X=M||B;return(0,w.BX)(b.zI,{onNavigateOut:O,ignoreCloseOnEscape:X,formId:"bank-account-edit-form",onSubmit:async()=>{if(T)return;const n=(0,k.e)(N);if(!n.isValid)return V(n.errorSet);Z(!0);try{const n=await a({vaultItemType:s.U.BankAccount,content:N,id:e.id});if((0,l.d6)(n)){const e=N.accountName?t("webapp_payment_edition_bank_account_name_update_alert",{accountName:N.accountName}):t("webapp_payment_edition_bank_account_generic_update_alert");q.showAlert(e,d.BLW.SUCCESS),O()}else Z(!1),R()}catch(e){Z(!1),R()}},header:(0,w.tZ)(b.V9,{icon:i||(i=(0,w.tZ)(f.L,{})),iconBackgroundColor:d.colors.dashGreen06,title:e.accountName}),onClickDelete:()=>{G(!0)},itemHasBeenEdited:I,isViewingExistingItem:!0,children:[(0,w.tZ)(k.o,{itemId:e.id,bankAccount:N,errors:v,onCopy:e=>{W.setAlertMessage(e),W.show()},signalEditedValues:t=>{L(!(0,c.equals)(t,e)),U(t)},areProtectedItemsUnlocked:E,openProtectedItemsUnlocker:P,variant:"edit"}),(0,w.tZ)(C.s,{isVisible:B,itemId:e.id,closeConfirmDeleteDialog:()=>{G(!1)},onDeletionSuccess:O,translations:H,vaultItemType:s.U.BankAccount}),W.isAlertVisible&&(0,w.tZ)("div",{className:y.Z.alertWrapper,children:(0,w.tZ)(d.bZj,{size:d.k3y.SMALL,severity:d.BLW.SUCCESS,closeIconName:t("_common_alert_dismiss_button"),onClose:()=>{W.hide()},children:W.alertMessage})})]})},L=e=>{const{data:t}=(0,a.k)(o.L,"query",{vaultItemTypes:[s.U.BankAccount],ids:[`{${e.match.params.uuid}}`]});return t?.bankAccountsResult.items.length?(0,w.tZ)(I,{...e,item:t.bankAccountsResult.items[0]}):null}},349087:(e,t,n)=>{n.d(t,{B:()=>a});var i=n(696832);const a=()=>{const[e,t]=i.useState(""),[n,a]=i.useState(!1),o=()=>{a(!1)};return i.useEffect((()=>{if(!n)return;const e=setTimeout(o,5e3);return()=>clearTimeout(e)}),[n,e]),{isAlertVisible:n,alertMessage:e,setAlertMessage:t,hide:o,show:()=>{a(!0)}}}},682994:(e,t,n)=>{n.d(t,{s:()=>p}),n(696832);var i=n(659035),a=n(482598),o=n(133354),s=n(970433),r=n(488203);let c=function(e){return e.LastAdmin="LastAdmin",e.GroupSharing="GroupSharing",e.CollectionSharing="CollectionSharing",e.Generic="Generic",e}({});var l=n(365580),u=n(528835);const d=({reason:e,translations:t,goToSharingAccess:n,closeCantDeleteDialog:a})=>{const{translate:o}=(0,r.Z)(),s=((e,t)=>{const{groupSharingTitle:n,lastAdminTitle:i,collectionSharingTitle:a,genericErrorTitle:o}=e;switch(t){case c.LastAdmin:return i;case c.GroupSharing:return n;case c.CollectionSharing:return a;case c.Generic:return o;default:return(0,l.U)(t)}})(t,e),d=((e,t)=>{const{groupSharingSubtitle:n,lastAdminSubtitle:i,collectionSharingSubtitle:a,genericErrorSubtitle:o}=e;switch(t){case c.LastAdmin:return i;case c.GroupSharing:return n;case c.CollectionSharing:return a;case c.Generic:return o;default:return(0,l.U)(t)}})(t,e);return(0,u.tZ)(i.Vq,{isOpen:!0,onClose:a,title:null!=s?s:"",closeActionLabel:o("_common_dialog_dismiss_button"),actions:e===c.LastAdmin||c.GroupSharing||c.CollectionSharing?{primary:{children:t.lastAdminActionLabel,onClick:()=>{n(),a()}}}:void 0,children:d})};var m=n(837527);const _=({closeConfirmDeleteDialog:e,onDeleteConfirm:t,translations:n})=>{const{translate:a}=(0,r.Z)(),{confirmDeleteSubtitle:o,confirmDeleteTitle:s,confirmDeleteDismiss:c,confirmDeleteConfirm:l}=n;return(0,u.tZ)(i.Vq,{title:s,onClose:e,isOpen:!0,dialogClassName:m.Ht,closeActionLabel:a("_common_dialog_dismiss_button"),isDestructive:!0,actions:{primary:{children:l,onClick:t,id:"deletion-dialog-confirm-button"},secondary:{children:c,onClick:e,autoFocus:!0,id:"deletion-dialog-dismiss-button"}},children:o})},p=({closeConfirmDeleteDialog:e,goToSharingAccess:t,isVisible:n,itemId:l,onDeletionSuccess:m,sharingStatus:p,translations:g,vaultItemType:h,isShared:S,isSharedViaUserGroup:b,isItemInCollection:C,isLastAdmin:f})=>{const{showToast:k}=(0,i.pm)(),{translate:D}=(0,r.Z)(),{deleteVaultItems:A}=(0,a.u)(s.L);if(!n)return null;let y;return(S||p?.isShared)&&(b&&(y=c.GroupSharing),f&&(y=c.LastAdmin),C&&(y=c.CollectionSharing)),y&&t?(0,u.tZ)(d,{reason:y,translations:g,goToSharingAccess:t,closeCantDeleteDialog:e}):(0,u.tZ)(_,{closeConfirmDeleteDialog:e,onDeleteConfirm:async()=>{try{var e;(await A({ids:[l],vaultItemType:h})).tag===o.rq.Success?(k({description:null!=(e=g.deleteSuccessToast)?e:D("webapp_personal_info_edition_delete_success_toast")}),m()):k({description:D("_common_generic_error"),mood:"danger",isManualDismiss:!0})}catch(e){k({description:D("_common_generic_error"),mood:"danger",isManualDismiss:!0})}},translations:g})}},631605:(e,t,n)=>{n.d(t,{Z:()=>i});const i={alertWrapper:"alertWrapper--JLZLLWrHCo"}}}]);