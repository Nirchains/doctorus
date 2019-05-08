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
					"label": "<i class='octicon octicon-organization'></i> Estudiantes",
				},
				{
					"type": "doctype",
					"name": "Profesor",
					"label": "<i class='octicon octicon-broadcast'></i> Profesores"
				},
				{
					"type": "doctype",
					"name": "Institucion",
					"label": "<i class='octicon octicon-globe'></i> Instituciones",
				},
				{
					"type": "doctype",
					"name": "Departamento",
					"label": "<i class='octicon octicon-tag'></i> Departamentos",
				},
				{
					"type": "doctype",
					"name": "Categoria Profesional",
					"label": "<i class='octicon octicon-star'></i> Categor&iacute;as Profesionales",
				},
			]
		},
		{
			"label": _("Seguimiento por alumno"),
			"icon": "fa fa-star",
			"items": [
				{
					"type": "doctype",
					"name": "Expediente",
					"label": "<i class='octicon octicon-mortar-board'></i> Expedientes"
				},
				{
					"type": "doctype",
					"name": "Matricula",
					"label": "<i class='fa fa-money'></i> Matr&iacute;culas"
				},
				{
					"type": "doctype",
					"name": "Prorroga",
					"label": "<i class='octicon octicon-repo-force-push'></i> Pr&oacute;rrogas"
				},
				{
					"type": "doctype",
					"name": "Cambio de Modalidad",
					"label": "<i class='octicon octicon-git-compare'></i> Cambios de Modalidad"
				},
				{
					"type": "doctype",
					"name": "Actividad",
					"label": "<i class='octicon octicon-calendar'></i> Actividades"
				},
				{
					"type": "doctype",
					"name": "Evaluacion",
					"label": "<i class='octicon octicon-checklist'></i> Evaluaciones"
				},
				{
					"type": "doctype",
					"name": "Documentacion Expediente",
					"label": "<i class='octicon octicon-file-text'></i> Documentaci&oacute;n de Expedientes"
				},

			]
		},
		{
			"label": _("Datos del Programa de Doctorado"),
			"icon": "fa fa-star",
			"items": [
				{
					"type": "doctype",
					"name": "Programa",
					"label": "<i class='octicon octicon-home'></i> Programa y L&iacute;neas",
				},
				{
					"type": "doctype",
					"name": "Documentacion Programa",
					"label": "<i class='octicon octicon-file-submodule'></i> Repositorio de Documentaci&oacute;n General"
				},
				{
					"type": "doctype",
					"name": "Curso",
					"label": "<i class='octicon octicon-watch'></i> Cursos Acad&eacute;micos y Actas de Evaluaci&oacute;n",
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
					"label": "<i class='octicon octicon-clock'></i> Modalidades",
				},
				{
					"type": "doctype",
					"name": "Tipo de Actividad",
					"label": "<i class='octicon octicon-calendar'></i> Tipos de Actividades",
				},
				{
					"type": "doctype",
					"name": "Estados de Matricula",
					"label": "<i class='octicon octicon-gear'></i> Estados de Matr&iacute;cula",
				},
				{
					"type": "doctype",
					"name": "Estados No Si",
					"label": "<i class='octicon octicon-gear'></i> Estados No/Si",
				},
				{
					"type": "doctype",
					"name": "Estados de Evaluacion",
					"label": "<i class='octicon octicon-gear'></i> Estados de Evaluaci&oacute;n",
				},
				{
					"type": "doctype",
					"name": "Estados Actividades",
					"label": "<i class='octicon octicon-gear'></i> Estados Actividades",
				},
				{
					"type": "doctype",
					"name": "Configuracion del Programa",
					"label": "<i class='octicon octicon-gear'></i> Configuraci&oacute;n General del Programa",
				},

			]
		}
		
	]
