import { app } from "./app";
import { closeDatabase, startDatabase } from "./db/db";

const port = process.env.PORT || 8055;

startDatabase();

app.listen(port, () => console.log(`listening on ${port}`));

process.on("SIGINT", function () {
  closeDatabase();
  process.exit();
});
