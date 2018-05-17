// Copyright (c) 2018, HISPALIS DIGITAL and contributors
// For license information, please see license.txt
{% include 'doctorus/public/js/doctype/user_common.js' %}


frappe.ui.form.on('Estudiante', {
	refresh: function(frm) {
		
	},
	first_name: function(frm) {
		cur_frm.cscript.user.update_full_name(frm);
	},
	last_name_1: function(frm) {
		cur_frm.cscript.user.update_full_name(frm);
	},
	last_name_2: function(frm) {
		cur_frm.cscript.user.update_full_name(frm);
	}
});
