package edu.umd.dvdlibrary.service;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import javax.inject.Inject;

import org.apache.commons.lang3.StringUtils;
import org.hibernate.Session;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import edu.umd.dvdlibrary.form.DvdForm;
import edu.umd.dvdlibrary.model.entity.Dvd;
import edu.umd.dvdlibrary.repository.DvdRepository;

@Service
public class ServiceDvds {

	private static final Logger logger = LoggerFactory.getLogger(ServiceDvds.class);

	//	private static final Comparator<Long> CMP = new sortLong();
	//	private Map<Long, Dvd> dvds = new TreeMap<Long, Dvd>(CMP);
	@Inject private DvdRepository dvdRepository;
	@Inject private MessageServer messageServer;

	private Map<Long, Dvd> dvds = new TreeMap<Long, Dvd>();

	@Transactional
	public Dvd create(Dvd dvd) {
		logger.debug("@@@@@_ server (ServiceDvds.create:dvd:) {}", dvd);
		return dvdRepository.save(dvd);
	}

	@Transactional
	public Dvd findById(int id) {
		return dvdRepository.findOne(id);
	}

	@Transactional
	public Dvd delete(Session session, Dvd dvd) {
		
		Dvd deletedDvd = dvdRepository.findOne(dvd.getId());
		logger.debug("@@@@@_ server (ServiceDvds.delete:dvd:) original Dvd {}", dvd);

		if (deletedDvd != null) {
			logger.debug("@@@@@_ server (ServiceDvds.delete:dvd:) {}", dvd);
	
			session.delete(dvd);
			return dvd;
		}
		logger.debug("@@@@@_ server (ServiceDvds.update:dvd:) deleted Dvd {}", deletedDvd);
		return null;
	}

	@Transactional
	public List<Dvd> findAll() {
		return dvdRepository.findAll();
	}

	@Transactional
	public Dvd update(Session session, Dvd dvd) {
		Dvd updatedDvd = dvdRepository.findOne(dvd.getId());
		logger.debug("@@@@@_ server (ServiceDvds.update:dvd:) original Dvd {}", dvd);

		if (updatedDvd != null) {
//			updatedDvd.setName(dvd.getName());
//			updatedDvd.setColumne(dvd.getColumne());
//			updatedDvd.setRowe(dvd.getRowe());
//			updatedDvd.setDirector(dvd.getDirector());
//			updatedDvd.setGenre(dvd.getGenre());
			logger.debug("@@@@@_ server (ServiceDvds.update:dvd:) {}", dvd);
	
			session.update(dvd);
			return dvd;
		}
		logger.debug("@@@@@_ server (ServiceDvds.update:dvd:) updated Dvd {}", updatedDvd);
		return null;
	}
	public Map<Long, Dvd> getDvds() {
		return dvds;
	}
	public int searchDvds(Session session) throws SQLException{
		List<Dvd> dvdList = null;

		dvdList = session.createQuery("FROM Dvd order by name").list(); 
		setDvds(dvdList);
		logger.debug("@@@@@_ server (serviceDvds.dvdlist: " + dvds.size() + ":" + dvdList.size());
		return dvds.size();
	}
	private void setDvds(List<Dvd> dvdList) {
		dvds.clear();

		for (Dvd dvd : dvdList) {
			long key = dvd.getId();
			dvds.put(key, dvd);
//			logger.debug("@@@@@_ server (ServiceDvds.setDvds): " + key + ":" + dvd.getId()); 
			logger.debug("@@@@@_ server (ServiceDvds.setDvds): Dvd Name: " + dvd.getName()); 
//			logger.debug("@@@@@_ server (ServiceDvds.setDvds): Director: " + dvd.getDirector()); 
//			logger.debug("@@@@@_ server (ServiceDvds.setDvds): genre: " + dvd.getGenre()); 
//			logger.debug("@@@@@_ server (ServiceDvds.setDvds): column: " + dvd.getColumne()); 
//			logger.debug("@@@@@_ server (ServiceDvds.setDvds): row: " + dvd.getRowe()); 
		}
	}
	public boolean validateDvd(DvdForm dvd, String buttonState) {
		
		if (buttonState.equals("SearchDvd")) {

			if (StringUtils.trimToEmpty(dvd.getId()).length() == 0) {
				messageServer.addErrorMessage("Film Id number required for Dvd search.");
				return false;
			}
			return true;
			
		} else {
			
			if (StringUtils.trimToEmpty(dvd.getId()).length() == 0 && buttonState.equals("UpdateDvd")) {
				messageServer.addErrorMessage("Film Id number required for Update.");
				return false;
			}
			
			if (StringUtils.trimToEmpty(dvd.getName()).length() == 0) {
				messageServer.addErrorMessage("Film title missing.");
				return false;
				
			}
			logger.debug("@@@@@_ server (ServiceDvds.validateDvd): columne: " + StringUtils.trimToEmpty(dvd.getColumne()) + " :"); 
	
			if (StringUtils.trimToEmpty(dvd.getColumne()).length() > 0 && 
					(StringUtils.trimToEmpty(dvd.getColumne()).equals("0") || StringUtils.trimToEmpty(dvd.getColumne()).equals("1") ||
					StringUtils.trimToEmpty(dvd.getColumne()).equals("2") || StringUtils.trimToEmpty(dvd.getColumne()).equals("3") ||
					StringUtils.trimToEmpty(dvd.getColumne()).equals("4") || StringUtils.trimToEmpty(dvd.getColumne()).equals("5") ||
					StringUtils.trimToEmpty(dvd.getColumne()).equals("6") || StringUtils.trimToEmpty(dvd.getColumne()).equals("7") ||
					StringUtils.trimToEmpty(dvd.getColumne()).equals("8") || StringUtils.trimToEmpty(dvd.getColumne()).equals("9"))) {
				;
			} else {
				messageServer.addErrorMessage(
						"Column must be between 0 and 9.");
				return false;
				
			} 
			logger.debug("@@@@@_ server (ServiceDvds.validateDvd): rowe: " + StringUtils.trimToEmpty(dvd.getRowe()) + " :"); 
	
			if (StringUtils.trimToEmpty(dvd.getRowe()).length() > 0 && 
					(StringUtils.trimToEmpty(dvd.getRowe()).equals("0") || StringUtils.trimToEmpty(dvd.getRowe()).equals("1") ||
					StringUtils.trimToEmpty(dvd.getRowe()).equals("2") || StringUtils.trimToEmpty(dvd.getRowe()).equals("3") ||
					StringUtils.trimToEmpty(dvd.getRowe()).equals("4") || StringUtils.trimToEmpty(dvd.getRowe()).equals("5") ||
					StringUtils.trimToEmpty(dvd.getRowe()).equals("6") || StringUtils.trimToEmpty(dvd.getRowe()).equals("7") ||
					StringUtils.trimToEmpty(dvd.getRowe()).equals("8") || StringUtils.trimToEmpty(dvd.getRowe()).equals("9") ||
					StringUtils.trimToEmpty(dvd.getRowe()).equals("10") || StringUtils.trimToEmpty(dvd.getRowe()).equals("11"))) {
				;
			} else {
				messageServer.addErrorMessage(
						"Row must be between 0 and 11.");
				return false;				
			}
		}

		return true;
	}
}