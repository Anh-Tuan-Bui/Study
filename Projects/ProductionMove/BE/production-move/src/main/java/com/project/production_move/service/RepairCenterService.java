package com.project.production_move.service;

import com.project.production_move.exception.ConflictException;
import com.project.production_move.exception.NotFoundException;
import com.project.production_move.model.RepairCenter;
import com.project.production_move.repository.RepairCenterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RepairCenterService {
    @Autowired
    private RepairCenterRepository repairCenterRepository;

    public List<RepairCenter> getAllCenters() {
        return repairCenterRepository.findAllByOrderByCode();
    }
    public RepairCenter createRepairCenter(RepairCenter repairCenter) {
        RepairCenter checking = repairCenterRepository.findByCode(repairCenter.getCode()).orElse(null);
        if (checking != null) {
            throw new ConflictException("Mã bị trùng");
        }

        return repairCenterRepository.save(repairCenter);
    }
    public RepairCenter updateRepairCenter(Integer id, RepairCenter repairCenter) {
        RepairCenter existingRepairCenter = repairCenterRepository.findById(id).orElseThrow(NotFoundException::new);
        RepairCenter checkingRepairCenter = repairCenterRepository.findByCode(repairCenter.getCode()).orElse(null);

        if (checkingRepairCenter != null) {
            if (!existingRepairCenter.getCode().equals(checkingRepairCenter.getCode())) {
                throw new ConflictException("Mã bị trùng");
            }
        }

        existingRepairCenter.setCode(repairCenter.getCode());
        existingRepairCenter.setName(repairCenter.getName());
        existingRepairCenter.setRegion(repairCenter.getRegion());
        existingRepairCenter.setAddress(repairCenter.getAddress());

        return repairCenterRepository.save(existingRepairCenter);
    }

    public void deleteRepairCenter(Integer id) {
        repairCenterRepository.deleteById(id);
    }

    public void deleteManyRepairCenters(List<Integer> ids) {
        repairCenterRepository.deleteAllByIdInBatch(ids);
    }

    public List<RepairCenter> createManyRepairCenters(List<RepairCenter> repairCenters) {
        return repairCenterRepository.saveAllAndFlush(repairCenters);
    }
}
