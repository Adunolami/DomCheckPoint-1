document.addEventListener('DOMContentLoaded', () => {
    // Function to update the total price
    const updateTotalPrice = () => {
      let totalPrice = 0;
      document.querySelectorAll('.card').forEach(card => {
        const unitPrice = parseFloat(card.querySelector('.unit-price').textContent.replace('$', '').trim());
        const quantity = parseInt(card.querySelector('.quantity').textContent);
        totalPrice += unitPrice * quantity;
      });
      document.querySelector('.total').textContent = `${totalPrice} $`;
    };
      // Add event listeners for the plus buttons
    document.querySelectorAll('.fa-plus-circle').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const quantitySpan = e.target.parentElement.querySelector('.quantity');
        quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
        updateTotalPrice();
      });
    });
      // Add event listeners for the plus buttons
    document.querySelectorAll('.fa-minus-circle').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const quantitySpan = e.target.parentElement.querySelector('.quantity');
        const currentQuantity = parseInt(quantitySpan.textContent);
        if (currentQuantity > 0) {
          quantitySpan.textContent = currentQuantity - 1;
          updateTotalPrice();
        }
      });
    });
      // Add event listeners for the trash buttons
    document.querySelectorAll('.fa-trash-alt').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        card.remove();
        updateTotalPrice();
      });
    });
      // Add event listeners for the heart buttons
    document.querySelectorAll('.fa-heart').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.target.classList.toggle('liked');
      });
    });
  });