let btn = document.getElementsByClassName('btn');
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function (event) {
        let key = btn[i].textContent;
        console.log(btn[i].textContent)
       soundplay(key);
       animate(key)
    })
}
document.addEventListener('keypress',function(event){
    console.log(event.key);
    soundplay(event.key)
    animate(event.key)
})
function soundplay(key)
{
    switch (key) {
        case 'w':

            let tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play();
            break;
        case 'a':

            let tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play();
            break;
        case 's':

            let tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play();
            break;
        case 'd':

            let tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play();
            break;
        case 'j':

            let crash = new Audio('sounds/crash.mp3')
            crash.play();
            break;
        case 'k':

            let snare = new Audio('sounds/snare.mp3')
            snare.play();
            break;
        case 'l':

            let kickbass = new Audio('sounds/kick-bass.mp3')
            kickbass.play();
            break;

    }
}
function animate(key)
{
    let target=document.querySelector('.'+key);
    target.classList.add('pressed');
    setTimeout(function(){
        target.classList.remove('pressed')
    },200)
}