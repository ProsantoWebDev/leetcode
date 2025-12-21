const main = document.querySelectorAll('.main div')
const container = document.querySelectorAll('.container div')

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
},{
    threshold: 0.3
})
container.forEach(container => observer.observe(container))
main.forEach(main => observer.observe(main))

