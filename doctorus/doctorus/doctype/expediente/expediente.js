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

			//Inhabilitamos el campo modalidad para que no pueda modificarse a menos que se haga una solicitud de cambio de modalidad
			frm.toggle_enable("modality", false);
		
		} 

		if(frm.doc.__islocal) {
			util.import_template_documents(frm, "fase_previa_template", "fase_previa_table");
			util.import_template_documents(frm, "comunicaciones_template", "comunicaciones_table")
			util.import_template_documents(frm, "tribunal_template", "tribunal_table");
			util.import_template_documents(frm, "defensa_template", "defensa_table");
		}
				
	},



});
