function carRenting(cars, distance) {
  const goodCars = cars.filter(car => {
    //to find max distance => (fuel amount * 100 km) / average consumption per 100 km
    const maxDistance = (car.fuelAmount * 100) / car.avgConsumption;
    return maxDistance >= distance;
  });

  if (goodCars.length === 0) {
    return null;
  }

  return goodCars.map(car => car.type);
}

module.exports = carRenting