module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#10B981',
        'dark': '#1a1a1a'
      },
      borderRadius: {
        'none': '0px',
        'sm': '2px',
        'DEFAULT': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px',
        'full': '9999px',
        'button': '4px'
      },
      fontFamily: {
        'logo': ['Pacifico', 'cursive'],
        'sans': ['Helvetica Neue', 'sans-serif']
      }
    }
  },
  plugins: []
}