export default function setupLinesArray(text) {
    text = text.split(' ').join('\xa0')
    let linesArray = []
    const tempText = text.split('\n')
    tempText.forEach(line => {
        let lineArr = []
        Array.from(line).forEach(char => {
            lineArr.push({'value': char, state: 'inactive'})
        })
        linesArray.push(lineArr)
    })
    return linesArray
}