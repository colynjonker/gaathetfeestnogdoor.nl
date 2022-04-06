/*
  Warnings:

  - The primary key for the `drank` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `drank` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`naam`);
