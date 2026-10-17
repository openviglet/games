# Improvements

## Block A — The label page

### §VG2 The press kit has no contact

None of the Viglet sites (viglet.org, cottony, spinhold) carries an e-mail address, so
the page shipped without one rather than with an invented one. The owner picks the
address (press@viglet.com is the usual shape) and makes sure it reaches someone; then a
Contact line joins the facts list in site/index.html, with a data-i18n key and its
Portuguese in the PT table of site/app.js (the page is bilingual since VG3).

## Block B — Steam presence

### §VG4 No developer page on Steam

Steam gives every developer and publisher a homepage that players follow; followers get
a notice when a new game from that name is released. In Steamworks the developer and
publisher fields of both games should read Viglet Games, and the developer homepage is
created and filled with the flat logo and the same one-line description as the label
page. Then the page links to it from the header.

### §VG5 No wishlist button

As soon as a game's store page is public, the soon pill on its card in site/index.html
becomes a Wishlist on Steam button to store.steampowered.com/app/<id>, and the status
line drops 'Coming to Steam' for the release window if one is announced. One game can
switch before the other.

## Block C — Links and measurement

### §VG7 The company site does not mention the games

One link in the viglet.org footer, Viglet Games -> https://games.viglet.com/, is enough
for now; the enterprise products stay the centre of the site, which is also where the
long-term search bet for Turing lives. The change is made in the site repository after
the label page answers.
