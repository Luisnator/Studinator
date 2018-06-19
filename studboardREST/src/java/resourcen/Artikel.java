/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package resourcen;

import java.util.Date;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author Phill
 */
@XmlRootElement
public class Artikel {
    
    private int id;
    private String inhalt;
    private String titel;
    private String titelfarbe;
    private Date start;
    private Date ende;
    
    public Artikel(){}
    
    public Artikel(int id, String inhalt, String titel, String titelfarbe, Date start, Date ende){
        this.id = id;
        this.inhalt = inhalt;
        this.titel = titel;
        this.titelfarbe = titelfarbe;
        this.start = start;
        this.ende = ende;
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

    public Date getStart() {
        return start;
    }

    public Date getEnde() {
        return ende;
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

    public void setStart(Date start) {
        this.start = start;
    }

    public void setEnde(Date ende) {
        this.ende = ende;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    
    
}

