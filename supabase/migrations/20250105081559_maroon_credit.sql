/*
  # Initial Storage Schema
  
  1. New Tables
    - `app_storage`: Stores key-value pairs for application data
      - `key` (text, primary key)
      - `value` (text)
      - `created_at` (timestamp with time zone)
      - `updated_at` (timestamp with time zone)
  
  2. Indexes
    - Index on `key` column for faster lookups
*/

CREATE TABLE IF NOT EXISTS app_storage (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_app_storage_key ON app_storage(key);

-- Add RLS policies
ALTER TABLE app_storage ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to manage their own data
CREATE POLICY "Users can manage their own data"
ON app_storage
FOR ALL
TO authenticated
USING (auth.uid() = current_setting('app.current_user_id')::uuid);