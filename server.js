const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const characters = {
    'grog': {
        'character': 'Grog Strongjaw',
        'actor': 'Travis Willingham',
        'class': 'Barbarian',
        'campaign': 'Campaign 1',
        'image': 'https://static.wikia.nocookie.net/criticalrole/images/4/45/Grog2.png/revision/latest?cb=20151228165057'
    },
    'keyleth': {
        'character': 'Keyleth',
        'actor': 'Marisha Ray',
        'class': 'Druid',
        'campaign': 'Campaign 1',
        'image': 'https://static.wikia.nocookie.net/criticalrole/images/c/c2/Keyleth2.png/revision/latest/scale-to-width-down/350?cb=20151228163618'
    },
    'percy': {
        'character': 'Percival Fredrickstein von Musel Klossowski de Rolo III',
        'actor': 'Taliesin Jaffe',
        'class': 'Fighter',
        'campaign': 'Campaign 1',
        'image': 'https://static.wikia.nocookie.net/criticalrole/images/7/74/No-mercy_Percy_-_Welume.jpg/revision/latest?cb=20220206232255'
    },
    'pike': {
        'character': 'Pike Trickfoot',
        'actor': 'Ashley Johnson',
        'class': 'Cleric',
        'campaign': 'Campaign 1',
        'image': 'https://static.wikia.nocookie.net/criticalrole/images/3/31/Pike.png/revision/latest/scale-to-width-down/200?cb=20150418162703'
    },
    'scanlan': {
        'character': 'Scanlan Shorthalt',
        'actor': 'Emmy Award Winning Sam Riegel',
        'class': 'Bard',
        'campaign': 'Campaign 1',
        'image': 'https://www.sideshow.com/wp/wp-content/uploads/2022/01/vm_scanlan.jpg'
    },
    'taryon': {
        'character': 'Taryon Darrington',
        'actor': 'Emmy Award Winning Sam Riegel',
        'class': 'Artificer',
        'campaign': 'Campaign 1',
        'image': 'https://static.wikia.nocookie.net/criticalrole/images/8/8b/Episode-85-Taryon-Darrington-by-Hugo-Cardenas.jpg/revision/latest?cb=20170226182003'
    },
    'vax': {
        'character': `Vax'ildan`,
        'actor': `Liam O'Brien`,
        'class': ['Rogue', 'Paladin'],
        'campaign': 'Campaign 1',
        'image': 'https://cdn.vox-cdn.com/thumbor/m_RB5cHqyz6VvK_lZ1LCb0jRUyU=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/23253243/Screen_Shot_2022_02_17_at_3.34.23_PM__2__copy.jpg'
    },
    'vex': {
        'character': `Vex'ahlia`,
        'actor': 'Laura Bailey',
        'class': 'Ranger',
        'campaign': 'Campaign 1',
        'image': 'https://static.wikia.nocookie.net/criticalrole/images/8/83/Vex%27ahlia_-_JustHustina.jpg/revision/latest?cb=20210218222013'
    },
    'beau': {
        'character': 'Beauregard Lionett',
        'actor': `Marisha Ray`,
        'class': 'Monk',
        'campaign': 'Campaign 2',
        'image': 'https://images.squarespace-cdn.com/content/v1/58814a7abf629aeb03ec15b1/1534302706077-UKBEMGBLFWP9QN31XFSP/_nikanono.jpg'
    },
    'caduceus': {
        'character': 'Caduceus Clay',
        'actor': `Taliesin Jaffe`,
        'class': 'Cleric',
        'campaign': 'Campaign 2',
        'image': 'https://static.wikia.nocookie.net/criticalrole/images/9/98/IMG_20180728_114227.jpg/revision/latest?cb=20180729160258'
    },
    'caleb': {
        'character': 'Caleb Widowgast',
        'actor': `Liam O'Brien`,
        'class': 'Wizard',
        'campaign': 'Campaign 2',
        'image': 'https://i.etsystatic.com/8939817/r/il/87054c/1958734929/il_fullxfull.1958734929_lll8.jpg'
    },
    'ford': {
        'character': 'Ford Stone',
        'actor': `Travis Willingham`,
        'class': ['Warlock', 'Paladin'],
        'campaign': 'Campaign 2',
        'image': 'https://static.wikia.nocookie.net/criticalrole/images/0/0b/Fjord_and_Melora.jpg/revision/latest?cb=20210613043054'
    },
    'jester': {
        'character': 'Jester Lavorre',
        'actor': 'Laura Bailey',
        'class': 'Cleric',
        'campaign': 'Campaign 2',
        'image': 'https://static.wikia.nocookie.net/criticalrole/images/7/7d/Jester_Official_byArianaOrner.png/revision/latest?cb=20180209185144'
    },
    'mollymauk': {
        'character': 'Mollymauk Tealeaf',
        'actor': `Taliesin Jaffe`,
        'class': 'Blood Hunter',
        'campaign': 'Campaign 2',
        'image': 'https://i.etsystatic.com/27443276/r/il/6c840e/3173227404/il_fullxfull.3173227404_3w3w.jpg'
    },
    'nott': {
        'character': 'Nott the Brave/Veth Brenatto',
        'actor': `Emmy Award Winning Sam Riegel`,
        'class': 'Rogue',
        'campaign': 'Campaign 2',
        'image': 'https://i.etsystatic.com/8939817/r/il/8d473b/1911187820/il_fullxfull.1911187820_n63k.jpg'
    },
    'veth': {
        'character': 'Nott the Brave/Veth Brenatto',
        'actor': `Emmy Award Winning Sam Riegel`,
        'class': 'Rogue',
        'campaign': 'Campaign 2',
        'image': 'https://static.wikia.nocookie.net/criticalrole/images/3/3e/Veth-2020.jpg/revision/latest?cb=20201126114905'
    },
    'yasha': {
        'character': 'Yasha Nydoorin',
        'actor': `Ashley Johnson`,
        'class': 'Barbarian',
        'campaign': 'Campaign 2',
        'image': 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/270644a2-1efa-407b-a67b-0e3277b53834/dc0xcxs-3c1614f1-5559-44a9-8479-06926f8f1868.png/v1/fill/w_900,h_1148,q_80,strp/_critical_role__yasha_by_hes_per_ides_dc0xcxs-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE0OCIsInBhdGgiOiJcL2ZcLzI3MDY0NGEyLTFlZmEtNDA3Yi1hNjdiLTBlMzI3N2I1MzgzNFwvZGMweGN4cy0zYzE2MTRmMS01NTU5LTQ0YTktODQ3OS0wNjkyNmY4ZjE4NjgucG5nIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.H9_-bZtPfPgma37W33jbTzQchfMqYuI8RbNc732q6Os'
    },
    'ashton': {
        'character': 'Ashton Greymoore',
        'actor': 'Taliesin Jaffe',
        'class': 'Barbarian',
        'campaign': 'Campaign 3',
        'image': 'https://cdnb.artstation.com/p/assets/images/images/045/643/847/large/rory-mercury-justdon-t.jpg?1643203731'
    },
    'bertrand': {
        'character': 'Bertrand Bell',
        'actor': 'Travis Willingham',
        'class': 'Fighter',
        'campaign': 'Campaign 3',
        'image': 'https://pbs.twimg.com/media/FCRsuSPVIAAVtdQ.jpg'
    },
    'chetney': {
        'character': `Chetney Pock O'Pea`,
        'actor': 'Travis Willingham',
        'class': ['Blood Hunter', 'Rogue'],
        'campaign': 'Campaign 3',
        'image': 'https://pbs.twimg.com/media/FGOnzPIVIAIlE73?format=jpg&name=900x900'
    },
    'dorian': {
        'character': 'Dorian Storm',
        'actor': 'Robbie Daymond',
        'class': 'Bard',
        'campaign': 'Campaign 3',
        'image': 'https://i.pinimg.com/originals/6f/ee/71/6fee71e17f9b22a0d579396b7668d456.jpg'
    },
    'fearne': {
        'character': 'Fearne Calloway',
        'actor': 'Ashley Johnson',
        'class': 'Druid',
        'campaign': 'Campaign 3',
        'image': 'https://static.wikia.nocookie.net/criticalrole/images/1/1a/Fearne_C3_official_-Hannah_Friederichs.jpg/revision/latest?cb=20211022125518'
    },
    'fresh cut grass': {
        'character': 'Fresh Cut Grass/FCG',
        'actor': 'Emmy Award Winning Sam Riegel',
        'class': 'Cleric',
        'campaign': 'Campaign 3',
        'image': 'https://static.wikia.nocookie.net/criticalrole/images/f/fd/Fcg.jpg/revision/latest?cb=20211022030254'
    },
    'imogen': {
        'character': 'Imogen Temult',
        'actor': 'Laura Bailey',
        'class': 'Sorcerer',
        'campaign': 'Campaign 3',
        'image': 'https://static.wikia.nocookie.net/criticalrole/images/2/25/LauraImogen.png/revision/latest?cb=20211022030117'
    },
    'laudna': {
        'character': 'Laudna',
        'actor': 'Marisha Ray',
        'class': ['Warlock', 'Sorcerer'],
        'campaign': 'Campaign 3',
        'image': 'https://static.wikia.nocookie.net/criticalrole/images/2/2b/Laudna_-_Linda_Lithen.jpg/revision/latest?cb=20220205112845'
    },
    'orym': {
        'character': 'Orym',
        'actor': `Liam O'Brien`,
        'class': 'Fighter',
        'campaign': 'Campaign 3',
        'image': 'https://static.wikia.nocookie.net/criticalrole/images/6/6c/Orym_-_Hannah_Friederichs.jpg/revision/latest?cb=20210628230852'
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