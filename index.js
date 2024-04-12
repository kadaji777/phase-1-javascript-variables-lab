function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42); // Assuming headquarters is at block 42
  }
  
  function distanceFromHqInFeet(someValue) {
    let blocks = distanceFromHqInBlocks(someValue);
    return blocks * 264; // Each block is 264 feet long
  }
  
  function distanceTravelledInFeet(start, destination) {
    let distance = Math.abs(destination - start) * 264;
    return distance;
  }
  
  function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    let fare = 0;
  
    if (distance <= 400) {
      
      fare = 0;
    } else if (distance > 400 && distance <= 2000) {
      
      fare = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500) {
      
      fare = 25;
    } else {
      
      return 'cannot travel that far';
    }
  
    return fare;
  }
