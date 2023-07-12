package com.fastmotor.fastmotor.runner;

import com.fastmotor.fastmotor.persistence.entity.Car;
import com.fastmotor.fastmotor.persistence.entity.TestDrive;
import com.fastmotor.fastmotor.persistence.repository.CarRepository;
import com.fastmotor.fastmotor.persistence.repository.TestDriveRepository;
import com.fastmotor.fastmotor.reader.CarTransformer;
import com.fastmotor.fastmotor.reader.DataReader;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Configuration
public class DatabasePopulation {

    private final DataReader dataReader;
    private final CarTransformer carTransformer;

    private final TestDriveRepository testDriveRepository;

    public DatabasePopulation(DataReader dataReader, CarTransformer carTransformer, TestDriveRepository testDriveRepository) {
        this.dataReader = dataReader;
        this.carTransformer = carTransformer;
        this.testDriveRepository = testDriveRepository;
    }

    @Bean
    ApplicationRunner populate(CarRepository carRepository) {
        return args -> {
            String carsPath = "src/main/resources/cars.csv";
            List<Car> carsCSV = dataReader.read(carsPath, carTransformer);
            carRepository.saveAll(carsCSV);

            TestDrive testDrive = TestDrive.builder()
                    .fullName("Adam")
                    .email("test@email.com")
                    .localDate(LocalDate.now())
                    .localTime(LocalTime.of(14, 13))
                    .telephone("069911211090")
                    .carId(carsCSV.get(0).getId())
                    .build();
            testDriveRepository.save(testDrive);
        };
    }
}
