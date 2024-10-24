package com.project.production_move.model;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
@Table(name = "manufacturing_facility")
public class ManufacturingFacility {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "facility_id")
    private int id;

    @Column(name = "facility_code")
    private String code;

    @Column(name = "facility_name")
    private String name;

    private String region;
    private String address;
}
