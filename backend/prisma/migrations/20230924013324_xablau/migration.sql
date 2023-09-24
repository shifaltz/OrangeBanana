/*
  Warnings:

  - Made the column `price` on table `events` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `events` MODIFY `price` VARCHAR(191) NOT NULL;
