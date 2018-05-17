# -*- coding: utf-8 -*-
# Copyright (c) 2018, HISPALIS DIGITAL and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Expediente(Document):
	def autoname(self):
		self.name = ("{0}-{1}").format(self.student, self.program)
