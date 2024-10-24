package com.project.production_move.service;

import com.project.production_move.exception.ConflictException;
import com.project.production_move.exception.NotFoundException;
import com.project.production_move.model.ManagementBoard;
import com.project.production_move.repository.ManagementBoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ManagementBoardService {
    @Autowired
    private ManagementBoardRepository managementBoardRepository;

    public List<ManagementBoard> getAllManagementBoards() {
        return managementBoardRepository.findAllByOrderByCode();
    }
    public ManagementBoard createManagementBoard(ManagementBoard managementBoard) {
        ManagementBoard checking = managementBoardRepository.findByCode(managementBoard.getCode()).orElse(null);
        if (checking != null) {
            throw new ConflictException("Mã bị trùng");
        }

        return managementBoardRepository.save(managementBoard);
    }
    public ManagementBoard updateManagementBoard(Integer id, ManagementBoard managementBoard) {
        ManagementBoard existingManagementBoard = managementBoardRepository.findById(id).orElseThrow(NotFoundException::new);
        ManagementBoard checkingManagementBoard = managementBoardRepository.findByCode(managementBoard.getCode()).orElse(null);
        if (checkingManagementBoard != null) {
            if (!existingManagementBoard.getCode().equals(checkingManagementBoard.getCode())) {
                throw new ConflictException("Mã bị trùng");
            }
        }

        existingManagementBoard.setCode(managementBoard.getCode());
        existingManagementBoard.setName(managementBoard.getName());
        existingManagementBoard.setRegion(managementBoard.getRegion());
        existingManagementBoard.setAddress(managementBoard.getAddress());

        return managementBoardRepository.save(existingManagementBoard);
    }

    public void deleteManagementBoard(Integer id) {
        managementBoardRepository.deleteById(id);
    }

    public void deleteManyManagementBoards(List<Integer> ids) {
        managementBoardRepository.deleteAllByIdInBatch(ids);
    }

    public List<ManagementBoard> createManyManagementBoards(List<ManagementBoard> managementBoards) {
        return managementBoardRepository.saveAllAndFlush(managementBoards);
    }
}
