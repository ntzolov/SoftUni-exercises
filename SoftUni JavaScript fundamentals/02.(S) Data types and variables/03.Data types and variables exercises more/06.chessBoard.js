function chessBoard(n) {
    for (let i = 1; i <= n; i++) {
        if (i === 1) {
            console.log('<div class="chessboard">');
        }
        console.log('  <div>');
        for (let j = 1; j <= n; j++) {
            if ((i + j) % 2 === 0) {
                console.log('    <span class="black"></span>');
            } else {
                console.log('    <span class="white"></span>');
            }
        }
        console.log('  </div>');
        if (i === n) {
            console.log('</div>');
        }
    }
}

chessBoard(8)