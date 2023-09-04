package com.IntervuAi.Service;

import com.IntervuAi.DTO.Answer;
import com.IntervuAi.request.emailRequest;
import com.IntervuAi.response.ApiResponse;
import com.IntervuAi.response.FeedBackResponse;

public interface IntervueService {
	
	
	public String getResponse(String prompt);
	
	public FeedBackResponse sendFeedback(Answer answer );
	
	public ApiResponse findUserByEmail(emailRequest email);
	
	
	
}
