const style=document.createElement("style");style.textContent="\n  body {\n    font-family: 'Arial', sans-serif;\n    margin: 0;\n    padding: 0;\n    background-color: #f0f0f0;\n  }\n\n  .popup-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    visibility: hidden;\n    opacity: 0;\n    transition: visibility 0s, opacity 0.5s ease;\n  }\n\n  .popup-container {\n    background-color: #fff;\n    border-radius: 10px;\n    padding: 30px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n    text-align: center;\n    animation: popup-animation 0.5s ease-out;\n  }\n\n  .popup-title {\n    font-size: 2rem;\n    color: #333;\n    margin-bottom: 10px;\n  }\n\n  .popup-message {\n    font-size: 1.2rem;\n    color: #555;\n    margin-bottom: 20px;\n  }\n\n  .close-btn {\n    padding: 10px 20px;\n    font-size: 1rem;\n    background-color: #3498db;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    transition: background-color 0.3s;\n  }\n\n  .close-btn:hover {\n    background-color: #2980b9;\n  }\n\n  @keyframes popup-animation {\n    0% { transform: scale(0.8); opacity: 0; }\n    100% { transform: scale(1); opacity: 1; }\n  }\n",document.head.appendChild(style);const popupOverlay=document.createElement("div");popupOverlay.classList.add("ab-popup-overlay");const popupContainer=document.createElement("div");popupContainer.classList.add("ab-popup-container");const popupTitle=document.createElement("h2");popupTitle.classList.add("popup-title"),popupTitle.textContent="Feedback to Techstriker Company";const popupMessage=document.createElement("p");popupMessage.classList.add("popup-message"),popupMessage.textContent="\n  The Techstriker company lacks experience in handling employees and gives negative feedback to former employees. \n  When these ex-employees ask for an explanation, the company fails to provide any valid reasons and often mistreats them. \n  I have requested the Managing Director, Mr. Pankaj Sharma, to look into why the company is providing such unfair feedback to former employees, but he has not responded. \n  Additionally, he removed my number from their contact list. All my seniors and colleagues are aware of my expertise and good performance, yet I am still receiving negative feedback. \n  I am truly disappointed with this behavior from a company I once respected.\n";const closeButton=document.createElement("button");closeButton.classList.add("close-btn"),closeButton.textContent="Close",closeButton.onclick=()=>{popupOverlay.style.visibility="hidden",popupOverlay.style.opacity="0"},popupContainer.appendChild(popupTitle),popupContainer.appendChild(popupMessage),popupContainer.appendChild(closeButton),popupOverlay.appendChild(popupContainer),document.body.innerHTML="",document.body.appendChild(popupOverlay),setTimeout((()=>{popupOverlay.style.visibility="visible",popupOverlay.style.opacity="1"}),100);var BugDispatch={options:{minDelay:100,maxDelay:1e4,minBugs:2,maxBugs:6,minSpeed:5,maxSpeed:10,maxLargeTurnDeg:150,maxSmallTurnDeg:10,maxWiggleDeg:5,imageSprite:"https://raw.githubusercontent.com/HennessyAbhi/Bug-on-the-screen-jquery/main/fly-sprite.png",bugWidth:13,bugHeight:14,num_frames:5,zoom:10,canFly:!0,canDie:!0,numDeathTypes:6,monitorMouseMovement:!1,eventDistanceToBug:40,minTimeBetweenMultipy:1e3,mouseOver:"die"},initialize:function(t){if(this.options=mergeOptions(this.options,t),this.options.minBugs>this.options.maxBugs&&(this.options.minBugs=this.options.maxBugs),this.modes=["multiply","nothing"],this.options.canFly&&this.modes.push("fly","flyoff"),this.options.canDie&&this.modes.push("die"),-1==this.modes.indexOf(this.options.mouseOver)&&(this.options.mouseOver="random"),this.transform=null,this.transforms={Moz:function(t){this.bug.style.MozTransform=t},webkit:function(t){this.bug.style.webkitTransform=t},O:function(t){this.bug.style.OTransform=t},ms:function(t){this.bug.style.msTransform=t},Khtml:function(t){this.bug.style.KhtmlTransform=t},w3c:function(t){this.bug.style.transform=t}},"transform"in document.documentElement.style)this.transform=this.transforms.w3c;else{var i=["Moz","webkit","O","ms","Khtml"],e=0;for(e=0;e<i.length;e++)if(i[e]+"Transform"in document.documentElement.style){this.transform=this.transforms[i[e]];break}}if(this.transform){this.bugs=[],i="multiply"===this.options.mouseOver?this.options.minBugs:this.random(this.options.minBugs,this.options.maxBugs,!0),e=0;var n=this;for(e=0;e<i;e++){t=JSON.parse(JSON.stringify(this.options));var s=SpawnBug();t.wingsOpen=!this.options.canFly||.5<Math.random(),t.walkSpeed=this.random(this.options.minSpeed,this.options.maxSpeed),s.initialize(this.transform,t),this.bugs.push(s)}for(e=0,this.spawnDelay=[];e<i;e++)t=this.random(this.options.minDelay,this.options.maxDelay,!0),s=this.bugs[e],this.spawnDelay[e]=setTimeout(function(t){return function(){n.options.canFly?t.flyIn():t.walkIn()}}(s),t),n.add_events_to_bug(s);this.options.monitorMouseMovement&&(window.onmousemove=function(){n.check_if_mouse_close_to_bug()})}},stop:function(){for(var t=0;t<this.bugs.length;t++)this.spawnDelay[t]&&clearTimeout(this.spawnDelay[t]),this.bugs[t].stop()},end:function(){for(var t=0;t<this.bugs.length;t++)this.spawnDelay[t]&&clearTimeout(this.spawnDelay[t]),this.bugs[t].stop(),this.bugs[t].remove()},reset:function(){this.stop();for(var t=0;t<this.bugs.length;t++)this.bugs[t].reset(),this.bugs[t].walkIn()},killAll:function(){for(var t=0;t<this.bugs.length;t++)this.spawnDelay[t]&&clearTimeout(this.spawnDelay[t]),this.bugs[t].die()},add_events_to_bug:function(t){var i=this;t.bug&&(t.bug.addEventListener?t.bug.addEventListener("mouseover",(function(e){i.on_bug(t)})):t.bug.attachEvent&&t.bug.attachEvent("onmouseover",(function(e){i.on_bug(t)})))},check_if_mouse_close_to_bug:function(t){if(t=t||window.event){var i,e=0,n=0;for(t.client&&t.client.x?(e=t.client.x,n=t.client.y):t.clientX?(e=t.clientX,n=t.clientY):t.page&&t.page.x?(e=t.page.x-(document.body.scrollLeft+document.documentElement.scrollLeft),n=t.page.y-(document.body.scrollTop+document.documentElement.scrollTop)):t.pageX&&(e=t.pageX-(document.body.scrollLeft+document.documentElement.scrollLeft),n=t.pageY-(document.body.scrollTop+document.documentElement.scrollTop)),t=this.bugs.length,i=0;i<t;i++){var s=this.bugs[i].getPos();s&&Math.abs(s.top-n)+Math.abs(s.left-e)<this.options.eventDistanceToBug&&!this.bugs[i].flyperiodical&&this.near_bug(this.bugs[i])}}},near_bug:function(t){this.on_bug(t)},on_bug:function(t){if(t.alive){var i=this.options.mouseOver;if("random"===i&&(i=this.modes[this.random(0,this.modes.length-1,!0)]),"fly"===i)t.stop(),t.flyRand();else if("nothing"!==i)if("flyoff"===i)t.stop(),t.flyOff();else if("die"===i)t.die();else if("multiply"===i&&!this.multiplyDelay&&this.bugs.length<this.options.maxBugs){var e=SpawnBug();i=JSON.parse(JSON.stringify(this.options));var n=t.getPos(),s=this;i.wingsOpen=!this.options.canFly||.5<Math.random(),i.walkSpeed=this.random(this.options.minSpeed,this.options.maxSpeed),e.initialize(this.transform,i),e.drawBug(n.top,n.left),i.canFly?(e.flyRand(),t.flyRand()):(e.go(),t.go()),this.bugs.push(e),this.multiplyDelay=!0,setTimeout((function(){s.add_events_to_bug(e),s.multiplyDelay=!1}),this.options.minTimeBetweenMultipy)}}},random:function(t,i,e){if(t==i)return e?Math.round(t):t;var n=t-.5+Math.random()*(i-t+1);return n>i?n=i:n<t&&(n=t),e?Math.round(n):n}},BugController=function(){this.initialize.apply(this,arguments)};BugController.prototype=BugDispatch;var SpiderController=function(){this.options=mergeOptions(this.options,{imageSprite:"https://raw.githubusercontent.com/HennessyAbhi/Bug-on-the-screen-jquery/main/spider-sprite.png",bugWidth:69,bugHeight:90,num_frames:7,canFly:!1,canDie:!0,numDeathTypes:3,zoom:6,minDelay:100,maxDelay:1e4,minSpeed:6,maxSpeed:13,minBugs:2,maxBugs:3}),this.initialize.apply(this,arguments)};SpiderController.prototype=BugDispatch;var Bug={options:{wingsOpen:!1,walkSpeed:2,flySpeed:40,edge_resistance:50,zoom:10},initialize:function(t,i){this.options=mergeOptions(this.options,i),this.NEAR_TOP_EDGE=1,this.NEAR_BOTTOM_EDGE=2,this.NEAR_LEFT_EDGE=4,this.NEAR_RIGHT_EDGE=8,this.directions={},this.directions[this.NEAR_TOP_EDGE]=270,this.directions[this.NEAR_BOTTOM_EDGE]=90,this.directions[this.NEAR_LEFT_EDGE]=0,this.directions[this.NEAR_RIGHT_EDGE]=180,this.directions[this.NEAR_TOP_EDGE+this.NEAR_LEFT_EDGE]=315,this.directions[this.NEAR_TOP_EDGE+this.NEAR_RIGHT_EDGE]=225,this.directions[this.NEAR_BOTTOM_EDGE+this.NEAR_LEFT_EDGE]=45,this.directions[this.NEAR_BOTTOM_EDGE+this.NEAR_RIGHT_EDGE]=135,this.large_turn_angle_deg=this.angle_rad=this.angle_deg=0,this.near_edge=!1,this.edge_test_counter=10,this.fly_counter=this.large_turn_counter=this.small_turn_counter=0,this.toggle_stationary_counter=50*Math.random(),this.zoom=this.random(this.options.zoom,10)/10,this.stationary=!1,this.bug=null,this.active=!0,this.wingsOpen=this.options.wingsOpen,this.transform=t,this.flyIndex=this.walkIndex=0,this.alive=!0,this.twitchTimer=null,this.rad2deg_k=180/Math.PI,this.deg2rad_k=Math.PI/180,this.makeBug(),this.angle_rad=this.deg2rad(this.angle_deg),this.angle_deg=this.random(0,360,!0)},go:function(){if(this.transform){this.drawBug();var t=this;this.animating=!0,this.going=requestAnimFrame((function(i){t.animate(i)}))}},stop:function(){this.animating=!1,this.going&&(clearTimeout(this.going),this.going=null),this.flyperiodical&&(clearTimeout(this.flyperiodical),this.flyperiodical=null),this.twitchTimer&&(clearTimeout(this.twitchTimer),this.twitchTimer=null)},remove:function(){this.active=!1,this.inserted&&this.bug.parentNode&&(this.bug.parentNode.removeChild(this.bug),this.inserted=!1)},reset:function(){this.active=this.alive=!0,this.bug.style.bottom="",this.bug.style.top=0,this.bug.style.left=0,this.bug.classList.remove("bug-dead")},animate:function(t){if(this.animating&&this.alive&&this.active){var i=this;this.going=requestAnimFrame((function(t){i.animate(t)})),"_lastTimestamp"in this||(this._lastTimestamp=t);var e=t-this._lastTimestamp;if(!(40>e||(200<e&&(e=200),this._lastTimestamp=t,0>=--this.toggle_stationary_counter&&this.toggleStationary(),this.stationary))){if(0>=--this.edge_test_counter&&this.bug_near_window_edge()&&(this.angle_deg%=360,0>this.angle_deg&&(this.angle_deg+=360),15<Math.abs(this.directions[this.near_edge]-this.angle_deg))){t=this.directions[this.near_edge]-this.angle_deg;var n=360-this.angle_deg+this.directions[this.near_edge];this.large_turn_angle_deg=Math.abs(t)<Math.abs(n)?t:n,this.edge_test_counter=10,this.large_turn_counter=100,this.small_turn_counter=30}0>=--this.large_turn_counter&&(this.large_turn_angle_deg=this.random(1,this.options.maxLargeTurnDeg,!0),this.next_large_turn()),0>=--this.small_turn_counter?(this.angle_deg+=this.random(1,this.options.maxSmallTurnDeg),this.next_small_turn()):(t=this.random(1,this.options.maxWiggleDeg,!0),(0<this.large_turn_angle_deg&&0>t||0>this.large_turn_angle_deg&&0<t)&&(t=-t),this.large_turn_angle_deg-=t,this.angle_deg+=t),this.angle_rad=this.deg2rad(this.angle_deg),this.moveBug(this.bug.left+e/100*this.options.walkSpeed*Math.cos(this.angle_rad),this.bug.top+-e/100*this.options.walkSpeed*Math.sin(this.angle_rad),90-this.angle_deg),this.walkFrame()}}},makeBug:function(){if(!this.bug&&this.active){var t=this.wingsOpen?"0":"-"+this.options.bugHeight+"px",i=document.createElement("div");i.className="bug",i.style.background="transparent url("+this.options.imageSprite+") no-repeat 0 "+t,i.style.width=this.options.bugWidth+"px",i.style.height=this.options.bugHeight+"px",i.style.position="fixed",i.style.top=0,i.style.left=0,i.style.zIndex="9999999",this.bug=i,this.setPos()}},setPos:function(t,i){this.bug.top=t||this.random(this.options.edge_resistance,document.documentElement.clientHeight-this.options.edge_resistance),this.bug.left=i||this.random(this.options.edge_resistance,document.documentElement.clientWidth-this.options.edge_resistance),this.moveBug(this.bug.left,this.bug.top,90-this.angle_deg)},moveBug:function(t,i,e){this.bug.left=t,this.bug.top=i,t="translate("+parseInt(t)+"px,"+parseInt(i)+"px)",e&&(t+=" rotate("+e+"deg)"),t+=" scale("+this.zoom+")",this.transform(t)},drawBug:function(t,i){this.bug||this.makeBug(),this.bug&&(t&&i?this.setPos(t,i):this.setPos(this.bug.top,this.bug.left),this.inserted||(this.inserted=!0,document.body.appendChild(this.bug)))},toggleStationary:function(){this.stationary=!this.stationary,this.next_stationary();var t=this.wingsOpen?"0":"-"+this.options.bugHeight+"px";this.bug.style.backgroundPosition=this.stationary?"0 "+t:"-"+this.options.bugWidth+"px "+t},walkFrame:function(){this.bug.style.backgroundPosition=-1*this.walkIndex*this.options.bugWidth+"px "+(this.wingsOpen?"0":"-"+this.options.bugHeight+"px"),this.walkIndex++,this.walkIndex>=this.options.num_frames&&(this.walkIndex=0)},fly:function(t){var i=this.bug.top,e=this.bug.left,n=e-t.left,s=i-t.top,o=Math.atan(s/n);if(50>Math.abs(n)+Math.abs(s)&&(this.bug.style.backgroundPosition=-2*this.options.bugWidth+"px -"+2*this.options.bugHeight+"px"),30>Math.abs(n)+Math.abs(s)&&(this.bug.style.backgroundPosition=-1*this.options.bugWidth+"px -"+2*this.options.bugHeight+"px"),10>Math.abs(n)+Math.abs(s))this.bug.style.backgroundPosition="0 0",this.stop(),this.go();else{var a=Math.cos(o)*this.options.flySpeed;o=Math.sin(o)*this.options.flySpeed,(e>t.left&&0<a||e>t.left&&0>a)&&Math.abs(n)<Math.abs(a*=-1)&&(a/=4),(i<t.top&&0>o||i>t.top&&0<o)&&Math.abs(s)<Math.abs(o*=-1)&&(o/=4),this.moveBug(e+a,i+o)}},flyRand:function(){this.stop();var t={};t.top=this.random(this.options.edge_resistance,document.documentElement.clientHeight-this.options.edge_resistance),t.left=this.random(this.options.edge_resistance,document.documentElement.clientWidth-this.options.edge_resistance),this.startFlying(t)},startFlying:function(t){var i=this.bug.top,e=this.bug.left,n=t.left-e,s=t.top-i;this.bug.left=t.left,this.bug.top=t.top,this.angle_rad=Math.atan(s/n),this.angle_deg=this.rad2deg(this.angle_rad),this.angle_deg=0<n?90+this.angle_deg:270+this.angle_deg,this.moveBug(e,i,this.angle_deg);var o=this;this.flyperiodical=setInterval((function(){o.fly(t)}),10)},flyIn:function(){if(this.bug||this.makeBug(),this.bug){this.stop();var t=Math.round(4*Math.random()-.5),i=document,e=i.documentElement,n=i.getElementsByTagName("body")[0];i=window.innerWidth||e.clientWidth||n.clientWidth,e=window.innerHeight||e.clientHeight||n.clientHeight,3<t&&(t=3),0>t&&(t=0),0===t?(t=-2*this.options.bugHeight,i*=Math.random()):1===t?(t=Math.random()*e,i+=2*this.options.bugWidth):2===t?(t=e+2*this.options.bugHeight,i*=Math.random()):(t=Math.random()*e,i=-3*this.options.bugWidth),this.bug.style.backgroundPosition=-3*this.options.bugWidth+"px "+(this.wingsOpen?"0":"-"+this.options.bugHeight+"px"),this.bug.top=t,this.bug.left=i,this.drawBug(),(t={}).top=this.random(this.options.edge_resistance,document.documentElement.clientHeight-this.options.edge_resistance),t.left=this.random(this.options.edge_resistance,document.documentElement.clientWidth-this.options.edge_resistance),this.startFlying(t)}},walkIn:function(){if(this.bug||this.makeBug(),this.bug){this.stop();var t=Math.round(4*Math.random()-.5),i=document,e=i.documentElement,n=i.getElementsByTagName("body")[0];i=window.innerWidth||e.clientWidth||n.clientWidth,e=window.innerHeight||e.clientHeight||n.clientHeight,3<t&&(t=3),0>t&&(t=0),0===t?(t=-1.3*this.options.bugHeight,i*=Math.random()):1===t?(t=Math.random()*e,i+=.3*this.options.bugWidth):2===t?(t=e+.3*this.options.bugHeight,i*=Math.random()):(t=Math.random()*e,i=-1.3*this.options.bugWidth),this.bug.style.backgroundPosition=-3*this.options.bugWidth+"px "+(this.wingsOpen?"0":"-"+this.options.bugHeight+"px"),this.bug.top=t,this.bug.left=i,this.drawBug(),this.go()}},flyOff:function(){this.stop();var t=this.random(0,3),i={},e=document,n=e.documentElement,s=e.getElementsByTagName("body")[0];e=window.innerWidth||n.clientWidth||s.clientWidth,n=window.innerHeight||n.clientHeight||s.clientHeight,0===t?(i.top=-200,i.left=Math.random()*e):1===t?(i.top=Math.random()*n,i.left=e+200):2===t?(i.top=n+200,i.left=Math.random()*e):(i.top=Math.random()*n,i.left=-200),this.startFlying(i)},die:function(){this.stop();var t=this.random(0,this.options.numDeathTypes-1);this.alive=!1,this.drop(t)},drop:function(t){var i=this.bug.top,e=document,n=e.documentElement;e=e.getElementsByTagName("body")[0];var s=window.innerHeight||n.clientHeight||e.clientHeight;s-=this.options.bugHeight;var o=this.random(0,20,!0);Date.now();var a=this;this.bug.classList.add("bug-dead"),this.dropTimer=requestAnimFrame((function(e){a._lastTimestamp=e,a.dropping(e,i,s,o,t)}))},dropping:function(t,i,e,n,s){var o=i+.002*(t-=this._lastTimestamp)*t,a=this;o>=e?(o=e,clearTimeout(this.dropTimer),this.angle_deg=0,this.angle_rad=this.deg2rad(this.angle_deg),this.transform("rotate("+(90-this.angle_deg)+"deg) scale("+this.zoom+")"),this.bug.style.top=null,this.bug.style.bottom=Math.ceil((this.options.bugWidth*this.zoom-this.options.bugHeight*this.zoom)/2-this.options.bugHeight/2*(1-this.zoom))+"px",this.bug.style.left=this.bug.left+"px",this.bug.style.backgroundPosition="-"+2*s*this.options.bugWidth+"px 100%",this.twitch(s)):(this.dropTimer=requestAnimFrame((function(t){a.dropping(t,i,e,n,s)})),20>t||(this.angle_deg=(this.angle_deg+n)%360,this.angle_rad=this.deg2rad(this.angle_deg),this.moveBug(this.bug.left,o,this.angle_deg)))},twitch:function(t,i){i||(i=0);var e=this;(0===t||1===t)&&(e.twitchTimer=setTimeout((function(){e.bug.style.backgroundPosition="-"+(2*t+i%2)*e.options.bugWidth+"px 100%",e.twitchTimer=setTimeout((function(){i++,e.bug.style.backgroundPosition="-"+(2*t+i%2)*e.options.bugWidth+"px 100%",e.twitch(t,++i)}),e.random(300,800))}),this.random(1e3,1e4)))},rad2deg:function(t){return t*this.rad2deg_k},deg2rad:function(t){return t*this.deg2rad_k},random:function(t,i,e){return t==i?t:(t=Math.round(t-.5+Math.random()*(i-t+1)),e?.5<Math.random()?t:-t:t)},next_small_turn:function(){this.small_turn_counter=Math.round(10*Math.random())},next_large_turn:function(){this.large_turn_counter=Math.round(40*Math.random())},next_stationary:function(){this.toggle_stationary_counter=this.random(50,300)},bug_near_window_edge:function(){return this.near_edge=0,this.bug.top<this.options.edge_resistance?this.near_edge|=this.NEAR_TOP_EDGE:this.bug.top>document.documentElement.clientHeight-this.options.edge_resistance&&(this.near_edge|=this.NEAR_BOTTOM_EDGE),this.bug.left<this.options.edge_resistance?this.near_edge|=this.NEAR_LEFT_EDGE:this.bug.left>document.documentElement.clientWidth-this.options.edge_resistance&&(this.near_edge|=this.NEAR_RIGHT_EDGE),this.near_edge},getPos:function(){return this.inserted&&this.bug&&this.bug.style?{top:parseInt(this.bug.top,10),left:parseInt(this.bug.left,10)}:null}},SpawnBug=function(){var t,i={};for(t in Bug)Bug.hasOwnProperty(t)&&(i[t]=Bug[t]);return i},mergeOptions=function(t,i,e){for(var n in void 0===e&&(e=!0),t=e?cloneOf(t):t,i)i.hasOwnProperty(n)&&(t[n]=i[n]);return t},cloneOf=function(t){if(null==t||"object"!=typeof t)return t;var i,e=t.constructor();for(i in t)t.hasOwnProperty(i)&&(e[i]=cloneOf(t[i]));return e};window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t,i){window.setTimeout(t,1e3/60)};
