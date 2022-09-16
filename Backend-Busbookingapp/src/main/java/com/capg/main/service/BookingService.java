package com.capg.main.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capg.main.entity.Buses;
import com.capg.main.entity.Travel;
import com.capg.main.entity.Users;
import com.capg.main.exception.InvalidBookingException;
import com.capg.main.repository.BookingRepository;

@Service
public class BookingService {

	@Autowired
	private BookingRepository brepo;

	public void saveUsers(Users user) {
		// TODO Auto-generated method stub
		brepo.save(user);
	}

	public void saveTravel(Travel travel) {
		// TODO Auto-generated method stub
		brepo.save(travel);

	}

	public Buses saveBuses(Buses buses) {
		// TODO Auto-generated method stub
		brepo.save(buses);
		return buses;
	}

	public Iterable<Buses> findAll() {
		List<Buses> list = new ArrayList<>();
		brepo.findAll().forEach(list::add);
		return list;
	}

	public Optional<Buses> findById(int id) {
		return brepo.findById(id);
	}

	public void deleteById(int id) {
		brepo.deleteById(id);

	}

	public void save(Buses ord) {
		// TODO Auto-generated method stub
		brepo.save(ord);

	}

	public List<Buses> findBusno(int busno) {
		return brepo.findBusno(busno);

	}

	public List<Buses> sortBusno() {
		return brepo.sortBusno();
	}

	public Buses findByIdCustomException(int id) throws InvalidBookingException {
		// TODO Auto-generated method stub
		Optional<Buses> op = brepo.findById(id);
		if(op.isPresent()) {
			return op.get();
		}
		throw new InvalidBookingException("Record Not Found!");
	}

}