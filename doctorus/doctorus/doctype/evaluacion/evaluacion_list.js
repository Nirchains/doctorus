frappe.listview_settings['Evaluacion'] = {
	add_fields: ["evaluation_1", "evaluation_2"],
	
	column_render: {
		evaluation_1: function(doc) {
			var html = ""
			if (doc.evaluation_1) {
				html += repl("<span class='indicator %(color)s filterable' data-filter='evaluation_1,=," + doc.evaluation_1 + "'>" + doc.evaluation_1 + "</span>", 
					{color: get_color(doc.evaluation_1)})
			}

			return html;
		},
		evaluation_2: function(doc) {
			var html = ""
			if (doc.evaluation_2) {
				html += repl("<span class='indicator %(color)s filterable' data-filter='evaluation_2,=," + doc.evaluation_2 + "'>" + doc.evaluation_2 + "</span>", 
					{color: get_color(doc.evaluation_2)})
			}

			return html;
		}
	}

		
	
};

function get_color(indicator) {
	var color = "darkgray";
	switch(indicator) {
		case "Positiva":
			color = "green";
			break;
		case "Negativa":
			color =  "red";
			break;
		case "No Presentado":
			color =  "blue";
			break;
	}
	return color;
}

