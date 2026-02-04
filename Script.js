<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Valentine 💙</title>
  <style>
    * {
      box-sizing: border-box;
      font-family: "Arial", sans-serif;
    }

    body {
      margin: 0;
      height: 100vh;
      background: #6ec6ff;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    /* Floating hearts */
    .heart {
      position: absolute;
      bottom: -20px;
      font-size: 20px;
      animation: floatUp 6s linear infinite;
      opacity: 0.7;
    }

    @keyframes floatUp {
      0% {
        transform: translateY(0);
        opacity: 1;
      }
      100% {
        transform: translateY(-120vh);
        opacity: 0;
      }
    }

    /* Card */
    .card {
      background: white;
      padding: 40px;
      border-radius: 20px;
      text-align: center;
      width: 420px;
      position: relative;
      z-index: 10;
    }

    .card img {
      width: 220px;
      margin-bottom: 20px;
    }

    h1 {
      margin-bottom: 25px;
    }

    /* BUTTON CONTAINER — THIS IS THE FIX */
    .buttons {
      display: flex;
      justify-content: center;
      gap: 20px;
      position: relative;
    }

    button {
      padding: 12px 30px;
      font-size: 18px;
      border-radius: 25px;
      border: none;
      cursor: pointer;
      transition: 0.2s;
    }

    #yesBtn {
      background: #ff5fa2;
      color: white;
    }

    #noBtn {
      background: #ddd;
      position: relative;
    }

    /* Yay page */
    .yay {
      display: none;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .yay img {
      width: 280px;
      margin-bottom: 20px;
    }
  </style>
</head>
<body>

  <!-- Hearts -->
  <script>
    function createHeart() {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.innerText = "💙";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = Math.random() * 3 + 4 + "s";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 7000);
    }
    setInterval(createHeart, 300);
  </script>

  <!-- Main Card -->
  <div class="card" id="mainCard">
    <img src="https://i.imgur.com/6XKZQzN.png" alt="bunny" />
    <h1>Will you be my Valentine?</h1>

    <div class="buttons">
      <button id="yesBtn">Yes 💙</button>
      <button id="noBtn">No 😤</button>
    </div>
  </div>

  <!-- Yay Page -->
  <div class="card yay" id="yayPage">
    <img src="https://i.imgur.com/6XKZQzN.png" alt="bunny yay" />
    <h1>aiyaou 🥺</h1>
    <h2>I love you 💙</h2>
  </div>

  <script>
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const mainCard = document.getElementById("mainCard");
    const yayPage = document.getElementById("yayPage");

    yesBtn.onclick = () => {
      mainCard.style.display = "none";
      yayPage.style.display = "flex";
    };

    noBtn.onmouseover = () => {
      const x = Math.random() * 100 - 50;
      const y = Math.random() * 60 - 30;
      noBtn.style.transform = `translate(${x}px, ${y}px)`;
    };
  </script>

</body>
</html>
