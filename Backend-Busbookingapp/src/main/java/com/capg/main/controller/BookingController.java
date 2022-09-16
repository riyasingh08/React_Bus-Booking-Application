package com.capg.main.controller;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capg.main.entity.AdminListing;
import com.capg.main.entity.Buses;
import com.capg.main.entity.Travel;
import com.capg.main.entity.Users;
import com.capg.main.exception.InvalidBookingException;
import com.capg.main.repository.AdminRepository;
import com.capg.main.repository.BookingRepository;
import com.capg.main.service.BookingService;

@RequestMapping("/booking/")
@RestController
@Validated
@CrossOrigin("http://localhost:3000/")
public class BookingController {

	@Autowired
	private BookingService bservice;

	@Autowired
	private BookingRepository brepo;
	
	@Autowired
	private AdminRepository arepo;

	// using service only
	/*
	 * @PostMapping("saveService") public ResponseEntity<String>
	 * saveBuses(@RequestBody Buses buses) {
	 * 
	 * System.out.println(buses); Users user = buses.getUser();
	 * bservice.saveUsers(user); Travel travel = buses.getTravel();
	 * bservice.saveTravel(travel); Buses bus = bservice.saveBuses(buses);
	 * System.out.println(bus);
	 * 
	 * return new ResponseEntity<String>("successfully inserted",
	 * HttpStatus.CREATED);
	 * 
	 * }
	 */
//----------------------------------------------------------------------------------------------------------
	
	@GetMapping("allbusesListing")
	public List<AdminListing> getAllBuses() {
		List<AdminListing> list = new ArrayList<>();
		arepo.findAll().forEach(list::add);
		return list;

	}
	@PostMapping("saveListing")
	public ResponseEntity<AdminListing> saveListing(@RequestBody AdminListing al) {

		AdminListing a = arepo.save(al);
		return new ResponseEntity<AdminListing>(a, HttpStatus.CREATED);

	}
	@PutMapping("updateListing/{id}")
	public ResponseEntity<Object> UpdateListingById(@PathVariable("id") int id, @RequestBody AdminListing al) {
		Optional<AdminListing> op = arepo.findById(id);
		if (op.isPresent()) {
			AdminListing ord = op.get();
			
			ord.setFromOrigin(al.getFromOrigin());
			ord.setToDest(al.getToDest());
			ord.setDate(al.getDate());
			ord.setAbusno(al.getAbusno());
			
			

			arepo.save(ord);
			return new ResponseEntity<Object>(ord, HttpStatus.OK);
		} else {
			return new ResponseEntity<Object>("Not updated successfully", HttpStatus.NOT_FOUND);
		}

	}
	
	@DeleteMapping("deleteListing/{id}")
	public ResponseEntity<String> deleteListing(@PathVariable("id") int id) {

		arepo.deleteById(id);
		return new ResponseEntity<String>("DELETE SUCCESFULLY", HttpStatus.OK);
	}
//------------------------------------------------------------------------------------------	
	
	@PutMapping("updateUser/{email}")
	public ResponseEntity<Object> UpdateUserById(@PathVariable("email") String email, @RequestBody Buses buses) {
		
		List<Integer> l=brepo.searchId(email);
		for(int i=0;i<l.size();i++)
		{
			int id=l.get(i);
			System.out.println();
			Optional<Buses> op = bservice.findById(id);
			if (op.isPresent()) {
			Buses ord = op.get();
			
			ord.getUser().setUsername(buses.getUser().getUsername());
			
			ord.getUser().setMobno(buses.getUser().getMobno());

			bservice.save(ord);
			
			} 
		}
		if(l.isEmpty())
			return new ResponseEntity<Object>("Not updated successfully", HttpStatus.NOT_FOUND);
		else
			return new ResponseEntity<Object>("Updated Successfully", HttpStatus.OK);
			

	}
	
	
	
	
	
//----------------------------------------------------------------------------------------------------------
	@PostMapping("saveService")
	public ResponseEntity<Buses> saveBuses(@RequestBody @Valid Buses buses) {

		Buses b = bservice.saveBuses(buses);
		return new ResponseEntity<Buses>(b, HttpStatus.CREATED);

	}

	
	@GetMapping("allbookingService")
	public List<Buses> getAllBookings1() {
		List<Buses> list = new ArrayList<>();
		bservice.findAll().forEach(list::add);
		return list;

	}

	
	@GetMapping("getbookingService/{id}")
	public ResponseEntity<Object> getBookingDetail1(@PathVariable("id") int id) {
		Optional<Buses> op = bservice.findById(id);
		if (op.isPresent()) {
			Buses buses = op.get();
			return new ResponseEntity<Object>(buses, HttpStatus.OK);
		}
		return new ResponseEntity<Object>("Problem in Fetching Data", HttpStatus.NOT_FOUND);
	}

	
	@GetMapping("getbookingServiceCustomException/{id}")
	public Buses getBookingDetailCustom(@PathVariable("id") int id) throws InvalidBookingException {
		Buses b = bservice.findByIdCustomException(id);

		return b;
	}

	
	@DeleteMapping("deletebookingService/{id}")
	public ResponseEntity<String> deleteBookingById1(@PathVariable("id") int id) {

		bservice.deleteById(id);
		return new ResponseEntity<String>("DELETE SUCCESFULLY", HttpStatus.OK);
	}

	
	@PutMapping("updateBusesService/{id}")
	public ResponseEntity<Object> UpdateOrderById1(@PathVariable("id") int id, @RequestBody Buses buses) {
		Optional<Buses> op = bservice.findById(id);
		if (op.isPresent()) {
			Buses ord = op.get();
			
			ord.setBusno(buses.getBusno());
			
			ord.getTravel().setDestname(buses.getTravel().getDestname());
			
			ord.getTravel().setDestprice(buses.getTravel().getDestprice());
			
			ord.getTravel().setDestdate(buses.getTravel().getDestdate());

			
			ord.getUser().setUsername(buses.getUser().getUsername());
			
			ord.getUser().setMobno(buses.getUser().getMobno());

			bservice.save(ord);
			return new ResponseEntity<Object>(ord, HttpStatus.OK);
		} else {
			return new ResponseEntity<Object>("Not updated successfully", HttpStatus.NOT_FOUND);
		}

	}

	@GetMapping("/getBusnoAbove/{busno}")
	public List<Buses> getBusnoAbove(@PathVariable("busno") int busno) {
		return bservice.findBusno(busno);
	}

	@GetMapping("/getBusnoSorted")
	public List<Buses> getBusnoSorted() {
		return bservice.sortBusno();
	}
	@GetMapping("/getAdminListing/{afrom}/{ato}/{adate}")
	public List<AdminListing> getAdminListing(@PathVariable("afrom") String afrom , @PathVariable("ato") String ato, @PathVariable("adate") Date adate) {
		return arepo.findAdminListing(afrom,ato,adate);
	}
	

}