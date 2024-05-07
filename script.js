document.getElementById('generateBtn').addEventListener('click', function() {
    const numPlayers = parseInt(document.getElementById('numPlayers').value);
  
    if (numPlayers < 2) {
      alert('Please enter at least 2 players.');
      return;
    }
  
    const orderList = document.getElementById('orderList');
    orderList.innerHTML = '';
  
    // Generate random order
    const order = Array.from({ length: numPlayers }, (_, i) => i + 1);
    order.sort(() => Math.random() - 0.5);
  
    // Display order with hidden numbers
    order.forEach((player, index) => {
      const paperStrip = document.createElement('span');
      paperStrip.textContent = '';
      paperStrip.addEventListener('click', function() {
        this.textContent =  player;
      });
      orderList.appendChild(paperStrip);
    });
  });
  