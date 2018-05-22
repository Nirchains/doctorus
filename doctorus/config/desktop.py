# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"module_name": "DoctorUS",
			"color": "#fab927",
			"icon": "octicon octicon-file-directory",
			"type": "module",
			"label": _("DoctorUS")
		},	
		{
			"_doctype": "Profesor",
			"label": _("Profesores"),
			"module_name": "Profesores",
			"color": "#2ecc71",
			"icon": "octicon octicon-broadcast",
			"type": "link",
			"link": "List/Profesor"
		},
		{
			"_doctype": "Estudiante",
			"label": _("Estudiantes"),
			"module_name": "Estudiantes",
			"color": "#2ecc71",
			"icon": "octicon octicon-organization",
			"type": "link",
			"link": "List/Estudiante"
		},
		{
			"_doctype": "Expediente",
			"module_name": "Expedientes",
			"color": "#c0392b",
			"icon": "octicon octicon-mortar-board",
			"type": "link",
			"label": _("Expedientes"),
			"link": "List/Expediente"
		},
		{
			"_doctype": "Matricula",
			"module_name": "Matriculas",
			"color": "#c0392b",
			"icon": "fa fa-money",
			"type": "link",
			"label": _("Matr&iacute;culas"),
			"link": "List/Matricula"
		},
		{
			"_doctype": "Prorroga",
			"module_name": "Prorrogas",
			"color": "#c0392b",
			"icon": "octicon octicon-repo-force-push",
			"type": "link",
			"label": _("Pr&oacute;rrogas"),
			"link": "List/Prorroga"
		},
	]
