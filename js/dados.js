/*Sitema de menus em java script v1 1.1 12/07/2017 
============================================================== 
 Banco de dados java script pro site www.avanildo.com.br
 Site inteiro feito em html, css, javascript utilizando 
 técnica de reaproveitamento de código
 
 Este banco de dados alimenta todas as paginas do site
 
*/  

// monta banco de dados 

//var dominio='http://avanildo.com.br/'; //url do site para as paginas internas 

var dominio='http://avanildo.igg.biz/';
var horizontal = new Array();// nova array de objeto
var vertical = new Array();// nova array de objeto
var _rodape = new Array();// nova array de objeto
var rodape1 = new Array();// nova array de objeto
var rodape2 = new Array();// nova array de objeto
var blog = new Array();// nova array blog
// Para uso do rodape
var t1_rodape="<h2>Informações  </h2>"; // titolo do rodape
_rodape[0]=new montamenu(dominio+"paginas/termo.html","Termo de prestação de serviço",0);
_rodape[1]=new montamenu(dominio+"paginas/privacidade.html","Politica e Privacidade"),0; 
_rodape[2]=new montamenu(dominio+"galeria/","Galeria de fotos",0);
_rodape[3]=new montamenu(dominio+"paginas/nosso-clientes.html","Clientes Corporativos",0);
// Ideias
var t2_rodape="<h2>Ideias para construir </h2>";
rodape1[0]=new montamenu("https://br.pinterest.com/avanildoconstru/cosinha/","Cozinha",0);
rodape1[1]=new montamenu("https://br.pinterest.com/avanildoconstru/fachada-constru%C3%A7%C3%A3o-sobrado/","Fachadas",0);
rodape1[2]=new montamenu("https://br.pinterest.com/avanildoconstru/abanheiro/","Banheiros",0);
rodape1[3]=new montamenu("https://br.pinterest.com/avanildoconstru/salas-pequenas/","Salas"),0;
// Endereço
var t3_rodape="<h2>Contato </h2>";
    
rodape2[0]=new montamenu("#","Avanildo Construções",0);
rodape2[1]=new montamenu("#","Rua:Antonio koch Leme Filho N60 ",0);    
rodape2[2]=new montamenu("#","Fone: (19)3035-5755)",0);
rodape2[3]=new montamenu("#","Email: Avanildocontrucoes@gmail.com",0); 

// variavel do blog
var blogtitolo="<h2> Informações do blog</> ";
 
    


//  Menu horizontal
horizontal[0] = new montamenu(dominio+"index.html","Inicio",0); // monta o objeto e coloca no array
horizontal[1] = new montamenu(dominio+"galeria/","Galeria",0);     
horizontal[2] = new montamenu("http://www.noticiascnc.com.br/","Noticias",1);     
horizontal[3] = new montamenu(dominio+"paginas/lista-servico.html","Especialidades",0);     
horizontal[4] = new montamenu(dominio+"paginas/contato.html","Contato",0);     
horizontal[5] = new montamenu(dominio+"paginas/sobre.html","Sobre Nos",0);     

// Menu vertical
vertical[0] = new montamenu(dominio+"paginas/azulejista.html","Azulejista",0);     
vertical[1] = new montamenu(dominio+"paginas/como-construir.html","Como Construir",0);     
vertical[2] = new montamenu(dominio+"paginas/curriculum.html","Meu Curriculum",0);     
vertical[3] = new montamenu(dominio+"paginas/proteja-revestimento.html","Proteja Seu Revestimento ",0);
vertical[4] = new montamenu(dominio+"paginas/forma-pagamento.html","Formas De Pagamento",0);
vertical[5] = new montamenu("https://br.pinterest.com/avanildoconstru/","Projeto Para Inspiração",1);               
vertical[6] = new montamenu("https://br.pinterest.com/avanildoconstru/medidas/","Medidas Para Acabamento",1);
vertical[7] = new montamenu(dominio+"paginas/cursos.html","Cursos Gratuito Online",0);

vertical[8] = new montamenu("javascript:void(0)","<h2> Use seu Cartão </h2> <img src='"+dominio+"img/pagamento.jpeg' width='100%' alt='Page com Visa ou Master'> <hr> Em até 12X com acrecimo <br /> Somente cartão com ship<hr>",2);


     
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
  
   for( j=0; j<= m.length; j++ ){
  
   if( m[j].tipo==0){document.write('<li> <a href="'+m[j].link+'" >'+m[j].titolo+'</a> </li>');}
  	 
  	 else if(m[j].tipo==2) { document.write('<li>'+m[j].titolo+'</li>');}   
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


// inicio, funcao completa para controle de formulario ajax 
// sem refleche
 $(function(){ // funcao ajax para carregamento sem reflex php em jquerey 
       $('.form').submit(function () {
       	$.ajax({
       	      url: 'envia.php',
       	      type: 'post',
       	      data: $('.form').serialize(),
               beforeSend:function (data) {//funcao antes de inviar
               	// alert('deseja mesmo aplicar');
               },    	      
       	      success:function (data) { // funcao para prossecar informações.
       	            	       
       	            	       }, 
               complete:function (data) {// funcao completa depois de success 
                 	alert('Obrigado!  Retornaremos assim que possível');
                 	$(".modal .close").click();
                 	$('.form').each (function(data){ this.reset(data);});
                    }
       	      
       	});// fim ajax
       	
       	return(false);
       });//Fim da funcao  
 
 });// fim de toda função  ajax


// variaves de apoio 

telefone='(19)9-8219-3013 <br /> (19)9-9556-0691 <br /> (19)3035-5755 ';
watsapp='<img  src="'+dominio+'img/watsap.png" align="middle"  height="100" alt="Watssap" title="WatsApp"> <br /> (19)9-8219-3013';

aviso='<div style="color:#1f7a1f; text-align:center"> <font size="5"> <strong><p> Obrigado aos nossos clientes e amigo.'; 
aviso+='Estamos encerrando nossas atividades apartir de';
aviso+='16-12-2016 voltaremos em 16-01-2017, Avanildo Construções deseja a todos bom descanso de final de ano. Obrigado a todos.';
aviso+='</p> </strong> </font>  </div>';
logo='<div style="padding-top:25px"> ARM Construções</div>' ;



