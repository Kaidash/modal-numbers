/**
 * Created by nikita on 13.06.17.
 */
const path = require('path');

module.exports = {
	module: {
		loaders: [
			{
				test: /.s[ac]ss$/,
				loaders: ["style", "css", "sass"],
				include: path.resolve(__dirname, '../')
			}
		]
	}
};