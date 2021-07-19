import axios from 'axios';

export const fetchData = async () => {
  try {
    return await axios('https://run.mocky.io/v3/a811c0e9-adae-4554-9694-173aa23bc38b');
  } catch (error) {
    throw new Error(error);
  }
}
