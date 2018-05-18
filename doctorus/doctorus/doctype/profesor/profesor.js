// Copyright (c) 2018, HISPALIS DIGITAL and contributors
// For license information, please see license.txt
{% include 'doctorus/public/js/doctype/user_common.js' %}


frappe.ui.form.on('Profesor', {
	refresh: function(frm) {
		cur_frm.cscript.profesor.check_properties(frm);
	},
	first_name: function(frm) {
		cur_frm.cscript.user.update_full_name(frm);
	},
	last_name_1: function(frm) {
		cur_frm.cscript.user.update_full_name(frm);
	},
	last_name_2: function(frm) {
		cur_frm.cscript.user.update_full_name(frm);
	},
	sisiusid: function(frm) {
		cur_frm.cscript.profesor.check_properties(frm);
	},
	sisius_button: function(frm) {
		window.open('https://investigacion.us.es/sisius/sis_showpub.php?idpers=' + frm.doc.sisiusid, '_blank');
	}
});


cur_frm.cscript.profesor = {
	check_properties: function(frm) {
		//Visibilidad
		frm.toggle_display('sisius_button',frm.doc.sisiusid > 0);
	}
}
