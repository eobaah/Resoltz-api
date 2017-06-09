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

  createUserMeasurements: ( { Userid, Chest, Waist, Hips, Weight, Calories, AvgHeartRate, MaxHeartRate } ) => {
    return db.any(
      `INSERT INTO measurements
        ( Userid, Chest, Waist, Hips, Weight, Calories, AvgHeartRate, MaxHeartRate  )
      VALUES
        ( $1, $2, $3, $4, $5, $6, $7, $8 )`,
      [ Userid, Chest, Waist, Hips, Weight, Calories, AvgHeartRate, MaxHeartRate ]
    )
  },

  editUserMeasurements: ( userid, data ) => {
    return db.oneOrNone(
      `UPDATE measurements
      SET Gender=$2, Dob=$3, CurrentWeight=$4, GoalWeight=$5, HeightFeet=$6, HeightInches=$7, Goal=$8, Intensity=$9, Referrer=$10, ProfileImageUri=$11, FavoriteActivities=$12
      WHERE userid=$1`,
      [ userid, data.Gender, data.Dob, data.CurrentWeight, data.GoalWeight, data.HeightFeet, data.HeightInches, data.Goal, data.Intensity, data.Referrer, data.ProfileImageUri, data.FavoriteActivities ]
    )
  },

  removeUserMeasurements: ( userid ) => {
    return db.none(
      `DELETE FROM measurements
      WHERE userid=$1`,
      [ userid ]
    )
  },



  getAllUsersSchool: () => {
    return db.any(`SELECT * FROM user_school_details ORDER BY UserId DESC`,[])
  },

  createUserSchool: ( { Userid, SchoolName, ClassYear, ResidentialCollege, Dorm, Major, CampusGroup, SportsTeam, Role } ) => {
    return db.any(
      `INSERT INTO user_school_details
        ( Userid, SchoolName, ClassYear, ResidentialCollege, Dorm, Major, CampusGroup, SportsTeam, Role )
      VALUES
        ( $1, $2, $3, $4, $5, $6, $7, $8, $9 )`,
      [ Userid, SchoolName, ClassYear, ResidentialCollege, Dorm, Major, CampusGroup, SportsTeam, Role ]
    )
  },

  editUserSchool: ( userid, data ) => {
    return db.oneOrNone(
      `UPDATE user_school_details
      SET SchoolName=$2, ClassYear=$3, ResidentialCollege=$4, Dorm=$5, Major=$6, CampusGroup=$7, SportsTeam=$8, Role=$9
      WHERE userid=$1`,
      [ Userid, data.SchoolName, data.ClassYear, data.ResidentialCollege, data.Dorm, data.Major, data.CampusGroup, data.SportsTeam, data.Role ]
    )
  },

  removeUserSchool: ( userid ) => {
    return db.none(
      `DELETE FROM user_school_details
      WHERE userid=$1`,
      [ userid ]
    )
  },
}

module.exports = {Resoltzapi, db};
