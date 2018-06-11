// Copyright (c) 2018, HISPALIS DIGITAL and contributors
// For license information, please see license.txt
{% include 'doctorus/doctorus/lib/user_common.js' %}

cur_frm.add_fetch("institution", "university", "university");


frappe.ui.form.on('Profesor', {
	onload: function(frm) {
		if(frm.doc.__islocal) {
			$('input[data-fieldname="first_name"]').focus();
		}

		frm.fields_dict['department'].get_query = function(doc) {
			return {
				filters: [
					['Departamento', 'institution', '=', frm.doc.institution]
				]
			}
		};
	},
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
	},
	institution: function(frm) {
		frm.set_value('department', '');
		if (frm.doc.institution != 'Universidad de Sevilla') {
			frm.set_value('sisiusid', 0);
		}
		cur_frm.cscript.profesor.check_properties(frm);
	}
});


cur_frm.cscript.profesor = {
	check_properties: function(frm) {
		//Visibilidad
		frm.toggle_display('sisius_button',frm.doc.sisiusid > 0);
		frm.toggle_display('department', !helper.IsNullOrEmpty(frm.doc.university));
		frm.toggle_display('category', !helper.IsNullOrEmpty(frm.doc.university));
		frm.toggle_display('sisiusid', frm.doc.institution == 'Universidad de Sevilla');
	}
}
