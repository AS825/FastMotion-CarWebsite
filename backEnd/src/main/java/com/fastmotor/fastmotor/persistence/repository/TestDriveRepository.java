package com.fastmotor.fastmotor.persistence.repository;

import com.fastmotor.fastmotor.persistence.entity.TestDrive;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TestDriveRepository extends JpaRepository<TestDrive, Long> {
}
