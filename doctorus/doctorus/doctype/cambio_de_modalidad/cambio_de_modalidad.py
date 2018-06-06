# -*- coding: utf-8 -*-
# Copyright (c) 2018, HISPALIS DIGITAL and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class CambiodeModalidad(Document):
	def validate(self):
		self.update_modality()

	def update_modality(self):
		if self.docstatus == 1:
			#Actualizamos la modalidad en el expediente
			doc_expedient = frappe.get_doc("Expediente", self.expedient)
			doc_expedient.modality = self.to_modality
			doc_expedient.save()
			
			#Actualizamos la modalidad en el expediente
			doc_enrollment = frappe.get_doc("Matricula", self.enrollment)
			doc_enrollment.modality = self.to_modality
			doc_enrollment.save()