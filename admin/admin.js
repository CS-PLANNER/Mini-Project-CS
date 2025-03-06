
        document.getElementById("addStudentForm").addEventListener("submit", function (event) {
            event.preventDefault();

            // Get form data
            const department = document.getElementById("department").value;
            const year = document.getElementById("year").value;
            const regNo = document.getElementById("regNo").value.trim();
            const name = document.getElementById("name").value.trim();

            if (!regNo || !name) {
                alert("Please fill all fields.");
                return;
            }

            // Save to localStorage
            const key = `${department}_${year}`;
            const students = JSON.parse(localStorage.getItem("students")) || {};
            if (!students[key]) {
                students[key] = [];
            }

            // Add new student
            students[key].push({ regNo, name });
            localStorage.setItem("students", JSON.stringify(students));

            alert("Student added successfully!");
            event.target.reset();
        });
    







         // JavaScript code to handle navigation and content loading
    function navigateTo(page) {
        fetchPage(page + '.html');
    }
    function fetchPage(page) {
        fetch(page)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => console.error('Error fetching page:', error));
    }

    // Load the default page
    navigateTo('announcements');




    



    // Back to Top Button Functionality
    const backToTopBtn = document.getElementById('backToTopBtn');

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    // Scroll to the top of the page when the button is clicked
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });