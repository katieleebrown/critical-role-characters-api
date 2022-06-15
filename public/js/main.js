const deleteText = document.querySelectorAll('.fa-trash')
const thumbText = document.querySelectorAll('.fa-dice-20')

Array.from(deleteText).forEach((element) => {
    element.addEventListener('click', deleteCharacter)
})

Array.from(thumbText).forEach((element) => {
    element.addEventListener('click', addLike)
})

async function deleteCharacter() {
    // Change this
    const sName = this.parentNode.childNodes[1].innerText
    const bName = this.parentNode.childNodes[3].innerText
    try {
        const response = await fetch('deleteCharacter', {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                // Change this
                'stageNameS': sName,
                'birthNameS': bName
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()

    } catch (err) {
        console.log(err)
    }
}

async function addLike() {
    // Change this
    const sName = this.parentNode.childNodes[1].innerText
    const bName = this.parentNode.childNodes[3].innerText
    const tLikes = Number(this.parentNode.childNodes[5].innerText)
    try {
        const response = await fetch('addOneLike', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                // Change this
                'stageNameS': sName,
                'birthNameS': bName,
                'likesS': tLikes
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()

    } catch (err) {
        console.log(err)
    }
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

