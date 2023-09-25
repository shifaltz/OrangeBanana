-- DropForeignKey
ALTER TABLE `events` DROP FOREIGN KEY `events_host_id_fkey`;

-- AlterTable
ALTER TABLE `events` MODIFY `host_id` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `events` ADD CONSTRAINT `events_host_id_fkey` FOREIGN KEY (`host_id`) REFERENCES `hosts`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
