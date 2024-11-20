import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

// Flights API
export const fetchFlights = async () => {
  const response = await axios.get(`${API_URL}/flights`);
  return response.data;
};

export const bookFlight = async (bookingData) => {
  const response = await axios.post(`${API_URL}/bookings`, bookingData);
  return response.data;
};

// Passengers API
export const fetchPassengers = async () => {
  const response = await axios.get(`${API_URL}/passengers`);
  return response.data;
};

export const addPassenger = async (passengerData) => {
  const response = await axios.post(`${API_URL}/passengers`, passengerData);
  return response.data;
};

// Bookings API
export const fetchBookings = async () => {
  const response = await axios.get(`${API_URL}/bookings`);
  return response.data;
};

// Payments API
export const processPayment = async (paymentData) => {
  const response = await axios.post(`${API_URL}/payments`, paymentData);
  return response.data;
};
