/*
  Warnings:

  - You are about to drop the `drankkeuze` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `drankkeuze` DROP FOREIGN KEY `drankkeuze_aanwezige_id_fkey`;

-- DropForeignKey
ALTER TABLE `drankkeuze` DROP FOREIGN KEY `drankkeuze_drank_id_fkey`;

-- DropTable
DROP TABLE `drankkeuze`;

-- CreateTable
CREATE TABLE `_aanwezigheidTodrank` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_aanwezigheidTodrank_AB_unique`(`A`, `B`),
    INDEX `_aanwezigheidTodrank_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_aanwezigheidTodrank` ADD FOREIGN KEY (`A`) REFERENCES `aanwezigheid`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_aanwezigheidTodrank` ADD FOREIGN KEY (`B`) REFERENCES `drank`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
