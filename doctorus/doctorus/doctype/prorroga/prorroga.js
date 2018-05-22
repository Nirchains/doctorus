// Copyright (c) 2018, HISPALIS DIGITAL and contributors
// For license information, please see license.txt

frappe.ui.form.on('Prorroga', {
	refresh: function(frm) {
		if(!frm.doc.__islocal) {
			frm.add_custom_button(__("Ver expediente"),
				function() {
					frappe.set_route("Form", "Expediente", frm.doc.expedient);
				}
			);

			frm.add_custom_button(__("Ver matrículas"),
				function() {
					frappe.route_options = {
						"expedient": frm.doc.expedient
					};
					frappe.set_route("List", "Matricula");
				}
			);
		}
	}
});
