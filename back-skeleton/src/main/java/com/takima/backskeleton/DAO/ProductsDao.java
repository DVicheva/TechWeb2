package com.takima.backskeleton.DAO;

import com.takima.backskeleton.models.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ProductsDao extends JpaRepository<Products, Long> {

    @Query("SELECT prod FROM Products prod WHERE prod.name LIKE %:name%")
    List<Products> getProductsByName(String name);

}
