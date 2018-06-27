/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Date;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.annotation.Resource;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.HeuristicMixedException;
import javax.transaction.HeuristicRollbackException;
import javax.transaction.NotSupportedException;
import javax.transaction.RollbackException;
import javax.transaction.SystemException;
import javax.transaction.UserTransaction;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import resourcen.Artikel;
import resourcen.News;

/**
 *
 * @author Phill
 */
public class DB_Manager {

    /*
private final String url = "jdbc:postgresql://localhost/dvdrental";
private final String user = "postgres";
private final String password = "<add your password>";
     */
    private final String url = "jdbc:postgresql://localhost/postgres";
    private final String user = "postgres";
    private final String password = "gogogadget";
    
    @PersistenceContext(unitName = "studboardRESTPU")
    private EntityManager em;
    
    @Resource
    private UserTransaction utx;
    
    public void dosomething(){
        Artikel a = new Artikel(0, "INHALTINHALTINHALTINHALTINHALT", "Title", "black", new Date(), new Date());
        try {
            this.utx.begin();
            this.em.persist(a);
            this.utx.commit();
        } catch (NotSupportedException ex) {
            ex.printStackTrace();
        } catch (SystemException ex) {
            ex.printStackTrace();
        } catch (RollbackException ex) {
            ex.printStackTrace();
        } catch (HeuristicMixedException ex) {
            ex.printStackTrace();
        } catch (HeuristicRollbackException ex) {
            ex.printStackTrace();
        } catch (SecurityException ex) {
            ex.printStackTrace();
        } catch (IllegalStateException ex) {
            ex.printStackTrace();
        }
        
    }
    public void dosomethingelse(){
        Query query = this.em.createNamedQuery("Artikel.findById", Artikel.class);
        query.setParameter("id", 0);
        Artikel a = (Artikel) query.getSingleResult();
    }
    
    /**
     * Connect to the PostgreSQL database
     *
     * @return a Connection object
     */
    public Connection connect() {
        Connection conn = null;
        /*try {
            Class.forName("com.example.jdbc.Driver");
        } catch (ClassNotFoundException ex) {
            ex.printStackTrace();
        }*/
        try {
            conn = DriverManager.getConnection(url, user, password);
            System.out.println("Connected to the PostgreSQL server successfully.");
            conn.close();
        } catch (SQLException e) {
            System.out.println("DB_Manager: " + e.getMessage());
        }
 
        return conn;
    }
    public void addArtikel(){
        //News n = new News(0, "NewsNewsNewsNewsNews", "News0", "red", new Date(), new Date(), "Information", "www.no-source.de");
        Artikel n = new Artikel(0, "INHALTINHALTINHALTINHALTINHALT", "Title", "black", new Date(), new Date());
        SessionFactory sf = HibernateUtil.getSessionFactory();
        Session sess = sf.openSession();
        Transaction trans = sess.beginTransaction();
        try {
            sess.save(n);
            trans.commit();
        } catch (HibernateException e) {
            e.printStackTrace();
            trans.rollback();
        }finally{
            sess.close();
        }
    }
    public void getArtikel(){
        Session sess = HibernateUtil.getSessionFactory().openSession();
        /*Artikel a = sess.find(Artikel.class, 0);
        System.out.println(a);
        System.out.println(a.getInhalt());*/
        Query q = sess.createNamedQuery("SELECT * FROM artikel");
        List list = q.getResultList();
        System.out.println(list.get(0));
    }
    
}
