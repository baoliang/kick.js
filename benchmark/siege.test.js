var siege = require('siege');

siege()
  .on(3000)
  .concurrent(20)
  .for(100000).times
  .get('/')
  .get('/redis')
  .get('/user/30/abcdefg')
  .attack()

// siege(__dirname + '/app.js')
//   .on(4001)
//   .for(10000).times
//   .get('/')
//   .get('/user/abcdefg')
//   .attack()

// siege(__dirname + '/node.js')
//   .for(10000).times
//   .get('/')
//   .get('/user/abcdefg')
//   .attack()
