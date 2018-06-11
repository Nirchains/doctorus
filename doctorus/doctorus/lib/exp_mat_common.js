cur_frm.add_fetch("enrollment", "expedient", "expedient");
cur_frm.add_fetch("enrollment", "course", "course");
cur_frm.add_fetch("enrollment", "student_full_name", "student_full_name");

cur_frm.fields_dict['enrollment'].get_query = function(doc) {
	var filter = [
			['Matricula', 'docstatus', '=', 1],
	]
	if (!helper.IsNullOrEmpty(doc.expedient)) {
		filter.push(['Matricula', 'expedient', '=', doc.expedient]);
	}
	return {
		filters: filter
	}
};