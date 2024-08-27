
//function that checks the URL
import { checkUrl } from './URLChecker'

const form = document.getElementById('urlForm');

if(form){
    form.addEventListener('submit', handleSubmit);
}

function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const URL = document.getElementById('name').value;

    if (!URL) {
        alert('Please enter a URL');
    }else {
        // Check if the URL is valid
        if (checkUrl(URL)) {
            sendData(URL);//send it to the server
        }
        else {
            alert('Please enter a valid URL');
        }
    }

}

// Function to send data to the server
function sendData(URL) {
    fetch('http://localhost:8081/url-analysis', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: URL })
    })
        .then(response => response.json())
        .then(data => {
            console.log('Sentiment Analysis Result:', data);
            document.getElementById('agreement').innerHTML = 'Agreement : '+ data.agreement;
            document.getElementById('confidence').innerHTML = 'Confidence : '+ data.confidence;
            document.getElementById('irony').innerHTML = 'Irony : '+ data.irony;
            document.getElementById('model').innerHTML = 'Model : '+ data.model;
            document.getElementById('score_tag').innerHTML = 'Score_tag : '+ data.score_tag;
            document.getElementById('subjectivity').innerHTML = 'subjectivity : '+ data.subjectivity;
            document.getElementById('text').innerHTML = 'Text : '+ data.sentence_list[0].text;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Export the handleSubmit function
export { handleSubmit }
