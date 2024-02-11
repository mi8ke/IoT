document.addEventListener("DOMContentLoaded", function() {
    function updateCpuTemperature() {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            document.getElementById("cpuTemperature").innerText = "CPU温度: " + xhr.responseText + " ℃";
          } else {
            console.error('Error getting CPU temperature:', xhr.statusText);
            document.getElementById("cpuTemperature").innerText = "エラーが発生しました";
          }
        }
      };
      xhr.open("GET", "/get_cpu_temperature", true);
      xhr.send();
    }
  
    updateCpuTemperature();
    setInterval(updateCpuTemperature, 5000);
  });
  