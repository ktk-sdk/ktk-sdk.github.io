import{A as v,b as k,c as B,j as $,m as C,n as S,p as _,s as N,t as L}from"/myst_assets_folder/_shared/chunk-KHLBQ46G.js";import"/myst_assets_folder/_shared/chunk-GXJEHIGW.js";import"/myst_assets_folder/_shared/chunk-2NH4LW52.js";function F(r){return r===1?"p{\\dimexpr \\linewidth-2\\tabcolsep}":`p{\\dimexpr ${r.toFixed(3)}\\linewidth-2\\tabcolsep}`}function O(r){var e,n,i;let t=[],o=0;for(let c=0;c<r.children.length;c+=1){let h=r.children[c].children.reduce((p,g)=>{var E,T;let ce=new Array((E=g.colspan)!==null&&E!==void 0?E:1).fill(g.width?g.width/((T=g.colspan)!==null&&T!==void 0?T:1):null);return[...p,...ce]},[]),x=h.filter(p=>p>0).length;if((c===0||x>=o)&&(o=x,t=h,o===h.length))break}let l;if(o===t.length)l=t;else{let m=886-t.reduce((p,g)=>g==null?p:p+g,0),h=t.length-o,x=Math.floor(m/h);l=t.map(p=>p==null||p===0?x:p)}let s=l.reduce((c,m)=>c+m,0),a=l.map(c=>c/s),u=a.map(c=>F(c)).join(""),d=l.length>0?l.length:(i=(n=(e=r?.children[0])===null||e===void 0?void 0:e.children)===null||n===void 0?void 0:n.length)!==null&&i!==void 0?i:0;return{widths:a,columnSpec:u,numColumns:d}}function H(r,e,n,i,t,o){var l;let s=1,a=(l=e.colspan)!==null&&l!==void 0?l:1;if(a>1){let u=0;for(let d=0;d<a;d+=1)u+=t[i+d];r.write(`\\multicolumn{${a}}{${F(u)}}{`),s=a}return e.children.length===1&&e.children[0].type==="paragraph"?r.renderChildren(e.children[0],!0):r.renderChildren(e,!0),a>1&&r.write("}"),n<o-1&&r.write(" & "),s}function q(r,e){e.usePackages("booktabs");let{widths:n,columnSpec:i,numColumns:t}=O(r);if(!t)throw new Error("invalid table format, no columns");e.data.isInTable=!0,e.data.isInContainer||e.write("\\bigskip\\noindent"),e.ensureNewLine();let o=0;if(e.data.longFigure){e.ensureNewLine(),e.write("\\hline"),e.ensureNewLine();let l=!1;r.children.forEach(({children:s})=>{var a,u;if(!l){if(!((a=s[0])===null||a===void 0)&&a.header){o+=1;let d=0;s.forEach((c,m)=>{d+=H(e,c,m,d,n,s.length)}),e.write(" \\\\"),e.ensureNewLine()}!((u=s[0])===null||u===void 0)&&u.header||(l=!0)}}),o>0&&(e.ensureNewLine(),e.write("\\hline"),e.ensureNewLine(),e.write("\\endfirsthead"),e.ensureNewLine(),e.write("\\hline"),e.ensureNewLine(),e.write(`\\multicolumn{${t}}{c}{\\tablename\\ \\thetable\\ -- \\textit{Continued from previous page}}\\\\`),e.ensureNewLine(),r.children.forEach(({children:s},a)=>{if(a>=o)return;let u=0;s.forEach((d,c)=>{u+=H(e,d,c,u,n,s.length)}),e.write(" \\\\"),e.ensureNewLine()}),e.ensureNewLine(),e.write("\\hline"),e.ensureNewLine(),e.write("\\endhead"),e.ensureNewLine())}else e.write(`\\begin{tabular}{${i}}`),e.ensureNewLine(),e.write("\\toprule"),e.ensureNewLine();r.children.forEach(({children:l},s)=>{var a;if(s<o)return;let u=0;l.forEach((d,c)=>{u+=H(e,d,c,u,n,l.length)}),e.write(" \\\\"),e.ensureNewLine(),!((a=l[0])===null||a===void 0)&&a.header&&(e.write("\\hline"),e.ensureNewLine())}),e.data.longFigure?e.write("\\hline"):(e.write("\\bottomrule"),e.ensureNewLine(),e.write("\\end{tabular}")),e.closeBlock(r),e.data.isInTable=!1,e.data.isInContainer||e.write("\\bigskip")}var A=.7,U=800;function J(r,e=" "){return r.replace(/\u00A0/g,e).replace(/[\u200B-\u200D\uFEFF]/g,"")}var X="\u{1F4A5}\u{1F3AF}BACKSLASHSPACE\u{1F3AF}\u{1F4A5}",K="\u{1F4A5}\u{1F3AF}BACKSLASH\u{1F3AF}\u{1F4A5}",V="\u{1F4A5}\u{1F3AF}TILDE\u{1F3AF}\u{1F4A5}",D={"&":"\\&","%":"\\%",$:"\\$","#":"\\#",_:"\\_","{":"\\{","}":"\\}","^":"\\^"},ue={...D,"\u2019":"'","\u2018":"`","\u201D":"''","\u201C":"``","\xBB":">>","\xAB":"<<","\u2026":"\\dots","\u2013":"--","\u2014":"---","\xA9":"\\textcopyright ","\xAE":"\\textregistered ","\u2122":"\\texttrademark ","<":"\\textless ",">":"\\textgreater ","\xA0":"~","\u202F":"~","\u2009":"\\,"},Q={"\u2194":"\\leftrightarrow","\u21D4":"\\Leftrightarrow","\u2192":"\\rightarrow","\u21D2":"\\Rightarrow","\u2190":"\\leftarrow","\u21D0":"\\Leftarrow"},Y={"\u2212":"-","-":"-","\uFE63":"-","\uFF0D":"-","\uFF0B":"+"},de={"\u2080":"\\textsubscript{0}","\u2081":"\\textsubscript{1}","\u2082":"\\textsubscript{2}","\u2083":"\\textsubscript{3}","\u2084":"\\textsubscript{4}","\u2085":"\\textsubscript{5}","\u2086":"\\textsubscript{6}","\u2087":"\\textsubscript{7}","\u2088":"\\textsubscript{8}","\u2089":"\\textsubscript{9}","\u208A":"\\textsubscript{+}","\u208B":"\\textsubscript{-}","\u208C":"\\textsubscript{=}","\u208D":"\\textsubscript{(}","\u208E":"\\textsubscript{)}","\u2099":"\\textsubscript{n}","\u2070":"\\textsuperscript{0}","\xB9":"\\textsuperscript{1}","\xB2":"\\textsuperscript{2}","\xB3":"\\textsuperscript{3}","\u2074":"\\textsuperscript{4}","\u2075":"\\textsuperscript{5}","\u2076":"\\textsuperscript{6}","\u2077":"\\textsuperscript{7}","\u2078":"\\textsuperscript{8}","\u2079":"\\textsuperscript{9}","\u22C5":"\\textsuperscript{.}","\u207A":"\\textsuperscript{.}","\u207B":"\\textsuperscript{-}","\u207C":"\\textsuperscript{=}","\u207D":"\\textsuperscript{(}","\u207E":"\\textsuperscript{)}",\u207F:"\\textsuperscript{n}","\u2071":"\\textsuperscript{i}"},Z={...ue,...Q,...Y,...de},P={...Q,...Y,"\xBD":"\\frac{1}{2}","\u2153":"\\frac{1}{3}","\u2154":"\\frac{2}{3}","\xBC":"\\frac{1}{4}","\u2155":"\\frac{1}{5}","\u2156":"\\frac{2}{5}","\u2157":"\\frac{3}{5}","\u2158":"\\frac{4}{5}","\u2159":"\\frac{1}{6}","\u215A":"\\frac{5}{6}","\u2150":"\\frac{1}{7}","\u215B":"\\frac{1}{8}","\u215C":"\\frac{3}{8}","\u215D":"\\frac{5}{8}","\u215E":"\\frac{7}{8}","\u2151":"\\frac{1}{9}","\u2152":"\\frac{1}{10}","\xB1":"\\pm","\xD7":"\\times","\u22C6":"\\star",\u0391:"A",\u03B1:"\\alpha",\u0392:"B",\u03B2:"\\beta",\u00DF:"\\beta",\u0393:"\\Gamma",\u03B3:"\\gamma",\u0394:"\\Delta","\u2206":"\\Delta",\u03B4:"\\delta",\u0395:"E",\u03B5:"\\epsilon",\u0396:"Z",\u03B6:"\\zeta",\u0397:"H",\u03B7:"\\eta",\u0398:"\\Theta",\u03B8:"\\theta",\u03D1:"\\vartheta",\u0399:"I",\u03B9:"\\iota",\u039A:"K",\u03BA:"\\kappa",\u039B:"\\Lambda",\u03BB:"\\lambda",\u039C:"M",\u03BC:"\\mu",\u039D:"N",\u03BD:"\\nu",\u039E:"\\Xi",\u03BE:"\\xi",\u039F:"O",\u03BF:"o",\u03A0:"\\Pi",\u03C0:"\\pi",\u03A1:"P",\u03C1:"\\rho",\u03A3:"\\Sigma",\u03C3:"\\sigma",\u03A4:"T",\u03C4:"\\tau",\u03A5:"\\Upsilon",\u03C5:"\\upsilon",\u03A6:"\\Phi",\u03D5:"\\phi",\u03C6:"\\varphi",\u03A7:"X",\u03C7:"\\chi",\u03A8:"\\Psi",\u03C8:"\\psi",\u03A9:"\\Omega",\u03C9:"\\omega","\u2202":"\\partial","\u221E":"\\infty","\u221D":"\\propto","\u29DC":"\\iinfin","\u29DD":"\\tieinfty","\u267E":"\\acidfree","\u2248":"\\approx","\u2260":"\\neq","\u2265":"\\geq","\u2264":"\\leq","\u2022":"\\cdot"};function M(r){return Array.from(r??"").map(i=>D[i]?{kind:"text",text:D[i]}:{kind:"text",text:i}).reduce((i,t)=>{let o=i.slice(-1)[0];return o?.kind===t.kind?o.text+=t.text:i.push(t),i},[]).reduce((i,t)=>i+t.text,"")}function z(r){let e=(r??"").replace(/\\ /g,X).replace(/\\/g,K).replace(/~/g,V),t=Array.from(e).map(o=>Z[o]?{kind:"text",text:Z[o]}:P[o]?{kind:"math",text:P[o]}:{kind:"text",text:o}).reduce((o,l)=>{let s=o.slice(-1)[0];return s?.kind===l.kind?s.text+=l.text:o.push(l),o},[]).reduce((o,l)=>l.kind==="math"?`${o}$${l.text}$`:o+l.text,"").replace(new RegExp(X,"g"),"{\\textbackslash}~").replace(new RegExp(K,"g"),"{\\textbackslash}").replace(new RegExp(V,"g"),"{\\textasciitilde}");return J(t,"~")}function ee(r){let n=Array.from(r??"").reduce((i,t)=>{if(P[t]){let o=i.slice(-1)===" "?"":" ";return`${i}${o}${P[t]}`}return i+t},"").trim();return J(n)}function y(r){if(typeof r=="number"&&Number.isNaN(r))return y(.7);if(typeof r=="string")return r.endsWith("%")?y(Number(r.replace("%",""))):r.endsWith("px")?y(Number(r.replace("px",""))/800):(console.log(`Unknown width ${r} in getLatexImageWidth`),y(.7));let e=r??.7;return e<1&&(e*=100),`${e/100}\\linewidth`}function R(r){var e;let n=(e=r?.split(" ").map(i=>i.trim().toLowerCase()).filter(i=>!!i))!==null&&e!==void 0?e:[];return Array.from(new Set(n))}function I(r,e){var n;!((n=r.indexEntries)===null||n===void 0)&&n.length&&(e.data.hasIndex=!0,r.indexEntries.forEach(({entry:i,subEntry:t,emphasis:o})=>{let l=i;t?.value&&(t?.kind==="see"?l+=`|see{${t.value}}`:t?.kind==="seealso"?l+=`|seealso{${t.value}}`:l+=`!${t.value}`),o&&(l+="|textbf"),e.write(`\\index{${l}}`)}))}var f;(function(r){r.fig="fig",r.eq="eq",r.code="code",r.table="table"})(f||(f={}));function fe(r){var e;let n=(e=r?.split(" ").map(i=>i.trim().toLowerCase()).filter(i=>!!i))!==null&&e!==void 0?e:[];return[...new Set(n)]}function pe(r){switch(r.type){case"iframe":case"image":return f.fig;case"table":return f.table;case"code":return f.code;case"math":return f.eq;default:return null}}function j(r){var e;let n=pe(r);return(e=r.children)===null||e===void 0||e.forEach(i=>{let t=j(i);n?t&&(n=f.fig):n=t}),n}function me(r){let e=j(r),n=fe(r.class),i=n.includes("full-width")||n.includes("w-full");switch(e){case f.fig:return i?"figure*":"figure";case f.table:return i?"table*":"table";case f.code:return"figure";case f.eq:return"figure";default:return"figure"}}function he(r){switch(j(r)){case f.fig:case f.table:return"!htbp";case f.code:return"h";case f.eq:default:return}}var re=(r,e)=>{var n;if(e.data.isInTable){e.renderChildren(r);return}let i=N("table",r),t=!!i,o;i&&r.multipage&&(o=O(i));let l,s;r.landscape&&(e.usePackages("pdflscape"),l="\\begin{landscape}",s="\\end{landscape}");let{enumerated:a,label:u,identifier:d,multipage:c}=r,m=(n=u??d)!==null&&n!==void 0?n:void 0,h=t&&c?"longtable":me(r);h==="longtable"&&e.usePackages("longtable");let x=t&&o?o.columnSpec:void 0,p=t?void 0:he(r);l&&e.write(l);let g=x?`{${x}}`:"",E=p?`[${p}]`:"";e.write(`\\begin{${h}}${g}${E}
`),(!c||!t)&&e.write("\\centering"),e.ensureNewLine(),e.data.longFigure=c;let T=e.data.isInContainer;e.data.isInContainer=!0,e.data.nextCaptionNumbered=a??!!m,e.data.nextCaptionId=m,e.renderChildren(r),e.trimEnd(),e.data.longFigure=void 0,e.data.isInContainer=T,e.write(`
\\end{${h}}`),s&&e.write(s),I(r,e),e.closeBlock(r)},ie=(r,e)=>{if(e.data.isInTable&&r.type!==f.table)return null;e.ensureNewLine(!0);let{nextCaptionNumbered:n,nextCaptionId:i}=e.data,t=n===!1?"caption*":"caption[]",o=n&&i?`\\label{${i}}`:"";e.renderInlineEnvironment(r,t,{after:o})};var ge=["equation","multline","gather","align","alignat","flalign","matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","eqnarray"],we=new RegExp(`^\\\\begin{(${ge.join("|")})([*]?)}`);function ve(r){let e=r.trim().match(we);if(!e)return!1;let[,n,i]=e,t=`\\end{${n}${i}}`;return!!r.trim().endsWith(t)}function ne(r,e){e.options.math&&Object.entries(e.options.math).forEach(([n,i])=>{r.includes(n)&&(e.data.mathPlugins[n]=i.macro)})}function G(r,e=r.data.mathPlugins){if(!r.options.math)return e;let n=Object.entries(e),i={};Object.entries(r.options.math).forEach(([o,l])=>{e[o]||n.forEach(([,s])=>{s.includes(o)&&(i[o]=l.macro)})});let t={...i,...e};return Object.keys(i).length===0?t:G(r,t)}var be=(r,e)=>{let{label:n,enumerated:i}=r,t=r.tight===!0||r.tight==="before",o=r.tight===!0||r.tight==="after";t&&e.ensureNewLine(!0),e.usePackages("amsmath"),ne(r.value,e),e.data.isInTable?(e.write("\\(\\displaystyle "),e.write(r.value),e.write(" \\)")):ve(r.value)?(e.ensureNewLine(),e.write(r.value),e.ensureNewLine(!0)):(e.write(`\\begin{equation${i===!1?"*":""}}
`),n&&e.write(`\\label{${n}}`),e.ensureNewLine(),e.write(r.value),e.ensureNewLine(!0),e.write(`\\end{equation${i===!1?"*":""}}`)),!e.data.isInTable&&(o?e.ensureNewLine(!0):e.closeBlock(r))},xe=(r,e)=>{e.usePackages("amsmath"),ne(r.value,e),e.write("$"),e.text(r.value,!0),e.write("$")},ke={math:be,inlineMath:xe},te=ke;function oe(r){L("container",r).forEach(n=>{var i;let t=(i=n.children)===null||i===void 0?void 0:i.filter(o=>o.type==="caption"||o.type==="legend");t?.length&&(t[0].type="caption",t.slice(1).forEach(o=>{var l;t[0].children&&o.children&&((l=t[0].children)===null||l===void 0||l.push(...o.children)),o.type="__delete__"}))}),_(r,"__delete__")}function $e(r){switch(r){case"theorem":return"theorem";case"proof":return"proof";case"proposition":return"proposition";case"definition":return"definition";case"example":return"example";case"remark":return"remark";case"axiom":return"axiom";case"conjecture":return"conjecture";case"lemma":return"lemma";case"observation":return"observation";case"corollary":return"corollary";default:return""}}var le=(r,e)=>{var n;e.usePackages("amsthm");let i=r,t=$e((n=i.kind)!==null&&n!==void 0?n:"proof");if(!t){k(e.file,`Unhandled LaTeX proof environment "${i.kind}"`,{node:r,source:"myst-to-tex",ruleId:v.texRenders});return}let o=N("admonitionTitle > text",r);o&&(o.type="__delete__");let l=_(r,"__delete__");e.write("\\begin{"),e.write(t),e.write("}"),o&&(e.write("["),e.write(o.value),e.write("]")),l.identifier&&l.identifier.length>0&&(e.write("\\label{"),e.write(l.identifier),e.write("}")),e.renderChildren(l,!0),e.write("\\end{"),e.write(t),e.write("}"),e.data.hasProofs=!0},b=class{constructor(){this.preamble=this.renderThmDefinitions()}renderThmDefinitions(){let n=C("theorem",["\\newtheorem{theorem}{Theorem}[section]","\\newtheorem{corollary}{Corollary}[theorem]","\\newtheorem{lemma}[theorem]{Lemma}","\\newtheorem{proposition}{Proposition}[section]","\\newtheorem{definition}{Definition}[section]","\\newtheorem{example}{Example}[section]","\\newtheorem{remark}{Remark}[section]","\\newtheorem{axiom}{Axiom}[section]","\\newtheorem{conjecture}{Conjecture}[section]","\\newtheorem{observation}{Observation}[section]"],b.COMMENT_LENGTH),i="".padEnd(b.COMMENT_LENGTH,"%");return`${i}
${n}${i}
`}};b.COMMENT_LENGTH=50;var w=class{constructor(e,n){let i=Object.keys(e).length>0,t=Object.keys(n).length>0;!i&&!t?(this.printedDefinitions="",this.preamble=""):(this.printedDefinitions=this.renderGlossary(),this.preamble=[this.renderCommonImports(t),this.renderImports("glossary",this.createGlossaryDirectives(e)),this.renderImports("acronyms",this.createAcronymDirectives(n))].filter(o=>!!o).join(`
`))}renderGlossary(){let e=C("acronyms & glossary",["\\printglossaries"],w.COMMENT_LENGTH),n="".padEnd(w.COMMENT_LENGTH,"%");return`${n}
${e}${n}
`}renderCommonImports(e){return`${e?"\\usepackage[acronym]{glossaries}":"\\usepackage{glossaries}"}
\\makeglossaries
`}renderImports(e,n){if(!n)return"";let i=C(e,n,w.COMMENT_LENGTH);if(!i)return;let t="".padEnd(w.COMMENT_LENGTH,"%");return`${t}
${i}${t}
`}createGlossaryDirectives(e){return Object.keys(e).map(t=>({key:t,name:e[t][0],description:e[t][1]})).map(t=>`\\newglossaryentry{${t.key}}{name=${t.name},description={${t.description}}}`)}createAcronymDirectives(e){return Object.keys(e).map(i=>({key:i,acronym:e[i][0],expansion:e[i][1]})).map(i=>`\\newacronym{${i.key}}{${i.acronym}}{${i.expansion}}`)}};w.COMMENT_LENGTH=50;function Xe(r){let e=[],n="";if(r.hasProofs&&e.push(new b().preamble),r.hasIndex&&e.push("\\makeindex"),r.printGlossaries){let i=new w(r.glossary,r.abbreviations);e.push(i.preamble),i.printedDefinitions&&(n=`
${i.printedDefinitions}`)}return{preamble:e.join(`
`),suffix:n}}function Ke(r,e,n){let i=r.hasProofs||e.hasProofs,t=r.hasIndex||e.hasIndex,o=r.printGlossaries||e.printGlossaries;Object.keys(e.glossary).forEach(a=>{Object.keys(r.glossary).includes(a)&&n(`duplicate glossary entry for '${a}'`)}),Object.keys(e.abbreviations).forEach(a=>{Object.keys(r.abbreviations).includes(a)&&n(`duplicate abbreviation definition for '${a}'`)});let l={...e.glossary,...r.glossary},s={...e.abbreviations,...r.abbreviations};return{hasProofs:i,hasIndex:t,printGlossaries:o,glossary:l,abbreviations:s}}var Le=(r,e)=>{if(!e.printGlossary){e.renderChildren(r,!0);return}if(!r.identifier){e.renderChildren(r,!0);return}if(!e.glossary[r.identifier]){r.identifier.startsWith("index-heading-")?B(e.file,`Cannot cross-reference index headings in tex export "${r.identifier}"`,{node:r,source:"myst-to-tex",ruleId:v.texRenders}):k(e.file,`Unknown glossary entry identifier "${r.identifier}"`,{node:r,source:"myst-to-tex",ruleId:v.texRenders});let i=r;e.write($(r).trim()||i.label||"");return}e.write("\\gls{"),e.write(r.identifier),e.write("}")},ye=r=>Object.fromEntries(L("footnoteDefinition",r).map(e=>{let n=e;return[n.identifier,n]})),Ee=r=>Object.fromEntries(L("glossary > definitionList > *",r).map((e,n,i)=>{if(e.type!=="definitionTerm")return[];let t=e;if(!t.identifier)return[];let o=i[n+1];if(o===void 0||o.type!=="definitionDescription")throw new Error("Definition term has no associated description");let l=$(t),s=$(o);return[t.identifier,[l,s]]}).filter(e=>e.length>0)),se=r=>r.trim().toLowerCase(),Te=r=>Object.fromEntries(L("abbreviation",r).map(e=>{let n=e,i=$(n);return!i||!n.title?[]:[se(i),[i,n.title]]}).filter(e=>e.length>0)),ae={text(r,e){e.text(r.value)},paragraph(r,e){e.renderChildren(r)},heading(r,e){let{depth:n,label:i,enumerated:t}=r;if(e.data.nextHeadingIsFrameTitle)e.write("\\frametitle{"),e.data.nextHeadingIsFrameTitle=!1;else{let o=t!==!1||e.options.beamer?"":"*";n===-1&&e.write(`\\part${o}{`),n===0&&e.write(`\\chapter${o}{`),n===1&&e.write(`\\section${o}{`),n===2&&e.write(`\\subsection${o}{`),n===3&&e.write(`\\subsubsection${o}{`),n===4&&e.write(`\\paragraph${o}{`),n===5&&e.write(`\\subparagraph${o}{`),n===6&&e.write(`\\subparagraph${o}{`)}e.renderChildren(r,!0),e.write("}"),t!==!1&&i&&!r.implicit&&e.write(`\\label{${i}}`),I(r,e),e.closeBlock(r)},block(r,e){var n,i,t;let o=S(r);if(e.options.beamer){if(o.includes("outline")){e.data.nextHeadingIsFrameTitle=!1,e.renderChildren(r,!1);return}((i=(n=r.children)===null||n===void 0?void 0:n[0])===null||i===void 0?void 0:i.type)==="heading"&&(e.data.nextHeadingIsFrameTitle=!0),e.write(`

\\begin{frame}
`),e.renderChildren(r,!1),e.write(`\\end{frame}

`);return}if(r.visibility!=="remove"&&!o.includes("no-tex")&&!o.includes("no-pdf")){if(o.includes("new-page")?e.write(`\\newpage
`):o.includes("page-break")&&e.write(`\\pagebreak
`),((t=r.data)===null||t===void 0?void 0:t.part)==="index"){e.data.hasIndex=!0,e.usePackages("imakeidx"),e.write(`\\printindex
`);return}e.renderChildren(r,!1)}},blockquote(r,e){e.renderEnvironment(r,"quote")},definitionList(r,e){e.write(`\\begin{description}
`),e.renderChildren(r,!0),e.ensureNewLine(),e.write("\\end{description}"),e.closeBlock(r)},definitionTerm(r,e){e.ensureNewLine(),e.write("\\item["),e.renderChildren(r,!0),e.write("] ")},definitionDescription(r,e){e.renderChildren(r,!0)},code(r,e){var n;let i=`\\begin{verbatim}
`,t=`
\\end{verbatim}`;e.options.codeStyle==="listings"||R(r.class).includes("listings")&&r.lang!==void 0?(e.usePackages("listings"),i=`\\begin{lstlisting}[language=${r.lang}]
`,t=`
\\end{lstlisting}`):(e.options.codeStyle==="minted"||R(r.class).includes("minted"))&&(e.usePackages("minted"),i=`\\begin{minted}[breaklines]{${(n=r.lang)!==null&&n!==void 0?n:"text"}}
`,t=`
\\end{minted}`),e.write(i),e.text(r.value,!0),e.write(t),e.closeBlock(r)},list(r,e){e.data.isInTable?r.children.forEach((n,i)=>{e.write(r.ordered?`${i}.~~`:"\\textbullet~~"),e.renderChildren(n,!0),e.write("\\newline"),e.ensureNewLine()}):e.renderEnvironment(r,r.ordered?"enumerate":"itemize",{parameters:r.ordered&&r.start!==1?"resume":void 0})},listItem(r,e){e.write("\\item "),e.renderChildren(r,!0),e.write(`
`)},thematicBreak(r,e){e.write(`
\\bigskip
\\centerline{\\rule{13cm}{0.4pt}}
\\bigskip`),e.closeBlock(r)},...te,mystRole(r,e){e.renderChildren(r,!0)},mystDirective(r,e){e.renderChildren(r,!1)},div(r,e){e.renderChildren(r,!1)},span(r,e){e.renderChildren(r,!0),I(r,e)},comment(r,e){var n,i;e.ensureNewLine(),e.write(`% ${(i=(n=r.value)===null||n===void 0?void 0:n.split(`
`).join(`
% `))!==null&&i!==void 0?i:""}`),e.closeBlock(r)},strong(r,e){e.renderInlineEnvironment(r,"textbf")},emphasis(r,e){e.renderInlineEnvironment(r,"textit")},underline(r,e){e.renderInlineEnvironment(r,"uline")},inlineCode(r,e){e.write("\\texttt{"),e.text(r.value,!1),e.write("}")},subscript(r,e){e.renderInlineEnvironment(r,"textsubscript")},superscript(r,e){e.renderInlineEnvironment(r,"textsuperscript")},delete(r,e){e.usePackages("ulem"),e.renderInlineEnvironment(r,"sout")},break(r,e){e.write("\\newline"),e.ensureNewLine()},abbreviation(r,e){if(!e.printGlossary){e.renderChildren(r,!0);return}let n=$(r);if(!n)return[];let i=se(n);if(!e.abbreviations[i]){k(e.file,`Unknown abbreviation entry identifier "${i}"`,{node:r,source:"myst-to-tex",ruleId:v.texRenders});return}e.write("\\acrshort{"),e.write(i),e.write("}")},glossary(){},link(r,e){var n;e.usePackages("url","hyperref");let i=r.url;if(((n=r.children[0])===null||n===void 0?void 0:n.value)===i){e.write("\\url{"),e.write(M(i)),e.write("}");return}e.write("\\href{"),e.write(M(i)),e.write("}{"),e.renderChildren(r,!0),e.write("}")},admonition(r,e){e.usePackages("framed"),e.renderEnvironment(r,"framed")},admonitionTitle(r,e){e.renderInlineEnvironment(r,"textbf"),e.write(`\\\\
`)},table:q,image(r,e){e.usePackages("graphicx");let{width:n,url:i,align:t}=r,o=i,l=y(n);e.write(`\\includegraphics[width=${l}]{${o}}`),e.closeBlock(r)},container:re,proof:le,caption:ie,captionNumber:()=>{},crossReference(r,e,n){var i,t;if(r.kind==="definitionTerm"){Le(r,e,n);return}let o=!((i=r.template)===null||i===void 0)&&i.includes("%s")?r.template:void 0,l=((t=o??$(r))===null||t===void 0?void 0:t.replace(/\s/g,"~"))||"%s",s=r.label;e.write(l.replace(/%s/g,`\\ref{${s}}`))},citeGroup(r,e){if(e.options.citestyle==="numerical-only")e.write("\\cite{");else if(e.options.bibliography==="biblatex"){let n=r.kind==="narrative"?"textcite":"parencite";e.write(`\\${n}{`)}else{let n=r.kind==="narrative"?"t":"p";e.write(`\\cite${n}{`)}e.renderChildren(r,!0,", "),e.write("}")},cite(r,e,n){e.options.bibliography||e.usePackages("natbib"),n.type==="citeGroup"?e.write(r.label):e.options.bibliography==="biblatex"?e.write(`\\textcite{${r.label}}`):e.write(`\\cite{${r.label}}`)},embed(r,e){e.renderChildren(r,!0)},include(r,e){e.renderChildren(r,!0)},footnoteReference(r,e){if(!r.identifier)return;let n=e.footnotes[r.identifier];if(!n){k(e.file,`Unknown footnote identifier "${r.identifier}"`,{node:r,source:"myst-to-tex",ruleId:v.texRenders});return}e.write("\\footnote{"),e.renderChildren(n,!0),e.trimEnd(),e.write("}")},footnoteDefinition(){},si(r,e){var n,i,t,o;e.usePackages("siunitx"),r.number==null?e.write(`\\unit{${(i=(n=r.units)===null||n===void 0?void 0:n.map(l=>`\\${l}`).join(""))!==null&&i!==void 0?i:""}}`):e.write(`\\qty{${r.number}}{${(o=(t=r.units)===null||t===void 0?void 0:t.map(l=>`\\${l}`).join(""))!==null&&o!==void 0?o:""}}`)},inlineExpression(r,e){var n;!((n=r.children)===null||n===void 0)&&n.length?e.renderChildren(r,!0):(e.write("\\texttt{"),e.text(r.value,!1),e.write("}"))}},W=class{constructor(e,n,i){var t,o;e.result="",this.file=e,this.options=i??{},this.data={mathPlugins:{},imports:new Set},this.handlers=(t=i?.handlers)!==null&&t!==void 0?t:ae,this.references=(o=i?.references)!==null&&o!==void 0?o:{},this.footnotes=ye(n),this.glossary=i?.printGlossaries?Ee(n):{},this.abbreviations=i?.printGlossaries?Te(n):{},this.renderChildren(n)}get printGlossary(){return this.options.printGlossaries===!0}get out(){return this.file.result}usePackages(...e){e.forEach(n=>{this.data.imports.add(n)})}write(e){this.file.result+=e}text(e,n=!1){let i=n?ee(e):z(e);this.write(i)}trimEnd(){this.file.result=this.out.trimEnd()}ensureNewLine(e=!1){e&&this.trimEnd(),!this.out.endsWith(`
`)&&this.write(`
`)}renderChildren(e,n=!1,i=""){var t,o,l;let s=(o=(t=e.children)===null||t===void 0?void 0:t.length)!==null&&o!==void 0?o:0;(l=e.children)===null||l===void 0||l.forEach((a,u)=>{let d=this.handlers[a.type];d?d(a,this,e):k(this.file,`Unhandled LaTeX conversion for node of "${a.type}"`,{node:a,source:"myst-to-tex",ruleId:v.texRenders}),i&&u+1<s&&this.write(i)}),n||this.closeBlock(e)}renderEnvironment(e,n,i){let t=i?.parameters?`[${i.parameters}]`:"",o=i?.arguments?`{${i.arguments.join("}{")}}`:"";this.file.result+=`\\begin{${n}}${t}${o}
`,this.renderChildren(e,!0),this.ensureNewLine(!0),this.file.result+=`\\end{${n}}`,this.closeBlock(e)}renderInlineEnvironment(e,n,i){this.file.result+=`\\${n}{`,this.renderChildren(e,!0),this.trimEnd(),this.file.result+="}",i?.after&&(this.ensureNewLine(!0),this.write(i.after))}closeBlock(e){this.ensureNewLine(!0),this.file.result+=`
`}},Ce=function(r){return this.Compiler=(e,n)=>{oe(e);let i=new W(n,e,r??{handlers:ae}),t=n.result.trim(),o={imports:[...i.data.imports],preamble:{hasProofs:i.data.hasProofs,hasIndex:i.data.hasIndex,printGlossaries:r?.printGlossaries,glossary:i.glossary,abbreviations:i.abbreviations},commands:G(i),value:t};return n.result=o,n},e=>e},nr=Ce;export{A as DEFAULT_IMAGE_WIDTH,U as DEFAULT_PAGE_WIDTH_PIXELS,nr as default,Xe as generatePreamble,Ke as mergePreambles};
