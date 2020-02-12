function ajaxGet(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();
    xhr.addEventListener('readystatechange', function(e) {
       if (this.readyState === 4) {
        if (this.status >= 200 && this.status < 300) {
            console.log('Succès !');
            callback(this.response);

        } else {
            alert('Uner erreur est survenue');
        }
       }
    });
}
