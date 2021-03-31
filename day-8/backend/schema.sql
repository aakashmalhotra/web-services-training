CREATE DATABASE user_management;
USE user_management;

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL,
  `email` varchar(200) NOT NULL,
  `name` varchar(200) NOT NULL,
  `age` tinyint(1) NOT NULL DEFAULT '1',
  `password` varchar(200) NOT NULL,
  `image_url` varchar(200),
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
);
 
ALTER TABLE `users` ADD PRIMARY KEY (`id`);
ALTER TABLE `users` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `users` MODIFY `email` varchar(200) UNIQUE;

INSERT INTO `users` (`id`, `email`,`name`, `age`, `password`) VALUES
(1, 'batgirl@gmail.com' ,'Batgirl', 30, 'chocolate' ),
(2, 'batman@gmail.com','Batman', 40, 'chocolate' );