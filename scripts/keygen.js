import editEnv from "../utils/edit-env";
import { getRandomString } from "../utils/random";

if (editEnv("APP_KEY", "\"" + getRandomString(50) + "\"")) {
    console.log("APP_KEY has been generated successfully.");
}