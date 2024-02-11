const express = require('express');
const { execSync } = require('child_process');

const app = express();
const port = 3000;

app.get('/get_cpu_temperature', (req, res) => {
  try {
    // Linuxの場合、`/sys/class/thermal/thermal_zone0/temp`から温度を取得
    const cpuTemperatureRaw = execSync('cat /sys/class/thermal/thermal_zone0/temp', { encoding: 'utf-8' });
    const cpuTemperature = parseFloat(cpuTemperatureRaw) / 1000; // 温度を摂氏に変換

    res.send(cpuTemperature.toFixed(2)); // 2桁まで表示
  } catch (error) {
    console.error('Error getting CPU temperature:', error);
    res.status(500).send('Error getting CPU temperature');
  }
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
