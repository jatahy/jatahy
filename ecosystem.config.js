module.exports = {
    apps: [
        {
            name: 'jatahy',
            script: 'npm',
            args: 'start',
            watch: true,
            ignore_watch: ["node_modules"],
            env: {
                NODE_ENV: 'production',
                HOST: '0.0.0.0',
                PORT: '3000'
            }
        }
    ]
}