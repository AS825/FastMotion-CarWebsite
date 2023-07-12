package com.fastmotor.fastmotor.reader;

public interface DataTransformer<E> {
    E transform(String line);
}