# -*- coding: utf-8 -*-
# Copyright (c) 2018, HISPALIS DIGITAL and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Actividad(Document):
	
	def validate(self):
		pass

	def on_submit(self):
		validate_requirements(self.expedient)

	def on_cancel(self):
		validate_requirements(self.expedient)		

	
def validate_requirements(expedient):
	activities = 'No superadas'
	if check_requirements(expedient):
		activities = 'Superadas'

	doc_expedient = frappe.get_doc("Expediente", expedient)

	if doc_expedient.activities != activities:
		doc_expedient.activities = activities
		doc_expedient.save()
			
def check_requirements(expedient):
	rules = frappe.db.get_list('Requisitos Actividades', filters={
	'parent': 'Configuracion del Programa',
	'parentfield': 't_activity_requirements'
	}, fields=['activity_type', 'min'])

	meet_requirements = True

	for r in rules:
		count = int(frappe.db.sql("""select count(*) from `tabActividad` where 
			expedient=%(expedient)s and docstatus = 1 and workflow_state = 'aprobado' 
			and activity_type=%(activity_type)s """, {"expedient": expedient, "activity_type": r.activity_type})[0][0])
		
		if count < r.min:
			meet_requirements = False

	return meet_requirements