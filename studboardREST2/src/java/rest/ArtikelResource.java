/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;

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
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson() {
        //TODO return proper representation object
        //throw new UnsupportedOperationException();
        System.out.println(" - GET - ");
        return "Hello World!";
    }
    
    /**
     * PUT method for updating or creating an instance of ArtikelResource
     * @param content representation for the resource
     */
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void postJson(String content) {
        System.out.println(" - POST - ");
        System.out.println(content);
    }

    /**
     * PUT method for updating or creating an instance of ArtikelResource
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(String content) {
    }
}
