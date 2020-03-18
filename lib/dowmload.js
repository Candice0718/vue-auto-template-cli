const { promisify } = require('util');
/** 
* repository 下载的仓库地址
* destination 下载路径
*/
module.exports.clone =  async (repository = 'github:Candice0718/vue-template', destination = 'vue-template') => {
  const download = promisify(require('download-git-repo'));
  const ora = require('ora');
  const process = ora(`下载.....${repository}`);
  process.start()
  await download(repository, destination)
  process.succeed()
}