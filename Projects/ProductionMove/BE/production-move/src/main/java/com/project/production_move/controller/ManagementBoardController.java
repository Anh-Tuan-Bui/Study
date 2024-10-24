package com.project.production_move.controller;

import com.project.production_move.model.ManagementBoard;
import com.project.production_move.service.ManagementBoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(maxAge = 3000)
@RestController
@RequestMapping("api/v1")
public class ManagementBoardController {
    @Autowired
    private ManagementBoardService managementBoardService;

    @GetMapping("/management-boards")
    public List<ManagementBoard> getALlManagementBoards() {
        return managementBoardService.getAllManagementBoards();
    }

    @PostMapping("/management-board")
    public ResponseEntity<ManagementBoard> createManagementBoard(@RequestBody ManagementBoard managementBoard) {
        ManagementBoard newManagementBoard = managementBoardService.createManagementBoard(managementBoard);

        return new ResponseEntity<>(newManagementBoard, HttpStatus.CREATED);
    }

    @PutMapping("/management-board/{id}")
    public ResponseEntity<ManagementBoard> updateManagementBoard(@PathVariable Integer id, @RequestBody ManagementBoard managementBoard) {
        ManagementBoard updated = managementBoardService.updateManagementBoard(id, managementBoard);

        return new ResponseEntity<>(updated, HttpStatus.OK);
    }

    @DeleteMapping("/management-board/{id}")
    public ResponseEntity<String> deleteManagementBoard(@PathVariable Integer id) {
        managementBoardService.deleteManagementBoard(id);

        return ResponseEntity.ok().body("Bản ghi đã được xóa thành công");
    }

    @DeleteMapping("/management-boards")
    public ResponseEntity<String> deleteAllManagementBoards(@RequestBody List<Integer> ids) {
        managementBoardService.deleteManyManagementBoards(ids);

        return ResponseEntity.ok("Tất cả bản ghi đã được xóa thành công");
    }

    @PostMapping("/management-boards")
    public ResponseEntity<List<ManagementBoard>> createAllManagementBoards(@RequestBody List<ManagementBoard> managementBoards) {
        List<ManagementBoard> newManagementBoards = managementBoardService.createManyManagementBoards(managementBoards);

        return new ResponseEntity<>(newManagementBoards, HttpStatus.CREATED);
    }
}
