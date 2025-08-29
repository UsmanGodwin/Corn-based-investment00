function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const message = document.getElementById('message');

  if (username === "Harding" && password === "harding#78") {
    message.style.color = "lightgreen";
    message.textContent = "Login successful!";
	window.location.href="groupInfo.html";
  } else {
    message.style.color = "red";
    message.textContent = "Invalid credentials!";
  }
}

// Coin animation
const coinContainer = document.querySelector('.coin-container');

function createCoin() {
  const coin = document.createElement('img');
  coin.src = 'coin.png';
  coin.classList.add('coin');
  coin.style.left = Math.random() * window.innerWidth + 'px';
  coin.style.animationDuration = (Math.random() * 3 + 2) + 's';
  coinContainer.appendChild(coin);

  setTimeout(() => coin.remove(), 5000);
}

setInterval(createCoin, 200);
