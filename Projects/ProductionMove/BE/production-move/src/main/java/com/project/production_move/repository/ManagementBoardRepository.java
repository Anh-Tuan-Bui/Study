package com.project.production_move.repository;

import com.project.production_move.model.ManagementBoard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ManagementBoardRepository extends JpaRepository<ManagementBoard, Integer> {
    List<ManagementBoard> findAllByOrderByCode();
    Optional<ManagementBoard> findByCode(String code);
}
