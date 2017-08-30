#/bin/bash

##comando adicional sh 

## git remote add upstream [ENDEREÇO DO REPOSITÓRIO PRINCIPAL] // seta repositorio
## git fetch upstream   // sicroniza repositorio 
## git merge upstream/master // atualisa reporitorio



data=$(date +"%d/%m/%Y")
echo ""
echo ""
clear
git status; 

echo -e "\nEsta pasta e do dominio avanildo.com.br hospedado no servido Github  \nDominio  www.avanildo.igg.biz"
pwd
echo -e "\nEste Programa foi feito para atualizacão de servidor usando Git\n \n    Aperte enter para continuar 1 para continuar \n===========================================================\n"  
read -n 1 msg


if [ "$msg" = "1" ] 
    then
     echo -e "\nAguarde atualizando o servidor Github... \n \n";
      git add . ;git commit -a -m "Atualizacão em $data ";git push; echo -e "\n \n Programa atualizado no servidor em com susseso $data \n \n" 
   else 
      echo -e "\nAção cancelada pelo usuario obrigado"
fi

exit




