import React from 'react';
import PropTypes from 'prop-types';
import './styles/CarFilter.css'

function CarFilter({ dieselRef, petrolRef, electricRef, filteringCars }) {
  // These refs are not meant to have default values. They are initialized with null and then get assigned the DOM elements during the component’s lifecycle.

  CarFilter.propTypes = {
    // eslint-disable-next-line react/require-default-props
    dieselRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    // eslint-disable-next-line react/require-default-props
    petrolRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    // eslint-disable-next-line react/require-default-props
    electricRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    filteringCars: PropTypes.func.isRequired,
  };

  return (
    <div className="filter-main-container">
        <div className="filter-main-container-title">
        <h2>Filters</h2>
        <span className="material-symbols-outlined">
tune
</span>
</div>
      <div className="filter-container fuel-type">
        <h3>Fuel-type</h3>
        <div className="filter-items">
          <label htmlFor="diesel">
            <input
              type="checkbox"
              ref={dieselRef}
              value="diesel"
              id="diesel"
              name="fuel-type"
              defaultChecked
              onClick={filteringCars}
              />
              Diesel
          </label>
          <label htmlFor="diesel">
            <input
              type="checkbox"
              ref={petrolRef}
              value="petrol"
              id="petrol"
              name="fuel-type"
              defaultChecked
              onClick={filteringCars}
              />
              Petrol
          </label>
          <label htmlFor="diesel">
            <input
              type="checkbox"
              ref={electricRef}
              value="electric"
              id="electric"
              name="fuel-type"
              defaultChecked
              onClick={filteringCars}
              />
              Electric
          </label>
        </div>
      </div>
    </div>
  );
}

export default CarFilter;
