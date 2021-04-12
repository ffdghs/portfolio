/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ portfolio /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE portfolio;

DROP TABLE IF EXISTS pictures;
CREATE TABLE `pictures` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `url_picture` varchar(255) NOT NULL,
  `url_500px` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=47 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS projects;
CREATE TABLE `projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `img` varchar(255) NOT NULL,
  `img_full` varchar(255) NOT NULL,
  `creation_date` date NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;




INSERT INTO pictures(id,url_picture,url_500px,title) VALUES(1,'https://drscdn.500px.org/photo/1030858761/m%3D900/v2?sig=dc7f600e3e6933422a1ef8c53c70b20f5985e0855cd5cf99492f7c9bc40f6eed','https://500px.com/photo/1030858761/2020-07-31_sam_3865-by-nicolas-nielsen',' Ìsland'),(2,'https://drscdn.500px.org/photo/1030807522/m%3D900/v2?sig=d47cf13b84d9642790a7a2eb8a812fb4ba87227e3447c8bd9b9e114841b3325e','https://500px.com/photo/1030807522/SAM2661-by-Nicolas-Nielsen','Ireland'),(6,'https://drscdn.500px.org/photo/1030805737/m%3D900/v2?sig=34166b65fb877fbee09a53aaaf6b334a92d07d9151837b1288acbd7bc7ede72b','https://500px.com/photo/1030805737/nyc-by-night-by-nicolas-nielsen','NYC'),(3,'https://drscdn.500px.org/photo/1030805887/m%3D900/v2?sig=af330c8e00293907c6ffee85bf66bb06d6d1891fd390d01b3e0ae806e588a079','https://500px.com/photo/1030805887/SAM1852-by-Nicolas-Nielsen','NYC'),(5,'https://drscdn.500px.org/photo/1030806271/m%3D900/v2?sig=549ccab389621a03a0c4e5f4b33222808c7ef42b0a9db5efe3f8acb622b541cf','https://500px.com/photo/1030806271/SAM0694-by-Nicolas-Nielsen','Paris 13'),(4,'https://drscdn.500px.org/photo/1030807228/m%3D900/v2?sig=598c70e712da497cf149db729872839fbfdebcdb69f11067384de6228da66410','https://500px.com/photo/1030807228/SAM2173-by-Nicolas-Nielsen','London'),(7,'https://drscdn.500px.org/photo/1030808077/m%3D900/v2?sig=201167a1d85811b9e7468bff45197dc44d7ed2ecada17c38140ea157c51fb7b3','https://500px.com/photo/1030808077/SAM4095-by-Nicolas-Nielsen','California'),(8,'https://drscdn.500px.org/photo/1030808554/m%3D900/v2?sig=ff6ef315533146ccec06f657fd37c148cd83a6600de43d42cb0bdd12a46bd282','https://500px.com/photo/1030808554/SAM4371-by-Nicolas-Nielsen','Yosemite'),(9,'https://drscdn.500px.org/photo/1030812031/m%3D900/v2?sig=579214fbf24538c3fe86c4a48b9fdf0f5cdd7cf003d8ca423a1d69d41545cc3f','https://500px.com/photo/1030812031/SAM4650-by-Nicolas-Nielsen','Lee Vining');
INSERT INTO projects(id,title,description,img,img_full,creation_date,url) VALUES(2,'Mister Cocktail',X'5072656d6965722070726f6a657420656e205048502070726f63c3a9647572616c2c206c697374696e6720646520636f636b7461696c732065742067657374696f6e206465206c61206264642e','mistercocktails.png','mistercocktails2.png','2021-02-09','http://agria.freeboxos.fr/cocktails/'),(1,'Agria',X'50726f6a65742064652066696e20646520666f726d6174696f6e2e','agria.png','agria2.png','2021-03-16','https://agria.freeboxos.fr:8000/'),(3,'Culture Numérique',X'5072656d69657220706f7274666f6c696f206465732064696666c3a972656e74732070726f6a6574732065666665637475c3a97320617520636f757273206465206c61207072656d69c3a8726520706172746965206465206c6120666f726d6174696f6e20506172697320436f64652e','thargo.png','thargo2.png','2020-12-15','http://th.nicolasnielsen.fr'),(7,'Classic Models',X'5072656d6965722070726f6a657420656e205048502f53514c2c2067657374696f6e206427756e65206261736520646520646f6e6ec3a965732074797065206d61676173696e2e','classicmodels.png','classicmodels2.png','2021-02-02','http://cm.nicolasnielsen.fr'),(4,'Dragon Slayer',X'52504720656e20504f4f205048502e','dragonslayer.png','dragonslayer2.png','2021-03-02','http://ds.nicolasnielsen.fr'),(6,'Gestionnaire de contacts',X'50726f6a657420656e206a6176617363726970742061766563206c277574696c69736174696f6e206475206c6f63616c2073746f72616765206475206e6176696761746575722e','contact.png','contact2.png','2021-02-25','http://ct.nicolasnielsen.fr'),(5,'Mini RPG',X'4d696e69205250472072c3a9616c6973c3a920656e20504f4f204a6176617363726970742e','rpg.png','rpg2.png','2021-01-20','http://rpg.nicolasnielsen.fr');







/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
