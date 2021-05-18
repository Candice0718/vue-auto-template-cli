#!/usr/bin/env node
const  program = require('commander');
const { init } = require('../lib/init');
program.version(require('../package').version);

program
    .command('init')
    .description('init project')
    .option('-p, --platform', '选择模版B对应B端项目，C对应移动端项目')
    .action(init);

    program.parse(process.argv);