export default function startApp(){
    const startbtn = document.getElementById('start-btn');

    startbtn.addEventListener('click', ()=>{
        document.getElementById('title-screen').style.display = 'none';
        document.getElementById('scene-maker-window').style.display = 'flex';
    })
}