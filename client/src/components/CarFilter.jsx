import React from 'react';
import PropTypes from 'prop-types';
import './styles/CarFilter.css';

function CarFilter({
  dieselRef,
  petrolRef,
  electricRef,
  seatsAbove4Ref,
  seatsAbove6Ref,
  luggageAbove4Ref,
  luggageAbove6Ref,
  manualRef,
  automaticRef,
  powerAbove75KwRef,
  powerAbove100KwRef,
  powerAbove125KwRef,
  powerAbove150KwRef,
  pricefrom0to12000Ref,
  pricefrom12000to15000Ref,
  pricefrom15000Ref,
  filteringCars,
}) {
  // These refs are not meant to have default values. They are initialized with null and then get assigned the DOM elements during the component’s lifecycle.

  CarFilter.propTypes = {
    // eslint-disable-next-line react/require-default-props
    dieselRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    // eslint-disable-next-line react/require-default-props
    petrolRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    // eslint-disable-next-line react/require-default-props
    electricRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    // eslint-disable-next-line react/require-default-props
    seatsAbove4Ref: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    // eslint-disable-next-line react/require-default-props
    seatsAbove6Ref: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    // eslint-disable-next-line react/require-default-props
    luggageAbove4Ref: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    // eslint-disable-next-line react/require-default-props
    luggageAbove6Ref: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    // eslint-disable-next-line react/require-default-props
    manualRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    // eslint-disable-next-line react/require-default-props
    automaticRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    // eslint-disable-next-line react/require-default-props
    powerAbove75KwRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    // eslint-disable-next-line react/require-default-props
    powerAbove100KwRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    // eslint-disable-next-line react/require-default-props
    powerAbove125KwRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    // eslint-disable-next-line react/require-default-props
    powerAbove150KwRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    // eslint-disable-next-line react/require-default-props
    pricefrom0to12000Ref: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    // eslint-disable-next-line react/require-default-props
    pricefrom12000to15000Ref: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    // eslint-disable-next-line react/require-default-props
    pricefrom15000Ref: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    filteringCars: PropTypes.func.isRequired,
  };

  return (
    <div className="filter-main-container">
      <div className="filter-main-container-title">
        <h2>Filters</h2>
        <span className="material-symbols-outlined">tune</span>
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
              onClick={filteringCars}
            />
            Diesel
          </label>
          <label htmlFor="petrol">
            <input
              type="checkbox"
              ref={petrolRef}
              value="petrol"
              id="petrol"
              name="fuel-type"
              onClick={filteringCars}
            />
            Petrol
          </label>
          <label htmlFor="electric">
            <input
              type="checkbox"
              ref={electricRef}
              value="electric"
              id="electric"
              name="fuel-type"
              onClick={filteringCars}
            />
            Electric
          </label>
        </div>
      </div>
      <div className="filter-container seats">
        <h3>Seats</h3>
        <div className="filter-items">
          <label htmlFor="seatsAbove4">
            <input
              type="checkbox"
              ref={seatsAbove4Ref}
              value="seatsAbove4"
              id="seatsAbove4"
              name="seatsAbove4"
              onClick={filteringCars}
            />
            4+
          </label>
          <label htmlFor="seatsAbove6">
            <input
              type="checkbox"
              ref={seatsAbove6Ref}
              value="seatsAbove6"
              id="seatsAbove6"
              name="seatsAbove6"
              onClick={filteringCars}
            />
            6+
          </label>
        </div>
      </div>
      <div className="filter-container trunk">
        <h3>Trunk Capacity</h3>
        <div className="filter-items">
          <label htmlFor="luggageAbove4">
            <input
              type="checkbox"
              ref={luggageAbove4Ref}
              value="luggageAbove4"
              id="luggageAbove4"
              name="luggageAbove4"
              onClick={filteringCars}
            />
            <div className="filter-item-label-text">
              4<span className="material-symbols-outlined">luggage</span>+
            </div>
          </label>
          <label htmlFor="luggageAbove6">
            <input
              type="checkbox"
              ref={luggageAbove6Ref}
              value="luggageAbove6"
              id="luggageAbove6"
              name="luggageAbove6"
              onClick={filteringCars}
            />
            <div className="filter-item-label-text">
              6<span className="material-symbols-outlined">luggage</span>+
            </div>
          </label>
        </div>
      </div>
      <div className="filter-container transmission">
        <h3>Transmission</h3>
        <div className="filter-items">
          <label htmlFor="manual">
            <input
              type="checkbox"
              ref={manualRef}
              value="manual"
              id="manual"
              name="manual"
              onClick={filteringCars}
            />
            Manual
          </label>
          <label htmlFor="automatic">
            <input
              type="checkbox"
              ref={automaticRef}
              value="automatic"
              id="automatic"
              name="automatic"
              onClick={filteringCars}
            />
            Automatic
          </label>
        </div>
      </div>
      <div className="filter-container seats">
        <h3>Engine Power</h3>
        <div className="filter-items">
          <label htmlFor="powerAbove75Kw">
            <input
              type="checkbox"
              ref={powerAbove75KwRef}
              value="powerAbove75Kw"
              id="powerAbove75Kw"
              name="powerAbove75Kw"
              onClick={filteringCars}
            />
            75 KW+
          </label>
          <label htmlFor="powerAbove100Kw">
            <input
              type="checkbox"
              ref={powerAbove100KwRef}
              value="powerAbove100Kw"
              id="powerAbove100Kw"
              name="powerAbove100Kw"
              onClick={filteringCars}
            />
            100 KW+
          </label>
          <label htmlFor="powerAbove125Kw">
            <input
              type="checkbox"
              ref={powerAbove125KwRef}
              value="powerAbove125Kw"
              id="powerAbove125Kw"
              name="powerAbove125Kw"
              onClick={filteringCars}
            />
            125 KW+
          </label>
          <label htmlFor="powerAbove150Kw">
            <input
              type="checkbox"
              ref={powerAbove150KwRef}
              value="powerAbove150Kw"
              id="powerAbove150Kw"
              name="powerAbove150Kw"
              onClick={filteringCars}
            />
            150 KW+
          </label>
        </div>
      </div>
      <div className="filter-container seats">
        <h3>Price</h3>
        <div className="filter-items">
          <label htmlFor="pricefrom0to12000">
            <input
              type="checkbox"
              ref={pricefrom0to12000Ref}
              value="pricefrom0to12000"
              id="pricefrom0to12000"
              name="pricefrom0to12000"
              onClick={filteringCars}
            />
            0 HUF - 12000 HUF
          </label>
          <label htmlFor="pricefrom12000to15000">
            <input
              type="checkbox"
              ref={pricefrom12000to15000Ref}
              value="pricefrom12000to15000"
              id="pricefrom12000to15000"
              name="pricefrom12000to15000"
              onClick={filteringCars}
            />
            12000 HUF - 15000 HUF
          </label>
          <label htmlFor="pricefrom15000">
            <input
              type="checkbox"
              ref={pricefrom15000Ref}
              value="pricefrom15000"
              id="pricefrom15000"
              name="pricefrom15000"
              onClick={filteringCars}
            />
            15000 HUF +
          </label>
        </div>
      </div>
    </div>
  );
}

export default CarFilter;
