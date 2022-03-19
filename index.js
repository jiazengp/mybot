module.exports = (req, res) => {
    const exec = require('child_process').exec;
    const cmdStr = 'npm run start';
    exec(cmdStr, (err, stdout, stderr) => {
        if (err) {
            console.log(err);
            console.warn(new Date(), ' Bot 启动失败');
        } else {
            console.log(stdout);
            console.warn(new Date(), ' Bot 启动成功');
        }
    });
};
