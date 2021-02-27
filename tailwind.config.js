module.exports = {
  purge: ["./**/*.html", "./public/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Playfair Display"],
      body: ["Raleway"],
      secondary: ["Poppins"],
      footer: ["Work Sans"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        "gray-travel": "#828282",
        "akana-green": "#156963",
        "akana-orange": "#F96C10",
      },
      maxWidth: {
        "img-package": "29rem",
      },
      fontSize: {
        "2.5": "2.5rem",
      },
      letterSpacing: {
        "more-widest": ".5rem",
      },
    },
  },
  variants: {
    filters: ["hover", "responsive"],
    bgFilters: ["hover", "responsive"],
    extend: {
      fontWeight: ["hover", "focus"],
    },
  },
  plugins: [
    require("tailwind-filter-utilities"),
    require('@tailwindcss/forms')
  ],
};
