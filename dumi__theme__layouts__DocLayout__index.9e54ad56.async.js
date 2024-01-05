"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[40367],{49313:function(Dn,H,n){n.d(H,{Z:function(){return sn},f:function(){return S}});var Y=n(667294),S=Y.createContext(!1);function sn(){return Y.useContext(S)}},438746:function(Dn,H,n){n.d(H,{Z:function(){return T}});var Y=n(97857),S=n.n(Y),sn=n(952677),f=n.n(sn),b=n(805574),O=n.n(b),un=n(385956),l=n(667294),d=n(302559);function M(Z){return Z.replace("-cn","").replace(/\/$/,"")}function T(){var Z=(0,un.useLocation)(),q=Z.search,_=(0,d.Z)(),c=O()(_,2),o=c[1],u=l.useCallback(function(e,w){var m=M(e);if(o==="cn"&&(m="".concat(m,"-cn")),q&&(m="".concat(m).concat(q)),w){var j;f()(w)==="object"?j=w[o]:j=w,m="".concat(m,"#").concat(j)}return m},[o,q]);return S()(S()({},Z),{},{pathname:M(Z.pathname),getLink:u})}},361446:function(Dn,H,n){var Y=n(805574),S=n.n(Y),sn=n(719632),f=n.n(sn),b=n(667294),O=n(844183),un=n(566254),l=n(385956),d=n(472638),M=n(438746),T=n(785893),Z=function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=(0,l.useFullSidebarData)(),o=(0,M.Z)(),u=o.pathname,e=o.search,w=(0,l.useSidebarData)(),m=_.before,j=_.after,on=(0,b.useMemo)(function(){var rn,p=f()(w!=null?w:[]);if(u.startsWith("/docs/spec")){var D=p.splice(0,1);p.push.apply(p,f()(D))}if(u.startsWith("/docs/react")){var B,N=(B=Object.entries(c).find(function(z){var k=S()(z,1),L=k[0];return L.startsWith("/changelog")}))===null||B===void 0?void 0:B[1];N&&p.splice(1,0,N[0])}if(u.startsWith("/changelog")){var P,X=(P=Object.entries(c).find(function(z){var k=S()(z,1),L=k[0];return L.startsWith("/docs/react")}))===null||P===void 0?void 0:P[1];X&&(p.unshift(X[0]),p.push.apply(p,f()(X.slice(1))))}var W=function(k){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return k&&L&&(0,T.jsx)(O.Z,{color:k==="New"?"success":"processing",bordered:!1,style:{marginInlineStart:"auto",marginInlineEnd:0,marginTop:-2},children:k.replace("VERSION",un.Z)})};return(rn=p==null?void 0:p.reduce(function(z,k){if(k!=null&&k.title)if(u.startsWith("/docs/spec")){var L,K,an=k.children.reduce(function(y,g){var s,v,E=(s=(v=g.frontmatter)===null||v===void 0?void 0:v.type)!==null&&s!==void 0?s:"default";return y[E]||(y[E]=[]),y[E].push(g),y},{}),pn=[];pn.push.apply(pn,f()((L=(K=an.default)===null||K===void 0?void 0:K.map(function(y){return{label:(0,T.jsxs)(d.Z,{to:"".concat(y.link).concat(e),children:[m,y==null?void 0:y.title,j]}),key:y.link.replace(/(-cn$)/g,"")}}))!==null&&L!==void 0?L:[])),Object.entries(an).forEach(function(y){var g=S()(y,2),s=g[0],v=g[1];s!=="default"&&pn.push({type:"group",label:s,key:s,children:v==null?void 0:v.map(function(E){return{label:(0,T.jsxs)(d.Z,{to:"".concat(E.link).concat(e),children:[m,E==null?void 0:E.title,j]}),key:E.link.replace(/(-cn$)/g,"")}})})}),z.push({label:k==null?void 0:k.title,key:k==null?void 0:k.title,children:pn})}else{var wn;z.push({type:"group",label:k==null?void 0:k.title,key:k==null?void 0:k.title,children:(wn=k.children)===null||wn===void 0?void 0:wn.map(function(y){var g,s;return{label:(0,T.jsxs)(d.Z,{to:"".concat(y.link).concat(e),style:{display:"flex",alignItems:"center"},children:[m,(0,T.jsx)("span",{children:y==null?void 0:y.title},"english"),(0,T.jsx)("span",{className:"chinese",children:(g=y.frontmatter)===null||g===void 0?void 0:g.subtitle},"chinese"),W((s=y.frontmatter)===null||s===void 0?void 0:s.tag,!m&&!j),j]}),key:y.link.replace(/(-cn$)/g,"")}})})}else{var $=k.children||[];$.every(function(y){var g;return y==null||(g=y.frontmatter)===null||g===void 0?void 0:g.date})&&$.sort(function(y,g){var s,v;return((s=y.frontmatter)===null||s===void 0?void 0:s.date)>((v=g.frontmatter)===null||v===void 0?void 0:v.date)?-1:1}),z.push.apply(z,f()($.map(function(y){return{label:(0,T.jsxs)(d.Z,{to:"".concat(y.link).concat(e),style:{display:"flex",alignItems:"center"},children:[m,y==null?void 0:y.title,W(y.frontmatter.tag,!m&&!j),j]}),key:y.link.replace(/(-cn$)/g,"")}})))}return z},[]))!==null&&rn!==void 0?rn:[]},[w,c,u,e,_]);return[on,u]};H.Z=Z},148050:function(Dn,H,n){n.r(H),n.d(H,{default:function(){return Z}});var Y=n(168400),S=n.n(Y),sn=n(667294),f=n(639389),b=n.n(f),O=n(65630),un=n(879587),l=n(785893),d,M="https://github.com/ant-design/ant-design/edit/master/",T=(0,O.kc)(function(q){var _=q.token,c=q.css,o=_.colorIcon,u=_.colorText,e=_.iconCls;return{editButton:c(d||(d=S()([`
      a& {
        position: relative;
        top: -2px;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        margin-inline-start: 6px;

        `,` {
          display: block;
          color: `,`;
          font-size: 16px;
          transition: all 0.3s;

          &:hover {
            color: `,`;
          }
        }
      }
    `])),e,o,u)}});function Z(q){var _=q.title,c=q.filename,o=T(),u=o.styles;return(0,l.jsx)(un.Z,{title:_,children:(0,l.jsx)("a",{className:u.editButton,href:"".concat(M).concat(c),target:"_blank",rel:"noopener noreferrer",children:(0,l.jsx)(f.EditOutlined,{})})})}},70569:function(Dn,H,n){n.r(H),n.d(H,{default:function(){return bo}});var Y=n(805574),S=n.n(Y),sn=n(693967),f=n.n(sn),b=n(727484),O=n.n(b),un=n(533852),l=n(385956),d=n(667294),M=n(715778),T=n(75529),Z=n(302559),q=n(438746),_=n(168400),c=n.n(_),o=n(370917),u=n(65630),e=n(785893),w,m={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},j=function(){var t=(0,u.Fg)(),r=function x(C){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return h<=10?`
.palette-`.concat(C,"-").concat(h,` {
  background: `).concat(t["".concat(C,"-").concat(h)],`;
}
`).concat(x(C,h+1),`
    `):""},i=function x(){var C=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return C<=13?`
.palette-gray-`.concat(C,` {
  background: `).concat(m[C],`;
}
`).concat(x(C+1),`
    `):""};return(0,e.jsx)(o.xB,{styles:(0,o.iv)(w||(w=c()([`
        .color-palettes {
          margin: 0 1%;

          &-dark {
            margin: 0;
            padding: 0 28px;
            background-color: #141414;

            .color-title {
              color: rgba(255, 255, 255, 0.85);
            }

            .color-description {
              color: rgba(255, 255, 255, 0.45);
            }

            .color-palette {
              margin: 45px 3.5% 45px 0;

              &:nth-of-type(3n) {
                margin-right: 0;
              }

              .main-color-item {
                margin-right: 0;

                &:hover {
                  margin-right: -8px;
                }
              }
            }
          }
        }

        .color-palette {
          display: inline-block;
          width: 31%;
          margin: 45px 1%;

          &-pick {
            margin: 0 0 20px;
            font-size: 20px;
            text-align: center;
          }

          &-picker {
            margin: 24px 0;

            &-value {
              position: relative;
              top: -3px;
              margin-left: 16px;
              font-size: 14px;
              font-family: Consolas, sans-serif;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }
            }

            &-validation {
              position: relative;
              top: -3px;
              margin-left: 16px;
              color: `,`;
              font-size: 13px;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }

              &-dark {
                margin-left: 0;
              }
            }
          }
        }

        .main-color {
          `,`
          `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  text-align: left;

          &-item {
            position: relative;
            height: 44px;
            margin-right: 4px;
            padding: 0 12px;
            font-size: 14px;
            font-family: Consolas, sans-serif;
            line-height: 44px;
            cursor: pointer;
            transition: all 0.2s;

            &:first-child {
              border-radius: 4px 4px 0 0;
            }

            &:last-child {
              border-radius: 0 0 4px 4px;
            }

            &:hover {
              margin-right: -8px;
              border-radius: 0 4px 4px 0;
            }
          }

          &-item &-text {
            float: left;
            transition: all 0.3s;
          }

          &-item &-value {
            position: relative;
            left: 3px;
            float: right;
            transform: scale(0.85);
            transform-origin: 100% 50%;
            opacity: 0;
            transition: all 0.3s;
          }
        }

        .color-title {
          margin: 0 0 24px;
          color: #5c6b77;
          font-weight: 500;
          font-size: 22px;
          text-align: center;
          text-transform: capitalize;
        }

        .color-description {
          display: block;
          color: #777;
          font-weight: lighter;
          font-size: 14px;
        }

        .main-color:hover {
          .main-color-value {
            left: 0;
            opacity: 0.7;
          }
        }

        .color-palette-horizontal {
          box-sizing: border-box;
          width: 100%;

          &-dark {
            height: 303px;
            padding: 32px 28px;
            background-color: #141414;

            .color-palette-picker {
              margin-bottom: 0;
            }

            .color-palette-pick {
              color: rgba(255, 255, 255, 0.65);
              text-align: left;

              &-hex {
                color: rgba(255, 255, 255, 0.65);
              }

              .ant-row-rtl & {
                direction: rtl;
                text-align: right;
              }
            }
          }

          .main-color {
            display: flex;

            &-item {
              position: relative;
              flex: 1;
              box-sizing: border-box;
              height: 86px;
              margin-right: 0;
              padding: 37px 0 0;
              line-height: normal;
              text-align: center;
              border-radius: 0;

              .main-color-text {
                float: none;
              }

              &:hover {
                height: 96px;
                margin-top: -10px;
                border-radius: 4px 4px 0 0;
              }
            }

            &-value {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              text-align: center;
              transform-origin: unset;
            }

            &:hover {
              .main-color-item {
                padding-top: 8px;
              }

              .main-color-value {
                bottom: 8px;
                opacity: 0.7;
              }
            }
          }
        }
      `])),t.colorError,r("blue"),r("purple"),r("cyan"),r("green"),r("magenta"),r("red"),r("volcano"),r("orange"),r("gold"),r("yellow"),r("lime"),r("geekblue"),i())})},on=j,rn,p=function(){return(0,e.jsx)(o.xB,{styles:(0,o.iv)(rn||(rn=c()([`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        > a[aria-hidden]:first-child {
          float: left;
          width: 20px;
          padding-inline-end: 4px;
          font-size: 0;
          line-height: inherit;
          text-align: right;
          padding-inline-end: 4px;
          margin-inline-start: -24px;

          [data-direction='rtl'] & {
            float: right;
          }

          &:hover {
            border: 0;
          }

          > .icon-link::before {
            font-size: 20px;
            content: '#';
          }
        }

        &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
          visibility: hidden;
        }
      }
    `])))})},D,B=function(){var a=(0,u.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(D||(D=c()([`
        @font-face {
          font-weight: normal;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        @font-face {
          font-weight: bold;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_exesdog9toj.ttf')
              format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        // \u7EC4\u4EF6\u4E30\u5BCC\uFF0C\u9009\u7528\u81EA\u5982\u5B9A\u5236\u4E3B\u9898\u968F\u5FC3\u6240\u6B32\u8BBE\u8BA1\u8BED\u8A00\u4E0E\u7814\u53D1\u6846\u67B61234567890 QWERTYUIOPLKJHGFDSAZXCVBNM,.mnbvcxzasdfghjklpoiuytrewq
        /* CDN \u670D\u52A1\u4EC5\u4F9B\u5E73\u53F0\u4F53\u9A8C\u548C\u8C03\u8BD5\u4F7F\u7528\uFF0C\u5E73\u53F0\u4E0D\u627F\u8BFA\u670D\u52A1\u7684\u7A33\u5B9A\u6027\uFF0C\u4F01\u4E1A\u5BA2\u6237\u9700\u4E0B\u8F7D\u5B57\u4F53\u5305\u81EA\u884C\u53D1\u5E03\u4F7F\u7528\u5E76\u505A\u597D\u5907\u4EFD\u3002 */
        @font-face {
          font-weight: 900;
          font-family: 'AliPuHui';
          src: url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2')
              format('woff2'),
            url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
          font-display: swap;
        }

        html {
          direction: initial;

          &.rtl {
            direction: rtl;
          }
        }

        body {
          overflow-x: hidden;
          color: `,`;
          font-size: `,`px;
          font-family: `,`;
          line-height: `,`;
          background: `,`;
          transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
      `])),a.colorText,a.fontSize,a.fontFamily,a.lineHeight,a.colorBgContainer)})},N,P=function(){var a=(0,u.Fg)(),t=a.anchorTop;return(0,e.jsx)(o.xB,{styles:(0,o.iv)(N||(N=c()([`
      body,
      div,
      dl,
      dt,
      dd,
      ul,
      ol,
      li,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      pre,
      code,
      form,
      fieldset,
      legend,
      input,
      textarea,
      p,
      blockquote,
      th,
      td,
      hr,
      button,
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        margin: 0;
        padding: 0;
      }

      ul,
      ol {
        list-style: none;
      }

      img {
        vertical-align: middle;
        border-style: none;
      }

      [id] {
        scroll-margin-top: `,`px;
      }

      [data-prefers-color='dark'] {
        color-scheme: dark;
      }

      [data-prefers-color='light'] {
        color-scheme: light;
      }
    `])),t)})},X=n(510274),W,z=function(){var t=(0,u.Fg)(),r=t.antCls,i=t.colorPrimary;return(0,e.jsx)(o.xB,{styles:(0,o.iv)(W||(W=c()([`
        .markdown {
          color: `,`;
          font-size: 14px;
          line-height: 2;
        }

        .highlight {
          line-height: 1.5;
        }

        .markdown img {
          max-width: calc(100% - 32px);
          max-height: 100%;
        }

        .markdown > a > img,
        .markdown > img {
          display: block;
          margin: 0 auto;
        }

        .markdown p > img {
          margin: 34px auto;
          box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
          max-width: 1024px;
          display: block;
        }

        .markdown p > img.markdown-inline-image {
          margin: 0;
          box-shadow: none;
        }

        .markdown h1 {
          margin-top: 8px;
          margin-bottom: 20px;
          color: `,`;
          font-weight: 500;
          font-size: 30px;
          font-family: Avenir, `,`, sans-serif;
          line-height: 38px;

          .subtitle {
            margin-left: 12px;
          }
        }

        .markdown h2 {
          font-size: 24px;
          line-height: 32px;
        }

        .markdown h2,
        .markdown h3,
        .markdown h4,
        .markdown h5,
        .markdown h6 {
          clear: both;
          margin: 1.6em 0 0.6em;
          color: `,`;
          font-weight: 500;
          font-family: Avenir, `,`, sans-serif;
        }

        .markdown h3 {
          font-size: 18px;
        }

        .markdown h4 {
          font-size: 16px;
        }

        .markdown h5 {
          font-size: 14px;
        }

        .markdown h6 {
          font-size: 12px;
        }

        .markdown hr {
          clear: both;
          height: 1px;
          margin: 24px 0;
          background: `,`;
          border: 0;
        }

        .markdown p,
        .markdown pre {
          margin: 1em 0;

          `,`-row-rtl & {
            direction: rtl;
            text-align: right;
          }
        }

        .markdown ul > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: circle;

          .rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }

          &:empty {
            display: none;
          }
        }

        .markdown ol > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: decimal;

          `,`-row-rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }
        }

        .markdown ul > li > p,
        .markdown ol > li > p {
          margin: 0.2em 0;
        }

        .markdown code {
          margin: 0 1px;
          padding: 0.2em 0.4em;
          font-size: 0.9em;
          background: `,`;
          border: 1px solid `,`;
          border-radius: 3px;
        }

        .markdown pre {
          font-family: `,`;
          background: `,`;
          border-radius: `,`px;
        }

        .markdown pre code {
          margin: 0;
          padding: 0;
          overflow: auto;
          color: `,`;
          font-size: `,`px;
          direction: ltr;
          text-align: left;
          background: #f5f5f5;
          border: none;
        }

        .markdown strong,
        .markdown b {
          font-weight: 500;
        }

        .markdown .dumi-default-source-code {
          margin: 1em 0;
          background-color: `,`;
          border-radius: `,`px;
          > pre.prism-code {
            padding: 12px 20px;
            font-size: 13px;
            line-height: 2;
          }
        }
        .pic-plus {
          & > * {
            display: inline-block !important;
            vertical-align: middle;
          }
          span {
            margin: 0 20px;
            color: #aaa;
            font-size: 30px;
          }
        }

        .markdown table td > a:not(:last-child) {
          margin-right: 0 !important;

          &::after {
            position: relative !important;
          }
        }

        .markdown blockquote {
          margin: 1em 0;
          padding-left: 0.8em;
          color: `,`;
          font-size: 90%;
          border-left: 4px solid `,`;

          .rtl & {
            padding-right: 0.8em;
            padding-left: 0;
            border-right: 4px solid `,`;
            border-left: none;
          }
        }

        .markdown blockquote p {
          margin: 0;
        }

        .markdown .anchor {
          margin-left: 8px;
          opacity: 0;
          transition: opacity 0.3s;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
          }
        }

        .markdown .waiting {
          color: #ccc;
          cursor: not-allowed;
        }

        .markdown a.edit-button {
          display: inline-block;
          margin-left: 8px;
          text-decoration: none;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
            transform: rotateY(180deg);
          }

          `,`icon {
            display: block;
            color: `,`;
            font-size: 16px;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .markdown h1:hover .anchor,
        .markdown h2:hover .anchor,
        .markdown h3:hover .anchor,
        .markdown h4:hover .anchor,
        .markdown h5:hover .anchor,
        .markdown h6:hover .anchor {
          display: inline-block;
          opacity: 1;
        }

        .markdown > br,
        .markdown > p > br {
          clear: both;
        }

        .markdown .dumi-default-table {
          table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            direction: ltr;
            empty-cells: show;
            border: 1px solid `,`;
            border-collapse: collapse;
            border-spacing: 0;

            th,
            td {
              padding: 12px 24px;
              text-align: left;
              border: 1px solid `,`;

              &:first-child {
                border-left: 1px solid `,`;
              }

              &:last-child {
                border-right: 1px solid `,`;
              }

              img {
                max-width: unset;
              }
            }

            th {
              color: #5c6b77;
              font-weight: 500;
              white-space: nowrap;
              background: rgba(0, 0, 0, 0.02);
              border-width: 1px 1px 2px;
            }

            tbody tr {
              transition: all 0.3s;

              &:hover {
                background: rgba(60, 90, 100, 0.04);
              }
            }
          }

          table.component-api-table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            font-size: `,`px;
            font-family: `,`;
            line-height: `,`;
            border: 1px solid `,`;
            border-width: 0 1px;

            th {
              border-width: 1px 0 2px;
            }

            td {
              border-width: 1px 0;
              &:first-child {
                width: 18%;
                min-width: 58px;
                color: `,`;
                font-weight: 600;
                white-space: nowrap;
              }

              &:nth-child(2) {
                min-width: 160px;
              }

              &:nth-child(3) {
                width: 22%;
                color: `,`;
                font-size: `,`px;
              }

              &:nth-child(4) {
                width: 15%;
                font-size: `,`px;
              }

              &:nth-child(5) {
                width: 8%;
                font-size: `,`px;
              }

              &:nth-last-child(3):first-child {
                width: 38%;
              }

              &:nth-last-child(3):first-child ~ td:nth-last-child(2) {
                width: 70%;
              }
            }
          }
        }

        .grid-demo,
        [id^='components-grid-demo-'] {
          `,`-row > div,
            .code-box-demo `,`-row > div {
            min-height: 30px;
            margin-top: 8px;
            margin-bottom: 8px;
            color: #fff;
            text-align: center;
            border-radius: 0;
          }

          .code-box-demo `,`-row > div:not(.gutter-row) {
            padding: 16px 0;
            background: `,`;

            &:nth-child(2n + 1) {
              background: `,`;
            }
          }

          `,`-row .demo-col,
            .code-box-demo `,`-row .demo-col {
            margin-top: 0;
            margin-bottom: 0;
            padding: 30px 0;
            color: `,`;
            font-size: 18px;
            text-align: center;
            border: none;
          }

          `,`-row .demo-col-1 {
            background: `,`;
          }

          `,`-row .demo-col-2,
            .code-box-demo `,`-row .demo-col-2 {
            background: `,`;
          }

          `,`-row .demo-col-3,
            .code-box-demo `,`-row .demo-col-3 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          `,`-row .demo-col-4,
            .code-box-demo `,`-row .demo-col-4 {
            background: `,`;
          }

          `,`-row .demo-col-5,
            .code-box-demo `,`-row .demo-col-5 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          .code-box-demo .height-100 {
            height: 100px;
            line-height: 100px;
          }

          .code-box-demo .height-50 {
            height: 50px;
            line-height: 50px;
          }

          .code-box-demo .height-120 {
            height: 120px;
            line-height: 120px;
          }

          .code-box-demo .height-80 {
            height: 80px;
            line-height: 80px;
          }
        }

        [id='components-grid-demo-playground'],
        [id='components-grid-demo-gutter'] {
          > .code-box-demo `,`-row > div {
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      `])),t.colorText,t.colorTextHeading,t.fontFamily,t.colorTextHeading,t.fontFamily,t.colorSplit,r,r,t.siteMarkdownCodeBg,t.colorSplit,t.codeFamily,t.siteMarkdownCodeBg,t.borderRadius,t.colorText,Math.max(t.fontSize-1,12),t.siteMarkdownCodeBg,t.borderRadius,t.colorTextSecondary,t.colorSplit,t.colorSplit,r,t.colorTextSecondary,t.colorText,t.colorSplit,t.colorSplit,t.colorSplit,t.colorSplit,Math.max(t.fontSize-1,12),t.codeFamily,t.lineHeight,t.colorSplit,t.colorText,t.magenta7,Math.max(t.fontSize-1,12),Math.max(t.fontSize-1,12),Math.max(t.fontSize-1,12),r,r,r,i,new X.C(i).setAlpha(.75).toHex8String(),r,r,t.colorWhite,r,new X.C(i).setAlpha(.75).toHexString(),r,r,new X.C(i).setAlpha(.75).toHexString(),r,r,r,r,new X.C(i).setAlpha(.6).toHexString(),r,r,r)})},k=z,L,K=function(){var a=(0,u.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(L||(L=c()([`
        /**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/

        pre code {
          display: block;
          padding: 16px 32px;
          color: `,`;
          font-size: `,`px;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 2;
          white-space: pre;
          background: white;
          border: 1px solid #e9e9e9;
          border-radius: `,`px;
        }

        code[class*='language-'],
        pre[class*='language-'] {
          color: black;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 1.5;
          direction: ltr;
          white-space: pre;
          text-align: left;
          word-wrap: normal;
          word-break: normal;
          word-spacing: normal;
          tab-size: 4;
          hyphens: none;
          background: none;
        }

        code[class*='css'] {
          direction: ltr;
        }

        pre[class*='language-'] ::selection,
        code[class*='language-'] ::selection {
          text-shadow: none;
          background: #b3d4fc;
        }

        @media print {
          code[class*='language-'],
          pre[class*='language-'] {
            text-shadow: none;
          }
        }

        /* Code blocks */
        pre[class*='language-'] {
          margin: 16px 0;
          padding: 12px 20px;
          overflow: auto;
        }

        :not(pre) > code[class*='language-'],
        pre[class*='language-'] {
          background: #f5f5f5;
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          white-space: normal;
          border-radius: 0.3em;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: slategray;
        }

        .token.punctuation {
          color: #999;
        }

        .namespace {
          opacity: 0.7;
        }

        .markdown {
          .token.property,
          .token.tag,
          .token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: #f81d22;
          }

          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #0b8235;
          }

          .token.operator,
          .token.entity,
          .token.url,
          .language-css .token.string,
          .style .token.string {
            color: #0b8235;
          }

          .token.atrule,
          .token.attr-value,
          .token.keyword {
            color: #008dff;
          }

          .token.function {
            color: #f81d22;
          }

          .token.regex,
          .token.important,
          .token.variable {
            color: #e90;
          }

          .token.important,
          .token.bold {
            font-weight: bold;
          }

          .token.italic {
            font-style: italic;
          }

          .token.entity {
            cursor: help;
          }
        }
      `])),a.colorText,a.fontSize,a.borderRadius)})},an,pn=function(){var t=(0,u.Fg)(),r=t.antCls,i=t.iconCls;return(0,e.jsx)(o.xB,{styles:(0,o.iv)(an||(an=c()([`
        .code-boxes-col-1-1 {
          width: 100%;
        }

        .code-boxes-col-2-1 {
          display: inline-block;
          vertical-align: top;
        }

        .code-box {
          position: relative;
          display: inline-block;
          width: calc(100% - `,`px);
          margin: 0 0 16px;
          background-color: `,`;
          border: 1px solid `,`;
          border-radius: `,`px;
          transition: all 0.2s;

          .code-box-title {
            &,
            a {
              color: `,` !important;
              background: `,`;
            }
          }

          .code-box-demo {
            background-color: `,`;
            border-radius: `,"px ",`px 0 0;
            > .demo {
              overflow: auto;
            }
          }

          .markdown {
            pre {
              margin: 0.5em 0;
              padding: 6px 12px;
            }

            pre code {
              margin: 0;
              background: #f5f5f5;
            }
          }

          &:target {
            border: 1px solid `,`;
          }

          &-expand-trigger {
            position: relative;
            color: #3b4357;
            font-size: 20px;
            cursor: pointer;
            opacity: 0.75;
            transition: all 0.3s;
            margin-inline-start: 12px;

            &:hover {
              opacity: 1;
            }
          }

          &-title {
            position: absolute;
            top: -14px;
            padding: 1px 8px;
            color: #777;
            background: `,`;
            border-radius: `,"px ",`px 0 0;
            transition: background-color 0.4s;
            margin-inline-start: 16px;

            a,
            a:hover {
              color: `,`;
              font-weight: 500;
              font-size: `,`px;
            }
          }

          &-description {
            padding: 18px 24px 12px;
          }

          a.edit-button {
            position: absolute;
            top: 7px;
            right: -16px;
            font-size: 12px;
            text-decoration: none;
            background: inherit;
            transform: scale(0.9);
            padding-inline-end: 6px;

            `,` {
              color: `,`;
              transition: all 0.3s;

              &:hover {
                color: `,`;
              }
            }

            `,"-row",`-row-rtl & {
              right: auto;
              left: -22px;
            }
          }

          &-demo {
            padding: 42px 24px 50px;
            color: `,`;
            border-bottom: 1px solid `,`;
          }

          iframe {
            width: 100%;
            border: 0;
          }

          &-meta {
            &.markdown {
              position: relative;
              width: 100%;
              font-size: `,`px;
              border-radius: 0 0 `,"px ",`px;
              transition: background-color 0.4s;
            }

            blockquote {
              line-height: 1.5;
            }

            h4,
            section& p {
              margin: 0;
            }

            > p {
              width: 100%;
              margin: 0.5em 0;
              font-size: 12px;
              word-break: break-word;
              padding-inline-end: 25px;
            }
          }

          &.expand &-meta {
            border-bottom: 1px dashed `,`;
            border-radius: 0;
          }

          .code-expand-icon {
            position: relative;
            width: 16px;
            height: 16px;
            cursor: pointer;
          }

          .code-expand-icon-show,
          .code-expand-icon-hide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            max-width: 100%;
            margin: 0;
            box-shadow: none;
            transition: all 0.4s;
            user-select: none;

            `,`-row-rtl & {
              right: 0;
              left: auto;
            }
          }

          .code-expand-icon-show {
            opacity: 0.55;
            pointer-events: auto;

            &:hover {
              opacity: 1;
            }
          }

          .code-expand-icon`,`-tooltip-open .code-expand-icon-show {
            opacity: 1;
          }

          .code-expand-icon-hide {
            opacity: 0;
            pointer-events: none;
          }

          .highlight-wrapper {
            display: none;
            overflow: auto;
            border-radius: 0 0 `,"px ",`px;

            &-expand {
              display: block;
            }
          }

          .highlight {
            position: relative;

            pre {
              margin: 0;
              padding: 0;
              background: `,`;
            }

            &:not(:first-child) {
              border-top: 1px dashed `,`;
            }
          }

          &-actions {
            display: flex;
            justify-content: center;
            padding: 12px 0;
            border-top: 1px dashed `,`;
            opacity: 0.7;
            transition: opacity 0.3s;

            &:hover {
              opacity: 1;
            }
          }

          &-actions &-code-action {
            position: relative;
            display: flex;
            align-items: center;
            width: 16px;
            height: 16px;
            color: `,`;
            cursor: pointer;
            transition: all 0.24s;

            &:hover {
              color: `,`;
            }

            `,` {
              display: block;
            }
          }

          &-code-copy {
            width: 14px;
            height: 14px;
            font-size: 14px;
            text-align: center;
            background: `,`;
            cursor: pointer;
            transition: transform 0.24s;

            &`,`-check {
              color: `,` !important;
              font-weight: bold;
            }
          }

          &-codepen {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-riddle {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-codesandbox {
            width: 16px;
            height: 16px;
            overflow: hidden;
            border: 0;
            cursor: pointer;

            &:hover {
              opacity: 1;
            }
          }

          .highlight-wrapper:hover &-code-copy,
          .highlight-wrapper:hover &-codepen,
          .highlight-wrapper:hover &-codesandbox,
          .highlight-wrapper:hover &-riddle {
            opacity: 1;
          }

          pre {
            width: auto;
            margin: 0;

            code {
              background: `,`;
              border: none;
              box-shadow: unset;
              padding: 12px 16px;
              font-size: 13px;
            }
          }

          &-debug {
            border-color: `,`;
          }

          &-debug &-title a {
            color: `,`;
          }
        }

        .demo-wrapper {
          position: relative;
        }

        .all-code-box-controls {
          position: absolute;
          top: -32px;
          inset-inline-end: 0;
        }

        `,`-row-rtl {
          #components-tooltip-demo-placement,
          #components-popover-demo-placement,
          #components-popconfirm-demo-placement {
            .code-box-demo {
              direction: ltr;
            }
          }
        }
      `])),t.lineWidth*2,t.colorBgContainer,t.colorSplit,t.borderRadiusLG,t.colorText,t.colorBgContainer,t.colorBgContainer,t.borderRadiusLG,t.borderRadiusLG,t.colorPrimary,t.colorBgContainer,t.borderRadius,t.borderRadius,t.colorText,t.fontSize,i,t.colorTextSecondary,t.colorText,r,r,t.colorText,t.colorSplit,t.fontSize,t.borderRadius,t.borderRadius,t.colorSplit,r,r,t.borderRadius,t.borderRadius,t.colorBgContainer,t.colorSplit,t.colorSplit,t.colorTextSecondary,t.colorText,i,t.colorBgContainer,i,t.green6,t.colorBgContainer,t.purple3,t.purple6,r)})},wn=pn,$,y=function(){var a=(0,u.Fg)(),t=a.antCls,r=a.iconCls;return(0,e.jsx)(o.xB,{styles:(0,o.iv)($||($=c()([`
        ul.anticons-list {
          margin: 10px 0;
          overflow: hidden;
          direction: ltr;
          list-style: none;

          li {
            position: relative;
            float: left;
            width: 16.66%;
            height: 100px;
            margin: 3px 0;
            padding: 10px 0 0;
            overflow: hidden;
            color: #555;
            text-align: center;
            list-style: none;
            background-color: inherit;
            border-radius: 4px;
            cursor: pointer;
            transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

            .rtl & {
              margin: 3px 0;
              padding: 10px 0 0;
            }

            `,` {
              margin: 12px 0 8px;
              font-size: 36px;
              transition: transform 0.3s ease-in-out;
              will-change: transform;
            }

            .anticon-class {
              display: block;
              font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
                monospace;
              white-space: nowrap;
              text-align: center;
              transform: scale(0.83);

              `,`-badge {
                transition: color 0.3s ease-in-out;
              }
            }

            &:hover {
              color: #fff;
              background-color: `,`;

              `,` {
                transform: scale(1.4);
              }

              `,`-badge {
                color: #fff;
              }
            }

            &.TwoTone:hover {
              background-color: #8ecafe;
            }

            &.copied:hover {
              color: rgba(255, 255, 255, 0.2);
            }

            &::after {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              color: #fff;
              line-height: 110px;
              text-align: center;
              background: #1677ff;
              opacity: 0;
              transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
              content: 'Copied!';
            }

            &.copied::after {
              opacity: 1;
            }
          }
        }

        .copied-code {
          padding: 2px 4px;
          font-size: 12px;
          background: #f5f5f5;
          border-radius: 2px;
        }
      `])),r,t,a.colorPrimary,r,t)})},g,s=function(){var a=(0,u.Fg)(),t=a.iconCls;return(0,e.jsx)(o.xB,{styles:(0,o.iv)(g||(g=c()([`
        .icon-pic-searcher {
          display: inline-block;
          margin: 0 8px;

          .icon-pic-btn {
            color: `,`;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .icon-pic-preview {
          width: 66px;
          height: 66px;
          margin-top: 10px;
          padding: 8px;
          text-align: center;
          border: 1px solid `,`;
          border-radius: 4px;

          > img {
            max-width: 50px;
            max-height: 50px;
          }
        }

        .icon-pic-search-result {
          min-height: 50px;
          padding: 0 10px;

          > .result-tip {
            padding: 10px 0;
            color: `,`;
          }

          > table {
            width: 100%;

            .col-icon {
              width: 80px;
              padding: 10px 0;

              > `,` {
                font-size: 30px;

                :hover {
                  color: `,`;
                }
              }
            }
          }
        }
      `])),a.colorIcon,a.colorIconHover,a.colorBorder,a.colorTextSecondary,t,a.colorLinkHover)})},v,E=function(){return(0,e.jsx)(o.xB,{styles:(0,o.iv)(v||(v=c()([`
      /* Browser mockup code
 * Contribute: https://gist.github.com/jarthod/8719db9fef8deb937f4f
 * Live example: https://updown.io
 */

      .browser-mockup {
        position: relative;
        border-top: 2em solid rgba(230, 230, 230, 0.7);
        border-radius: 3px 3px 0 0;
        box-shadow: 0 0.1em 0.5em 0 rgba(0, 0, 0, 0.28);
      }

      .browser-mockup::before {
        position: absolute;
        top: -1.25em;
        left: 1em;
        display: block;
        width: 0.5em;
        height: 0.5em;
        background-color: #f44;
        border-radius: 50%;
        box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
        content: '';
      }

      .browser-mockup.with-tab::after {
        position: absolute;
        top: -2em;
        left: 5.5em;
        display: block;
        width: 20%;
        height: 0;
        border-right: 0.8em solid transparent;
        border-bottom: 2em solid white;
        border-left: 0.8em solid transparent;
        content: '';
      }

      .browser-mockup.with-url::after {
        position: absolute;
        top: -1.6em;
        left: 5.5em;
        display: block;
        width: calc(100% - 6em);
        height: 1.2em;
        background-color: white;
        border-radius: 2px;
        content: '';
      }

      .browser-mockup > * {
        display: block;
      }
    `])))})},F,G=function(){var a=(0,u.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(F||(F=c()([`
        .nav-phone-icon {
          position: absolute;
          bottom: 17px;
          right: 30px;
          z-index: 1;
          display: none;
          width: 16px;
          height: 22px;
          cursor: pointer;
        }

        @media only screen and (max-width: `,`px) {
          .code-boxes-col-2-1,
          .code-boxes-col-1-1 {
            float: none;
            width: 100%;
            max-width: unset;
          }
        }

        @media only screen and (max-width: 767.99px) {
          .preview-image-boxes {
            float: none;
            width: 100%;
            margin: 0 !important;
          }

          .preview-image-box {
            width: 100%;
            margin: 10px 0;
            padding: 0;
          }

          .image-wrapper {
            display: none;
          }

          div.version {
            display: block;
            margin: 29px auto 16px;
          }

          .toc {
            display: none;
          }

          .nav-phone-icon {
            display: block;
          }

          .main {
            height: calc(100% - 86px);
          }

          .aside-container {
            float: none;
            width: auto;
            padding-bottom: 30px;
            border-right: 0;
          }

          .ant-row-rtl {
            margin-right: 0;
            margin-left: 0;
            padding-right: 16px;
            padding-left: 16px;

            > .markdown > * {
              width: 100% !important;
            }
          }

          .main-wrapper {
            width: 100%;
            margin: 0;
            border-radius: 0;
          }

          .prev-next-nav {
            width: calc(100% - 32px);
            margin-left: 16px;

            .ant-row-rtl & {
              margin-right: 16px;
              margin-left: 64px;
            }
          }

          .drawer {
            .ant-menu-inline .ant-menu-item::after,
            .ant-menu-vertical .ant-menu-item::after {
              right: auto;
              left: 0;
            }
          }

          /** home \u533A\u5757 **/
          .home-page-wrapper {
            .page {
              h2 {
                margin: 80px auto 64px;
              }
            }

            .parallax-bg {
              display: none;
            }
          }

          .banner {
            display: block;
            height: 632px;

            &-bg-wrapper {
              display: none;
            }

            .img-wrapper,
            .text-wrapper {
              display: inline-block;
              width: 100%;
              min-width: unset;
              max-width: unset;
              margin: auto;
              text-align: center;
            }

            .img-wrapper {
              position: initial;
              margin-top: 20px;
              text-align: center;

              svg {
                width: 100%;
                max-width: 260px;
                height: auto;
                margin: 0 auto;
              }
            }

            .text-wrapper {
              min-height: 200px;
              margin-top: 32px;
              padding: 0;

              h1 {
                display: none;
              }

              p {
                color: #314659;
                font-size: 14px;
                line-height: 28px;
              }

              .banner-btns {
                display: block;
                min-width: 100%;
                white-space: nowrap;
                text-align: center;

                .banner-btn {
                  padding: 0 20px;
                  font-size: 14px;
                }
              }

              .banner-promote {
                min-width: 100%;
                margin-top: 32px;

                .ant-divider {
                  display: none;
                }

                a {
                  font-size: 14px;
                  white-space: nowrap;

                  img {
                    width: 20px;
                  }
                }
              }
            }
          }

          .page1 {
            min-height: 1300px;

            .ant-row {
              margin: 24px auto 64px;

              > div {
                margin-bottom: 48px;
              }
            }
          }

          .page2 {
            min-height: 840px;
            background: `,`;

            &-content {
              box-shadow: none;
            }

            &-components {
              display: none;
            }

            &-product {
              min-height: auto;
              padding: 0 16px;

              .product-block {
                margin-bottom: 34px;
                padding-bottom: 35px;
                border-bottom: 1px solid `,`;

                &:last-child {
                  margin-bottom: 32px;
                  border-bottom: none;

                  .block-text-wrapper {
                    height: auto;
                  }
                }

                .block-image-wrapper {
                  height: 88px;

                  img {
                    height: 100%;
                  }
                }

                .block-text-wrapper {
                  padding-bottom: 0;
                  border-bottom: none;

                  h4 {
                    margin-bottom: 4px;
                    font-size: 18px;
                    line-height: 24px;
                  }

                  p {
                    margin-bottom: 8px;
                    font-size: 12px;
                    line-height: 20px;
                  }

                  a {
                    line-height: 20px;
                  }

                  .components-button-wrapper {
                    margin-top: 16px;
                    font-size: 12px;

                    a {
                      display: block;
                    }
                  }

                  a.more-mobile-react,
                  a.more-mobile-angular {
                    margin-top: 0;
                    color: `,`;
                  }

                  a.more-mobile-react:hover,
                  a.more-mobile-angular:hover {
                    color: #40a9ff;
                  }
                }
              }
            }
          }

          .page3 {
            min-height: 688px;
            background: url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg')
              no-repeat;
            background-size: cover;

            .ant-row {
              margin: 0 8px;
            }

            .page3-block {
              margin-bottom: 32px;
              padding: 24px;
              background: `,`;
              border-radius: 4px;
              box-shadow: 0 8px 16px rgba(174, 185, 193, 0.3);

              &:nth-child(2) {
                .page3-img-wrapper img {
                  display: block;
                  width: 70%;
                  margin: auto;
                }
              }

              p {
                font-size: 12px;
              }

              .page3-img-wrapper {
                width: 20%;

                img {
                  width: 100%;
                }
              }

              .page3-text-wrapper {
                width: 80%;
                max-width: initial;
                margin: 0;
                padding-left: 16px;
              }
            }
          }
        }
      `])),a.screenLG,a.colorBgContainer,a.colorSplit,a.colorLink,a.colorBgContainer)})},nn,jn=function(){var a=(0,u.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(nn||(nn=c()([`
        #nprogress {
          .bar {
            background: `,`;
          }

          .peg {
            box-shadow: 0 0 10px `,", 0 0 5px ",`;
          }

          .spinner-icon {
            border-top-color: `,`;
            border-left-color: `,`;
          }
        }
      `])),a.colorPrimary,a.colorPrimary,a.colorPrimary,a.colorPrimary,a.colorPrimary)})},gn,hn=function(){var a=(0,u.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(gn||(gn=c()([`
        .preview-image-boxes {
          display: flex;
          float: right;
          clear: both;
          width: 496px;
          margin: 0 0 70px 64px;

          &-with-carousel {
            width: 420px;

            .preview-image-box img {
              padding: 0;
            }
          }

          .ant-row-rtl & {
            float: left;
            margin: 0 64px 70px 0;
          }
        }

        .preview-image-boxes + .preview-image-boxes {
          margin-top: -35px;
        }

        .preview-image-box {
          float: left;
          width: 100%;
        }

        .preview-image-box + .preview-image-box {
          margin-left: 24px;

          .ant-row-rtl & {
            margin-right: 24px;
            margin-left: 0;
          }
        }

        .preview-image-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
          padding: 16px;
          text-align: center;
          background: #f2f4f5;
          box-sizing: border-box;
        }

        .preview-image-wrapper.video {
          display: block;
          padding: 0;
          background: 0;
        }

        .preview-image-wrapper video {
          display: block;
          width: 100%;

          + svg {
            position: absolute;
            top: 0;
            left: 0;
          }
        }

        .preview-image-wrapper.good::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-wrapper.bad::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-title {
          margin-top: 20px;
          color: `,`;
          font-size: 12px;
        }

        .preview-image-description {
          margin-top: 2px;
          color: `,`;
          font-size: 12px;
          line-height: 1.5;
        }

        .preview-image-description hr {
          margin: 2px 0;
          background: none;
          border: 0;
        }

        .preview-image-box img {
          box-sizing: border-box;
          max-width: 100%;
          padding: 12px;
          background: `,`;
          border-radius: `,`px;
          cursor: pointer;
          transition: all 0.3s;

          &.no-padding {
            padding: 0;
            background: none;
          }
        }

        .preview-image-boxes.preview-image-boxes-with-carousel img {
          padding: 0;
          box-shadow: 0 1px 0 0 #ddd, 0 3px 0 0 `,`, 0 4px 0 0 #ddd,
            0 6px 0 0 `,`, 0 7px 0 0 #ddd;
        }

        .preview-image-box img:hover {
          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
        }

        .transition-video-player,
        .motion-video-min {
          float: right;
          width: 600px;
          padding: 0 0 70px 20px;

          .preview-image-wrapper {
            padding: 0;
          }

          .ant-row-rtl & {
            float: left;
          }
        }

        .motion-video-min {
          width: 390px;
        }

        .motion-principle-wrapper {
          width: 100%;
          max-width: 900px;
          margin: 48px 0 24px;
        }

        .principle-wrapper {
          width: 100%;

          .principle {
            display: inline-block;
            box-sizing: border-box;
            width: 100%;
            min-height: 180px;
            margin-right: 12.5%;
            margin-bottom: 24px;
            padding: 24px;
            font-size: 24px;
            text-align: center;
            border: 1px solid #e8e8e8;
            border-radius: 4px;

            &:last-child {
              margin-right: 0;
            }

            h4 {
              margin: 16px 0 8px;
            }

            p {
              font-size: 12px;
              line-height: 24px;
            }
          }
        }
      `])),a.colorPrimary,a.colorError,a.colorText,a.colorTextSecondary,a.colorBgContainer,a.borderRadius,a.colorBgContainer,a.colorBgContainer)})},fn,xn="dumi-default-",Mn=function(){var a=(0,u.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(fn||(fn=c()([`
        html {
          .`,`search-bar {
            &-input {
              color: `,`;
              background: `,`;
              &:focus {
                background: `,`;
              }
              &::placeholder {
                color: `,` !important;
              }
            }
          }
          .`,`search-popover {
            background-color: `,` !important;
            &::before {
              border-bottom-color: `,` !important;
            }
          }
          .`,`search-result {
            dl {
              dt {
                background-color: `,` !important;
              }
              dd {
                a {
                  &:hover {
                    background-color: `,`;
                    h4,
                    p {
                      color: `,` !important;
                    }
                    svg {
                      fill: `,` !important;
                    }
                  }
                }
              }
            }
          }
        }
      `])),xn,a.colorText,a.colorBgContainer,a.colorBgContainer,a.colorTextPlaceholder,xn,a.colorBgElevated,a.colorBgElevated,xn,a.controlItemBgActive,a.controlItemBgHover,a.colorText,a.colorText)})},Tn,Bn=function(){return(0,e.jsx)(o.xB,{styles:(0,o.iv)(Tn||(Tn=c()([`
      .design-inline-cards {
        display: flex;
        margin: 0 -20px;
      }
      .design-inline-cards > * {
        flex: 10%;
        margin: 0 20px;
      }
      .design-inline-cards img {
        width: 100%;
        max-width: 100%;
      }
      .design-inline-cards h4 {
        margin-bottom: 0;
      }
    `])))})},En=function(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(B,{}),(0,e.jsx)(P,{}),(0,e.jsx)(k,{}),(0,e.jsx)(K,{}),(0,e.jsx)(wn,{}),(0,e.jsx)(y,{}),(0,e.jsx)(s,{}),(0,e.jsx)(E,{}),(0,e.jsx)(G,{}),(0,e.jsx)(jn,{}),(0,e.jsx)(hn,{}),(0,e.jsx)(Bn,{}),(0,e.jsx)(on,{}),(0,e.jsx)(p,{}),(0,e.jsx)(Mn,{})]})},zn=En,Ln=n(97857),A=n.n(Ln),vn=n(9783),bn=n.n(vn),Sn=n(639389),Un=n.n(Sn),In=n(469181),Rn=n(344682),Hn=n(11739),Xn=n(709894),Vn=n(883458),ie=n(722449),le="M448 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM64 448l256 224-256 224z",Jn="M256 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM960 896l-256-224 256-224z",Qn=function(t){return(0,e.jsx)(Un(),A()(A()({},t),{},{children:(0,e.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",children:(0,e.jsx)("path",{d:t.direction==="ltr"?le:Jn})})}))},ee=Qn,st=n(840070),An=n(373638),te=n(438199),ge,he,dt=(0,u.kc)(function(a){var t=a.token,r=a.css,i=t.headerHeight,x=t.colorTextHeading,C=t.fontFamily,h=t.mobileMaxWidth;return{logo:r(ge||(ge=c()([`
      height: `,`px;
      padding-inline-start: 40px;
      overflow: hidden;
      color: `,`;
      font-weight: bold;
      font-size: 18px;
      font-family: AlibabaPuHuiTi, `,`, sans-serif;
      line-height: `,`px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      display: inline-flex;
      align-items: center;

      &:hover {
        color: `,`;
      }

      img {
        height: 32px;
        vertical-align: middle;
        margin-inline-end: 12px;
      }

      @media only screen and (max-width: `,`px) {
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
    `])),i,x,C,i,x,h),title:r(he||(he=c()([`
      line-height: 32px;
    `])))}}),ct=function(t){var r=t.isZhCN,i=(0,l.useLocation)(),x=i.search,C=dt(),h=C.styles;return(0,e.jsx)("h1",{children:(0,e.jsxs)(l.Link,{to:An.J1("/",r,x),className:h.logo,children:[(0,e.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",height:32,width:32,alt:"logo"}),(0,e.jsx)("span",{className:h.title,children:"Ant Design"})]})})},ut=ct,pt=n(963918),mt=n(988872),fe,xe,ve,be,ye=(0,u.kc)(function(a){var t=a.css,r=a.token;return{smallStyle:t(fe||(fe=c()([`
    font-size: 12px;
    color: #777;
    margin-left: 0.3em;
  `]))),down:t(xe||(xe=c()([`
    color: `,`;
  `])),r.colorTextQuaternary),downOutlined:t(ve||(ve=c()([`
    font-size: 9px;
    margin: -1px 0 0 2px;
    vertical-align: middle;
  `]))),downOutlinedRTL:t(be||(be=c()([`
    font-size: 9px;
    margin: -1px 2px 0 0;
    vertical-align: middle;
  `])))}}),we=function(){var t=ye(),r=t.styles;return(0,e.jsxs)("span",{className:r.smallStyle,children:["(",(0,e.jsx)(l.FormattedMessage,{id:"app.implementation.community"}),")"]})},je=function(){return[{label:(0,e.jsx)("a",{href:"https://charts.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,e.jsx)(l.FormattedMessage,{id:"app.header.menu.charts"})}),key:"charts"},{label:(0,e.jsx)("a",{href:"http://pro.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,e.jsx)(l.FormattedMessage,{id:"app.header.menu.pro.v4"})}),key:"pro"},{label:(0,e.jsx)("a",{href:"http://procomponents.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,e.jsx)(l.FormattedMessage,{id:"app.header.menu.pro.components"})}),key:"procomponents"},{label:(0,e.jsxs)("a",{href:"http://ng.ant.design",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Angular",(0,e.jsx)(we,{})]}),key:"ng"},{label:(0,e.jsxs)("a",{href:"http://antdv.com",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Vue",(0,e.jsx)(we,{})]}),key:"vue"}]},gt=function(t){var r=t.isRTL,i=ye(),x=i.styles;return(0,e.jsx)(pt.Z,{menu:{items:je()},placement:"bottomRight",children:(0,e.jsxs)(mt.ZP,{size:"small",children:[(0,e.jsx)(l.FormattedMessage,{id:"app.header.menu.more"}),(0,e.jsx)(Sn.DownOutlined,{className:f()(r?x.downOutlinedRTL:x.downOutlined,x.down)})]})})},ht=gt,ft=n(719632),se=n.n(ft),Ce=n(24768),Yn=n(472638),Se,ke,xt={cn:{design:"\u8BBE\u8BA1",development:"\u7814\u53D1",components:"\u7EC4\u4EF6",resources:"\u8D44\u6E90",blog:"\u535A\u5BA2"},en:{design:"Design",development:"Development",components:"Components",resources:"Resources",blog:"Blog"}},vt=(0,u.kc)(function(a){var t=a.token,r=t.antCls,i=t.iconCls,x=t.fontFamily,C=t.headerHeight,h=t.menuItemBorder,U=t.colorPrimary,I=t.colorText;return{nav:(0,u.iv)(Se||(Se=c()([`
      height: 100%;
      font-size: 14px;
      font-family: Avenir, `,`, sans-serif;
      border: 0;

      &`,`-menu-horizontal {
        border-bottom: none;

        & > `,"-menu-item, & > ",`-menu-submenu {
          min-width: `,`px;
          height: `,`px;
          padding-right: 12px;
          padding-left: 12px;
          line-height: `,`px;

          &::after {
            top: 0;
            right: 12px;
            bottom: auto;
            left: 12px;
            border-width: `,`px;
          }

          a {
            color: `,`;
          }

          a:before {
            position: absolute;
            inset: 0;
            background-color: transparent;
            content: "";
          }
        }

        & `,"-menu-submenu-title ",` {
          margin: 0;
        }

        & > `,`-menu-item-selected {
          a {
            color: `,`;
          }
        }
      }

      & > `,"-menu-item, & > ",`-menu-submenu {
        text-align: center;
      }
    `])),x,r,r,r,40+12*2,C,C,h,I,r,i,r,U,r,r),popoverMenuNav:(0,u.iv)(ke||(ke=c()([`
      `,`-menu-item,
      `,`-menu-submenu {
        text-align: left;
      }

      `,`-menu-item-group-title {
        padding-left: 24px;
      }

      `,`-menu-item-group-list {
        padding: 0 16px;
      }

      `,`-menu-item,
      a {
        color: #333;
      }
    `])),r,r,r,r,r)}}),bt=function(a){var t,r,i=a.isZhCN,x=a.isMobile,C=a.responsive,h=a.directionText,U=a.onLangChange,I=a.onDirectionChange,J=(0,l.useLocation)(),Q=J.pathname,dn=J.search,cn=(0,Z.Z)(xt),ln=S()(cn,1),en=ln[0],Cn=(0,l.useFullSidebarData)(),R=((t=Cn["/docs/blog"])===null||t===void 0||(t=t[0])===null||t===void 0?void 0:t.children)||[],yn=vt(),V=yn.styles,kn=x?"inline":"horizontal",Nn=Q.split("/").filter(function($n){return $n}).slice(0,-1).join("/"),On=Nn||"home";Q.startsWith("/changelog")?On="docs/react":Q.startsWith("/docs/resources")&&(On="docs/resources");var mn,Fn=[{label:(0,e.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),key:"github"},{label:(0,e.jsx)(l.FormattedMessage,{id:"app.header.lang"}),onClick:U,key:"switch-lang"},{label:h,onClick:I,key:"switch-direction"}].concat(se()(je()));x?mn=Fn:C==="crowded"&&(mn=[{label:(0,e.jsx)(Sn.MenuOutlined,{}),key:"additional",children:se()(Fn)}]);var Wn=[{label:(0,e.jsx)(Yn.Z,{to:An.J1("/docs/spec/introduce",i,dn),children:en.design}),key:"docs/spec"},{label:(0,e.jsx)(Yn.Z,{to:An.J1("/docs/react/introduce",i,dn),children:en.development}),key:"docs/react"},{label:(0,e.jsx)(Yn.Z,{to:An.J1("/components/overview/",i,dn),children:en.components}),key:"components"},R.length?{label:(0,e.jsx)(Yn.Z,{to:An.J1(R.sort(function($n,ue){var Gn,qn;return((Gn=$n.frontmatter)===null||Gn===void 0?void 0:Gn.date)>((qn=ue.frontmatter)===null||qn===void 0?void 0:qn.date)?-1:1})[0].link,i,dn),children:en.blog}),key:"docs/blog"}:null,{label:(0,e.jsx)(Yn.Z,{to:An.J1("/docs/resources",i,dn),children:en.resources}),key:"docs/resources"},i?{label:(0,e.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u56FD\u5185\u955C\u50CF"}),key:"mirror",children:[{label:(0,e.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u5B98\u65B9\u955C\u50CF"}),icon:(0,e.jsx)("img",{alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"antgroup"},{label:(0,e.jsx)("a",{href:"https://ant-design.gitee.io",target:"_blank",rel:"noreferrer",children:"Gitee \u955C\u50CF"}),icon:(0,e.jsx)("img",{alt:"gitee",src:"https://gw.alipayobjects.com/zos/bmw-prod/9e91e124-9bab-4113-b500-301412f6b370.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"gitee"}]}:null].concat(se()((r=mn)!==null&&r!==void 0?r:[]));return(0,e.jsx)(Ce.Z,{mode:kn,selectedKeys:[On],className:V.nav,disabledOverflow:!0,items:Wn,style:{borderRight:0}})},yt=n(879587),Me,Ee,Te,Be,Ae,Kn="1.2em",wt=(0,u.kc)(function(a){var t=a.token,r=a.css,i=t.colorText,x=t.colorBorder,C=t.colorBgContainer,h=t.colorBgTextHover,U=t.borderRadius,I=t.controlHeight,J=t.motionDurationMid;return{btn:r(Me||(Me=c()([`
      color: `,`;
      border-color: `,`;
      padding: 0 !important;
      width: `,`px;
      height: `,`px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      border-radius: `,`px;
      transition: all `,`;
      cursor: pointer;
      .btn-inner {
        transition: all `,`;
      }
      &:hover {
        background: `,`;
      }
      img {
        width: `,`;
        height: `,`;
      }
      .anticon {
        font-size: `,`;
      }
    `])),i,x,I,I,U,J,J,h,Kn,Kn,Kn),innerDiv:r(Ee||(Ee=c()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),Kn,Kn),labelStyle:r(Te||(Te=c()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),Kn,i,i),label1Style:r(Be||(Be=c()([`
      left: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),i,C),label2Style:r(Ae||(Ae=c()([`
      right: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),jt=function(t){var r=t.label1,i=t.label2,x=t.tooltip1,C=t.tooltip2,h=t.value,U=t.pure,I=t.onClick,J=wt(),Q=J.styles,dn=Q.btn,cn=Q.innerDiv,ln=Q.labelStyle,en=Q.label1Style,Cn=Q.label2Style,R=(0,e.jsx)("button",{onClick:I,className:dn,"aria-label":t["aria-label"],children:(0,e.jsxs)("div",{className:"btn-inner",children:[U&&(h===1?r:i),!U&&(0,e.jsxs)("div",{className:cn,children:[(0,e.jsx)("span",{className:f()(ln,h===1?en:Cn),children:r}),(0,e.jsx)("span",{className:f()(ln,h===1?Cn:en),children:i})]})]})},"lang-button");return x||C?(0,e.jsx)(yt.Z,{title:h===1?x:C,children:R}):R},de=jt,Le,Pe,De,ze,Fe,Oe,Ne=1120,Ie=1200,Ct={cn:{message:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",shortMessage:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",more:"\u524D\u5F80\u4E86\u89E3",link:"https://www.yuque.com/opensource2023"},en:{message:"",shortMessage:"",more:"",link:""}},St=(0,u.kc)(function(a){var t=a.token,r=a.css,i="#ced4d9";return{header:r(Le||(Le=c()([`
      position: sticky;
      top: 0;
      z-index: 1000;
      max-width: 100%;
      background: `,`;
      box-shadow: `,`;
      backdrop-filter: blur(8px);

      @media only screen and (max-width: `,`px) {
        text-align: center;
      }

      .nav-search-wrapper {
        display: flex;
        flex: auto;
      }

      .dumi-default-search-bar {
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: `,`;
        }

        > input {
          height: 22px;
          border: 0;

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: `,`;
          }
        }

        .dumi-default-search-shortcut {
          color: `,`;
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: 4px;
        }

        .dumi-default-search-popover {
          inset-inline-start: 11px;
          inset-inline-end: unset;

          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
        }
      }
    `])),t.colorBgContainer,t.boxShadowTertiary,t.mobileMaxWidth,i,i,i),menuRow:r(Pe||(Pe=c()([`
      display: flex;
      align-items: center;
      margin: 0;

      > * {
        flex: none;
        margin: 0;
        margin-inline-end: 12px;

        &:last-child {
          margin-inline-end: 40px;
        }
      }
    `]))),dataDirectionIcon:r(De||(De=c()([`
      width: 16px;
    `]))),popoverMenu:bn()({width:300},"".concat(t.antCls,"-popover-inner-content"),{padding:0}),banner:r(ze||(ze=c()([`
      width: 100%;
      text-align: center;
      word-break: keep-all;
      user-select: none;
    `]))),link:r(Fe||(Fe=c()([`
      margin-left: 10px;

      @media only screen and (max-width: `,`px) {
        margin-left: 0;
      }
    `])),t.mobileMaxWidth),icon:r(Oe||(Oe=c()([`
      margin-right: 10px;
      width: 22px;
      height: 22px;
    `])))}}),kt=function(){var t=(0,Z.Z)(Ct),r=S()(t,2),i=r[0],x=r[1],C=(0,l.useSiteData)(),h=C.pkg,U=(0,An.Is)(),I=(0,d.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),J=S()(I,2),Q=J[0],dn=J[1],cn=(0,d.useContext)(te.Z),ln=cn.direction,en=cn.isMobile,Cn=cn.bannerVisible,R=cn.updateSiteConfig,yn=(0,d.useRef)(null),V=(0,l.useLocation)(),kn=V.pathname,Nn=V.search,On=St(),mn=On.styles,Fn=(0,d.useCallback)(function(){dn(function(tn){return A()(A()({},tn),{},{menuVisible:!1})})},[]),Wn=(0,d.useCallback)(function(){dn(function(tn){return A()(A()({},tn),{},{windowWidth:window.innerWidth})})},[]),$n=(0,d.useCallback)(function(){dn(function(tn){return A()(A()({},tn),{},{menuVisible:!0})})},[]),ue=(0,d.useCallback)(function(tn){dn(function(Pn){return A()(A()({},Pn),{},{menuVisible:tn})})},[]),Gn=function(){R({direction:ln!=="rtl"?"rtl":"ltr"})},qn=function(){R({bannerVisible:!1}),An.Fy()&&localStorage.setItem(st.ANT_DESIGN_NOT_SHOW_BANNER,O()().toISOString())};(0,d.useEffect)(function(){Fn()},[V]),(0,d.useEffect)(function(){return Wn(),window.addEventListener("resize",Wn),function(){window.removeEventListener("resize",Wn),yn.current&&clearTimeout(yn.current)}},[]);var yo=(0,d.useCallback)(function(tn){var Pn=window.location.href,ae=window.location.pathname;if(/overview/.test(ae)&&/0?[1-39][0-3]?x/.test(tn)){window.location.href=Pn.replace(window.location.origin,tn).replace(/\/components\/overview/,"/docs".concat(/0(9|10)x/.test(tn)?"":"/react","/introduce")).replace(/\/$/,"");return}var ne=new URL(Pn.replace(window.location.origin,tn));ne.host.includes("antgroup")?(ne.pathname="".concat(ne.pathname.replace(/\/$/,""),"/"),window.location.href=ne.toString()):window.location.href=ne.href.replace(/\/$/,"")},[]),et=(0,d.useCallback)(function(){var tn="".concat(window.location.protocol,"//"),Pn=window.location.href.slice(tn.length);An.Fy()&&localStorage.setItem("locale",An.KE(kn)?"en-US":"zh-CN"),window.location.href=tn+Pn.replace(window.location.pathname,An.J1(kn,!An.KE(kn),Nn).pathname)},[V]),wo=(0,d.useMemo)(function(){return ln!=="rtl"?"RTL":"LTR"},[ln]),jo=(0,d.useMemo)(function(){return ln==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[ln]),Co=Q.menuVisible,re=Q.windowWidth,tt=Q.searching,ot=A()(bn()({},h.version,h.version),U==null?void 0:U.docVersions),So=Object.keys(ot).map(function(tn){return{value:ot[tn],label:tn}}),rt=["","index","index-cn"].includes(kn),at=x==="cn",ko=ln==="rtl",pe=null;re<Ne?pe="crowded":re<Ie&&(pe="narrow");var Mo=f()(mn.header,"clearfix",{"home-header":rt}),me={isZhCN:at,isRTL:ko},it=(0,e.jsx)(bt,A()(A()({},me),{},{responsive:pe,isMobile:en,directionText:wo,onLangChange:et,onDirectionChange:Gn}),"nav"),_n=[it,(0,e.jsx)(In.Z,{className:"version",size:"small",defaultValue:h.version,onChange:yo,dropdownStyle:jo,popupMatchSelectWidth:!1,getPopupContainer:function(Pn){return Pn.parentNode},options:So},"version"),(0,e.jsx)(ht,A()({},me),"more"),(0,e.jsx)(de,{onClick:et,value:An.KE(kn)?1:2,label1:"\u4E2D",label2:"En",tooltip1:"\u4E2D\u6587 / English",tooltip2:"English / \u4E2D\u6587"},"lang"),(0,e.jsx)(de,{onClick:Gn,value:ln==="rtl"?2:1,label1:(0,e.jsx)(ee,{className:mn.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,e.jsx)(ee,{className:mn.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"},"direction"),(0,e.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noreferrer",children:(0,e.jsx)(de,{value:1,label1:(0,e.jsx)(Sn.GithubOutlined,{}),tooltip1:"Github",label2:null,pure:!0})},"github")];re<Ne?_n=tt?[]:[it]:re<Ie&&(_n=tt?[]:_n);var lt=rt?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,e.jsxs)("header",{className:Mo,children:[en&&(0,e.jsx)(Rn.Z,{overlayClassName:mn.popoverMenu,placement:"bottomRight",content:_n,trigger:"click",open:Co,arrow:{arrowPointAtCenter:!0},onOpenChange:ue,children:(0,e.jsx)(Sn.MenuOutlined,{className:"nav-phone-icon",onClick:$n})}),at&&Cn&&(0,e.jsx)(T.ZP,{theme:{token:{colorInfoBg:"linear-gradient(90deg, #84fab0, #8fd3f4)",colorTextBase:"#000"}},children:(0,e.jsx)(Hn.Z,{className:mn.banner,message:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{children:en?i.shortMessage:i.message}),(0,e.jsx)("a",{className:mn.link,href:i.link,target:"_blank",rel:"noreferrer",onClick:function(){var Pn,ae;(Pn=(ae=window).gtag)===null||Pn===void 0||Pn.call(ae,"event","\u70B9\u51FB",{event_category:"top_banner",event_label:i.link})},children:i.more})]}),type:"info",banner:!0,closable:!0,showIcon:!1,onClose:qn})}),(0,e.jsxs)(Xn.Z,{style:{flexFlow:"nowrap",height:64},children:[(0,e.jsx)(Vn.Z,A()(A()({},lt[0]),{},{children:(0,e.jsx)(ut,A()(A()({},me),{},{location:V}))})),(0,e.jsxs)(Vn.Z,A()(A()({},lt[1]),{},{className:mn.menuRow,children:[(0,e.jsx)("div",{className:"nav-search-wrapper",children:(0,e.jsx)(ie.ZP,{})}),!en&&_n]}))]})]})},Mt=kt,Eo=n(945462),Et=n(513769),Tt=n.n(Et),Re=n(777502),Bt=["children"],At=function(t){var r=t.children,i=Tt()(t,Bt);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(l.Helmet,{children:[(0,e.jsx)("title",{children:i.title}),(0,e.jsx)("meta",{property:"og:title",content:i.title}),i.desc&&(0,e.jsx)("meta",{name:"description",content:i.desc})]}),(0,e.jsx)("div",{style:{minHeight:"100vh"},children:r}),(0,e.jsx)(Re.default,{})]})},Lt=At,Pt=n(86198),He=n(185209),Dt=function(){var t=(0,l.useRouteMeta)(),r=(0,d.useMemo)(function(){var h;if(!t.frontmatter.subtitle&&!t.frontmatter.title)h="404 Not Found - Ant Design";else{var U;h="".concat(t.frontmatter.subtitle||""," ").concat(((U=t.frontmatter)===null||U===void 0?void 0:U.title)||""," - Ant Design")}var I=t.frontmatter.description||"";return[h,I]},[t]),i=S()(r,2),x=i[0],C=i[1];return(0,e.jsxs)(l.Helmet,{children:[(0,e.jsx)("title",{children:x}),(0,e.jsx)("meta",{property:"og:title",content:x}),C&&(0,e.jsx)("meta",{name:"description",content:C})]})},Ze=Dt,zt=n(148050),Ft=n(823493),Ot=n.n(Ft),Nt=n(468990),It=n(658192),We,$e,Ue,Ve=["scroll","resize"],Rt=(0,u.kc)(function(a){var t=a.token,r=a.css,i=t.boxShadowSecondary,x=t.antCls;return{affixTabs:r(We||(We=c()([`
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 11;
      padding: 0 40px;
      background: #fff;
      box-shadow: `,`;
      transform: translate3d(0, -100%, 0);
      opacity: 0;
      transition: opacity 0.3s, transform 0.3s;

      `,`-tabs {
        max-width: 1208px;
        margin: 0 auto;

        `,`-tabs-nav {
          margin: 0;

          &::before {
            border-bottom-color: transparent;
          }

          `,`-tabs-tab {
            padding: 21px 0;
          }
        }
      }
    `])),i,x,x,x),affixTabsFixed:r($e||($e=c()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:r(Ue||(Ue=c()([`
      text-transform: capitalize;
    `])))}}),Ke=32,Ht=function(){var t=d.useRef(null),r=d.useRef([]),i=d.useState(!1),x=S()(i,2),C=x[0],h=x[1],U=d.useState(void 0),I=S()(U,2),J=I[0],Q=I[1],dn=Rt(),cn=dn.styles,ln=cn.affixTabs,en=cn.affixTabsFixed,Cn=cn.span;function R(V){var kn=document.getElementById(V);if(kn){var Nn=kn.offsetTop-t.current.offsetHeight-Ke;(0,It.Z)(Nn)}}d.useEffect(function(){r.current=Array.from(document.querySelectorAll("h2[id]")).map(function(V){var kn=V.id;return kn}),h(!0)},[]),d.useEffect(function(){var V=decodeURIComponent((location.hash||"").slice(1));V&&R(V)},[C]);var yn=d.useMemo(function(){function V(){for(var kn=window,Nn=kn.scrollY,On=t.current.offsetHeight,mn=r.current.length-1;mn>=0;mn-=1){var Fn=r.current[mn],Wn=document.getElementById(Fn),$n=Wn.offsetTop-On-Ke;if($n<=Nn){Q(Fn);return}}Q(void 0)}return Ot()(V)},[]);return d.useEffect(function(){return Ve.forEach(function(V){return window.addEventListener(V,yn)}),yn(),function(){Ve.forEach(function(V){return window.removeEventListener(V,yn)})}},[]),(0,e.jsx)("div",{className:f()(ln,J&&en),ref:t,children:(0,e.jsx)(Nt.Z,{activeKey:J,onChange:R,items:r.current.map(function(V){return{key:V,label:(0,e.jsx)("span",{className:Cn,children:V.replace(/-/g," ")})}})})})},Zt=Ht,Ge,Xe,Je,Qe=40,oe=1208,ce=24,Wt=(0,u.kc)(function(a){var t=a.token,r=a.css,i=t.antCls;return{resourcePage:r(Ge||(Ge=c()([`
      footer {
        margin-top: 176px;

        .rc-footer-container {
          max-width: `,`px;
          margin: 0 auto;
          padding-right: 0;
          padding-left: 0;
        }
      }
    `])),oe),resourceContent:r(Xe||(Xe=c()([`
      padding: 0 `,`px;
      max-width: `,`px;
      margin: 0 auto;
      box-sizing: content-box;
      min-height: 100vh;

      > .markdown {
        > p {
          margin-bottom: 56px;
        }

        h2 {
          margin-top: 124px;
          color: #314659;
          font-weight: lighter;
          font-size: 30px;
          line-height: 38px;

          &:first-child {
            margin-top: 88px;
          }
        }

        h3 {
          margin-top: 56px;
          font-weight: 400;
          font-size: 24px;
          line-height: 32px;
        }

        p {
          color: #697b8c;
        }
      }

      @media only screen and (max-width: 767.99px) {
        & {
          article {
            padding: 0 `,`px;
          }

          `,`-col {
            padding-top: 16px !important;
            padding-bottom: 16px !important;
          }
        }
      }
    `])),Qe,oe,ce,i),banner:r(Je||(Je=c()([`
      padding: 0 `,`px;
      overflow: hidden;
      background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');
      background-size: cover;

      h1 {
        box-sizing: content-box;
        max-width: `,`px;
        margin: 56px auto 16px;
      }

      section {
        max-width: `,`px;
        margin: 0 auto 56px;
        font-weight: 200;
        font-size: 16px;
        line-height: 24px;
      }

      @media only screen and (max-width: 767.99px) {
        & {
          margin: 0 -`,`px;
          padding: 0 `,`px;
        }
      }
    `])),Qe,oe,oe,ce,ce)}}),$t=function(t){var r,i=t.children,x=Wt(),C=x.styles,h=(0,l.useRouteMeta)();return(0,e.jsx)(T.ZP,{theme:{token:{colorBgLayout:"#fff"}},children:(0,e.jsxs)(Pt.Z,{children:[(0,e.jsx)(Ze,{}),(0,e.jsxs)("div",{id:"resources-page",className:C.resourcePage,children:[(0,e.jsx)(Zt,{}),(0,e.jsxs)("div",{className:C.banner,children:[(0,e.jsxs)(He.Z.Title,{style:{fontSize:30},children:[(r=h.frontmatter)===null||r===void 0?void 0:r.title,(0,e.jsx)(zt.default,{title:(0,e.jsx)(l.FormattedMessage,{id:"app.content.edit-page"}),filename:h.frontmatter.filename})]}),(0,e.jsx)("section",{children:h.frontmatter.description})]}),(0,e.jsx)("div",{className:C.resourceContent,children:i}),(0,e.jsx)(Re.default,{})]})]})})},Ut=$t,Vt=n(945016),Kt=n(217187),Gt=n(524229),Xt=n(548657),Jt=n(442708),Qt=function(t){var r=t.children,i=t.fallback,x=i===void 0?(0,e.jsx)(Xt.Z.Input,{active:!0,size:"small"}):i,C=t.delay,h=C===void 0?200:C;return(0,e.jsx)(Jt.df,{triggerOnce:!0,delay:h,children:function(I){var J=I.inView,Q=I.ref;return(0,e.jsx)("div",{ref:Q,children:(0,e.jsx)(d.Suspense,{fallback:x,children:J?r:(0,e.jsx)("span",{})})})}})},Zn=Qt,Ye,Yt=d.lazy(function(){return n.e(16175).then(n.bind(n,516175))}),qt=d.lazy(function(){return n.e(49148).then(n.bind(n,349148))}),_t=d.lazy(function(){return n.e(68301).then(n.bind(n,368301))}),no=d.lazy(function(){return n.e(58598).then(n.bind(n,458598))}),eo=d.lazy(function(){return Promise.resolve().then(n.bind(n,777502))}),to=d.lazy(function(){return n.e(66720).then(n.bind(n,366720))}),oo=d.lazy(function(){return Promise.all([n.e(2281),n.e(15926)]).then(n.bind(n,615926))}),ro=d.lazy(function(){return Promise.resolve().then(n.bind(n,148050))}),ao=(0,u.kc)(function(a){var t=a.token,r=a.css;return{articleWrapper:r(Ye||(Ye=c()([`
    padding: 0 170px 32px 64px;
    &.rtl {
      padding: 0 64px 144px 170px;
    }
    @media only screen and (max-width: `,`px) {
      &,
      &.rtl {
        padding: 0 48px;
      }
    }
  `])),t.screenLG)}}),io=function(t){var r,i,x,C=t.children,h=(0,l.useRouteMeta)(),U=(0,q.Z)(),I=U.pathname,J=U.hash,Q=(0,d.useContext)(te.Z),dn=Q.direction,cn=ao(),ln=cn.styles,en=(0,Kt.Z)(!1),Cn=S()(en,2),R=Cn[0],yn=Cn[1],V=(0,d.useMemo)(function(){var mn;return((mn=h.toc)===null||mn===void 0?void 0:mn.filter(function(Fn){return Fn._debug_demo}).map(function(Fn){return Fn.id}))||[]},[h]),kn=V.includes(J.slice(1));(0,d.useLayoutEffect)(function(){yn(kn)},[]);var Nn=(0,d.useMemo)(function(){return{showDebug:R,setShowDebug:yn}},[R,V]),On=dn==="rtl";return(0,e.jsx)(Gt.Z.Provider,{value:Nn,children:(0,e.jsxs)(Vn.Z,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24,children:[(0,e.jsx)(Zn,{fallback:null,children:(0,e.jsx)(_t,{showDebug:R,debugDemos:V})}),(0,e.jsxs)("article",{className:f()(ln.articleWrapper,{rtl:On}),children:[(r=h.frontmatter)!==null&&r!==void 0&&r.title?(0,e.jsxs)(He.Z.Title,{style:{fontSize:30,position:"relative"},children:[(0,e.jsxs)(Vt.Z,{size:"small",children:[(i=h.frontmatter)===null||i===void 0?void 0:i.title,(x=h.frontmatter)===null||x===void 0?void 0:x.subtitle,!I.startsWith("/components/overview")&&(0,e.jsx)(Zn,{fallback:null,children:(0,e.jsx)(ro,{title:(0,e.jsx)(l.FormattedMessage,{id:"app.content.edit-page"}),filename:h.frontmatter.filename})})]}),I.startsWith("/components/")&&(0,e.jsx)(Zn,{fallback:null,children:(0,e.jsx)(oo,{pathname:I})})]}):null,(0,e.jsx)(Zn,{fallback:null,children:(0,e.jsx)(no,{})}),!h.frontmatter.__autoDescription&&h.frontmatter.description,(0,e.jsx)("div",{style:{minHeight:"calc(100vh - 64px)"},children:C}),(0,e.jsx)(Zn,{children:(0,e.jsx)(qt,{zhihuLink:h.frontmatter.zhihu_url,yuqueLink:h.frontmatter.yuque_url,juejinLink:h.frontmatter.juejin_url})}),(0,e.jsx)(Zn,{children:(0,e.jsx)(Yt,{filename:h.frontmatter.filename})})]}),(0,e.jsx)(Zn,{fallback:null,children:(0,e.jsx)(to,{rtl:On})}),(0,e.jsx)(eo,{})]})})},lo=io,so=n(650010),co=n(361446),qe,_e,uo=(0,u.kc)(function(a){var t=a.token,r=a.css,i=t.antCls,x=t.fontFamily,C=t.colorSplit;return{asideContainer:r(qe||(qe=c()([`
      min-height: 100%;
      padding-bottom: 48px;
      font-family: Avenir, `,`, sans-serif;

      &`,`-menu-inline {
        `,`-menu-submenu-title h4,
        > `,`-menu-item,
        `,`-menu-item a {
          overflow: hidden;
          font-size: 14px;
          text-overflow: ellipsis;
        }

        > `,"-menu-item-group > ",`-menu-item-group-title {
          margin-top: 16px;
          margin-bottom: 16px;
          font-size: 13px;

          &::after {
            position: relative;
            top: 12px;
            display: block;
            width: calc(100% - 20px);
            height: 1px;
            background: `,`;
            content: '';
          }
        }

        > `,`-menu-item,
        > `,`-menu-submenu
        > `,`-menu-submenu-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item,
        &`,`-menu-inline
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item {
          padding-left: 40px !important;

          `,`-row-rtl & {
            padding-right: 40px !important;
            padding-left: 16px !important;
          }
        }

        // Nest Category > Type > Article
        &`,`-menu-inline {
          `,`-menu-item-group-title {
            margin-left: 4px;
            padding-left: 60px;

            `,`-row-rtl & {
              padding-right: 60px;
              padding-left: 16px;
            }
          }

          `,"-menu-item-group-list > ",`-menu-item {
            padding-left: 80px !important;

            `,`-row-rtl & {
              padding-right: 80px !important;
              padding-left: 16px !important;
            }
          }
        }

        `,`-menu-item-group:first-child {
          `,`-menu-item-group-title {
            margin-top: 0;
          }
        }
      }

      a[disabled] {
        color: #ccc;
      }

      .chinese {
        margin-left: 6px;
        font-weight: normal;
        font-size: 12px;
        opacity: 0.67;
      }
    `])),x,i,i,i,i,i,i,C,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),mainMenu:r(_e||(_e=c()([`
      z-index: 1;

      .main-menu-inner {
        position: sticky;
        top: `,`px;
        width: 100%;
        height: 100%;
        max-height: calc(100vh - `,`px);
        overflow: hidden;
      }

      &:hover .main-menu-inner {
        overflow-y: auto;
      }
    `])),t.headerHeight+t.contentMarginTop,t.headerHeight+t.contentMarginTop)}}),po=function(){var t=(0,l.useSidebarData)(),r=(0,d.useContext)(te.Z),i=r.isMobile,x=r.theme,C=uo(),h=C.styles,U=(0,co.Z)(),I=S()(U,2),J=I[0],Q=I[1],dn=x.includes("dark"),cn=(0,u.Fg)(),ln=cn.colorBgContainer,en=(0,e.jsx)(T.ZP,{theme:{components:{Menu:{itemBg:ln,darkItemBg:ln}}},children:(0,e.jsx)(Ce.Z,{items:J,inlineIndent:30,className:h.asideContainer,mode:"inline",theme:dn?"dark":"light",selectedKeys:[Q],defaultOpenKeys:t==null?void 0:t.map(function(Cn){var R=Cn.title;return R}).filter(function(Cn){return Cn})})});return i?(0,e.jsx)(so.Z,{children:en},"Mobile-menu"):(0,e.jsx)(Vn.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:h.mainMenu,children:(0,e.jsx)("section",{className:"main-menu-inner",children:en})})},mo=po,nt,go=(0,u.kc)(function(a){var t=a.css,r=a.token;return{main:t(nt||(nt=c()([`
    display: flex;
    margin-top: `,`px;
  `])),r.contentMarginTop)}}),ho=function(t){var r=t.children,i=go(),x=i.styles;return(0,e.jsxs)("main",{className:x.main,children:[(0,e.jsx)(Ze,{}),(0,e.jsx)(mo,{}),(0,e.jsx)(lo,{children:r})]})},fo=ho,xo={cn:{title:"Ant Design - \u4E00\u5957\u4F01\u4E1A\u7EA7 UI \u8BBE\u8BA1\u8BED\u8A00\u548C React \u7EC4\u4EF6\u5E93",description:"\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u3002"},en:{title:"Ant Design - The world's second most popular React UI framework",description:"An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises"}},vo=function(){var t=(0,l.useOutlet)(),r=(0,q.Z)(),i=r.pathname,x=r.search,C=r.hash,h=(0,Z.Z)(xo),U=S()(h,2),I=U[0],J=U[1],Q=(0,d.useRef)(null),dn=(0,d.useContext)(te.Z),cn=dn.direction,ln=(0,l.useSiteData)(),en=ln.loading;(0,d.useLayoutEffect)(function(){J==="cn"?O().locale("zh-cn"):O().locale("en")},[]),(0,d.useEffect)(function(){var R=document.getElementById("nprogress-style");R&&(Q.current=setTimeout(function(){var yn;(yn=R.parentNode)===null||yn===void 0||yn.removeChild(R)},0))},[]),(0,d.useEffect)(function(){var R,yn=C.replace("#","");yn&&((R=document.getElementById(decodeURIComponent(yn)))===null||R===void 0||R.scrollIntoView())},[en,C]),(0,d.useEffect)(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",i+x)},[r]);var Cn=(0,d.useMemo)(function(){return["","/"].some(function(R){return R===i})||["/index"].some(function(R){return i.startsWith(R)})?(0,e.jsx)(Lt,{title:I.title,desc:I.description,children:t}):i.startsWith("/docs/resource")?(0,e.jsx)(Ut,{children:t}):i.startsWith("/theme-editor")?t:(0,e.jsx)(fo,{children:t})},[i,t]);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(l.Helmet,{encodeSpecialCharacters:!1,children:[(0,e.jsx)("html",{lang:J==="cn"?"zh-CN":J,"data-direction":cn,className:f()({rtl:cn==="rtl"})}),(0,e.jsx)("link",{sizes:"144x144",href:"https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"}),(0,e.jsx)("meta",{property:"og:description",content:I.description}),(0,e.jsx)("meta",{property:"og:type",content:"website"}),(0,e.jsx)("meta",{property:"og:image",content:"https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"})]}),(0,e.jsxs)(T.ZP,{direction:cn,locale:J==="cn"?M.Z:void 0,children:[(0,e.jsx)(zn,{}),(0,e.jsx)(Mt,{}),Cn]})]})},bo=vo},840070:function(Dn,H,n){n.r(H),n.d(H,{ANT_DESIGN_NOT_SHOW_BANNER:function(){return P},default:function(){return z}});var Y=n(97857),S=n.n(Y),sn=n(805574),f=n.n(sn),b=n(667294),O=n(900210),un=n(368655),l=n(359020),d=n(965516),M=n(682582),T=n(385956),Z=n(49313),q=n(217187),_=n(438746),c=n(513769),o=n.n(c),u=n(75529),e=n(65630),w=n(438199),m=n(785893),j=["children","theme"],on=64,rn=38,p=function(L){var K=L.children,an=L.theme,pn=o()(L,j),wn=(0,b.useContext)(u.ZP.ConfigContext),$=wn.getPrefixCls,y=wn.iconPrefixCls,g=$(),s=d.Z.useToken(),v=s.token,E=(0,b.useContext)(w.Z),F=E.bannerVisible;return b.useEffect(function(){u.ZP.config({theme:an})},[an]),(0,m.jsx)(e.f6,S()(S()({},pn),{},{theme:an,customToken:{headerHeight:on,bannerHeight:rn,menuItemBorder:2,mobileMaxWidth:767.99,siteMarkdownCodeBg:v.colorFillTertiary,antCls:".".concat(g),iconCls:".".concat(y),marginFarXS:v.marginXXL/6*7,marginFarSM:v.marginXXL/3*5,marginFar:v.marginXXL*2,codeFamily:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",contentMarginTop:40,anchorTop:on+v.margin+(F?rn:0)},children:K}))},D=p,B=b.lazy(function(){return Promise.all([n.e(7898),n.e(14137),n.e(50263)]).then(n.bind(n,531434))}),N=768,P="ANT_DESIGN_NOT_SHOW_BANNER",X=function(){var L=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return L.map(function(K){return K==="dark"?d.Z.darkAlgorithm:K==="compact"?d.Z.compactAlgorithm:null}).filter(function(K){return K})},W=function(){var L=(0,T.useOutlet)(),K=(0,_.Z)(),an=K.pathname,pn=(0,T.useSearchParams)(),wn=f()(pn,2),$=wn[0],y=wn[1],g=(0,q.Z)({isMobile:!1,direction:"ltr",theme:[],bannerVisible:!1}),s=f()(g,2),v=s[0],E=v.theme,F=E===void 0?[]:E,G=v.direction,nn=v.isMobile,jn=v.bannerVisible,gn=jn===void 0?!1:jn,hn=s[1],fn=(0,b.useCallback)(function(A){hn(function(Sn){return S()(S()({},Sn),A)});var vn=$.toString(),bn=$;Object.entries(A).forEach(function(Sn){var Un=f()(Sn,2),In=Un[0],Rn=Un[1];if(In==="direction"&&(Rn==="rtl"?bn.set("direction","rtl"):bn.delete("direction")),In==="theme"){var Hn;bn=(0,T.createSearchParams)(S()(S()({},bn),{},{theme:Rn.filter(function(Xn){return Xn!=="light"})})),(Hn=document.querySelector("html"))===null||Hn===void 0||Hn.setAttribute("data-prefers-color",Rn.includes("dark")?"dark":"light")}}),bn.toString()!==vn&&y(bn)},[$,y]),xn=function(){fn({isMobile:window.innerWidth<N})};(0,b.useEffect)(function(){var A=$.getAll("theme"),vn=$.get("direction");return hn({theme:A,direction:vn==="rtl"?"rtl":"ltr"}),xn(),window.addEventListener("resize",xn),function(){window.removeEventListener("resize",xn)}},[]);var Mn=(0,b.useMemo)(function(){return{direction:G,updateSiteConfig:fn,theme:F,isMobile:nn,bannerVisible:gn}},[nn,G,fn,F,gn]),Tn=b.useState(function(){return(0,O.createCache)()}),Bn=f()(Tn,1),En=Bn[0];(0,T.useServerInsertedHTML)(function(){var A=(0,O.extractStyle)(En,{plain:!0,types:"style"});return(0,m.jsx)("style",{"data-type":"antd-cssinjs",dangerouslySetInnerHTML:{__html:A}})}),(0,T.useServerInsertedHTML)(function(){var A=(0,O.extractStyle)(En,{plain:!0,types:["cssVar","token"]});return(0,m.jsx)("style",{"data-type":"antd-css-var","data-rc-order":"prepend","data-rc-priority":"-9999",dangerouslySetInnerHTML:{__html:A}})}),(0,T.useServerInsertedHTML)(function(){return(0,m.jsx)("style",{"data-sandpack":"true",id:"sandpack",dangerouslySetInnerHTML:{__html:(0,l.$Z)()}})});var zn=an.startsWith("/~demos"),Ln=L;return zn||(Ln=(0,m.jsxs)(M.Z,{children:[L,(0,m.jsx)(b.Suspense,{children:(0,m.jsx)(B,{value:F,onChange:function(vn){return fn({theme:vn})}})})]})),(0,m.jsx)(Z.f.Provider,{value:F.includes("dark"),children:(0,m.jsx)(O.StyleProvider,{cache:En,linters:[O.legacyNotSelectorLinter,O.parentSelectorLinter,O.NaNLinter],children:(0,m.jsx)(w.Z.Provider,{value:Mn,children:(0,m.jsx)(D,{theme:{algorithm:X(F),token:{motion:!F.includes("motion-off")},cssVar:!0},children:(0,m.jsx)(un.R,{disabled:!F.includes("happy-work"),children:Ln})})})})})},z=W},777502:function(Dn,H,n){n.r(H),n.d(H,{default:function(){return D}});var Y=n(805574),S=n.n(Y),sn=n(168400),f=n.n(sn),b=n(639389),O=n(510274),un=n(65630),l=n(385956),d=n(391298),M=n(667294),T=n(630770),Z=n(302559),q=n(438746),_=n(438199),c=n(693399),o=n(785893),u="ant-where-checker",e={cn:{whereNotSupport:"\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u73B0\u4EE3 CSS Selector\uFF0C\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF08\u5982 Chrome\u3001Firefox \u7B49\u7B49\uFF09\u67E5\u770B\u5B98\u7F51\u3002\u5982\u679C\u9700\u8981\u5BF9\u65E7\u7248\u6D4F\u89C8\u5668\u8FDB\u884C\u6837\u5F0F\u652F\u6301\uFF0C\u6B22\u8FCE\u67E5\u9605\u914D\u7F6E\u6587\u6863\uFF1A",whereDocTitle:"\u517C\u5BB9\u6027\u8C03\u6574\uFF08\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF09",whereDocUrl:"/docs/react/customize-theme-cn#\u517C\u5BB9\u6027\u8C03\u6574"},en:{whereNotSupport:"Your browser not support modern CSS Selector. Please use modern browser to view (e.g. Chrome, Firefox, etc). If you want to compatible style with legacy browser, please refer to the configuration document:",whereDocTitle:"Compatible adjustment (Please use modern browser to visit)",whereDocUrl:"/docs/react/customize-theme#compatible-adjustment"}};function w(){var B=(0,Z.Z)(e),N=S()(B,1),P=N[0],X=M.useState(!0),W=S()(X,2),z=W[0],k=W[1];return M.useEffect(function(){var L=document.createElement("p");L.className=u,L.style.position="fixed",L.style.pointerEvents="none",L.style.visibility="hidden",L.style.width="0",document.body.appendChild(L),(0,c.updateCSS)(`
:where(.`.concat(u,`) {
  content: "__CHECK__";
}
    `),u);var K=getComputedStyle(L),an=K.content;k(String(an).includes("CHECK")),document.body.removeChild(L),(0,c.removeCSS)(u)},[]),z?null:(0,o.jsx)("div",{style:{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:99999999,background:"rgba(0,0,0,0.65)",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,o.jsxs)("div",{style:{border:"1px solid #ffe58f",background:"#fffbe6",color:"rgba(0,0,0,0.88)",padding:"8px 12px",borderRadius:"8px",zIndex:9999999999,lineHeight:"22px",width:520},children:[P.whereNotSupport," ",(0,o.jsx)("a",{style:{color:"#1677ff",textDecoration:"none"},href:P.whereDocUrl,children:P.whereDocTitle})]})})}var m,j,on={cn:{owner:"\u8682\u8681\u96C6\u56E2\u548C Ant Design \u5F00\u6E90\u793E\u533A"},en:{owner:"Ant Group and Ant Design Community"}},rn=function(){var N=(0,M.useContext)(_.Z),P=N.isMobile;return(0,un.kc)(function(X){var W=X.token,z=X.css,k=new O.C((0,T.Z)("#f0f3fa","#fff")).onBackground(W.colorBgContainer).toHexString();return{holder:z(m||(m=f()([`
      background: `,`;
    `])),k),footer:z(j||(j=f()([`
      background: `,`;
      color: `,`;
      box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);

      * {
        box-sizing: border-box;
      }

      h2,
      a {
        color: `,`;
      }

      .rc-footer-column {
        margin-bottom: `,`px;
        :last-child {
          margin-bottom: `,`px;
        }
      }

      .rc-footer-item-icon {
        top: -1.5px;
      }

      .rc-footer-container {
        max-width: 1208px;
        margin-inline: auto;
        padding-inline: `,`px;
      }

      .rc-footer-bottom {
        box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
        .rc-footer-bottom-container {
          font-size: `,`px;
        }
      }
    `])),k,W.colorTextSecondary,W.colorText,P?60:0,P?20:0,W.marginXXL,W.fontSize)}})()},p=function(){var N=(0,q.Z)(),P=(0,Z.Z)(on),X=S()(P,2),W=X[0],z=X[1],k=rn(),L=k.styles,K=N.getLink,an=M.useMemo(function(){var pn=z==="cn",wn={title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.resources"}),items:[{title:"Ant Design Charts",url:pn?"https://ant-design-charts.antgroup.com":"https://charts.ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Ant Design Mobile",url:pn?"https://ant-design-mobile.antgroup.com/zh":"https://mobile.ant.design",openExternal:!0},{title:"Ant Design Mini",url:pn?"https://ant-design-mini.antgroup.com/":"https://mini.ant.design",openExternal:!0},{title:"Ant Design Landing",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.landing"}),url:"https://landing.ant.design",openExternal:!0},{title:"Scaffolds",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.scaffolds"}),url:"https://scaffold.ant.design",openExternal:!0},{title:"Umi",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.umi"}),url:"https://umijs.org",openExternal:!0},{title:"dumi",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.dumi"}),url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.qiankun"}),url:"https://qiankun.umijs.org",openExternal:!0},{title:"ahooks",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.hooks"}),url:"https://github.com/alibaba/hooks",openExternal:!0},{title:"Ant Motion",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.motion"}),url:"https://motion.ant.design",openExternal:!0},{title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.chinamirror"}),url:"https://ant-design.antgroup.com"}]},$={title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.community"}),items:[{icon:(0,o.jsx)(b.AntDesignOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.awesome"}),url:"https://github.com/websemantics/awesome-ant-design",openExternal:!0},{icon:(0,o.jsx)(b.MediumOutlined,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,o.jsx)(b.TwitterOutlined,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.yuque.repo"}),url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,o.jsx)(b.ZhihuOutlined,{style:{color:"#056de8"}}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.zhihu"}),url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,o.jsx)(b.ZhihuOutlined,{style:{color:"#056de8"}}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.zhihu.xtech"}),url:"https://www.zhihu.com/column/c_1543658574504751104",openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",width:16,height:16,alt:"seeconf"}),title:"SEE Conf",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.seeconf"}),url:"https://seeconf.antfin.com/",openExternal:!0}]};pn&&$.items.push({icon:(0,o.jsx)(b.UsergroupAddOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.work_with_us"}),url:K("/docs/resources",{cn:"\u52A0\u5165\u6211\u4EEC",en:"JoinUs"}),LinkComponent:l.Link});var y={title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.help"}),items:[{icon:(0,o.jsx)(b.GithubOutlined,{}),title:"GitHub",url:"https://github.com/ant-design/ant-design",openExternal:!0},{icon:(0,o.jsx)(b.HistoryOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.change-log"}),url:K("/changelog"),LinkComponent:l.Link},{icon:(0,o.jsx)(b.QuestionCircleOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.faq"}),url:K("/docs/react/faq"),LinkComponent:l.Link},{icon:(0,o.jsx)(b.BugOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.bug-report"}),url:"https://new-issue.ant.design/",openExternal:!0},{icon:(0,o.jsx)(b.IssuesCloseOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.issues"}),url:"https://github.com/ant-design/ant-design/issues",openExternal:!0},{icon:(0,o.jsx)(b.MessageOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.discussions"}),url:"https://github.com/ant-design/ant-design/discussions",openExternal:!0},{icon:(0,o.jsx)(b.QuestionCircleOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.stackoverflow"}),url:"http://stackoverflow.com/questions/tagged/antd",openExternal:!0},{icon:(0,o.jsx)(b.QuestionCircleOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.segmentfault"}),url:"https://segmentfault.com/t/antd",openExternal:!0}]},g={icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:22,height:22,alt:"Ant XTech"}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.more-product"}),items:[{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.yuque"}),url:"https://yuque.com",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.yuque.slogan"}),openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",width:16,height:16,alt:"AntV"}),title:"AntV",url:"https://antv.antgroup.com",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.antv.slogan"}),openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg",width:16,height:16}),title:"Egg",url:"https://eggjs.org",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.egg.slogan"}),openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",width:16,height:16,alt:"kitchen"}),title:"Kitchen",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.kitchen"}),url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_j9rjmc/afts/img/A*3ittT5OEo2gAAAAAAAAAAAAADvGmAQ/original",width:16,height:16,alt:"Galacean"}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.galacean"}),description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.galacean.slogan"}),url:"https://galacean.antgroup.com/",openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:16,height:16,alt:"xtech"}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.xtech"}),url:"https://xtech.antfin.com/",openExternal:!0},{icon:(0,o.jsx)(b.BgColorsOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.theme"}),url:K("/theme-editor"),LinkComponent:l.Link}]};return[wn,$,y,g]},[z,N.search]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d.Z,{columns:an,className:L.footer,bottom:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{style:{opacity:"0.4"},children:["Made with ",(0,o.jsx)("span",{style:{color:"#fff"},children:"\u2764"})," by"]}),(0,o.jsx)("div",{children:W.owner})]})}),(0,o.jsx)(w,{})]})},D=p},373638:function(Dn,H,n){n.d(H,{J1:function(){return M},Is:function(){return c},Fy:function(){return Z},KE:function(){return d},qE:function(){return T}});var Y=n(661227),S=n(805574),sn=n(97857),f=n(385564),b=n(842348),O=typeof location!="undefined"&&location.hostname.includes(".antgroup.com"),un={categoryOrder:{"Ant Design":0,\u5168\u5C40\u6837\u5F0F:1,"Global Styles":1,\u8BBE\u8BA1\u6A21\u5F0F:2,"Design Patterns":2,"\u8BBE\u8BA1\u6A21\u5F0F - \u63A2\u7D22":3,"Design Patterns (Research)":3,Components:100,\u7EC4\u4EF6:100},typeOrder:{Overview:-1,General:0,Layout:1,Navigation:2,"Data Entry":3,"Data Display":4,Feedback:5,Other:6,Deprecated:7,\u7EC4\u4EF6\u603B\u89C8:-1,\u901A\u7528:0,\u5E03\u5C40:1,\u5BFC\u822A:2,\u6570\u636E\u5F55\u5165:3,\u6570\u636E\u5C55\u793A:4,\u53CD\u9988:5,\u5176\u4ED6:6,\u5E9F\u5F03:7,\u539F\u5219:1,Principles:1,\u5168\u5C40\u89C4\u5219:2,\u91CD\u578B\u7EC4\u4EF6:8,ProComponents:8,"Global Rules":2,\u6A21\u677F\u6587\u6863:3,"Template Document":3},docVersions:{"4.x":O?"https://4x-ant-design.antgroup.com":"https://4x.ant.design","3.x":"https://3x.ant.design","2.x":"https://2x.ant.design","1.x":"https://1x.ant.design","0.12.x":"https://012x.ant.design","0.11.x":"https://011x.ant.design","0.10.x":"https://010x.ant.design","0.9.x":"https://09x.ant.design"}};function l(o,u,e,w){var m=o.map(function(p){return p.meta}).filter(function(p){return!p.skip}),j=[],on=function(D,B){return(D.order||0)-(B.order||0)};m.sort(on).forEach(function(p){if(p.category&&(p.category=p.category[u]||p.category),p.type&&(p.type=p.type[u]||p.type),p!=null&&p.title&&(p.title=p.title[u]||p.title),!p.category){j.push(p);return}if(p.category==="Components"&&p.type){var D=j.find(function(P){return(P==null?void 0:P.title)===p.type});D||(D={type:"type",title:p.type,children:[],order:w[p.type]},j.push(D)),D.children=D.children||[],D.children.push(p);return}var B=j.find(function(P){return(P==null?void 0:P.title)===p.category});if(B||(B={type:"category",title:p.category,children:[],order:e[p.category]},j.push(B)),B.children=B.children||[],p.type){var N=B.children.filter(function(P){return(P==null?void 0:P.title)===p.type})[0];N||(N={type:"type",title:p.type,children:[],order:w[p.type]},B.children.push(N)),N.children=N.children||[],N.children.push(p)}else B.children.push(p)});function rn(p){return p.sort(on).map(function(D){return D.children?_objectSpread(_objectSpread({},D),{},{children:rn(D.children)}):D})}return rn(j)}function d(o){return/-cn\/?$/.test(o)}function M(o,u,e,w){var m=o.startsWith("/")?o:"/".concat(o),j;if(u?m==="/"?j="/index-cn":m.endsWith("/")?j=m.replace(/\/$/,"-cn/"):(j="".concat(m,"-cn"),j=j.replace(/(-cn)+/,"-cn")):j=/\/?index-cn/.test(m)?"/":m.replace("-cn",""),w){var on=w[u?"zhCN":"enUS"];j+="#".concat(on)}return{pathname:j,search:e}}function T(o){var u="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png",e=new Image,w,m=function(on){w||(w=!0,e.src="",o(on))};return e.onload=function(){return m("responded")},e.onerror=function(){return m("error")},e.src=u,setTimeout(function(){return m("timeout")},1500)}function Z(){var o="test",u=window.localStorage;try{return u.setItem(o,"1"),u.removeItem(o),!0}catch(e){return!1}}function q(o){return new Promise(function(u,e){var w=document.createElement("script");w.type="text/javascript",w.src=o,w.onload=u,w.onerror=e,document.head.appendChild(w)})}function _(o){var u=["h1","h2","h3","p","img","a","code","strong"];if(!Array.isArray(o))return"";var e=flattenDeep(o.filter(function(w){if(Array.isArray(w)){var m=_slicedToArray(w,1),j=m[0];return j==="p"}return!1}).map(function(w){var m=flatten(w),j=_toArray(m),on=j[0],rn=j.slice(1),p=rn.filter(function(D){return typeof D=="string"&&!u.includes(D)}).join("");return[on,p]})).find(function(w){return w&&typeof w=="string"&&!u.includes(w)});return e}var c=function(){return un}},647727:function(Dn,H,n){n.d(H,{Z:function(){return Y.Z}});var Y=n(582485)},682582:function(Dn,H,n){n.d(H,{Z:function(){return p}});var Y=n(97857),S=n.n(Y),sn=n(805574),f=n.n(sn),b=n(667294),O=n(693967),un=n.n(O),l=n(73287),d=n(215570),M=n(269924),T=n(890887),Z=b.createContext({}),q=b.createContext({message:{},notification:{},modal:{}}),_=q,c=n(9783),o=n.n(c),u=n(286665),e=function(B){var N=B.componentCls,P=B.colorText,X=B.fontSize,W=B.lineHeight,z=B.fontFamily;return o()({},N,{color:P,fontSize:X,lineHeight:W,fontFamily:z})},w=function(){return{}},m=(0,u.I$)("App",e,w),j=n(785893),on=function(){return b.useContext(_)},rn=function(B){var N=B.prefixCls,P=B.children,X=B.className,W=B.rootClassName,z=B.message,k=B.notification,L=B.style,K=B.component,an=K===void 0?"div":K,pn=(0,b.useContext)(l.E_),wn=pn.getPrefixCls,$=wn("app",N),y=m($),g=f()(y,3),s=g[0],v=g[1],E=g[2],F=un()(v,$,X,W,E),G=(0,b.useContext)(Z),nn=b.useMemo(function(){return{message:S()(S()({},G.message),z),notification:S()(S()({},G.notification),k)}},[z,k,G.message,G.notification]),jn=(0,d.Z)(nn.message),gn=f()(jn,2),hn=gn[0],fn=gn[1],xn=(0,T.Z)(nn.notification),Mn=f()(xn,2),Tn=Mn[0],Bn=Mn[1],En=(0,M.Z)(),zn=f()(En,2),Ln=zn[0],A=zn[1],vn=b.useMemo(function(){return{message:hn,notification:Tn,modal:Ln}},[hn,Tn,Ln]),bn=an===!1?b.Fragment:an,Sn={className:F,style:L};return s((0,j.jsx)(_.Provider,{value:vn,children:(0,j.jsx)(Z.Provider,{value:nn,children:(0,j.jsxs)(bn,S()(S()({},an===!1?void 0:Sn),{},{children:[A,fn,Bn,P]}))})}))};rn.useApp=on;var p=rn},86198:function(Dn,H,n){n.d(H,{Z:function(){return y}});var Y=n(719632),S=n.n(Y),sn=n(9783),f=n.n(sn),b=n(805574),O=n.n(b),un=n(513769),l=n.n(un),d=n(97857),M=n.n(d),T=n(667294),Z=n(693967),q=n.n(Z),_=n(518475),c=n(73287),o=n(121790),u=n(45598),e=n(296708);function w(g,s,v){if(typeof v=="boolean")return v;if(g.length)return!0;var E=(0,u.default)(s);return E.some(function(F){return F.type===e.Z})}var m=n(900210),j=n(286665),on=function(s){var v=s.componentCls,E=s.bodyBg,F=s.lightSiderBg,G=s.lightTriggerBg,nn=s.lightTriggerColor;return f()({},"".concat(v,"-sider-light"),f()(f()({background:F},"".concat(v,"-sider-trigger"),{color:nn,background:G}),"".concat(v,"-sider-zero-width-trigger"),{color:nn,background:G,border:"1px solid ".concat(E),borderInlineStart:0}))},rn=on,p=function(s){var v=s.antCls,E=s.componentCls,F=s.colorText,G=s.triggerColor,nn=s.footerBg,jn=s.triggerBg,gn=s.headerHeight,hn=s.headerPadding,fn=s.headerColor,xn=s.footerPadding,Mn=s.triggerHeight,Tn=s.zeroTriggerHeight,Bn=s.zeroTriggerWidth,En=s.motionDurationMid,zn=s.motionDurationSlow,Ln=s.fontSize,A=s.borderRadius,vn=s.bodyBg,bn=s.headerBg,Sn=s.siderBg;return f()(f()(f()(f()({},E,M()(M()(f()(f()(f()({display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:vn,"&, *":{boxSizing:"border-box"}},"&".concat(E,"-has-sider"),f()({flexDirection:"row"},"> ".concat(E,", > ").concat(E,"-content"),{width:0})),"".concat(E,"-header, &").concat(E,"-footer"),{flex:"0 0 auto"}),"".concat(E,"-sider"),{position:"relative",minWidth:0,background:Sn,transition:"all ".concat(En,", background 0s"),"&-children":f()({height:"100%",marginTop:-.1,paddingTop:.1},"".concat(v,"-menu").concat(v,"-menu-inline-collapsed"),{width:"auto"}),"&-has-trigger":{paddingBottom:Mn},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:Mn,color:G,lineHeight:(0,m.unit)(Mn),textAlign:"center",background:jn,cursor:"pointer",transition:"all ".concat(En)},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:gn,insetInlineEnd:s.calc(Bn).mul(-1).equal(),zIndex:1,width:Bn,height:Tn,color:G,fontSize:s.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:Sn,borderStartStartRadius:0,borderStartEndRadius:A,borderEndEndRadius:A,borderEndStartRadius:0,cursor:"pointer",transition:"background ".concat(zn," ease"),"&::after":{position:"absolute",inset:0,background:"transparent",transition:"all ".concat(zn),content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:s.calc(Bn).mul(-1).equal(),borderStartStartRadius:A,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:A}}}}),rn(s)),{},{"&-rtl":{direction:"rtl"}})),"".concat(E,"-header"),f()({height:gn,padding:hn,color:fn,lineHeight:(0,m.unit)(gn),background:bn},"".concat(v,"-menu"),{lineHeight:"inherit"})),"".concat(E,"-footer"),{padding:xn,color:F,fontSize:Ln,background:nn}),"".concat(E,"-content"),{flex:"auto",minHeight:0})},D=function(s){var v=s.colorBgLayout,E=s.controlHeight,F=s.controlHeightLG,G=s.colorText,nn=s.controlHeightSM,jn=s.marginXXS,gn=s.colorTextLightSolid,hn=s.colorBgContainer,fn=F*1.25;return{colorBgHeader:"#001529",colorBgBody:v,colorBgTrigger:"#002140",bodyBg:v,headerBg:"#001529",headerHeight:E*2,headerPadding:"0 ".concat(fn,"px"),headerColor:G,footerPadding:"".concat(nn,"px ").concat(fn,"px"),footerBg:v,siderBg:"#001529",triggerHeight:F+jn*2,triggerBg:"#002140",triggerColor:gn,zeroTriggerWidth:F,zeroTriggerHeight:F,lightSiderBg:hn,lightTriggerBg:hn,lightTriggerColor:G}},B=(0,j.I$)("Layout",function(g){return[p(g)]},D,{deprecatedTokens:[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]]}),N=n(785893),P=["prefixCls","suffixCls","className","tagName"],X=["prefixCls","className","rootClassName","children","hasSider","tagName","style"];function W(g){var s=g.suffixCls,v=g.tagName,E=g.displayName;return function(F){var G=T.forwardRef(function(nn,jn){return(0,N.jsx)(F,M()({ref:jn,suffixCls:s,tagName:v},nn))});return G}}var z=T.forwardRef(function(g,s){var v=g.prefixCls,E=g.suffixCls,F=g.className,G=g.tagName,nn=l()(g,P),jn=T.useContext(c.E_),gn=jn.getPrefixCls,hn=gn("layout",v),fn=B(hn),xn=O()(fn,3),Mn=xn[0],Tn=xn[1],Bn=xn[2],En=E?"".concat(hn,"-").concat(E):hn;return Mn((0,N.jsx)(G,M()({className:q()(v||En,F,Tn,Bn),ref:s},nn)))}),k=T.forwardRef(function(g,s){var v=T.useContext(c.E_),E=v.direction,F=T.useState([]),G=O()(F,2),nn=G[0],jn=G[1],gn=g.prefixCls,hn=g.className,fn=g.rootClassName,xn=g.children,Mn=g.hasSider,Tn=g.tagName,Bn=g.style,En=l()(g,X),zn=(0,_.default)(En,["suffixCls"]),Ln=T.useContext(c.E_),A=Ln.getPrefixCls,vn=Ln.layout,bn=A("layout",gn),Sn=w(nn,xn,Mn),Un=B(bn),In=O()(Un,3),Rn=In[0],Hn=In[1],Xn=In[2],Vn=q()(bn,f()(f()({},"".concat(bn,"-has-sider"),Sn),"".concat(bn,"-rtl"),E==="rtl"),vn==null?void 0:vn.className,hn,fn,Hn,Xn),ie=T.useMemo(function(){return{siderHook:{addSider:function(Jn){jn(function(Qn){return[].concat(S()(Qn),[Jn])})},removeSider:function(Jn){jn(function(Qn){return Qn.filter(function(ee){return ee!==Jn})})}}}},[]);return Rn((0,N.jsx)(o.V.Provider,{value:ie,children:(0,N.jsx)(Tn,M()(M()({ref:s,className:Vn,style:M()(M()({},vn==null?void 0:vn.style),Bn)},zn),{},{children:xn}))}))}),L=W({tagName:"div",displayName:"Layout"})(k),K=W({suffixCls:"header",tagName:"header",displayName:"Header"})(z),an=W({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(z),pn=W({suffixCls:"content",tagName:"main",displayName:"Content"})(z),wn=L,$=wn;$.Header=K,$.Footer=an,$.Content=pn,$.Sider=e.Z,$._InternalSiderContext=e.D;var y=$},715778:function(Dn,H,n){n.d(H,{Z:function(){return Z}});var Y=n(174219),S=n(97857),sn=n.n(S),f=n(585369),b={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]},O=b,un={lang:sn()({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},f.Z),timePickerLocale:sn()({},O)};un.lang.ok="\u786E\u5B9A";var l=un,d=l,M="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",T={locale:"zh-cn",Pagination:Y.Z,DatePicker:l,TimePicker:O,Calendar:d,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00"},PageHeader:{back:"\u8FD4\u56DE"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:M,method:M,array:M,object:M,number:M,date:M,boolean:M,integer:M,float:M,regexp:M,email:M,url:M,hex:M},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0"},ColorPicker:{presetEmpty:"\u6682\u65E0"}},Z=T}}]);
