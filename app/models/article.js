const promise = require( 'bluebird' )
const options = { promiseLib: promise }

const pgp = require( 'pg-promise' )( options )
const CONNECTION_STRING = `postgres://apigene@resoltz-api-pg:Resoltz21@resoltz-api-pg.postgres.database.azure.com:5432/resoltz-blog?ssl=true`
const db = pgp( CONNECTION_STRING )

const getAllPosts = () =>
  db.any( "SELECT * FROM blogPosts ORDER BY post_date ASC" )

const getPost = ( id ) =>
  db.one( `SELECT * FROM blogPosts where id=$1`, [ id ] )

const createPost = ( { title, author, snippet, blog_entry, image_url, tags } ) =>
  db.any(
    `INSERT INTO blogPosts
       ( title, author, snippet, blog_entry, image_url, tags )
    VALUES
      ( $1, $2, $3, $4, $5, $6 )`,
    [ title, author, snippet, blog_entry, image_url, tags ] )

const editPost = ( id, post ) => {
  return db.oneOrNone( `UPDATE
  blogPosts SET title=$2, author=$3, snippet=$4, blog_entry=$5, image_url=$6,
  tags=$7  WHERE id=$1`,
  [ id, post.title, post.author, post.snippet, post.blog_entry,
  post.image_url, post.tags ] )
}

const deletePost = id =>
  db.none( `DELETE FROM blogPosts WHERE id=$1`, [ id ] )


module.exports = {
  db,
  getAllPosts,
  getPost,
  createPost,
  editPost,
  deletePost
}
