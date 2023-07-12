package com.fastmotor.fastmotor.api;

import com.fastmotor.fastmotor.api.exception.ElementNotFoundException;
import com.fastmotor.fastmotor.persistence.entity.Car;
import com.fastmotor.fastmotor.persistence.entity.TestDrive;
import com.fastmotor.fastmotor.service.TestDriveService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/testdrives")
@CrossOrigin(origins = "*")
public class TestDriveEndpoint {
    private final TestDriveService testDriveService;

    public TestDriveEndpoint(TestDriveService testDriveService) {
        this.testDriveService = testDriveService;
    }

    @GetMapping
    public List<TestDrive> get() {
        return testDriveService.findAll();
    }

    @GetMapping("/data")
    public Map<Long,Long> DataMap(){
        return testDriveService.findMostCommonCarId();
    }

    @GetMapping("{id}")
    public TestDrive getOne(@PathVariable long id) throws ElementNotFoundException {
        return testDriveService.findById(id)
                .orElseThrow(ElementNotFoundException::new);
    }

    @PostMapping
    public TestDrive save(@RequestBody TestDrive testDrive) {
        return testDriveService.save(testDrive);
    }

    @PutMapping
    public TestDrive update(@RequestBody TestDrive testDrive) {
        return testDriveService.save(testDrive);
    }

    @DeleteMapping("{id}")
    void deleteOne(@PathVariable long id) {
        testDriveService.deleteById(id);
    }

}
