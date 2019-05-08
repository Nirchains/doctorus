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

			//BOTONES
			
			switch(frm.doc.status) {
				case "Activo":
					frm.add_custom_button(__("No activo"), cur_frm.cscript.update_expedient_status_no_activo, __("Cambiar estado"));
					frm.add_custom_button(__("Finalizado"), cur_frm.cscript.update_expedient_status_finalizado, __("Cambiar estado"));
					break;
				case "No activo":
					frm.add_custom_button(__("Activo"), cur_frm.cscript.update_expedient_status_activo, __("Cambiar estado"));
					break;
				case "Finalizado":
					frm.add_custom_button(__("No activo"), cur_frm.cscript.update_expedient_status_no_activo, __("Cambiar estado"));
					frm.add_custom_button(__("Activo"), cur_frm.cscript.update_expedient_status_activo, __("Cambiar estado"));
					break;
			}

			frm.add_custom_button(__("Imprimir"),
				function() {
					var format = "Expediente";
					var with_letterhead = false;
					var lang_code = "ES";
					var printit = false;
					print.html(format,with_letterhead,lang_code,printit);
				}
			);
		} 			

		cur_frm.cscript.set_activities_indicator();
		cur_frm.cscript.set_status_indicator();
	},

});

cur_frm.cscript.update_expedient_status_no_activo = function() {
	cur_frm.cscript.update_expedient_status("No activo");
};

cur_frm.cscript.update_expedient_status_activo = function() {
	cur_frm.cscript.update_expedient_status("Activo");
};

cur_frm.cscript.update_expedient_status_finalizado = function() {
	cur_frm.cscript.update_expedient_status("Finalizado");
};

cur_frm.cscript.update_expedient_status = function(status) {
	
	frappe.ui.form.is_saving = true;
	frappe.call({
		method:"doctorus.doctorus.doctype.expediente.expediente.update_expedient_status",
		args: {docname: cur_frm.doc.name, status: status},
		callback: function(r){
			if(!r.exc)
				cur_frm.reload_doc();
		},
		always: function(){
			frappe.ui.form.is_saving = false;
		}
	})
	
}

cur_frm.cscript.set_activities_indicator = function () {
	var activities_status_control = "div[data-fieldname='activities'] .control-value";
		
	switch($(activities_status_control).html()) {
		case "No superadas":
			$(activities_status_control).addClass("indicator red");
			break;
		case "Superadas":
			$(activities_status_control).addClass("indicator green");
			break;
	}	
}

cur_frm.cscript.set_status_indicator = function() {
	var status_control = "div[data-fieldname='status'] .control-value";
	var indicator = frappe.get_indicator(cur_frm.doc);
	if (indicator) {
		$(status_control).addClass("indicator " + indicator[1]);
	}
}