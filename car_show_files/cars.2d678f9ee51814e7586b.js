webpackJsonp([2],{1:function(e,t,n){"use strict";function s(e,t){for(var n in t)e[n]=t[n];return e}function r(e){var t=e.parentNode;t&&t.removeChild(e)}function a(e,t,n){var s,r=arguments,a={};for(s in t)"key"!==s&&"ref"!==s&&(a[s]=t[s]);if(arguments.length>3)for(n=[n],s=3;s<arguments.length;s++)n.push(r[s]);if(null!=n&&(a.children=n),"function"==typeof e&&null!=e.defaultProps)for(s in e.defaultProps)void 0===a[s]&&(a[s]=e.defaultProps[s]);return o(e,a,t&&t.key,t&&t.ref)}function o(e,t,n,s){var r={type:e,props:t,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:null,__c:null,constructor:void 0};return P.vnode&&P.vnode(r),r}function i(e){return e.children}function l(e,t){this.props=e,this.context=t}function c(e,t){if(null==t)return e.__?c(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?c(e):null}function u(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return u(e)}}function p(e){(!e.__d&&(e.__d=!0)&&1===N.push(e)||x!==P.debounceRendering)&&((x=P.debounceRendering)||L)(f)}function f(){var e,t,n,r,a,o,i;for(N.sort(function(e,t){return t.__v.__b-e.__v.__b});e=N.pop();)e.__d&&(n=void 0,r=void 0,o=(a=(t=e).__v).__e,(i=t.__P)&&(n=[],r=b(i,a,s({},a),t.__n,void 0!==i.ownerSVGElement,null,n,null==o?c(a):o),y(n,a),r!=o&&u(a)))}function d(e,t,n,s,a,o,i,l,u){var p,f,d,h,g,m,v,y=n&&n.__k||C,j=y.length;if(l==F&&(l=null!=o?o[0]:j?c(n,0):null),p=0,t.__k=_(t.__k,function(n){if(null!=n){if(n.__=t,n.__b=t.__b+1,null===(d=y[p])||d&&n.key==d.key&&n.type===d.type)y[p]=void 0;else for(f=0;f<j;f++){if((d=y[f])&&n.key==d.key&&n.type===d.type){y[f]=void 0;break}d=null}if(h=b(e,n,d=d||F,s,a,o,i,l,u),(f=n.ref)&&d.ref!=f&&(v||(v=[]),d.ref&&v.push(d.ref,null,n),v.push(f,n.__c||h,n)),null!=h){if(null==m&&(m=h),null!=n.__d)h=n.__d,n.__d=null;else if(o==d||h!=l||null==h.parentNode){e:if(null==l||l.parentNode!==e)e.appendChild(h);else{for(g=l,f=0;(g=g.nextSibling)&&f<j;f+=2)if(g==h)break e;e.insertBefore(h,l)}"option"==t.type&&(e.value="")}l=h.nextSibling,"function"==typeof t.type&&(t.__d=h)}}return p++,n}),t.__e=m,null!=o&&"function"!=typeof t.type)for(p=o.length;p--;)null!=o[p]&&r(o[p]);for(p=j;p--;)null!=y[p]&&k(y[p],y[p]);if(v)for(p=0;p<v.length;p++)O(v[p],v[++p],v[++p])}function _(e,t,n){if(null==n&&(n=[]),null==e||"boolean"==typeof e)t&&n.push(t(null));else if(Array.isArray(e))for(var s=0;s<e.length;s++)_(e[s],t,n);else n.push(t?t("string"==typeof e||"number"==typeof e?o(null,e,null,null):null!=e.__e||null!=e.__c?o(e.type,e.props,e.key,null):e):e);return n}function h(e,t,n,s,r){var a;for(a in n)a in t||m(e,a,null,n[a],s);for(a in t)r&&"function"!=typeof t[a]||"value"===a||"checked"===a||n[a]===t[a]||m(e,a,t[a],n[a],s)}function g(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===E.test(t)?n+"px":null==n?"":n}function m(e,t,n,s,r){var a,o,i,l,c;if(r?"className"===t&&(t="class"):"class"===t&&(t="className"),"key"===t||"children"===t);else if("style"===t)if(a=e.style,"string"==typeof n)a.cssText=n;else{if("string"==typeof s&&(a.cssText="",s=null),s)for(o in s)n&&o in n||g(a,o,"");if(n)for(i in n)s&&n[i]===s[i]||g(a,i,n[i])}else"o"===t[0]&&"n"===t[1]?(l=t!==(t=t.replace(/Capture$/,"")),c=t.toLowerCase(),t=(c in e?c:t).slice(2),n?(s||e.addEventListener(t,v,l),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,v,l)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&!r&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n?e.removeAttribute(t):e.setAttribute(t,n))}function v(e){this.l[e.type](P.event?P.event(e):e)}function b(e,t,n,r,a,o,c,u,p){var f,h,g,m,v,b,y,O,k,S,N=t.type;if(void 0!==t.constructor)return null;(f=P.__b)&&f(t);try{e:if("function"==typeof N){if(O=t.props,k=(f=N.contextType)&&r[f.__c],S=f?k?k.props.value:f.__:r,n.__c?y=(h=t.__c=n.__c).__=h.__E:("prototype"in N&&N.prototype.render?t.__c=h=new N(O,S):(t.__c=h=new l(O,S),h.constructor=N,h.render=w),k&&k.sub(h),h.props=O,h.state||(h.state={}),h.context=S,h.__n=r,g=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=N.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=s({},h.__s)),s(h.__s,N.getDerivedStateFromProps(O,h.__s))),m=h.props,v=h.state,g)null==N.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==N.getDerivedStateFromProps&&O!==m&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(O,S),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(O,h.__s,S)){for(h.props=O,h.state=h.__s,h.__d=!1,h.__v=t,t.__e=n.__e,t.__k=n.__k,h.__h.length&&c.push(h),f=0;f<t.__k.length;f++)t.__k[f]&&(t.__k[f].__=t);break e}null!=h.componentWillUpdate&&h.componentWillUpdate(O,h.__s,S),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(m,v,b)})}h.context=S,h.props=O,h.state=h.__s,(f=P.__r)&&f(t),h.__d=!1,h.__v=t,h.__P=e,f=h.render(h.props,h.state,h.context),t.__k=_(null!=f&&f.type==i&&null==f.key?f.props.children:f),null!=h.getChildContext&&(r=s(s({},r),h.getChildContext())),g||null==h.getSnapshotBeforeUpdate||(b=h.getSnapshotBeforeUpdate(m,v)),d(e,t,n,r,a,o,c,u,p),h.base=t.__e,h.__h.length&&c.push(h),y&&(h.__E=h.__=null),h.__e=null}else t.__e=j(n.__e,t,n,r,a,o,c,p);(f=P.diffed)&&f(t)}catch(e){P.__e(e,t,n)}return t.__e}function y(e,t){P.__c&&P.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){P.__e(e,t.__v)}})}function j(e,t,n,s,r,a,o,i){var l,c,u,p,f,_=n.props,g=t.props;if(r="svg"===t.type||r,null==e&&null!=a)for(l=0;l<a.length;l++)if(null!=(c=a[l])&&(null===t.type?3===c.nodeType:c.localName===t.type)){e=c,a[l]=null;break}if(null==e){if(null===t.type)return document.createTextNode(g);e=r?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type),a=null}if(null===t.type)null!=a&&(a[a.indexOf(e)]=null),_!==g&&(e.data=g);else if(t!==n){if(null!=a&&(a=C.slice.call(e.childNodes)),u=(_=n.props||F).dangerouslySetInnerHTML,p=g.dangerouslySetInnerHTML,!i){if(_===F)for(_={},f=0;f<e.attributes.length;f++)_[e.attributes[f].name]=e.attributes[f].value;(p||u)&&(p&&u&&p.__html==u.__html||(e.innerHTML=p&&p.__html||""))}h(e,g,_,r,i),t.__k=t.props.children,p||d(e,t,n,s,"foreignObject"!==t.type&&r,a,o,F,i),i||("value"in g&&void 0!==g.value&&g.value!==e.value&&(e.value=null==g.value?"":g.value),"checked"in g&&void 0!==g.checked&&g.checked!==e.checked&&(e.checked=g.checked))}return e}function O(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){P.__e(e,n)}}function k(e,t,n){var s,a,o;if(P.unmount&&P.unmount(e),(s=e.ref)&&O(s,null,t),n||"function"==typeof e.type||(n=null!=(a=e.__e)),e.__e=e.__d=null,null!=(s=e.__c)){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(e){P.__e(e,t)}s.base=s.__P=null}if(s=e.__k)for(o=0;o<s.length;o++)s[o]&&k(s[o],t,n);null!=a&&r(a)}function w(e,t,n){return this.constructor(e,n)}function S(e,t,n){var s,r,o;P.__&&P.__(e,t),r=(s=n===A)?null:n&&n.__k||t.__k,e=a(i,null,[e]),o=[],b(t,(s?t:n||t).__k=e,r||F,F,void 0!==t.ownerSVGElement,n&&!s?[n]:r?null:C.slice.call(t.childNodes),o,n||F,s),y(o,e)}n.d(t,"d",function(){return S}),n.d(t,"c",function(){return a}),n.d(t,"b",function(){return i}),n.d(t,"a",function(){return l});var P,N,L,x,A,F={},C=[],E=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;P={__e:function(e,t){for(var n;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError)n.setState(n.constructor.getDerivedStateFromError(e));else{if(null==n.componentDidCatch)continue;n.componentDidCatch(e)}return p(n.__E=n)}catch(t){e=t}throw e}},function(e){return null!=e&&void 0===e.constructor},l.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&s(n,e),null!=e&&this.__v&&(this.__e=!1,t&&this.__h.push(t),p(this))},l.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),p(this))},l.prototype.render=i,N=[],L="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,A=F},174:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),r=n(175),a=document.getElementById("js-car-overview");if(a){var o=a.dataset,i=o.favorites,l=o.url,c=o.loggedin,u=o.cta,p=o.status,f=o.world,d=o.language;Object(s.d)(Object(s.c)(r.a,{favorites:i,url:l,loggedin:c,ctas:u,status:p,world:f,language:d}),a)}},175:function(e,t,n){"use strict";function s(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(1),l=n(176),c=n(177),u=n(182),p=n(183),f=n(184),d=n(185),_=n(186),h=n(6),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),m=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={posts:[],allPosts:[],unfilteredPosts:[],count:12,offset:0,prices:[],world:"",status:"",currentFilters:{merk:"",model:"",type:"",brandstof:"",transmissie:"",basiskleur:"",bouwjaar:"",prijs_vanaf:"",prijs_tot:""},searchText:"",order:"date_desc",totalAmountPosts:null,loadedAllPosts:!1,isLoading:!0,firstLoaded:!0,error:!1,closed:!0},n.handleLoadMore=n.handleLoadMore.bind(n),n.handleSelect=n.handleSelect.bind(n),n.handleOrderChoice=n.handleOrderChoice.bind(n),n.handleClear=n.handleClear.bind(n),n.handleSubmit=n.handleSubmit.bind(n),n.handleToggleFilters=n.handleToggleFilters.bind(n),n}return o(t,e),g(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({world:this.props.world,status:this.props.status},function(){e.fetchPosts()})}},{key:"fetchPosts",value:function(){var e=this;this.setState({isLoading:!0}),l.a.all(this.state).then(function(t){return e.setState({totalAmountPosts:t.headers.get("x-wp-total")}),t.json()}).then(function(t){var n=JSON.parse(e.props.ctas);n.length&&n.forEach(function(e){t.splice(e.cta_position-1,0,e)}),e.setState({posts:[].concat(s(e.state.posts),s(t)),loadedAllPosts:!1}),l.a.all({count:999,offset:0,order:"date_desc",currentFilters:e.state.currentFilters,world:e.state.world,status:e.state.status}).then(function(e){return e.json()}).then(function(t){if(e.state.firstLoaded){var n=t.map(function(e){return e.price.verkoopprijs_particulier});e.setState({unfilteredPosts:t,prices:n.filter(function(e){return 0!==e&&""!==e})})}e.setState({allPosts:t,isLoading:!1,firstLoaded:!1})}),e.verifyLoadedAllPosts()}).catch(function(t){console.log(t),e.setState({error:!0,isLoading:!1})})}},{key:"verifyLoadedAllPosts",value:function(){var e=JSON.parse(this.props.ctas);return this.state.totalAmountPosts===this.state.posts.length+e.length&&this.setState({loadedAllPosts:!0})}},{key:"handleLoadMore",value:function(){var e=this;this.setState(function(t){return{offset:t.offset+e.state.count}},this.fetchPosts)}},{key:"handleSelect",value:function(e,t){var n=this.state.currentFilters;n[t]=e,this.setState({currentFilters:n,posts:[],offset:0},this.fetchPosts)}},{key:"handleOrderChoice",value:function(e){this.setState({order:e,posts:[],offset:0},this.fetchPosts)}},{key:"handleSearch",value:function(e){this.setState({searchText:e})}},{key:"handleClear",value:function(){this.setState({currentFilters:{merk:"",model:"",type:"",brandstof:"",transmissie:"",basiskleur:"",bouwjaar:"",prijs_vanaf:"",prijs_tot:""},posts:[],offset:0,searchText:"",order:"date_desc"},this.fetchPosts)}},{key:"handleSubmit",value:function(){this.setState(function(){return{posts:[],offset:0,closed:!0}},this.fetchPosts)}},{key:"handleToggleFilters",value:function(){this.setState({closed:!this.state.closed})}},{key:"render",value:function(){var e=JSON.parse(this.props.ctas);return Object(i.c)("div",{className:"c-cars-app"},Object(i.c)(_.a,{number:this.state.totalAmountPosts,onClick:this.handleToggleFilters,closed:this.state.closed,postsLoading:this.state.isLoading,language:this.props.language}),Object(i.c)("div",{className:"c-cars-filters","data-closed":this.state.closed},this.state.isLoading&&this.state.firstLoaded?Object(i.c)(h.a,null):Object(i.c)(i.b,null,Object(i.c)(f.a,{order:this.state.order,onSelectOrder:this.handleOrderChoice,postsLoading:this.state.isLoading,language:this.props.language}),Object(i.c)(p.a,{name:"merk",posts:this.state.allPosts,unfilteredPosts:this.state.unfilteredPosts,currentFilter:this.state.currentFilters.merk,handleSelect:this.handleSelect,postsLoading:this.state.isLoading,defaultOption:"en"===this.props.language?"All brands":"Alle merken",language:this.props.language}),Object(i.c)(p.a,{name:"model",posts:this.state.allPosts,unfilteredPosts:this.state.unfilteredPosts,currentBrand:this.state.currentFilters.merk,currentFilter:this.state.currentFilters.model,handleSelect:this.handleSelect,postsLoading:this.state.isLoading,defaultOption:"en"===this.props.language?"All models":"Alle modellen",language:this.props.language}),Object(i.c)(p.a,{name:"type",posts:this.state.allPosts,unfilteredPosts:this.state.unfilteredPosts,currentBrand:this.state.currentFilters.merk,currentModel:this.state.currentFilters.model,currentFilter:this.state.currentFilters.type,handleSelect:this.handleSelect,postsLoading:this.state.isLoading,defaultOption:"en"===this.props.language?"All types":"Alle types"}),Object(i.c)(p.a,{name:"bouwjaar",posts:this.state.allPosts,unfilteredPosts:this.state.unfilteredPosts,currentFilter:this.state.currentFilters.bouwjaar,handleSelect:this.handleSelect,postsLoading:this.state.isLoading,defaultOption:"en"===this.props.language?"All construction years":"Alle bouwjaren",language:this.props.language}),Object(i.c)(p.a,{name:"brandstof",posts:this.state.allPosts,unfilteredPosts:this.state.unfilteredPosts,currentFilter:this.state.currentFilters.brandstof,handleSelect:this.handleSelect,postsLoading:this.state.isLoading,defaultOption:"en"===this.props.language?"All fuel types":"Alle brandstoffen",language:this.props.language}),Object(i.c)(p.a,{name:"transmissie",posts:this.state.allPosts,unfilteredPosts:this.state.unfilteredPosts,currentFilter:this.state.currentFilters.transmissie,handleSelect:this.handleSelect,postsLoading:this.state.isLoading,defaultOption:"en"===this.props.language?"All transmissions":"Alle transmissies",language:this.props.language}),Object(i.c)(p.a,{name:"basiskleur",posts:this.state.allPosts,unfilteredPosts:this.state.unfilteredPosts,currentFilter:this.state.currentFilters.basiskleur,handleSelect:this.handleSelect,postsLoading:this.state.isLoading,defaultOption:"en"===this.props.language?"All colors":"Alle kleuren",language:this.props.language}),Object(i.c)(p.a,{name:"prijs_vanaf",posts:this.state.allPosts,prices:this.state.prices,unfilteredPosts:this.state.unfilteredPosts,currentFilter:this.state.currentFilters.prijs_vanaf,handleSelect:this.handleSelect,postsLoading:this.state.isLoading,defaultOption:"en"===this.props.language?"Starting price":"Prijs vanaf",language:this.props.language}),Object(i.c)(p.a,{name:"prijs_tot",posts:this.state.allPosts,prices:this.state.prices,unfilteredPosts:this.state.unfilteredPosts,currentFilter:this.state.currentFilters.prijs_tot,handleSelect:this.handleSelect,postsLoading:this.state.isLoading,defaultOption:"en"===this.props.language?"Max price":"Prijs tot",language:this.props.language})),Object(i.c)("div",{class:"c-cars-handler-buttons"},Object(i.c)(d.a,{onClear:this.handleClear}))),Object(i.c)(c.a,{posts:this.state.posts,loading:this.state.isLoading,error:this.state.error,favorites:this.props.favorites,url:this.props.url,loggedin:this.props.loggedin,language:this.props.language}),Object(i.c)(u.a,{onLoadMore:this.handleLoadMore,nrShowing:this.state.posts.length,nrAll:Number(this.state.totalAmountPosts)+e.length,loading:this.state.isLoading,title:"en"===this.props.language?"Show more cars":"Toon meer auto's",language:this.props.language}))}}]),t}(i.a);t.a=m},176:function(e,t,n){"use strict";function s(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),o=function(){function e(){r(this,e)}return a(e,null,[{key:"all",value:function(e){var t=this.postsUrl(e);return fetch(t,{credentials:"same-origin"}).then(this.handleStatus)}},{key:"handleStatus",value:function(e){if(!e.ok)throw Error("Request rejected with status "+e.status);return e}},{key:"postsUrl",value:function(e){var t=e.count,n=e.offset,r=e.order,a=e.currentFilters,o=e.prices,i=this.orderQuery(r),l=a.merk?"&merk="+a.merk:"",c=a.model?"&model="+a.model:"",u=a.brandstof?"&brandstof="+a.brandstof:"",p=a.transmissie?"&transmissie="+a.transmissie:"",f=a.basiskleur?"&basiskleur="+a.basiskleur:"",d=a.bouwjaar?"&bouwjaar="+a.bouwjaar:"",_="";if((a.prijs_vanaf||a.prijs_tot)&&o){var h=a.prijs_vanaf?Number(a.prijs_vanaf):0,g=a.prijs_tot?Number(a.prijs_tot):Math.max.apply(Math,s(o));o=o.filter(function(e){return Number(e)>h&&Number(e)<g}),_="&prijs="+o.join()}return"/wp-json/wp/v2/car?"+i+"&custom_per_page="+t+"&offset="+n+(l+c)+(a.type?"&type="+a.type:"")+u+p+f+d+_+(e.world?"&car_cat="+e.world:"")+(e.status?"&car_status="+e.status:"&include_sold=true")}},{key:"orderQuery",value:function(e){return"title_asc"===e?"&orderby=title&order=asc":"date_asc"===e?"&orderby=formatted_date&order=asc":"orderby=formatted_date&order=desc"}}]),e}();t.a=o},177:function(e,t,n){"use strict";var s=n(1),r=n(178),a=n(6),o=n(179),i=n(181),l=function(e){return e.error?Object(s.c)(r.a,{type:"posts-error"}):e.loading||0!==e.posts.length?Object(s.c)("div",{className:"c-cars"},Object(s.c)("div",{className:"c-cars__row"},e.posts.map(function(t,n){return t.cta_position?Object(s.c)(i.a,{cta:t,key:n}):Object(s.c)(o.a,{post:t,key:t.id,favorites:e.favorites,loggedin:e.loggedin,url:e.url,language:e.language})})),e.loading?Object(s.c)(a.a,null):null):Object(s.c)(r.a,{type:"no-results"})};t.a=l},178:function(e,t,n){"use strict";var s=n(1),r=function(e){var t="Something went wrong.";return"no-results"===e.type?t="Geen resultaten gevonden.":"filter-error"===e.type?t="De filter kon niet geladen worden.":"posts-error"===e.type&&(t="Er is iets mis gegaan. Ververs de pagina."),Object(s.c)("div",{className:"c-cars__error"},Object(s.c)("p",null,t))};t.a=r},179:function(e,t,n){"use strict";var s=n(1),r=n(180),a=function(e){var t=e.post,n=t.title.rendered,a=t.link,o=t.feat_image;console.log(t);var i="en"===e.language&&t.price.exportprijs?t.price.exportprijs:t.price.verkoopprijs_particulier,l=i?"€ "+Number(i).toFixed(0).replace(".",",").replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1."):"",c=t.info.tellerstand?Number(t.info.tellerstand).toFixed(0).replace(".",",").replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1."):"",u=t.entry_date.split("-"),p=new Date(u[2]+"-"+u[1]+"-"+u[0]),f=new Date,d=Math.ceil(Math.abs(f-p)/864e5),_=t.price.actieprijs&&""!==t.price.actieprijs;return l=_&&t.price.verkoopprijs_particulier?'<span class="c-car__price-span">'+l+"</span><br/><strong>PAASDEAL!</strong>":l,l="en"===e.language&&t.price.exportprijs?"<span>"+l+"</span><br/><strong>Export price</strong>":l,Object(s.c)("div",{className:"c-car c-cars__col"},Object(s.c)("div",{className:"c-car__image u-image"},Object(s.c)("a",{className:"c-car__link",href:a,dangerouslySetInnerHTML:{__html:o}}),Object(s.c)(r.a,{favorites:e.favorites,post:t,url:e.url,loggedin:e.loggedin}),"sold"===t.car_status[0]?Object(s.c)("div",{className:"c-car__label"},"en"===e.language?"Sold":"Verkocht"):Object(s.c)(s.b,null,d<4?Object(s.c)("div",{className:"c-car__label"},"en"===e.language?"New":"Nieuw"):null)),Object(s.c)("div",{className:"c-car__body"},Object(s.c)("div",{className:"c-car__title"},Object(s.c)("a",{className:"c-car__link",href:a},Object(s.c)("h4",{className:"c-car__name"},n)),Object(s.c)("p",{className:"c-car__specs"},t.model.type)),"sold"!==t.car_status[0]?Object(s.c)("p",{className:"c-car__price c-car__price--react "+(_?"c-car__price--action":""),dangerouslySetInnerHTML:{__html:l}}):null),Object(s.c)("div",{className:"c-car__footer"},Object(s.c)("p",{class:"c-car__usage"},Object(s.c)("span",{class:"c-car__year"},t.info.bouwjaar),Object(s.c)("span",{class:"c-car__seperator"},"|"),Object(s.c)("span",{class:"c-car__mileage"},c," km")),Object(s.c)("a",{href:a,className:"c-button c-button--secondary c-car__button"},Object(s.c)("span",null,"en"===e.language?"View":"Bekijk"),Object(s.c)("svg",{className:"c-icon  c-button__icon c-button__icon--right c-button__icon--move-right"},Object(s.c)("use",{href:"#arrow-right",xlinkHref:"#arrow-right"})))))};t.a=a},180:function(e,t,n){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=n(1),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),l=function(e){function t(e){s(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={active:!1,loading:!1,success:!1},n.handleClick=n.handleClick.bind(n),n}return a(t,e),i(t,[{key:"componentDidMount",value:function(){""!==this.props.favorites&&-1!==this.props.favorites.split(",").indexOf(this.props.post.id.toString())&&this.setState({active:!0})}},{key:"handleClick",value:function(){var e=this;if(this.props.loggedin){this.setState({loading:!0});var t=this.state.active?"remove":"add";this.setState({active:!1}),window.fetch("/wordpress/wp-admin/admin-ajax.php?action="+t+"_favorites",{credentials:"same-origin",method:"post",body:JSON.stringify({id:this.props.post.id,type:"car"})}).then(function(e){return e.json()}).then(function(n){console.log(n),e.setState({loading:!1}),e.setState({success:!0}),window.setTimeout(function(){e.setState({success:!1}),"remove"===t?e.setState({active:!1}):e.setState({active:!0})},1e3)})}else window.location.href=this.props.url}},{key:"render",value:function(){var e="heart",t="c-wishlist__icon",n="c-wishlist";return this.state.active&&(e="heart-fill",t="c-wishlist__icon c-wishlist__icon--active",n="c-wishlist active"),this.state.loading&&(e="spinner",t="c-wishlist__icon c-wishlist__icon--spinner c-icon--spinner",n="c-wishlist loading"),this.state.success&&(e="check",t="c-wishlist__icon c-wishlist__icon--success",n="c-wishlist success"),Object(o.c)("div",{className:n,onClick:this.handleClick},Object(o.c)("svg",{className:"c-icon c-wishlist__icon c-wishlist__icon--close"},Object(o.c)("use",{href:"#close",xlinkHref:"#close"})),Object(o.c)("svg",{className:"c-icon "+t},Object(o.c)("use",{href:"#"+e,xlinkHref:"#"+e})))}}]),t}(o.a);t.a=l},181:function(e,t,n){"use strict";var s=n(1),r=function(e){var t=e.cta,n=t.title,r=t.image,a=t.label,o=t.icon,i=t.button_url,l=t.button_text;return Object(s.c)("div",{className:"c-small-cta c-stories__cta"},Object(s.c)("div",{className:"c-small-cta__wrapper u-flex u-flex-sb"},Object(s.c)("div",{className:"c-small-cta__image-container"},Object(s.c)("div",{className:"c-small-cta__image-wrapper u-image",dangerouslySetInnerHTML:{__html:r}})),Object(s.c)("div",{className:"c-small-cta__content-container"},Object(s.c)("div",{className:"c-small-cta__label u-flex u-flex-v-center"},Object(s.c)("svg",{class:"c-icon c-icon--large c-small-cta__icon"},Object(s.c)("use",{href:"#"+o,xlinkHref:"#"+o})),a),Object(s.c)("div",{className:"c-small-cta__content u-flex u-flex-sb u-flex-v-center"},Object(s.c)("h3",{className:"c-small-cta__title"},n),Object(s.c)("a",{href:i,className:"c-button c-button--secondary c-small-cta__button"},Object(s.c)("span",null,l),Object(s.c)("svg",{className:"c-icon  c-button__icon c-button__icon--right c-button__icon--move-right"},Object(s.c)("use",{href:"#arrow-right",xlinkHref:"#arrow-right"})))))))};t.a=r},182:function(e,t,n){"use strict";var s=n(1),r=function(e){function t(t){t.preventDefault(),e.onLoadMore()}var n=e.nrShowing+" / "+e.nrAll;return e.loading?null:e.nrShowing>=e.nrAll?null:Object(s.c)("div",{className:"c-load-more"},Object(s.c)("a",{href:"#",onClick:t,className:"c-load-more__link"},Object(s.c)("div",{className:"c-load-more__title"},e.title,Object(s.c)("svg",{class:"c-icon c-load-more__icon"},Object(s.c)("use",{href:"#arrow-down",xlinkHref:"#arrow-down"}))),Object(s.c)("div",{className:"c-load-more__subtitle"},n)))};t.a=r},183:function(e,t,n){"use strict";function s(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(1),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),c=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={values:[]},n.handleSelect=n.handleSelect.bind(n),n}return o(t,e),l(t,[{key:"handleSelect",value:function(e){this.props.handleSelect(e.target.value,this.props.name)}},{key:"generateOptions",value:function(e){var t=this.props,n=t.name,r=t.currentFilter,a=t.currentBrand,o=[],l=this.props.posts;if("merk"===n){var c=""!==r?this.props.unfilteredPosts:l;o=c.map(function(e){if(e.model[n])return{name:e.model[n],value:e.model[n]}}),o=o.sort(function(e,t){return e.name>t.name?1:t.name>e.name?-1:0})}if("model"===n){(""!==r?this.props.unfilteredPosts:l).forEach(function(e){a?e.model.merk===a&&e.model[n]&&o.push({name:e.model[n],value:e.model[n]}):e.model[n]&&o.push({name:e.model[n],value:e.model[n]})}),o=o.sort(function(e,t){return e.name>t.name?1:t.name>e.name?-1:0})}if("type"===n){(""!==r?this.props.unfilteredPosts:l).forEach(function(e){e.model[n]&&o.push({name:e.model[n],value:e.model[n]})}),o=o.sort(function(e,t){return e.name>t.name?1:t.name>e.name?-1:0})}if("brandstof"===n){var u=""!==r?this.props.unfilteredPosts:l;o=[].concat(s(new Set(u.map(function(e){return"D"===e.info[n]?{name:"Diesel",value:"D"}:"B"===e.info[n]?{name:"Benzine",value:"B"}:"E"===e.info[n]?{name:"Elektrisch",value:"E"}:"H"===e.info[n]?{name:"Hybride",value:"H"}:void 0})))),o=o.sort(function(e,t){return e.name>t.name?1:t.name>e.name?-1:0})}if("transmissie"===n){var p=""!==r?this.props.unfilteredPosts:l;o=[].concat(s(new Set(p.map(function(e){return"H"===e.info[n]?{name:"Handgeschakeld",value:"H"}:"A"===e.info[n]?{name:"Automaat",value:"A"}:void 0})))),o=o.sort(function(e,t){return e.name>t.name?1:t.name>e.name?-1:0})}if("basiskleur"===n){var f=""!==r?this.props.unfilteredPosts:l;o=f.map(function(e){if(e.info[n])return{name:e.info[n].charAt(0).toUpperCase()+e.info[n].substring(1),value:e.info[n]}}),o=o.sort(function(e,t){return e.value>t.value?1:t.value>e.value?-1:0})}if("bouwjaar"===n){var d=""!==r?this.props.unfilteredPosts:l;o=d.map(function(e){if(e.info[n])return{name:e.info[n],value:e.info[n]}}),o=o.sort(function(e,t){return e.value<t.value?1:t.value<e.value?-1:0})}if("prijs_vanaf"===n||"prijs_tot"===n)for(var _=Math.max.apply(Math,s(this.props.prices)),h=1e4,g=0;g<_+h;g+=h)h=g>=1e5?25e3:h,o.push({name:"€ "+g.toFixed(0).replace(".",",").replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1."),value:g});o&&(o=o.filter(function(e,t,n){if(e&&n)return n.map(function(e){return e?e.value:null}).indexOf(e.value)===t}));var m=[];return o.length>1&&m.push(Object(i.c)("option",{value:"",key:this.props.name,disabled:this.props.postsLoading,dangerouslySetInnerHTML:{__html:e}})),o.map(function(e){return m.push(Object(i.c)("option",{select:!0,value:e.value,key:e.value,dangerouslySetInnerHTML:{__html:e.name}}))}),m}},{key:"render",value:function(){var e=this.generateOptions(this.props.defaultOption),t=this.props.large?"c-select-filter c-select-filter--large":"c-select-filter";return Object(i.c)("div",{className:t},Object(i.c)("select",{value:e.length>2?this.props.currentFilter:e[0]?e[0].value:e[1]?e[1].value:"",onChange:this.handleSelect,disabled:this.props.postsLoading,className:"c-select-filter__select"},e))}}]),t}(i.a);t.a=c},184:function(e,t,n){"use strict";var s=n(1),r=function(e){function t(t){e.onSelectOrder(t.target.value)}return Object(s.c)("div",{className:"c-select-filter"},Object(s.c)("select",{value:e.order,onChange:t,disabled:e.postsLoading,className:"c-select-filter__select"},Object(s.c)("option",{value:"date_desc"},"en"===e.language?"Date (new-old)":"Datum (nieuw-oud)"),Object(s.c)("option",{value:"date_asc"},"en"===e.language?"Date (old-new)":"Datum (oud-nieuw)"),Object(s.c)("option",{value:"title_asc"},"en"===e.language?"Brand (a-z)":"Merk (a-z)")))};t.a=r},185:function(e,t,n){"use strict";var s=n(1),r=function(e){function t(t){t.preventDefault(),e.onClear()}return Object(s.c)("div",{className:"c-clear-filter"},Object(s.c)("button",{onClick:t,class:"c-button c-button--transparent c-clear-filter__button"},Object(s.c)("svg",{class:"c-icon c-icon--small c-clear-filter__icon"},Object(s.c)("use",{href:"#reset",xlinkHref:"#reset"})),"Reset filters"))};t.a=r},186:function(e,t,n){"use strict";var s=n(1),r=function(e){function t(){e.onClick()}return Object(s.c)("div",{class:"c-toggler","data-closed":e.closed},Object(s.c)("div",{class:"c-toggler__number "+(e.postsLoading?"c-toggler__number--loading":"")},e.number," ","en"===e.language?"cars":"auto's"),Object(s.c)("div",{className:"c-toggler__button",onClick:t},Object(s.c)("span",null,"en"===e.language?"Filter cars":"Filter auto's"),Object(s.c)("svg",{class:"c-icon c-toggler__icon"},Object(s.c)("use",{href:"#arrow-right",xlinkHref:"#arrow-right"}))))};t.a=r},6:function(e,t,n){"use strict";var s=n(1),r=function(){return Object(s.c)("div",{className:"c-cars-loader"},Object(s.c)("div",{className:"rect1"}),Object(s.c)("div",{className:"rect2"}),Object(s.c)("div",{className:"rect3"}),Object(s.c)("div",{className:"rect4"}),Object(s.c)("div",{className:"rect5"}))};t.a=r}},[174]);
//# sourceMappingURL=cars.2d678f9ee51814e7586b.js.map