import express from "express";
import { config } from "dotenv";
import indexRoutes from "../routes/index-routes";
import adminRoutes from "../routes/admin-routes";

config();
const app = express();

// Connect to database
import connectDB from "../config/db.config";

connectDB();

app.set("view engine", "ejs");
app.set("views", __dirname.replace("server", "templates"));
app.use(express.static(__dirname.replace("server", "public")));
app.use(express.json({ extended: true }));

app.use("/admin/", adminRoutes);
app.use("/", indexRoutes);

const port = parseInt(process.env.PORT || 3000);
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});