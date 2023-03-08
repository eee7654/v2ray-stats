module.exports = {
    apps: [{
        name: 'V2rayStats',
        script: 'node_modules/next/dist/bin/next',
        exec_mode : "cluster",
        args:"start -p 4000",
        instances : "max",
        watch: false,
        output: './logs/out.log',
        error: './logs/error.log',
    }]
};