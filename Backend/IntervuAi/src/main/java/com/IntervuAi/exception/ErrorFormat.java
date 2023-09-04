package com.IntervuAi.exception;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ErrorFormat {
	private  LocalDateTime timestamp=LocalDateTime.now();
	private String message;
	private String uri;
}
