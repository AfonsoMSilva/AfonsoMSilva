"use strict";(globalThis.webpackChunk_dashlane_leeloo=globalThis.webpackChunk_dashlane_leeloo||[]).push([[8636],{682994:(e,t,i)=>{i.d(t,{s:()=>p}),i(696832);var a=i(659035),n=i(482598),s=i(133354),r=i(970433),l=i(488203);let o=function(e){return e.LastAdmin="LastAdmin",e.GroupSharing="GroupSharing",e.CollectionSharing="CollectionSharing",e.Generic="Generic",e}({});var c=i(365580),d=i(528835);const u=({reason:e,translations:t,goToSharingAccess:i,closeCantDeleteDialog:n})=>{const{translate:s}=(0,l.Z)(),r=((e,t)=>{const{groupSharingTitle:i,lastAdminTitle:a,collectionSharingTitle:n,genericErrorTitle:s}=e;switch(t){case o.LastAdmin:return a;case o.GroupSharing:return i;case o.CollectionSharing:return n;case o.Generic:return s;default:return(0,c.U)(t)}})(t,e),u=((e,t)=>{const{groupSharingSubtitle:i,lastAdminSubtitle:a,collectionSharingSubtitle:n,genericErrorSubtitle:s}=e;switch(t){case o.LastAdmin:return a;case o.GroupSharing:return i;case o.CollectionSharing:return n;case o.Generic:return s;default:return(0,c.U)(t)}})(t,e);return(0,d.tZ)(a.Vq,{isOpen:!0,onClose:n,title:null!=r?r:"",closeActionLabel:s("_common_dialog_dismiss_button"),actions:e===o.LastAdmin||o.GroupSharing||o.CollectionSharing?{primary:{children:t.lastAdminActionLabel,onClick:()=>{i(),n()}}}:void 0,children:u})};var _=i(837527);const m=({closeConfirmDeleteDialog:e,onDeleteConfirm:t,translations:i})=>{const{translate:n}=(0,l.Z)(),{confirmDeleteSubtitle:s,confirmDeleteTitle:r,confirmDeleteDismiss:o,confirmDeleteConfirm:c}=i;return(0,d.tZ)(a.Vq,{title:r,onClose:e,isOpen:!0,dialogClassName:_.Ht,closeActionLabel:n("_common_dialog_dismiss_button"),isDestructive:!0,actions:{primary:{children:c,onClick:t,id:"deletion-dialog-confirm-button"},secondary:{children:o,onClick:e,autoFocus:!0,id:"deletion-dialog-dismiss-button"}},children:s})},p=({closeConfirmDeleteDialog:e,goToSharingAccess:t,isVisible:i,itemId:c,onDeletionSuccess:_,sharingStatus:p,translations:h,vaultItemType:g,isShared:S,isSharedViaUserGroup:b,isItemInCollection:f,isLastAdmin:I})=>{const{showToast:C}=(0,a.pm)(),{translate:D}=(0,l.Z)(),{deleteVaultItems:T}=(0,n.u)(r.L);if(!i)return null;let A;return(S||p?.isShared)&&(b&&(A=o.GroupSharing),I&&(A=o.LastAdmin),f&&(A=o.CollectionSharing)),A&&t?(0,d.tZ)(u,{reason:A,translations:h,goToSharingAccess:t,closeCantDeleteDialog:e}):(0,d.tZ)(m,{closeConfirmDeleteDialog:e,onDeleteConfirm:async()=>{try{var e;(await T({ids:[c],vaultItemType:g})).tag===s.rq.Success?(C({description:null!=(e=h.deleteSuccessToast)?e:D("webapp_personal_info_edition_delete_success_toast")}),_()):C({description:D("_common_generic_error"),mood:"danger",isManualDismiss:!0})}catch(e){C({description:D("_common_generic_error"),mood:"danger",isManualDismiss:!0})}},translations:h})}},762042:(e,t,i)=>{i.d(t,{_:()=>o});var a=i(521877),n=i(488203),s=i(301639),r=i(528835);const l=({sharing:e})=>{const{translate:t}=(0,n.Z)();return(0,r.tZ)(s.Z,{tooltipPlacement:"top-start",sharing:e,text:t("webapp_sharing_invite_share"),origin:a.Origin.ItemDetailView})},o=({id:e,isShared:t,isAdmin:i,isDiscontinuedUser:a,getSharing:n})=>t&&!i||a?null:(0,r.tZ)(l,{sharing:n(e)})},768636:(e,t,i)=>{i.r(t),i.d(t,{SecretEditPanel:()=>B});var a=i(696832),n=i(15192),s=i(970433),r=i(339431),l=i(995445),o=i(133354),c=i(799852),d=i(261582),u=i(713252),_=i(521877),m=i(830894),p=i(45272),h=i(37336),g=i(692077),S=i(242714),b=i(488203),f=i(615940),I=i(762042),C=i(682994),D=i(63520),T=i(99822),A=i(78047),w=i(366098),y=i(833090),v=i(806697),Z=i(979808),E=i(482598),U=i(514900),x=i(86498),L=i(773157),O=i(740300),F=i(899193),V=i(92730),G=i(528835);const{CONTENT:N,SHARED_ACCESS:P,DOCUMENT_STORAGE:R}=f.SecretsTabs,q=({secret:e,isShared:t,isAdmin:i,isSharedViaUserGroup:n,isLastAdmin:l})=>{var c,d,u;const{translate:m}=(0,b.Z)(),{routes:h}=(0,g.Xo)(),{navigateBack:q}=(0,V.u)(),[k,B]=(0,a.useState)(N),[M,H]=(0,a.useState)(!1),[X,z]=(0,a.useState)(!1),[Y,K]=(0,a.useState)(!1),[W,$]=(0,a.useState)(!1),[j,J]=(0,a.useState)(!1),[Q,ee]=(0,a.useState)({id:e.id,limitedPermissions:t&&!i,title:e.title,content:e.content,spaceId:null!=(c=e.spaceId)?c:"",secured:null!=(d=e.isSecured)&&d,attachments:null!=(u=e.attachments)?u:[]}),{data:te,status:ie}=(0,Z.r)(e.id),ae=function(){const{translate:e}=(0,b.Z)(),{showAlert:t}=(0,x.V)(),{updateVaultItem:i}=(0,E.u)(s.L);return async(a,n)=>{try{await i({vaultItemType:r.U.Secret,content:a,id:n})}catch{t(e("_common_generic_error"),U.BLW.ERROR)}}}(),{shouldShowFrozenStateDialog:ne}=(0,v.Ub)(),se=(0,S.o)("ace_secrets_vault_attachment")||!!e.attachments&&e.attachments.length>0,re=t&&ie===o.rq.Success&&null!=(le=te?.count)?le:0;var le;const oe=()=>{q(h.userSecrets)};if(!e)return oe(),null;const ce=async(t=!0,i)=>{var a;$(!0),await ae({title:Q.title,content:Q.content,spaceId:null!=(a=Q.spaceId)?a:"",isSecured:Q.secured,attachments:i},e.id),$(!1),t&&oe()},de=()=>{J(!0)},ue=async e=>{if(J(!1),e.success){await O.C.commitSecureFile({secureFileInfo:e.secureFileInfo});const t=[...Q.attachments,(0,F.w)(e.secureFileInfo)];ee((e=>({...e,attachments:t}))),ce(!1,t)}},_e={confirmDeleteConfirm:m("webapp_secrets_edition_delete_confirm"),confirmDeleteDismiss:m("webapp_credential_edition_delete_dismiss"),confirmDeleteSubtitle:m("webapp_credential_edition_confirm_delete_subtitle"),confirmDeleteTitle:m("webapp_secrets_edition_delete_title"),lastAdminActionLabel:m("webapp_credential_edition_change_permissions"),lastAdminTitle:m("webapp_credential_edition_last_admin_title"),lastAdminSubtitle:m("webapp_credential_edition_last_admin_subtitle"),groupSharingTitle:m("webapp_secrets_edition_group_sharing_title"),groupSharingSubtitle:m("webapp_credential_edition_group_sharing_subtitle"),genericErrorTitle:"webapp_account_recovery_generic_error_title",genericErrorSubtitle:"webapp_account_recovery_generic_error_subtitle"};if(null===ne)return null;const me=t||se?[{id:"tab-secret-detail",contentId:"content-secret-detail",title:m("webapp_secrets_edition_field_tab_title_details"),onSelect:()=>B(N)}]:[];return t?me.push({id:"tab-secret-shared-access",contentId:"content-secret-shared-access",title:`${m("webapp_secure_notes_edition_field_tab_title_shared_access")} (${re})`,onSelect:()=>B(P)}):se&&me.push({id:"tab-secret-attachments",contentId:"content-secret-attachments",title:m("webapp_secrets_edition_field_tab_title_attachments"),onSelect:()=>B(R)}),(0,G.BX)(D.zI,{isUsingNewDesign:!0,isViewingExistingItem:!0,itemHasBeenEdited:M,onSubmit:()=>ce(),submitPending:W,secondaryActions:(()=>{switch(k){case N:return[(a=e,!a||t&&!i||a.attachments?.length?null:(0,G.tZ)(I._,{id:e.id,isShared:t,isAdmin:i,isDiscontinuedUser:ne,getSharing:T.fl},"shareaction")),ne?null:(0,G.tZ)(y.q,{copyValue:Q.content,buttonText:m("webapp_credential_edition_field_generic_action_copy"),onCopyToClipboard:()=>(0,p.Kz)(new _.UserCopyVaultItemFieldEvent({itemId:e.id,itemType:_.ItemType.Secret,field:_.Field.Secret,isProtected:e.isSecured}))},"copyaction")];case R:return[(0,G.tZ)(L.d,{isQuotaReached:!1,onFileUploadStarted:de,onFileUploadDone:ue,isShared:t,itemId:e.id,dataType:"KWSecret",disabled:!!ne},"uploadAction")];default:return[]}var a})(),onNavigateOut:oe,onClickDelete:()=>z(!0),ignoreCloseOnEscape:X||Y,isSomeDialogOpen:X,formId:"edit_secret_panel",header:(0,G.tZ)(w.h,{title:Q.title,tabs:me}),children:[(0,G.tZ)(A.e,{activeTab:k,isAdmin:i,isAttachmentUploading:j,isNewItem:!1,secretValues:Q,handleChange:(t,i)=>{if("spaceId"===t&&i===Q.spaceId)return;const a={...Q,[t]:i},n=e.title!==a.title||e.content!==a.content||e.spaceId!==a.spaceId||e.isSecured!==a.secured;n!==M&&H(n),ee(a)},handleFileInfoDetached:e=>{const t=Q.attachments.filter((t=>t.id!==e));ee((e=>({...e,attachments:t}))),ce(!1,t)},onModalDisplayStateChange:K}),(0,G.tZ)(C.s,{isVisible:X,itemId:e.id,closeConfirmDeleteDialog:()=>z(!1),goToSharingAccess:()=>{B(f.SecretsTabs.SHARED_ACCESS)},onDeletionSuccess:oe,translations:_e,vaultItemType:r.U.Secret,isShared:t,isLastAdmin:l,isSharedViaUserGroup:n})]})},k=e=>{const{secret:t}=e,i=(0,m.tY)();(0,a.useEffect)((()=>{(0,p.Nc)(_.PageView.ItemSecretDetails)}),[t]);const{getPermissionForItem:n,getSharingStatusForItem:s,getIsLastAdminForItem:r}=(0,l.Y)(d.X,{getPermissionForItem:{queryParam:{itemId:t.id}},getSharingStatusForItem:{queryParam:{itemId:t.id}},getIsLastAdminForItem:{queryParam:{itemId:t.id}}},[]);if(n.status!==o.rq.Success||s.status!==o.rq.Success||r.status!==o.rq.Success)return null;const{isShared:c,isSharedViaUserGroup:h}=s.data,{isLastAdmin:g}=r.data;return(0,G.tZ)(q,{...e,...i,isShared:c,isAdmin:c&&n.data.permission===u.y3.Admin,isSharedViaUserGroup:h,isLastAdmin:g})},B=e=>{const{routes:t}=(0,g.Xo)(),{data:i,status:a}=(0,c.k)(s.L,"query",{vaultItemTypes:[r.U.Secret],ids:[`{${e.match.params.uuid}}`]});return a===o.rq.Loading?null:i?.secretsResult.items.length?(0,G.tZ)(k,{...e,secret:i.secretsResult.items[0]}):e.location?.state?(0,G.tZ)(n.l_,{to:(0,h.rF)(e.location.state,t)}):(0,G.tZ)(n.l_,{to:t.userSecrets})}},615940:(e,t,i)=>{i.d(t,{SecretsTabs:()=>a});let a=function(e){return e[e.CONTENT=0]="CONTENT",e[e.SHARED_ACCESS=1]="SHARED_ACCESS",e[e.DOCUMENT_STORAGE=2]="DOCUMENT_STORAGE",e}({})},366098:(e,t,i)=>{i.d(t,{h:()=>l});var a,n=i(659035),s=i(63520),r=i(528835);const l=({title:e,tabs:t})=>(0,r.tZ)(s.V9,{icon:(0,r.tZ)("div",{sx:{width:"168px",height:"108px",borderStyle:"solid",borderWidth:"1px",borderRadius:"4px",borderColor:"ds.border.neutral.quiet.idle",display:"flex",justifyContent:"center",alignItems:"center"},children:a||(a=(0,r.tZ)(n.JO,{name:"ItemSecretOutlined",color:"ds.text.neutral.standard",size:"xlarge"}))}),title:e,tabs:t})},78047:(e,t,i)=>{i.d(t,{e:()=>w});var a=i(696832),n=i(659035),s=i(133354),r=i(980936),l=i(488203),o=i(555449),c=i(433988),d=i(154350),u=i(468037),_=i(167406),m=i(615940),p=i(806697),h=i(61014),g=i(521877),S=i(830894),b=i(868819),f=i(528835);const{CONTENT:I,SHARED_ACCESS:C,DOCUMENT_STORAGE:D}=m.SecretsTabs,T="webapp_secure_notes_edition_field_text_max_size_reached",A=1e4,w=({activeTab:e,isAdmin:t,isAttachmentUploading:i,isNewItem:m,secretValues:w,handleChange:y,handleFileInfoDetached:v,onModalDisplayStateChange:Z})=>{const{translate:E}=(0,l.Z)(),[U,x]=(0,a.useState)(""),{shouldShowFrozenStateDialog:L}=(0,p.Ub)(),O=(0,c.F)(),{isMPLessUser:F}=(0,d.Z)(),V=!O&&!F,{areProtectedItemsUnlocked:G,openProtectedItemsUnlocker:N}=(0,S.tY)(),P=(0,r.I)(),R=P.status===s.rq.Success&&!P.isDisabled,{id:q,limitedPermissions:k,title:B,content:M,spaceId:H,secured:X}=w;return null===L?null:(0,f.BX)(f.HY,{children:[e===I&&(0,f.BX)("div",{"aria-labelledby":"tab-secret-detail",id:"content-secret-detail",children:[(0,f.BX)(u.u,{title:E("webapp_secrets_box_title_details"),children:[(0,f.tZ)(n.qo,{"data-name":"title",label:E("webapp_secrets_title_field"),value:B,onChange:e=>y("title",e.target.value),disabled:k,readOnly:L,sx:{marginBottom:"8px"}}),(0,f.tZ)(n.Kx,{"data-name":"content",label:E("webapp_secrets_content_field"),placeholder:E("webapp_secrets_content_field_placeholder"),value:M,onBeforeInput:e=>{const t=e.currentTarget.value;t.length>A&&(x(E(T,{charLeft:A-(t.length-1)})),e.preventDefault())},onPaste:e=>{const t=e.clipboardData.getData("text/plain");e.currentTarget.value.length+t.length>A&&(x(E(T,{charLeft:A-e.currentTarget.value.length})),e.preventDefault())},onChange:e=>{U&&x(""),y("content",e.target.value)},disabled:k,readOnly:L,feedback:U?{text:U}:void 0,error:!!U})]}),R?(0,f.tZ)(u.u,{title:E("webapp_secrets_box_title_organization"),additionalSx:{marginTop:"16px"},children:(0,f.tZ)("div",{children:(0,f.tZ)(_.M,{disabled:L,isUsingNewDesign:!0,defaultSpaceId:null!=H?H:"",spaceId:null!=H?H:"",onChange:e=>y("spaceId",e)})})}):null,V?(0,f.tZ)(u.u,{title:E("webapp_secrets_box_title_preferences"),additionalSx:{marginTop:"16px"},children:(0,f.tZ)(n.XZ,{readOnly:L,label:E("webapp_secrets_preferences_mp_title"),description:E("webapp_secrets_preferences_mp_description"),checked:Boolean(X),onChange:()=>{G||m?y("secured",Boolean(!X)):((0,S.jF)(),N({action:b.P.Show,itemType:b.R.Secret,successCallback:()=>y("secured",Boolean(!X))}))}})}):null]}),e===D&&(0,f.tZ)("div",{"aria-labelledby":"tab-secret-attachments",id:"content-secret-attachments",children:(0,f.tZ)(h.P,{attachments:w.attachments,additionalProps:{itemId:q,itemType:g.ItemType.Secret,handleFileInfoDetached:e=>{v(e)},onModalDisplayStateChange:Z,isUploading:i}})}),e===C&&(0,f.tZ)("div",{"aria-labelledby":"tab-secret-shared-access",id:"content-secret-shared-access",children:(0,f.tZ)(o.u,{isAdmin:t,id:q})})]})}}}]);