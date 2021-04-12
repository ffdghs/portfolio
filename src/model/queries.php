<?php

function getProjects() {
  $pdo = connectToDatabase();
  
  $query = $pdo->prepare("
      SELECT *
      FROM projects
      ORDER BY id ASC;
  ");
  
  $query->execute();
  
  return $query->fetchAll(PDO::FETCH_ASSOC);

}

function numberProjects() {
  $pdo = connectToDatabase();
  
  $query = $pdo->prepare("
  SELECT COUNT(id) as nbre
  FROM projects;
  ");
  
  $query->execute();
  
  return $query->fetch(PDO::FETCH_ASSOC);
}

function getPictures() {
  $pdo = connectToDatabase();

  $query = $pdo->prepare("
      SELECT *
      FROM pictures;
  ");

  $query->execute();

  return $query->fetchAll(PDO::FETCH_ASSOC);
}

function numberPictures() {
  $pdo = connectToDatabase();

  $query = $pdo->prepare("
    SELECT COUNT(id) as nbre
    FROM pictures;
  ");

  $query->execute();

  return $query->fetch(PDO::FETCH_ASSOC);
}

?>