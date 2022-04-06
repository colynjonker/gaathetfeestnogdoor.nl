/*
  Warnings:

  - You are about to drop the `_aanwezigheidtodrank` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_aanwezigheidtodrank` DROP FOREIGN KEY `_aanwezigheidtodrank_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_aanwezigheidtodrank` DROP FOREIGN KEY `_aanwezigheidtodrank_ibfk_2`;

-- DropTable
DROP TABLE `_aanwezigheidtodrank`;

-- CreateTable
CREATE TABLE `drankkeuze` (
    `drank_id` VARCHAR(191) NOT NULL,
    `aanwezige_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`drank_id`, `aanwezige_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `drankkeuze` ADD CONSTRAINT `drankkeuze_aanwezige_id_fkey` FOREIGN KEY (`aanwezige_id`) REFERENCES `aanwezigheid`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `drankkeuze` ADD CONSTRAINT `drankkeuze_drank_id_fkey` FOREIGN KEY (`drank_id`) REFERENCES `drank`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
