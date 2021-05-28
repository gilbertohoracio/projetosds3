package com.devsuperior.dsvendas.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsvendas.dto.SaleDTO;
import com.devsuperior.dsvendas.service.SaleServico;

@RestController
@RequestMapping(value = "/sales" )
public class SaleController {
	
	@Autowired
	SaleServico saleServico;
	
	@RequestMapping
	ResponseEntity<Page<SaleDTO>> findAll(Pageable pageable)
	{
		Page<SaleDTO> list = saleServico.findAll(pageable);
		return ResponseEntity.ok(list);
	}
}
