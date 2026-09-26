/* tool-metodo-de-capurro · Elucenia · https://github.com/Elucenia/tool-metodo-de-capurro
   Copyright (c) 2026 Elucenia · Felipe Guedes (fgxdev.com). Licensed under the Apache License 2.0: keep this notice and the NOTICE file, and mark your changes.
   Standalone integration. Package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"metodo-de-capurro","title":"Método de Capurro (somático)","fields":[["pele","Textura da pele","sel",{"opts":{"0":"Muito fina, gelatinosa","5":"Fina e lisa","10":"Algo mais grossa, discreta descamação superficial","15":"Grossa, rugas superficiais, descamação nas mãos e nos pés","20":"Grossa, apergaminhada, com gretas profundas"}}],["orelha","Forma da orelha","sel",{"opts":{"0":"Chata, disforme, pavilhão não encurvado","8":"Pavilhão parcialmente encurvado na borda","16":"Pavilhão parcialmente encurvado em toda a parte superior","24":"Pavilhão totalmente encurvado"}}],["mama","Tamanho da glândula mamária","sel",{"opts":{"0":"Não palpável","5":"Palpável, menor que 5 mm","10":"Entre 5 e 10 mm","15":"Maior que 10 mm"}}],["mamilo","Formação do mamilo","sel",{"opts":{"0":"Apenas visível, sem aréola","5":"Aréola lisa e chata, diâmetro menor que 7,5 mm","10":"Aréola pontilhada, borda não elevada, diâmetro menor que 7,5 mm","15":"Aréola pontilhada, borda elevada, diâmetro maior que 7,5 mm"}}],["pregas","Pregas plantares","sel",{"opts":{"0":"Sem pregas","5":"Marcas mal definidas na metade anterior","10":"Marcas bem definidas na metade anterior e sulcos no terço anterior","15":"Sulcos na metade anterior","20":"Sulcos em mais da metade anterior"}}]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* Elucenia arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(a){'use strict';
function c(a){return Math.floor(a/7)+"s "+a%7+"d"}
function g(a){return a<259?["pré-termo (antes de 37 semanas)","info"]:a<273?["termo precoce (37s 0d a 38s 6d)","low"]:a<287?["termo completo (39s 0d a 40s 6d)","low"]:a<294?["termo tardio (41s 0d a 41s 6d)","mid"]:["pós-termo (42 semanas ou mais)","high"]}
a.def("metodo-de-capurro",function(a){var e=+a.pele+ +a.orelha+ +a.mama+ +a.mamilo+ +a.pregas,o=204+e,r=g(o),i=o<259||o>=294?"mid":"low";return{main:[c(o),"de idade gestacional"],label:"Idade gestacional pelo método de Capurro somático",level:i,verdict:"Recém-nascido "+r[0],rows:[["Soma dos pontos",String(e)],["Idade gestacional em dias (204 + soma)",String(o)]],raw:{soma:e,dias:o}}});
})(window.CALC);
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
