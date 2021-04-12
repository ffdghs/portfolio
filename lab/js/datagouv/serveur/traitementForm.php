<?php
require 'data.php';
include 'debug.php';


if(isset($_POST['pseudo'])
   && isset($_POST['password'])
   && isset($_POST['confirmPassword'])
   && isset($_POST['email'])
   && isset($_POST['sexe'])
   && isset($_POST['region'])
   && isset($_POST['department'])
   && isset($_POST['ville'])
) {
    $address = 'adresse test';
    $pdo = connectToDatabase();
    $query = $pdo->prepare(
        "
        INSERT INTO users
         (
            login,
            password,
            email,
            sex,
            address,
            regionCode,
            departmentCode,
            cityId
        )

        VALUES 
        (
            ?,?,?,?,?,?,?,?
        );
    ");

    $query->execute([
        $_POST['pseudo'],
        $_POST['password'],
        $_POST['email'],
        $_POST['sexe'],
        $address,
        $_POST['region'],
        $_POST['department'],
        $_POST['ville']
    ]);

    debugPrintR($_POST);
};

header('location:../client/index.html');

?>
