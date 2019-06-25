const url = 'https://api.myjson.com/bins/udbm5';
fetch(url) // Call the fetch function passing the url of the API as a parameter

    .then(function (response) {
        console.log(response)
        return response.json();
        // Your code for handling the data you get from the API
    })
    .then(function (data) {
        var dataBooks = data.books;
        console.log(dataBooks);
        console.log('ciaoo');
        insideDiv(dataBooks)
        //        handleEvent(dataBooks);
        newFunc(dataBooks)

    })
    .catch(err => console.log(err));


//funzione che aggiunge un evento all input html (keyup)
//questa funzione la puoi chiamare dal then block e le puoi passare i tuoi dataBooks come parametri




function insideDiv(dataBooks) {
    var divIn = document.querySelector('#main_div');
    
    divIn.innerHTML = '';
    for (i = 0; i < dataBooks.length; i++) {
    
        var booksImage = dataBooks[i].portada;
        var titleCard = dataBooks[i].titulo;
        var descrCard = dataBooks[i].descripcion;
        console.log(titleCard)


        var midDiv = document.createElement('div');
        midDiv.setAttribute('class', 'flip');

        var divCard = document.createElement('div');
        divCard.setAttribute('class', 'class_div card d-none');

        var divFront = document.createElement('div');
        divFront.setAttribute('class', 'class_div front');

        var divBack = document.createElement('div');
        divBack.setAttribute('class', 'class_div back');


        var eachImg = document.createElement('img');
        eachImg.setAttribute('class', 'class_img');
        eachImg.setAttribute('src', booksImage);

        var h1Card = document.createElement('h1');
        h1Card.setAttribute('class', 'title_card');

        var textCard = document.createElement('p');
        textCard.setAttribute('class', 'text_card');

        var buttCard = document.createElement('button');
        buttCard.setAttribute('class', 'butt_card btn btn-primary');
        buttCard.setAttribute('data-toggle', 'modal');
        buttCard.setAttribute('data-target', '#exampleModal');
        buttCard.setAttribute('value', dataBooks[i].detalle);
        buttCard.addEventListener('click', function (event) {
            popUp(event);
        });

        divIn.appendChild(midDiv);
        midDiv.appendChild(divCard)
        divCard.appendChild(divFront);
        divFront.appendChild(eachImg);
        divCard.appendChild(divBack);

        divBack.appendChild(h1Card);
        divBack.appendChild(textCard);
        h1Card.innerHTML = titleCard;
        textCard.innerHTML = descrCard;

        divBack.appendChild(buttCard);
        buttCard.innerHTML = 'More info';
        //                h1Card.appendChild(titleCard);
        //                divBack.innerHTML = 'ciaoB';
        //                textCard.appendChild(descrCard);

    }
}

function popUp(event) {
    //    console.log(event.target.value)
    var secondImg = event.target.value;

    var newImage = document.createElement('img');

    newImage.setAttribute('src', secondImg);
    newImage.setAttribute('class', 'popup_class')
    var divPopup = document.createElement('div');


    divPopup.appendChild(newImage);

    var contentModal = document.querySelector('.modal-body');
    console.log(contentModal)

    contentModal.innerHTML = '';
    contentModal.appendChild(divPopup);
}



function newFunc(dataBooks) {
    //var dataBooks = data.books;
    var headDiv = document.querySelector('#head_div');

    var searchElem = document.querySelector('#input_id');

    //    console.log(dataBooks)
    //    console.log(inputFeedback)

    searchElem.addEventListener('keyup', function (event) {
        filterBooks(event, dataBooks);
    })
}

function filterBooks(event, dataBooks) {
    console.log(event.target.value);
    var inputValue = event.target.value.toLowerCase()
    

    var newBooks = [];
    for (var i = 0; i < dataBooks.length; i++) {
        if (dataBooks[i].titulo.toLowerCase().indexOf(inputValue) !== -1 || dataBooks[i].descripcion.toLowerCase().indexOf(inputValue) !== -1) {
            newBooks.push(dataBooks[i])
        }


    }
    console.log(newBooks)
    insideDiv(newBooks)
}


