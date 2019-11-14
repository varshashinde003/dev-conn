export default (errors) => {
    const errorsArray = [];
    for (let i in errors) {
        const error = errors[i]
        if (error && error.message) {
            errorsArray.push(error.message)
        }
    }
    return errorsArray;
}