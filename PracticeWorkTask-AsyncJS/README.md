# ITG-Training

# Branch Description:

This branch aims to solve the follwing task.

# Task: AsyncJS
---
- The "exercise.js" file has code written in a callback approach.  
I should convert this approach to an async and await approach.
- (Extra) Make a movie list instead of the static array and choose randomly.
- (Extra) Integrate an actual email service.
  - I used the nodemailer package for email services ```npm i nodemailer```
  - First, I created a nodemailer transporter and made some configurations for the sender which are:
    - Set the host provider => (smtp.office365.com, smtp.ethereal.email)
    - Set the port number for the SMTP protocol.
    - Set the user email and password
  - Then, I made a function to create a message.
  - Finally, Sent that message to the wanted user.
  - I sent an email from an actual email.  
    ![](emailSent.png)
  - I sent an email from a virtual email
    ![](SentFromVirtualEmail.png)
