/*
  Warnings:

  - You are about to drop the column `name` on the `Location` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[lat]` on the table `Location` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[lon]` on the table `Location` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Location_name_key";

-- AlterTable
ALTER TABLE "Location" DROP COLUMN "name";

-- CreateIndex
CREATE UNIQUE INDEX "Location_lat_key" ON "Location"("lat");

-- CreateIndex
CREATE UNIQUE INDEX "Location_lon_key" ON "Location"("lon");
