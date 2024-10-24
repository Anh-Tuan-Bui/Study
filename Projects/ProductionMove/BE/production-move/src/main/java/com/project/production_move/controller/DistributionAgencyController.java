package com.project.production_move.controller;

import com.project.production_move.model.DistributionAgency;
import com.project.production_move.service.DistributionAgencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(maxAge = 3000)
@RestController
@RequestMapping("/api/v1")
public class DistributionAgencyController {
    @Autowired
    private DistributionAgencyService distributionAgencyService;

    @GetMapping("/agencies")
    public List<DistributionAgency> getAllAgencies() {
        return distributionAgencyService.getAllAgencies();
    }

    @PostMapping("/agency")
    public ResponseEntity<DistributionAgency> createDistributionAgency(@RequestBody DistributionAgency distributionAgency) {
        DistributionAgency created = distributionAgencyService.createDistributionAgency(distributionAgency);

        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    @PutMapping("/agency/{id}")
    public ResponseEntity<DistributionAgency> updateDistributionAgency(@PathVariable Integer id, @RequestBody DistributionAgency distributionAgency) {
        DistributionAgency updated = distributionAgencyService.updateDistributionAgency(id, distributionAgency);

        return new ResponseEntity<>(updated, HttpStatus.OK);
    }

    @DeleteMapping("/agency/{id}")
    public ResponseEntity<String> deleteDistributionAgency(@PathVariable Integer id) {
        distributionAgencyService.deleteDistributionAgency(id);

        return ResponseEntity.ok().body("Đã xóa bản ghi thành công");
    }

    @DeleteMapping("/agencies")
    public ResponseEntity<String> deleteManyDistributionAgencies(@RequestBody List<Integer> ids) {
        distributionAgencyService.deleteManyDistributionAgencies(ids);

        return ResponseEntity.ok().body("Tất cả bản ghi đã được xóa thành công");
    }

    @PostMapping("/agencies")
    public ResponseEntity<List<DistributionAgency>> createManyDistributionAgencies(@RequestBody List<DistributionAgency> distributionAgencies) {
        List<DistributionAgency> newDistributionAgencies = distributionAgencyService.createManyDistributionAgencies(distributionAgencies);

        return new ResponseEntity<>(newDistributionAgencies, HttpStatus.CREATED);
    }
}
