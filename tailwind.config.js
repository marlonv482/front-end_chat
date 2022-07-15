/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: {
    safelist: [
      "flex",
      "flex-col",
      "absolute",
      "grid",
      "grid-cols-8",
      "grid-cols-10",
      "col-start-1",
      "row-start-1",
      "place-content-start",
      "gap-0",
      "justify-items-center",
      "items-center",
      "w-6",
      "w-8",
      "w-10",
      "h-6",
      "h-8",
      "h-10",
      "h-64",
      "p-0.5",
      "p-1",
      "p-2",
      "pt-1",
      "mt-1",
      "mt-10",
      "mb-4",
      "py-1",
      "px-2",
      "rounded",
      "border",
      "overflow-y-scroll",
      "bg-gray-200",
      "bg-gray-50",
      "bg-opacity-25"
    ]
  }
}
