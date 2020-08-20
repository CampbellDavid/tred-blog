const path = require('path')

module.exports = {
	devServer: {
		contentBase: path.resolve('src'),
		hot: true,
		open: true,
		port: 8000,
		watchContentBase: true,
		historyApiFallback: true,
		proxy: {
			'/api': {
				target: 'http://localhost:4000',
				secure: false,
			},
		},
	},
}
