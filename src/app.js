var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
var educationInput = document.getElementById("education");
var experienceInput = document.getElementById("experience");
var skillsInput = document.getElementById("skills");
var resumeOutput = document.getElementById("resumeOutput");
var generateResumeBtn = document.getElementById("generateResume");
generateResumeBtn.addEventListener("click", function () {
    var resumeData = {
        personalInfo: {
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value || "N/A",
        },
        education: educationInput.value,
        experience: experienceInput.value,
        skills: skillsInput.value.split(",").map(function (skill) { return skill.trim(); })
    };
    displayResume(resumeData);
});
function displayResume(data) {
    resumeOutput.innerHTML = "\n      <h2>".concat(data.personalInfo.name, "</h2>\n      <p><strong>Email:</strong> ").concat(data.personalInfo.email, "</p>\n      <p><strong>Phone:</strong> ").concat(data.personalInfo.phone, "</p>\n  \n      <h2>Education</h2>\n      <p>").concat(data.education, "</p>\n  \n      <h2>Work Experience</h2>\n      <p>").concat(data.experience, "</p>\n  \n      <h2>Skills</h2>\n      <ul>").concat(data.skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(""), "</ul>\n    ");
}
