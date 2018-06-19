// Copyright (c) 2018, HISPALIS DIGITAL and contributors
// For license information, please see license.txt
cur_frm.add_fetch("expedient", "student_full_name", "student_full_name");


frappe.ui.form.on('Documentacion Expediente', {
	refresh: function(frm) {
		if(frm.doc.__islocal) {
			util.import_template_documents(frm, "fase_previa_template", "fase_previa_table");
			util.import_template_documents(frm, "comunicaciones_template", "comunicaciones_table")
			util.import_template_documents(frm, "tribunal_template", "tribunal_table");
			util.import_template_documents(frm, "defensa_template", "defensa_table");

		} else {
			frm.add_custom_button(__("Ver expediente"),
				function() {
					frappe.set_route("Form", "Expediente", frm.doc.expedient);
				}
			);
		}

	},
});
