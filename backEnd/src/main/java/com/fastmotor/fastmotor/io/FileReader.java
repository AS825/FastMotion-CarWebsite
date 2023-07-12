package com.fastmotor.fastmotor.io;

import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.stream.Stream;

@Service
public class FileReader {
    public Stream<String> read(String path) {
        try {
            return doRead(path);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    private Stream<String> doRead(String path) throws IOException {
        return Files.lines(Paths.get(path));
    }
}
