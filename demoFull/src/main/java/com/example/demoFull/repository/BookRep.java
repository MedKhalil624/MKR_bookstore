package com.example.demoFull.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demoFull.entity.Book;

public interface BookRep extends JpaRepository<Book, Integer> {

}
