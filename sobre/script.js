//dark e light mode

var trilho = document.getElementById('trilho')
var body = document.querySelector('body')

trilho.addEventListener('click', () => {
    trilho.classList.toggle('dark')
    body.classList.toggle('dark');
})