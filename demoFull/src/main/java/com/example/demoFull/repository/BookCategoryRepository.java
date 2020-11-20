package com.example.demoFull.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import com.example.demoFull.entity.BookCategory;

@RepositoryRestResource(collectionResourceRel="category of book", path="book-category")
public interface BookCategoryRepository extends JpaRepository<BookCategory, Long> {

}
