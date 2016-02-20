var activies = [{
                "EarlyStart": "1",
				"Duration": "10",
                "EarlyFinish": "2",		
                "ActivityName": "Activity 1",
                "LateStart": "4",
				"TotalFloat": "4",
                "LateFinish": "5"		               
        	}];

		if (activies  != null) {
            var table = '';
            $.each(activies, function (key, val) {
                table += '<table>';
				table += '<tbody>';
				table += '<tr><td>' + val.EarlyStart + '</td><td>' + val.Duration + '</td><td>' + val.EarlyFinish + '</td></tr>';
				table += '<tr><td colspan="3">' +  val.ActivityName + '</td></tr>';
				table += '<tr><td>' + val.LateStart + '</td><td>' + val.TotalFloat + '</td><td>' + val.LateFinish + '</td></tr>';
			    table += '</tbody>';
                table += '</table>';
            })
            $("#content").append(table);
}