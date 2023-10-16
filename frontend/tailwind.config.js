/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        optimistxl:['Optimist-xl','sans-serif'],
        optimistl:['Optimist-l','sans-serif'],
        optimistr:['Optimist-r','sans-serif'],
        optimistsb:['Optimist-sb','sans-serif'],
        optimistb:['Optimist-b','sans-serif'],
        optimistxli:['Optimist-xli','sans-serif'],
        optimistli:['Optimist-li','sans-serif'],
        optimistri:['Optimist-ri','sans-serif'],
        optimistsbi:['Optimist-sbi','sans-serif'],
        optimistbi:['Optimist-bi','sans-serif'],
      }
    },
  },
  plugins: [],
}