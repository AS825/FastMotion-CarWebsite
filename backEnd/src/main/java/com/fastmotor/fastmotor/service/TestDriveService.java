package com.fastmotor.fastmotor.service;

import com.fastmotor.fastmotor.persistence.entity.TestDrive;
import com.fastmotor.fastmotor.persistence.repository.TestDriveRepository;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TestDriveService {
    private final TestDriveRepository testDriveRepository;

    public TestDriveService(TestDriveRepository testDriveRepository) {
        this.testDriveRepository = testDriveRepository;
    }

    public List<TestDrive> findAll() {
        List<TestDrive> testDrives = testDriveRepository.findAll();
        testDrives.sort(Comparator.comparing(TestDrive::getId));
        return testDrives;
    }

    public Optional<TestDrive> findById(long id) {
        return testDriveRepository.findById(id);
    }

    public TestDrive save(TestDrive testDrive) {
        return testDriveRepository.save(testDrive);
    }

    public void deleteById(long id) {
        testDriveRepository.deleteById(id);
    }

    public Map<Long, Long> findMostCommonCarId() {
        List<TestDrive> testDrives = testDriveRepository.findAll();
        return testDrives.stream()
                .collect(Collectors.groupingBy(TestDrive::getCarId, Collectors.counting()));
    }
}
