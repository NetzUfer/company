document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS animation library
  AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: true
  });
  
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Contact form handling
  document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      // For a static site demo, we'll simulate a successful submission
      // In a real implementation, replace with your actual endpoint
      /*
      const response = await fetch('https://api.netzufer.de/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const result = await response.json();
      
      if (result.error) {
        throw new Error(result.error);
      }
      */

      // Show success message
      document.getElementById('formStatus').classList.remove('hidden');
      document.getElementById('formError').classList.add('hidden');
      // Reset form
      e.target.reset();
    } catch (error) {
      console.error('Error:', error);
      document.getElementById('formError').classList.remove('hidden');
      document.getElementById('formStatus').classList.add('hidden');
    }
  });
});