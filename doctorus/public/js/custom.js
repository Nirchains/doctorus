frappe.provide("util");
frappe.provide("helper");

$.extend(util, {
	get: function(frm, doctype, name, filters, callback) {
		return frappe.call({
			method: "frappe.client.get",
			args: {
				doctype: doctype,
				name: name
			},
			callback: function(r, rt) {
				callback && callback(r.message, frm);
			}
		});
	},

	set_value_if_no_null(frm, name, value) {
		if (helper.IsNullOrEmpty(value)) {
			frm.set_value(name,'');
		} else {
			frm.set_value(name,value);
		}
	},

	set_value_only_if_no_null(frm, name, value) {
		if (!helper.IsNullOrEmpty(value)) {
			frm.set_value(name,value);
		}
	},

	transform_zero_to_empty: function(frm, name) {
		if (helper.IsNullOrEmpty(frm.doc[name])) {
			frm.set_value(name, '');
		}
	},

	toggle_display_and_required: function(frm,name,condition) {
		frm.toggle_display(name, condition);
		frm.toggle_reqd(name, condition);
	},

	toggle_enable_and_required: function(frm,name,condition) {
		frm.toggle_enable(name, condition);
		frm.toggle_reqd(name, condition);
	},	

	toggle_display_and_not_required: function(frm,name,condition) {
		frm.toggle_display(name, condition);
		frm.toggle_reqd(name, false);
	},

	import_template_documents: function(frm, origin_table, destin_table) {
		frappe.model.clear_table(frm.doc, destin_table);
			frappe.call({
				method: "doctorus.util.load_repository_template",
				args: {
					"parentfield": origin_table
				},
				callback: function(r) {
					if(r.message) {
						console.log(r.message);
						$.each(r.message, function(i, item) {
							var d = frappe.model.add_child(frm.doc, "Repositorio", destin_table);
							frappe.model.set_value(d.doctype, d.name, "type", item.type);
						});
					}
					refresh_field(destin_table);
				}
			});
	}
});

$.extend(helper, {
	IsNull: function (obj) {
        return (obj === null || obj === undefined || obj === 'undefined');
    },

    IsString: function (obj) {
        return typeof obj === 'string';
    },

    IsNumber: function (obj) {
        return typeof obj === 'number';
    },

    IsNullOrEmpty: function (obj) {
        return (this.IsNull(obj) || obj === {} || obj === '' || obj === 0 || obj === '0');
    },

    NumberIsNullOrZero: function (obj) {
        return (this.IsNull(obj) || obj === 0 || obj === '0');
    },

    StringIsNullOrEmpty: function (obj) {
        return (this.IsNull(obj) || obj === '');
    },

    ArrayIsNullOrEmpty: function (obj) {
        return (this.IsNull(obj) || obj.length === 0);
    },

    IsTrue: function (obj) {
        return (!this.IsNull(obj) && (obj === 'true' || obj === true || obj === 1));
    },

    IsFalse: function (obj) {
        return !this.IsTrue(obj);
    },

    IsEmpty: function (str) {
        return (str.trim().length === 0);
    },
    
    ParseInt: function (num) {
        return parseInt(num);
    },

    In: function(obj, arr) {
    	return (arr.indexOf(obj) != -1);
    },

    Concat: function(str1, str2, separator) {
    	if (!this.IsNullOrEmpty(str2)) {
    		return str1.trim() + separator + str2.trim();
    	} else {
    		return str1.trim();
    	}
    }

});