/* eslint-disable class-methods-use-this */
import axios from 'axios';
import { fetchEightPassivesClusterListings, fetchTwelvePassiveClusterListings } from '../../services/fetchListed/LargeCluster/LargeClusterService';
import { fetchFourPassivesClusterListings, fetchFivePassiveClusterListings } from '../../services/fetchListed/MediumCluster/MediumClusterService';

class WhispController {
  async fetchEightPassivesClusterWhisp(req, res) {
    try {
      const { id, position } = req.params;

      const fetch = await fetchEightPassivesClusterListings(id, position);

      const response = {
        result: fetch.result,
        idList: fetch.listingId,
      };

      // fetch listed item

      const fetchItem = await axios.get(`https://www.pathofexile.com/api/trade/fetch/${response.result}?query=${response.idList}`, {
        headers: {
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
          'Content-Type': 'application/json',
          'User-Agent': '{leandro_dias9@hotmail.com}',
        },
      });

      const treatedResult ={
          whisp: fetchItem.data.result[0].listing.whisper.replace('"', ''),
          passives: fetchItem.data.result[0].item.enchantMods[0],
          ilvl: fetchItem.data.result[0].item.ilvl,
         
          
      }
       

      return res.status(200).json(treatedResult);
    } catch (err) {
      return res.status(500).json({
        message: 'Erro inesperado; Por favor tente novamente',
      });
    }
  }

  async fetchTwelvePassiveClusterWhisp(req, res) {
    try {
      const { id, position } = req.params;

      const fetch = await fetchTwelvePassiveClusterListings(id, position);

      const response = {
        result: fetch.result,
        idList: fetch.listingId,
      };

      // fetch listed item

      const fetchItem = await axios.get(`https://www.pathofexile.com/api/trade/fetch/${response.result}?query=${response.idList}`, {
        headers: {
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
          'Content-Type': 'application/json',
          'User-Agent': '{leandro_dias9@hotmail.com}',
        },
      });

      const treatedResult ={
        whisp: fetchItem.data.result[0].listing.whisper.replace('"', ''),
        passives: fetchItem.data.result[0].item.enchantMods[0],
        ilvl: fetchItem.data.result[0].item.ilvl
    }

      return res.status(200).json(treatedResult);
    } catch (err) {
      return res.status(500).json({
        message: 'Erro inesperado; Por favor tente novamente',
      });
    }
  }

  async fetchFivePassiveClusterWhisp(req, res) {
    try {
      const { id, position } = req.params;

      const fetch = await fetchFivePassiveClusterListings(id, position);

      const response = {
        result: fetch.result,
        idList: fetch.listingId,
      };

      // fetch listed item

      const fetchItem = await axios.get(`https://www.pathofexile.com/api/trade/fetch/${response.result}?query=${response.idList}`, {
        headers: {
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
          'Content-Type': 'application/json',
          'User-Agent': '{leandro_dias9@hotmail.com}',
        },
      });

      const treatedResult ={
        whisp: fetchItem.data.result[0].listing.whisper.replace('"', ''),
        passives: fetchItem.data.result[0].item.enchantMods[0],
        ilvl: fetchItem.data.result[0].item.ilvl
    }

      return res.status(200).json(treatedResult);
    } catch (err) {
      return res.status(500).json({
        message: 'Erro inesperado; Por favor tente novamente',
      });
      
}
}

async fetchFourPassiveClusterWhisp(req, res) {
  try {
    const { id, position } = req.params;

    const fetch = await fetchFourPassivesClusterListings(id, position);

    const response = {
      result: fetch.result,
      idList: fetch.listingId,
    };

    // fetch listed item

    const fetchItem = await axios.get(`https://www.pathofexile.com/api/trade/fetch/${response.result}?query=${response.idList}`, {
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
        'Content-Type': 'application/json',
        'User-Agent': '{leandro_dias9@hotmail.com}',
      },
    });

    const treatedResult ={
      whisp: fetchItem.data.result[0].listing.whisper.replace('"', ''),
      passives: fetchItem.data.result[0].item.enchantMods[0],
      ilvl: fetchItem.data.result[0].item.ilvl
  }

    return res.status(200).json(treatedResult);
  } catch (err) {
    return res.status(500).json({
      message: 'Erro inesperado; Por favor tente novamente',
    });
    
}
}

}

export default new WhispController();
