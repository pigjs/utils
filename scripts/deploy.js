const path = require('path');

const config = {
    distPath: 'docs-dist', // 本地打包文件目录 必填
    script: 'npm run build:docs', // 项目打包命令
    delDistFile: true, // 打包后删除打包文件
    plugins: {
        uploadValidate: (itemPath) => {
            // 上传过滤.map 文件
            const baseName = path.basename(itemPath);
            return baseName.indexOf('.map') === -1;
        }
    },
    serverConfig: [
        {
            host: '114.55.173.174', // 服务器地址 必填
            port: '22', // 端口 默认 22
            username: 'root', // 登录服务器用户名 必填
            privateKey: '~/.ssh/id_rsa', // 登录服务器密钥
            // passphrase: 'xxx', // 密钥密码
            webDir: '/opt/web/utils'
        }
    ]
};

module.exports = config;
