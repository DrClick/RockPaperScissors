module.exports={
    dev: {
        options: {
            grunt: true,
            stream: true
        },
        tasks: ['shell:forever', 'node-inspector', 'watch']
    }
};