/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import java.util.ArrayList;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import resourcen.Kommentar;

/**
 * REST Web Service
 *
 * @author Phill
 */
@Path("Kommentar")
public class KommentarResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of KommentarResource
     */
    public KommentarResource() {
    }

    /**
     * Retrieves representation of an instance of rest.KommentarResource
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<Kommentar> getJson() {
        Kommentar kom1 = new Kommentar("testtesttest", 3, 0);
        Kommentar kom2 = new Kommentar("inhaltinhaltinhalt", 2, 1);
        Kommentar kom3 = new Kommentar("texttexttext", 1, 2);
        ArrayList<Kommentar> list = new ArrayList();
        list.add(kom1);
        list.add(kom2);
        list.add(kom3);
        
        /*JSONObject jo = new JSONObject();
        JSONArray ja = new JSONArray();
        for (Kommentar kommentar : list) {
            JSONObject kom = new JSONObject();
            kom.put("id", kommentar.getId());
            kom.put("inhalt", kommentar.getInhalt());
        
            kom.put("bewertung", kommentar.getBewertung());
            ja.put(kom);
        }
        jo.put("Liste", ja);
        
        Response.Status status = Response.Status.OK;
        Response.ResponseBuilder rb = Response.status(status);
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
    public Kommentar getJsonById(@QueryParam("id") int id) {
        //throw new UnsupportedOperationException();
        Kommentar kom = new Kommentar("testtesttest", 3, id);
        return kom;
    }

    /**
     * PUT method for updating or creating an instance of KommentarResource
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
}
