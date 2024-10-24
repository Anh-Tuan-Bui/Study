package com.project.production_move.repository;

import com.project.production_move.model.ManufacturingFacility;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ManufacturingFacilityRepository extends JpaRepository<ManufacturingFacility, Integer> {
    List<ManufacturingFacility> findAllByOrderByCode();
    Optional<ManufacturingFacility> findByCode(String code);
}
