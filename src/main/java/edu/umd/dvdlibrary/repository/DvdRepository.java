package edu.umd.dvdlibrary.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import edu.umd.dvdlibrary.model.entity.Dvd;

@Repository
public interface DvdRepository extends JpaRepository<Dvd, Integer> {
	
	@Query("select d from Dvd d")
	List<Dvd> findAllDvds();

	@Query("select d from Dvd d where d.name = ?1")
	List<Dvd> findDvdByName(String name);

	@Query("select d from Dvd d where d.rowe = ?1 and d.columne = ?2")
	List<Dvd> findDvdByRoweandColumne(Integer rowe, Integer columne);
}
