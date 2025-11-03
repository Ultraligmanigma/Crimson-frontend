const socket = io("https://crimson-app.abrdns.com"); // dein Backend-Link

socket.on("connect", () => {
  console.log("✅ Verbunden mit Crimson Backend");
});

socket.on("chat", msg => {
  const div = document.getElementById("chat");
  div.innerHTML += `<p>${msg}</p>`;
});

function send() {
  const input = document.getElementById("msg");
  socket.emit("chat", input.value);
  input.value = "";
}
