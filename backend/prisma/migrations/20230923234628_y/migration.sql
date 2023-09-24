-- CreateTable
CREATE TABLE `events` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `date_time` DATETIME(3) NOT NULL,
    `type` ENUM('course', 'class', 'lecture', 'mentoring') NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `online` BOOLEAN NOT NULL,
    `free` BOOLEAN NOT NULL,
    `price` DOUBLE NULL,
    `thumbnail` VARCHAR(191) NOT NULL,
    `banner` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
