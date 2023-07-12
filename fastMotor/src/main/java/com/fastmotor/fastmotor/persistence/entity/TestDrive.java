package com.fastmotor.fastmotor.persistence.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TestDrive {
    @Id
    @GeneratedValue
    private long id;
    private String fullName;
    private String email;
    private LocalDate localDate;
    private LocalTime localTime;
    private String telephone;
    private long carId;
}
