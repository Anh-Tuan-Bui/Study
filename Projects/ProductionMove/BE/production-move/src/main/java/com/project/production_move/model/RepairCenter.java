package com.project.production_move.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "repair_center")
public class RepairCenter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "center_id")
    private int id;

    @Column(name = "center_code")
    private String code;

    @Column(name = "center_name")
    private String name;

    private String region;
    private String address;
}
