var h2element=document.createElement('h2')
h2element.textContent="Kinolarni tanlang"
h2element.style.margin="0px 0px"
h2element.style.color="red"
h2element.style.width="100%"
h2element.setAttribute('class', 'd-flex justify-content-center border')


var divElement=document.createElement('div')
divElement.setAttribute('class', ' w-100' )
divElement.style.background="#EDF3F8"
divElement.style.width="100%"


var ulElement=document.createElement('ul')
ulElement.setAttribute('class','row')

for(let i=0; i<movies.length; i++){
    var leElement=document.createElement('li')
    leElement.setAttribute('class','card col-3 ms-5 mt-3')
    leElement.style.background='rgba(12,134,32,1)'
    var h3Element=document.createElement('h5')
    var imgElement=document.createElement('img')
    var yearelement=document.createElement('h6')
    var dercelement=document.createElement('p')
    var actelement=document.createElement('p')
    var pElement=document.createElement('p')

    imgElement.src=movies[i].imageUrl
    h3Element.textContent="Name:"+movies[i].title
    yearelement.textContent="Year:"+ " " +movies[i].year
    dercelement.textContent="Derectors: " + movies[i].director
    actelement.textContent="Actors: " + movies[i].actors
    pElement.textContent="Discirption: " + movies[i].description
    imgElement.style.width="100%"
    imgElement.style.height="370px"
    console.log(movies[i].title)
    for(let j=0; j<movies[i].genres.length;j++){
        var h5Element=document.createElement('h5')
        h5Element.textContent="Ganers:"+movies[i].genres[j]

    }
    leElement.appendChild(imgElement)
    leElement.appendChild(h3Element)
    leElement.appendChild(h5Element)
    leElement.appendChild(yearelement)
    leElement.appendChild(dercelement)
    leElement.appendChild(actelement)
    leElement.appendChild(pElement)
    ulElement.appendChild(leElement)
}



document.body.appendChild(divElement)
divElement.appendChild(h2element)
divElement.appendChild(ulElement)