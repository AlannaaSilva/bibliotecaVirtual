<?php 

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

include('connection.php');

$titulo = filter_input(INPUT_POST, 'titulo');
$autor = filter_input(INPUT_POST, 'autor');
$editora_nome = filter_input(INPUT_POST, 'editora_nome');
$ano = filter_input(INPUT_POST, 'ano');
$disponivel = filter_input(INPUT_POST, 'disponivel');
$quantidade = filter_input(INPUT_POST, 'quantidade');
$preco = filter_input(INPUT_POST, 'preco');
$url_livro = filter_input(INPUT_POST, 'url_livro');
$livro_id = filter_input(INPUT_POST, 'livro_id');
error_log(print_r($livro_id, true));


$disponivel = True;

$sql = "UPDATE livro SET titulo = '$titulo', autor = '$autor', editora_nome = '$editora_nome', ano = '$ano', disponivel = $disponivel, quantidade = '$quantidade', preco = '$preco', url_livro = '$url_livro' WHERE livro_id = '$livro_id'";

$exec = mysqli_query($connection, $sql);

if($exec) {
    echo json_encode(['status' => 'success', 'message' => 'Book updated']);
} else {
    echo json_encode(['status' => 'fail', 'erro' => mysqli_error($connection)]);
}
?>