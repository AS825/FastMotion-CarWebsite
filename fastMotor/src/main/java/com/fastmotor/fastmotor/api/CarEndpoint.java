package com.fastmotor.fastmotor.api;

import com.fastmotor.fastmotor.api.exception.ElementNotFoundException;
import com.fastmotor.fastmotor.persistence.entity.Car;
import com.fastmotor.fastmotor.service.CarService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/cars")
@CrossOrigin(origins = "*")
public class CarEndpoint {
    private final CarService carService;

    public CarEndpoint(CarService carService) {
        this.carService = carService;
    }

    @GetMapping
    public List<Car> getAll() {
        return carService.findAll();
    }

    @GetMapping("/size/{size}")
    public List<Car> getSize(@PathVariable int size) {
        return carService.findTopN(size);
    }

    @GetMapping("/{id}")
    public Car getOne(@PathVariable long id) throws ElementNotFoundException {
        return carService.findById(id)
                .orElseThrow(ElementNotFoundException::new);
    }

    @PostMapping
    public Car save(@RequestBody Car car) {
        return carService.save(car);
    }

    @PutMapping
    public Car update(@RequestBody Car car) {
        return carService.save(car);
    }

    @DeleteMapping("/{id}")
    void deleteOne(@PathVariable long id) {
        carService.deleteById(id);
    }
}

