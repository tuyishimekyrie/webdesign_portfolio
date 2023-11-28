-- CreateTable
CREATE TABLE "information" (
    "id" SERIAL NOT NULL,
    "services" TEXT NOT NULL,
    "budget" INTEGER NOT NULL,
    "pages" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "information_pkey" PRIMARY KEY ("id")
);
