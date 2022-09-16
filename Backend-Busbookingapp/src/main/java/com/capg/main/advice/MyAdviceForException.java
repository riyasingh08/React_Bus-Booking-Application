package com.capg.main.advice;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;

import org.springframework.http.HttpStatus;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.capg.main.entity.Travel;
import com.capg.main.entity.Users;
import com.capg.main.exception.InvalidBookingException;

@RestControllerAdvice
public class MyAdviceForException {

	public MyAdviceForException() {
		System.out.println("advice object is created");
	}

	@ResponseStatus(value = HttpStatus.BAD_REQUEST)
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public Map<String, String> handleInvalidArgument(MethodArgumentNotValidException ae) {

		System.out.println("test");

		Map<String, String> map = new LinkedHashMap<>();

		ae.getBindingResult().getFieldErrors().forEach(error -> {
			map.put(error.getField(), error.getDefaultMessage());
		});
		System.out.println(map);
		return map;
	}

	@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
	@ExceptionHandler(ConstraintViolationException.class)
	public Map<String, String> handleInvalidArguments(ConstraintViolationException ae)
			throws MethodArgumentNotValidException {

		Map<String, String> map = new LinkedHashMap<>();

		for (ConstraintViolation cerror : ae.getConstraintViolations()) {

			Travel t = (Travel) cerror.getLeafBean();
			//Users u = (Users) cerror.getLeafBean();

			System.out.println("TEST1" + cerror.getPropertyPath());
			System.out.println(t);
			map.put(cerror.getPropertyPath().toString(), cerror.getMessage());
		}

		return map;

	}

	@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
	@ExceptionHandler(InvalidBookingException.class)
	public Map<String, String> handleInvalidBooking(InvalidBookingException ibe) {
		Map<String, String> map = new LinkedHashMap<>();
		map.put("BOOKING ERROR", ibe.getMessage());
		return map;
	}

}