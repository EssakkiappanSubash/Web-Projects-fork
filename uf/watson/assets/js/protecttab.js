


const product1 = document.querySelector('#eye-multi');
const product2 = document.querySelector('#eye-health');
const product3 = document.querySelector('#eyelid-wipes');
const product4 = document.querySelector('#ear-wipes');
const product5 = document.querySelector('#ear-wash');
const product6 = document.querySelector('#eye-wash');

const tabEye = document.querySelector('#tab-eye');

tabEye.addEventListener( 'click', () => {
    product1.style.display = 'block';
    product2.style.display = 'block';
    product3.style.display = 'block';
    product4.style.display = 'none';
    product5.style.display = 'none';
    product6.style.display = 'block';


    tabEye.classList.add('active');
    tabEar.classList.remove('active');
    tabSup.classList.remove('active');
    tabAll.classList.remove('active');
})

const tabEar = document.querySelector('#tab-ear');

tabEar.addEventListener( 'click', () => {
    product1.style.display = 'none';
    product2.style.display = 'none';
    product3.style.display = 'none';
    product4.style.display = 'block';
    product5.style.display = 'block';
    product6.style.display = 'none';


    tabEye.classList.remove('active');
    tabEar.classList.add('active');
    tabSup.classList.remove('active');
    tabAll.classList.remove('active');
})


const tabSup = document.querySelector('#tab-sup');

tabSup.addEventListener( 'click', () => {
    product1.style.display = 'block';
    product2.style.display = 'block';
    product3.style.display = 'none';
    product4.style.display = 'none';
    product5.style.display = 'none';
    product6.style.display = 'none';


    tabEye.classList.remove('active');
    tabEar.classList.remove('active');
    tabSup.classList.add('active');
    tabAll.classList.remove('active');
})


const tabAll = document.querySelector('#tab-all');

tabAll.addEventListener( 'click', () => {
    product1.style.display = 'block';
    product2.style.display = 'block';
    product3.style.display = 'block';
    product4.style.display = 'block';
    product5.style.display = 'block';
    product6.style.display = 'block';


    tabEye.classList.remove('active');
    tabEar.classList.remove('active');
    tabSup.classList.remove('active');
    tabAll.classList.add('active');
})


const product1Titails = document.querySelector('#eye-multi-block');

product1.addEventListener( 'click', () => {
    product1Titails.style.display = 'block';
    product2Titails.style.display = 'none';
    product3Titails.style.display = 'none';
    product4Titails.style.display = 'none';
    product5Titails.style.display = 'none';
    product6Titails.style.display = 'none';
})

const product2Titails = document.querySelector('#eye-health-block');

product2.addEventListener( 'click', () => {
    product1Titails.style.display = 'none';
    product2Titails.style.display = 'block';
    product3Titails.style.display = 'none';
    product4Titails.style.display = 'none';
    product5Titails.style.display = 'none';
    product6Titails.style.display = 'none';
})

const product3Titails = document.querySelector('#eyelid-wipes-block');

product3.addEventListener( 'click', () => {
    product1Titails.style.display = 'none';
    product2Titails.style.display = 'none';
    product3Titails.style.display = 'block';
    product4Titails.style.display = 'none';
    product5Titails.style.display = 'none';
    product6Titails.style.display = 'none';
})

const product4Titails = document.querySelector('#ear-wipes-block');

product4.addEventListener( 'click', () => {
    product1Titails.style.display = 'none';
    product2Titails.style.display = 'none';
    product3Titails.style.display = 'none';
    product4Titails.style.display = 'block';
    product5Titails.style.display = 'none';
    product6Titails.style.display = 'none';
})

const product5Titails = document.querySelector('#ear-wash-block');

product5.addEventListener( 'click', () => {
    product1Titails.style.display = 'none';
    product2Titails.style.display = 'none';
    product3Titails.style.display = 'none';
    product4Titails.style.display = 'none';
    product5Titails.style.display = 'block';
    product6Titails.style.display = 'none';
})

const product6Titails = document.querySelector('#eye-wash-block');

product6.addEventListener( 'click', () => {
    product1Titails.style.display = 'none';
    product2Titails.style.display = 'none';
    product3Titails.style.display = 'none';
    product4Titails.style.display = 'none';
    product5Titails.style.display = 'none';
    product6Titails.style.display = 'block';
})