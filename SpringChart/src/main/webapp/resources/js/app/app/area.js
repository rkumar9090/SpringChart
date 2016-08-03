function getAreaList() {
	blockUI();
	var areaModel = new AreaModel();
	areaModel.fetch({
		type : 'POST',
		success : function(areaModel) {
			var areaView = new AreaView({
				el : '#page-wrapper',
				model : areaModel
			});
			unBlockUI();
		}
	});
}