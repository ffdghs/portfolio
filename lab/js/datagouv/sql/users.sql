

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `idUser` int(3) NOT NULL,
  `login` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `sex` enum('m','f') NOT NULL,
  `address` text NOT NULL,
  `regionCode` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `departmentCode` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cityId` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `users` (`idUser`, `login`, `password`, `email`, `sex`, `address`, `regionCode`, `departmentCode`, `cityId`) VALUES
(1, 'superBot', '23206deb7eba65b3fbc80a2ffbc53c28', 'super_bot@mail.fr', 'm', '1, rue de l\'arbre vert', '11', '78', 31162),
(2, 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@mail.fr', 'm', '2 avenue du général Truc', '11', '75', 29902),
(3, 'marie', 'e8971d0de614eec59fba4c40bbdc7f76', 'marie@mail.fr', 'f', '3, rue des platanes', '76', '34', 13288);


ALTER TABLE `users`
  ADD PRIMARY KEY (`idUser`),
  ADD KEY `regionCode` (`regionCode`),
  ADD KEY `departmentCode` (`departmentCode`),
  ADD KEY `cityId` (`cityId`);


ALTER TABLE `users`
  MODIFY `idUser` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;


ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`regionCode`) REFERENCES `regions` (`code`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_2` FOREIGN KEY (`departmentCode`) REFERENCES `departments` (`code`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_3` FOREIGN KEY (`cityId`) REFERENCES `cities` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

