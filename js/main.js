const test1 = [
    'Велосипед LEON HD-80',
    'Оставить отзыв',
    13580,
    'Есть в наличии',
];
console.log(test1[0]);
let out = document.querySelector('.signature');
document.querySelector('.signature').innerHTML = test1[0];
document.querySelector('.reviev1').innerHTML = test1[1];
document.querySelector('.p-cost').innerHTML = test1[2];
document.querySelector('.availability1').innerHTML = test1[3];
const prodacts = {
    name: 'велосипед',
    img: "https://content.rozetka.com.ua/goods/images/big/195147293.jpg",
    bike: 'Велосипед LEON HD-80',
    cost: 13580,
    sklad: 'Есть в наличии',
};
console.log(prodacts.name);
