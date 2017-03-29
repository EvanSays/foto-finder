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
  var fileName = document.getElementById( 'file-name' ).innerHTML
  newCardWrapper.setAttribute('id', fileName);
  photoAlbum.appendChild(newCardWrapper);
  var newTitle = document.createElement("H2");
  fileName.appendChild(document.createTextNode(newPhotoCard.title));
  })
