// Copyright (c) 2018, HISPALIS DIGITAL and contributors
// For license information, please see license.txt

cur_frm.add_fetch("enrollment", "expedient", "expedient");
cur_frm.add_fetch("enrollment", "modality", "from_modality");

frappe.ui.form.on('Cambio de Modalidad', {
	onload: function(frm) {
		
		var filter_enrollment = [];
		if (!helper.IsNullOrEmpty(frm.doc.expedient)) {
			filter_enrollment = ['Matricula', 'expedient', '=', frm.doc.expedient];
		}
		frm.fields_dict['enrollment'].get_query = function(doc) {
			return {
				filters: [
					['Matricula', 'docstatus', '=', 1],
					filter_enrollment
				]
			}
		};

		frm.fields_dict['to_modality'].get_query = function(doc) {
			return {
				filters: [
					['Modalidad', 'name', '!=', frm.doc.from_modality]
				]
			}
		};
	},
	refresh: function(frm) {
		cur_frm.cscript.cambio_de_modalidad.check_properties(frm);
	},
	enrollment: function(frm) {
		cur_frm.cscript.cambio_de_modalidad.check_properties(frm);
	}
});


cur_frm.cscript.cambio_de_modalidad = {
	check_properties: function(frm) {
		//Visibilidad
		frm.toggle_display("section_change", !helper.IsNullOrEmpty(frm.doc.enrollment));
	}
}