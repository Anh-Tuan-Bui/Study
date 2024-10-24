package com.project.production_move.repository;

import com.project.production_move.model.RepairCenter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RepairCenterRepository extends JpaRepository<RepairCenter, Integer> {
    List<RepairCenter> findAllByOrderByCode();
    Optional<RepairCenter> findByCode(String code);
}
