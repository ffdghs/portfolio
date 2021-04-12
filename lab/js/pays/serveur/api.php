 <?php

require 'data.php';     // La liste des pays

$result = [];


// Récupération du paramètre de recherche (query string de la requête HTTP GET).

/*
 * Exemple de requête HTTP GET :
 *
 * /api.php?country=Fra 
 *      ==> $_GET['country'] vaudra 'Fra'
 *
 * Va renvoyer comme résultat au moins 'France'
 */

 if (isset($_GET['query'])) {
    foreach($countries as $value) {
        if (strstr(strtolower($value),strtolower($_GET['query']))) {
            array_push($result,$value);
        }
    }
 }



// Recherche de la chaîne de caractères demandée (par exemple 'fra') dans le pays spécifié.

// Renvoie la réponse HTTP au format HTML.
// echo json_encode($result); // réponse JSON
echo json_encode($result); // réponse text b