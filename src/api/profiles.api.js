import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const PROFILES_URL = `${API_URL}/profiles`;
const FIELDS_URL = (profile) => `${API_URL}/profiles/${profile}/forms`;

export const getProfiles = () => {
  return axios.get(PROFILES_URL);
}

export const getForm = (profile) => {
  return axios.get(FIELDS_URL(profile));
}
