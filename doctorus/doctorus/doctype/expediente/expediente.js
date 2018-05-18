// Copyright (c) 2018, HISPALIS DIGITAL and contributors
// For license information, please see license.txt
cur_frm.add_fetch("student", "full_name", "student_full_name");
cur_frm.add_fetch("research_line", "title", "research_line_title");


frappe.ui.form.on('Expediente', {
	refresh: function(frm) {
		if(!frm.doc.__islocal) {
			frm.add_custom_button(__("Ver estudiante"),
				function() {
					frappe.set_route("Form", "Estudiante", frm.doc.student);
				}
			);

			frm.add_custom_button(__("Ver programa"),
				function() {
					frappe.set_route("Form", "Programa", frm.doc.program);
				}
			);
		
		}
	}
});
