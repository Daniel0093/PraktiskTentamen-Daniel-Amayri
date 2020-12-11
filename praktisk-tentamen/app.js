/* Skriv din kod här */

const url = 'https://restcountries.eu/rest/v2/all';

fetch(url).then(
    function (response) {
        return response.json()
    }
).then(
    function (data) {
        let mainCountries = [];
        console.log(data[0])

        for (i = 0; i < 3; i++) {
            let ran = Math.floor(Math.random() * data.length);
            console.log(ran)

            mainCountries.push(
                new Country(data[ran].name, data[ran].timezones, data[ran].flag)
            )
            console.log(mainCountries)
        }


        for (c of mainCountries) {
            c.showName();
            c.showImg();

        }
        console.log(c)


    }
)

function Country($name, $timeZone, $img) {
    this.namn = $name;
    this.timeZone = $timeZone;
    this.img = $img;
}

Country.prototype.showName = function () {
    let contName = document.querySelector('h1');
    contName.innerText = this.name;
}

Country.prototype.showImg = function () {
    let contImg = document.querySelector('img');
    contImg.src = this.img;
}


