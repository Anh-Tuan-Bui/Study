package com.project.production_move.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ConflictException extends RuntimeException {
    private String message = "Tài nguyên bị trùng";
}
