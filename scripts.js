var inputTitle = document.getElementById('input-title');
var inputCaption = document.getElementById('input-caption');
var albumBtn = document.getElementById('add-to-album-btn');
var cardDelBtn = document.getElementById('card-icon-delete')
var photoAlbum = document.getElementById("photo-album");

function AlbumCard(title, caption) {
  this.caption = inputCaption.value;
  console.log(this.caption)
  this.title = inputTitle.value;
  console.log(this.title)
}



photoAlbum.addEventListener('click', function(e) {
  if (e.target.className === "card-icon-fav") {
    var thisFooter = e.target.parentNode;
    var newIcon = document.createElement("IMG");
    newIcon.setAttribute("class", "card-icon-fav-active")
    newIcon.setAttribute("src", "photos/favorite-active.svg")
    thisFooter.appendChild(newIcon)
    e.target.remove(this);
}})

photoAlbum.addEventListener('click', function(e) {
  if (e.target.className === "card-icon-fav-active") {
    var thisFooter = e.target.parentNode;
    var newIcon = document.createElement("IMG");
    newIcon.setAttribute("class", "card-icon-fav")
    newIcon.setAttribute("src", "photos/favorite.svg")
    thisFooter.appendChild(newIcon)
    e.target.remove();
}})

photoAlbum.addEventListener('click', function(e) {
  if (e.target.className === "card-icon-delete" || e.target.className === "card-icon-delete-active")
  e.target.parentNode.parentNode.remove();
})

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
  var targetCard = document.getElementById(fileName);
  var newTitle = document.createElement("H2");
  var newTitleText = document.createTextNode(newPhotoCard.title);
  var newPhotoElement = document.createElement("IMG");
  var newPhotoURL = "photos/"+fileName;
  var cardContent = document.createElement("P");
  var newCaptionText = document.createTextNode(newPhotoCard.caption);  var trashIconStd = document.createElement("IMG")
  var trashIconActv = document.createElement("IMG");
  var newCardFooter = document.createElement("FOOTER");
  var favoriteIconStd = document.createElement("IMG");
  var favoriteIconActv = document.createElement("IMG");


  newCardWrapper.setAttribute('class', "card-wrapper");
  newCardWrapper.setAttribute('id', fileName);
  newTitle.setAttribute('class', "card-header");
  newPhotoElement.setAttribute("src", newPhotoURL);
  newPhotoElement.setAttribute("class", "card-img");
  cardContent.setAttribute("class", "card-content");
  trashIconStd.setAttribute("src", "photos/delete.svg");
  trashIconStd.setAttribute("class", "card-icon-delete");
  favoriteIconStd.setAttribute("src", "photos/favorite.svg");
  favoriteIconStd.setAttribute("class", "card-icon-fav");

  photoAlbum.appendChild(newCardWrapper);
  newCardWrapper.appendChild(newTitle);
  newTitle.appendChild(newTitleText);
  newCardWrapper.appendChild(newPhotoElement);
  newCardWrapper.appendChild(cardContent);
  cardContent.appendChild(newCaptionText);
  newCardWrapper.appendChild(newCardFooter);
  newCardFooter.appendChild(favoriteIconStd);
  newCardFooter.appendChild(trashIconStd);
  // trashIconActv.setAttribute("src", "photos/delete-active.svg")
  // trashIconActv.setAttribute("class", "card-icon-delete-active")
  // favoriteIconActv.setAttribute("class", "card-icon-fav-active")
  // favoriteIconActv.setAttribute("src", "photos/favorite-active.svg")
  // newCardFooter.appendChild(trashIconActv)
  // newCardFooter.appendChild(favoriteIconActv)

})
