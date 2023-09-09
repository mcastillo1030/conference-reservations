import {
  useQuery,
} from '@tanstack/react-query'
import axios from 'axios';
import FormContent from './FormContent';
import PropTypes from 'prop-types';

const Registration = () => {
  const {isLoading, error, data} = useQuery({
    queryKey: ['wristbands'],
    queryFn: () =>
      axios
        .get(`${import.meta.env.VITE_API_URL}/bracelet-availability`)
        .then((res) => res.data),
  });

  return (
    <>
      <h1 className="text-center flex flex-col font-semibold">
        <span className="text-sm md:text-base">Revival Conference 2023</span>
        <span className="text-xl md:text-4xl">Reserve Your Wristband</span>
      </h1>
      <div className="max-w-[35rem] my-8 md:my-12 p-6 bg-ash-200 dark:bg-gravel-650/50 dark:bg-gradient-to-bl from-gravel-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-ash-400/5 rounded-lg shadow-2xl shadow-ash-500/20 dark:shadow-none">
        <p className="text-start mb-2 md:mb-3 text-base">Thank you for pre-purchasing your wristbands!</p>
        <p className="text-start mb-2 md:mb-3 text-base">By using this form, you&apos;re purchasing wristbands to pick them up in person on the day of the event, Septeber 30, 2023.</p>
        <p className="text-start mb-2 md:mb-3 text-base">The cost for each wrist band is $25 USD. Online reservations are subject to an additional fee to process electronic payments. You can also obtain your wristbands <a href="https://revivalmovementusa.org/revival-conference" className="text-ash-500 hover:text-ash-600 dark:text-maize-900 dark:hover:text-maize-950">in person</a> at one of our events.</p>
        <p className="text-start mb-2 md:mb-3 text-base">Provide the necessary details below, then click the <strong>Checkout</strong> button below. This will take you to a secure checkout page where you can enter  your payment details.</p>
      </div>
      <div className={(isLoading ? 'relative flex flex-col items-center justify-center' : '') + " min-h-[12rem] max-w-[35rem] mt-8 md:mt-12 p-6 bg-ash-200 dark:bg-gravel-650/50 dark:bg-gradient-to-bl from-gravel-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-ash-400/5 rounded-lg shadow-2xl shadow-ash-500/20 dark:shadow-none"}>
        <span className={(isLoading ? 'block' : 'hidden') + " form-spinner"}></span>
        <FormContent query={{isLoading, data, error}} />
      </div>
      <div>
        <p className="text-sm mt-3 md:mt-4 mb-12 md:mb-18">Payments processed by Square&reg;. Read their <a href="https://squareup.com/us/en/legal/general/square-pay-pn" className="text-ash-500 hover:text-ash-600 dark:text-maize-900 dark:hover:text-maize-950">Privacy Notice</a>.</p>
      </div>
    </>
  );
};

Registration.propTypes = {
  isLoading: PropTypes.bool,
};

export default Registration;