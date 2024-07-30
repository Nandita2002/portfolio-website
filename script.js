document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const email = document.getElementById('email').value.trim();
            const query = document.getElementById('query').value.trim();

            if (firstName === "" || lastName === "" || email === "" || query === "") {
                alert("Please fill in all fields.");
                return;
            }

            // Perform any additional validation or actions here

            alert("Form submitted successfully!");
            
            // Reset the form
            document.getElementById('contactForm').reset();
        });