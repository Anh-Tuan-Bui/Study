package com.project.production_move.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private int id;

    @Column(name = "product_code")
    private String code;

    @Column(name = "product_name")
    private String name;

    @Column(name = "catalog")
    private String catalog;

    @Column(name = "product_status")
    private String status;

    @Column(name = "production_date")
    private Date productionDate;

    @Column(name = "warranty_period")
    private Date warrantyPeriod;

    @Column(name = "model")
    private String model;

    @Column(name = "specifications")
    private String specifications;
}
