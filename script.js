const chessboard = document.createElement ('div')
chessboard.classList.add('chessboard')

for (let i = 0;i < 8; i++){
    for (let j = 0; j< 8; j++) {
        const square = document.createElement('div')
        square.classList.add('square')
        if ((i+j) % 2 === 0) {
            square.classList.add('white')
        } else {
            square.classList.add('black')
        }
        chessboard.appendChild(square);
    }
}

const container = document.createElement ('div')
container.classList.add('container')

container.appendChild(chessboard)

document.body.appendChild(container)

