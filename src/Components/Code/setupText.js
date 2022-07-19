export default function setupText(linesArray) {
    const newText = linesArray.map((line, index) => {
        return <div className='flex space-x-6'>
            <div className='w-6'>
                <p className='float-right text-white'>{index + 1}</p>
            </div>
            <div className="flex justify-start">
                {line.map(char => {
                    return <p className='text-gray-500'>{char.value}</p>
                })}
            </div>
        </div>
    })
    return newText
}