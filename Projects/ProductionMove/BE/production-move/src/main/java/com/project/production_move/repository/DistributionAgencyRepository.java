package com.project.production_move.repository;

import com.project.production_move.model.DistributionAgency;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DistributionAgencyRepository extends JpaRepository<DistributionAgency, Integer> {
    List<DistributionAgency> findAllByOrderByCode();
    Optional<DistributionAgency> findByCode(String code);
}
