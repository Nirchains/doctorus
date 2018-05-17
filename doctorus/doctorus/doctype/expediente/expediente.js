// Copyright (c) 2018, HISPALIS DIGITAL and contributors
// For license information, please see license.txt
cur_frm.add_fetch("student", "full_name", "student_full_name");
cur_frm.add_fetch("research_line", "title", "research_line_title");


frappe.ui.form.on('Expediente', {
	refresh: function(frm) {

	}
});
