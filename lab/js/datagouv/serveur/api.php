<?php
require 'data.php';
include 'debug.php';

if(isset($_GET['get'])) {
    if($_GET['get'] == 'regions') {
        $pdo = connectToDatabase();
        
        // var_dump($pdo);

        $query = $pdo->prepare(
            "SELECT code, name
            FROM regions;
        ");

        $query->execute();

        $regions = $query->fetchAll(PDO::FETCH_ASSOC);


        echo(json_encode($regions));
    }
    
    if($_GET['get'] == 'dpt') {
        $pdo = connectToDatabase();

        $query = $pdo->prepare(
            "SELECT code, name, region_code
            FROM departments
            WHERE region_code = ?;
        ");

        $query->execute([$_GET['region']]);

        $dpts = $query->fetchAll(PDO::FETCH_ASSOC);


        echo(json_encode($dpts));
    }
    if($_GET['get'] == 'ville') {
        $pdo = connectToDatabase();

        $query = $pdo->prepare(
            "SELECT department_code, name, zip_code
            FROM cities
            WHERE department_code = ?
            AND name LIKE ?;
        ");

        $search = '%'.$_GET['search'].'%';

        $query->execute([$_GET['dpt'], $search]);

        $cities = $query->fetchAll(PDO::FETCH_ASSOC);


        echo(json_encode($cities));
    }

    if($_GET['get'] == 'pseudo') {
        $pdo = connectToDatabase();

        $query = $pdo->prepare(
            "SELECT *
            FROM users
            WHERE login = ?;
        ");

        $query->execute([$_GET['login']]);

        $checkUser = $query->rowCount();


        echo($checkUser);
    }
}