# -*- coding: utf-8 -*-
# Copyright (c) 2018, HISPALIS DIGITAL and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class CambiodeModalidad(Document):

	def validate(self):
		self.validate_max_modality_changes()

	def on_submit(self):
		self.update_expedient()
		self.update_enrollment()		

		frappe.msgprint("Modalidad cambiada de {0} a {1}".format(self.from_modality, self.to_modality))

		frappe.clear_cache()

	def validate_max_modality_changes(self):
		#frappe.msgprint(self.__dict__.keys())
		max_modality_changes = int(frappe.db.get_single_value("Configuracion del Programa", "max_modality_changes"))
		count = int(frappe.db.sql("""select count(*) from `tabCambio de Modalidad` where expedient=%s and docstatus = 1""", self.expedient)[0][0])
		
		if count >= max_modality_changes:
			frappe.throw("No pueden establecer más de {0} cambios de modalidad para un expediente".format(max_modality_changes))

	def update_expedient(self):
		#Actualizamos la modalidad en el expediente
		doc_expedient = frappe.get_doc("Expediente", self.expedient)
		doc_expedient.modality = self.to_modality
		doc_expedient.save()

	def update_enrollment(self):
		#Actualizamos la modalidad en la matrícula
		doc_enrollment = frappe.get_doc("Matricula", self.enrollment)
		doc_enrollment.modality = self.to_modality
		doc_enrollment.flags.ignore_validate_update_after_submit = True
		doc_enrollment.save()