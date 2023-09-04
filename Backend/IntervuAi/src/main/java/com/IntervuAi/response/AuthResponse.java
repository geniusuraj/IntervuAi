package com.IntervuAi.response;

import java.util.HashMap;
import java.util.Map;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponse {
//	private String firstName;
//	private String lastName;
//	private String email;
//	private String mobileNumber;
	
	Map<String, String> user = new HashMap<>();
	private String jwt;
	private String message;
	
}
