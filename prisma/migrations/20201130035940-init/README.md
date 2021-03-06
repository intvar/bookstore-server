# Migration `20201130035940-init`

This migration has been generated by Igor at 11/30/2020, 8:59:40 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Author" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullName" TEXT NOT NULL,
    "birthdate" TEXT NOT NULL
)

CREATE TABLE "Publisher" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "foundationYear" INTEGER NOT NULL,
    "site" TEXT NOT NULL
)

CREATE TABLE "Book" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "authorId" INTEGER NOT NULL,
    "publisherId" INTEGER NOT NULL,

    FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("publisherId") REFERENCES "Publisher"("id") ON DELETE CASCADE ON UPDATE CASCADE
)

CREATE UNIQUE INDEX "Author.fullName_unique" ON "Author"("fullName")

CREATE UNIQUE INDEX "Publisher.name_unique" ON "Publisher"("name")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201130035940-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,32 @@
+datasource db {
+  provider = "sqlite"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Author {
+  id Int @id @default(autoincrement())
+  fullName String @unique
+  birthdate String 
+}
+
+model Publisher {
+  id Int @id @default(autoincrement())
+  name String @unique
+  foundationYear Int
+  site String
+}
+
+model Book {
+  id Int @id @default(autoincrement())
+  name String
+  price Float
+  quantity Int
+  author Author @relation(fields:[authorId], references:[id])
+  authorId Int
+  publisher Publisher @relation(fields:[publisherId], references:[id])
+  publisherId Int
+}
```


