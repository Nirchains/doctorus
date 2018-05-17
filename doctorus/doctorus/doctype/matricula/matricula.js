// Copyright (c) 2018, HISPALIS DIGITAL and contributors
// For license information, please see license.txt

cur_frm.add_fetch("expedient", "student_full_name", "student_full_name");

frappe.ui.form.on('Matricula', {
	refresh: function (frm) {
		if(!frm.doc.__islocal) {
			frm.add_custom_button(__("Ver log"),
				function() {
					frappe.route_options = {
						"docname": frm.doc.name,
						"ref_doctype": "Matricula"
					};
					frappe.set_route("List", "Version");
				}
			);

			frm.add_custom_button(__("Ver expediente"),
				function() {
					frappe.set_route("Form", "Expediente", frm.doc.expedient);
				}
			);
		
		}
	}
});
