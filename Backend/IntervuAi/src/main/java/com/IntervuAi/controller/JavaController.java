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
import com.IntervuAi.Service.IntervuService;
@RestController
@RequestMapping("/bot")
@CrossOrigin("*")
public class JavaController {
	
	private IntervuService intervuService;

	
	String prompt = "I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the position of Frontend Software Developer. "
			+ "That will require me to have the following content HTML, CSS, JS, React, Redux, Typescript, Stack, queue, linked list I want you to only reply as the interviewer.Asked me only 3 Questions and every question end with the ? mark "
			+ "in response give me only questions not any other text" ;

	@Autowired
	public JavaController(IntervuService intervuService) {
		super();
		this.intervuService = intervuService;
	}
	;
	
	
	
	
	
	

	 @GetMapping("/java")
		public ResponseEntity<String>  javaInterview(){
	    	String resp=intervuService.getResponse(prompt);
	    
	    	return new ResponseEntity<>(resp,HttpStatus.OK);
	 }
	 
	 
	 @PostMapping("/answer")
	 public ResponseEntity<String> checkAnswer(@RequestBody Answer answer){
		intervuService.storeFeedback(answer);
		 return null;
	 }
	 
	 
		 
	 
	
	
}
