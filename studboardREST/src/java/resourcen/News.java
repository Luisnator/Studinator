/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package resourcen;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author Phill
 */
@Entity
//@Table(name = "news")
@XmlRootElement
public class News extends Artikel implements Serializable{
    
    @Column
    private String kategorie;
    @Column
    private String quelle;
    @Column
    private String className = "News";
    
    public News(){}
    
    public News(int id, String inhalt, String titel, String titelfarbe, Date start, Date ende, String kategorie, String quelle) {
        super(id, inhalt, titel, titelfarbe, start, ende);
        this.kategorie = kategorie;
        this.quelle = quelle;
    }

    public String getKategorie() {
        return kategorie;
    }

    public String getQuelle() {
        return quelle;
    }

    public void setKategorie(String kategorie) {
        this.kategorie = kategorie;
    }

    public void setQuelle(String quelle) {
        this.quelle = quelle;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }
    
}
