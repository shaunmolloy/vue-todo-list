CREATE TABLE `todo_list_task`
(
    `id` int NOT NULL AUTO_INCREMENT,
    `list_id` int NOT NULL,
    `name` varchar(255),
    `status` varchar(50) DEFAULT  'active',
    `updated` datetime,
    `created` datetime,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_todo_list_task_list_id`
    FOREIGN KEY (`list_id`) REFERENCES `todo_list` (`id`)
);
