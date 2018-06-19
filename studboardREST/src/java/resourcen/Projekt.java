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
public class Projekt extends Artikel{
    
    private String professor;
    private int anzPlaetze;
    private String className = "Projekt";
    
    public Projekt(){}
    
    public Projekt(int id, String inhalt, String titel, String titelfarbe, Date start, Date ende, String professor, int anzPlaetze) {
        super(id, inhalt, titel, titelfarbe, start, ende);
        this.professor = professor;
        this.anzPlaetze = anzPlaetze;
    }

    public void setProfessor(String professor) {
        this.professor = professor;
    }

    public void setAnzPlaetze(int anzPlaetze) {
        this.anzPlaetze = anzPlaetze;
    }

    public String getProfessor() {
        return professor;
    }

    public int getAnzPlaetze() {
        return anzPlaetze;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }
    
}
