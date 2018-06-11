frappe.listview_settings['Matricula'] = {
	
	get_indicator: function(doc) {
		return [__(doc.status), {
				"Pendiente": "red",
				"Admitido": "orange",
				"No admitido": "darkgrey",
				"Matriculado": "green",
				"Anulado": "blue"
			}[doc.status], "status,=," + doc.status];
		}
	
};