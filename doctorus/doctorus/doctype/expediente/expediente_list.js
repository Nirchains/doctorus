frappe.listview_settings['Expediente'] = {
	
	get_indicator: function(doc) {
		return [__(doc.status), {
				"No matriculado": "red",
				"Activo": "blue",
				"No activo": "orange",
				"Finalizado": "darkgrey"
			}[doc.status], "status,=," + doc.status];
		}
	
};