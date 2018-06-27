/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package resourcen;

import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author Phill
 */
@XmlRootElement
public class Kommentar {
    
    private int id;
    private int bewertung;
    private String inhalt;
    private long article_id = 0;
    private String className = "Kommentar";
    
    public Kommentar(){}
    
    public Kommentar(String inhalt, int bewertung, int id){
        this.inhalt = inhalt;
        this.bewertung = bewertung;
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public int getBewertung() {
        return bewertung;
    }

    public String getInhalt() {
        return inhalt;
    }

    public long getArticle_id() {
        return article_id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setBewertung(int bewertung) {
        this.bewertung = bewertung;
    }

    public void setInhalt(String inhalt) {
        this.inhalt = inhalt;
    }

    public void setArticle_id(long article_id) {
        this.article_id = article_id;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }
    
}
