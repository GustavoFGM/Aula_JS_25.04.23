//buscando a lista de um array usando for 

let msg = document.getElementById('msg')

const usuarios = [
    {nome: "Huguinho", idade:18},
    {nome: "Zezinho", idade:19},
    {nome: "Luizinho", idade:20},
];

const Users = usuarios.length;

for (let i=0; i<Users; i++){
    msg.innerHTML += `<p>${usuarios[i].nome} ${usuarios[i].idade}</p>`
}

var imagens=[
    'img/img1.jpg',
    'img/img2.jpg',
    'img/img3.jpg',
];

/*declarando variaveis */

var Index =0;
var time = 2000;

/*criando uma função*/

function slideshow(){
    document.getElementById('image').src =imagens[Index];
    Index++;
    if (Index == imagens.length){Index =0;}
    setTimeout("slideshow()",time);
}

slideshow();