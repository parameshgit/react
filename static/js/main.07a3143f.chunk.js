(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{16:function(e,t,a){},21:function(e,t,a){e.exports=a(33)},26:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(18),l=a.n(c);a(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(19),s=a(1),o=a(6),m=a(7),u=a(9),h=a(8),d=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("nav",null,n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"/home"},"Home")),n.a.createElement("li",null,n.a.createElement("a",{href:"/weather"},"Weather")),n.a.createElement("li",null,n.a.createElement("a",{href:"/news"},"News")))),this.props.children)}}]),a}(r.Component),p=(a(26),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).search=function(){r.props.search(r.cityName.current.value)},r.cityName=n.a.createRef(),r}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"flex flex-column justify-center"},n.a.createElement("input",{type:"search",placeholder:"Enter City Name",id:"cityName",className:"input-reset ba b--black-20 pa2 mb2 db w-100",ref:this.cityName}),n.a.createElement("button",{onClick:this.search,className:"white b pv2 ph3 bg-gray hover-bg-mid-gray bn br2 hover-shadow-inner"},"Search"))}}]),a}(r.Component)),g=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).searchCityWeather=function(t){e.setState({currentWeatherData:"",error:""}),console.log("cityName:"+t),void 0!==t&&0!==t.length?(e.setState({currentCity:t}),fetch("https://api.openweathermap.org/data/2.5/weather?q="+t+"&appid=3fa722585d044f7f6fc588d9cf92842a").then((function(e){return e.json()})).then((function(t){var a=t.cod;console.log("Message Printed:"+a),"404"===a?(console.log("setting state for error"),e.setState({error:"City Name Not Found"}),e.setState({currentWeatherData:""})):e.setState({currentWeatherData:t})})).catch((function(e){return"error"})),console.log("current weather data:"+e.state.currentWeatherData)):e.setState({error:"City Name must not be empty"})},e.state={currentCity:"",currentWeatherData:"",error:""},e.cityName=n.a.createRef(),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){}},{key:"convert",value:function(e){if(void 0!==e)return(e-273.15).toFixed(2)}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return void 0===this.state.currentWeatherData?n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",null,"Loading")):0!==this.state.error.length?n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"login-container"},n.a.createElement("div",null,n.a.createElement(p,{search:this.searchCityWeather})),n.a.createElement("div",{id:"error"},this.state.error))):this.state.currentWeatherData&&0===this.state.error.length?(console.log("Error lenght weather:"+this.state.currentWeatherData),console.log("Error lenght:"+this.state.currentWeatherData.length),console.log("inside ................"),n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"login-container"},n.a.createElement(p,{search:this.searchCityWeather}),n.a.createElement("div",null,n.a.createElement("table",{className:"zigzag"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Temperature"),n.a.createElement("td",null,this.state.currentWeatherData.main?this.convert(this.state.currentWeatherData.main.temp)+"\xb0C":"")),n.a.createElement("tr",null,n.a.createElement("td",null,"Humidity"),n.a.createElement("td",null,this.state.currentWeatherData.main?this.state.currentWeatherData.main.humidity+"%":"")),n.a.createElement("tr",null,n.a.createElement("td",null,"Clouds"),n.a.createElement("td",null,this.state.currentWeatherData.weather?this.state.currentWeatherData.weather[0].description:"")))))))):n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"login-container"},n.a.createElement("div",null,n.a.createElement(p,{search:this.searchCityWeather}))))}}]),a}(r.Component),A=(a(27),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={indiaTop:[]},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=c51e7d20e9ba463ba2e12745922a3b73").then((function(e){return e.json()})).then((function(e){return e.articles})).then((function(t){return e.setState({indiaTop:t})}))}},{key:"render",value:function(){if(console.log(this.state.indiaTop.length),0===this.state.indiaTop.length)return n.a.createElement("div",{className:"news"},n.a.createElement("img",{className:"loadingImage",src:"data:image/png;base64,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"}));var e=this.state.indiaTop.map((function(e,t){return n.a.createElement("li",{key:t,className:"article"},n.a.createElement("div",{className:"article_div"},n.a.createElement("em",{className:"title"},e.title),n.a.createElement("img",{src:e.urlToImage,alt:"none"}),n.a.createElement("p",null,e.description),n.a.createElement("p",null,"click ",n.a.createElement("a",{href:e.url},"here")," to see more")))}));return n.a.createElement("ul",{className:"news"},e)}}]),a}(r.Component));l.a.render(n.a.createElement(i.a,null,n.a.createElement(d,null,n.a.createElement(s.a,{path:"/",exact:!0,component:g}),n.a.createElement(s.a,{path:"/home",component:g}),n.a.createElement(s.a,{path:"/weather",component:g}),n.a.createElement(s.a,{path:"/news",component:A}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.07a3143f.chunk.js.map