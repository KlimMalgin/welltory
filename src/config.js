
let config = {
    server: 'https://api.welltory.com/',
    files: {
        default: 'sites/default/files/',
        img: {
            thumbnail: 'sites/default/files/styles/thumbnail/public/',
            medium: 'sites/default/files/styles/medium/public/',
            large: 'sites/default/files/styles/large/public/'
        }
    },
    api: {
        url: 'api2/',
        endpoints: {
            csrf: 'api/version',
            signin: 'auth'
        }
    }
};

const endpoints = config.api.endpoints;

export default config;
export { config, endpoints };
