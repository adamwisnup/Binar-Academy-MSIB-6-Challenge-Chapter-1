let saldo = 0;

function tampilkanSaldo() {
    document.getElementById("saldo").innerText = "Saldo di rekening: Rp. " + saldo;
}

function pilihMenu() {
    let menu = window.prompt("Jika kamu ingin topup atau belanja. ketik 1 jika mau topup saldo, ketik 2 jika mau belanja.");
    if (menu === "1") {
        tambahSaldo();
    } else if (menu === "2") {
        kurangiSaldo();
    } else {
        alert("Masukkan pilihan yang benar.");
    }
}

function tambahSaldo() {
    let topup = parseInt(window.prompt("Masukkan jumlah topup:"));
    if (!isNaN(topup) && topup > 0) {
        saldo += topup;
        alert("Berhasil topup. saldo sekarang: Rp. " + saldo);
    } else {
        alert("Masukkan saldo berupa angka dan tidak boleh kurang dari 0.");
    }
    tampilkanSaldo();
}

function kurangiSaldo() {
    let belanja = parseInt(window.prompt("Masukkan jumlah belanjaanmu:"));
    if (!isNaN(belanja) && belanja > 0) {
        if (belanja <= saldo) {
            saldo -= belanja;
            alert("Berhasil belanja. Saldomu sisa: Rp. " + saldo);
        } else {
            alert("Saldo tidak mencukupi.");
        }
    } else {
        alert("Masukkan saldo berupa angka dan tidak boleh kurang dari 0.");
    }
    tampilkanSaldo();
}


