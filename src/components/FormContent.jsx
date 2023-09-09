import PropTypes from 'prop-types';
import { useState } from 'react'
import CustomerInfo from './CustomerInfo';
import AmountInput from './AmountInput';
import CheckoutButton from './CheckoutButton';


const FormContent = ({query}) => {
  const {isLoading, error, data} = query;
  // const [canSubmit, setCanSubmit] = useState(false);
  const max = data ? data.available : 0;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState(1);

  if (error) {
    return (
      <span className="block text-sm md:text-base text-start text-tangerine-600 dark:text-tangerine-500">An error has occurred: {error.message}.</span>
    );
  } else if (!isLoading && data.available <= 0) {
    return (
      <span className="block text-sm md:text-base text-start text-tangerine-600 dark:text-tangerine-500">We&apos;re so sorry. There are no bracelets available for purchase at this time. Please check back later.</span>
    );
  } else if (data) {
    return (
      <div className="wrapper">
        <CustomerInfo
          name={firstName}
          email={email}
          setFirstName={setFirstName}
          setEmail={setEmail}
          lastName={lastName}
          setLastName={setLastName}
          phone={phone}
          setPhone={setPhone}
        />
        <AmountInput value={amount} max={max} onChange={setAmount} />
        <CheckoutButton
          firstName={firstName}
          lastName={lastName}
          email={email}
          phone={phone}
          amount={amount}
          max={max}
        />
      </div>
    );
  }
};

FormContent.propTypes = {
  query: PropTypes.object,
};

export default FormContent;