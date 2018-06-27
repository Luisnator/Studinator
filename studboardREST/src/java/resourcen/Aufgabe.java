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
//@Table(name = "aufgabe")
@XmlRootElement
public class Aufgabe extends Artikel implements Serializable{
    
    @Column
    private String fach;
    @Column
    private String className = "Aufgabe";
    
    public Aufgabe(){}
    
    public Aufgabe(int id, String inhalt, String titel, String titelfarbe, Date start, Date ende, String fach) {
        super(id, inhalt, titel, titelfarbe, start, ende);
        this.fach = fach;
    }

    public String getFach() {
        return fach;
    }

    public void setFach(String fach) {
        this.fach = fach;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }
    
}
