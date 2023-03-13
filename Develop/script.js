//Resources:
//https://api.jquery.com/each/
//https://www.w3schools.com/jsref/jsref_split.asp

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //compares the current hour with the id field to determine past,present,future
  function updateHour() {
    let currentHour = dayjs().hour();
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
