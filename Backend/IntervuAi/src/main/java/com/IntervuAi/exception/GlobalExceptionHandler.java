package com.IntervuAi.exception;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.NoHandlerFoundException;

@ControllerAdvice
public class GlobalExceptionHandler {
	
	
	@ExceptionHandler(UserException.class)
	public ResponseEntity<ErrorFormat> getUserException(UserException ex , WebRequest request){
		return new ResponseEntity<ErrorFormat>(new ErrorFormat(LocalDateTime.now(),ex.getMessage(),request.getDescription(false)),HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(NoHandlerFoundException.class)
	public ResponseEntity<ErrorFormat> handlerNotFoundException(NoHandlerFoundException ex, WebRequest request) {
		ErrorFormat ef = new ErrorFormat(LocalDateTime.now(), ex.getMessage(), request.getDescription(false));
		return new ResponseEntity<>(ef, HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<ErrorFormat> noValidArgsException(MethodArgumentNotValidException ex, WebRequest wr) {
		ErrorFormat ef = new ErrorFormat();
		ef.setTimestamp(LocalDateTime.now());
		ef.setMessage(ex.getBindingResult().getFieldError().getDefaultMessage());
		ef.setUri(wr.getDescription(false));
		return new ResponseEntity<>(ef, HttpStatus.BAD_REQUEST);
	}

}