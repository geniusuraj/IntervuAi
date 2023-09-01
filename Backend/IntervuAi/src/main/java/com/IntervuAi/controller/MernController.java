package com.IntervuAi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.IntervuAi.Service.IntervuService;
@RestController
@RequestMapping("/bot")
@CrossOrigin("*")
public class MernController {
	@Autowired
	private IntervuService botService;
	String promptes="I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the position of Mern Developer.\r\n"
			+ "That will require me to have the following content\r\n"
			+ "```\r\n"
			+ "MySQL, JDBC, Hibernate, Core Java\r\n"
			+ "```\r\n"
			+ " I want you to only reply as the interviewer. Do not write all the conservation at once. I want you to only do the coding technical interview with me. Ask me the questions and wait for my answers. I will say the phrase “start the interview” for you to start. Ask one question at a time  if I am not able to answer satisfactorily, give me feedback in this framework:\r\n"
			+ "####\r\n"
			+ "REACTO: \r\n"
			+ "R: Repeat (Repeating the question in your own word)\r\n"
			+ "E: Examples (Give some examples to clear out the meaning) and edge cases\r\n"
			+ "A: Approach (Discussing the approach to solve the question)\r\n"
			+ "C: Code (Writing the code with proper indentation, commenting and proper coding format)\r\n"
			+ "T: Testing the code (With some own test cases)\r\n"
			+ "O: Optimise (Use optimisation to optimise the already present code)\r\n"
			+ "And rate my each answer from 0-10 on the following parameter 1.Subject Matter Expertise 2.Communication skills 3. Problem solving skills\r\n"
			+ "#####\r\n"
			+ "{<Ask me the questions individually like an interviewer and wait for my answers.>}\r\n"
			+ "Questions can include both new questions and follow up questions from the previous questions. Continue the process until I ask you to stop.  And, you will stop the interview when I tell you to stop using the phrase “stop the interview”. After that, you would provide me feedback ```when I ask you using the phrase, “share your feedback”.\r\n"
			+ "The feedback should be evaluated using the following rubrics\r\n"
			+ "1.Subject Matter Expertise\r\n"
			+ "2.Communication skills\r\n"
			+ "3.Hiring criteria : Options are Reject, Waitlist, Hire and Strong Hire\r\n"
			+ "4. Problem Solving skills\r\n"
			+ "Feedback for Subject Matter Expertise and Communication skills should contain ratings on my interview responses from 0 - 10```";
	
//    @GetMapping("/Mern")
//	public ResponseEntity<String>  getMernQuestion(){
//    	String resp=botService.getResponse(promptes);
//    	return new ResponseEntity<>(resp,HttpStatus.OK);
//	}
}
