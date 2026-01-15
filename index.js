const modelBtn = document.querySelector('.model-btn')
const overLay = document.querySelector('.model-overlay')
const closeBtn = document.querySelector('.close-btn')

modelBtn.addEventListener("click", function() {
    // document.body.classList.add('show-model')
    // console.log(overLay.classList);
    // overLay.classList.add('open-model')
    overLay.classList.toggle('open-model')
})

closeBtn.addEventListener('click', function() {
    // overLay.classList.remove('open-model')
    overLay.classList.toggle('open-model')
})