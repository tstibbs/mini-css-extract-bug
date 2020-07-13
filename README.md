To reproduce this bug:
1. `npm install`
1. `npx webpack-dev-server`
1. open http://localhost:8080
1. note that the box on the page is red - because app.css sets it to be red and is imported after leaflet.css
1. uncomment the `maxSize` parameter in webpack.config.js
1. `ctrl+c`
1. `npx webpack-dev-server`
1. open http://localhost:8080
1. note that the box on the page is grey - app.css is being loaded first, and then overriden by leaflet.css
