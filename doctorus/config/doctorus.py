from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Estudiantes, Profesores, Tribunales..."),
			"icon": "fa fa-star",
			"items": [
				{
					"type": "doctype",
					"name": "Estudiante",
					"label": "Estudiantes",
				},
				{
					"type": "doctype",
					"name": "Profesor",
					"label": "Profesores"
				}
			]
		},
		{
			"label": _("Seguimiento"),
			"icon": "fa fa-star",
			"items": [
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
				{
					"type": "doctype",
					"name": "Prorroga",
					"label": "Pr&oacute;rroga"
				}

			]
		},
		{
			"label": _("Instituciones y Departamentos"),
			"icon": "fa fa-star",
			"items": [
				{
					"type": "doctype",
					"name": "Institucion",
					"label": "Instituciones",
				},
				{
					"type": "doctype",
					"name": "Departamento",
					"label": "Departamentos",
				}
			]
		},
		{
			"label": _("Configuraci&oacute;n"),
			"icon": "fa fa-star",
			"items": [
				{
					"type": "doctype",
					"name": "Programa",
					"label": "Programa y L&iacute;neas",
				},
				{
					"type": "doctype",
					"name": "Curso",
					"label": "Cursos Acad&eacute;micos",
				},
				{
					"type": "doctype",
					"name": "Categoria Profesional",
					"label": "Categor&iacute;as Profesionales",
				},
				{
					"type": "doctype",
					"name": "Configuracion del Programa",
					"label": "Configuraci&oacute;n General del Programa",
				},

			]
		}
		
	]
