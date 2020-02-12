const mymap = L.map('map').setView([45.76, 4.89], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: LEAFLET_API_KEY
}).addTo(mymap);


ajaxGet(API_JCD_URL, displayMarkers);

function displayMarkers(stationsJson) {
    const stations = JSON.parse(stationsJson);

    stations.forEach(station => {
        createMarker(station);
    });

    /*
    let i = 0;
    let lat;
    let lng;

    while(i < stations.length) {
        lat = stations[i].position.lat;
        lng = stations[i].position.lng;
        createMarker(lat, lng);
        i ++;
    }

    for(let i = 0, lat, lng; i < stations.length; i++) {
        const stations = JSON.parse(stationsJson);
        lat = stations[i].position.lat;
        lng = stations[i].position.lng;
        createMarker(lat, lng)
        i ++;
    }
    */

}

function createMarker(station) {
    const marker = L.marker([station.position.lat, station.position.lng]).addTo(mymap);
    marker.addEventListener('click', () => {
        document.querySelector('#station-selected').style.display = 'block';
        document.querySelector('#no-station-selected').style.display = 'none';
        infosContent = '';

        for (const key in STATION_OBJ) {

            if (station[key] || typeof station[key] == 'boolean') {
                switch (station[key]) {
                    case 'OPEN': station[key] = 'Ouvert'; break;
                    case 'CLOSED': station[key] = 'Fermée'; break;
                    case true: station[key] = 'Oui'; break;
                    case false: station[key] = 'Non';
                }
            };

            if (station[key]) {
                infosContent += `
                <p>${STATION_OBJ[key]} : ${station[key]}</p>
                `
            }
        }

        document.querySelector('#station-infos').innerHTML = infosContent;
    });

}

/*
    let arr = [1, 2, 3, 4]; //[1, 4, 9, 16]
    let squareArr = arr.map(i => {
        return i * i;
    });
*/