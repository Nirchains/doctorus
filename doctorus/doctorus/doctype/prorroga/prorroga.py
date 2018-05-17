# -*- coding: utf-8 -*-
# Copyright (c) 2018, HISPALIS DIGITAL and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Prorroga(Document):
	def validate(self):
		#frappe.msgprint(self.__dict__.keys())
		max_prorrogation = int(frappe.db.get_single_value("Configuracion del Programa", "max_prorrogation"))
		count = int(frappe.db.sql("""select count(*) from `tabProrroga` where expedient=%s and docstatus = 1""", self.expedient)[0][0])
		
		if count >= max_prorrogation:
			frappe.throw("No pueden establecer más de {0} prórrogas para un expediente".format(max_prorrogation))
