package com.IntervuAi.DTO;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GptResponse {

	private List<Choice> choices;
	@Data
	@AllArgsConstructor
	@NoArgsConstructor
	public static class Choice{
		
		private int index;
		private Message message;
	}
}
