package com.IntervuAi.Service;

import com.IntervuAi.exception.UserException;
import com.IntervuAi.model.User;
import com.IntervuAi.request.LoginRequest;
import com.IntervuAi.response.AuthResponse;

public interface UserService {
	
	/**
	 * This method for create new user 
	 * @param user
	 * @return response of AuthResponse class 
	 * @throws UserException
	 */
	public AuthResponse createUser(User user) throws UserException;
	
	
	/**
	 *  This method for user login 
	 * @param loginRequest
	 * @return AuthResponse
	 */
	public AuthResponse userLogin(LoginRequest loginRequest);
	
	
	/**
	 * This method for find user using user id 
	 * @param userId
	 * @return User 
	 */
	public User findUseById(Integer userId) throws UserException;
	
	
	
	

}
