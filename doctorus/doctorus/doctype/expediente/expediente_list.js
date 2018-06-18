frappe.listview_settings['Expediente'] = {
	
	get_indicator: function(doc) {
		return [__(doc.status), {
				"No matriculado": "red",
				"Activo": "blue",
				"No activo": "orange",
				"Finalizado": "darkgrey"
			}[doc.status], "status,=," + doc.status];
	},

	onload: function(list_view) {
		let method = "doctorus.doctorus.doctype.expediente.expediente.set_multiple_status"

		list_view.page.add_menu_item(__("Marcar como 'Activo'"), function() {
			list_view.call_for_selected_items(method, {"status": "Activo"});
		});

		list_view.page.add_menu_item(__("Marcar como 'No Activo'"), function() {
			list_view.call_for_selected_items(method, {"status": "No activo"});
		});

		list_view.page.add_menu_item(__("Marcar como 'Finalizado'"), function() {
			list_view.call_for_selected_items(method, {"status": "Finalizado"});
		});
		
	},
	
};