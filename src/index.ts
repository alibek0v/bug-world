import './styles.css'

// document on load
document.addEventListener('DOMContentLoaded', () => {
    // if path is /home.html
    if (window.location.pathname === '/home.html') {
        startGame()
    }

    // if path is /settings.html
    if (window.location.pathname === '/settings.html') {
        startSettings()
    }
})

function startSettings() {
    // get world-map-file input
    const worldMapFile = document.getElementById(
        'world-map-file'
    ) as HTMLInputElement

    // read file
    worldMapFile.addEventListener('change', () => {
        const file = worldMapFile.files[0]
        if (!file) {
            return
        }

        const reader = new FileReader()
        reader.onload = () => {
            const text = reader.result as string

            // save to localstorage
            localStorage.setItem('mapData', text)

            console.log('Map data saved to localstorage', text)
        }
        reader.readAsText(file)
    })
}

function startGame() {
    const logSwitch = document.getElementById('log-switch') as HTMLInputElement
    const logsList = document.getElementById('logs') as HTMLDivElement

    type Log = {
        text: string
        time: string
    }

    const logs: Log[] = []

    // toggle logs
    logSwitch.addEventListener('change', () => {
        if (logSwitch.checked) {
            logsList.style.display = 'block'
        } else {
            logsList.style.display = 'none'
        }
    })

    const log = document.createElement('div')
    log.classList.add('log')

    // add log
    const addLog = (text: string) => {
        const time = new Date().toLocaleTimeString()
        logs.push({
            text,
            time,
        })

        const newLog = log.cloneNode() as HTMLDivElement
        newLog.innerText = `[${time}] ${text}`
        logsList.prepend(newLog)
    }

    // clear logs
    const clearLogs = () => {
        logs.length = 0
        while (logsList.firstChild) {
            logsList.removeChild(logsList.firstChild)
        }
    }

    // clear logs button
    const clearLogsButton = document.getElementById(
        'clear-logs-button'
    ) as HTMLButtonElement

    clearLogsButton.addEventListener('click', () => {
        clearLogs()
    })

    // div with class 'cell' as template
    const cell = document.createElement('div')
    cell.classList.add('cell')

    // will read from localstorage
    const mapData = localStorage.getItem('mapData') || ''

    console.log('Reading from localstorage', mapData)

    if (!mapData) {
        alert('Map data not found')
    }

    // get gameField
    const gameField = document.getElementById('game-field')
    if (!gameField) {
        alert('Game field not found')
    }

    // set gameField display to grid
    gameField.style.display = 'grid'

    // get gameField size
    let gameFieldWidth = gameField.clientWidth
    let gameFieldHeight = gameField.clientHeight

    // update data on gameField resize
    window.addEventListener('resize', () => {
        gameFieldWidth = gameField.clientWidth
        gameFieldHeight = gameField.clientHeight
    })

    // type of cells
    enum ECells {
        Obstacle = 'obstacle',
        Empty = 'empty',
        BlackNest = 'black-nest',
        RedNest = 'red-nest',
        Food = 'food',
    }

    // start the game
    const gameData = {
        width: 0,
        height: 0,
        // @ts-expect-error fix
        cells: [],
    }

    const updateGameData = () => {
        const map = mapData.split('\n').map(row => row.split(' '))
        const width = +map[0][0]
        const height = +map[1][0]

        // update gameData
        gameData.width = width
        gameData.height = height

        // # obstacle
        // . empty cell (ie, no bug)
        // - empty cell, black swarm nest
        // + empty cell, red swarm nest
        // 1..9 empty cell with number of food units

        // reset cells
        gameData.cells = []

        // create cells
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                const cell = map[i + 2][j]
                switch (cell) {
                    case '#':
                        gameData.cells.push(ECells.Obstacle)
                        break
                    case '.':
                        gameData.cells.push(ECells.Empty)
                        break
                    case '-':
                        gameData.cells.push(ECells.BlackNest)
                        break
                    case '+':
                        gameData.cells.push(ECells.RedNest)
                        break
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        gameData.cells.push(ECells.Food)
                        break
                    default:
                        break
                }
            }
        }
    }

    const updateGameField = () => {
        // update gameField display
        gameField.style.gridTemplateColumns = `repeat(${gameData.width}, 1fr)`
        gameField.style.gridTemplateRows = `repeat(${gameData.height}, 1fr)`

        // remove all children
        while (gameField.firstChild) {
            gameField.removeChild(gameField.firstChild)
        }

        // create cells
        for (let i = 0; i < gameData.height; i++) {
            for (let j = 0; j < gameData.width; j++) {
                const newCell = cell.cloneNode() as HTMLDivElement

                newCell.style.width = `${
                    gameFieldWidth / gameData.width - 10
                }px`
                newCell.style.height = `${
                    gameFieldHeight / gameData.height - 10
                }px`

                // set cell type
                const cellType = gameData.cells[i * gameData.width + j]
                newCell.classList.add(cellType)

                gameField.appendChild(newCell)
            }
        }
    }

    const renderFrequencyInput = document.getElementById(
        'render-frequency-input'
    ) as HTMLInputElement

    let fps = 1

    renderFrequencyInput.addEventListener('change', () => {
        fps = +renderFrequencyInput.value
    })

    console.log(fps)

    const render = () => {
        addLog('render')
        updateGameData()
        updateGameField()
    }

    render()

    setInterval(() => {
        render()
    }, 1000 / fps)
}
