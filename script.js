
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if(!name || !email || !message){
    alert('Please fill in all fields.');
    return;
  }

  // Prepare mailto - will open user's email client
  const subject = encodeURIComponent('Portfolio inquiry from ' + name);
  const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
  window.location.href = `mailto:katrina.antang.business@gmail.com?subject=${subject}&body=${body}`;
});
