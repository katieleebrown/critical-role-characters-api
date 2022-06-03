const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const characters = {
    'jester': {
        'character': 'Jester Lavorre',
        'actor': 'Laura Bailey',
        'class': 'Cleric',
        'campaign': 'Campaign 2'
    },
    'caleb': {
        'character': 'Caleb Widowgast',
        'actor': `Liam O'Brien`,
        'class': 'Wizard',
        'campaign': 'Campaign 2'
    },
    'nott': {
        'character': 'Nott the Brave/Veth Brenatto',
        'actor': `Emmy Award Winning Sam Riegel`,
        'class': 'Rogue',
        'campaign': 'Campaign 2'
    },
    'yasha': {
        'character': 'Yasha Nydoorin',
        'actor': `Ashley Johnson`,
        'class': 'Barbarian',
        'campaign': 'Campaign 2'
    },
    'beau': {
        'character': 'Beauregard Lionett',
        'actor': `Marisha Ray`,
        'class': 'Monk',
        'campaign': 'Campaign 2'
    },
    'ford': {
        'character': 'Ford Stone',
        'actor': `Travis Willingham`,
        'class': ['Warlock', 'Paladin'],
        'campaign': 'Campaign 2'
    },
    'mollymauk': {
        'character': 'Mollymauk Tealeaf',
        'actor': `Taliesin Jaffe`,
        'class': 'Blood Hunter',
        'campaign': 'Campaign 2'
    },
    'caduceus': {
        'character': 'Caduseus Clay',
        'actor': `Taliesin Jaffe`,
        'class': 'Cleric',
        'campaign': 'Campaign 2'
    },
    'unknown': {
        'name': 'Critical fail! Looks like your character does not exist',
        'actor': 'Critical fail! Looks like your name does not exist',
        'class': 'Critical fail! Looks like your name does not exist',
        'campaign': 'Critical fail! Looks like your character does not exist'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const characterName = request.params.name.toLowerCase()
    if (characters[characterName]) {
        response.json(characters[characterName])
    } else {
        response.json(characters['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
})