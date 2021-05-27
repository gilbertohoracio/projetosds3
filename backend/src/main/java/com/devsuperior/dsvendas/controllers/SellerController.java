package com.devsuperior.dsvendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsvendas.dto.SellerDTO;
import com.devsuperior.dsvendas.service.SellerServico;

@RestController
@RequestMapping(value = "/sellers" )
public class SellerController {
	
	@Autowired
	SellerServico sellerServico;
	
	@RequestMapping
	ResponseEntity<List<SellerDTO>> findAll()
	{
		List<SellerDTO> list = sellerServico.findAll();
		return ResponseEntity.ok(list);
	}
}
