/*
  Warnings:

  - Added the required column `host` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `events` ADD COLUMN `host` ENUM('NeymarJr', 'ChicoMoedas', 'Cabelinho') NOT NULL;
