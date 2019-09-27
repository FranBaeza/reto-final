package org.springframework.samples.petclinic.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.samples.petclinic.model.Oferta;
import org.springframework.samples.petclinic.service.ClinicService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(exposedHeaders = "errors, content-type")
@RequestMapping("/api/ofertas")
public class OfertaRestController {
	
	@Autowired
	private ClinicService clinicService;
	
	@RequestMapping(value = "/{ofertaId}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<Oferta> getOferta(@PathVariable("ofertaId") int ofertaId) {
		Oferta oferta = null;
		oferta = this.clinicService.findOfertaById(ofertaId);
		if (oferta == null) {
			return new ResponseEntity<Oferta>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Oferta>(oferta, HttpStatus.OK);
	}

}
