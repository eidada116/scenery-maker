export default function startApp(){
    const startbtn = document.getElementById('start-btn');

    startbtn.addEventListener('click', ()=>{

        const a = document.querySelector('.scene-maker-window');
        document.querySelector('.title-screen').style.display = 'none';
        a.style.display = 'flex';
        
    })
}