package com.IntervuAi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.IntervuAi.DTO.Answer;
import com.IntervuAi.Service.IntervuServiceImpl;
import com.IntervuAi.request.emailRequest;
import com.IntervuAi.response.ApiResponse;
import com.IntervuAi.response.FeedBackResponse;

@RestController
@RequestMapping("/bot")
@CrossOrigin("*")
public class botController {

	private IntervuServiceImpl intervuService;

	String javaPrompt = "I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the position of Java Backend Developer. "
			+ "That will require me to have the following content Core Java , Spring Boot , Spring Secirity, Hibernate, Java Features, HTML, CSS , Javascript, linked list I want you to only reply as the interviewer.Asked me only 10 Questions and every question end with the ? mark "
			+ "in response give me only questions not any other text";

	String mernPrompt = "I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the position of Mern Developer. "
			+ "That will require me to have the following content HTML, CSS, JS, React, Redux, Typescript, Node I want you to only reply as the interviewer.Asked me only 10 Questions and every question end with the ? mark "
			+ "in response give me only questions not any other text";

	String nodePrompt = "I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the position of Node.js Developer. "
			+ "That will require me to have the following content: JavaScript, Node.js, Express.js, async/await, RESTful APIs, NPM, callbacks, and Promises. "
			+ "I want you to only reply as the interviewer. Ask me only 10 questions and every question should end with a '?' mark. "
			+ "In response, give me only questions.";

	@Autowired
	public botController(IntervuServiceImpl intervuService) {
		super();
		this.intervuService = intervuService;
	}

	@PostMapping("/user")
	public ResponseEntity<ApiResponse> getUserEmail(@RequestBody emailRequest email) {
		System.out.println(email);
		return new ResponseEntity<ApiResponse>(intervuService.findUserByEmail(email), HttpStatus.OK);
	}

	@GetMapping("/java")
	public ResponseEntity<String> javaInterview() {
		String resp = intervuService.getResponse(javaPrompt);
		return new ResponseEntity<>(resp, HttpStatus.OK);
	}

	@GetMapping("/mern")
	public ResponseEntity<String> mernInterview() {
		String resp = intervuService.getResponse(mernPrompt);
		return new ResponseEntity<>(resp, HttpStatus.OK);
	}
	
	@GetMapping("/node")
	public ResponseEntity<String> nodeInterview() {
		String resp = intervuService.getResponse(nodePrompt);
		return new ResponseEntity<>(resp, HttpStatus.OK);
	}

	@PostMapping("/answer")
	public ResponseEntity<FeedBackResponse> checkAnswer(@RequestBody Answer answer) {
		FeedBackResponse feedback = intervuService.sendFeedback(answer);
		return new ResponseEntity<FeedBackResponse>(feedback, HttpStatus.OK);
	}

}
