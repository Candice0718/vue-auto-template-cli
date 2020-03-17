// 启动服务 打开浏览器
const open = require('open');
const { spawn } = require('./spawn');
module.exports.open = async name => {
  open('http://localhost:8080');
  spawn('npm', ['run', 'serve']), {cwd: `./${name}`}
}