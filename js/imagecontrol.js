class ImageControl {

  imgSeed;
  effectsPrice = 0;
  shirtBase = 0;

  calcFinalPrice() {
    let finalPrice = (this.shirtBase * 10) + (this.shirtBase * this.effectsPrice);
    const order_price = document.querySelector('#order_price');
    const inp_price = document.querySelector('#inp_price');
    order_price.innerHTML = '$' + finalPrice;
    inp_price.value = finalPrice;
  }

  setShirtBase(pos, val) {
    const shirtBase = document.querySelectorAll('.shirt');
    if (val) {
      shirtBase[pos].classList.add('shirt--active');
      this.shirtBase = this.shirtBase + 1;
    }
    else {
      shirtBase[pos].classList.remove('shirt--active');
      this.shirtBase = this.shirtBase - 1;
    }
    this.calcFinalPrice();
  }

  getImg(val = null) {
    if (val === 0) {
      this.imgSeed = Math.floor(Math.random() * 1000);
    }
    else {
      this.imgSeed = this.imgSeed + val;
    }
    var imgURL = 'https://picsum.photos/seed/' + this.imgSeed + '/200';
    const blur = document.querySelector('#blur');
    const grayscale = document.querySelector('#grayscale');
    var optionsArr = [];
    this.effectsPrice = 0;
    if (grayscale.checked) {
      optionsArr.push('grayscale');
      this.effectsPrice = this.effectsPrice + 2;
    }
    if (blur.value > 0 && blur.value <= 10) {
      optionsArr.push('blur=' + blur.value);
      this.effectsPrice = this.effectsPrice + 3;
    }
    if (optionsArr.length > 0) {
      imgURL = imgURL + '?' + optionsArr.join('&');
    }
    const shirtPics = document.querySelectorAll('.shirt__pic');
    const step2_img = document.querySelector('#step2_img');
    const step4_img = document.querySelector('#step4_img');
    const picsum_url = document.querySelector('#picsum_url');
    for (let i = 0; i < shirtPics.length; ++i) {
      shirtPics[i].src = imgURL;
    }
    picsum_url.value = imgURL;
    step2_img.src = imgURL;
    step4_img.src = imgURL;
    this.calcFinalPrice();
  }

}
