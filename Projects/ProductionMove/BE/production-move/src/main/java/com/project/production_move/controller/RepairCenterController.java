package com.project.production_move.controller;

import com.project.production_move.model.RepairCenter;
import com.project.production_move.service.RepairCenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@CrossOrigin(maxAge = 3000)
@RestController
@RequestMapping("/api/v1")
public class RepairCenterController {
    @Autowired
    private RepairCenterService repairCenterService;

    @GetMapping("/centers")
    public List<RepairCenter> getAllCenters() {
        return repairCenterService.getAllCenters();
    }

    @PostMapping("/center")
    public ResponseEntity<RepairCenter> createRepairCenter(@RequestBody RepairCenter repairCenter) {
        RepairCenter newRepairCenter = repairCenterService.createRepairCenter(repairCenter);

        return new ResponseEntity<>(newRepairCenter, HttpStatus.CREATED);
    }

    @PutMapping("/center/{id}")
    public ResponseEntity<RepairCenter> updateRepairCenter(@PathVariable Integer id, @RequestBody RepairCenter repairCenter) {
        RepairCenter updated = repairCenterService.updateRepairCenter(id, repairCenter);

        return new ResponseEntity<>(updated, HttpStatus.OK);
    }

    @DeleteMapping("/center/{id}")
    public ResponseEntity<String> deleteRepairCenter(@PathVariable Integer id) {
        repairCenterService.deleteRepairCenter(id);

        return ResponseEntity.ok().body("Bản ghi đã được xóa thành công");
    }

    @DeleteMapping("/centers")
    public ResponseEntity<String> deleteManyRepairCenters(@RequestBody List<Integer> ids) {
        repairCenterService.deleteManyRepairCenters(ids);

        return ResponseEntity.ok().body("Tất cả bản ghi đã được xóa thành công");
    }

    @PostMapping("/centers")
    public ResponseEntity<List<RepairCenter>> createManyRepairCenters(@RequestBody List<RepairCenter> repairCenters) {
        List<RepairCenter> newRepairCenters = repairCenterService.createManyRepairCenters(repairCenters);

        return new ResponseEntity<>(newRepairCenters, HttpStatus.CREATED);
    }
}
