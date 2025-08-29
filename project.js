
    let hearts = 0;
    let coins = 0;
    let copies = 0;

    const heartEl = document.getElementById('heartCount');
    const coinEl  = document.getElementById('coinCount');
    const copyBtn = document.getElementById('copyCountBtn');
    const historyList = document.getElementById('historyList');
    const clearBtn = document.getElementById('clearHistory');
    const emptyHistory = document.getElementById('emptyHistory');

    // Utility: format local time
    function nowTime() {
      return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second:'2-digit' });
    }

    // Delegate events for all cards
    document.addEventListener('click', (e) => {
      const target = e.target;

      // Favorite toggle
      if (target.classList.contains('favBtn')) {
        const liked = target.dataset.liked === 'true';
        if (!liked) {
          hearts++;
          target.textContent = '❤️';
        } else {
          hearts = Math.max(0, hearts - 1);
          target.textContent = '♡';
        }
        target.dataset.liked = (!liked).toString();
        heartEl.textContent = hearts;
      }

      // Copy number
      if (target.classList.contains('copyBtn')) {
        const card = target.closest('[data-name][data-number]');
        const number = card?.dataset.number || '';
        navigator.clipboard.writeText(number).catch(()=>{});
        copies++;
        alert('Copied: ' + number);
        copyBtn.textContent = `${copies} Copy`;
      }

      // Call button
      if (target.classList.contains('callBtn')) {
        const card = target.closest('[data-name][data-number]');
        const name = card?.dataset.name || 'Service';
        const number = card?.dataset.number || '';

        // increment coin on call
        coins++;
        coinEl.textContent = coins;

        // ensure "No calls yet." disappears
        if (emptyHistory) emptyHistory.remove();

        // add entry (newest on top)
        const row = document.createElement('div');
        row.className = 'flex justify-between items-center border-b pb-2';
        row.innerHTML = `
          <div>
            <p class="text-sm font-medium text-gray-700">${name}</p>
            <p class="text-xs text-gray-500">${number}</p>
          </div>
          <span class="text-xs text-gray-400">${nowTime()}</span>
        `;
        historyList.prepend(row);
      }
    });

    // Clear history
    clearBtn.addEventListener('click', () => {
      historyList.innerHTML = '';
      const p = document.createElement('p');
      p.id = 'emptyHistory';
      p.className = 'text-sm text-gray-500';
      p.textContent = 'No calls yet.';
      historyList.appendChild(p);
    });