package com.IntervuAi.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.IntervuAi.DTO.Answer;
import com.IntervuAi.DTO.GptRequest;
import com.IntervuAi.DTO.GptResponse;





@Service
public class IntervuService {
	
	
	String answerPrompt = "I want you to act as an interviewer only not give any questions, I will provide a question and answer. I will be the candidate for the position of Frontend Software Developer.\r\n"
			+ "here I write question and answer and give me feedback based on the following criteria.\r\n"
			+ "Subject Matter Expertise: - Provide only an Integer value out of 10, not any text.\r\n"
			+ "Communication skills:  - Provide only an Integer value out of 10, not any text.\r\n"
			+ "Problem-Solving Skills  -  Provide only an Integer value out of 10, not any text.";
	
	private Map<Integer, String> feedStorage = new HashMap<Integer, String>();

	@Value("${openai.model}")
	private String model;
	
	
	@Value("${openai.api.url}")
	private String url;
	
	@Autowired
	private RestTemplate temp;
	
	public String getResponse(String prompt) {
		GptRequest req = new GptRequest(model, prompt);
		GptResponse resp = temp.postForObject(url, req, GptResponse.class);
		return resp.getChoices().get(0).getMessage().getContent();
	}
	
	
	
	public void storeFeedback(Answer answer) {
		 Integer questionCount = 1;
		 String send = answerPrompt + 
				       answer.getQuestion() +
				       answer.getAnswer();
		 String feedback = getResponse(send);
		 System.out.println(feedback);
		FindNumbersInString(feedback);
		 feedStorage.put(questionCount++, feedback);
	}
	
	public void  FindNumbersInString(String str) {
		 Pattern pattern = Pattern.compile("\\d+(\\.\\d+)?");
		  Matcher matcher = pattern.matcher(str);
		  while (matcher.find()) {
	            String number = matcher.group();
	            if(Integer.parseInt(number) < 10) {
	            	 System.out.println("Found number: " + number);
	            }
	           
	        }
	}
	
}
