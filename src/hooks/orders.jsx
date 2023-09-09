import axios from 'axios';
import { redirect } from 'react-router-dom';

export const getOrderByNumber = async (orderNumber) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/confirm-order/${orderNumber}`);
  return res.data;
};

export const loader = async ({params}) => {
  const data = await getOrderByNumber(params.orderNumber);

  if (data.error) {
    return redirect('/');
  }

  return { data };
};