/*Sitema de menus em java script v1 1.1 12/07/2017 
============================================================== 
 Banco de dados java script pro site www.avanildo.com.br
 Site inteiro feito em html, css, javascript utilizando 
 técnica de reaproveitamento de código
 
 Este banco de dados alimenta todas as paginas do nosso blog
 
*/  

// monta banco de dados 
var _blog="http://127.0.0.1/meu-site-html/blog/" ; //url do blog para as paginas internas 

var hblog = new Array();// nova array blog
// Para uso do rodape


//  Menu horizontal do blog
hblog[0] = new montamenu(dominio+"index.html","Inicial",0);
hblog[1] = new montamenu(_blog+"2017/planta.html","Planta",0);     
hblog[2] = new montamenu(_blog+"2017/novidade.html","Novidade",0);     
hblog[3] = new montamenu(_blog+"2017/natureza.html","Natureza",0);     
hblog[4] = new montamenu(_blog+"2017/construcao.html","Construções exoticas",0);     
hblog[5] = new montamenu(_blog+"artigos/acabamento.html","Acabamento",0);     
hblog[6] = new montamenu(_blog+"artigos/dezembro.html","Sobre Nos",0);     

     
// funções de apoio do banco de dados
function montamenu(link,titolo,tipo){
     // objeto de dados
     this.tipo = tipo;     
     this.link = link;
     this.titolo = titolo; 
   };

function montarmenu(m) {
// monta o menu horizontal
  var j;
  
   for( j=0; j< m.length; j++ ){
  
   if( m[j].tipo==0){document.write('<li> <a href="'+m[j].link+'" >'+m[j].titolo+'</a> </li>');}
  	 
  	 else
  	 { document.write('<li> <a href="'+m[j].link+'" target="_blank">'+m[j].titolo+'</a> </li>');}   
   }        
 }
 
   


function montarlista(m) {
// monta o uma lista sem link
  var j;
  for( j=0; j<m.length; j++ ){
            document.write('<li>'+m[j].titolo+'</li>'); }; 
};








