const searchInput = document.querySelector('input[type="text"]');
const searchButton = document.querySelector('button');

// Add event listener to search button
searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const pokemonCards = document.querySelectorAll('.grid div');

  // Filter and display matching Pokémon cards
  pokemonCards.forEach((card) => {
    const name = card.querySelector('h2').textContent.toLowerCase();
    const number = card.querySelector('p').textContent.toLowerCase();
    const types = Array.from(card.querySelectorAll('span')).map((span) => span.textContent.toLowerCase());

    if (name.includes(searchTerm) || number.includes(searchTerm) || types.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

// Add event listener to filter button
document.querySelector('button[aria-label="Filters"]').addEventListener('click', () => {
  // Toggle filter dropdown
  const filterDropdown = document.querySelector('.filter-dropdown');
  filterDropdown.classList.toggle('hidden');
});

// Add event listener to sort select
document.querySelector('select').addEventListener('change', (e) => {
  const sortOption = e.target.value;
  const pokemonCards = document.querySelectorAll('.grid div');

  // Sort Pokémon cards based on selected option
  if (sortOption === 'Lowest Number First') {
    pokemonCards.sort((a, b) => a.querySelector('p').textContent - b.querySelector('p').textContent);
  } else if (sortOption === 'Highest Number First') {
    pokemonCards.sort((a, b) => b.querySelector('p').textContent - a.querySelector('p').textContent);
  } else if (sortOption === 'A-Z') {
    pokemonCards.sort((a, b) => a.querySelector('h2').textContent.localeCompare(b.querySelector('h2').textContent));
  } else if (sortOption === 'Z-A') {
    pokemonCards.sort((a, b) => b.querySelector('h2').textContent.localeCompare(a.querySelector('h2').textContent));
  }

  // Re-render sorted Pokémon cards
  const grid = document.querySelector('.grid');
  grid.innerHTML = '';
  pokemonCards.forEach((card) => grid.appendChild(card));
});

