
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
    let formTax = Number($('#tax').val());
    let formTip = Number($('#tip').val());
    STORE.Meals++;
    let newTotal = STORE.TipTotal;
    STORE.TipTotal = newTotal + formTip;
    STORE.BasePrice = formPrice;
    STORE.Tax = formTax;
    STORE.Tip = formTip;
    STORE.Total = formPrice + formTax + formTip;
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
  $('.average-tip').html(`<p>Average Tip Per Meal: ${STORE.TipTotal / STORE.Meals}</p>`);

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