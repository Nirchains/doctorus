from frappe import _

def get_data():
	return {
		'heatmap': False,
		'heatmap_message': _('This is based on the Time Sheets created against this project'),
		'fieldname': 'expedient',
		'transactions': [
			{
				'label': _('Matr&iacute;culas'),
				'items': ['Matricula', 'Prorroga', 'Cambio de Modalidad']
			},
			{
				'label': _('Evaluaci&oacute;n'),
				'items': ['Actividad', 'Evaluacion', 'Documentacion Expediente']
			}
		]
	}