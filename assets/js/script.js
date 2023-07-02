// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var hour1 = dayjs().format('H');
var hour = Number(hour1);
var a;
var b;
console.log(hour);
var scheduleEl = $('#schedule');
for (var i = 9; i <= 17; i++) {
  if (i > 12) {
    a = i - 12;
    b = a + " PM";
  } else {
    a = i;
    b = a + " AM";
  }
  var hr = $('<div>');
  var hrCh = $('<div>');
  var textar = $('<textarea>');
  var saveBtn = $('<button>');
  var iTag = $('<i>');

  hr.attr('id', 'hour-' + a);
  // hr.addClass('row time-block past');
  hrCh.addClass('col-2 col-md-1 hour text-center py-3');
  textar.addClass('col-8 col-md-10 description');
  textar.attr('rows', '3');
  saveBtn.addClass('btn saveBtn col-2 col-md-1');
  saveBtn.attr('aria-label', 'save');
  iTag.addClass('fas fa-save');
  iTag.attr('aria-hidden', 'true');
  hrCh.text(b);
  // hr.addClass('row time-block past');
  scheduleEl.append(hr);
  hr.append(hrCh);
  hr.append(textar);
  hr.append(saveBtn);
  saveBtn.append(iTag);

  console.log("🚀 ~ file: script.js:38 ~ a:", hour, typeof hour);
  console.log("🚀 ~ file: script.js:45 ~ i:", i, typeof i);

  if (i < hour) {
    hr.addClass('row time-block past')
  } else if (i === hour) {
    hr.addClass('row time-block present');
    console.log("now")
  } else {
    hr.addClass('row time-block future')
  }
}

// $(function () {


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
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.



// });
