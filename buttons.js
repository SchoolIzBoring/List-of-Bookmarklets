    const codeToCopy = `javascript:(function(){ alert('Hello World!'); })();`;

  document.getElementById('bookmarklet-button').addEventListener('click', function() {
    const el = document.createElement('textarea');
    el.value = codeToCopy;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Bookmarklet copied to clipboard!');
  });
