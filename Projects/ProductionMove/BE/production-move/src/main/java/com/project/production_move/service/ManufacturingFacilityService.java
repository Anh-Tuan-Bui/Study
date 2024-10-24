package com.project.production_move.service;

import com.project.production_move.exception.ConflictException;
import com.project.production_move.exception.NotFoundException;
import com.project.production_move.model.ManufacturingFacility;
import com.project.production_move.repository.ManufacturingFacilityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ManufacturingFacilityService {
    @Autowired
    private ManufacturingFacilityRepository manufacturingFacilityRepository;

    public List<ManufacturingFacility> getAllManufacturingFacility() {
        return manufacturingFacilityRepository.findAllByOrderByCode();
    }
    public ManufacturingFacility createManufacturingFacility(ManufacturingFacility manufacturingFacility) {
        ManufacturingFacility checking = manufacturingFacilityRepository.findByCode(manufacturingFacility.getCode()).orElse(null);
        if (checking != null) {
            throw new ConflictException("Mã bị trùng");
        }

        return manufacturingFacilityRepository.save(manufacturingFacility);
    }
    public ManufacturingFacility updateManufacturingFacility(Integer id, ManufacturingFacility manufacturingFacility) {
        ManufacturingFacility existing = manufacturingFacilityRepository.findById(id).orElseThrow(NotFoundException::new);
        ManufacturingFacility checking = manufacturingFacilityRepository.findByCode(manufacturingFacility.getCode()).orElse(null);

        if (checking != null) {
            if (!existing.getCode().equals(checking.getCode())) {
                throw new ConflictException("Mã bị trùng");
            }
        }

        existing.setCode(manufacturingFacility.getCode());
        existing.setName(manufacturingFacility.getName());
        existing.setRegion(manufacturingFacility.getRegion());
        existing.setAddress(manufacturingFacility.getAddress());

        return manufacturingFacilityRepository.save(existing);
    }

    public void deleteManufacturingFacility(Integer id) {
        manufacturingFacilityRepository.deleteById(id);
    }

    public void deleteManyManufacturingFacilities(List<Integer> ids) {
        manufacturingFacilityRepository.deleteAllByIdInBatch(ids);
    }

    public List<ManufacturingFacility> createManyManufacturingFacilities(List<ManufacturingFacility> manufacturingFacilities) {
        return manufacturingFacilityRepository.saveAllAndFlush(manufacturingFacilities);
    }
}
