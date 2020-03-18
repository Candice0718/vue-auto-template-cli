#!/usr/bin/env node
const  program = require('commander');
const { init } = require('../lib/init');
program.version(require('../package').version);

program
    .command('init')
    .description('init project')
    .action(init);

    program.parse(process.argv);