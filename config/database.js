const path = require('path');

/*module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});*/

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-54-155-110-181.eu-west-1.compute.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'd6saj1llkth6n1'),
      user: env('DATABASE_USERNAME', 'hzbreewutetpqp'),
      password: env('DATABASE_PASSWORD', '90e52511c988bcf31d5d08f5adcd02caade703edd41eb70bbcebe439d852bd33'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
      },
    },
    debug: false,
  },
});
