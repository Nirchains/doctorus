# -*- coding: utf-8 -*-
# Copyright (c) 2018, HISPALIS DIGITAL and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Matricula(Document):
	def validate(self):
		max_enrollment = int(frappe.db.get_single_value("Configuracion del Programa", "max_enrollment"))
		count = int(frappe.db.sql("""select count(*) from `tabMatricula` where expedient=%s and docstatus = 1 and workflow_state = 'matriculado' """, self.expedient)[0][0])
		
		if count >= max_enrollment:
			frappe.throw("No pueden establecer más de {0} matrículas para un expediente".format(max_enrollment))
		#workflow_state = frappe.db.get_value("Matricula", self.name, "workflow_state")
		#frappe.msgprint("Actual: {0} - Siguiente: {1}".format(workflow_state, self.workflow_state))
