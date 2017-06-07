const promise = require( 'bluebird' )
const options = { promiseLib: promise }
const pgp = require( 'pg-promise' )( options )
const CONNECTION_STRING = `postgres://apigene@resoltz-api-pg:Resoltz21@resoltz-api-pg.postgres.database.azure.com:5432/resoltzapi?ssl=true`

const db = pgp( CONNECTION_STRING )

const Resoltzapi = {

  getAllUsers: () => {
    return db.any(`SELECT * FROM user_details ORDER BY dob ASC`,[])
  }
  //
  // getBook: (id) => {
  //   return db.one(`SELECT * FROM bookstore WHERE id=$1`,[id])
  // },
  //
  // queryString: (input) => {
  //   input = `%${input}%`
  //   return db.any(`
  //     SELECT * FROM bookstore
  //     WHERE UPPER(title) like UPPER($1)
  //     OR UPPER(author) like UPPER($1)
  //     OR UPPER(genre) like UPPER($1)`,
  //     [input])
  // },
  //
  // deleteBook: id => {
  //   return db.none(`DELETE FROM bookstore WHERE id=$1`,[id])
  // },
  //
  // createBook: ( { title, author, preview, genre, image_url }) => {
  //   return db.any(
  //     `INSERT INTO bookstore
  //       ( title, author, preview, genre, image_url )
  //     VALUES
  //       ( $1, $2, $3, $4, $5)`,
  //     [ title, author, preview, genre, image_url ]
  //   )
  // },
  //
  // editBook: ( id, book ) => {
  //   return db.oneOrNone(
  //      `UPDATE bookstore
  //      SET title=$2, author=$3, preview=$4, genre=$5, image_url=$6
  //      WHERE id=$1`,
  //      [id, book.title, book.author, book.preview, book.genre, book.image_url] )
  // }
}

module.exports = Resoltzapi;
