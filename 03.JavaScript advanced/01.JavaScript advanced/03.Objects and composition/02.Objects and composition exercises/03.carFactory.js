function carFactory(obj) {
  let engine = {
    'Small engine': { power: 90, volume: 1800 },
    'Normal engine': { power: 120, volume: 2400 },
    'Monster engine': { power: 200, volume: 3500 },
  }

  let carriage = {
    'Hatchback': { type: 'hatchback', color: null },
    'Coupe': { type: 'coupe', color: null },
  }

  let result = {
    model: '',
    engine: {},
    carriage: {type: '', color: ''},
    wheels: [],
  }
  for (let key in obj) {
    if(key === 'model') {
      result.model = obj[key]
    } else if (key === 'power') {
      if (obj[key] <= 90) {
        result.engine = engine['Small engine']
      } else if (obj[key] <= 120) {
        result.engine = engine['Normal engine']
      } else {
        result.engine = engine['Monster engine']
      }
    } else if (key === 'carriage') {
      result.carriage.type = obj[key]
      result.carriage.color = obj['color']
    } else if (key === 'wheelsize') {
      let size = 0
      if (obj[key] % 2 === 0) {
        size = obj[key] - 1
      } else {
        size = obj[key]
      }
    result.wheels.splice(0, 0, size, size, size, size)
    }
  }
  return result
}

carFactory({
  model: 'Opel Vectra',
  power: 110,
  color: 'grey',
  carriage: 'coupe',
  wheelsize: 17
});
