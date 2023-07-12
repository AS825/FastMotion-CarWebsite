package com.fastmotor.fastmotor.persistence.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Car {
    @Id
    @GeneratedValue
    private long id;
    @Enumerated
    private CarBrand carBrand;
    private String name;
    private LocalDate dom;
    private int price;
    private int hp;
    private int mileage;
    @Lob
    private byte[] image;


}
