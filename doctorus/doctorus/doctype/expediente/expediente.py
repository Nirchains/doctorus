# -*- coding: utf-8 -*-
# Copyright (c) 2018, HISPALIS DIGITAL and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe, json
from frappe.model.document import Document
from frappe.desk.notifications import clear_doctype_notifications
from doctorus.util import force_default

class Expediente(Document):
	def autoname(self):
		pass
		#self.name = ("{0}-{1}").format(self.student, self.program)

	def validate(self):
		force_default(self)

	def update_expedient_status(self, status):
		self.status = status
		self.save()
		self.notify_update()
		clear_doctype_notifications(self)

@frappe.whitelist()
def update_expedient_status(docname, status):
	pr = frappe.get_doc("Expediente", docname)
	pr.update_expedient_status(status)

@frappe.whitelist()
def set_multiple_status(names, status):
	names = json.loads(names)
	for name in names:
		opp = frappe.get_doc("Expediente", name)
		opp.status = status
		opp.save()