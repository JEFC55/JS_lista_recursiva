  const containers = document.querySelectorAll('.dropdown-container');

  containers.forEach(container => {
    const input = container.querySelector('.input-dropdown');
    const dropdown = container.querySelector('.dropdown-list');
    const items = Array.from(dropdown.querySelectorAll('.dropdown-item'));

    // Mostrar dropdown ao focar no input
    input.addEventListener('focus', () => {
      dropdown.style.display = 'block';
    });

    // Filtrar itens enquanto digita
    input.addEventListener('input', () => {
      const filter = input.value.toLowerCase();
      items.forEach(item => {
        const match = item.textContent.toLowerCase().includes(filter);
        item.style.display = match ? 'block' : 'none';
      });
    });

    // Preencher input ao clicar em uma opção
    items.forEach(item => {
      item.addEventListener('click', () => {
        input.value = item.textContent;
        dropdown.style.display = 'none';
      });
    });
  });

  // Esconder dropdowns ao clicar fora
  document.addEventListener('click', (e) => {
    document.querySelectorAll('.dropdown-container').forEach(container => {
      if (!container.contains(e.target)) {
        container.querySelector('.dropdown-list').style.display = 'none';
      }
    });
  });
