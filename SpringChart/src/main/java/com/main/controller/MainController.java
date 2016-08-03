package com.main.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MainController {
	@RequestMapping(value = "/getChartDetails", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
	@ResponseBody
	public Res getLocationDetails() {
		Res res = new Res();
		res.setRes(constructResponse());
		return res;
	}

	private ResponseDVO constructResponse() {
		ResponseDVO res = new ResponseDVO();
		List<String> labels = new ArrayList<String>();
		labels.add("jan");
		labels.add("feb");
		labels.add("mar");
		labels.add("apr");
		labels.add("may");

		DataDVO dataDvo = new DataDVO();
		List<String> data = new ArrayList<String>();
		data.add("123");
		data.add("103");
		data.add("113");
		data.add("223");
		data.add("13");

		dataDvo.setData(data);
		dataDvo.setLabel("Fisrt Lable");
		dataDvo.setFill(true);

		List<DataDVO> dataset = new ArrayList<DataDVO>();
		dataset.add(dataDvo);
		res.setLabels(labels);
		res.setDatasets(dataset);

		return res;
	}

}
