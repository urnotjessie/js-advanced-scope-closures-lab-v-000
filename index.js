function produceDrivingRange(range) {
  return function(start, end) {
    blocks = Number(end.split('th')[0]) - Number(start.split('th')[0])
    if(blocks > range) {
      return `${blocks - range} blocks out of range`;
    }else {
      return `within range by ${range - blocks}`
    }
  }
}

function produceTipCalculator(tipPercentage) {
  return function(tips) {
    return tips * tipPercentage;
  }
}

function createDriver() {
  let DriverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverId;
    }
  }
}
