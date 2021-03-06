module.exports = {
	"env": {
		"browser": true,
		"es6": true,
		"node": true
	},
	"extends": ["eslint:recommended", "plugin:react/recommended"],
	"parser": "babel-eslint",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"settings": {
		"react": {
			"version": "detect"
		}
	},
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"single"
		],
		"semi": [
			"warn",
			"always"
		],
		"no-console": "warn",
		"react/no-unescaped-entities": 0,
		"react/no-find-dom-node": 1
	}
};
