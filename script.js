function playMusic(){
    const audio = document.getElementById("bgmusic");
    if (audio) {
        audio.volume = 0.4;
        audio.play().catch(() => {
            console.log("Music will start after you click once.");  
        });
    }
}

function surprise(){
    playMusic();
    alert("💖 Happy Friendship Day Paralu!\n\nThank you for being such an amazing friend.\n- Love, Kinjal ❤️");
}
