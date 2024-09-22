module.exports = {
    apps: [
        {
            name: 'jatahy',
            script: 'npm',
            args: 'start',
            env: {
                NODE_ENV: 'production',
                HOST: '0.0.0.0',
                PORT: '3000'
            }
        }
    ]
}