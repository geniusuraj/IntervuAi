package com.IntervuAi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.IntervuAi.Service.UserService;
import com.IntervuAi.exception.UserException;
import com.IntervuAi.model.User;
import com.IntervuAi.request.LoginRequest;
import com.IntervuAi.response.AuthResponse;



@RestController
@RequestMapping("/auth")
public class AuthController {
	
	private UserService userService;

	@Autowired
	public AuthController(UserService userService) {
		super();
		this.userService = userService;
	}

	@PostMapping("/signup")
	public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user) throws UserException {
		System.out.println("oKKKKKKKKKKKKKKKKKKK");
		System.out.println(user);
		return new ResponseEntity<AuthResponse>(userService.createUser(user), HttpStatus.CREATED);
	}

	@PostMapping("/signin")
	
	public ResponseEntity<AuthResponse> loginUserHandler(@RequestBody LoginRequest logingRequest) {
		System.out.println();
		return new ResponseEntity<AuthResponse>(userService.userLogin(logingRequest), HttpStatus.OK);
	}
}
