$("#btn_id").click(function() {
	console.log("clicked");
	var chartModel = new ChartModel();
	chartModel.fetch({
		type : 'POST',
		success : function(chartModel) {

			var chartView = new ChartView({
				el : '#layout',
				model : chartModel
			});
			unBlockUI();
		}
	});
});

function getChart(json) {
	var ctx = document.getElementById("canvas").getContext("2d");

	var config = {
		type : 'line',
		data :json,
		options : {
			responsive : true,
			title : {
				display : true,
				text : 'Chart.js Line Chart'
			}
		}
	};
	 var randomColorFactor = function() {
         return Math.round(Math.random() * 255);
     };
     var randomColor = function(opacity) {
         return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '.3') + ')';
     };
	 $.each(config.data.datasets, function(i, dataset) {
         dataset.borderColor = randomColor(0.4);
         dataset.backgroundColor = randomColor(0.5);
         dataset.pointBorderColor = randomColor(0.7);
         dataset.pointBackgroundColor = randomColor(0.5);
         dataset.pointBorderWidth = 1;
     });
	window.myLine = new Chart(ctx, config);
}