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
				},
				{
					"type": "doctype",
					"name": "Institucion",
					"label": "Instituciones",
				},
				{
					"type": "doctype",
					"name": "Departamento",
					"label": "Departamentos",
				},
				{
					"type": "doctype",
					"name": "Categoria Profesional",
					"label": "Categor&iacute;as Profesionales",
				},
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
					"label": "Pr&oacute;rrogas"
				},
				{
					"type": "doctype",
					"name": "Cambio de Modalidad",
					"label": "Cambios de Modalidad"
				},
				{
					"type": "doctype",
					"name": "Actividad",
					"label": "Actividades"
				},
				{
					"type": "doctype",
					"name": "Evaluacion",
					"label": "Evaluaciones"
				},
				{
					"type": "doctype",
					"name": "Documentacion Expediente",
					"label": "Documentaci&oacute;n de Expedientes"
				},

			]
		},
		{
			"label": _("Programa"),
			"icon": "fa fa-star",
			"items": [
				{
					"type": "doctype",
					"name": "Programa",
					"label": "Programa y L&iacute;neas",
				},
				{
					"type": "doctype",
					"name": "Documentacion Programa",
					"label": "Documentaci&oacute;n del Programa"
				},
				{
					"type": "doctype",
					"name": "Curso",
					"label": "Cursos Acad&eacute;micos",
				}
			]
		},
		{
			"label": _("Configuraci&oacute;n"),
			"icon": "fa fa-star",
			"items": [
				{
					"type": "doctype",
					"name": "Modalidad",
					"label": "Modalidades",
				},
				{
					"type": "doctype",
					"name": "Tipo de Actividad",
					"label": "Tipos de Actividades",
				},
				{
					"type": "doctype",
					"name": "Configuracion del Programa",
					"label": "Configuraci&oacute;n General del Programa",
				},

			]
		}
		
	]
