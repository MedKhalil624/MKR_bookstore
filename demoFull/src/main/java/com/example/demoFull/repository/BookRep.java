package com.example.demoFull.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demoFull.entity.Book;
//http://localhost:4200/
@CrossOrigin("*")
public interface BookRep extends JpaRepository<Book, Integer> {

}
