var ChartView = Backbone.View.extend({
	initialize : function() {
		var self = this;
		$.get('resources/html/chart.html', function(data) {
			self.template = _.template(data);
			self.render();
		});
	},
	render : function() {
		var self = this;
		$(self.el).html(self.template(self.model.toJSON()));
		console.log(self.model.get("res"));
		self.afterRender(self.model.get("res"));
	},
	afterRender : function(json) {
		getChart(json);
	}
});