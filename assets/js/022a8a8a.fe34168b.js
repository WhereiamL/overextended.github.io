"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8729],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5249:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),l=["components"],c={},s=void 0,i={unversionedId:"ox_lib/Locale/Shared",id:"ox_lib/Locale/Shared",title:"Shared",description:"Allows players to set a preferred language and attempt to load locale files in any resources using the module.",source:"@site/docs/ox_lib/Locale/Shared.md",sourceDirName:"ox_lib/Locale",slug:"/ox_lib/Locale/Shared",permalink:"/docs/ox_lib/Locale/Shared",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Locale/Shared.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"TextUI",permalink:"/docs/ox_lib/Interface/Client/textui"},next:{title:"Server",permalink:"/docs/ox_lib/Logger/Server"}},u={},p=[],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Allows players to set a preferred language and attempt to load locale files in any resources using the module.",(0,o.kt)("br",{parentName:"p"}),"\n","Locale files should use the ",(0,o.kt)("a",{parentName:"p",href:"http://www.lingoes.net/en/translator/langcode.htm"},"ISO Language Code")," and be saved as ",(0,o.kt)("inlineCode",{parentName:"p"},"./locales/langcode.json")),(0,o.kt)("p",null,"Players can use ",(0,o.kt)("inlineCode",{parentName:"p"},"setlocale [langcode]"),", and admins can use ",(0,o.kt)("inlineCode",{parentName:"p"},"serverlocale [langcode]")," to change the loaded file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"-- str: string\n-- ...: string | number\nlocale(str, ...)\n")),(0,o.kt)("p",null,"Additional arguments can be sent to format the locale output."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"-- Load the locale module\nlib.locale()\n\nSetInterval(function()\n    print(locale('grand_theft_auto'))\n    print(locale('suspect_sex', locale('male')))\nend, 5000)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="locales/en-US.json"',title:'"locales/en-US.json"'},'{\n  "grand_theft_auto": "grand theft auto",\n  "male": "male",\n  "female": "female",\n  "suspect_sex": "suspect is %s",\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="locales/fr-FR.json"',title:'"locales/fr-FR.json"'},'{\n  "grand_theft_auto": "vol de voiture",\n  "male": "homme",\n  "female": "femme",\n  "suspect_sex": "le suspect est %s",\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="fxmanifest.lua"',title:'"fxmanifest.lua"'},"files {\n    'locales/*.json'\n}\n")))}f.isMDXComponent=!0}}]);