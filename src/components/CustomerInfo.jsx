import PropTypes from 'prop-types';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
// import Input from 'react-phone-number-input/input';

const CustomerInfo = ({
  firstName,
  setFirstName,
  email,
  setEmail,
  lastName,
  setLastName,
  phone,
  setPhone,
}) => {
  /**
   * Validate text inputs (first + last name)
   *
   * @param {string} s - String to validate
   */
  const validateText = (s) => {
    // should no be empty and should only contain letters, dashes, and spaces
    const regex = /^[a-zA-Z- ]+$/;

    return regex.test(s.substring(0, 255));
  };

  /**
   * Validate first name input
   * @param {ChangeEvent} e - Event object
   */
  const validateFirst = (e) => {
    const { target } = e;
    const { value } = target;

    const isValid = validateText(value);
    target.classList.toggle('invalid', !isValid);

    setFirstName(value);
    // setCanSubmit(isValid);
  };

  /**
   * Validate last name input
   * @param {ChangeEvent} e - Event object
   */
  const validateLast = (e) => {
    const { target } = e;
    const { value } = target;

    const isValid = validateText(value);
    target.classList.toggle('invalid', !isValid);

    setLastName(value);
    // setCanSubmit(isValid);
  };

  /**
   * Validate email
   * @param {ChangeEvent} e - Event object
   */
  const validateEmail = (e) => {
    const { target } = e;
    const { value } = target;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(value);
    target.classList.toggle('invalid', !isValid);

    setEmail(value);
    // setCanSubmit(isValid);
  };

  return (
    <div className="customer-info grid grid-cols-2 justify-items-start gap-x-4 gap-y-6 mb-6">
      <label className="customer-info__first-name col-span-2 sm:col-span-1 flex flex-col items-start w-full">
        <span className="customer-info__label font-medium mb-2 text-start">First Name <span className="text-tangerine-600">*</span></span>
        <input required placeholder="First Name" type="text" name="first-name" value={firstName} onChange={validateFirst} className="customer-info__input rounded-md w-full dark:text-gravel-800 focus:ring-maize-950 focus:border-maize-950 dark:focus:ring-maize-600 dark:focus:border-maize-600" />
        <p className="customer-info__input-err hidden text-start mt-1 text-xs text-tangerine-600">Required. Enter only up to 255 alphanumeric characters.</p>
      </label>
      <label className="customer-info__last-name col-span-2 sm:col-span-1 flex flex-col items-start w-full">
        <span className="customer-info__label font-medium mb-2 text-start">Last Name <span className="text-tangerine-600">*</span></span>
        <input required type="text" placeholder="Last Name" name="last-name" value={lastName} onChange={validateLast} className="customer-info__input rounded-md w-full dark:text-gravel-800 focus:ring-maize-950 focus:border-maize-950 dark:focus:ring-maize-600 dark:focus:border-maize-600" />
        <p className="customer-info__input-err hidden text-start mt-1 text-xs text-tangerine-600">Required. Enter only up to 255 alphanumeric characters.</p>
      </label>
      <label className="customer-info__email col-span-2 flex flex-col items-start w-full">
        <span className="customer-info__label font-medium mb-2 text-start">Email <span className="text-tangerine-600">*</span></span>
        <input required type="email" placeholder="Email" name="email" value={email} onChange={validateEmail} className="customer-info__input rounded-md w-full dark:text-gravel-800 focus:ring-maize-950 focus:border-maize-950 dark:focus:ring-maize-600 dark:focus:border-maize-600" />
        <p className="customer-info__input-err hidden text-start mt-1 text-xs text-tangerine-600">Required. Enter a valid email address.</p>
      </label>
      <label className="customer-info__email col-span-2 flex flex-col items-start w-full">
        <span className="customer-info__label font-medium mb-2 text-start">Phone Number <span className="italic text-sm">(optional)</span></span>
        {/* <input required type="email" placeholder="Email" name="email" value={email} onChange={validateEmail} className="customer-info__input rounded-md w-full dark:text-gravel-800 focus:ring-maize-950 focus:border-maize-950 dark:focus:ring-maize-600 dark:focus:border-maize-600" /> */}
        <PhoneInput
          defaultCountry="US"
          value={phone}
          onChange={setPhone}
          name="phone"
          placeholder="Phone Number"
          numberInputProps={{ className: 'rounded-md w-full dark:text-gravel-800 focus:ring-maize-950 focus:border-maize-950 dark:focus:ring-maize-600 dark:focus:border-maize-600' }}
          className="customer-info__input w-full" />
        {phone && !isValidPhoneNumber(phone) && (<p className="customer-info__input-err text-start mt-1 text-xs text-tangerine-600">Enter a valid phone number.</p>)}
      </label>
    </div>
  );
};

CustomerInfo.propTypes = {
  firstName: PropTypes.string,
  setFirstName: PropTypes.func,
  email: PropTypes.string,
  setEmail: PropTypes.func,
  lastName: PropTypes.string,
  setLastName: PropTypes.func,
  phone: PropTypes.string,
  setPhone: PropTypes.func,
};

export default CustomerInfo;