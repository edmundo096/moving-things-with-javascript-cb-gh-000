var dodger = document.getElementById('dodger')
dodger.style.backgroundColor = '#FF69B4'

document.addEventListener('keydown', function(e) {
  if (e.which === 37)
    moveDodgerLeft()
  if (e.which === 39)
    moveDodgerRight()
})

function moveDodgerLeft() {
  var leftNumber = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumber, 10)
  if (left > 0)
    dodger.style.left = `${left - 1}px`
}
function moveDodgerRight() {
  var leftNumber = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumber, 10)
  if (left < 360)
    dodger.style.left = `${left + 1}px`
}
