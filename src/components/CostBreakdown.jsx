import PropTypes from 'prop-types';

const CostBreadown = ({amount}) => {
  const braceletCost = 25;
  const feeFixed = 0.3;
  const feePercent = 0.029;

  const getTotal = () => {
    const subtotal = braceletCost * amount;
    return (subtotal + feeFixed) / (1 - feePercent);
  };

  const getProcessingFee = () => {
    return getTotal() - (braceletCost * amount);
  };

  return (
    <div className="cost-breakdown text-left my-10 bg-ash-400 dark:bg-gravel-500 px-4 py-6 border-l-4 border-maize-700 dark:border-maize-950">
      <h3 className="cost-breakdown__title font-bold text-lg">Summary</h3>
      <div className="cost-breakdown__table divide-y">
        <div className="cost-breakdown__row flex sm:flex-row flex-col justify-between gap-x-2 mt-2 py-1 border-ash-600">
          <span className="cost-breakdown__item-name">Wristband (x{amount})</span>
          <span className="cost-breakdown__item-cost self-end">${braceletCost * amount}</span>
        </div>
        <div className="cost-breakdown__row flex sm:flex-row flex-col justify-between gap-x-2 mt-2 py-1 border-ash-600">
          <span className="cost-breakdown__item-name">Processing Fee</span>
          <span className="cost-breakdown__item-cost self-end">${getProcessingFee().toFixed(2)}</span>
        </div>
        <div className="cost-breakdown__row flex sm:flex-row flex-col justify-between gap-x-2 mt-2 py-1 border-ash-600 font-semibold">
          <span className="cost-breakdown__total-title">Total</span>
          <span className="cost-breakdown__total-cost self-end">${getTotal().toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

CostBreadown.propTypes = {
  amount: PropTypes.number,
};

export default CostBreadown;