$( function() {
    $( "#accordion" ).accordion();
    $("#datePicker").datepicker();
    $("#tabs").tabs();
    $("#gallery").unitegallery();
  } );
  
  function setWidgetData_825121293(data){ 
    if(typeof(data) != 'undefined' && data.results.length > 0) 
    { for(var i = 0; i < data.results.length; ++i) 
    { var objMainBlock = ''; 
    var params = data.results[i]; 
    objMainBlock = document.getElementById('tw_'+params.widget_type+'_'+params.widget_id); 
    if(objMainBlock !== null) objMainBlock.innerHTML = params.html_code; } 
  } 
} 
    var clock_timer_825121293 = -1; 
    widgetSrc = "https://widgets.booked.net/time/info?ver=2;domid=589;type=10;id=825121293;scode=124;city_id=18881,18114;wlangid=20;mode=1;details=1;background=ffffff;border_color=ffffff;color=333333;add_background=4e7178;add_color=12525e;head_color=ffffff;border=0;transparent=0"; 
    var widgetUrl = location.href; 
    widgetSrc += '&ref=' + widgetUrl; 
    var wstrackId = ""; 
    if (wstrackId) { 
      widgetSrc += ';wstrackId=' + wstrackId + ';' 
      }
var timeBookedScript = document.createElement("script"); 
timeBookedScript.setAttribute("type", "text/javascript"); 
timeBookedScript.src = widgetSrc; 
//document.body.appendChild(timeBookedScript); 
    