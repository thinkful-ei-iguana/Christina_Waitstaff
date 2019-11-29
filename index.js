
let STORE = {
  BasePrice: 0,
  Tax: 0,
  Tip: 0,
  Total: 0,
  Meals: 0,
  TipTotal: 0
};

function handleForm() {
  $('.meal-form-input').on('submit', event => {
    event.preventDefault();
    let formPrice = Number($('#price').val());
    let formTax = parseFloat($('#tax').val())/100;
    let formTip = parseFloat($('#tip').val())/100;    
    let tax = formPrice * formTax;
    let subtotal = formPrice + tax;
    let tip = formPrice * formTip;
    let mealTotal = subtotal + tip;
    STORE.Meals++;
    STORE.TipTotal += tip;
    STORE.BasePrice = formPrice;
    STORE.Tax = tax;
    STORE.Tip = tip;
    STORE.Total = mealTotal;
    updateEarnings();
    updateCharges();
  });
}

function updateCharges() {
  $('.subtotal').html(`<p>Subtotal: ${STORE.BasePrice + STORE.Tax}</p>`);
  $('.tip').html(`<p>Tip: ${STORE.Tip}</p>`);
  $('.total').html(`<p>Total: ${STORE.Total}</p>`);

}

function updateEarnings() {
  $('.tip-total').html(`<p>Tip Total: ${STORE.TipTotal}</p>`);
  $('.meal-count-total').html(`<p>Meal Count: ${STORE.Meals}</p>`);
  $('.average-tip').html(`<p>Average Tip Per Meal: ${STORE.Meals > 0 ? (STORE.TipTotal / STORE.Meals) : 0 }</p>`);

}

function handleReset() {
  $('.reset').on('click', event => {
    event.preventDefault();
    STORE.BasePrice = 0;
    STORE.Tax = 0;
    STORE.Tip = 0;
    STORE.Total = 0;
    STORE.Meals = 0;
    STORE.TipTotal = 0;
    updateCharges();
    updateEarnings();
  });
}


function main () {
  handleForm();
  handleReset();
}

$(main);