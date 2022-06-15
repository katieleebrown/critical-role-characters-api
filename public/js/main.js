// Updates on page load - character boxes and actor name dropdown
document.addEventListener("DOMContentLoaded", displayTheThings)

function displayTheThings() {
    updateActorDropdown()
    displayCharacters()
    console.log('The things have been displayed')
}

function updateActorDropdown() {
    let dropdown = document.querySelector('#actorName')
    dropdown.length = 1

    let url = ``

    fetch(url)
        .then(res => res.json())
        .then(data => {
            let option

            for (let i = 0; i < data.results.length; i++) {
                option = document.createElement('option')
                option.text = data.results[i].actor
                option.value = data.results[i].actorIndex
                dropdown.add(option)
            }
        })
}

function displayCharacters() {

}

// Toggle "other" text box for actor name dropdown
function checkvalue(val) {
    if (val === 'other') {
        document.getElementById('otherActor').style.display = 'flex'
    }
    else {
        document.getElementById('color').style.display = 'none'
    }
}

