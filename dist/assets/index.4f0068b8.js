var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,n=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,l=(e,l)=>{for(var s in l||(l={}))t.call(l,s)&&n(e,s,l[s]);if(a)for(var s of a(l))r.call(l,s)&&n(e,s,l[s]);return e};import{m as s,r as o,B as i,L as c,a as m,u,b as d,c as p,T as h,A as E,M as _,d as g,F as y,C as S,e as f,f as v,g as T,h as w,i as R,j as x,k,l as L,R as N,n as A,o as b,p as O,q as I,s as C,t as U,S as F,v as D,w as q,x as K,y as M,z as j,D as G,P as B}from"./vendor.d90d4bf5.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const r=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,l)=>{const s=new URL(e,r);if(self[t].moduleMap[s])return a(self[t].moduleMap[s]);const o=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(o),onerror(){l(new Error(`Failed to import: ${e}`)),n(i)},onload(){a(self[t].moduleMap[s]),n(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/assets/");const H="#bbdfc8",P=s({root:{border:0,borderRadius:3,color:"#fff",backgroundColor:"#75cfb8",fontSize:"12px",fontWeight:"bold",padding:"20px",overflow:"hidden",minWidth:"120px",height:"40px",lineHeight:"20px","&:hover":{backgroundColor:H}},home:{background:"rgba(124, 186, 114, 1)",borderTop:"2px solid #000",borderRight:"2px solid #000",borderLeft:"2px solid #000",borderBottom:"4px solid #000",padding:"20px 40px",cursor:"pointer",borderRadius:"35px",fontSize:"20px","&:focus":{outline:"none"},"&:active":{borderTop:"4px solid #000",borderBottom:"2px solid #000"}}}),J=({children:e,color:t="root",onClick:a},r)=>{const n=P()[t];return o.createElement(i,l(l({onClick:a},r),{className:n}),e)},z=s({default:{color:"#fff",fontFamily:"GTRones","&:hover":{textDecoration:"none"}}}),W=({children:e,href:t})=>{const a=z();return o.createElement(c,{className:a.default,href:t},e)},V=s({modal:{display:"flex",alignItems:"center",justifyContent:"center"},card:{color:"#000",outline:"none",border:"none",width:"800px"},cardImageBackground:{color:"#000",outline:"none",border:"none",width:"1200px",padding:"20px"},cardImage:{maxWidth:"1150px"},form:{display:"flex",flexDirection:"column",gap:"50px 0"},showPassword:{display:"flex",justifyContent:"flex-end"},text:{fontFamily:"Segoe Print"}});var $,X,Q,Y,Z;(X=$||($={})).SET_USER="myoceanmath/auth/SET_USER",X.SET_AUTH="myoceanmath/auth/SET_AUTH",X.SET_USER_TOKEN="myoceanmath/auth/SET_USER_TOKEN",X.SET_LOADER="myoceanmath/auth/SET_LOADER",X.IS_NOT_USER="myoceanmath/auth/IS_NOT_USER",X.LOGOUT_USER="myoceanmath/auth/LOGOUT_USER",X.SET_LOGIN_ERROR="myoceanmath/auth/SET_LOGIN_ERROR",X.SET_FINISHED_TASKS="myoceanmath/auth/SET_FINISHED_TASKS",X.SET_LOADER_TASKS="myoceanmath/auth/SET_LOADER_TASKS",(Q||(Q={})).SET_MODAL="myoceanmath/app/SET_MODAL",(Z=Y||(Y={})).GET_TASKS="myoceanmath/level/GET_TASKS",Z.SET_LEVEL="myoceanmath/level/SET_LEVEL",Z.SET_CURRENT_TASK="myoceanmath/level/SET_CURRENT_TASK",Z.SET_FINISHED="myoceanmath/level/SET_FINISHED",Z.CLEAR_TASKS="myoceanmath/level/CLEAR_TASKS",Z.SET_ERROR="myoceanmath/level/SET_ERROR",Z.GET_ERRORS="myoceanmath/level/GET_ERRORS";const ee=e=>({type:Q.SET_MODAL,payload:e}),te=e=>({type:$.SET_USER,payload:e}),ae=e=>({type:$.SET_AUTH,payload:e}),re=e=>({type:$.SET_LOADER,payload:e}),ne=e=>({type:$.SET_USER_TOKEN,payload:e}),le=e=>({type:$.IS_NOT_USER,payload:e}),se=e=>({type:$.SET_LOGIN_ERROR,payload:e}),oe=e=>({type:$.SET_LOADER_TASKS,payload:e}),ie=async e=>{try{return(await m.post("https://myoceanmathserver.herokuapp.com/auth/create",e)).data}catch(t){console.log(t)}},ce=async e=>{try{return(await m.post("https://myoceanmathserver.herokuapp.com/auth/login",{username:e.email,password:e.password})).data}catch(t){return t}},me=async()=>{try{let e=localStorage.getItem("token");if(null==e)return{isAuth:!1};let t=await m.get("https://myoceanmathserver.herokuapp.com/auth/check",{headers:{Authorization:"Bearer "+e}});return l(l({},t.data),{isAuth:!0})}catch(e){return console.log(e),{isAuth:!1}}},ue=async e=>{try{return(await m.get("https://myoceanmathserver.herokuapp.com/users/id/"+e)).data}catch(t){console.log(t)}},de=async e=>{try{let t=await m.get("https://myoceanmathserver.herokuapp.com/users/finished/"+e);return console.log(t),t.data}catch(t){console.log(t)}};let pe={user:null,tasksList:null,tokenUser:null,isAuth:!1,isLoaderTasks:!1,isLoader:!1,isNotUser:!1,errorLogin:""};const he=()=>e=>{window.sessionStorage.clear(),window.localStorage.clear(),document.cookie="",e({type:$.LOGOUT_USER})},Ee=e=>async t=>{t(oe(!0));let a=await de(e);var r;t((r=a,{type:$.SET_FINISHED_TASKS,payload:r})),t(oe(!1))},_e=()=>{const e=V(),[t,a]=o.useState({email:"",password:"",login:""}),r=o.useRef(null),{isAuth:n,user:s,errorLogin:i}=u((e=>e.AuthReducer)),c=d(),m=p();return o.createElement("form",{className:e.form},o.createElement(h,{name:"login",label:"Логин",variant:"outlined",onChange:e=>a(l(l({},t),{login:e.target.value}))}),o.createElement(h,{name:"email",label:"Email",variant:"outlined",onChange:e=>a(l(l({},t),{email:e.target.value}))}),o.createElement(h,{type:"password",name:"password",label:"Password",ref:r,variant:"outlined",onChange:e=>a(l(l({},t),{password:e.target.value}))}),""!=i?o.createElement(E,{variant:"filled",color:"error"},i):"",o.createElement(J,{onClick:()=>{m((e=>async t=>{let a=await ie(e);localStorage.setItem("token",a.token),t(te(a.user)),t(ee(!1))})(t)),n&&c.push("/profile/"+s.id)}},"Зарегистрироваться"))},ge=()=>{const e=V(),[t,a]=o.useState({email:"",login:"",password:""}),r=p(),n=d(),{errorLogin:s,user:i}=u((e=>e.AuthReducer));return o.useEffect((()=>{null!=i&&n.push("/profile/"+i.id)}),[i]),o.createElement("form",{className:e.form},o.createElement(h,{name:"email",label:"Email",variant:"outlined",onChange:e=>a(l(l({},t),{email:e.target.value}))}),o.createElement(h,{type:"password",name:"password",label:"Password",variant:"outlined",onChange:e=>a(l(l({},t),{password:e.target.value}))}),""!=s?o.createElement(E,{variant:"filled",color:"error"},s):"",o.createElement(J,{onClick:async()=>{r((e=>async t=>{let a=await ce(e);"Request failed with status code 401"==(null==a?void 0:a.message)?t(se("Пользователя с таким паролем или почтой не существует")):(localStorage.setItem("token",a.token),t(te(a.user)),await t(ee(!1)),t(se("")))})(t))}},"Войти"))},ye=({isModal:e,setOpen:t,errorLogin:a})=>{const r=V(),[n,l]=o.useState(0),s=p();return o.createElement("div",null,o.createElement(_,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:e,onClose:()=>t(!1),closeAfterTransition:!0,BackdropComponent:g,BackdropProps:{timeout:500},className:r.modal},o.createElement(y,{in:e},o.createElement(S,{className:r.card,variant:"outlined"},o.createElement(f,null,o.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-around",marginBottom:"20px"}},o.createElement(v,{className:r.text,variant:"h4"},"Авторизация"),o.createElement(T,{indicatorColor:"primary",textColor:"primary",value:n,onChange:(e,t)=>{s(se("")),l(t)}},o.createElement(w,{className:r.text,label:"Регистрация"}),o.createElement(w,{className:r.text,label:"Вход"}))),o.createElement("div",null,0==n?o.createElement(_e,null):o.createElement(ge,{errorLogin:a})))))))},Se=()=>{const e=u((e=>e.AppReducer.isModal)),{isAuth:t,tokenUser:a,errorLogin:r}=u((e=>e.AuthReducer)),n=p();return o.createElement(o.Fragment,null,o.createElement(ye,{errorLogin:r,setOpen:e=>n(ee(e)),isModal:e}),o.createElement(R,{position:"sticky",style:{background:H}},o.createElement(x,{style:{display:"flex",justifyContent:"space-around",gap:"20px"}},o.createElement(W,{href:"/"},o.createElement(v,{variant:"h4",style:{fontFamily:"Segoe Print"}},"Myocean Math")),t?o.createElement(o.Fragment,null,o.createElement(W,{href:"/level"},o.createElement(J,null,"Приступить к прохождению")),o.createElement(W,{href:"/profile/"+a.id},o.createElement(J,{color:"root"},"Профиль"))):o.createElement(J,{color:"root",onClick:()=>n(ee(!0))},"Авторизация"))))},fe=()=>o.createElement(E,{style:{marginTop:"50px"},severity:"error"},"Такой страницы не существует !");var ve={home:"_home_1c17m_1",home__wrapper:"_home__wrapper_1c17m_6",home__main:"_home__main_1c17m_9",home__content:"_home__content_1c17m_12",home__auth:"_home__auth_1c17m_19",home__right:"_home__right_1c17m_37",home__block__left:"_home__block__left_1c17m_42",home__block__center:"_home__block__center_1c17m_57",home__block__right:"_home__block__right_1c17m_82"};const Te=()=>{const e=p(),t=d(),[a,r]=o.useState(!1);return o.useEffect((()=>{r(!0),me().then((e=>{e.isAuth&&t.push("/profile/"+e.id),r(!1)}))}),[]),o.createElement(o.Fragment,null,a?"":o.createElement("div",{className:ve.home__wrapper},o.createElement("div",{className:ve.home},o.createElement("div",{className:ve.home__main},o.createElement("div",{className:ve.home__block__left}),o.createElement("div",{className:ve.home__block__center},o.createElement("h1",{className:ve.home__title},"Решайте задачи по математика в интерактивном формате !"),o.createElement("div",{className:ve.home__content},o.createElement("img",{src:"/assets/screen.84c02f13.png",alt:""}),o.createElement("div",{className:ve.home__right},o.createElement("p",null,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur explicabo magnam numquam illum accusamus deleniti nesciunt? Reiciendis dolore porro sunt, autem odit aliquid maiores cum voluptas repellat aperiam error ratione quisquam facere consequatur nulla totam. Cumque, tenetur, quo delectus dolor aspernatur iste quas dicta dignissimos blanditiis suscipit commodi! Reprehenderit quisquam temporibus distinctio veniam! Illum itaque est maxime vero ullam. Perferendis repellendus ullam, quidem odio veniam incidunt sunt nesciunt? Adipisci, nam. Aliquam perspiciatis maxime enim modi omnis voluptatibus id, illo suscipit?"),o.createElement(E,{variant:"filled",color:"warning"},"Данный сайт находится в разработке !"),o.createElement("button",{onClick:()=>e(ee(!0)),className:ve.home__auth},"Зарегистрироваться")))),o.createElement("div",{className:ve.home__block__right})))))};var we="_frlevel__wrapper_2q53i_1",Re="_frlevel__left_2q53i_12",xe="_frlevel__canvas_2q53i_16",ke="_frlevel__fone_2q53i_23",Le="_frlevel__interface_2q53i_35",Ne="_frlevel__stats_2q53i_41",Ae="_frlevel__content_2q53i_46",be="_frlevel__actions_2q53i_54",Oe="_frlevel__field_2q53i_61",Ie="_frlevel__inner_2q53i_74",Ce="_frlevel__right_2q53i_79";const Ue=s({tasks:{fontFamily:"Verdana",fontSize:"16px",fontWeight:400,lineHeight:"20px",color:"#000",fontStyle:"italic"},title:{fontFamily:"GTrones",fontSize:"24px",lineHeight:"20px",letterSpacing:"1px",textAlign:"center",marginTop:"50px"},alert:{fontSize:"24px",marginTop:"30px",textAlign:"center"}}),Fe=s({tasks:{maxWidth:"400px",margin:"30px 0"}});class De{constructor(e,t){this.canvasWidth=e,this.canvasHeight=t,this.x=e-200,this.y=t-200,this.img="/src/assets/player.png",this.width=86,this.height=156,this.user=new Image,this.user.src=this.img}draw(e){e.drawImage(this.user,this.x,this.y,this.width,this.height)}clear(e){e.clearRect(this.x,this.y,this.x+this.width,this.y+this.height)}moveController(e){switch(e){case 1:this.moveFirst();break;case 2:this.moveSecond();break;case 3:this.moveThird();break;case 4:this.moveFourth();break;default:this.moveNull()}}moveNull(){this.x-=190,this.y-=100}moveFirst(){this.x-=40,this.y-=120}moveSecond(){this.y-=120,this.x+=220}moveThird(){this.y-=240,this.x+=50}moveFourth(){this.x-=100,this.y-=30,this.width=48,this.height=100}}const qe=(e,t)=>{let a=e.current.getContext("2d");a.mozImageSmoothingEnabled=!1,a.webkitImageSmoothingEnabled=!1,a.msImageSmoothingEnabled=!1,a.imageSmoothingEnabled=!1;let r=e.current.getBoundingClientRect().width,n=e.current.getBoundingClientRect().height,l=[{x:r-250,y:n-320},{x:r-400,y:n-450},{x:r-80,y:n-500},{x:r-220,y:n-730},{x:r-370,y:n-770}];a.clearRect(0,0,r,n);let s=new De(r,n);for(let o=0;o<t;o++){let e=new Image;e.src=o+1==t?"/src/assets/flagfull.png":"/src/assets/flagwin.png",a.drawImage(e,l[o].x,l[o].y,86,86),s.clear(a),s.moveController(o),s.draw(a)}},Ke=e=>({type:Y.GET_TASKS,payload:e}),Me=e=>({type:Y.SET_LEVEL,payload:e}),je=e=>({type:Y.SET_CURRENT_TASK,payload:e}),Ge=e=>({type:Y.SET_FINISHED,payload:e}),Be=e=>({type:Y.SET_ERROR,payload:e}),He=e=>({type:Y.GET_ERRORS,payload:e}),Pe=({answers:e,truthy:t,sendAnswer:a})=>{const[r,n]=o.useState([]),l=()=>n([...e,t].sort((()=>Math.random()-.5)));return o.useEffect((()=>{l()}),[]),o.useEffect((()=>{l()}),[t]),o.createElement(k,{component:"fieldset"},o.createElement(L,{component:"legend"},"Выберите верный вариант ответа:"),o.createElement(N,{onChange:e=>a(e.target.value)},r.map(((e,t)=>o.createElement(A,{value:e,key:e,control:o.createElement(b,{color:"primary"}),label:e})))))},Je=async()=>{try{return(await m.get("https://myoceanmathserver.herokuapp.com/tasks/level")).data}catch(e){console.log(e)}},ze=async(e,t)=>{try{await m.put("https://myoceanmathserver.herokuapp.com/users/save",{tasksList:e,userID:t.id})}catch(a){console.log(a)}};let We={tasksList:[],currentTask:null,currentLevel:1,isFinished:!1,isError:!1,errorsList:0};const Ve=()=>{const e=Ue(),t=u((e=>e.LevelReducer.errorsList));return o.createElement("div",null,o.createElement(v,{className:e.title,variant:"h3"},"Вы завершили выполнение всех заданий !"),t>0?o.createElement(E,{icon:!1,className:e.alert,variant:"filled",color:"error"},"Вы допустили ошибок: ",t):o.createElement(E,{icon:!1,className:e.alert,variant:"filled",color:"success"},"Вы не допустили ошибок !"))},$e=({tasksList:e,currentLevel:t,isLoader:a,currentTask:r,isFinished:n,userID:l,isError:s})=>{const i=o.useRef(null),c=o.useRef(null),[m,u]=o.useState(!1),[T,w]=o.useState(null),R=Ue();Fe();const x=V(),k=p();let L=d();o.useEffect((()=>{let e=null;const a=()=>{qe(i,t),e=window.requestAnimationFrame(a)};return a(),()=>window.cancelAnimationFrame(e)}),[]),o.useEffect((()=>{let e=null;const a=()=>{qe(i,t),e=window.requestAnimationFrame(a)};return a(),()=>window.cancelAnimationFrame(e)}),[t]),o.useEffect((()=>{a||window.scrollTo({behavior:"smooth",top:600})}),[a]),o.useEffect((()=>{console.log(c.current),w(null)}),[t]);const N=e=>k(((e,t,a,r)=>async n=>{if(e==t){let e=sessionStorage.getItem("tasks");if(n(Be(!1)),null!=JSON.parse(e)[a])sessionStorage.setItem("level",String(a+1)),n(je(JSON.parse(e)[a])),n(Me(a+1));else{let t=window.sessionStorage.getItem("mistakes");null!=t&&n(He(JSON.parse(t))),sessionStorage.setItem("isFinished",JSON.stringify(!0)),n(Ge(!0)),await ze(JSON.parse(e),r)}}else{let e=sessionStorage.getItem("mistakes");null!=e?sessionStorage.setItem("mistakes",String(parseInt(e)+1)):sessionStorage.setItem("mistakes",String(1)),n(Be(!0))}})(e,r.answer,t,l));return o.createElement(o.Fragment,null,o.createElement(_,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:m,onClose:()=>u(!1),closeAfterTransition:!0,BackdropComponent:g,BackdropProps:{timeout:500},className:x.modal},o.createElement(y,{in:m},o.createElement(S,{className:x.cardImageBackground},o.createElement(f,null,o.createElement("img",{className:x.cardImage,src:"https://myoceanmathserver.herokuapp.com/files/"+r.src,alt:""}))))),o.createElement("div",{className:we},o.createElement("div",{className:Re},o.createElement("canvas",{width:"450",height:"800",className:xe,id:"level-canvas",resize:"true",ref:i}),o.createElement("img",{className:ke,src:"/assets/fonegame.d6a5f2fe.jpg"})),o.createElement("div",{className:Le},o.createElement(S,{className:Ne},o.createElement(f,{className:Ae},o.createElement("h1",null,"Статистика"),n?o.createElement(Ve,null):o.createElement("div",{className:Ie},o.createElement("div",{className:Oe},o.createElement(v,{style:{paddingLeft:"50px",paddingTop:"70px"},variant:"h4"},r.title),o.createElement("p",{style:{paddingLeft:"50px"},className:R.tasks},r.text),o.createElement("img",{onDoubleClick:()=>u(!0),src:"https://myoceanmathserver.herokuapp.com/files/"+r.src,alt:""}),o.createElement("p",{style:{fontSize:"14px",marginLeft:"50px",cursor:"pointer",textDecoration:"underline"},onClick:()=>u(!0)},"Открыть в полном размере")),o.createElement("div",{className:Ce},null!=(null==r?void 0:r.otherSrc)?o.createElement("img",{src:"https://myoceanmathserver.herokuapp.com/files/"+r.otherSrc}):"",0==r.others.length?o.createElement(o.Fragment,null,o.createElement(h,{style:{margin:"20px 0"},placeholder:"Введите ответ",helperText:"Ответ должен быть числом",fullWidth:!0,onChange:e=>{return t=e.target.value,w(t);var t}}),o.createElement(J,{onClick:()=>N(T)},"Проверить")):o.createElement(Pe,{sendAnswer:N,answers:r.others,truthy:r.answer}),s?o.createElement(E,{style:{margin:"20px 0"},color:"error",variant:"filled"},"Неверный ответ !"):""))),o.createElement(O,{className:be},o.createElement(J,{onClick:()=>{window.sessionStorage.clear(),k({type:Y.CLEAR_TASKS}),L.push("/profile/"+l.id)}},"Завершить"))))))},Xe=()=>{const e=p(),t=d(),{tasksList:a,currentLevel:r,currentTask:n,isFinished:l,isError:s}=u((e=>e.LevelReducer)),i=u((e=>e.AuthReducer.tokenUser)),{isLoader:c}=u((e=>e.AuthReducer));return o.useEffect((()=>{me().then((e=>{e.isAuth||t.push("/")})),e((async e=>{let t=window.sessionStorage.getItem("tasks"),a=window.sessionStorage.getItem("level"),r=window.sessionStorage.getItem("mistakes"),n=window.sessionStorage.getItem("isFinished");if(JSON.parse(n)&&(e(Ge(!0)),null!=a&&e(Me(JSON.parse(a))),null!=r&&e(He(JSON.parse(r)))),null==t){let t=await Je();e(Ke(t)),e(je(t[0])),window.sessionStorage.setItem("tasks",JSON.stringify(t)),window.sessionStorage.setItem("level",JSON.stringify(1))}else e(Ke(JSON.parse(t))),e(je(JSON.parse(t)[JSON.parse(a-1)])),e(Me(JSON.parse(a)))}))}),[]),a.length>0&&null!=n?o.createElement($e,{isLoader:c,tasksList:a,currentTask:n,currentLevel:r,isFinished:l,userID:i,isError:s}):o.createElement("div",null,"loading....")},Qe=({item:e})=>o.createElement(S,{style:{marginBottom:"50px",maxWidth:"700px"}},o.createElement(f,{style:{display:"flex",justifyContent:"space-around",alignItems:"center"}},o.createElement(v,{variant:"h4"},e.title),o.createElement("img",{src:"https://myoceanmathserver.herokuapp.com/files/"+e.src,style:{maxWidth:"300px",objectFit:"cover"}}),o.createElement(E,{variant:"filled"},"Правильный ответ: ",e.answer)),o.createElement(O,null)),Ye=()=>{const e=I(),t=p(),a=d(),{user:r,isLoader:n,isNotUser:l,tasksList:s,isLoaderTasks:i}=u((e=>e.AuthReducer));o.useEffect((()=>{var a;t((a=e.id,async e=>{e(re(!0));let t=await ue(a);""==t?e(le(!0)):(e(le(!1)),e(te(t))),console.log(t),e(re(!1))}))}),[]);return n||l?l&&!n?o.createElement(E,{style:{marginTop:"50px"},severity:"error"},"Такого пользователя не существует !"):n?o.createElement(C,null):void 0:o.createElement(o.Fragment,null,o.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-around",flexWrap:"wrap"}},o.createElement(S,{style:{width:"400px",margin:"50px",textAlign:"center"}},o.createElement(f,null,o.createElement(v,{variant:"h3"},null==r?void 0:r.login),o.createElement(v,{variant:"h6"},null==r?void 0:r.email)),o.createElement(O,null,o.createElement(J,{onClick:()=>{t(he()),a.push("/")}},"Выйти"))),o.createElement("div",null,o.createElement(v,{style:{marginBottom:"20px"},variant:"h3"},"Выполнено заданий: ",null==r?void 0:r.tasks.length),o.createElement(W,{href:"/level"},o.createElement(J,null,"Приступить к прохождению")))),i?o.createElement(C,{style:{marginLeft:"50px"}}):o.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"20px"}},null!=s&&(null==s?void 0:s.length)>0?s.map(((e,t)=>o.createElement(Qe,{key:t,item:e}))):""))},Ze=()=>{const e=p();return o.useEffect((()=>{me().then((t=>{t.isAuth&&(e(ne({email:t.email,id:t.id})),e(Ee(t.id))),e(ae(t.isAuth))}))}),[]),o.createElement(Ye,null)};function et(){const e=p(),{isLoader:t}=u((e=>e.AuthReducer));return o.useEffect((()=>{me().then((t=>{t.isAuth&&e(ne({email:t.email,id:t.id})),e(ae(t.isAuth))}))}),[]),o.createElement(U,null,t?"":o.createElement(Se,null),o.createElement(F,null,o.createElement(D,{exact:!0,path:"/"},o.createElement(Te,null)),o.createElement(D,{path:"/profile/:id"},o.createElement(Ze,null)),o.createElement(D,{path:"/level"},o.createElement(Xe,null)),o.createElement(D,{path:"*"},o.createElement(fe,null))))}let tt={isModal:!1};const at=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;const rt=K(q({AuthReducer:(e=pe,t)=>{switch(t.type){case $.SET_USER:return l(l({},e),{user:t.payload});case $.SET_AUTH:return l(l({},e),{isAuth:t.payload});case $.SET_USER_TOKEN:return l(l({},e),{tokenUser:t.payload});case $.SET_LOADER:return l(l({},e),{isLoader:t.payload});case $.IS_NOT_USER:return l(l({},e),{isNotUser:t.payload});case $.LOGOUT_USER:return l(l({},e),{user:null,tokenUser:null,isAuth:!1});case $.SET_LOGIN_ERROR:return l(l({},e),{errorLogin:t.payload});case $.SET_FINISHED_TASKS:return l(l({},e),{tasksList:t.payload});case $.SET_LOADER_TASKS:return l(l({},e),{isLoaderTasks:t.payload});default:return l({},e)}},AppReducer:(e=tt,t)=>{switch(t.type){case Q.SET_MODAL:return l(l({},e),{isModal:t.payload});default:return l({},e)}},LevelReducer:(e=We,t)=>{switch(t.type){case Y.GET_TASKS:return l(l({},e),{tasksList:t.payload});case Y.SET_LEVEL:return l(l({},e),{currentLevel:t.payload});case Y.SET_CURRENT_TASK:return l(l({},e),{currentTask:t.payload});case Y.SET_FINISHED:return l(l({},e),{isFinished:t.payload});case Y.CLEAR_TASKS:return l(l({},e),{isFinished:!1,currentTask:1,tasksList:[]});case Y.SET_ERROR:return l(l({},e),{isError:t.payload});case Y.GET_ERRORS:return l(l({},e),{errorsList:t.payload});default:return l({},e)}}}),at(M(j)));G.render(o.createElement(B,{store:rt},o.createElement(et,null)),document.getElementById("root"));
