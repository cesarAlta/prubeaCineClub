"use strict";(self.webpackChunkfCineClub=self.webpackChunkfCineClub||[]).push([[104],{104:(g,r,a)=>{a.r(r),a.d(r,{PeliculasModule:()=>m});var u=a(895),c=a(199),e=a(256);function d(i,t){if(1&i){const l=e.EpF();e.TgZ(0,"div",20),e._UZ(1,"iframe",21),e.TgZ(2,"div",22)(3,"button",23),e.NdJ("click",function(){e.CHM(l);const n=e.oxw();return e.KtG(n.showTriler())}),e._uU(4," X Cerrar "),e.qZA()()()}}const s=[{path:"",children:[{path:"pelicula",component:(()=>{var i;class t{constructor(){this.triler=!1}ngOnInit(){}showTriler(){this.triler=!this.triler,this.triler?window.scrollBy(0,550):window.scrollBy(0,-550)}}return(i=t).\u0275fac=function(o){return new(o||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-views-pelicula"]],decls:30,vars:1,consts:[[1,"bg-dark","mt-2",2,"width","100%","height","30px"],["aria-label","breadcrumb "],[1,"breadcrumb","ms-3"],[1,"breadcrumb-item"],["href","#"],["aria-current","page",1,"breadcrumb-item","active"],[1,"container-md","my-3"],[1,"row","justify-content-center","mb-3"],[1,"col-lg-4"],[2,"max-width","300px","height","auto"],["src","../../../../../assets/img/santiago-italia.jpg","alt","",1,"img-fluid"],["type","button",1,"btn","btn-outline-info",3,"click"],[1,"fa-solid","fa-film"],["class","d-flex justify-content-center",4,"ngIf"],[1,"container-fluid"],[1,"row","justify-content-center"],[1,"bg-dark"],[1,"ms-5"],[1,"col-8",2,"height","400px"],["width","1520","height","538","src","https://www.youtube.com/embed/KrDKN86pgjI","title","El c\xf3digo enigma | Pel\xedcula completa","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share","allowfullscreen","",2,"width","100%","height","100%"],[1,"d-flex","justify-content-center"],["width","800","height","400","src","https://www.youtube.com/embed/A5surOEYLLo","title","El Verano Que Te Vimos (The Summer We Saw You - 2021) - Trailer - English Subtitles","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share","allowfullscreen",""],[1,""],["type","button",1,"btn","btn-unstyled","border-0","text-danger",3,"click"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"nav",1)(2,"ol",2)(3,"li",3)(4,"a",4),e._uU(5,"Home"),e.qZA()(),e.TgZ(6,"li",5),e._uU(7,"pelicula"),e.qZA()()()(),e.TgZ(8,"div",6)(9,"div",7)(10,"div",8)(11,"div",9),e._UZ(12,"img",10),e.qZA()(),e.TgZ(13,"div",8)(14,"h3"),e._uU(15,"Descripci\xf3n"),e.qZA(),e.TgZ(16,"p"),e._uU(17," (Santiago, Italia, Italia, 2018, DCP, 80\u2019, AM13) Documental dirigido por Nanni Moretti Existe una historia poco conocida sobre el papel de Italia durante un momento crucial en la historia chilena, en concreto tras el derrocamiento del gobierno democr\xe1tico de Salvador Allende en septiembre de 1973. Entremezclando im\xe1genes de archivo de los a\xf1os 70 con entrevistas registradas durante doce d\xedas en el a\xf1o 2017, el documental reconstruye el papel de la embajada italiana en Santiago de Chile en los meses siguientes al golpe de Estado de 1973, en particular como asilo para cientos de refugiados opositores a la dictadura militar de Augusto Pinochet, ofreci\xe9ndoles la posibilidad de ayudarlos a abandonar el pa\xeds. 2018: Premios David di Donatello: Mejor documental 2019: Festival de Gij\xf3n: Secci\xf3n oficial Martes 29/8, 18:00 hs. "),e.qZA(),e.TgZ(18,"div")(19,"button",11),e.NdJ("click",function(){return n.showTriler()}),e._UZ(20,"i",12),e._uU(21," Ver trailer "),e.qZA()()()(),e.YNc(22,d,5,0,"div",13),e.qZA(),e.TgZ(23,"div",14)(24,"div",15)(25,"div",16)(26,"h2",17),e._uU(27,"Pelicula"),e.qZA()(),e.TgZ(28,"div",18),e._UZ(29,"iframe",19),e.qZA()()()),2&o&&(e.xp6(22),e.Q6J("ngIf",n.triler))},dependencies:[u.O5]}),t})()},{path:"adminPeliculas",component:(()=>{var i;class t{}return(i=t).\u0275fac=function(o){return new(o||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-admin-peliculas"]],decls:216,vars:0,consts:[[1,"bg-dark","mt-2",2,"width","100%","height","30px"],["aria-label","breadcrumb "],[1,"breadcrumb","ms-3"],[1,"breadcrumb-item"],["href","#"],["aria-current","page",1,"breadcrumb-item","active"],[1,"ms-3","mt-3","bg-dark"],[1,"container-sm","my-3"],[1,"bg-dark"],[1,"mb-3"],["for","nameMovie",1,"form-label"],["type","text","id","nameMovie","placeholder","Nombre",1,"form-control"],[1,"row","mb-3"],[1,"col"],["for","",1,"form-label"],[1,"input-group"],["id","selnominacion","aria-label","selnominacion",1,"form-select"],["selected",""],["value","1"],["value","2"],["value","3"],["type","button",1,"btn","btn-primary"],[1,"fa-solid","fa-plus"],["for","relaseMovie",1,"form-label"],["type","date","id","relaseMovie","placeholder","decha de lanzamiento",1,"form-control"],["for","lengthMovie",1,"form-label"],["type","text","id","lengthMovie","placeholder","Duracion en minutos",1,"form-control"],[1,"form-label"],["id","selElenco","aria-label","selElencoType",1,"form-select"],[1,"btn","btn-sm","btn-unstyled","border-0","text-danger"],[1,"fa-solid","fa-trash-can"],[1,"bg-dark","mb-3"],["id","selElenco","aria-label","selElencoName",1,"form-select"],["value","4"],["value","5"],["value","6"],["value","7"],["value","8"],[1,"btn","btn-primary"],["type","number","min","1900","max","2023","placeholder","a\xf1o",1,"form-control"],["for","linkTrailerMovie",1,"form-label"],["type","url","id","linkTrailerMovie","placeholder","link trailer",1,"form-control"],["for","linkMovie",1,"form-label"],["type","url","id","linkMovie","placeholder","link de la pelicula",1,"form-control"],["for","frontPageMovie",1,"form-label"],["type","file","id","frontPageMovie","placeholder","portada",1,"form-control"],["for","descriptionMovie",1,"form-label"],["id","descriptionMovie","rows","3",1,"form-control"],[1,"d-flex","justify-content-center","gap-3"],["type","button",1,"btn","btn-danger"],[1,"fa-solid","fa-xmark"],["type","button",1,"btn","btn-success"],[1,"fa-solid","fa-check"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"nav",1)(2,"ol",2)(3,"li",3)(4,"a",4),e._uU(5,"Home"),e.qZA()(),e.TgZ(6,"li",5),e._uU(7,"adminPeliculas"),e.qZA()()()(),e.TgZ(8,"div",6)(9,"h3"),e._uU(10,"Administracion"),e.qZA()(),e.TgZ(11,"div",7)(12,"h4"),e._uU(13,"Agregar nueva pelicula"),e.qZA(),e._UZ(14,"hr"),e.TgZ(15,"fieldset")(16,"legend",8),e._uU(17,"Datos de la pelicula"),e.qZA(),e.TgZ(18,"div",9)(19,"label",10),e._uU(20,"Nombre"),e.qZA(),e._UZ(21,"input",11),e.qZA(),e.TgZ(22,"div",12)(23,"div",13)(24,"label",14),e._uU(25,"Generos"),e.qZA(),e.TgZ(26,"div",15)(27,"select",16)(28,"option",17),e._uU(29,"Generos"),e.qZA(),e.TgZ(30,"option",18),e._uU(31,"Accion"),e.qZA(),e.TgZ(32,"option",19),e._uU(33,"Terror"),e.qZA(),e.TgZ(34,"option",20),e._uU(35,"Comedia"),e.qZA()(),e.TgZ(36,"button",21),e._UZ(37,"i",22),e.qZA()()(),e.TgZ(38,"div",13)(39,"label",23),e._uU(40,"Fecha de estreno"),e.qZA(),e._UZ(41,"input",24),e.qZA(),e.TgZ(42,"div",13)(43,"label",25),e._uU(44,"Duracion"),e.qZA(),e._UZ(45,"input",26),e.TgZ(46,"small"),e._uU(47,"En minutos"),e.qZA()(),e.TgZ(48,"div",13)(49,"label",27),e._uU(50,"Clasificaion"),e.qZA(),e.TgZ(51,"div",15)(52,"select",28)(53,"option",17),e._uU(54,"Clasificaion"),e.qZA(),e.TgZ(55,"option",18),e._uU(56,"+12"),e.qZA(),e.TgZ(57,"option",19),e._uU(58,"+14"),e.qZA(),e.TgZ(59,"option",20),e._uU(60,"APT"),e.qZA()(),e.TgZ(61,"button",21),e._UZ(62,"i",22),e.qZA()()()(),e.TgZ(63,"div"),e._uU(64," Se Agrego "),e.TgZ(65,"ul")(66,"li"),e._uU(67," Terror "),e.TgZ(68,"button",29),e._UZ(69,"i",30),e.qZA()(),e.TgZ(70,"li"),e._uU(71," Drama "),e.TgZ(72,"button",29),e._UZ(73,"i",30),e.qZA()()()()(),e.TgZ(74,"div",12)(75,"fieldset")(76,"legend",31),e._uU(77,"Elenco"),e.qZA(),e.TgZ(78,"div",12)(79,"div",13)(80,"div",15)(81,"select",28)(82,"option",17),e._uU(83,"Seleccione tipo de elenco"),e.qZA(),e.TgZ(84,"option",18),e._uU(85,"Actor"),e.qZA(),e.TgZ(86,"option",19),e._uU(87,"Director"),e.qZA(),e.TgZ(88,"option",20),e._uU(89,"Productor"),e.qZA()(),e.TgZ(90,"button",21),e._UZ(91,"i",22),e.qZA()()(),e.TgZ(92,"div",13)(93,"div",15)(94,"select",32)(95,"option",17),e._uU(96,"Participante"),e.qZA(),e.TgZ(97,"option",18),e._uU(98,"Actor1"),e.qZA(),e.TgZ(99,"option",19),e._uU(100,"Actor2"),e.qZA(),e.TgZ(101,"option",20),e._uU(102,"Director1"),e.qZA(),e.TgZ(103,"option",33),e._uU(104,"Director2"),e.qZA(),e.TgZ(105,"option",34),e._uU(106,"Director3"),e.qZA(),e.TgZ(107,"option",35),e._uU(108,"Productor1"),e.qZA(),e.TgZ(109,"option",36),e._uU(110,"Productor2"),e.qZA(),e.TgZ(111,"option",37),e._uU(112,"Productor3"),e.qZA()(),e.TgZ(113,"button",21),e._UZ(114,"i",22),e.qZA()()(),e.TgZ(115,"div",13)(116,"button",38),e._UZ(117,"i",22),e._uU(118," A\xf1adir "),e.qZA()()(),e.TgZ(119,"div"),e._uU(120," Se Agrego "),e.TgZ(121,"ul")(122,"li"),e._uU(123," Director: Nombre del director "),e.TgZ(124,"button",29),e._UZ(125,"i",30),e.qZA()(),e.TgZ(126,"li"),e._uU(127," Productor: Nombre del productor "),e.TgZ(128,"button",29),e._UZ(129,"i",30),e.qZA()(),e.TgZ(130,"li"),e._uU(131," Actor: Nombre del actor "),e.TgZ(132,"button",29),e._UZ(133,"i",30),e.qZA()(),e.TgZ(134,"li"),e._uU(135," Actris: Nombre de la actris "),e.TgZ(136,"button",29),e._UZ(137,"i",30),e.qZA()()()()()(),e.TgZ(138,"div",12)(139,"fieldset")(140,"legend",31),e._uU(141,"Nominaciones"),e.qZA(),e.TgZ(142,"div",12)(143,"div",13)(144,"div",15)(145,"select",16)(146,"option",17),e._uU(147,"Nominaciones"),e.qZA(),e.TgZ(148,"option",18),e._uU(149,"Nombre 1"),e.qZA(),e.TgZ(150,"option",19),e._uU(151,"Nombre 2"),e.qZA(),e.TgZ(152,"option",20),e._uU(153,"Nombre 3"),e.qZA()(),e.TgZ(154,"button",21),e._UZ(155,"i",22),e.qZA()()(),e.TgZ(156,"div",13)(157,"div",9),e._UZ(158,"input",39),e.TgZ(159,"span"),e._uU(160,"Ingrese el a\xf1o de la nominacion"),e.qZA()()(),e.TgZ(161,"div",13)(162,"div",15)(163,"select",32)(164,"option",17),e._uU(165,"Resultado"),e.qZA(),e.TgZ(166,"option",18),e._uU(167,"Nominada"),e.qZA(),e.TgZ(168,"option",19),e._uU(169,"Ganadora"),e.qZA()(),e.TgZ(170,"button",21),e._UZ(171,"i",22),e.qZA()()(),e.TgZ(172,"div",13)(173,"button",38),e._UZ(174,"i",22),e._uU(175," A\xf1adir "),e.qZA()()(),e.TgZ(176,"div"),e._uU(177," Se Agrego "),e.TgZ(178,"ul")(179,"li"),e._uU(180," Oscar 2021: nominada "),e.TgZ(181,"button",29),e._UZ(182,"i",30),e.qZA()(),e.TgZ(183,"li"),e._uU(184," Globo de oro 2021: ganadora "),e.TgZ(185,"button",29),e._UZ(186,"i",30),e.qZA()()()()()(),e.TgZ(187,"fieldset")(188,"legend",31),e._uU(189,"Imagenes y videos"),e.qZA(),e.TgZ(190,"div",9)(191,"label",40),e._uU(192,"Link del triler"),e.qZA(),e._UZ(193,"input",41),e.qZA(),e.TgZ(194,"div",9)(195,"label",42),e._uU(196,"Link de la pelicula"),e.qZA(),e._UZ(197,"input",43),e.qZA(),e.TgZ(198,"div",9)(199,"label",44),e._uU(200,"Portada"),e.qZA(),e._UZ(201,"input",45),e.qZA()(),e.TgZ(202,"fieldset")(203,"legend",31),e._uU(204,"Informacion adicional"),e.qZA(),e.TgZ(205,"div",9)(206,"label",46),e._uU(207,"Descripcion"),e.qZA(),e._UZ(208,"textarea",47),e.qZA()(),e.TgZ(209,"div",48)(210,"button",49),e._UZ(211,"i",50),e._uU(212," Cancelar"),e.qZA(),e.TgZ(213,"button",51),e._UZ(214,"i",52),e._uU(215," Guardar"),e.qZA()()())}}),t})()}]}];let Z=(()=>{var i;class t{}return(i=t).\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[c.Bz.forChild(s),c.Bz]}),t})(),m=(()=>{var i;class t{}return(i=t).\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[u.ez,Z]}),t})()}}]);