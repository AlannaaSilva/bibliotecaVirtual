<?php 
include('connection.php');

$data = json_decode(file_get_contents('php://input'), true);
$object_livro = $data['object_livro'];


$livro_id = $object_livro['livro_id'];
$titulo = $object_livro['titulo'];
$autor = $object_livro['autor'];
$editora_nome = $object_livro['editora_nome'];
$ano = $object_livro['ano'];
$quantidade = $object_livro['quantidade'];
$preco = $object_livro['preco'];
$url_livro = $object_livro['url_livro'];

$disponivel = $object_livro['quantidade'] === 0 ? False: True;

$sql = "UPDATE livro SET titulo = '$titulo', autor = '$autor', editora_nome = '$editora_nome', ano = '$ano', disponivel = $disponivel, quantidade = '$quantidade', preco = '$preco', url_livro = '$url_livro' WHERE livro_id = '$livro_id'";

$exec = mysqli_query($connection, $sql);

if($exec) {
    echo json_encode(['status' => 'success', 'message' => 'Book updated']);
} else {
    echo json_encode(['status' => 'fail', 'erro' => mysqli_error($connection)]);
}
?>