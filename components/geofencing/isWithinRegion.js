

const isWithinRegion = () => {
    let regionLat = 41.724970;
    let regionLong = -87.807030;
    let meters = 200;
    let coef = meters / 111320.0;
    let negCoef = (-1.0 * meters) / 111320.0;

    let newLatitude = regionLat + coef
    let newLongitude = regionLong + (coef / Math.cos(regionLat * (Math.PI / 180)))

    let negNewLatitude = regionLat + negCoef
    let negNewLongitude = regionLong + (negCoef / Math.cos(regionLat * (Math.PI / 180)))

    console.log(newLatitude + ", " + regionLong);
    console.log(regionLat + ", " + newLongitude);
    console.log(negNewLatitude + ", " + regionLong);
    console.log(regionLat + ", " + negNewLongitude);
}

isWithinRegion(41.725146, -87.8421077);