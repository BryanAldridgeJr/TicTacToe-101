
let currentMarker = 'X'


let board = [ 
  ["", "", ""],
  ["", "", ""],
  ["", "", ""] 
]



const handleClick = (element) => {
  const row = parseInt(element.id.charAt(0))
  const column = parseInt(element.id.charAt(2))
  console.log[row,column]

  console.log(`The element you clicked on has an id:  ${element.id}`)

  if(!document.getElementById(element.id).innerHTML){
    addMarker(element.id,row,column)
  }
}










const addMarker = (id,row,column) => {

  console.log(`*** The current marker is:  ${currentMarker}. ***`)
  console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`)
  
  board[row][column] = currentMarker
  console.log[board]
  
  document.getElementById(id).innerHTML = currentMarker

  checkForWin()
}



const changeMarker = () => {
  if(currentMarker === "X"){
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }
}



const resetBoard = () => {

   const squares = document.getElementsByTagName("td")
  
  for (i=0; i < squares.length; i++) {

    console.log(squares[i].id)

    squares[i].innerHTML = null
  }  
}


const checkForWin = () => {
  if(horizontalWin() || verticalWin() || diagonalWin()) {
    window.alert(`Player ${currentMarker} won!`)
    window.location.reload();
  } else {
    changeMarker()
  }
}

const horizontalWin = () => {
  if (
    (board[0][0] === "X" && board[0][1] === "X" && board[0][2] === "X") ||
    (board[0][0] === "O" && board[0][1] === "O" && board[0][2] === "O")
  ) {
    return true;
  } else if (
    (board[1][0] === "X" && board[1][1] === "X" && board[1][2] === "X") ||
    (board[1][0] === "O" && board[1][1] === "O" && board[1][2] === "O")
  ) {
    return true;
  } else if (
    (board[2][0] === "X" && board[2][1] === "X" && board[2][2] === "X") ||
    (board[2][0] === "O" && board[2][1] === "O" && board[2][2] === "O")
  ) {
    return true;
  }
  return false;
};

const verticalWin = () => {
  if (
    (board[0][0] === "X" && board[1][0] === "X" && board[2][0] === "X") ||
    (board[0][0] === "O" && board[1][0] === "O" && board[2][0] === "O")
  ) {
    return true;
  } else if (
    (board[0][1] === "X" && board[1][1] === "X" && board[2][1] === "X") ||
    (board[0][1] === "O" && board[1][1] === "O" && board[2][1] === "O")
  ) {
    return true;
  } else if (
    (board[0][2] === "X" && board[1][2] === "X" && board[2][2] === "X") ||
    (board[0][2] === "O" && board[1][2] === "O" && board[2][2] === "O")
  ) {
    return true;
  }
  return false;
};

const diagonalWin = () => {
  if (
    (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") ||
    (board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O")
  ) {
    return true;
  } else if (
    (board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X") ||
    (board[0][2] === "O" && board[1][1] === "O" && board[2][0] === "O")
  ) {
    return true;
  }
  return false;
};