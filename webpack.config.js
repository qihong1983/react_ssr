const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");

let CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

var path = require("path");

const browserConfig = {
	// entry: "./src/browser/index.js",
	entry: {
		app: [
			'babel-polyfill',
			'./src/browser/index.js'
		],
		vendor: ['react', 'redux'] //提取react模块作为公共的js文件
	},

	output: {
		// path: __dirname,
		// filename: "./client/bundle.js",
		filename: '[name].js', //注意这里，用[name]可以自动生成路由名称对应的js文件
		path: path.join(__dirname, 'build'),
		// publicPath: '/public',
		chunkFilename: '[name].js' //注意这里，用[name]可以自动生成路由名称对应的js文件
	},
	devtool: "cheap-module-source-map",
	module: {
		rules: [{
			test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
			loader: "file-loader",
			options: {
				name: "media/[name].[ext]",
				//publicPath: url => url.replace(/client/, "")
				// publicPath: url => url.replace(/client/, "")
				// path: path.join(__dirname, 'client/media')
			}
		}, {
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				use: [{
					loader: "css-loader",
					options: {
						importLoaders: 1
					}
				}, {
					loader: "postcss-loader",
					options: {
						plugins: [autoprefixer()]
					}
				}]
			})
		}, {
			test: /js$/,
			exclude: /(node_modules)/,
			loader: "babel-loader",
			query: {
				presets: ["react-app"]
			}
		}]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: "css/main.css"
		}),
		new CommonsChunkPlugin({
			names: ['vendor'],
			filename: 'vendor.js'
		})
	]
};

const serverConfig = {
	entry: {
		server: "./src/server/index.js"
	},
	target: "node",
	output: {
		path: __dirname,
		filename: "[name].js",
		path: path.join(__dirname, 'server'),
		chunkFilename: '[name].js',
		libraryTarget: "commonjs2"
	},
	devtool: "cheap-module-source-map",
	module: {
		rules: [{
			test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
			loader: "file-loader",
			options: {
				name: "media/[name].[ext]",
				// publicPath: url => url.replace(/client/, ""),
				// path: path.join(__dirname, 'client/media'),
				emit: false
			}
		}, {
			test: /\.css$/,
			use: [{
				loader: "css-loader/locals"
			}]
		}, {
			test: /js$/,
			exclude: /(node_modules)/,
			loader: "babel-loader",
			query: {
				presets: ["react-app"]
			}
		}]
	}

};

module.exports = [browserConfig, serverConfig];