// Copyright (c) 2018, HISPALIS DIGITAL and contributors
// For license information, please see license.txt
{% include 'doctorus/doctorus/lib/exp_mat_common.js' %};

frappe.ui.form.on('Evaluacion', {
	refresh: function(frm) {
		cur_frm.cscript.evaluacion.check_properties(frm);
		cur_frm.cscript.evaluacion.check_training_complement(frm);
	},
	evaluation_1: function(frm) {
		cur_frm.cscript.evaluacion.check_properties_ev_1(frm);
	},
	evaluation_2: function(frm) {
		cur_frm.cscript.evaluacion.check_properties_ev_2(frm);
	},
	enrollment: function(frm) {
		cur_frm.cscript.evaluacion.check_training_complement(frm);
	}
});

cur_frm.cscript.evaluacion = {
	check_properties: function(frm) {
		this.check_properties_ev_1(frm);
		this.check_properties_ev_2(frm);
	},
	check_properties_ev_1: function(frm) {
		frm.toggle_display('evaluation_1_date', !helper.IsNullOrEmpty(frm.doc.evaluation_1));
		frm.toggle_display('dad_document_1', !helper.IsNullOrEmpty(frm.doc.evaluation_1) && !frm.doc.__islocal);
		frm.toggle_display('pi_document_1', !helper.IsNullOrEmpty(frm.doc.evaluation_1) && !frm.doc.__islocal);
		frm.toggle_display('evaluation_2', !helper.IsNullOrEmpty(frm.doc.evaluation_1) && !frm.doc.__islocal);
	},
	check_properties_ev_2: function(frm) {
		frm.toggle_display('evaluation_2_date', !helper.IsNullOrEmpty(frm.doc.evaluation_2));
		frm.toggle_display('dad_document_2', !helper.IsNullOrEmpty(frm.doc.evaluation_2) && !frm.doc.__islocal);
		frm.toggle_display('pi_document_2', !helper.IsNullOrEmpty(frm.doc.evaluation_2) && !frm.doc.__islocal);
	},
	check_training_complement: function(frm) {
		frappe.call({
			method: "frappe.client.get_value",
			args: {
				doctype: "Matricula",
				filters: {"name": frm.doc.enrollment},
				fieldname: "training_complement"
			},
			callback: function(r){
				var visible = false;
				if(r.message){
					if (r.message.training_complement == 1) {
						visible = true;
					}
				}
				frm.toggle_display('training_complement_section', visible);
				frm.toggle_reqd('training_complement', visible);
			}
		});
	}
}