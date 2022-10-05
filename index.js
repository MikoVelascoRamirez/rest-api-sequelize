const app = require('./app');
const sequelize = require('./database/database');

(async () => {
    try {
        await sequelize.authenticate();        
        app.listen(8080);
    } catch (error) {
        console.error(`Unable to connect to the database ${error}`);
    }

})();
