import app from "./app.js";
import conecctDB from "./configs/db.js";
await conecctDB();

app.listen(process.env.PORT, () =>
  console.log(`server run on port ${process.env.PORT}`),
);
