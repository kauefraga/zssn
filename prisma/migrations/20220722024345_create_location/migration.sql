/*
  Warnings:

  - The primary key for the `Survivor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `gender` to the `Survivor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locationId` to the `Survivor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Survivor" DROP CONSTRAINT "Survivor_pkey",
ADD COLUMN     "gender" TEXT NOT NULL,
ADD COLUMN     "locationId" INTEGER NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Survivor_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Survivor_id_seq";

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "lat" INTEGER NOT NULL,
    "lon" INTEGER NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Location_name_key" ON "Location"("name");

-- AddForeignKey
ALTER TABLE "Survivor" ADD CONSTRAINT "Survivor_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
