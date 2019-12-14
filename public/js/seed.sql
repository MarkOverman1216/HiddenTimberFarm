-- Uses the "farm" database
USE farm;

-- Owner who owns one horse
INSERT INTO owners (firstName, lastName, phone, email, street, city, state, zip, numHorses, trailerParking) VALUES ("Jennifer", "Gaumnitz", "9137076982", "jlgaumnitz@gmail.com", "16904 W. 83rd St.", "Lenexa", "KS", 66219, 1, false);


-- Owner who owns three horses
INSERT INTO owners (firstName, lastName, phone, email, street, city, state, zip, numHorses, trailerParking) VALUES ("Mitzie", "Eddins", "9131234567", "eddinshorses@gmail.com", "23392 S. Moonlight Rd.", "Spring Hill", "KS", 66083, 3, true);


-- Using UNIX Format format (https://www.unixtimestamp.com/) for date fields for vacDate, moveInDate, and moveOutDate; 
-- We will need to delete trailerParking from the horse.js list
INSERT INTO horses (name, barnName, sex, breed, color, description, chipped, tattooed, vet, farrier, vacDate, vacGiven, trailerParking, moveInDate, stallAssignment, quarantine, moveOutDate, ownerID) VALUES ("TRF Hot Sari Jane", "Sunny", "Mare", "American Paint Horse", "Bay", "White star on forehead", false, false, "Jeanie Hauser", "Jeff Miller", 1574208000, "Rabies Rhinoflu", false, 1484438400, 1, true, null, 1);

-- Need to delete trailerParking from this list // Can moveOutDate be null?
INSERT INTO horses (name, barnName, sex, breed, color, description, chipped, tattooed, vet, farrier, vacDate, vacGiven, trailerParking, moveInDate, stallAssignment, quarantine, moveOutDate, ownerID) VALUES ("Leo bar Leo", "Leo", "Gelding", "Quarter Horse", "Sorrel", "White blaze, white socks", true, false, "Jeanie Hauser", "Jeff Miller", 1574208000, "Rabies Rhinoflu", true, 1343779200, 2, true, null, 2);

-- Need to delete trailerParking from this list // Can moveOutDate be null?
INSERT INTO horses (name, barnName, sex, breed, color, description, chipped, tattooed, vet, farrier, vacDate, vacGiven, trailerParking, moveInDate, stallAssignment, quarantine, moveOutDate, ownerID) VALUES ("Lilly of the Valley", "Lilly", "Mare", "Tennesee Walking Hores", "Gray", "One blue eye, one brown eye", false, false, "Jeanie Hauser", "Jeff Miller", 1574208000, "Rabies Rhinoflu", true, 1541030400, 3, true, null, 2);

-- This horse was given a moveout date ||| Need to delete trailerParking from this list
INSERT INTO horses (name, barnName, sex, breed, color, description, chipped, tattooed, vet, farrier, vacDate, vacGiven, trailerParking, moveInDate, stallAssignment, quarantine, moveOutDate, ownerID) VALUES ("King Lear", "Lear", "Gelding", "Thoroughbred Mix", "Bay", "Blaze, white socks", false, true, "Jeanie Hauser", "Jeff Miller", 1574208000, "Rabies Rhinoflu", true, 1343779200, 4, true, 1575936000, 2);