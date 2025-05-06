function showCourses() {
  const courseSection = document.getElementById("courses");
  if (courseSection) {
    courseSection.scrollIntoView({ behavior: "smooth" });
  }
}

function submitForm(event) {
  event.preventDefault();
  alert("✅ Thank you for registering! Our team will contact you shortly.");
  event.target.reset(); // Reset the form
}

function handleContactForm(event) {
  event.preventDefault();
  alert("📬 Message sent successfully! We'll get back to you soon.");
  event.target.reset(); // Clear the contact form after submission
}
