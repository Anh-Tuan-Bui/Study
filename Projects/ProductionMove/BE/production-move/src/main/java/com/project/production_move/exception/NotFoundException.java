package com.project.production_move.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class NotFoundException extends RuntimeException {
    private String message = "Không tìm thấy tài nguyên";
}
