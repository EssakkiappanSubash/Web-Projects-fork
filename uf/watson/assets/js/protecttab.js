

// Protect category tab selection functions
const protectContainers = document.querySelector('.protect__containers');

const product1 = document.querySelector('#eye-multi');
const product2 = document.querySelector('#eye-health');
const product3 = document.querySelector('#eyelid-wipes');
const product4 = document.querySelector('#ear-wipes');
const product5 = document.querySelector('#ear-wash');
const product6 = document.querySelector('#eye-wash');

const tabEye = document.querySelector('#tab-eye');

tabEye.addEventListener( 'click', () => {
    // Desktop products
    product1.style.display = 'block';
    product2.style.display = 'block';
    product3.style.display = 'block';
    product4.style.display = 'none';
    product5.style.display = 'none';
    product6.style.display = 'block';

    // Mobile products
    product1size.style.display = 'block';
    product2size.style.display = 'block';
    product3size.style.display = 'block';
    product4size.style.display = 'none';
    product5size.style.display = 'none';
    product6size.style.display = 'block';

    // .protect__containers  Class
    protectContainers.style.width = '800px';
    // protectContainers.style.gridTemplateColumns = 'repeat(4, 1fr)';


    // protect__category__tab  Button
    tabEye.classList.add('active');
    tabEar.classList.remove('active');
    tabSup.classList.remove('active');
    tabAll.classList.remove('active');
})

const tabEar = document.querySelector('#tab-ear');

tabEar.addEventListener( 'click', () => {
    // Desktop products
    product1.style.display = 'none';
    product2.style.display = 'none';
    product3.style.display = 'none';
    product4.style.display = 'block';
    product5.style.display = 'block';
    product6.style.display = 'none';

    // Mobile products
    product1size.style.display = 'none';
    product2size.style.display = 'none';
    product3size.style.display = 'none';
    product4size.style.display = 'block';
    product5size.style.display = 'block';
    product6size.style.display = 'none';

    // .protect__containers  Class
    protectContainers.style.width = '400px';
    // protectContainers.style.gridTemplateColumns = 'repeat(4, 1fr)';


    // protect__category__tab  Button
    tabEye.classList.remove('active');
    tabEar.classList.add('active');
    tabSup.classList.remove('active');
    tabAll.classList.remove('active');
})


const tabSup = document.querySelector('#tab-sup');

tabSup.addEventListener( 'click', () => {
    // Desktop products
    product1.style.display = 'block';
    product2.style.display = 'block';
    product3.style.display = 'none';
    product4.style.display = 'none';
    product5.style.display = 'none';
    product6.style.display = 'none';

    // Mobile products
    product1size.style.display = 'block';
    product2size.style.display = 'block';
    product3size.style.display = 'none';
    product4size.style.display = 'none';
    product5size.style.display = 'none';
    product6size.style.display = 'none';

    // .protect__containers  Class
    protectContainers.style.width = '400px';
    // protectContainers.style.gridTemplateColumns = 'repeat(4, 1fr)';


    // protect__category__tab  Button
    tabEye.classList.remove('active');
    tabEar.classList.remove('active');
    tabSup.classList.add('active');
    tabAll.classList.remove('active');
})


const tabAll = document.querySelector('#tab-all');

tabAll.addEventListener( 'click', () => {
    // Desktop products
    product1.style.display = 'block';
    product2.style.display = 'block';
    product3.style.display = 'block';
    product4.style.display = 'block';
    product5.style.display = 'block';
    product6.style.display = 'block';

    // Mobile products
    product1size.style.display = 'block';
    product2size.style.display = 'block';
    product3size.style.display = 'block';
    product4size.style.display = 'block';
    product5size.style.display = 'block';
    product6size.style.display = 'block';

    // .protect__containers  Class
    protectContainers.style.width = '1200px';
    // protectContainers.style.gridTemplateColumns = 'repeat(6, 1fr)';


    // protect__category__tab  Button
    tabEye.classList.remove('active');
    tabEar.classList.remove('active');
    tabSup.classList.remove('active');
    tabAll.classList.add('active');
})





// Desktop - Show the product details 
const plusEyeMulti = document.querySelector('.plus__eye-multi');
const plusEyeHealth = document.querySelector('.plus__eye-health');
const plusEyelidWipes = document.querySelector('.plus__eyelid-wipes');
const plusEarWipes = document.querySelector('.plus__ear-wipes');
const plusEarWash = document.querySelector('.plus__ear-wash');
const plusEyeWash = document.querySelector('.plus__eye-wash');


const product1Titails = document.querySelector('#eye-multi-block');

product1.addEventListener( 'click', () => {
    product1Titails.style.display = 'block';
    product2Titails.style.display = 'none';
    product3Titails.style.display = 'none';
    product4Titails.style.display = 'none';
    product5Titails.style.display = 'none';
    product6Titails.style.display = 'none';

    // Active Box-shdow
    product1.classList.add('onclick');
    product2.classList.remove('onclick');
    product3.classList.remove('onclick');
    product4.classList.remove('onclick');
    product5.classList.remove('onclick');
    product6.classList.remove('onclick');

    // Active plus__sign-btn
    plusEyeMulti.classList.add('active');
    plusEyeHealth.classList.remove('active');
    plusEyelidWipes.classList.remove('active');
    plusEarWipes.classList.remove('active');
    plusEarWash.classList.remove('active');
    plusEyeWash.classList.remove('active');
})

const product2Titails = document.querySelector('#eye-health-block');

product2.addEventListener( 'click', () => {
    product1Titails.style.display = 'none';
    product2Titails.style.display = 'block';
    product3Titails.style.display = 'none';
    product4Titails.style.display = 'none';
    product5Titails.style.display = 'none';
    product6Titails.style.display = 'none';

    // Active Box-shdow
    product1.classList.remove('onclick');
    product2.classList.add('onclick');
    product3.classList.remove('onclick');
    product4.classList.remove('onclick');
    product5.classList.remove('onclick');
    product6.classList.remove('onclick');

    // Active plus__sign-btn
    plusEyeMulti.classList.remove('active');
    plusEyeHealth.classList.add('active');
    plusEyelidWipes.classList.remove('active');
    plusEarWipes.classList.remove('active');
    plusEarWash.classList.remove('active');
    plusEyeWash.classList.remove('active');
})

const product3Titails = document.querySelector('#eyelid-wipes-block');

product3.addEventListener( 'click', () => {
    product1Titails.style.display = 'none';
    product2Titails.style.display = 'none';
    product3Titails.style.display = 'block';
    product4Titails.style.display = 'none';
    product5Titails.style.display = 'none';
    product6Titails.style.display = 'none';

    // Active Box-shdow
    product1.classList.remove('onclick');
    product2.classList.remove('onclick');
    product3.classList.add('onclick');
    product4.classList.remove('onclick');
    product5.classList.remove('onclick');
    product6.classList.remove('onclick');

    // Active plus__sign-btn
    plusEyeMulti.classList.remove('active');
    plusEyeHealth.classList.remove('active');
    plusEyelidWipes.classList.add('active');
    plusEarWipes.classList.remove('active');
    plusEarWash.classList.remove('active');
    plusEyeWash.classList.remove('active');
})

const product4Titails = document.querySelector('#ear-wipes-block');

product4.addEventListener( 'click', () => {
    product1Titails.style.display = 'none';
    product2Titails.style.display = 'none';
    product3Titails.style.display = 'none';
    product4Titails.style.display = 'block';
    product5Titails.style.display = 'none';
    product6Titails.style.display = 'none';

    // Active Box-shdow
    product1.classList.remove('onclick');
    product2.classList.remove('onclick');
    product3.classList.remove('onclick');
    product4.classList.add('onclick');
    product5.classList.remove('onclick');
    product6.classList.remove('onclick');

    // Active plus__sign-btn
    plusEyeMulti.classList.remove('active');
    plusEyeHealth.classList.remove('active');
    plusEyelidWipes.classList.remove('active');
    plusEarWipes.classList.add('active');
    plusEarWash.classList.remove('active');
    plusEyeWash.classList.remove('active');
})

const product5Titails = document.querySelector('#ear-wash-block');

product5.addEventListener( 'click', () => {
    product1Titails.style.display = 'none';
    product2Titails.style.display = 'none';
    product3Titails.style.display = 'none';
    product4Titails.style.display = 'none';
    product5Titails.style.display = 'block';
    product6Titails.style.display = 'none';

    // Active Box-shdow
    product1.classList.remove('onclick');
    product2.classList.remove('onclick');
    product3.classList.remove('onclick');
    product4.classList.remove('onclick');
    product5.classList.add('onclick');
    product6.classList.remove('onclick');

    // Active plus__sign-btn
    plusEyeMulti.classList.remove('active');
    plusEyeHealth.classList.remove('active');
    plusEyelidWipes.classList.remove('active');
    plusEarWipes.classList.remove('active');
    plusEarWash.classList.add('active');
    plusEyeWash.classList.remove('active');
})

const product6Titails = document.querySelector('#eye-wash-block');

product6.addEventListener( 'click', () => {
    product1Titails.style.display = 'none';
    product2Titails.style.display = 'none';
    product3Titails.style.display = 'none';
    product4Titails.style.display = 'none';
    product5Titails.style.display = 'none';
    product6Titails.style.display = 'block';

    // Active Box-shdow
    product1.classList.remove('onclick');
    product2.classList.remove('onclick');
    product3.classList.remove('onclick');
    product4.classList.remove('onclick');
    product5.classList.remove('onclick');
    product6.classList.add('onclick');

    // Active plus__sign-btn
    plusEyeMulti.classList.remove('active');
    plusEyeHealth.classList.remove('active');
    plusEyelidWipes.classList.remove('active');
    plusEarWipes.classList.remove('active');
    plusEarWash.classList.remove('active');
    plusEyeWash.classList.add('active');
})







// Mobile - Show the product details 

const product1plus = document.querySelector('#plus-sign__text-blue');
const product1minus = document.querySelector('#minus-sign__text-blue');

const product1size = document.querySelector('.protect-device-container.protect-container__text-blue');
const prod1Titails = document.querySelector('#eye-multi-block');


product1plus.addEventListener( 'click', () => {
    prod1Titails.style.display = 'block';
    product1size.style.width = '300px';
    product1size.style.height = '1130px';
    product1plus.style.display = 'none';
    product1minus.style.display = 'block';
})

product1minus.addEventListener( 'click', () => {
    prod1Titails.style.display = 'none';
    product1size.style.width = '230px';
    product1size.style.height = '320px';
    product1plus.style.display = 'block';
    product1minus.style.display = 'none';
})



const product2plus = document.querySelector('#plus-sign__text-red');
const product2minus = document.querySelector('#minus-sign__text-red');

const product2size = document.querySelector('.protect-device-container.protect-container__text-red');
const prod2Titails = document.querySelector('#eye-health-block');


product2plus.addEventListener( 'click', () => {
    prod2Titails.style.display = 'block';
    product2size.style.width = '300px';
    product2size.style.height = '1042px';
    product2plus.style.display = 'none';
    product2minus.style.display = 'block';
})

product2minus.addEventListener( 'click', () => {
    prod2Titails.style.display = 'none';
    product2size.style.width = '230px';
    product2size.style.height = '320px';
    product2plus.style.display = 'block';
    product2minus.style.display = 'none';
})



const product3plus = document.querySelector('#plus-sign__text-ltgrn');
const product3minus = document.querySelector('#minus-sign__text-ltgrn');

const product3size = document.querySelector('.protect-device-container.protect-container__text-ltgrn');
const prod3Titails = document.querySelector('#eyelid-wipes-block');
const prod3span = document.querySelector('#protect-span__text-ltgrn');


product3plus.addEventListener( 'click', () => {
    prod3span.style.display = 'block';
    prod3span.style.padding = '0 0 37px 0';
    prod3Titails.style.display = 'block';
    product3size.style.width = '300px';
    product3size.style.height = '1141px';
    product3plus.style.display = 'none';
    product3minus.style.display = 'block';
})

product3minus.addEventListener( 'click', () => {
    prod3span.style.display = 'none';
    prod3Titails.style.display = 'none';
    product3size.style.width = '230px';
    product3size.style.height = '270px';
    product3plus.style.display = 'block';
    product3minus.style.display = 'none';
})



const product4plus = document.querySelector('#plus-sign__text-ylw');
const product4minus = document.querySelector('#minus-sign__text-ylw');

const product4size = document.querySelector('.protect-device-container.protect-container__text-ylw');  
const prod4Titails = document.querySelector('#ear-wipes-block');
const prod4span = document.querySelector('#protect-span__text-ylw');


product4plus.addEventListener( 'click', () => {
    prod4span.style.display = 'block';
    prod4span.style.padding = '0 0 37px 0';
    prod4Titails.style.display = 'block';
    product4size.style.width = '300px';
    product4size.style.height = '1053px';
    product4plus.style.display = 'none';
    product4minus.style.display = 'block';
})

product4minus.addEventListener( 'click', () => {
    prod4span.style.display = 'none';
    prod4span.style.display = 'none';
    prod4Titails.style.display = 'none';
    product4size.style.width = '230px';
    product4size.style.height = '270px';
    product4plus.style.display = 'block';
    product4minus.style.display = 'none';
})



const product5plus = document.querySelector('#plus-sign__text-org');
const product5minus = document.querySelector('#minus-sign__text-org');

const product5size = document.querySelector('.protect-device-container.protect-container__text-org');  
const prod5Titails = document.querySelector('#ear-wash-block');
const prod5span = document.querySelector('#protect-span__text-org');


product5plus.addEventListener( 'click', () => {
    prod5span.style.display = 'block';
    prod5span.style.padding = '0 0 37px 0';
    prod5Titails.style.display = 'block';
    product5size.style.width = '300px';
    product5size.style.height = '1146px';
    product5plus.style.display = 'none';
    product5minus.style.display = 'block';
})


product5minus.addEventListener( 'click', () => {
    prod5span.style.display = 'none';
    prod5Titails.style.display = 'none';
    product5size.style.width = '230px';
    product5size.style.height = '340px';
    product5plus.style.display = 'block';
    product5minus.style.display = 'none';
})



const product6plus = document.querySelector('#plus-sign__text-drkgrn');
const product6minus = document.querySelector('#minus-sign__text-drkgrn');

const product6size = document.querySelector('.protect-device-container.protect-container__text-drkgrn');  
const prod6Titails = document.querySelector('#eye-wash-block');
const prod6span = document.querySelector('#protect-span__text-drkgrn');


product6plus.addEventListener( 'click', () => {
    prod6span.style.display = 'block';
    prod6span.style.padding = '0 0 37px 0';
    prod6Titails.style.display = 'block';
    product6size.style.width = '300px';
    product6size.style.height = '962px';
    product6plus.style.display = 'none';
    product6minus.style.display = 'block';
})


product6minus.addEventListener( 'click', () => {
    prod6span.style.display = 'none';
    prod6Titails.style.display = 'none';
    product6size.style.width = '230px';
    product6size.style.height = '340px';
    product6plus.style.display = 'block';
    product6minus.style.display = 'none';
})