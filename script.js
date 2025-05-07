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



//  // Membuat array untuk baris dan kolom (0 sampai 7)
//  const rows = Array.from({ length: 8 }, (_, i) => i);
//  const cols = Array.from({ length: 8 }, (_, j) => j);

//  // Membuat chessboard
//  const chessboard = document.createElement('div');
//  chessboard.classList.add('chessboard');

//  // Menggunakan forEach untuk membuat kotak
//  rows.forEach(i => {
//      cols.forEach(j => {
//          const square = document.createElement('div');
//          square.classList.add('square');
//          if ((i + j) % 2 === 0) {
//              square.classList.add('white');
//          } else {
//              square.classList.add('black');
//          }
//          chessboard.appendChild(square);
//      });
//  });

//  // Membuat container
//  const container = document.createElement('div');
//  container.classList.add('container');

//  // Menambahkan chessboard sebagai child dari container
//  container.appendChild(chessboard);

//  // Menambahkan container ke body
//  document.body.appendChild(container);