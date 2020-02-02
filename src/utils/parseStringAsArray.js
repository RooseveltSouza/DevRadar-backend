module.exports = (String) => {
    return String.split(',').map(tech => tech.trim())
}