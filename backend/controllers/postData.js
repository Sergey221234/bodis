const axios = require('axios');
const postData = async (req, res) => {
  try {
    const api_baseUrl = process.env.URL;
    const api_token = process.env.API;

    const { domainName, dateFrom, dateTo } = req.body;

    
    const data = {
      columns: [
        "domain_name",
        "subids",
        "ref_keyword",
        "page_query",
        "ref_pubsite",
        "ref_adnetwork",
        "estimated_revenue",
        "finalized"
      ],
      filter: {
        type: "click",
        date_range: [dateFrom, dateTo]
      },
      per_page: "10",
      order_by: "server_datetime",
      sort_order: "desc"
    };

    if (domainName) {
      data.filter.domain_name = domainName; 
    }

    const response = await axios.post(`${api_baseUrl}/parking/epc`, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${api_token}`
      }
    });

    console.log(response.data);
    res.json({ data: response.data });
  } catch (error) {
    console.error('Ошибка получения данных от Bodis', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};

module.exports = postData;




