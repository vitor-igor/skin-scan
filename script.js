//reveals

window.revelar = ScrollReveal({reset:true})

revelar.reveal('.extras',{
    duration: 2000,
    distance: '90px',
    origin: 'right'
})

revelar.reveal('.scroll-text1',{
    duration: 2000,
    distance: '90px',
    delay: 500
})

revelar.reveal('.scroll-img',{
    duration: 2000,
    distance: '90px',
    delay: 1000
})

revelar.reveal('.scroll-text2',{
    duration: 2000,
    distance: '90px',
    delay: 500
})

//dark e light mode

var trilho = document.getElementById('trilho')
var body = document.querySelector('body')

trilho.addEventListener('click', () => {
    trilho.classList.toggle('dark')
    body.classList.toggle('dark');
})