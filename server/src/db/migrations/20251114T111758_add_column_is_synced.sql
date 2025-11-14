-- SQL migration
ALTER TABLE "users"
ADD COLUMN "is_synced" BOOLEAN NOT NULL DEFAULT false;
