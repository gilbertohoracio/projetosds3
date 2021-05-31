package com.devsuperior.dsvendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsvendas.dto.SaleDTO;
import com.devsuperior.dsvendas.dto.SalesSucessDTO;
import com.devsuperior.dsvendas.dto.SalesSumDTO;
import com.devsuperior.dsvendas.service.SaleServico;

@RestController
@RequestMapping(value = "/sales" )
public class SaleController {
	
	@Autowired
	SaleServico saleServico;
	
	@GetMapping
	ResponseEntity<Page<SaleDTO>> findAll(Pageable pageable)
	{
		Page<SaleDTO> list = saleServico.findAll(pageable);
		return ResponseEntity.ok(list);
	}
	
	@GetMapping(value = "/amount-by-seller")
	ResponseEntity<List<SalesSumDTO>> amountGroupBySeller()
	{
		List<SalesSumDTO> list = saleServico.amountGroupBySeller();
		return ResponseEntity.ok(list);
	}
	
	@GetMapping(value = "/sucess-by-seller")
	ResponseEntity<List<SalesSucessDTO>> sucessGroupdBySeller()
	{
		List<SalesSucessDTO> list = saleServico.sucessGroupdBySeller();
		return ResponseEntity.ok(list);
	}		
}
