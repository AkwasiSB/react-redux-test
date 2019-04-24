const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {
	return {
		mode: env.development ? 'development' : 'production',
		entry: './src/index.js',
		output: {
			filename: 'app.bundle.js',
			path: path.resolve(__dirname, 'dist')
		},
		module: {
			rules: [
				{
					enforce: 'pre',
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'eslint-loader'
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env', '@babel/preset-react']
						}
					}
				},
				{
					test: /\.(sa|sc|c)ss$/,
					exclude: /node_modules/,
					use: [
						env.development ? 'style-loader' : MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								modules: true,
								localIdentName: '[name]__[local]-[hash:base64:6]',
								importLoaders: 2,
								camelCase: true
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								ident: 'postcss',
								plugins: () => [
									require('postcss-preset-env')({
										browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie <= 8']
									})
								]
							}
						},
						'sass-loader'
					]
				},
				{
					test: /\.(png|jpg|jpeg|gif)$/,
					exclude: /node_modules/,
					loader: 'file-loader'
				}
			]
		},
		plugins: [
			new CleanWebpackPlugin(['dist']),
			new HtmlWebpackPlugin({ template: './public/index.html' }),
			new StyleLintPlugin({
				configFile: './.stylelintrc',
				syntax: 'scss',
				ignorePath: './.stylelintignore'
			}),
			new MiniCssExtractPlugin({
				filename: '[name].[hash].css',
				chunkFilename: '[id].[chunkhash].css'
			})
		],
		devtool: env.development ? 'eval-source-map' : 'source-map',
		devServer: {
			historyApiFallback: true,
			open: true,
			port: 4001,
			stats: 'minimal',
		}
	}
}
