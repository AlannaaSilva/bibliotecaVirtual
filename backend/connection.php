<?php 
    $dbHost = 'localhost'; // Padrão
    $dbUsername = 'root'; // Usuário do banco (root por padrao)
    $dbPassword = ''; // Senha do banco (vazia se não tiver configurado)
    $dbName = 'shelfscape'; // Nome do banco 

    $connection = mysqli_connect($dbHost,$dbUsername,$dbPassword,$dbName);
    mysqli_set_charset($connection, "utf8"); // Realiza a conexão com o banco
    
    if ($connection -> connect_error) {
        echo "ERRO DE CONEXÃO";
    } // Testa a conexão
    else
        echo "Conexão ao BD realizada com sucesso!";
?>