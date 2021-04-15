var scriptKematian = "Akhirnya kita resmi Menamatkan game... (game).. terimakasih adik adik yg sudah subscribe like dan share...kita udahan dulu untuk ganti game selanjutnya dan juga jangan lupa follow Instagram gua di (instagram) untuk tau jadwal game harian yg bakal gua mainin..oke segitu dulu temen untuk game (game) sampai jumpa di game berikutnya kita sebut nama, (persons) .... oke dan yg ketik (slogan) pake emott....", run = false ;
var audio = new Audio('https://cdn.discordapp.com/attachments/782957420473352262/832192409316098088/bocilmati.mp3');

$(document).ready(function(){
    $('input').keyup(function(){
        $('#pedju').text(scriptKematian.replace( /\(([\w\s']+)\)/gi , gantiBgst))
        if(run) return;
        run = true
        audio.play();
        audio.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
    })
    // Fungsi
    function gantiBgst(m, p){
        switch (p) {
            case 'game':
                p = $('#gameing').val() || 'Minecraft'
            break;
            case 'instagram':
                p = $("#instagram").val() || 'qky.m'
                p = p.includes("@")?p:"@"+p
            break;
            case 'persons':
                p = $('#listPersons').val() || 'Qky,Lazzy,ngen,tot'
                p = p.split(',')
                p = "ada "+p.join(" ada ")
            break;
            case 'slogan':
                p = $('#slogan').val() || 'Selalu Menyerah jangan Putus kabel dan Tetap mengenyot'
            break;
            default:
            break;
        }
        return p
    }
})


