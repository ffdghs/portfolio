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

function getProject($id) {
  $pdo = connectToDatabase();
  
  $query = $pdo->prepare("
    SELECT *
    FROM projects
    WHERE id = ?;
  ");
  
  $query->execute([$id]);
  
  return $query->fetch(PDO::FETCH_ASSOC);

}


function getPictures() {
  $pdo = connectToDatabase();

  $query = $pdo->prepare("
      SELECT *
      FROM pictures
      ORDER BY id ASC;
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

function getTechs($id) {
  $pdo = connectToDatabase();

  $query = $pdo->prepare("
    SELECT *
    FROM relation_project_tech
    INNER JOIN techs ON id_tech = techs.id
    WHERE id_project = ?;
  ");

  $query->execute([$id]);

  return $query->fetchAll(PDO::FETCH_ASSOC);
}

?>