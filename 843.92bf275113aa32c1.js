"use strict";(self.webpackChunkfCineClub=self.webpackChunkfCineClub||[]).push([[843],{4843:(N,g,c)=>{c.r(g),c.d(g,{PeliculasModule:()=>E});var u=c(6895),s=c(646),e=c(1571),d=c(1738),_=c(9646);let m=(()=>{var i;class r{constructor(){}getByName(o){return(0,_.of)(d.l.find(n=>n.nombre==o))}}return(i=r).\u0275fac=function(o){return new(o||i)},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),r})(),b=(()=>{var i;class r{constructor(){this.valoracion=0,this.cantpintar=""}ngOnInit(){this.pintar()}pintar(){this.cantpintar=this.valoracion/5+"%",console.log(this.cantpintar)}}return(i=r).\u0275fac=function(o){return new(o||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-valuacion"]],inputs:{valoracion:"valoracion"},decls:7,vars:2,consts:[[2,"width","90px"],[1,"d-flex","text-warning","overflow-hidden"],[1,"fa-regular","fa-star"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"i",2)(3,"i",2)(4,"i",2)(5,"i",2)(6,"i",2),e.qZA()()),2&o&&(e.xp6(1),e.Udp("width",n.cantpintar))}}),r})();function f(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div",20),e._UZ(1,"iframe",21),e.TgZ(2,"div",22)(3,"button",23),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.showTriler())}),e._uU(4," X Cerrar "),e.qZA()()()}}function v(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div")(1,"div",1),e._UZ(2,"img",2)(3,"div",3),e.qZA(),e.TgZ(4,"div",4)(5,"div",5)(6,"div",6)(7,"h2"),e._uU(8),e.qZA()(),e.TgZ(9,"div",7)(10,"div",8),e._UZ(11,"img",9),e.qZA(),e.TgZ(12,"div",10)(13,"div"),e._UZ(14,"app-valuacion",11),e.TgZ(15,"p",12),e._uU(16),e.qZA(),e.TgZ(17,"p"),e._uU(18),e.qZA()(),e.TgZ(19,"div")(20,"p"),e._uU(21," G\xe9neros: Drama, Suspenso. "),e._UZ(22,"br"),e._uU(23," Elenco: Actores, Directores. "),e._UZ(24,"br"),e._uU(25),e.ALo(26,"date"),e.qZA()(),e.TgZ(27,"div")(28,"button",13),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.showTriler())}),e._uU(29," Ver trailer "),e.qZA()()()(),e._UZ(30,"br"),e.YNc(31,f,5,0,"div",14),e._UZ(32,"br"),e.TgZ(33,"div",15)(34,"div",16)(35,"h2",17),e._uU(36,"Ver Pel\xedcula"),e.qZA()(),e.TgZ(37,"div",18),e._UZ(38,"iframe",19),e.qZA()()()()()}if(2&i){const t=e.oxw();e.xp6(8),e.Oqu(null==t.peliSel?null:t.peliSel.nombre),e.xp6(3),e.Q6J("src",null==t.peliSel?null:t.peliSel.imagenPath,e.LSH),e.xp6(3),e.Q6J("valoracion",null==t.peliSel?null:t.peliSel.puntuacion),e.xp6(2),e.AsE(" Duraci\xf3n: ",null==t.peliSel?null:t.peliSel.duracion," min. | ",null==t.peliSel?null:t.peliSel.clasificacion," "),e.xp6(2),e.Oqu(null==t.peliSel?null:t.peliSel.descripcion),e.xp6(7),e.hij(" A\xf1o: ",e.xi3(26,8,null==t.peliSel?null:t.peliSel.fechaEstreno,"yyyy")," "),e.xp6(6),e.Q6J("ngIf",t.triler)}}function A(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div")(1,"div",26)(2,"div",6)(3,"div",27),e._UZ(4,"img",28),e.qZA(),e.TgZ(5,"div",29)(6,"div",30)(7,"h5",31),e._uU(8),e.qZA(),e.TgZ(9,"p",32)(10,"b"),e._uU(11,"Valoracion:"),e.qZA(),e._UZ(12,"app-valuacion",33)(13,"br"),e.TgZ(14,"b"),e._uU(15,"Duracion:"),e.qZA(),e._uU(16),e._UZ(17,"br"),e.TgZ(18,"b"),e._uU(19,"A\xf1o de estreno:"),e.qZA(),e._uU(20),e._UZ(21,"br"),e.TgZ(22,"b"),e._uU(23,"Clasificacion:"),e.qZA(),e._uU(24),e._UZ(25,"br"),e.TgZ(26,"b"),e._uU(27,"Elenco:"),e.qZA(),e._uU(28," Actores , directores "),e._UZ(29,"br"),e.TgZ(30,"b"),e._uU(31,"Nominaciones:"),e.qZA(),e._uU(32," Nominaciones y premios "),e.TgZ(33,"a",34),e._uU(34," Ver m\xe1s... "),e.qZA(),e._UZ(35,"br"),e.TgZ(36,"b"),e._uU(37,"Link del trailer: "),e.qZA(),e._uU(38),e._UZ(39,"br"),e.TgZ(40,"b"),e._uU(41,"Link del le pel\xedcula: "),e.qZA(),e._uU(42),e._UZ(43,"br"),e.TgZ(44,"b"),e._uU(45,"Foto de portada: "),e.qZA(),e.TgZ(46,"a",34),e._uU(47," Ver m\xe1s... "),e.qZA(),e._UZ(48,"br"),e.TgZ(49,"b"),e._uU(50,"Foto de cartelera: "),e.qZA(),e.TgZ(51,"a",34),e._uU(52," Ver m\xe1s... "),e.qZA(),e._UZ(53,"br"),e.TgZ(54,"b"),e._uU(55,"Generos:"),e.qZA(),e._uU(56," Drama, suspenso "),e._UZ(57,"br"),e.TgZ(58,"span",35)(59,"b"),e._uU(60,"Descripci\xf3n:"),e.qZA(),e._uU(61),e.qZA(),e.TgZ(62,"a",36),e._uU(63," Ver m\xe1s... "),e.qZA()()()()(),e.TgZ(64,"div",37)(65,"span"),e._uU(66),e.qZA(),e.TgZ(67,"small",38),e._uU(68," fecha: 22/04/2023 "),e.qZA()(),e._uU(69," F "),e.TgZ(70,"div",39)(71,"div",15)(72,"div",40)(73,"button",41),e.NdJ("click",function(){const a=e.CHM(t).$implicit,p=e.oxw(2);return e.KtG(p.publicar(a))}),e._UZ(74,"i"),e._uU(75),e.qZA(),e._uU(76," \xa0; "),e.TgZ(77,"button",42),e.NdJ("click",function(){const a=e.CHM(t).$implicit,p=e.oxw(2);return e.KtG(p.editar(a))}),e._UZ(78,"i",43),e._uU(79," Editar "),e.qZA(),e._uU(80," \xa0; "),e.TgZ(81,"button",44),e._UZ(82,"i",45),e._uU(83," Eliminar "),e.qZA()()()()()()}if(2&i){const t=r.$implicit;e.xp6(4),e.Q6J("src",t.imagenPath,e.LSH),e.xp6(4),e.Oqu(t.nombre),e.xp6(4),e.Q6J("valoracion",t.puntuacion),e.xp6(4),e.hij(" ",t.duracion," min. "),e.xp6(4),e.hij(" ",null==t.fechaEstreno?null:t.fechaEstreno.getFullYear()," "),e.xp6(4),e.hij(" ",t.clasificacion," "),e.xp6(14),e.hij(" ",t.linkTrailer," "),e.xp6(4),e.hij(" ",t.linkPelicula," "),e.xp6(19),e.hij(" ",t.descripcion," "),e.xp6(4),e.Gre("badge rounded-pill bg-",t.publicado?"success":"dark",""),e.xp6(1),e.hij(" ",t.publicado?"Disponible para el p\xfablico":"Oculto para el p\xfablico"," "),e.xp6(7),e.Gre(" btn btn-sm btn-",t.publicado?"dark":"success"," "),e.xp6(1),e.Gre("fa-regular fa-eye",t.publicado?"-slash":"",""),e.xp6(1),e.hij(" ",t.publicado?"Ocultar video":"Publicar video"," ")}}function U(i,r){if(1&i&&(e.TgZ(0,"div")(1,"div",24),e.YNc(2,A,84,20,"div",25),e.qZA()()),2&i){const t=e.oxw();e.xp6(2),e.Q6J("ngForOf",t.pelis)}}let Z=(()=>{var i;class r{constructor(o,n){this.route=o,this.peliculaService=n,this.triler=!1,this.ver="",this.emitPeli=new e.vpe,this.pelis=d.l.concat(d.l)}ngOnInit(){this.route.paramMap.subscribe(o=>{this.peliculaService.getByName(o.get("name")).subscribe(n=>this.peliSel=n)})}showTriler(){this.triler=!this.triler,this.triler?window.scrollBy(0,550):window.scrollBy(0,-550)}publicar(o){let n=this.pelis.find(a=>a.id==o.id);n&&(n.publicado=!n.publicado)}editar(o){this.emitPeli.emit(o)}}return(i=r).\u0275fac=function(o){return new(o||i)(e.Y36(s.gz),e.Y36(m))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-views-pelicula"]],inputs:{ver:"ver"},outputs:{emitPeli:"emitPeli"},decls:2,vars:2,consts:[[4,"ngIf"],[1,"position-absolute","start-0","top-0","h-100","w-100","overflow-hidden",2,"z-index","-1"],["src","./assets/img/slide-todasLasPistas_edited.jpg","alt","",1,"imgPortada"],[1,"back-1"],[1,"container-movieinfo"],[1,"container"],[1,"row"],[1,"row","gap-2"],[1,"col-8","col-md-4","col-lg-2"],["alt","",1,"img-fluid",3,"src"],[1,"col-11","col-md","col-lg-9"],[3,"valoracion"],[1,"fs-5"],["type","button",1,"btn","btn-sm","btn-primary",3,"click"],["class","d-flex justify-content-center",4,"ngIf"],[1,"row","justify-content-center"],[1,"bg-dark"],[1,"ms-5"],[1,"col-10","col-md-8",2,"height","400px"],["width","1520","height","538","src","https://www.youtube.com/embed/KrDKN86pgjI","title","El c\xf3digo enigma | Pel\xedcula completa","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share","allowfullscreen","",2,"width","100%","height","100%"],[1,"d-flex","justify-content-center"],["width","800","height","400","src","https://www.youtube.com/embed/A5surOEYLLo","title","El Verano Que Te Vimos (The Summer We Saw You - 2021) - Trailer - English Subtitles","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share","allowfullscreen",""],[1,""],["type","button",1,"btn","btn-unstyled","border-0","text-danger",3,"click"],[1,"row","row-cols-lg-1","g-4"],[4,"ngFor","ngForOf"],[1,"card"],[1,"col-md-4"],["alt","...",1,"img-fluid","rounded-start",3,"src"],[1,"col-md-8","position-relative"],[1,"card-body","text-dark"],[1,"card-title","fs-4"],[1,"card-text"],[1,"d-inline-block","ms-1",3,"valoracion"],["role","button","type","button",1,"link-primary"],[1,"d-inline-block","text-truncate",2,"width","65%"],["role","button","type","button",1,"align-top","link-primary"],[1,"position-absolute","end-0","top-0","mt-2","me-2","text-center","fs-5"],[1,"text-muted","d-block"],[1,"card-footer","bg-transparent","border-secondary"],[1,"col-auto"],["type","button",3,"click"],["type","button",1,"btn","btn-sm","btn-warning",3,"click"],[1,"fa-regular","fa-pen-to-square"],["type","button",1,"btn","btn-sm","btn-danger"],[1,"fa-solid","fa-trash-can"]],template:function(o,n){1&o&&(e.YNc(0,v,39,11,"div",0),e.YNc(1,U,3,1,"div",0)),2&o&&(e.Q6J("ngIf",""==n.ver),e.xp6(1),e.Q6J("ngIf","lista"==n.ver))},dependencies:[u.sg,u.O5,b,u.uU],styles:[".back-1[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;background:transparent linear-gradient(180deg,#00000000 40%,#000000 70%,#000000 90%,#000000 100%) 0% 0% no-repeat padding-box;opacity:1}.container-movieinfo[_ngcontent-%COMP%]{position:absolute;top:40%;width:100%}.imgPortada[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}@media screen and (max-width: 540px){.back-1[_ngcontent-%COMP%], .imgPortada[_ngcontent-%COMP%]{height:50vh}}"]}),r})();var l=c(433);function T(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div")(1,"form",11)(2,"div",12),e._UZ(3,"input",13),e.TgZ(4,"button",14),e._UZ(5,"i",15),e.qZA()()(),e.TgZ(6,"app-views-pelicula",16),e.NdJ("emitPeli",function(n){e.CHM(t);const a=e.oxw();return e.KtG(a.getPeliSel(n))}),e.qZA()()}}function h(i,r){1&i&&(e.TgZ(0,"form",17)(1,"fieldset")(2,"legend",18),e._uU(3,"Ficha t\xe9cnica"),e.qZA(),e.TgZ(4,"div",19)(5,"div",20)(6,"label",21),e._uU(7,"Nombre"),e.qZA(),e._UZ(8,"input",22),e.qZA(),e.TgZ(9,"div",23)(10,"label",24),e._uU(11,"Fecha de estreno"),e.qZA(),e._UZ(12,"input",25),e.qZA(),e.TgZ(13,"div",23)(14,"label",26),e._uU(15,"Duraci\xf3n"),e.qZA(),e._UZ(16,"input",27),e.TgZ(17,"small"),e._uU(18,"En minutos"),e.qZA()()(),e.TgZ(19,"div",19)(20,"div",28)(21,"label",29),e._uU(22,"G\xe9neros"),e.qZA(),e.TgZ(23,"div",30)(24,"select",31)(25,"option",32),e._uU(26,"G\xe9neros"),e.qZA(),e.TgZ(27,"option",33),e._uU(28,"Accion"),e.qZA(),e.TgZ(29,"option",34),e._uU(30,"Terror"),e.qZA(),e.TgZ(31,"option",35),e._uU(32,"Comedia"),e.qZA()(),e.TgZ(33,"button",36),e._UZ(34,"i",37),e.qZA()(),e.TgZ(35,"div"),e._uU(36," Se Agreg\xf3 "),e.TgZ(37,"ul")(38,"li"),e._uU(39," Terror "),e.TgZ(40,"button",38),e._UZ(41,"i",39),e.qZA()(),e.TgZ(42,"li"),e._uU(43," Drama "),e.TgZ(44,"button",38),e._UZ(45,"i",39),e.qZA()()()()(),e.TgZ(46,"div",20)(47,"label",40),e._uU(48,"Clasificaci\xf3n"),e.qZA(),e.TgZ(49,"div",30)(50,"select",41)(51,"option",32),e._uU(52,"Clasificaci\xf3n"),e.qZA(),e.TgZ(53,"option",33),e._uU(54,"+12"),e.qZA(),e.TgZ(55,"option",34),e._uU(56,"+14"),e.qZA(),e.TgZ(57,"option",35),e._uU(58,"APT"),e.qZA()(),e.TgZ(59,"button",36),e._UZ(60,"i",37),e.qZA()(),e.TgZ(61,"div"),e._uU(62," Se Agreg\xf3 "),e.TgZ(63,"ul")(64,"li"),e._uU(65," +14 "),e.TgZ(66,"button",38),e._UZ(67,"i",39),e.qZA()()()()()()(),e.TgZ(68,"div",19)(69,"fieldset")(70,"legend",42),e._uU(71,"Elenco"),e.qZA(),e.TgZ(72,"div",19)(73,"div",20)(74,"div",43)(75,"select",41)(76,"option",32),e._uU(77,"Seleccione tipo de elenco"),e.qZA(),e.TgZ(78,"option",33),e._uU(79,"Actor"),e.qZA(),e.TgZ(80,"option",34),e._uU(81,"Director"),e.qZA(),e.TgZ(82,"option",35),e._uU(83,"Productor"),e.qZA()(),e.TgZ(84,"button",36),e._UZ(85,"i",37),e.qZA()()(),e.TgZ(86,"div",20)(87,"div",43)(88,"select",44)(89,"option",32),e._uU(90,"Participante"),e.qZA(),e.TgZ(91,"option",33),e._uU(92,"Actor1"),e.qZA(),e.TgZ(93,"option",34),e._uU(94,"Actor2"),e.qZA(),e.TgZ(95,"option",35),e._uU(96,"Director1"),e.qZA(),e.TgZ(97,"option",45),e._uU(98,"Director2"),e.qZA(),e.TgZ(99,"option",46),e._uU(100,"Director3"),e.qZA(),e.TgZ(101,"option",47),e._uU(102,"Productor1"),e.qZA(),e.TgZ(103,"option",48),e._uU(104,"Productor2"),e.qZA(),e.TgZ(105,"option",49),e._uU(106,"Productor3"),e.qZA()(),e.TgZ(107,"button",36),e._UZ(108,"i",37),e.qZA()()(),e.TgZ(109,"div",20)(110,"button",50),e._UZ(111,"i",37),e._uU(112," Agregar "),e.qZA()()(),e.TgZ(113,"div"),e._uU(114," Se Agreg\xf3 "),e.TgZ(115,"ul")(116,"li"),e._uU(117," Director: Nombre del director "),e.TgZ(118,"button",38),e._UZ(119,"i",39),e.qZA()(),e.TgZ(120,"li"),e._uU(121," Productor: Nombre del productor "),e.TgZ(122,"button",38),e._UZ(123,"i",39),e.qZA()(),e.TgZ(124,"li"),e._uU(125," Actor: Nombre del actor "),e.TgZ(126,"button",38),e._UZ(127,"i",39),e.qZA()(),e.TgZ(128,"li"),e._uU(129," Actris: Nombre de la actriz "),e.TgZ(130,"button",38),e._UZ(131,"i",39),e.qZA()()()()()(),e.TgZ(132,"div",19)(133,"fieldset")(134,"legend",42),e._uU(135,"Nominaciones"),e.qZA(),e.TgZ(136,"div",19)(137,"div",20)(138,"div",43)(139,"select",31)(140,"option",32),e._uU(141,"Nominaciones"),e.qZA(),e.TgZ(142,"option",33),e._uU(143,"Nombre 1"),e.qZA(),e.TgZ(144,"option",34),e._uU(145,"Nombre 2"),e.qZA(),e.TgZ(146,"option",35),e._uU(147,"Nombre 3"),e.qZA()(),e.TgZ(148,"button",36),e._UZ(149,"i",37),e.qZA()()(),e.TgZ(150,"div",20)(151,"div",51),e._UZ(152,"input",52),e.TgZ(153,"span"),e._uU(154,"Ingrese el a\xf1o de la nominaci\xf3n"),e.qZA()()(),e.TgZ(155,"div",20)(156,"div",43)(157,"select",44)(158,"option",32),e._uU(159,"Resultado"),e.qZA(),e.TgZ(160,"option",33),e._uU(161,"Nominada"),e.qZA(),e.TgZ(162,"option",34),e._uU(163,"Ganadora"),e.qZA()(),e.TgZ(164,"button",36),e._UZ(165,"i",37),e.qZA()()(),e.TgZ(166,"div",20)(167,"button",50),e._UZ(168,"i",37),e._uU(169," Agregar "),e.qZA()()(),e.TgZ(170,"div"),e._uU(171," Se Agreg\xf3 "),e.TgZ(172,"ul")(173,"li"),e._uU(174," Oscar 2021: nominada "),e.TgZ(175,"button",38),e._UZ(176,"i",39),e.qZA()(),e.TgZ(177,"li"),e._uU(178," Globo de oro 2021: ganadora "),e.TgZ(179,"button",38),e._UZ(180,"i",39),e.qZA()()()()()(),e.TgZ(181,"fieldset")(182,"legend",42),e._uU(183,"Im\xe1genes y videos"),e.qZA(),e.TgZ(184,"div",51)(185,"label",53),e._uU(186,"Link del triler"),e.qZA(),e._UZ(187,"input",54),e.qZA(),e.TgZ(188,"div",51)(189,"label",55),e._uU(190,"Link de la pel\xedcula"),e.qZA(),e._UZ(191,"input",56),e.qZA(),e.TgZ(192,"div",51)(193,"label",57),e._uU(194,"Portada"),e.qZA(),e._UZ(195,"input",58),e.qZA(),e.TgZ(196,"div",51)(197,"label",59),e._uU(198,"Cartelera"),e.qZA(),e._UZ(199,"input",60),e.qZA()(),e.TgZ(200,"fieldset")(201,"legend",42),e._uU(202,"Informaci\xf3n adicional"),e.qZA(),e.TgZ(203,"div",51)(204,"label",61),e._uU(205,"Descripci\xf3n"),e.qZA(),e._UZ(206,"textarea",62),e.qZA()(),e.TgZ(207,"div",63)(208,"button",64),e._UZ(209,"i",65),e._uU(210," Cancelar "),e.qZA(),e.TgZ(211,"button",66),e._UZ(212,"i",67),e._uU(213," Guardar "),e.qZA()()())}let q=(()=>{var i;class r{constructor(o){this.router=o,this.optSel="L",this.opt={L:"listar",C:"consulta",A:"agregar",M:"modificar"}}ngOnInit(){}agregar(){this.optSel="A"}verRepo(){this.optSel="L"}getPeliSel(o){this.optSel="M",this.peliSel=o}close(){this.router.navigateByUrl("dashboard")}}return(i=r).\u0275fac=function(o){return new(o||i)(e.Y36(s.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-admin-peliculas"]],decls:16,vars:6,consts:[[1,"bg-dark","mt-3"],[1,"d-flex","justify-content-between","border-bottom"],["type","button","role","button",1,"btn-link","link-light",3,"click"],[1,"fa-solid","fa-x"],[1,"container-sm","my-3","bg-secondary","p-2","m-0"],[1,"nav","nav-pills","justify-content-end"],[1,"nav-item"],[1,"nav-link","text-white",3,"click"],["aria-current","page",1,"nav-link","text-white",3,"click"],[4,"ngIf"],["action","",4,"ngIf"],[1,"d-flex","justify-content-end","my-3"],[1,"input-group","input-group-sm",2,"width","300px"],["type","search","type","search","placeholder","Buscar pel\xedcula","aria-label","Buscar","aria-describedby","button-addon2",1,"form-control"],["type","button","id","button-addon2",1,"btn","btn-outline-success"],[1,"fa-solid","fa-magnifying-glass"],["ver","lista",3,"emitPeli"],["action",""],[1,"bg-dark","border-bottom"],[1,"row","mb-3"],[1,"col"],["for","nameMovie",1,"form-label"],["type","text","id","nameMovie","placeholder","Nombre",1,"form-control"],[1,"col-3"],["for","relaseMovie",1,"form-label"],["type","date","id","relaseMovie","placeholder","decha de lanzamiento",1,"form-control"],["for","lengthMovie",1,"form-label"],["type","text","id","lengthMovie","placeholder","Duracion en minutos",1,"form-control"],[1,"col","position-relative"],["for","",1,"form-label"],[1,"input-group","mb-3"],["id","selnominacion","aria-label","selnominacion",1,"form-select"],["selected",""],["value","1"],["value","2"],["value","3"],["type","button",1,"btn","btn-primary"],[1,"fa-solid","fa-plus"],[1,"btn","btn-sm","btn-unstyled","border-0","text-danger"],[1,"fa-solid","fa-trash-can"],[1,"form-label"],["id","selElenco","aria-label","selElencoType",1,"form-select"],[1,"bg-dark","mb-3"],[1,"input-group"],["id","selElenco","aria-label","selElencoName",1,"form-select"],["value","4"],["value","5"],["value","6"],["value","7"],["value","8"],[1,"btn","btn-primary"],[1,"mb-3"],["type","number","min","1900","max","2023","placeholder","a\xf1o",1,"form-control"],["for","linkTrailerMovie",1,"form-label"],["type","url","id","linkTrailerMovie","placeholder","link trailer",1,"form-control"],["for","linkMovie",1,"form-label"],["type","url","id","linkMovie","placeholder","link de la pelicula",1,"form-control"],["for","frontPageMovie",1,"form-label"],["type","file","id","frontPageMovie","placeholder","portada",1,"form-control"],["for","frontPageCartelera",1,"form-label"],["type","file","id","frontPageCartelera","placeholder","cartelera",1,"form-control"],["for","descriptionMovie",1,"form-label"],["id","descriptionMovie","rows","3",1,"form-control"],[1,"d-flex","justify-content-center","gap-3"],["type","button",1,"btn","btn-danger"],[1,"fa-solid","fa-xmark"],["type","button",1,"btn","btn-success"],[1,"fa-solid","fa-check"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"h3",1),e._uU(2,"Administraci\xf3n de pel\xedculas "),e.TgZ(3,"small")(4,"a",2),e.NdJ("click",function(){return n.close()}),e._UZ(5,"i",3),e.qZA()()()(),e.TgZ(6,"div",4)(7,"ul",5)(8,"li",6)(9,"button",7),e.NdJ("click",function(){return n.agregar()}),e._uU(10," Agregar pel\xedcula "),e.qZA()(),e.TgZ(11,"li",6)(12,"button",8),e.NdJ("click",function(){return n.verRepo()}),e._uU(13," Repositorio "),e.qZA()()()(),e.YNc(14,T,7,0,"div",9),e.YNc(15,h,214,0,"form",10)),2&o&&(e.xp6(9),e.ekj("active","A"==n.optSel),e.xp6(3),e.ekj("active","L"==n.optSel),e.xp6(2),e.Q6J("ngIf","L"==n.optSel),e.xp6(1),e.Q6J("ngIf","L"!=n.optSel))},dependencies:[u.O5,l._Y,l.YN,l.Kr,l.JL,l.F,Z]}),r})();const x=[{id:1,nombre:"Comedia"},{id:1,nombre:"Drama"},{id:1,nombre:"Ciencia ficci\xf3n"},{id:1,nombre:"Terror"}];let y=(()=>{var i;class r{constructor(){}get(){return(0,_.of)(x)}}return(i=r).\u0275fac=function(o){return new(o||i)},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),r})();function w(i,r){1&i&&(e.TgZ(0,"span",22),e._uU(1," Requerido. "),e.qZA())}const C=function(i){return{"is-invalid":i}};function k(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div",17)(1,"h4",13)(2,"u"),e._uU(3,"Agregar g\xe9nero"),e.qZA()(),e.TgZ(4,"form",18)(5,"div",19)(6,"div",12)(7,"div",20)(8,"label",21),e._uU(9,"Nombre"),e.qZA(),e.TgZ(10,"span",22),e._uU(11," *"),e.qZA(),e._UZ(12,"input",23),e.YNc(13,w,2,0,"span",24),e.qZA()(),e.TgZ(14,"div",25)(15,"button",26),e._uU(16," Aceptar "),e.qZA(),e._uU(17," \xa0 "),e.TgZ(18,"button",27),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.cancelar())}),e._uU(19," Cancelar "),e.qZA()()()()()}if(2&i){const t=e.oxw(2);e.xp6(4),e.Q6J("formGroup",t.fgGenero),e.xp6(8),e.Q6J("ngClass",e.VKq(3,C,(t.fgGenero.controls.nombre.touched||t.submitted)&&t.fgGenero.controls.nombre.errors)),e.xp6(1),e.Q6J("ngIf",(t.fgGenero.controls.nombre.touched||t.submitted)&&(null==t.fgGenero.controls.nombre.errors?null:t.fgGenero.controls.nombre.errors.required))}}function P(i,r){if(1&i&&(e.TgZ(0,"tr")(1,"td",28),e._uU(2),e.TgZ(3,"div",29)(4,"button",30),e._UZ(5,"i",31),e.qZA(),e.TgZ(6,"ul",32)(7,"li")(8,"button",33),e._UZ(9,"i",34),e._uU(10," Editar "),e.qZA()(),e.TgZ(11,"li")(12,"button",33),e._UZ(13,"i",35),e._uU(14," Eliminar "),e.qZA()()()()()()),2&i){const t=r.$implicit;e.xp6(2),e.hij(" ",t.nombre," ")}}function S(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div")(1,"div",1)(2,"h3",2),e._uU(3,"Administraci\xf3n de g\xe9neros de pel\xedculas "),e.TgZ(4,"small")(5,"a",3),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.close())}),e._UZ(6,"i",4),e.qZA()()()(),e.TgZ(7,"div",5)(8,"ul",6)(9,"li",7)(10,"button",8),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.agregar())}),e._uU(11," Agregar G\xe9nero "),e.qZA()(),e.TgZ(12,"li",7)(13,"button",9),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.verGeneros())}),e._uU(14," Listar G\xe9neros "),e.qZA()()()(),e.TgZ(15,"div",10),e.YNc(16,k,20,5,"div",11),e.TgZ(17,"div",12)(18,"h4",13)(19,"u"),e._uU(20,"Lista de g\xe9neros"),e.qZA()(),e.TgZ(21,"div",14)(22,"table",15)(23,"thead")(24,"tr")(25,"th"),e._uU(26,"Nombre"),e.qZA()()(),e.TgZ(27,"tbody"),e.YNc(28,P,15,1,"tr",16),e.qZA()()()()()()}if(2&i){const t=e.oxw();e.xp6(10),e.ekj("active","A"==t.optSel),e.xp6(3),e.ekj("active","L"==t.optSel),e.xp6(3),e.Q6J("ngIf","L"!=t.optSel),e.xp6(12),e.Q6J("ngForOf",t.generos)}}const G=[{path:"ver/:name",component:Z},{path:"adminPeliculas",component:q},{path:"adminGeneros",component:(()=>{var i;class r{constructor(o,n,a){this.fb=o,this.generosServices=n,this.router=a,this.optSel="L",this.opSelOut="",this.submitted=!1}ngOnInit(){this.fgGenero=this.fb.group({id:null,nombre:["",l.kI.required],activo:!0}),this.generosServices.get().subscribe(o=>this.generos=o)}agregar(){this.optSel="A"}verGeneros(){this.optSel="L"}getPeliSel(o){this.optSel="M"}cancelar(){this.optSel="L"}close(){this.router.navigateByUrl("dashboard")}}return(i=r).\u0275fac=function(o){return new(o||i)(e.Y36(l.qu),e.Y36(y),e.Y36(s.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-admin-generos"]],inputs:{opSelOut:"opSelOut"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"bg-dark","mt-3"],[1,"d-flex","justify-content-between","border-bottom"],["type","button","role","button",1,"btn-link","link-light",3,"click"],[1,"fa-solid","fa-x"],[1,"container-sm","my-3","bg-secondary","p-2"],[1,"nav","nav-pills","justify-content-end"],[1,"nav-item"],[1,"nav-link","text-white",3,"click"],["aria-current","page",1,"nav-link","text-white",3,"click"],[1,"row"],["class","col border-end border-ligth",4,"ngIf"],[1,"col"],[1,"text-center"],[1,"table-responsive"],[1,"table","table-dark","table-hover"],[4,"ngFor","ngForOf"],[1,"col","border-end","border-ligth"],[3,"formGroup"],[1,"row","mb-3"],[1,"mb-3"],["for","nombreGenero",1,"form-label"],[1,"text-danger"],["type","text","id","nombreGenero","placeholder","Nombre","formControlName","nombre",1,"form-control",3,"ngClass"],["class","text-danger",4,"ngIf"],[1,"d-flex","justify-content-center"],["type","button",1,"btn","btn-sm","btn-success"],["type","button",1,"btn","btn-sm","btn-danger",3,"click"],[1,"d-flex","justify-content-between"],[1,"btn-group","dropstart"],["type","button","id","dropdownMenuConfig","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-link","link-light"],[1,"fa-solid","fa-sliders"],["aria-labelledby","dropdownMenuConfig",1,"dropdown-menu"],[1,"dropdown-item"],[1,"fa-regular","fa-pen-to-square","text-warning"],[1,"fa-regular","fa-trash-can","text-danger"]],template:function(o,n){1&o&&e.YNc(0,S,29,6,"div",0),2&o&&e.Q6J("ngIf",""==n.opSelOut)},dependencies:[u.mk,u.sg,u.O5,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u],styles:[".index-over[_ngcontent-%COMP%]{z-index:1200}"]}),r})()}];let F=(()=>{var i;class r{}return(i=r).\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[s.Bz.forChild(G),s.Bz]}),r})(),E=(()=>{var i;class r{}return(i=r).\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[u.ez,l.UX,l.u5,F]}),r})()}}]);