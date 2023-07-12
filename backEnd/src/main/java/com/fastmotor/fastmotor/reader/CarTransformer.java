package com.fastmotor.fastmotor.reader;

import com.fastmotor.fastmotor.persistence.entity.Car;
import com.fastmotor.fastmotor.persistence.entity.CarBrand;
import com.fastmotor.fastmotor.service.ImageUtil;
import com.fastmotor.fastmotor.service.exception.ImageProcessingException;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.time.LocalDate;

@Component
public class CarTransformer implements DataTransformer<Car> {

    private final ImageUtil imageUtil;

    public CarTransformer(ImageUtil imageUtil) {
        this.imageUtil = imageUtil;
    }

    @Override
    public Car transform(String line) {
        String[] columns = line.split(",");
        CarBrand brand = CarBrand.valueOf(columns[0]);
        String name = columns[1];
        String dom = columns[2];
        String price = columns[3];
        String hp = columns[4];
        String mileage = columns[5];
        String image = columns[6];

        byte[] imageBytes;
        try {
            imageBytes = imageUtil.readImageBytes(image);
        } catch (IOException e) {
            throw new ImageProcessingException("Error processing image: " + image, e);
        }

        return Car.builder()
                .carBrand(brand)
                .name(name)
                .dom(LocalDate.parse(dom))
                .price(Integer.parseInt(price))
                .hp(Integer.parseInt(hp))
                .mileage(Integer.parseInt(mileage))
                .image(imageBytes)
                .build();
    }
}
