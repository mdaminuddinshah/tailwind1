<!-- setup create tailwind file -->
1. npm init
2. - npm install -D tailwindcss
   - npx tailwindcss init
3. mkdir src
    - touch input.css
4. paste to input.css
    - @tailwind base;
    - @tailwind components;
    - @tailwind utilities;
5. add to tailwind.config.js
    - content: ["./dist/*.{html,js}"],
6. add dev in package.json
    - "dev": "tailwindcss -i ./src/input.css -o ./dist/output.css --watch",