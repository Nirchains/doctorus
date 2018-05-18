from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
	{
			"label": _(""),
			"icon": "fa fa-star",
			"items": [
				{
					"type": "doctype",
					"name": "Programa",
					"label": "Programa y L&iacute;neas",
				},
				{
					"type": "doctype",
					"name": "Profesor",
					"label": "Profesores"
				},
				{
					"type": "doctype",
					"name": "Estudiante",
					"label": "Estudiantes",
				},
				{
					"type": "doctype",
					"name": "Expediente",
					"label": "Expedientes"
				},
				{
					"type": "doctype",
					"name": "Matricula",
					"label": "Matr&iacute;culas"
				},

			]
		}
		
	]
