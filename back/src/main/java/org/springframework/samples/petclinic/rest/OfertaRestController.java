package org.springframework.samples.petclinic.rest;

import java.util.Collection;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.samples.petclinic.model.Oferta;
import org.springframework.samples.petclinic.model.Oferta;
import org.springframework.samples.petclinic.model.Oferta;
import org.springframework.samples.petclinic.model.Oferta;
import org.springframework.samples.petclinic.service.ClinicService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

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

	
	@RequestMapping(value = "", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<Oferta> addOferta(@RequestBody @Valid Oferta oferta, BindingResult bindingResult,
			UriComponentsBuilder ucBuilder) {
		BindingErrorsResponse errors = new BindingErrorsResponse();
		HttpHeaders headers = new HttpHeaders();
		if (bindingResult.hasErrors() || (oferta == null)) {
			errors.addAllErrors(bindingResult);
			headers.add("errors", errors.toJSON());
			return new ResponseEntity<Oferta>(headers, HttpStatus.BAD_REQUEST);
		}
		this.clinicService.saveOferta(oferta);
		headers.setLocation(ucBuilder.path("/api/ofertas/{id}").buildAndExpand(oferta.getId()).toUri());
		return new ResponseEntity<Oferta>(oferta, headers, HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<Collection<Oferta>> getOfertas() {
		Collection<Oferta> ofertas = this.clinicService.findAllOfertas();
		if (ofertas.isEmpty()) {
			return new ResponseEntity<Collection<Oferta>>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Collection<Oferta>>(ofertas, HttpStatus.OK);
	
	}
	
		@RequestMapping(value = "/{ofertaId}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
		@Transactional
		public ResponseEntity<Void> deleteOferta(@PathVariable("ofertaId") int ofertaId) {
			Oferta oferta = this.clinicService.findOfertaById(ofertaId);
			if (oferta == null) {
				return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
			}
			this.clinicService.deleteOferta(oferta);
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		}
		
			@RequestMapping(value = "/{ofertaId}", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
			public ResponseEntity<Oferta> updateOferta(@PathVariable("ofertaId") int ofertaId, @RequestBody @Valid Oferta oferta,
					BindingResult bindingResult, UriComponentsBuilder ucBuilder) {
				BindingErrorsResponse errors = new BindingErrorsResponse();
				HttpHeaders headers = new HttpHeaders();
				if (bindingResult.hasErrors() || (oferta == null)) {
					errors.addAllErrors(bindingResult);
					headers.add("errors", errors.toJSON());
					return new ResponseEntity<Oferta>(headers, HttpStatus.BAD_REQUEST);
				}
				Oferta currentOferta = this.clinicService.findOfertaById(ofertaId);
				if (currentOferta == null) {
					return new ResponseEntity<Oferta>(HttpStatus.NOT_FOUND);
				}
				currentOferta.setDescription(oferta.getDescription());
				currentOferta.setDiscount(oferta.getDiscount());
				currentOferta.setTitle(oferta.getTitle());
				currentOferta.setExpireDate(oferta.getExpireDate());
				this.clinicService.saveOferta(currentOferta);
				return new ResponseEntity<Oferta>(currentOferta, HttpStatus.NO_CONTENT);
			}
}
