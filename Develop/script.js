//Resources:
//https://api.jquery.com/each/
//https://www.w3schools.com/jsref/jsref_split.asp

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

  $('.saveBtn').on('click', function() {
    var desc = $(this).siblings('.description').val();
    var blockTime = $(this).parent().attr('id');

    //savess data
    localStorage.setItem(blockTime, desc);

    $('.notification').addClass('show');
  })

  //compares the current hour with the id field to determine past,present,future
  function updateHour() {
    let currentHour = dayjs().hour();
    //https://api.jquery.com/each/
    $('.time-block').each( function() {
      let blockHour = parseInt($(this).attr('id').split('-')[1]);
      console.log(currentHour);
      console.log(typeof blockHour);
      if(currentHour > blockHour) {
        $(this).addClass('past');
      } else if (currentHour === blockHour) {
        $(this).removeClass('past').addClass('present');
      } else {
        $(this).removeClass('past present').addClass('future');
      }
    })}

  // Sets the text of the scheduler from past defined local storage
  $('#hour-9 .notification').text(localStorage.getItem('hour-9'));
  $('#hour-10 .notification').text(localStorage.getItem('hour-10'));
  $('#hour-11 .notification').text(localStorage.getItem('hour-11'));
  $('#hour-12 .notification').text(localStorage.getItem('hour-12'));
  $('#hour-13 .notification').text(localStorage.getItem('hour-13'));
  $('#hour-14 .notification').text(localStorage.getItem('hour-14'));
  $('#hour-15 .notification').text(localStorage.getItem('hour-15'));
  $('#hour-16 .notification').text(localStorage.getItem('hour-16'));
  $('#hour-17 .notification').text(localStorage.getItem('hour-17'));

  updateHour();
  // Add code to display the current date in the header of the page.
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
});
