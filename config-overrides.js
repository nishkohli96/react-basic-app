const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
    addWebpackAlias({
        ['@Misc']: path.resolve(__dirname, './src/components/Misc'),
        ['@LibUtilize']: path.resolve(__dirname, './src/components/Lib-Utilize')
    })
);