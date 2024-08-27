

function analyzeUrl(userUrl, apiKey){

    const formData = new FormData();

    formData.append('key', apiKey);
    formData.append('url', userUrl);
    formData.append('lang', 'en');

    return fetch('https://api.meaningcloud.com/sentiment-2.1',{
        method: 'POST',
        body: formData
    })
    .then(response =>  response.json())
    .then((data) =>  data)
    .catch(error => {
        throw new Error(`Error fetching sentiment analysis: ${error}`);
    });

}


module.exports = analyzeUrl
