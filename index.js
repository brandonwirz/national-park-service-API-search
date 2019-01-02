'use strict';

const apiKey = 'vTpIld3ekOuUYD0uKMDk9w8ue5OL3P3GUDsgPUXT';
const searchURL = 'https://api.nps.gov/api/v1/parks';

//https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=vTpIld3ekOuUYD0uKMDk9w8ue5OL3P3GUDsgPUX


function formatQueryParams(params) {
  const queryItems = Object.keys(params).map( key =>
  `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    return queryItems.join('&');
}


function displayResults(responseJson) {
  console.log(responseJson);
  $('results-list').empty();  // if there are previous results, remove them

  for (let i = 0; i < responseJson.data.length:i++) {

// For each of the objects in the items array (i.e. for each video), we append an <li> element with the video title, description, and thumbnail.
    $('#results-list').append(
      `<li>
         <h3>${responseJson.data[i].fullName}</h3>
         <p>${responseJson.data[i].description}</p>
         <a href="${responseJson.data[i].url}">${responseJson.data[i].url}</a>
      </li>`
    )
  };

  $('#results').removeClass('hidden');
};

function getVideos() {
  
}
