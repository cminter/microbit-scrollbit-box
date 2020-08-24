function sbBox (brightness: number) {
    scrollbit.clear()
    for (let row = 0; row <= rowMax; row++) {
        scrollbit.setPixel(0, row, brightness)
        scrollbit.setPixel(colMax, row, brightness)
    }
    for (let col = 0; col <= colMax; col++) {
        scrollbit.setPixel(col, 0, brightness)
        scrollbit.setPixel(col, rowMax, brightness)
    }
    scrollbit.show()
}
function brightUpdate () {
    bCurrent += bChange
    if (bCurrent > bLimits[1]) {
        bCurrent = bLimits[1]
        bChange = 0 - bChange
    }
    if (bCurrent < bLimits[0]) {
        bCurrent = bLimits[0]
        bChange = 0 - bChange
    }
}
let bChange = 0
let bCurrent = 0
let bLimits: number[] = []
let colMax = 0
let rowMax = 0
basic.clearScreen()
rowMax = scrollbit.rows() - 1
colMax = scrollbit.cols() - 1
bLimits = [0, 200]
bCurrent = 0
bChange = 10
scrollbit.clear()
scrollbit.show()
basic.forever(function () {
    sbBox(bCurrent)
    brightUpdate()
})
