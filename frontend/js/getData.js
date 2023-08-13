const getData = async ()=>{
  const domainName = document.getElementById('domainName').value
  // const dateFrom = document.getElementById('dateFrom').value
  // const dateTo = document.getElementById('dateTo').value
    const today = new Date();
  const threeDaysAgo = new Date(today);
  threeDaysAgo.setDate(today.getDate() - 3);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

const dateFrom = formatDate(threeDaysAgo);
const dateTo = formatDate(today);
  
  try {
    const response = await fetch('https://bodis.vercel.app/getdata', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          domainName:domainName,
          dateFrom:dateFrom,
          dateTo:dateTo
        }) 
      })
      const data = await response.json()
      const getData = data.data.data
      console.log(getData)
      getData.forEach(item => {
        const domName = item.domain_name
        const estimated_revenue = item.estimated_revenue
        const finalized = item.finalized
        const page_query = item.page_query
        const ref_adnetwork = item.ref_adnetwork
        const refKeyword = item.ref_keyword
        const ref_pubsite = item.ref_pubsite
        const subids = item.subids
        const visit_id = item.visit_id

        const resultBlock = document.getElementById('result')
        const resultItem = document.createElement('div')
        resultItem.style.fontSize = "18px";
        // resultItem.textContent = `Domain: ${domName}, estimated_revenue: ${estimated_revenue}, finalized: ${finalized}, page_query: ${page_query}, ref_adnetwork: ${ref_adnetwork}, ref_pubsite: ${ref_pubsite}, subids: ${subids}, visit_id: ${visit_id}, refKeyword: ${refKeyword}`;
        // resultBlock.appendChild(resultItem);
        resultBlock.innerHTML = ''
        const table = document.createElement('table');
        
        table.className = 'col s12';
    
        const thead = document.createElement('thead');
        const theadRow = document.createElement('tr');
    
        const headers = [
          'Domain',
          'estimated_revenue',
          'finalized',
          'page_query',
          'ref_adnetwork',
          'ref_pubsite',
          'subids',
          'visit_id',
          'refKeyword'
        ];
    
        headers.forEach(headerText => {
          const th = document.createElement('th');
          th.textContent = headerText;
          theadRow.appendChild(th);
        });
    
        thead.appendChild(theadRow);
    
        
        const tbody = document.createElement('tbody');
        const tbodyRow = document.createElement('tr');
    
        const dataCells = [
          `${domName}`,
          `${estimated_revenue}`,
          `${finalized}`,
          `${page_query}`,
          `${ref_adnetwork}`,
          `${ref_pubsite}`,
          `${subids}`,
          `${visit_id}`,
          `${refKeyword}`
        ];
    
        dataCells.forEach(dataCellText => {
          const td = document.createElement('td');
          td.innerHTML = dataCellText;
          tbodyRow.appendChild(td);
        });
    
        tbody.appendChild(tbodyRow);
    
        
        table.appendChild(thead);
        table.appendChild(tbody);
        resultBlock.appendChild(table);

      })
     
  } catch (error) {
    console.error('Ошибка получения данных с сервера',error)
  }
    
            
}
export default getData