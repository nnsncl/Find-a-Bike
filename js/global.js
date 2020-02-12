const LEAFLET_API_KEY = 'pk.eyJ1IjoiYnJ1bm9oZXIiLCJhIjoiY2ptcWtoYmUyMDBkMDN2bW54dWk3Y2dsdiJ9.P8B1VXgcnBRvrUQwzLTXug';

const API_JCD_KEY = 'b79062dab30e5cb5519201706ef9b566dcffff4d';

const API_JCD_URL = 'https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=' + API_JCD_KEY;

const STATION_OBJ = {
    number: 'Nombre',
    address: 'Adresse',
    banking: 'Carte acceptée',
    bonus: 'Bonus',
    bike_stands: 'Nombre de places total',
    available_bike_stands: 'Places disponibles',
    available_bikes: 'Vélos disponibles',
    status: 'Statut' 
}

function qs(name) {
    return document.querySelector(name);
}