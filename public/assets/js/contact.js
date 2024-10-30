 
 
 
 function sendEmail() {
    
      var body ={
        name: document.getElementById('con-first').value +' ' + document.getElementById('con-last').value,
        phone: document.getElementById('con-phon').value ,
        email: document.getElementById('con-email').value,
        message: document.getElementById('con-message').value,
      }
      var htmlBody;
      htmlBody=`<div>
                        <h2 class="mb-0">Name: ${body.name}</h3>
                        <p class="text-secondary">Email: ${body.email}</p>
                        <p class="text-secondary">Phone: ${body.phone}</p>
                        <p class="text-secondary">Message: ${body.message}</p>
      </div>`
      fetch('/send-email', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ htmlBody })
      })
      .then(response => response.text())
      .then(data => {
          alert('Details sended Successfully');
      })
      .catch(error => {
          console.error('Error:', error);
      });
  }
  
 function modalEmail() {
    
      var body ={
        name: document.getElementById('mod-first').value +' ' +document.getElementById('mod-last').value,
        phone: document.getElementById('mod-phon').value ,
        email: document.getElementById('mod-email').value,
        message: document.getElementById('mod-message').value,
      }
      var htmlBody;
      htmlBody=`<div>
                        <h2 class="mb-0">Name: ${body.name}</h3>
                        <p class="text-secondary">Email: ${body.email}</p>
                        <p class="text-secondary">Phone: ${body.phone}</p>
                        <p class="text-secondary">Message: ${body.message}</p>
      </div>`
      fetch('/send-email', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ htmlBody })
      })
      .then(response => response.text())
      .then(data => {
          alert('Details sended Successfully');
      })
      .catch(error => {
          console.error('Error:', error);
      });
  }
 function footerEmail() {
    let email = document.getElementById('ft-email').value
      
      var htmlBody;
      htmlBody=`<div>
                        <h2 class="mb-0">Email: ${email}</h3>
      </div>`
      fetch('/send-email', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ htmlBody })
      })
      .then(response => response.text())
      .then(data => {
          alert('Email sended Successfully');
      })
      .catch(error => {
          console.error('Error:', error);
      });
  }
  
  document.getElementById('modalEmailButton').onclick = function(e) {
      e.preventDefault(); // Prevent default button action
      modalEmail(); // Call the sendEmail function
  };
  document.getElementById('sendEmailButton').onclick = function(e) {
      e.preventDefault(); // Prevent default button action
      sendEmail(); // Call the sendEmail function
  };
  document.getElementById('footerEmailButton').onclick = function(e) {
      e.preventDefault(); // Prevent default button action
      footerEmail(); // Call the sendEmail function
  };