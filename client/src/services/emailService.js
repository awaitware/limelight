import axios from 'axios';

export const sendContactForm = async (formData) => {
  return axios.post('http://localhost:5000/api/email/send-email', formData);
};
