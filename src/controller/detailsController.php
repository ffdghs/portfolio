<?php
  if(isset($_GET['project'])){
    $project = getProject($_GET['project']);
    $techs = getTechs($_GET['project']);
  }
  else{ 
    header('location:index.php');
  }