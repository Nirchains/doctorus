import frappe

from frappe import _
import json
from ast import literal_eval
from frappe.utils import (cstr, flt, cint, getdate, now_datetime, formatdate,
	strip, get_timestamp, random_string)
from six import iteritems, string_types

def force_default(self):
	def get_values():
			values = self.as_dict()
			# format values
			for key, value in iteritems(values):
				if value==None:
					values[key] = ""
			return values

	if self.meta.get("title_field")=="title":
		df = self.meta.get_field(self.meta.title_field)

		if df.options:
			self.set(df.fieldname, df.options.format(**get_values()))
		elif df.default:
			# set default title for new transactions (if default)
			self.set(df.fieldname, df.default.format(**get_values()))
