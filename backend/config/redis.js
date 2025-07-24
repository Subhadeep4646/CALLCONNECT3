const {createClient} = require('redis');

const redisClient = createClient({
    username: 'default',
    password: 'WYRMzH3rQdcxKFgjhZKQyN6kVjvC0E6k',
    socket: {
        host: 'redis-10621.c261.us-east-1-4.ec2.redns.redis-cloud.com',
        port: 10621
    }
});

module.exports = redisClient;