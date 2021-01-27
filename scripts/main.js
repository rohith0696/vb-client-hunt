/**
 * main.js - the logic for our app
 *  Author Vikas Baswapuram
 */


 // Imports
import checkLocation from './checkLocation.js'
import getLocation from './location.js';

/**
 * Wait to get location and then display it.
 * Location should only be updated in response to a USER GESTURE
 */

async function locationHandler() {
  const locText = await checkLocation();
  document.getElementById('locationAnswer').innerHTML = locText;
}

function clearErrorText() {
  document.getElementById('error-message').innerHTML = '';
}

//declare main method

function main(){
  console.log('Starting the main');

  // ref to html elements

  const locationElement = document.getElementById('location')
  const errorElement = document.getElementById('error-message')

// initiate error to empty string
  errorElement.innerHTML ='';

  
  locationElement.addEventListener('click', locationHandler);
  locationElement.addEventListener('touch', locationHandler);
}



// This is where it all begins
window.addEventListener('load', main);
    