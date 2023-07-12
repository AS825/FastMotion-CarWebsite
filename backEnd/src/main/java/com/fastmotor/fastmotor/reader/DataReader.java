package com.fastmotor.fastmotor.reader;



import com.fastmotor.fastmotor.io.FileReader;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.List;

@Component
public class DataReader {
    private final FileReader fileReader;

    public DataReader(FileReader fileReader) {
        this.fileReader = fileReader;
    }

    public <ELEMENT> List<ELEMENT> read(String path, DataTransformer<ELEMENT> dataTransformer) {
        return fileReader.read(path)
                .skip(1)
                .map(dataTransformer::transform)
                .toList();
    }
}
