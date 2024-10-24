package com.project.production_move.service;

import com.project.production_move.repository.BusinessTypeRepository;
import com.project.production_move.model.BusinessType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusinessTypeService {
    @Autowired
    private BusinessTypeRepository businessTypeRepository;

    public List<BusinessType> getAllBusinessTypes() {
        return businessTypeRepository.findAll();
    }
}
