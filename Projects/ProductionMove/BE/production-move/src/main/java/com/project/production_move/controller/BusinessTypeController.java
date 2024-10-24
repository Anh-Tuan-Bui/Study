package com.project.production_move.controller;

import com.project.production_move.model.BusinessType;
import com.project.production_move.service.BusinessTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class BusinessTypeController {
    @Autowired
    private BusinessTypeService businessTypeService;

    @GetMapping("/business-types")
    public List<BusinessType> getAllBusinessTypes() {
        return businessTypeService.getAllBusinessTypes();
    }
}
