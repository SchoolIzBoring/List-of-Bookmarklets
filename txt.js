fetch('path/to/your/file.txt')
  .then(response => response.text())
  .then(data => {
    const scriptLink = data.trim();
    const buttonLabel = 'BUTTON_LABEL_HERE';
    const buttonTemplate = `<a href="javascript:${scriptLink}" class="btn btn-secondary" draggable="true" onclick="copyToClipboard('javascript:${scriptLink}')">${buttonLabel}</a>`;
    // Append the button template to your HTML code
  })
  .catch(error => console.error(error));
