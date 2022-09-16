package com.capg.main.repository;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import com.capg.main.entity.AdminListing;
import com.capg.main.entity.Buses;
import com.capg.main.entity.Travel;
import com.capg.main.entity.Users;

@Repository
public interface AdminRepository extends CrudRepository<AdminListing, Integer> {

	

	
	@Query(value = "SELECT * FROM Admin_Listing  WHERE from_origin LIKE ? AND to_dest LIKE ? AND date=?", nativeQuery = true)
	public List<AdminListing> findAdminListing(@PathVariable("afrom") String afrom , @PathVariable("ato") String ato, @PathVariable("adate") Date adate);
	
}

