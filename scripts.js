var inputTitle = document.getElementById('input-title');
var inputCaption = document.getElementById('input-caption');
// var chooseFileBtn = getElementById('choose-file-btn');
var albumBtn = document.getElementById('add-to-album-btn');
// var cardDelBtn = getElementsByClassName('card-del-btn')
// var favIconBtn = getElementsByClassName('card-icon-fav')
//
var photoAlbum = document.getElementById("photo-album");

function AlbumCard(title, caption, img) {
  this.caption = inputCaption.value;
  console.log(this.caption)
  this.title = inputTitle.value;
  console.log(this.title)
}



//
AlbumCard.prototype.image = function() {
  var newPhoto = "/photos/"+document.getElementById('file-name').innerHTML
}

//
// AlbumCard.prototype.delete = function() {
//   this = null;
// }
//
// delBtn.addEventListener('click', delete())


var inputs = document.querySelectorAll( '.inputfile' );
Array.prototype.forEach.call( inputs, function( input )
{
	var label	 = input.nextElementSibling,
		labelVal = label.innerHTML;

	input.addEventListener( 'change', function( e )
	{
		var fileName = '';
		if( this.files && this.files.length > 1 )
			fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
		else
			fileName = e.target.value.split( '\\' ).pop();

		if( fileName )
			document.getElementById( 'file-name' ).innerHTML = fileName;
		else
			label.innerHTML = labelVal;
	});
});

albumBtn.addEventListener('click', function()
{
  var newPhotoCard = new AlbumCard();
  var newCardWrapper = document.createElement("ARTICLE");
  var fileName = document.getElementById( 'file-name' ).innerHTML;
  newCardWrapper.setAttribute('class', "card-wrapper")
  newCardWrapper.setAttribute('id', fileName);
  photoAlbum.appendChild(newCardWrapper);
  var targetCard = document.getElementById(fileName);
  var newTitle = document.createElement("H2");
  newTitle.setAttribute('class', "card-header")
  newCardWrapper.appendChild(newTitle);
  var newTitleText = document.createTextNode(newPhotoCard.title);
  newTitle.appendChild(newTitleText);
  var newPhotoElement = document.createElement("IMG");
  var newPhotoURL = "photos/"+fileName;
  newPhotoElement.setAttribute("src", newPhotoURL);
  newPhotoElement.setAttribute("class", "card-img");
  newCardWrapper.appendChild(newPhotoElement);
  var cardContent = document.createElement("P");
  cardContent.setAttribute("class", "card-content");
  newCardWrapper.appendChild(cardContent);
  var newCaptionText = document.createTextNode(newPhotoCard.caption);
  cardContent.appendChild(newCaptionText);
  var newCardFooter = document.createElement("FOOTER");
  newCardWrapper.appendChild(newCardFooter);
  var trashIconStd = document.createElement("IMG")
  var trashIconActv = document.createElement("IMG")
  trashIconStd.setAttribute("src", "photos/delete.svg")
  trashIconStd.setAttribute("class", "card-icon-delete")
  trashIconActv.setAttribute("src", "photos/delete-active.svg")
  trashIconActv.setAttribute("class", "card-icon-delete-active")
  var favoriteIconStd = document.createElement("IMG")
  var favoriteIconActv = document.createElement("IMG")
  favoriteIconStd.setAttribute("src", "photos/favorite.svg")
  favoriteIconStd.setAttribute("class", "card-icon-fav")
  favoriteIconActv.setAttribute("class", "card-icon-fav-active")
  favoriteIconActv.setAttribute("src", "photos/favorite-active.svg")
  newCardFooter.appendChild(favoriteIconStd)
  newCardFooter.appendChild(favoriteIconActv)
  newCardFooter.appendChild(trashIconStd)
  newCardFooter.appendChild(trashIconActv)
})
