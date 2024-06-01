<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    // Return a 200 response for preflight requests
    http_response_code(200);
    exit();
}

include('connection.php');

// Log received POST data
error_log(print_r($_POST, true));

$titulo = filter_input(INPUT_POST, 'titulo');
$autor = filter_input(INPUT_POST, 'autor');
$editora_nome = filter_input(INPUT_POST, 'editora_nome');
$ano = filter_input(INPUT_POST, 'ano');
$disponivel = filter_input(INPUT_POST, 'disponivel');
$quantidade = filter_input(INPUT_POST, 'quantidade');
$preco = filter_input(INPUT_POST, 'preco');
$url_livro = filter_input(INPUT_POST, 'url_livro');


$sql = "INSERT INTO livro (titulo, autor, editora_nome, ano, disponivel, quantidade, preco, url_livro) VALUES ('$titulo', '$autor', '$editora_nome', '$ano', '$disponivel', '$quantidade', '$preco','$url_livro')"; 
$result = mysqli_query($connection, $sql);

if($result) {
    echo json_encode(['status' => 'success', 'message' => 'Book created']);
} else {
    echo json_encode(['status' => 'fail', 'error' => mysqli_error($connection)]);
}

?>