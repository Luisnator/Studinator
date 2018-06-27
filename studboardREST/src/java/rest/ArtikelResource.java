/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import database.DB_Manager;
import java.io.File;
import java.util.ArrayList;
import java.util.Date;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import resourcen.Artikel;
import resourcen.Aufgabe;
import resourcen.News;
import resourcen.Projekt;

/**
 * REST Web Service
 *
 * @author Phill
 */
@Path("Artikel")
public class ArtikelResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of ArtikelResource
     */
    public ArtikelResource() {
    }

    /**
     * Retrieves representation of an instance of rest.ArtikelResource
     *
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<Artikel> getJson() {
        //throw new UnsupportedOperationException();
        //initArtikel();
        News artikel0 = new News(7, "NewsNewsNewsNewsNews", "News0", "red", new Date(), new Date(), "Information", "www.no-source.de");
        Projekt artikel1 = new Projekt(8, "ProjektProjektProjektProjektProjekt", "Projekt0", "black", new Date(), new Date(), "Bernd", 2);
        Aufgabe artikel2 = new Aufgabe(9, "AufgabeAufgabeAufgabeAufgabeAufgabe", "Aufgabe0", "black", new Date(), new Date(), "Physik-basis");
        ArrayList<Artikel> list = new ArrayList();
        list.add(artikel0);
        list.add(artikel1);
        list.add(artikel2);
        
        /*JSONObject jo = new JSONObject();
        JSONArray ja = new JSONArray();
        String str = "";
        for (Artikel artikel : list) {
            JSONObject art = new JSONObject();
            art.put("id", artikel.getId());
            art.put("titel", artikel.getTitel());
            if(artikel.getInhalt().length() > 150){
                str = artikel.getInhalt().substring(0,150) + "...";
            }else{
                str = artikel.getInhalt();
            }
            art.put("beschreibung", str);
            ja.put(art);
        }
        jo.put("Liste", ja);
        
        Response.Status status = Response.Status.OK;
        ResponseBuilder rb = Response.status(status);
        rb.entity(jo.toString());*/
        return list;
    }

    /**
     * Retrieves representation of an instance of rest.ArtikelResource
     *
     * @return an instance of java.lang.String
     */
    @GET
    @Path("byId")
    @Produces(MediaType.APPLICATION_JSON)
    public News getJsonById(@QueryParam("id") int id) {
        //throw new UnsupportedOperationException();
        News artikel = new News(id, "NewsNewsNewsNewsNews", "News0", "red", new Date(), new Date(), "Information", "www.no-source.de");
        DB_Manager dbm = new DB_Manager();
        //dbm.connect();
        //dbm.addArtikel();
        //dbm.getArtikel();
        dbm.dosomething();
        return artikel;
    }
    
    /**
     * PUT method for updating or creating an instance of ArtikelResource
     *
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(String content) {
    }
    
    /**
     * POST method for updating or creating an instance of ArtikelResource
     *
     * @param content representation for the resource
     */
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void postJson(String content) {
        System.out.println(content);
    }

    public void initArtikel() {
        Aufgabe a = new Aufgabe(1, "AufgabeAufgabeAufgabeAufgabeAufgabe", "Aufgabe1", "blue", new Date(), new Date(), "Mateh2.0");
        News n = new News(2, "NewsNewsNewsNewsNews", "News1", "red", new Date(), new Date(), "Information", "www.somesource.com");
        Projekt p = new Projekt(3, "ProjektProjektProjektProjektProjekt", "Projekt1", "green", new Date(), new Date(), "Wilhelm", 0);
        ArrayList<Artikel> list = new ArrayList();
        list.add(a);
        list.add(n);
        list.add(p);

        for (Artikel artikel : list) {
            artikelToFile(artikel);
        }

    }

    public void artikelToFile(Artikel artikel) {
        try {
            File file = new File("C:\\Projects\\GitHub\\Studinator\\studboardREST\\xmlResources\\" + artikel.getTitel() + ".xml");
            JAXBContext jaxbContext = JAXBContext.newInstance(artikel.getClass());
            Marshaller jaxbMarshaller = jaxbContext.createMarshaller();

            jaxbMarshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);

            jaxbMarshaller.marshal(artikel, file);
            //jaxbMarshaller.marshal(artikel, System.out);
        } catch (JAXBException e) {
            e.printStackTrace();
        }
    }

}
