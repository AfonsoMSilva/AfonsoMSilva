"use strict";(self.webpackChunk_dashlane_leeloo=self.webpackChunk_dashlane_leeloo||[]).push([[4312],{66490:(e,t,a)=>{a.r(t),a.d(t,{NoteAddPanel:()=>Z});var s=a(96832),n=a(33354),o=a(50756),c=a(48038),i=a(82598),r=a(87279),l=a(14900),u=a(91871),d=a(39431),S=a(45272),p=a(92077),h=a(5465),g=a(8403),m=a(14943),y=a(6697),I=a(76376),C=a(64098),f=a(63520),N=a(86541),b=a(99193),T=a(73157),w=a(20684),D=a(39035),A=a(13368),v=a(32870),E=a(19122),_=a(86498),F=a(88203),O=a(85163),P=a(44110);const{CONTENT:U,DOCUMENT_STORAGE:R}=N.SecureNoteTabs,k=({activeSpaces:e})=>{var t;const{routes:a}=(0,I.Xo)(),n=(0,m.Y)(),{openPaywall:N}=(0,g.nL)(),k=(0,p.k6)(),{openDialog:V,shouldShowFrozenStateDialog:Z}=(0,y.Ub)(),[L,q]=(0,s.useState)(U),[B,G]=(0,s.useState)(!1),[M,Y]=(0,s.useState)(!1),[z,H]=(0,s.useState)([]),{currentSpaceId:Q}=(0,E.fV)(),W=(0,_.V)(),{translate:X}=(0,F.Z)(),{addNoteToCollections:x}=(0,O.Q)(),[K,j]=(0,s.useState)(!1),[J,$]=(0,s.useState)(""),[ee,te]=(0,s.useState)(""),[ae,se]=(0,s.useState)("GRAY"),[ne,oe]=(0,s.useState)(e?.length>0&&!e[0].info?.personalSpaceEnabled?e[0].teamId:null!=Q?Q:""),[ce,ie]=(0,s.useState)(!1),[re,le]=(0,s.useState)(!1),{createVaultItem:ue}=(0,i.u)(u.L),[de,Se]=(0,s.useState)([]),[pe,he]=(0,s.useState)(!1),ge={attachments:z.map(b.w),id:"",limitedPermissions:!1,content:J,title:ee,category:"noCategory",type:"GRAY",spaceId:ne,secured:!1};(0,s.useEffect)((()=>{(0,S.Nc)(o.PageView.ItemSecureNoteCreate)}),[]),(0,s.useEffect)((()=>{Z&&V()}),[Z]);const me=()=>W.showAlert(X("_common_generic_error"),l.BLW.ERROR),ye=(0,D.vN)(o.ItemType.SecureNote,me);if(n.status!==c.rq.Success||!n?.data)return null;const Ie=(0,A.n6)(A.Co.SecureNotes,n.data?.capabilities),Ce=()=>{(0,S.Nc)(o.PageView.ItemSecureNoteList),(0,w.P)(),(0,p.uX)(a.userSecureNotes)},fe=()=>G(!0),Ne=e=>t=>{fe(),e(t)},be=Ne(oe),Te=Ne(se),we=Ne(te),De=Ne($),Ae=Ne(le);return Ie&&(N(A.qd.SecureNote),k.push("/secure-notes")),(0,P.tZ)(f.zI,{isViewingExistingItem:!1,itemHasBeenEdited:B,submitPending:M,submitDisabled:ce,onSubmit:async()=>{if(!M){Y(!0);try{await(async()=>{const e={spaceId:null!=ne?ne:"",type:ae,category:"noCategory",secured:re};try{const t=await ue({vaultItemType:d.U.SecureNote,content:{...e,content:J,title:ee,attachments:ge.attachments}});if(!(0,r.d6)(t))return void me();const a=(0,r.db)(t).id;await x(a,de)}catch(e){me()}H([])})()}catch{Y(!1)}Ce()}},secondaryActions:L===R?[t||(t=(0,P.tZ)(T.d,{isQuotaReached:!1,isShared:!1,onFileUploadStarted:()=>{j(!0)},onFileUploadDone:async e=>{j(!1),e.success&&(await h.C.commitSecureFile({secureFileInfo:e.secureFileInfo}),H([...z,e.secureFileInfo]),G(!0))},dataType:"KWSecureNote"},"uploadAction"))]:[],primaryActions:[],onNavigateOut:()=>{z.forEach((async e=>{const{Id:t}=e;ye(t)})),(0,w.P)(),H([]),Ce()},isUsingNewDesign:!0,isSomeDialogOpen:pe,formId:"add_securenote_panel",header:(0,P.tZ)(v.h,{backgroundColor:ge.type,displayDocumentStorage:!de.length,displaySharedAccess:!1,displayMoreOptions:!1,setActiveTab:q,title:ee,setTitle:e=>{fe(),te(e)}}),children:(0,P.tZ)(C.T,{activeTab:L,data:ge,content:J,title:ee,color:ae,spaceId:null!=ne?ne:"",onSpaceIdChange:be,onColorChange:Te,onTitleChange:we,onContentChange:De,onIsSecuredChange:Ae,onIsSubmitDisabled:ie,handleFileInfoDetached:e=>{H(z.filter((t=>t.Id!==e)))},hasAttachment:!!z.length,isSecured:re,isAdmin:!1,isDisabled:!!Z,isShared:!1,isUploading:K,onModifyData:fe,onCollectionsToUpdate:Se,setHasDialogsOpenedByChildren:he})})};var V=a(18108);const Z=()=>{const e=(0,V.E)();return e.status!==n.rq.Success?null:(0,P.tZ)(k,{activeSpaces:e.data})}}}]);