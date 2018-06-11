// Copyright (c) 2018, HISPALIS DIGITAL and contributors
// For license information, please see license.txt

{% include 'doctorus/doctorus/lib/exp_mat_common.js' %};

cur_frm.add_fetch("enrollment", "modality", "from_modality");

frappe.ui.form.on('Cambio de Modalidad', {
	onload: function(frm) {
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