package com.project.production_move.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "distribution_agency")
public class DistributionAgency {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "agency_id")
    private int id;

    @Column(name = "agency_code")
    private String code;

    @Column(name = "agency_name")
    private String name;

    private String region;
    private String address;
}
