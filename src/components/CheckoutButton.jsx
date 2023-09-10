import PropTypes from 'prop-types';
import { useState } from 'react'
import { isValidPhoneNumber } from 'react-phone-number-input';
import axios from 'axios';

const CheckoutButton = ({
  firstName,
  lastName,
  email,
  phone,
  amount,
  max,
}) => {
  // const history = useHistory();
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // let orderId = false;
    let checkoutUrl = false;
    setIsLoading(true);
    axios
      .post(`${import.meta.env.VITE_API_URL}/new-order`, {
        firstName,
        lastName,
        email,
        phone,
        amount,
      })
      .then((res) => {
        const {data} = res;

        checkoutUrl = data.checkout_url;
        // window.location.href = checkoutUrl;
      })
      .catch((err) => {
        if (err.response) {
          setMessage(err.response.data.message);
        } else if (err.request) {
          setMessage('An error occurred during submission. Please try again later.');
        } else {
          setMessage(`Error: ${err.message}`);
        }

        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const textIsValid = (s) => {
    const regex = /^[a-zA-Z- ]+$/;
    return regex.test(s.substring(0, 255));
  };

  const emailIsValid = (s) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(s.substring(0, 255));
  };

  const phoneIsValid = (s) => {
    if (!s || s.length < 1) {
      return true;
    }

    return isValidPhoneNumber(s);
  };

  const canSubmit = textIsValid(firstName) &&
    textIsValid(lastName) &&
    emailIsValid(email) &&
    phoneIsValid(phone) &&
    (amount > 0 && amount <= max);

  return (
    <div className="checkout-button">
      {message && (<p className="checkout-button__message text-sm text-tangerine-600">{message}</p>)}
      <p className="checkout-button__wrap flex justify-end items-center gap-x-3">
        {isLoading && (<span className="checkout-button__loader w-[2rem] aspect-square relative"></span>)}
        <button type="button" disabled={!canSubmit} onClick={handleSubmit} className="checkout-button__btn inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs uppercase tracking-widest bg-maize-900 hover:bg-maize-600 focus:bg-maize-600 active:bg-maize-700 focus:outline-none focus:ring-2 focus:ring-maize-950  focus:ring-offset-2 transition ease-in-out duration-150 dark:bg-maize-700/[.5] dark:text-ash-200 dark:hover:bg-maize-700/[.75] dark:hover:text-white dark:focus:bg-maize-700/[.75] dark:focus:text-white dark:active:bg-maize-700/[.95] dark:focus:ring-maize-600 dark:focus:ring-offset-gravel-950 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-ash-600 disabled:text-ash-200">Checkout</button>
      </p>
    </div>
  );
};

CheckoutButton.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  amount: PropTypes.number,
  max: PropTypes.number,
};

export default CheckoutButton;