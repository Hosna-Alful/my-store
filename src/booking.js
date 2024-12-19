// الحصول على العناصر
const bookAppointmentButton = document.querySelector('.book-appointment');
const bookingForm = document.querySelector('.booking-form');
const appointmentForm = document.querySelector('#appointmentForm');

// عرض نموذج الحجز عند النقر
bookAppointmentButton.addEventListener('click', () => {
    bookingForm.classList.add('active');
});

// التعامل مع تأكيد الحجز
appointmentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const date = document.querySelector('#date').value;
    alert(`Appointment booked successfully for ${name} on ${date}!`);
    bookingForm.classList.remove('active');
});
