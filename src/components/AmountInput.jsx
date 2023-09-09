import PropTypes from 'prop-types';

const AmountInput = ({ value, max, onChange }) => {
  const handleInput = (e) => {
    const { target } = e;
    target.value = target.value.replace(/\D/g, '');
    const val = parseInt(target.value, 10);

    if (isNaN(val) || val < 1 || val > max) {
      target.value = value;
      return;
    }

    onChange(val);
  };

  const increase = (e) => {
    const { target } = e;
    const button = target.closest('button');

    if (!button.classList.contains('amount-input__increase') || value >= max) {
      return;
    }

    onChange(value + 1);
  };

  const decrease = (e) => {
    const { target } = e;
    const button = target.closest('button');

    if (!button.classList.contains('amount-input__decrease') || value <= 1) {
      return;
    }

    onChange(value - 1);
  };

  return (
    <div className="amount-input grid grid-cols-1 justify-items-start">
      <label htmlFor="amount" className="amount-input__label font-medium mb-3 text-start">How many wristbands would you like?</label>
      <span className="amount-input__controls flex items-center gap-x-2 relative">
        <button type="button"  onClick={decrease} className="amount-input__decrease w-8 p-0 aspect-square rounded-full relative bg-maize-900 hover:bg-maize-600 hover:border-0 outline-0 focus:outline-0 focus:bg-maize-600 focus:ring-2 focus:ring-maize-950 focus:ring-offset-2 dark:bg-maize-700/[.5] dark:text-ash-200 dark:hover:bg-maize-700/[.75] dark:hover:text-white dark:focus:bg-maize-700/[.75] dark:active:bg-maize-700/[.95] dark:focus:ring-maize-600 dark:focus:ring-offset-gravel-950">
          <span className="sr-only">Decrease Amount</span>
          <span className="amount-input__character absolute top-1/2 left-1/2 leading-none -translate-x-1/2 -translate-y-1/2">-</span>
        </button>
        <input type="text" name="amount" min="1" max={max} value={value} onInput={handleInput} className="amount-input__input rounded-md text-center max-w-[6rem] dark:text-gravel-800 focus:ring-maize-950 focus:border-maize-950 dark:focus:ring-maize-600 dark:focus:border-maize-600" />
        <button type="button" onClick={increase} className="amount-input__increase w-8 p-0 aspect-square rounded-full relative bg-maize-900 hover:bg-maize-600 hover:border-0 outline-0 focus:outline-0 focus:bg-maize-600 focus:ring-2 focus:ring-maize-950 focus:ring-offset-2 dark:bg-maize-700/[.5] dark:text-ash-200 dark:hover:bg-maize-700/[.75] dark:hover:text-white dark:focus:bg-maize-700/[.75] dark:active:bg-maize-700/[.95] dark:focus:ring-maize-600 dark:focus:ring-offset-gravel-950">
          <span className="sr-only">Increase Amount</span>
          <span className="amount-input__character absolute top-1/2 left-1/2 leading-none -translate-x-1/2 -translate-y-1/2">+</span>
        </button>
      </span>
    </div>
  );
};

AmountInput.propTypes = {
  value: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
};

export default AmountInput;