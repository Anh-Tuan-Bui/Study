package com.project.production_move.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "business_type")
public class BusinessType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "type_id")
    private int id;

    @Column(name = "type_name")
    private String name;
}
