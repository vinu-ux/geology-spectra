 
 
 
 function sendEmail() {
    
      var body ={
        name: document.getElementById('con-first').value +' ' + document.getElementById('con-last').value,
        phone: document.getElementById('con-phon').value ,
        email: document.getElementById('con-email').value,
        message: document.getElementById('con-message').value,
      }
      var htmlBody;
      htmlBody=`<div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; border: 1px solid #e0e0e0; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); padding: 20px; background-color: #ffffff;">
    <h2 style="
    background: #efecec;
    margin-top: 0px;
    padding: 10px;
">Details</h2>
  <h3 style="margin: 0 0 10px; color: #2c3e50; font-size: 24px; font-weight: 600;"></h3>
  
<p style="margin: 5px 0; color: #7f8c8d; font-size: 14px;"><strong>Name:</strong> ${body.name}</p><p style="margin: 5px 0; color: #7f8c8d; font-size: 14px;"><strong>Email:</strong> ${body.email}</p>
  <p style="margin: 5px 0; color: #7f8c8d; font-size: 14px;"><strong>Phone:</strong> ${body.phone}</p>
  <div style="margin-top: 10px; padding: 5px; background-color: #f9f9f9; border-radius: 5px;">
    <h6 style="margin: 0 0 5px; color: #34495e; font-size: 18px; font-weight: 500;">Message</h6>
    <p style="margin: 0; color: #555555; font-size: 15px; line-height: 1.6;">${body.message}</p>
  </div>
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
      htmlBody=`
      
   <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; border: 1px solid #e0e0e0; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); padding: 20px; background-color: #ffffff;">
    <h2 style="
    background: #efecec;
    margin-top: 0px;
    padding: 10px;
">Details</h2>
  <h3 style="margin: 0 0 10px; color: #2c3e50; font-size: 24px; font-weight: 600;"></h3>
  
<p style="margin: 5px 0; color: #7f8c8d; font-size: 14px;"><strong>Name:</strong> ${body.name}</p><p style="margin: 5px 0; color: #7f8c8d; font-size: 14px;"><strong>Email:</strong> ${body.email}</p>
  <p style="margin: 5px 0; color: #7f8c8d; font-size: 14px;"><strong>Phone:</strong> ${body.phone}</p>
  <div style="margin-top: 10px; padding: 5px; background-color: #f9f9f9; border-radius: 5px;">
    <h6 style="margin: 0 0 5px; color: #34495e; font-size: 18px; font-weight: 500;">Message</h6>
    <p style="margin: 0; color: #555555; font-size: 15px; line-height: 1.6;">${body.message}</p>
  </div>
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
      htmlBody=`<div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; border: 1px solid #e0e0e0; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); padding: 20px; background-color: #ffffff;">
    <h2 style="
    background: #efecec;
    margin-top: 0px;
    padding: 10px;
">${email}</h2>
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