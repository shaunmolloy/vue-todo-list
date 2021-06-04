CREATE TABLE `todo_list`
(
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255),
    `status` varchar(50) DEFAULT 'active',
    `updated` datetime,
    `created` datetime,
    PRIMARY KEY (`id`)
);
