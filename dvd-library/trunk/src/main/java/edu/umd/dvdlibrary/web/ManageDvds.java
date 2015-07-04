package edu.umd.dvdlibrary.web;

import java.sql.SQLException;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.hibernate.HibernateException; 
import org.hibernate.Session; 
import org.hibernate.Transaction; 
import org.hibernate.SessionFactory; 
import org.hibernate.cfg.Configuration; 
import org.hibernate.service.ServiceRegistry;
import org.hibernate.service.ServiceRegistryBuilder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

import edu.umd.dvdlibrary.form.DvdForm;
import edu.umd.dvdlibrary.form.DvdRecord;
import edu.umd.dvdlibrary.model.entity.Dvd;
import edu.umd.dvdlibrary.service.MessageServer;
import edu.umd.dvdlibrary.service.ServiceDvds;
import edu.umd.dvdlibrary.domain.Application;

@Controller
@RequestMapping(value = "dvds")
@SessionAttributes({"_version"})
public class ManageDvds { 

	private static final Logger logger = LoggerFactory.getLogger(ManageDvds.class);

	private static SessionFactory sessionFactory;
	private static ServiceRegistry serviceRegistry;
	
	@Inject private Application application;
	@Inject private ServiceDvds serviceDvds;
	@Inject private MessageServer messageServer;

	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = {"/" , " "}, method = RequestMethod.GET)
	public String home(Model model, HttpServletRequest req) {
		logger.info("Home page");

		return "/index";
	}

	/* Method to CREATE a new dvd in the database */ 

	@RequestMapping(value = "create", method = RequestMethod.GET)
	public String createDvd(@ModelAttribute("dvdForm") DvdForm input, Model dvdData) { 

		logger.trace("@@@@@_ controller (ManageDvds.createDvd:get)");

		return "/Create";
	} 
	@RequestMapping(value = "create", method = RequestMethod.POST)
	public String createDvdPost(@ModelAttribute("dvdForm") DvdForm input, BindingResult result,
			HttpServletRequest req, HttpServletResponse res, Model dvdData) {

		logger.trace("@@@@@_ controller (ManageDvds.createDvdpost)");
		logger.debug("Input : " + input);
		logger.debug("dvdData: {}", dvdData);

		Dvd dvd = new Dvd();
		Session session = getNewSession();
		Transaction tx = null; 
		int dvdId = -1;

		try{ 
			tx = session.beginTransaction();

			if (serviceDvds.validateDvd(input, "CreateDvd")) {
				dvd = new Dvd(new Integer(input.getColumne()), input.getDirector(), input.getGenre(), 
						new Integer(input.getRowe()), input.getName()); 
					
				serviceDvds.create(dvd);
				logger.trace("@@@@@_ controller (ManageDvds.createDvdPost): dvd: " + dvd);
				tx.commit();
				messageServer.addInformationMessage("Dvd successfully added.");

			} else {
				messageServer.addErrorMessage("Bad input! Please change and re-submit");
				
			}

		}catch (HibernateException e) { 
			if (tx!=null) 
				tx.rollback(); 
			e.printStackTrace(); 
		}
		finally { 
			session.close(); 
		}
		return "/Create";
	} 

	/* Method to UPDATE an existing dvd in the database */ 

	@RequestMapping(value = "update", method = RequestMethod.GET)
	public String updateDvd(@ModelAttribute("dvdForm") DvdForm input, Model dvdData) { 

		logger.trace("@@@@@_ controller (ManageDvds.updateDvd:get)");

		return "/Update";
	} 
	@RequestMapping(value = "update", method = RequestMethod.POST)
	public String updateDvdPost(@ModelAttribute("dvdForm") DvdForm input, BindingResult result,
			HttpServletRequest req, HttpServletResponse res, Model dvdData) {

		logger.trace("@@@@@_ controller (ManageDvds.updateDvdpost)");
		logger.debug("Input : " + input);
		logger.debug("dvdData: {}", dvdData);

		Session session = getNewSession();
		Dvd dvd = new Dvd();
		Transaction tx = null; 
		int dvdId = -1;
		String buttonState = req.getParameter("buttonState");

		try{ 
			tx = session.beginTransaction();

			if (serviceDvds.validateDvd(input, buttonState)) {
				
				if (buttonState.equals("SearchDvd")) {

					dvdId = new Integer(input.getId()).intValue();

					if ((dvd = serviceDvds.findById(dvdId)) == null) {

						messageServer.addErrorMessage("Bad input! Dvd with this Id not found");
					
					} else {
						input.setColumne(new Integer(dvd.getColumne()).toString());
						input.setDirector(dvd.getDirector());
						input.setGenre(dvd.getGenre());
						input.setRowe(new Integer(dvd.getRowe()).toString());
						input.setName(dvd.getName());

						messageServer.addInformationMessage("Dvd found.");					
					}
						
				} else {
	
					dvd = new Dvd(new Integer(input.getColumne()), input.getDirector(), input.getGenre(), 
							new Integer(input.getRowe()), input.getName()); 
					dvd.setId(new Integer(input.getId()).intValue());
					dvd = serviceDvds.update(session, dvd);
					logger.trace("@@@@@_ controller (ManageDvds.updateDvdPost): dvd: " + dvd);
					tx.commit();
					messageServer.addInformationMessage("Dvd successfully updated.");				
				}
			} else {
				messageServer.addErrorMessage("Bad input! Please change and re-submit");
				
			}
		}catch (HibernateException e) { 
			if (tx!=null) 
				tx.rollback(); 
			e.printStackTrace(); 
		}
		finally { 
			session.close(); 
		}
		return "/Update";
	} 

	/* Method to READ and list all the dvds */ 

	@RequestMapping(value = "list")
	public String listDvds	(HttpServletRequest req, HttpServletResponse res, @ModelAttribute("dvdForm") DvdRecord input, 
				BindingResult result, Model dvdData) {		
		logger.trace("@@@@@_ controller (ManageDvds.listDvds)");

		Session session = getNewSession();
		Transaction tx = null; 
		
		try{ 
			tx = session.beginTransaction(); 

			serviceDvds.searchDvds(session);
			dvdData.addAttribute("records", serviceDvds.getDvds());
			tx.commit(); 

		} catch (HibernateException e) { 
			if (tx!=null) 
				tx.rollback(); 
			e.printStackTrace(); 

		} catch (SQLException e) {
			if (tx!=null) 
				tx.rollback(); 
			e.printStackTrace();
		}
		finally { 
			session.close(); 
		} 
		return "/List";
	} 
	
	/* Method to DELETE a dvd from the records */ 

	@RequestMapping(value = "delete", method = RequestMethod.GET)
	public String deleteDvd(@ModelAttribute("dvdForm") DvdForm input, Model dvdData) { 

		logger.trace("@@@@@_ controller (ManageDvds.deleteDvd:get)");

		return "/Delete";
	} 
	@RequestMapping(value = "delete", method = RequestMethod.POST)
	public String deleteDvdPost(@ModelAttribute("dvdForm") DvdForm input, BindingResult result,
			HttpServletRequest req, HttpServletResponse res, Model dvdData) {

		logger.trace("@@@@@_ controller (ManageDvds.deleteDvdpost)");
		logger.debug("Input : " + input);
		logger.debug("dvdData: {}", dvdData);

		Session session = getNewSession();
		Dvd dvd = new Dvd();
		Transaction tx = null; 
		int dvdId = -1;
		String buttonState = req.getParameter("buttonState");

		try{ 
			tx = session.beginTransaction();

			if (serviceDvds.validateDvd(input, buttonState)) {
				
				if (buttonState.equals("SearchDvd")) {

					dvdId = new Integer(input.getId()).intValue();

					if ((dvd = serviceDvds.findById(dvdId)) == null) {

						messageServer.addErrorMessage("Bad input! Dvd with this Id not found");
					
					} else {
						input.setName(dvd.getName());
						input.setColumne(new Integer(dvd.getColumne()).toString());
						input.setRowe(new Integer(dvd.getRowe()).toString());
						input.setDirector(dvd.getDirector());
						input.setGenre(dvd.getGenre());

						messageServer.addInformationMessage("Dvd found.");					
					}
						
				} else {
	
					dvd = new Dvd(new Integer(input.getColumne()), input.getDirector(), input.getGenre(), 
							new Integer(input.getRowe()), input.getName()); 
					dvd.setId(new Integer(input.getId()).intValue());
					dvd = serviceDvds.delete(session, dvd);
					logger.trace("@@@@@_ controller (ManageDvds.deleteDvdPost): dvd: " + dvd);
					tx.commit();
					messageServer.addInformationMessage("Dvd successfully deleted.");				
				}
			} else {
				messageServer.addErrorMessage("Bad input! Dvd not found with this dvd id");
				
			}
		}catch (HibernateException e) { 
			if (tx!=null) 
				tx.rollback(); 
			e.printStackTrace(); 
		}
		finally { 
			session.close(); 
		}
		return "/Delete";
	} 
	
	public Session getNewSession() {
		try { 
			if (sessionFactory == null) {
				Configuration configuration = new Configuration();
			    configuration.configure();
			    serviceRegistry = new ServiceRegistryBuilder().applySettings(configuration.getProperties()). buildServiceRegistry();
			    sessionFactory = configuration.buildSessionFactory(serviceRegistry);
			    return sessionFactory.openSession();
			} else {
			    return sessionFactory.openSession();				
			}

		} catch (Throwable ex) { 
			System.err.println("Failed to create sessionFactory object." + ex); 
			throw new ExceptionInInitializerError(ex); 
		} 
	}
	@ModelAttribute("_version")
	public String version() {
		return application.getApplicationVersion();
	}

}