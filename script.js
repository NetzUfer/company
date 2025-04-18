// Initialize AOS animation library
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true
    });
    
    // Set current year in footer
    const yearElement = document.querySelector('footer .text-gray-400 p');
    if (yearElement) {
      yearElement.innerHTML = yearElement.innerHTML.replace(/\d{4}/, new Date().getFullYear());
    }
    
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
        // For a static site, we'll simulate a successful submission
        // Replace this with your actual form submission endpoint in production
        const response = await fetch('https://api.netzufer.de/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
  
        // Since this is a static site demo, we'll simulate success
        // In a real implementation, uncomment the following lines
        /*
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