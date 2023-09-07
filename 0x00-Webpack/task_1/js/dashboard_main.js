import $ from 'jquery';
import debounce from 'lodash/debounce';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="start-button">Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let  count = 0;

const updateCounter = debounce(() => {
  count += 1;
  $('#count').text('${count} clicks on the button');
}, 300);

$('#start-button').on('click', updateCounter);
