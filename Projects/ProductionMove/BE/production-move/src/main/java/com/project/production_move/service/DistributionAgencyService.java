package com.project.production_move.service;

import com.project.production_move.exception.ConflictException;
import com.project.production_move.exception.NotFoundException;
import com.project.production_move.repository.DistributionAgencyRepository;
import com.project.production_move.model.DistributionAgency;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DistributionAgencyService {
    @Autowired
    private DistributionAgencyRepository distributionAgencyRepository;

    public List<DistributionAgency> getAllAgencies() {
        return distributionAgencyRepository.findAllByOrderByCode();
    }

    public DistributionAgency createDistributionAgency(DistributionAgency distributionAgency) {
        DistributionAgency checking = distributionAgencyRepository.findByCode(distributionAgency.getCode()).orElse(null);
        if (checking != null) {
            throw new ConflictException("Mã bị trùng");
        }

        return distributionAgencyRepository.save(distributionAgency);
    }

    public DistributionAgency updateDistributionAgency(Integer id, DistributionAgency distributionAgency) {
        DistributionAgency existing = distributionAgencyRepository.findById(id).orElseThrow(NotFoundException::new);
        DistributionAgency checking = distributionAgencyRepository.findByCode(distributionAgency.getCode()).orElse(null);

        if (checking != null) {
            if (!existing.getCode().equals(checking.getCode())) {
                throw new ConflictException("Mã bị trùng");
            }
        }

        existing.setCode(distributionAgency.getCode());
        existing.setName(distributionAgency.getName());
        existing.setRegion(distributionAgency.getRegion());
        existing.setAddress(distributionAgency.getAddress());

        return distributionAgencyRepository.save(existing);
    }

    public void deleteDistributionAgency(Integer id) {
        distributionAgencyRepository.deleteById(id);
    }

    public void deleteManyDistributionAgencies(List<Integer> ids) {
        distributionAgencyRepository.deleteAllByIdInBatch(ids);
    }

    public List<DistributionAgency> createManyDistributionAgencies(List<DistributionAgency> distributionAgencies) {
        return distributionAgencyRepository.saveAllAndFlush(distributionAgencies);
    }
}
