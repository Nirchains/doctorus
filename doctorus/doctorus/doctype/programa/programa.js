// Copyright (c) 2018, HISPALIS DIGITAL and contributors
// For license information, please see license.txt

frappe.ui.form.on('Programa', {
	refresh: function(frm) {
		if(!frm.doc.__islocal) {
			frm.add_custom_button(__("Ver expedientes"),
				function() {
					frappe.route_options = {
						"program": frm.doc.code
					};
					frappe.set_route("List", "Expediente");
				}
			);		
		}
	}
});
