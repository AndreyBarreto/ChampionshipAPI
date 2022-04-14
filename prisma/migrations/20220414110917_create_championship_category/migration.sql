-- CreateTable
CREATE TABLE "championships_categories" (
    "id" TEXT NOT NULL,
    "id_championship" TEXT NOT NULL,
    "id_category" TEXT NOT NULL,

    CONSTRAINT "championships_categories_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "championships_categories" ADD CONSTRAINT "championships_categories_id_championship_fkey" FOREIGN KEY ("id_championship") REFERENCES "championships"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "championships_categories" ADD CONSTRAINT "championships_categories_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
