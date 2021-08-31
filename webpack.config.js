const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/dev/ts/index.ts',
    output: {
        path: path.resolve(__dirname, './pro'),
        filename: '[name].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'恒赢智航 - 技术中台',
            template: './dev/index.html', // 源模板文件
            filename: './index.html', // 输出文件[注意：这里的根路径是module.exports.output.path]
        })
    ],
};



