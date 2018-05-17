cur_frm.cscript.user = {
	update_full_name: function(frm) {
		var full_name = '';
		full_name = helper.Concat(frm.doc.first_name, frm.doc.last_name_1, ' ');
		full_name = helper.Concat(full_name, frm.doc.last_name_2, ' ');
		frm.set_value('full_name', full_name);
	}
}