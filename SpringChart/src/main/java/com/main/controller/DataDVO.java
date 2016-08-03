package com.main.controller;

import java.util.List;

public class DataDVO {
	private String label;
	private boolean fill;
	List<String> data;

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public boolean isFill() {
		return fill;
	}

	public void setFill(boolean fill) {
		this.fill = fill;
	}

	public List<String> getData() {
		return data;
	}

	public void setData(List<String> data) {
		this.data = data;
	}

}
