/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        sm: "url('https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_1504,c_limit/e1157eee-765f-4565-b430-a881cacb64b1/men-s-shoes-clothing-accessories.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}

