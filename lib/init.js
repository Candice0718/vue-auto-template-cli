const {promisify} = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear');
const chalk = require('chalk');
const { clone } = require('./dowmload');
const { spawn } = require('./spawn');

const log = content => console.log(chalk.green(content));


module.exports.init= async name => {
  clear();
  log('创建项目：' + name);
  await clone('github:Candice0718/vue-template', name);

  log('安装依赖');
  await spawn('npm', ['install'], {cwd: `./${name}`});
  log(`
  安装完成
  To get start
  =============================
  cd ${name}
  npm run serve
  =============================
  `)
}