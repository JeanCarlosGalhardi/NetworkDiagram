var activies = [{
  // Proprietary visible from table
  "EarlyStart": "1",
  "Duration": "5",
  "EarlyFinish": "5",
  "ActivityName": "Analysis",
  "LateStart": "x",
  "TotalFloat": "x",
  "LateFinish": "x",
  
  // Proprietary for definition of position
  "PositionDayStart": "1",
  "DurationTask": "5"

}, {

  "EarlyStart": "6",
  "Duration": "5",
  "EarlyFinish": "10",
  "ActivityName": "Design",
  "LateStart": "x",
  "TotalFloat": "x",
  "LateFinish": "x",
    
  "PositionDayStart": "6",
  "DurationTask": "10"
}, {

  "EarlyStart": "11",
  "Duration": "10",
  "EarlyFinish": "20",
  "ActivityName": "Develop.",
  "LateStart": "x",
  "TotalFloat": "x",
  "LateFinish": "x",
  
  "PositionDayStart": "11",
  "DurationTask": "10"
}];

if (activies != null) {
  var table = '';
  $.each(activies, function(key, val) { 
    //table += '<table>';
   // table += '<table style="margin-left:1000px">';
    table += '<table style="margin-left:'+ val.PositionDayStart +'0px">';
    
    table += '<tbody>';
    table += '<tr><td>' + val.EarlyStart + '</td><td>' + val.Duration + '</td><td>' + val.EarlyFinish + '</td></tr>';
    table += '<tr><td colspan="3">' + val.ActivityName + '</td></tr>';
    table += '<tr><td>' + val.LateStart + '</td><td>' + val.TotalFloat + '</td><td>' + val.LateFinish + '</td></tr>';
    table += '</tbody>';
    table += '</table>';
  })
  $("#content").append(table);
}
