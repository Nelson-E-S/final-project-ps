package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.UserConfig;
import com.example.demo.repo.UserConfigRepo;

@RestController
@RequestMapping(value = "/api", produces = { MediaType.APPLICATION_JSON_VALUE })
public class RESTController {

	@Autowired
	private UserConfigRepo repo;

	public UserConfigRepo getRepo() {
		return repo;
	}

	public void setRepo(UserConfigRepo repo) {
		this.repo = repo;
	}
	
	@GetMapping("/user-configs")
	public List<UserConfig> getAllUserConfigs(){
		return repo.findAll();
	}
	
	@PostMapping("/user-configs")
	UserConfig createUserConfig(@RequestBody UserConfig newUserConfig) {
		return repo.save(newUserConfig);
	}
	
	@GetMapping("/user-configs/{id}")
	UserConfig getUserConfigById(@PathVariable String id) {
		return repo.findById(id).get();
	}
	
	@PutMapping("/user-configs/{id}")
	UserConfig updateUserConfig(@RequestBody UserConfig newUserConfig, @PathVariable String id) {
		return repo.findById(id).map(uc -> {
			uc.setId(newUserConfig.getId());
			uc.setSets(newUserConfig.getSets());
			uc.setItems(newUserConfig.getItems());
			return repo.save(uc);
		}).orElseGet(()->{
			newUserConfig.setId(id);
			return repo.save(newUserConfig);
		});
	}
	
}
