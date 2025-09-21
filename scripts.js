// Function to open the specific tab
function openProject(evt, projectName) {
    var i, tabcontent, tablinks;

    // Hide all tab content by default
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    // Remove the active class from all tabs
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the current tab and add an "active" class to the clicked tab
    document.getElementById(projectName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Set the default active tab (e.g., Project 1)
document.getElementsByClassName("tablink")[0].click();
