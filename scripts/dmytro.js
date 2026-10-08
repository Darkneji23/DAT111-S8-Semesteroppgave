const input = document.getElementById("terminal-input");
const output = document.getElementById("terminal-output");
input.value = "";
let isBusy = false;
const COMMANDS = {
  "about-me": `Hi there! My name is Dmytro, but my friends call me Dima. I'm a first-year Information Technology student at HVL in Bergen. 
    I've always been curious about how things work, and somewhere along the way I got really into programming. I enjoy building websites, 
    working on different projects, and just figuring things out as I go. Besides IT, I'm also interested in business and investing. 
    I like the idea of creating something useful, seeing people actually use it, and eventually turning that idea into something bigger. 
    Outside of studying, you'll usually find me at the gym, running, working on a project, spending time with my girlfriend or just hanging 
    out and doing something different. As for the future, I have a pretty good idea of who I want to become, and I'm doing what I can to get there. 
    Whether I actually make it or end up somewhere completely different - I guess life will decide. For now, I'm happy to keep moving forward, 
    stay true to myself, and enjoy the ride.`,

  "about-the-project": `We are building a user-friendly website to help homeowners in Bergen with maintenance advice, expenses, demolition processes, 
  and booking consultations. Throughout this project, we have been learning HTML, CSS styling, Python programming and agile tools like Scrum and Kanban to 
  structure our work, but for me, the technical side is not the main takeaway. While coding is a skill you can always look up, practice, and refine 
  over time, I believe the true value of this project lies in the priceless experience of teamwork and communication. In today's world and especially in the 
  tech industry, being able to communicate clearly, collaborate smoothly, and adapt together as a team is just as important—if not more important—than 
  writing code. This project has been a great opportunity to test how we handle group dynamics, share responsibilities, and support each other, and 
  the real teamwork experience I gained with Group S8 is the most valuable lesson I will carry forward into my studies and future career.`,
};

function typeWriter(text, command) {
  isBusy = true;

  const commandLine = document.createElement("p");
  commandLine.className = "dmytro-terminal__text";
  const prompt = document.createElement("span");
  prompt.className = "dmytro-terminal__prompt";
  prompt.textContent = "cmd:~$";
  const commandText = document.createElement("span");
  commandText.textContent = ` ${command}`;
  commandLine.appendChild(prompt);
  commandLine.appendChild(commandText);
  output.appendChild(commandLine);
  const response = document.createElement("p");
  response.className = "dmytro-terminal__text";
  output.appendChild(response);
  let index = 0;
  const speed = 15;

  function type() {
    if (index < text.length) {
      response.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    } else {
      isBusy = false;
    }
  }
  type();
}
function runCommand(command) {
  if (isBusy) {
    return;
  }
  if (command === "clear") {
    output.innerHTML = "";
    return;
  }
  if (COMMANDS[command]) {
    typeWriter(COMMANDS[command], command);
  } else {
    typeWriter(`Command not found: ${command}`, command);
  }
}
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    if (isBusy) {
      return;
    }
    const command = input.value.trim().toLowerCase();
    if (command !== "") {
      runCommand(command);
    }
    input.value = "";
  }
});
