var titleGen = getElementById('title-gen');
var captionGen = getElementById('caption-gen');
var chooseFileBtn = getElementById('choose-file-btn');
var saveBtn = getElementById('choose-file-btn');
var cardDelBtn = getElementsByClassName('card-del-btn')
var favIconBtn = getElementsByClassName('card-icon-fav')

function AlbumCard {
  this.caption = caption;
  this.title = title;
}

AlbumCard.prototype.image = function() {
}

AlbumCard.prototype.delete = function() {
  this = null;
}

delBtn.addEventListener('click', delete())
