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
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;


/**
 *
 * @author Phill
 */
@Entity
@Table(name = "artikel")

@NamedQueries({
    @NamedQuery(name="Artikel.findall",
            query="SELECT a FROM artikel a"),
    @NamedQuery(name="Arikel.findById",
            query="SELECT a FROM artikel a WHERE a.id = :id")
})

@XmlRootElement
public class Artikel implements Serializable {
    
    @Id
    private int id;
    @Column
    private String inhalt;
    @Column
    private String titel;
    @Column
    private String titelfarbe;
    @Column
    private Date starts;
    @Column
    private Date endes;
    
    public Artikel(){}
    
    public Artikel(int id, String inhalt, String titel, String titelfarbe, Date starts, Date endes){
        this.id = id;
        this.inhalt = inhalt;
        this.titel = titel;
        this.titelfarbe = titelfarbe;
        this.starts = starts;
        this.endes = endes;
    }

    public String getInhalt() {
        return inhalt;
    }

    public String getTitel() {
        return titel;
    }

    public String getTitelfarbe() {
        return titelfarbe;
    }

    public Date getStarts() {
        return starts;
    }

    public Date getEndes() {
        return endes;
    }

    public void setInhalt(String inhalt) {
        this.inhalt = inhalt;
    }

    public void setTitel(String titel) {
        this.titel = titel;
    }

    public void setTitelfarbe(String titelfarbe) {
        this.titelfarbe = titelfarbe;
    }

    public void setStarts(Date start) {
        this.starts = start;
    }

    public void setEndes(Date ende) {
        this.endes = ende;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    
    
}

