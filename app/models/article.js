const promise = require( 'bluebird' )
const options = { promiseLib: promise }

const pgp = require( 'pg-promise' )( options )
const CONNECTION_STRING = `postgres://apigene@resoltz-api-pg:Resoltz21@resoltz-api-pg.postgres.database.azure.com:5432/resoltzapi?ssl=true`
const db = pgp( CONNECTION_STRING )

const Resoltzapi = {
  getAllUsersMeasurements: () => {
    let measurements = db.any(`SELECT * FROM measurements ORDER BY AgendaSlotId ASC`,[])
    return measurements

  }
}
Resoltzapi.getAllUsersMeasurements().then( results => {
  console.log(results);
})
module.exports = {Resoltzapi}
