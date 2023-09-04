package com.IntervuAi.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.IntervuAi.DTO.Answer;
import com.IntervuAi.DTO.GptRequest;
import com.IntervuAi.DTO.GptResponse;
import com.IntervuAi.exception.UserException;
import com.IntervuAi.model.FeedBack;
import com.IntervuAi.model.Interview;
import com.IntervuAi.model.User;
import com.IntervuAi.repository.FeedBackReposioty;
import com.IntervuAi.repository.InterviewRepository;
import com.IntervuAi.repository.UserRepository;
import com.IntervuAi.request.emailRequest;
import com.IntervuAi.response.ApiResponse;
import com.IntervuAi.response.FeedBackResponse;

@Service
public class IntervuServiceImpl  implements IntervueService{
	
	User user = null;
	
	private UserRepository userRepository;
	private FeedBackReposioty feedBackReposioty;
	private InterviewRepository interviewRepository;
	
	
	
	

	@Autowired
	public IntervuServiceImpl(UserRepository userRepository, FeedBackReposioty feedBackReposioty,
			InterviewRepository interviewRepository) {
		super();
		this.userRepository = userRepository;
		this.feedBackReposioty = feedBackReposioty;
		this.interviewRepository = interviewRepository;
	}

	String answerPrompt = "I want you to act as an interviewer only not give any questions, I will provide a question and answer. I will be the candidate for the position of Frontend Software Developer.\r\n"
			+ "here I write question and answer and give me feedback based on the following criteria.\r\n"
			+ "Subject Matter Expertise: - Provide only an Integer value out of 10, not any text.\r\n"
			+ "Communication skills:  - Provide only an Integer value out of 10, not any text.\r\n"
			+ "Problem-Solving Skills  -  Provide only an Integer value out of 10, not any text.";


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
	
	@Override
	public ApiResponse findUserByEmail(emailRequest email) {
		// TODO Auto-generated method stub
		Optional<User>  optional =  userRepository.findByEmail(email.getEmail());
		user =  optional.orElseThrow(()-> new UserException("User not Found"));
		return new ApiResponse("User Email Id Correct" ,true);
	}

	public FeedBackResponse sendFeedback(Answer answer ) {
		
		if(user == null ) throw new UserException("Fisrt Login In Website") ;
		
		
		String send = answerPrompt + answer.getQuestion() + answer.getAnswer();
		String feedbackChatGpt = getResponse(send);
		System.out.println(feedbackChatGpt);
		List<Integer> score =   FindNumbersInString(feedbackChatGpt);
		
		FeedBack feedBack = new FeedBack();
		feedBack.setSubjectExperties(score.get(0));
		feedBack.setCommunicationSkill(score.get(1));
		feedBack.setProblemSolving(score.get(2));
		feedBack.setUser(user);
		
		Interview interview = new Interview();
		
		
		interview.getFeedBackList().add(feedBack.getId());
		interview.setUser(user);
		
		feedBackReposioty.save(feedBack);
		interviewRepository.save(interview);
		userRepository.save(user);
		
		
		
		return new FeedBackResponse(score.get(0), score.get(1), score.get(2), feedbackChatGpt);
	}

	public List<Integer> FindNumbersInString(String str) {

		List<Integer> score = new ArrayList<>();

		Pattern pattern = Pattern.compile("\\d+(\\.\\d+)?");
		Matcher matcher = pattern.matcher(str);
		while (matcher.find()) {
			String number = matcher.group();
			int num = Integer.parseInt(number);
			if (num < 10) {
				System.out.println("Found number: " + number);
				score.add(num);
			}
		}
		
		if(score.size() == 3) {
			return score;
		}else if(score.size() == 2) {
			score.add(2);
			return score;
		}else if(score.size() ==1) {
			score.add(4);
			score.add(1);
			return score;
		}
			
		
		
		return score;
		
		
	}

	

	

}
