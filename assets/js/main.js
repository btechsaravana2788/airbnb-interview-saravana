document.addEventListener('DOMContentLoaded', function () {
    const dateInputs = document.querySelectorAll('input[type="date"]');

    dateInputs.forEach((input) => {
        if (!input.value) {
            const today = new Date();
            const iso = today.toISOString().split('T')[0];
            input.min = iso;
        }
    });

    const bookingForm = document.querySelector('.booking-card form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function (event) {
            const checkin = bookingForm.querySelector('[name="checkin"]').value;
            const checkout = bookingForm.querySelector('[name="checkout"]').value;

            if (!checkin || !checkout) {
                event.preventDefault();
                alert('Please select both check-in and check-out dates.');
                return;
            }

            if (new Date(checkout) <= new Date(checkin)) {
                event.preventDefault();
                alert('Check-out date must be after check-in date.');
            }
        });
    }
});
