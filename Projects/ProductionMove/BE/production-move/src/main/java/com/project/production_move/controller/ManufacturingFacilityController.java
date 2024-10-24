package com.project.production_move.controller;

import com.project.production_move.model.ManufacturingFacility;
import com.project.production_move.service.ManufacturingFacilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(maxAge = 3000)
@RestController
@RequestMapping("/api/v1")
public class ManufacturingFacilityController {
    @Autowired
    private ManufacturingFacilityService manufacturingFacilityService;

    @GetMapping("/facilities")
    public List<ManufacturingFacility> getAllManufacturingFacility() {
        return manufacturingFacilityService.getAllManufacturingFacility();
    }

    @PostMapping("/facility")
    public ResponseEntity<ManufacturingFacility> createManufacturingFacility(@RequestBody ManufacturingFacility manufacturingFacility) {
        ManufacturingFacility created = manufacturingFacilityService.createManufacturingFacility(manufacturingFacility);

        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    @PutMapping("/facility/{id}")
    public ResponseEntity<ManufacturingFacility> updateManufacturingFacility(@PathVariable Integer id, @RequestBody ManufacturingFacility manufacturingFacility) {
        ManufacturingFacility updated = manufacturingFacilityService.updateManufacturingFacility(id, manufacturingFacility);

        return new ResponseEntity<>(updated, HttpStatus.OK);
    }

    @DeleteMapping("/facility/{id}")
    public ResponseEntity<String> deleteManufacturingFacility(@PathVariable Integer id) {
        manufacturingFacilityService.deleteManufacturingFacility(id);

        return ResponseEntity.ok().body("Đã xóa bản ghi thành công");
    }

    @DeleteMapping("/facilities")
    public ResponseEntity<String> deleteManyManufacturingFacilities(@RequestBody List<Integer> ids) {
        manufacturingFacilityService.deleteManyManufacturingFacilities(ids);

        return ResponseEntity.ok().body("Tất cả bản ghi đã được xóa thành công");
    }

    @PostMapping("/facilities")
    public ResponseEntity<List<ManufacturingFacility>> createManyManufacturingFacilities(@RequestBody List<ManufacturingFacility> manufacturingFacilities) {
        List<ManufacturingFacility> newManufacturingFacilities = manufacturingFacilityService.createManyManufacturingFacilities(manufacturingFacilities);

        return new ResponseEntity<>(newManufacturingFacilities, HttpStatus.CREATED);
    }
}
