package com.project.production_move.repository;

import com.project.production_move.model.BusinessType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BusinessTypeRepository extends JpaRepository<BusinessType, Integer> {

}
