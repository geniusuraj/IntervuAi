package com.IntervuAi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.IntervuAi.model.FeedBack;


@Repository
public interface FeedBackReposioty  extends JpaRepository<FeedBack, Integer>{

}
