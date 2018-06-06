# -*- coding: utf-8 -*-
# Copyright (c) 2018, HISPALIS DIGITAL and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from doctorus.util import force_default

class Expediente(Document):
	def autoname(self):
		pass
		#self.name = ("{0}-{1}").format(self.student, self.program)

	def validate(self):
		force_default(self)