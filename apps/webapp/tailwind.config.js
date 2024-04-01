/** @type {import('tailwindcss').Config} */
export default {
    content: [
      '../../apps/**/*.{js,ts,jsx,tsx,mdx}',
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
      '../../packages/shared-components/**/*.{js,ts,jsx,tsx}',
      "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
