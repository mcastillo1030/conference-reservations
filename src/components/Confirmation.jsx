import { useLoaderData } from 'react-router-dom';

const Confirmation = () => {
  const {data} = useLoaderData();

  return (
    <>
      <h1 className="text-center flex flex-col font-semibold">
        <span className="text-xl md:text-4xl">Confirmation for order {data.order_number}</span>
      </h1>
      <div className="max-w-[35rem] my-8 mx-auto md:my-12 p-6 bg-ash-200 dark:bg-gravel-650/50 dark:bg-gradient-to-bl from-gravel-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-ash-400/5 rounded-lg shadow-2xl shadow-ash-500/20 dark:shadow-none">
        <p className="text-start mb-2 md:mb-3 text-base">Thank you for pre-purchasing your wristbands!</p>
        <p className="text-start mb-2 md:mb-3 text-base">You&apos;ve successfully reserved {data.order_amount} wristbands for our <span className="italic">Revival Conference 2023: Chosen</span> on September 30, 2023. For more info on the event, visit the <a className="dark:text-maize-600 dark:hover:text-maize-950 text-tangerine-400 hover:text-tangerine-600" href="http://revivalmovementusa.org/revival-conference" target="_blank" rel="noopener noreferrer">event page</a>.</p>
        <p className="text-start mb-2 md:mb-3 text-base">A receipt of your payment using Square has been sent to your email at <strong>{data.order_email}</strong>. You&apos;ll also receive a separate email from our system with you rorder confirmation. You will use this confirmation to pick up your wristbands the day of the event.</p>
        <p className="text-start mb-2 md:mb-3 text-base">If you run into any issues with our platform, reach out to us at <a className="dark:text-maize-600 dark:hover:text-maize-950 text-tangerine-400 hover:text-tangerine-600" href="mailto:info@revivalmovementusa.org">info@revivalmovementusa.org</a>.</p>
      </div>
    </>
  );
};

export default Confirmation;