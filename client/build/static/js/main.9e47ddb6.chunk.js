(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,a,t){},17:function(e,a,t){e.exports=t(35)},23:function(e,a,t){},25:function(e,a,t){},30:function(e,a,t){},32:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(15),l=t.n(r),s=(t(23),t(3)),o=t(4),m=t(6),i=t(5),u=t(7),h=t(37),d=t(39),p=t(38),E=(t(25),t(36)),f=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("header",{className:"header-main"},c.a.createElement(E.a,{to:"/"},c.a.createElement("h2",{className:"main-main-title"},"SIFTZ")),c.a.createElement("div",{className:"nav-right"},c.a.createElement("ul",{className:"nav-items-right"},c.a.createElement(E.a,{to:"/mySiftz"},c.a.createElement("li",null,c.a.createElement("p",null,"My Siftz"))),c.a.createElement(E.a,{to:"/search"},c.a.createElement("li",null,c.a.createElement("p",null,"How you feelin'?"))),c.a.createElement(E.a,{to:"/signup"},c.a.createElement("li",null,c.a.createElement("p",null,"Signup"))),c.a.createElement(E.a,{to:"/login"},c.a.createElement("li",null,c.a.createElement("p",null,"Login"))))))}}]),a}(n.Component),g=(t(11),function(e){if(e){console.log("vidoe url",e);var a=e.indexOf("=");return a>0&&(e=e.substring(a+1,e.length)),"https://img.youtube.com/vi/"+e+"/0.jpg"}console.log("not rendered yet")}),b=function(e){return c.a.createElement("div",{className:"col-3"},c.a.createElement("div",{className:"card card2"},c.a.createElement("img",{className:"card-img-top",src:g(e.songInfo.url),alt:"song img"}),c.a.createElement("div",{className:"card-body card-body2"},c.a.createElement("div",{className:"avator"},c.a.createElement("img",{src:"https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/andrew.png",alt:"avator man"})),c.a.createElement("p",{className:"song-title"},e.songInfo.songTitle),c.a.createElement("div",{className:"star-and-share"},c.a.createElement("i",{className:"far fa-heart"}),c.a.createElement("i",{className:"fas fa-share-square"})))))},N=(t(30),function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement(f,null),c.a.createElement("div",{className:"main-picture"},c.a.createElement("h3",{className:"marketing-blurp"},"\u30d7\u30ec\u30df\u30a2\u30e0 SIFTZ \u3067\u4eba\u751f\u3092\u3082\u3063\u3068\u5feb\u9069\u306b\u904e\u3054\u305d\u3046\u3002")),c.a.createElement("div",{className:"container main-container"},c.a.createElement("div",{className:"first-text-wrapper"}),c.a.createElement("div",{className:"row"})))}}]),a}(n.Component)),v=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).createSongCard=function(e){for(var a=[],t=0;t<12;t++)a.push(c.a.createElement(b,{songInfo:e[t],key:e[t]._id})),console.log("this is what you're passing to the component",e[t]);return a},t.state={data:"this is stuff"},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this._fetchSongReqeust=fetch("/api/mySiftz/search/night",{headers:{crossDomain:!0}}).then(function(e){return console.log("this is result",e),e.json()}).then(function(a){console.log(a),e.setState({data:a}),console.log("lets see what is the state data index 0",e.state.data[0]),e._fetchSongReqeust=null}),console.log("lets see what is the state",this.state.data)}},{key:"trimmingUrl",value:function(e){var a=e.IndexOf("=");return a>0&&(e=e.Substring(0,a)),"https://img.youtube.com/vi/"+e+"/0.jpg"}},{key:"render",value:function(){return c.a.createElement("div",{className:"main-page"},c.a.createElement(f,null),c.a.createElement("div",{className:"main-picture-for-my-shiftz"},c.a.createElement("h3",{className:"marketing-blurp-for-myshiftz"},"SIFTZ")),c.a.createElement("div",{className:"body-background1"},c.a.createElement("div",{className:"container main-container"},c.a.createElement("div",{className:"first-text-wrapper2"},c.a.createElement("h2",null,"\u4eca\u306e\u6642\u9593\u5e2f\u306b\u3074\u3063\u305f\u308a\u306e\u66f2\u3002")),c.a.createElement("div",{className:"row"},this.createSongCard(this.state.data)))))}}]),a}(c.a.Component),y=(t(32),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).sendInput=function(e){var a=t.state.userInput.slice();console.log(e.target.id);var n=e.target.id;a.push(n),t.setState({userInput:a}),console.log("this is state",t.state)},t.state={userInput:[]},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement(f,null),c.a.createElement("div",{className:"whole-seach-component-wrap"},c.a.createElement("h2",{className:"searchTitile"},"\u4eca\u30c9\u30b3\u306b\u3044\u308b\uff1f"),c.a.createElement("div",{className:"col-8 search-click-wrapper"},c.a.createElement("div",{className:"search-row"},c.a.createElement("button",{className:"clikable-search",id:"inside",onClick:this.sendInput},"\u30a4\u30f3\u30c9\u30a2"),c.a.createElement("button",{className:"clikable-search",id:"outside",onClick:this.sendInput},"\u30a2\u30a6\u30c8\u30c9\u30a2")),c.a.createElement("div",{className:"search-row"},c.a.createElement("button",{className:"clikable-search",id:"driving",onClick:this.sendInput},"\u30c9\u30e9\u30a4\u30d6"),c.a.createElement("button",{className:"clikable-search",id:"search-others",onClick:this.sendInput},"\u304a\u307e\u304b\u305b")))))}}]),a}(n.Component)),O=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("header",{className:"header-index"},c.a.createElement(E.a,{to:"/",className:"titleColorAdjust"},c.a.createElement("h2",{className:"main-title"},"SIFTZ")))}}]),a}(n.Component),j=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).state={isLoggedIn:!1},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement(O,null),c.a.createElement("div",{className:"login-form"},c.a.createElement("section",{className:"signUp-with"},c.a.createElement("button",{className:"facebook-button"},"SIGNUP WITH FACEBOOK"),c.a.createElement("button",{className:"instagram-button"},"SIGNUP WITH INSTAGRAM"),c.a.createElement("button",{className:"gmail-button"},c.a.createElement(E.a,{to:"/auth/google"},"SIGNUP WITH GMAIL"))),c.a.createElement("strong",{className:"line-thru"},"or"),c.a.createElement("form",null,c.a.createElement("h2",null,c.a.createElement("strong",null,"Sign up with your email address")),c.a.createElement("div",{className:"form-row"},c.a.createElement("div",{className:"form-group col-md-6"},c.a.createElement("input",{type:"email",className:"form-control",id:"inputEmail4",placeholder:"Email"})),c.a.createElement("div",{className:"form-group col-md-6"},c.a.createElement("input",{type:"password",class:"form-control",id:"inputPassword4",placeholder:"Confirm Email"}))),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",class:"form-control",id:"inputAddress",placeholder:"Password"})),c.a.createElement("div",{className:"form-row signUpButtonWrap"},c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{type:"checkbox",class:"form-check-input",id:"exampleCheck1"}),c.a.createElement("label",{className:"form-check-label",for:"exampleCheck1"},"Remember me")),c.a.createElement("button",{type:"submit",className:"btn btn-primary login-btn"},"SignUp"))),c.a.createElement("h2",{className:"leadToSignUp"},"Already have an account?"),c.a.createElement(E.a,{to:"/auth/login"},c.a.createElement("button",{className:"btn btn-primary signUp-btn"},"LOG IN"))))}}]),a}(c.a.Component),k=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).state={isLoggedIn:!1},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement(O,null),c.a.createElement("div",{className:"login-form"},c.a.createElement("section",{className:"signUp-with"},c.a.createElement("a",{className:"facebook-button",href:"/api/auth/facebook"},"LOGIN WITH Facebook"),c.a.createElement("a",{className:"instagram-button",href:"/api/auth/instagram"},"LOGIN WITH Instagram"),c.a.createElement("a",{className:"gmail-button",href:"/api/auth/google"},"LOGIN WITH GMAIL")),c.a.createElement("strong",{className:"line-thru"},"or"),c.a.createElement("form",null,c.a.createElement("h2",null,c.a.createElement("strong",null,"Login with your email address")),c.a.createElement("div",{className:"form-row"},c.a.createElement("div",{className:"form-group col-md-6"},c.a.createElement("input",{type:"email",className:"form-control",id:"inputEmail4",placeholder:"Email"})),c.a.createElement("div",{className:"form-group col-md-6"},c.a.createElement("input",{type:"password",className:"form-control",id:"inputPassword4",placeholder:"Confirm Email"}))),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control",id:"inputAddress",placeholder:"Password"})),c.a.createElement("div",{className:"form-row signUpButtonWrap"},c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"exampleCheck1"}),c.a.createElement("label",{className:"form-check-label",htmlFor:"exampleCheck1"},"Remember me")),c.a.createElement("button",{type:"submit",className:"btn btn-primary login-btn"},"Login"))),c.a.createElement("h2",{className:"leadToSignUp"},"Don't have an account?"),c.a.createElement(E.a,{to:"/auth/signUp"},c.a.createElement("button",{className:"btn btn-primary signUp-btn"},"SIGN UP"))))}}]),a}(c.a.Component),w=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).state={isloggedin:!1},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(h.a,null,c.a.createElement(d.a,null,c.a.createElement(p.a,{exact:!0,path:"/",component:N}),c.a.createElement(p.a,{path:"/mySiftz",component:v}),c.a.createElement(p.a,{path:"/search",component:y}),c.a.createElement(p.a,{exact:!0,path:"/signup",component:j}),c.a.createElement(p.a,{path:"/login",component:k}),c.a.createElement(p.a,{exact:!0,path:"*",component:N})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.9e47ddb6.chunk.js.map