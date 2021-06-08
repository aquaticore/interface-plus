function save_list() {
  var entry = document.getElementById('contact-entry').value;
  chrome.storage.sync.set({
    contact: entry
  });
}

function restore_list() {
  chrome.storage.sync.get({
    contact: 'John Smith'
  }, function(items) {
    document.getElementById('contact-entry').value = items.contact;
  })
}

document.addEventListener('DOMContentLoaded', restore_list);
document.getElementById('save').addEventListener('click', save_list);
