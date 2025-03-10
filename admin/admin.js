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

            if (!regNo || !name) {
                alert("Please fill all fields.");
                return;
            }

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
