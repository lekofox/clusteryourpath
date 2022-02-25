import axios from 'axios';
import { bodyEight, bodyTwelve } from '../../../helpers/LargeBody';

export const  fetchEightPassivesClusterListings = async (id, position) => {
  try {
    // fetch listed item

    const fetchItem = await axios.post('https://www.pathofexile.com/api/trade/search/Archnemesis', bodyEight(id), {
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

export const fetchTwelvePassiveClusterListings = async (id, position) => {
  try {
    // fetch listed item
    const fetchItem = await axios.post('https://www.pathofexile.com/api/trade/search/Archnemesis', bodyTwelve(id), {
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
