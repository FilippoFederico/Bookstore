const url = 'https://api.myjson.com/bins/udbm5';
fetch(url, {


    }) // Call the fetch function passing the url of the API as a parameter

    .then(function (response) {
        return response.json();
        // Your code for handling the data you get from the API
    })
    .then(function (data) {
        var dataBooks = data.books;
        console.log(dataBooks)


        console.log('ciaoo');



        function insideDiv() {
            var divIn = document.querySelector('#main_div');

            for (i = 0; i < dataBooks.length; i++) {
                var booksImage = data.books[i].portada;
                var titleCard = data.books[i].titulo;
                var descrCard = data.books[i].descripcion;
                console.log(titleCard)

                
                var midDiv = document.createElement('div');
                midDiv.setAttribute('class', 'flip');
                
                var divCard = document.createElement('div');
                divCard.setAttribute('class', 'class_div card');
                
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
                
                divIn.appendChild(midDiv);
                midDiv.appendChild(divCard)
                divCard.appendChild(divFront);
                divFront.appendChild(eachImg);     
                divCard.appendChild(divBack);
                
                divBack.appendChild(h1Card);
                divBack.appendChild(textCard);
                h1Card.innerHTML = titleCard;
                textCard.innerHTML = descrCard;
//                h1Card.appendChild(titleCard);
//                divBack.innerHTML = 'ciaoB';
//                textCard.appendChild(descrCard);
                
            }
        }
        insideDiv()

    })
    .catch(err => console.log(err));
