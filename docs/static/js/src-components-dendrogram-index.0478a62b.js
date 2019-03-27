(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/components/Dendrogram/index.mdx":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/@mdx-js/tag/dist/index.js"),c=n("./node_modules/docz/dist/index.m.js"),A=n("./node_modules/d3-hierarchy/src/index.js"),l=n("./node_modules/d3-selection/src/index.js"),i={name:"flare",children:[{name:"analytics",children:[{name:"cluster",children:[{name:"AgglomerativeCluster",value:3938},{name:"CommunityStructure",value:3812},{name:"HierarchicalCluster",value:6714},{name:"MergeEdge",value:743}]},{name:"graph",children:[{name:"BetweennessCentrality",value:3534},{name:"LinkDistance",value:5731},{name:"MaxFlowMinCut",value:7840},{name:"ShortestPaths",value:5914},{name:"SpanningTree",value:3416}]},{name:"optimization",children:[{name:"AspectRatioBanker",value:7074}]}]}]};n("./src/components/Dendrogram/style.scss");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=700,h=500,B=7;function f(e){var t=(e.y+e.parent.y)/2;return"M ".concat(e.y,", ").concat(e.x,"\n    C ").concat(t,", ").concat(e.x," ").concat(t,", ").concat(e.parent.x," ").concat(e.parent.y,", ").concat(e.parent.x)}var y=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=p(this,(e=g(t)).call.apply(e,[this].concat(a)))).init=function(){var e=Object(A.a)().size([h,m-120]),t=Object(A.b)(i,function(e){return e.children});return e(t),t},n.renderPaths=function(){return n.datas.slice(1).map(function(e,t){return o.a.createElement("path",{className:"link",d:f(e),key:"link_".concat(t)})})},n.renderNodes=function(){return n.datas.map(function(e,t){return o.a.createElement("g",{transform:"translate(".concat(e.y,", ").concat(e.x,")"),key:"node_".concat(t),className:"node"},o.a.createElement("circle",{r:B}),o.a.createElement("text",{dx:-B,dy:"-2"},e.data.name))})},n.renderSvg=function(){return o.a.createElement("svg",{width:m,height:h},o.a.createElement("g",{transform:"translate(50, 0)"},n.renderPaths(),n.renderNodes()))},n}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,o.a.PureComponent),n=t,(r=[{key:"componentWillMount",value:function(){var e=this.init();this.datas=e.descendants()}},{key:"render",value:function(){return this.datas?o.a.createElement("div",{className:"Dendrogram"},this.renderSvg()):null}}])&&u(n.prototype,r),a&&u(n,a),t}(),x=y;function D(e){return(D="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return!t||"object"!==D(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}y.__docgenInfo={description:"",methods:[{name:"init",docblock:null,modifiers:[],params:[],returns:null},{name:"renderPaths",docblock:null,modifiers:[],params:[],returns:null},{name:"renderNodes",docblock:null,modifiers:[],params:[],returns:null},{name:"renderSvg",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Dendrogram"};var E=10;function M(e){e.children&&(e._children=e.children,e._children.forEach(M),e.children=null)}function O(e,t){var n=(e.y+t.y)/2;return"M ".concat(e.y,", ").concat(e.x,"\n    C ").concat(n,", ").concat(e.x," ").concat(n,", ").concat(t.x," ").concat(t.y,", ").concat(t.x)}var Q=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),C(this,w(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,o.a.PureComponent),n=t,(r=[{key:"componentDidMount",value:function(){var e=Object(l.a)(".CollapsibleTree svg g"),t=0,n=Object(A.c)().size([500,700]),r=this.root;r.children.forEach(M),function o(a){var c=n(r);var A=c.descendants();var l=c.descendants().slice(1);A.forEach(function(e){e.y=180*e.depth});var i=e.selectAll("g.node").data(A,function(e){return e.id||(e.id=++t)});var s=i.enter().append("g").attr("class","node").attr("transform",function(e){return"translate("+a.y0+","+a.x0+")"}).on("click",function u(o){o.children?(o._children=o.children,o.children=null):(o.children=o._children,o._children=null);!function o(a){var c=n(r);var A=c.descendants();var l=c.descendants().slice(1);A.forEach(function(e){e.y=180*e.depth});var i=e.selectAll("g.node").data(A,function(e){return e.id||(e.id=++t)});var s=i.enter().append("g").attr("class","node").attr("transform",function(e){return"translate("+a.y0+","+a.x0+")"}).on("click",h);s.append("circle").attr("class","node").attr("r",E).style("fill",function(e){return e._children?"lightsteelblue":"#fff"});s.append("text").attr("dy",2).attr("x",function(e){return e.children||e._children?-E:E}).attr("text-anchor",function(e){return e.children||e._children?"end":"start"}).text(function(e){return e.data.name});var u=s.merge(i);u.attr("transform",function(e){return"translate("+e.y+","+e.x+")"});u.select("circle.node").attr("r",10).style("fill",function(e){return e._children?"lightsteelblue":"#fff"}).attr("cursor","pointer");var p=i.exit().attr("transform",function(e){return"translate("+a.y+","+a.x+")"}).remove();p.select("circle").attr("r",1e-6);p.select("text").style("fill-opacity",1e-6);var g=e.selectAll("path.link").data(l,function(e){return e.id});var d=g.enter().insert("path","g").attr("class","link").attr("d",function(e){var t={x:a.x0,y:a.y0};return O(t,t)});var m=d.merge(g);m.attr("d",function(e){return O(e,e.parent)});g.exit().attr("d",function(e){var t={x:a.x,y:a.y};return O(t,t)}).remove();A.forEach(function(e){e.x0=e.x,e.y0=e.y});function h(e){e.children?(e._children=e.children,e.children=null):(e.children=e._children,e._children=null),o(e)}}(o)});s.append("circle").attr("class","node").attr("r",E).style("fill",function(e){return e._children?"lightsteelblue":"#fff"});s.append("text").attr("dy",2).attr("x",function(e){return e.children||e._children?-E:E}).attr("text-anchor",function(e){return e.children||e._children?"end":"start"}).text(function(e){return e.data.name});var p=s.merge(i);p.attr("transform",function(e){return"translate("+e.y+","+e.x+")"});p.select("circle.node").attr("r",10).style("fill",function(e){return e._children?"lightsteelblue":"#fff"}).attr("cursor","pointer");var g=i.exit().attr("transform",function(e){return"translate("+a.y+","+a.x+")"}).remove();g.select("circle").attr("r",1e-6);g.select("text").style("fill-opacity",1e-6);var d=e.selectAll("path.link").data(l,function(e){return e.id});var m=d.enter().insert("path","g").attr("class","link").attr("d",function(e){var t={x:a.x0,y:a.y0};return O(t,t)});var h=m.merge(d);h.attr("d",function(e){return O(e,e.parent)});d.exit().attr("d",function(e){var t={x:a.x,y:a.y};return O(t,t)}).remove();A.forEach(function(e){e.x0=e.x,e.y0=e.y});function u(e){e.children?(e._children=e.children,e.children=null):(e.children=e._children,e._children=null),o(e)}}(r)}},{key:"render",value:function(){return o.a.createElement("div",{className:"CollapsibleTree"},o.a.createElement("svg",{width:700,height:500},o.a.createElement("g",{transform:"translate(50, 0)"})))}},{key:"root",get:function(){var e=Object(A.b)(i,function(e){return e.children});return e.x0=250,e.y0=0,e}}])&&I(n.prototype,r),a&&I(n,a),t}(),R=Q;function F(e){return(F="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function J(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Z(e,t){return!t||"object"!==F(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Q.__docgenInfo={description:"",methods:[{name:"root",docblock:null,modifiers:["get"],params:[],returns:null}],displayName:"CollapsibleTree"},n.d(t,"default",function(){return S});var S=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=Z(this,Y(t).call(this,e))).layout=null,n}var n,r,A;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.components,n=J(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"dendrogram"}},"Dendrogram"),o.a.createElement(a.MDXTag,{name:"blockquote",components:t},o.a.createElement(a.MDXTag,{name:"p",components:t,parentName:"blockquote"},o.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/d3/d3/wiki/%E7%B0%87%E5%B8%83%E5%B1%80"}},"https://github.com/d3/d3/wiki/%E7%B0%87%E5%B8%83%E5%B1%80"))),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"\u7ed8\u5236\u70b9\u548c\u8fde\u63a5\u7ebf\u6761"}},"\u7ed8\u5236\u70b9\u548c\u8fde\u63a5\u7ebf\u6761"),o.a.createElement(a.MDXTag,{name:"blockquote",components:t},o.a.createElement(a.MDXTag,{name:"p",components:t,parentName:"blockquote"},o.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://bl.ocks.org/d3indepth/ceb8d9e5ded610a9df1e0adb98efd748"}},"https://bl.ocks.org/d3indepth/ceb8d9e5ded610a9df1e0adb98efd748"),o.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://d3indepth.com/layouts/"}},"https://d3indepth.com/layouts/"))),o.a.createElement(a.MDXTag,{name:"p",components:t},"\u53ef\u4ee5\u901a\u8fc7 d3 \u7684 ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"cluster"),"\u3001",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"hierarchy")," \u7ed8\u5236\u51fa\u7c97\u7565\u7684\u7c07\u5e03\u5c40(cluster layout)"),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"\u7ed8\u5236\u66f2\u7ebf"}},"\u7ed8\u5236\u66f2\u7ebf"),o.a.createElement(a.MDXTag,{name:"blockquote",components:t},o.a.createElement(a.MDXTag,{name:"p",components:t,parentName:"blockquote"},o.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.d3-graph-gallery.com/graph/dendrogram_basic.html"}},"https://www.d3-graph-gallery.com/graph/dendrogram_basic.html"))),o.a.createElement(c.f,{of:x}),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"dendrogram-usage"}},"Dendrogram Usage"),o.a.createElement(c.e,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZtTodAhBSTI5WNOV2k9OABHIQEnWofQ4EkaCMDghD_QFe0pkcBJZnyDxYEsLpuiQj1JDQjDPg3GhcPw2DKHgn1JHIqBKIgaiYFooIALgYjIPYIMpTdE0FXNdo7Q1dhgHYTQfHkOTkIAARgIgRAGVBMK6JSA1QXRUWOU4AC9nAIRJsXYbhVPWKIBGeVArnaAAGdhkxmLB2n3GsZk7FhZ28gAWQL2AANkC4L1jAECADEfWgRJvP4ZxDkRR1MHYAAFIR-CWAyfjgMLESSmsUpoZwIBsy52AARiikL5HBCzqCsgBBOZnPYSM1PIGwoFg4J5E5ZyxGGmMZHYVFHJgbhgEPOyHOxeRt1rYAxugSbzAAMmO8ZEnmShmgOibw2c7gXPaMBQgsntUHadgAH4NkO8NIxmq4bqOrqaykGRq3fMxYRUzAwDCKApn-2b5tBgaVxrRMZIIHBUsyFJrwIXbazrTjCJ9dgt1XKQsZxvGCd2qQ0YhsxvxAZjMIzHC8JgsmvlUbBxKA3RQIMcCSJUrHtNNLVJNI1TfAgDJXHQvBEiWcgoDyWgBCWNEgnYLSGPadBkwtGwlZVxJZZUtS4AXLYCD6hIDal43Tbt2ApSM62HXQaJ_Fdz0_YIfwfamFCmK2_84DOCTVXMyyplxdBCxcgB2HyfPjxPfBgCAUkIIaAFZM-z3qphYH0xwyIa0_jsxnteoyjWFKICCK6I8EjdAZuAdYc9cVglbSABNIbu5wZIAGpjhwMLw2xxIZskdgACZ44sLoCD6cxikNAASdbJ6UdhD_QHAsBB4n7FP4BB-HmAR5Ps-L60w_77xx_n6P-eT0v2_z6_xoMfJYL8gHY0vsUeOIMzAa38HYUm3EEIwiwKBdAdgaZFT6DAdc2Esx9xrKxPBBAADq0AoD6jaDQJGBDiY5yECIIaExbA4DQC8f6G9azMLgDgYOAcXIMOxuUREGB3AEDgBw9YV9OCoAnC5JG3A5q0NrI8NqmdOB2AmN0dynl8zkOmEPPY5gtGTnzoXfImBVw5w1lrDIAAZVwrRwhDRsaiKMnIcD5GapGAA2psMxBAljJ0LBaNqq8fIAF1PxWPLpOF8Q1zaZEtt3f2cAliNy9iybuvdVybzHDvWeQNwycIsNNEpPRNZuIEA4pxBBIyCOiRjSc-SBDmEEZw6RU4MgdwmHYeRM1FGuSaVvAp3DeGpM8VAWIMBIytQ8VEGYkZu5LC4FgAZSjcnNO3q0lGxNib1k7psuhAk4BwAAHJVz4CAKZqBtj8CObWHgwAUoCDbj0ruPdpF7NrNsGAiQ1rFBudsAA-ofVZ8hihfL2ZTJpFh3zEzKVI9YXSBBnOLH04a6yhnExGTssZfCeELKWYsTg6A1nI2UTilp5hoywtrIwQodLiZoncHAF5RAAUstQHAAStBIwv0SN_c-l9OSQoeRYX5_zgDFB-JgUFwBwViqZbWOBpyLnHiubKpkIAHlE2-XWcgEB0KwEnGtSux5tZaRhfq-ltBUHHCwGtK0EAq6WuOP8_gFpV7iCPnwnAqAq7yCkHawmDypApD1XC1ciKaydJghkZwrA5z9IpauXFNLNmMDgEmvRKc8BrWCXgLS_iC4EDWiWwgO0w1zi5Wy1uVza28pmSXJYPluQgEjXs4AYyUXvIkZyKF3zu2EjDPG1F6L_qDvpU8TtUhs0RtXPCg2yKx00NXBAZokYACE-LUk5Lpem9gqBQgJHKVCw9tLvmxg4Kq85lz-CIJ4kQcQDzh0sJRYmlIk7M27lkIupFqAYEuiwHLWG8MoI8yQT6L8Sg2boQ5mxcR3MCJQa-PxQSwlRL_kAtoYW-gGDiwdJLI2ZolTx0I1MNSiTlZjTVuMOiLsjYmzNorJJtGw7yw9g7Rj7o3YWi45k965GpIEsDtIVJHGI7LVgJ42OZkzCqOcGOAk3QWDXnyL1EIGB2A6LQHYK6KnjguqfbA2Jhba6l1M9yqYFapguRLlnKzVlzXVyOC5VqjnzKqPQ3cboJitVaZyPEKAnBXx2CKXQBuL1BNFgor57J2LOCbvPhFj8iWLDn2BaloaKXxpHVXJl1LOAXnnklF3KgcW7ZLoyx8PLd0XLHoSABoD3mzS0DsK4HofQh45G7sZ3sUAZphULAxcBw5DNAyPeiqLTcWSVxSANyMaTjj7osAPIen8x7yJ4dPWeS8KZr04Yevet8dvfx4ZfVcN934bdcKPc7r9b4fzu1_UBR9_4CqFa_KBZggOwJOXYHzVEaIMewGgjBWocBYK6LgzMlH1hnjiSINdTTVF9VOfnbl_Zlb6HVnVugSxbNLEwDMCYMTrNI7swrC2tGUkh2Wxkt6w0e7y0Pbl36dBlQG0aTil8F8_IuVswd9eaa-eJAF-wTzVLtltJfB0_uWE4fai4JQl6dTVsqtifOoaAm6n8BwEDoSIP9ba8KCAHntZYDjiGlLlRK9MBwK6B1-j-sBK1MCyEDHKQscmK8UyJpOc9b6VmEwui_1PFNRmX4vOpaglcAmFE-uAfYmCKYSO9pq5vOUEq0iMA2tDN210DkWAQ8oCi5ELVjnqBivClK2NSMFWBK-YtxYUIMxg4zIaUn4mjPm5t470tvKMB92bLR17n3mx2A-EqC0fslB8hM5eYZrVcBNmB7otqf2oeghEq791b5WfBThD85Pl0Ywg_sDd_sHAa_Ykr-3zATfIdeHwBEX7diki6U5yBRioPT_XAv4xwwRiL9qTLTKzKNKj4rxoqvLxCR4txHCQA1DoBWgwCk54A350or414CB15dy95ZIs5qTnzJAuTnwk6FhGBtQAAcfkMaUB7AJgTBzBLBzB7AaK5QS0DszcrBvBfBrB--0KK8AAqu3lkMvuijgFIbfhTgFi5POp4vbFKE7FAE-CkP6sWG-A8uMiHJGCvuktFkzglmpGzqwjkAAD7mHM5mFDRTxTwQCfjc7d5CHsDnh6BHDIhHowBjAGScHRCGbgLtB2ADgwB_CDBz4L5GSYHfI5xapuH54NbFg4D6DuI4CzDzAYBqFaHKppE3ACBPi3rBTyharZE2q5FojRggC1rsplRGiGHNzGHipbIFL8CNpZCVHsAzxwBD6Tx-QzxlT8CdFLQ9FYB9HsD8DtrlIIrVZ7I4DUAFFTI7BFEayxDbCQF0po5dgOBGoaz0TCgSHlCbJxHuFpFzAwQFE7F-gzHEzlH5HtCFFLDtAlHXG1i3FPgCBFEubawvEWCeJRyVGQBNYgAGGzY0pEFNGmFZb47mDfT8BTKlpuILjUSMiDFXD8AADEYAWJ_AUxtY9BGxK8fUWxAkgQUAdgS-_m02WBxY8RGQpxGRj47QIapR-qbx_A6AiQtRq8Px7AbJIAWAtRBBYJGuNqph2Wlhs8UJVeX07AzqrqNcVwXxGQuJpSPJfJIaFo7gY0wogp9RhBIp-qYp0J7AEphWxpsJIAMEqJ4xbMIcIoOJDy002hIakYQpzOvczROy5B_s_qVcXO-JB-IhRU2ofUlg54MhVkWqohHeQ0xx2sOAx4HkMyWq6xgZVgmQ3KLwzcEQARg4NcQokRLIFJp-xYRxxY0ZWQ2h0QFRrRGZdaryupoJ7p6Whp1KNpbRfKgxM8JBQxAxIAQxwqvZ5uDpyqAZLhFZtABxSIeRQkx-HW2m0m_u3yUZYhtAihnsdS9xlx_4zxVZeR7xRRHmapi5AJ5CjZMWjRyqeSMukp2WFp8JhAiJUAyJ2q7AaJIAmJ2JIAKp3Oe5FR9xfQ3RHxjxQoaA2sb4SeDB4oBkhinh2AWZs4U2hxX-d-NJWAciSF_48F6uf5-RtZrKNRwJdRTZl5Nq15LRVRdZTaHRXRPRu2fZQx3RfQiIF8Q5kxjpapXQMFMyqZLhuo5g2FzS6AoQ-UlJhUhqxq8AS08BOZPkZZmA546F2MuuFxklLJ3ybxnQh5MAFocUvFxMqi_FKCE4XQwlolk-lA1ULwyQBmIal-rgpJq-1JClSl65DsT4zJx5_xT05CFollko1l2lul-ldujB_BfBl-aA2wRI3BLI4V8VAh5kaZE5J-3QP-Uh0Rey3-UVOuSablyhCQT4w2GBQK6lsxfCkYP-IJF5RBnp5g58XA_pIVFgqitJHhqAbY3hkVtyHWUwJigRwRXQYReQERWZ1AmVdCsSQKbVQ0QKyR7h4eemGQm5xVRR_AZuap1ZeFOgAOtRcJUVExuFT46ARRbppFZFOcI4LkakWAVwTF6E_4oxSwWUwxzF_44uy6V5dVRmd2i2lASwlAPJY5BlQZIZYZEZUwQKKVs1UVbVCZGQaQlVUVzVFMK8tErKY15gHgkouwOZ_VOOWY9sBMo1b0myUNq5S5rJW1x1p1epwprObZ82i2JKgCBNBAM0wNoV0FvwtIyQ2FBQ3V0VZNUVyRSl_0R1xstNJF4JX1l1Q0N1d1Ixz1itb1k8n1ZF31TNAaqh_1ewQNnF-kPNn-DB9kwoqVewE0JNRk5J-xtamNE1tY2BJWZWrpdNzZlKeywqEuwqP5JB3tk8uJnNLVaN3EWI3Q2WLIKxOwDtFgbpUd2w513yG61hqWBp3yZp0pZBlet0nOTR7OOd5gDWJ6UAP5WkC4dsLZ6d2dR0OWOAUpBdP5NW9dNdRdp6jpDy_e7RPcgd0aAGeSEY-RBpF6mai0t66qq0_AhumGdEL6yqWaOahaBa8eRaucAS5aMelana-yNadZ7KDaVF7RLaku7a1q-qc6Sas6v6eqS6IMQG0MvsMAcMJ6ZE2eTewOIkdEMGyg7MRCcOHEkGT64m9OgsuGIE-G4E99Fcj94GiWAax475YAAkXQAxhC0JVwPiq4HtFgcDLU_A7g8QiQMQZwKDMRaD7AGDyqWDeyOD75ri2sJDF1ZDFDGtFgVDNqNDNpfUmIUAkQSsMQQ89glS9DwJTRxMrA8QjIVwyYAAnMmNQaIwbCFCw5XWRRw5PZEEQC9NZfZOiFKNggw8o-I5rC1HI61N6l9aUkoyw2w_qmoyAAABKsY0Y2BxBQCCO2ICAGMsNGOSPxRpztQKNKAKM2PLlVzvn6gI0wDnjoBpBeMa0-MtRpxRTJiBNNERKOlWNDpNF2M8QzB4BxNZVMPBMKPYNhM2k3hjgjBBCoAuinL2D6CZBTIOQFM2oJNSNFzJhRSBOZNkUhPUNlP8B2JRXK6ohanao9PxMSMtRFxpzJitTdPFMWOO0DMgD6iuBYCpQ8MjD6hoD2DhAtP6ptPsBpzUFRRyVLNBNLN9PEx2PODDC5ioh9oHPfJHNFzSMBMXMTP6rXPLPwM2nOBhQ1MFBYbPN7JHOdOtRxSpNfXpOjlfOsPZMrOWUxBEBNTRBGSgupboOLPKOlN_P8Do7zBSiijouUA3juC_KeMiNLMWBHMZxJPQsa2ws2pTrMt4nrCwvyCsw_2K5cyPoISRwrSyanJCxgNgQgAaGFTKK9ACBAVXCgXuGcISW7EtmAlQB3W0BInGPlKohCC_JXDomZy2631mA4BAqJZqtXA_AuicK6uUD6vsDonkDOu2toj2s6WFpXCtSBTQKszVTbAvbiTUCit6DivKL8A4P8C0PoogjeAZAWi_jkjjPrD8AbYaYBhIA2k-Q4DZtyXUsWDsmv79Ck4YuZsEvSV_goI-hJvHBoE8OJB5h5AC2kaWhAjEhVBxtUtWP8BRBoBRs2n8waCr75s2kk7xoWSKzDtXAe38Atv9v8AAB6kLOA1BOAKTI7BbIAzG1Gls87IAS7OArUK7Xj7J7sShpNZb-7R7UUObJ7ggWoVokQe7S7cUK7a79ysav23LsbuAugkA6hmgwboDobosIAfcVR-k5IlZSA_A5AbWOlLbmpcw_AXL8gaHQAA",__position:1,__code:"<Dendrogram />",__scope:{props:this?this.props:n,Dendrogram:x,CollapsibleTree:R}},o.a.createElement(x,null)),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"collapsibletree-usage"}},"CollapsibleTree Usage"),o.a.createElement(c.e,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZtTodAhBSTI5WNOV2k9OABHIQEnWofQ4EkaCMDghD_QFe0pkcBJZnyDxYEsLpuiQj1JDQjDPg3GhcPw2DKHgn1JHIqBKIgaiYFooIALgYjIPYIMpTdE0FXNdo7Q1dhgHYTQfHkOTkIAARgIgRAGVBMK6JSA1QXRUWOU4AC9nAIRJsXYbhVPWKIBGeVArnaAAGdhkxmLB2n3GsZk7FhZ28gAWQL2AANkC4L1jAECADEfWgRJvP4ZxDkRR1MHYAAFIR-CWAyfjgMLESSmsUpoZwIBsy52AARiikL5HBCzqCsgBBOZnPYSM1PIGwoFg4J5E5ZyxGGmMZHYVFHJgbhgEPOyHOxeRt1rYAxugSbzAAMmO8ZEnmShmgOibw2c7gXPaMBQgsntUHadgAH4NkO8NIxmq4bqOrqaykGRq3fMxYRUzAwDCKApn-2b5tBgaVxrRMZIIHBUsyFJrwIXbazXSgKLuISaLo9gt1XKQsZxvGCd2qQ0YhsxvxAZjMIzHC8JgwjeNUbBxKA3RQIMcCSJUrHtNNLVJNI1TfAgDJXHQvBEiWcgoDyWgBCWNEgnYLSGPadBkwtGxVfVxIFZUtS4AXLYCD6hJjdls2Lcd2ApSMu2HXQaJ_A9z1A4Ifx_amFCmK2_84DOCTVXMyyplxdBCxcgB2HyfKTlPfBgCAUkIIaAFYc7z3qphYH0xwyIbM6TsxnteoyjWFKICCK6I8EjdAZuAdZ89cVhVbSABNIa-5wZIAGpjhwMLw2xxIZskdgACYk4sLoCD6cxikNAASdaZ6UdgT_QHAsBB4n7Av4AR7HmBx_Py_r60k-n7xl-39PpeTw3wflfABNAz5LHfqA7GN9ihJxBmYbW_g7CcQFnKbAoF0B2HpkVPoMB1zYSzIPGsrECEEAAOrQCgPqNoNAkZEOJvnIQIghoTFsDgNALx_rb1rKwuAOAw7Bxckw7G5REQYHcAQOAXD1i304KgCcLkkbcDmvQ2sjw2o504HYCY3R3KeXzJQ6Yo89jmB0ZOIuJd8iYFXPnbWusMgABlXCtHCENOxqIoychwPkZqkYADamwLEECWGnQsFo2obx8gAXU_DYquk4XxDStpkG2fcg5wCWC3X2LI-4D1XDvMc-8F5A3DNwiw00yk9B1h4gQTiXEEEjMI2JGNJyFIEOYYR3DZFTgyN3CYdhFEzWUa5Fpu8im8P4ek7xUBYgwEjK1LxUQZiRj7ksLgWAhkqPya0ve7SUbE2JvWHu2yGECTgHAAAcrXPgIAZmoG2PwE5tYeDABSgITufTe791kQc2s2wYCJDWsUO52wAD6J91nyGKD8g5NMWkWHfMTCpMj1g9IEBc4sAzhqbJGcTMZeyJkCL4UslZixODoA2cjVReK2nmGjPC2sjBCgMuJmidwcA3lECBWy1AcABK0EjO_RIf8r4305NCp5Fh_mAuAMUH4mBwXAEhRKlltZEHnKuceG58qmQgCeUTX5dZyAQHQrASca0a7Hj1lpOFhrGW0CwNXLAa0rQQFrta44gL-AWg3uIU-AicCoFrvIKQDrCZPKkCkA1CLVzIprN0mCGRnCsDnIMqlq58V0u2YwOAKaDHpzwGtUJeAtKBOLgQNaZbCA7QjXOHlHKO43PrfyuZ5clg-W5CAaNBzgATLRZ8qRnIYW_N7YSMMib0WYv-sOxlTxu1SFzVG1ciLjaoonXQ1cEBmiRgAISEvSXkhlmb2CoFCAkSpMLj30t-bGDg6rLnXP4Cg7iCFxBPNHWwtFyaUjTuzbuWQy6UWoHgS6LAitYbwygvzF9PovxKE5uhbmbFJF8wIjBr4_FBLCVEv-QC2gxb6AYFLB0MtTZmiVEnYjUw1LJLVmNTW4wqYm3dJ7S2KsUn0cjkrb2zt3am3NhaHj2T3qUakkSkO0h0lcejstWA3iE5mTMOo5wY4CTdBYNefIvUQgYHYHotAdgrpqeOG6niRAEHxOLQ3CuFneVTCrVMFy5dc62aspauuRwXKtRc-ZdRmG7jdDMTqnTOR4hQE4K-OwJS6DNxesJosZNHa5NxZwbdV9osfhSxYK-oKMtDXS-NI6q4csZZwG888kpe5UESzAFd2WPiFbui5U9CQgMgb82aWgdhXA9D6KPHIfdTO9igDNMKhYGJQOHMZoGJ7MWxdbiyGuKRhuRgyccQ9Fhh6jx_pPRRfC54L1XtTTe3Dj2Hwfvtv-fCb6rnvl_bbrgJ5XY_g_b-j3f4QNPkAoVIqP6wLMCBhBZy7D-aopTI26CYJYK1DgHBXR8GZmo-sM8CSRAbpaeovq5yi68v7GrfQWtGt0CWA5pYmAZgTDiXZ1HjnlbW3o2k8Oa2slvWGv3JWx6Cu_ToMqY2zS8Uvmvn5FyDnjtbwzYLxIwv2A-ZpbsjpL4ulDywoj7UXBqEvQaRttV8TF1DSEw0_gOBQcUxElTPXhQQD89rLAccQ1ZdqPXpgRBXRuuMaNgJepIWQjY5SLjsxPimQtPzobfSswWF0X-t4pqcyAmF3LSErgEwYlN2D_E4RLCx2dNXH50mAkAshDAHrYzjtdA5FgKPKAEuRANe56gMrwoKtjUjNV_PjtrcWFCDMMOcymmp-JiztuXee-rbyrVkZ2zMe-_95sdgPhKgtH7JQfIrO3nGZ1XAbZIe6LaiDhHoIJK-_dV-bnwU4RAuz5dGMUP7BPf7BwFv-JG_98wF3-Hfh8AxGB3YtIhl-cQVYqh5v6uAf7xwwQSKDrTKzLzLNKT7rwYrvLxAx7txHCQA1DoBWgwAU54AP4Mob4N4CBN69yD45Ls5qRXzJAuRXzk6FhGBtQAAcfkcacB7AJgbB7BHB7B7AGK5QS0zsbcnBghQhnBx-sK68AAqt3lkOvpijgHIY_tTsFi5Iut4k7FKK7FAE-CkIGsWG-E8pMuHJGBvpknFqzslmpJzuwjkAAD7WFs5WFDSzyzwQCfh8795iHsDnh6BHDIgnowBjAGS8HRDGZQLtB2ADgwB_CDBL4r5GS4G_L5w6peHF7NbFg4D6CeI4CzDzAYBaF6GqpZE3ACBPj3rBTyg6r5F2qFFojRggD1qcplRGimFtzmGSo7JFL8DNpZC1HsDzxwBj4zx-TzxlT8C9FLQDFYBDHsD8CdqVJIp1YHI4DUAlEzI7BlHayxDbCwEMqY5dgOAmraz0TCgyHlDbJJHeFZFzAwQlEHF-gLHEzVHFHtClFLDtAVH3G1iPFPgCBlHuZ6wfEWDeKxy1GQCtYgAmELZ0pkFtGWG5ZE7mDfT8AzLloeILjUSMijFXD8AADEYAeJ_AcxtYzBOx68fUexAkgQUAdga-QWc2eBxYyRGQlxORj47QYalRhqXx_A6AiQjRG8AJ7AXJIAWAjRJBUJ2udqlheWthC8cJdeX07Arq7q9cVwfxGQhJ5SApQpYaFo7gY0woopzRpBEphqUp8J7AMpJW5piJIAMEmJ0xnM4cIoBJTy00-hYakYYpbOA87Rey1BQcgatcvOxJJ-EhRU2ofUlg54ChVkOqkhPeQ05xesOAx4HkcyOq2xoZVgmQvKLwbcEQIRg49cQosRLINJl-xYZxxY8ZWQ-h0QNRnROZDa7yhpkJ3pWWpptKDpXRAqox88FBYxIxIAYxoqg5VuLpqqIZHhNZtAJxSIRRQk5-3WumsmQevycZUhtAqhPsDSzxtx_47xdZRR3xZR3mWpq5IJlCrZ8WrRqqBS8uspeWNpyJhAqJUA6Juq7AWJIAuJ-JIAGpfOR5NRzxfQ_RPxrxQoaAesb4qeLB4oBkxivh2AeZs4s2pxf-T-DJWACiaF_4yFWuQFxRjZ7KDR4JTRbZt5dq95HRdRTZLaPRfRAxB2Q5Yx_RfQiI18Y5sxrpWpXQCFcymZHhuo5g-FrS6AoQ-UtJhUxqpq8AS0yBBZPkVZmA542F2MBuNxslHJvyXxnQp5MAFocUglxM6iwlMIalYlElF-3QlA1ULwyQRmYat-rglJm-9JKlal25zsT47J55wJT0lCFotlko9l-lhlxljurBwhQht-aA2wRI_BLI0VyVIh5kWZM51lsV9yfC8hGF1OIK-uKaXl6hCQT4Y2OBIK2lixAikYABEJN5ZBvp5gV8XAwZEVFg6ijJPhqAbY_hWV8VIQUwZioR4RXQUReQMReZ1A8RBy_-cVXVQ0IK6R3hUeBmGQu55VZR_AluWp9ZRFOgwOjRSJcVMxhFT46AZRXplFVF-cI4LkakWAVwbF6E_4kxSwWU4x7F_4Uuq6d5TVJmj2K2lASwlAApU5JlYZEZUZMZUwIKGVi181FxqZaQtVcV7V1M68tE7KU15gHgkouwBZw1-OWYTsBMk1b02ycNm5a5nJe151l1Rp4pHOXZS2K2ZKICxNBAM04NkV8FvwtIyQ-FBQ_VblvyS1-F_0Z1ZsDNFF0Jf1t1Q0D1T1Ex71ytX1M8v1VF_1rNQamhwNewYNvF-k_Nv-LB9kwomVpMOQJZON1Jxx9aONM1xM-B5WlWnpjN7Z1KByoq0uoqAFFBvtM8hJPNHVmN3EWI3QeWLIGxOwTttYXpMd2w11vyW69hGWJpvyVp8pVBtet0PObRXOed5gzWZ6UAAFWkC4jsHZmdudR0-WOAcpRdAF9WjdddJd56rpTyw-3R_cwdsaQGBSEYxRJpV62ai096mqq0_AJu2GdEb6qqOaeaxaRaSeJaBcQSla8e1a3ahydaTZnKTadF3RbaMunatqhqC6Ka86_6BqK6IMIG0MAcMAcMZ6ZEeeWG4OMAcGygXMJCiOHE0GZmkmTOIs-GIEhG4Ej91cz9kGKWQax435YAAkXQIxxC8JVwfiq4XtFg8DLU_A7g8QiQMQZwqDCR6D7AmDqq2DByuD357iespDN15DlDWtFg1DdqtDDpfUmIUAkQqsMQo89g1SDD4JbRxMrA8QjIVwyYAAnMmPQWI8bCFKw9XVRZw9PZEEQC9PZfZOiFKLgowyoxIzrC1PI61L6n9eUso6w-w4auoyAAABLsZ0Y2BxBQBCP2ICCGOsPGNSPxSZztSKNKCKO2Prm1zfn6gZBpDnjoBpDeNa2-MtSZxRTJhBNtFRKunWMjptH2M8QzB4DxOzXMMhOKM4PhMOk3hjgjBBCoAujnL2D6CZAzIOSFN2qJPSOlzJhRRBNZNUWhM0PlP8AOJxVq6oh6m6q9MJOSMtSlyZzJitQ9MlOWO1j2P6iuBYCpS8MjD6hoD2DhCtOGrtPsCZz0FRRKXLPBPLP9PO2DMgDODDC5iogDoHO_JHOlwyOBMXOTOGrXMrO3POBhS1MFA4YvMHJHNdOtRxRpN_UZOTnfNsM5O3O2UxBEBNTRBGSgsZYYNLMqNlMINcNVTOyijouUA3juD_JeOiPLMWBHPZzJPQta2wt2ozpMtEnrCwvyAcy_0q68zPpAOrnybnKizgNgQgA6GFSqK9ACBgVXCQXeHcIyWHEdmglQBPW0BokmOVKohCD_JXDYk5wO731mA4AFWqIqtXA_AujcLauUC6vsDYnkCOvWtoi2sGXFpXCtSBRwIczVTbDvbiTUDCt6CiuqL8C4P8B0OYogjeAZAWi_jkgTPrD8DbZaYBhIAOk-Q4CZtKVUsWDcmf79AU4Yvpv8B9TyV_jmU-gJvHBYG8OJB5h5DC3kaWhAjEhVAxuUvWP8BRBoARsOlCwaCb65sOnk6JoWQqxDtXBe38DNt9v8AAB6kLOA9BOAqTw7ebIAAmtGNsc7IAi7OArUy73j3JXsahFNJbe7h7UUWbx7ggWoVokQu7i7cUy7q7jy8aAOXL0buAugkA2hmggbYDwbEsIAg8dR-k5ItZSA_A5AnWBlzbupcw_AnL8gqHQAA",__position:2,__code:"<CollapsibleTree />",__scope:{props:this?this.props:n,Dendrogram:x,CollapsibleTree:R}},o.a.createElement(R,null)))}}])&&k(n.prototype,r),A&&k(n,A),t}();S.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/components/Dendrogram/style.scss":function(e,t,n){}}]);
//# sourceMappingURL=src-components-dendrogram-index.4a2956d78925442cfc4e.js.map