<?php
// formulario ajax  	 
 	   	 
if( isset($_POST) && !empty($_POST)  ){
   
   $nome=$_POST['nome'];
   $telefone=$_POST['tel'];
   $messagem=$_POST['message'];  
   
     
   $cab = "From: ".$nome." <"."avanildoconstrucoes@gmail.com".">\n";
	$mensagem = "Contato via site - Avanildo construções \n =====================================================\n";
	$mensagem.= "Nome: ".$nome." \n";
	$mensagem.= "Telefone: ".$telefone." \n";
	$mensagem.= "Mensagem:".$messagem." \n Retorne o mais rápido possível  \n Avanildo construções \n===================================================\n";    
   

   $a=email('avanildoconstrucoes@gmail.com','Contato para orçamento de pedreiro do site',$menssagem,'avanildo.com.br');


//   mail('avanildoconstrucoes@gmail.com', 'Contato para orçamento de pedreiro do site', $menssagem,$cab);
       
    
} else { 
     echo "Não temos dados no formulario"; 
}



?>