var url = require('url');

var pg = url.parse(process.env.DATABASE_URL || '');
pg.auth = pg.auth || '';
pg.pathname = pg.pathname || '';

var auth = pg.auth.split(':');
pg.user = auth[0];
pg.password = auth[1];
pg.database = pg.pathname.slice(1);

module.exports = pg;