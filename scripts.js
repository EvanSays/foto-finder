var inputTitle = document.getElementById('input-title');
var inputCaption = document.getElementById('input-caption');
var albumBtn = document.getElementById('add-to-album-btn');
var cardDelBtn = document.getElementById('card-icon-delete')
var photoAlbum = document.getElementById("photo-album");
var fileValue = document.getElementById("file-name")
var workpls = document.getElementById("file")
var welcomeText = document.getElementsByClassName("welcome-text")


function AlbumCard(title, caption) {
    this.caption = inputCaption.value;
    console.log(this.caption)
    this.title = inputTitle.value;
    console.log(this.title)
}

function checkDisable() {
    if (inputTitle.value !== "" && inputCaption.value !== "" &&
        fileValue.innerHTML !== "Choose File") {
        albumBtn.disabled = false;
    }
}

function removeStartTags() {
  for (i = welcomeText.length-1; i >= 0; i--) {
    welcomeText[i].remove();
  }
}

inputTitle.addEventListener('input', function() {
    checkDisable()
})

inputCaption.addEventListener('input', function() {
    checkDisable()
})

photoAlbum.addEventListener('click', function(e) {
    if (e.target.className === "card-icon-fav") {
        console.log('a thing happened');
        var thisFooter = e.target.parentNode;
        var newIcon = document.createElement("IMG");
        newIcon.setAttribute("class", "card-icon-fav-active")
        newIcon.setAttribute("src", "photos/favorite-active.svg")
        thisFooter.appendChild(newIcon)
        e.target.remove();
    }
    if (e.target.className === 'card-icon-fav-active') {
        var otherFooter = e.target.parentNode;
        var otherIcon = document.createElement("IMG");
        otherIcon.setAttribute("class", "card-icon-fav")
        otherIcon.setAttribute("src", "photos/favorite.svg")
        otherFooter.appendChild(otherIcon)
        e.target.remove();
    }
})

photoAlbum.addEventListener('click', function(e) {
    if (e.target.className === "card-icon-delete" || e.target.className === "card-icon-delete-active")
        e.target.parentNode.parentNode.remove();
})

var inputs = document.querySelectorAll('.inputfile');
Array.prototype.forEach.call(inputs, function(input) {
    var label = input.nextElementSibling,
        labelVal = label.innerHTML;

    input.addEventListener('change', function(e) {
        var fileName = '';
        if (this.files && this.files.length > 1)
            fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
        else
            fileName = e.target.value.split('\\').pop();

        if (fileName)
            document.getElementById('file-name').innerHTML = fileName;
        else {
            label.innerHTML = labelVal;
        }
        checkDisable();
    });
});

albumBtn.addEventListener('click', function() {
    removeStartTags();
    var newPhotoCard = new AlbumCard();
    var newCardWrapper = document.createElement("ARTICLE");
    var fileName = document.getElementById('file-name').innerHTML;
    var targetCard = document.getElementById(fileName);
    var newTitle = document.createElement("H2");
    var newTitleText = document.createTextNode(newPhotoCard.title);
    var newPhotoElement = document.createElement("IMG");
    var newPhotoURL = "photos/" + fileName;
    var cardContent = document.createElement("P");
    var newCaptionText = document.createTextNode(newPhotoCard.caption);
    var trashIconStd = document.createElement("IMG")
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
})
