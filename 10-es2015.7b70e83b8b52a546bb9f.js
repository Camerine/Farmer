(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{p1jS:function(e,t,i){"use strict";i.r(t),i.d(t,"PredictiveModule",function(){return m});var a=i("SVse"),r=i("s7LF"),b=i("2ZVE"),c=i("LqlI"),n=i("iInd"),o=i("NwxT"),s=i("PSD3"),l=i.n(s),d=i("8Y7J");function u(e,t){if(1&e&&(d.Rb(0,"tr"),d.Rb(1,"td"),d.uc(2),d.Qb(),d.Rb(3,"td"),d.uc(4),d.Qb(),d.Rb(5,"td"),d.uc(6),d.Qb(),d.Rb(7,"td"),d.uc(8),d.Qb(),d.Rb(9,"td"),d.uc(10),d.Qb(),d.Qb()),2&e){const e=t.$implicit;d.zb(2),d.vc(e.created_at),d.zb(2),d.vc(e.name),d.zb(2),d.vc(e.cause),d.zb(2),d.vc(e.symptoms),d.zb(2),d.vc(e.solution)}}const p=[{path:"",data:{title:"Predictive"},children:[{path:"",redirectTo:"login"},{path:"search",component:(()=>{class e{constructor(e,t){this.formBuilder=e,this._authService=t}ngOnInit(){this.uploadform=this.formBuilder.group({profile:[""]})}onFileSelects(e){if(e.target.files.length>0){const t=e.target.files[0];this.uploadform.get("profile").setValue(t)}}onFileSelect(e){e.target.files&&e.target.files.length&&(console.log("File---\x3e ",e.target.files[0]),this.files=e.target.files[0])}preview(e){if(0===e.length)return;if(null==e[0].type.match(/image\/*/))return void console.log("Only images are supported.");const t=new FileReader;this.imagePath=e,t.readAsDataURL(e[0]),t.onload=e=>{this.form_image=t.result}}analyze(e){this._authService.uploadImage("predictimage",this.uploadform).subscribe(e=>{"success"===e.status?l.a.fire("Success",e.description,"success"):l.a.fire("Failed","Error: Detecting Disease","error")},e=>{l.a.fire("Failed","Detecting Disease "+e,"error")})}}return e.\u0275fac=function(t){return new(t||e)(d.Lb(r.b),d.Lb(o.a))},e.\u0275cmp=d.Fb({type:e,selectors:[["ng-component"]],decls:21,vars:1,consts:[[1,"animated","fadeIn"],[1,"row"],[1,"col-md-12","mb-4"],[1,"col-sm-12"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"was-validated",3,"formGroup"],[1,"form-group"],["for","price"],["type","file","name","profile",3,"change"],[1,"card-footer"],["type","submit",1,"btn","btn-sm","btn-primary",3,"click"],[1,"fa","fa-dot-circle-o"]],template:function(e,t){1&e&&(d.Rb(0,"div",0),d.Rb(1,"div",1),d.Rb(2,"div",2),d.Rb(3,"div",3),d.Rb(4,"div",4),d.Rb(5,"div",5),d.Rb(6,"strong"),d.uc(7,"Search "),d.Qb(),d.Rb(8,"small"),d.uc(9,"Pest & Diseases"),d.Qb(),d.Qb(),d.Rb(10,"div",6),d.Rb(11,"form",7),d.Rb(12,"div",8),d.Rb(13,"label",9),d.uc(14,"Upload a picture of the plant and get immediate results! "),d.Qb(),d.Rb(15,"div"),d.Rb(16,"input",10),d.Yb("change",function(e){return t.onFileSelects(e)}),d.Qb(),d.Qb(),d.Qb(),d.Rb(17,"div",11),d.Rb(18,"button",12),d.Yb("click",function(){return t.analyze(t.uploadform.value)}),d.Mb(19,"i",13),d.uc(20," Analyze"),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Qb()),2&e&&(d.zb(11),d.gc("formGroup",t.uploadform))},directives:[r.n,r.h,r.d],encapsulation:2}),e})(),data:{title:"Pest & Diseases"}},{path:"previous",component:(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d.Fb({type:e,selectors:[["ng-component"]],decls:34,vars:1,consts:[[1,"animated","fadeIn"],[1,"row"],[1,"col-md-12","mb-4"],[1,"col-sm-12"],[1,"card"],[1,"card-header"],[1,"fa","fa-align-justify"],[1,"card-body"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],[1,"pagination"],[1,"page-item"],["href","#",1,"page-link"],[1,"page-item","active"]],template:function(e,t){1&e&&(d.Rb(0,"div",0),d.Rb(1,"div",1),d.Rb(2,"div",2),d.Rb(3,"div",3),d.Rb(4,"div",4),d.Rb(5,"div",5),d.Mb(6,"i",6),d.uc(7," Strain Search References "),d.Qb(),d.Rb(8,"div",7),d.Rb(9,"table",8),d.Rb(10,"thead"),d.Rb(11,"tr"),d.Rb(12,"th"),d.uc(13,"Date"),d.Qb(),d.Rb(14,"th"),d.uc(15,"Disease Name"),d.Qb(),d.Rb(16,"th"),d.uc(17,"Cause"),d.Qb(),d.Rb(18,"th"),d.uc(19,"Symptoms"),d.Qb(),d.Rb(20,"th"),d.uc(21,"Solution"),d.Qb(),d.Qb(),d.Qb(),d.Rb(22,"tbody"),d.tc(23,u,11,5,"tr",9),d.Qb(),d.Qb(),d.Rb(24,"ul",10),d.Rb(25,"li",11),d.Rb(26,"a",12),d.uc(27,"Prev"),d.Qb(),d.Qb(),d.Rb(28,"li",13),d.Rb(29,"a",12),d.uc(30,"1"),d.Qb(),d.Qb(),d.Rb(31,"li",11),d.Rb(32,"a",12),d.uc(33,"Next"),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Qb()),2&e&&(d.zb(23),d.gc("ngForOf",t.response_data))},directives:[a.j],encapsulation:2}),e})(),data:{title:"Pest & Diseases"}}]}];let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.Jb({type:e}),e.\u0275inj=d.Ib({imports:[[n.g.forChild(p)],n.g]}),e})(),m=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.Jb({type:e}),e.\u0275inj=d.Ib({imports:[[a.c,r.e,r.k,f,b.a,c.b.forRoot()]]}),e})()}}]);