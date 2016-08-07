
let config = {
    server: 'https://api.welltory.com/',
    csrf: 'U3OFpCKNU6aHsFdynMtuQoy97yXGIsNj',
    api: {
        url: 'api2/',
        endpoints: {
            csrf: 'api/version',
            signin: 'auth/'
        }
    }
};

const endpoints = config.api.endpoints;

export default config;
export { config, endpoints };
