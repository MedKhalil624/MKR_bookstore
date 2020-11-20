package com.example.demoFull.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demoFull.entity.Book;
//http://localhost:4200/
@CrossOrigin("*")
public interface BookRep extends JpaRepository<Book, Long> {
	@RestResource(path="byCateg")
	Page<Book> findByCategoryId(@Param("id") Long id, Pageable pageable );
}
