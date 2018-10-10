async function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
};
async function VKRSL() {

  var like_button = document.querySelector('.like_btn');
  var right_button = document.getElementById('pv_nav_btn_right');
  while (!like_button.classList.contains('active')){
    like_button.click();
    await wait(1000);
    var event = new Event('mousedown');
    right_button.dispatchEvent(event);
    await wait(1000);
    like_button = document.querySelector('.like_btn');
  }

}
