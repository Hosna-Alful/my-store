const path = require('path');

module.exports = {
    mode: 'development', // أو 'production' حسب البيئة التي تعمل بها
    entry: './src/index.js', // نقطة الدخول
    output: {
        filename: 'bundle.js', // اسم الملف الناتج
        path: path.resolve(__dirname, 'dist'), // المسار الذي سيتم فيه حفظ bundle.js
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};
