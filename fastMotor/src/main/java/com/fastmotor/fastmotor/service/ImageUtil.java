package com.fastmotor.fastmotor.service;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
@Service
public class ImageUtil {
    public byte[] readImageBytes(String imagePath) throws IOException {
        Path imageFilePath = Paths.get(imagePath);
        return Files.readAllBytes(imageFilePath);
    }
}
