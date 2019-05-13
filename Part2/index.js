
let idInput = document.getElementById('idInput')
let idColor = document.getElementById('colorInput')
function setCard(){
  let card = document.getElementById(idInput.value)
  card.style.color = idColor.value
  console.log(card)
}
console.log(idColor)