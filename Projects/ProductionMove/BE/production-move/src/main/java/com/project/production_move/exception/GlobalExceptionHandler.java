package com.project.production_move.exception;

import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.context.request.WebRequest;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
    public ErrorMessage handleAllException(Exception exception, WebRequest webRequest) {
        exception.printStackTrace();
        return new ErrorMessage(500, "Lỗi hệ thống", webRequest.getSessionId());
    }

    @ExceptionHandler(NotFoundException.class)
    @ResponseStatus(value = HttpStatus.NOT_FOUND)
    public ErrorMessage handleNotFoundException(NotFoundException exception, WebRequest webRequest) {
        return new ErrorMessage(404, exception.getMessage(), webRequest.getSessionId());
    }

    @ExceptionHandler(ConflictException.class)
    @ResponseStatus(value = HttpStatus.CONFLICT)
    public ErrorMessage handleConflictException(ConflictException exception, WebRequest webRequest) {
        return new ErrorMessage(409, exception.getMessage(), webRequest.getSessionId());
    }
}
