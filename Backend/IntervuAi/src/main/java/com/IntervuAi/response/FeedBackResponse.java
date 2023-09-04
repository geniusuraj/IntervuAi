package com.IntervuAi.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class FeedBackResponse {

	private Integer subjectExperties;
	private Integer communicationSkill;
	private Integer problemSolving;
	private String feedBackMessage;
}
