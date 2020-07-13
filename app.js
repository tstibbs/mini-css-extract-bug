import leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './app.css'

let el = document.createElement("div")
el.id = "map"
el.style = "height: 50vh;"
document.body.appendChild(el);

leaflet.map('map')
