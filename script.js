const approximateCellSize = 120;
const rows = Math.floor(window.innerHeight / approximateCellSize);
const columns = Math.floor(window.innerWidth / approximateCellSize);

const board = document.getElementById("board");

board.style.aspectRatio = `${columns} / ${rows}`;
board.innerHTML = Array(rows)
  .fill()
  .map(
    (_, rowIndex) =>
      `<div>${Array(columns)
        .fill()
        .map(
          (_, columnIndex) =>
            `<div class="cell on" data-row-index="${rowIndex}" data-column-index="${columnIndex}"></div>`
        )
        .join("")}</div>`
  )
  .join("");

document.querySelectorAll(".cell").forEach((cell) => {
  cell.addEventListener("click", (event) => {
    const clickedRow = +event.target.dataset.rowIndex;
    const clickedColumn = +event.target.dataset.columnIndex;
    event.target.classList.toggle("on");
    if (clickedRow > 0) {
      document
        .querySelector(
          `.cell[data-row-index="${
            clickedRow - 1
          }"][data-column-index="${clickedColumn}"]`
        )
        .classList.toggle("on");
    }
    if (clickedRow < rows - 1) {
      document
        .querySelector(
          `.cell[data-row-index="${
            clickedRow + 1
          }"][data-column-index="${clickedColumn}"]`
        )
        .classList.toggle("on");
    }
    if (clickedColumn > 0) {
      document
        .querySelector(
          `.cell[data-row-index="${clickedRow}"][data-column-index="${
            clickedColumn - 1
          }"]`
        )
        .classList.toggle("on");
    }
    if (clickedColumn < columns - 1) {
      document
        .querySelector(
          `.cell[data-row-index="${clickedRow}"][data-column-index="${
            clickedColumn + 1
          }"]`
        )
        .classList.toggle("on");
    }
  });
});

for (i = 0; i < columns * rows; i++) {
  const randomRow = Math.floor(Math.random() * rows);
  const randomColumn = Math.floor(Math.random() * columns);
  document
    .querySelector(
      `.cell[data-row-index="${randomRow}"][data-column-index="${randomColumn}"]`
    )
    .click();
}
