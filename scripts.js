// var titleGen = getElementById('title-gen');
// var captionGen = getElementById('caption-gen');
// var chooseFileBtn = getElementById('choose-file-btn');
// var saveBtn = getElementById('choose-file-btn');
// var cardDelBtn = getElementsByClassName('card-del-btn')
// var favIconBtn = getElementsByClassName('card-icon-fav')
//
// function AlbumCard {
//   this.caption = caption;
//   this.title = title;
// }
//
// AlbumCard.prototype.image = function() {
// }
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
			label.getElementById( 'span' ).innerHTML = fileName;
		else
			label.innerHTML = labelVal;
	});
});
