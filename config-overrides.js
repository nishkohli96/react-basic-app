const {
    override,
    addWebpackAlias,
    addPostcssPlugins,
} = require('customize-cra');
const path = require('path');

module.exports = override(
    addWebpackAlias({
        ['@Casl']: path.resolve(__dirname, './src/Casl'),
        ['@Images']: path.resolve(__dirname, './src/Assets/images'),
        ['@LibUtilize']: path.resolve(
            __dirname,
            './src/components/Lib-Utilize'
        ),
        ['@Misc']: path.resolve(__dirname, './src/components/Misc'),
        ['@MuiAtoms']: path.resolve(__dirname, './src/components/Mui-Atoms'),
        ['@MuiMolecules']: path.resolve(
            __dirname,
            './src/components/Mui-Molecules'
        ),
        ['@Styles']: path.resolve(__dirname, './src/Assets/styles'),
        ['@Pages']: path.resolve(__dirname, './src/Pages'),
    }),
    addPostcssPlugins([require('tailwindcss'), require('autoprefixer')])
);
