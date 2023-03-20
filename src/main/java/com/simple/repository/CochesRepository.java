package com.simple.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.simple.model.*;
import org.springframework.stereotype.Repository;

@Repository
public interface CochesRepository extends JpaRepository<Coche, Integer> {

}
