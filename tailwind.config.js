module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundColor: {
				'black-t-50': 'rgba(0,0,0,0.5)',
			},
			colors: {
				primary: '#FF6363',
				secondary: {
					100: '#E2E2D5',
					200: '#888883',
				},
			},
			fontFamily: {
				body: ['Nunito'],
			},
		},
	},
	variants: {
		extend: {
			borderColor: ['active'],
		},
	},
	plugins: [],
};
