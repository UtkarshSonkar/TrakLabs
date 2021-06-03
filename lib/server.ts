import app from "./app";
const PORT = 3000;

const app = express();
app.use(...);

const db = require("./app/models");
db.sequelize.sync();

app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})