let reqem = Math.floor(Math.random() * 13) + 2;
let nov = Math.floor(Math.random() * 4);
let forma;
let kart;

if (nov == 0) {
    forma = "xaç";
} else if (nov == 1) {
    forma = "ürək";
}
else if (nov == 2) {
    forma = "kərpic";
}
else if (nov == 3) {
    forma = "pika";
}

if (reqem == 11) {
    kart = 'Valet';
} else if (reqem == 12) {
    kart = "Dama";
} else if (reqem == 13) {
    kart = "Karol";
} else if (reqem == 14) {
    kart = "Tuz";
} else {
    kart = reqem;
}

document.getElementById('oyun').innerHTML = `${kart} ${forma}`;

























