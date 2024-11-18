
document.querySelectorAll('.animated-table tbody tr').forEach(row => {
    row.addEventListener('click', () => {
      const name = row.dataset.name;
      const email = row.dataset.email;
      const role = row.dataset.role;
      const status = row.dataset.status;
  
      document.getElementById('card-name').textContent = name;
      document.getElementById('card-email').textContent = email;
      document.getElementById('card-role').textContent = role;
      document.getElementById('card-status').textContent = status;
  
      document.getElementById('details-card').classList.add('active');
    });
  });
  
  document.getElementById('close-card').addEventListener('click', () => {
    document.getElementById('details-card').classList.remove('active');
  });
  