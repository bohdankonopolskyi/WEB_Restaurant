var nativePicker = document.querySelector('.nativeDatePicker');
var fallbackPicker = document.querySelector(".fallbackDatePicker");
var fallbackLabel = document.querySelector('.fallbackLabel');

let yearSelect = document.querySelector('#year');
let monthSelect = document.querySelector('#month');
let daySelect = document.querySelector('#day');

let clearBtn = document.querySelector('#clear_btn');
let datePicker = document.querySelector('#DatePicker');

//fallbackPicker.style.display = 'none';
//fallbackLabel.style.display = 'none';

//fallbackPicker.style.display = 'block';
//fallbackLabel.style.display = 'block';

populateDays(monthSelect.value);
populateYears();

function populateDays(month)
{
    while(daySelect.firstChild){
    daySelect.removeChild(daySelect.firstChild);
  }

  // Create variable to hold new number of days to inject
  var dayNum;

  // 31 or 30 days?
  if(month === 'January' || month === 'March' || month === 'May' || month === 'July' || month === 'August' || month === 'October' || month === 'December') {
    dayNum = 31;
  } else if(month === 'April' || month === 'June' || month === 'September' || month === 'November') {
    dayNum = 30;
  }
  else {
    // If month is February, calculate whether it is a leap year or not
      var year = yearSelect.value;
      var leap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
      dayNum = leap ? 29 : 28;
    }

    for(i = 1; i <= dayNum; i++) {
        var option = document.createElement('option');
        option.textContent = i;
        daySelect.appendChild(option);
      }
      if(previousDay) {
        daySelect.value = previousDay;
    
        // If the previous day was set to a high number, say 31, and then
        // you chose a month with less total days in it (e.g. February),
        // this part of the code ensures that the highest day available
        // is selected, rather than showing a blank daySelect
        if(daySelect.value === "") {
          daySelect.value = previousDay - 1;
        }
    
        if(daySelect.value === "") {
          daySelect.value = previousDay - 2;
        }
    
        if(daySelect.value === "") {
          daySelect.value = previousDay - 3;
        }
      }
    }
   function getMonth() {
        
        switch(monthSelect.value)
        {
            case 'January': return 1;
            break;
            case 'February' : return 2;
            break;
            case 'March' : return 3;
            break;
            case 'April' : return 4;
            break;
            case 'May' : return 5;
            break;
            case 'June' : return 6;
            break;
            case 'July' : return 7;
            break;
            case 'August' : return 8;
            break;
            case 'September' : return 9;
            break;
            case 'October' : return 10;
            break;
            case 'November' : return 11;
            break;
            case 'December' : return 12;
            break;
        }
        
    }
    function populateYears() {
      // get this year as a number
      var date = new Date();
      var year = date.getFullYear();
    
      // Make this year, and the 100 years before it available in the year <select>
      for(var i = 0; i <= 100; i++) {
        var option = document.createElement('option');
        option.textContent = year-i;
        yearSelect.appendChild(option);
      }
    }
    
    // when the month or year <select> values are changed, rerun populateDays()
    // in case the change affected the number of available days
    yearSelect.onchange = function() {
      populateDays(monthSelect.value);
    }
    
    monthSelect.onchange = function() {
      populateDays(monthSelect.value);
    }
    
    //preserve day selection
    var previousDay;
    
    // update what day has been set to previously
    // see end of populateDays() for usage
    daySelect.onchange = function() {
      previousDay = daySelect.value;
    }

clearBtn.onclick = function () {
    
    console.log(document.querySelector('#DatePicker').value);
    console.log(typeof(datePicker.value));
    datePicker.value = '';
}
daySelect.onchange = function () {
    setDate();
}
monthSelect.onchange = function () {
    setDate();
}
yearSelect.onchange = function () {
    setDate();
}

function setDate() {
    datePicker.valueAsDate = new Date(yearSelect.value, getMonth(), daySelect.value );
}