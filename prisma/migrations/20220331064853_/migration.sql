-- CreateTable
CREATE TABLE `aanwezigheid` (
    `id` VARCHAR(191) NOT NULL,
    `naam` VARCHAR(255) NOT NULL,
    `aantal` INTEGER NOT NULL DEFAULT 1,
    `kostuum` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `drank` (
    `id` VARCHAR(191) NOT NULL,
    `naam` VARCHAR(191) NOT NULL,
    `lang` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
