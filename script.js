const inCampusButton = document.getElementById("inCampusButton");
const postContainer = document.getElementById("postContainer");

// Add event listener to the InCampus button
inCampusButton.addEventListener("click", function() {
  postContainer.innerHTML = "";

  const postElement1 = document.createElement("div");
  postElement1.className = "post";

  postElement1.innerHTML = `
    <h2>Hackathon</h2>
    <p>📣 Calling all innovators and tech enthusiasts! 🚀 Join us for an exhilarating Hackathon at [College Name]! 🎉

    Unleash your creativity, collaborate with brilliant minds, and showcase your coding prowess. 🖥️💡 Whether you're a seasoned coder or just starting out, this event is for you!
    
    🗓️ Save the date: [Date]. 📍 Location: [Venue].
    
    Don't miss out on this incredible opportunity to connect, create, and code! Limited spots available, so register now at [Registration Link]. Let's redefine the boundaries of innovation together! 🌟 #Hackathon #InnovationAtItsBest #JoinTheChallenge</p>
    <img src="https://edison365.com/wp-content/uploads/2022/03/How-do-hackathons-work.png" alt="Hackathon Image">
    <div class="messageBox">
      <input type="text" placeholder="Type your query">
      <button class="sendButton">Send</button>
    </div>
    <div class="actions">
      <button class="enrollButton">Enroll</button>
      <button class="shareButton">Share</button>
      <button class="saveButton">Save for Later</button>
    </div>
  `;

  const postElement2 = document.createElement("div");
  postElement2.className = "post";

  postElement2.innerHTML = `
    <h2>Football Tournament</h2>
    <p>"Calling all football enthusiasts! 🏆⚽️ Join us for an exhilarating showdown at our college's Football Tournament! 🎉🙌 Grab your boots, showcase your skills, and compete against the best teams in town. 🌟 Whether you're a seasoned player or new to the game, this event promises unforgettable moments and thrilling matches. 🎯🔥 Don't miss this opportunity to showcase your talent, bond with fellow football fanatics, and vie for glory on the field. 🏅 Mark your calendars and get ready for an adrenaline-packed tournament! Sign up now and let the games begin! 📅👉 #CollegeFootballTournament #KickOffToGlory #JoinTheAction"</p>
    <img src="https://i0.wp.com/wyrta.com/wp-content/uploads/2022/09/bdks.jpg?fit=962%2C491&ssl=1" alt="Football Image">
    <div class="messageBox">
      <input type="text" placeholder="Type your query">
      <button class="sendButton">Send</button>
    </div>
    <div class="actions">
      <button class="enrollButton">Enroll</button>
      <button class="shareButton">Share</button>
      <button class="saveButton">Save for Later</button>
    </div>
  `;

  postContainer.appendChild(postElement1);
  postContainer.appendChild(postElement2);
});

document.addEventListener("click", function(event) {
  if (event.target.classList.contains("sendButton")) {
    const messageBox = event.target.parentNode;
    const input = messageBox.querySelector("input[type='text']");
    const message = input.value;
    console.log("Message:", message);
    input.value = "";
  } else if (event.target.classList.contains("enrollButton")) {
    console.log("Enroll button clicked");
  } else if (event.target.classList.contains("shareButton")) {
    console.log("Share button clicked");
  } else if (event.target.classList.contains("saveButton")) {
    console.log("Save for Later button clicked");
  }
});

// Get the necessary elements
const outCampusButton = document.getElementById("outCampusButton");

// Add event listener to the OutCampus button
outCampusButton.addEventListener("click", function() {
  // Create an array of post content
  const posts = [
    {
      collegeName: "G.L Bajaj",
      competitionName: "Coding Competition",
      description: "Calling all coding enthusiasts! 🚀👩‍💻 Join us for an exhilarating coding competition at our college! 🎉 Test your skills, solve challenging problems, and showcase your talent. 🌟 Compete against the best minds, win exciting prizes, and earn recognition. 🏆 Whether you're a beginner or a coding wizard, this event is for you! 💡 Expand your knowledge, collaborate with fellow coders, and have a blast. 💥 Mark your calendars and get ready to code your way to victory! Dont miss out on this incredible opportunity. Register now and let the coding battle begin! 💻💪 #CodingCompetition #CollegeTechFest #ChallengeAccepted",
      imageUrl: "https://files.codingninjas.in/article_images/codingcompetitionblog-23489.webp"
    },
    {
      collegeName: "Galgotia University",
      competitionName: "Blood Donataion Camp ",
      description: "🩸🎗 Join us at our College Blood Donation Camp! 🎉🩸",
      imageUrl: "https://www.jainuniversity.ac.in/uploads/blog/1e47845a74d7a5c24cd6c0b7be23b4ee.jpg"
    },
    {
      collegeName: "Shiv Nadar University",
      competitionName: "TechFest",
      description: "Description of Competition C",
      imageUrl: "https://img.freepik.com/free-vector/time-management-calendar-method-appointment-planning-business-organizer-people-drawing-mark-work-schedule-cartoon-characters-colleagues-teamwork-vector-isolated-concept-metaphor-illustration_335657-2723.jpg"
    }
  ];

  postContainer.innerHTML = "";

  // Create three post elements
  for (let i = 0; i < posts.length; i++) {
    const postElement = document.createElement("div");
    postElement.className = "post";

    // Add the post content
    postElement.innerHTML = `
      <h2>${posts[i].collegeName}</h2>
      <h3>${posts[i].competitionName}</h3>
      <p>${posts[i].description}</p>
      <img src="${posts[i].imageUrl}" alt="${posts[i].competitionName} Image">
      <div class="messageBox">
        <input type="text" placeholder="Type your query">
        <button class="sendButton">Send</button>
      </div>
      <div class="actions">
        <button class="enrollButton">Enroll</button>
        <button class="shareButton">Share</button>
        <button class="saveButton">Save for Later</button>
      </div>
    `;

    // Append the post element to the post container
    postContainer.appendChild(postElement);
  }
});
