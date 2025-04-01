export default function initializeSound(){
    const categorybtn = document.querySelectorAll('.painter-button');
    const itembtn = document.querySelectorAll('.scene-item');

    categorybtn.forEach(btn =>{
        btn.addEventListener('click', () =>{
            const sound = new Audio('/sounds/tab-click.wav');

            sound.play();
        })
    })

    itembtn.forEach(btn =>{
        btn.addEventListener('click', () =>{
            const sound = new Audio('/sounds/item-click2.mp3');
            sound.play();
        })
    })

    const donebtn = document.getElementById('done');

    donebtn.addEventListener('click', ()=>{
         document.querySelector('.painter-window').style.display = 'none';
         const sound = new Audio('/sounds/meow.mp3');
         sound.play();
    })
}