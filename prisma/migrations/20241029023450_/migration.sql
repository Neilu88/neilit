/*
  Warnings:

  - You are about to drop the column `caption` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the `Follows` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SavedPost` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `Post` DROP COLUMN `caption`,
    ADD COLUMN `body` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `Follows`;

-- DropTable
DROP TABLE `SavedPost`;
