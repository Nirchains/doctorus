# -*- coding: utf-8 -*-
# Copyright (c) 2018, HISPALIS DIGITAL and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from doctorus.util import force_default

class Evaluacion(Document):
	def validate(self):
		force_default(self)
