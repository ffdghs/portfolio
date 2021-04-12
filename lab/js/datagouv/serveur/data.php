<?php

function connectToDatabase() {
    $dsn = 'mysql:dbname=france;host=localhost';
    $user = 'root';
    $password = '';
    $options = array (
        PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING,
        PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES UTF8"
    );

    $pdo = new PDO($dsn,$user,$password,$options);
    
    return $pdo;
}