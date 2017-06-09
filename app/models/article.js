const promise = require( 'bluebird' )
const options = { promiseLib: promise }
const pgp = require( 'pg-promise' )( options )
// const CONNECTION_STRING = `postgres://apigene@resoltz-api-pg:Resoltz21@resoltz-api-pg.postgres.database.azure.com:5432/resoltzapi?ssl=true`
const CONNECTION_STRING = `pg://${process.env.USER}@localhost:5432/resoltzapi`

const db = pgp( CONNECTION_STRING )

const Resoltzapi = {

  getAllUsers: () => {
    return db.any(`SELECT * FROM user_details ORDER BY dob ASC`,[])
  },

  createUser: ( { Gender, Dob, CurrentWeight, GoalWeight, HeightFeet, HeightInches, Goal, Intensity, Referrer, ProfileImageUri, FavoriteActivities  } ) => {
    return db.any(
      `INSERT INTO user_details
        ( Gender, Dob, CurrentWeight, GoalWeight, HeightFeet, HeightInches, Goal, Intensity, Referrer, ProfileImageUri, FavoriteActivities  )
      VALUES
        ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
      [ Gender, Dob, CurrentWeight, GoalWeight, HeightFeet, HeightInches, Goal, Intensity, Referrer, ProfileImageUri, FavoriteActivities ]
    )
  },

  editUser: ( userid, user ) => {
    return db.oneOrNone(
      `UPDATE user_details
      SET Gender=$2, Dob=$3, CurrentWeight=$4, GoalWeight=$5, HeightFeet=$6, HeightInches=$7, Goal=$8, Intensity=$9, Referrer=$10, ProfileImageUri=$11, FavoriteActivities=$12
      WHERE userid=$1`,
      [ userid, user.Gender, user.Dob, user.CurrentWeight, user.GoalWeight, user.HeightFeet, user.HeightInches, user.Goal, user.Intensity, user.Referrer, user.ProfileImageUri, user.FavoriteActivities ]
    )
  },

  removeUser: ( userid ) => {
    return db.none(
      `DELETE FROM user_details
      WHERE userid=$1`,
      [ userid ]
    )
  },


  getAllUsersMeasurements: () => {
    return db.any(`SELECT * FROM measurements ORDER BY AgendaSlotId ASC`,[])
  },

  getAllUsersSchool: () => {
    return db.any(`SELECT * FROM user_school_details ORDER BY UserId DESC`,[])
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

  // editBook: ( id, book ) => {
  //   return db.oneOrNone(
  //      `UPDATE bookstore
  //      SET title=$2, author=$3, preview=$4, genre=$5, image_url=$6
  //      WHERE id=$1`,
  //      [id, book.title, book.author, book.preview, book.genre, book.image_url] )
  // }
}

module.exports = {Resoltzapi, db};
