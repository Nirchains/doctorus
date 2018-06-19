// Copyright (c) 2018, HISPALIS DIGITAL and contributors
// For license information, please see license.txt

frappe.ui.form.on('Documentacion Programa', {
	refresh: function(frm) {
		if(frm.doc.__islocal) {
			util.import_template_documents(frm, "documentacion_template", "documentacion_table");
		} 

	},
});
