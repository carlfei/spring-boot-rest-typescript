package com.simple.controller;


import java.util.List;
import java.util.Optional;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.simple.model.Coche;
import com.simple.repository.CochesRepository;

@CrossOrigin(origins = "*")
@RestController
public class HDosController {

	@Autowired
	CochesRepository cochesRepository;
	List coches;
	Coche coche;
	Gson gson;
	String jsonString;
	@RequestMapping(value = "coches/{id}", method = RequestMethod.GET)
	String getCoches(@PathVariable int id) {
		//cast optional to dto, return optional --> nullpointer Exception
		Optional<Coche> resultOptional = cochesRepository.findById(id);  //return Optional
		Coche createCoche = resultOptional.get();
		gson = new Gson();
		jsonString = gson.toJson(createCoche);
		return jsonString;

	}

	@RequestMapping(value = "coches/all", method = RequestMethod.GET)
	String getAllCoches() {

		coches = (List<Coche>) cochesRepository.findAll();
		gson = new Gson();
		jsonString = gson.toJson(coches);

		return jsonString.toString();
	}

	@RequestMapping(value = "coches/new/{tipo}", method = RequestMethod.GET)
	String saveCoches(@PathVariable  String tipo) {

		Integer i = Integer.parseInt(String.valueOf(cochesRepository.count()));
		i++;
		coche = new Coche(i,tipo);
		gson = new Gson();
		jsonString = gson.toJson(cochesRepository.save(coche));

		return jsonString.toString();
	}

}
