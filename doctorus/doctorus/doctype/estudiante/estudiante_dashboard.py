from frappe import _

def get_data():
	return {
		'heatmap': False,
		'heatmap_message': _('This is based on the Time Sheets created against this project'),
		'fieldname': 'student',
		'transactions': [
			{
				'label': _('Expedientes'),
				'items': ['Expediente']
			}
		]
	}