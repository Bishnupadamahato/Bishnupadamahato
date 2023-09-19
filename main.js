document.getElementById('fetchHistory').addEventListener('click', function() {
    chrome.history.search({text: '', maxResults: 20}, function(data) {
      var ul = document.getElementById('urls');
      ul.innerHTML = ''; // Clear the list before adding new items
      data.forEach(function(page) {
        var li = document.createElement('li');
        li.textContent = page.url;
        ul.appendChild(li);
      });
    });
  });
  
  
