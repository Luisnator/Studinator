/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package database;

import com.fasterxml.classmate.AnnotationConfiguration;
import org.hibernate.SessionFactory;
import org.hibernate.boot.Metadata;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import resourcen.Artikel;
import resourcen.Aufgabe;
import resourcen.News;
import resourcen.Projekt;

/**
 * Hibernate Utility class with a convenient method to get Session Factory
 * object.
 *
 * @author Phill
 */
public class HibernateUtil {

    private static SessionFactory sessionFactory = null;
    
    static {
        Configuration config = new Configuration();
        config.configure();
        StandardServiceRegistryBuilder builder = new StandardServiceRegistryBuilder();
        builder.applySettings(config.getProperties());
        MetadataSources metadataSources = new MetadataSources();
        metadataSources.addAnnotatedClass(Artikel.class);
        metadataSources.addAnnotatedClass(Aufgabe.class);
        metadataSources.addAnnotatedClass(News.class);
        metadataSources.addAnnotatedClass(Projekt.class);
        Metadata metadata = metadataSources.buildMetadata(builder.build());
        sessionFactory = metadata.buildSessionFactory();
    }
    
    public static SessionFactory getSessionFactory() {
        return sessionFactory;
    }
}
