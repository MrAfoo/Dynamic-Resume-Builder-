const form = document.getElementById('resumeForm') as HTMLFormElement;
const previewName = document.getElementById('previewName');
const previewEmail = document.getElementById('previewEmail');
const emailInput = document.getElementById('email') as HTMLInputElement;

form.addEventListener('input', (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.id === 'name') {
    previewName.textContent = `Name: ${target.value}`;
  } else if (target.id === 'email') {
    previewEmail.textContent = `Email: ${target.value}`;
  }
});

// Real-time validation for email format
emailInput.addEventListener('input', () => {
  if (!emailInput.value.includes('@')) {
    emailInput.setCustomValidity('Please enter a valid email address.');
  } else {
    emailInput.setCustomValidity('');
  }
});
