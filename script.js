window.addEventListener('DOMContentLoaded', () => {
    const greetingSpan = document.getElementById('time-of-day');
    const currentHour = new Date().getHours();
    
    let greeting = '';
  
    if (currentHour < 12) {
        greeting = 'morning';
    } 
    else if (currentHour < 18) {
        greeting = 'afternoon';
    }
    else {
        greeting = 'evening';
    }

    greetingSpan.textContent = greeting;
});