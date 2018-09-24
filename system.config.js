module.exports = {
    apps: [
        {
            name: 'prod-implant',
            script: './index.js',
            env: {
                "NODE_ENV": "production",
                "PORT": 3002
            }
        },
        {
            name: 'release-implant',
            script: './index.js',
            env: {
                "NODE_ENV": "release",
                "PORT": 3002
            }
        },
        {
            name: 'test-implant',
            script: './index.js',
            env: {
                "NODE_ENV": "test",
                "PORT": 3002
            }
        }
    ]
}