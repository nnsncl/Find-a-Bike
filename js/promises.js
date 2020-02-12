function myPromise1() {
    return new Promise(resolve => {   
        const userInput_ = Number(window.prompt('Saisissez un nombre'));
        setTimeout(() => {
            console.log('Résultat initial : ' + userInput_);
            resolve(userInput_);
        }, 3000);
    });
}


function myPromise2(result) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(result * 2);  
            console.log('Résultat multiplié par 2 : ' + result * 2);
        }, 3000);
    });
}

function myPromise3(result) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(result * 3);  
            console.log('Résultat multiplié par 3 : ' + result * 3);
        }, 3000);
    });
}

async function myFinalPromise() {
    const a = await myPromise1();
    const b = await myPromise2(a);
    const c = await myPromise3(b);
    return c;
}

myFinalPromise().then(finalNumber => {
    qs('#promised-result').innerHTML = finalNumber;
});

/*
myPromise1().then(number => {
    myPromise2(number).then(number2 => {
        myPromise3(number2).then(finalNumber => {
            qs('h1').innerHTML = finalNumber;
        });
    })
});
*/
