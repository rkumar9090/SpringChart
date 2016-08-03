var ChartModel = Backbone.Model.extend({
	urlRoot : 'getChartDetails',
	defaults : {},
	initialize : function(attributes, options) {
		this.bind("error", this.defaultErrorHandler);
	},
	defaultErrorHandler : function(model, error) {
		if (error.status == 404 || error.status == 403) {
			console.log("Something went wrong")
		}
	}
});