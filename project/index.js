const fetch = require("node-fetch");

const requestBody = {
  first_name: "YourFirstName",
  last_name: "YourLastName",
  email: "your.email@example.com",
  phone_number: "1234567890",
  platform_name: "LearnQ AI",
  cover_letter: "I am interested in this role because...",
  urls: [
    "https://github.com/yourusername",
    "https://www.linkedin.com/in/yourprofile",
  ],
};

fetch("http://work.learnq.ai/recruitment", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(requestBody),
})
  .then((response) => {
    if (response.status === 201) {
      return response.json();
    } else {
      throw new Error("Failed to submit application");
    }
  })
  .then((data) => {
    console.log("Application submitted successfully. ID:", data.id);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
