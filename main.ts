basic.clearScreen()
let rowMax = scrollbit.rows() - 1
let colMax = scrollbit.cols() - 1
scrollbit.clear()
for (let row = 0; row <= rowMax; row++) {
    scrollbit.setPixel(0, row, 128)
    scrollbit.setPixel(colMax, row, 128)
}
for (let col = 0; col <= colMax; col++) {
    scrollbit.setPixel(col, 0, 128)
    scrollbit.setPixel(col, rowMax, 128)
}
scrollbit.show()
