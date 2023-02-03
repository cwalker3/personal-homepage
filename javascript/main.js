updateClock();


domains = document.getElementsByName('domain')
searchForm = document.getElementsByClassName('search_form')[0]
for (let i = 0; i < domains.length; i++) {
  domains[i].addEventListener("click", function(e) {
    searchForm.action = e.target.value
  })
}

let radioButtons = document.querySelectorAll('input[type=radio]')
for(let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener('click', e => updateParameterName(e))
}

function updateParameterName(e) {
  parameterName = e.target.dataset.parameterName
  let searchInput = document.querySelector('.search-input')
  searchInput.setAttribute("name", parameterName)
}