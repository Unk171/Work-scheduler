// corrent hour for comparison 
var hour1 = dayjs().format('H');
// current date 
date.text(dayjs().format('MMM D, YYYY'));
// variables 
var hour = Number(hour1);
var a;
var b;
var scheduleEl = $('#schedule');
var date = $('#currentDay');
// loop for render schedule 
for (var i = 9; i <= 17; i++) {
  if (i > 12) {
    a = i - 12;
    b = a + " PM";
  } else {
    a = i;
    b = a + " AM";
  }
  // time-block tags 
  var hr = $('<div>');
  var hrCh = $('<div>');
  var textar = $('<textarea>');
  var saveBtn = $('<button>');
  var iTag = $('<i>');
  hrCh.addClass('col-2 col-md-1 hour text-center py-3');
  textar.addClass('col-8 col-md-10 description');
  textar.attr('rows', '3');
  textar.attr('id', 'hour-' + a);
  saveBtn.addClass('btn saveBtn col-2 col-md-1 fas fa-save');
  saveBtn.attr('aria-label', 'save');
  saveBtn.attr('data-number', a);
  saveBtn.attr('aria-hidden', 'true')
  hrCh.text(b);
  scheduleEl.append(hr);
  hr.append(hrCh);
  hr.append(textar);
  hr.append(saveBtn);
  // load event from local Storage
  textar.text(localStorage.getItem('#hour-' + a));
  // choose parseInt, now or future 
  if (i < hour) {
    hr.addClass('row time-block past')
  } else if (i === hour) {
    hr.addClass('row time-block present')
  } else {
    hr.addClass('row time-block future')
  }
}

// save button event 
var btnSave = $('.btn');
btnSave.on('click', function (event) {
  // correct hour element 
  var element = event.target;
  var num = parseFloat(element.dataset.number);
  var hrNum = "#hour-" + num;
  var cont2 = $(hrNum).val();
  // set to storage 
  localStorage.setItem(hrNum, cont2);
});
