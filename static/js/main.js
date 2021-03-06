$('.nav-label').on('click', function () {
  $('nav').toggleClass('menu-active');
  $(this).toggleClass('nav-label-open');
});

// jQuery.
$(function() {
    // Reference the tab links.
    const tabLinks = $('#tab-links li a');
    
    // Handle link clicks.
    tabLinks.click(function(event) {
        var $this = $(this);
        
        // Prevent default click behaviour.
        event.preventDefault();
        
        // Remove the active class from the active link and section.
        $('#tab-links a.active, section.active').removeClass('active');
        
        // Add the active class to the current link and corresponding section.
        $this.addClass('active');
        $($this.attr('href')).addClass('active');
    });
});

$(document).ready(function() {
    $('a#contact-popup').magnificPopup({
      items: {
          src: `<section class="wrapper push-2 contact-form">
                  <div class="grid pop-up-padding">
                    <div class="unit s-1 m-1-3">
                      <a class="logo logo-contact" href="/"><img class="img-flex logo" src="/images/pomme-logo.png" alt="POMMe-Health coloured logo"></a>
                      <p>POMMe-Health delivers a customizable,<br>
                      patient-centric, interdisciplinary<br>
                      communication platform that<br>
                      eliminates gaps in healthcare</p>
                      <h3 class="request-demo">Request a Demo Today!</h3>
                      <p class="email-us">Email us:</p>
                      <a class="email-us" href="mailto:info@pomme-health.com">info@pomme-health.com</a>
                      <p class="linked-in-contact"><a target="_blank" href="https://www.linkedin.com/company/pomme-health/">
                        <i class="icon i-32"><img src="/images/linkedin.svg"></i>
                      </a></p>
                    </div>
                    <div class="unit s-1 m-2-3">
                      <form action="https://formspree.io/f/mjvldwov" method="POST" id="contact-popup" class="wrapper request-form white-popup">
                        <h4 class="text-center">Request a Demo</h4>
                        <input type="text" class="form-spacing" id="fullName" name="fullName" required placeholder="Full Name">
                        <input type="email" class="form-spacing" id="email" name="email" required placeholder="E-mail">
                        <input type="text" class="form-spacing" id="subject" name="subject" placeholder="Subject">
                        <textarea id="message" class="form-spacing"  name="message" rows="3" required placeholder="Message"></textarea>
                        <button type="submit" class="nav-btn center">Send</button>
                      </form>
                    </div>
                  </div>
                </section>`,
          type: 'inline'
      }
    });
});
