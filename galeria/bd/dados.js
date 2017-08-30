var image = new Array();   
var imaurl="/home/avanildo/Documentos/meu-site-html/galeria/";
// banco de dados da imagem




function img(nome,endereco){
	this.nome=nome;
	this.endereco=endereco;
};

function galeria(img){
var j;
for (j=0; j<img.length; j++) { document.write(j+1+" Nome da imagem :"+img[j].nome+" Caminho da imagem : <img src='"+img[j].endereco+"' width='30' height='30' ><br />")};

} 
