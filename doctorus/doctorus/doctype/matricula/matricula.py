# -*- coding: utf-8 -*-
# Copyright (c) 2018, HISPALIS DIGITAL and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from six import iteritems, string_types
from doctorus.util import force_default

class Matricula(Document):
	def validate(self):

		force_default(self)

		count = self.count_enrollments()

		if count >= self.get_max_enrollments():
			frappe.throw("No pueden establecer más de {0} matrículas para un expediente".format(max_enrollment))

		
	def on_submit(self):
		count = self.count_enrollments()

		if count == 1:
			doc_expedient = frappe.get_doc("Expediente", self.expedient)
			doc_expedient.course = self.course
			doc_expedient.status = 'Activo'
			doc_expedient.save()
			frappe.clear_cache()
				

	def on_cancel(self):
		count = self.count_enrollments()

		if count == 0:
			doc_expedient = frappe.get_doc("Expediente", self.expedient)
			doc_expedient.course = ''
			doc_expedient.status = 'No matriculado'
			doc_expedient.save()
			frappe.clear_cache()

	
	#Cuenta el número de matrículas válidas
	def count_enrollments(self):
		return int(frappe.db.sql("""select count(*) from `tabMatricula` where expedient=%s and docstatus = 1 and workflow_state = 'Matriculado' """, self.expedient)[0][0])

	def get_max_enrollments(self):
		return int(frappe.db.get_single_value("Configuracion del Programa", "max_enrollment"))



		#workflow_state = frappe.db.get_value("Matricula", self.name, "workflow_state")
		#frappe.msgprint("Actual: {0} - Siguiente: {1}".format(workflow_state, self.workflow_state))
	