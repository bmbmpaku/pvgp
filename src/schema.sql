Create TABLE IF NOT EXISTS Users (
    user_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    profile_picture VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Voices (
    voice_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    username VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    category VARCHAR(100),
    location VARCHAR(100),
    amplifiers_count INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (username) REFERENCES Users(username) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Comments (
    comment_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    voice_id INT NOT NULL,
    user_id INT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (voice_id) REFERENCES Voices(voice_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Amplifiers(
    amplifier_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    voice_id INT NOT NULL,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (voice_id) REFERENCES Voices(voice_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Categories(
    category_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    category_name VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Locations (
    location_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    location_name VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = CURRENT_TIMESTAMP;
   RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- -- Attach to Users Table
-- CREATE TRIGGER set_users_updated_at
-- BEFORE UPDATE ON Users
-- FOR EACH ROW
-- EXECUTE FUNCTION update_timestamp();

-- -- Attach to Voices Table
-- CREATE TRIGGER set_voices_updated_at
-- BEFORE UPDATE ON Voices
-- FOR EACH ROW
-- EXECUTE FUNCTION update_timestamp();

-- -- Attach to Comments Table
-- CREATE TRIGGER set_comments_updated_at
-- BEFORE UPDATE ON Comments
-- FOR EACH ROW
-- EXECUTE FUNCTION update_timestamp();

-- -- Attach to Categories Table
-- CREATE TRIGGER set_categories_updated_at
-- BEFORE UPDATE ON Categories
-- FOR EACH ROW
-- EXECUTE FUNCTION update_timestamp();

-- -- Attach to Locations Table
-- CREATE TRIGGER set_locations_updated_at
-- BEFORE UPDATE ON Locations
-- FOR EACH ROW
-- EXECUTE FUNCTION update_timestamp();