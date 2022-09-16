package com.capg.main.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.capg.main.entity.Buses;
import com.capg.main.entity.Travel;
import com.capg.main.entity.Users;

@Repository
public interface BookingRepository extends CrudRepository<Buses, Integer> {
	void save(Users user);

	void save(Travel travel);

	@Query(value = "SELECT * FROM buses  WHERE busno >=?", nativeQuery = true)
	public List<Buses> findBusno(@Param("busno") int busno);

	@Query(value = "SELECT * FROM buses ORDER BY busno DESC", nativeQuery = true)
	public List<Buses> sortBusno();
	
	@Query(value = "SELECT  id FROM users where \"email\" LIKE ?", nativeQuery = true)
	public List<Integer> searchId(@Param("email") String email);
	
	
	
	

}