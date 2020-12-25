const backgrVid = document.querySelector('.backgr_vid');
const sliderWrap = document.querySelector('.slider_wrap');
const aniTrigger = document.querySelectorAll('.ani-f-l');
const priceBlockItem = document.querySelectorAll('.price_block_item');
const selectedData = {
    price: ""
};
function selectPrice(e) {
    console.log(e.target.lastElementChild.textContent);
    selectedData.price = e.target.lastElementChild.textContent;
    document.querySelector('.selected_price').textContent = selectedData.price;
}
function showMainContent() {
    if (!backgrVid.classList.contains('d-none') && sliderWrap.classList.contains('d-none')) {
        backgrVid.classList.add('d-none');
        sliderWrap.classList.remove('d-none');
        setTimeout(()=>{
            for (let i = 0; i < aniTrigger.length; i++) {
            aniTrigger[i].classList.add('from_left');    
        }
        }, 300)    
    }
}

backgrVid.addEventListener('ended', showMainContent, false);
priceBlockItem.forEach((el)=>{
    el.addEventListener('click',selectPrice)
});