const nativewind = require("nativewind/preset")
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [nativewind],
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/(public)/**/*.{js,jsx,ts,tsx}",
    "./app/(private)/**/*.{js,jsx,ts,tsx}",
    "./app/(private)/(tabs)/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins_400Regular"],
        "poppins-thin": ["Poppins_100Thin"],
        "poppins-extralight": ["Poppins_200ExtraLight"],
        "poppins-light": ["Poppins_300Light"],
        "poppins-medium": ["Poppins_500Medium"],
        "poppins-semibold": ["Poppins_600SemiBold"],
        "poppins-bold": ["Poppins_700Bold"],
        "poppins-extrabold": ["Poppins_800ExtraBold"],
        "poppins-black": ["Poppins_900Black"],
      },
      colors: {
        neutral: {
          0: "#E1E6EF",
          50: "#F7F7FA",
          100: "#EFF0F3",
          200: "#CBCCD4",
          300: "#A6A7AE",
          900: "#1C3952"
        },
        primary: {
          50: "#D9E6F8",
          700: "#1B77F2",
          900: "#004BAF",
        },
        secondary: {
          50: "#FCF9E4",
          700: "#F2CB04",
          900: "#CAA900",
        },
        success: {
          50: "#DADFB5",
          700: "",
          900: "",
        },
        warning: {
          50: "#FFF4EB",
          700: "#D35F07",
          900: "#A24702",
        },
        error: {
          50: "#FEF2F2",
          700: "#B91C21",
          900: "#7F1D20",
        },
        info: {
          50: "#EFF3FF",
          700: "#1D4ED8",
          900: "#1E3A8A",
        },
        text: {
          0: "#E1E6EF",
          300: "#DDDDDD",
          400: "#AAABAD",
          500: "#8A8A8B",
          600: "#646464",
          900: "#444444"
        },
        background: {
          900: "#51B2CB"
        }
      },
      backgroundImage: {
        "gradient-600": "linear-gradient(180deg, #51B2CB 0%, #1B77F2 100%)",
      },
      boxShadow: {
        "100": "0px 0px 8px 0px #97C3FF66",
        "200": "0px 0px 12px 0px #97C3FF66",
        "300": "0px 0px 16px 0px #97C3FF33",
        "400": "0px 0px 32px 0px #97C3FF40",
        "500": "0px 0px 32px 0px #97C3FF66",
        'soft-gray': '0px 0px 32px 0px #A6A7AE',
        'soft-black': "0px 4px 4px 0px #00000040"
      },
      borderRadius: {
        "4": "4px",
        "8": "8px",
        "12": "12px",
      },
      gap: {
        default: "20px"
      }
    }
  },
  plugins: [],
};
