// Inisialisasi Partikel Background
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 60 },
        "color": { "value": "#00f3ff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.4 },
        "size": { "value": 2 },
        "line_linked": { "enable": true, "distance": 120, "color": "#00f3ff", "opacity": 0.2, "width": 1 },
        "move": { "enable": true, "speed": 1.5 }
    }
});

// Fungsi Kirim Form ke WhatsApp
function kirimWA() {
    const nomorWA = "6283168307088"; // << GANTI DENGAN NOMOR WA KAMU
    const game = document.getElementById('game').value;
    const idGame = document.getElementById('id-game').value;
    const target = document.getElementById('target').value;
    const bayar = document.getElementById('pembayaran').value;

    if(game === "" || idGame === "" || target === "") {
        alert("Waduh! Tolong lengkapi datanya dulu ya.");
        return;
    }

    const text = `Halo Guztyy Games!%0ASaya ingin order joki:%0A%0A🎮 Game: ${game}%0A🆔 ID: ${idGame}%0A🎯 Target: ${target}%0A💰 Pembayaran: ${bayar}%0A%0AMohon segera diproses ya!`;
    
    const url = `https://wa.me/${nomorWA}?text=${text}`;
    window.open(url, '_blank');
}
