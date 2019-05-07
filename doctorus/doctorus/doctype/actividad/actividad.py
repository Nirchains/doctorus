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
	#print("validando expediente: {0}".format(expedient))

	activities = 'No superadas'
	if check_requirements(expedient):
		#print("Actividades superadas")
		activities = 'Superadas'

	doc_expedient = frappe.get_doc("Expediente", expedient)

	if doc_expedient.activities != activities:
		#print("Actualizando documento")
		doc_expedient.activities = activities
		doc_expedient.save()
		frappe.clear_cache()
		#frappe.db.set_value('Expediente', expedient, 'activities', activities)
			
def check_requirements(expedient):
	#print("validando expediente: {0}".format(expedient))
	rules = frappe.db.get_list('Requisitos Actividades', filters={
	'parent': 'Configuracion del Programa',
	'parentfield': 't_activity_requirements'
	}, fields=['activity_type', 'min'])

	meet_requirements = True

	for r in rules:
		count = int(frappe.db.sql("""select count(*) from `tabActividad` where 
			expedient=%(expedient)s and docstatus = 1
			and activity_type=%(activity_type)s """, {"expedient": expedient, "activity_type": r.activity_type})[0][0])
		
		#frappe.log_error("Contador de expediente '{0}' y actividad '{1}': {2}".format(expedient, r.activity_type, count))
		#print("Contador de expediente '{0}' y actividad '{1}': {2}".format(expedient, r.activity_type, count))
		if count < r.min:
			meet_requirements = False

	return meet_requirements

def update_all_requirements():
	expedientes = frappe.db.get_list('Expediente')

	for expediente in expedientes:
		validate_requirements(expediente.name)

	frappe.db.commit()