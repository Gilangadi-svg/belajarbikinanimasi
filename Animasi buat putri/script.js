// ===============================
// TOMBOL MAAFIN AKU
// ===============================

function maafinAku() {

    // Ambil halaman

    const page1 =
        document.getElementById("page1");

    const page2 =
        document.getElementById("page2");


    // Hilangkan halaman pertama

    page1.classList.remove("active");


    // Tampilkan halaman kedua

    page2.classList.add("active");


    // Ledakan hati ❤️

    for (let i = 0; i < 40; i++) {

        setTimeout(() => {

            buatHati();

        }, i * 80);

    }

}



// ===============================
// TOMBOL MASIH NGAMBEK
// ===============================

function kabur() {

    const button =
        document.getElementById("noButton");


    const maxX =
        window.innerWidth -
        button.offsetWidth -
        20;


    const maxY =
        window.innerHeight -
        button.offsetHeight -
        20;


    const randomX =
        Math.random() * maxX;


    const randomY =
        Math.random() * maxY;


    button.style.position = "fixed";


    button.style.left =
        randomX + "px";


    button.style.top =
        randomY + "px";

}



// ===============================
// MEMBUAT HATI
// ===============================

function buatHati() {

    const heart =
        document.createElement("div");


    heart.className =
        "heart-float";


    const daftarHati = [

        "❤️",
        "💕",
        "💖",
        "💗",
        "💘",
        "💝",
        "💓",
        "💞"

    ];


    heart.innerHTML =
        daftarHati[
            Math.floor(
                Math.random() *
                daftarHati.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (20 + Math.random() * 30) + "px";


    heart.style.animationDuration =
        (3 + Math.random() * 4) + "s";


    document.body.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 7000);

}



// ===============================
// HATI OTOMATIS
// ===============================

setInterval(() => {

    buatHati();

}, 900);



// ===============================
// KEMBALI
// ===============================

function kembali() {

    const page1 =
        document.getElementById("page1");

    const page2 =
        document.getElementById("page2");


    page2.classList.remove("active");

    page1.classList.add("active");

}