const app = require('./app');
const sequelize = require('./database/database');
require('./models/Project');
require('./models/Task');

(async () => {
    try {
        await sequelize.sync({ alter: true });
        app.listen(8080);
    } catch (error) {
        console.error(`Unable to connect to the database ${error}`);
    }

})();
