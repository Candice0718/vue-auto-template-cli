const inquirer = require('inquirer');
module.exports.prompt = async () => {
  let prompts = [
    { // 是否生成默认的vue模版
      type: 'Confirm',
      name: 'default',
      message: '是否使用默认模版？',
      default: true
    },
    {
      type: 'input',
      name: 'repositoryOwner',
      message: 'git仓库所有者：',
      validate: (input) => {
        if (!input) {
          return '不能为空';
        }
        return true;
      },
      when: (answers) => {
        return answers.default === 'false'
      }
    },
    {
      type: 'input',
        name: 'repositoryName',
        message: 'git项目名：',
        validate: (input) => {
          if (!input) {
            return '不能为空';
          }
          return true;
        },
        when: (answers) => {
          return answers.default === 'false'
        }
    },
    {
      type: 'input',
      name: 'dest',
      message: '本地项目安装目录/项目名：',
      validate: (input) => {
        if (!input) {
          return '不能为空';
        }
        return true;
      }
    }
  ];
  
  return inquirer.prompt(prompts)
}