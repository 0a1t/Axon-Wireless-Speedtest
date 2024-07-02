document.getElementById('startButton').addEventListener('click', startTest);

function startTest() {
    document.getElementById('loading').style.display = 'block';
    document.getElementById('results').style.display = 'none';

    // Simulate a speed test
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('results').style.display = 'block';

        // Mock results
        document.getElementById('downloadSpeed').innerText = '50 Mbps';
        document.getElementById('uploadSpeed').innerText = '20 Mbps';
        document.getElementById('ping').innerText = '15 ms';
        document.getElementById('jitter').innerText = '5 ms';
        document.getElementById('packetLoss').innerText = '0%';
    }, 3000);
}

