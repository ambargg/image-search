(this["webpackJsonpapi-photos"]=this["webpackJsonpapi-photos"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),s=a.n(c),l=(a(12),a(1)),i=a(2),m=a(4),o=a(3),u=function(e){return r.a.createElement("li",{className:"image"},r.a.createElement("img",{src:e.url,alt:"unsplash"}))},h=function(e){return r.a.createElement("ul",{className:"image-list"},e.images.map((function(e,t){return r.a.createElement(u,{key:t,url:e.urls.small})})))},p=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleSubmit=function(t){t.preventDefault(),e.props.setSearchText(document.getElementById("searchTerm").value)},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{className:"search-form",onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"search"}),r.a.createElement("input",{type:"search",name:"search",id:"searchTerm",placeholder:"Search..."}),r.a.createElement("button",{type:"submit",id:"submit",className:"search-button"},r.a.createElement("i",{className:"btn-search"},"Go")))}}]),a}(n.Component),f=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],searchText:""},e.setSearchText=function(t){e.setState({searchText:t}),e.updatePhotos(t)},e.updatePhotos=function(t){var a="https://api.unsplash.com/search/photos/?page=1&per_page=28&query=".concat(t,"&client_id=UVGIvLIdKgQ16WEGvBqgJIXoe1kHOHn4gOwU6AtR1IQ");fetch(a).then((function(e){return e.json()})).then((function(t){e.setState({images:t.results})}))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-container"},r.a.createElement("div",{className:"main-header"},r.a.createElement("div",{className:"banner"},r.a.createElement("h1",{className:"main-title"},"Image Search"),r.a.createElement(p,{setSearchText:this.setSearchText}))),r.a.createElement("div",{className:"grid-container"},r.a.createElement(h,{images:this.state.images})))}}]),a}(n.Component);a(13);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.d379fcf3.chunk.js.map