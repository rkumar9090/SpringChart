package com.main.controller;

import java.util.List;

public class ResponseDVO {
	private List<String> labels;
	private List<DataDVO> datasets;

	public List<String> getLabels() {
		return labels;
	}

	public void setLabels(List<String> labels) {
		this.labels = labels;
	}

	public List<DataDVO> getDatasets() {
		return datasets;
	}

	public void setDatasets(List<DataDVO> datasets) {
		this.datasets = datasets;
	}

}
