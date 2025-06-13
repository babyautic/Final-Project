import React from 'react'

export default function FiltersComponent() {
  function handleClick() {
    alert('Filtro applicato!');
  }

  return (
    <div>
      <h2>Filters</h2>
      <label>
        Search:
        <input type="text" />
      </label>
      <button onClick={handleClick}>Apply Filters</button>
    </div>
  );
}
