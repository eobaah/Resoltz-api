DROP TABLE blogPosts;

CREATE TABLE IF NOT EXISTS blogPosts(
  id SERIAL PRIMARY KEY,
  title VARCHAR( 3000 ),
  author VARCHAR( 3000 ),
  snippet VARCHAR( 3000 ),
  blog_entry VARCHAR( 3000 ),
  post_date DATE default current_date,
  image_url VARCHAR ( 3000 )
);

INSERT INTO blogPosts( title, author, snippet, blog_entry, image_url)
VALUES ( 'Welcome to blogging', 'Bill Bradley', 'All about blogging and living in the Bay Area',
  'Raw denim poutine pinterest direct trade, fixie before they sold out coloring book shabby chic.
  Street art vice live-edge, lumbersexual shabby chic helvetica taxidermy photo booth mixtape hashtag.
  Green juice +1 hammock try-hard, iPhone tote bag bespoke vice 8-bit. Bitters lumbersexual cliche pinterest,
  austin photo booth migas tumblr health goth. Ramps brunch flannel austin, vinyl chia shoreditch taxidermy kogi
  narwhal celiac pour-over chicharrones butcher meditation. Heirloom hell of messenger bag, biodiesel authentic
  four loko fingerstache vaporware glossier air plant bicycle rights yuccie keytar keffiyeh. Kale chips fap fixie
  tumblr you probably haven', 'http://az616578.vo.msecnd.net/files/2015/11/29/635844378262494043-971784905_jumphipster.gif');

INSERT INTO blogPosts( title, author, snippet, blog_entry, image_url)
VALUES ( 'Welcome to blogging', 'Bill Bradley', 'All about blogging and living in the Bay Area',
  'Raw denim poutine pinterest direct trade, fixie before they sold out coloring book shabby chic.
  Street art vice live-edge, lumbersexual shabby chic helvetica taxidermy photo booth mixtape hashtag.
  Green juice +1 hammock try-hard, iPhone tote bag bespoke vice 8-bit. Bitters lumbersexual cliche pinterest,
  austin photo booth migas tumblr health goth. Ramps brunch flannel austin, vinyl chia shoreditch taxidermy kogi
  narwhal celiac pour-over chicharrones butcher meditation. Heirloom hell of messenger bag, biodiesel authentic
  four loko fingerstache vaporware glossier air plant bicycle rights yuccie keytar keffiyeh. Kale chips fap fixie
  tumblr you probably haven', 'http://az616578.vo.msecnd.net/files/2015/11/29/635844378262494043-971784905_jumphipster.gif');

  DROP TABLE blogWorkout;

  CREATE TABLE IF NOT EXISTS blogWorkout(
    id SERIAL PRIMARY KEY,
    weight VARCHAR( 3000 ),
    calories VARCHAR( 3000 ),
    workout_date DATE default current_date,
    workout_image_url VARCHAR ( 3000 )
  );

  INSERT INTO blogWorkout( weight, calories, workout_image_url)
  VALUES ( 215, 1000, 'http://az616578.vo.msecnd.net/files/2015/11/29/635844378262494043-971784905_jumphipster.gif');
