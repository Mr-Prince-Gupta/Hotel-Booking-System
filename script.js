
// Basic client-side behavior: date min values, validation, simple search feedback
document.addEventListener('DOMContentLoaded', function () {
  const checkin = document.getElementById('checkin');
  const checkout = document.getElementById('checkout');
  const form = document.getElementById('search-form');
  const msg = document.getElementById('search-msg');
  const year = document.getElementById('year');
  const btnClear = document.getElementById('btn-clear');

  // Set year in footer
  if (year) year.textContent = new Date().getFullYear();

  // Set minimum dates to today
  const today = new Date().toISOString().split('T')[0];
  if (checkin) checkin.setAttribute('min', today);
  if (checkout) checkout.setAttribute('min', today);

  // When checkin changes, ensure checkout >= checkin + 1
  checkin && checkin.addEventListener('change', () => {
    if (!checkin.value) return;
    const minCheckout = new Date(checkin.value);
    minCheckout.setDate(minCheckout.getDate() + 1);
    const minCheckoutStr = minCheckout.toISOString().split('T')[0];
    checkout.setAttribute('min', minCheckoutStr);
    if (checkout.value && checkout.value <= checkin.value) {
      checkout.value = minCheckoutStr;
    }
  });

  form && form.addEventListener('submit', (e) => {
    e.preventDefault();
    msg.textContent = '';
    const ci = checkin.value;
    const co = checkout.value;
    if (!ci || !co) {
      msg.textContent = 'Please select both check-in and check-out dates.';
      return;
    }
    if (co <= ci) {
      msg.textContent = 'Check-out date must be after check-in date.';
      return;
    }

    // Here you would call your backend API to check real availability.
    // For demo we show a sample message and simulate results.
    msg.textContent = 'Searching rooms...';
    setTimeout(() => {
      msg.textContent = `Available rooms found for ${ci} → ${co}. (Demo results) — Connect fetch() to your backend to show live results.`;
    }, 900);
  });

  btnClear && btnClear.addEventListener('click', () => {
    form.reset();
    msg.textContent = '';
    checkin.setAttribute('min', today);
    checkout.setAttribute('min', today);
  });
});
