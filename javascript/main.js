updateClock();


domains = document.getElementsByName('domain')
searchForm = document.getElementsByClassName('search_form')[0]
for (let i = 0; i < domains.length; i++) {
  domains[i].addEventListener("click", function(e) {
    searchForm.action = e.target.value
  })
}