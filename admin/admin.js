<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function () {
    // Student Form Submission
    const studentForm = document.getElementById("addStudentForm");
    if (studentForm) {
        studentForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const department = document.getElementById("department").value;
            const year = document.getElementById("year").value;
            const regNo = document.getElementById("regNo").value.trim();
            const name = document.getElementById("studentName").value.trim();
=======

        document.getElementById("addStudentForm").addEventListener("submit", function (event) {
            event.preventDefault();

            // Get form data
            const department = document.getElementById("department").value;
            const year = document.getElementById("year").value;
            const regNo = document.getElementById("regNo").value.trim();
            const name = document.getElementById("name").value.trim();
>>>>>>> e4a90543fdda7192f709f4ec4b3ffda37f4d2e69

            if (!regNo || !name) {
                alert("Please fill all fields.");
                return;
            }

<<<<<<< HEAD
            fetch("ad.php", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: `department=${department}&year=${year}&regNo=${regNo}&name=${name}`
            })
            .then(response => response.text())
            .then(data => {
                alert(data);
                event.target.reset();
            })
            .catch(error => {
                console.error("Error:", error);
                alert("Error adding student.");
            });
        });
    }

    // Faculty Form Submission
    const facultyForm = document.getElementById("addFaculty");
    if (facultyForm) {
        facultyForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const facId = document.getElementById("facId").value.trim();
            const name = document.getElementById("facultyName").value.trim();
            const email = document.getElementById("emailId").value.trim();
            const phone = document.getElementById("phNo").value.trim();

            if (!facId || !name || !email || !phone) {
                alert("Please fill all fields.");
                return;
            }

            fetch("ad.php", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: `facId=${encodeURIComponent(facId)}&name=${encodeURIComponent(name)}&emailId=${encodeURIComponent(email)}&phNo=${encodeURIComponent(phone)}`
            })
            .then(response => response.text())
            .then(data => {
                alert(data);
                event.target.reset();
            })
            .catch(error => {
                console.error("Error:", error);
                alert("Error adding faculty.");
            });
        });
    }
});
=======
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
>>>>>>> e4a90543fdda7192f709f4ec4b3ffda37f4d2e69
