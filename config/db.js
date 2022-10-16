const {Client} = require('pg');

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    password: '5087',
    database: 'REST_API_CRUD',
    port: '5432'
});

client.connect()
.then(() => {
    console.log('Connnecting to database...');
}).catch((err) => {
    console.log(err);
});

module.exports = client;