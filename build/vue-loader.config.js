module.exports = (isDev) => {
    return {
        preserveWhiteSpace: true, // 清除文本换行等情况空格
        extractCSS: !isDev, // 把vue的css提取到单独的文件
        cssModules: {
            localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
            camelCase: true
        },
        // hotReload: true
    }
}