package com.fastmotor.fastmotor.service;

import com.fastmotor.fastmotor.persistence.entity.Car;
import com.fastmotor.fastmotor.persistence.repository.CarRepository;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarService {
    private final CarRepository carRepository;

    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    public List<Car> findAll() {
        return carRepository.findAll();
    }

    public List<Car> findTopN(int size) {
        return carRepository.findAll(PageRequest.of(0, size)).getContent();
    }
    public Optional<Car> findById(long id) {
        return carRepository.findById(id);
    }
    public Car save(Car car){
        return carRepository.save(car);
    }

    public void deleteById(long id) {
        carRepository.deleteById(id);
    }
}
