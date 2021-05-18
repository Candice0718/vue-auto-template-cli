const {promisify} = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear');
const chalk = require('chalk');
const { clone } = require('./dowmload');
const { spawn } = require('./spawn');
const { prompt } = require('./prompt');

const log = content => console.log(chalk.green(content));

module.exports.init = async name => {
 // 获取提示的结果
  let result = await prompt();
  let respo = 'github:Candice0718/vue-template';
  let dest = 'vue-template';

  if (result.default === 'false') {
    respo = `github:${result.repositoryOwner}/${result.repositoryName}`;
    dest = result.dest;
  } else {
    // #todo 区分B端模版还是C端模版
    if (result.platform === 'c') {
      respo = 'github:Candice0718/vue-vant-template';
      dest = 'vue-vant-template';
    }
  }
  clear();
  log('创建项目：' + dest);
  await clone(respo, dest);

  log('安装依赖');
  await spawn('npm', ['install'], {cwd: `./${dest}`});
  log('安装完成');
  if (result.default === 'true') {
    log(`
      启动项目
      ======================
      cd ${dest}
      npm run serve
      ======================
    `);
  }
}