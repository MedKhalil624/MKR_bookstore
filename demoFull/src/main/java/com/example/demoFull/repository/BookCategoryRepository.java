package com.example.demoFull.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demoFull.entity.BookCategory;

@CrossOrigin("*")
@RepositoryRestResource(collectionResourceRel="categoryOfBook", path="book-category")
public interface BookCategoryRepository extends JpaRepository<BookCategory, Long> {

}
