const isAValidMessage = (message) => {
    if (!message) return true
    if (!+message[0]) return false
    const onlyNumbers = message.replace(/\D+/g, ' ').trim()
    const onlyWords = message
        .replace(/[^a-zA-Z]+/g, ' ')
        .trim()
        .split(' ')
        .map((word) => word.length)
        .join(' ')

    return onlyWords === onlyNumbers
};