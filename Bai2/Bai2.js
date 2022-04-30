let dh;
flag = true;
var dho;
function tg() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    dho = ` ${h}  :  ${m} : ${s}`;
    document.getElementById('dongho').innerHTML = dho;
}
function start() {
    dh = setInterval(() => {
        tg();
    }, 1000);
};
function stop() {
    clearInterval(dh);
};
// function startstop() {
//     if(flag) {
//         stop();
//         flag = !flag;
//         console.log(flag);
//     }
//     else {
//         start();
//         flag = !flag;
//         console.log(flag);

//     }
// }
var arr_sle = document.getElementsByTagName('option');
var baidachon;
function checkbai() {
    for (let i = 0; i < arr_sle.length; i++) {
        if (arr_sle[i].selected == true) {
            baidachon = arr_sle[i].value;
            console.log(baidachon);
            baidachon = Number(baidachon);
        }
    }
    switch (baidachon) {
        case 1:
            window.location.replace("https://longnv.name.vn/lap-trinh-javascript/javascript-la-gi");
            break;
        case 2:
            window.location.replace("https://longnv.name.vn/lap-trinh-javascript/bien-kieu-toan-tu-va-bieu-thuc-trong-javascript");
            break;
        case 3:
            window.location.replace("https://longnv.name.vn/lap-trinh-javascript/cau-truc-dieu-khien-trong-javacript");
            break;
        case 4:
            window.location.replace("https://longnv.name.vn/lap-trinh-javascript/lap-trinh-doi-tuong-trong-javascript-va-mo-hinh-bom");
            break;
        case 5:
            window.location.replace("https://longnv.name.vn/lap-trinh-javascript/mo-hinh-dom-trong-javascript");
            break;
        case 6:
            window.location.replace("https://longnv.name.vn/lap-trinh-javascript/kiem-tra-du-lieu-trong-form-voi-javascript");
            break;
        case 7:
            window.location.replace("https://longnv.name.vn/lap-trinh-javascript/gioi-thieu-ve-javascript-framework");
            break;
        case 8:
            window.location.replace("https://longnv.name.vn/lap-trinh-javascript/su-dung-angularjs");
            break;
    }
    if(baidachon == 0){
        alert('Bạn Chưa Chọn Bài Học Mà')
    }
}
