package com.capg.main;

import static org.assertj.core.api.Assertions.assertThat;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.capg.main.entity.Buses;
import com.capg.main.entity.Travel;
import com.capg.main.entity.Users;
import com.capg.main.repository.BookingRepository;
import com.capg.main.service.BookingService;

@SpringBootTest
class BusbookingappApplicationTests {

	/*
	 * @Test void contextLoads() { }
	 */

	@Autowired
	private BookingRepository brepo;

	@Autowired
	private BookingService bservice;


		@Test
		public void testSave1() {

			Users u = new Users(12345, "Raju", 888);
			Travel t = new Travel(12345, 222, "Belgharia", Date.valueOf("2222-02-22"));
			Buses b = new Buses(12345, 22222, t, u);
			bservice.saveBuses(b);
			assertThat(b.getBusno()).isEqualTo(22222);
			System.out.println("SAVE TEST CASE PASSED");

		}

	


	@Test
	void testAllbookings1() {
		List<Buses> list = new ArrayList();
		bservice.findAll().forEach(list::add);
		assertThat(list.size()).isGreaterThanOrEqualTo(1);
		System.out.println("ALL BOOKING TEST CASE PASSED");

	}


	


	@Test
	void testGetBookingId1() {

		Optional<Buses> op = bservice.findById(4);
		System.out.println(op);
		if (op.isPresent()) {
			Buses buses = op.get();
			//assertThat(buses.getBusno() == 903);
			assertThat(buses.getBusno()).isEqualTo(902);
			System.out.println("GETBOOKINGID TEST CASE PASSED");
		} else {

			System.out.println("GETBOOKINGID TEST CASE FAILED");
			assertThat(op).isNull();
		}

	}


	


	@Test
	void testDeleteById1() {
		Optional<Buses> op = bservice.findById(5);
		if (op.isPresent() || !op.isEmpty()) {
			Buses b = op.get();
			//assertThat(b.getBusno() == 902);
			assertThat(b.getBusno()).isEqualTo(303);
			bservice.deleteById(5);
			System.out.println("DELETE TEST CASE PASSED");
		} else {

			System.out.println("DELETE TEST CASE FAILED");
			assertThat(op).isNull();

		}
	}


	


	@Test
	void testUpdateById1() {
		Optional<Buses> op = bservice.findById(4);
		if (op.isPresent() || !op.isEmpty()) {

			Buses buses = op.get();
			assertThat(buses.getBusno()).isEqualTo(902);
			buses.setBusno(600);
			bservice.save(buses);
			buses = op.get();
			assertThat(buses.getBusno()).isEqualTo(902);

			System.out.println("UPDATE TEST CASE PASSED USING SERVICE");
		} else {
			System.out.println("UPDATE TEST CASE FAILED USING SERVICE");
			assertThat(op).isNull();
		}
	}


}