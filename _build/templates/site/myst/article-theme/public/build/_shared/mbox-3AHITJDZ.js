import{b as u}from"/myst_assets_folder/_shared/chunk-2NH4LW52.js";function R(e){return e==="Subject"?"header":"string"}function k(e,r){if(e.sol()){if(r.inSeparator=!1,r.inHeader&&e.match(d))return null;if(r.inHeader=!1,r.header=null,e.match(f))return r.inHeaders=!0,r.inSeparator=!0,"atom";var n,i=!1;return(n=e.match(t))||(i=!0)&&(n=e.match(c))?(r.inHeaders=!0,r.inHeader=!0,r.emailPermitted=i,r.header=n[1],"atom"):r.inHeaders&&(n=e.match(m))?(r.inHeader=!0,r.emailPermitted=!0,r.header=n[1],"atom"):(r.inHeaders=!1,e.skipToEnd(),null)}if(r.inSeparator)return e.match(p)?"link":(e.match(H)||e.skipToEnd(),"atom");if(r.inHeader){var a=R(r.header);if(r.emailPermitted){if(e.match(v))return a+" link";if(e.match(h))return a}return e.skipToEnd(),a}return e.skipToEnd(),null}var o,l,d,f,c,t,m,p,H,v,h,S,E=u(()=>{o=["From","Sender","Reply-To","To","Cc","Bcc","Message-ID","In-Reply-To","References","Resent-From","Resent-Sender","Resent-To","Resent-Cc","Resent-Bcc","Resent-Message-ID","Return-Path","Received"],l=["Date","Subject","Comments","Keywords","Resent-Date"],d=/^[ \t]/,f=/^From /,c=new RegExp("^("+o.join("|")+"): "),t=new RegExp("^("+l.join("|")+"): "),m=/^[^:]+:/,p=/^[^ ]+@[^ ]+/,H=/^.*?(?=[^ ]+?@[^ ]+)/,v=/^<.*?>/,h=/^.*?(?=<.*>)/;S={name:"mbox",startState:function(){return{inSeparator:!1,inHeader:!1,emailPermitted:!1,header:null,inHeaders:!1}},token:k,blankLine:function(e){e.inHeaders=e.inSeparator=e.inHeader=!1},languageData:{autocomplete:o.concat(l)}}});E();export{S as mbox};
