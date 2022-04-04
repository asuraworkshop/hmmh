class Steps {

  currentStep;

  constructor(currentStep) {
    this.currentStep = currentStep;
  }

  changeStep(direction) {
    let newStep = this.currentStep + direction;
    if (newStep < 0) {
      newStep = 0;
    }
    else if (newStep > 5) {
      newStep = 5;
    }
    if (newStep === 4) {
      const orderNav = document.querySelector('.order__nav');
      const orderNavButtons = orderNav.querySelectorAll('.btn');
      orderNavButtons[0].classList.add('hidden');
      orderNavButtons[1].classList.add('hidden');
      orderNavButtons[2].classList.remove('hidden');

      //print form data

      //shirt base
      const step1__checkbox = document.querySelectorAll('.step1__checkbox');
      const fin_shirt_base = document.querySelectorAll('.fin_shirt_base');
      for (let i = 0; i < step1__checkbox.length; ++i) {
        if (step1__checkbox[i].checked) {
          fin_shirt_base[i].innerHTML = 'TAK';
        }
        else {
          fin_shirt_base[i].innerHTML = '-';
        }
      }

      //picture Seed
      const fin_pic_seed = document.querySelector('#fin_pic_seed');
      fin_pic_seed.innerHTML = imgCtrl.imgSeed;

      //client data
      const clientDataInp = document.querySelector('.step3');
      const clientDataRaw = clientDataInp.querySelectorAll('input');
      const clientDataFin = document.querySelectorAll('.fin_client_data');
      for (let i = 0; i < clientDataRaw.length; ++i) {
        clientDataFin[i].innerHTML = clientDataRaw[i].value;
      }

      //special effects
      const finGrayscale = document.querySelector('#grayscale');
      const finBlur = document.querySelector('#blur');
      const fin_effects = document.querySelectorAll('.fin_effects');
      if (finGrayscale.checked) {
        fin_effects[0].innerHTML = 'TAK';
      }
      else {
        fin_effects[0].innerHTML = '-';
      }
      if (finBlur.value > 0) {
        fin_effects[1].innerHTML = 'TAK (' + finBlur.value + ')';
      }
      else {
        fin_effects[1].innerHTML = '-';
      }
    }
    const orderSteps = document.querySelectorAll('.order__step');
    for (let i = 0; i < orderSteps.length; ++i) {
      orderSteps[i].classList.remove('order__step--active');
    }
    orderSteps[newStep].classList.add('order__step--active');
    this.currentStep = newStep;
  }

  editStep(step) {
    if (step >= 0 && step < 4) {
      const orderSteps = document.querySelectorAll('.order__step');
      orderSteps[4].classList.remove('order__step--active');
      orderSteps[step].classList.add('order__step--active');
      const orderNav = document.querySelector('.order__nav');
      const orderNavButtons = orderNav.querySelectorAll('.btn');
      orderNavButtons[0].classList.remove('hidden');
      orderNavButtons[1].classList.remove('hidden');
      orderNavButtons[2].classList.add('hidden');
      this.currentStep = step;
    }
  }

  finish() {
    this.changeStep(1);
    const orderNav = document.querySelector('.order__nav');
    const orderNavButtons = orderNav.querySelectorAll('.btn');
    orderNavButtons[2].classList.add('hidden');
    const order_form = document.querySelector('#order_form');
    const data = new FormData(order_form);
    const parsedData = Object.fromEntries(data.entries());
    console.log(parsedData);
  }

}
