async function displayWhether() {
    const city = document.getElementById("city").value;
    const apiKey = "dfebcd3a940257c0e5f4732283e0a8ac";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("City Not Found");
      const data = await res.json();
      document.getElementById("result").innerText =
        `📍 ${data.name}: 🌡️ ${data.main.temp}°C, ☁️ ${data.weather[0].description}`;
    } catch (err) {
      document.getElementById("result").innerHTML = "❌ Error: " + err.message;
    }
  }
  