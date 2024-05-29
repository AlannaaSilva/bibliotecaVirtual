<?php
include ('connection.php');


$sql = "SELECT * FROM livro";

$exec = mysqli_query($connection, $sql);
if($exec) {
    $result = array();
    while ($row = mysqli_fetch_assoc($exec)) {
        $result[] = $row;
    }
    echo json_encode(['status' => 'success',  'results' => $result]);
} else {
    echo json_encode(['status' => 'fail', 'erro' => mysqli_error($connection)]);
}
?>