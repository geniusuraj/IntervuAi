package com.IntervuAi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.IntervuAi.model.Interview;


@Repository
public interface InterviewRepository  extends JpaRepository<Interview, Integer>{

}
