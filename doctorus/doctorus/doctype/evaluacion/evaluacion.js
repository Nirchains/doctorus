// Copyright (c) 2018, HISPALIS DIGITAL and contributors
// For license information, please see license.txt

cur_frm.add_fetch("enrollment", "expedient", "expedient");
cur_frm.add_fetch("enrollment", "modality", "from_modality");
cur_frm.add_fetch("enrollment", "course", "course");
cur_frm.add_fetch("enrollment", "student_full_name", "student_full_name");

frappe.ui.form.on('Evaluacion', {
	refresh: function(frm) {

	}
});
