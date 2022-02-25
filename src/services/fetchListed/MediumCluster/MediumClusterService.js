import axios from 'axios';
import { bodyFour, bodyFive } from '../../../helpers/MediumBody';

export const  fetchFourPassivesClusterListings = async (id, position) => {
  try {
    // fetch listed item

    const fetchItem = await axios.post('https://www.pathofexile.com/api/trade/search/Archnemesis', bodyFour(id), {
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
        'Content-Type': 'application/json',
        'User-Agent': '{leandro_dias9@hotmail.com}',
      },
    });

    const res = {
      listingId: fetchItem.data.id,
      result: fetchItem.data.result[position],
    };

    return res;
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
}

export const fetchFivePassiveClusterListings = async (id, position) => {
  try {
    // fetch listed item
    const fetchItem = await axios.post('https://www.pathofexile.com/api/trade/search/Archnemesis', bodyFive(id), {
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
        'Content-Type': 'application/json',
        'User-Agent': '{leandro_dias9@hotmail.com}',
      },
    });

    const result = {
      id: fetchItem.data.id,
      result: fetchItem.data.result[position],
      
    };

    return result;
  } catch (err) {
    return err.message;
  }
};
