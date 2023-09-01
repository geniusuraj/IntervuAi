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
public class NodeController {

    @Autowired
    private IntervuService intervuService;

    String prompt = "I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the position of Node.js Developer. "
            + "That will require me to have the following content: JavaScript, Node.js, Express.js, async/await, RESTful APIs, NPM, callbacks, and Promises. "
            + "I want you to only reply as the interviewer. Ask me only 3 questions and every question should end with a '?' mark. "
            + "In response, give me only questions.";

    @GetMapping("/node")
    public ResponseEntity<String> nodeInterview() {
        String resp = intervuService.getResponse(prompt);
        return new ResponseEntity<>(resp, HttpStatus.OK);
    }

    @PostMapping("/node/answer")
    public ResponseEntity<String> postAnswer(@RequestBody Answer answer) {
        intervuService.storeFeedback(answer);
        return new ResponseEntity<>("Answer received and feedback stored", HttpStatus.OK);
    }

//    @PostMapping("/node/feedback")
//    public ResponseEntity<String> getFeedback(@RequestBody String phrase) {
//        if ("share your feedback".equals(phrase)) {
//            String feedback = intervuService.getFeedback();
//            return new ResponseEntity<>(feedback, HttpStatus.OK);
//        }
//        return new ResponseEntity<>("Invalid phrase", HttpStatus.BAD_REQUEST);
//    }
}
