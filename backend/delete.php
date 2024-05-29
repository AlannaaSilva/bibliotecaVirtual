<?php
include('connection.php');

$data = json_decode(file_get_contents('php://input'), true);
$livro_id = $data['livro_id']; // Usando o metodo de envio FormData

$sql = "DELETE FROM livro WHERE livro_id = $livro_id"; // Inserir todos os dados

$result = mysqli_query($connection, $sql);

if($result) {
    echo json_encode(['status' => 'success', 'message' => 'Book deleted']);
} else {
    echo json_encode(['status' => 'fail', 'error' => mysqli_error($connection)]);
}

?>