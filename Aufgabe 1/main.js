$(document).ready(() => {
    $('#hiddenText').hide()
    $('#hideButton').hide()
    $('#showButton').on('click', () => {
        $('#hiddenText').show()
        $('#hideButton').show()
        $('#showButton').hide()
    })
    $('#hideButton').on('click', () => {
        $('#hiddenText').hide()
        $('#hideButton').hide()
        $('#showButton').show()
    })
})