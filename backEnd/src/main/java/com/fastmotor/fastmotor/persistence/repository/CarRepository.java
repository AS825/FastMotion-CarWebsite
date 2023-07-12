package com.fastmotor.fastmotor.persistence.repository;

import com.fastmotor.fastmotor.persistence.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<Car, Long> {
}
