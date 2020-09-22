package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user_config_collection")
public class UserConfig {
	
	@Id
	@Column (name = "id")
	private String id;
	
	@Column (name = "sets")
	private int sets;
	
	@Column (name = "items")
	private int items;

	public UserConfig() {
		super();
	}

	public UserConfig(String id, int sets, int items) {
		super();
		this.id = id;
		this.sets = sets;
		this.items = items;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public int getSets() {
		return sets;
	}

	public void setSets(int sets) {
		this.sets = sets;
	}

	public int getItems() {
		return items;
	}

	public void setItems(int items) {
		this.items = items;
	}

	@Override
	public String toString() {
		return "UserConfig [id=" + id + ", sets=" + sets + ", items=" + items + "]";
	}
	
	
}
