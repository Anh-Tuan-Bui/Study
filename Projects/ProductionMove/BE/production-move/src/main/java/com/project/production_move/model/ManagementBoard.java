package com.project.production_move.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "management_board")
public class ManagementBoard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "management_board_id")
    private int id;

    @Column(name = "management_board_code")
    private String code;

    @Column(name = "management_board_name")
    private String name;

    private String region;

    private String address;
}
