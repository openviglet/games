# Improvements

## Block A — The label page

### §VG2 The press kit has no contact

None of the Viglet sites (viglet.org, cottony, spinhold) carries an e-mail address, so
the page shipped without one rather than with an invented one. The owner picks the
address (press@viglet.com is the usual shape) and makes sure it reaches someone; then a
Contact line joins the facts list in site/index.html.

### §VG3 The page speaks one language

Cottony and Spinhold carry an EN/PT toggle driven by data-i18n attributes in app.js. The
label page is short enough that the same approach costs little: the strings go into a
table, the toggle into the header, and the choice is remembered the way the game sites
remember it. Wait for the copy to settle first, so the translation is done once.

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

### §VG6 The game sites do not lead to the label

Both cottony.viglet.com and spinhold.viglet.com carry assets/viglet-games-lockup.webp,
the plush 3D lockup, in their studio section. It should become the flat mark
(marca/logo/viglet-games.svg in the visibility repository) and the lockup should link to
https://games.viglet.com/. The change is made in the cottony and spinhold repositories,
after the label page answers.

### §VG7 The company site does not mention the games

One link in the viglet.org footer, Viglet Games -> https://games.viglet.com/, is enough
for now; the enterprise products stay the centre of the site, which is also where the
long-term search bet for Turing lives. The change is made in the site repository after
the label page answers.
